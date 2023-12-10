import { useState } from "react";

export const useErrorSocket = (socket) => {
  const [error, setError] = useState("");

  socket.on("error", (error) => {
    setError(error);
  });

  return { error };
};
