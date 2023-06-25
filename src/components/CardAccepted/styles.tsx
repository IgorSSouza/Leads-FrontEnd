import styled from "styled-components";

export const CardAcceptedStyle = styled.div`
  width: 100%;
  height: 230px;
  margin-top: 20px;
  border: none;
  border-style: solid;
  border-width: 1px;
  border-color: #dfdfdf;
  background-color: white;
  position: relative;
`;

export const ContentOne = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 10px;
  margin-bottom: 5px;
`;

export const CircleName = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin-left: 2%;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;

  > p {
    margin: 0;
    font-weight: 400;
    font-size: 22px;
    color: white;
  }
`;

export const NameDate = styled.div`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;

  > .Name {
    margin: 0;
    font-weight: 600;
    font-size: 14px;
  }

  > .Date {
    margin: 0;
    font-size: 12px;
    color: gray;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e6e6e6;
`;

export const ContentTwo = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 5px;
  margin-bottom: 5px;

  > svg {
    margin-left: 15px;
    margin-right: 5px;
    color: gray;
    font-size: 18px;
  }
  > p {
    color: gray;
    font-size: 14px;
    margin: 0;
  }

  > .JobId {
    margin-left: 15px;
  }

  > .Price{
    margin-left: 15px;
  }
`;

export const ContentTree = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 5px;
 

  > svg {
    margin-left: 18px;
    margin-top: 5px;
    color: gray;
    font-size: 15px;
  }

  > p {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    color: orange;
  }

  >.Mail{
    margin-top: 7px;
  }
`;

export const ContentFour = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 5px;
  margin-bottom: 5px;

  > p {
    color: gray;
    
    font-size: 14px;
    margin-left: 18px;
  }

  
`;



