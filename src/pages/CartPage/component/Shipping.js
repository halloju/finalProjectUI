import { useState } from "react"
import styled from "styled-components"
import numeric2 from '../../../components/img/icon/numeric2.svg'
import cash from '../../../components/img/icon/cash.svg'
import card from '../../../components/img/icon/card.svg'



const Container = styled.div`
  margin-top:30px;
  border: 1px solid #9CA4AA;
  padding:16px 22px;
  font-size:18px;
`
const Header = styled.div`
  display:flex;
  align-items:center;
`
const Title = styled.div`
  margin-left:12px;
`
const Body = styled.div``
const Form = styled.form`
  margin-top:20px;
`
const FormItemWrapper = styled.div`
  margin-top:20px;
  padding-bottom:22px;
  border-bottom:2px solid #D7DADC;

  ${props => props.$isInlineFormItem && `
    padding: 20px;
    background: #F0F1F3;
    border-bottom:0;
  `}

`

const SubTitle = styled.div`
  margin-top:16px;
  color:#818B92;
`
const FormContent = styled.div`
  margin-top:12px;
`
const FormRadioLabel = styled.label`
  display:inline-block;
  border: 1px solid #9CA4AA;
  padding: 6px 12px;
  color:#000;
  & + & {
    margin-left:20px;
  }
  @media screen and (max-width: 698px) {
    & + & {
      margin-top:20px;
      margin-left:0px;
    }
    min-width:100%;
  }
`
const Span = styled.span`
  margin-left:12px;
  & + & {
    margin-left:20px;
  }
  & img {
    width:25px;
    height:25px;
    vertical-align: bottom
  }


`
const Input = styled.input`
  width:100%;
  border:1px solid #D7DADC;
  margin:0;
  padding:6px 12px;
`
const FormNote = styled.div`
  background:#C4C4C4;
  font-size:16px;
  padding:6px 12px;
  color:#115460;
`
const AdviceText = styled.p`
  color:#115460;
  font-size:16px;

`
const FormInputLabel = styled.label`
  margin:10px 0;
  display:block;
  color:#818B92;
`
const ForCheckboxItem = styled.div`
  @media screen and (max-width: 698px) {
    margin-top:12px;
  }
`
const FormBtn = styled.button`
  margin-top:20px;
  border:none;
  background: #F9897A;
  width:100%;
  font-size:18px;
  color:#fff;
  padding: 12px 0;
`


const payWarnningData = [
  {
    id:1,
    content:'訂單需付款完成視為訂單成立，並進入訂單排程；如下訂後未於取貨或到貨日前三天付款完成，則視為放棄訂單。'
  },
  {
    id:2,
    content:'宅配到貨日期為自由選擇，但請注意每周日、一、三無法到貨，請再確認您選擇的日期是否正確。'
  },
  {
    id:3,
    content:'門市取貨需注意每周二皆為公休日，請注意是否選擇到週二的日期。'
  },
  {
    id:4,
    content:'運費會依照您的訂單自動跳轉，只需要確認訂單內容及選擇日期是否正確即可。'
  },
  {
    id:5,
    content:'僅限自取商品，切勿選擇宅配運送方式。'
  },
  {
    id:6,
    content:'若選擇含運價格商品，請選擇免運的運送方式，並請單獨結帳。'
  },
  {
    id:7,
    content:'餅乾常溫類點心與低溫宅配商品建議分開訂購。'
  }
]

const PayWarnningContent = () => {
  return payWarnningData.map(item => {
    return (
      <p key={item.id}> - {item.content}</p>
    )
  })
}

