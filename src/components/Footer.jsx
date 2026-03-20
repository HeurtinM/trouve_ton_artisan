import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#0074C7", color: "white" }}>
      <div className="container py-4">
        <div className="row">
          {/* adresse */}
          <div className="col-12 col-md-6">
            <ul className="list-unstyled">
              <li>101 cours Charlemagne</li>
              <li>CS 20033</li>
              <li>69269 LYON CEDEX 02 France</li>
              <li>
                <a href="tel:+33426734000" style={{ color: "white" }}>
                  +33 (0)4 26 73 40 00
                </a>
              </li>
            </ul>
          </div>
          {/* ligne de séparation, n'apparait que sur mobile */}
          <hr className="border-light d-md-none"/>
          {/* liens */}
          <div className="col-12 col-md-6">
            <ul className="list-unstyled d-flex flex-wrap gap-3 d-md-block text-start text-md-end">
              <li><Link to="/LegalMentions" style={{ color: "white" }}>Mentions légales</Link></li>
              <li><Link to="/PersonalDatas" style={{ color: "white" }}>Données personnelles</Link></li>
              <li><Link to="/Accessibility" style={{ color: "white" }}>Accessibilité</Link></li>
              <li><Link to="/CookiesPolicy" style={{ color: "white" }}>Politique des cookies</Link></li>
              <li><Link to="/Cookies" style={{ color: "white" }}>Gestion des cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;