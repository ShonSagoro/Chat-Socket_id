import io from "socket.io-client";

const socket = io("http://127.0.0.1:4000");

const sendMessage=(socketRec, message)=>{
    socketRec.emit("message", message);
}

const pullMessages=(socketRec, fuction)=>{
    socketRec.on("message", fuction);

    return () => {
        socketRec.off("message", fuction);
    };
}

const sendName=(socketRec, name)=>{
    socketRec.emit('addNameUser', name);
}

const pulluser=(socketRec, fuction)=>{
    socketRec.on('addNameUser', fuction);
}

const pullUsers=(socketRec, fuction)=>{
    socketRec.on("update", fuction);
}
const updateUser=(socketRec,)=>{
    socketRec.emit("update");
}



export default socket;
export {sendMessage, pullMessages, sendName, pulluser, pullUsers, updateUser};