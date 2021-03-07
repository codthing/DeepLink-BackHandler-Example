import * as Linking from 'expo-linking';

export default {
  prefixes: ['a08://'],
  config: {
    screens: {
        Root: {
          screens: {
            TabOne: {
              screens: {
                TabOneScreen: 'one',
              },
            },
            TabTwo: {
              screens: {
                TabTwoScreen: 'two',
              },
            },
          },
        },
      //   NotFound: '*',
      List: {
        path: 'list/:id',
        parse: {
          id: (id: any) => `${id}`
        }
      },
      Detail: {
        path: 'detail/:id',
        parse: {
          id: (id: any) => `${id}`
        }
      }
    }
  },
};
