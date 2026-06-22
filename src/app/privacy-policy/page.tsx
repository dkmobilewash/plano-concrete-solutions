import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Plano Concrete Solutions",
  description:
    "Privacy policy for Plano Concrete Solutions. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://planoconcretesolutions.com/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-display text-4xl font-bold text-dark md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mb-6 text-sm text-mid">
          Last updated: January 1, 2025
        </p>

        <div className="space-y-6 text-mid leading-relaxed">
          <p>
            Plano Concrete Solutions (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the
            website planoconcretesolutions.com. This Privacy Policy explains how
            we collect, use, and protect the personal information you provide
            when you use our website or contact us through our online forms.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Information We Collect
          </h2>
          <p>
            When you submit our contact form or request a free estimate, we
            collect the following information: your full name, phone number,
            email address, the service area or neighborhood you are located in,
            the type of concrete service you need, a description of your
            project, and optionally how you heard about us. We do not collect
            any information beyond what you voluntarily provide through our
            forms.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            How We Use Your Information
          </h2>
          <p>
            The information you provide is used solely to respond to your
            inquiry, prepare an estimate for your concrete project, and
            communicate with you about the services you have requested. We may
            use your phone number or email address to follow up on your inquiry
            or provide updates about a scheduled project. We do not use your
            information for marketing purposes unless you have explicitly opted
            in to receive communications from us.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Information Sharing
          </h2>
          <p>
            We do not sell, trade, rent, or otherwise share your personal
            information with third parties. Your information is kept strictly
            between you and Plano Concrete Solutions. We may disclose your
            information only if required by law, such as in response to a court
            order or legal process.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Cookies and Tracking
          </h2>
          <p>
            Our website does not use cookies for tracking or advertising
            purposes. We may use basic analytics tools to understand how
            visitors use our website, such as which pages are visited most
            frequently. These analytics tools may collect anonymized data such
            as your browser type, device type, and general geographic region.
            No personally identifiable information is collected through
            analytics.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Data Security
          </h2>
          <p>
            We take reasonable measures to protect the personal information you
            provide from unauthorized access, disclosure, alteration, or
            destruction. Our website uses HTTPS encryption to protect data
            transmitted between your browser and our servers. However, no method
            of electronic transmission or storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Data Retention and Removal
          </h2>
          <p>
            We retain the information you submit through our contact form for as
            long as necessary to respond to your inquiry and complete any
            resulting project. If you would like us to delete your personal
            information from our records, you may contact us at
            info@planoconcretesolutions.com or call us at (214) 751-8014, and
            we will remove your information within 30 days.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Children&apos;s Privacy
          </h2>
          <p>
            Our website is not directed at individuals under the age of 18. We
            do not knowingly collect personal information from children. If you
            believe a child has provided us with personal information, please
            contact us and we will promptly delete it.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date. We
            encourage you to review this page periodically to stay informed
            about how we protect your information.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy or how we handle
            your personal information, please contact us:
          </p>
          <ul className="list-disc pl-6">
            <li>Email: info@planoconcretesolutions.com</li>
            <li>Phone: (214) 751-8014</li>
            <li>Location: Plano, TX</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
