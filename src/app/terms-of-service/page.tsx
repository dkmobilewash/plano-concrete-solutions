import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Plano Concrete Solutions",
  description:
    "Terms of service for the Plano Concrete Solutions website. Read our terms governing use of planoconcretesolutions.com.",
  alternates: {
    canonical: "https://planoconcretesolutions.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-8 font-display text-4xl font-bold text-dark md:text-5xl">
          Terms of Service
        </h1>
        <p className="mb-6 text-sm text-mid">
          Last updated: January 1, 2025
        </p>

        <div className="space-y-6 text-mid leading-relaxed">
          <p>
            Welcome to planoconcretesolutions.com, the website of Plano
            Concrete Solutions. By accessing and using this website, you agree
            to be bound by the following Terms of Service. If you do not agree
            with these terms, please do not use this website.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Use of This Website
          </h2>
          <p>
            This website is provided for informational purposes about the
            concrete services offered by Plano Concrete Solutions in Plano,
            Texas and surrounding areas. You may browse the website, submit
            inquiries through our contact form, and view our project gallery.
            You agree not to use this website for any unlawful purpose or in
            any way that could damage, disable, or impair the website or
            interfere with any other party&apos;s use of the website.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Website Content
          </h2>
          <p>
            The content on this website — including text, images, service
            descriptions, and project photos — is provided for general
            informational purposes only. While we make reasonable efforts to
            keep the information accurate and up to date, we do not warrant
            or guarantee the accuracy, completeness, or reliability of any
            content on this website. Service descriptions, process overviews,
            and frequently asked questions are general in nature and may not
            reflect the specific requirements of your project.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            No Warranty
          </h2>
          <p>
            This website and its content are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind, either express or
            implied. Plano Concrete Solutions disclaims all warranties,
            including but not limited to implied warranties of merchantability,
            fitness for a particular purpose, and non-infringement. We do not
            warrant that the website will be uninterrupted, error-free, or
            free of viruses or other harmful components.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by applicable law, Plano Concrete
            Solutions and its owners, employees, and contractors shall not be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising out of your access to or use of this
            website. This limitation applies regardless of the legal theory
            on which the claim is based, including negligence, contract, or
            strict liability.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Third-Party Links
          </h2>
          <p>
            This website may contain links to third-party websites or services
            that are not owned or controlled by Plano Concrete Solutions. We
            have no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party websites. Your
            use of any third-party website is at your own risk.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Intellectual Property
          </h2>
          <p>
            All content on this website, including text, graphics, logos,
            images, and the design and arrangement thereof, is the property of
            Plano Concrete Solutions and is protected by applicable copyright
            and trademark laws. You may not reproduce, distribute, or create
            derivative works from any content on this website without our
            prior written consent.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Governing Law
          </h2>
          <p>
            These Terms of Service are governed by and construed in accordance
            with the laws of the State of Texas, without regard to its conflict
            of law provisions. Any dispute arising from these terms or your
            use of this website shall be resolved exclusively in the state or
            federal courts located in Collin County, Texas.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Changes to These Terms
          </h2>
          <p>
            We reserve the right to modify these Terms of Service at any time.
            Changes will be posted on this page with an updated revision date.
            Your continued use of the website after any changes constitutes
            your acceptance of the revised terms.
          </p>

          <h2 className="font-display text-2xl font-semibold text-dark">
            Contact Us
          </h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us at info@planoconcretesolutions.com or call
            (214) 751-8014.
          </p>
        </div>
      </div>
    </div>
  );
}
