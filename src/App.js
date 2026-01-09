import React from "react";

class App extends React.Component {
  render(){
    return(
      <div className="d-flex flex-column min-vh-100">
        <header>
          <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#F1F8FC" }}>
            <div className="container-fluid">
              <a  className="navbar-brand" href="#">
                  <img src="/Logo.png" alt="Logo" className="img-fluid" width={241}></img>
              </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link fs-4" href="#">Batiment</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4" href="#">Fabrication</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fs-4" href="#">Alimentation</a>
                    </li>                                        
                  </ul>
                  <form className="d-flex ms-auto" role="search">
                    <input className="form-control me-2" type="search" placeholder="Rechercher" aria-label="Search"/>
                    <button className="btn btn-outline-secondary" type="submit"> &#x1F50D;trouver un artisan </button>
                  </form>
                </div>
            </div>
          </nav>
        </header>
        <main className="flex-fill">
          <h1>placeholder trouvetonartisan</h1>
        </main>
        <footer className="footer mt-auto py-3" style={{ backgroundColor: "#F1F8FC" }}>
          <div class="row w-75 mx-auto px-auto">
            <section className="col-md-2 offset-md-1">
              <p className="fw-bold fs-5">Addresse et contacts</p>
              <address>
                101 cours Charlemagne <br/>
                CS 20033 <br/>
                69269 LYON CEDEX 02 <br/>
                France <br/>
                <a href="tel:+330426734000">+33 (0)4 26 73 40 00</a>
              </address>
            </section>
            <section className="col-md-2 offset-md-6">
              <p className="fw-bold fs-5">Pages légales</p>
              <address>
                <a href="#">mention légales</a><br/>
                <a href="#">données personelles</a><br/>
                <a href="#">accessibilité</a><br/>
                <a href="#">cookies</a><br/>
              </address>
            </section>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;