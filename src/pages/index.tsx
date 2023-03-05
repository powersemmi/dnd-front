import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const Index = () => {
  const { data, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    /**
     * Session is being fetched
     */
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/login");
  }

  return <h1>Hello {data?.user?.name}</h1>;
};

export default Index;
