import React from "react";
import Cards from "./ChildrenComponents/Cards/Cards";
import Header from "./ChildrenComponents/Header/Header";
import translationFR from "../../translations/translation_fr.json";
import translationEN from "../../translations/translation_en.json";
import useStylesTemplate from "./useStylesTemplate";

export default function Template() {
  const classes = useStylesTemplate();

  // Language Settings
  const [language, setLanguage] = React.useState(null);
  const languageOptions = [
    { value: "FR", label: "Français" },
    { value: "EN", label: "English" },
  ];

  const languageSelected = () => {
    if (language == null) {
      return translationFR;
    } else if (language.value === "FR") {
      console.log("FR");
      return translationFR;
    } else if (language.value === "EN") {
      console.log("EN");
      return translationEN;
    } else {
      console.log("null");
      return translationEN;
    }
  };

  // Commitment settings
  const [engagement, setEngagement] = React.useState(null);
  const engagementOptions = [
    {
      value: "6 months",
      label: languageSelected().header.engagement.choice["6months"],
    },
    {
      value: "12 months",
      label: languageSelected().header.engagement.choice["12months"],
    },
  ];

  // Marketplace launch topics
  const itemTopicsMarketplaceLaunch = [
    languageSelected().marketplaceLaunch.topics.topics1,
    languageSelected().marketplaceLaunch.topics.topics2,
  ];
  const listTopicsMarketplaceLaunch = itemTopicsMarketplaceLaunch.map(
    (item) => <li className={classes.card_topic}>{item}</li>
  );

  // Maintain run topics
  const itemTopicsMaintainRun = [
    languageSelected().maintainRun.topics.topics1,
    languageSelected().maintainRun.topics.topics2,
    languageSelected().maintainRun.topics.topics3,
    languageSelected().maintainRun.topics.topics4,
  ];
  const listTopicsMaintainRun = itemTopicsMaintainRun.map((item) => (
    <li className={classes.card_topic}>{item}</li>
  ));

  // Commercial operation topics
  const itemTopicsCommercialOperation = [
    languageSelected().commercialOperation.topics.topics1,
    languageSelected().commercialOperation.topics.topics2,
  ];
  const listTopicsCommercialOperation = itemTopicsCommercialOperation.map(
    (item) => <li className={classes.card_topic}>{item}</li>
  );

  // Training topics
  const itemTopicsTraining = [languageSelected().training.topics.topics1];
  const listTopicsTraining = itemTopicsTraining.map((item) => (
    <li className={classes.card_topic}>{item}</li>
  ));

  // Time options
  const timeOptions = [
    { value: "30 minutes", label: languageSelected().cards.duration["30min"] },
    { value: "1 hours", label: languageSelected().cards.duration["1h"] },
    {
      value: "1 hours 30 minutes",
      label: languageSelected().cards.duration["1h30"],
    },
  ];

  return (
    <>
      <Header
        languageOptions={languageOptions}
        languageDefaultValue={language}
        languageOnChange={setLanguage}
        languagePlaceholder={languageSelected().header.language.placeholder}
        headerTitle={languageSelected().header.title}
        headerDescription={languageSelected().header.description}
        engagement={engagement}
        setEngagement={setEngagement}
        engagementOptions={engagementOptions}
        engagementPlaceholder={
          languageSelected().header.engagement.choice.placeholder
        }
        headerEngagementLabel={languageSelected().header.engagement.label}
        headerNameMarketplacePlaceholder={
          languageSelected().header.marketplace.placeholder
        }
        headerNameMarketplaceConfirmationLabel={
          languageSelected().header.marketplace.buttonLabel
        }
        headerNameMarketplaceLabel={languageSelected().header.marketplace.label}
        headerNamePricePlaceholder={languageSelected().header.price.placeholder}
        headerNamePriceConfirmationLabel={
          languageSelected().header.price.buttonLabel
        }
        headerNamePriceLabel={languageSelected().header.price.label}
      />
      <Cards
        marketplaceLaunchLabel={
          languageSelected().marketplaceLaunch.call.frequency
        }
        marketplaceLaunchDurationInformation={
          languageSelected().marketplaceLaunch.duration.time
        }
        marketplaceLaunchDurationLabel={
          languageSelected().marketplaceLaunch.duration.label
        }
        marketplaceLaunchReferentInformation={
          languageSelected().marketplaceLaunch.referent.person
        }
        marketplaceLaunchReferentLabel={
          languageSelected().marketplaceLaunch.referent.label
        }
        marketplaceLaunchTopicsLabel={
          languageSelected().marketplaceLaunch.topics.label
        }
        listTopicsMarketplaceLaunch={listTopicsMarketplaceLaunch}
        marketplaceLaunchName={languageSelected().marketplaceLaunch.name}
        maintainRunLabel={languageSelected().maintainRun.call.frequency}
        maintainRunDurationInformation={
          languageSelected().maintainRun.duration.time
        }
        maintainRunDurationLabel={languageSelected().maintainRun.duration.label}
        maintainRunReferentInformation={
          languageSelected().maintainRun.referent.person
        }
        maintainRunReferentLabel={languageSelected().maintainRun.referent.label}
        maintainRunTopicsLabel={languageSelected().maintainRun.topics.label}
        listTopicsMaintainRun={listTopicsMaintainRun}
        maintainRunName={languageSelected().maintainRun.name}
        commercialOperationLabel={
          languageSelected().commercialOperation.call.frequency
        }
        commercialOperationDurationInformation={
          languageSelected().commercialOperation.duration.time
        }
        commercialOperationDurationLabel={
          languageSelected().commercialOperation.duration.label
        }
        commercialOperationReferentInformation={
          languageSelected().commercialOperation.referent.person
        }
        commercialOperationReferentLabel={
          languageSelected().commercialOperation.referent.label
        }
        commercialOperationTopicsLabel={
          languageSelected().commercialOperation.topics.label
        }
        listTopicsCommercialOperation={listTopicsCommercialOperation}
        commercialOperationName={languageSelected().commercialOperation.name}
        trainingLabel={languageSelected().training.call.frequency}
        trainingDurationInformation={languageSelected().training.duration.time}
        trainingDurationLabel={languageSelected().training.duration.label}
        trainingReferentInformation={
          languageSelected().training.referent.person
        }
        trainingReferentLabel={languageSelected().training.referent.label}
        trainingTopicsLabel={languageSelected().training.topics.label}
        listTopicsTraining={listTopicsTraining}
        trainingName={languageSelected().training.name}
        timePlaceholder={languageSelected().cards.duration.placeholder}
        numberPlaceholder={languageSelected().cards.callPlaceholder}
        timeOptions={timeOptions}
      />
    </>
  );
}
