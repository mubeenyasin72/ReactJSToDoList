import React, { Component } from 'react';
import './todolist.css'
class todolist extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items:"",
            todoItems:[]
         };
         this.onChangeHandler=this.onChangeHandler.bind(this);
         this.addData=this.addData.bind(this);
         this.delete=this.delete.bind(this);
    }
    onChangeHandler(event){
        var inputVal=event.target.value;
        this.setState({
            items:inputVal
        })
    }
    addData(){
        var inputVal=this.state.items;
        var itemInstance=this.state.todoItems;
        itemInstance.push(inputVal);
        this.setState({
            todoItems:itemInstance
        })
    }
    delete(event){
        var id = event.target.id;
        var itemInstance=this.state.todoItems;
        itemInstance.splice(id,1);
        this.setState({
            todoItems:itemInstance,
            items:''
        })
    }
    render() {
        var itemList = this.state.todoItems.map((e,i)=>
            <li key={i}>
                    {e}
                    <span onClick={this.delete} id={i}>
                        X
                    </span>
            </li>
        )
        return (
            <div>
                <div className ="header">
                        Welcome React Js Todo App
                </div>
                <div className="body">
                    <ul>
                        {itemList}
                    </ul>
                </div>
                <div className = "footer">
                        <input type="text" value={this.state.items} onChange={this.onChangeHandler}/>
                        <button onClick={this.addData}>+</button>
                </div>
            </div>
        );
    }
}

export default todolist;