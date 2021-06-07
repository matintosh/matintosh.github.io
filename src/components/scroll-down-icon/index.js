import React from "react";
import "./styles.scss";
export default function ScrollDown({ color = "black", onClick = () => {} }) {
  return (
    <div class="mouse_scroll" style={{ "--color": color }} onClick={onClick}> 
      <div class="mouse">
        <div class="wheel"></div>
      </div>
      <div>
        <span class="m_scroll_arrows unu"></span>
        <span class="m_scroll_arrows doi"></span>
        <span class="m_scroll_arrows trei"></span>
      </div>
    </div>
  );
}
