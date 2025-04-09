import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold text-gray-800">
          Automated Onboarding Application
        </h1>
        <h2 className="text-2xl font-medium text-gray-600">
          Inspired by <span className="text-indigo-600">Bauer Automate</span>
        </h2>
        <p className="text-lg text-gray-700">
          Created with ❤️ by <span className="font-semibold">Harsingh</span>
        </p>
      </div>

      <div className="my-10">
        <Image
          src="/Animated Harsingh X Bauer Automate.png"
          alt="Harsingh Bauer Automate"
          width={500}
          height={500}
          className="rounded-lg shadow-xl"
        />
      </div>

      <div className="text-center">
        <p className="text-xl text-gray-600">
          Click on the <span className="font-bold text-indigo-600">Onboarding</span> button in the sidebar to get started!
        </p>
      </div>
    </div>
  );
}
