import  { createGlobalStyle }  from  'styled-components';



export const colors = {
    primary: "lightblue",
    secondary: "#fff",
    tertiary: "#f5f5f5",
    background: "#000",
}



const  GlobalStyle  =  createGlobalStyle`

    
    body  {
        margin:  0;
        font-family:  -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing:  antialiased;
        -moz-osx-font-smoothing:  grayscale;
        font-size: 62.5%;
        overflow-x: hidden;
        min-height: 100vh;
        position: relative;
        ${props => props.modal ? "overflow:hidden;" : ""} // modal actief = overflow hidden 

    }


    h1, h2, h3, h4 {
        text-shadow: 1px 1px #2b2b28;
        color: white;

       
  }
  @media (max-width: 500px) {
         h1 {
            font-size: 
            1.5rem;
         }
       

  }
    

    a, a:visited, a:active, a:link {

        text-decoration: none;
        cursor: pointer;
        color: white;

    }

   
 

    

    
    
`;

export  default GlobalStyle;