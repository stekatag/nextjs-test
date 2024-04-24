import {
  StyledAgencyImageWrapper,
  StyledAgencyImageInnerWrapper,
  StyledAgencyMainContainer,
  StyledAgencyMain,
} from "./elements";
import { AgencyCardsWrapper } from "../../components/AgencyCardsWrapper/AgencyCardsWrapper";
import Image from "next/image";

const agencyCards = [
  {
    id: "ac1",
    title: "Brief",
    description:
      "Complete brief writing or simple guidance on what to include, we've got you covered.",
    icon: "/icons/list.svg",
    href: "https://goodbrief.io/",
  },
  {
    id: "ac2",
    title: "Search",
    description:
      "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
    icon: "/icons/profits.svg",
    href: "https://www.search.co.uk/",
  },
  {
    id: "ac3",
    title: "Pitch",
    description:
      "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    icon: "/icons/meeting.svg",
    href: "https://hbr.org/2020/05/what-makes-a-great-pitch",
  },
];

export const AgencyMainWrapper = ({ image }) => {
  return (
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
        <AgencyCardsWrapper agencyCards={agencyCards} />
      </StyledAgencyMain>
    </StyledAgencyMainContainer>
  );
};
