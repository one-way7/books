import BookShow from './BookShow';

const BookList = ({ books }) => {
    const renderedBooks = books.map(({ id, title }) => {
        return <BookShow key={id} title={title} />;
    });

    return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
