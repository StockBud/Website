import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <h1 className="text-6xl font-bold text-accent md:text-8xl">404</h1>
      <p className="mt-4 text-xl text-foreground-muted md:text-2xl">
        Page not found
      </p>
      <p className="mt-2 max-w-md text-base text-foreground-subtle">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Button as="a" href="/" className="mt-8">
        Back to Home
      </Button>
    </div>
  );
}
