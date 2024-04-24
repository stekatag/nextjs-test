import {
  StyledAgencyImageWrapper,
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
    icon: "",
  },
  {
    id: "ac2",
    title: "Search",
    description:
      "In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting.",
    icon: "",
  },
  {
    id: "ac3",
    title: "Pitch",
    description:
      "Comprehensive pitch management, including comms, diary management and pitch hosting.",
    icon: "",
  },
];

export const AgencyMainWrapper = ({ image }) => {
  return (
    <StyledAgencyMainContainer>
      <StyledAgencyMain>
        <StyledAgencyImageWrapper>
          <Image
            layout="responsive"
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </StyledAgencyImageWrapper>
        <AgencyCardsWrapper agencyCards={agencyCards} />
      </StyledAgencyMain>
    </StyledAgencyMainContainer>
  );
};
