import React from "react";

import { EditBoard } from "../../features/boards-list/EditBoard";
import { useNavigate } from "react-router-dom";

export const EditBoardPage = () => {
  const [openBoard, setOpenBoard] = React.useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpenBoard(false);
    navigate(`/boards`);
  };

  return <EditBoard open={openBoard} onClose={handleClose} />;
};