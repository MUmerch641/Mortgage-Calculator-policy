import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container section-padding">
      <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Mortgage Eligibility</h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
          We are committed to protecting your personal information and being transparent about how we use it.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link 
            to="/privacy-policy" 
            style={{ 
              backgroundColor: 'var(--primary)', 
              color: 'white', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '8px',
              fontWeight: '600'
            }}
          >
            Privacy Policy
          </Link>
          <Link 
            to="/delete-account" 
            style={{ 
              border: '1px solid var(--border-color)', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '8px',
              fontWeight: '600'
            }}
          >
            Delete Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
