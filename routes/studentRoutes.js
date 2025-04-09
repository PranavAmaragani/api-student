import express from "express";
import { StudentDetails } from "../models/students.js"; // Import model

const app = express(); 
app.use(express.json()); 
// creating documents

app.post("/students", async (req, res) => {
    try {
        console.log("Received Data:", req.body);
        let details = req.body;

        const student = await StudentDetails.create(details); 
        res.status(201).json({ message: "Student created successfully", student });
        
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//get all documents

app.get("/students",async(req,res)=>{
    try {
      const allStudents = await StudentDetails.find(); 
      res.status(200).json({message : "All Student Details", allStudents}) 
    } catch (error) {
        res.status(500).json({error : "Internal Server Error",error})
    }
})


//get students by Id
app.get("/students/:id", async (req, res) => {
    try {
        const studentId = req.params.id;
        console.log("Fetching Student ID:", studentId);

        const oneStudent = await StudentDetails.findById(studentId);

        if (!oneStudent) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({ oneStudent });
    } catch (error) {
        console.error("Error fetching student:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//delete element by Id

app.delete("/students/:id",async(req,res)=>{
    try {
        const studentId = req.params.id;
        const deletedStudent = await StudentDetails.findByIdAndDelete(studentId);

        if (!deletedStudent) {
            return res.status(404).json({ error: "Student not found" });
        }

        res.status(200).json({message : "Deleted Successfully",deletedStudent})
    } catch (error) {
            console.error("Error deleting student:", error.message);
            res.status(500).json({ error: "Internal Server Error" });
    }
})

export default app;