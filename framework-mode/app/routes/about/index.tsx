import type { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About" },
    { name: "description", content: "About page here" },
  ];
}

export default function About() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Welcome to the About page!
          </p>
        </header>
      </div>
    </main>
  );
}