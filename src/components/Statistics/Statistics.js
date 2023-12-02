import { StstisticsList, StstisticsItem, Count } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StstisticsList>
      <StstisticsItem>
        Good: <Count>{good}</Count>
      </StstisticsItem>
      <StstisticsItem>
        Neutral: <Count>{neutral}</Count>
      </StstisticsItem>
      <StstisticsItem>
        Bad: <Count>{bad}</Count>
      </StstisticsItem>
      <StstisticsItem>
        Total: <Count>{total}</Count>
      </StstisticsItem>
      <StstisticsItem>
        Positive feedback: <Count>{positivePercentage}%</Count>
      </StstisticsItem>
    </StstisticsList>
  );
};
