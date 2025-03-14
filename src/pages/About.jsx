import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Rice Market</h1>
        <section className="about-section">
          <h2>Our Story</h2>
          <p>Founded in 2025, Rice Market has been dedicated to bringing the finest rice varieties from around the world to your table. Our passion for quality and tradition drives us to source the best products directly from trusted farmers and suppliers.</p>
        </section>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>We strive to provide our customers with the highest quality rice products while supporting sustainable farming practices and fair trade relationships with our partners worldwide.</p>
        </section>

        <section className="about-section">
          <h2>Quality Assurance</h2>
          <p>Every grain of rice we sell undergoes rigorous quality control to ensure it meets our high standards. We carefully select our suppliers and regularly visit their farms to maintain our commitment to excellence.</p>
        </section>

        <section className="about-section">
          <h2>Sustainability</h2>
          <p>We are committed to environmental sustainability and supporting local farming communities. Our packaging is eco-friendly, and we work closely with farmers who practice sustainable agriculture.</p>
        </section>
      </div>
    </div>
  );
}

export default About;