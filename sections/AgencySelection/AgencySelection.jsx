import { AgencyMainWrapper } from "../../collections/AgencyMainWrapper/AgencyMainWrapper";
import { AgencyHeader } from "../../components/AgencyHeader/AgencyHeader";
import { StyledAgencySelection } from "./elements";

const agencyImageProps = {
  image: { src: "/img/video.png", alt: "", width: 500, height: 798 },
};

export const AgencySelection = () => {
  return (
    <StyledAgencySelection>
      <AgencyHeader />
      <AgencyMainWrapper {...agencyImageProps} />
    </StyledAgencySelection>
  );
};
