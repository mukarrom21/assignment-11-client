import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
// import SocialLogin from '../SocialLogin/SocialLogin';
// import Loading from '../../Shared/Loading/Loading';
// import useToken from '../../../hooks/useToken';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    // const [token] = useToken(user);
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    // if(loading || updating){
    //     return <Loading></Loading>
    // }

    // if (token) {
    //     navigate('/home');
    // }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        // 
    }

    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' />

                <input type="email" name="email" id="" placeholder='Email Address' required />

                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'ps-2': 'ps-2 text-danger'} htmlFor="terms">Accept Genius Car Terms and Conditions</label> */}
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input
                    disabled={!agree}
                    className='w-50 mx-auto btn btn-primary mt-2'
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Signup;


// import { LockClosedIcon } from "@heroicons/react/solid";
// import { signOut, updateProfile } from "firebase/auth";
// import React from "react";
// import { Link } from "react-router-dom";
// import auth from "../../../firebase.init";
// import { useUpdateProfile, useCreateUserWithEmailAndPassword, useAuthState } from "react-firebase-hooks/auth";
// import {
//   FacebookLoginButton,
//   GithubLoginButton,
//   GoogleLoginButton,
// } from "react-social-login-buttons";

// const Signup = () => {
//   const [
//       createUserWithEmailAndPassword,
//       user,
//       loading,
//       error,
//   ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});





//   const handleSignUp = async (event) => {
//       event.preventDefault();
//       const name = event.target.name.value;
//       const email = event.target.email.value;
//       const password = event.target.password.value;

//       await createUserWithEmailAndPassword(email, password);
      
//   }

//   // -------------------------------------------

//   return (
//     <div>
//       <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8">
//           <div>
//             <img
//               className="mx-auto h-12 w-auto"
//               src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
//               alt="Workflow"
//             />
//             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//               Sign Up
//             </h2>
//           </div>
//           {/* -----------------------Form------------------------- */}
//           <form
//             className="mt-8 space-y-6"
//             onSubmit={handleSignUp}
//           >
//             {/* <input type="hidden" name="remember" defaultValue="true" /> */}
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div>
//                 <label htmlFor="full-name" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="full-name"
//                   name="name"
//                   type="text"
//                   autoComplete="name"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Full Name"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="email-address" className="sr-only">
//                   Email address
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Email address"
//                 />
//               </div>
//               <div>
//                 <label htmlFor="password" className="sr-only">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                   placeholder="Password"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center justify-between">
//              {/*  <div className="flex items-center">
//                 <input
//                   id="remember-me"
//                   name="remember-me"
//                   type="checkbox"
//                   className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                 />
//                 <label
//                   htmlFor="remember-me"
//                   className="ml-2 block text-sm text-gray-900"
//                 >
//                   Remember me
//                 </label>
//               </div> */}

//               <div className="text-sm">
//                 <Link
//                   to="/signin"
//                   className="font-medium text-red-600 hover:text-red-500"
//                 >
//                   Already have an account?
//                 </Link>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                   <LockClosedIcon
//                     className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
//                     aria-hidden="true"
//                   />
//                 </span>
//                 Sign Up
//               </button>
//             </div>
//           </form>
//           <div>
//             <div className="text-2xl text-center font-bold text-indigo-800 my-3">
//               ----or Sign Up with----
//             </div>
//             <GoogleLoginButton>Sign Up with Google</GoogleLoginButton>
//             <GithubLoginButton>Sign Up with GitHub</GithubLoginButton>
//             <FacebookLoginButton>Sign Up with Facebook</FacebookLoginButton>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
