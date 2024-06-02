import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {

  const [menu, setMenu] = useState(false);
  const [subMenu, setsubMenu] = useState(false)

  const menuOpen = () => {
    setMenu(!menu);
    setsubMenu(false);
    document.body.classList.toggle('no-scroll');
  }
  const subMenuOpen = (e) => {
    e.preventDefault();
    setsubMenu(!subMenu)
  }
  const menuItem = [
    {
      id: Math.floor(Math.random() * 1000),
      path: "/habot",
      menu: "find suppliers"
    },
    {
      id: Math.floor(Math.random() * 1000),
      path: "/habot/find-service",
      menu: "find service tags",
      submenu: [
        {
          id: Math.floor(Math.random() * 1000),
          path: "/habot/submenu1",
          menu: "submenu 1",
        },
        {
          id: Math.floor(Math.random() * 1000),
          path: "/habot/submenu2",
          menu: "submenu 2",
        },
        {
          id: Math.floor(Math.random() * 1000),
          path: "/habot/submenu3",
          menu: "submenu 3",
        },
      ]
    }
  ]
  return (
    <>
      <header className="px-[15px] sticky shadow-[2px_2px_4px_rgba(0,0,0,0.4)] top-[0px] bg-[white] md:py-[15px] z-[99]">
        <div className="container">
          <div className="row">
            <div className="menubar flex flex-wrap justify-between items-center">
              <div className="logo w-[20%] md:w-[40%]">
                <NavLink to="/habot" className="block img-link w-[181px] h-[36px] capitalize ss:w-[150px] ss:h-[35px] s:w-[125px] s:h-[30px] s-[350px]:w-[100px] s-[350px]:h-[25px]">
                  <img src={process.env.PUBLIC_URL + '/img/logo.png'} className="block ss:h-[100%]" alt="" />
                </NavLink>
              </div>
              
              <div className="menu-btn flex items-center">
                <div className={`menu duration-300 opacity-[1] md:max-h-[0px] md:overflow-hidden md:absolute md:w-[100%] md:top-[80px] md:opacity-[0] md:left-[0px] md:z-[2] md:bg-[white] md:shadow-[2px_2px_4px_rgba(0,0,0,0.4)] ${menu ? 'menuActive': "" } xs:top-[74px]  s:top-[62px]`}>
                  <ul className="flex flex-wrap">
                    {
                      menuItem.map((val) => {
                        const { id, path, menu, submenu } = val;
                        if (submenu) {
                          return (
                            <>
                              <li className="relative px-[20px] py-[30px] md:w-[100%] md:p-[0px]">
                                <NavLink to={path} onClick={(e) => subMenuOpen(e)} className="group relative  flex items-center border-b-[3px] border-[transparent] duration-300 after:absolute after:content-[''] after:bottom-[-3px] after:right-[0] after:h-[2px] after:w-[0%] after:duration-300 after:bg-[#EB7150] hover:after:w-[100%] hover:after:left-[0] text-[#737373] hover:text-[#EB7150] capitalize md:after:hidden md:hover:text-[#737373] md:p-[15px]">{menu}
                                  <span className="mt-[3px] ml-[4px]">
                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path className="duration-300 group-hover:stroke-[#EB7150] md:group-hover:stroke-[#737373]" d="M13.0866 5.99996L8.41991 10.6666L3.75324 5.99996" stroke="#6D6E71" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                  </span>
                                </NavLink>

                                {
                                  subMenu && (
                                    <div className="submenu absolute bg-[white] shadow-[2px_2px_4px_rgba(0,0,0,0.4)] top-[84px] z-[2] left-[25px] min-w-[230px] md:top-[0px] md:top-[52px] md:left-[0px]">
                                      <ul>
                                        {
                                          submenu.map((val) => {
                                            const { id, menu, path } = val;

                                            return (
                                              <>
                                                <li key={id}>
                                                  <NavLink to={path} className="block relative duration-300 px-[10px] py-[8px] capitalize md:px-[15px] md:py-[10px] hover:text-[#eb7150]  duration-300 after:absolute after:content-[''] after:bottom-[-2px] after:right-[0] after:h-[1.5px] after:w-[0%] after:duration-300 after:bg-[#EB7150] hover:after:w-[100%] hover:after:left-[0] text-[#737373] hover:text-[#EB7150] capitalize md:pb-[15px] md:after:hidden border-b-[2px] border-white">{menu}</NavLink>
                                                </li>
                                              </>
                                            )
                                          })
                                        }
                                      </ul>
                                    </div>
                                  )
                                }
                              </li>
                            </>
                          )
                        }

                        else {
                          return (
                            <>
                              <li key={id} className="px-[20px] py-[30px] md:w-[100%] md:p-[0px]">
                                <NavLink exact activeClassName="active_menu" to={path} className="relative  flex items-center duration-300 after:absolute after:content-[''] after:bottom-[-4px] after:right-[0] after:h-[2px] after:w-[0%] after:duration-300 after:bg-[#EB7150] hover:after:w-[100%] hover:after:left-[0] text-[#737373] hover:text-[#EB7150] capitalize md:after:hidden md:hover:text-[#737373] md:p-[15px]">{menu}</NavLink>
                              </li>
                            </>
                          )
                        }
                      })
                    }
                  </ul>
                </div>

                <div className="btn px-[20px] s:px-[5px]">
                  <a href="#" className="capitalize font-bold duration-300 text-green-700 block px-[42px] py-[12px] border border-[#00732F] rounded xs:px-[18px] xs:py-[10px] hover:bg-[#00732F] hover:text-[white] s:py-[8px] s:px-[10px] s-[350px]:text-[13px] s-[350px]:py-[7px]">login/sign up</a>
                </div>

                <div className="hamburgerMenu hidden md:block" onClick={menuOpen}>
                  <span>
                  {
                    menu ? <CloseIcon /> : <MenuIcon />
                  }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;