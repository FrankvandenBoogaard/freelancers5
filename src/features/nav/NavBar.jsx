import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CalendarIcon,
  FolderIcon,
  OfficeBuildingIcon,
  InboxIcon,
  UsersIcon,
  XIcon,
  LogoutIcon,
} from '@heroicons/react/outline';

const navigation = [
  { name: 'Freelancers', to: '/', icon: UsersIcon },
  { name: 'Projects', to: '/projects', icon: FolderIcon },
  {
    name: 'Customers',
    to: '/customers',
    icon: OfficeBuildingIcon,
    current: false,
  },
  {
    name: 'Calendar',
    to: '/createProject',
    icon: CalendarIcon,
    current: false,
  },
  { name: 'Testing12', to: '/testCode', icon: InboxIcon },
];

const userNavigation = [{ name: 'Sign out', to: '/', icon: LogoutIcon }];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar({ sidebarOpen, setSidebarOpen }) {
  const { pathname } = useLocation();
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                <div className='flex-shrink-0 flex items-center px-4'>
                  <img
                    className='h-8 w-auto'
                    src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                    alt='Workflow'
                  />
                </div>
                <nav className='mt-5 px-2 space-y-1'>
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        pathname === item.to
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon
                        className={classNames(
                          pathname === item.to
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </Link>
                  ))}
                  <div className='pt-5'>
                    <div className='flex-shrink-0 flex border-t border-gray-200 px-2 pt-4'>
                      <Link to='/' className='flex-shrink-0 w-full group block'>
                        <div className='flex items-center'>
                          <div>
                            <img
                              className='inline-block h-9 w-9 rounded-full'
                              src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                              alt=''
                            />
                          </div>
                          <div className='ml-3'>
                            <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                              Tom Cook
                            </p>
                            <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                              View profile
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                    {userNavigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          pathname === item.to
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                          'group flex items-center px-5 py-2 text-sm font-medium rounded-md'
                        )}
                      >
                        <item.icon
                          className={classNames(
                            pathname === item.to
                              ? 'text-gray-500'
                              : 'text-gray-400 group-hover:text-gray-500',
                            'mr-3 flex-shrink-0 h-6 w-6'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14'>
            {/* Force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white'>
          <div className='flex-1 flex flex-col pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
                alt='Workflow'
              />
            </div>
            <nav className='mt-5 flex-1 px-2 bg-white space-y-1'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    pathname === item.to
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={classNames(
                      pathname === item.to
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </Link>
              ))}
              <div className='pt-5'>
                <div className='flex-shrink-0 flex border-t border-gray-200 px-2 pt-4'>
                  <Link to='/' className='flex-shrink-0 w-full group block'>
                    <div className='flex items-center'>
                      <div>
                        <img
                          className='inline-block h-9 w-9 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </div>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-700 group-hover:text-gray-900'>
                          Tom Cook
                        </p>
                        <p className='text-xs font-medium text-gray-500 group-hover:text-gray-700'>
                          View profile
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>

                {userNavigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={classNames(
                      pathname === item.to
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-5 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        pathname === item.to
                          ? 'text-gray-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden='true'
                    />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
