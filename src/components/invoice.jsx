import React from "react";
import { ReactComponent as LogoIcon } from "../assets/svg/Vector.svg";
import { ReactComponent as Vector14 } from "../assets/svg/Vector14.svg";
import { ReactComponent as Line15 } from "../assets/svg/Vector15.svg";
import { CardArray } from "./homepage";
import { useParams } from "react-router-dom";
import * as images from "../assets/images";
import { v4 as uuidv4 } from "uuid";

const Invoice = () => {
  const uid = uuidv4();
  const list = CardArray;
  const { id, ticketQuantity, totalAmount, fullName, address, city, country } =
    useParams();
  const selectedCard = CardArray.find((card) => String(card.id) === id);
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const Datecurrent = new Date();
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const Dateformatted = Datecurrent.toLocaleString("en-US", options);

  const vatRate = 0.13;

  const TicketSections = [];
  for (let i = 0; i < parseInt(ticketQuantity, 10); i++) {
    TicketSections.push(
      <React.Fragment key={`section-${i}`}>
        <div className="mt-20 flex gap-2 ">
          <div>
            <Vector14 />
          </div>
          <div className="mt-2">
            <img className="w-[1375px]" src={images.Line} />
          </div>
        </div>
        <div className="mt-7 bg-white flex gap-10 p-10 w-[60%] ">
          <img
            className="w-[20%] h-[20%]"
            src={selectedCard.image}
            alt={selectedCard.title}
          />
          <div className="">
            <h1 className="font-bold">{selectedCard.title}</h1> <br />
            {Dateformatted}
            <div className="mt-5 flex gap-5">
              <Line15 className="mt-1" />
              <h1 className="">x1</h1>
            </div>
            <div className="flex  gap-2 mt-5">
              <h1>total:</h1>
              <h1 className="font-bold mb-10">$500.00</h1>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

  return (
    <>
      <div className="p-7 bg-Red text-white sticky top-0">
        <div className="flex gap-4 ml-10 ">
          <LogoIcon />
          <h1 className="text-2xl font-bold ">TickTicketing</h1>
        </div>
      </div>
      <div className="bg-shadow">
        <div className="p-14">
          <h1 className="font-bold text-2xl">Invoice</h1>
          <div className="mt-10">
            <div className="flex justify-between ">
              <h1>Invoice to {fullName}</h1>
              <h1>Invoice ID :{uid}</h1>
            </div>
            <div className="flex justify-between mt-7">
              <h1>{address}</h1>
              <h1>Order Date :{formattedDate}</h1>
            </div>
            <h1 className="mt-7">
              {city},{country}
            </h1>
          </div>
          <div className="mt-10 bg-shadow shadow-2xl p-5  border ">
            <table className="w-full">
              <tr className="flex ">
                <th>#</th>
                <th className="ml-20">Event Detail</th>
                <th className="ml-48">Event Type</th>
                <th className="ml-32">Ticket</th>
                <th className="ml-32">Unit Price</th>
                <th className="ml-32">Discount</th>
                <th className="ml-32">Total</th>
              </tr>
            </table>
          </div>
          <div className="bg-white border">
            <table className="w-full">
              <tr className="flex p-5">
                <td>1</td>
                <td className="ml-10">{selectedCard.title}</td>
                <th className="ml-10">{selectedCard.buttonText}</th>
                <th className="ml-40">x{ticketQuantity}</th>
                <th className="ml-32">$500.00</th>
                <th className="ml-32">$0.00</th>
                <th className="ml-32">
                  {(parseFloat(totalAmount) + totalAmount * vatRate).toFixed(2)}
                </th>
              </tr>
              <tr>
                <td colSpan="7">
                  <hr />
                </td>
              </tr>
              <tr>
                <td colSpan="7" className="flex justify-end font-bold text-2xl p-5 ">
                  Invoice Total:{" "}
                  {(parseFloat(totalAmount) + totalAmount * vatRate).toFixed(2)}
                </td>
              </tr>
            </table>
          </div>
          {TicketSections}
        </div>
      </div>
    </>
  );
};

export default Invoice;
