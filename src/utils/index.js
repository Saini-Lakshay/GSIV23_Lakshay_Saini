export const actionTypeCreator = (action) => ({
  // request, success and failure type creator common function
  REQUEST: `${action}_REQUEST`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
});

export const actionCreator = (ACTION) => ({
  // common function to create action for request, success and failure
  REQUEST: (payload, callback, ...rest) => ({
    type: ACTION.REQUEST,
    payload,
    callback,
    ...rest,
  }),
  SUCCESS: (payload) => ({
    type: ACTION.SUCCESS,
    payload,
  }),
  FAILURE: (payload) => ({
    type: ACTION.FAILURE,
    payload,
  }),
});

export const mapQueryParams = (prevUrl, paramData) => {
  // add query params to url
  let url = prevUrl;
  if (Object.keys(paramData).length) {
    Object.keys(paramData).map((key, index) => {
      url = url + `&${key}=${paramData[key]}`;
    });
  }
  return url;
};

export const getYearFromdate = (date) => {
  if (date) {
    return new Date(date).getFullYear();
  }
  return "";
};

export const applyDebounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};
