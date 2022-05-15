import React from 'react';
import puntos from '../images/icon-ellipsis.svg';

const Activity = ({data, time}) => {

    const { color, title, img, timeframes } = data;
    const { [time]:hours } = timeframes;

    return (
        <div className='cards' style={{background: color}}>
            <img className='logo' alt='' src={img}></img>
            <main>
                <section>
                    <p>{title}</p>
                    <img src={puntos} alt=''></img>
                </section>
                <p>{hours.current}hrs</p>
                <span>Last Week - {hours.previous}hrs</span>
            </main>
        </div>
    )
}

export default Activity;