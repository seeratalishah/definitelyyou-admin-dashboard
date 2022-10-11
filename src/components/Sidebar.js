import { NavLink, useLocation } from "react-router-dom";
import {HomeOutlined,ShopOutlined,FormOutlined,UsergroupAddOutlined} from '@ant-design/icons'

function Sidebar() {
  const location = useLocation();
  return (
    <aside>
      <p>Tahira's Dashboard</p>
      <hr />

      <ul className="sidebar-links">
        <li>
          <NavLink
            to="/"
            className={() =>
              location.pathname === "/" ? "active" : ""
            }
          >
           <HomeOutlined />
            <span className="link-text">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/products">
          <ShopOutlined />
            <span className="link-text">Products</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders">
          <FormOutlined />
            <span className="link-text">Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/customers">
          <UsergroupAddOutlined />
            <span className="link-text">Customers</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
export default Sidebar;
