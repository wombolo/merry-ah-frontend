const loginProps = {
  auth: {
    isLoading: false,
  },
  loginUser: () => null,
  history: {
    push: () => null,
  },
  sendResetPasswordEmail: () => null,
  completePasswordReset: () => null,
  location: {
    search: {},
  },
  signUp: () => null,
};

const signUpProps = {
  auth: {
    isLoading: false,
  },
  history: {
    push: () => null,
  },
  signUp: () => null,
};

export { loginProps, signUpProps };
