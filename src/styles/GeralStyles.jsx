import styled from "styled-components";

export const CustomDiv = styled.div`
  width: ${props => props.width};
  border: ${props => props.border};
  padding: 20px;
  margin: ${props => props.margin};
  margin-top: ${props => props.marginTop};
`;