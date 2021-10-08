/* This example requires Tailwind CSS v2.0+ */
import React , { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavBar = ({navigation})  =>{

  return (
    <Disclosure as="nav" className="bg-gray-800 absolute w-full top-0 left-0">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only text-white">Open main menu</span>
                  {open ? (
                    <FontAwesomeIcon icon={faBars} />
                  ) : (
                    <FontAwesomeIcon icon={faBars} />
                  )}
                </Disclosure.Button>
              </div>
              <div
                    to = "/"
                    className = "hidden sm:block text-white justify-start text-white font-bold text-xl ">
                    &lt;Tomislav Žigo&gt;
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex">
                    {navigation.map((item) => (
                      <div
                        key={item.name}
                        onClick = {()=> item.scrollRef.current.scrollIntoView({behavior:"smooth"})}
                        className={classNames(
                          item.current ? ' bg-opacity-60 ' : ' bg-opacity-20  hover:bg-opacity-40',
                          'px-3 py-1 text-sm font-medium text-gray-300 box-content hover:text-white flex flex-col group'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name.toUpperCase()}
                        <div className = "transition-width duration-130 w-4 h-1 border-green-500 border group-hover:w-full bg-green-500"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div
                  type="button"
                  
                  className="block sm:hidden p-1 rounded-full text-white font-bold text-lg focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white"
                >
                  <h1>&lt;Tomislav Žigo&gt;</h1>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </div>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  onClick = {()=> item.scrollRef.current.scrollIntoView({behavior:"smooth"})}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavBar;