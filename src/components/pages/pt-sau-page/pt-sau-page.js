import React from "react";

import { PtSauList } from "../../wot-components/list";
import { PtSauDetails } from "../../wot-components/details";
import Column from "../../column";
import { withRouter } from "react-router-dom";

const PtSauPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Column
      top={<PtSauList onSelectedItem={(id) => history.push(`/pt-sau/${id}`)} />}
      bottom={<PtSauDetails selectedItem={Number(id)} />}
    />
  )
}

export default withRouter(PtSauPage);