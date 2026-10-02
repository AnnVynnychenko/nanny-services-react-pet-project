import { ORDERED_KEYS } from '../../../data/nannyInfoKeys';
import { calculateAge } from '../../../helpers/transformBirthdayToAge';
import {
  NannyExtraInfo,
  NannyExtraInfoTitle,
  NannyExtraInfoValue,
} from './NannyInfoContainer.styled';

function NannyInfoContainer({ dataObj = {} }) {
  const allKeys = Array.from(
    new Set([...ORDERED_KEYS, ...Object.keys(dataObj)])
  );

  return allKeys.map(key => {
    const rawValue = dataObj[key];

    if (
      rawValue === undefined ||
      rawValue === null ||
      rawValue === '' ||
      (Array.isArray(rawValue) && rawValue.length === 0)
    ) {
      return null;
    }

    const formattedLabel =
      key === 'birthday'
        ? 'Age'
        : key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    let displayValue = rawValue;

    if (key === 'birthday') {
      displayValue = calculateAge(rawValue);
    } else if (Array.isArray(rawValue)) {
      displayValue = rawValue
        .map(val =>
          typeof val === 'string'
            ? val.charAt(0).toUpperCase() + val.slice(1)
            : val
        )
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
