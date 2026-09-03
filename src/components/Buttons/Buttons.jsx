import { SessionButton, CommonButton } from './Buttons.styled';

export function SessionBtn({ title }) {
  return <SessionButton>{title}</SessionButton>;
}

export function CommonBtn({ title, className, paddingX }) {
  return (
    <CommonButton className={className} $paddingX={paddingX}>
      {title}
    </CommonButton>
  );
}
