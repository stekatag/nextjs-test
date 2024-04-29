import styled from "styled-components";
import { SectionContainer } from "~/components";
import { SectionSubheading } from "../../components/Typography/SectionSubheading";

export const StyledAgencySelection = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const StyledAgencyHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const StyledAgencySubheading = styled(SectionSubheading)`
  @media screen and (max-width: 1024px) {
    font-size: 1.125rem;
    line-height: 1.5rem;
    padding: 0 1rem;
  }
`;

export const StyledAgencyMainContainer = styled.main`
  background-image: url("/img/background.png");

  @media screen and (max-width: 1024px) {
    background-image: none;
  }
`;

export const StyledAgencyMain = styled(SectionContainer)`
  display: flex;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 4.8rem 2.4rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2.8rem;
    padding: 2.8rem 2.4rem;
  }
`;

export const StyledAgencyImageWrapper = styled.div`
  width: 100%;
  background-image: url("/img/background.png");
  background-size: cover;
  background-position: center;
`;

export const StyledAgencyImageInnerWrapper = styled.div`
  max-width: 25rem;
  width: 100%;
  height: 100%;
  margin-right: auto;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }
`;

export const StyledAgencyCardsWrapper = styled.div`
  display: flex;
  gap: 2.8rem;
  flex-direction: column;
  justify-content: center;
`;
