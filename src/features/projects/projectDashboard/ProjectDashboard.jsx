import ProjectList from './ProjectList';
import { sampleData } from '../../../app/api/sampleData.js';
import { useState } from 'react';

export default function ProjectDashboard({ setSidebarOpen }) {
  const [projects, setProjects] = useState(sampleData);
  const [selectedProject, setSelectedProject] = useState(null);

  // function handleCreateProject(project) {
  //   setProjects([...projects, project]);
  // }

  // function handleSelectProject(project) {
  //   setSelectedProject(project);
  //   setFormOpen(true);
  // }

  // function handleCreateFormOpen() {
  //   setSelectedProject(null);
  //   //setFormOpen(true);
  // }

  // function handleUpdateProject(updatedProject) {
  //   setProjects(
  //     projects.map((prj) =>
  //       prj.id === updatedProject.id ? updatedProject : prj
  //     )
  //   );
  // }

  // function handleDeleteProject(projectId) {
  //   setProjects(projects.filter((prj) => prj.id !== projectId));
  //   setFormOpen(false);
  // }

  return <ProjectList projects={projects} />;
}
