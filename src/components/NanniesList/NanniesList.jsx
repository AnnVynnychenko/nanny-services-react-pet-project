import { NanniesListContainer } from './NanniesList.styled';
import NannyCard from './NannyCard/';

function NanniesList({ nannies = [], isOnline }) {
  if (!nannies.length) {
    return <p>No nannies found.</p>;
  }

  return (
    <NanniesListContainer>
      {nannies.map(nanny => (
        <NannyCard key={nanny.id} nanny={nanny} isOnline={isOnline} />
      ))}
    </NanniesListContainer>
  );
}

export default NanniesList;
