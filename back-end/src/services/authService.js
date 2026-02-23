import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/userRepository.js";

class AuthService {
  async login(email, password) {
    const user = await UserRepository.findByEmail(email);
    if (!user) throw new Error("Invalid Credentials");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid Credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    return {
      token,
      user: { id: user._id, email: user.email },
    };
  }
}

export default new AuthService();
