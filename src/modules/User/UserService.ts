import UserDTO from "./UserDto";
import { ApiError } from "../../helpers/ErrorHelpers";
import { IMailerService } from "../../libs/mailer";
import { IUserRepository } from "./UserRepository";
import { User } from "./UserEntity";

export interface IUserService {
  getAll(): Promise<UserDTO[]>;
  register(userData: any): Promise<UserDTO>;
  login(userData: any): Promise<UserDTO>;
}

export type userType = {
  firstname: string,
  lastname: string,
  phone: number,
  email: string,
  password: string
}
export default class UserService implements IUserService {
  private userRepo;
  private mailerService;
  constructor(
    userRepository: IUserRepository,
    mailerService: IMailerService
  ) {
    this.userRepo = userRepository;
    this.mailerService = mailerService;
  }

  async getAll() {
    const users = await this.userRepo.findAll();
    return users.map((user: any) => new UserDTO(user));
  }
  
  async register(userData:userType) {
    if (
      !userData.firstname ||
      !userData.lastname ||
      !userData.phone ||
      !userData.email ||
      !userData.password
    )
      throw new ApiError(400, "Missing required fields");
    
    const user = await this.userRepo.checkIfUserExist(userData);
    
    const regexEmail = /^([a-z A-Z 0-9](\.)?)+@\w+\.(\w){2,4}$/;
    
    const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@()$%^&*=_{}[\]:;\"'|\\<>,.\/~`±§+-]).{8,50}$/

    if(!regexEmail.test(userData.email))
     throw new ApiError(422, "Please enter a valid email address")
     console.log("REGEX EMAIL", regexEmail.test(userData.email));

    if(!regexPassword.test(userData.password))
      throw new ApiError(422, "Password must be between 8 and 50 characters, include at least one number, symbol, uppercase and lowercase letter")
    
    if(user)
      // console.log("USEEER",user);
      throw new ApiError(409, "User already exist")
    
    const newUser = await this.userRepo.addNew(userData);

    await this.mailerService.sendMail(userData);
    return new UserDTO(newUser);
  }

  async login(userData: User) {
    if (!userData.email || !userData.password)
      throw new ApiError(400, "Missing required email and password fields");

    const user = await this.userRepo.findByEmail(userData);
    console.log(user);

    if (!user)
      throw new ApiError(
        400,
        "user with the specified email does not exists"
      );

    const passwordMatch = await this.userRepo.compareHash(
      userData.password,
      user.password
    );
    if (!passwordMatch)
      throw new ApiError(400, "user password do not match");

    return new UserDTO(user);
  }
}