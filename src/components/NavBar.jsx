import React from "react";
import { NavItem, Nav, Navbar } from "reactstrap";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import { logoutUser } from "../redux/actions/userActions";
import config from "../config";

const MyTubeNavBar = ({ user, logoutUser }) => {
  const handleLogoutFailure = (err) => {
    console.error(err);
  };
  const handleLogoutSuccess = () => {
    alert("Logged Out successfully");
    logoutUser();
  };

  return (
    <Navbar color="light" light expand="md">
      <NavLink to="/">reactstrap</NavLink>
      <Nav className="ml-auto" navbar>
        {!user ? (
          <NavItem>
            <NavLink to="/login">Login</NavLink>
          </NavItem>
        ) : (
          <>
            {console.log(user, "user")}
            <NavItem>
              <NavLink to="/profile">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/playlists">My Playlists</NavLink>
            </NavItem>
            <GoogleLogout
              clientId={config.CLIENT_ID}
              onFailure={handleLogoutFailure}
              onLogoutSuccess={handleLogoutSuccess}
              buttonText="LOGOUT"
            />
          </>
        )}
      </Nav>
    </Navbar>
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps, { logoutUser })(MyTubeNavBar);
