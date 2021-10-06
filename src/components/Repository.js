import Momment from 'react-moment';

export default function Repository(props) {
    const { repository, key } = props;
    return (
        <div key={key}>
            <div className="card has-text-grey-dark mb-3 pb4 pt-5 pl-5 pr-3">
                <p className="title is-5">{repository.name}</p>
                <div className="pl-5 pb-5">
                    <p><strong>URL: </strong><a href={repository.html_url} target="_blank">{repository.full_name}</a></p>
                    <p><strong>Created: </strong><Momment locale="en" fromNow>{repository.created}</Momment></p>
                    <p><strong>Updated: </strong><Momment locale="en" fromNow>{repository.updated}</Momment></p>
                    <p><strong>Pushed: </strong><Momment locale="en" fromNow>{repository.pushed}</Momment></p>
                </div>

            </div>
        </div>
    );

}