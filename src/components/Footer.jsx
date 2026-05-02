const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>&copy; {new Date().getFullYear()} Mortgage Eligibility. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem' }}>
          Crafted for clarity.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
