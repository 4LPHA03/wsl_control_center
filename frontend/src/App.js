import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [files, setFiles] = useState([]);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  // Pobierz listę plików
  const fetchFiles = () => {
    axios.get('/ls')
      .then(res => {
        setFiles(res.data.files);
        setOutput('');
      })
      .catch(err => {
        setOutput('Błąd pobierania plików: ' + err.message);
      });
  };

  // Wykonaj polecenie w backendzie
  const runCommand = () => {
    if (!command.trim()) return;
    axios.post('/exec', { command })
      .then(res => {
        setOutput(res.data.output);
        if (command === 'ls -la') {
          // automatycznie odśwież listę plików jeśli wywołano 'ls -la'
          fetchFiles();
        }
      })
      .catch(err => {
        setOutput('Błąd wykonywania komendy: ' + err.message);
      });
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Zarządzanie WSL</h1>

      <button onClick={fetchFiles}>Pobierz listę plików (ls)</button>
      <ul>
        {files.map((file, idx) => (
          <li key={idx}>{file}</li>
        ))}
      </ul>

      <hr />

      <h2>Terminal</h2>
      <input
        type="text"
        value={command}
        onChange={e => setCommand(e.target.value)}
        onKeyDown={e => { if (e.key === 'Enter') runCommand(); }}
        placeholder="Wpisz komendę i naciśnij Enter"
        style={{ width: '80%', padding: '8px' }}
      />
      <button onClick={runCommand} style={{ padding: '8px', marginLeft: '8px' }}>Wykonaj</button>

      <pre style={{ whiteSpace: 'pre-wrap', backgroundColor: '#f0f0f0', padding: 10, marginTop: 20, minHeight: 150 }}>
        {output}
      </pre>
    </div>
  );
}

export default App;
