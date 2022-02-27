import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* reset */
  *{margin:0;padding:0;font:inherit;color:inherit;}
  *,:after, :before {box-sizing:border-box;flex-shrink:0;}
  :root {-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%;cursor:default;line-height:1.5;overflow-wrap:break-word;-moz-tab-size:4;tab-size:4}
  html, body {height:100%;}
  img, picture, video, canvas, svg {display: block;max-width:100%;}
  button {background:none;border:0;cursor:pointer;}
  a {text-decoration:none}
  table {border-collapse:collapse;border-spacing:0}

  /* global */
  body {
   font-size: 16px;
  }

  .pagination {
    display: flex;
    padding-left: 0;
    list-style: none;
    border-radius: 3px;
  }

  .justify-content-center {
    justify-content: center!important;
  }

  .page-item.active .page-link {
      z-index: 3;
      color: #fff;
      background-color: #0d6efd;
      border-color: #0d6efd;
  }

  .page-item:not(:first-child) .page-link {
    margin-left: -1px;
  }

  .page-link {
    padding: 0.375rem 0.75rem;
  }

  .page-link {
    position: relative;
    display: block;
    color: #0d6efd;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #dee2e6;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }
`;

export default GlobalStyle;
