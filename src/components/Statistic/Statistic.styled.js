import styled from '@emotion/styled';
export const Statistics = styled.div`
  background-color: rgb(129, 177, 222);
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
  border-radius: 9px;
  box-shadow: 0px 10px 13px -7px #000000, -8px -11px 16px -1px rgba(158,187,255,0);
  margin-top: auto;
`;
export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: rgb(23, 96, 163);
  margin: 0;
  padding: 0;
  list-style: none;
  width: 100%;
  border-radius: 9px;
`;
export const Item = styled.li`
  margin: 0;
  align-items: center;
  text-align: center;
  color: rgb(75, 73, 73);
  font-size: 15px;
  padding: 10px;
  flex-basis: 20%;
  &:not(:last-child) {
    border-right: 2px solid black;
    
    
  }
`;
export const Label = styled.span`
  display: flex;
  flex-direction: column;
  color: rgb(41, 38, 54);
  font-size: 20px;
`;
export const Percentage = styled.span`
  display: block;
  padding-top: 8px;
  margin-top: 8px;
  color: rgb(41, 38, 54);
  font-size: 18px;
  font-weight: 700;
`;
export const Box = styled.div`
  margin: 50px;
  margin-left: 0;
  width: 320px;
  height: 180px;
  border: 2px solid black;
  border-radius: 9px;
  background-color: rgb(129, 177, 222);
  display: flex;
  flex-direction: column;
  width: 100%;
`;