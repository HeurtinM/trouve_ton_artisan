import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard";

const Home = ()=> {

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
      setArtisans([]); //ajouter après que mySQL ce soit fermer mais le catch ci dessus ne semblais pas réagir, créant un bug avec la fonction map dans le return
    });
  }, []);

  //j'utilise le fonction map pour mettre les artisans du mois dans des elements ArtisanCard. Fait en suivant divers post forums et surtout: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  return (
    <div>
      <h1>Bienvenu sur Trouve ton artisan !</h1>
      <section>
        <h2>Comment Trouver mon artisan ?</h2>
        <ul>
          <li>1. Choisir la catégorie d’artisanat dans le menu.</li>
          <li>2. Choisir un artisan.</li>
          <li>3. Le contacter via le formulaire de contact.</li>
          <li>4. Une réponse sera apportée sous 48h.</li>
        </ul>
      </section>
      <section>
      {artisans.map(a => (
        <ArtisanCard key={a.id} artisan={a} />
      ))}
      </section>
    </div>
  );
}

export default Home;
