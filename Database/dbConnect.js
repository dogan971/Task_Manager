const mongoose = require("mongoose");
const connectToDatabase = () => {
  mongoose
    .connect(process.env.mongoose_url)
    .then(() => console.log("Server Has Been Connected"))
    .catch((err) => console.error(err));
};
module.exports = connectToDatabase;
