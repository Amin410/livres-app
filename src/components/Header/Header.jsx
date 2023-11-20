import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchForm from "../../components/SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Trouve ton livre.</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Un catalogue de 400 livres. Tape le nom du livre que tu veux dans la
            barre de recherche juste en bas et vérifie si on possède ce livre.
            Un catalogue de 400 livres. Tape le nom du livre que tu veux dans la
            barre de recherche juste en bas et vérifie si on possède ce livre.
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
