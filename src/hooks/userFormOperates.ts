import { getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";
import { useStore } from '@/store/index'
export default function userFormOperates(router: any, params: any) {
  //获取store对象
  const store = useStore()
  // 获取全局对象
  const { proxy }: any = getCurrentInstance();
  interface IRuleForm {
    mobile: string;
    password: string;
  }

  // 注册接口方法
  const userSign = async (params: IRuleForm) => {
    const res = await proxy.$api.sign(params);
    if (res.code == 200) {
      ElMessage.success(res.msg);
    } else {
      ElMessage.error(res.msg);
    }
  };

  // 登录接口方法
  const userLogin = async (params: IRuleForm) => {
    const res = await proxy.$api.login(params);
    if (res.code == 200) {
      ElMessage.success(res.msg);
    } else {
      ElMessage.error(res.msg);
    }
    store.commit("saveUserInfo", res.data);
    router.push({ name: "home" });
  };

  //登出接口方法
  const userLogout = async () => {
    let params = store.state.userInfo;
    const res = await proxy.$api.logout(params);
    store.commit("saveUserInfo", res.data);
    router.push({ name: "login" });
  };

  return {
    userSign,
    userLogin,
    userLogout
  }
}
