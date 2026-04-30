import styled from 'styled-components';

export const ButtonWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
});

export const Button = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#FFFFFF',
  backgroundColor: 'transparent',
  height: '40px',
  width: '40px',
  border: '1px solid #3E444C',
  cursor: 'pointer',
  borderRadius: '7.5px',
});

export const ProfileImage = styled.img({
  width: '32px',
  height: '32px',
  borderRadius: '999px',
});
