import React from "react";
import ChatMsg from "@mui-treasury/components/chatMsg/ChatMsg";
import "./friends.css"

const DefaultChatMsg = () => (
  <div>
    <ChatMsg
      avatar={""}
      messages={[
          "Hi Anthony, Hows the presentation going ?                                                                          ",
        "Hope it's going well!",
      ]}
    />
    <ChatMsg
      side={"right"}
      messages={[
        "Hey! Sorry I'm right in the middle of the presentation!",
        "I'll call you back soon!",
      ]}
    />
    <ChatMsg avatar={""} messages={["Im good.", "See u later."]} />
  </div>
);

export default DefaultChatMsg;
