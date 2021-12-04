import {Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./common/components/layout";
import Home from "./common/components/pages/PublickPages/home";
import Authorization from "./common/components/pages/PublickPages/authorization"
import Registration from "./common/components/pages/PublickPages/registration";
import NotFound from "./common/components/pages/NotFoundPages";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="registration" element={<Registration/>}/>
                    <Route path="authorization" element={<Authorization/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
