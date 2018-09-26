var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: printPlaylists,
  printTracks: printTracks,
  printPlaylist: printPlaylist,
  addTrack: addTrack,
  addPlaylist: addPlaylist,
  printSearchResults: printSearchResults

}
// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
//
function printPlaylists() {
  for (var keys in this.playlists) {
    console.log(keys + ": " + this.playlists[keys].name + "- " + this.playlists[keys].tracks.length + " tracks");
  }
}
library.printPlaylists()


// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

function printTracks() {
  for (var keys in this.tracks) {
    console.log(`${keys} \: ${this.tracks[keys].name} \( ${this.tracks[keys].album} \) `);
  }
}
library.printTracks();



// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

function printPlaylist(playlistId) {
  console.log(`${this.playlists[playlistId].id} \: ${this.playlists[playlistId].name} \- ${this.playlists[playlistId].tracks.length} tracks`);
  for (var trackId of this.playlists[playlistId].tracks) {
    console.log(`${trackId} \: ${this.tracks[trackId].name} \( ${this.tracks[trackId].album} \) `)
  }
}
library.printPlaylist("p01")


// adds an existing track to an existing playlist

var addTrackToPlaylist = function (trackId, playlistId) {
  if(!(library.playlists[playlistId].tracks.includes(trackId)) && library.tracks.hasOwnProperty(trackId)){
    library.playlists[playlistId].tracks.push(trackId);
  }
  console.log(library.playlists[playlistId].tracks);
}
addTrackToPlaylist("t09", "p01")


// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 100).toString(10).substring(1);
}


// adds a track to the library

function addTrack (name, artist, album) {
  var obj = {};
  obj.id = uid().toString();
  if(!(this.tracks.hasOwnProperty(obj.id)))
  obj.name = name;
  obj.artist = artist;
  obj.album = album;
  this.tracks[obj.id] = obj;
}
library.addTrack("Wind","Konstantin","Montreal")
console.log(library)


// adds a playlist to the library
function addPlaylist (name, tracks) {
  var obj = {};
  obj.id = uid().toString();
  obj.name = name;
  obj.tracks = tracks;
  this.playlists[obj.id] = obj;
}
library.addPlaylist("Window", ["f20", "h79"])
console.log(library.playlists)


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

function printSearchResults(query) {
  var list = [];
  for(var keys in this.tracks){
    for(var tracks in this.tracks[keys]){
      if(this.tracks[keys][tracks].search(query) != -1){
          list.push( `${keys} \: ${this.tracks[keys].name} \( ${this.tracks[keys].album} \) ` );
      }
    }
  }
  return list;
}
console.log(library.printSearchResults("ode"))
