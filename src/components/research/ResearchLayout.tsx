import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ResearchSidebar } from "./ResearchSidebar";

interface ResearchLayoutProps {
  children: ReactNode;
}

export function ResearchLayout({
  children,
}: ResearchLayoutProps) {
  return (
    <Container className="py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28">
            <ResearchSidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="min-w-0 space-y-10">
          {children}
        </main>
      </div>
    </Container>
  );
}