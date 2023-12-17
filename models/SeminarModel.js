import { Sequelize } from "sequelize"
import db from "../config/Database.js"

const { DataTypes } = Sequelize

const Seminar = db.define('seminar',{
    judul: {
        type: DataTypes.STRING
    },
    deskripsi: {
        type: DataTypes.TEXT
    },
    hari: {
        type: DataTypes.STRING
    },
    ruangan: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    },
    date: {
        type: DataTypes.DATE
    },
    time: {
        type: DataTypes.TIME
    }
},{
    freezeTableName: true
})

export default Seminar