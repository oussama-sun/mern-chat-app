import { ButtonHTMLAttributes, ClassAttributes } from "react";
interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ClassAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  withChildren?: boolean;
}
const Button = 
  ({ className, isLoading, children, withChildren, ...Props }: ButtonProps) => {
    return (
      <button disabled={isLoading} className={`btn  ${className}`} {...Props}>
        {withChildren && isLoading ? (
          <>
            <span className="loading loading-spinner"></span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  }
;

export default Button;
