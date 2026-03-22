import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ArtisanCard from "../components/ArtisanCard";

const Search = () =>{

    const [artisans, setArtisans] = useState([]);
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const q = queryParams.get("q") || "";
    //fonction de recherche standard. recherche dans les data tout les elements qui ont le string renseigner par l'utilisateur
    useEffect(() => {
      fetch(`${import.meta.env.VITE_API_URL}/api/artisans/search?q=${q}`)
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
        <div className="container py-4" style={{ color: "#00497C" }}>
        <h1 className="mb-4">Résultats pour « {q} »</h1>
        <div className="row row-cols-1 row-cols-md-2 g-3">
          {artisans.map(a => (
            <div className="col" key={a.id}>
              <ArtisanCard artisan={a} />
            </div>
          ))}
        </div>
      </div>
    )
}

export default Search;