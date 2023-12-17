import Users from "../models/UserModel.js"
import Mahasiswa from "../models/MahasiswaModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Register = async(req, res) => {
    const { nama, nim, password} = req.body
    const salt = await bcrypt.genSalt()
    const hashPassword = await bcrypt.hash(password, salt)
    try {
        await Users.create({
            nim: nim,
            password: hashPassword
        })
        await Mahasiswa.create({
            nama: nama,
            nim: nim,
        })
        res.json({msg: 'Berhasil Register'})
    } catch (error) {
        res.status(500)
        console.log(error)
    }
}

export const Login = async(req, res) => {
    const {nim} = req.body
    try {
        const user = await Users.findAll({
            where: {
                nim: nim
            }
        })
        const match = await bcrypt.compare(req.body.password, user[0].password)
        if(!match) return res.status(500).json({msg: "password salah"})
        const mahasiswa = await Mahasiswa.findAll({
            where: {
                nim: nim
            }
        })
        const userId = user[0].id
        const nama = mahasiswa[0].nama
        const accessToken = jwt.sign({userId, nama}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: "60s"
        })
        const refreshToken = jwt.sign({userId, nama}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: "1d"
        })
        await Users.update({refresh_token: refreshToken},{
            where: {
                id: userId
            }
        })
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            maxAge: 24*60*60*1000
        })
        res.json({accessToken})
    } catch (error) {
        res.status(500).json({msg: "NIM tidak ditemukan"})
    }
}

export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.sendStatus(403)
    const user = await Users.findAll({
        where: {
            refresh_token: refreshToken
        }
    })
    if(!user[0]) return res.sendStatus(403)
    const userId = user[0].id
    await Users.update({refresh_token: null},{
        where: {
            id: userId
        }
    })
    res.clearCookie('refreshToken')
    return res.sendStatus(200)
}