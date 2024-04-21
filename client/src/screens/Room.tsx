import React, { useEffect, useCallback, useState } from "react";
import ReactPlayer from "react-player";
import peer from "../services/Peers";
import { useSocket } from "../context/SocketProvider";
import { useNavigate } from "react-router-dom";
import '../style.css'

const RoomPage = () => {
  const navigate = useNavigate();
  const socket = useSocket();
  const [remoteSocketId, setRemoteSocketId] = useState(null);
  const [myStream, setMyStream] = useState();
  const [remoteStream, setRemoteStream] = useState();
  const [flag, setFlag] = useState(0);

  const handleUserJoined = useCallback(({ email, id }: any) => {
    console.log(`Email ${email} joined room`);
    setRemoteSocketId(id);
  }, []);

  const handleCallUser = useCallback(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    const offer = await peer.getOffer();
    socket.emit("user:call", { to: remoteSocketId, offer });
    setMyStream(stream);
    setFlag(1);
  }, [remoteSocketId, socket]);

  const handleIncommingCall = useCallback(
    async ({ from, offer }) => {
      setRemoteSocketId(from);
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setMyStream(stream);
      console.log(`Incoming Call`, from, offer);
      const ans = await peer.getAnswer(offer);
      socket.emit("call:accepted", { to: from, ans });
    },
    [socket]
  );

  const sendStreams = useCallback(() => {
    for (const track of myStream.getTracks()) {
      peer.peer.addTrack(track, myStream);
      setFlag(1);
    }
  }, [myStream]);

  const handleCallAccepted = useCallback(
    ({ from, ans }) => {
      peer.setLocalDescription(ans);
      console.log("Call Accepted!");
      sendStreams();
    },
    [sendStreams]
  );

  const handleNegoNeeded = useCallback(async () => {
    const offer = await peer.getOffer();
    socket.emit("peer:nego:needed", { offer, to: remoteSocketId });
  }, [remoteSocketId, socket]);

  useEffect(() => {
    peer.peer.addEventListener("negotiationneeded", handleNegoNeeded);
    return () => {
      peer.peer.removeEventListener("negotiationneeded", handleNegoNeeded);
    };
  }, [handleNegoNeeded]);

  const handleNegoNeedIncomming = useCallback(
    async ({ from, offer }) => {
      const ans = await peer.getAnswer(offer);
      socket.emit("peer:nego:done", { to: from, ans });
    },
    [socket]
  );

  const handleNegoNeedFinal = useCallback(async ({ ans }) => {
    await peer.setLocalDescription(ans);
  }, []);

  useEffect(() => {
    peer.peer.addEventListener("track", async (ev) => {
      const remoteStream = ev.streams;
      setRemoteStream(remoteStream[0]);
    });
  }, []);

  useEffect(() => {
    socket.on("user:joined", handleUserJoined);
    socket.on("incomming:call", handleIncommingCall);
    socket.on("call:accepted", handleCallAccepted);
    socket.on("peer:nego:needed", handleNegoNeedIncomming);
    socket.on("peer:nego:final", handleNegoNeedFinal);

    return () => {
      socket.off("user:joined", handleUserJoined);
      socket.off("incomming:call", handleIncommingCall);
      socket.off("call:accepted", handleCallAccepted);
      socket.off("peer:nego:needed", handleNegoNeedIncomming);
      socket.off("peer:nego:final", handleNegoNeedFinal);
    };
  }, [
    socket,
    handleUserJoined,
    handleIncommingCall,
    handleCallAccepted,
    handleNegoNeedIncomming,
    handleNegoNeedFinal,
  ]);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-white font-bold font-primaryFont text-6xl">
         <i>Room Page</i>
        </h1>
      <h4 className="text-white text-2xl">
        {remoteSocketId
          ? "Live Stream"
          : "Please wait for the second person to join"}
      </h4>
    <div className="flex justify-center items-center">
    {myStream && <button className="text-white bg-bgPrimary px-4 py-2 rounded-2xl mb-2 mx-4" onClick={sendStreams}>Join Confrence</button>}
      {remoteSocketId && <button className="text-white bg-bgPrimary px-4 py-2 rounded-2xl mb-2" onClick={handleCallUser}>Start Call</button>}
    </div>
     <div className="flex justify-center items-center">
     {myStream && (
        <>
         <div className="flex flex-col justify-between items-center mx-5">
         <h1 className="text-white text-2xl">Host</h1>
          <ReactPlayer
            playing
            muted
            height="500px"
            width="500px"
            url={myStream}
          />
         </div>
        </>
      )}
      {remoteStream && (
        <>
         <div className="flex flex-col justify-center items-center">
         <h1 className="text-white text-2xl">Participant</h1>
          <ReactPlayer
            playing
            muted
            height="500px"
            width="500px"
            url={remoteStream}
          />
         </div>
        </>
      )}
     </div>
      {flag === 1 && (
        <button
          onClick={() => {
            window.location.reload();
          }}
        className="text-white text-2xl bg-bgPrimary px-6 rounded-2xl">
          Leave Call
        </button>
      )}
    </div>
  );
};

export default RoomPage;
