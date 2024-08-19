import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import { BiSolidEditAlt } from "react-icons/bi";
import { v4 as uuid } from "uuid";

export default function TableForm({
  services,
  setServices,
  quantity,
  setQuantity,
  rate,
  setRate,
  total,
  setTotal,
  list,
  setList,
  sum,
  setSum,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const calTotal = () => {
      const calculatedTotal = quantity * rate;
      setTotal(calculatedTotal);
    };

    calTotal();
  }, [quantity, rate, setTotal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation check
    if (!services || !quantity || !rate) {
      alert("Please fill in all fields.");
      return;
    }

    const newItems = {
      id: uuid(),
      services,
      quantity,
      rate,
      total,
      count: count + 1,
    };
    setServices("");
    setQuantity("");
    setRate("");
    setTotal("");
    setList([...list, newItems]);
    setIsEditing(false);
    setCount(count + 1);
  };

  const Editrow = (id) => {
    const editingRow = list.find((row) => row.id === id);
    setList(list.filter((row) => row.id !== id));
    setIsEditing(true);
    setServices(editingRow.services);
    setQuantity(editingRow.quantity);
    setRate(editingRow.rate);
  };

  const deleterow = (id) => setList(list.filter((row) => row.id !== id));

  useEffect(() => {
    const totalSum = list.reduce((acc, item) => acc + item.total, 0);
    setSum(totalSum);
  }, [list, setSum]);

  return (
    <>
      <form onSubmit={handleSubmit} className="p-5 shadow-lg rounded-lg">
        <div className="flex flex-col mb-4">
          <label htmlFor="services" className="font-bold mb-2">
            Product
          </label>
          <input
            type="text"
            name="Product"
            id="services"
            placeholder="Product Name"
            value={services}
            onChange={(e) => setServices(e.target.value)}
            className="p-2 border rounded text-white bg-gray-800"
          />
        </div>
        <div className="grid grid-cols-3 gap-10 mb-5">
          <div className="flex flex-col">
            <label htmlFor="quantity" className="font-bold mb-2">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="p-2 border rounded text-white bg-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="rate" className="font-bold mb-2">
              Rate
            </label>
            <input
              type="number"
              name="rate"
              id="rate"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="p-2 border rounded text-white bg-gray-800"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="total" className="font-bold mb-2">
              Total
            </label>
            <p className="p-2 border rounded text-white bg-gray-800">{total}</p>
          </div>
        </div>

        <button type="submit" className="px-6 mt-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg hover:shadow-sky-200">
          {isEditing ? "Save your edit" : "Add More Item"}
        </button>
      </form>

      <section className="mt-5">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="text-white bg-gray-800">
              <td className="border p-2">S.No</td>
              <td className="border p-2">Services</td>
              <td className="border p-2">Quantity</td>
              <td className="border p-2">Rate</td>
              <td className="border p-2">Total</td>
              <td className="border p-2">Actions</td>
            </tr>
          </thead>
          <tbody>
            {list.map(({ id, services, quantity, rate, total, count }) => (
              <tr key={id}>
                <td className="border p-2">{count}</td>
                <td className="border p-2">{services}</td>
                <td className="border p-2">{quantity}</td>
                <td className="border p-2">{rate}</td>
                <td className="border p-2 total">{total}</td>
                <td className="border p-2">
                  <button onClick={() => deleterow(id)} className="mr-2">
                    <TiDelete className="text-red-800 font-bold" />
                  </button>
                  <button onClick={() => Editrow(id)}>
                    <BiSolidEditAlt className="text-green-800 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mt-5">
          <h2 className="text-white text-3xl">
            Rs. {sum.toLocaleString()}
          </h2>
        </div>
      </section>
    </>
  );
}
