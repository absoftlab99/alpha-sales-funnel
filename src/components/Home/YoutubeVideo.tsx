import React from 'react';

const YoutubeVideo = () => {
    return (
        <div className=''>
            <iframe className='w-full' width="560" height="440" src="https://www.youtube.com/embed/o6_eX0sGSFc?si=QXcXau9SbZh3t1zV" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    );
};

export default YoutubeVideo;