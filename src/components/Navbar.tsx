import Link from "next/link";
import { UserType } from "@/types/UserType";
import { FC } from "react";

const Navbar: FC<UserType> = ({ username, full_name, email }) => {
  const navigation = [
    { id: 1, title: username, path: "/" },
    { id: 2, title: "Dashboard", path: `/${username}/games` },
    { id: 3, title: "Create New Game", path: `/${username}/games/create` },
    { id: 4, title: "In Games", path: `/${username}/in_games` },
    { id: 5, title: "Logout", path: "/logout" },
  ];
  const nav_list = navigation.map(({id, title, path}) => (
    <span key={id} style={{marginRight: "15px"}}><Link className="nav-link" href={path}>{title}</Link></span>
  ));
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <Link className="navbar-brand" style={{marginLeft: "20px"}} href="/">
            DND
          </Link>
        </div>
        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          {nav_list}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
