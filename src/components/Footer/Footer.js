import React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footerContainer}>
            <h1 className={styles.footerH1}>Find me online</h1>
            <ul className={styles.socialsContainer}>
                <li><a href='https://github.com/EKHess' target='_blank' rel='noreferrer'><ion-icon name="logo-github"></ion-icon></a></li>
                <li><a href='https://x.com/EricHessOnline' target='_blank' rel='noreferrer'><ion-icon name="logo-twitter"></ion-icon></a></li>
                <li><a href='https://www.instagram.com/erichessonline/' target='_blank' rel='noreferrer'><ion-icon name="logo-instagram"></ion-icon></a></li>
                <li><a href='https://www.youtube.com/@erichessonline' target='_blank' rel='noreferrer'><ion-icon name="logo-youtube"></ion-icon></a></li>
            </ul>
        </div>
    )
}

export default Footer;