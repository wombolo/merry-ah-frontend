import { promised } from 'q';

/* eslint-disable import/prefer-default-export */

export const props = {
  getUserProfile: () => Promise.resolve(),
  getUserArts: () => Promise.resolve(),
  editProfile: () => Promise.resolve(),
  auth: {
    user: {
      id: 7,

    },
  },
  user: {
    isGettingArts: false,
    userArts: [
      {
        featuredImg: 'image.url',
        Category: {
          categoryName: 'Poetry',
        },
        slug: 'isuguixu',
        title: 'some title',
        description: 'some descriptions',

      },
    ],
    userProfile: {
      userType: 'artist',
      id: 7,
      profile: {
        imgURL: 'img.URL',
        bio: 'my bio',
        firstName: 'Juliet',
        lastName: 'Ezekwe',
      },
    },
  },
};
