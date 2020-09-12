import React, { Component } from "react";

import Spinner from "../components/spinner";
import { TankopediaServiceConsumer } from "../context";

const withData = (View, getData) => {
    return class extends Component {
        state = {
            data: [],
        };
        componentDidMount() {
            getData().then((data) => {
                this.setState({
                    data: data,
                });
            });
        }
        render() {
            const { data } = this.state;
            if (!data) {
                return  <Spinner />;
            }
            return <View {...this.props} data={data} />;
        }
    };
};

const withChildFunction = (Wrapped, fn) => {
    return (props) => <Wrapped {...props}>{fn}</Wrapped>;
}

const withService = (Wrapped) => {
    return (props) => {
        return <TankopediaServiceConsumer>
            {
                (service) => {
                    return (<Wrapped {...props} service={service} />
                    )
                }
            }
        </TankopediaServiceConsumer>
    }
};

export { withData, withChildFunction, withService };