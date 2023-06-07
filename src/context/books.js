import { useState, createContext } from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    const createBook = async title => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updateBooks = [...books, response.data];

        setBooks(updateBooks);
    };

    const deleteBookById = async id => {
        await axios.delete(`http://localhost:3001/books/${id}`)

        const updateBooks = books.filter(book => book.id !== id);

        setBooks(updateBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        })

        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {
                    ...book,
                    ...response.data,
                };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    const data = {
        books,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById,
    }

    return <BooksContext.Provider value={data}>{children}</BooksContext.Provider>
}

export { Provider }
export default BooksContext;