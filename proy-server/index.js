const user_route =require("./src/routes/user.routes")
const express = require("express")
const mongoose = require("mongoose");
const app = require("./app");
const PORT_SERVER = process.env.PORT || 3977;
const {API_VERSION,IP_SERVER,PORT_DB } = require ("./config");

mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/proyect_db`,
{useNewUrlParser: true, useUnifiedTopology: true },
(err, res)=> {
    if(err) {
        throw err;
    }else {
        console.log("Success conection to db ");
        app.listen(PORT_SERVER, () => {
            console.log("##############");
            console.log("####API RES###");
            console.log("##############");
            console.log(`http:/${IP_SERVER}:${PORT_SERVER}/api/${API_VERSION}/`);
          });
        }
    }
)
app.use(express.json());
app.use("/api/v1/people", user_route)