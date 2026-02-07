// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

// Main function to render the reading list
function readingList(books) {
  const list = document.getElementById("reading-list");

  // Clear existing content important for tests and re-rendering
  list.innerHTML = "";

  books.forEach((book) => {
    const li = document.createElement("li");

    // Apply background color based on read status
    if (book.alreadyRead) {
      li.style.backgroundColor = "#d4edda"; // read
    } else {
      li.style.backgroundColor = "#f8d7da"; // unread
    }

    // Create title and author
    const title = document.createElement("h3");
    title.textContent = book.title;
    
    const author = document.createElement("p");
    author.textContent = `by ${book.author}`;
  })
}
