import { Employee } from './interface';

const cityNames = ['Madurai', 'Chennai', 'Bangalore'];

export const generateSampleData = (): { [key: number]: Employee } => {
  const employeeDetails: { [key: number]: Employee } = {};

  for (let i = 1; i <= 20; i++) {
    const randomCityIndex = Math.floor(Math.random() * cityNames.length);
    const randomCity = cityNames[randomCityIndex];

    const startDate = new Date('1990-01-01').getTime();
    const endDate = new Date('2001-12-31').getTime();
    const randomTime = startDate + Math.random() * (endDate - startDate);
    const randomDate = new Date(randomTime);

    const employee: Employee = {
      id: i,
      name: `Employee${i}`,
      city: randomCity,
      maritalStatus: i % 2 === 0, // Just alternating for variety
      gender: i % 2 === 0 ? 'Male' : 'Female',
      annualIncome: Math.floor(Math.random() * 100000) + 50000, // Random income between 50,000 and 150,000
      dateOfBirth: randomDate
    };

    employeeDetails[i] = employee;
  }

  return employeeDetails;
};
