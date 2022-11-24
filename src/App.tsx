import React, { useState } from "react";
import data from "./Data";
import List from "./List";
import PersonModel from "./models/PersonModel";

function App(): JSX.Element {
  const [people, setPeople] = useState<PersonModel[]>(data);

  const clear = (): void => {
    setPeople([]);
  };
  const getAllBack = (): void => {
    setPeople(data);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        {people.length > 0 && <button onClick={clear}>Clear All</button>}

        {people.length === 0 && (
          <button onClick={getAllBack}>Get All Back</button>
        )}
      </section>
    </main>
  );
}

export default App;
