import {useRef, useState} from 'react'

function App(){

  const nameRef = useRef()
  const mailRef = useRef()
  const telRef = useRef()
  const dateRef = useRef()

  const [checkName, setCheckName] = useState(true)
  const [checkMail, setCheckMail] = useState(true)
  const [checkTelephone, setCheckTelephone] = useState(true)
  const [checkDate, setCheckDate] = useState(true)
 
function submit(e){
  e.preventDefault()
  console.log(nameRef.current.value)
 const patternName = new RegExp(/(\w{3,10}\s\w{3,10})/)
 const patternMail = new RegExp(/^[\w-]+@([\w-]+)+[\w-]{2,4}$/)
 const patternTel = new RegExp((/(\d{2,4}-\d{7})/))

if(!patternName.test(nameRef.current.value)){
  alert("Name")
}
if (!patternMail.test(mailRef.current.value)){
  alert("Mail");
}
if (!patternTel.test(telRef.current.value)){
  alert("Teil");}
}

  function checkingName(e){
    if(e){
      nameRef.current.value =  e.target.value.toUpperCase()
     const whspace = new RegExp(/\s/)
     const numbers = new RegExp(/[\d~!@#$%^&*()_<>?":".]/)
      const checkName = e.target.value.split(whspace)
      console.log(checkName)
      if (checkName.length>2) {
        alert("Third word")
        e.target.value=e.target.value.slice(0,e.target.value.length-1)
      }
      for(let i of checkName){
        if (i.length>10){
          alert ("Maximum length reached")
          e.target.value=e.target.value.slice(0,e.target.value.length-1)
        }   
        if (numbers.test(i)){
           alert("Incorrect symbol")
           e.target.value=e.target.value.slice(0,e.target.value.length-1)
        }
      console.log(i)
    }
  }
}

  function handleWhitespace(e) {
      if (e.key === " ") {
        const two = new RegExp(/\s/)
        const checkName = e.target.value.split(two)
        console.log(checkName)
        
        for(let i of checkName){
            if (i.length<3) {
              alert ("Too short name");
              setCheckName(false)
            } else {
              setCheckName(true)
            }
        }
      }
    }

      function checkNameInput(){
        const pattern =new RegExp(/\w{3,10}\s\w{3,10}/)
        const checkName = nameRef.current.value.split(/\s/)
        if(checkName[0].length>2){
            if(nameRef.current.value!==''&&!pattern.test(nameRef.current.value)){
           setCheckName(false)
            }
        }
        if(checkName[1]&&checkName[1].length<3) {
          alert("Too short name")
          setCheckName(false)
        }else{setCheckName(true)}
    }

        function checkTel(){
          const pattern1 =new RegExp(/(\d{2,4}-\d{7})/)
          if(telRef.current.value!==''&&!pattern1.test(telRef.current.value)){
              telRef.current.style.color = "red"
              telRef.current.style.borderColor= "red"
              alert("TEL")
              setCheckTelephone(false)
          }else {
              setCheckTelephone(true)
          }
        }

        function checkMailInput(){
            const pattern1 =new RegExp(/^[\w-]+@([\w-]+)+[\w-]{2,4}$/)
                if(mailRef.current.value!==""&&!pattern1.test(telRef.current.value)){
                    setCheckMail(false)
                    alert("MAIL")
                }else {
                    setCheckMail(true)
                    
                }
         }             

      function checkingEmail(e){
        const dog = new RegExp(/@(.*)/s)
        if(e.target.value.charAt(0)==="@"){
          alert ("Wrong Email")
          e.target.value=e.target.value.slice(0,e.target.value.length-1)
        }

        const checkName = e.target.value.split(dog)
        const re1 = new RegExp(/[~!#$%^&*()_<>?":,.]/)
        const re2 = new RegExp(/[~!@#$%^&*()_<>?":]/)
        console.log(checkName)
        
          let qwe1  = checkName[0]
          console.log(qwe1)
          if(re1.test(qwe1)){
            alert ("Wrong Email")
            e.target.value=e.target.value.slice(0,e.target.value.length-1)
          }
          let qwe2 =checkName.slice(1)
          console.log(qwe2, qwe2.length)
      
          if(qwe2.length>0){
          let qwe3  = qwe2[0].split(/\./)
          console.log(qwe3)
          let qwe4= qwe3.slice(0)
          if(re2.test(qwe4)){
            alert(("Wrong Email"))
            e.target.value=e.target.value.slice(0,e.target.value.length-1)
          }
          let qwe5 = qwe3.slice(1)
          if(re1.test(qwe5)&&(qwe5[0]&&qwe5[0].length>3)){
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
    }

    function checkingTel(e){
      const ty1 = new RegExp(/[a-zа-я~!@#$%^&*()_<>?":".]/)
      if(ty1.test(e.target.value)){
          alert ("WrongTel")
          /*e.target.value = /*checkName+i.slice(0,/*checkName/i/*]i.length-1)//)*/
          //ty2.test(checkName)
        }//}
      }
    
    function checkDateInput(){
      if(dateRef.current.value==="") {
        setCheckDate(false)
      }
    }
      
     
    return(   
    <form className="obratnuj-zvonok" autoComplete="off" method='post' onSubmit = {submit}>
    <div className="form-zvonok"> 
      <div>
        <label>Имя <span>*</span></label>
        <input type='text' name='username' className={(checkName)?"correct1":"warning1"} ref = {nameRef} onChange={checkingName}  onKeyPress= {handleWhitespace} onBlur = {checkNameInput}/>
        </div>
        <div>
        <label>E-mail <span>*</span></label>
        <input type='text' name='usermail' className={(checkMail)?"correct1":"warning1"} ref = {mailRef}onChange={checkingEmail} onBlur = {checkMailInput}/>
      </div>
        
        <div>
        <label>Номер телефона (с кодом) <span>*</span></label>
        <input type='text' name='usernumber' className={(checkTelephone)?"correct1":"warning1"} ref = {telRef} placeholder = "+375 (XX(XX)) XXXXX(XX)" /*required /*pattern = "\d+"*/onChange  = {checkingTel} onBlur = {checkTel}/></div>
      <div>
        <label>Дата рождения <span>*</span></label>
        <input type='date' name='birthday' className={(checkDate)?"correct1":"warning1"} ref = {dateRef} onBlur = {checkDateInput}/></div>
      <div>
        <label>Сообщение</label>
        <textarea className = "text" type='text' name='question'/>
      </div>
      <input className="bot-send-mail" type='submit' value='Послать заявку'/>
      <button onClick = {submit}>B</button>
      </div>
    </form>
    );
}

export default App;
