import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        className="headerImg" 
        src="https://www.wallpaperflare.com/static/979/532/21/video-games-landscape-dauntless-videogame-trees-wallpaper.jpg" 
        alt="" 
      />
    </div>
  )
}
