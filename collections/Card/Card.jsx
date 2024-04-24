// The Card to be exported goes here
import Image from "next/image";
import { StyledSectionParagraph } from "../../components/Typography/elements";
import { CardWrapper, CardIconWrapper, CardInfo, CardTitle } from "./elements";

export const Card = ({ title, description, icon, href }) => {
  return (
    <CardWrapper href={href} target="_blank">
      <CardIconWrapper>
        <Image src={icon} alt={title} width={100} height={100} />
      </CardIconWrapper>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <StyledSectionParagraph>{description}</StyledSectionParagraph>
      </CardInfo>
    </CardWrapper>
  );
};
