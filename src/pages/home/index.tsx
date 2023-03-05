import { UserType } from "@/types/UserType";
import { FC } from "react";

const User: FC<UserType> = (user) => (
  <>
    <h1>{user.username ? user.username : "undefined"}</h1>
    <h1>{('b' + 'a' + + 'a' + 'a').toLowerCase()}</h1>
  </>
);

export default User;