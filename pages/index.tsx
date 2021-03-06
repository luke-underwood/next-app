import dayjs from "dayjs";
import Page from "components/page";
import Block from "components/block";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  return (
    <Page>
      <Block as="main">
        <h1>The current time is {dayjs().format("h:mm:ss a")}</h1>
      </Block>
    </Page>
  );
};

export default Home;
