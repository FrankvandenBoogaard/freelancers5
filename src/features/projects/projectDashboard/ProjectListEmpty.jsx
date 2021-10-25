import { PlusIcon } from '@heroicons/react/solid';

export default function ProjectListEmpty({ createProject, projects }) {
  return (
    <div className='mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
      <div className='mt-1 grid grid-cols-1'>
        <div className='rounded-md sm:overflow-hidden'>
          <div className='border-4 border-dashed border-gray-200  py-6 px-4 sm:p-6'>
            <div className='text-center'>
              <svg
                className='mx-auto h-12 w-12 text-gray-400'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  vectorEffect='non-scaling-stroke'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                />
              </svg>
              <h3 className='mt-2 text-sm font-medium text-gray-900'>
                {!projects.length
                  ? 'Er zijn nog geen klanten'
                  : 'Geen klant geselecteerd'}
              </h3>
              <p className='mt-1 text-sm text-gray-500'>
                {!projects.length
                  ? 'Ga aan de slag door een klant aan te maken.'
                  : 'Selecteer een klant of maak een nieuwe aan.'}
              </p>
              <div className='mt-6'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
                  onClick={() => createProject()}
                >
                  <PlusIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                  Nieuwe Klant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
