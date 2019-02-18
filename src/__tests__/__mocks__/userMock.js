const mockData = {
  authResponse: {
    status: 'Ok',
    messages: 'User logged in successfully',
    data: {
      token:
    `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwi
    dXNlcm5hbWUiOiJhYmVqaWRlLWZlbWkiLCJ1c2VyRW1haWwiO
    iJlbWFpbDFAZ21haWwuY29tIiwic2lnblVwVHlwZSI6ImxvY2FsI
    iwidXNlclR5cGUiOiJhcnRpc3QiLCJpc0FjdGl2ZSI6dHJ1ZSwiaWF0IjoxN
    TQ5OTU4MzQyLCJleHAiOjE1NDk5OTQzNDJ9.bhi0P_Zsiu2IjNZJ19XS
    5DUDHQofUzHHW_mfGysHo7U`,
    },
  },
  signinData: {
    email: 'email1@gmail.com',
    password: 'abcdefgh',
  },
  resetEmail: {
    email: 'danny@gmail.com',
  },
  resetEmailResponse: {
    status: 'Ok',
    code: 200,
    messages: 'Email sent successfully',
    data: {
      token:
      `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6
      MTQsImVtYWlsIjoiZGFuaWVsY2hpZGllYmVsZUBnbWFpbC
      5jb20iLCJ1c2VybmFtZSI6IkRhbm55IiwiaWF0IjoxNTUw
      NDUxNjcxLCJleHAiOjE1NTA0NTUyNzF9.Eyvu6ppkXzUHO
      u2xXwxQzNyh8hmeege7TVUP1YIp1Yg`,
    },
  },
  passwordReset: {
    password: 'qwertyuiop',
    confirmPassword: 'qwertyuiop',
  },
  passwordResetResponse: {
    status: 'Ok',
    code: 200,
    messages: 'Password successfully updated',
  },
  noTokenError: {
    status: 'error',
    message: 'No token provided',
  },
};
export default mockData;
