import styled from '@emotion/styled';
import getRandomHexColor from '../../utils/getRandomHexColor';

export const StatsSection = styled.section`
  width: 350px;
  margin: 0 auto 50px;
`;

export const Title = styled.section`
  margin-bottom: 20px;

  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: grey;
`;

export const StatsList = styled.ul`
  display: flex;
  padding: 0;
  align-items: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
  gap: 6px;
  background-color: ${getRandomHexColor};
  padding: 16px 0;
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