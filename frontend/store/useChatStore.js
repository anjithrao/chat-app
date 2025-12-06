import { create } from "zustand";
import { axiosInstance } from "../src/lib/axios";
import toast from "react-hot-toast";


export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false,


    getusers: async () => {
        set({ isUsersLoading: true });
        try {
            const res = axiosInstance.get("/message/users");
            set({ users: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        }
        finally {
            set({ isUsersLoading: false });
        }
    },
    getmessages: async (userId) => {
        set({ isMessagesLoading: true });
        try {
            const res = axiosInstance.get(`/message/getmsg/${userId}`);
            set({messages:res.data});
        } catch (error) {
            toast.error(error.response.data.message)
        }
        finally{
            set({isMessagesLoading:false});
        }
    }
    



}))