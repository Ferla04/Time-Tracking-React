import React, { useLayoutEffect } from 'react';
import './Menu.css';

const Menu = ({data, setTime, time}) => {

    useLayoutEffect(() => {
        document.querySelectorAll('.btnMenu').forEach(e => 
            e.style.color = 'var(--ft-second-color)'
        )
        document.getElementById(time).style.color = 'var(--ft-color)';
    }, [time])

    return (
        <div className='menu'>
            <section className='perfil'>
                <img src={data.photo} alt='user'/>
                <article>
                    <span>Report for</span>
                    <p>{data.user}</p>
                </article>
            </section>

            <section className='search'>
                <button className='btnMenu' id='daily' onClick={() => setTime('daily')}>Daily</button>
                <button className='btnMenu' id='weekly' onClick={() => setTime('weekly')}>Weekly</button>
                <button className='btnMenu' id='monthly' onClick={() => setTime('monthly')}>Monthly</button>
            </section>
        </div>
    )
}

export default Menu;