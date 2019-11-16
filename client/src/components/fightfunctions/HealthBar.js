import React from "react";

export default function HealthBar(props) {
  if (props.healthStatus === 0) {
    return <div>FULL HEALTH</div>;
  } else if (props.healthStatus === 1) {
    return <div>Half Health</div>;
  } else {
    return <div>Error</div>;
  }
}
