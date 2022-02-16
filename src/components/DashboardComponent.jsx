import NavComponent from "./layouts/NavComponent";
import { Routes, Route } from "react-router-dom";
import DashboardContentComponent from "./layouts/DashBoardContentComponent";
import UserListComponent from "./admin/user/UserListComponent";
import UserRepoListComponent from "./admin/user/UserRepoListComponent";

function DashboardComponent() {
    return (
        <div>
            {/* Page Wrapper */}
            <div id="wrapper">
                <NavComponent />
                <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        <Routes>
                            <Route index path="/" element={<DashboardContentComponent />} />
                            <Route path="/user-list" element={<UserListComponent />} />
                            <Route path="/user-repos/:user" element={<UserRepoListComponent />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default DashboardComponent;