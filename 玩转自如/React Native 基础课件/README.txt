https://facebook.github.io/react-native/
https://reactnative.cn/


Mac下的命令：

1.command + space  搜索

2.command + N 打开一个新的窗口

3.command + T，一个窗口多个终端（分Tab）

4.command + D，一个窗口多个终端（上下两个或多个）

5.shift + command + D，合并4中的两个或多个窗口

## Mac开发ios应用

环境搭建->开发平台

选择开发平台：mac 目标平台：ios

### 安装依赖

#### Node, Watchman

brew install node
brew install watchman

> 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global


#### Yarn、React Native 的命令行工具（react-native-cli）

sudo npm install -g yarn react-native-cli


安装完 yarn 后同理也要设置镜像源：

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

#### 安装Xcode【默认会安装Command Line Tools】

Xcode 的命令行工具

启动 Xcode，并在Xcode | Preferences | Locations菜单中检查一下是否装有某个版本的Command Line Tools


### 创建新项目

react-native init MyApp

###

cd MyApp
react-native run-ios


#### 修改项目
现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

使用你喜欢的编辑器打开App.js并随便改上几行。
在 iOS 模拟器中按下⌘-R(或者使用dev menu中的enable live reload 或 enable hot reloading)就可以刷新 APP 并看到你的最新修改！（如果没有反应，请检查模拟器的 Hardware 菜单中，connect hardware keyboard 选项是否选中开启）




## Mac开发Android的应用


#### Node, Watchman

brew install node
brew install watchman


brew install watchman 一直卡在Updating Homebrew…的解决办法

解决办法是：

1.ctrl + c 结束当前更新命令，会自动执行安装命令

或者

2.先关闭homebrew自动更新

export HOMEBREW_NO_AUTO_UPDATE=true

或者

3.替换brew源：


替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git


替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git 

# 备用地址-1
cd "$(brew --repo)"
git remote set-url origin https://git.coding.net/homebrew/brew.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://git.coding.net/homebrew/homebrew.git
brew update

# 备用地址-2
cd "$(brew --repo)"
git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git


重置brew.git:
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git

重置homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git

或者

4.替换brew

cd /usr/local
git remote set-url origin git://mirrors.tuna.tsinghua.edu.cn/homebrew.git//清华镜像源
git remote set-url origin http://mirrors.ustc.edu.cn/homebrew.git//中科大镜像源

//二者选其一即可更新

cd ~
mkdir tmp
cd tmp
//以下要与你选择的镜像源相同
git clone git://mirrors.tuna.tsinghua.edu.cn/homebrew.git
git clone http://mirrors.ustc.edu.cn/homebrew.git
 
sudo rm -rf /usr/local/.git
sudo rm -rf /usr/local/Library
sudo cp -R homebrew/.git /usr/local/
sudo cp -R homebrew/Library /usr/local/

另外，brew --cache 可以查看下载的缓存目录
默认的缓存目录为 /User/***/Cache/Homebrew




> 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global


#### Yarn、React Native 的命令行工具（react-native-cli）

sudo npm install -g yarn react-native-cli


安装完 yarn 后同理也要设置镜像源：

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global


### Java Development Kit

React Native 需要 Java Development Kit [JDK] 1.8（暂不支持 1.9 及更高版本）。你可以在命令行中输入

> javac -version来查看你当前安装的 JDK 版本。如果版本不合要求，则可以到 官网上下载。


### Android 开发环境

> 译注：请注意！！！国内用户必须必须必须有稳定的翻墙工具，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些翻墙工具可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那么 99% 就是无法正常翻墙。

1. 安装 Android Studio

