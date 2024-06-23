import React, { useContext, useEffect, useState } from "react";
// import Img1 from "../assets/randImg1.jpg";
// import Img2 from "../assets/randPerson.jpg";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Menu from "../components/Menu";
import axios from "axios";
import moment from 'moment';
import { AuthContext } from "../context/authContext";
const Single = () => {
 const [post,setPost] = useState({});
 const postId = useLocation().pathname.split("/")[2];
 const {currentUser} = useContext(AuthContext);
 const navigate = useNavigate();
 useEffect(()=>{
  const fetchData = async()=>{
    try {
      const res = await axios.get(`http://localhost:8500/api/posts/${postId}`);
      setPost(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();
 },[postId]);
const handleDelete = async() => {
   try {
    await axios.delete(`http://localhost:8500/api/posts/${postId}`);
    navigate("/");
   } catch (error) {
     console.log(error);
   }
}
console.log(post);
  return (
    <div className="single">
      <div className="content">
        <img src={post?.postImg} alt="pic1" />
         <div className="user">
         {post.userImg && <img src={post.userImg} alt="randperson" />
        }
          <div className="info">
            <span>{post.username}</span>
            <span>Posted {moment(post.date).fromNow()}</span>
          </div>
          {currentUser.username === post.username && (<div className="edit">
            <Link className="link" to="/write?edit=2">
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" onClick={handleDelete}/>
          </div>)}
        </div>
        <h1>
          {post.title}
        </h1>
        {post.desc}
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
