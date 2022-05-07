import React from "react";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
// import Loading from "../../Shared/Loading/Loading";
// import useToken from "../../../hooks/useToken";
import { GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
//   const [token] = useToken(user || user1);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  let errorElement;

//   if (loading || loading1) {
//     return <Loading></Loading>;
//   }

  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }

//   if (token) {
//     navigate(from, { replace: true });
//   }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50"></div>
      </div>
      {errorElement}
      <div className="">
        <GoogleLoginButton
          onClick={() => signInWithGoogle()}
        ></GoogleLoginButton>
        <GithubLoginButton onClick={()=>signInWithGithub()}></GithubLoginButton>
      </div>
    </div>
  );
};

export default SocialLogin;
