import React  from 'react';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faQrcode ,faLink} from '@fortawesome/free-solid-svg-icons'
import { BrowserView,MobileView } from 'react-device-detect';
import { Link } from 'react-router-dom';

//Warning : 2 Views Brower and Mobile 

function Sidebar(props) {
    return (
       <>
<MobileView> <div className="wrapper hover_collapse">
            

            <div className="top_navbar">
            <div className="logo">SSIPMT TEST</div>
            <div className="menu">
              <div className="hamburger" onClick={Drawer}>
                <FontAwesomeIcon icon={faBars} />
              </div>
            </div>
          </div>
            <div className="sidebar" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
            <div className="sidebar_inner" >
        <ul>
            <li>
               <Link to="/dashboard"  >
            
         <span className="icon">    <FontAwesomeIcon icon={faQrcode} /></span>
         <span className="text">Dashboard</span>
         </Link>
            </li>
            <li>
               
            <Link to="/questions"  >
         <span className="icon"> <FontAwesomeIcon icon={faLink} /></span>
         <span className="text">Questions</span>
            </Link>
            </li>
            <li> 
            <Link to="#"  >
         <span className="icon"> <FontAwesomeIcon icon={faLink} /></span>
         <span className="text">Shortcuts</span>
            </Link>
            </li> 
            <li>
            <Link to="#"  >
         <span className="icon"> <FontAwesomeIcon icon={faLink} /></span>
         <span className="text">Shortcuts</span>
            </Link>
            </li>
        </ul>
      </div>
            </div>
            </div>
            </MobileView>

<BrowserView> 
<div className="wrapper">
            

      <div className="top_navbar">
      <div className="logo">SSIPMT TEST</div>
      <div className="menu">
        <div className="hamburger" onClick={Drawer}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
      <div className="sidebar" >
      <div className="sidebar_inner" >
  <ul>
  <li>
               <Link to="/dashboard"  >
            
         <span className="icon">    <FontAwesomeIcon icon={faQrcode} /></span>
         <span className="text">Dashboard</span>
         </Link>
            </li>
            <li>
               
            <Link to="/questions"  >
         <span className="icon"> <FontAwesomeIcon icon={faLink} /></span>
         <span className="text">Questions</span>
            </Link>
            </li>
            <li> 
            <Link to="#"  >
         <span className="icon"> <FontAwesomeIcon icon={faLink} /></span>
         <span className="text">Shortcuts</span>
            </Link>
            </li> 
            <li>
            <Link to="#"  >
         <span className="icon"> <FontAwesomeIcon icon={faLink} /></span>
         <span className="text">Shortcuts</span>
            </Link>
            </li>
  </ul>
</div>
      </div>
      </div>
      </BrowserView>
  </>
      );
    }

    function MouseLeave(){
      var wrapper = document.querySelector(".wrapper");
      var li_items = document.querySelectorAll(".sidebar");


      li_items.forEach((li_item)=>{
               li_item.closest(".wrapper").classList.add("hover_collapse");
      
      })
    }

    function MouseEnter(){
      var wrapper = document.querySelector(".wrapper");
      var li_items = document.querySelectorAll(".sidebar");
      li_items.forEach((li_item)=>{
         
               li_item.closest(".wrapper").classList.remove("hover_collapse");
        
       })
    }
    function Drawer(){
      var wrapper = document.querySelector(".wrapper");

      var hamburger = document.querySelector(".hamburger");
       hamburger.closest(".wrapper").classList.toggle("hover_collapse");
    }
   
export default Sidebar;