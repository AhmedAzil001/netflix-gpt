import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { lang } from "../utils/language";
import {
  removeNowPlayingMovie,
  removeVideo,
  removePopularMovie,
  removeTopRatedMovie,
} from "../utils/movieSlice";
import { toggleGpt } from "../utils/gptSlice";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const config = useSelector((store) => store.config);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  //const [isOpen, setOpen] = useState(false);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGpt());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        dispatch(removeNowPlayingMovie());
        dispatch(removePopularMovie());
        dispatch(removeVideo());
        dispatch(removeTopRatedMovie());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img className="w-48 absolute ml-[2rem] p-2 z-10" src={LOGO} alt="Logo" />

      {user && (
        <div>
          <select
            onChange={handleLangChange}
            className="absolute cursor-pointer right-[17rem] z-20 top-5 bg-gray-900 outline-none p-2 text-white rounded"
          >
            {SUPPORTED_LANGUAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleGptSearchClick}
            className="absolute right-32 z-20 top-5 px-4 py-2 bg-purple-800 text-white rounded font-medium cursor-pointer"
          >
            {lang[config.lang].gpt}
          </button>
          <img
            onClick={handleSignOut}
            className=" cursor-pointer absolute w-12 right-14 top-3 z-10 rounded-sm"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Header;
