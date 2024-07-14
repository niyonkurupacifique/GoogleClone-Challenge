
import { useMediaQuery } from "react-responsive";
const Footer=()=>{
    const isExtraLargeScreen = useMediaQuery({ minWidth: 1200 });
  const isLargeScreen = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isSmallScreen = useMediaQuery({ minWidth: 576, maxWidth: 767 });
  const isIPadScreen = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isExtraSmallScreen = useMediaQuery({ maxWidth: 575 });
  const isMediumLargeScreen = useMediaQuery({ minWidth: 992, maxWidth: 1199 });
  const isSmallMediumScreen = useMediaQuery({ minWidth: 576, maxWidth: 991 });

return(
    <footer style={{
        backgroundColor: '#171717',
        position:'fixed',
        width:'100%',
        bottom: 0,
    }} className=" footerHeight bottom-0 w-full" >
       <div  className=" flex-1 ">
       <div style={{borderColor:'#313335',maxHeight:60}} className={` flex  px-4 border border-b border-x-0 border-t-0`}>
        <span style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}} className=" py-3">Rwanda</span>
       </div>
        <div  style={{maxHeight:60}} className={` ${isLargeScreen&&' justify-around'} ${isMediumScreen&&' justify-around'} ${isSmallScreen&&' justify-around'} ${isExtraLargeScreen&&' justify-between'} ${isExtraSmallScreen?'flex flex-col justify-center':'flex'}  px-4`}>
            <div className="py-3 flex  space-x-8">
            <div style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>About</div>
            <div style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>Adverstising</div>
            <div style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>Business</div>
            <div className=" whitespace-nowrap4" style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>How Search Works</div>
            </div>

            <div style={{ backgroundColor: '#171717'}} className="py-3 pt-3  flex space-x-8">
            <div style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>Privacy</div>
            <div style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>Terms</div>
            <div style={{fontFamily:'Arial, sans-serif',fontSize:'15px',fontWeight:400,lineHeight:'normal',color:'white'}}>Settings</div>
            </div>
           
        </div>
       </div>
    </footer>
)
}
export default Footer