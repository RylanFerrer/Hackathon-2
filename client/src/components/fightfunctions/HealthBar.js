import React from "react";

export default function HealthBar(props) {
  if (props.healthStatus === 0) {
    return (
      <div className="full-health">
        <span className="full-health__content">FULL HEALTH</span>
      </div>
    );
  } else if (props.healthStatus === 1) {
    return (
      <div className="half-health">
        <span className="half-health__content">Half Health</span>
      </div>
    );
  } else {
    return <div>Error</div>;
  }
}
