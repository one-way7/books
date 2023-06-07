import { useState } from 'react';

import useBooksContext from '../hooks/useBooksContext';

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

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
