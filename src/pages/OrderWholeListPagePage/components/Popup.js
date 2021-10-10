import React,{useState} from "react"
import styled from "styled-components"


const PopupWrapper = styled.div`
  position:fixed;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);
  width:300px;
  padding:40px 0;
  background:#fff;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`
const PopupTitle = styled.h2`
  margin:0;
  padding-bottom:15px;
`
const YesButton = styled.button`
  font-size: 18px;
  background: #C9BA98;
  color:#fff;
  padding:5px 20px;
  border:none;
  border-radius: 8px;
  cursor:pointer;
`
const CancelButton = styled(YesButton)`
color:#917856;
  background: #fff;
  border:1px #C9BA98 solid;
  margin-left:20px;
`

export default function Popup({handleClosePopup}){
  return(
    <PopupWrapper>
      <PopupTitle>是否確定？</PopupTitle>
      <div>
        <YesButton onClick={handleClosePopup}>是</YesButton>
        <CancelButton onClick={handleClosePopup}>取消</CancelButton>
      </div>
    </PopupWrapper>
  )
}