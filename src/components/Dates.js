import React, { useEffect, useState } from "react";
//import "./Dates.css"; // Remove this line

export default function Dates() {
  const [billNumber, setBillNumber] = useState("");
  const [billedDate, setBilledDate] = useState("");
  const [billTime, setBillTime] = useState("");

  useEffect(() => {
    // Create a new Date object to get the current date and time
    const currentDate = new Date();

    // Format the date in a custom format (e.g., yyyy-mm-dd)
    const formattedDate = `${currentDate
      .getDate()
      .toString()
      .padStart(2, "0")}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate.getFullYear()}`;

    // Format the time in 12-hour clock format (e.g., hh:mm AM/PM)
    const hours = currentDate.getHours() % 12 || 12;
    const minutes = currentDate.getMinutes();
    const amOrPm = currentDate.getHours() >= 12 ? "PM" : "AM";
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${amOrPm}`;

    // Generate a bill number using date and randomVal
    const randomVal = Math.floor(Math.random() * 100);
    const billNumber = `B${formattedDate.replace(/-/g, "")}-${randomVal}`;

    // Update the state with the calculated values
    setBillNumber(billNumber);
    setBilledDate(formattedDate);
    setBillTime(formattedTime);
  }, []);

  return (
    <>
      <hr className="my-4 border-gray-300" />
      <article>
        <ul>
          <div className="flex justify-between mb-2">
            <div></div>
            <div>
              <span className="block text-lg font-medium">Date : {billedDate}</span>
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <div>
              <span className="block text-lg font-medium">Bill No : {billNumber}</span>
            </div>
            <div>
              <span className="block text-lg font-medium">Time : {billTime}</span>
            </div>
          </div>
        </ul>
      </article>
    </>
  );
}
