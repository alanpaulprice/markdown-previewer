import React from 'react';

function outputArea(props) {

  function createMarkup() {
    return { __html: props.output}
  }

  return (
    <div
      style={ divStyle }
      dangerouslySetInnerHTML={createMarkup()}
      >
    </div>
  );
}

const divStyle = {
  display: 'inline-block',
  width: '50%',
  backgroundColor: '#666',
  minHeight: '500px'
};

export default outputArea;
