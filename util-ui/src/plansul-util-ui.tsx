import React from "react";
import { navigateToUrl } from "single-spa";
interface IPropsNavigate {
  path: string;
  children?: React.ReactNode;
}

export const Navigate: React.FC<IPropsNavigate> = (props: IPropsNavigate) => {
  function redirect(e: React.MouseEvent<HTMLButtonElement>) {
    navigateToUrl(e.currentTarget.name);
  }
  return (
    <>
      <button name={props.path} onClick={redirect}>
        {props.children}
      </button>
    </>
  );
};
