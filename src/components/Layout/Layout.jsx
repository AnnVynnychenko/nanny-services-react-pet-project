import { NavLink, Outlet, useLocation } from 'react-router-dom';
import {
  Header,
  HeaderNav,
  AuthBlock,
  UserBlock,
  RightContainer,
  HeroWrapper,
  RegistrationBtn,
  AuthBtn,
  UserName,
  UserIcon,
  UserIconContainer,
} from './Layout.styled';
import { Container } from '../../styles/Common.styled';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  console.log(isHome === false);

  // временно пока не реализовала auth
  const auth = {
    isLoggedIn: false,
    user: 'Anna',
    onLogout: false,
  };

  return (
    <HeroWrapper $isHome={isHome}>
      <Header $isHome={isHome}>
        <NavLink to="/" className="logo">
          Nanny.Services
        </NavLink>
        <RightContainer $isHome={isHome}>
          <nav>
            <HeaderNav $isHome={isHome}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/nannies">Nannies</NavLink>
              </li>
              {auth.isLoggedIn && (
                <li>
                  <NavLink to="/favorites">Favorites</NavLink>
                </li>
              )}
            </HeaderNav>
          </nav>

          {auth.isLoggedIn ? (
            <UserBlock>
              <UserName>
                <UserIconContainer>
                  {' '}
                  <UserIcon icon="mdi:account" />
                </UserIconContainer>
                {auth.user?.displayName ?? 'User'}
              </UserName>
              <AuthBtn
                $isHome={isHome}
                type="button"
                onClick={auth.onLogout}
                title="Log out"
              />
            </UserBlock>
          ) : (
            <AuthBlock>
              <AuthBtn
                $isHome={isHome}
                type="button"
                onClick={() => {
                  /* відкрити модалку входу */
                }}
                title="Log In"
              />
              <RegistrationBtn
                $isHome={isHome}
                type="button"
                onClick={() => {
                  /* відкрити модалку реєстрації */
                }}
                title="Registration"
                paddingX={39}
              />
            </AuthBlock>
          )}
        </RightContainer>
      </Header>
      {isHome ? (
        <main>
          <Outlet />
        </main>
      ) : (
        <Container>
          <main>
            <Outlet />
          </main>
        </Container>
      )}
    </HeroWrapper>
  );
}

export default Layout;
