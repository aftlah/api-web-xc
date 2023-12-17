import MataKuliah from "../models/MataKuliahModel.js"

export const AddMataKuliah = async (req, res) => {
    const { mata_kuliah, dosen, hari, ruangan, start_time, end_time } = req.body
    try {
        await MataKuliah.create({
            mata_kuliah: mata_kuliah,
            dosen: dosen,
            ruangan: ruangan,
            hari: hari,
            start_time: start_time,
            end_time: end_time,
        })
        res.json({ msg: `${mata_kuliah} telah ditambahkan` })
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}


export const JadwalMataKuliah = async(req,res) => {
    const {hari} = req.body
    try {
        const jadwal = await MataKuliah.findAll({
            where: {
                hari: hari
            }
        })
        res.json(jadwal)
    } catch (error) {
        res.status(403)
        console.log(error)
    }
}