import React from "react";
import config from "../config";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import { setUser } from "../redux/actions/userActions";
import { Redirect } from "react-router-dom";

const LoginPage = ({ user,setUser }) => {
  const responseGoogle = (response) => {
    if (response.error) console.error(response.error);
    else {
      setUser({ ...response.profileObj, ...response.tokenObj });
    }
  };

  if (user) return <Redirect to="/" />;

  return (
    <div>
      <GoogleLogin
        clientId={config.CLIENT_ID}
        buttonText="LOGIN"
        cookiePolicy={"single_host_origin"}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        isSignedIn={true}
      />
    </div>
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { setUser })(LoginPage);
