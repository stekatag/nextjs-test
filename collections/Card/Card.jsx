// The Card to be exported goes here
import Image from "next/image";
import { StyledSectionParagraph } from "../../components/Typography/elements";
import { StyledBoldText } from "../../components/Typography/elements";
import { CardWrapper, CardIconWrapper, CardInfo, CardTitle } from "./elements";

// Helper function to wrap bold words
const withBoldText = (text, boldWords) => {
  const regex = new RegExp(`(${boldWords.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    regex.test(part) ? (
      <StyledBoldText key={index}>{part}</StyledBoldText>
    ) : (
      part
    )
  );
};

export const Card = ({ title, description, icon, href }) => {
  // List of words to be bolded in the description
  const boldWords = [
    "brief writing or simple guidance",
    "criteria matching",
    "pitch management",
  ];

  return (
    <CardWrapper href={href} target="_blank">
      <CardIconWrapper>
        <Image src={icon} alt={title} width={100} height={100} />
      </CardIconWrapper>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <StyledSectionParagraph>
          {withBoldText(description, boldWords)}
        </StyledSectionParagraph>
      </CardInfo>
    </CardWrapper>
  );
};
