## tModLoader 常见问题Q&A
* 下面涉及到的词语  
游戏目录: `/sdcard/Android/data/ModLoader.Explendesco`.  
泰拉瑞亚原版游戏目录: `/sdcard/Android/data/com.and.games505.TerrariaPaid/`.  
文件管理器建议用MT管理器
* Q: tModLoader 在哪里下载
```
浏览器搜索 tModLoader手机版 随便下一个都行，TLMobile上收录的mod以tModLoader网上最流传的版本(0.11.6.2旧版本)可以正常加载为最低标准
改版不提供，可以问t_xYz
```
* Q: tModLoader 闪退怎么办
```
前几次闪退或者不闪退都是正常的，这是tModLoader在进行初始化
后面打开黑屏也是正常的，需要等一会，用多了会快一些，魔改版这些现象会轻一些
```
* Q: tModLoader UI太小怎么办
```
进游戏找设置调整缩放，也可以在游戏目录config.json中找到
Zoom和UIScale两个key，将: 后面的数字改成1.5就差不多了
```
* Q: 模组/汉化不加载
```
将下载的模组文件(.tmod)解压到游戏目录的Mods文件夹里，如果后缀是.zip则点开，将里面的.tmod解压到Mods文件夹里
.locpack是mod的汉化包，需要放在Localizations文件夹里，如果有修改汉化需求则可以按压缩包打开.locpack文件夹
```
* Q: Mod从哪里下载
```
很多人第一反应是去TLM的QQ群里下载，其实不提倡去qq群下载mod
建议在网站下载(https://tlm.lapis-net.top/)，因为网站收录的mod大多数都是经过测试可以在旧版本(最流传版本)tModLoader正常加载的，而群里的mod就没有这种保证
不允许外传的mod请去其作者的群里下载
也可以去泰拉瑞亚模组浏览器镜像(https://mirror.sgkoi.dev/)里下载，不过大部分mod并不适配tModLoader移植版
当然您可以去找模组浏览器里mod自动构建的仓库，可以看我视频 【【Terraria】(手机演示) 随和找到泰拉瑞亚模组浏览器里模组的旧版本-哔哩哔哩】 https://b23.tv/dQ38zXP
```
* Q: 如何导入世界和存档
```
世界(.wld)文件扔进游戏目录Worlds文件夹
玩家(.plr,.tplr)文件扔进Players文件夹，tplr文件是tModLoader的玩家mod数据文件，不是备份文件
.bak文件是备份文件，如果做错了事可以删除文件然后将备份文件的.bak后缀去掉
本方法原版和ML通用
```
* Q: 按键重叠调不动
```
修改游戏目录里touchHotKeys.json，x是按键的横坐标，y是按键的竖坐标，弄不懂可以删掉那行重新设置
```
* Q: 游戏内模组浏览器闪退
```
模组浏览器服务器在国外，不闪退你也连不上，不建议用公共vpn，另外就算你连上了很多mod也不适配移植版的tModLoader的api版本，就像泰拉瑞亚模组浏览器镜像一样，而且你应该也发现了，它那个搜索用不了，模组浏览器和模组管理都是一样的
```
* Q: 游戏UI点不到
```
将按键模式(物品栏按钮下面)调整为free
```
* Q: 加载mod闪退/创建地图闪退
```
如多次闪退请检查Mod适配性问题，个别mod加载后无法创建地图
Mod按键设置里找按键往下滑，找到mod按键，用默认按键，然后再添加按键
```
* Q: MOD 初始物品没给
```
请新建角色(，旧角色当然没有
```
* Q: 按键无效
```
设为默认后去 游戏目录/input profiles.json 里查找默认按键并修改为字母按键
```
* Q: 创建世界没有进度条
```
有没有都是正常的
```
* Q: 如何打开袋子/宝匣一类的东西
```
物品栏两指同时点击屏幕，一手指点击物品，另一手指点击非物品栏区域，没成功就多试几次
```
* Q: 如何打开聊天栏
```
移植版不支持聊天，并且联机的Client存在问题，自己玩玩得了
```
* Q: mod不会玩怎么办
```
浏览器去查Mod wiki
```
* Q: 新人有没有简单的mod推荐
```
灾厄就行，最经典也最有名的泰拉瑞亚mod
```
## TEFModLoader 常见问题Q&A
* Q: 如何下载TEFML
```
建议从Gitlab下载最新版TEFML(官方源)
https://gitlab.com/2079541547/tefmodloader/-/releases
*-beta为测试版，建议使用非测试版
食用教程: 【[TEFML][使用教程] 电子扫盲-哔哩哔哩】 https://b23.tv/KuqvqJ9
```
* Q: 谷歌购买的Terraria为什么无法修补
```
这是由于谷歌为了保护创作者权益而针对安卓平台采取的一项特殊措施，直接提取出来的apk会缺斤少两
你猜TLPRO破解版为什么是apks
```
* Q: TLMod 不加载
```
TEFModLoader的mod后缀名是.efmod
TLPRO是.tl，两者不通用，部分可以加载的原因是TLpro也支持加载材质包，部分材质包会被命名为.tl
```
* Q: TEFML可以用电脑的材质包以及TLPRO的材质包  
(我没有用过TefML，所以很多问题我也没法给出具体的回答，各位可以去Eternal大佬的群里问)
## 我应该使用哪种ModLoader
```
我有钱/我会安装apks
  - TRPro
我没钱
  - 我想玩著名mod且设备不太差
    TModLoader 移植版
  - 我设备很差/支持新ModLoader/我习惯手机Terraria的按键操作
    TEFModLoader
  - 我想联机/我不想卸载原版本
    Termux + TShock
```
<!--# TShock 常见问题 Q&A
* 从哪里下载tshock
```
Github找tshock的仓库，在release里找linux arm64的版本
下载之后用rar命令解压或者用mt管理器打开本地存储，找到并解压，用cd到你解压到的文件夹里，输入
./TShock.Installer
快速启动，依赖会自动被安装，我在容器里跑的，完全没有问题
```
* 如何装插件
```
在服务端文件夹下找到ServerPlugins文件夹
将dll插件文件扔进去就行，插件配置会在启动服务器时自动生成，具体在tshock文件夹里
插件可以到 https://docs.terraria.ink/zh/guide/get-start.html 寻找
强烈推荐ModifyWeapons插件，可以自定义武器
```-->
## TLMobile 相关问题
* Q: 访问不了怎么办
```
将url的协议http改成https
再不行等会再访问，还不行进群问我
```
* Q: 下载不了
```
别用VPN/代理一类的东西
我DNS设置了代理，全球大部分地区应该都可以访问
```
* Q: 电脑端问题 💢
```
我没做，懒得做，我手机开发的
你V我1000买个电脑我就做
```
* Q: 提交问题
```
首先，你要有个邮箱，第二，邮箱不是说你注册邮箱用的手机号或微信号一类的东西，而是像xxx@qq.com这样的邮箱地址
第三，建议复制url到浏览器打开
不要触犯当地的法律，不要上传空东西，不要上传移植版tModLoader无法加载的mod，不要使用国外的下载链接，不要上传不允许外传的mod，如果有(LICENSE)，请确保mod中包含原作者所使用的许可证，无论是否必须，都联系以愿望提供
材质包分类算TEFModLoader
```
* Q: English Support
```
I'm really not have enough time for i18n work. You can try use a proxy to China for mod download.
Alright, We warmly welcome all the experts to submit PullRequests for TLMobile
```
## 逆天问题
~~我一想到下面的问题就想笑~~
* 对泰拉瑞亚犯错了怎么办  
`？人之常情`
* upup，对TLMobile犯错了怎么办🥵  
`没救了，没收作案工具吧`
* 泰拉瑞亚的第一个npc是什么  
`你猜你为什么会问这个问题`
