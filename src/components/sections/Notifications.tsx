"use client";

import { myFetch } from "@/utils/myFetch";
import { formatUrl } from "@/utils/formatUrl";
import { relativeTime } from "@/utils/relativeTimes";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";
import { getCookie } from "cookies-next";
import { useNotification } from "@/context/NotificationContext";

interface Notification {
  _id: string;
  title: string;
  body: string;
  createdAt: string;
  from: {
    _id: string;
    name: string;
    profile: string;
  };
  isRead: boolean;
}

// const SOCKET_URL = "http://10.10.7.50:5002/";
// const SOCKET_URL = "https://api.instantlabour.co.uk/";
const SOCKET_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState<string | null>(null);
  const socketRef = useRef<Socket | null>(null);
  const now = new Date();
  const { resetUnreadCount } = useNotification();

  // Reset badge count on mount
  useEffect(() => {
    resetUnreadCount();
  }, [resetUnreadCount]);

  // 1. Fetch User Profile to get ID
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await myFetch("/user/profile", { method: "GET" });
        if (res.success && res.data?._id) {
          setUserId(res.data._id);
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
      }
    };
    getProfile();
  }, []);

  // 2. Initial Fetch of Notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await myFetch("/notifications", { method: "GET" });
        if (res.success) {
          setNotifications(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch notifications:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  // 3. Socket Connection
  useEffect(() => {
    if (!userId) return;

    const accessToken = getCookie("accessToken");

    const socket = io(SOCKET_URL, {
      transports: ["websocket", "polling"],
      withCredentials: true,
      auth: {
        token: accessToken,
      },
    });
    socketRef.current = socket;

    socket.on("connect", () => {
      console.log("Notification Socket connected:", socket.id);
    });

    socket.on(`notification::${userId}`, (newNotification: any) => {
      setNotifications((prev) => [newNotification, ...prev]);
    });

    return () => {
      socket.disconnect();
    };
  }, [userId]);

  if (isLoading) {
    return (
      <div className="maxWidth py-20 flex justify-center items-center">
        <div className="size-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="maxWidth min-h-screen py-20 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-3xl text-brandClr1">Notifications</h3>
        {notifications.length > 0 && (
          <button
            onClick={async () => {
              try {
                const res = await myFetch("/notifications/all", {
                  method: "GET",
                });
                if (res.success) {
                  setNotifications((prev) =>
                    prev.map((n) => ({ ...n, isRead: true }))
                  );
                  resetUnreadCount();
                }
              } catch (error) {
                console.error("Failed to mark all as read:", error);
              }
            }}
            className="text-sm font-medium text-primary hover:text-primary/80 underline"
          >
            Read All
          </button>
        )}
      </div>
      {notifications.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          No notifications found.
        </p>
      ) : (
        notifications.map((item) => (
          <div
            key={item._id}
            className={`flex items-center gap-4 p-3 border shadow-md rounded-md ${
              !item.isRead ? "bg-primary/5 border-primary/20" : "bg-white"
            }`}
          >
            <Image
              src={formatUrl(item.from?.profile)}
              alt="User"
              width={50}
              height={50}
              className="w-[50px] h-[50px] object-cover rounded-full bg-gray-100"
            />
            <div className="flex-1">
              <p className="flex flex-col gap-2">
                <span
                  className={`text-gray-600 md:text-lg ${
                    !item.isRead ? "font-bold" : "font-medium"
                  }`}
                >
                  {item.body || item.title}
                </span>
                <span className="text-gray-500 text-[11px]">
                  {relativeTime(item.createdAt, { now })}
                </span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
