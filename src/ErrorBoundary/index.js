import React from "react";

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    componentDidCatch(error, errorInfo) {
        console.log(errorInfo);
        this.setState({ error });
    }

    render() {
        if (this.state.error) {
            return <div>Component has crashed</div>
        } else {
            return this.props.children;
        }
    }
}