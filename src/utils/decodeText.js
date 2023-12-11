import React from 'react';

const decodeText = (text) => React.createElement('div', {
  dangerouslySetInnerHTML: { __html: text },
});

export { decodeText };
