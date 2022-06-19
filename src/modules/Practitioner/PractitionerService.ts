import {IDoctorRepository} from './PractitionerRepository';
import  userRepo from '../User/UserRepository';
import { IUserRepository } from '../User/UserRepository';
import { IMailerService } from '../../libs/mailer';
import UserDTO from '../User/UserDto';


export interface IDoctorService {
    getAll(): Promise<UserDTO[]>;
}    

export type doctorType = {
    userId: string,
    roleId: number,
}

export default class DoctorService implements IDoctorService {
    private doctorRepo;
    private userRepo;

    constructor(
        doctorRepository: IDoctorRepository,
        userRepository: IUserRepository,
    ) {
        this.doctorRepo = doctorRepository;
        this.userRepo = userRepository;
    }

    async getAll() {
        const doctors = await this.doctorRepo.findAll();
        return doctors.map((doctor: any) => new UserDTO(admin));
    }

}