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

const createArtProps = {
  artProps: {
    files: [],
    isLoading: true,
    categories: [],
    error: '',
  },
  history: {
    push: () => null,
  },
  handleUploadImages: () => null,
  getCategories: () => null,
};

const bookmarkProps = {
  bookmark: {
    isFetching: true,
    bookmarks: {
      data: ['addsadd', 'test'],
    },
  },
  getBookmarkArt: jest.fn(),
};
export {
  loginProps, signUpProps, createArtProps, bookmarkProps,
};
