const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const cors = require('cors');
const router = require('./router');


// middlewars
app.use(cors());
app.use(express.json())

//router
router(app);

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})