
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
// Funktion zum Speichern der Notizen in einer Textdatei
    function saveNotes() {
    	const notesContainer = document.getElementById('notesContainer');
	const notes = Array.from(notesContainer.children);
     	const notesText = notes.map(note => note.textContent).join('\n');
     
// Simulierte Speicherung in einer Textdatei (für Browser)
     	const blob = new Blob([notesText], { type: 'text/plain' });
   	const link = document.createElement('a');
    	link.href = URL.createObjectURL(blob);
     	link.download = 'notes.txt';
     	link.click();
    }

}
     