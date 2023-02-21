import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPage from "./components/hero/HeroPage";
import LoadingLogo from "./components/LoadingLogo";

AOS.init({
  delay: 1600,
  easing: "ease",
});
const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  color: white;
`;
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  return (
    <AppWrapper>
      <LoadingLogo isLoading={isLoading} />
      <HeroPage />
    </AppWrapper>
  );
};
export default App;
