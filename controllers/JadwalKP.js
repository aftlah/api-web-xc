import JadwalKuliahPengganti from "../models/JadwalKuliahPenggantiModel.js";

export const GetJadwalKP = async(req,res) => {
    try {
        const jadwalkp = await JadwalKuliahPengganti.findAll()
        res.json(jadwalkp)
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const AddJadwalKP = async(req,res) => {
    const {mata_kuliah, date, time,ruangan,start_time,end_time,hari} = req.body
    try {
        await JadwalKuliahPengganti.create({
            mata_kuliah: mata_kuliah,
            ruangan: ruangan,
            hari: hari,
            date: date,
            start_time: start_time,
            end_time: end_time,
        })
        res.json({msg: `Jadwal kuliah pengganti ${mata_kuliah} telah ditambahkan`})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const DeleteJadwalKP = async(req,res) => {
    const {mata_kuliah} = req.body 
    try {
        JadwalKuliahPengganti.destroy({
            where: {
                mata_kuliah: mata_kuliah
            }
        })
        res.json({msg: `Jadwal kuliah pengganti ${mata_kuliah} telah dihapus`})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}