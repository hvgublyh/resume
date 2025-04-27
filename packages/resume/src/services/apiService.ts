import axiosInstance from "../utils/axiosConfig";

export type Menu = {
  menuId: string;
  menuName: string;
};

export type Menus = ApiResponse<Menu[]>;

type ApiResponse<T> = {
  code: number;
  data: T;
  message: string;
}
export const getDemos = async (): Promise<Menus> => {
  const response: Menus = await axiosInstance({
    method: "GET",
    url: "/getMenus",
  });
  return response;
};
