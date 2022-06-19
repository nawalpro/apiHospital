import { EntityRepository, EntityManager } from "typeorm";
import UserDTO from "../User/UserDto";


export interface IAdminRepository {
    findAll(): Promise<UserDTO[]>;
}

@EntityRepository()
class AdminRepository implements IAdminRepository {
    
        constructor(private manager: EntityManager) {}
    
        async findAll() {
            return await this.manager.find(UserDTO);
        }
    }
export default AdminRepository;