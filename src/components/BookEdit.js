import { useState } from 'react';

const BookEdit = ({ title, id, onSubmit }) => {
    const [titleValue, setTitleValue] = useState(title);

    const handleChangeTitle = e => {
        setTitleValue(e.target.value);
    };

    const handleSubmitForm = e => {
        e.preventDefault();

        onSubmit(id, titleValue)
    };

    return (
        <form className="book-edit" onSubmit={handleSubmitForm}>
            <label htmlFor="">Title</label>
            <input
                className="input"
                type="text"
                value={titleValue}
                onChange={handleChangeTitle}
            />
            <button className="button is-primary">Save</button>
        </form>
    );
};

export default BookEdit;
