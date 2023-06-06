import { useState, useEffect } from 'react';
import axios from 'axios';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks()
    }, [])

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books')

        setBooks(response.data)
    }

    const handleCreateBook = async title => {
        const response = await axios.post('http://localhost:3001/books', {
            title,
        });

        const updateBooks = [...books, response.data];

        setBooks(updateBooks);
    };

    const handleDeleteBookById = async id => {
        await axios.delete(`http://localhost:3001/books${id}`)

        const updateBooks = books.filter(book => book.id !== id);

        setBooks(updateBooks);
    };

    const handleEditBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books${id}`, {
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

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
                books={books}
                onDelete={handleDeleteBookById}
                onEdit={handleEditBookById}
            />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    );
}

export default App;
