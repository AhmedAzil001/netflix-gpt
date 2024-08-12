import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import {
  removeNowPlayingMovie,
  removeVideo,
  addVideo,
} from "../utils/movieSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const movie = useSelector((state) => state.movie?.playVideo);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
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
        dispatch(removeVideo());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <img className="w-48 absolute ml-24 p-2 z-10" src={LOGO} alt="Logo" />

      {user && (
        <button
          className="text-black absolute z-10 right-4 top-2 bg-slate-300 text-black py-2 px-3 rounded-sm font-medium"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      )}
    </div>
  );
};

export default Header;
