import AvatarIcon from '../icons/AvatarIcon';

const Header = ({userId, onHandleLogout}) => {
    return(<header>
        <h2 className="app-title">Employee Polls</h2>
        <div className="user-info">
            <AvatarIcon/>
            <p>{userId}</p>
            <button className="logout-button" data-testid="logout-user" onClick={onHandleLogout}>Logout</button>
        </div>
    </header>);
}

export default Header;