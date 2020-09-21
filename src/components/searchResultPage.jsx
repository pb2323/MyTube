import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { fetchSearchVideos } from "../redux/actions/videoActions";
import Videos from "../components/Videos";

class searchResultPage extends PureComponent {
  componentDidMount() {
    const searchQuery = this.props.match.params.searchQuery;
    this.props.fetchSearchVideos(searchQuery);
  }

  componentDidUpdate(prevProp) {
    const prevSearchQuery = prevProp.match.params.searchQuery;
    if (prevSearchQuery !== this.props.match.params.searchQuery) {
      this.props.fetchSearchVideos(this.props.match.params.searchQuery);
    }
  }

  render() {
    return this.props.videos ? (
      <Videos videos={this.props.videos.items} mode="search" />
    ) : (
      <h1>Loading...</h1>
    );
  }
}

const mapStateToProps = (storeState) => {
  return {
    videos: storeState.videoState.videos,
  };
};

export default connect(mapStateToProps, { fetchSearchVideos })(
  searchResultPage
);
