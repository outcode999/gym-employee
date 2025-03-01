import express from 'express';

import { verifyToken } from "../Middelware/VerfiyUser.js";
import { absent, attendance, deleteEmp, deleteIAttend, deleteabsent, getEmploye, getabsent,  getcurentAb,  getemployee, signgin,  signup, updateStatus, updateemp } from '../controllers/employe.controller.js';

const router = express.Router();


router.post("/signup/emp", signup);
router.post("/signin/empp", signgin);
router.get('/getEmploye', getemployee);
router.put('/updateEmploye/:EmpId',verifyToken,  updateemp);
router.delete('/deletemp/:EmpId',verifyToken,  deleteEmp);
router.post("/create", attendance);
router.post("/absent", absent);
router.get('/getEmp/:EmployeId', getEmploye);
router.delete('/deletCurretId/:EmployeId',verifyToken,  deleteIAttend)
router.get('/getabsent', getabsent);
router.get('/getaBsent/:currentuserId', getcurentAb);
router.delete('/deletempp/:AbsentId', deleteabsent);
router.put('/absent/:absentId/status', updateStatus );


export default router;