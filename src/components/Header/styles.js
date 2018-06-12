import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: #ff9696;
  border-radius: 3px;
  height: 60px;
  margin: 30px 0;

  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 30px;

    li {
      margin-left: 15px;

      a {
        text-transform: uppercase;
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
