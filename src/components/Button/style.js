import styled from "styled-components";

export const sizeSwitch = (props) => {
  switch (props.size) {
    case "large":
      return `
          font-size: 1.063rem;
          height: 38px;
          @media (max-width:575px){
            font-size: 16px;
            height: 32px;
          }
          `;
    case "medium":
      return `
          font-size: 0.938rem;
          height: 28px;
          @media (max-width:575px){
            font-size: 14px;
            height: 24px;
          }
          `;
    case "small":
      return `
          font-size: 0.813rem;
          height: 20px;
          @media (max-width:575px){
            font-size: 12px;
            height: 16px;
          }
          `;
    default:
      return `
          font-size: 16px;
          height: 40px;
          @media (max-width:575px){
            font-size: 16px;
            height: 32px;
          }
          `;
  }
};

export const ButtonText = styled.span`
  ${(props) =>
    props.isHovered
      ? `
        color: ${props.btncolor};
        `
      : `
        color: #fff;
   `}
`;

export const ButtonBox = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 0 5px;
  transition: all 0.5s ease;
  cursor: pointer;
  font-weight: bold;
  z-index: 0;
  position: relative;

  ${(props) => sizeSwitch(props)}

  ${(props) =>
    props.isHovered
      ? `
      background: transparent;
      overflow: hidden;
      border: 2px solid ${props.btncolor};
      &:hover:after {
        width: 100%;
      }
      &:hover span{
        color: #fff;
      }
      &:hover path{
        fill: #fff;
      }
      &:after {
        content: "";
        position: absolute;
        z-index: -1;
        transition: all 0.5s ease;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background: ${props.btncolor};
      }
    `
      : `
      border: 2px solid ${props.btncolor};
      background-color: ${props.btncolor};
      &:hover,
      &:focus {
        filter: brightness(90%);
      }
      &:hover path{
        fill: #fff;
      }
    `}
`;

export const ButtonIcon = styled.div`
  position: relative;
  display: flex;
  ${(props) =>
    props.iconLocation && props.iconLocation === "end"
      ? `
      order: 2;
      margin-left: 8px;
    `
      : `
      margin-right: 8px;
    `}

  ${(props) =>
    props.isHovered
      ? `
        path{
          fill: ${props.btncolor};
        }
        `
      : `
        path{
          fill: #fff ;
        }
   `}
`;
