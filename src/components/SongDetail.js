import React from 'react';
import { connect } from 'react-redux';


const SongDetail = ({ song }) => {
	if(!song)
		return (
			<div className="ui content">
				<h3>Select a Song</h3>
			</div>
		);
	else
		return (
			<div className="ui content">
				<h3>Song Detail:</h3>
				<p>
					Title: {song.title}.
					<br />
					Duration: {song.duration} min(s).
				</p>
			</div>
		);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
