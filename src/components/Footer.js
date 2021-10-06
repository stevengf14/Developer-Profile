import { SiLinkedin } from 'react-icons/si';
import { SiFacebook } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

export default function Footer() {
    return (
        <footer className="hero-foot pt-6 pb-6">
            <div className="columns">
                <div className=" column is-half is-three-fifths is-offset-one-fifth">
                    <p>
                        <strong>Developer Profile</strong> by Steven Guamán. October 2021
                    </p>
                    <div className="columns is-multiline">
                        <div className="column is-1">
                            <a href={linkedin} target="_blank" rel="noreferrer"><SiLinkedin /></a>
                        </div>
                        <div className="column is-1">
                            <a href={git} target="_blank" rel="noreferrer"><SiGithub /></a>
                        </div>
                        <div className="column is-1">
                            <a href={facebook} target="_blank" rel="noreferrer"><SiFacebook /></a>
                        </div>
                        <div className="column is-1">
                            <a href={instagram} target="_blank" rel="noreferrer"><SiInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}