
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
if(firebase.apps.length===0){
    firebase.initializeApp(firebaseConfig)
}

const Login = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    const[userGoogle,setUserGoogle]=useState({
        name:'',
        email:''
    })
     const[logInUser,setLogInUser]=useContext(UserContext)
     const [user,setUser]=useState({
         name:'',
         email:'',
         error:'',
         success:false
     })
     const [newUser,setNewUser]=useState(true)
     let history=useHistory();
     let location=useLocation();
     let { from } = location.state || { from: { pathname: "/" } };
    const handleUserInput=(e)=>{
        let validInfo=true;
        
    if(e.target.name==='email'){
       validInfo=/\S+@\S+\.\S+/.test(e.target.value)
    }
    
    if(e.target.name==='password' ){
        const passLength=e.target.value.length > 6
      const  userPasswordValid= /(?=.*\d)/.test(e.target.value)
      validInfo=passLength && userPasswordValid; 
        
    }
  
    if(validInfo){
        const newUser={...user}
        newUser[e.target.name]=e.target.value
        setUser(newUser);
    }
    
    
    }
    const handleSubmit= (event) =>{
      
       if(newUser && user.email && user.password){

        firebase.auth().createUserWithEmailAndPassword(user.email,user.password)
       .then((userCredential) => {
    // Signed in 
       var users = userCredential.user;
       const newUser={...user}
       newUser.error='';
       newUser.success=true
       setUser(newUser)
       userUpdate(user.name)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    const newUser={...user}
    newUser.error=errorMessage;
    newUser.success=false
    setUser(newUser);
  });
       }

       if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          var users = userCredential.user;
          console.log(users)
          const newUser={...user}
           newUser.error='';
           newUser.success=true
           setUser(newUser)
          setLogInUser(users)
          history.replace(from);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          var errorMessage = error.message;
          const newUser={...user}
          newUser.error=errorMessage;
          newUser.success=false
          setUser(newUser);
        });
       }
        event.preventDefault();
    }
    const userUpdate= name =>{
        var user = firebase.auth().currentUser;
   
       user.updateProfile({
       displayName: name
   
     }).then(function() {
  // Update successful.
  

    }).catch(function(error) {
  // An error happened.
});

    }

  

  const googleSingIn = () =>{
    firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
      var token = credential.accessToken;
      var users= result.user;
      const{displayName,email}=users
      const singdInUser={
       
        name:displayName,
        email:email,
        

      }
      setUserGoogle(singdInUser)
      setLogInUser(singdInUser)
     
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }



    return (
        <div  style={{marginTop:"100px"}} >
            <br/><br/><br/>
           
        
              <div className="d-flex justify-content-center">
              <form className="loginStyle"   onSubmit={handleSubmit} action="">
                <h2>Create Account</h2><br/><br/>
              {
                  newUser  && <input className='inputStyle' onBlur={handleUserInput}  type="text" name="name" placeholder="name"  />
              }
              <br/><br/>
                <input className='inputStyle' onBlur={handleUserInput} type="email" name="email" placeholder="email" required id=""/><br/><br/>
                <input className='inputStyle' onBlur={handleUserInput} type="password" name="password" placeholder='password' required id=""/><br/><br/>
               
                <input className="btn btn-primary" type="submit" value="Craete An Account"/><br/><br/>
                <p style={{color:'red'}}>{user.error}</p>
                {
                    user.success && <p style={{color:'green'}}>user {newUser ?'created' :'login'}successfully </p>
                }
                <Link onClick={()=>setNewUser(!newUser)} to="/login"> Login</Link><br/>
                  
              
           
            </form>
            
              </div>
           <br/><br/>
               <div className="d-flex justify-content-center">
                 <button className="btn btn-primary" onClick={googleSingIn}>Google SingIn</button>
               </div>
             <br/><br/>
            
        </div>
    );
};

export default Login;