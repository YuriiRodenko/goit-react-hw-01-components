import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  height: 100%;
  margin: 25px auto;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 1px rgba(189, 189, 189, 1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const User = styled.img`
  display: block;
  width: 150px;
  margin: 40px 0;
  background-color: orange;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 0px 0px 20px;
  font-size: 22px;
  font-weight: 650;
`;

export const Tag = styled.p`
  margin: 0px 0px 20px;
  font-size: 14px;
  font-weight: 600;
  color: grey;
`;

export const Location = styled.p`
  margin: 0px 0px 20px;
  font-size: 14px;
  font-weight: 600;
  color: grey;
`;

export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  border-top: 1px solid #e8e8e8;
  background-color: #f5f5f5;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
  gap: 6px;
  padding: 16px 0px;
  :not(:last-child) {
    border-right: 1px solid #e8e8e8;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 600;
  color: #a9a9a9;
`;

export const Quantity = styled.span`
  display: block;
  font-weight: 600;
`;