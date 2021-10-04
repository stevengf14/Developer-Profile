import Momment from 'react-moment';

export default function Profile(props) {
    const { profile, key } = props;
    return (
        <div className="pt-5 pl-5 pr-5 pb-5">
            <p><strong>Name: </strong>{profile.name}</p>
            <p><strong>User Name: </strong>{profile.user}</p>
            <p><strong>URL: </strong><a href={profile.url}>{profile.url}</a></p>
            <p><strong>Bio: </strong>{profile.bio}</p>
            <p><strong>Location: </strong>{profile.location}</p>
            <p><strong>Created: </strong><Momment locale="en" fromNow>{profile.created}</Momment></p>
            <p><strong>Updated: </strong><Momment locale="en" fromNow>{profile.updated}</Momment></p>
        </div>
    );
}