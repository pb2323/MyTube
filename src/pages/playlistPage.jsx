import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPlaylists } from "../redux/actions/playlistAction";
import { Redirect } from "react-router-dom";

class playlistPage extends Component {
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return (
      <div>
        {!this.props.playlist ? (
          <h1>Loading PlayLists...</h1>
        ) : (
          this.props.playlists.items.map((playlist, index) => (
            <div key={index}>
              {" "}
              {JSON.stringify(playlist)}
              {console.log(this.props.playlists.items)}{" "}
            </div>
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    user: storeState.userState.user,
    playlists: storeState.playlistState.playlists,
  };
};

export default connect(mapStateToProps, { fetchPlaylists })(playlistPage);
