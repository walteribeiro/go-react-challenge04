import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const Title = styled.p`
  font-size: 22px;
  color: #ff9696;
  font-weight: bold;
`;
