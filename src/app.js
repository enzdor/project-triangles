const express = require('express');
const app = express();

const path = require('path')

const mainRouter = require('./routers/mainRouter.js')

app.use("/", mainRouter);

app.listen(3000, () => {
    console.log("Server is working!");
})


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'))



