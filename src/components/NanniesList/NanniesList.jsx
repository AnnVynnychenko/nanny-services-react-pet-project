import NanniesFilter from './NanniesFilter';
import { NanniesListContainer } from './NanniesList.styled';
import NannyCard from './NannyCard/';

function NanniesList({ nannies }) {
  return (
    <section>
      <NanniesFilter />
      {nannies.length > 0 ? (
        <NanniesListContainer>
          {nannies.map(nanny => (
            <NannyCard key={nanny.name} nanny={nanny} />
          ))}
        </NanniesListContainer>
      ) : (
        <p>No nannies found.</p>
      )}
    </section>
  );
}

export default NanniesList;
