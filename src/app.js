const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = express.Router();
const app = express();
const userRouter = require('./routes/userRouter');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//JWT

app.use('/api', userRouter);
// console.log(app.routes);

app.listen(3000, (req,res) => console.log('Listen on port 3000'));