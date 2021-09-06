import MarkdownSanitized from './component/MarkdownSanitized';

import './scss/style.scss';

function App() {
  return (
    <div className="App">
      <section className="markdown">
        <MarkdownSanitized/>
      </section>
    </div>
  );
}

export default App;
