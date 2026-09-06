import { hasValue } from "@/lib/utils";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import type { Certification } from "@/types";

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <Card>
      <h3 className="font-heading text-h5 font-semibold text-text-primary">{cert.title}</h3>
      <p className="mt-1 text-sm text-text-muted">
        {cert.provider} &middot; {cert.year}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">{cert.description}</p>
      {hasValue(cert.credentialUrl) && (
        <Button as="a" href={cert.credentialUrl} target="_blank" rel="noreferrer" variant="text" className="mt-4">
          Verify Credential
        </Button>
      )}
    </Card>
  );
}
