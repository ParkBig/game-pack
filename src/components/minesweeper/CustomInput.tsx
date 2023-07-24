import { css } from '@emotion/react';
import Input from 'components/ui/Input';
import { ForwardedRef, forwardRef } from 'react';

interface Props {
  placeholder: string;
  type: 'rows' | 'cols' | 'mines';
}

const CustomInput = forwardRef(({ placeholder, type }: Props, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <label css={label}>
      <span>{type}: </span>
      <Input style={input} type="number" placeholder={placeholder} ref={ref} />
    </label>
  );
});

export default CustomInput;

const label = css`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const input: React.CSSProperties = {
  width: '70%',
  textAlign: 'center',
};
