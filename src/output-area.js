import React from 'react';

function outputArea(props) {
  return (
    <div style={ divStyle }>
      {props.output}
    </div>
  );
}

const divStyle = {
  display: 'inline-block',
  width: '50%',
};

export default outputArea;
