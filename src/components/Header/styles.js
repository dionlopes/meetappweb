import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 92px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 32px;
  }

  aside {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    button {
      margin: 12px 0px 12px 12px;
      width: 71px;
      height: 42px;
      border-radius: 4px;
      border: none;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  a {
    margin-top: 5px;
    color: #999;
    font-size: 12px;
  }
`;
