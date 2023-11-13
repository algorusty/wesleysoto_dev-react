import { marked } from 'marked';

const markdownParser = (markdownText) => {
  // Set options for marked to enable GitHub flavored markdown (GFM)
  marked.setOptions({
    gfm: true,
    breaks: true, // Add <br> on single line breaks
    headerIds: false, // Disable automatic header IDs
  });

  // Parse the markdown text to HTML
  const parsedContent = marked.parse(markdownText);

  return parsedContent;
};

export default markdownParser;
