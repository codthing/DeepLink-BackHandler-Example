# DeepLink-BackHandler-Example
深层链接和android返回键的例子

expo + react-native + react navigation v5

## Configuration

> 在 `/android/app/src/main/AndroidManifest.xml` 中配置 scheme 访问前缀

```javascript
<intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="myapp"/>
        <data android:scheme="com.notbrent.mofengfs"/>
        <data android:scheme="a08"/>
</intent-filter>

```
或者命令行执行

``` base
npx uri-scheme add mychat --android
```

> 配置深层链接

```javascript
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

```

> `NavigationContainer` 中调用深层链接

```javascript
<NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
</NavigationContainer>

```
android backbutton 不能返回上一页的解决办法

> 每个非首页屏幕都要添加goBack代码

```javascript
import { BackHandler } from 'react-native';

export const listScreen = ({ navigation: { goBack } }) => {

  // 返回上一屏  start
  function handleBackButtonClick() {
    goBack();
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButtonClick);
    };
  }, []);
  // 返回上一屏  end

 ...
 ...

```


## how to use

> install

```javascript
git clone https://github.com/mofengfs/DeepLink-BackHandler-Example.git

//Project root directory
yarn

//Open the emulator  start
yarn android

```

> params/stack list/detail

```javascript
npx uri-scheme open a08://list/123 --android
npx uri-scheme open a08://detail/123 --android

```

> tab test

```javascript
npx uri-scheme open a08://two --android

```

### Expected Results:

Open the app `manually`,
when I click the `android backbutton`,
I can go back to the previous screen.

