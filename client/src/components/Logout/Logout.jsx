import { Redirect } from "react-router-dom";
import { Button } from "semantic-ui-react";
import React, { Component } from "react";

class Logout extends Component {
    state = {
        navigate: false
    };

    logout = () => {
        localStorage.clear("token");
        this.setState({ navigate: true });
    };

    render() {
        const { navigate } = this.state;

        if (navigate) {
            return <Redirect to="/login" push={true} />;
        }
        return <Button onClick={this.logout}>Log Out</Button>
    }
}

export default Logout;