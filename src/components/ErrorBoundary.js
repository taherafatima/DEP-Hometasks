import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error
        }
    }
    render() {
        if(this.state.hasError) {
            return (
                <div className="error">
                    <h1>Error <span>&#9888;</span></h1>
                    <p>{this.state.error}</p>

                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;