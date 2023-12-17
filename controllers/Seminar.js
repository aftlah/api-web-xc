import Seminar from "../models/SeminarModel.js"

export const GetSeminar = async(req,res) => {
    try {
        const seminar = await Seminar.findAll()
        res.json(seminar)
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const AddSeminar = async(req,res) => {
    const {judul, deskripsi, link, date, time,hari,ruangan} = req.body
    try {
        await Seminar.create({
            judul: judul,
            deskripsi: deskripsi,
            ruangan: ruangan,
            hari: hari,
            link: link,
            date: date,
            time: time
        })
        res.json({msg: `Seminar ${judul} telah ditambahkan`})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const DeleteSeminar = async(req,res) => {
    const {judul} = req.body
    try {
        Seminar.destroy({
            where: {
                judul: judul
            }
        })
        res.json({msg: `Seminar ${judul} telah dihapus`})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}