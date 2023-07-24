import { forwardRef, ForwardedRef, InputHTMLAttributes } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef(({ ...props }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <input
      css={{
        width: '100%',
        margin: 0,
        padding: '5px',
        border: '2px double gray',
      }}
      ref={ref}
      {...props}
    />
  );
});

export default Input;
