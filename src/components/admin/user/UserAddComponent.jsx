import { useReducer, useState } from "react";

function UserAddComponent() {

    const formFields = {
        name: '',
        email: '',
        position: '',
        phone: '',
        status: '',
        address: '',
    };
    const [userForm, setUserForm] = useState({ ...formFields });

    const [usersList, setUserList] = useState([]);

    const addUser = (e) => {
        e.preventDefault();
        let users = [...usersList];
        users.push(userForm)
        setUserList(users);
        clearForm();
    }

    const clearForm = () => {
        setUserForm({ ...formFields });
    }

    const editUser = (id) => {
        const user = usersList.find((element, key) => key == id)
        setUserForm({ ...formFields, ...user })
    }


    const handleUserForm = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        setUserForm({
            ...userForm,
            [e.target.name]: value,
        });

        console.log(userForm);
    }

    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">ADD USER</h6>
                </div>
                <div className="card-body">
                    <div className="col-lg-12">
                        <div className="p-3">
                            <form className="user" onSubmit={addUser}>
                                <div className="row">
                                    <div className="form-group col-lg-4">
                                        <label>Name</label>
                                        <input type="text"
                                            name="name"
                                            value={userForm.name}
                                            onChange={(e) => handleUserForm(e)}
                                            className="form-control"
                                            placeholder="Enter Name" />
                                    </div>

                                    <div className="form-group col-lg-4">
                                        <label>Email</label>
                                        <input type="text"
                                            name="email"
                                            value={userForm.email}
                                            onChange={(e) => handleUserForm(e)}
                                            className="form-control"
                                            placeholder="Email" />
                                    </div>

                                    <div className="form-group col-lg-4">
                                        <label>Position</label>
                                        <input type="text"
                                            name="position"
                                            value={userForm.position}
                                            onChange={(e) => handleUserForm(e)}
                                            className="form-control"
                                            placeholder="Position" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group col-lg-4">
                                        <label>Phone</label>
                                        <input type="text"
                                            name="phone"
                                            value={userForm.phone}
                                            onChange={(e) => handleUserForm(e)}
                                            className="form-control"
                                            placeholder="Enter Phone" />
                                    </div>

                                    <div className="form-group col-lg-4">
                                        <label>Status</label>
                                        <input type="text"
                                            name="status"
                                            value={userForm.status}
                                            onChange={(e) => handleUserForm(e)}
                                            className="form-control"
                                            placeholder="Status" />
                                    </div>

                                    <div className="form-group col-lg-4">
                                        <label>Address</label>
                                        <textarea type="text"
                                            name="address"
                                            value={userForm.address}
                                            onChange={(e) => handleUserForm(e)}
                                            className="form-control"
                                            col={1}
                                            rows={1}
                                            placeholder="Address">

                                        </textarea>
                                    </div>

                                </div>


                                <div className="row">
                                    <div className="col-lg-9">
                                        <button type="submit" className="btn btn-success">
                                            ADD
                                        </button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">USER LIST</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Sl</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Position</th>
                                    <th>Phone</th>
                                    <th>Status</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList && usersList.map((user, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{key + 1}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.position}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.status}</td>
                                            <td>{user.address}</td>
                                            <td>
                                                <button onClick={() => editUser(key)} className="btn btn-primary">
                                                    <i className="fa fa-pencil"></i>
                                                </button>
                                            </td>
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

export default UserAddComponent;