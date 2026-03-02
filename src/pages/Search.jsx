import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";

const Search = () =>{

    const [artisans, setArtisans] = useState([]);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get("q") || "";
  
  useEffect(() => {
    fetch(`http://localhost:5000/api/artisans/search?q=${q}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArtisans(data);
      })
      .catch(err => {
      console.error("Erreur fetch artisans:", err);
    });
  }, [q]);

    return(
        <div>
            <h1>Résultats pour {q}</h1>
            
            {artisans.map(a => (
                <ArtisanCard key={a.id} artisan={a} />
            ))}
        </div>
    )
}

export default Search;