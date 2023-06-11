import React from 'react'
import {useState} from "react"
import { useDispatch } from 'react-redux'
import {fetchUserData} from "../Slice/loginSlice"
import {useNavigate} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';




const Signup = () => {

    const navigate = useNavigate()


    const [user,setUser] = useState({name:"",email:"",password:""})

    const [nameError,setNameError] = useState("")
    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const[show,setShow] = useState(false)



    const dispath = useDispatch()



    const onClickShowPassword = () => {

        setShow(!show)

    }

    const onClickClear = () => {
        setUser({name:"",email:"",password:""})
        setNameError("")
            setEmailError("")
            setPasswordError("")

    }


    const handleChange = (event) => {
        
        setUser({...user,[event.target.name]:event.target.value})
    }

    const onHandleClick = () => {
        
        let regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

        let regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/)


        if(user.name.length>4 && regexEmail.test(user.email) && regexPassword.test(user.password)) {

            setNameError("")
            setEmailError("")
            setPasswordError("")


            dispath(fetchUserData(user))


            setTimeout(()=> {

                navigate('/Signin')
            },1000)
        }

        else if(user.name.length<4 || regexEmail.test(user.email) == false || regexPassword.test(user.password) == false) {
            console.log("error updated")

            if(user.name.length<4) {
                setNameError("Name Should Atleast Contain 4 Characters")
                console.log(nameError)

            }

            else {
                setNameError("")

            }

            if(regexEmail.test(user.email) == false) {
                setEmailError("Invalid Email")
                console.log(emailError)
            }

            else {
                setEmailError("")
            }
            

            if(regexPassword.test(user.password) == false) {
                setPasswordError("Password Should Contain minimum 8 characters , 1 uppercase , 1 lowercase , 1 special character ")

            }
            else {
                setPasswordError("")

            }
        }

        
          

            
             

    }
    




  return (
    <div style={{width:"500px",margin:"auto"}}>
        <div style={{width:"400px",textAlign:"center"}}>
            <h3>Sign Up</h3>
        </div>

        <div style={{width:"400px",marginTop:"20px"}}>
  
  
  <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="addon-wrapping" name = "name" value = {user.name} onChange = {handleChange}/>

  <div style={{color:'red'}}>{nameError}
  </div>
</div>
<div style={{width:"400px",marginTop:"20px"}}>
  
  <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"name = "email" value = {user.email} onChange = {handleChange}/>
  <div style={{color:'red'}}>{emailError}
  </div>
</div>
<div style={{width:"400px",marginTop:"20px"}}>

    <div style={{display:'flex'}}>
  
  <input type={show?"text":"password"} class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" name = "password"  onChange = {handleChange} value = {user.password}/>

  <button type="button" onClick={onClickShowPassword}>
    <VisibilityIcon/>
  </button>

  </div>
  <div style={{color:'red'}}>{passwordError}
  </div>
</div>

<div style={{textAlign:"center",width:"400px", marginTop:"20px"}}>
<button type="button" class="btn btn-primary" onClick = {onHandleClick}>Sign Up</button>

</div>

<div style={{textAlign:"center",width:"400px", marginTop:"20px"}}>
<button type="button" class="btn btn-primary" onClick = {onClickClear}>Clear</button>

</div>
    </div>
  )
}

export default Signup