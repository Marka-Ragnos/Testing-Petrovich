//Test data
const TEST_LOGIN_1 = "test@mail.test";
const TEST_PASS_1 = "nNkZT.wNmrx16";
const TEST_LOGIN_2 = "test2@mail.test";
const TEST_PASS_2 = "000000";
const TEST_LOGIN_3 = "test3@mail.test";
const TEST_PASS_3 = "000000";
//Test data

const submitBtn = document.querySelector(".submit-btn");
const BASE_URL = "http://test.kluatr.ru/api/user/";
const urlLogin = "login";
const urlData = "data";
const headers = {
  "Content-Type": "application/json",
};

const sendRequest = (method, url, body) => {
  return fetch(url, {
    method: method,
    body: body ? JSON.stringify(body) : null,
    headers: headers,
  }).then((response) => {
    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${url}, статус ошибки ${response.status}`
      );
    }
    return response.json();
  });
};

const authorization = () => {
  const body = {
    //Раскомментировать для кастомных логина и пароля
    // email: document.querySelector("#email").value,
    // password: document.querySelector("#password").value,
    email: TEST_LOGIN_1,
    password: TEST_PASS_1,
  };

  sendRequest("POST", BASE_URL + urlLogin, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
};

submitBtn.addEventListener("click", authorization);