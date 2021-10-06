import { SiLinkedin } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import Global from '../../assets/Global.js';

export default function Footer() {
    /* Social Media*/
    const facebook = Global.faceboook;
    const instagram = Global.instagram;
    const linkedin = Global.linkedin;
    const git = Global.git;

    return (
        <footer className="hero-foot is-three-fifths is-offset-one-fifth  pt-6 pb-6 pl-6">
            <div className="has-text-centered ">
                    <p>
                        <strong>Developer Profile</strong> by Steven Guamán. October 2021
                    </p>
                    <div className="columns is-centered is-multiline pt-4">
                        <a className="pr-4" href={linkedin} target="_blank" rel="noreferrer"><SiLinkedin /></a>
                        <a className="pr-4" href={git} target="_blank" rel="noreferrer"><SiGithub /></a>
                        <a className="pr-4" href={facebook} target="_blank" rel="noreferrer"><SiFacebook /></a>
                        <a className="pr-4" href={instagram} target="_blank" rel="noreferrer"><SiInstagram /></a>
                    </div>
                </div>
        </footer>
    )
}