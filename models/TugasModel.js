import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const Tugas = db.define('tugas',{
    tugas:{
        type: DataTypes.STRING
    },
    mata_kuliah:{
        type: DataTypes.STRING
    },
    hari: {
        type: DataTypes.STRING
    },
    start_date: {
        type: DataTypes.DATE
    },
    end_date: {
        type: DataTypes.DATE
    },
    start_time: {
        type: DataTypes.TIME
    }
},{
    freezeTableName: true
})

export default Tugas