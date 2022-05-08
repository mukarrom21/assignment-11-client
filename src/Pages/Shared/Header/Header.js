import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to="/" className="flex items-center">
            {/* <img
              src="/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            /> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Shoes House
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/home"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </Link>
              </li>
              {/* Login related */}
              {user ? (
                <>
                  {/* ------------- manage items ------------------ */}
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Manage Items
                    </Link>
                  </li>
                  {/* ------------- add item--------------- */}
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Add Item
                    </Link>
                  </li>
                  {/* ---------------- My items -------------- */}
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      My Items
                    </Link>
                  </li>
                  {/* ---------- Log out ----------- */}
                  <li>
                    <button
                      onClick={() => signOut(auth)}
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:bg-white md:px-3 md:rounded-full md:hover:bg-blue-900 md:hover:text-white md:font-semibold md:text-blue-700"
                    >
                      Log Out
                    </button>
                  </li>
                  {/* ------------- email --------------- */}
                  <li>
                    <Link
                      to="/"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      {user?.email}
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  {/* ------------ log in --------------- */}
                  <li>
                    <Link
                      to="/signin"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Login
                    </Link>
                  </li>
                  {/* ----------- register ---------------- */}
                  <li>
                    <Link
                      to="/signup"
                      className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// import React, { Fragment } from "react";

// /* This example requires Tailwind CSS v2.0+ */
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
// import { Link } from "react-router-dom";
// import { useAuthState } from "react-firebase-hooks/auth";
// import auth from "../../../firebase.init";
// import { signOut } from "firebase/auth";

// // -----------------------------------------------------------------------------
// const Header = () => {
//   const [user] = useAuthState(auth);

//   const handleSignOut = () => {
//     signOut(auth);
//   };
//   console.log(user);

//   const navigation = [
//     { name: "Home", to: "/", current: true },
//     { name: "Blog", to: "#", current: false },
//     { name: "About", to: "#", current: false },
//     { name: "Login", to: "/signin", current: false },
//     { name: "Sign Up", to: "/signup", current: false },
//   ];
//   const userNavigation = [
//     { name: "Your Profile", to: "#" },
//     { name: "Settings", to: "#" },
//     { name: "Sign out", to: "#" },
//   ];

//   function classNames(...classes) {
//     return classes.filter(Boolean).join(" ");
//   }
//   // ***************************************************************************
//   return (
//     <>
//       {/*
//           This example requires updating your template:

//           ```
//           <html className="h-full bg-gray-100">
//           <body className="h-full">
//           ```
//         */}
//       <div className="min-h-full">
//         <Disclosure as="nav" className="bg-gray-800">
//           {({ open }) => (
//             <>
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-8 w-8"
//                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                         alt="Workflow"
//                       />
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           <Link
//                             key={item.name}
//                             to={item.to}
//                             className={classNames(
//                               item.current
//                                 ? "bg-gray-900 text-white"
//                                 : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                               "px-3 py-2 rounded-md text-sm font-medium"
//                             )}
//                             aria-current={item.current ? "page" : undefined}
//                           >
//                             {item.name}
//                           </Link>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <button
//                         type="button"
//                         className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                       >
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="ml-3 relative z-50">
//                         <div>
//                           {user ? (
//                             <div className="">
//                               <Link
//                                 to="/login"
//                                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3"
//                               >
//                                 Login
//                               </Link>
//                             </div>
//                           ) : (
//                             <div className="">
//                               <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                                 <span className="sr-only">Open user menu</span>
//                                 <img
//                                   className="h-8 w-8 rounded-full"
//                                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                                   alt="user"
//                                 />
//                               </Menu.Button>
//                             </div>
//                           )}
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {/* {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <Link
//                                     to={item.to}
//                                     className={classNames(
//                                       active ? "bg-gray-100" : "",
//                                       "block px-4 py-2 text-sm text-gray-700"
//                                     )}
//                                   >
//                                     {item.name}
//                                   </Link>
//                                 )}
//                               </Menu.Item>
//                             ))} */}
//                             <Menu.Item>
//                               {user ? (
//                                 <>
//                                   <button
//                                     onClick={signOut(auth)}
//                                     className="block px-4 py-2 text-sm text-gray-700"
//                                   >
//                                     Sign Out
//                                   </button>
//                                 </>
//                               ) : (
//                                 <Link
//                                   to="/signin"
//                                   className="block px-4 py-2 text-sm text-gray-700"
//                                 >
//                                   Sign In
//                                 </Link>
//                               )}
//                             </Menu.Item>
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <MenuIcon
//                           className="block h-6 w-6"
//                           aria-hidden="true"
//                         />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       to={item.to}
//                       className={classNames(
//                         item.current
//                           ? "bg-gray-900 text-white"
//                           : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                         "block px-3 py-2 rounded-md text-base font-medium"
//                       )}
//                       aria-current={item.current ? "page" : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="pt-4 pb-3 border-t border-gray-700">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-10 w-10 rounded-full"
//                         src={
//                           "https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                         }
//                         alt=""
//                       />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">
//                         {user ? user.displayName : "Sign in"}
//                       </div>
//                       <div className="text-sm font-medium leading-none text-gray-400">
//                         {user ? user.email : "sign in"}
//                       </div>
//                     </div>
//                     <button
//                       type="button"
//                       className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 px-2 space-y-1">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         to={item.to}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>
//       </div>
//     </>
//   );
// };

// export default Header;
