import { Link } from "react-router-dom";

const ArtisanCard = ({ artisan }) => {
  return (
    <Link to={`/artisans/${artisan.id}`}>
      <div>
        <h3>{artisan.nom}</h3>
        <p>{artisan.note}</p>
        <p>{artisan.ville}</p>
        <p>{artisan.Specialite?.nom}</p>
      </div>
    </Link>
  );
};

export default ArtisanCard;
