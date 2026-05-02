import { useEffect } from 'react';

const DeletionSection = ({ number, title, children }) => (
  <div className="pp-section">
    <div className="pp-section-header">
      <span className="pp-section-number">{number}</span>
      <h2>{title}</h2>
    </div>
    <div className="pp-section-body">{children}</div>
  </div>
);

const DeleteAccount = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="pp-wrapper">
      <div className="pp-hero" style={{ background: 'linear-gradient(135deg, #e11d48 0%, #be123c 100%)' }}>
        <div className="pp-hero-badge">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
          </svg>
          Data Management
        </div>
        <h1 className="pp-hero-title">Account & Data Deletion</h1>
        <p className="pp-hero-subtitle">
          Request the permanent removal of your <strong>mortgage-calculator</strong> account and associated data.
        </p>
      </div>

      <div className="container">
        <article className="pp-article" style={{ marginTop: '3rem' }}>

          <div className="pp-intro-card" style={{ borderLeftColor: '#e11d48', background: 'rgba(225, 29, 72, 0.05)' }}>
            <div className="pp-intro-icon" style={{ color: '#e11d48' }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
            </div>
            <div>
              <p>
                If you wish to delete your account and all associated data, or request deletion of specific mortgage data, please follow the steps below:
              </p>
            </div>
          </div>

          <DeletionSection number="01" title="Request Deletion of Specific Data">
            <p>
              You can request deletion of your account or specific mortgage data, saved calculations, or any related information without deleting your entire account.
            </p>
            <div className="pp-highlight-box">
              <p>Email our support team at: <a href="mailto:Aun-ali@hotmail.com"><strong>Aun-ali@hotmail.com</strong></a></p>
              <p>Include the following details in your message:</p>
              <ul>
                <li>Registered Email</li>
                <li>Full Name</li>
                <li>Specific data to delete (e.g., saved calculations, mortgage reports, calculation history)</li>
                <li>Reason for deletion (optional)</li>
              </ul>
              <p>Clearly mention: <em>"I want to delete specific mortgage data or reports."</em></p>
            </div>
          </DeletionSection>

          <DeletionSection number="02" title="How to Request Account Deletion">
            <p>
              To permanently remove your account and all associated information from our systems:
            </p>
            <div className="pp-highlight-box">
              <p>Email our support team at: <a href="mailto:Aun-ali@hotmail.com"><strong>Aun-ali@hotmail.com</strong></a></p>
              <p>Include the following details in your message:</p>
              <ul>
                <li>Registered Email</li>
                <li>Full Name</li>
                <li>Reason for deletion (optional)</li>
              </ul>
              <p>Clearly mention: <em>"I want to delete my account and associated data."</em></p>
            </div>
          </DeletionSection>

          <DeletionSection number="03" title="Data Deletion Timeline">
            <p>
              Upon account deletion, all related data will be automatically deleted within 90 days according to our data retention policy.
            </p>
            <div className="pp-callout pp-callout-info">
              <strong>All Data Types:</strong> Deleted within 90 days after account deletion request.
            </div>
          </DeletionSection>

          <DeletionSection number="04" title="Urgent Deletion Requests">
            <p>For urgent data deletion assistance, contact our support helpline:</p>
            <div className="pp-contact-card" style={{ maxWidth: '300px', margin: '1.5rem 0' }}>
              <div className="pp-contact-icon">📞</div>
              <h4>Helpline</h4>
              <a href="tel:+93028876298" style={{ fontSize: '1.25rem', fontWeight: '700' }}>+93028876298</a>
            </div>
          </DeletionSection>

          <DeletionSection number="05" title="Important Note">
            <div className="pp-callout pp-callout-warning">
              <strong>⚠️ Irreversible Action:</strong> Once your account is permanently deleted, you will not be able to recover your data.
            </div>
          </DeletionSection>

          <div className="pp-footer-note">
            <p>© {new Date().getFullYear()} Mortgage Calculator. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Crafted for clarity and legal transparency.</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default DeleteAccount;
