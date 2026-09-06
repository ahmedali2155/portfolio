import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Contact form UI + client-side validation, ready to wire to a real
 * submission endpoint. Currently simulates a submission — to send real
 * emails, plug a provider (e.g. Formspree or EmailJS) into onValid below
 * and drop the endpoint/public key into a .env file.
 */
export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onValid = async (_data: FormData) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-input border border-border-subtle bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-blue focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onValid)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-secondary">
            Name
          </label>
          <input
            id="name"
            className={cn(inputClasses, errors.name && "border-state-danger")}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <p className="mt-1.5 text-xs text-state-danger">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-secondary">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={cn(inputClasses, errors.email && "border-state-danger")}
            placeholder="you@example.com"
            aria-invalid={!!errors.email}
            {...register("email", {
              required: "Please enter your email",
              pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
            })}
          />
          {errors.email && <p className="mt-1.5 text-xs text-state-danger">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-text-secondary">
          Subject
        </label>
        <input
          id="subject"
          className={cn(inputClasses, errors.subject && "border-state-danger")}
          placeholder="What's this about?"
          aria-invalid={!!errors.subject}
          {...register("subject", { required: "Please add a subject" })}
        />
        {errors.subject && <p className="mt-1.5 text-xs text-state-danger">{errors.subject.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClasses, "resize-none", errors.message && "border-state-danger")}
          placeholder="Tell me a bit about the opportunity or project..."
          aria-invalid={!!errors.message}
          {...register("message", {
            required: "Please write a message",
            maxLength: { value: 2000, message: "Message is too long" },
          })}
        />
        {errors.message && <p className="mt-1.5 text-xs text-state-danger">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send size={16} />}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-state-success">
          <CheckCircle2 size={16} /> Message sent — I'll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-state-danger">
          <AlertCircle size={16} /> Something went wrong. Please try emailing me directly.
        </p>
      )}
    </form>
  );
}
