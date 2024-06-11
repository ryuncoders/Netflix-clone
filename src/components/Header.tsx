import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useEffect } from "react";

const Wrapper = styled(motion.nav)`
  font-size: 16px;
  color: white;
  width: 100%;
  padding-bottom: 3%;
  height: 0;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 10px;
`;
const Contents = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 3vw;
`;
const Logo = styled.div`
  font-size: ${(props) => props.theme.fontSize.lg};
  color: red;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  margin: 0 2rem;
  &:last-child {
    margin-left: auto;
    margin-right: 0;
  }
`;
const Box = styled.li`
  margin-right: 1em;
  font-size: 0.8vw;
`;

const navVariants = {
  scroll: {
    background: "linear-gradient(rgba(0,0,0,1), rgba(0,0,0,1))",
  },
  top: {
    background: "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0))",
  },
};

function Header() {
  const { scrollY } = useScroll();
  const navAnimation = useAnimation();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Wrapper
      variants={navVariants}
      transition={{ duration: 0.3 }}
      animate={navAnimation}
      initial={"top"}
    >
      <Contents>
        <Logo>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="5vw"
            viewBox="0 0 512 138"
          >
            <rect width="512" fill="none" />
            <path
              fill="rgb(229, 9, 20)"
              d="M340.657 0v100.203q18.54.861 36.98 2.09v21.245a1822 1822 0 0 0-58.542-2.959V0zM512 .012l-28.077 65.094l28.07 72.438l-.031.013a1789 1789 0 0 0-24.576-3.323l-15.763-40.656l-15.913 36.882a1816 1816 0 0 0-22.662-2.36l27.371-63.43L435.352.013h23.325l14.035 36.184L488.318.012zM245.093 119.526V.011h60.19v21.436h-38.628v27.78h29.227v21.245h-29.227v49.05zM164.58 21.448V.01h66.69v21.437h-22.565v98.66c-7.197.19-14.386.412-21.56.683V21.448zM90.868 126.966V.014h59.89v21.435h-38.331v29.036c8.806-.113 21.327-.24 29.117-.222V71.51c-9.751-.12-20.758.134-29.117.217v32.164a1848 1848 0 0 1 38.331-2.62v21.247a1816 1816 0 0 0-59.89 4.45M48.571 77.854L48.57.01h21.562v128.96q-11.823 1.216-23.603 2.584L21.56 59.824v74.802q-10.8 1.406-21.56 2.936V.012h20.491zm346.854 46.965V.012h21.563V126.6c-7.179-.64-14.364-1.23-21.563-1.78"
            />
          </svg>
        </Logo>
        <Ul>
          <Box>
            <Link to="/">HOME</Link>
          </Box>
          <Box>
            <Link to="/upcoming">UPCOMING</Link>
          </Box>
        </Ul>
        <Ul>
          <Box>
            <svg
              fill="white"
              width="1vw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </Box>
          <Box>
            <svg
              fill="white"
              width="1vw"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v25.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm0 96c61.9 0 112 50.1 112 112v25.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V208c0-61.9 50.1-112 112-112zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3z" />
            </svg>
          </Box>
        </Ul>
      </Contents>
    </Wrapper>
  );
}

export default Header;
