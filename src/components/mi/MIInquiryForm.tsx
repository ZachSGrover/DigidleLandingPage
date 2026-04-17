import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

export type InquiryFormValues = {
  name: string;
  businessName: string;
  email: string;
  instagramOrWebsite: string;
  describesYou: string;
  lookingForHelp: string;
  buildOrSolve: string;
  agencyTalentOrBoth: string;
  anythingElse: string;
};

const defaultValues: InquiryFormValues = {
  name: "",
  businessName: "",
  email: "",
  instagramOrWebsite: "",
  describesYou: "",
  lookingForHelp: "",
  buildOrSolve: "",
  agencyTalentOrBoth: "",
  anythingElse: "",
};

function buildPayload(data: InquiryFormValues) {
  return {
    ...data,
    form: "digidle_home_inquiry",
    submittedAt: new Date().toISOString(),
    pageUrl: typeof window !== "undefined" ? window.location.href : "",
  };
}

export function MIInquiryForm() {
  const form = useForm<InquiryFormValues>({ defaultValues, mode: "onBlur" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  async function onSubmit(data: InquiryFormValues) {
    const url = import.meta.env.WEBHOOK_URL?.trim();
    if (!url) {
      toast.error("Webhook not configured", { description: "Set WEBHOOK_URL (or VITE_WEBHOOK_URL) in the environment." });
      return;
    }

    const payload = buildPayload(data);
    setIsSubmitting(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const errBody = await res.text().catch(() => "");
        throw new Error(errBody || `${res.status} ${res.statusText}`);
      }
      toast.success("Thanks — we received your details.", {
        description: "We’ll review and point you in the right direction.",
      });
      const lines = [
        `Name: ${data.name}`,
        `Business / Brand: ${data.businessName}`,
        `Email: ${data.email}`,
        `Instagram / Website: ${data.instagramOrWebsite}`,
        `What best describes you?: ${data.describesYou}`,
        `What are you looking for help with?: ${data.lookingForHelp}`,
        `What are you trying to build or solve?: ${data.buildOrSolve}`,
        `Agency help, talent, or both?: ${data.agencyTalentOrBoth}`,
        `Anything else: ${data.anythingElse}`,
      ].join("\n");
      void navigator.clipboard?.writeText(lines).catch(() => undefined);
      form.reset();
      setStep(1);
    } catch (e) {
      const message = e instanceof Error ? e.message : "Something went wrong.";
      toast.error("Couldn’t send your inquiry", { description: message });
      console.error("[Digidle inquiry webhook]", e);
    } finally {
      setIsSubmitting(false);
    }
  }

  const nextStep = async () => {
    let fieldsToValidate: (keyof InquiryFormValues)[] = [];
    if (step === 1) {
      fieldsToValidate = ["name", "email"];
    } else if (step === 2) {
      // No required fields in step 2 based on current rules, but we validate for UX
      fieldsToValidate = ["describesYou", "lookingForHelp"];
    }

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setStep((s) => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <section className="scroll-mt-20 border-t border-white/10 bg-transparent py-24" id="contact">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-3xl font-medium tracking-tight text-white md:text-4xl">Tell Us What You&apos;re Looking For</h2>
          <p className="text-sm leading-relaxed text-gray-400 md:text-base">
            Whether you need help scaling a brand, building systems, hiring talent, or figuring out the right next move.
          </p>
        </div>

        <div className="mb-8 flex justify-center gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "h-1 w-12 rounded-full transition-all duration-300",
                step >= i ? "bg-emerald-500" : "bg-white/10"
              )}
            />
          ))}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a]/60 p-6 backdrop-blur-md md:p-8">
            {/* Step 1: Basic Info */}
            <div className={cn("space-y-6 transition-all duration-300", step === 1 ? "relative opacity-100" : "absolute inset-0 -translate-x-full opacity-0 pointer-events-none")}>
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Step 1 of 3</span>
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
              </div>
              
              <FormField
                control={form.control}
                name="name"
                rules={{ required: "Name is required" }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your name"
                        className="border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="businessName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Business / Brand Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Company or brand"
                        className="border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{
                  required: "Email is required",
                  pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="you@example.com"
                        className="border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="instagramOrWebsite"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Instagram / Website</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="@handle or https://"
                        className="border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button type="button" onClick={nextStep} className="w-full bg-emerald-500 text-black hover:bg-emerald-400">
                Next Step
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Step 2: Details */}
            <div className={cn("space-y-6 transition-all duration-300", step === 2 ? "relative opacity-100" : cn("absolute inset-0 opacity-0 pointer-events-none", step < 2 ? "translate-x-full" : "-translate-x-full"))}>
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Step 2 of 3</span>
                <h3 className="text-lg font-medium text-white">Your Needs</h3>
              </div>

              <FormField
                control={form.control}
                name="describesYou"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">What best describes you?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g. creator, coach, brand owner…"
                        className="min-h-[100px] border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lookingForHelp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">What are you looking for help with?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Systems, content, ads, talent…"
                        className="min-h-[100px] border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={prevStep} className="flex-1 border-white/10 bg-transparent text-white hover:bg-white/5">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="button" onClick={nextStep} className="flex-[2] bg-emerald-500 text-black hover:bg-emerald-400">
                  Next Step
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Step 3: Final Details */}
            <div className={cn("space-y-6 transition-all duration-300", step === 3 ? "relative opacity-100" : "absolute inset-0 translate-x-full opacity-0 pointer-events-none")}>
              <div className="mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">Step 3 of 3</span>
                <h3 className="text-lg font-medium text-white">Final Details</h3>
              </div>

              <FormField
                control={form.control}
                name="buildOrSolve"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">What are you trying to build or solve right now?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Short context helps us route you faster."
                        className="min-h-[100px] border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agencyTalentOrBoth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Are you looking for agency help, talent, or both?</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-white/10 bg-black/40 text-white focus:ring-emerald-500/50">
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="border-white/10 bg-[#141414] text-white">
                        <SelectItem value="agency">Agency help</SelectItem>
                        <SelectItem value="talent">Talent</SelectItem>
                        <SelectItem value="both">Both</SelectItem>
                        <SelectItem value="unsure">Not sure yet</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="anythingElse"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-300">Anything else we should know?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Optional"
                        className="min-h-[88px] border-white/10 bg-black/40 text-white placeholder:text-gray-600 focus:border-emerald-500/50"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-3">
                <Button type="button" variant="outline" onClick={prevStep} className="flex-1 border-white/10 bg-transparent text-white hover:bg-white/5" disabled={isSubmitting}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                <Button type="submit" disabled={isSubmitting} className="flex-[2] bg-emerald-500 text-black hover:bg-emerald-400 disabled:opacity-60">
                  {isSubmitting ? "Sending…" : (
                    <>
                      Submit Inquiry
                      <Check className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </div>
            
            <p className="mt-6 text-center text-[11px] text-gray-500">
              Submissions are sent securely to our systems. On success, a plain-text copy is saved to your clipboard as a backup.
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
}
