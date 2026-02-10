import { useEffect, useState } from "react";

function Home() {

  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/artisans/top")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setArtisans(data);
      });
  }, []);

  return (
    <div>
      <h1>Accueil</h1>

      {artisans.map(a => (
        <div key={a.id}>
          {a.nom}
        </div>
      ))}

    </div>
  );
}

export default Home;
