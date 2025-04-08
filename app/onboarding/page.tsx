"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OnboardingPage() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    role: string;
    department: string;
    startDate: string;
    document: File | null;
  }>({
    name: "",
    email: "",
    role: "",
    department: "",
    startDate: "",
    document: null,
  });

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      let base64File = "";
      let fileName = "";

      if (formData.document) {
        const file = formData.document;
        fileName = file.name;
        const reader = new FileReader();
        const fileAsBase64 = await new Promise<string>((resolve, reject) => {
          reader.onloadend = () => {
            const base64 = (reader.result as string).split(",")[1];
            resolve(base64);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
        base64File = fileAsBase64;
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        role: formData.role,
        department: formData.department,
        startDate: formData.startDate,
        fileName: fileName,
        fileContent: base64File,
      };

      const response = await fetch(
        "https://prod-31.canadacentral.logic.azure.com:443/workflows/3945a5ba23c64a66b00620524df1b3b6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=3pJK6o7_Qr-YOm2lJYUuqXFNFpsO6PtUpsh_PzhPhgk",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      alert(result.message || "Submitted!");

      const fileUrl = `https://mysait.sharepoint.com/sites/Power-App${result.fileurl}`;

      if (result?.fileurl) {
        await fetch("/api/onboarding", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            role: formData.role,
            department: formData.department,
            startDate: formData.startDate,
            fileUrl,
          }),
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center font-semibold">
            Employee Onboarding
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { id: "name", label: "Full Name", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "role", label: "Role", type: "text" },
              { id: "department", label: "Department", type: "text" },
              { id: "startDate", label: "Start Date", type: "date" },
            ].map((field) => (
              <div key={field.id} className="grid gap-2">
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  name={field.id}
                  type={field.type}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <div className="grid gap-2">
              <Label htmlFor="document">Upload Document</Label>
              <Input
                id="document"
                name="document"
                type="file"
                accept=".pdf,.docx,.jpg,.png"
                onChange={handleChange}
              />
            </div>

            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
