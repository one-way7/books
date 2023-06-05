import { useState } from 'react';
import { nanoid } from 'nanoid';

import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const handleCreateBook = title => {
        const updateBooks = [...books, { id: nanoid(), title }];

        setBooks(updateBooks);
    };

    return <BookCreate onCreate={handleCreateBook} />;
}

export default App;
