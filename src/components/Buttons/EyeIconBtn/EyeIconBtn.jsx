import { EyeBtn, EyeIcon } from './EyeIconBtn.styled';

function EyeIconBtn({ showPassword = false, togglePasswordVisibility }) {
  return (
    <EyeBtn
      type="button"
      onClick={togglePasswordVisibility}
      aria-label={showPassword ? 'Hide password' : 'Show password'}
    >
      {showPassword ? (
        <EyeIcon icon="meteor-icons:eye-off" />
      ) : (
        <EyeIcon icon="meteor-icons:eye" />
      )}
    </EyeBtn>
  );
}

export default EyeIconBtn;
