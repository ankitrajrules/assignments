## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

const fs = require('fs');

// Function to read the contents of a file and print it to the console
const readFileAndPrint = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    console.log('File content:', data);

    // Simulate an expensive operation (e.g., using setTimeout)
    simulateExpensiveOperation(5000);
  });
};

// Function to simulate an expensive operation using setTimeout
const simulateExpensiveOperation = (milliseconds) => {
  console.log('Start of expensive operation');
  setTimeout(() => {
    console.log('End of expensive operation');
  }, milliseconds);
};

// Replace 'your_file_path.txt' with the actual path of the file you want to read
const filePath = 'your_file_path.txt';

// Call the function to read the file and print its content
readFileAndPrint(filePath);
