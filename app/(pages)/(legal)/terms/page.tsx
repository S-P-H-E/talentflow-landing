import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of Talentflow.",
};

export default function Terms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">Terms of Service</h1>
      <p className="text-[var(--description)] text-center mt-3">Last updated: {new Date().getFullYear()}</p>

      <section className="mt-12 space-y-4 text-base leading-7">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of
          Talentflow (the &quot;Service&quot;). By accessing or using the Service, you agree
          to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-10">1. Use of the Service</h2>
        <p>
          You may use the Service only in compliance with these Terms and all
          applicable laws. You are responsible for any activity that occurs under
          your account.
        </p>

        <h2 className="text-xl font-semibold mt-10">2. Accounts and Security</h2>
        <p>
          You must provide accurate information and keep your account secure. Notify
          us immediately of any unauthorized use of your account.
        </p>

        <h2 className="text-xl font-semibold mt-10">3. Subscription and Billing</h2>
        <p>
          Talentflow is offered on a subscription basis at $29 per month, with a 30
          day free trial. At the end of the trial, your subscription will begin
          automatically unless canceled. Taxes may apply.
        </p>

        <h2 className="text-xl font-semibold mt-10">4. Refund Policy</h2>
        <p>
          We offer a 30-day free trial to help you evaluate the Service. If you are
          billed and believe there has been an error, contact us within 7 days of
          the charge and we will review your request. Approved refunds will be
          issued to the original payment method. Subscriptions canceled after the
          billing period begins are not eligible for prorated refunds.
        </p>

        <h2 className="text-xl font-semibold mt-10">5. Acceptable Use</h2>
        <p>
          You agree not to misuse the Service, including by attempting to access it
          using automated or unauthorized means, interfering with its operation, or
          violating the rights of others.
        </p>

        <h2 className="text-xl font-semibold mt-10">6. Intellectual Property</h2>
        <p>
          All rights, title, and interest in and to the Service (excluding content
          provided by users) are and will remain the exclusive property of Talentflow
          and its licensors.
        </p>

        <h2 className="text-xl font-semibold mt-10">7. Disclaimers</h2>
        <p>
          The Service is provided on an &quot;as is&quot; and &quot;as available&quot; basis without
          warranties of any kind. We do not guarantee that the Service will be
          uninterrupted, secure, or error-free.
        </p>

        <h2 className="text-xl font-semibold mt-10">8. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Talentflow shall not be liable for
          any indirect, incidental, special, consequential or punitive damages, or
          any loss of profits or revenues.
        </p>

        <h2 className="text-xl font-semibold mt-10">9. Termination</h2>
        <p>
          We may suspend or terminate your access to the Service at any time for any
          reason, including if you violate these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-10">10. Changes to Terms</h2>
        <p>
          We may modify these Terms from time to time. If a change is material, we
          will provide reasonable notice. Your continued use of the Service after the
          changes take effect constitutes acceptance of the new Terms.
        </p>

        <h2 className="text-xl font-semibold mt-10">11. Contact</h2>
        <p>
          Questions about these Terms? Contact our support team.
        </p>
      </section>
    </main>
  );
}