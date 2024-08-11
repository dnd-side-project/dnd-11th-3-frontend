import { navbarWrapperStyle } from './navbar.css'

export function NavBar() {
   return (
      <div className={navbarWrapperStyle}>
         <div>Q&A</div>
         <div>대화</div>
         <div>마이페이지</div>
      </div>
   )
}
