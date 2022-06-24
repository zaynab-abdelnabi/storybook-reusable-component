import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: ${(props) => props.spacing * 0.25}rem;
  flex-wrap: ${(props) => (props.wrap ? "wrap" : "nowrap")};
  flex-direction: ${(props) => props.direction};
`;
