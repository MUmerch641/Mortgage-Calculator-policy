import { useEffect } from 'react';

const Section = ({ number, title, children }) => (
  <section className="pp-section" id={`section-${number}`}>
    <div className="pp-section-header">
      <span className="pp-section-number">{number}</span>
      <h2>{title}</h2>
    </div>
    <div className="pp-section-body">{children}</div>
  </section>
);

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pp-wrapper">
      {/* Hero Banner */}
      <div className="pp-hero">
        <div className="pp-hero-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          Privacy Protected
        </div>
        <h1 className="pp-hero-title">Privacy Policy</h1>
        <p className="pp-hero-subtitle">
          We are committed to protecting your personal information and being transparent about how we use it.
        </p>
        <div className="pp-meta-row">
          <span className="pp-meta-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Last Updated: May 2, 2026
          </span>
          <span className="pp-meta-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            Effective: May 2, 2026
          </span>
          <span className="pp-meta-chip">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
            </svg>
            UAE & Global
          </span>
        </div>
      </div>

      {/* Quick Nav */}
      <div className="container">
        <nav className="pp-toc" aria-label="Table of Contents">
          <p className="pp-toc-title">Quick Navigation</p>
          <div className="pp-toc-grid">
            {[
              { n: '01', t: 'Who We Are' },
              { n: '02', t: 'Information We Collect' },
              { n: '03', t: 'How We Use Your Data' },
              { n: '04', t: 'Third-Party Services' },
              { n: '05', t: 'Data Sharing' },
              { n: '06', t: 'Data Retention' },
              { n: '07', t: 'Your Rights' },
              { n: '08', t: 'Children\'s Privacy' },
              { n: '09', t: 'Data Security' },
              { n: '10', t: 'Contact Us' },
            ].map(({ n, t }) => (
              <a key={n} href={`#section-${n}`} className="pp-toc-item">
                <span className="pp-toc-num">{n}</span>
                {t}
              </a>
            ))}
          </div>
        </nav>

        <article className="pp-article">

          {/* Intro blurb */}
          <div className="pp-intro-card">
            <div className="pp-intro-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <p>
                This Privacy Policy describes how <strong>mortgage-calculator</strong> ("we", "us", or "our") collects, uses, and shares information about you when you use our mobile application (the "App"). By using the App, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>
          </div>

          {/* Section 1 */}
          <Section number="01" title="Who We Are">
            <p>
              mortgage-calculator is a React Native mobile application available on iOS and Android. The App is designed to help users in the UAE and internationally to estimate mortgage eligibility, calculate repayment amounts, and generate financial reports based on their income and property details.
            </p>
            <p>
              The App is offered as a subscription-based service with premium features unlocked through an active subscription.
            </p>
            <div className="pp-highlight-box">
              <strong>App Name:</strong> mortgage-calculator<br />
              <strong>Platform:</strong> iOS &amp; Android (React Native)<br />
              <strong>Primary Region:</strong> United Arab Emirates (UAE)<br />
              <strong>Contact:</strong> <a href="mailto:Aun-ali@hotmail.com">Aun-ali@hotmail.com</a>
            </div>
          </Section>

          {/* Section 2 */}
          <Section number="02" title="Information We Collect">
            <h3>2.1 Information You Provide Directly</h3>
            <p>When you create an account or use the App, you may provide:</p>
            <ul>
              <li><strong>Account details:</strong> Full name, email address, and profile photo (via Google Sign-In)</li>
              <li><strong>Date of Birth:</strong> Used solely to calculate mortgage eligibility and age-at-maturity figures</li>
              <li><strong>Financial inputs:</strong> Monthly fixed income, additional income, debt-burden ratio (DBR%), and property value — entered locally on-device for calculation purposes</li>
              <li><strong>Mortgage parameters:</strong> Interest type, loan tenure, buffer period, and property details</li>
              <li><strong>Payment information:</strong> Processed exclusively by the <strong>Apple App Store</strong> or <strong>Google Play Store</strong>; we never see or store your credit card or billing details.</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>When you use the App, we automatically collect:</p>
            <ul>
              <li><strong>Device information:</strong> Device model, operating system version, unique device identifiers</li>
              <li><strong>App usage data:</strong> Screens visited, features used, session duration, and crash reports</li>
              <li><strong>Authentication tokens:</strong> Secure tokens issued by Firebase Authentication to keep you signed in</li>
              <li><strong>Subscription status:</strong> Active, expired, or trial subscription state retrieved from RevenueCat</li>
              <li><strong>App state data:</strong> Locally persisted Redux store (encrypted on-device) to restore your session between app launches</li>
            </ul>

            <h3>2.3 Information We Do NOT Collect</h3>
            <div className="pp-no-collect-list">
              {[
                'Raw credit card or bank account numbers',
                'Precise GPS location data',
                'Contacts, photos, or camera access',
                'Microphone or biometric data',
                'Browsing history outside our App',
              ].map((item) => (
                <div key={item} className="pp-no-collect-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </Section>

          {/* Section 3 */}
          <Section number="03" title="How We Use Your Data">
            <p>We use the information we collect for the following purposes:</p>
            <div className="pp-usage-grid">
              {[
                { icon: '🔐', title: 'Authentication', desc: 'To create and manage your account securely using Firebase Authentication and Google Sign-In.' },
                { icon: '🧮', title: 'Mortgage Calculations', desc: 'To perform on-device calculations of mortgage eligibility, repayment schedules, and amortization tables.' },
                { icon: '💳', title: 'Subscription Management', desc: 'To verify your premium subscription status via RevenueCat (connecting to Apple/Google) and grant access to features.' },
                { icon: '📄', title: 'Report Generation', desc: 'To generate, display, print, and share PDF mortgage reports based on your inputs — entirely on-device.' },
                { icon: '🛡️', title: 'Security', desc: 'To detect fraud, enforce access policies, and protect your account from unauthorized use.' },
                { icon: '📊', title: 'Analytics & Improvement', desc: 'To understand how features are used and improve the App experience through aggregated, anonymized usage analytics.' },
                { icon: '📬', title: 'Communications', desc: 'To send you important notices about your account, subscription renewals, or critical App updates.' },
                { icon: '⚙️', title: 'App Persistence', desc: 'To restore your session and saved form inputs between app launches using locally persisted storage.' },
              ].map(({ icon, title, desc }) => (
                <div key={title} className="pp-usage-card">
                  <div className="pp-usage-icon">{icon}</div>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Section 4 */}
          <Section number="04" title="Third-Party Services">
            <p>
              We integrate the following third-party services. Each has its own privacy policy and data practices:
            </p>
            <div className="pp-third-party-list">
              {[
                {
                  name: 'Firebase (Google)',
                  purpose: 'Authentication, Firestore database (user records & subscription metadata), and crash analytics.',
                  link: 'https://firebase.google.com/support/privacy',
                  data: 'Email, UID, display name, device info',
                  color: '#F57C00',
                },
                {
                  name: 'Google Sign-In',
                  purpose: 'Allows you to authenticate using your existing Google account — no new password required.',
                  link: 'https://policies.google.com/privacy',
                  data: 'Google account email, name, profile picture',
                  color: '#4285F4',
                },
                {
                  name: 'RevenueCat',
                  purpose: 'Subscription management, purchase verification, and entitlement checks across iOS and Android.',
                  link: 'https://www.revenuecat.com/privacy',
                  data: 'User ID, purchase history, subscription status',
                  color: '#E74C3C',
                },
                {
                  name: 'Apple App Store / Google Play',
                  purpose: 'Secure payment processing and in-app purchase management on their respective platforms.',
                  link: 'https://www.apple.com/legal/privacy/',
                  data: 'Purchase receipts and subscription entitlements',
                  color: '#1d756d',
                },
              ].map(({ name, purpose, link, data, color }) => (
                <div key={name} className="pp-service-card" style={{ '--service-color': color }}>
                  <div className="pp-service-dot" style={{ background: color }} />
                  <div className="pp-service-content">
                    <div className="pp-service-header">
                      <strong>{name}</strong>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="pp-service-link">
                        Privacy Policy ↗
                      </a>
                    </div>
                    <p>{purpose}</p>
                    <div className="pp-service-data-tag">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                      </svg>
                      Data shared: {data}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Section 5 */}
          <Section number="05" title="Data Sharing &amp; Disclosure">
            <p>We do <strong>not</strong> sell, rent, or trade your personal information. We may share your data only in the following limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> With Firebase and RevenueCat strictly to provide the features described in this policy.</li>
              <li><strong>Legal Compliance:</strong> If required by applicable law, court order, or governmental authority.</li>
              <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your data may transfer to a successor entity subject to the same privacy commitments.</li>
              <li><strong>With Your Consent:</strong> In any other case, only with your explicit prior consent.</li>
            </ul>
            <div className="pp-callout pp-callout-success">
              <strong>🔒 We never share your mortgage inputs, income figures, or financial calculations with any third party.</strong> This data is processed entirely on your device and used only to generate your reports.
            </div>
          </Section>

          {/* Section 6 */}
          <Section number="06" title="Data Retention">
            <p>We retain your personal data for as long as your account is active or as needed to provide you with our services:</p>
            <ul>
              <li><strong>Account data (Firebase):</strong> Retained for the lifetime of your account. Deleted within 30 days of account deletion request.</li>
              <li><strong>Subscription records (RevenueCat):</strong> Retained as required for purchase dispute resolution and tax compliance.</li>
              <li><strong>On-device data (Redux Persist):</strong> Stored locally on your device. Cleared when you uninstall the App or sign out and clear app data.</li>
              <li><strong>Financial inputs:</strong> Never stored on our servers. Retained only in your device's local storage during an active session.</li>
            </ul>
          </Section>

          {/* Section 7 */}
          <Section number="07" title="Your Rights &amp; Choices">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <div className="pp-rights-grid">
              {[
                { right: 'Access', desc: 'Request a copy of the personal data we hold about you.' },
                { right: 'Correction', desc: 'Request correction of inaccurate or incomplete data.' },
                { right: 'Deletion', desc: 'Request deletion of your account and associated personal data.' },
                { right: 'Portability', desc: 'Request your data in a machine-readable format.' },
                { right: 'Opt-Out', desc: 'Opt out of marketing communications at any time via in-app settings.' },
                { right: 'Restriction', desc: 'Request that we restrict the processing of your data in certain circumstances.' },
              ].map(({ right, desc }) => (
                <div key={right} className="pp-right-item">
                  <div className="pp-right-label">{right}</div>
                  <p>{desc}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              To exercise any of these rights, please contact us at <a href="mailto:Aun-ali@hotmail.com">Aun-ali@hotmail.com</a>. We will respond within 30 days.
            </p>
            <div className="pp-callout pp-callout-info">
              <strong>Account Deletion:</strong> You can delete your account directly from the App's settings screen. This will remove your account data from Firebase within 30 days. On-device data is cleared immediately upon sign-out and app data reset.
            </div>
          </Section>

          {/* Section 8 */}
          <Section number="08" title="Children's Privacy">
            <p>
              Our App is not directed to individuals under the age of <strong>18</strong>. We do not knowingly collect personal information from minors. Mortgage financial products are intended for adults of legal contracting age.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided personal information to us, please contact us immediately at <a href="mailto:Aun-ali@hotmail.com">Aun-ali@hotmail.com</a> and we will take prompt action to delete such information.
            </p>
          </Section>

          {/* Section 9 */}
          <Section number="09" title="Data Security">
            <p>We implement industry-standard security measures to protect your information:</p>
            <ul>
              <li><strong>Encryption in transit:</strong> All data transmitted between your device and our services uses TLS/HTTPS encryption.</li>
              <li><strong>Secure authentication:</strong> Firebase Authentication uses industry-standard OAuth 2.0 and secure token management.</li>
              <li><strong>Payment security:</strong> Payment data is handled exclusively by Apple and Google. We never handle or store your credit card or billing details.</li>
              <li><strong>Local storage:</strong> On-device Redux Persist data is stored in the app's sandboxed container, inaccessible to other apps.</li>
              <li><strong>Subscription verification:</strong> RevenueCat performs server-side receipt validation to prevent unauthorized premium access.</li>
            </ul>
            <div className="pp-callout pp-callout-warning">
              <strong>Important:</strong> While we use commercially reasonable measures to protect your data, no method of electronic storage or transmission over the Internet is 100% secure. We cannot guarantee absolute security.
            </div>
          </Section>

          {/* Section 10 */}
          <Section number="10" title="Contact Us">
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please reach out to us:
            </p>
            <div className="pp-contact-grid">
              <div className="pp-contact-card">
                <div className="pp-contact-icon">✉️</div>
                <h4>General Inquiries</h4>
                <a href="mailto:Aun-ali@hotmail.com">Aun-ali@hotmail.com</a>
              </div>
              <div className="pp-contact-card">
                <div className="pp-contact-icon">🔐</div>
                <h4>Privacy Requests</h4>
                <a href="mailto:Aun-ali@hotmail.com">Aun-ali@hotmail.com</a>
              </div>
              <div className="pp-contact-card">
                <div className="pp-contact-icon">🐛</div>
                <h4>Report a Concern</h4>
                <a href="mailto:Aun-ali@hotmail.com">Aun-ali@hotmail.com</a>
              </div>
            </div>
            <p style={{ marginTop: '1.5rem' }}>
              We may update this Privacy Policy from time to time. When we make material changes, we will notify you via in-app notification or email. Your continued use of the App after such changes constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <div className="pp-footer-note">
            <p>This document was last reviewed and updated on <strong>May 2, 2026</strong>.</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
