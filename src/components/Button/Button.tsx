import { ButtonProps } from './Button.props';
import style from './Button.module.css';

function Button({ children, appearence = 'small', ...props }: ButtonProps) {
  const getStyle = () => {
    switch (appearence) {
      case 'big':
        return style.big;
      case 'small':
        return style.small;
      default:
        return '';
    }
  };

  return (
    <button
      className={`${style.button} ${style.accent} ${getStyle()}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
