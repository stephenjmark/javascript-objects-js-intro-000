var playlist = {'beyonce': 'halo'}

function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign(playlist, {[artistName]: songTitle})
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist.artistName
  console.log(playlist)
  return playlist
}
