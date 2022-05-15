import React from 'react';
import './Menu.css';

const Menu = ({data, setTime}) => {

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
                <button onClick={() => setTime('daily')}>Daily</button>
                <button onClick={() => setTime('weekly')}>Weekly</button>
                <button onClick={() => setTime('monthly')}>Monthly</button>
            </section>
        </div>
    )
}

export default Menu;