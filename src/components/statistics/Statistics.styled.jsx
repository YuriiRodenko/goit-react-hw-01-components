import styled from '@emotion/styled';
import getRandomHexColor from '../../utils/getRandomHexColor';

export const StatsSection = styled.section`
  display: block;
  width: 500px;
  margin: 0 auto 50px;
  padding: 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 3px 10px 1px rgba(189, 189, 189, 1);
`;

export const Title = styled.h2`
  margin: 0;
  padding: 25px 0;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: grey;
  background-color: white;
`;

export const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 0;
  flex: 1 1 0px;
  gap: 6px;
  background-color: ${getRandomHexColor};
  
`;

export const Label = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 4px rgba(136, 136, 136, 1);
`;

export const Percentage = styled.span`
  display: block;
  font-size: 18px;
  font-weight: 600;
  color: white;
  text-shadow: 1px 1px 4px rgba(136, 136, 136, 1);
`;