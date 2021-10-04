import profileImage from '../../assets/images/profile.jpg';
import Image from 'next/image';

export default function Header() {
    return (
        <div className="hero has-text-centered pt-5">
            <div className="hero-head">
                <div className="container has-text-centered">
                    <p className="title has-text-grey-dark">
                        Developer Profile
                    </p>
                </div>
            </div>
            <div className="hero-body">
                <div className="columns">
                    <div className="column is-two-quarter">
                        <figure className="image">
                            <Image class="is-rounded" src={profileImage} alt="Profile Image" width={128} height={128} />
                        </figure>
                    </div>
                    <div className="column is-two-quarters">
                        <div className="has-text-left has-text-grey">
                            <strong className="has-text-grey-dark">Steven Guamán Figueroa</strong>
                            <p><small><a className="has-text-grey-light" href="github.com/stevengf14">github.com/stevengf14</a></small></p>
                            <p>
                                <p>Systems Engineer - Software Developer</p>

                                <p>3 years experience in software development.</p>

                                <p>Java - Python - Javascript - SQL and No SQL DB - Git - Angular - React</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}