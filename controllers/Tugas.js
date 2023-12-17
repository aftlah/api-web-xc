import Tugas from "../models/TugasModel.js";

export const GetTugas = async(req,res) => {
    try {
        const tugas = await Tugas.findAll()
        res.json(tugas)
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const AddTugas = async(req,res) => {
    const {tugas, mata_kuliah,hari,start_time,start_date,end_date} = req.body
    try {
        await Tugas.create({
            tugas: tugas,
            mata_kuliah: mata_kuliah,
            hari: hari,
            start_time: start_time,
            start_date: start_date,
            end_date: end_date
            

        })
        res.json({msg: `Tugas ${mata_kuliah} sudah ditambahkan`})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const DeleteTugas = async(req,res) => {
    const {mata_kuliah} = req.body
    try {
        await Tugas.destroy({
            where: {
                mata_kuliah: mata_kuliah
            }
        })
        res.json({msg: `Tugas ${mata_kuliah} sudah dihapus`})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}