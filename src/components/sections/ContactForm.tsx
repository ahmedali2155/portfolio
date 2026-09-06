import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onValid = async (data: FormData) => {
    setStatus("idle");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full rounded-input border border-border-subtle bg-bg-secondary px-4 py-3 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-blue focus:outline-none";

  return (
    <form onSubmit={handleSubmit(onValid)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-text-secondary"
          >
            Name
          </label>

          <input
            id="name"
            className={cn(inputClasses, errors.name && "border-state-danger")}
            placeholder="Your name"
            aria-invalid={!!errors.name}
            {...register("name", {
              required: "Please enter your name",
            })}
          />

          {errors.name && (
            <p className="mt-1.5 text-xs text-state-danger">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-text-secondary"
          >
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
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
          />

          {errors.email && (
            <p className="mt-1.5 text-xs text-state-danger">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Subject
        </label>

        <input
          id="subject"
          className={cn(inputClasses, errors.subject && "border-state-danger")}
          placeholder="What's this about?"
          aria-invalid={!!errors.subject}
          {...register("subject", {
            required: "Please add a subject",
          })}
        />

        {errors.subject && (
          <p className="mt-1.5 text-xs text-state-danger">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-text-secondary"
        >
          Message
        </label>

        <textarea
          id="message"
          rows={5}
          className={cn(
            inputClasses,
            "resize-none",
            errors.message && "border-state-danger"
          )}
          placeholder="Tell me a bit about the opportunity or project..."
          aria-invalid={!!errors.message}
          {...register("message", {
            required: "Please write a message",
            maxLength: {
              value: 2000,
              message: "Message is too long",
            },
          })}
        />

        {errors.message && (
          <p className="mt-1.5 text-xs text-state-danger">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        {!isSubmitting && <Send size={16} />}
      </Button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-state-success">
          <CheckCircle2 size={16} />
          Message sent successfully! I'll get back to you as soon as possible.
        </p>
      )}

      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-state-danger">
          <AlertCircle size={16} />
          Failed to send message. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}