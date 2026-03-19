import { Link } from "react-router-dom";

const ArtisanCard = ({ artisan }) => {

  const renderStars = (note) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i}>
          {i <= Math.round(note) ? "★" : "☆"}
        </span>
      );
    }

    return stars;
  };

  return (
    <Link 
      to={`/artisans/${artisan.id}`} 
      style={{ textDecoration: "none" }}
    >
      <div className="card mb-3 shadow-sm" style={{ color: "#00497C" }}>
        
        <div className="card-body">

          <div className="row align-items-center">

            {/* gauche */}
            <div className="col-6">
              <h5 className="fw-bold mb-1">
                {artisan.nom}
              </h5>

              <p className="mb-0">
                {artisan.ville}
              </p>
            </div>

            {/* droite */}
            <div className="col-6 text-end">

              <p className="mb-1 fw-semibold">
                {artisan.Specialite?.nom}
              </p>

              <div style={{ color: "#0074C7", fontSize: "20px" }}>
                {renderStars(artisan.note)}
              </div>

            </div>

          </div>

        </div>

      </div>
    </Link>
  );
};

export default ArtisanCard;