import profileImage from '../../assets/images/profile.jpg';
import Image from 'next/image';
import styles from '../../assets/styles/header.module.css';

export default function Header() {
    return (
        <div className={styles.background} >
            <div className=" hero has-text-centered pt-5" >
                <div className="hero-head" styles="opacity=1;">
                    <div className="container has-text-centered">
                        <p className="title has-text-white">
                            DEVELOPER PROFILE
                        </p>
                    </div>
                </div>
                <div className="hero-body has-text-white">
                    <div className="columns">
                        <div className="column is-two-quarter">
                            <figure className="image">
                                <Image className="is-rounded" src={profileImage} alt="Profile Image" width={192} height={192} />
                            </figure>
                        </div>
                        <div className="column is-two-quarters">
                            <div className="has-text-left">
                                <p className="title is-5 has-text-white">STEVEN GUAMÁN FIGUEROA</p>
                                <p><small><a className="has-text-primary" href="https://github.com/stevengf14">github.com/stevengf14</a></small></p>
                                <section>
                                    <p>Systems Engineer - Software Developer</p>
                                    <p>3 years experience in software development.</p>
                                    <p>Java - Python - Javascript - SQL and No SQL DB - Git - Angular - React</p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}