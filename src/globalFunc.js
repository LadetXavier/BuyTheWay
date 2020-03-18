import { saveUser, saveRankXP } from 'src/actions/user.js';
import Cookies from 'js-cookie';



export const getUserData = (requestAction) => {
  requestAction({
    url: `http://54.164.43.47:3000/user/${Cookies.get('user_id')}`,
    onSuccess: saveUser,
    label: 'userLoading',
  });

  requestAction({
    url: `http://54.164.43.47:3000/ranks`,
    onSuccess: saveRankXP,
    label: 'RankLoading',
  });
}
