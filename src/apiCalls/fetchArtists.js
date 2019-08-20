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
