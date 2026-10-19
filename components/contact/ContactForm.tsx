"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import confetti from "canvas-confetti";
import {
  Loader2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/shared/WhatsAppIcon";

const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (minimum 2 characters)."),
  mobileNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit mobile number.")
    .regex(/^[0-9+\s\-()]{10,15}$/, "Please enter a valid phone number."),
  email: z
    .string()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  companyName: z.string().optional(),
  productOrSolution: z.string().min(1, "Please select a product or solution."),
  enquiryType: z.string().min(1, "Please select an enquiry type."),
  location: z.string().optional(),
  message: z
    .string()
    .min(10, "Please provide more details (minimum 10 characters)."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormProps {
  initialSubject?: string;
}

export function ContactForm({ initialSubject }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "success">("idle");
  const [submittedWhatsAppUrl, setSubmittedWhatsAppUrl] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      email: "",
      companyName: "",
      productOrSolution: initialSubject || "Commercial RO System",
      enquiryType: "New Installation",
      location: "",
      message: initialSubject
        ? `Hello, I am interested in exploring ${initialSubject} for our requirements. Please share details.`
        : "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);

    // Build comprehensive WhatsApp message with all user details
    const message = `*New Water Treatment Enquiry - Amra Water Solution*
━━━━━━━━━━━━━━━━━━━━
👤 *Name:* ${data.fullName}
📞 *Mobile:* ${data.mobileNumber}${data.email ? `\n✉️ *Email:* ${data.email}` : ""}${data.companyName ? `\n🏢 *Company:* ${data.companyName}` : ""}${data.location ? `\n📍 *Location:* ${data.location}` : ""}
💧 *Requirement:* ${data.productOrSolution}
📋 *Enquiry Type:* ${data.enquiryType}

💬 *Message:*
${data.message}`;

    const url = getWhatsAppUrl(message);
    setSubmittedWhatsAppUrl(url);
    setSubmissionStatus("success");

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // ignore confetti errors
    }

    // Direct redirect / open WhatsApp
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }

    reset();
    setIsSubmitting(false);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-50 text-sky-700 border border-sky-200 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          <span>Quick Response Form</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Request a Water Treatment Proposal
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Fill in your details below and our technical team will review your requirement.
        </p>
      </div>

      {/* Success Notification */}
      {submissionStatus === "success" && (
        <div
          role="alert"
          className="mb-8 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3.5 animate-in fade-in duration-300"
        >
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="font-bold text-base">Enquiry Sent to WhatsApp!</h4>
            <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed">
              Your water treatment requirements have been formatted for WhatsApp. If WhatsApp didn&apos;t open automatically, please click below to connect with our engineering team:
            </p>
            {submittedWhatsAppUrl && (
              <div className="pt-1">
                <a
                  href={submittedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs sm:text-sm bg-[#25D366] text-white hover:bg-[#20ba59] transition-colors shadow-sm"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-white text-white" />
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Form Fields */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
        {/* Name & Phone Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              {...register("fullName")}
              placeholder="e.g. Ramesh Kumar"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-400/30"
                  : "border-slate-200 focus:border-sky-500 focus:ring-sky-500/20"
              }`}
            />
            {errors.fullName && (
              <p className="text-xs text-red-600 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="space-y-1.5">
            <label
              htmlFor="mobileNumber"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              id="mobileNumber"
              type="tel"
              {...register("mobileNumber")}
              placeholder="e.g. 9876543210"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.mobileNumber
                  ? "border-red-500 focus:ring-red-400/30"
                  : "border-slate-200 focus:border-sky-500 focus:ring-sky-500/20"
              }`}
            />
            {errors.mobileNumber && (
              <p className="text-xs text-red-600 font-medium">
                {errors.mobileNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* Email & Company Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              placeholder="e.g. name@company.com"
              className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? "border-red-500 focus:ring-red-400/30"
                  : "border-slate-200 focus:border-sky-500 focus:ring-sky-500/20"
              }`}
            />
            {errors.email && (
              <p className="text-xs text-red-600 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Company Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="companyName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Company / Institution <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="companyName"
              type="text"
              {...register("companyName")}
              placeholder="e.g. Grand Horizon Resort"
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
            />
          </div>
        </div>

        {/* Product Interest & Enquiry Type Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Product of Interest */}
          <div className="space-y-1.5">
            <label
              htmlFor="productOrSolution"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Product or Solution <span className="text-red-500">*</span>
            </label>
            <select
              id="productOrSolution"
              {...register("productOrSolution")}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
            >
              <option value="Commercial RO System">Commercial RO System</option>
              <option value="Domestic RO Water Purifier">Domestic RO Water Purifier</option>
              <option value="Industrial RO Plant">Industrial RO Plant</option>
              <option value="Water Softener System">Water Softener System</option>
              <option value="STP Sewage Treatment Plant">STP Sewage Treatment Plant</option>
              <option value="ETP Effluent Treatment Plant">ETP Effluent Treatment Plant</option>
              <option value="Iron Removal Filter">Iron Removal Filter</option>
              <option value="Water Testing Lab Work">Water Testing Lab Work</option>
              <option value="PCB Consultancy Work">PCB Consultancy Work</option>
              <option value="Annual Maintenance (AMC)">Annual Maintenance (AMC)</option>
              <option value="General Enquiry">Other / General Enquiry</option>
            </select>
            {errors.productOrSolution && (
              <p className="text-xs text-red-600 font-medium">
                {errors.productOrSolution.message}
              </p>
            )}
          </div>

          {/* Enquiry Type */}
          <div className="space-y-1.5">
            <label
              htmlFor="enquiryType"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700"
            >
              Enquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="enquiryType"
              {...register("enquiryType")}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
            >
              <option value="New Installation">New Installation</option>
              <option value="System Upgrade / Replacement">System Upgrade / Replacement</option>
              <option value="Water Testing & Feasibility">Water Testing & Feasibility</option>
              <option value="Service & Maintenance (AMC)">Service & Maintenance (AMC)</option>
              <option value="Regulatory PCB Compliance">Regulatory PCB Compliance</option>
              <option value="Pricing / Quotation Request">Pricing / Quotation Request</option>
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-1.5">
          <label
            htmlFor="location"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Site Location / City <span className="text-slate-400 font-normal lowercase">(optional)</span>
          </label>
          <input
            id="location"
            type="text"
            {...register("location")}
            placeholder="e.g. Vaikom, Kottayam, Kochi, Kozhikode..."
            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all"
          />
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700"
          >
            Message & Water Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            {...register("message")}
            placeholder="Please share details such as water source (well, borewell, municipal), known water issues (hardness, taste, smell, iron), and required capacity..."
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? "border-red-500 focus:ring-red-400/30"
                : "border-slate-200 focus:border-sky-500 focus:ring-sky-500/20"
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-600 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-600/25 disabled:opacity-70 transition-all cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Redirecting to WhatsApp...</span>
              </>
            ) : (
              <>
                <WhatsAppIcon className="w-5 h-5 fill-white text-white" />
                <span>Submit &amp; Connect on WhatsApp</span>
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-slate-400 text-center">
          We respect your privacy. Your information is used strictly to provide you with water treatment proposals.
        </p>
      </form>
    </div>
  );
}
