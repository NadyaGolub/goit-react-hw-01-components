import PropTypes from 'prop-types';
import { Item, List, Section, Title, Value } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <h2>{title}</h2>

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id}>
            <Title>{label}</Title>
            <Value>{percentage}</Value>
          </Item>
        ))}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
