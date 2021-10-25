/* This example requires Tailwind CSS v2.0+ */

import ProjectListItem from './ProjectListItem';
import { PlusIcon } from '@heroicons/react/solid';

export default function ProjectList({ projects, setFormOpen, selectProject }) {
  return (
    <div className='bg-white shadow rounded-lg divide-y divide-gray-200'>
      <div className='px-4 py-5 sm:px-6'>
        {/* Content goes here */}
        <div className='bg-white px-4 py-5 sm:px-6'>
          <div className='-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap'>
            <div className='ml-4 mt-2'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Projects
              </h3>
            </div>
            <div className='ml-4 mt-2 flex-shrink-0'>
              <button
                type='button'
                onClick={() => setFormOpen(true)}
                className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                <PlusIcon
                  className='-ml-2 mr-1 h-5 w-5 text-white'
                  aria-hidden='true'
                />
                Add project
              </button>
            </div>
          </div>
        </div>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
      <div className='px-4 py-5 sm:p-6'>
        {/* Content goes here */}
        <nav className='h-screen overflow-y-scroll' aria-label='Directory'>
          <ul role='list' className='relative z-0 divide-y divide-gray-200'>
            {projects.map((project) => {
              return (
                <li key={project.id} className='bg-white'>
                  <ProjectListItem project={project} selectProject={selectProject} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
