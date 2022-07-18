import { ref, reactive } from "vue";
import { IRuleForm } from "@/interface/index";
export default function userFormOperates(t: any) {

  const activeName = ref("login");
  const ruleFormRef = ref();
  const loginText = ref(t("login.loginBtn"));

  const form: IRuleForm = reactive({
    mobile: "",
    password: "",
  });

  // 表单校验
  const rules = reactive({
    mobile: [
      {
        required: true,
        min: 11,
        max: 11,
        message: t("login.placeMobile"),
        trigger: "blur",
      },
    ],
    password: [
      {
        required: true,
        message: t("login.placePass"),
        trigger: "blur",
      },
    ],
  });

  return {
    activeName,
    ruleFormRef,
    loginText,
    form,
    rules
  }
}
