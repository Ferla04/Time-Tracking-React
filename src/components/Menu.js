import React from 'react';
import './Menu.css';

const Menu = ({data}) => {

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
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </section>
        </div>
    )
}

export default Menu;