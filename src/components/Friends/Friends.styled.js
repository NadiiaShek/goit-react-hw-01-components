import styled from '@emotion/styled';

export const FriendsList = styled.ul`
  background-color: rgb(129, 177, 222);
  margin: 50px;
  margin-left: 0;
  padding: 0;
  list-style: none;
  display: flex;
  border: 2px solid black;
  border-radius: 9px;
  height: 135px;
  width: 100%;
  box-shadow: 0px 10px 13px -7px #000000, -8px -11px 16px -1px rgba(158,187,255,0);
`;
export const FriendsListItem = styled.li`
  margin: 0;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgb(33, 32, 32);
  font-size: 18px;
  &:not(:last-child) {
    border-right: 2px solid black;
  }
  flex-basis: 20%;
  padding: 20px;
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 10px;
`;
export const Avatar = styled.img`
  display: block;
`;
export const Name = styled.p``;