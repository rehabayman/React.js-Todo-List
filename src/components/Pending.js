import React, { Component } from 'react';

class Pending extends Component {

    handleDelete = (e) => {
        this.props.onDelete(e.target.parentNode.textContent);
    }

    handleFinish = (e) => {
        this.props.onFinish(e.target.parentNode.textContent);
    }
    
    render() {
        return (
            <section className="section todo-list">
                <h3>My Pending Tasks</h3> <hr />
                <ul style={{ listStyleType: "none" }}>
                    {this.props.listItems.map(item => (
                        <li key={item} className="todo-item">
                            {item}
                            <i className="far fa-trash-alt" style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }} onClick={this.handleDelete}></i>
                            <i className="fas fa-check" onClick={this.handleFinish}></i>
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Pending;