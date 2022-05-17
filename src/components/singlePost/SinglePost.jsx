import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img 
          src="https://wallpaperaccess.com/full/625497.jpg" 
          alt="" 
          className="singlePostImg" 
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet conse.
          singlepost
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Allison</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur placeat explicabo culpa deleniti quasi maiores nesciunt sapiente asperiores officia aperiam nam nobis, hic, ut unde cum. Officiis, ipsa officia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur placeat explicabo culpa deleniti quasi maiores nesciunt sapiente asperiores officia aperiam nam nobis, hic, ut unde cum. Officiis, ipsa officia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur placeat explicabo culpa deleniti quasi maiores nesciunt sapiente asperiores officia aperiam nam nobis, hic, ut unde cum. Officiis, ipsa officia!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur placeat explicabo culpa deleniti quasi maiores nesciunt sapiente asperiores officia aperiam nam nobis, hic, ut unde cum. Officiis, ipsa officia!
        </p>
      </div>
    </div>
  )
}
