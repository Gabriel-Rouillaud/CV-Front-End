import React from 'react';

export default function Card (props){

    return (
            <div className="uk-card uk-card-body uk-card-secondary uk-card-hover uk-margin uk-width-medium">
                {props.children}
            </div>
        )
};
