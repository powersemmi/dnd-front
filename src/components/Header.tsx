import NoSignInNavbar from "@/components/NoSignInNavbar";
import Navbar from "@/components/Navbar";
import {useSession} from "next-auth/react";

const Header = () => {
  const session_data = useSession();
  console.log(session_data)
  const data = session_data.data
  if (session_data.status !== "unauthenticated") {
    return (
      <header>
        <Navbar
          username={data?.user?.name}
          email={data?.user?.email}
          full_name={data?.user?.full_name}
        />
      </header>
    );
  } else {
    return (
      <header>
        <NoSignInNavbar />
      </header>
    );
  }
};

export default Header;
