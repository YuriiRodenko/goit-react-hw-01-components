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

      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({id, label, percentage}) => {
          return (
            <StatsItem key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
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