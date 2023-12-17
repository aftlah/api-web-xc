import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const Mahasiswa = db.define('mahasiswa',{
    nama:{
        type: DataTypes.STRING
    },
    nim:{
        type: DataTypes.INTEGER(10)
    }
},{
    freezeTableName: true
})

export default Mahasiswa