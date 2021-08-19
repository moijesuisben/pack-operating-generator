import React from "react";
import BlockHeaderInput from "./BlockHeaderInput/BlockHeaderInput";
import BlockHeaderSelect from "./BlockHeaderSelect/BlockHeaderSelect";
import useStylesBlockHeader from "./useStylesBlockHeader";

export default function BlockHeader({
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
  headerNamePriceConfirmationLabel
}) {
  const classes = useStylesBlockHeader();

  return (
    <div className={classes.blockHeader_container}>
      <BlockHeaderSelect
        label={headerEngagementLabel}
        engagement={engagement}
        setEngagement={setEngagement}
        engagementOptions={engagementOptions}
        engagementPlaceholder={engagementPlaceholder}
      />
      <BlockHeaderInput
        label={headerNameMarketplaceLabel}
        placeholder={headerNameMarketplacePlaceholder}
        ConfirmationLabel={headerNameMarketplaceConfirmationLabel}
      />
      <BlockHeaderInput
        label={headerNamePriceLabel}
        placeholder={headerNamePricePlaceholder}
        ConfirmationLabel={headerNamePriceConfirmationLabel}
      />
    </div>
  );
}
