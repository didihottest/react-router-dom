import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function New() {
  let navigate = useNavigate();
  const [showCard, setShowCard] = useState(false);
  function submitNewEntry() {
    // some function to hit api
    // data response from api
    let data = {
      uuid: "177ff32c-3c4d-4528-932b-0cc8e104914b",
      name: "Ninda",
    };
    if (data.uuid) {
      setShowCard(true);
    }
    // navigate(`/user/${data.uuid}/${data.name}`);
  }
  return (
    <div>
      <div>New</div>
      <button onClick={submitNewEntry}>Create New Entry</button>

      {showCard && (
        <div className="show">Tampilkan ketika berhasil create new entry</div>
      )}
    </div>
  );
}

export default New;
