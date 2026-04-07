import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { verifyEmail } from "../lib/api";

const VerifyEmail = () => {
  const { code } = useParams();

  const { isPending, isSuccess, error } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code!),
  });

  return (
    <div className="flex border border-solid border-red-500">
      {isPending ? (
        <code>loading...</code>
      ) : isSuccess ? (
        <>
          <code>Email verified!</code>
          <Link to="/">Go to the app!</Link>
        </>
      ) : (
        <>
          {error && <code>{error?.message}</code>}
          <Link to="/register">Sign up</Link>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
