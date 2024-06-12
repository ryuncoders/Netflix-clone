import styled from "styled-components";
import Header from "../components/Header";

const Wrapper = styled.div`
  height: 300vh;
  background-color: rgba(0, 0, 0, 0.2);
`;
const Contents = styled.div`
  background-color: black;
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: red;
`;
const Span = styled.span`
  font-size: 10vmin;
  color: white;
`;

function Home() {
  return (
    <Wrapper>
      <Contents>
        <Content>
          <Header />
          <Span>Hello World</Span>
        </Content>
      </Contents>
    </Wrapper>
  );
}

export default Home;
