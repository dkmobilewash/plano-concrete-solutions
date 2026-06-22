"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import type { ContactFormData } from "@/types";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(
      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/,
      "Please enter a valid phone number"
    ),
  email: z.string().email("Please enter a valid email address"),
  serviceArea: z.string().min(1, "Please select a service area"),
  serviceNeeded: z.string().min(1, "Please select a service"),
  description: z
    .string()
    .min(20, "Please provide at least 20 characters about your project"),
  hearAboutUs: z.string().optional(),
});

const SERVICE_AREAS = [
  "West Plano",
  "East Plano",
  "North Plano",
  "Downtown Plano",
  "Legacy West",
  "Willow Bend",
  "Deerfield",
  "Preston Meadow",
  "Other Plano Area",
];

const SERVICES = [
  "Driveway",
  "Patio",
  "Pool Deck",
  "Block Wall",
  "Foundation/Slab",
  "Commercial",
  "Other",
];

const HEAR_ABOUT_US_OPTIONS = [
  "Google",
  "Facebook",
  "Referral",
  "Yard Sign",
  "Other",
];

interface ContactFormProps {
  preselectedArea?: string;
}

const inputClasses =
  "border border-border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-accent focus:border-accent outline-none font-body text-dark";

const selectClasses =
  "border border-border rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-accent focus:border-accent outline-none font-body text-dark appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23808080%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat";

export default function ContactForm({ preselectedArea }: ContactFormProps) {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      serviceArea: preselectedArea ?? "",
      serviceNeeded: "",
      description: "",
      hearAboutUs: "",
    },
  });

  async function onSubmit(data: ContactFormData) {
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block font-display text-sm text-dark mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="John Smith"
          className={inputClasses}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block font-display text-sm text-dark mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="(972) 555-1234"
          className={inputClasses}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block font-display text-sm text-dark mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="john@example.com"
          className={inputClasses}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="serviceArea" className="block font-display text-sm text-dark mb-1">
          Service Area / Neighborhood <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceArea"
          className={selectClasses}
          {...register("serviceArea")}
        >
          <option value="">Select your area</option>
          {SERVICE_AREAS.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
        {errors.serviceArea && (
          <p className="text-red-500 text-sm mt-1">
            {errors.serviceArea.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviceNeeded" className="block font-display text-sm text-dark mb-1">
          Service Needed <span className="text-red-500">*</span>
        </label>
        <select
          id="serviceNeeded"
          className={selectClasses}
          {...register("serviceNeeded")}
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceNeeded && (
          <p className="text-red-500 text-sm mt-1">
            {errors.serviceNeeded.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="description" className="block font-display text-sm text-dark mb-1">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={5}
          placeholder="Tell us about your project, including approximate size, current condition, and any specific requirements..."
          className={inputClasses}
          {...register("description")}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="hearAboutUs" className="block font-display text-sm text-dark mb-1">
          How did you hear about us?
        </label>
        <select
          id="hearAboutUs"
          className={selectClasses}
          {...register("hearAboutUs")}
        >
          <option value="">Select an option</option>
          {HEAR_ABOUT_US_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent text-white font-display font-semibold rounded-lg px-6 py-4 text-lg hover:bg-accent-dark transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[44px] cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          "Send My Request"
        )}
      </button>

      {submitStatus === "success" && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800 text-sm">
          Thank you! We'll be in touch within 1 business day.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800 text-sm">
          Something went wrong. Please try again or call us directly.
        </div>
      )}
    </form>
  );
}
