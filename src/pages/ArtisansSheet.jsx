import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import ContactForm from "../components/ContactForm";

const ArtisansSheet = () => {
  const [artisan, setArtisans] = useState(null);
  const [showModal, setShowModal] = useState(false);
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

  const prefix = () => {
    if ("AEIOUYHaeiouyh".includes(artisan.nom.charAt(0))) {
      return "d'";
    } else {
      return "de ";
    }
  };

  const renderStars = (note) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ fontSize: "20px" }}>
          {i <= Math.round(note) ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="container py-4" style={{ color: "#00497C" }}>

      {/* Titre */}
      <h1 className="text-center fw-bold mb-4">
        Fiche Artisan {prefix()}{artisan.nom}
      </h1>

      {/* Bloc principal */}
      <div className="row g-4 justify-content-between">

        {/* Colonne gauche : infos + image */}
        <div className="col-12 col-md-6" style={{ marginLeft: "-5rem" }}> {/* le marginLeft negatif est une solution très moche pour positioner cette section comme dans la maquette mais je n'ai pas trouver de solution bootstrap*/}
          <div className="row">

            {/* Infos */}
            <div className="col-6">
              <h2 className="fw-bold">{artisan.nom}</h2>
              <p className="mb-1">{artisan.ville}</p>
              <p className="mb-1">{artisan.Specialite?.nom}</p>
              <div>{renderStars(artisan.note)}</div>
            </div>

            {/* Image */}
            <div className="col-6">
              {artisan.image ? (
                <img
                  src={artisan.image}
                  alt={artisan.nom}
                  className="img-fluid rounded"
                />
              ) : (
                <div
                  className="bg-secondary rounded d-flex align-items-center justify-content-center"
                  style={{ width: "100%", aspectRatio: "1 / 1" }}
                >
                  <span style={{ color: "white", fontSize: "2rem" }}>🖼</span>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Colonne droite : À propos */}
        <div className="col-12 col-md-4">
          <h2 className="fw-bold">À propos</h2>
          <p>{artisan.a_propos}</p>
        </div>

      </div>

      {/* Bouton Contactez moi */}
      {artisan.email && (
        <div className="text-center mt-4">
          <button
            className="btn btn-outline-primary px-4"
            onClick={() => setShowModal(true)}
          >
            Contactez moi
          </button>
        </div>
      )}

      {/* Site web si pas d'email */}
      {!artisan.email && artisan.site_web && (
        <div className="text-center mt-4">
          <a href={artisan.site_web} target="_blank" rel="noreferrer">
            {artisan.site_web}
          </a>
        </div>
      )}

      {/* Modale formulaire de contact */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#00497C" }}>
            Contacter {artisan.nom}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ContactForm artisan={artisan} onSuccess={() => setShowModal(false)} />
        </Modal.Body>
      </Modal>

    </div>
  );
};

export default ArtisansSheet;