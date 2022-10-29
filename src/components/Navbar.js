import { useNavigate } from 'react-router-dom';
function Navbar() {


  const navigate = useNavigate();
  return (
    <nav>
      <h1>LOGO</h1>
      <div className="logout">
        <button onClick={()=>navigate('/loginform')}>Logout</button>

        <span>Seerat Ali</span>
      </div>
    </nav>
  );
}
export default Navbar;
