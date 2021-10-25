import {
  PlusIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  MailIcon,
} from '@heroicons/react/solid';

export default function ProjectForm({ projects, setFormOpen }) {
  return (
    <div className='bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200'>
      <div className='px-4 py-5 sm:px-6'>
        <form className='space-y-8 divide-y divide-gray-200'>
          <div className='space-y-8 divide-y divide-gray-200'>
            <div className='pt-8'>
              <div>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                  Project Information
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Use a permanent address where you can receive mail.
                </p>
              </div>
              <div className='mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6'>
                <div className='col-span-6 md:col-span-4'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project name
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='first-name'
                      id='first-name'
                      autoComplete='given-name'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div className='col-span-6 sm:col-span-4'>
                  <label
                    htmlFor='last-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project description
                  </label>
                  <div className='mt-1'>
                    <input
                      type='text'
                      name='last-name'
                      id='last-name'
                      autoComplete='family-name'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project start
                  </label>
                  <div className='mt-1'>
                    <input
                      type='date'
                      name='city'
                      id='city'
                      autoComplete='address-level2'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='region'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project finish
                  </label>
                  <div className='mt-1'>
                    <input
                      type='date'
                      name='region'
                      id='region'
                      autoComplete='address-level1'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>

                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='postal-code'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project purchase
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      name='postal-code'
                      id='postal-code'
                      autoComplete='postal-code'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
                <div className='col-span-6 sm:col-span-3'>
                  <label
                    htmlFor='postal-code'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project sales
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      name='postal-code'
                      id='postal-code'
                      autoComplete='postal-code'
                      className='shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md'
                    />
                  </div>
                </div>
              </div>
              <div className='mx-auto pt-10'>
                <div className='space-y-1'>
                  <label
                    htmlFor='add-team-members'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Project fulfillment
                  </label>
                  <p id='add-team-members-helper' className='sr-only'>
                    Search by email address
                  </p>
                  <div className='flex'>
                    <div className='flex-grow'>
                      <input
                        type='text'
                        name='add-team-members'
                        id='add-team-members'
                        className='block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300 rounded-md'
                        placeholder='Email address'
                        aria-describedby='add-team-members-helper'
                      />
                    </div>
                    <span className='ml-3'>
                      <button
                        type='button'
                        className='bg-white inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                      >
                        <PlusIcon
                          className='-ml-2 mr-1 h-5 w-5 text-gray-400'
                          aria-hidden='true'
                        />
                        <span>Add</span>
                      </button>
                    </span>
                  </div>
                </div>

                <div className='border-b border-gray-200'>
                  <ul role='list' className='divide-y divide-gray-200'>
                    {projects[0].projectFreelancers.map((person) => {
                      return (
                        <li key={person.id}>
                          <a
                            href={person.freelancerHref}
                            className='block hover:bg-gray-50'
                          >
                            <div className='flex items-center px-4 py-4 sm:px-6'>
                              <div className='min-w-0 flex-1 flex items-center'>
                                <div className='flex-shrink-0'>
                                  <img
                                    className='h-12 w-12 rounded-full'
                                    src={person.freelancerImageUrl}
                                    alt=''
                                  />
                                </div>
                                <div className='min-w-0 flex-1 px-4 md:grid md:grid-cols-3 md:gap-4'>
                                  <div>
                                    <p className='text-sm font-medium text-indigo-600 truncate'>
                                      {person.freelancerName}
                                    </p>
                                    <p className='mt-2 flex items-center text-sm text-gray-500'>
                                      <MailIcon
                                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                                        aria-hidden='true'
                                      />
                                      <span className='truncate'>
                                        {person.freelancerEmail}
                                      </span>
                                    </p>
                                  </div>
                                  <div className='hidden md:block'>
                                    <div>
                                      <p className='text-sm text-gray-900'>
                                        Start:{' '}
                                        <time>{person.freelancerStart}</time>
                                      </p>
                                      <p className='mt-2 text-sm text-gray-900'>
                                        Finish:{' '}
                                        <time>{person.freelancerFinish}</time>
                                      </p>
                                      {/* <p className='mt-2 flex items-center text-sm text-gray-500'>
                                      <CheckCircleIcon
                                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400'
                                        aria-hidden='true'
                                      />
                                      {person.stage}
                                    </p> */}
                                    </div>
                                  </div>
                                  <div className='hidden md:block'>
                                    <div>
                                      <p className='text-sm text-gray-900'>
                                        Purchase: {person.freelancerPurchase}
                                      </p>
                                      <p className='mt-2 flex items-center text-sm text-gray-900'>
                                        Sales: {person.freelanceruales}
                                      </p>
                                      {/* <p className='mt-2 flex items-center text-sm text-gray-500'>
                                      <CheckCircleIcon
                                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400'
                                        aria-hidden='true'
                                      />
                                      {person.stage}
                                    </p> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <ChevronRightIcon
                                  className='h-5 w-5 text-gray-400'
                                  aria-hidden='true'
                                />
                              </div>
                            </div>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={() => setFormOpen(false)}
                className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Cancel
              </button>
              <button
                type='submit'
                className='ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Save
              </button>
            </div>
          </div>
        </form>
        {/* We use less vertical padding on card headers on desktop than on body sections */}
      </div>
    </div>
  );
}
