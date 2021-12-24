import {Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./common/components/layout";
import Guest from "./common/components/pages/PublickPages/guest";
import Authorization from "./common/components/pages/PublickPages/authorization"
import Registration from "./common/components/pages/PublickPages/registration";
import NotFound from "./common/components/pages/NotFoundPages";
import GuestRoute from "./common/components/routing/guestRoute";
import PrivateRoute from "./common/components/routing/privateRoute";
import { Profile } from "./common/components/pages/PrivatePages/profile";
import { WorkSpace } from "./common/components/pages/PrivatePages/workspace";
import { Dashboard } from "./common/components/pages/PrivatePages/workspace/Dashboard";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    {/* guest Route */}
                    <Route index element={<GuestRoute><Guest/></GuestRoute>}/>
                    <Route path="registration" element={<GuestRoute><Registration/></GuestRoute>}/>
                    <Route path="authorization" element={<GuestRoute><Authorization/></GuestRoute>}/>
                    {/* private Route */}
                    <Route path="profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
                    <Route path="workspace" element={<PrivateRoute><WorkSpace/></PrivateRoute>}/>
                    {/* notFound */}    
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
