'use client';

import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const navItems = [
  {
    name: "Onboarding",
    href: "/onboarding",
    message: "File is stored in SharePoint, employee data in MongoDB, and a welcome email is sent via Outlook — all automated using Power Automate."
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    message: "Interactive Power BI dashboard showing onboarding insights powered by real-time MongoDB data."
  },
  {
    name: "Admin",
    href: "/admin",
    message: "Admin can view all onboarded employees fetched live from MongoDB storage."
  },
  {
    name: "About This Project",
    href: "/aboutProject",
    message: "Here I have explained the underlying technologies and integrations in this project"
  }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const current = navItems.find((item) => item.href === pathname);

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r shadow-sm">
          <div className="p-6 border-b">
            <h1 className="text-2xl font-bold">Bauer Automate</h1>
          </div>
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-800 transition"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-50 p-8 overflow-auto relative">
          {children}

          {/* Robot Assistant with Conversation Cloud */}
          <div className="fixed bottom-4 left-4 flex items-end space-x-2">
            <Image
              src="/Bauer Automate Vritual Assitant Robot.png"
              alt="Robot"
              width={240}
              height={240}
              className="relative"
            />
            <div className="relative bg-white border shadow-lg rounded-lg px-4 py-2 max-w-xs before:absolute before:-left-2 before:bottom-2 before:w-0 before:h-0 before:border-8 before:border-transparent before:border-r-white">
              <p className="text-sm text-gray-700">
                {current?.message || "Hi! I'm your Bauer Bot. How can I help today?"}
              </p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
