import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import '../style.css'

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/Room/:${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="main">
      <div className="container-c flex justify-center items-center flex-col h-screen">
      <h1 className="head text-white text-6xl font-primaryFont font-bold">
        <i>Contact the Co-Founder</i>
        </h1>
      <form className="formi" onSubmit={handleSubmitForm}>
        <label htmlFor="email" className="email text-white">Email ID: </label> <br />
        
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="in border border-solid border-black"
        />
        <br />
        <label className="text-white" htmlFor="room">Room Number: </label> <br />
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className="in border border-solid border-black"
        />
        <br />
        <div className="flex justify-center items-center">
        <button className="jn text-white">Join</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Lobby;
