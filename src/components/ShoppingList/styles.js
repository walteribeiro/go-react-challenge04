import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-grow: 1;
  list-style: none;
  width: 250px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #eee;
  border-radius: 3px;
  margin-bottom: 25px;

  img {
    width: 230px;
    padding: 25px 0;
  }

  strong {
    font-size: 20px;
  }

  span {
    font-size: 16px;
    color: #ccc;
    margin: 5px 0;
  }

  p {
    font-size: 23px;
    color: #37BEA9;
    font-weight: bold;
    margin: 15px 0;
  }
`;
