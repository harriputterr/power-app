import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <Card className="shadow-lg border">
        <CardHeader>
          <CardTitle className="text-2xl text-center">
            Bauer Automate Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            title="Bauer-Automate-Onboard-PowerBI"
            width="100%"
            height="800"
            src="https://app.powerbi.com/view?r=eyJrIjoiMTRjMjg1MjAtZmE5My00ODFmLWI0Y2YtY2M0NjJkMjIwNDdkIiwidCI6ImY1MmYyMTgzLTlmNjctNGFkMi1iNjU2LTZmNzU0ZmUxOTZjYiIsImMiOjZ9"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </CardContent>
      </Card>
    </div>
  );
}
