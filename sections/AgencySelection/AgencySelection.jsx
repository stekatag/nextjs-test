import { AgencyMainWrapper } from "../../collections/AgencyMainWrapper/AgencyMainWrapper";
import { AgencyHeader } from "../../components/AgencyHeader/AgencyHeader";
import { StyledAgencySelection } from "./elements";

const agencyImageProps = {
  image: { src: "/img/video.png", alt: "", width: 658, height: 1050 },
};

export const AgencySelection = () => {
  return (
    <StyledAgencySelection>
      <AgencyHeader />
      <AgencyMainWrapper {...agencyImageProps} />
    </StyledAgencySelection>
  );
};
