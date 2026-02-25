import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <nav>
        <ul>
            <li>101 cours Charlemagne</li>
            <li>CS 20033</li>
            <li>69269 LYON CEDEX 02</li>
            <li>France</li>
            <li><a href="tel:+33426734000">+33 (0)4 26 73 40 00</a></li>
        </ul>
        <ul>
          <li><Link to="/Accessibility">Mentions légales</Link></li>
          <li><Link to="/PersonalDatas">Données personnelles</Link></li>
          <li><Link to="/CookiesPolicy">Accessibilité</Link></li>
          <li><Link to="/LegalMentions">Politique des cookies</Link></li>
          <li><Link to="/Cookies">Gestion des cookies</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;