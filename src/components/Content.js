import React, { useState, useEffect } from 'react';
import * as marked from 'marked';

const Content = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('https://wesleysoto-dev.sfo3.cdn.digitaloceanspaces.com/Resume.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(marked(text)))
      .catch((error) => console.error('Error fetching markdown:', error));
  }, []);

  return (
    <div className="markdown-content" dangerouslySetInnerHTML={{ __html: markdown }} />
  );
};

export default Content;