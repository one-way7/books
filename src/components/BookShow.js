const BookShow = ({ title, id, onDelete }) => {
    return (
        <div className="book-show">
            {title}
            <div className="actions">
                <button className="delete" onClick={() => onDelete(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookShow;
