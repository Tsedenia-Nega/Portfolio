import ProjectRepository from "../repositories/projectRepository.js";

class ProjectService {
    async getAllProjects() {
        return await ProjectRepository.getAllProjects();
    }
    async getProjectById(id) {
        return await ProjectRepository.getProjectById(id);
    }
    async createProject(projectData) {
        return await ProjectRepository.createProject(projectData);
    }
    async updateProject(id, projectData) {
        return await ProjectRepository.updateProject(id, projectData);
    }   
    async deleteProject(id) {
        return await ProjectRepository.deleteProject(id);
    }
}
export default new ProjectService();