//this gets an array of artists
export const getArtists = (artists, page) => {

    return fetch(`http://musicbrainz.org/ws/2/artist?query=${artists}&fmt=json&limit=10&offset=${(page - 1) * 10}`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get artists';

            return json;
        });
};

//this gets an array of ALBUMS
export const getAlbums = (artistId, page) => {
    return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json&limit=10&offset=${(page - 1) * 10}`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get albums';

            return json;
        });
};

//this gets an array of SONGS
export const getSongs = (releaseId) => {

    return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get album songs';

            return json;
        });
};

//this gets ONE SONG'S LYRICS
export const getLyrics = (artist, title) => {

    return fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get song lyrics';

            return json;
        });
};
