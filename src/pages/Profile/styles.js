import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 30px;

    input {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    hr {
      width: 100%;
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.05);
      margin: 10px 0 20px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      width: 162px;
      margin: 10px 0 0;
      background: #f64c75;
      border: 0;
      border-radius: 4px;
      height: 44px;
      color: #fff;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        margin-right: 10px;
      }
    }
  }
`;
