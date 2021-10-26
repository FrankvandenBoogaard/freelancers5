/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function ProjectDetailedPage() {
  return (
    <main className='flex-1'>
      <div className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8 space-y-4'>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
            <div className='px-4 py-5 sm:px-6'>
              <h3 className='text-lg leading-6 font-medium text-gray-900'>
                Project Information
              </h3>
              <p className='mt-1 max-w-2xl text-sm text-gray-500'>
                Personal details and application.
              </p>
            </div>
            <div className='border-t border-gray-200'>
              <dl>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Full name
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    Margot Foster
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Application for
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    Backend Developer
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Email address
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    margotfoster@example.com
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Salary expectation
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    $120,000
                  </dd>
                </div>
                <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>About</dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                    incididunt cillum culpa consequat. Excepteur qui ipsum
                    aliquip consequat sint. Sit id mollit nulla mollit nostrud
                    in ea officia proident. Irure nostrud pariatur mollit ad
                    adipisicing reprehenderit deserunt qui eu.
                  </dd>
                </div>
                <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                  <dt className='text-sm font-medium text-gray-500'>
                    Attachments
                  </dt>
                  <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
                    <ul
                      role='list'
                      className='border border-gray-200 rounded-md divide-y divide-gray-200'
                    >
                      <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                        <div className='w-0 flex-1 flex items-center'>
                          <PaperClipIcon
                            className='flex-shrink-0 h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                          <span className='ml-2 flex-1 w-0 truncate'>
                            resume_back_end_developer.pdf
                          </span>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a
                            href='#'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Download
                          </a>
                        </div>
                      </li>
                      <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
                        <div className='w-0 flex-1 flex items-center'>
                          <PaperClipIcon
                            className='flex-shrink-0 h-5 w-5 text-gray-400'
                            aria-hidden='true'
                          />
                          <span className='ml-2 flex-1 w-0 truncate'>
                            coverletter_back_end_developer.pdf
                          </span>
                        </div>
                        <div className='ml-4 flex-shrink-0'>
                          <a
                            href='#'
                            className='font-medium text-indigo-600 hover:text-indigo-500'
                          >
                            Download
                          </a>
                        </div>
                      </li>
                    </ul>
                  </dd>
                </div>
                <div className='px-4 py-3 bg-gray-100 text-right sm:px-6'>
                  <Link 
                    to={`/manage/`}
                    className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  >
                    Manage
                  </Link>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
