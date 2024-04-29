// The Card to be exported goes here
import Image from "next/image";
import { StyledSectionParagraph } from "../../components/Typography/elements";
import { CardWrapper, CardIconWrapper, CardInfo, CardTitle } from "./elements";

export const Card = ({ title, icon, href, description }) => {
  description = description.split("*");

  return (
    <CardWrapper href={href} target="_blank">
      <CardIconWrapper>
        <Image src={icon} alt={title} width={50} height={50} />
      </CardIconWrapper>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <StyledSectionParagraph>
          {description.map((text, index) => (
            <>{index % 2 === 1 ? <strong key={index}>{text}</strong> : text}</>
          ))}
        </StyledSectionParagraph>
      </CardInfo>
    </CardWrapper>
  );
};
