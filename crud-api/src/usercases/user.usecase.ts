import type { User, UserCreate, UserRepository } from "../interfaces/user.interface.js";
import { UserRepositoryPrisma } from "../repositories/user.repository.js";

class UserUseCase {
    private UserRepository: UserRepository
    constructor() {
        this.UserRepository = new UserRepositoryPrisma()        
    }  
    
    async create({name, email}: UserCreate): Promise<User> {
        const verifyIfUserExists = await this.UserRepository.findByEmail(email);
        if (verifyIfUserExists) {
            throw new Error('User already exists');    
        }
        const result = await this.UserRepository.create({
            email, name,
            id: ""
        });    

        return result;
    }
}

export { UserUseCase};