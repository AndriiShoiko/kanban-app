import React from "react";

import { NewBoard } from "../../features/boards-list/NewBoard";
import { useNavigate } from "react-router-dom";

export const NewBoardPage = () => {
  const [openBoard, setOpenBoard] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenBoard(false);
    navigate(`/boards`);
  };

  return <NewBoard open={openBoard} onClose={handleClose} />;
};