const Shipping = () => {
  const [selectShippingMethod, setShippingMethod] = useState('blackCat')
  const [selectPayMethod, setSelectPayMethod] = useState('card')
  const [shippingNote, setShippingNote] = useState('')
  const [fullName, setFullName] = useState('楊陽洋')
  const [phone,setPhone] = useState('0912345678')
  const [shippingDate, setShippingDate] = useState('2021-10-10')
  const [address, setAddress] = useState('高雄市岡山區貓貓路三段84巷33號')
  const [last5Number , setLast5Number] = useState('')
  const [invoiceMethod, setInvoiceMethod] = useState('withPackage')
  const [invoiceType, setInvoiceType] = useState('normal')
  const [isSameConsignee, setIsSameConsignee] = useState(true)
  const [isAgreeDataPolicy, setIsAgreeDataPolicy] = useState(true)
  const [isAgreeOrderPolicy, setIsAgreeOrderPolicy] = useState(true)
  const [consignee, setConsignee] = useState(fullName)
  const [consigneePhone, setConsigneePhone] = useState(phone)
  const [consigneeAddress, setConsigneeAddress] = useState(address)


  const RenderShippingForm = () => {
    return (
      <Form>
        <FormItemWrapper>
          <SubTitle>請選擇物流</SubTitle>
          <FormContent>
            <FormRadioLabel>
              <input 
                type="radio" 
                name="shippingMethod" 
                value="blackCat" 
                checked={selectShippingMethod === 'blackCat'}
                readOnly
              />
              <Span>黑貓宅配</Span>
              <Span>NT$225</Span>
            </FormRadioLabel>
          </FormContent>
        </FormItemWrapper>
        <FormItemWrapper>
            <SubTitle>付款方式</SubTitle>
            <FormContent>
              <FormRadioLabel>
                <input 
                  type="radio" 
                  name="payMethod" 
                  value="card" 
                  checked={selectPayMethod === 'card'}
                  onChange={e => setSelectPayMethod(e.target.value)} 
                />
                <Span><img src={card} alt="credit card" /></Span>
                <Span>信用卡</Span>
              </FormRadioLabel>
                <FormRadioLabel>
                <input 
                  type="radio" 
                  name="payMethod"
                  value="ATM"
                  checked={selectPayMethod === 'ATM'}
                  onChange={e => setSelectPayMethod(e.target.value)} 
                />
                <Span><img src={cash} alt="cash" /></Span>
                <Span>ATM</Span>
              </FormRadioLabel>
            </FormContent>
            <SubTitle>備註</SubTitle>
            <FormContent>
              <Input type="text"  name="shipping_note" value={shippingNote} onChange={e => setShippingNote(e.target.value)}/>
            </FormContent>
            <SubTitle>結帳須知</SubTitle>
            <FormContent>
              <FormNote>
                <PayWarnningContent/>
              </FormNote>
            </FormContent>
        </FormItemWrapper>
        <FormItemWrapper>
          <SubTitle>購買人資訊</SubTitle>
             <FormContent>
              <FormInputLabel htmlFor="fullname">姓名</FormInputLabel>
              <Input type="text"  id="fullname" value={fullName} onChange={e => setFullName(e.target.value)}/>
            </FormContent>
            <FormContent>
              <FormInputLabel htmlFor="phone">手機</FormInputLabel>
              <Input type="text"  id="phone" value={phone} onChange={e => setPhone(e.target.value)}/>
              <AdviceText>*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321</AdviceText>
            </FormContent>
           <FormContent>
              <FormInputLabel htmlFor="address">配送地址</FormInputLabel>
              <Input type="text"  id="address" value={address} onChange={e => setAddress(e.target.value)}/>
            </FormContent>
            <FormContent>
              <FormInputLabel htmlFor="shippingDate">配送日期</FormInputLabel>
              <Input type="date"  id="shippingDate" value={shippingDate} onChange={e => setShippingDate(e.target.value)}/>
            </FormContent>
            <FormContent>
              <FormInputLabel htmlFor="last5Number">帳號/信用卡 後五碼</FormInputLabel>
              <Input type="number"  id="last5Number" value={last5Number} onChange={e => setLast5Number(e.target.value)}/>
            </FormContent>
        </FormItemWrapper>
        <FormItemWrapper>
            <SubTitle>隨貨附發票?</SubTitle>
            <FormContent>
              <FormRadioLabel>
                <input 
                  type="radio" 
                  name="invoice" 
                  value="withPackage" 
                  checked={invoiceMethod === 'withPackage'}
                  onChange={e => setInvoiceMethod(e.target.value)} 
                />
                <Span>是</Span>
              </FormRadioLabel>
                <FormRadioLabel>
                <input 
                  type="radio" 
                  name="invoice"
                  value="donate"
                  checked={invoiceMethod === 'donate'}
                  onChange={e => setInvoiceMethod(e.target.value)} 
                />
                <Span>捐贈</Span>
              </FormRadioLabel>
            </FormContent>
            <SubTitle>發票類型</SubTitle>
            <FormContent>
              <FormRadioLabel>
                <input 
                  type="radio" 
                  name="inVoiceType" 
                  value="normal" 
                  checked={invoiceType === 'normal'}
                  onChange={e => setInvoiceType(e.target.value)} 
                />
                <Span>二聯式</Span>
              </FormRadioLabel>
                <FormRadioLabel>
                <input 
                  type="radio" 
                  name="inVoiceType"
                  value="withCompanyNum"
                  checked={invoiceType === 'withCompanyNum'}
                  onChange={e => setInvoiceType(e.target.value)} 
                />
                <Span>開立統編</Span>
              </FormRadioLabel>
              <SubTitle>發票須知</SubTitle>
              <FormContent>
                <FormNote>
                  <h3>
                    依統一發票使用辦法規定
                    </h3>
                    <p>
                    依統一發票使用辦法規定：個人(二聯式)發票一經開立，無法更改或改開公司戶(三聯式)發票。請務必確認選用之電子發票載具代碼是否正確，一經開立不得要求更改。
                  </p>
                </FormNote>
              </FormContent>
            </FormContent>
        </FormItemWrapper>
        <FormItemWrapper>
            <SubTitle>收件人資訊</SubTitle>
            <FormContent>
              <FormRadioLabel>
                <input 
                  type="radio" 
                  name="consignee" 
                  value={isSameConsignee} 
                  checked={isSameConsignee}
                  onChange={e => setIsSameConsignee(!isSameConsignee)} 
                />
                <Span>同購買人</Span>
              </FormRadioLabel>
                <FormRadioLabel>
                <input 
                  type="radio" 
                  name="consignee"
                  value={!isSameConsignee}
                  checked={!isSameConsignee}
                  onChange={e => setIsSameConsignee(!isSameConsignee)} 
                />
                <Span>收件與購買不同人</Span>
              </FormRadioLabel>
              {!isSameConsignee && (
                <FormItemWrapper $isInlineFormItem={true}>
                  <FormContent >
                    <FormInputLabel htmlFor="consignee">收件人姓名</FormInputLabel>
                    <Input type="text"  id="consignee"  onChange={e => setConsignee(e.target.value)}/>
                  </FormContent>
                  <FormContent>
                    <FormInputLabel htmlFor="consigneePhone">手機</FormInputLabel>
                    <Input type="text"  id="consigneePhone" onChange={e => setConsigneePhone(e.target.value)}/>
                    <AdviceText>*取貨通知將以此電話聯繫，請勿加入任何空格或符號，使用超商取貨請務必填寫10碼手機，如：0987654321</AdviceText>
                  </FormContent>
                <FormContent>
                    <FormInputLabel htmlFor="consigneeAddress">配送地址</FormInputLabel>
                    <Input type="text"  id="consigneeAddress" onChange={e => setConsigneeAddress(e.target.value)}/>
                  </FormContent>
                </FormItemWrapper>
              )}
        


              <SubTitle>收件人資訊預覽</SubTitle>
              <FormContent>
                <FormNote>
                  <div>收件人: <span>{consignee}</span></div>
                  <div>聯絡電話: <span>{consigneePhone}</span></div>
                  <div>收件地址: <span>{consigneeAddress}</span></div>
                </FormNote>
              </FormContent>
            </FormContent>
        </FormItemWrapper>
        <FormItemWrapper>
          <FormContent>
              <ForCheckboxItem>
                <input 
                  type="checkbox" 
                  name="dataPolicy" 
                  value={isAgreeDataPolicy}
                  checked={isAgreeDataPolicy}
                  onChange={e => setIsAgreeDataPolicy(!isAgreeDataPolicy)} 
                />
                <Span>同意會員責任規範及個資聲明與商家會員條款</Span>
              </ForCheckboxItem>
                <ForCheckboxItem>
                <input 
                  type="checkbox" 
                  name="orderPolicy"
                  value={isAgreeOrderPolicy}
                  checked={isAgreeOrderPolicy}
                  onChange={e => setIsAgreeOrderPolicy(!isAgreeOrderPolicy)} 
                />
                <Span>為保障彼此之權益，賣家在收到您的訂單後仍保有決定是否接受訂單及出貨與否之權利</Span>
              </ForCheckboxItem>
            </FormContent>
        </FormItemWrapper>
          <FormBtn type="submit">立即結帳</FormBtn>

      </Form>
    )
  }

  return (
    <Container>
     <Header>
        <div><img src={numeric2} alt="shopping shipping cotent" /></div>
        <Title>付款運送內容</Title>
      </Header>
      <Body>
        <RenderShippingForm/>
      </Body>
    </Container>
  )
}

export default Shipping