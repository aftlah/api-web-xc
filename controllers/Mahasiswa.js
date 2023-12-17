import Mahasiswa from "../models/MahasiswaModel.js"

export const AllMahasiswa = async(req,res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll()
        res.json(mahasiswa)
    } catch (error) {
        res.status(403)
        console.log(error)
    }
}

export const GetUser = async(req, res) => {
    const {nim} = req.body
    try {
        const mahasiswa = await Mahasiswa.findAll({
            where: {
                nim: nim
            }
        })
        res.json(mahasiswa)
    } catch (error) {
        res.status(403)
        console.log(error)
    }
}