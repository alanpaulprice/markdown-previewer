import React from 'react';

function outputArea(props) {

  function createMarkup() {
    return { __html: props.output}
  }

  return (
    <div
      className='output-area'
      dangerouslySetInnerHTML={createMarkup()}
      >
    </div>
  );
}

export default outputArea;
