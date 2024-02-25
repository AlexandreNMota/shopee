import React from "react";

import { Content } from "./style";
import { SeparatorProps } from "./type";

export const Separator: React.FC<SeparatorProps> = (props: SeparatorProps) => (
  <Content {...props} />
);
