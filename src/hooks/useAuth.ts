import {useState} from "react"
import http from "../http"
import { Auth } from '../contexts/AuthContext';
import {User} from "../types/User";

const useAuth = (): Auth => {

  const [userInfo, setUserInfo] = useState<User | null>(() => {
    const cacheUser = localStorage.getItem('user') || null;
    return cacheUser ? JSON.parse(cacheUser) : null;
  });

  const [token, setToken] = useState<string | null>(() => {
    // 缓存
    const cacheToken = localStorage.getItem('token') || null;
    const cacheTokenExpires = Number(localStorage.getItem('token_expires') || 0);

    // 是否过期
    const isExpired = Date.now() - cacheTokenExpires >= 0

    return !isExpired ? cacheToken : null;
  });


  const [isAdmin, setIsAdmin] = useState<number>(Number(localStorage.getItem('isAdmin')) || 0);

  const login = async (data: any) => {

    if (!data) {
      const token = "token";
      setToken(token);
      localStorage.setItem('token', token);
      const tokenExpires = Date.now() + 100000 * 60 * 1000 * 1000
      localStorage.setItem('token_expires', String(tokenExpires));

      return true;
    }

    try {
      const response = await http.post('/auth/login', data);

      const {token, user, expiresIn} = response.data;

      const tokenExpires = Date.now() + expiresIn * 60 * 1000 * 1000

      // 本地存储
      localStorage.setItem('isAdmin', user.isAdmin);
      localStorage.setItem('token', token);
      localStorage.setItem('token_expires', String(tokenExpires));
      setToken(token);


      localStorage.setItem('user', JSON.stringify(user));
      setUserInfo(user);

      setIsAdmin(user.is_admin);

      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  const logout = async () => {
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('token');
    localStorage.removeItem('toke_expires');
    setToken(null);
    setIsAdmin(0);
  };

  return { setToken, token, isAdmin: !!token && isAdmin === 1, login, logout, userInfo };
}

export default useAuth;
