import React, { Component } from 'react';

class Deleted extends Component {

    render() {
        return (
            <section className="section todo-list">
                <h3>My Deleted Tasks</h3> <hr />
                <ul style={{ listStyleType: "none" }}>
                    {this.props.deletedItems.map(item => (
                        <li key={item} className="todo-item">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Deleted;