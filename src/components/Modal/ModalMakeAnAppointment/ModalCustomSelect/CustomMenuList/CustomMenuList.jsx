import { components } from 'react-select';
import { SelectHeader } from './CustomMenuList.styled';

function CustomMenuList(props) {
  return (
    <components.MenuList {...props}>
      <SelectHeader>Meeting time</SelectHeader>
      {props.children}
    </components.MenuList>
  );
}

export default CustomMenuList;
