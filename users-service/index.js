const express = require("express");
const cors = require('cors')


    const app = express();
    const port = 3000;

    const db = require("./config/db");
    const router = require("./router/userRouter");
    
    app.use(express.json());
    app.use(cors());

    app.use("/usuarios", router);

    app.listen(port, () => {
        console.log(`http://localhost:${port}`);
    });


