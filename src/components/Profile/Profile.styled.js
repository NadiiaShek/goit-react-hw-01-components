import styled from '@emotion/styled';
export const Profile = styled.div`
  margin: 50px;
  margin-left: 0;
  width: 350px;
  border: 2px solid black;
  border-radius: 9px;
  background-color: rgb(129, 177, 222);
  box-shadow: 0px 10px 13px -7px #000000, -8px -11px 16px -1px rgba(158,187,255,0);

`;
export const Avatar = styled.img`
  width: 160px;
  height: 160px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const Description = styled.div`
  padding: 20px;
`;
export const Name = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;
export const Tag = styled.p`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;
export const Location = styled.p`
  color: rgb(75, 73, 73);
  font-size: 15px;
  text-align: center;
`;
export const Stats = styled.ul`
  background-color: rgb(23, 96, 163);
  display: flex;
  /* justify-content: space-evenly; */
  border-top: 2px solid black;
  margin: 0;
  padding: 0;
  list-style: none;
  border-radius: 9px;
`;
export const Label = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: rgb(41, 38, 54);
  font-size: 20px;
`;
export const Quantity = styled.span`
  display: block;
  padding-top: 8px;
  margin-top: 8px;
  color: rgb(41, 38, 54);
  font-size: 18px;
  font-weight: 700;
  
`;
export const StatsItem = styled.li`
  padding: 10px;
  margin: 0;
  color: rgb(75, 73, 73);
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-basis: 33%;
  &:not(:last-child) {
    border-right: 2px solid black;
    
  }
`;