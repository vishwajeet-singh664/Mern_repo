import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
// import { TreeView, TreeItem } from "@material-ui/lab";
import ParkIcon from '@mui/icons-material/Park';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PostAddIcon from '@mui/icons-material/PostAdd';
import AddIcon from '@mui/icons-material/Add';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PeopleIcon from '@mui/icons-material/People';
import RateReviewIcon from '@mui/icons-material/RateReview';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
      </Link>
      <Link to="/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>

      <Link to="/admin/products">
        <PostAddIcon />
        All Products
      </Link>

      <Link to="/admin/product">
        <AddIcon />
        Create a Product
      </Link>

      <Link to="/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;