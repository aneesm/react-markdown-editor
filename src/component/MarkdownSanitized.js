import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown';
import { MarkdownProvider } from 'react-markdown-tree';
import gfm from 'remark-gfm'
import markdownConfig from 'react-markdown-tree-config-default';

const MarkdownSanitized = () => {
  const [markDown, setMarkDown] = useState(
    '## Hi welcome to Markdown Editor Tool Developed by [Anees](https://github.com/aneesm)'
  );
  return (
    <>
      <section className="markdown-input">
        <textarea className="markdown-input__type" value={markDown} onChange={(e) => setMarkDown(e.target.value)}></textarea>
      </section>
      <section className="markdown-display">
        <ReactMarkdown config={markdownConfig} remarkPlugins={[gfm]}>{markDown}</ReactMarkdown>
      </section>
    </>
  )
}

export default MarkdownSanitized;
  