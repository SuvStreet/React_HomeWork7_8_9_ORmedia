import React, { Component } from "react";

import { HeavyList } from "../../wot-components/list";
import { HeavyDetails } from "../../wot-components/details";
import Column from "../../column";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router";

class HeavyPage extends Component {
    state = {
        isLogin: true,
    }

    render() {
        const { match, history } = this.props;
        const { id } = match.params;

        if (!this.state.isLogin) {
            return <Redirect to="/" />
        }

        return (
            <Column
                top={<HeavyList onSelectedItem={(id) => history.push(`/heavy/${id}`)} />}
                bottom={<HeavyDetails selectedItem={Number(id)} />}
            />
        )
    }
}

export default withRouter(HeavyPage);