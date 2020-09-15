import React from "react";

import { SauList } from "../../wot-components/list";
import { SauDetails } from "../../wot-components/details";
import Column from "../../column";
import { withRouter } from "react-router-dom";

const SauPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Column
      top={<SauList onSelectedItem={(id) => history.push(`/sau/${id}`)} />}
      bottom={<SauDetails selectedItem={Number(id)} />}
    />
  )
}

export default withRouter(SauPage);