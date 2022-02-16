import { Link } from "react-router-dom";

function UserTrComponent(props) {
    return (
        <>
            {props.userList && props.userList.map((value, key) => {
                return (<tr key={key}>
                    <td>{value.login}</td>
                    <td style={{ textAlign: 'center' }}>
                        <img style={{ height: '100px' }} src={value.avatar_url} />
                    </td>
                    <td>{value.type}</td>
                    <td>
                        <nav>
                            <Link className="nav-link"
                                to={`/user-repos/${value.login}`}
                                key={value.id}
                            >
                                <i className="fas fa-fw fa-tachometer-alt" />
                                <span>Repos</span></Link>
                        </nav>
                    </td>
                </tr>)
            })}
        </>
    );
}

export default UserTrComponent;