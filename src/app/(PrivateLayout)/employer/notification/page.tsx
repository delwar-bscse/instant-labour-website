"use client";

import { notificationDatas } from "@/data/notificationDatas";
import Image from "next/image";
import { relativeTime } from "@/utils/relativeTimes";

export default function NotificationPage() {
  const now = new Date(); // no tz conversion needed

  return (
    <div className="maxWidth py-20 space-y-4">
      {notificationDatas.map((item) => (
        <div
          key={item._id}
          className="flex items-center gap-4 p-3 border shadow-md rounded-md"
        >
          <Image
            src={item.image}
            alt={item.msg}
            width={50}
            height={50}
            className="w-[50px] h-[50px] object-cover rounded-full"
          />
          <div className="flex-1">
            <p className="flex flex-col gap-2">
              <span className="font-bold text-gray-600 text-lg">{item.msg}</span>
              <span className="text-gray-500 text-[11px]">
                {relativeTime(item.createdAt, { now })}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
