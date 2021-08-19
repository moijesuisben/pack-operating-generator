import React from "react";
import Card from "./Card/Card";
import useStylesCards from "./useStylesCards";
import Bg1Top from "../../../../media/bg_1_top.png";
import Bg1Bottom from "../../../../media/bg_1_bottom.png";
import Bg2Top from "../../../../media/bg_2_top.png";
import Bg2Bottom from "../../../../media/bg_2_bottom.png";
import Bg3Top from "../../../../media/bg_3_top.png";
import Bg3Bottom from "../../../../media/bg_3_bottom.png";
import Bg4Top from "../../../../media/bg_4_top.png";
import Bg4Bottom from "../../../../media/bg_4_bottom.png";

export default function Cards({
  marketplaceLaunchLabel,
  marketplaceLaunchDurationInformation,
  marketplaceLaunchDurationLabel,
  marketplaceLaunchReferentInformation,
  marketplaceLaunchReferentLabel,
  marketplaceLaunchTopicsLabel,
  listTopicsMarketplaceLaunch,
  marketplaceLaunchName,
  maintainRunLabel,
  maintainRunDurationInformation,
  maintainRunDurationLabel,
  maintainRunReferentInformation,
  maintainRunReferentLabel,
  maintainRunTopicsLabel,
  listTopicsMaintainRun,
  maintainRunName,
  commercialOperationLabel,
  commercialOperationDurationInformation,
  commercialOperationDurationLabel,
  commercialOperationReferentInformation,
  commercialOperationReferentLabel,
  commercialOperationTopicsLabel,
  listTopicsCommercialOperation,
  commercialOperationName,
  trainingLabel,
  trainingDurationInformation,
  trainingDurationLabel,
  trainingReferentInformation,
  trainingReferentLabel,
  trainingTopicsLabel,
  listTopicsTraining,
  trainingName,
  numberPlaceholder,
  timePlaceholder,
  timeOptions
}) {
  const classes = useStylesCards();

  return (
    <div className={classes.cards_container}>
      <Card
        bgTop={Bg1Top}
        bgBottom={Bg1Bottom}
        callLabel={marketplaceLaunchLabel}
        durationInformation={marketplaceLaunchDurationInformation}
        durationLabel={marketplaceLaunchDurationLabel}
        referentInformation={marketplaceLaunchReferentInformation}
        referentLabel={marketplaceLaunchReferentLabel}
        topicsLabel={marketplaceLaunchTopicsLabel}
        listTopicsMarketplaceLaunch={listTopicsMarketplaceLaunch}
        cardTitle={marketplaceLaunchName}
        numberPlaceholder={numberPlaceholder}
        timePlaceholder={timePlaceholder}
        timeOptions={timeOptions}
      />
      <Card
        bgTop={Bg2Top}
        bgBottom={Bg2Bottom}
        callLabel={maintainRunLabel}
        durationInformation={maintainRunDurationInformation}
        durationLabel={maintainRunDurationLabel}
        referentInformation={maintainRunReferentInformation}
        referentLabel={maintainRunReferentLabel}
        topicsLabel={maintainRunTopicsLabel}
        listTopicsMaintainRun={listTopicsMaintainRun}
        cardTitle={maintainRunName}
        numberPlaceholder={numberPlaceholder}
        timePlaceholder={timePlaceholder}
        timeOptions={timeOptions}
      />
      {
        <Card
          bgTop={Bg3Top}
          bgBottom={Bg3Bottom}
          callLabel={commercialOperationLabel}
          durationInformation={commercialOperationDurationInformation}
          durationLabel={commercialOperationDurationLabel}
          referentInformation={commercialOperationReferentInformation}
          referentLabel={commercialOperationReferentLabel}
          topicsLabel={commercialOperationTopicsLabel}
          listTopicsCommercialOperation={listTopicsCommercialOperation}
          cardTitle={commercialOperationName}
          numberPlaceholder={numberPlaceholder}
          timePlaceholder={timePlaceholder}
          timeOptions={timeOptions}
        />
      }
      <Card
        bgTop={Bg4Top}
        bgBottom={Bg4Bottom}
        callLabel={trainingLabel}
        durationInformation={trainingDurationInformation}
        durationLabel={trainingDurationLabel}
        referentInformation={trainingReferentInformation}
        referentLabel={trainingReferentLabel}
        topicsLabel={trainingTopicsLabel}
        listTopicsTraining={listTopicsTraining}
        cardTitle={trainingName}
        numberPlaceholder={numberPlaceholder}
        timePlaceholder={timePlaceholder}
        timeOptions={timeOptions}
      />
    </div>
  );
}
