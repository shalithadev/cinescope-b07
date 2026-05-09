"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
// import Profile from "./profile";
// import Gallery from "./gallery";
import { ChatRoom } from "./chat-room";

export default function FirstComponentPage() {
  const [roomId, setRoomId] = useState("general");
  const [show, setShow] = useState(false);
  // return <Profile />;
  // return <Gallery />;

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex gap-4 items-center">
        <label className="flex gap-4">
          Choose the chat room:{" "}
          <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
            <option value="general">general</option>
            <option value="travel">travel</option>
            <option value="music">music</option>
          </select>
        </label>
        <Button onClick={() => setShow(!show)}>
          {show ? "Close chat" : "Open chat"}
        </Button>
      </div>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} />}
    </div>
  );
}
