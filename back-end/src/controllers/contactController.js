import ContactService from "../services/contactService.js";

export const saveMessage = async (req, res) => {
  try {
    const messageData = req.body;   
    const savedMessage = await ContactService.saveMessage(messageData);
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } }
export const getAllMessages = async (req, res) => {
  try {
    const messages = await ContactService.getAllMessages();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }};

export const deleteMessage = async (req, res) => {  
  try {
    const { id } = req.params;
    await ContactService.deleteMessage(id);
    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

