import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return(
        <section className="sidebar">
            <nav>
                <ul>
                    <li>
                    <NavLink to='/'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }>Home</NavLink>
                    </li>
                    <li>
                    <NavLink to='/leader-board'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }>Leader board</NavLink>
                    </li>
                    <li>
                    <NavLink to='/new-question'
                        className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "active" : ""
                        }>New question</NavLink>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export default Sidebar;