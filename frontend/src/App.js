import React, { useEffect, useState } from 'react';

const socket = new WebSocket('ws://localhost:3001');
const room = 'shared-doc';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    socket.onmessage = (e) => {
      const { room: r, content: c } = JSON.parse(e.data);
      if (r === room) setContent(c);
    };
  }, []);

  const handleChange = (e) => {
    const val = e.target.value;
    setContent(val);
    socket.send(JSON.stringify({ room, content: val }));
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>📝 Real-Time Collaborative Notepad</h1>
        <p style={styles.subtitle}>Edit together in real time!</p>
      </header>
      <main style={styles.editorContainer}>
        <textarea
          rows={20}
          cols={80}
          value={content}
          onChange={handleChange}
          style={styles.textarea}
          placeholder="Start typing your notes here..."
        />
      </main>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '2rem',
    backgroundColor: '#f2f4f8',
    minHeight: '100vh',
  },
  header: {
    marginBottom: '1.5rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    margin: 0,
    color: '#2b2d42',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#6c757d',
  },
  editorContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  textarea: {
    width: '100%',
    maxWidth: '900px',
    height: '60vh',
    fontSize: '1rem',
    lineHeight: '1.5',
    padding: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
    resize: 'vertical',
    outline: 'none',
  },
};

export default App;
