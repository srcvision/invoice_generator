import React from "react";

export default function ShopDetails({ shopName, shopDes, shopAdd }) {
  return (
    <>
      <section className="flex flex-col items-center ml-2 mb-5 text-gray-900">
        <h2 className="uppercase text-5xl font-bold">
          {shopName}
        </h2>
        <h3 className="text-xl mt-4">
          {shopDes}
        </h3>
        <p className="mb-2 text-xl mt-2">
          Address:-  {shopAdd}
        </p>
      </section>
    </>
  );
}
