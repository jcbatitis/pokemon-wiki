import { useGetPokemonByNameQuery } from '@/_services/pokemon.api';

export const Card = () => {
  const { data, isError, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  return (
    <>
      <h1>Pokemon</h1>
      {isError ? (
        <>Error here</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
        </>
      ) : null}
    </>
  );
};
