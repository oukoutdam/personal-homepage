import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "Error 404",
}

export default function NotFound(): React.ReactNode {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        404 - Page Not Found
      </h1>
      <p className="mb-4">
        Oops! The page you are looking for does not seem to exist.
      </p>
    </section>
  );
}