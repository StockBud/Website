import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsOfService() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1280px] items-center px-6 md:h-20 md:px-8 lg:px-12">
          <Link href="/" className="text-xl font-bold text-foreground">
            StockBud
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:px-8">
        <h1 className="text-3xl font-bold md:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-foreground-muted">Last updated: 15 April 2026</p>

        <div className="mt-10 space-y-8 text-foreground-muted leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, accessing, or using the StockBud mobile application and website at stock-bud.com (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use the Service.
            </p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>
              You must be at least 18 years old to use StockBud. By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
            </p>
          </section>

          <section>
            <h2>3. Account Registration</h2>
            <p>To use StockBud, you must create an account. You agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information (display name, username, email, password)</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorised access to your account</li>
              <li>Accept responsibility for all activity that occurs under your account</li>
            </ul>
            <p className="mt-2">
              We reserve the right to suspend or terminate accounts that violate these Terms or that we reasonably believe to be fraudulent.
            </p>
          </section>

          <section>
            <h2>4. The Service</h2>
            <p>StockBud provides the following features:</p>
            <ul>
              <li><strong>Portfolio Tracking:</strong> Connect third-party brokerage accounts (e.g. Trading 212) to view your portfolio value and holdings. We receive read-only data and never execute trades on your behalf.</li>
              <li><strong>Social Features:</strong> A Discover feed for sharing posts and ideas, Rooms for group chat, user profiles with follower/following functionality.</li>
              <li><strong>Competitions:</strong> Enter stock-picking competitions with leaderboards. Some competitions may offer cash prizes.</li>
              <li><strong>Stock Data:</strong> Browse and search stocks across NASDAQ, NYSE, and LSE with real-time and historical market data.</li>
            </ul>
          </section>

          <section>
            <h2>5. Not Financial Advice</h2>
            <p>
              <strong>StockBud does not provide financial advice.</strong> The Service is for educational and informational purposes only. Nothing on StockBud constitutes a recommendation or solicitation to buy, sell, or hold any investment or security.
            </p>
            <p className="mt-2">
              You are solely responsible for your own investment decisions. Past performance displayed on the platform is not indicative of future results. Always consult a qualified financial adviser before making investment decisions.
            </p>
          </section>

          <section>
            <h2>6. Competitions &amp; Prizes</h2>
            <ul>
              <li>Competitions are run at our discretion and may be modified or cancelled at any time</li>
              <li>Eligibility for prizes is subject to competition-specific rules, which will be communicated within the app</li>
              <li>Cash prizes will be distributed within a reasonable timeframe following competition completion</li>
              <li>We reserve the right to disqualify participants who engage in manipulation, fraud, or any form of cheating</li>
              <li>Any applicable taxes on prizes are the sole responsibility of the winner</li>
            </ul>
          </section>

          <section>
            <h2>7. User Content &amp; Conduct</h2>
            <p>You retain ownership of content you post on StockBud (posts, messages, comments). By posting content, you grant us a non-exclusive, worldwide, royalty-free licence to display it within the Service.</p>
            <p className="mt-2">You agree not to:</p>
            <ul>
              <li>Post false, misleading, or deceptive investment information</li>
              <li>Engage in market manipulation, pump-and-dump schemes, or similar activity</li>
              <li>Harass, abuse, threaten, or intimidate other users</li>
              <li>Post spam, advertising, or unsolicited promotional material</li>
              <li>Impersonate another person or entity</li>
              <li>Upload malicious software or attempt to compromise the Service</li>
              <li>Use the Service for any unlawful purpose</li>
            </ul>
            <p className="mt-2">
              We may remove content and suspend or ban accounts that violate these rules at our sole discretion.
            </p>
          </section>

          <section>
            <h2>8. Third-Party Brokerage Integrations</h2>
            <p>
              StockBud allows you to link third-party brokerage accounts (e.g. Trading 212) to display your portfolio data within the app. By linking a brokerage account, you acknowledge and agree that:
            </p>
            <ul>
              <li>You are authorising StockBud to access <strong>read-only</strong> portfolio data from your brokerage account via their official API</li>
              <li>StockBud does not have the ability to place, modify, or cancel trades, or to withdraw or transfer funds from your brokerage account</li>
              <li>StockBud does not receive or store your brokerage login credentials</li>
              <li>Portfolio data displayed within StockBud is sourced from your brokerage provider and may be subject to delays, inaccuracies, or interruptions &mdash; StockBud does not guarantee its accuracy, timeliness, or completeness</li>
              <li>You remain solely responsible for all activity on, and decisions relating to, your brokerage account</li>
              <li>Your use of the brokerage integration is also subject to the brokerage provider&apos;s own terms of service and privacy policy, which you should review independently</li>
              <li>StockBud is not affiliated with, endorsed by, or acting as an agent of any brokerage provider</li>
              <li>StockBud is not responsible for the availability, accuracy, security, or conduct of any third-party brokerage service</li>
              <li>You may disconnect your brokerage account at any time through the app settings</li>
            </ul>
            <p className="mt-2">
              Any losses, damages, or liabilities arising from your use of a linked brokerage account, including but not limited to investment losses, data discrepancies, or unauthorised access to your brokerage account, are your sole responsibility and not the responsibility of StockBud.
            </p>
          </section>

          <section>
            <h2>9. Intellectual Property</h2>
            <p>
              The StockBud name, logo, app design, and all associated content (excluding user-generated content) are owned by StockBud and protected by applicable intellectual property laws. You may not copy, modify, distribute, or create derivative works from any part of the Service without our prior written consent.
            </p>
          </section>

          <section>
            <h2>10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, StockBud and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Service. This includes, without limitation, any losses resulting from investment decisions made based on information available through the Service.
            </p>
            <p className="mt-2">
              The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied.
            </p>
          </section>

          <section>
            <h2>11. Termination</h2>
            <p>
              You may delete your account at any time. We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Upon termination, your right to use the Service ceases immediately.
            </p>
          </section>

          <section>
            <h2>12. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. We will notify you of material changes through the app or via email. Your continued use of the Service after changes constitutes acceptance of the updated Terms.
            </p>
          </section>

          <section>
            <h2>13. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms or the Service shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:support@stock-bud.com" className="text-accent hover:underline">support@stock-bud.com</a></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
