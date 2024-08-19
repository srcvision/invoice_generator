import { useState, useRef } from "react";
import TableForm from "./components/TableForm";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Dates from "./components/Dates";
import ClientDetail from "./components/ClientDetail";
import Header from "./components/Header";
import ShopDetails from "./components/ShopDetails";
import ReactToPrint from "react-to-print";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("Saurav Chaudhari");
  const [address, setAddress] = useState("Vejalpur,Ahmedabad");
  const [mobile, SetMobile] = useState("6353307410");

  const [shopName, setShopName] = useState("Amezon");
  const [shopDes, setShopDes] = useState(
    "Mobiles, Electronics, Grocery, Fashion, Home & Kitchen"
  );
  const [shopAdd, SetShopAdd] = useState(
    "5/37A Near SBI Bank Ahmedabad, 441108"
  );
  const [notes, setNotes] = useState(
    "Thank you for shopping with us! Each order means the world to us, and we’re so happy you chose our small business today."
  );

  const [services, setServices] = useState("Maggie");
  const [quantity, setQuantity] = useState("4");
  const [rate, setRate] = useState("45");
  const [total, setTotal] = useState("");
  const [list, setList] = useState([]);

  const [sum, setSum] = useState(0);

  const componentsRef = useRef();

  const printStyles = `
    @media print {
      body {
        background-color: white;
        color: black;
      }
      .bg-black {
        background-color: white !important;
      }
      .text-white {
        color: black !important;
      }
      .print:hidden {
      display: none !important;
    }
    }
  `;

  return (
    <div className="bg-black text-white min-h-screen -m-4 overflow-hidden">
      <div>
        <h1 className="uppercase text-center mt-8 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold">
          Invoice Generator
        </h1>
      </div>
      <main className="  m-5 p-5 max-w-xl md:mx-auto xl:max-w-4xl xl:mx-auto rounded shadow">
        {showInvoice ? (
          <div ref={componentsRef}>
            <ReactToPrint
              trigger={() => (
                <button className="print:hidden px-6 mt-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg hover:shadow-sky-200 mb-4">
                  Print
                </button>
              )}
              content={() => componentsRef.current}
              pageStyle={printStyles}
            />
            {/* <Header /> */}
            <div className="bg-white text-black p-6">

            

            <ShopDetails
              shopName={shopName}
              shopDes={shopDes}
              shopAdd={shopAdd}
            />

            <Dates />

            <ClientDetail name={name} address={address} mobile={mobile} />

            <Items
              services={services}
              quantity={quantity}
              rate={rate}
              total={total}
              list={list}
              setList={setList}
              sum={sum}
            />

            {/* <Footer /> */}
            </div>
            <button
              onClick={() => setShowInvoice(false)}
              pageStyle={printStyles}
              className="print:hidden px-6 mt-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg hover:shadow-sky-200"
            >
              Edit Bill
            </button>
            <ReactToPrint
              trigger={() => (
                <button className="print:hidden px-6 mt-6 py-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:from-purple-500 hover:to-blue-500 rounded-lg shadow-lg hover:shadow-sky-200 ml-5">
                  Download
                </button>
              )}
              content={() => componentsRef.current}
              pageStyle={printStyles}
            />
          </div>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <label htmlFor="shopName" className="my-3">
                Shop Name
              </label>
              <input
                type="text"
                name="text"
                id="shopName"
                placeholder="Enter Shop Name"
                value={shopName}
                onChange={(e) => setShopName(e.target.value)}
                className="border rounded-md p-2 text-white bg-gray-800"
              />

              <label htmlFor="shopDes" className="my-3">
                Shop Description
              </label>
              <input
                type="text"
                name="text"
                id="shopDes"
                placeholder="Enter Shop Description"
                value={shopDes}
                onChange={(e) => setShopDes(e.target.value)}
                className="border rounded-md p-2 text-white bg-gray-800"
              />

              <label htmlFor="shopAdd" className="my-3">
                Shop Address
              </label>
              <input
                type="text"
                name="text"
                id="shopAdd"
                placeholder="Enter Shop Address"
                value={shopAdd}
                onChange={(e) => SetShopAdd(e.target.value)}
                className="border rounded-md p-2 text-white bg-gray-800"
              />

              <label htmlFor="notes" className="my-3">
                Notes to Customer
              </label>
              <input
                type="text"
                name="text"
                id="notes"
                placeholder="Enter Notes for Customer"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="border rounded-md p-2 text-white bg-gray-800"
              />

              <div className="flex flex-col md:flex-row justify-between mt-5">
                <div className="md:mr-3">
                  <label htmlFor="name" className="my-3">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Enter Customer's name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border ml-3 rounded-md p-2 text-white bg-gray-800"
                  />
                </div>

                <div className="md:ml-3">
                  <label htmlFor="mobile" className="my-3">
                    Mobile No:
                  </label>
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    placeholder="Enter 10-digit Customer Mobile Number"
                    value={mobile}
                    onChange={(e) => SetMobile(e.target.value)}
                    pattern="^\d{10}$"
                    title="Please enter a 10-digit mobile number"
                    className="border rounded-md p-2 ml-3 text-white bg-gray-800"
                  />
                </div>
              </div>

              <label htmlFor="address" className="my-3">
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                placeholder="Enter Customer's Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="border rounded-md p-2 text-white bg-gray-800"
              />

              <article>
                <TableForm
                  services={services}
                  setServices={setServices}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  rate={rate}
                  setRate={setRate}
                  total={total}
                  setTotal={setTotal}
                  list={list}
                  setList={setList}
                  sum={sum}
                  setSum={setSum}
                />
              </article>

              <button
                onClick={() => setShowInvoice(true)}
                className="px-6 py-2 w-1/4 justify-center align-center ml-80 bg-gradient-to-r from-purple-800 to-indigo-600 text-white transition duration-500 hover:scale-110 hover:-translate-y-1 hover:from-purple-700 hover:to-blue-600 rounded-lg shadow-lg hover:shadow-sky-200 mt-5"
              >
                Preview Bill
              </button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
