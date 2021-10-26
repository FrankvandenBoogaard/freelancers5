/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react';
import { Route } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar';
import ProjectDetailedPage from '../../features/projects/eventDetailed/ProjectDetailedPage';
import ProjectDashboard from '../../features/projects/projectDashboard/ProjectDashboard';
import ProjectForm from '../../features/projects/projectForm/ProjectForm';
import HomePage from '../../features/home/HomePage';
import NavBarMobile from '../../features/nav/NavBarMobile';
import TestCode from '../../features/projects/projectDashboard/TestCode';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Route exact path='/' component={HomePage} />
      {/* TestCode terugzetten naar HomePage */}
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className='md:pl-64 flex flex-col flex-1'>
              <NavBarMobile setSidebarOpen={setSidebarOpen} />
              <Route exact path='/projects' component={ProjectDashboard} />
              <Route path='/projects/:id' component={ProjectDetailedPage} />
              <Route path={['/createProject', '/manage/:id']} component={ProjectForm} />
            </div>
          </>
        )}
      />
    </>
  );
}
