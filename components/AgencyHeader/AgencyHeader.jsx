import { SectionSubheading } from "../Typography/SectionSubheading";
import { StyledSectionHeading } from "../Typography/elements";
import { StyledAgencyHeaderWrapper } from "./elements";

export const AgencyHeader = () => {
  return (
    <StyledAgencyHeaderWrapper>
      <StyledSectionHeading>Managed agency selection</StyledSectionHeading>
      <SectionSubheading>Strenghten your onboarding process</SectionSubheading>
    </StyledAgencyHeaderWrapper>
  );
};
