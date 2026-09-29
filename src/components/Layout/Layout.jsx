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
  UserContainer,
  UserName,
  UserIcon,
  UserIconContainer,
} from './Layout.styled';
import { Container } from '../../styles/Common.styled';
import { useToggleModal } from '../../hooks/useToggleModal';
import ModalRegistration from '../Modal/ModalRegistration';
import ModalLogIn from '../Modal/ModalLogIn';
import { useAuth } from '../../hooks/useAuth';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const {
    isOpen: showRegistrationModal,
    toggleModal: toggleRegistrationModal,
  } = useToggleModal(false);

  const { isOpen: showLogInModal, toggleModal: toggleLogInModal } =
    useToggleModal(false);

  const { isLoggedIn, user, logOut } = useAuth();

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

          {isLoggedIn ? (
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
                onClick={toggleLogInModal}
                $paddingX={38}
                $paddingY={14}
              >
                Log In
              </AuthBtn>
              <RegistrationBtn
                type="button"
                $isHome={isHome}
                onClick={toggleRegistrationModal}
                $paddingX={38}
                $paddingY={14}
              >
                Registration
              </RegistrationBtn>
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
      {showRegistrationModal && (
        <ModalRegistration onClose={toggleRegistrationModal} />
      )}
      {showLogInModal && <ModalLogIn onClose={toggleLogInModal} />}
    </HeroWrapper>
  );
}

export default Layout;
