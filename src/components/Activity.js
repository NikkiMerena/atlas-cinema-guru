import './components.css';

const Activity = ({userUsername, title, date}) => { // TODO: is this correct?
    return (
        <li>
            <p>
                <span className="red-text">{userUsername}</span>
                added
                <span className="red-text">{title}</span>
                to watch later -
                <span className="italics">{date}</span>
            </p>
        </li>
    );
}

export default Activity;
