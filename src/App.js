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

    return (
        <div className="app">
            <BookList books={books} />
            <BookCreate onCreate={handleCreateBook} />
        </div>
    );
}

export default App;
