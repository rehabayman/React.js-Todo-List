import React from 'react';
import '../App.css';

class List extends React.Component {

    state = {
        listItems: [],
        finishedItems: [],
        deletedItems: [],
        todoItem: '',
    }

    addItem = (e) => {
        e.preventDefault();
        let myList = this.state.listItems;
        let newItem = this.state.todoItem;

        if(newItem.value !== "")
        {
            if(myList.includes(newItem))
            {
                alert("You Already Added this Item Before!");
            }
            else
            {
                myList.push(newItem);
                this.setState({listItems: myList, todoItem:''});
                  
            }
        }
        else
        {
            alert("Empty Item!!");
        }
    }

    deleteItem = (itemToDelete) => {
        
        let myDeleteList = this.state.deletedItems;
        let myList = this.state.listItems;

        let newList = myList.filter((item) => {
            return item !== itemToDelete;
        });
        this.setState({listItems: newList});
        if(! myDeleteList.includes(itemToDelete))
        {
            myDeleteList.push(itemToDelete);
            this.setState({deletedItems: myDeleteList});
        }
    }

    finishItem = (itemToFinish) => {
        
        let myFinishedList = this.state.finishedItems;
        let myList = this.state.listItems;

        let newList = myList.filter((item) => {
            return item !== itemToFinish;
        });
        this.setState({listItems: newList});
        if(! myFinishedList.includes(itemToFinish))
        {
            myFinishedList.push(itemToFinish);
            this.setState({finishedItems: myFinishedList});
        }
    }

    captureInput = (e) => {
        
        let newItem = e.target.value;        
        this.setState({todoItem: newItem});
        
    }

    render() {
        return (
            <div className="content">
                <section className="form-section">
                    <form className="form" id="addItemForm" onSubmit={this.addItem}>
                        <input type="text" onChange={this.captureInput} value={this.state.todoItem} id="itemInput" placeholder="Add Item" name="todoItem"/>
                        <button id="addItemBtn" className="btn btn-primary" style={{marginLeft: "2rem",display:"inline-block"}} type="submit"> Add Item </button>
                    </form>
                </section>
                <hr />
                <div className="container">
                    <section className="section todo-list">
                        <h3>My Pending Tasks</h3> <hr />
                        <ul style={{listStyleType: "none"}}>
                            {this.state.listItems.map(item => (
                                <li key={item} className="todo-item">
                                    {item} &nbsp;
                                    <i className="far fa-trash-alt" style={{marginRight:"0.5rem"}} onClick={() => this.deleteItem(item)}></i>
                                    <i className="fas fa-check" onClick={() => this.finishItem(item)}></i>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <br></br>
                    <section className="section todo-list">
                        <h3>My Finished Tasks</h3> <hr />
                        <ul style={{listStyleType: "none"}}>
                            {this.state.finishedItems.map(item => (
                                <li key={item} className="todo-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <br></br>
                    <section className="section todo-list">
                        <h3>My Deleted Tasks</h3> <hr />
                        <ul style={{listStyleType: "none"}}>
                            {this.state.deletedItems.map(item => (
                                <li key={item} className="todo-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        )
    }
}

export default List