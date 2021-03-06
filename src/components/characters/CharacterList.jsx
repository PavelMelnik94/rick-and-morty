import CharacterItem from "./CharacterItem";

export default function CharacterList({ character }) {
  return (
    <>
      <div className="list p-3">
        {character.map((el) => {
          return <CharacterItem key={el.id} {...el} />;
        })}
      </div>
    </>
  );
}
