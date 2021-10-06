import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Global from '../assets/Global';
import Header from '../src/components/Header'
import Repository from '../src/components/Repository';
import Profile from '../src/components/Profile';

export default function Home() {

  /* URLs services */
  const url_repositories = Global.repositories;
  const url_profile = Global.profile;

  /* Social Media*/
  const facebook = Global.faceboook;
  const instagram = Global.instagram;
  const linkedin = Global.linkedin;
  const git = Global.git;

  /* states */
  const [repositories, setRepositories] = useState([]);
  const [profile, setProfile] = useState({});
  const [option, setOption] = useState('');

  const getProfile = () => {
    console.debug('Getting profile');
    axios.get(url_profile)
      .then(response => {
        if (response.status === 200) {
          setProfile({
            id: response.data.id,
            user: response.data.login,
            name: response.data.name,
            location: response.data.location,
            url: response.data.html_url,
            bio: response.data.bio,
            created: response.data.created_at,
            updated: response.data.updated_at
          });
        } else if (response.status !== 200) {
          console.debug('There is an error ' + response.status);
        }
      })
      .catch(error => {
        console.error('There is an error during get all repositories.');
      })
  }

  const getRepositories = () => {
    console.debug('Getting repositories');
    axios.get(url_repositories)
      .then(response => {
        if (response.status === 200) {
          const allRepos = response.data.map(repository => {
            return {
              id: repository.id,
              name: repository.name,
              full_name: repository.full_name,
              html_url: repository.html_url,
            }
          });
          setRepositories(allRepos);
        } else if (response.status !== 200) {
          console.debug('There is an error ' + response.status);
        }
      })
      .catch(error => {
        console.error('There is an error during get all repositories.');
      });
  }

  const changeOption = (event) => {
    const opt = event.target.name
    if (opt === option) {
      setOption('')
    } else if (opt === 'profile') {
      setOption('profile');
    } else if (opt === 'repositories') {
      setOption('repositories');
    }
  }

  useEffect(() => {
    getProfile();
    getRepositories();
  }, []);

  return (
    <div className="columns has-background-link-light is-family-sans-serif">
      <div className="column is-three-fifths is-offset-one-fifth">
        <Head>
          <title>Developer Profile</title>
          <meta name="description" content="Generated by Steven Guamán" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container">
          <Header />
          <div className="hero-foot">
            <nav className="tabs is-toggle is-fullwidth has-background-black">
              <div className="container">
                <ul>
                  <li><a className="has-text-white" name="profile" onClick={changeOption}>Profile</a></li>
                  <li><a className="has-text-white" name="repositories" onClick={changeOption}>Repositories</a></li>
                </ul>
              </div>
            </nav>
          </div>
          {
            option != '' ? (
              <div className="hero-body has-background-white">
                <div className="column">
                  {
                    option === 'profile' &&
                    <Profile profile={profile}></Profile>
                  }
                </div>
                <div className="column">
                  {
                    option === 'repositories' &&
                    repositories.map((repository, index) => <Repository repository={repository} key={`repository-${index}`}></Repository>)
                  }
                </div>
              </div>
            ) : (
              <div className="pb-6"></div>
            )
          }
        </main>
        <Footer/>
      </div>
    </div>
  )
}
