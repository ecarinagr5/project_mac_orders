import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Protected() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
}
