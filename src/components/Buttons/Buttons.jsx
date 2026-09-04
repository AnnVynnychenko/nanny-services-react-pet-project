import { SessionButton, CommonButton } from './Buttons.styled';

export function SessionBtn({
  title,
  className,
  paddingX,
  paddingY,
  children,
  ...restProps
}) {
  return (
    <SessionButton
      type="button"
      className={className}
      $paddingX={paddingX}
      $paddingY={paddingY}
      {...restProps}
    >
      {title}
      {children}
    </SessionButton>
  );
}

export function CommonBtn({ title, className, paddingX, ...restProps }) {
  return (
    <CommonButton
      type="button"
      className={className}
      $paddingX={paddingX}
      {...restProps}
    >
      {title}
    </CommonButton>
  );
}
