import { Sequelize } from "sequelize";

const db = new Sequelize('db_xc','root','',{
    host: "localhost",
    dialect: "mysql"
})


export default db