[首先下载和安装 Android Studio](https://developer.android.com/studio/index.html)，国内用户可能无法打开官方链接，请自行使用搜索引擎搜索可用的下载链接。安装界面中选择"Custom"选项，确保选中了以下几项：

- Android SDK
- Android SDK Platform
- Performance (Intel ® HAXM) (AMD 处理器看这里)
- Android Virtual Device


然后点击"Next"来安装选中的组件。

> 如果选择框是灰的，你也可以先跳过，稍后再来安装这些组件。

安装完成后，看到欢迎界面时，就可以进行下面的操作了


2. 安装 Android SDK

Android Studio 默认会安装最新版本的 Android SDK。目前编译 React Native 应用需要的是Android 9 (Pie)版本的 SDK（注意 SDK 版本不等于终端系统版本，RN 目前支持 android4.1 以上设备）。你可以在 Android Studio 的 SDK Manager 中选择安装各版本的 SDK。

你可以在 Android Studio 的欢迎界面中找到 SDK Manager。点击"Configure"，然后就能看到"SDK Manager"。

> SDK Manager 还可以在 Android Studio 的"Preferences"菜单中找到。具体路径是Appearance & Behavior → System Settings → Android SDK。

在 SDK Manager 中选择"SDK Platforms"选项卡，然后在右下角勾选"Show Package Details"。展开Android 9 (Pie)选项，确保勾选了下面这些组件（重申你必须使用稳定的翻墙工具，否则可能都看不到这个界面）：

- Android SDK Platform 28
- Intel x86 Atom_64 System Image（官方模拟器镜像文件，使用非官方模拟器不需要安装此组件）

然后点击"SDK Tools"选项卡，同样勾中右下角的"Show Package Details"。展开"Android SDK Build-Tools"选项，确保选中了 React Native 所必须的28.0.3版本。你可以同时安装多个其他版本。

最后点击"Apply"来下载和安装这些组件。

3. 配置 ANDROID_HOME 环境变量

React Native 需要通过环境变量来了解你的 Android SDK 装在什么路径，从而正常进行编译。

具体的做法是把下面的命令加入到~/.bash_profile文件中：

> 译注：~表示用户目录，即/Users/你的用户名/，而小数点开头的文件在 Finder 中是隐藏的，并且这个文件有可能并不存在。可在终端下使用vi ~/.bash_profile命令创建或编辑。如不熟悉 vi 操作，请点击这里学习。

# 如果你不是通过Android Studio安装的sdk，则其路径可能不同，请自行确定清楚。

export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/emulator

> 如果你的命令行不是 bash，而是例如 zsh 等其他，请使用对应的配置文件。

使用source $HOME/.bash_profile命令来使环境变量设置立即生效（否则重启后才生效）。可以使用echo $ANDROID_HOME检查此变量是否已正确设置。

> 请确保你正常指定了 Android SDK 路径。你可以在 Android Studio 的"Preferences"菜单中查看 SDK 的真实路径，具体是Appearance & Behavior → System Settings → Android SDK。

### 创建新项目

使用 React Native 命令行工具来创建一个名为"AwesomeProject"的新项目：

```
react-native init AwesomeProject
```

> 提示：你可以使用--version参数（注意是两个杠）创建指定版本的项目。例如react-native init MyApp --version 0.44.3。注意版本号必须精确到两个小数点。

Windows 用户请注意，请不要在某些权限敏感的目录例如 System32 目录中 init 项目！会有各种权限限制导致不能运行！

如果你是想把 React Native 集成到现有的原生项目中，则步骤完全不同，请参考[集成到现有原生应用](https://reactnative.cn/docs/integration-with-existing-apps/)。


### 准备 Android 设备

你需要准备一台 Android 设备来运行 React Native Android 应用。这里所指的设备既可以是真机，也可以是模拟器。后面我们所有的文档除非特别说明，并不区分真机或者模拟器。Android 官方提供了名为 Android Virtual Device（简称 AVD）的模拟器。此外还有很多第三方提供的模拟器如[Genymotion](https://www.genymotion.com/account/)、BlueStack 等。一般来说官方模拟器免费、功能完整，但性能较差。第三方模拟器性能较好，但可能需要付费，或带有广告。

#### 使用 Android 真机

你也可以使用 Android 真机来代替模拟器进行开发，只需用 usb 数据线连接到电脑，然后遵照[在设备上运行](https://reactnative.cn/docs/running-on-device/)这篇文档的说明操作即可。


#### 使用 Android 模拟器

你可以使用 Android Studio 打开项目下的"android"目录，然后可以使用"AVD Manager"来查看可用的虚拟设备，它的图标看起来像下面这样：

如果你刚刚才安装 Android Studio，那么可能需要先[创建一个虚拟设备](https://developer.android.com/studio/run/managing-avds.html)。点击"Create Virtual Device..."，然后选择所需的设备类型并点击"Next"，然后选择Pie API Level 28 image.

> 译注：请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。

> 如果你还没有安装 HAXM（Intel 虚拟硬件加速驱动），则先按[这篇文档](https://software.intel.com/en-us/android/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-mac-os-x)说明来进行安装。

然后点击"Next"和"Finish"来完成虚拟设备的创建。现在你应该可以点击虚拟设备旁的绿色三角按钮来启动它了，启动完后我们可以尝试运行应用。

### 编译并运行 React Native 应用

确保你先运行了模拟器或者连接了真机，然后在你的项目目录中运行react-native run-android：
```
cd AwesomeProject
react-native run-android
```

如果配置没有问题，你应该可以看到应用自动安装到设备上并开始运行。注意第一次运行时需要下载大量编译依赖，耗时可能数十分钟。此过程*严重依赖稳定的翻墙工具*，否则将频繁遭遇链接超时和断开，导致无法运行。

如果你的设备的 Android 版本低于 5.0，则可能在运行时看到红屏，请阅读在[设备上运行](https://reactnative.cn/docs/running-on-device/)这篇文档来按照步骤解决。

react-native run-android只是运行应用的方式之一。你也可以在 Android Studio 或是[Nuclide](https://nuclide.io/)中直接运行应用。

> 译注：建议在run-android成功后再尝试使用 Android Studio 启动。请不要轻易点击 Android Studio 中可能弹出的建议更新项目中某依赖项的建议，否则可能导致无法运行。

> 如果你无法正常运行，遇到奇奇怪怪的红屏错误，先回头仔细对照文档检查，然后可以看看论坛的求助专区。不同时期不同版本可能会碰到不同的问题，我们会在论坛中及时解答更新。但请注意千万不要执行 bundle 命令，那样会导致代码完全无法刷新。

#### 修改项目

现在你已经成功运行了项目，我们可以开始尝试动手改一改了：

- 使用你喜欢的文本编辑器打开App.js并随便改上几行

- 按两下 R 键，或是在开发者菜单中选择 Reload JS，就可以看到你的最新修改。

#### 完成了！

恭喜！你已经成功运行并修改了你的第一个 React Native 应用。


## Windows下开发Android

安装依赖

必须安装的依赖有：Node、React Native 命令行工具、Python2 以及 JDK 和 Android Studio。

虽然你可以使用任何编辑器来开发应用（编写 js 代码），但你仍然必须安装 Android Studio 来获得编译 Android 应用所需的工具和环境。


### Node, Python2, JDK

我们建议直接使用搜索引擎搜索下载 Node 、Python2 和Java SE Development Kit (JDK)【也可以使用Chocolatey安装 choco install -y nodejs.install python2 jdk8】

注意 Node 的版本必须大于等于 10，Python 的版本必须为 2.x（不支持 3.x），而 JDK 的版本必须是 1.8（目前不支持 1.9 及更高版本）。安装完 Node 后建议设置 npm 镜像以加速后面的过程（或使用科学上网工具）。

> 注意：不要使用 cnpm！cnpm 安装的模块路径比较奇怪，packager 不能正常识别！

npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global

### Yarn、React Native 的命令行工具（react-native-cli）

Yarn是 Facebook 提供的替代 npm 的工具，可以加速 node 模块的下载。React Native 的命令行工具用于执行创建、初始化、更新项目、运行打包服务（packager）等任务。

npm install -g yarn react-native-cli

安装完 yarn 后同理也要设置镜像源：

yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global

装完 yarn 之后就可以用 yarn 代替 npm 了，例如用yarn代替npm install命令，用yarn add 某第三方库名代替npm install 某第三方库名。

### Android 开发环境

如果你之前没有接触过 Android 的开发环境，那么请做好心理准备，这一过程相当繁琐。请万分仔细地阅读下面的说明，严格对照文档进行配置操作。

> 译注：请注意！！！国内用户必须必须必须有稳定的翻墙工具，否则在下载、安装、配置过程中会不断遭遇链接超时或断开，无法进行开发工作。某些翻墙工具可能只提供浏览器的代理功能，或只针对特定网站代理等等，请自行研究配置或更换其他软件。总之如果报错中出现有网址，那么 99% 就是无法正常翻墙。


npm install react-native-vector-icons --save
或者
yarn add react-native-vector-icons

react-native link

yarn start 启动App

react-native run-ios 安装应用到ios模拟器

react-native run-android 安装应用到android模拟器

yarn add react-navigation

开发过程中遇到非程序代码的保存问题 可能需要重新运行react-native run-ios或react-native run-android重新编译并安装到模拟器

还不行的话就要重新安装依赖 并重新启动  使用yarn管理包时 yarn upgrade  使用 npm管理包时 要删除node_modules目录 npm i 重新安装依赖 
然后再运行 react-native run-ios或react-native run-android

如果使用了 react-native-vector-icons  可能还需要 yarn run fixIcon (fixIcon需要在package.json的scripts中配置)



## 简易沙盒环境

Create React Native App is the easiest way to start building a new React Native application. It allows you to start a project without installing or configuring any tools to build native code - no Xcode or Android Studio installation required (see Caveats).

Assuming that you have Node installed, you can use npm to install the create-react-native-app command line utility:

npm install -g create-react-native-app

hen run the following commands to create a new React Native project called "AwesomeProject":

create-react-native-app appName 
cd appName
npm / yarn start

This will start a development server for you, and print a QR code in your terminal.

### Running your React Native application

Install the [Expo](https://expo.io/) client app on your iOS or Android phone and connect to the same wireless network as your computer. Using the Expo app, scan the QR code from your terminal to open your project.


### Modifying your app

Now that you have successfully run the app, let's modify it. Open App.js in your text editor of choice and edit some lines. The application should reload automatically once you save your changes.

npm run android

npm run ios (macOS only).

npm run eject
