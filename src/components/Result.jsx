import React from 'react';

const Result = (props) => {
 
    return (
        <span>
            {
                props.results.inPlace && props.results.inPlace.map( item => {
                    return '1'
                })
            }

            {
                props.results.present && props.results.present.map(item => {
                    return '2'
                })
            }

        </span>
    );
}

export default Result;