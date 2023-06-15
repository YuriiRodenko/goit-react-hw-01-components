import propTypes from 'prop-types';
import {
  StatsSection,
  Title,
  StatsList,
  StatsItem,
  Label,
  Percentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (

    <StatsSection>

      <h2>
        {title && <Title>{title}</Title>}
      </h2>

      <StatsList>
        {stats.map(item => {
          return (
            <StatsItem key={item.id}>
              <Label>{item.label}</Label>
              <Percentage>{item.percentage}%</Percentage>
            </StatsItem>
          );
        })}
      </StatsList>

    </StatsSection>
  );
};


Statistics.propTypes = {
  title: propTypes.string,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};