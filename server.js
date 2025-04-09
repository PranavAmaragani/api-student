import mongoose from "mongoose";
import "dotenv/config";

import app from "./routes/studentRoutes.js"; 

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.error("Connection Failed:", error);
        
    }
}

await connectToDatabase();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
