import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Badge from "../../Commons/Badge";
import { getUserReposService } from "../../../services/api/usersApi";
import { withAsync } from "../../../helpers/withAsync";

function UserRepoListComponent() {
    const [userRepoList, setUsersRepo] = useState([]);

    let { user } = useParams();
    //v1
    // const getUserRepo = async () => {
    //     try {
    //         const { data } = await axios.get(`https://api.github.com/users/${user}/repos`)
    //         setUsersRepo([...data]);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    ///v2
    const getUserRepo = async () => {
        const { response } = await withAsync(getUserReposService, user);
        console.log(response);
        setUsersRepo([...response]);
    }


    useEffect(() => {
        getUserRepo();
    }, [user]);

    return (
        <>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">USER REPO LIST</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Full Name</th>
                                    <th>Is Private</th>
                                    <th>Language</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Full Name</th>
                                    <th>Repo Type</th>
                                    <th>Language</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {userRepoList && userRepoList.map((repo, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{repo.name}</td>
                                            <td>{repo.full_name}</td>
                                            <td>{repo.private ?
                                                <Badge type="error" value="Private Repo" /> :
                                                <Badge type="success" value="Public Repo" />}</td>
                                            <td>{repo.language}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserRepoListComponent;