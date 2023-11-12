"use client";

import { useState } from "react";

type Props = {
  sendMessage: (message: string) => void;
};

export const MessageForm = (props: Props) => {
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.sendMessage(message);
    setMessage("");
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Type here"
          className="input input-bordered w-96"
          required
          onChange={(event) => setMessage(event.target.value)}
          value={message}
        />
        <button className="btn btn-active btn-primary mx-4">Primary</button>
      </form>
    </div>
  );
};