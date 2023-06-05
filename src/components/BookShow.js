import { useState } from 'react';
import BookEdit from './BookEdit';

const BookShow = ({ title, id, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleSubmit = (id, newTitle) => {
        setShowEdit(false);

        onEdit(id, newTitle);
    };

    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${id}/300/200`} alt="" />
            {showEdit ? (
                <BookEdit title={title} id={id} onSubmit={handleSubmit} />
            ) : (
                title
            )}
            <div className="actions">
                <button className="edit" onClick={() => setShowEdit(!showEdit)}>
                    Edit
                </button>
                <button className="delete" onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookShow;
