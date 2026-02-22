import ContactRepository from "../repositories/contactRepository.js";

class ContactService {
  async saveMessage(data) {
    return await ContactRepository.saveMessage(data);
  }
  async getAllMessages() {
    return await ContactRepository.getAllMessages();
  }
  async deleteMessage(id) {
    return await ContactRepository.deleteMessage(id);
  } }
  export default new ContactService();