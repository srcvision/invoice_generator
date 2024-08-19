import React from "react";
//import "./clientdetails.css"; // Remove this line

export default function ClientDetail({ name, address, mobile }) {
  return (
    <>
      <hr className="my-4 border-gray-300" />
      <section className="mb-4">
        <ul>
          <li className="mb-2">
            <span className="mr-5 font-semibold">Name</span> : {name}
          </li>
          <li className="mb-2">
            <span className="mr-3 font-semibold">Mobile</span> : {mobile}
          </li>
          <li className="mb-2">
            <span className="mr-2 font-semibold">Address</span> : {address}
          </li>
        </ul>
      </section>
      <hr className="my-4 border-gray-300" />
    </>
  );
}
