import { useState } from 'react';

import BookCreate from './components/BookCreate';

function App() {
    const [books, setBooks] = useState([]);

    const handleCreateBook = title => {
        console.log(title);
    };

    return <BookCreate onCreate={handleCreateBook} />;
}

export default App;
