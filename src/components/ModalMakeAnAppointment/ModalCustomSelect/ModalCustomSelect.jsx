import { Controller } from 'react-hook-form';
import Select from 'react-select';
import {
  CustomSelectWrapper,
  IconTime,
  customSelectStyles,
} from './ModalCustomSelect.styled';
import CustomMenuList from './CustomMenuList';
import ModalCustomOption from './ModalCustomOption';

const options = [
  { value: '09:00', label: '09:00' },
  { value: '09:30', label: '09:30' },
  { value: '10:00', label: '10:00' },
  { value: '10:30', label: '10:30' },
];

function ModalCustomSelect({ control }) {
  return (
    <CustomSelectWrapper>
      <Controller
        name="meetingTime"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={options}
            placeholder="00:00"
            styles={customSelectStyles}
            menuPortalTarget={
              typeof document !== 'undefined' ? document.body : null
            }
            components={{
              MenuList: CustomMenuList,
              Option: ModalCustomOption,
            }}
            value={options.find(opt => opt.value === field.value) || null}
            onChange={val => field.onChange(val ? val.value : '')}
          />
        )}
      />
      <IconTime icon="tabler:clock-hour-4" />
    </CustomSelectWrapper>
  );
}

export default ModalCustomSelect;
