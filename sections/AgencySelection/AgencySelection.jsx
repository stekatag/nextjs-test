import {
  StyledAgencySelection,
  StyledAgencyHeaderWrapper,
  StyledAgencySubheading,
  StyledAgencyImageWrapper,
  StyledAgencyImageInnerWrapper,
  StyledAgencyMainContainer,
  StyledAgencyMain,
  StyledAgencyCardsWrapper,
} from "./elements";
import { StyledSectionHeading } from "../../components/Typography/elements";
import { Card } from "../../collections/Card/Card";
import Image from "next/image";

export const AgencySelection = ({ image, agencyCards }) => {
  return (
    <StyledAgencySelection>
      {/* header with heading and subheading */}
      <StyledAgencyHeaderWrapper>
        <StyledSectionHeading>Managed agency selection</StyledSectionHeading>
        <StyledAgencySubheading>
          Strenghten your onboarding process
        </StyledAgencySubheading>
      </StyledAgencyHeaderWrapper>
      {/* main content */}
      <StyledAgencyMainContainer>
        <StyledAgencyMain>
          <StyledAgencyImageWrapper>
            <StyledAgencyImageInnerWrapper>
              <Image
                layout="responsive"
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
              />
            </StyledAgencyImageInnerWrapper>
          </StyledAgencyImageWrapper>
          {/* agency cards */}
          <StyledAgencyCardsWrapper>
            {agencyCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </StyledAgencyCardsWrapper>
        </StyledAgencyMain>
      </StyledAgencyMainContainer>
    </StyledAgencySelection>
  );
};
