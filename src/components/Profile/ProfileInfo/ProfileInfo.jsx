import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return  (
    <div>
      <div className={s.content_bar_img}>
        <img src="https://www.iphones.ru/wp-content/uploads/2021/09/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2021-09-07-%D0%B2-19.48.05.jpg"></img>
      </div>
      <div className={s.descriptionBlock}> ava + description </div>
    </div>
    )
}

export default ProfileInfo;