import User from "../models/userModel.js";

class UserRepository {
    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async findById(id) {
        return await User.findById(id).select("-password");
}
}
export default new UserRepository();