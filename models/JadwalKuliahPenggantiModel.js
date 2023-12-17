import { Sequelize } from "sequelize";
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const JadwalKuliahPengganti = db.define('jadwal_kuliah_pengganti',{
    mata_kuliah:{
        type: DataTypes.STRING
    },
    ruangan:{
        type: DataTypes.STRING
    },
    hari:{
        type: DataTypes.STRING
    },
    date:{
        type: DataTypes.DATE
    },
    start_time: {
        type: DataTypes.TIME
    },
    end_time: {
        type: DataTypes.TIME
    }
},{
    freezeTableName: true
})

export default JadwalKuliahPengganti