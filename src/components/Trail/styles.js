import styled, { css, keyframes } from 'styled-components';

const appear = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const disappear = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Container = styled.div`
  display: flex;
  overflow: hidden;

  * {
    ${props =>
      props.open &&
      css`
        animation: ${appear} 400ms;
        transform: translateY(0);
        opacity: 1;
      `}

    ${props =>
      !props.open &&
      css`
        animation: ${disappear} 400ms;
        transform: translateY(-100%);
        opacity: 0;
      `}
  }
`;
