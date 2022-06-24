import React from "react";
import PropTypes from "prop-types";
import { ButtonBox, ButtonIcon, ButtonText } from "./style";

Button.propTypes = {
  isHovered: PropTypes.bool,
  btncolor: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.any,
  iconLocation: PropTypes.oneOf(["start", "end"]),
};

export default function Button(props) {
  const {
    isHovered = false,
    btncolor = "#620097",
    text = "Submit",
    size,
    onClick,
    className,
    icon,
    iconLocation = "start",
  } = props;
  return (
    <ButtonBox
      size={size}
      onClick={onClick}
      btncolor={btncolor}
      isHovered={isHovered}
      className={className}
    >
      {icon && (
        <ButtonIcon
          isHovered={isHovered}
          iconLocation={iconLocation}
          btncolor={btncolor}
        >
          {icon}
        </ButtonIcon>
      )}
      <ButtonText isHovered={isHovered} btncolor={btncolor}>
        {text}
      </ButtonText>
    </ButtonBox>
  );
}
