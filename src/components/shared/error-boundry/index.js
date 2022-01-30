import React, { Component } from 'react';
import log from 'loglevel';
import { Link } from 'react-router-dom';
import { constants } from '../../../constants';

log.enableAll();

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, redirect: false };
    }

    componentDidCatch(error, info) {
        log.error({ error, info });
        if (constants.writeLogsToLocalStore) {
            const errorData = JSON.parse() || {};
            const timeElapsed = Date.now();
            const today = new Date(timeElapsed);
            errorData[today.toISOString()] = { pathname: window.location.href, error, info };
            localStorage.setItem("netigmaReactErrors", JSON.stringify(errorData));
        } else {
            console.log({ error, info });
            sessionStorage.setItem("netigmaReactErrors", JSON.stringify({ pathname: window.location.href, error, info }));
        }

        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {  // dev code
            //window.location.pathname = '/error';
            //this.setState({ hasError: true });
        } else {  // production code
            window.location.pathname = '/error';
            this.setState({ hasError: true });
        }

    }

    componentDidUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 5000);
        }
    }

    render() {

        if (this.state.redirect) {
            return <Link to="/error" />;
        }

        if (this.state.hasError) {
            return (
                <div placeholder>
                    <h1>
                        There are some problems with your operations.
                    </h1>
                    <h3>
                        <Link to="/">{"BACK TO HOME"}</Link>
                    </h3>
                </div>

            );
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;
