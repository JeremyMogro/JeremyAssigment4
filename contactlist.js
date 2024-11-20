// contactList.js

// Initialize the contact list
const contactList = [
    { name: "John Doe", phone: "1234 567 890", email: "john.doe@example.com" },
    { name: "Jane Smith", phone: "2345 678 901", email: "jane.smith@example.com" },
    { name: "Bob Johnson", phone: "3456 789 012", email: "bob.johnson@example.com" },
];

// Function to display the contact list
function displayContacts() {
    console.log("Contact List:");
    contactList.forEach((contact, index) => {
        console.log(`${index + 1}. ${contact.name} / ${contact.phone} / ${contact.email}`);
    });
    console.log("\n");
}

// Function to add a new contact
function addContact(name, phone, email) {
    contactList.push({ name, phone, email });
    console.log(`Added Contact: ${name} / ${phone} / ${email}`);
}

// Function to show the first and last contacts
function showFirstAndLast() {
    const firstContact = contactList[0];
    const lastContact = contactList[contactList.length - 1];

    console.log("First Contact:");
    console.log(`${firstContact.name} / ${firstContact.phone} / ${firstContact.email}`);

    console.log("Last Contact:");
    console.log(`${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
}

// Display the initial contact list
displayContacts();

// Add a new contact
addContact("Maisie Haley", "0913 531 3030", "risus.Quisque@urna.ca");

// Display the updated contact list
displayContacts();

// Show the first and last contacts
showFirstAndLast();
