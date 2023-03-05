import { signOut } from "next-auth/react"

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const SignOut = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
  }
  else {
    signOut({ callbackUrl: '/' })
  }

  return <h1>Signing out...</h1>;
};

export default SignOut;
