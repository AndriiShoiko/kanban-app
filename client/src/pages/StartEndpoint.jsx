import React from "react";
import { useNavigate } from "react-router-dom";

export const StartEndpoint = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate("/boards");
  }, []);

  return <></>;
};
