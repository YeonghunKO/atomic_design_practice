import StyledNavigation from './Nav.styles';
import Icon from '@components/Icons/Icon';
import type { NavProps } from '@src/types/Nav';

const Nav = ({ direction, items }: NavProps) => {
  return (
    <StyledNavigation direction={direction}>
      {items.map(({ url, text, icon }, ind) => (
        <a className="nav__anchor" key={ind} href={url}>
          {icon ? <Icon icon={icon} marginRight="5px" /> : <span>{text}</span>}
        </a>
      ))}
    </StyledNavigation>
  );
};

export default Nav;
