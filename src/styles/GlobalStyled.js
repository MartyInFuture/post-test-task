import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
ul{
  list-style: none;
  padding: 0;
  margin: 0;
}

button{
  display: block;
}

a{
  text-decoration: none;
  color: inherit
}

textarea{
  resize: none;
}

p,h1, h2, h3, h4, h5, h6{
  padding: 0;
  margin: 0;
}
`;
