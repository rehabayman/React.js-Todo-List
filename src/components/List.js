import React from 'react';
import Pending from './Pending'
import Deleted from './Deleted'
import Finished from './Finished'

class List extends React.Component {

    state = {
        listItems: [],
        finishedItems: [],
        deletedItems: [],
        todoItem: '',
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let myList = this.state.listItems;
        let newItem = this.state.todoItem;
        this.setState({index: this.state.index+1});

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

    handleDelete = (itemToDelete) => {
        
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

    handleFinish = (itemToFinish) => {
        
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
                    <form className="form" id="handleSubmitForm" onSubmit={this.handleSubmit}>
                        <input type="text" onChange={this.captureInput} value={this.state.todoItem} id="itemInput" placeholder="Add Item" name="todoItem"/>
                        <button id="addItemBtn" className="btn btn-primary" style={{marginLeft: "2rem",display:"inline-block"}} type="submit"> Add Item </button>
                    </form>
                </section>
                <hr />
                <div className="container">
                    <Pending 
                        listItems={this.state.listItems}
                        onDelete={this.handleDelete}
                        onFinish={this.handleFinish} />
                    
                    <br></br>
                    <Finished finishedItems={this.state.finishedItems} />     
                    <br></br>
                    <Deleted deletedItems={this.state.deletedItems}/>
                </div>
            </div>
        )
    }
}

export default List