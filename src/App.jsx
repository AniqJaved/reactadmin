import './App.scss';
import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/home/Home';
import UserList from './components/pages/userList/UserList';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { User } from './components/pages/user/User';
function App() {
  return (
    <>
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route exact path='/users' element={<UserList/>}/>
          <Route exact path='/user/:userId' element={<User/>}/>
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
