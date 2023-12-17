import express from "express";
import { GetJadwalKP, AddJadwalKP, DeleteJadwalKP } from "../controllers/JadwalKP.js";
import { AllMahasiswa, GetUser } from "../controllers/Mahasiswa.js";
import { AddMataKuliah, JadwalMataKuliah } from "../controllers/MataKuliah.js";
import { GetSeminar, AddSeminar, DeleteSeminar } from "../controllers/Seminar.js";
import { GetTugas, AddTugas, DeleteTugas } from "../controllers/Tugas.js";
import { Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { RefreshToken } from "../controllers/RefreshToken.js";

const router = express.Router()

//API Register/Login/Logout/refresh token
router.post('/register', Register)
router.post('/login', Login)
router.delete('/logout', Logout)
router.get('/token', RefreshToken)

//API Mahasiswa
router.get('/mahasiswa', AllMahasiswa)
router.get('/user', verifyToken, GetUser)

//API Mata kuliah
router.post('/add-matkul', AddMataKuliah)
router.post('/jadwal', JadwalMataKuliah)

//API Tugas
router.get('/tugas', GetTugas) 
router.post('/add-tugas', AddTugas)
router.delete('/delete-tugas', DeleteTugas)

//API Jadwal kuliah pengganti
router.get('/jadwalkp', GetJadwalKP)
router.post('/add-kp', AddJadwalKP)
router.delete('/del-kp', DeleteJadwalKP)

//API Seminar
router.get('/seminar', GetSeminar)
router.post('/add-seminar', AddSeminar)
router.delete('/del-seminar', DeleteSeminar)

export default router