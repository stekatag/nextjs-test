// Styled elements for the Card go here
import styled from "styled-components";
import { StyledSectionSubheading } from "../../components/Typography/elements";

export const CardTitle = styled(StyledSectionSubheading)`
  width: fit-content;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: border-bottom 150ms; // Optional: for a smooth transition
`;

export const CardWrapper = styled.a`
  display: block;
  border: 3px solid transparent;
  color: unset;
  text-decoration: none;
  background-color: ${({ theme }) => theme.grayF9};
  border-radius: 10px;
  display: flex;
  transition: border 150ms;

  &:hover {
    border: 3px solid ${({ theme }) => theme.main};

    ${CardTitle} {
      color: ${({ theme }) => theme.main};
      text-decoration: underline;
    }
  }
`;

export const CardIconWrapper = styled.div`
  padding: 3rem;

  @media screen and (max-width: 1024px) {
    padding: 2rem;
  }
`;

export const CardInfo = styled.div`
  padding: 1.6rem 1.6rem 1.6rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
