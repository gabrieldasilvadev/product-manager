import styled from 'styled-components';

export const CustomDiv = styled.div`
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  padding: 20px;
  margin: ${(props) => props.margin};
  margin-top: ${(props) => props.marginTop};
`;

export const Navbar = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  padding: 0 20px;

  li {
    float: left;

    :last-child {
      float: right;
    }
  }

  li a {
    display: block;
    color: #fff;
    text-decoration: none;
    text-align: center;
    background-color: #333;
    padding: 20px;

    :hover {
      background-color: #111;
    }
  }
`;
