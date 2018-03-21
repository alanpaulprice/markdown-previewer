import React from 'react';

function outputArea(props) {
  // necessary to use dangerouslySetInnerHTML prop
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
