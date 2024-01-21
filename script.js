// Notizen-Array initialisieren
let notes = [];

// Funktion zum Hinzufügen einer Notiz
function addNote() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value.trim();

    if (noteText.length > 0 && noteText.length <= 80) {
        // Notiz zum Array hinzufügen
        notes.push(noteText);

        // Notizenliste aktualisieren
        updateNotesList();

        // Textarea leeren
        noteInput.value = '';
    } else {
        alert('Die Notiz muss zwischen 1 und 80 Zeichen lang sein.');
    }
}

// Funktion zum Löschen aller Notizen
function deleteAllNotes() {
    // Array leeren
    notes = [];

    // Notizenliste aktualisieren
    updateNotesList();
}

// Funktion zum Aktualisieren der Notizenliste
function updateNotesList() {
    const notesList = document.getElementById('notesList');

    // Notizenliste leeren
    notesList.innerHTML = '';

    // Notizen durchlaufen und hinzufügen
    notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.innerText = `${index + 1}. ${note}`;
        notesList.appendChild(noteItem);
    });
}
// Funktion zum Speichern der Notizen
function saveNotes() {
    if (notes.length > 0) {
        // Notizen in einen JSON-String konvertieren
        const notesJSON = JSON.stringify(notes);

        // Notizen im Local Storage speichern
        localStorage.setItem('savedNotes', notesJSON);

        alert('Notizen wurden erfolgreich gespeichert.');
    } else {
        alert('Es gibt keine Notizen zum Speichern.');
    }
}

// Funktion zum Laden der gespeicherten Notizen (wird beim Laden der Seite aufgerufen)
function loadSavedNotes() {
    const savedNotesJSON = localStorage.getItem('savedNotes');

    if (savedNotesJSON) {
        // Gespeicherte Notizen aus dem JSON-String wiederherstellen
        notes = JSON.parse(savedNotesJSON);

        // Notizenliste aktualisieren
        updateNotesList();
    }
}
// Gespeicherte Notizen beim Laden der Seite laden
loadSavedNotes();
