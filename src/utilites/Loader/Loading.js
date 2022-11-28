import React from 'react';
import { FidgetSpinner } from 'react-loader-spinner';

const Loading = () => {
    return (
        <FidgetSpinner
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
            ballColors={['#ff0000', '#00ff00', '#0000ff']}
            backgroundColor="#F4442E"
        />
    );
};

export default Loading;