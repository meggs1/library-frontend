const Book = (props) => {
    return (
        <div id={ props.id }>
            <h3>Title: { props.title } </h3>
            <h5>Author: { props.author }</h5>
            <h5>Published: { props.year_published }</h5>
            <p>Description: { props.description }</p>
        </div>
    )
}

export default (Book)