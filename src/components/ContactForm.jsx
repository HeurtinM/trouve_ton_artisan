import { useState } from "react";

const ContactForm = ({ artisan }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(""); // pour feedback

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
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
        setStatus("Message envoyé !");
      } else {
        setStatus("Erreur d'envoi : " + data.error);
      }
    } catch (err) {
      console.error("Erreur fetch contact:", err);
      setStatus("Erreur réseau, réessayez");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Votre nom</h3>
      <input
        type="text"
        placeholder="Nom"
        value={nom}
        onChange={(e) => setNom(e.target.value)}
      />

      <input
        type="text"
        placeholder="Prenom"
        value={prenom}
        onChange={(e) => setPrenom(e.target.value)}
      />

      <h3>Email</h3>
      <input
        type="email"
        placeholder="exemple@mail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <h3>Sujet</h3>
      <input
        type="text"
        placeholder="Sujet"
        value={sujet}
        onChange={(e) => setSujet(e.target.value)}
      />

      <h3>Message</h3>
      <textarea
        placeholder="Votre message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button type="submit">Envoyer</button>

      {status && <p>{status}</p>}
    </form>
  );
};

export default ContactForm;
