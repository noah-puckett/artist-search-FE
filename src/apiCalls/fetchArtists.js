export const getArtists = (search) => {

    return fetch(`http://musicbrainz.org/ws/2/artist?query=${search}&fmt=json&limit=25`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get artists';

            //artists is an object with an array of artist objects
            return json;
        });
};

export const getReleases = (artistId) => {

    return fetch(`http://musicbrainz.org/ws/2/release?artist=${artistId}&fmt=json`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get artist releases';

            return json;
        });
};

export const getRecordings = (releaseId) => {

    return fetch(`http://musicbrainz.org/ws/2/recording?release=${releaseId}&fmt=json`, {
    })
        .then(res => ([res.ok, res.json()]))
        .then(([ok, json]) => {
            if(!ok) throw 'Unable to get release recordings';

            return json;
        });
};

