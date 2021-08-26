import { useParams } from "react-router-dom";
import useFetch from "../Components/useFetch";

const BlogDetails = () => {
  const {id} = useParams()
  const {data: blog, error, pending} = useFetch('http://localhost:8000/blogs/' + id)

  return (
    <div className="blog-details">
      {pending && <div>Loading...</div>}
      {error && <div>{error} </div>}
      {blog && (
        <article>
          <h2> {blog.title}</h2>
          <p>{blog.body}</p>
        </article>
      )}
      <h2>Blog Details - {id} </h2>
    </div>
  );
}

export default BlogDetails
