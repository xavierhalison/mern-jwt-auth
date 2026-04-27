import useAuth from "../../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  const { email, verified, createdAt } = user!;

  return (
    <div className="pt-10 flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold my-3 font-funnel">My Account</h1>
      {!verified && <p>Please verify your email</p>}
      <p className="my-2">
        <strong>Email: </strong>
        {email}
      </p>
      <p>
        <strong>Created on: </strong>
        {new Date(createdAt).toLocaleDateString("pt-BR")}
      </p>
    </div>
  );
};

export default Profile;
