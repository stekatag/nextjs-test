import { Card } from "../../collections/Card/Card";
import { StyledAgencyCardsWrapper } from "./elements";

export const AgencyCardsWrapper = ({ agencyCards }) => {
  return (
    <StyledAgencyCardsWrapper>
      {agencyCards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </StyledAgencyCardsWrapper>
  );
};
