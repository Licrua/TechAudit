import  { Component } from 'react';

type Props = {
  count: number;
  initialName?: string;
};

type State = {
  name: string;
  clicks: number;
};

class ClassCounter extends Component <Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.initialName || "Anonymous",
      clicks: 0,
    };
  }

  // Выполняется при монтировании компонента
  componentDidMount() {
    console.log(`Count has changed to: ${this.props.count}`);
    console.log("Setting up observers");
  }

  // Выполняется при обновлении компонента
  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.count !== this.props.count) {
      console.log(`Count has changed to: ${this.props.count}`);
    }
    if (prevState.clicks !== this.state.clicks) {
      console.log(`Clicks have been updated: ${this.state.clicks}`);
    }
  }

  // Выполняется при размонтировании компонента
  componentWillUnmount() {
    console.log("Clear observers");
  }

  handleClick = () => {
    this.setState((prevState) => ({ clicks: prevState.clicks + 1 }));
  };

  render() {
    const { count } = this.props;
    const { name, clicks } = this.state;

    return (
      <div>
        <div>Name: {name}</div>
        <div>Count: {count}</div>
        <div>Clicks: {clicks}</div>
        <button onClick={this.handleClick}>Increment Clicks</button>
      </div>
    );
  }
}

export default ClassCounter;
