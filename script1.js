//Test data
const TEST_LOGIN_1 = "test@mail.test";
const TEST_PASS_1 = "nNkZT.wNmrx16";
const TEST_LOGIN_2 = "test2@mail.test";
const TEST_PASS_2 = "000000";
const TEST_LOGIN_3 = "test3@mail.test";
const TEST_PASS_3 = "000000";
//Test data

const form = document.querySelector(".registration__form");
const BASE_URL = "http://test.kluatr.ru/api/user/";
const urlLogin = "login";
const urlData = "data";

axios.defaults.withCredentials = true;
const login = (email, password) => {

	return axios.post(BASE_URL + urlLogin, {
    email: email,
    password: password,
  });
};

const getPoints = (email, password) => {
  login(email, password)
    .then((response) => {
      if (response.data.success === true) {
        axios
          .get(BASE_URL + urlData)
          .then((response) => console.log(`Ответ getPoints`, response))
          .catch((error) => console.log(error));
      } else {
        throw new Error(`Авторизуйтесь`);
      }
    })
    .catch((error) => console.log(error));
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  // login(TEST_LOGIN_1, TEST_PASS_1);
  getPoints(TEST_LOGIN_1, TEST_PASS_1);
};
