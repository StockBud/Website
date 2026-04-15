import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold md:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-foreground-muted">Last updated: 15 April 2026</p>

        <div className="mt-10 space-y-8 text-foreground-muted leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1">
          <section>
            <h2>1. Introduction</h2>
            <p>
              StockBud (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy of our users (&quot;you&quot;, &quot;your&quot;). This Privacy Policy explains how we collect, use, store, and share your personal data when you use the StockBud mobile application and website at stock-bud.com (together, the &quot;Service&quot;).
            </p>
            <p className="mt-2">
              By using StockBud, you agree to the collection and use of information in accordance with this policy. If you do not agree, please do not use the Service.
            </p>
          </section>

          <section>
            <h2>2. Information We Collect</h2>

            <h3>2.1 Account Information</h3>
            <p>When you create a StockBud account, we collect:</p>
            <ul>
              <li>Display name and username</li>
              <li>Email address</li>
              <li>Password (stored securely using industry-standard hashing)</li>
              <li>Profile picture (if you choose to upload one)</li>
            </ul>

            <h3 className="mt-4">2.2 Portfolio &amp; Trading Data</h3>
            <p>When you use our portfolio tracking features, we may collect:</p>
            <ul>
              <li>Stocks and securities you follow or add to your portfolio</li>
              <li>Trading activity and competition entries</li>
              <li>Portfolio connection data when you link third-party brokerage accounts (see Section 5 below)</li>
            </ul>

            <h3 className="mt-4">2.3 Social &amp; Community Data</h3>
            <p>When you use our social features, we collect:</p>
            <ul>
              <li>Posts, comments, and reactions you make on the Discover feed</li>
              <li>Messages sent in Rooms (chat rooms)</li>
              <li>Users you follow and your follower list</li>
              <li>Competition entries and leaderboard rankings</li>
            </ul>

            <h3 className="mt-4">2.4 Device &amp; Usage Data</h3>
            <p>We automatically collect:</p>
            <ul>
              <li>Device type, operating system, and version</li>
              <li>App version and usage patterns</li>
              <li>Crash reports and performance data</li>
              <li>IP address (used for security and fraud prevention)</li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve the Service</li>
              <li>Display your portfolio, trades, and performance analytics</li>
              <li>Enable social features including the Discover feed, Rooms, and user profiles</li>
              <li>Run competitions and leaderboards, and distribute cash prizes</li>
              <li>Send you important account notifications (e.g. email verification, password resets)</li>
              <li>Detect and prevent fraud, abuse, and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2>4. Data Sharing</h2>
            <p>We do not sell your personal data. We may share your information with:</p>
            <ul>
              <li><strong>Other users:</strong> Your display name, username, profile picture, posts, and competition rankings are visible to other StockBud users. Room messages are visible to members of that room.</li>
              <li><strong>Service providers:</strong> We use trusted third-party services for hosting, analytics, push notifications, and email delivery. These providers only process data on our behalf and are bound by confidentiality obligations.</li>
              <li><strong>Brokerage integrations:</strong> When you connect a brokerage account (e.g. Trading 212), data is exchanged via their official API under their own privacy terms.</li>
              <li><strong>Legal requirements:</strong> We may disclose data if required by law, regulation, or legal process.</li>
            </ul>
          </section>

          <section>
            <h2>5. Third-Party Brokerage Account Linking (e.g. Trading 212)</h2>

            <h3>5.1 What This Feature Does</h3>
            <p>
              StockBud allows you to link a third-party brokerage account (currently Trading 212) so that your portfolio holdings and values can be displayed within the app. This connection is entirely optional and initiated only by you.
            </p>

            <h3 className="mt-4">5.2 Data We Receive</h3>
            <p>When you link your brokerage account, we receive <strong>read-only</strong> data via the brokerage&apos;s official API, which may include:</p>
            <ul>
              <li>Portfolio holdings and positions (instrument names, quantities, current values)</li>
              <li>Historical transaction data (buys, sells, dividends)</li>
              <li>Account value and cash balance</li>
            </ul>

            <h3 className="mt-4">5.3 Data We Do NOT Receive or Store</h3>
            <ul>
              <li>Your brokerage login credentials (username and password) &mdash; authentication is handled entirely by the brokerage&apos;s own secure login flow</li>
              <li>Your bank account or payment card details</li>
              <li>The ability to place, modify, or cancel trades or withdraw funds on your behalf</li>
            </ul>

            <h3 className="mt-4">5.4 How We Use Brokerage Data</h3>
            <p>Brokerage data is used solely to:</p>
            <ul>
              <li>Display your portfolio within the StockBud app</li>
              <li>Calculate portfolio performance and analytics</li>
              <li>Enable participation in competitions where linked portfolio data may be used</li>
            </ul>
            <p className="mt-2">
              We do not sell, licence, or share your brokerage data with any third party for marketing, advertising, or any purpose unrelated to providing the Service.
            </p>

            <h3 className="mt-4">5.5 Disconnecting Your Brokerage Account</h3>
            <p>
              You may disconnect your linked brokerage account at any time through the app settings. Upon disconnection, we will delete the cached brokerage data from our systems within 30 days. Disconnecting does not affect your StockBud account or any other data you have provided to us.
            </p>

            <h3 className="mt-4">5.6 Third-Party Terms</h3>
            <p>
              Your brokerage account is governed by the brokerage provider&apos;s own terms of service and privacy policy. By linking your account, you acknowledge that you have reviewed and accepted those terms. StockBud is not responsible for the brokerage&apos;s handling of your data, the accuracy or completeness of data provided to us via their API, or the availability of their services.
            </p>

            <h3 className="mt-4">5.7 Data Accuracy Disclaimer</h3>
            <p>
              Portfolio data displayed within StockBud is sourced from your brokerage provider and may be subject to delays, inaccuracies, or interruptions beyond our control. StockBud does not guarantee the accuracy, timeliness, or completeness of any brokerage-sourced data. You should always verify your holdings and account status directly with your brokerage provider.
            </p>
          </section>

          <section>
            <h2>6. Data Storage &amp; Security</h2>
            <p>
              Your data is stored on secure servers. We implement industry-standard security measures including encryption in transit (TLS) and at rest, secure password hashing, and access controls. However, no system is 100% secure and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal data for as long as your account is active or as needed to provide the Service. If you delete your account, we will delete or anonymise your personal data within 30 days, except where we are required to retain it for legal or regulatory purposes.
            </p>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>Under applicable data protection laws (including UK GDPR), you have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict processing of your data</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, contact us at <a href="mailto:support@stock-bud.com" className="text-accent hover:underline">support@stock-bud.com</a>.
            </p>
          </section>

          <section>
            <h2>9. Children&apos;s Privacy</h2>
            <p>
              StockBud is not intended for users under the age of 18. We do not knowingly collect personal data from anyone under 18. If we become aware that we have collected data from a user under 18, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2>10. Third-Party Links</h2>
            <p>
              The Service may contain links to third-party websites or services (e.g. app stores, brokerage platforms). We are not responsible for the privacy practices of these third parties and encourage you to read their privacy policies.
            </p>
          </section>

          <section>
            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy within the app or sending you a notification. Your continued use of the Service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2>12. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>Email: <a href="mailto:support@stock-bud.com" className="text-accent hover:underline">support@stock-bud.com</a></li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
