import React from "react";
import styled from "@emotion/styled";
import { Spring, animated } from "react-spring/renderprops";
import { withGesture } from "react-with-gesture";

const SlideContainer = styled.div`
  position: absolute;
  height: 70%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

const SlideCard = styled.div`
  position: relative;
  max-width: 90%;
  min-width: 30%;
  width: 100vw;
  height: 100%;
  background: #666;
  font-size: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: 50% 50%;
`;

function Slide({
  content,
  url,
  offsetRadius,
  index,
  animationConfig,
  moveSlide,
  delta,
  down,
  up,
}) {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = (i) => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${
          offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
        }%`,
        opacity: distanceFactor * distanceFactor,
      }}
      config={animationConfig}
    >
      {(style) => (
        <SlideContainer
          style={{
            ...style,
            zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2),
          }}
        >
          <SlideCard onClick={() => moveSlide(offsetFromMiddle)}>
            {/* {content} */}
            <img src={url} />
            <div className="absolute z-20 w-full min-h-[100px] max-h-[240px] bottom-0 px-4 pb-4 pt-2 text-white text-lg bg-slate-700/65">
              {content}
            </div>
          </SlideCard>
        </SlideContainer>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);
