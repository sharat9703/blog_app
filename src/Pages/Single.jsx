import React from "react";
import Img1 from "../assets/randImg1.jpg";
import Img2 from "../assets/randPerson.jpg";
import Edit from "../assets/edit.png";
import Delete from "../assets/delete.png";
import { Link } from "react-router-dom";
import Menu from "../Components/Menu";
const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src={Img1} alt="pic1" />
        <div className="user">
          <img src={Img2} alt="randperson" />

          <div className="info">
            <span>John</span>
            <span>Posted 2 days ago</span>
          </div>
          <div className="edit">
            <Link className="link" to="/write?edit=2">
              <img src={Edit} alt="edit" />
            </Link>

            <img src={Delete} alt="delete" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non
          pellentesque nulla
        </h1>
        <p>
          <p>
            Integer nec metus eros. Maecenas at risus vitae massa iaculis
            iaculis eget at tortor. Quisque finibus magna nec luctus maximus.
            Sed et orci et orci tincidunt mattis nec ut ex. Vestibulum orci
            metus, tempor nec blandit porttitor, tempor placerat mauris. Nullam
            eget elementum massa. Aenean porttitor neque justo, et imperdiet leo
            fringilla vel.
          </p>

          <p>
            Phasellus suscipit tellus vitae orci suscipit, in consectetur felis
            porttitor. Pellentesque quam risus, scelerisque sed hendrerit
            tempor, maximus in ante. Nulla a mattis quam, vel aliquet velit.
            Duis mattis magna eu euismod consequat. Curabitur augue mauris,
            dictum eget vestibulum eu, feugiat eget tellus. In nunc quam,
            hendrerit nec commodo in, efficitur ut sapien. Phasellus semper,
            eros at blandit commodo, ante elit tincidunt quam, in lacinia enim
            neque vel urna. Duis dapibus eu dui et consectetur. Vestibulum
            euismod lorem urna, eget lacinia eros rhoncus quis. Aliquam ligula
            lectus, commodo a sagittis euismod, venenatis quis odio. Sed
            convallis bibendum malesuada. Curabitur tristique et mauris at
            lobortis. Donec ullamcorper, arcu vitae tempus rutrum, dui mi
            euismod enim, a venenatis lacus nisi ultricies metus. Cras tristique
            enim ac risus finibus convallis vel quis justo. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Vestibulum urna nisl, condimentum sed ligula in, sodales
            cursus nisl.
          </p>
          <p>
            Mauris ultrices neque nec magna interdum, at porttitor sapien
            pellentesque. Sed porttitor commodo augue, vel interdum lorem
            placerat dignissim. Donec faucibus at turpis nec pulvinar. Nullam
            sed egestas ligula, nec porttitor felis. Praesent porttitor magna
            semper fermentum pulvinar. Duis finibus efficitur viverra. Donec
            ligula mi, commodo quis tortor at, maximus rutrum sem. Maecenas
            gravida neque lectus, et porta purus volutpat et. Maecenas tortor
            magna, consequat sit amet ligula et, varius ultricies urna. Sed ex
            nisi, facilisis id rutrum at, egestas eu nisl.
          </p>
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
