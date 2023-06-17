/**
 * 验证手机号码 最宽松验证 1 开头即可
 *
 */

const validMobileLoose = (mobile) => {
  const reg = /^(?:(?:\+|00)86)?1\d{10}$/;
  if (reg.test(mobile)) {
    return true;
  } else {
    return false;
  }
};

export default validMobileLoose;
