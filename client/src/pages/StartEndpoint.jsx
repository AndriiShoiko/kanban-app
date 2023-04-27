import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const StartEndpoint = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/boards");
  }, []);

  return null;
};
