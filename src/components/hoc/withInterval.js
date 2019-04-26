import React from 'react';

const withInterval = (effectFunction, time) => WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timer: null,
        data: effectFunction()
      }
    }

    componentDidMount() {
      let timer = setInterval(() => this.setState({ data: effectFunction() }), time);
      this.setState({ timer: timer });
    }

    componentWillUnmount() {
      clearInterval(this.state.timer);
    }

    render() {
      return <WrappedComponent {...this.props} data={this.state.data} />;
    }
  };
};

export default withInterval;