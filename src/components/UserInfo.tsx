const UserInfo = ({ user }: any) => {
  const { username, email, full_name } = user || {};
  if (!user) {
    return <h3>Error: No user info!</h3>;
  }

  return (
    <>
      <h3>{username}</h3>
      <div>
        <strong>Email: </strong>
        {email}
      </div>
      (
      <div>
        <strong>Full Name: </strong>
        {full_name}
      </div>
      ) ? full_name : ()
    </>
  );
};

export default UserInfo;
