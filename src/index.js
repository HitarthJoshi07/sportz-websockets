import express from "express"

const app = express();
const port = process.env.port || 8000;

app.get('/', (req, res) => {
    res.send("hello message from server")
})

app.listen(port, () => {
    console.log(`App is listinf on the following port ${port} and server listen on http://localhost:${port}`)
})