import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { verifyEmail } from "../../lib/api";
import Button from "../../components/Button";

const VerifyEmail = () => {
  const { code } = useParams();
  const navigate = useNavigate();

  const { isPending, isSuccess, error } = useQuery({
    queryKey: ["emailVerification", code],
    queryFn: () => verifyEmail(code!),
  });

  return isPending ? (
    <span>loading...</span>
  ) : isSuccess ? (
    <>
      <span className="text-center pt-2">Email verified successfully</span>
      <Button onClick={() => navigate("/")}>Go to App</Button>
    </>
  ) : (
    <>
      {error && (
        <code className="bg-red-100 text-red-500 p-2 text-lg text-center">
          {error?.message}
        </code>
      )}
      <Button onClick={() => navigate("/login")}>Login</Button>
    </>
  );
};

export default VerifyEmail;
