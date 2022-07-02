import {profileTitleInput, profileInfoInput} from './Data.js';
export default class UserInfo {
  constructor ({name, about}) {
    this._name = name;
    this._about = about;
  }

  getUserInfo () {
  profileTitleInput.value = this._name.textContent;
  profileInfoInput.value = this._about.textContent;
  }

  setUserInfo (dataProfile) {
    this._name.textContent = dataProfile.name;
    this._about.textContent = dataProfile.about;
  }
}
