// import { Response, Request, NextFunction } from "express";
// import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
// import { IDoctorService } from './PractitionerService';
// import { auth } from "../../middlewares";


// @Controller('doctor')
// class DoctorController{
//     private doctorService;
//     constructor(doctorService: IDoctorService) {
//         this.doctorService = doctorService;
//     }

//     @Get()
//     @Middleware(auth.isAuth)
//     getAllDoctorsPatient = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         let doctorsPatients = await this.doctorService.getAllDoctorsPatient();
//         res.status(200).json(doctorsPatients);
//     } catch (error) {
//         next(error);
//     }
// }
// }