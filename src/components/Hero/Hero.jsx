import HeroStats from './HeroStats';
import {
  HeroSection,
  ArrowIcon,
  HeroContainer,
  GetStartedBtn,
  StatsContainer,
} from './Hero.styled';

function Hero() {
  return (
    <HeroSection>
      <HeroContainer>
        <h1>Make Life Easier for the Family:</h1>
        <p>Find Babysitters Online for All Occasions</p>
        <GetStartedBtn title="Get started" paddingX={46} paddingY={16}>
          <ArrowIcon icon="ci:arrow-up-right-lg" />
        </GetStartedBtn>
      </HeroContainer>
      <StatsContainer>
        <HeroStats />
      </StatsContainer>
    </HeroSection>
  );
}

export default Hero;
