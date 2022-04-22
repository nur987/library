import React from "react";
import PropTypes from "prop-types";
import { CircularProgress } from "@mui/material";
import Typography from "@mui/material/Typography";

function CircularProgressWithLabel(props) {
  return (
    <div>
      <CircularProgress variant="determinate" {...props} />
      <Typography
        variant="caption"
        component="div"
        color="textSecondary"
      >{`${Math.round(props.value)}%`}</Typography>
    </div>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 243);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={progress} />;
}
