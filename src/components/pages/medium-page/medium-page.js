import React from "react";

import { MediumList } from "../../wot-components/list";
import { MediumDetails } from "../../wot-components/details";
import Column from "../../column";
import { withRouter } from "react-router-dom";

const MediumPage = ({ match, history }) => {
  const { id } = match.params;
  return (
    <Column
      top={<MediumList onSelectedItem={(id) => history.push(`/medium/${id}`)} />}
      bottom={<MediumDetails selectedItem={Number(id)} />}
    />
  )
}

export default withRouter(MediumPage);
