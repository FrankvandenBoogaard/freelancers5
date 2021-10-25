/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';

import NavBar from '../../features/nav/NavBar';
import ProjectDashboard from '../../features/projects/projectDashboard/ProjectDashboard';
import ProjectForm from '../../features/projects/projectForm/ProjectForm';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <ProjectDashboard setSidebarOpen={setSidebarOpen} />
      </div>
    </>
  );
}
