import React, { ReactElement, FunctionComponent } from "react";

import { IconsType } from "./types";

import Copy from "./icons/copy";
import Logo from "./icons/logo";

const iconsMap = new Map<IconsType, FunctionComponent<IconProps>>([
  [IconsType.copy, Copy],
  [IconsType.logo, Logo],
]);

export const getIcons = (
  icons: IconsType,
  iconsProp?: IconProps
): ReactElement<IconProps> | null => {
  const IconComponent = iconsMap.get(icons);
  if (IconComponent) {
    return <IconComponent {...iconsProp} />;
  } else {
    console.error("Icon not found");
    return null;
  }
};

export interface IconProps {
  className?: string;
  pathClassName?: string;
}
