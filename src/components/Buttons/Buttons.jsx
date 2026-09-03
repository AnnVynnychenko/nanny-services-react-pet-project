import { SessionButton, CommonButton } from './Buttons.styled';

export function SessionBtn({ title, className }) {
  return <SessionButton className={className}>{title}</SessionButton>;
}

export function CommonBtn({ title, className, paddingX }) {
  return (
    <CommonButton className={className} $paddingX={paddingX}>
      {title}
    </CommonButton>
  );
}
