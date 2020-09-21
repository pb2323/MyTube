import React from "react";
import { connect } from "react-redux";
import { Jumbotron,Button } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const Profile = ({ user }) => {
  return user ? (
    <div>
      <Jumbotron>
        <img
          src={user.imageUrl}
          title="Profile Pic"
          alt="Profile Pic"
          style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        />
        <h1 className="display-3">{user.name}</h1>
        <p className="lead">Email : {user.email}</p>
        <hr className="my-2" />
        <p className="lead">
          <Link to="/playlist">
            <Button color="primary">View Playlist</Button>
          </Link>
        </p>
      </Jumbotron>
    </div>
  ) : (
    <Redirect to="/login" />
  );
};

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
  };
};

export default connect(mapStateToProps)(Profile);
