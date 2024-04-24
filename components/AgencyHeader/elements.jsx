import styled from "styled-components";
import { SectionSubheading } from "../Typography/SectionSubheading";

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
