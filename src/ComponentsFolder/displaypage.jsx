
import { useSelector } from "react-redux"
import { useDispatch} from "react-redux";
import { setSearchResultData } from "../action";
import { useState } from "react";

const DisplayPage=()=>{
const searchResult=useSelector((data)=>data.searchResult.searchResult)
const parsedResult = typeof searchResult === 'string' ? JSON.parse(searchResult) : searchResult
console.log("search result is",searchResult)
const [searchinput,setSearchinput]=useState("")
    const dispatch=useDispatch()

const Handlesearch=()=>{
  
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
    
    fetch("https://google.serper.dev/search", requestOptions)
      .then(response => response.text())
      .then(result => dispatch(setSearchResultData(result)))
      .catch(error => console.log('error', error));

}

    return (
        <div className=" h-screen" style={{backgroundColor:'#202124'}}>
           <div className=" relative flex justify-between px-5">
           <div className="">
          a
       </div>
          
            <div>
            <form  class=" absolute  w-1/3 mx-auto left-0 right-0 top-5">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div onClick={Handlesearch} class="absolute pointer-events-auto inset-y-0 start-0  flex items-center ps-3">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input  onChange={(e)=>{setSearchinput(e.target.value)}} style={{backgroundColor:'#202124',color:'white'}} type="search" id="default-search" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        <button type="submit" class="text-white absolute end-2.5  bottom-1   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600  "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/><path fill="#EA4335" d="M12 17c-1.38 0-2.63-.56-3.54-1.47l-1.41 1.41A6.99 6.99 0 0 0 12.01 19c3.87 0 6.98-3.14 6.98-7h-2c0 2.76-2.23 5-4.99 5z"/></svg></button>
        <button type="submit" class="text-white absolute   end-7  bottom-1   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600  "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="#4285F4" d="M12 15c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v7c0 1.66 1.34 3 3 3z"/><path fill="#34A853" d="M11 18.92h2V22h-2z"/><path fill="#F4B400" d="M7 12H5c0 1.93.78 3.68 2.05 4.95l1.41-1.41C7.56 14.63 7 13.38 7 12z"/><circle cx="144.07" cy="144" r="16" fill="#34A853"/>
  <circle cx="96.07" cy="104" r="24" fill="#4285F4"/>
  <path fill="#EA4335" d="M24 135.2c0 18.11 14.69 32.8 32.8 32.8H96v-16l-40.1-.1c-8.8 0-15.9-8.19-15.9-17.9v-18H24v19.2z"/>
  <path fill="#FBBC04" d="M168 72.8c0-18.11-14.69-32.8-32.8-32.8H116l20 16c8.8 0 16 8.29 16 18v30h16V72.8z"/>
  <path fill="#4285F4" d="M112 24H80L68 40H56.8C38.69 40 24 54.69 24 72.8V92h16V74c0-9.71 7.2-18 16-18h80l-24-32z"/>
</svg></button>
    </div>
</form>

            </div>
            <div>
            <div  > 
       
       <div className=" py-5">
           <div className=" flex justify-end space-x-2 mr-3">
      
      
      
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
            </div>
           </div>

           <div>


           <div style={{backgroundColor:'#202124'}} className=" mx-auto mt-10 text-white">
                {/* Organic Results */}
                {parsedResult?.organic?.map((result, index) => (
                    <div key={index} className="mb-6">
                        <a href={result.link} className="text-sm text-gray-400">{result.link}</a>
                        <h3 className="text-xl text-blue-500 hover:underline">
                            <a href={result.link}>{result.title}</a>
                        </h3>
                        <p className="text-sm">{result.snippet}</p>
                        {result.sitelinks && (
                            <div className="mt-2 grid grid-cols-2 gap-2">
                                {result.sitelinks.map((sitelink, i) => (
                                    <a key={i} href={sitelink.link} className="text-sm text-blue-400 hover:underline">
                                        {sitelink.title}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}

                {/* Top Stories */}
                {parsedResult?.topStories && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">Top Stories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {parsedResult.topStories.map((story, index) => (
                                <div key={index} className="bg-gray-800 p-4 rounded">
                                    <img src={story.imageUrl} alt={story.title} className="w-full h-40 object-cover mb-2 rounded" />
                                    <h3 className="text-blue-500 hover:underline">
                                        <a href={story.link}>{story.title}</a>
                                    </h3>
                                    <p className="text-sm text-gray-400">{story.source} - {story.date}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Images */}
                {parsedResult?.images && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">Images</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {parsedResult.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image.imageUrl} alt={image.title} className="w-full h-32 object-cover rounded" />
                                    <p className="text-sm text-blue-500 hover:underline mt-1">
                                        <a href={image.link}>{image.title}</a>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* People Also Ask */}
                {parsedResult?.peopleAlsoAsk && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">People Also Ask</h2>
                        {parsedResult.peopleAlsoAsk.map((item, index) => (
                            <details key={index} className="mb-2 bg-gray-800 p-2 rounded">
                                <summary className="text-blue-500 cursor-pointer">{item.question}</summary>
                                <p className="text-sm mt-1">{item.snippet}</p>
                            </details>
                        ))}
                    </div>
                )}

                {/* Related Searches */}
                {parsedResult?.relatedSearches && (
                    <div className="mb-6">
                        <h2 className="text-lg font-bold mb-2">Related Searches</h2>
                        <div className="flex flex-wrap gap-2">
                            {parsedResult.relatedSearches.map((search, index) => (
                                <a key={index} href={`#${search.query}`} className="bg-gray-800 px-3 py-1 rounded text-blue-500 hover:underline">
                                    {search.query}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
       
           </div>
        </div>
    )
}
export default DisplayPage