import styled from "styled-components";
import { SectionContainer } from "~/components";

export const StyledAgencyMainContainer = styled.main`
  background-image: url("/img/background.png");

  @media screen and (max-width: 1024px) {
    background-image: none;
  }
`;

export const StyledAgencyMain = styled(SectionContainer)`
  display: flex;
  gap: 3.6rem;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 4.8rem 2.4rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    padding: 3.6rem 2.4rem;
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
