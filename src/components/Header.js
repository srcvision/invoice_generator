import React from "react";
//import "./header.css"; // Remove this line

export default function Header() {
  return (
    <>
      <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">
        
        {/* Uncomment and update styles if needed */}
        {/* 
        <div>
          <ul className="flex items-center justify-between flex-wrap mb-5">
            <li>
              <button onClick={printpdf} className="bg-blue-500 text-white px-4 py-2 rounded not-Print">
                Print
              </button>
            </li>
            <li>
              <button onClick={printpdf} className="bg-green-500 text-white px-4 py-2 rounded not-Print">
                Download
              </button>
            </li>
            <li>
              <button className="bg-red-500 text-white px-4 py-2 rounded not-Print">
                Send
              </button>
            </li>
          </ul>
        </div>
        */}
        
        <div>
          <h1 className="font-bold uppercase tracking-wide text-3xl not-Print">
            Invoice Generator
          </h1>
        </div>
      </header>
    </>
  );
}
