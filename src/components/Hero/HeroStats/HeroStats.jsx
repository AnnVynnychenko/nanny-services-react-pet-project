import { HERO_STATS } from '../../../data/heroStats';
import {
  CheckContainer,
  DataContainer,
  StatText,
  StatCount,
  CheckIcon,
} from './HeroStats.styled';

function HeroStats() {
  const { count, label } = HERO_STATS;
  const formattedCount = count.toLocaleString('en-US');
  return (
    <>
      <DataContainer>
        <CheckContainer>
          <CheckIcon icon="fe:check" />
        </CheckContainer>
        <div>
          <StatText>{label}</StatText>
          <StatCount>{formattedCount}</StatCount>
        </div>
      </DataContainer>
    </>
  );
}

export default HeroStats;
