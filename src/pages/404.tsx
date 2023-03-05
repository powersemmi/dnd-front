import { useEffect } from "react";
import { useRouter } from "next/router";

import styles from "@/styles/Error.module.scss";

const FourOhFour = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <div className={styles.wrapper}>
      <div>
        <h1>404</h1>
        <h2>Something is going wrong... Return to main in 3...2...1...</h2>
      </div>
    </div>
  );
};

export default FourOhFour;
