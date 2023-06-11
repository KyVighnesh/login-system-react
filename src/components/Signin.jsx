import React from 'react'
import {useState} from "react"
import { useDispatch } from 'react-redux'
import {fetchUserData} from "../Slice/loginSlice"
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import VisibilityIcon from '@mui/icons-material/Visibility';



const Signin = () => {

    const navigate = useNavigate()


    const [user,setUser] = useState({email:"",password:""})

    const [emailError,setEmailError] = useState("")
    const [passwordError,setPasswordError] = useState("")

    const[show,setShow] = useState(false)

    const onClickClear = () => {
        setUser({email:"",password:""})
            setEmailError("")
            setPasswordError("")

    }




    const dispath = useDispatch()

    const userData = useSelector((state)=> {

        return state.loginReducer.userData

    })

    const onClickShowPassword = () => {

        setShow(!show)

    }





    const handleChange = (event) => {
        setUser({...user,[event.target.name]:event.target.value})


        
    }

    const onHandleClick = () => {
        
        let regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

        let regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/)

        console.log(userData)


        if(regexEmail.test(user.email) && regexPassword.test(user.password)) {

            setEmailError("")
            setPasswordError("")

           let validated =  userData.find((ele)=> {
            return ele.email == user.email
           })

           if(validated) {
            user.password == validated.password ? alert("success")
            :alert("email or password incorrect")

            navigate("/form")

           }

           else {
            alert("user not found")
           }
            
        }

        else if(regexEmail.test(user.email) == false || regexPassword.test(user.password) == false) {
            console.log("error updated")

          

            if(regexEmail.test(user.email) == false) {
                setEmailError("Invalid Email")
                console.log(emailError)
            }
            

            if(regexPassword.test(user.password) == false) {
                setPasswordError("Password Should Contain minimum 8 characters , 1 uppercase , 1 lowercase , 1 special character ")

            }
        }

        
          

            
             

    }




  return (
    <div style={{width:"500px",margin:"auto"}}>
        <div style={{width:"400px",textAlign:"center"}}>
            <h3>Sign In</h3>
        </div>
<div style={{width:"400px",marginTop:"20px"}}>
  
<input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="addon-wrapping"name = "email" value = {user.email} onChange = {handleChange}/>
<div style={{color:'red'}}>
    {emailError}
</div>
</div>
<div style={{width:"400px",marginTop:"20px"}}>

    <div style={{display:'flex'}}>
  
  <input type={show?"text":"password"} class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" name = "password" value = {user.password} onChange = {handleChange}/>

  <button type="button" onClick={onClickShowPassword}>
    <VisibilityIcon/>
  </button>
  </div>

  <div style={{color:'red'}}>
    {passwordError}
</div>
</div>

<div style={{textAlign:"center",width:"400px", marginTop:"20px"}}>
<button type="button" class="btn btn-primary" onClick={onHandleClick}>Sign In</button>
</div>

<div style={{textAlign:"center",width:"400px", marginTop:"20px"}}>
<button type="button" class="btn btn-primary" onClick = {onClickClear}>Clear</button>

</div>


    </div>
  )
}

export default Signin