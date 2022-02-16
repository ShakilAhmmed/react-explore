import { useEffect, useState } from "react";
import UserTrComponent from "./UserTrComponent"
import axios from "axios";
import { withAsync } from "../../../helpers/withAsync";
import { getUsersService } from "../../../services/api/usersApi";

function UserListComponent() {
    const [userList, setUsers] = useState([]);

    //v1
    // const getUsers = async () => {
    //     try {
    //         const { data } = await axios.get('https://api.github.com/users')
    //         setUsers([...data]);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    //v2
    const getUsers = async () => {
        const { response } = await withAsync(getUsersService);
        setUsers([...response]);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">USER LIST</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Type</th>
                                    <th>Repos</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Avatar</th>
                                    <th>Type</th>
                                    <th>Repos</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <UserTrComponent userList={userList} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserListComponent;