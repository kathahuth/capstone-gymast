import {createGlobalStyle} from "styled-components";

export default createGlobalStyle`
  *{
  box-sizing: border-box;
  }

  html, body{
  margin: 0;
  font-family: Futura;
  color: #fafafa;  
  }
  
  :root{
    --primary-color: #1f1f1f;
    --secondary-color: #43474c;
  }
`