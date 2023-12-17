import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const MataKuliah = db.define('mata_kuliah', {
    mata_kuliah: {
        type: DataTypes.STRING
    },
    dosen: {
        type: DataTypes.STRING
    },
    ruangan: {
        type: DataTypes.STRING
    },
    hari: {
        type: DataTypes.STRING
    },
    start_time: {
        type: DataTypes.TIME
    },
    end_time: {
        type: DataTypes.TIME
    }
}, {
    freezeTableName: true
})

export default MataKuliah