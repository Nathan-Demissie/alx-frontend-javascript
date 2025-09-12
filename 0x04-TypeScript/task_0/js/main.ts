// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student objects
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 22,
  location: "Addis Ababa",
};

const student2: Student = {
  firstName: "Daniel",
  lastName: "Tesfaye",
  age: 24,
  location: "Dire Dawa",
};

// Store them in an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table: HTMLTableElement = document.createElement("table");

// Loop through the students and add rows
studentsList.forEach((student) => {
  const row: HTMLTableRowElement = document.createElement("tr");

  const firstNameCell: HTMLTableCellElement = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell: HTMLTableCellElement = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append the table to the document body
document.body.appendChild(table);

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows additional properties like 'contract'
}

// Example usage
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);
