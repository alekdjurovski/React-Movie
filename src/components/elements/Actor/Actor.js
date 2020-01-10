import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../config';

const Actor = (props) => {
    return (
        <div className="rmdb-actor">
            <img src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : './images/no_image.jpg'}
            alt="actor_thumb" 
            /> 
            <span className="rmdb-actor-name">{props.actor.name}</span>
            <span className="rmdb-actor-character">{props.actor.character}</span>
        </div>
    );
}

export default Actor;