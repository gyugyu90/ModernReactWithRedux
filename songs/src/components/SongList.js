import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {

  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title} >
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              select
            </button>
          </div>
          <div className="content">
            {song.title}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui divided list">
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { songs: state.songs };
}

// ES2015 selectSong이 이름이 같아서 그냥 넣어도 됨
export default connect(
  mapStateToProps, 
  { selectSong }
)(SongList);