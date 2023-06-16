import styled from '@emotion/styled';

export const FriendList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  padding: 0px;
  margin: 0 auto 50px;
  box-shadow: 0px 3px 10px 1px rgba(189, 189, 189, 1);
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 10px;
  padding: 15px;
  border-radius: 2px;
  box-shadow: 0px 1px 4px 1px rgba(189, 189, 189, 1);
  background-color: white;
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  background-color: ${props => (props.status ? 'lime' : 'dimgrey')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  padding: 6px;
  background-color: #e0e0e0;
  border-radius: 5px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-weight: 500;
`;