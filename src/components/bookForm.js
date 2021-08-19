import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/index'

class BookForm extends Component {
    photoFile = React.createRef()

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

    handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target)

        this.props.addBook(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title: </label>
                        <input type="text" id="title" name="title" value={ this.state.title} onChange={ this.handleChange}/>  
                    </div>
                    <div>
                        <label>Author: </label>
                        <input type="text" id="name" name="author" value={ this.state.author} onChange={ this.handleChange}/>
                    </div>
                    <div>
                        <label>Year Published: </label>
                        <input type="text" id="year_published" name="year_published" value={ this.state.year_published} onChange={ this.handleChange}/>
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea type="text" id="description" name="description" value={ this.state.description} onChange={ this.handleChange}/>
                    </div>
                    <div>
                        <label>Upload Image: </label>
                        <input type="file" name="photo" ref={this.photoFile}/>
                    </div>
                    <input type="submit" value="Add Book"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addBook })(BookForm)