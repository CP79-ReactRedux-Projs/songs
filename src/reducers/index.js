import { combineReducers } from 'redux';

const songsReducer = () => {
	// Return an Array of Objects
	return [
		{ title: 'Song 1st', duration: '1:10' },
		{ title: 'Song 2nd', duration: '2:20' },
		{ title: 'Song 3rd', duration: '3:30' },
		{ title: 'Song 4th', duration: '4:40' },
		{ title: 'Song 5th', duration: '5:50' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED')
	{
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});
