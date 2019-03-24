import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class InputRow extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    from_hour: null,
	    from_minute: null,
	    to_hour: null,
	    to_minute: null,
        from_period: 'am',
        to_period: 'pm',
	};
	this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        const id = event.target.id;

        this.props.handleInputChange(id, name, value); 

        if (name === 'from-hour') {
            this.setState({from_hour: value});
        }
        else if (name === 'from-minute') {
            this.setState({from_minute: value});
        }
        else if (name === 'to-hour') {
            this.setState({to_hour: value});
        }
        else if (name === 'to-minute') {
            this.setState({to_minute: value});
        }
        else if (name === 'from-period') {
            this.setState({from_period: value});
        }
        else if (name === 'to-period') {
            this.setState({to_period: value});
        }
    }

 render() {
    const id = this.props.id;
 
    return (
	<div className = "input-row">
	   <div className="from-row">
		<input id = {id} value = {this.state.value} onChange = {this.onInputChange} type = "number" name = "from-hour" min = "1" max = "12" size = "2" maxLength = "2"/>
		<input id = {id} value = {this.state.value} onChange = {this.onInputChange} type = "number" name = "from-minute" min = "0" max = "59" size = "2" maxLength = "2"/>       
        <select id = {id} value = {this.state.value} onChange = {this.onInputChange }name = 'from-period'>
            <option value = 'am'> A.M </option>
            <option value = 'pm'> P.M </option>
        </select>
	   </div>        
	    <div className="to-row">
		<input id = {id} value = {this.state.value} onChange = {this.onInputChange} type = "number" name = "to-hour" min = "1" max = "12" size = "2" maxLength = "2"/>
		<input id = {id} value = {this.state.value} onChange = {this.onInputChange} type = "number" name = "to-minute" min = "0" max = "59" size = "2" maxLength = "2"/>       

        <select id = {id} value = {this.state.value} onChange = {this.onInputChange} name = 'to-period'>
            <option value = 'am'> A.M </option>
            <option value = 'pm'> P.M </option>
        </select>

	    </div>
        </div>        
    );
  }
}

class Input extends React.Component {
    
    render() {
	const inputTable = [];
	const inputLen = this.props.input.length;
    
	for (let i = 0; i < inputLen; i++) {
	    inputTable.push(<InputRow 
		id = {i}
		handleInputChange = {this.props.handleInputChange}
		/>)
	}
	return(
	    inputTable
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
}

class SubtractDay extends React.Component {
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

class HourlyRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 14,
        };
        this.onInputChange = this.onInputChange.bind(this)
    }
    onInputChange(event) {
        const value = event.target.value;
        this.props.onInputChange(value);
        this.setState({rate: value});
    }
    
    render() {
        return (
            <div className = 'hourly-rate'>
                <input type="number" name="hourly-rate" id="hourly-rate" onChange = {this.onInputChange} value={this.state.rate} size = "2" maxlength = "2"/>
            
                <label htmlFor="hourly-rate"> per hour </label>
            </div>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [
            {id:0, fromHour:0, fromMinute:0, toHour:0, toMinute:0, fromPeriod:'am', toPeriod:'am'}
            ],
            total : 0,
            rate: 14,
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.onHourlyRateChange = this.onHourlyRateChange.bind(this);
    }
    
    AddDayHandleClick(i) {
        const input_list = this.state.input.slice();
        const id = input_list.length;
        const new_input = {id:id, fromHour:0, fromMinute:0, toHour:0, toMinute:0, fromPeriod:'am', toPeriod:'am', rate:14};
        input_list.push(new_input);
        this.setState({input: input_list});
        console.log(input_list);
    }
    
    SubtractDayHandleClick(i) {
        var input_list = this.state.input.slice();
        var total = this.state.total;
        var rate = this.state.rate;
        input_list.pop();
        var total = this.getTotal(input_list,rate);
        this.setState({
            input: input_list,
            total: total
        });
        console.log(input_list);
    }
    
    renderaddDayButton() {
        return<AddDay 
        onClick = {() => this.AddDayHandleClick()}
        />;
    }

    renderSubtractDayButton() {
        return<SubtractDay 
          onClick = {() => this.SubtractDayHandleClick()}
        />;
      }

    renderHourlyRateInput() {
        return<HourlyRate onInputChange = {this.onHourlyRateChange}/> 
    }

    onInputChange(id, name, value) {
        let inputs = [...this.state.input];
        let input = {...inputs[id]};
        let rate = this.state.rate;

        if (name === 'from-hour') {
            input.fromHour = value;
        }
        else if (name === 'from-minute') {
            input.fromMinute = value;
        }
        else if (name === 'to-hour') {
            input.toHour = value;
        }
        else if (name === 'to-minute') {
            input.toMinute = value;
        }
        else if (name === 'from-period') {
            input.fromPeriod = value;
        }
        else if (name === 'to-period') {
            input.toPeriod = value;
        }
        inputs[id] = input;
        var total = this.getTotal(inputs, rate);

        this.setState({
            input: inputs,
            total: total
        });
                
    }

    onHourlyRateChange(rate) {
        var inputs = this.state.input;
        var total = this.getTotal(inputs,rate);
        console.log('Rate: ' + rate);
        this.setState({
            rate:rate,
            total:total
        });
    }

    getTotal(inputs, hourly_rate) {
        var total = 0;
        var sub_total = 0;
        console.log(inputs); 
        for (var j = 0; j < inputs.length; j++) {

            var fromHour = +inputs[j].fromHour;
            var fromMinutes = +inputs[j].fromMinute;
            var toHour = +inputs[j].toHour;
            var toMinutes = +inputs[j].toMinute; 

            if (inputs[j].fromPeriod === 'pm') {
                fromHour = +fromHour + +12;
            }

            if (inputs[j].toPeriod === 'pm') {
                toHour = toHour + 12;
            }

            var hours = toHour - fromHour;
            var minutes = Math.abs((toMinutes - fromMinutes)/60);
            sub_total = (hours+minutes) * hourly_rate
           
            total = total + sub_total
        }
        total = total.toFixed(2);
        console.log(total);
        return total;
    }
	renderInput() {
	    return<Input
		input = {this.state.input}
		handleInputChange={this.onInputChange}
	    />;
	}

  render() {
    return (
      <div>
        <div className="total">$ {this.state.total}</div>
        <div className="toggle">
            {this.renderaddDayButton()} 
            {this.renderSubtractDayButton()} 
        </div>
        {this.renderHourlyRateInput()}
        <div className="inputs">    
            {this.renderInput()} 
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

