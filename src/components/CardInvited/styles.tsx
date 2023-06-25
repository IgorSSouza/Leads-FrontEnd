import styled from "styled-components";

export const CardInvitedStyle = styled.div`
  width: 100%;
  height: 250px;
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
`;

export const ContentTree = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 5px;
  margin-bottom: 5px;

  > p {
    color: gray;
    margin-left: 15px;
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

export const ContentFour = styled.div`
    display: flex;
    
    > p {
    color: gray;
    margin-left: 25px;
    font-size: 15px;
    margin-top: 18px;
    margin-bottom: 0;

    >span{
        font-weight: bold;
    }
  }
`;

export const ButtonAccept = styled.button`
  width: 10%;
  border: none;
  color: white;
  font-size: 15px;
  background-color: #f77d0bf6;
  padding: 8px;
  position: relative;
  margin-top: 10px;
  margin-left: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #d36702f6;
  }

  &:hover{
    background-color: #d36c0cf6;
  }
`;

export const ButtonDecline = styled.button`
  width: 10%;
  border: none;
  color: #777676;
  font-weight: bolder;
  font-size: 15px;
  background-color: #ebebebf6;
  padding: 8px;
  position: relative;
  margin-top: 10px;
  margin-left: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: 0.5s;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #c2c2c2f6;
  }

  &:hover{
    background-color: #cececef6;
  }
`;


