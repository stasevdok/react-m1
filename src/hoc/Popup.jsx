import { createPortal } from "react-dom";

export default function Popup({ children }) {
  return createPortal(
    children,
    document.getElementById("react-popups")
      ? document.getElementById("react-popups")
      : document.body
  );
}
