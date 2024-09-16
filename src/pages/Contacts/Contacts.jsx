import React from 'react';

const Contacts = () => {
    return (

     <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>SPB, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+7000-00-00">+7 (911) 000-00-00</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:webbotify@gmail.com">test_botify@gmail.com</a></p>
                    </li>
                </ul>

        </div>
    </main>
     
    );
};

export default Contacts;