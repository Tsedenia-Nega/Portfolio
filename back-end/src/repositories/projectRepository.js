import Project from "../models/projectModel.js";
class ProjectRepository {
    async getAllProjects() {
        return await Project.find({});
    }
    async getProjectById(id) {
        return await Project.findById(id);
    }
    async createProject(projectData) {
        const newProject = new Project(projectData);
        return await newProject.save();
    }
    async updateProject(id, projectData) {
        return await Project.findByIdAndUpdate(id, projectData, { new: true });
    }
    async deleteProject(id) {
        return await Project.findByIdAndDelete(id);
    }
}
export default new ProjectRepository();