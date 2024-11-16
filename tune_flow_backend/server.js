import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';




const app = express();
const port = process.env.PORT || 5000;
connectDB();
connectCloudinary();



app.use(express.json());
app.use(cors());


app.use("/api/song", songRouter);
app.use('/api/album', albumRouter);


app.get('/', (req, res)=>res.send("API WORKING"));
app.listen(port, ()=>console.log(`server started on port ${port}`));