import Link from "next/link";

const NoSignInNavbar = () => {
  return (
    <nav className="navbar navbar-light bg-light row justify-content-center sticky-top">
      <div className="container">
        <div className="col-3 p-0">
          <Link className="navbar-brand" style={{marginLeft: "20px"}} href="/">
            DND
          </Link>
        </div>
        <div className="col-3 mt-3 mt-md-0 text-center d-flex flex-row">
          <span style={{marginRight: "15px"}}>
            <Link className="nav-link" href={'/login'}>LogIn</Link>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NoSignInNavbar;
