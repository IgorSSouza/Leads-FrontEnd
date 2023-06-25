import { FormatContainer, CoursesBox, CoursesTabs, CoursesContent } from "./styles";
import { Container } from "../../styles/GlobalStyles";
import Tab from "../../components/Tabs/Tab";

const Home = () => {
  const tabs = ['Invited', 'Accepted'];
  return (
      <Container>
        <FormatContainer>
          <CoursesBox>
            <CoursesTabs>
              <CoursesContent>

                <Tab tabs={tabs} />

              </CoursesContent>
            </CoursesTabs>
          </CoursesBox>
        </FormatContainer>
      </Container>
  );
};

export default Home;
