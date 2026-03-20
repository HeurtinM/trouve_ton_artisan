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
<header className="navbar navbar-expand-lg bg-light" style={{backgroundColor: "#F1F8FC"}}>
  <div className="container-fluid">
    {/*elements de la navbar*/}
    <Link className="navbar-brand" to="/"> {/*le logo est intégré dans la navbar pour satisfaire la demande de pouvoir cliquer dessus pour returner au menu principale*/}
      <img src="/Logo.png" alt="Logo Trouve ton artisan" width="220"/>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <div className="navbar-nav ms-auto ">
        {categories.map(categorie => (
          <Link
            key={categorie.id}
            className="nav-link"
            to={`/search?q=${categorie.nom}`}
          >
            {categorie.nom}
          </Link>
        ))}
      </div>
      <form className="d-flex" action="/search" method="GET">
        <input
          className="form-control me-2"
          type="text"
          name="q"
          placeholder="Rechercher un artisan..."
          required
        />
        <button className="btn btn-outline-primary">
          Rechercher
        </button>
      </form>

    </div>
  </div>
</header>
);
};

export default Header;
