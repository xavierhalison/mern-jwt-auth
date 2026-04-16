import { useQuery } from "@tanstack/react-query";
import { getSessions } from "../../lib/api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const { isPending, isSuccess, error, data } = useQuery({
    queryKey: ["sessionListFetch"],
    queryFn: () => getSessions(),
  });

  useEffect(() => {
    if (error) {
      navigate("/login");
    }
  });

  return isPending ? (
    <span>...loading</span>
  ) : isSuccess ? (
    <div>{data.data._id}</div>
  ) : (
    <>error</>
  );
};

export default Home;
