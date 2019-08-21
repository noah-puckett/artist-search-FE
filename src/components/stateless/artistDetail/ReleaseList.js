import React from 'react';
import PropTypes from 'prop-types';
import Release from '../artistDetail/Release';


function ReleaseList({ releases }) {
    const releasesArray = releases.map(release => {
        return (
            // TODO: fix key to be artist._id
            <li style={{ listStyleType: 'none' }} key={release.id}>
                <Release title={release.title}/>
                <img style={{ height: 300 }} src={`http://coverartarchive.org/release/${release.id}/front`} onError={(e) => {e.target.src = 'src/components/stateless/artistDetail/photo-unavailable.png';}} />
            </li>
        );
    });
    return releasesArray;
}

ReleaseList.propTypes = {
    releases: PropTypes.array.isRequired,
};

export default ReleaseList;
