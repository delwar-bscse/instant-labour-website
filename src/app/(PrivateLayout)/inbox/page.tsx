import { myFetch } from "@/utils/myFetch";
import InboxClient from "./InboxClient";

const Inbox = async ({ searchParams }: { searchParams: any }) => {
  const { chat_id } = await searchParams;
  console.log("Chat ID : ", chat_id)
  const getChatList = await myFetch("/chat", {
    method: "GET",
  });

  const getChat = await myFetch(`/chat/${chat_id}`, {
    method: "GET",
  });
  // console.log("Get Chats : ", getChatList?.data)
  // console.log("Get Chat : ", getChat?.data)

  return (
    <div className="mb-10">
      <InboxClient chatList={getChatList} singleChat={getChat?.data} />
    </div>
  );
};

export default Inbox;
