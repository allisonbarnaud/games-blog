import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
            className="postImg"
            src="https://wallpaperaccess.com/full/625497.jpg"
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit, amet.
            </span>
            <span className="postDate">
                1 hour ago
            </span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur quaerat assumenda, quasi fuga qui soluta modi quibusdam, commodi at dolores recusandae consequatur eum, dolorem placeat iusto quis aliquam perspiciatis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur quaerat assumenda, quasi fuga qui soluta modi quibusdam, commodi at dolores recusandae consequatur eum, dolorem placeat iusto quis aliquam perspiciatis?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus pariatur quaerat assumenda, quasi fuga qui soluta modi quibusdam, commodi at dolores recusandae consequatur eum, dolorem placeat iusto quis aliquam perspiciatis?
        </p>
    </div>
  )
}
