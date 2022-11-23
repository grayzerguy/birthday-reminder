import React, { useState } from "react";
import data from "./Data";
import List from "./List";

// useState<ProductModel[]>([]);
function App(): JSX.Element {
  const [people, setPeople] = useState(data);
  const clear = (): void => {
    setPeople([]);
  };
  const getAllBack = (): void => {
    setPeople(data);
  };
  // render the list of people automatically

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length > 0 && <button onClick={clear}>Clear All</button>}

        {people.length === 0 && (
          <button onClick={getAllBack}>Get All Back</button>
        )}
        {/* <button onClick={getAllBack}>Get All</button> */}
      </section>
    </main>
  );
}

export default App;
