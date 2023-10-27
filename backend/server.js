const dotenv = require("dotenv").config();
const express = require("express");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const Task = require("./model/taskModel");
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")



const app = express();

// Middleware
app.use(express.json());
app.use(cors({
   origin: ["http://localhost:3000", "https://mern-task-app.onrender.com" ]
}));

app.use(taskRoutes);


// const logger = (req, res, next) => {
//   console.log("Middleware ran");
//   console.log(req.method);
//   next()
// };

// Routes
app.get("/", (req, res) => {
   res.send("Home Page");
});






const PORT = process.env.PORT || 5000;

mongoose
   .connect(process.env.MONGO_URI)
   .then(() => {
      app.listen(PORT, () => {
         console.log(`Server running on port ${PORT}`);
      });
   })
   .catch((err) => console.log(err));



// const startServer = async () => {
//    try {
//      await connectDB();
//      app.listen(PORT, () => {
//         console.log(`Server running on port ${PORT}`);
//     });
//    } catch (error) {
//       console.log(error)
//    }
// };
// startServer();





// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// mongodb+srv://steevtechy1234:<password>@cluster0.zbpwymu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp