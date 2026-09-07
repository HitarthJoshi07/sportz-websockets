import express from "express"
import { matchRouter } from "./routes/matches.js";

const app = express();
const port = process.env.port || 8000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello message from server")
})

app.use('/matches', matchRouter)

app.listen(port, () => {
    console.log(`App is listinf on the following port ${port} and server listen on http://localhost:${port}`)
})