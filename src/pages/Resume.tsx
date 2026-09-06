import { Download, FileText } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Resume() {
  return (
    <>
      <SEO title="Resume" description="Download Ahmed Ali's resume." path="/resume" />
      <section className="pt-32 pb-20 md:pt-40">
        <Container>
          <SectionHeader
            eyebrow="Resume"
            title="My resume"
            description={`Last updated ${profile.resumeUpdated}. Download the latest PDF or preview it below.`}
          />

          <div className="mb-8 flex flex-wrap gap-4">
            <Button as="a" href={profile.resumeUrl} download>
              <Download size={16} /> Download Resume
            </Button>
            <Button as="a" href={profile.resumeUrl} target="_blank" rel="noreferrer" variant="secondary">
              <FileText size={16} /> Open in New Tab
            </Button>
          </div>

          <div className="overflow-hidden rounded-card border border-border-subtle bg-surface-card">
            <iframe
              src={profile.resumeUrl}
              title="Ahmed Ali Resume"
              className="h-[720px] w-full"
            />
          </div>

          {/* <p className="mt-4 text-xs text-text-muted">
            To update this page, replace <code className="font-mono">public/resume.pdf</code> with your
            finished resume — no code changes required.
          </p> */}
        </Container>
      </section>
    </>
  );
}
