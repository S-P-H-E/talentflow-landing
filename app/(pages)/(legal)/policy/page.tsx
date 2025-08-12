import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Talentflow collects, uses, and protects your information.",
};

export default function Policy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <h1 className="text-4xl md:text-5xl font-semibold text-center">Privacy Policy</h1>
      <p className="text-[var(--description)] text-center mt-3">Last updated: {new Date().getFullYear()}</p>

      <section className="mt-12 space-y-4 text-base leading-7">
        <p>
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use Talentflow (the &quot;Service&quot;). By accessing or
          using the Service, you agree to the collection and use of information in
          accordance with this policy.
        </p>

        <h2 className="text-xl font-semibold mt-10">Information We Collect</h2>
        <p>
          - Contact information such as email address when you join the waitlist or
          communicate with us.
          <br />- Usage data such as device information, pages visited, and other
          analytics to improve the Service.
        </p>

        <h2 className="text-xl font-semibold mt-10">How We Use Information</h2>
        <p>
          We use your information to provide and maintain the Service, communicate
          with you, analyze usage, improve features, and ensure security and
          compliance.
        </p>

        <h2 className="text-xl font-semibold mt-10">Legal Bases (EEA/UK Users)</h2>
        <p>
          We process personal data where necessary for: performance of a contract,
          our legitimate interests (e.g., product improvement and security), your
          consent (e.g., marketing emails), and compliance with legal obligations.
        </p>

        <h2 className="text-xl font-semibold mt-10">Sharing of Information</h2>
        <p>
          We may share information with trusted service providers (e.g., analytics
          and infrastructure partners) who process it on our behalf and under
          appropriate safeguards. We do not sell personal information.
        </p>

        <h2 className="text-xl font-semibold mt-10">Data Retention</h2>
        <p>
          We retain personal data only as long as necessary for the purposes
          described in this policy, unless a longer retention period is required by
          law.
        </p>

        <h2 className="text-xl font-semibold mt-10">Security</h2>
        <p>
          We implement reasonable administrative, technical, and organizational
          measures to protect personal information. However, no method of
          transmission over the Internet or electronic storage is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-10">Your Rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, delete,
          or restrict the processing of your personal data, and to withdraw consent
          where applicable. To exercise these rights, please contact us.
        </p>

        <h2 className="text-xl font-semibold mt-10">Children&#39;s Privacy</h2>
        <p>
          The Service is not directed to individuals under 16. We do not knowingly
          collect personal information from children.
        </p>

        <h2 className="text-xl font-semibold mt-10">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will post the new
          policy on this page and update the &quot;Last updated&quot; date above.
        </p>

        <h2 className="text-xl font-semibold mt-10">Contact</h2>
        <p>
          If you have questions about this Privacy Policy, please contact our
          support team.
        </p>
      </section>
    </main>
  );
}