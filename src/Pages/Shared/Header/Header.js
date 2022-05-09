import { signOut } from "firebase/auth";
import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50">
      {/* ==================== */}
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <Link
            to="/home"
            className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
          >
            Shoes House
          </Link>
        </Navbar.Brand>
        {/* ---------------------------- */}
        {!user ? (
          <div className="flex md:order-2">
            <Button onClick={() => navigate("/signin")}>Login</Button>
            <Navbar.Toggle />
          </div>
        ) : (
          <div className="flex md:order-2">
            <Dropdown
              label={<Avatar img={user?.photoURL} rounded={true} />}
              arrowIcon={false}
              inline={true}
            >
              <Dropdown.Header>
                <span className="block text-sm">{user?.displayName}</span>
                <span className="block truncate text-sm font-medium">
                  {user?.email}
                </span>
              </Dropdown.Header>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => signOut(auth)}>
                Sign out
              </Dropdown.Item>
            </Dropdown>
          </div>
        )}
        <Navbar.Collapse>
          <Navbar.Link>
            <Link to="/home">Home</Link>
          </Navbar.Link>
          <Navbar.Link>
            <Link to="/blog">Blog</Link>
          </Navbar.Link>
          {user && (
            <Navbar.Link>
              <Link to="/manageinv">Manage Items</Link>
            </Navbar.Link>
          )}
          {user && (
            <Navbar.Link>
              <Link to="/add">Add Itam</Link>
            </Navbar.Link>
          )}
          {user && (
            <Navbar.Link>
              <Link to="/myitem">My Items</Link>
            </Navbar.Link>
          )}
        </Navbar.Collapse>
      </Navbar>

      {/* ===================== */}
    </div>
  );
};

export default Header;
