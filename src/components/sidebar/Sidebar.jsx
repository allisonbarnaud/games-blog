import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
          <span className="sidebarTitle">ABOUT ME</span>
          <img 
            src="https://64.media.tumblr.com/a3517dd855444857c5f82a2e97e36b1e/0fa827a4b17c44d5-09/s540x810/c64e3b80155901656ce2e5813553d7bc2def96c2.gifv" 
            alt="" 
          />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis ex magnam laboriosam modi.
          </p>
        </div>
        <div className="sidebarItem">
          <span className="sidebarItem">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sports</li>
            <li className="sidebarListItem">Cinema</li>
            <li className="sidebarListItem">Tech</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">Follow us!</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
    </div>
  )
}
