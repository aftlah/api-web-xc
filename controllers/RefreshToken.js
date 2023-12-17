import Mahasiswa from "../models/MahasiswaModel.js"
import Users from "../models/UserModel.js"
import jwt from "jsonwebtoken"

export const RefreshToken = async(req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) return res.sendStatus(403)
        const user = await Users.findAll({
            where: {
                refresh_token: refreshToken
            }
        })
        if(!user[0]) return res.sendStatus(500)
        const nim = user[0].nim
        const mahasiswa = await Mahasiswa.findAll({
            where: {
                nim: nim
            }
        })
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403)
            const userId = user[0].id
            const nama = mahasiswa[0].nama
            const accessToken = jwt.sign({userId, nama}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            })
            res.json({accessToken})
        })
    } catch (error) {
        res.status(403)
        console.log(error)
    }
}