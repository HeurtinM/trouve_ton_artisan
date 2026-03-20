import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard";

const Home = () => {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/artisans/top")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArtisans(data);
      })
      .catch(err => {
        console.error("Erreur fetch artisans:", err);
        setArtisans([]);
      });
  }, []);

  return (
    <div className="container py-4" style={{ color: "#00497C" }}>
      <h1 className="text-center fw-bold mb-4">
        Bienvenu sur Trouve ton artisan !
      </h1>
      {/* layout desktop: 2 colonnes / mobile: 1 colonne */}
      <div className="row g-4">
        {/* div de gauche : Comment trouver mon artisan */}
        <div className="col-12 col-md-6" style={{ fontSize: "1.35rem" }}>
          <h2
            className="mb-3"
            style={{
              textDecoration: "underline",
              fontSize: "1.1rem",
              cursor: "pointer",
              color: "inherit"
            }}
          >
            Comment trouver mon artisan ?
          </h2>
          <ol className="ps-3" style={{ listStyleType: "decimal" }}>
            <li className="mb-1">Choisir la catégorie d'artisanat dans le menu.</li>
            <li className="mb-1">Choisir un artisan.</li>
            <li className="mb-1">Le contacter via le formulaire de contact.</li>
            <li className="mb-1">Une réponse sera apportée sous 48h.</li>
          </ol>
        </div>
        {/* div de droite : Artisans du mois */}
        <div className="col-12 col-md-6">
          <h2
            className="mb-3 text-center"
            style={{
              textDecoration: "underline",
              fontSize: "1.1rem"
            }}
          >
            Artisans du mois
          </h2>
          <div>
            {artisans.map(a => (
              <ArtisanCard key={a.id} artisan={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;