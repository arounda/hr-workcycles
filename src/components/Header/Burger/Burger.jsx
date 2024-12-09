import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
  width: 50px;
  height: 50px;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  border-radius: 50%;
  border: 1px solid;
  border-color: ${(props) => (
    (props.$isMenuOpen || props.$isHeaderWhite)
      ? "var(--primary)"
      : "var(--white)"
  )};
  cursor: pointer;
  transition: all var(--btn-hover-transition);

  &:hover {
    background-color: var(--white);
  }

  &:hover div {
    background-color: var(--black);
  }

  &:focus {
    outline: none;
  }

  div {
    width: 16px;
    height: 1px;
    background: ${(props) => (
      (props.$isMenuOpen || props.$isHeaderWhite)
        ? "var(--dark-v2)"
        : "var(--white)"
    )};
    border-radius: 2px;
    transition: all 0.3s linear;
    position: relative;


    &:first-child {
      transform: ${({ $isMenuOpen }) => (
        $isMenuOpen
          ? "translate(0px, 4px) rotate(45deg)"
          : "rotate(0) translate(0)"
      )};
    }

    &:nth-child(2) {
      opacity: ${({ $isMenuOpen }) => ($isMenuOpen ? "0" : "1")};
      transform: ${({ $isMenuOpen }) => (
        $isMenuOpen
          ? "translateX(10px)"
          : "translateX(0)"
      )};
    }

    &:nth-child(3) {
      transform: ${({ $isMenuOpen }) => (
        $isMenuOpen
          ? "translate(0px, -4px) rotate(-45deg)"
          : "rotate(0) translate(0)"
      )};
    }
  }`;

const Burger = ({ isMenuOpen, setIsMenuOpen, isHeaderWhite }) => {
  return (
    <StyledBurger
      $isMenuOpen={isMenuOpen}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      $isHeaderWhite={isHeaderWhite}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
