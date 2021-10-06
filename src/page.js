import { Card } from "./components/Card";
import { Globe } from "./components/image/Globe";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  return isTablet ? children : null;
};

const MainBody = ({ n }) => (
  <>
    <Desktop>
      <main className="flex justify-evenly mt-10">
        <Globe planet={n}></Globe>
        <Card planet={n}></Card>
      </main>
    </Desktop>
    <Mobile>
      <main className="flex justify-evenly flex-col mt-10">
        <Globe planet={n} m="mx-auto"></Globe>
        <Card planet={n} m="mx-auto"></Card>
      </main>
    </Mobile>
  </>
);

export default MainBody;
