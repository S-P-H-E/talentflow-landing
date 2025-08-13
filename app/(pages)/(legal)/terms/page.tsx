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
        <p>
          Our order process is conducted by our online reseller Paddle.com.
          Paddle.com is the Merchant of Record for all our orders. Paddle provides
          all customer service inquiries and handles returns. Payments are
          processed by Paddle, and we do not store or have access to your full
          card details.
        </p>
        <p>
          Disputes and chargebacks related to payments are managed by Paddle as
          the Merchant of Record. If you have an order or payment-related issue,
          contact us at
          <a href="mailto:sphe.g.personal@gmail.com" className="underline"> sphe.g.personal@gmail.com</a>
          , or reach Paddle support via
          <a href="https://paddle.net" target="_blank" rel="noopener noreferrer" className="underline"> Paddle.net</a>.
        </p>
        <p>
          Your card or bank statement descriptor may reference Paddle and
          Talentflow.
        </p>
        <p>
          We do not send direct checkout links to collect payment. Purchases must
          be initiated through our website or app using the Paddle checkout.
        </p>
        <p>
          Before completing a purchase, the checkout will display the product,
          price, billing frequency, applicable taxes, and the total amount. You
          must confirm acceptance of our Terms and Refund Policy before you can
          complete your purchase.
        </p>
        <p>
          Orders must be placed via our website or app using the Paddle checkout.
          We do not accept orders by email or phone, and we never ask for or
          handle your payment card details directly.
        </p>
        <p>
          If you need to correct an error in your order, you can update the
          relevant fields in the checkout before submitting payment. If you
          notice an error after purchase, contact support immediately and we will
          assist.
        </p>
        <p>
          After successful payment, we provide prompt access to the Service and,
          where relevant, confirmation by email with activation details.
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

        <h2 className="text-xl font-semibold mt-10">11. Consumer Right to Cancel</h2>
        <p>
          If you are a consumer, you have the right to cancel your initial
          purchase within 14 days without giving any reason. The cancellation
          period ends 14 days after the day following the start of your paid
          subscription. To meet the deadline, send your notice of cancellation
          before the 14-day period ends.
        </p>
        <p>
          How to cancel: contact Talentflow Support at
          <a href="mailto:sphe.g.personal@gmail.com" className="underline"> sphe.g.personal@gmail.com</a>
          or via the in-app billing settings. We will acknowledge receipt of your
          request without undue delay.
        </p>

        <h2 className="text-xl font-semibold mt-10">12. Effect of Cancellation</h2>
        <p>
          If you cancel as permitted above, we will reimburse all payments we have
          received from you for the initial purchase.
        </p>
        <p>
          We will make the reimbursement without undue delay and no later than 14
          days from the day we are informed of your decision to cancel. We will
          use the same means of payment you used for the initial transaction, and
          you will not incur any fees as a result of the reimbursement.
        </p>
        

        <h2 className="text-xl font-semibold mt-10">13. Exception to the Right to Cancel</h2>
        <p>
          Your right to cancel does not apply where you have requested that we
          begin providing the Service during the cancellation period and the
          Service has been fully performed, or to digital content once download
          or streaming has begun. It also does not apply where you have already
          received the full benefit of the Service within the 14-day period.
        </p>

        <h2 className="text-xl font-semibold mt-10">14. Contact</h2>
        <p>
          Questions about these Terms? Contact us at
          <a href="mailto:sphe.g.personal@gmail.com" className="underline"> sphe.g.personal@gmail.com</a>.
        </p>
      </section>
    </main>
  );
}