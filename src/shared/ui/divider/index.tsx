import type { ComponentProps } from 'react';
import styled from 'styled-components';

type DividerProps = {
  $color?: string;
} & ComponentProps<'hr'>;

const Divider = styled.hr<DividerProps>(({ $color }) => ({
  border: 'none',
  height: '1px',
  backgroundColor: $color || '#3E444C',
  width: '100%',
}));

export default Divider;
