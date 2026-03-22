import { useState } from "react";

const ContactForm = ({ artisan, onSuccess }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  //fonction pour envoyer un mail via le formulaire de contact
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          artisanEmail: artisan.email,
          nom,
          email,
          sujet,
          message
        })
      });
      const data = await response.json();
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error: " + data.error);
      }
    } catch (err) {
      console.error("Erreur fetch contact:", err);
      setStatus("error: Erreur réseau, réessayez");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ color: "#00497C" }}>
      <h3>Votre nom</h3>
      <div className="row mb-3">
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            required
          />
        </div>
      </div>
      <h3>Email</h3>
      <div className="mb-3">
        <input
          className="form-control"
          type="email"
          placeholder="myname@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <h3>Sujet</h3>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Sujet"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
          required
        />
      </div>
      <h3>Message</h3>
      <div className="mb-3">
        <textarea
          className="form-control w-100"
          placeholder="Votre message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          required
        />
      </div>
      <div className="text-center">
        {status === "success" ? (
          <>
            <p className="text-success fw-bold">Message envoyé !</p>
            <button
              type="button"
              className="btn btn-outline-primary px-4"
              onClick={onSuccess}
            >
              Fermer
            </button>
          </>
        ) : (
          <>
            {status && <p className="text-danger">{status.replace("error: ", "")}</p>} {/*affiche un message d'érreur plus clair pour l'utilisateur en cas de besoin*/}
            <button type="submit" className="btn btn-outline-primary px-4">
              Envoyer
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default ContactForm;