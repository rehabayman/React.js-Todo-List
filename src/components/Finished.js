import React, { Component } from 'react';

class Finished extends Component {

    render() {
        return (
            <section className="section todo-list">
                <h3>My Finished Tasks</h3> <hr />
                <ul style={{ listStyleType: "none" }}>
                    {this.props.finishedItems.map(item => (
                        <li key={item} className="todo-item">
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
        )
    }
}

export default Finished;