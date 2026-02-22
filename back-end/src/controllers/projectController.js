import projectService from "../services/projectService.js";
import ProjectService from "../services/projectService.js";

export const getAllProjects = async (req, res) => {
    try {
        const projects = await ProjectService.getAllProjects(); 
        res.status(200).json(projects);
    }   catch (error) {     res.status(500).json({ message: error.message });
}}
export const createProject = async (req,res)=>{
    try{
const projectData = req.body;
const newProject = await ProjectService.createProject(projectData);
        res.status(201).json(newProject);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
export const getProject = async (req,res)=>{
    try{
const {id }= req.body;
const project = await projectService.getProjectById(id);
res
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}

export const updateProject = async (req,res)=>{
    try{
const {id} = req.params;    
const projectData = req.body;
const updatedProject = await projectService.updateProject(id, projectData);
res.status(200).json(updatedProject);
    }catch(error){
        res.status(500).json({ message: error.message });
    }       }
export const deleteProject = async (req,res)=>{
    try{
const {id} = req.params;        
const deletedProject = await projectService.deleteProject(id);
res.status(200).json(deletedProject);
    }catch(error){
        res.status(500).json({ message: error.message });
    }}

    