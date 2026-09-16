import { NanniesListContainer } from './NanniesList.styled';
import NannyCard from './NannyCard/';

function NanniesList({ nannies, isOnline }) {
  return (
    <>
      {nannies.length > 0 ? (
        <NanniesListContainer>
          {nannies.map(nanny => (
            <NannyCard key={nanny.id} nanny={nanny} isOnline={isOnline} />
          ))}
        </NanniesListContainer>
      ) : (
        <p>No nannies found.</p>
      )}
    </>
  );
}

export default NanniesList;
