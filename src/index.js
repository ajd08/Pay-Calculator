import React from "react";
import ReactDOM from "react-dom";
//import './index.css';
import {
    ChakraProvider,
    extendTheme,
    Box,
    Flex,
    Heading,
    Spacer,
    Button,
    Stack,
    Input,
    HStack,
    Select,
} from "@chakra-ui/react";

const theme = extendTheme({
    textStyles: {
        h1: {
            fontSize: ["48px", "72px"],
            fontWeight: "bold",
            lineHeight: "110%",
            letterSpacing: "-2%",
        },
    },
});

class InputRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            from_hour: null,
            from_minute: null,
            to_hour: null,
            to_minute: null,
            from_period: "am",
            to_period: "pm",
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        const id = event.target.id;

        this.props.handleInputChange(id, name, value);

        if (name === "from-hour") {
            this.setState({ from_hour: value });
        } else if (name === "from-minute") {
            this.setState({ from_minute: value });
        } else if (name === "to-hour") {
            this.setState({ to_hour: value });
        } else if (name === "to-minute") {
            this.setState({ to_minute: value });
        } else if (name === "from-period") {
            this.setState({ from_period: value });
        } else if (name === "to-period") {
            this.setState({ to_period: value });
        }
    }

    render() {
        const id = this.props.id;

        return (
            <HStack spacing="50" p={3}>
                <HStack>
                    <Input
                        id={id}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        type="number"
                        name="from-hour"
                        min="1"
                        max="12"
                        size="2"
                        maxLength="2"
                    />
                    <Input
                        id={id}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        type="number"
                        name="from-minute"
                        min="0"
                        max="59"
                        size="2"
                        maxLength="2"
                    />
            <Box size="lg" width="100px">
                    <Select
                        size="md"
                        id={id}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        name="from-period"
                        width="5em"
                    >
                        <option value="am"> A.M </option>
                        <option value="pm"> P.M </option>
                    </Select>

            </Box>
                </HStack>

                <h3> to </h3>

                <HStack>
                    <Input
                        id={id}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        type="number"
                        name="to-hour"
                        min="1"
                        max="12"
                        size="2"
                        maxLength="2"
                    />
                    <Input
                        id={id}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        type="number"
                        name="to-minute"
                        min="0"
                        max="59"
                        size="2"
                        maxLength="2"
                    />

            <Box size="lg" width="100px">
                    <Select
                        size="md"
                        width="5em"
                        id={id}
                        value={this.state.value}
                        onChange={this.onInputChange}
                        name="to-period"
                    >
                        <option value="am"> A.M </option>
                        <option value="pm"> P.M </option>
                    </Select>
            </Box>
                </HStack>
            </HStack>
        );
    }
}

class InputTable extends React.Component {
    render() {
        const inputTable = [];
        const inputLen = this.props.input.length;

        for (let i = 0; i < inputLen; i++) {
            inputTable.push(
                <InputRow
                    id={i}
                    handleInputChange={this.props.handleInputChange}
                />
            );
        }
        return inputTable;
    }
}

class AddDay extends React.Component {
    render() {
        return <Button onClick={this.props.onClick}>+</Button>;
    }
}

class SubtractDay extends React.Component {
    render() {
        return <Button onClick={this.props.onClick}>-</Button>;
    }
}

