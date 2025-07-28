// HelloClass.tsx
import React, { Component } from 'react';

type Props = {
  name: string;
};

class HelloClass extends Component<Props> {
  render() {
    return <h2>Hello, {this.props.name} (from Class Component)</h2>;
  }
}

export default HelloClass;
