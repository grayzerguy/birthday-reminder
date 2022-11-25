import PersonModel from "./models/PersonModel";

interface People {
  people: PersonModel[];
}

const List = ({ people }: People): JSX.Element => {
  console.log("people", typeof people);
  return (
    <>
      {people.map((person: PersonModel) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
