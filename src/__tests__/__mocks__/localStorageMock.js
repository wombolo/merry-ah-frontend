const localStorage = {};
export default {
  setItem(key, value) {
    return Object.assign(localStorage, { [key]: value });
  },
  clear: jest.fn(),
};
