import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-10">
          <h1>
            Something went wrong
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}