import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "axios";

type SignInType = {
  username: string
  password: string
}

interface RegisterType {
  username: string
  email: string
  full_name: string | null | undefined
  password: string
}

const get_user = async (access_token: string, token_type?: string | null) => {
  let config = {
    headers: {
      authorization: `${token_type ? token_type : 'Bearer'} ${access_token}`,
    }
  }
  const {username, email, full_name} = await axios.get(`${process.env.API_HOST}/user/info`, config).then(({data}) => (data));
  return {
    username: username,
    email: email,
    full_name: full_name,
    token: access_token,
    token_type: token_type
  }
}

const authorize = async ({username, password}: SignInType) => {
  const bodyFormData = new FormData();
  bodyFormData.append("username", username);
  bodyFormData.append("password", password);

  const data = await axios.post(`${process.env.API_HOST}/login/token`, bodyFormData).then(({data}) => (data));
  if (!data) {
    return null;
  }
  const user = await get_user(data.access_token, data.token_type);
  return {
    username: user.username,
    email: user.email,
    full_name: user.full_name,
    token: data.access_token,
    token_type: data.token_type
  }
}

const register = async (credentials: RegisterType) => {
  try {
    await axios.put(`${process.env.API_HOST}/register/`, credentials);
    return await authorize({username: credentials.username, password: credentials.password});
  }
  catch (e){
    throw Error(e.message);
  }
}


export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      id: 'login',
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: SignInType) {
        return await authorize(credentials);
      }
    }),
    Credentials({
      id: "signup",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        email: { label: "Email", type: "email", placeholder: "username@example.com" },
        password: { label: "Password", type: "password" },
        full_name: { label: "Full Name", type: "text", placeholder: "full name" },
      },
      async authorize(credentials: RegisterType) {
        return await register(credentials);
      }
    }),
  ],
  // use env variable in production
  secret: "looselipssinkships",
});
