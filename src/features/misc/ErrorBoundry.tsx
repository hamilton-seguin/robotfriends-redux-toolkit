import React from "react";

interface IErrorBoundryProps {
  children: JSX.Element;
}
interface IErrorBoundryState {
  hasError: boolean;
}

class ErrorBoundry extends React.Component<IErrorBoundryProps, IErrorBoundryState> {
  constructor(props: IErrorBoundryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(): void {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1> Oops. That is not good, from ErrorBoundry</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundry;

//No official hook to replace componentDidCatch() as of yet
