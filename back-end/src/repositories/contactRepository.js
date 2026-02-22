import Contact from "../models/contactModel.js";

class ContactRepository {
  async saveMessage(data) {
    return await Contact.create(data);
  }
  async getAllMessages() {
    return await Contact.find({}).sort({ createdAt: -1 });
  }
  async deleteMessage(id) {
    return await Contact.findByIdAndDelete(id);
  }
}
export default new ContactRepository();