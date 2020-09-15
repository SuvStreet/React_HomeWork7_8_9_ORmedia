import React from "react";

import { LightList } from "../../wot-components/list";
import { LightDetails } from "../../wot-components/details";
import Column from "../../column";
import { withRouter } from "react-router-dom";

const LightPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Column
      top={<LightList onSelectedItem={(id) => history.push(`/light/${id}`)} />}
      bottom={<LightDetails selectedItem={Number(id)} />}
    />
  )
}

export default withRouter(LightPage);
