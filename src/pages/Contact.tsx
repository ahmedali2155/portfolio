import { SEO } from "@/components/common/SEO";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Ahmed Ali for internships, roles, or freelance projects."
        path="/contact"
      />
      <div className="pt-24 md:pt-32">
        <ContactSection />
      </div>
    </>
  );
}
