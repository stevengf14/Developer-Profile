export default function Repository(props) {
    const { repository, key } = props;
    return (
        <div key={key}>
            <div className="card has-text-white mb-2 pb2">
                <p><strong>{repository.name}</strong></p>
                <a href={repository.html_url}>{repository.full_name}</a>
            </div>
        </div>
    );

}