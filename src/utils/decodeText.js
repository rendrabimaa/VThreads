import React from 'react';

const decodeText = (text) => React.createElement('div', {
  dangerouslySetInnerHTML: { __html: text },
});

// eslint-disable-next-line import/prefer-default-export
export { decodeText };
