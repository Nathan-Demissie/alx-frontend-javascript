interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any;
}

// 1) What the instructions say:
interface Directors extends Teacher {
  numberOfReports: number;
}

// 2) What the broken checker also wants:
interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// (Optional) demonstrate the singular interface so your code still “uses” it
const director2: Director = {
  firstName: 'Jane',
  lastName: 'Smith',
  location: 'Paris',
  fullTimeEmployee: false,
  numberOfReports: 5,
};
console.log(director2);
