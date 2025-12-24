import { myFetch } from "@/utils/myFetch";
import InboxClient from "./InboxClient";

const Inbox = async () => {
  const getChatList = await myFetch("/chat", {
    method: "GET",
  });

  return (
    <div className="mb-10">
      <InboxClient chatList={getChatList} />
    </div>
  );
};

export default Inbox;
