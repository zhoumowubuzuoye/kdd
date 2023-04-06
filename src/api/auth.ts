import request from "../utils/request";
import { UserType } from "../types";
export function login(data: UserType) {
  return request.post("/api/login", data);
}
