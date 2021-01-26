import styled, { css, keyframes } from 'styled-components';

const loader = keyframes`
  from {
    transform: translate(-110px);
  }
  to {
    transform: translate(450px);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #101010;

  img {
    width: 60px;
  }

  .trail-strong {
    margin-top: 80px;

    > strong {
      font-size: 28px;
    }
  }

  .trail-input {
    margin-top: 60px;

    input {
      width: 300px;
      padding: 10px 0;
      font-size: 18px;
      font-weight: 300;
    }
  }

  .line-outside {
    width: 300px;
    height: 1px;
    background: #252525;
    position: relative;
    overflow: hidden;

    .line-inside {
      width: 100px;
      height: 2px;
      background: #ff0021;
      position: absolute;
      transform: translate(-110px);
      ${props =>
        props.next &&
        css`
          animation: ${loader} 1.5s infinite;
        `}
    }
  }

  .trail-btn {
    margin-top: 30px;

    button {
      padding: 10px 50px;
      background: #ff0021;
      border-radius: 2px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .trail-terms {
    position: absolute;
    bottom: 40px;

    > span {
      width: 500px;
      text-align: center;

      color: #808080;
      font-size: 14px;
      font-weight: 100;

      strong {
        color: #808080;
        font-size: 14px;
      }

      span {
        color: #808080;
        font-size: 14px;
        font-weight: 100;
      }
    }
  }
`;
