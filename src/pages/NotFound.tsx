import { Home } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[70vh] items-center pt-20">
        <Container className="text-center">
          <p className="font-heading text-h1 font-bold text-gradient">404</p>
          <h1 className="mt-4 font-heading text-h4 font-semibold text-text-primary">
            This page doesn't exist
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-text-muted">
            The page you're looking for may have been moved or never existed. Let's get you back on track.
          </p>
          <Button as="a" href="/" className="mt-8">
            <Home size={16} /> Return Home
          </Button>
        </Container>
      </section>
    </>
  );
}
