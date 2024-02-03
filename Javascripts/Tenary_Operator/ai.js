const people = [
    {
      name: "John",
      age: 25,
      department: ["Sales", "Marketing", "Finance"]
    },
    {
      name: "Alice",
      age: 30,
      department: ["Engineering", "Product Management", "HR"]
    },
    {
      name: "Bob",
      age: 22,
      department: ["Finance", "Sales", "Customer Support"]
    }
  ];
  
  // Function to filter people based on a specific department
  function filterPeopleByDepartment(peopleArray, targetDepartment) {
    // Using the filter method to create a new array with people who have the specified department
    const filteredPeople = peopleArray.filter(person => person.department.includes(targetDepartment));
    return filteredPeople;
  }
  
  // Example usage
  const targetDepartment = "Sales";
  const filteredPeople = filterPeopleByDepartment(people, targetDepartment);
  
  // Displaying the result
  console.log(`People working in the ${targetDepartment} department:`);
  filteredPeople.forEach(person => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
  });