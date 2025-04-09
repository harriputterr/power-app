"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        About This Project
      </h1>

      {/* Top - Technologies Used as Icons */}
      <section className="grid grid-cols-3 md:grid-cols-6 gap-6 justify-items-center">
        <Image src="/logos/nextjs.svg" alt="Next.js" width={50} height={50} />
        <Image
          src="/logos/tailwindcss.png"
          alt="Tailwind CSS"
          width={70}
          height={70}
        />
        <Image
          src="/logos/mongodb.png"
          alt="MongoDB"
          width={200}
          height={200}
        />
        <Image
          src="/logos/power-automate.png"
          alt="Power Automate"
          width={50}
          height={50}
        />
        <Image
          src="/logos/sharepoint.png"
          alt="SharePoint"
          width={50}
          height={50}
        />
        <Image
          src="/logos/power-bi.png"
          alt="Power BI"
          width={50}
          height={50}
        />
      </section>


      {/* Middle - Workflow + Integration Screenshots */}
      <section className="space-y-6">
        <div className="flex justify-center">
          <Image
            src="/power-automation-workflow.jpg"
            alt="Power Automate Workflow"
            width={800}
            height={800}
            className="rounded border shadow"
          />
        </div>
        <div className="aspect-video rounded overflow-hidden shadow border mx-auto w-full max-w-3xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Z-JFq0uoLM4"
            title="YouTube Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}
