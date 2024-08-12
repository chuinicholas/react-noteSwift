import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Switch from "@mui/material/Switch";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FileCopyIcon from "@mui/icons-material/FileCopyOutlined";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import DescriptionIcon from "@mui/icons-material/Description";
import { purple, red } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <DescriptionIcon color="success" />, name: "Green" },
  { icon: <DescriptionIcon color="action" />, name: "Gray" },
  { icon: <DescriptionIcon color="warning" />, name: "Orange" },
  { icon: <DescriptionIcon color="error" />, name: "Red" },
];

function Note({ title, content, deleteNote, id }) {
  const [direction, setDirection] = useState("up");
  const [hidden, setHidden] = useState(false);
  const [bgColor, setBgColor] = useState(null);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  function changeBg(actionName) {
    setBgColor(actionName);
  }

  function resetBgColor() {
    setBgColor(null);
  }

  return (
    <div className="note" style={{ backgroundColor: bgColor }}>
      <h1>{title}</h1>
      <p>{content}</p>
      <div className="trash">
        <IconButton>
          <DeleteIcon onClick={() => deleteNote(id)} />
        </IconButton>

        <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
          <Box sx={{ mt: 3, height: 70 }}>
            <StyledSpeedDial
              ariaLabel="SpeedDial playground example"
              hidden={hidden}
              icon={<DescriptionIcon />}
              direction={direction}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={() => changeBg(action.name)}
                />
              ))}
              <SpeedDialAction
                icon={<DescriptionIcon />}
                tooltipTitle="Reset"
                onClick={resetBgColor}
              />
            </StyledSpeedDial>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default Note;
