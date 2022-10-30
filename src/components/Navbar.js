import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, selectUserName } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
function Navbar() {

  const userName = useSelector(selectUserName);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(logoutUser);
    toast.success("Logout successfully");
    window.localStorage.setItem("token", "");
    navigate("/loginform");
  }

  return (
    <nav>
      <h1>LOGO</h1>
      <div className="logout">
        <button onClick={logout}>Logout</button>

        <span>{userName}</span>
      </div>
    </nav>
  );
}
export default Navbar;
