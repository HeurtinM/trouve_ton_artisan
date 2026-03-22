import { useEffect, useState } from "react";
import ArtisanCard from "../components/ArtisanCard";

//list de tout les artisans. non accessible directement via le site, utilisé à des fin de test + si besoin dans le future
const ArtisansList = () =>{

    const [artisans, setArtisans] = useState([]);
  
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/artisans`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArtisans(data);
      })
      .catch(err => {
      console.error("Erreur fetch artisans:", err);
    });
  }, []);
    return(
        <div>
            <h1>la liste des artisans</h1>
            {artisans.map(a => (
                <ArtisanCard key={a.id} artisan={a} />
            ))}
        </div>
    )
}

export default ArtisansList;