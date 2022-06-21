import {profileTitleInput, profileInfoInput} from './Data.js';
export default class UserInfo {
  constructor ({name, job}) {
    this._name = name;
    this._job = job;
  }

  getUserInfo () {
  profileTitleInput.value = this._name.textContent;
  profileInfoInput.value = this._job.textContent;
  }

  setUserInfo (dataProfile) {
    this._name.textContent = dataProfile.inputtitle;
    this._job.textContent = dataProfile.inputinfo;
  }
}
