import { Component } from 'react';

class BookForm extends Component {
    state = {
        title: '',
        author: '',
        year_published: '',
        image_url: '',
        description: ''
    }

    handleChange = e => {
        console.log(e)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Title:</label>
                        <input type="text" id="title" name="title" value={ this.state.title} onChange={ this.handleChange}/>  
                    </div>
                    <div>
                        <label>Author: </label>
                        <input type="text" id="author" name="author" value={ this.state.author} onChange={ this.handleChange}/>
                    </div>
                    <div>
                        <label>Year Published: </label>
                        <input type="text" id="year_published" name="year_published" value={ this.state.year_published} onChange={ this.handleChange}/>
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type="text" id="description" name="description" value={ this.state.description} onChange={ this.handleChange}/>
                    </div>
                    <input type="submit" value="Add Book"/>
                </form>
            </div>
        )
    }
}

export default BookForm