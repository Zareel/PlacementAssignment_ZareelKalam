import mongoose from "mongoose";
import app from "./src/app.js";
import colors from "colors";
import config from "./src/config/index.js";

//port
const PORT = config.PORT;

(async () => {
  try {
    const conn = await mongoose.connect(config.MONGODB_URL);
    console.log(`DB CONNECTED! ${conn.connection.host}`.bgMagenta.white);

    app.on("error", (err) => {
      console.error("ERROR: ", err);
      throw err;
    });

    const onListening = () => {
      console.log(`Listening on port ${config.PORT}`.bgBlue.white);
    };

    app.listen(config.PORT, onListening);
  } catch (error) {
    console.log(`Error in MongoDB Connection ${error}`.bgRed.white);
  }
})();
