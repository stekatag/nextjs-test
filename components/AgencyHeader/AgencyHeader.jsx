import { StyledSectionHeading } from "../Typography/elements";
import { StyledAgencyHeaderWrapper, StyledAgencySubheading } from "./elements";

export const AgencyHeader = () => {
  return (
    <StyledAgencyHeaderWrapper>
      <StyledSectionHeading>Managed agency selection</StyledSectionHeading>
      <StyledAgencySubheading>
        Strenghten your onboarding process
      </StyledAgencySubheading>
    </StyledAgencyHeaderWrapper>
  );
};
