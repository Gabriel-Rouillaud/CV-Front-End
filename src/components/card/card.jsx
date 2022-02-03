import React, {Component} from 'react';

export default class Card extends Component {
    render() {

        const cardStyle = {
            background: "rgba( 149, 2, 151, 0.6 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 20px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )"
        };

        return (
            <div style={cardStyle} className='uk-card uk-card-hoover'/>
        )
    };
};
