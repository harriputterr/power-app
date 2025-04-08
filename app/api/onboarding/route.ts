import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Employee from "@/models/Employee";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();

    
    const {
      name,
      email,
      role,
      department,
      startDate,
      fileUrl, // ✅ already coming from the frontend
    } = body;

    const newEmployee = new Employee({
      name,
      email,
      role,
      department,
      startDate,
      fileUrl,
    });

    console.log(newEmployee)
    await newEmployee.save();

    return NextResponse.json({
      message: "Employee saved to MongoDB successfully!",
      success: true,
    });
  } catch (error) {
    console.error("Error in onboarding route:", error);
    return NextResponse.json(
      { message: "Error saving employee", success: false },
      { status: 500 }
    );
  }
}
