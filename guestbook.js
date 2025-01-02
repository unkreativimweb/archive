// Check, ob bereits Einträge im Local Storage vorhanden sind
let guestbookEntries = JSON.parse(localStorage.getItem('guestbookEntries')) || [];

// Funktion, um Eintrag hinzuzufügen
function addEntry(name, message) {
    const entry = { name, message, date: new Date().toLocaleString() };
    guestbookEntries.push(entry);
    displayEntries();
    saveEntries();
}

// Funktion, um Einträge im Local Storage zu speichern
function saveEntries() {
    localStorage.setItem('guestbookEntries', JSON.stringify(guestbookEntries));
}

// Funktion, um Einträge anzuzeigen
function displayEntries() {
    const guestbook = document.getElementById('guestbook');
    guestbook.innerHTML = '';

    guestbookEntries.forEach(entry => {
        const div = document.createElement('div');
        div.innerHTML = `
            <p><strong>${entry.name}</strong> (${entry.date})</p>
            <p>${entry.message}</p>
        `;
        guestbook.appendChild(div);
    });
}

// Eventlistener für das Gästebuch-Formular
const guestbookForm = document.getElementById('guestbook-form');
guestbookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    addEntry(name, message);
    document.getElementById('name').value = '';
    document.getElementById('message').value = '';
});

// Beim Laden der Seite Einträge anzeigen
displayEntries();
