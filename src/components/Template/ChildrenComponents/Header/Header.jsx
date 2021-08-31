import React from "react";
import Select from "react-select";
import clsx from "clsx";
import BlockHeader from "./BlockHeader/BlockHeader";
import useStylesHeader from "./useStylesHeader";
import PrintButton from "./PrintButton/PrintButton";

export default function Header({
  printButtonLabel,
  languageOptions,
  languageDefaultValue,
  languageOnChange,
  languagePlaceholder,
  headerTitle,
  headerDescription,
  headerEngagementLabel,
  engagement,
  setEngagement,
  engagementOptions,
  engagementPlaceholder,
  headerNameMarketplaceLabel,
  headerNameMarketplacePlaceholder,
  headerNameMarketplaceConfirmationLabel,
  headerNamePriceLabel,
  headerNamePricePlaceholder,
  headerNamePriceConfirmationLabel,
}) {
  const classes = useStylesHeader();

  return (
    <div className={classes.header_container}>
      <PrintButton printButtonLabel={printButtonLabel} />
      {!languageDefaultValue ? (
        <Select
          className={clsx(classes.header_languageSelect, "print_hidden")}
          options={languageOptions}
          defaultValue={languageDefaultValue}
          onChange={languageOnChange}
          placeholder={languagePlaceholder}
        />
      ) : null}
      <h1 className={classes.header_title}>{headerTitle}</h1>
      <h2 className={classes.header_description}>{headerDescription}</h2>
      <BlockHeader
        headerEngagementLabel={headerEngagementLabel}
        engagement={engagement}
        setEngagement={setEngagement}
        engagementOptions={engagementOptions}
        engagementPlaceholder={engagementPlaceholder}
        headerNameMarketplaceLabel={headerNameMarketplaceLabel}
        headerNameMarketplacePlaceholder={headerNameMarketplacePlaceholder}
        headerNameMarketplaceConfirmationLabel={
          headerNameMarketplaceConfirmationLabel
        }
        headerNamePriceLabel={headerNamePriceLabel}
        headerNamePricePlaceholder={headerNamePricePlaceholder}
        headerNamePriceConfirmationLabel={headerNamePriceConfirmationLabel}
      />
    </div>
  );
}
