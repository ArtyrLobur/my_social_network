import React from "react";
import s from './Profile.module.css';

const Profile = () => {
    return  <div className={s.content}>
    <div className={s.content_bar_img}>
      <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
    </div>
    <div> ava + description </div>
    <div>
      {" "}
      My post
      <div> New post </div>
    </div>
    <div className={s.posts}>
      <div className={s.item}>Post1</div>
      <div className={s.item}>Post2</div>
    </div>
  </div>
}

export default Profile;