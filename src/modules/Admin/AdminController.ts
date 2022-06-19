import { Response, Request, NextFunction } from "express";
import { Controller, Middleware, Get, Post, Put, Delete } from '@overnightjs/core';
import { IAdminService } from './AdminService';
import { auth } from "../../middlewares";


@Controller('admin')
class AdminController{
    private adminService;
    constructor(adminService: IAdminService) {
        this.adminService = adminService;
    }

    @Get()
    @Middleware(auth.isAuth)
    getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        let admins = await this.adminService.getAll();
        res.status(200).json(admins);
    } catch (error) {
        next(error);
    }
}
}