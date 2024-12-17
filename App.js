// import logo from './logo.svg';
import Navbar from './component/Navbar';
import TextFrom from './component/TextFrom';
import './App.css';
import React,{useState} from 'react';
import Alert from './component/Alert';
// import About from './component/About';
//imrs



function App() {
  const [mode, setMode] = useState('light');
  

  const [alert, setalert] = useState(null);


  const showAlert = (message,type)=>{
       setalert({
        msg : message,
        type : type
       })

       setTimeout(() => {
        setalert(null);
       }, 2000);
  }

  //fun 
  const removeBodyClasses = ()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  // document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');


  }


  const toggleMode =(cls) =>{
    if(mode === 'light')
    {
      removeBodyClasses();
      console.log(cls);
     document.body.classList.add('bg-' + cls);
      setMode('dark');
     
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light Mode has been enabled","success");
    }
  }

   
  
  return ( 
   
<>
<Navbar title="TextUtils" aboutText="About " mode={mode} toggleMode={toggleMode} />
{/* <Alert alert="This is Aler"/> */}
<Alert alert={alert}/>
<div className="container my-3 " >
<TextFrom heading="Enter the text to analyze below"  showAlert={showAlert} mode={mode}  />
{/* <About/> */}

</div>

</>


    
  );
}

export default App;
