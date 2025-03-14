import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Rice Market</h1>
      <p>Discover our premium selection of rice varieties from around the world</p>
      <Link to="/products" className="cta-button">
        Shop Now
      </Link>
    </div>
  );
}

export default Home;