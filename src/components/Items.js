import React from 'react';
import { TiDelete } from "react-icons/ti";
//import { BiSolidEditAlt } from "react-icons/bi";
//import "./Dates.css"; // Remove this line

export default function items({ list, setList, Editrow, sum }) {
  const deleterow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <section className="mb-5">
        <table className="w-full text-lg">
          <thead>
            <tr className="font-bold text-xl">
              <th className="w-1/12 text-center">S.No</th>
              <th className="w-8/12 text-left pl-9">Product</th>
              <th className="w-1/12 text-center">Quantity</th>
              <th className="w-1/12 text-center">Rate</th>
              <th className="w-1/12 text-center">Total</th>
            </tr>
          </thead>
          {list.map(({ id, services, quantity, rate, total, count }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr className="text-lg">
                  <td className="text-center">{count}</td>
                  <td className="pl-9">{services}</td>
                  <td className="text-center">{quantity}</td>
                  <td className="text-center">{rate}</td>
                  <td className="text-center">{total}</td>
                  <td>
                    <button onClick={() => deleterow(id)}>
                      <TiDelete className="text-red-800 font-bold not-Print" />
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody></tbody>
            </React.Fragment>
          ))}
        </table>
        <div className="flex justify-end mt-4">
          <h2 className="text-2xl font-bold">Rs. {sum.toLocaleString()}</h2>
        </div>
      </section>
    </>
  );
}
