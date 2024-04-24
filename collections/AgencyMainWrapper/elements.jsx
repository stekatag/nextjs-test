import styled from "styled-components";
import { SectionContainer } from "~/components";

export const StyledAgencyMainContainer = styled.main`
  background-image: url("/img/background.png");
`;

export const StyledAgencyMain = styled(SectionContainer)`
  display: flex;
  gap: 4.8rem;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 4.8rem 2.4rem;
`;

export const StyledAgencyImageWrapper = styled.div`
  max-width: 25rem;
  width: 100%;
  height: 100%;
  margin-right: auto;
`;
