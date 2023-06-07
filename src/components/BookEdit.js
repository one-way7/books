import { useState, useContext } from 'react';

import BooksContext from '../context/books';

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useContext(BooksContext);

    const handleChangeTitle = e => {
        setTitle(e.target.value);
    };

    const handleSubmitForm = e => {
        e.preventDefault();

        onSubmit();
        editBookById(book.id, title);
    };

    return (
        <form className='book-edit' onSubmit={handleSubmitForm}>
            <label htmlFor=''>Title</label>
            <input
                className='input'
                type='text'
                value={title}
                onChange={handleChangeTitle}
            />
            <button className='button is-primary'>Save</button>
        </form>
    );
};

export default BookEdit;
