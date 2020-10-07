import { Container } from "@material-ui/core";
import Hero from "../../Component/Reuseable/Hero";

const Location = () => {
  return (
    <>
      <Container>
        <Hero
          title="Location"
          p1content="IQ is a multinational group of companies employing more than 40 staff in 5 countries. We currently have product sales, support, and development staff in Australia, New Zealand, Canada, the UK and USA."
          p2content="Please contact us to see for yourself why customers across the globe trust printIQ to run their business, increase their profits, and reduce their costs. With printIQ you get far more than just an MIS."
          p3content="Why not arrange a demo for an upcoming show, meet some of the team, and see the future of print in action?"
        />
      </Container>
    </>
  );
};

export default Location;
