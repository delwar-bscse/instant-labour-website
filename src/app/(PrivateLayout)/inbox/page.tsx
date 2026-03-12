import { myFetch } from "@/utils/myFetch";
import InboxClient from "./InboxClient";

const Inbox = async ({ searchParams }: { searchParams: any }) => {
  const { chat_id, searchChat } = await searchParams;
  //console.log("Chat ID : ", chat_id)
  const queryParams = new URLSearchParams();
  if (searchChat) queryParams.set("searchTerm", searchChat);

  //console.log("Chat url : ", queryParams.toString())

  const getChatList = await myFetch(`/chat?${queryParams.toString()}`, {
    method: "GET",
    cache: "no-cache",
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
