import { useState, useEffect } from "react";
import { createConnection } from "./chat";

interface ChatRoomProps {
  roomId: string;
}

export function ChatRoom({ roomId }: ChatRoomProps) {
  const [serverUrl, setServerUrl] = useState("https://localhost:1234");

  // useEffect with dependencies runs when the component mounts and whenever the specified dependencies (serverUrl and roomId) change.
  // This is useful for managing side effects that depend on props or state,
  // such as establishing a connection to a server based on the current roomId and serverUrl.
  useEffect(() => {
    const connection = createConnection({ serverUrl, roomId });
    connection.connect();
    // This cleanup function will be called when the component unmounts or when serverUrl or roomId changes.
    //  It ensures that the connection is properly disconnected to prevent memory leaks and unintended side effects.
    // This replacement of componentDidUnmount lifecycle method ensures that the connection is properly
    // cleaned up when the component is removed from the DOM, preventing potential memory leaks and
    // ensuring that resources are released appropriately.
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);

  // useEffect with empty dependency array runs only once when the component mounts and the cleanup function
  // runs when the component unmounts. This is useful for logging or performing actions that should only happen on
  // mount and unmount, without being affected by changes in props or state.
  useEffect(() => {
    console.log("useEffect with empty dependency array");
    return () => {
      console.log("useEffect with empty dependency array cleanup");
    };
  }, []);

  // useEffect without dependencies runs after every render, which can lead to
  // performance issues if it contains expensive operations.
  useEffect(() => {
    console.log("useEffect without dependencies");
  });

  return (
    <>
      <label>
        Server URL:{" "}
        <input
          value={serverUrl}
          onChange={(e) => setServerUrl(e.target.value)}
        />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}
