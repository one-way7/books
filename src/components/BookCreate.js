import { useState } from 'react';
import useBooksContext from '../hooks/useBooksContext';


import BooksContext from '../context/books';

const BookCreate = () => {
    const [value, setValue] = useState('');
    const { createBook } = useBooksContext();

    const handleChangeValue = e => {
        setValue(e.target.value);
    };

    const handleSubmitForm = e => {
        e.preventDefault();

        createBook(value);
        setValue('');
    };

    return (
        <div className='book-create'>
            <h3>Add a book</h3>
            <form onSubmit={handleSubmitForm}>
                <input
                    className='input'
                    type='text'
                    value={value}
                    onChange={handleChangeValue}
                />
                <button className='button'>Submit</button>
            </form>
        </div>
    );
};

export default BookCreate;
