import React from "react";

const Spinner = props => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// If we use an instance of 'Spinner' component and we do not pass a message, we use defaultProps
Spinner.defaultProps = {
  message: "Loading..."
};

export default Spinner;
