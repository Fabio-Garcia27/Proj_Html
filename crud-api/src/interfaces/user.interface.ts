export interface User {
    id: string,
    email: string,
    name: string,    
}

export interface UserCreate {
    email: string,
    name: string,
}

export interface UserRepository {
    create(data: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    updateContact(data: User): Promise<User>;
}