const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3001;
const DATA_FILE = path.join(__dirname, 'app.json');

app.use(cors());
app.use(express.json());

// Helper to read notes from file
function readNotes() {
    if (!fs.existsSync(DATA_FILE)) return [];
    const data = fs.readFileSync(DATA_FILE, 'utf-8');
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}

// Helper to write notes to file
function writeNotes(notes) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(notes, null, 2));
}

// Get all notes
app.get('/notes', (req, res) => {
    res.json(readNotes());
});

// Add a new note
app.post('/notes', (req, res) => {
    const notes = readNotes();
    const note = req.body;
    note.id = Date.now();
    notes.unshift(note);
    writeNotes(notes);
    res.status(201).json(note);
});

// Delete a note by id
app.delete('/notes/:id', (req, res) => {
    const notes = readNotes();
    const id = parseInt(req.params.id);
    const filtered = notes.filter(n => n.id !== id);
    writeNotes(filtered);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`);
});
