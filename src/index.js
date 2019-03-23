import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InputRow extends React.Component {
  render() {
    return (
	<div className = "input-row">
	   <div className="from-row">
		<input type = "number" name = "from-hour" min = "1" max = "12" />
		<input type = "number" name = "from-minute" min = "0" max = "59" />       
		
	   </div>        

	    <div className="to-row">
		<input type = "number" name = "to-hour" min = "1" max = "12" />
		<input type = "number" name = "to-minute" min = "0" max = "59" />       
	    </div>
       </div>        

    );
  }
}

class AddDay extends React.Component {
    render() {
	return (
	    <button
		type = "button" onClick= {this.props.onClick} 
	    >
	    + 
	    </button>
	);
    }

}class SubtractDay extends React.Component {
    render() {
	return (
	    <button
		type = "button" onClick= {this.props.onClick} 
	    >
	    - 
	    </button>
	);
    }
}

const CreateInputs = (props) => {
    let inputTable = [];
    let inputLen = props.input.length;
    for (let i = 0; i < inputLen; i++) {
	inputTable.push(RenderInputRow(0))
    } 

    return inputTable;
}

const RenderInputRow = (i) => {
    return <InputRow />;
} 

class Calculator extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    input: [
		{id:1, fromHour:null, fromMinute:null, toHour:null, toMinute:null}
	    ]
	}
    }
    
    AddDayHandleClick(i) {
	const input_list = this.state.input.slice();
	const id = this.state.input.length + 1;
	const new_input = {id:id, fromHour: null, fromMinute:null, toHour:null, toMinute:null};
	input_list.push(new_input);
	this.setState({input: input_list});
	console.log(this.state.input);
    }
    
    SubtractDayHandleClick(i) {
	const input_list = this.state.input.slice();
	input_list.pop();
	this.setState({input: input_list});
	console.log(this.state.input);
    }
    
      renderaddDayButton(i) {
	  return<AddDay 
	      onClick = {() => this.AddDayHandleClick(i)}
	  />;
      }

      renderSubtractDayButton(i) {
	  return<SubtractDay 
	      onClick = {() => this.SubtractDayHandleClick(i)}
	  />;
      }

  render() {
    const total = '0';

    return (
      <div>
        <div className="total">{total}</div>
	<div className="addDay">
	    {this.renderaddDayButton(0)} 
	    {this.renderSubtractDayButton(0)} 
	</div>
	<div className="inputs">    
	    <CreateInputs input={this.state.input} />
        </div>
      </div>
    );
  }
}

class PayCalculator extends React.Component {
    render() {
	return (
	    <div className = "calculator">
		<Calculator />
	    </div>
	);
    }
}

ReactDOM.render(
  <PayCalculator />,
  document.getElementById('root')
);

