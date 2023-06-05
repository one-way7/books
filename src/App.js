import { useState } from 'react';
import { nanoid } from 'nanoid';

import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const handleCreateBook = title => {
        const updateBooks = [...books, { id: nanoid(), title }];

        setBooks(updateBooks);
    };

    const handleDeleteBookById = id => {
        const updateBooks = books.filter(book => book.id !== id);

        setBooks(updateBooks);
    };

    const handleEditBookById = (id, newTitle) => {
        const updatedBooks = books.map(book => {
            if (book.id === id) {
                return {
                    ...book,
                    title: newTitle,
                };
            }

            return book;
        });

        setBooks(updatedBooks);
    };

    return (
        <div className="app">
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
