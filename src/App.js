import React from "react";
import { Routes, Route,  Link } from "react-router-dom";
import Home from "./pages/Home";
import ArtisanList from "./pages/ArtisansList";
import ArtisanSheet from "./pages/ArtisansSheet";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Accessibility from "./components/Accessibility";
import Cookies from "./components/Cookies";
import CookiesPolicy from "./components/CookiesPolicy";
import LegalMentions from "./components/LegalMentions";
import PersonalDatas from "./components/PersonalDatas";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return(
    <div className="App d-flex flex-column min-vh-100"> 
      <Header/>
      <main className="flex-grow-1">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/artisans" element={<ArtisanList />} />
        <Route path="/artisans/:id" element={<ArtisanSheet />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Accessibility" element={<Accessibility />} />
        <Route path="/Cookies" element={<Cookies/>}/>
        <Route path="/CookiesPolicy" element={<CookiesPolicy/>}/>
        <Route path="/LegalMentions" element={<LegalMentions/>}/>
        <Route path="/PersonalDatas" element={<PersonalDatas/>}/>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
