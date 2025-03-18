import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Filters } from '../components/Filters';
import '../styles/Products.css';

const products = [
  { id: 1, name: 'Basmati Rice', price: 25.99, origin: 'India', image: 'https://img.freepik.com/free-photo/top-view-from-afar-rice-spoon-bowl-rice-dark-table_140725-78800.jpg?t=st=1741944905~exp=1741948505~hmac=35311bfb9bdfbfeaa6b7f6eb425665ddb1d51660e77c3adf0e2ce94e80ff46cc&w=740' },
  { id: 2, name: 'Raw Rice', price: 19.99, origin: 'India', image: 'https://img.freepik.com/premium-photo/thai-jasmine-rice_1339-92459.jpg?w=1380' },
  { id: 3, name: 'Steam Rice', price: 22.99, origin: 'India', image: 'https://img.freepik.com/free-photo/cleaned-dried-brown-rice-stocked-large-wooden-tray-laid-out-tablecloth-marble-surface_114579-71480.jpg?t=st=1741945029~exp=1741948629~hmac=178c2c8a41a126bf45395db69f5a8535a7ec4195537d8a274388ecd00b92d319&w=1380' },
  { id: 4, name: 'Brown Rice', price: 15.99, origin: 'India', image: 'https://img.freepik.com/free-photo/flat-lay-rice-composition_23-2148130012.jpg?t=st=1741945068~exp=1741948668~hmac=b57300c0591c1b89e5813d1654aa8e530e0d5fa0739d7c5c6c0b4aff1abef928&w=1380' },
  { id: 5, name: 'Wheat', price: 29.99, origin: 'India', image: 'https://img.freepik.com/free-photo/sack-rice-seed-with-white-rice-small-wooden-spoon-rice-plant_1150-35744.jpg?t=st=1741945140~exp=1741948740~hmac=5af5ce93584a0b6468007521f9681b5e3edee418e5cfdb1a3716176cf9311f9b&w=1380' }
];

function Products() {
  const { addToCart } = useContext(CartContext);
  const [priceFilter, setPriceFilter] = useState('all');
  
  const filteredProducts = products.filter(product => {
    if (priceFilter === 'under20') return product.price < 20;
    if (priceFilter === '20to25') return product.price >= 20 && product.price <= 25;
    if (priceFilter === 'over25') return product.price > 25;
    return true;
  });

  return (
    <div className="products-page">
      <div className="filters">
        <h3>Filter by Price</h3>
        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
          <option value="all">All Prices</option>
          <option value="under20">Under ₹20</option>
          <option value="20to25">₹20 - ₹25</option>
          <option value="over25">Over ₹25</option>
        </select>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Origin: {product.origin}</p>
            <p className="price">₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

const App = () => {
    const [priceRange, setPriceRange] = useState([0, 50]);
    const [selectedType, setSelectedType] = useState('All');
  
    return (
      <div className="p-8">
        <Filters
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
        />
      </div>
    );
  };

export default Products;