import React from "react";
import faeredu from "../assets/faer.svg";

export default function Navbar() {
  return (
    <nav classNameName="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="https://faeredu.web.app/" target="_blank" rel="noreferrer">
          <img className="h-12" src={faeredu} alt="Learn with Sumit" />
        </a>
      </div>
    </nav>
  );
}
