/*
 * @Author: xiewenhao
 * @Date: 2023-04-06 15:16:01
 * @LastEditTime: 2023-04-06 15:31:33
 * @Description: 
 */
import { Navigate, useLocation } from "react-router-dom";
import { ReactNode, FC } from "react";
interface Iprops {
  children?: ReactNode;
}
const Private: FC<Iprops> = (props) => {
  const token = sessionStorage.getItem("token");
  const location = useLocation();
  if (token) {
    return <>{props.children}</>;
  } else {
    return <Navigate to={`/?redirect${location.pathname}`}></Navigate>;
  }
};

export default Private;
