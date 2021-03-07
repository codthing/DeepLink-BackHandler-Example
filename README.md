# DeepLink-BackHandler-Example
深层链接和android返回键的例子

expo + react-native + react navigation v5

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

