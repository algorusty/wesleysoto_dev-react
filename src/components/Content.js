import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import resumeMarkdown from '../resume.md';

const Content = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(resumeMarkdown)
      .then((response) => response.text())
      .then((text) => setMarkdown(marked.parse(text)))
      .catch((error) => console.error('Error fetching markdown:', error));
  }, []);

  return (
    <div className="markdown-content" dangerouslySetInnerHTML={{ __html: markdown }} />
  );
};

export default Content;
