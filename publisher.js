function filterBooks(books) {
    // Filter out books published before 2010
    const filteredBooks = books.filter(book => book.publicationYear >= 2010);
  
    // Create a new array with capitalized author names
    const capitalizedAuthors = filteredBooks.map(book => {
      const capitalizedAuthor = book.author.toUpperCase();
      return { ...book, author: capitalizedAuthor };
    });
  
    return capitalizedAuthors;
  }
  
  // Example usage
  const books = [
    { title: "Book 1", author: "author 1", publicationYear: 2005 },
    { title: "Book 2", author: "author 2", publicationYear: 2015 },
    { title: "Book 3", author: "author 3", publicationYear: 2012 },
    { title: "Book 4", author: "author 4", publicationYear: 2008 }
  ];
  
  const filteredAndCapitalizedBooks = filterBooks(books);
  console.log(filteredAndCapitalizedBooks);
  