class HourlyRate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rate: 14,
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event) {
        const value = event.target.value;
        this.props.onInputChange(value);
        this.setState({ rate: value });
    }

    render() {
        return (
            <HStack>
                <Input
                    type="number"
                    name="hourly-rate"
                    id="hourly-rate"
                    onChange={this.onInputChange}
                    value={this.state.rate}
                    size="md"
                    maxLength="2"
                    width="5em"
                    placeholder="14"
                />
                <label htmlFor="hourly-rate"> per hour </label>
            </HStack>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: [
                {
                    id: 0,
                    fromHour: 0,
                    fromMinute: 0,
                    toHour: 0,
                    toMinute: 0,
                    fromPeriod: "am",
                    toPeriod: "am",
                },
            ],
            total: 0,
            rate: 14,
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onHourlyRateChange = this.onHourlyRateChange.bind(this);
    }

    AddDayHandleClick(i) {
        const input_list = this.state.input.slice();
        const id = input_list.length;
        const new_input = {
            id: id,
            fromHour: 0,
            fromMinute: 0,
            toHour: 0,
            toMinute: 0,
            fromPeriod: "am",
            toPeriod: "am",
            rate: 14,
        };
        input_list.push(new_input);
        this.setState({ input: input_list });
    }

    SubtractDayHandleClick(i) {
        var input_list = this.state.input.slice();
        var rate = this.state.rate;
        input_list.pop();
        var total = this.getTotal(input_list, rate);
        this.setState({
            input: input_list,
            total: total,
        });
    }

    renderaddDayButton() {
        return <AddDay onClick={() => this.AddDayHandleClick()} />;
    }

    renderSubtractDayButton() {
        return <SubtractDay onClick={() => this.SubtractDayHandleClick()} />;
    }

    renderHourlyRateInput() {
        return <HourlyRate onInputChange={this.onHourlyRateChange} />;
    }

    onInputChange(id, name, value) {
        let inputs = [...this.state.input];
        let input = { ...inputs[id] };
        let rate = this.state.rate;

        if (name === "from-hour") {
            input.fromHour = value;
        } else if (name === "from-minute") {
            input.fromMinute = value;
        } else if (name === "to-hour") {
            input.toHour = value;
        } else if (name === "to-minute") {
            input.toMinute = value;
        } else if (name === "from-period") {
            input.fromPeriod = value;
        } else if (name === "to-period") {
            input.toPeriod = value;
        }

        inputs[id] = input;
        var total = this.getTotal(inputs, rate);

        this.setState({
            input: inputs,
            total: total,
        });
    }

    onHourlyRateChange(rate) {
        var inputs = this.state.input;
        var total = this.getTotal(inputs, rate);
        this.setState({
            rate: rate,
            total: total,
        });
    }

    getTotal(inputs, hourly_rate) {
        var total = 0;
        var sub_total = 0;
        for (var j = 0; j < inputs.length; j++) {
            var fromHour = +inputs[j].fromHour;
            var fromMinutes = +inputs[j].fromMinute;
            var toHour = +inputs[j].toHour;
            var toMinutes = +inputs[j].toMinute;

            if (inputs[j].fromPeriod === "pm" && fromHour !== 12) {
                fromHour = fromHour + 12;
            }

            if (inputs[j].toPeriod === "pm" && toHour !== 12) {
                toHour = toHour + 12;
            }

            var hours = toHour - fromHour;
            var minutes = (toMinutes - fromMinutes) / 60;
            sub_total = (hours + minutes) * hourly_rate;

            total = total + sub_total;
        }
        total = total.toFixed(2);
        return total;
    }
    renderInput() {
        return (
            <InputTable
                input={this.state.input}
                handleInputChange={this.onInputChange}
            />
        );
    }

    render() {
        return (
            <Flex
                align="center"
                justify="center"
                direction="column"
                pt="2em"
                width="100%"
            >
                <Box textStyle="h1">$ {this.state.total}</Box>

                <HStack spacing="24px" pt={4} pb={6}>
                    {this.renderaddDayButton()}
                    {this.renderSubtractDayButton()}
                    <Spacer />
                    <Spacer />
                    <Spacer />

                    {this.renderHourlyRateInput()}
                </HStack>

                <div className="inputs">{this.renderInput()}</div>
            </Flex>
        );
    }
}

class PayCalculator extends React.Component {
    render() {
        return (
            <ChakraProvider theme={theme}>
                <Calculator />
            </ChakraProvider>
        );
    }
}

ReactDOM.render(<PayCalculator />, document.getElementById("root"));
