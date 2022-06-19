import { EntityRepository, EntityManager } from "typeorm";
import bcrypt from "bcrypt";
import { User } from "./UserEntity";

export interface IUserRepository {
  addNew(userEntity: any): Promise<User>;
  checkIfUserExist(userEntity: any): Promise<User | undefined>;
  findAll(): Promise<User[]>;
  findByEmail(userEntity: any): Promise<User | undefined>;
  compareHash(password: string, hash: string): Promise<boolean>;
}

@EntityRepository()
class UserRepository implements IUserRepository {

  constructor(private manager: EntityManager) {}
 
  async addNew(userEntity: any) {
    const salt = bcrypt.genSaltSync(10);
    userEntity.password = bcrypt.hashSync(userEntity.password, salt);
    return await this.manager.save(User, userEntity);
  }

  async checkIfUserExist(userEntity: any)
  {
    return await this.manager.findOne(User, { email: userEntity.email });
  }

  async findAll() {
    return await this.manager.find(User);
  }
  
  async findByEmail(userEntity: any) {
    console.log(userEntity);
    return await this.manager.findOne(User, { email: userEntity.email });
  }
  compareHash = async (password: string, hash: string) => await bcrypt.compareSync(password, hash);
}
export default UserRepository;
