import React from "react";
import { useMediaQuery } from "react-responsive";
const Header=()=>{


    
return(
    <div className=" header" style={{backgroundColor:'#202124'}} > 
       
        <div className=" py-5">
            <div className=" flex justify-end space-x-2 mr-3">
        <div className="Gmail mt-2">
            Gmail
        </div>
        <div className="Images mt-2">Images</div>
       
        <div >
        <svg className="gb_g gb_h mt-1" focusable="false" height="24px" viewBox="0 -960 960 960" width="24px">
                <path d="M209-120q-42 0-70.5-28.5T110-217q0-14 3-25.5t9-21.5l228-341q10-14 15-31t5-34v-110h-20q-13 0-21.5-8.5T320-810q0-13 8.5-21.5T350-840h260q13 0 21.5 8.5T640-810q0 13-8.5 21.5T610-780h-20v110q0 17 5 34t15 31l227 341q6 9 9.5 20.5T850-217q0 41-28 69t-69 28H209Zm221-660v110q0 26-7.5 50.5T401-573L276-385q-6 8-8.5 16t-2.5 16q0 23 17 39.5t42 16.5q28 0 56-12t80-47q69-45 103.5-62.5T633-443q4-1 5.5-4.5t-.5-7.5l-78-117q-15-21-22.5-46t-7.5-52v-110H430Z"></path>
            </svg>
        </div>
        <div className=" mt-1">
        <svg class="gb_h" focusable="false" viewBox="0 0 24 24"><path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path><image src="https://ssl.gstatic.com/gb/images/bar/al-icon.png" alt="" height="24" width="24" ></image></svg>
        </div>
        <div>
    <img className=" profile" src="https://lh3.googleusercontent.com/ogw/AF2bZyjuIZlAcBqzJqw0T0oEP4GwxeGPqn_gD3tJ2Kcm-cck0LE_=s32-c-mo" alt="" />
      </div> 
        </div>
        </div>
    </div>
)
}
export default Header