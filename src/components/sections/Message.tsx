import Image from "next/image";
import React from "react";
import { IoIosSend } from "react-icons/io";
import { Input } from "@/components/ui/input";

const Message = ({ msgDetails }: { msgDetails: Record<string, any> }) => {
  return (
    <>
      {/* ------------------- Chat Header ------------------- */}
      <div key={msgDetails.id} className="flex items-center gap-4 p-3 border-b">
        <div>
          <Image
            src={msgDetails.img}
            alt={msgDetails.name}
            width={100}
            height={100}
            className="w-[50px] h-[50px] object-fit rounded-full"
          />
        </div>
        <div className="flex-1">
          <p className="flex flex-col ">
            <span className="font-semibold text-gray-800 text-lg">
              {msgDetails.name}
            </span>
            <span className="text-gray-500 text-[11px]">
              Kamran is typing...
            </span>
          </p>
        </div>
      </div>
      {/* ------------------- Messages ------------------- */}
      <div
        className="overflow-y-scroll scrollbar-hide"
        style={{ height: "calc(100vh - 260px)" }}
      >
        <div className="flex flex-col-reverse justify-end gap-4 p-4">
          {msgDetails.message.map((item: any) => (
            <div
              key={item.id}
              className={`flex flex-col ${
                item.role === "worker" ? "flex-row-reverse" : "flex-row"
              } flex gap-4 group`}
            >
              <div
                key={item.id}
                className={`${
                  item.role === "worker" ? "bg-[#6D6DFF]" : "bg-[#E6E6E6]"
                } p-4 rounded-2xl w-[500px]`}
              >
                <p
                  className={`${
                    item.role === "worker" ? "text-white" : "text-gray-800"
                  }`}
                >
                  {item.msg}
                </p>
                <span
                  className={`${
                    item.role === "worker" ? "text-white" : "text-gray-800"
                  } text-[11px]`}
                >
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ------------------- Write & Send Message ------------------- */}
      <div className="flex items-center gap-4 p-4">
        <Input
          type="text"
          variant="msgField"
          placeholder="type..."
          className="flex-1 transition-all duration-300 bg-white h-11 rounded-full outline-none focus-visible:ring focus-visible:ring-gray-300 focus-visible:border-gray-300"
        />
        <span
          className={`text-2xl cursor-pointer bg-white p-2.5 rounded-full shadow-md hover:scale-105 transition-all duration-300 border`}
        >
          <IoIosSend className="text-gray-600 hover:text-gray-400 transition-all duration-300 text-2xl" />
        </span>
      </div>
    </>
  );
};

export default Message;
