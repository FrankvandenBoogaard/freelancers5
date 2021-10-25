import { MenuIcon } from '@heroicons/react/outline';
import ProjectForm from '../projectForm/ProjectForm';
import ProjectList from './ProjectList';
import { sampleData } from '../../../app/api/sampleData.js';
import { useState } from 'react';

export default function ProjectDashboard({ setSidebarOpen }) {
  const [projects, setProjects] = useState(sampleData);
  const [formOpen, setFormOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreateProject(project) {
    setProjects([...projects, project]);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
    setFormOpen(true);
  }

  function handleCreateFormOpen() {
    setSelectedProject(null);
    setFormOpen(true);
  }

  function handleUpdateProject(updatedProject) {
    setProjects(
      projects.map((prj) =>
        prj.id === updatedProject.id ? updatedProject : prj
      )
    );
    setSelectedProject(null);
  }

  function handleDeleteProject(projectId) {
    setProjects(projects.filter((prj) => prj.id !== projectId));
    setFormOpen(false);
  }

  return (
    <div className='md:pl-64 flex flex-col flex-1'>
      <div className='sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-100'>
        <button
          type='button'
          className='-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
          onClick={() => setSidebarOpen(true)}
        >
          <span className='sr-only'>Open sidebar</span>
          <MenuIcon className='h-6 w-6' aria-hidden='true' />
        </button>
      </div>
      <main className='flex-1'>
        <div className='py-10'>
          {/* <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
                <h1 className='text-2xl font-semibold text-gray-900'>
                  Dashboard
                </h1>
              </div> */}
          <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-4'>
            {/* Replace with your content */}
            {!formOpen && (
              <ProjectList
                projects={projects}
                setFormOpen={handleCreateFormOpen}
                selectProject={handleSelectProject}
              />
            )}
            {formOpen && (
              <ProjectForm
                projects={projects}
                setProjects={setProjects}
                setFormOpen={setFormOpen}
                createProject={handleCreateProject}
                selectedProject={selectedProject}
                updateProject={handleUpdateProject}
                deleteProject={handleDeleteProject}
                key={selectedProject ? selectedProject.id : null}
              />
            )}
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  );
}
