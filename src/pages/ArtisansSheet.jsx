import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ArtisansSheet = () =>{
    

    const [artisan, setArtisans] = useState(null);
    const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/api/artisans/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArtisans(data);
      })
      .catch(err => {
      console.error("Erreur fetch artisans:", err);
    });
    }, []);

    if (!artisan) return <p>Recuperation</p>;

    console.log(id);

    return(
        <div>
            <h3> fiche artisan</h3>

            <p>{artisan.nom}</p>
            <p>{artisan.image}</p>
            <p>{artisan.note}</p>
            <p>{artisan.ville}</p>
            <p>{artisan.Specialite?.nom}</p>
            <p>{artisan.a_propos}</p>

            {artisan.email
            ? <p>{artisan.email}</p>
            : <p>{artisan.site_web}</p>
            }
            
        </div>
    )
}

export default ArtisansSheet;