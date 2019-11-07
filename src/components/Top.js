import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

function Top() {
  const history = useHistory();
  return (
    <div>
      <Button
        color="primary"
        variant="contained"
        onClick={() => {
          history.push("./profile");
        }}
      >
        Profile
      </Button>
    </div>
  );
}

export default Top;
