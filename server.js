const express=require('express');
const dotenv=require('dotenv');
const morgan=require('morgan');
const connectDB=require('./config/db');
const userRoutes=require('./routes/authRoute');
const cors=require('cors');

dotenv.config();
connectDB();

const app= express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/user',userRoutes);

const PORT=process.env.PORT||8000;

app.listen(PORT,()=>{+
    console.log(`Server running in ${process.env.ENVIORNMENT} enviornment on port ${PORT}`);
});