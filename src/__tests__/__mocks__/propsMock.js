const loginProps = {
  auth: {
    isLoading: false,
  },
  loginUser: () => null,
  history: {
    push: () => null,
  },
  signUp: () => null
};

const signUpProps = {
  auth: {
    isLoading: false,
  },
  history: {
    push: () => null,
  },
  signUp: () => null
};

const createArtProps = {
  artProps:{
    files: [],
    isLoading: true,
    categories:[],
    error: ''
  },
  history: {
    push: () => null,
  },
  addFile : () => null,
  removeFile: () => null,
  handleUploadImages: () => null,
  getCategories: () => null
};

export {loginProps, signUpProps,createArtProps};
