import React from "react";

import { useParams } from "react-router-dom";

function Single() {
  const params = useParams();
  const { name, uuid } = useParams();
  console.log("====================================");
  console.log(params);
  console.log("====================================");
  return (
    <div>
      <div>
        Hello, Mas {name} with Id = {uuid}
      </div>
      <div>
        Hello, Mas {name} with Id = {uuid}
      </div>
    </div>
  );
}

export default Single;
