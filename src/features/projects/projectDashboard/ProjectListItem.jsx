import { CalendarIcon, CashIcon, ChevronRightIcon } from '@heroicons/react/solid';
import ProjectListFreelancer from './ProjectListFreelancer';

export default function ProjectListItem({ project }) {
  return (
    <a href='#' className='block hover:bg-gray-50'>
      <div className='px-4 py-4 flex items-center sm:px-6'>
        <div className='min-w-0 flex-1 sm:flex sm:items-center sm:justify-between'>
          <div className='truncate'>
            <div className='flex text-sm'>
              <p className='font-medium text-indigo-600 truncate'>
                {project.projectName}
              </p>
              <p className='ml-1 flex-shrink-0 font-normal text-gray-500'>
                at {project.projectCustomer}
              </p>
            </div>
            <div className='mt-2 flex space-x-2'>
              <div className='flex items-center text-sm text-gray-500 space-x-2'>
                <CalendarIcon
                  className='flex-shrink-0 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                <p>
                  Start: <time>{project.projectStart}</time>
                </p>
                <p>
                  Finish: <time>{project.projectStart}</time>
                </p>
                
              </div>
              <div className='flex items-center text-sm text-gray-500 space-x-2'>
                <CashIcon
                  className='flex-shrink-0 h-5 w-5 text-gray-400'
                  aria-hidden='true'
                />
                
                <p>
                  Purchase: <time>{project.projectStart}</time>
                </p>
                <p>
                  Sales: <time>{project.projectStart}</time>
                </p>
              </div>
            </div>
          </div>
          <div className='mt-4 flex-shrink-0 sm:mt-0 sm:ml-5'>
            <div className='flex overflow-hidden -space-x-1'>
              {project.projectFreelancers.map((freelancer) => (
                <ProjectListFreelancer
                  key={freelancer.id}
                  freelancer={freelancer}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='ml-5 flex-shrink-0'>
          <ChevronRightIcon
            className='h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </div>
      </div>
    </a>
  );
}
