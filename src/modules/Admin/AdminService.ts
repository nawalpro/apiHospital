import {IAdminRepository} from './AdminRepository';
import  userRepo from '../User/UserRepository';
import { IUserRepository } from '../User/UserRepository';
import { IMailerService } from '../../libs/mailer';
import UserDTO from '../User/UserDto';


export interface IAdminService {
    getAll(): Promise<UserDTO[]>;
}    



export type adminType = {
    userId: string,
    roleId: number,
}

export default class AdminService implements IAdminService {
    private adminRepo;
    private userRepo;
    private mailerService;
    constructor(
        adminRepository: IAdminRepository,
        userRepository: IUserRepository,
        mailerService: IMailerService
    ) {
        this.adminRepo = adminRepository;
        this.userRepo = userRepository;
        this.mailerService = mailerService;
    }

    async getAll() {
        const admins = await this.adminRepo.findAll();
        return admins.map((admin: any) => new UserDTO(admin));
    }

}