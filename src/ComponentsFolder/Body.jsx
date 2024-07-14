import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { setSearchResultData } from "../action";
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'


const Body=()=>{
    const toast = useToast()

    const [searchinput,setSearchinput]=useState("")
    const dispatch=useDispatch()
    const navigate = useNavigate();
    const searchResult=useSelector((data)=>data.searchResult.searchResult)
  console.log("search result in body",searchResult)

    const Handlesearch=()=>{
        const loadingToastId = toast({
            title: '',
            description: 'Please wait...',
            status: 'loading',
            position: 'top',
            duration: null, 
          });
  
        var myHeaders = new Headers();
        myHeaders.append("X-API-KEY", "d32c3bf8283330149dc3f05be9bdd627d229d656");
        myHeaders.append("Content-Type", "application/json");
        
        var raw = JSON.stringify({
          "q":searchinput 
        });
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
         if(searchinput==="")
            {
              toast({
                title: 'failed',
                description:"Search input is required",
                position: 'top',
                status: 'error',
                duration: 3000,
              });
              toast.close(loadingToastId);
              return;
            }
            else{
                fetch("https://google.serper.dev/search", requestOptions)
                .then(response => response.text())
                .then(result => dispatch(setSearchResultData(result)),navigate("/searchresult"),toast.close(loadingToastId))
                .catch(error => console.log('error', error));
                
            }
        
        

    }

    


    

return(
    <div className="bodyheight" style={{backgroundColor:'#202124'}}>
        <div className="  w-full h-full flex flex-col items-center   align-middle">
        <div className=" mt-20">
        <svg className=" text-white" xmlns="http://www.w3.org/2000/svg" width="272" height="92"><path fill="white" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="white" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/><path fill="white" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/><path fill="white" d="M225 3v65h-9.5V3h9.5z"/><path fill="white" d="m262.02 54.48 7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98 19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/><path fill="white" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49.01z"/></svg>
        </div>
        <form  class="  w-1/2 mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input onChange={(e)=>{setSearchinput(e.target.value)}}  style={{backgroundColor:'#202124',color:'white'}} type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="submit" class="text-white absolute end-2.5  bottom-1   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600  "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/><path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"/></svg></button>
       
    </div>
</form>
        <div className=" flex space-x-2">
            {/* <div><span>Google Search</span></div>
            <div><span> I'm Feeling Lucky </span></div> */}

<div  onClick={Handlesearch} class="FPdoLc lJ9FBc">   <input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" role="button" tabindex="0" type="submit" data-ved="0ahUKEwin6Ny7hqGHAxXvT6QEHRlXCbgQ4dUDCBw"/> <input class="RNmpXc" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" name="btnI" type="submit" jsaction="trigger.kWlxhc" data-ved="0ahUKEwin6Ny7hqGHAxXvT6QEHRlXCbgQ19QECB0"/>   </div>
        </div>
        <div>
        <div id="SIvCob">Google offered in:  <a href="https://www.google.com/setprefs?sig=0_u6beAAKDmME2uj6r33wEge8go-U%3D&amp;hl=fr&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjP3fySiKGHAxV4VKQEHTkRBQIQ2ZgBCCA">Français</a>    <a href="https://www.google.com/setprefs?sig=0_u6beAAKDmME2uj6r33wEge8go-U%3D&amp;hl=sw&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjP3fySiKGHAxV4VKQEHTkRBQIQ2ZgBCCE">Kiswahili</a>    <a href="https://www.google.com/setprefs?sig=0_u6beAAKDmME2uj6r33wEge8go-U%3D&amp;hl=rw&amp;source=homepage&amp;sa=X&amp;ved=0ahUKEwjP3fySiKGHAxV4VKQEHTkRBQIQ2ZgBCCI">Ikinyarwanda</a>  </div>
        </div>
        </div>
    </div>
)
}
export default Body