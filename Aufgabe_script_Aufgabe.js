
// Funktion zum Hinzufügen von Notizen
function addNote() {
      const noteInput = document.getElementById('noteInput');
      const notesContainer = document.getElementById('notesContainer');
      const noteText = noteInput.value;
      if (noteText) {
           const note = document.createElement('div');
           note.className = 'note';
           note.textContent = noteText;
           notesContainer.appendChild(note);
           noteInput.value = '';
     }
}
