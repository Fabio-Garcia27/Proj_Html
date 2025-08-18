import type { Contact, ContactCreate, ContactRepository } from "../interfaces/contacts.interface.js";
import type { UserRepository } from "../interfaces/user.interface.js";
import { ContactsRepositoryPrisma } from "../repositories/contacts.repository.js";
import { UserRepositoryPrisma } from "../repositories/user.repository.js";

class ContactUseCase {
    static delete(id: string) {
      throw new Error("Method not implemented.");
    }
    private contactRepository: ContactRepository;
    private userRepository: UserRepository;
    constructor() {
        this.contactRepository = new ContactsRepositoryPrisma();
        this.userRepository = new UserRepositoryPrisma();
    }  
    
    async create ({email, name, phone, userEmail}:ContactCreate) {
        //email do usuário logado
        //buscar o usuário pelo email
        //senão existir, retorno erro
        //se existi, criar o contato
        //antes de criar o contato, validar se ele já existe pelo telefone ou email
        const user = await this.userRepository.findByEmail(userEmail);

        if (!user) {
            throw new Error('User not found');
        }

        const verifyIfExistsContact = await this.contactRepository.findByEmailOrPhone(email, phone);

        if (verifyIfExistsContact) {
            throw new Error('Contact already exists');
        }

        const contact = await this.contactRepository.create({
            email,
            name,
            phone,
            userid: user.id,
        })
        return contact;
    }
    async listAllContacts(userEmail: string) {
      const user = await this.userRepository.findByEmail(userEmail);

      if (!user) {
        throw new Error('User not found');           
      }

      const contacts = await this.contactRepository.findAllContacts(user.id);   
      
      return contacts;
    }
    async updateContact({id, name, email, phone}: Contact) {
        const data = await this.contactRepository.updateContact({
            id,
            name,
            email,
            phone
        }); 
        return data;
    }
    async delete(id: string) {
        const data = await this.contactRepository.delete(id);
        return data;
    }
}

export { ContactUseCase };