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

    const deleteBookById = id => {
        const updateBooks = books.filter(book => book.id !== id);

        setBooks(updateBooks);
    };

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById} />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    );
}

export default App;
