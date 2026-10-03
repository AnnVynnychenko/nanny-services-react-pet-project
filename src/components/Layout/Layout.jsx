import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Header,
  MainStyles,
  HeaderNav,
  AuthBlock,
  UserBlock,
  RightContainer,
  HeroWrapper,
  RegistrationBtn,
  AuthBtn,
  UserContainer,
  UserName,
  UserIcon,
  UserIconContainer,
} from './Layout.styled';
import { Container } from '../../styles/Common.styled';
import { useAuth } from '../../hooks/useAuth';
import { Suspense, useState } from 'react';
import AuthModal from '../Modal/AuthModal';
import Loader from '../Loader';

function Layout() {
  const [authModalType, setAuthModalType] = useState(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const { isLoggedIn, user, logOut, loading } = useAuth();

  function handleCloseModal() {
    setAuthModalType(null);
  }

  return (
    <HeroWrapper $isHome={isHome}>
      <Header $isHome={isHome} $isLoggedIn={isLoggedIn}>
        <NavLink to="/" className="logo">
          Nanny.Services
        </NavLink>
        <RightContainer $isHome={isHome} $isLoggedIn={isLoggedIn}>
          <nav>
            <HeaderNav $isHome={isHome}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/nannies">Nannies</NavLink>
              </li>
              {isLoggedIn && (
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
              )}
            </HeaderNav>
          </nav>

          {loading ? null : isLoggedIn ? (
            <UserBlock>
              <UserContainer>
                <UserIconContainer>
                  <UserIcon icon="mdi:account" />
                </UserIconContainer>
                <UserName>{user?.displayName ?? 'User'}</UserName>
              </UserContainer>
              <AuthBtn
                type="button"
                onClick={logOut}
                $paddingX={38}
                $paddingY={14}
              >
                Log Out
              </AuthBtn>
            </UserBlock>
          ) : (
            <AuthBlock>
              <AuthBtn
                type="button"
                onClick={() => {
                  setAuthModalType('login');
                }}
                $paddingX={38}
                $paddingY={14}
              >
                Log In
              </AuthBtn>
              <RegistrationBtn
                type="button"
                $isHome={isHome}
                onClick={() => {
                  setAuthModalType('registration');
                }}
                $paddingX={38}
                $paddingY={14}
              >
                Registration
              </RegistrationBtn>
            </AuthBlock>
          )}
        </RightContainer>
      </Header>
      <MainStyles>
        <Suspense
          fallback={
            <Loader
              fullPage
              color={isHome ? 'var(--light-color)' : 'var(--accent-color)'}
            />
          }
        >
          {isHome ? (
            <Outlet />
          ) : (
            <Container>
              <Outlet />
            </Container>
          )}
        </Suspense>
      </MainStyles>
      {authModalType && (
        <AuthModal type={authModalType} onClose={handleCloseModal} />
      )}
    </HeroWrapper>
  );
}

export default Layout;
