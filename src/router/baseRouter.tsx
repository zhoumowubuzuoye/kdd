/*
 * @Author: xiewenhao
 * @Date: 2023-04-06 13:52:54
 * @LastEditTime: 2023-04-06 14:57:19
 * @Description: 
 */
import LoginView from "../views/LoginView";
import Admin from "../views/admin/AdminView";

const baseRouter = [
  { path: "/", element: <LoginView /> },
  { path: "/admin", element: <Admin />, children: [] },
];

export default baseRouter;
