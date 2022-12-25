import { ContentCopyOutlined, TaskAlt } from "@mui/icons-material";
import { Alert } from "@mui/material";
import React, { useState } from "react";

const Notifications = ({ openSnackbar, handleSnackbarClose }) => {
  return (
    // <Snackbar
    //   open={openSnackbar}
    //   autoHideDuration={1000}
    //   onClose={handleSnackbarClose}
    // >
    <Alert
      // onClose={handleSnackbarClose}
      severity="info"
      sx={{ width: "20rem" }}
    >
      Copied to clipboard
    </Alert>
  );
};

const CopyText = ({ data }) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  const handleCopyContent = async (text) => {
    if ("clipboard" in navigator) {
      setOpenSnackbar(true);
      <Notifications
      // openSnackbar={openSnackbar}
      // handleSnackbarClose={handleSnackbarClose}
      />;
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  // onClick handler function for the copy button
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    handleCopyContent()
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className="copy-form"
      onClick={() => handleCopyContent(data.id)}
    >
      <input
        className="cliptext"
        value={data.id}
        readOnly
        style={{
          fontSize: "1rem",
          fontWeight: 500,
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: "#F1F1F1",
        }}
      />
      <button onClick={handleCopyClick} className="submit-button" type="submit">
        {isCopied ? (
          <TaskAlt style={{ color: "#13A206" }} />
        ) : (
          <ContentCopyOutlined />
        )}
      </button>
    </div>
  );
};

export default CopyText;
