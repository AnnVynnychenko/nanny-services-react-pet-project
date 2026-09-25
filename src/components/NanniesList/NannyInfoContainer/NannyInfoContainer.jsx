import { calculateAge } from '../../../helpers/transformBirthdayToAge';
import {
  NannyExtraInfo,
  NannyExtraInfoTitle,
  NannyExtraInfoValue,
} from './NannyInfoContainer.styled';

const ORDERED_KEYS = [
  'birthday',
  'experience',
  'kids_age',
  'characters',
  'education',
];

function NannyInfoContainer({ dataObj = {} }) {
  const allKeys = Array.from(
    new Set([...ORDERED_KEYS, ...Object.keys(dataObj)])
  );

  return allKeys.map(key => {
    const rawValue = dataObj[key];

    if (rawValue === undefined || rawValue === null) return null;

    const formattedLabel =
      key === 'birthday'
        ? 'Age'
        : key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    let displayValue = rawValue;

    if (key === 'birthday') {
      displayValue = calculateAge(rawValue);
    } else if (Array.isArray(rawValue)) {
      displayValue = rawValue
        .map(value => value.charAt(0).toUpperCase() + value.slice(1))
        .join(', ');
    }

    return (
      <NannyExtraInfo key={key}>
        <NannyExtraInfoTitle>{formattedLabel}:</NannyExtraInfoTitle>
        <NannyExtraInfoValue>{displayValue}</NannyExtraInfoValue>
      </NannyExtraInfo>
    );
  });
}

export default NannyInfoContainer;
