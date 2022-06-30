import {useRef, useState} from 'react'

function App(){

  const nameRef = useRef()
  const mailRef = useRef()
  const telRef = useRef()
  const dateRef = useRef()
  const serverRef = useRef()

  const [checkNam, setCheckNam] = useState(true)
  const [checkMail, setCheckMail] = useState(true)
  const [checkTelephone, setCheckTelephone] = useState(true)
  const [checkDate, setCheckDate] = useState(true)
  const [answer, setAnswer] = useState()
 
  const pattern =new RegExp(/\w{3,10}\s\w{3,10}/)
  const pattern1 =new RegExp(/^.{0}\+\d{12,14}$/)
  const pattern2 =new RegExp(/^[\w-]+@([\w-]+\.)+[\D-]{2,4}/)

function submit(e){
  e.preventDefault()
  console.log(nameRef.current.value)
 
if((!nameRef.current.value)||(!pattern.test(nameRef.current.value))){
  setCheckNam(false)
  }
  
if ((!mailRef.current.value)||(!pattern2.test(mailRef.current.value))){
  setCheckMail(false)
  }
if ((!telRef.current.value)||(!pattern1.test(telRef.current.value))){
  setCheckTelephone(false)
  }
  if (!dateRef.current.value){
    setCheckDate(false)
    }
    console.log(checkNam, checkMail, checkTelephone, checkDate)
if((checkNam)&&(checkTelephone)&&(checkMail)&&(checkDate)){
  callBackendAPI()
  .then(res => {
    setAnswer(res.resp)
    if(res.resp==="ACCEPTED"){
      serverRef.current.className = "serverPlus"
      console.log(res.resp)
  nameRef.current.value = ''
  mailRef.current.value = ''
  telRef.current.value = ''
  dateRef.current.value = ''
  } else if (res.resp){
    serverRef.current.className = "server-"}
    else {alert("Fill ");
  }
})
  .catch(err =>console.log(err))
  } 
}
  function checkingName(e){
    if(e){
    nameRef.current.value =  e.target.value.toUpperCase()
    const whspace = new RegExp(/\s/)
    const numbers = new RegExp(/[\d~!@#$%^&*()_<>?":"./]/)
    let checkName = e.target.value.split(whspace)
    console.log(checkName)
      for(let i of checkName){
        if (i.length>10){
          e.target.value=e.target.value.slice(0,e.target.value.length-1)
        }  
         if(!e.target.value.length){
          setCheckNam(true)
          } 
         if (numbers.test(i)){
           setCheckNam(false)
         } else {setCheckNam(true)}
           console.log(i)
      }
    }
    if(!e.target.value.length){
      setCheckNam(true)
    }
  }

  function handleWhitespace(e) {
      if (e.key === " ") {
        const ty = new RegExp(/\s/)
        const checkName = e.target.value.split(ty)
        console.log(checkName, checkName.length)
        
        for(let i of checkName){
            if (i.length<3) {
              alert ("Too short name");
              setCheckNam(false)
            }
        }
      }
  }   
  
  function checkingEmail(e){
    const dog = new RegExp(/@(.*)/s)
    if(e.target.value.charAt(0)==="@"){
      setCheckMail(false)}else{setCheckMail(true)}
      
    const checkItem = e.target.value.split(dog)
    const re1 = new RegExp(/[~!#$%^&*()_<>?":,.]/)
    const re2 = new RegExp(/[~!@#$%^&*()_<>?":]/)
    console.log(checkItem)
    
      let mailName  = checkItem[0]
      console.log(mailName)
      if(re1.test(mailName)){
        setCheckMail(false)
      }
      let qwe2 =checkItem.slice(1)
      console.log(qwe2, qwe2.length)
      if(qwe2[0]&&qwe2[0].charAt(0)==="."){
         e.target.value=e.target.value.slice(0,e.target.value.length-1)}
      if(qwe2.length>0){
      let qwe3  = qwe2[0].split(/\./)
     
        console.log(qwe3)
      let qwe4= qwe3.slice(0)
      if(re2.test(qwe4)){
        e.target.value=e.target.value.slice(0,e.target.value.length-1)
      }
      let qwe5 = qwe3.slice(1)
      if((/\d/).test(qwe5[0])){
        setCheckMail(false)
      } 
      if(re1.test(qwe5)&&(qwe5[0])){
        alert(("Wrong Email"))
        e.target.value=e.target.value.slice(0,e.target.value.length)
      }          
      console.log(qwe5, qwe5[0])
      if(qwe5[0]){
        if(qwe5[0].length>3){
          alert("Maximum length reached")
        e.target.value=e.target.value.slice(0,e.target.value.length-1)                    
      }
    }
  }   
    if(!e.target.value.length){
    setCheckNam(true)
  }
}

    function countNumb(e){
      if(!e.target.value.length){
        e.target.value ="+375"
      }
    }

    function checkingTel(e){
      console.log(e.target.value.length)
       const ty10 = new RegExp(/^.{0}\+\d+$/)
       if(!ty10.test(e.target.value)){
        setCheckTelephone(false)
       } else {setCheckTelephone(true)}
       if(e.target.value.length>14){
       e.target.value=e.target.value.slice(0,e.target.value.length-1)
       }
      }

      function checkNameInput(){
        const pattern =new RegExp(/\w{3,30}\s\w{3,30}/)
        const patternName1 = new RegExp(/[~!#$%^&*()_<>?":,.]/)
        if(!pattern.test(nameRef.current.value)||patternName1.test(nameRef.current.value)){                    //!!!!!
          setCheckNam(false)
          } 
          if(!nameRef.current.value){
            setCheckNam(true)
          }
        }

        function checkTelInput(){
          const pattern1 =new RegExp(/^.{0}\+\d{12,14}$/)
          if(!pattern1.test(telRef.current.value)){
              setCheckTelephone(false)
          }
          if(!telRef.current.value||telRef.current.value==="+375"){
            setCheckTelephone(true)
          }
        }

        function checkMailInput(){
            const pattern1 =new RegExp(/^[\w-]+@([\w-]+\.)+[\D-]{2,4}/)
                if(mailRef.current.value===''||!pattern1.test(mailRef.current.value)){
                    setCheckMail(false)
               }else {
                    setCheckMail(true)
                }
                if(!mailRef.current.value){
                  setCheckMail(true)
                }
         }           
           
        function checkDateInput(){
          if(dateRef.current.value==="") {
            setCheckDate(false)
          }
          else {
            setCheckDate(true)
          }
          if(!dateRef.current.value){
            setCheckDate(true)
          }
        }

        async function callBackendAPI(){
          const response = await fetch('/t', {
            method: "POST",
              body: JSON.stringify({
              username:nameRef.current.value,
              usermail: mailRef.current.value,
              usernumber:telRef.current.value,
              birthday:dateRef.current.value
          }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
          })
          const body = await response.json()
         
          if (response.status !== 200) {
            throw Error(body.message) 
          }
          return body;
        };
      return(   
        <form className="obratnuj-zvonok" process ="/t" autoComplete="off" method='post' onSubmit = {submit}>
        <div className="form-zvonok"> 
          <div>
            <label>Имя <span>*</span></label>
            <input type='text' name='username' className={(checkNam)?"correct1":"warning1"} ref = {nameRef} onChange={checkingName}  onKeyPress= {handleWhitespace} onBlur = {checkNameInput}/>
            <div className = {(checkNam)?"correct name":"warning1 name"}>Incorrect symbol or length</div> 
          </div>
          <div>
            <label>E-mail <span>*</span></label>
            <input type='text' name='usermail' className={(checkMail)?"correct1":"warning1"} ref = {mailRef} onChange={checkingEmail} onBlur = {checkMailInput}/>
            <div className = {(checkMail)?"correct mail":"warning1 mail"}>Incorrect symbol or length</div> 
          </div>
          <div>
            <label>Номер телефона (с кодом) <span>*</span></label>
            <input type='text' name='usernumber' className={(checkTelephone)?"correct1":"warning1"} ref = {telRef} placeholder = "+375 xxXX xxXXXXX" /*required /*pattern = "\d+"*/onFocus = {countNumb} onChange  = {checkingTel} onBlur = {checkTelInput}/>
          </div>
          <div>
            <label>Дата рождения <span>*</span></label>
            <input type='date' name='birthday' className={(checkDate)?"correct1":"warning1"} ref = {dateRef} onBlur = {checkDateInput}/>
          </div>
          <div>
            <label>Сообщение</label>
            <textarea className = "text" type='text' name='question'/>
          </div>
          <input className="bot-send-mail" type='submit' value='Послать заявку'/>
          </div>
          <div ref = {serverRef} className = "justserver">{answer}</div>
        </form>
      );
}

export default App;
