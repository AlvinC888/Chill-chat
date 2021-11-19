//Importing packages
const URI = require("./vars.js");
const mongoose = require("mongoose");
const message = require("./messageSchema.js");
const io = require("socket.io")(3001, {
  cors: {
    origin: "*",
  },
});

//Db connection
mongoose.connect(URI);

//Web socket
io.on("connection", (socket) => {
  console.log("connect");
  socket.on("message", (payload) => {
    console.log("message");
    io.emit("message", payload);
    //Save message
    try {
      const newMessage = new message({
        id: payload.id,
        user: payload.user,
        content: payload.content,
      });
      newMessage.save().then(() => {});
    } catch (err) {
      //Handle error
      console.log(err);
    }
  });
});
//Handle error
io.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});