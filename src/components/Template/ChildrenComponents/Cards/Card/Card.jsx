import React from "react";
import Select from "react-select";
import customSelect from "../../../../../styles/customSelect";
import useStylesCard from "./useStylesCard";

export default function Card({
  bgTop,
  bgBottom,
  callLabel,
  durationInformation,
  durationLabel,
  referentInformation,
  referentLabel,
  topicsLabel,
  listTopicsMarketplaceLaunch,
  listTopicsMaintainRun,
  listTopicsCommercialOperation,
  listTopicsTraining,
  cardTitle,
  numberPlaceholder,
  timePlaceholder,
  timeOptions
}) {
  const classes = useStylesCard();
  const [number, setNumber] = React.useState(null);
  const [duration, setDuration] = React.useState(null);

  const numberOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  return (
    <div className={classes.card_item}>
      <div
        className={classes.card_container}
        style={{ backgroundImage: `url(${bgTop})` }}
      >
        <div className={classes.card_block}>
          {!number ? (
            <Select
              options={numberOptions}
              defaultValue={number}
              onChange={setNumber}
              placeholder={numberPlaceholder}
              styles={customSelect}
            />
          ) : (
            <p className={classes.card_information}>{number.value}</p>
          )}
          <p className={classes.card_label}>{callLabel}</p>
          {!duration ? (
            <Select
              options={timeOptions}
              defaultValue={duration}
              onChange={setDuration}
              placeholder={timePlaceholder}
              styles={customSelect}
            />
          ) : (
            <p className={classes.card_time}>{duration.label}</p>
          )}
        </div>
        <div className={classes.card_block}>
          <p className={classes.card_information}>{durationInformation}</p>
          <p className={classes.card_label}>{durationLabel}</p>
        </div>
        <div className={classes.card_block}>
          <p className={classes.card_information}>{referentInformation}</p>
          <p className={classes.card_label}>{referentLabel}</p>
        </div>
      </div>

      <div className={classes.card_container} style={{ backgroundImage: `url(${bgBottom})` }}>
        <div className={classes.card_block}>
          <p className={classes.card_label}>{topicsLabel}</p>
          <ul className={classes.card_listTopics}>
            {listTopicsMarketplaceLaunch ||
              listTopicsMaintainRun ||
              listTopicsCommercialOperation ||
              listTopicsTraining}
          </ul>
        </div>
        <div className={classes.card_block}>
          <p className={classes.card_title}>{cardTitle}</p>
        </div>
      </div>
    </div>
  );
}
