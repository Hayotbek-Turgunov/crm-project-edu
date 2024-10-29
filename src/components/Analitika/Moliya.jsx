import { useState } from "react";
import useDate, { weeks } from "../../hook/date";
import Suptitle from "../Generics/SupTitle";
import { Fragment, ArrowIcon, Wrapper, DateCard } from "./moliyaStyle";

export const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate());
  const [weekCount, changeWeek] = useState(0);

  const onClickDate = (value) => {
    if (date.week(weekCount)[0].getDate() === value.getDate())
      changeWeek(weekCount - 1);
    else if (date.week(weekCount)[6]?.getDate() === value?.getDate())
      changeWeek(weekCount + 1);
    // console.log(date.week());
    setActive(value?.getDate());
  };

  const onClickForward = () => {
    changeWeek(weekCount + 6);
  };
  const onClickBackward = () => {
    changeWeek(weekCount - 6);
  };

  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left onClick={onClickBackward} />
        <Suptitle>
          {date.month?.full} {date.year}
        </Suptitle>
        <ArrowIcon onClick={onClickForward} />
      </Fragment>
      <Fragment mt={16} mb={16}>
        {date.week(weekCount).map((value) => {
          const ac = active == value.getDate();
          return (
            <DateCard
              active={ac}
              key={value}
              onClick={() => onClickDate(value)}
            >
              <Suptitle color={ac && "white"} size={14}>
                {weeks[value.getDay()]?.short}
              </Suptitle>
              <Suptitle color={ac && "white"} size={14}>
                {value.getDate()}
              </Suptitle>
            </DateCard>
          );
        })}
      </Fragment>
      <Suptitle size={14} color="#929FAF">
        {date.date}-{date.month.full}, {date.year}
      </Suptitle>
      <Suptitle size={32} mt={5} mb={24}>
        8 520 000{" "}
        <Suptitle size={24} ml={16} color="#52C41A">
          +22%
        </Suptitle>
      </Suptitle>
      <Fragment mb={8}>
        <div>Talabalar</div>
        <Suptitle>5 760 000</Suptitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar sotuvi</div>
        <Suptitle>2 180 000</Suptitle>
      </Fragment>
    </Wrapper>
  );
};

export default Moliya;
