import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, selectUserName } from '../store/userSlice';
function Navbar() {

  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(logoutUser);
    toast.success("Logout successfully");
  }

  return (
    <nav>
      <h1>LOGO</h1>
      <div className="logout">
        <button onClick={logout()}>Logout</button>

        <span>{userName}</span>
      </div>
    </nav>
  );
}
export default Navbar;
