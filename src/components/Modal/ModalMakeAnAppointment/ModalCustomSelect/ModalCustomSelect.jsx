import { Controller } from 'react-hook-form';
import Select from 'react-select';
import {
  CustomSelectWrapper,
  IconTime,
  customSelectStyles,
} from './ModalCustomSelect.styled';
import CustomMenuList from './CustomMenuList';
import ModalCustomOption from './ModalCustomOption';
import { MEETING_TIME_OPTIONS } from '../../../../data/appointmentOptions';

function ModalCustomSelect({ control }) {
  return (
    <CustomSelectWrapper>
      <Controller
        name="meetingTime"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            options={MEETING_TIME_OPTIONS}
            placeholder="00:00"
            styles={customSelectStyles}
            menuPortalTarget={
              typeof document !== 'undefined' ? document.body : null
            }
            components={{
              MenuList: CustomMenuList,
              Option: ModalCustomOption,
            }}
            value={
              MEETING_TIME_OPTIONS.find(opt => opt.value === field.value) ||
              null
            }
            onChange={val => field.onChange(val ? val.value : '')}
          />
        )}
      />
      <IconTime icon="tabler:clock-hour-4" />
    </CustomSelectWrapper>
  );
}

export default ModalCustomSelect;
