/* eslint-disable react/prop-types */
import { ArrowLeft } from '../icons/ArrowLeft';
import { ArrowRight } from '../icons/ArrowRight';

import { useState } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  overflow: hidden;
  width: 100%;
  width: 450px;
  margin: auto;
`;

const SliderWrapper = styled.div`
  white-space: nowrap;
  transition: transform 0.3s ease;
  transform: ${(props) => `translateX(-${props.$activeIndex * 100}%)`};
`;

const Slide = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  transition: transform 0.3s ease-in-out;
`;

const Quote = styled.p`
  font-style: italic;
  text-align: center;
  white-space: normal;
  overflow-wrap: break-word;
  font-weight: 400;
  margin: 0;
`;

const Author = styled.p`
  margin: 50px 0;
  color: #FDE047;
  font-weight: bold;
  font-size: 12px;
  font-weight: 700;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

const DotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Dot = styled.span`
  padding: 5px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
  background: ${(props) => (props.$active ? 'yellow' : 'white')};
`;

const TestimonialSlider = ({ testimonials }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <SliderContainer>
      <SliderWrapper $activeIndex={activeIndex}>
        {testimonials.map((testimonial, index) => (
          <Slide key={index}>
            <Quote>&ldquo;{testimonial.quote}&rdquo;</Quote>
            <Author>{testimonial.author}</Author>
          </Slide>
        ))}
      </SliderWrapper>
      <Navigation>
        <ArrowButton onClick={prevTestimonial}>
          <ArrowLeft />
        </ArrowButton>
        <DotContainer>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              $active={index === activeIndex}
              onClick={() => goToTestimonial(index)}
            />
          ))}
        </DotContainer>
        <ArrowButton onClick={nextTestimonial}>
          <ArrowRight />
        </ArrowButton>
      </Navigation>
    </SliderContainer>
  )
};

export default TestimonialSlider