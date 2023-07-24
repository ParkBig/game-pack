import { css } from '@emotion/react';
import FlagSVG from 'assets/svg/Flag';
import MineSVG from 'assets/svg/Mine';
import { sortColor } from 'components/util/sortColor';
import GlobalStyle from 'const/globalStyle';
import { ButtonHTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';
import { BlockInfo } from 'types/store/blocksStateType';

interface WrapProps {
  isClicked: boolean;
  isBlockClickPrevent: boolean;
  isMine: boolean;
  sortedColor: string;
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isClicked: boolean;
  blockInfo: BlockInfo;
}

export default function Button({ isClicked, blockInfo, ...props }: Props) {
  const isBlockClickPrevent = useSelector((state: RootState) => state.blocksState.isBlockClickPrevent);
  const disabled = isBlockClickPrevent || isClicked || blockInfo.isFlagged ? true : false;
  const sortValue = blockInfo.isMine ? <MineSVG fill="black" /> : blockInfo.value;
  const sortedColor = sortColor(blockInfo.value);

  return (
    <button
      css={wrap({ isClicked, isBlockClickPrevent, isMine: blockInfo.isMine, sortedColor })}
      {...props}
      disabled={disabled}
    >
      {blockInfo.isFlagged && <FlagSVG />}
      {isClicked && sortValue}
    </button>
  );
}

const wrap = (props: WrapProps) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  border: ${props.isClicked ? '3px inset' : '3px outset'};
  font-size: 1em;
  font-weight: bold;
  background-color: ${GlobalStyle.colors.gray};
  background-color: ${props.isMine && props.isClicked && GlobalStyle.colors.red};
  color: ${props.sortedColor};

  ${!props.isBlockClickPrevent &&
  css`
    :active {
      border: 3px inset;
    }
  `}
`;
