import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCategories(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error("Erreur fetch categories:", err);
        setCategories([]);
      });
  }, []);

  return (
    <header>
      <nav>
        <Link to = "/">Home</Link>
        {categories.map(categorie => (
          <Link to={`/search?q=${categorie.nom}`}> {categorie.nom} </Link>
        ))}
        <form action="/search" method="GET">
          <input
            type="text"
            name="q"
            placeholder="Rechercher un artisan..."
          />
          <button type="submit">Rechercher</button>
        </form>
      </nav>
    </header>
  );
};

export default Header;
