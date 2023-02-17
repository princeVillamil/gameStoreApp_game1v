import React from 'react'
import { useEffect } from 'react'
import '../Assets/sideBar.css'

export default function SideBar() {
  useEffect(()=>{
    let sideBar = document.querySelector('.sideBar')
    window.addEventListener('scroll',()=>{
      let scrollY = window.scrollY
      if(scrollY >= 100){
        //   padding: 105px 55px 25px 55px;
        sideBar.style.padding = '15px 55px 25px 55px'
      }else{
        sideBar.style.padding = '105px 55px 25px 55px'
      }
    })
  },[])
  return (
    <div className='sideBar'>
      <div className="sBUser">
        <a className='sBUserInfo' href="#">
          <span>JaMo</span>
          <img src="#" alt="PV" />
        </a>
        <a className='sBUserCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_wishlist-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><path fill="#FFF" d="M25.5 9.846h-4.746a5.87 5.87 0 00.837-.657 3.027 3.027 0 000-4.32c-1.175-1.158-3.223-1.159-4.4 0-.649.639-2.375 3.24-2.137 4.977h-.108c.237-1.738-1.488-4.339-2.138-4.978-1.176-1.158-3.224-1.157-4.4 0a3.028 3.028 0 000 4.321c.205.203.498.429.838.657H4.5A1.487 1.487 0 003 11.314v3.672c0 .405.336.734.75.734h.75v8.812c.004.813.675 1.47 1.5 1.468h18a1.487 1.487 0 001.5-1.468V15.72h.75c.414 0 .75-.329.75-.734v-3.672a1.487 1.487 0 00-1.5-1.468zM9.472 5.904a1.61 1.61 0 011.138-.464c.427 0 .83.164 1.135.464 1.011.995 2.016 3.54 1.667 3.893 0 0-.064.048-.278.048-1.036 0-3.015-1.054-3.662-1.691a1.578 1.578 0 010-2.25zm4.778 18.628H6V15.72h8.25v8.812zm0-10.28H4.5v-2.938h9.75v2.938zm4.005-8.348c.609-.598 1.665-.597 2.273 0a1.578 1.578 0 010 2.25c-.647.637-2.626 1.692-3.662 1.692-.214 0-.278-.047-.279-.049-.348-.354.657-2.898 1.668-3.893zM24 24.532h-8.25V15.72H24v8.812zm1.5-10.28h-9.75v-2.938h9.75v2.938z"></path></svg></span>
          <span>Wishlist</span>
        </a>
        <a className='sBUserCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_library-svg" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"><defs><linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#B4EC51"></stop><stop offset="100%" stopColor="#429321"></stop></linearGradient></defs><path fill="url(#a)" fillRule="evenodd" d="M6.465 11.4c-.956 0-1.733.769-1.733 1.714v10.457c0 .946.777 1.715 1.733 1.715h17.07c.956 0 1.733-.77 1.733-1.715V13.114c0-.945-.777-1.714-1.733-1.714H6.465zm0 15.6C4.554 27 3 25.462 3 23.571V13.114c0-1.89 1.554-3.428 3.465-3.428h17.07c1.911 0 3.465 1.537 3.465 3.428v10.457C27 25.462 25.446 27 23.535 27H6.465zM9.496 4.714a.86.86 0 01-.866-.857A.86.86 0 019.496 3h11.008c.478 0 .866.383.866.857a.861.861 0 01-.866.857H9.496zM7.244 8.058a.861.861 0 01-.866-.858c0-.474.388-.857.866-.857h15.512c.478 0 .866.383.866.857a.861.861 0 01-.866.858H7.244z"></path></svg></span>
          <span>My library</span>
        </a>
        <a className='sBUserCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_friends-svg" xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16"><path d="M6.067.006c-2.012 0-3.65 1.787-3.65 3.983s1.638 3.983 3.65 3.983c2.013 0 3.651-1.787 3.651-3.983S8.08.006 6.068.006zm8.3.57h-.025c-.845.007-1.634.374-2.222 1.033a3.556 3.556 0 00-.884 2.407c.007.904.335 1.753.923 2.39.592.643 1.377.996 2.213.996h.025c.845-.007 1.634-.374 2.222-1.033a3.556 3.556 0 00.884-2.407C17.488 2.09 16.083.576 14.367.576zm.154 7.479h-.303c-1.412 0-2.7.552-3.673 1.457a7.251 7.251 0 012.206 2.936c.32.78.504 1.6.546 2.446H20v-1.201c0-3.109-2.458-5.638-5.479-5.638zm-2.398 6.839a6.096 6.096 0 00-2.36-4.478A5.749 5.749 0 006.25 9.219h-.365C2.635 9.219 0 11.93 0 15.275v.72h12.135v-.72c0-.128-.004-.255-.012-.381z" fill="#FFF"></path></svg></span>
          <span>People you follow</span>
        </a>
      </div>
      {/* Past sBUser */}
      <div className="sBCtrls">
        <div className='sBInnerTitle'>
          <span>New Releases</span>
        </div>
        <a className='sBinnerCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#FFF" d="M23.48 10.876a1.84 1.84 0 00.435-1.841c-.205-.656-.737-1.124-1.39-1.223l-5.811-.881a.762.762 0 01-.572-.434L13.544 1C13.252.384 12.66 0 12 0s-1.251.384-1.543 1.001L7.86 6.497a.763.763 0 01-.573.434l-5.81.882C.821 7.91.29 8.38.085 9.035a1.84 1.84 0 00.435 1.842l4.204 4.278c.18.182.262.445.22.702l-.992 6.04a1.814 1.814 0 00.375 1.457 1.69 1.69 0 002.122.437l5.197-2.852a.749.749 0 01.707 0l5.197 2.852c.253.139.523.209.8.209.509 0 .99-.236 1.322-.646.33-.408.463-.926.375-1.457l-.992-6.04a.816.816 0 01.219-.702l4.204-4.279z"></path></svg></span>
          <span>Last 30 days</span>
        </a>
        <a className='sBinnerCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_calendar-svg" width="19" height="14" viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg"><path d="M3.736 8.017V5.688h1.65c1.145 0 1.9-.635 1.9-1.601 0-.967-.736-1.565-1.929-1.565-1.174 0-1.966.69-2.003 1.73H.252C.298 1.657 2.31 0 5.432 0c2.982 0 5.031 1.482 5.031 3.627 0 1.528-1.034 2.733-2.543 3.01v.174c1.854.194 3.037 1.4 3.037 3.111 0 2.403-2.292 4.078-5.58 4.078C2.236 14 .12 12.306 0 9.702h3.261c.047 1.012.876 1.638 2.171 1.638 1.211 0 2.05-.681 2.05-1.675 0-1.022-.792-1.648-2.097-1.648H3.736zm11.845 5.624V3.406h-.177L12.16 5.569V2.66l3.421-2.3H19v13.282h-3.42z" fill="#FFF" opacity=".9"></path></svg></span>
          <span>Release calendar</span>
        </a>
        <a className='sBinnerCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 26"><path fill="#FFF" d="M4.929 25.819C1.783 16.36 8.43 12.909 8.43 12.909c-.465 5.046 2.679 8.977 2.679 8.977 1.156-.318 3.363-1.805 3.363-1.805 0 1.805-1.165 5.735-1.165 5.735s4.077-2.875 5.36-7.65c1.281-4.776-2.441-9.57-2.441-9.57.224 3.38-1.03 6.704-3.485 9.244.123-.13.226-.273.305-.43.441-.804 1.15-2.896.735-7.741C13.197 2.868 6.442 0 6.442 0 7.024 4.144 5.28 5.098 1.19 12.964c-4.09 7.864 3.74 12.855 3.74 12.855z"></path></svg></span>
          <span>This week</span>
        </a>
      </div>
      {/* Past first sBCtrls */}
      <div className="sBCtrls">
        <div className='sBInnerTitle'>
          <span>Top</span>
        </div>
        <a className='sBinnerCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_all-time-top-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 16"><path fill="#FFF" d="M23.91 5.03a.636.636 0 01-.019.198l-1.535 5.867a.693.693 0 01-.673.505l-9.212.044H3.256c-.32 0-.6-.208-.677-.505L1.044 5.25a.637.637 0 01-.018-.204C.432 4.868 0 4.336 0 3.711c0-.772.657-1.4 1.465-1.4s1.466.628 1.466 1.4c0 .435-.209.824-.535 1.08l1.922 1.851c.486.468 1.16.736 1.85.736.815 0 1.592-.37 2.082-.99l3.159-3.999a1.365 1.365 0 01-.43-.989c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .374-.156.714-.407.966l.003.003 3.135 4.01c.49.625 1.27.999 2.088.999.696 0 1.35-.26 1.842-.73l1.935-1.847a1.375 1.375 0 01-.548-1.09c0-.772.657-1.4 1.465-1.4.809 0 1.466.628 1.466 1.4 0 .61-.41 1.127-.98 1.32zm-1.704 8.703c0-.368-.312-.666-.698-.666H3.458c-.385 0-.698.298-.698.666v1.6c0 .369.313.667.698.667h18.05c.386 0 .698-.298.698-.667v-1.6z"></path></svg></span>
          <span>All Time Top 250</span>
        </a>
        <a className='sBinnerCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 22"><path d="M12.104 14.338c0-.2-.173-.324-.384-.273 0 0-.99.236-1.72.236s-1.72-.236-1.72-.236c-.21-.05-.384.072-.384.273v1.058c0 .2.179.365.397.365h3.414c.218 0 .397-.165.397-.365v-1.058zM16.033.73c0-.403-.355-.73-.794-.73H4.761c-.439 0-.794.327-.794.73v6.02c0 1.884.61 3.599 1.716 4.829A5.738 5.738 0 0010 13.499c1.67 0 3.202-.682 4.317-1.92 1.107-1.23 1.716-2.945 1.716-4.83V.73zM3.211 8.211C2.125 7.84 1.625 6.978 1.625 5.545V2.286h1.468V.827H.831c-.438 0-.794.327-.794.73v3.988c0 2.434 1.268 3.916 3.6 4.262a8.274 8.274 0 01-.426-1.596zm1.549 8.644c-.438 0-.793.327-.793.73v3.612c0 .402.355.73.794.73H15.24c.438 0 .793-.328.793-.73v-3.612c0-.403-.355-.73-.793-.73H4.76zM19.169.827h-2.262v1.46h1.468v3.258c0 1.433-.5 2.295-1.586 2.666a8.269 8.269 0 01-.426 1.596c2.332-.346 3.6-1.828 3.6-4.262V1.557c0-.403-.356-.73-.794-.73z" fill="#FFF"></path></svg></span>
          <span>Best of this year</span>
        </a>
        <a className='sBinnerCrls' href="#">
          <span><svg className="SVGInline-svg discover-sidebar__icon-svg discover-sidebar__icon_year-top-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 16"><path fill="#FFF" fillRule="evenodd" d="M0 4h6v12H0V4zm9-4h6v16H9V0zm9 6h6v10h-6V6z"></path></svg></span>
          <span>Popular in 2021</span>
        </a>
      </div>
    </div>
  )
}
