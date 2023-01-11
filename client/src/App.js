import React, { useState, useEffect } from "react";

const App = () => {
  const [apiResponse, setApiResponse] = useState("");
  const callApi = () => {
    fetch("http://localhost:9000/about")
      .then((res) => res.text())
      .then((res) => setApiResponse(res));
  };

  useEffect(() => {
    if (apiResponse === "") {
      callApi();
    }

    console.log(apiResponse);
  }, [apiResponse]);

  return <h1>{apiResponse}</h1>;
};

export default App;
