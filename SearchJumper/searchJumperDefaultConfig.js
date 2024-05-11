//Open setting page to change data, NOT HERE!
let lang = navigator.appName === "Netscape" ? navigator.language : navigator.userLanguage;
let sitesConfig = {};
switch (lang) {
    case "zh-CN":
    case "zh-SG":
        sitesConfig = [
            {
                "type": "百科",
                "icon": "book-open-reader",
                "sites": [
                    {
                        "name": "维基",
                        "url": "https://zh.wikipedia.org/wiki/%s",
                        "description": "The largest and most-read reference work in history.#wiki"
                    },
                    {
                        "name": "百度百科",
                        "url": "https://baike.baidu.com/search/word?pic=1&sug=1&word=%s",
                        "description": "A semi-regulated Chinese-language collaborative online encyclopedia owned by the Chinese technology company Baidu.#wiki",
                        "match": "baike\\.baidu\\.com/search/"
                    },
                    {
                        "name": "果壳",
                        "url": "https://www.guokr.com/search/all/?wd=%s"
                    },
                    {
                        "name": "豆瓣",
                        "url": "https://www.douban.com/search?source=suggest&q=%s.replace(/\\./g,\" \")"
                    },
                    {
                        "name": "Bangumi 番组计划",
                        "url": "https://bgm.tv/subject_search%p{cat=all&search_text=%s}",
                        "icon": "https://bgm.tv/img/favicon.ico"
                    }
                ]
            },
            {
                "type": "社交",
                "icon": "users",
                "sites": [
                    {
                        "name": "知乎",
                        "url": "https://www.zhihu.com/search?q=%s&type=content"
                    },
                    {
                        "name": "V2ex",
                        "url": "https://www.sov2ex.com/?q=%s",
                        "icon": "https://sov2ex.oss-cn-shanghai.aliyuncs.com/assets/favicon/apple-icon-57x57.png"
                    },
                    {
                        "name": "百度贴吧",
                        "url": "https://tieba.baidu.com/f/search/res?ie=utf-8&qw=%s",
                        "keywords": "kw|qw",
                        "match": "^https?://tieba\\.baidu\\.com/f"
                    },
                    {
                        "name": "新浪微博",
                        "url": "https://s.weibo.com/weibo?q=%s"
                    },
                    {
                        "name": "微信搜索",
                        "url": "https://weixin.sogou.com/weixin?ie=utf8&type=2&query=%s"
                    }
                ]
            },
            {
                "type": "图片",
                "icon": "image",
                "sites": [
                    {
                        "name": "百度图片",
                        "url": "https://image.baidu.com/search/index?tn=baiduimage&ie=utf-8&word=%s"
                    },
                    {
                        "name": "谷歌图片",
                        "url": "https://www.google.com/search?q=%s&tbm=isch",
                        "match": "www\\.google\\..*tbm=isch"
                    },
                    {
                        "name": "图片聚合搜索",
                        "url": "https://www.google.com/search?tbm=isch&as_q=%s%20(site:www.pexels.com%20OR%20site:pixabay.com%20OR%20site:unsplash.com%20OR%20site:stocksnap.io%20OR%20site:pxhere.com%20OR%20site:www.hippopx.com%20OR%20site:foter.com%20OR%20site:freepik.com%20OR%20site:colorhub.me)"
                    },
                    {
                        "name": "Pinterest",
                        "url": "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta"
                    },
                    {
                        "name": "Deviantart",
                        "url": "https://www.deviantart.com/browse/all/?q=%s"
                    },
                    {
                        "name": "ChatGPT搜索GIF",
                        "url": "https://poe.com/ChatGPT#p{sleep(1000)&[class*\\='ChatMessageInputContainer'] textarea=hey ChatGPT. hope you're having a great day. From now on you will respond to anything I say with the perfect gif response. Once you know what gif you want to use, compile the most accurate and perfect search phrase that will result in the specific gif you want to send. respond with url: \" Sure, I'm happy to help you!\\n http://scythe-spot-carpenter.glitch.me/search?search_term\\=<SEARCH+PHRASE>.gif \n%s&click(button[class*\\='ChatMessageSendButton_sendButton'])}",
                        "openInNewTab": true
                    }
                ]
            },
            {
                "type": "搜索",
                "icon": "search",
                "description": "搜索引擎主分类",
                "sites": [
                    {
                        "name": "百度",
                        "url": "https://www.baidu.com/s?wd=%s&ie=utf-8",
                        "keywords": "(?:wd|word)=(.*?)(&|$)",
                        "match": "https?://(www|m)\\.baidu\\.com/.*(wd|word)=",
                        "shortcut": "KeyB",
                        "alt": true
                    },
                    {
                        "name": "百度高级搜索",
                        "url": "https://www.baidu.com/s?wd=%s%input{请输入限制文件类型, filetype:doc/ filetype:ppt/ filetype:xls/ filetype:pdf}%input{请输入限制日期/过去一小时/过去一天/过去一周/过去一个月/过去一年,&gpc=stf%3D%date{/1000-3600}%2C%date{/1000}%7Cstftype%3D1/&gpc=stf%3D%date{/1000-86400}%2C%date{/1000}%7Cstftype%3D1/&gpc=stf%3D%date{/1000-604800}%2C%date{/1000}%7Cstftype%3D1/&gpc=stf%3D%date{/1000-2592000}%2C%date{/1000}%7Cstftype%3D1/&gpc=stf%3D%date{/1000-31536000}%2C%date{/1000}%7Cstftype%3D1}",
                        "match": "https://www\\.baidu\\.com/(s|baidu)",
                        "nobatch": true,
                        "hideNotMatch": true,
                        "openInNewTab": false
                    },
                    {
                        "name": "必应",
                        "url": "https://www.bing.com/search?q=%s",
                        "match": "^https://(www|cn|global)\\.bing\\.com/search"
                    },
                    {
                        "name": "360",
                        "url": "https://www.so.com/s?ie=utf-8&q=%s",
                        "match": "(www|m)\\.so\\.com/s\\?.*[&\\?]q="
                    },
                    {
                        "name": "搜狗",
                        "url": "https://www.sogou.com/web?query=%s",
                        "keywords": "(?:query|keyword)=(.*?)(&|$)",
                        "match": "(www|wap|m)\\.sogou\\.com/(web|web/searchList\\.jsp).*(query|keyword)="
                    },
                    {
                        "name": "F搜",
                        "url": "https://fsoufsou.com/search?q=%s",
                        "nobatch": true
                    }
                ]
            },
            {
                "type": "词典",
                "icon": "language",
                "sites": [
                    {
                        "name": "百度翻译",
                        "url": "https://fanyi.baidu.com/#auto/zh/%s"
                    },
                    {
                        "name": "DeepL",
                        "url": "https://www.deepl.com/translator#zh/en/%s",
                        "icon": "https://www.deepl.com/img/favicon/favicon_96.png"
                    },
                    {
                        "name": "谷歌翻译",
                        "url": "https://translate.google.com/?text=%s",
                        "match": "translate\\.google\\.com.*\\btext="
                    },
                    {
                        "name": "有道词典",
                        "url": "https://dict.youdao.com/search?q=%s",
                        "icon": "https://shared.ydstatic.com/images/favicon.ico"
                    },
                    {
                        "name": "POE",
                        "url": "https://poe.com/ChatGPT#p{sleep(1000)&[class*\\='ChatMessageInputContainer']>textarea=Please help me to translate \\`%s\\` to English, please return only translated content not include the origin text&click(button[class*\\='ChatMessageSendButton_sendButton'])}"
                    }
                ]
            },
            {
                "type": "影视",
                "icon": "video",
                "sites": [
                    {
                        "name": "bilibili",
                        "url": "https://search.bilibili.com/all?keyword=%s"
                    },
                    {
                        "name": "腾讯视频",
                        "url": "https://v.qq.com/x/search/?q=%s"
                    },
                    {
                        "name": "樱花动漫",
                        "url": "https://www.yhdmz.org/list/?ex=1&kw=%s"
                    },
                    {
                        "name": "在线之家",
                        "url": "https://www.zxzj.org/vodsearch/-------------.html?wd=%s",
                        "icon": "https://zxzj.vip/statics/img/favicon.ico"
                    },
                    {
                        "name": "小苹果影院",
                        "url": "https://www.163kp.cc/index.php?m=vod-search&wd=%s&submit="
                    },
                    {
                        "name": "谍影网",
                        "url": "https://www.tvdie.cc/search.html%p{searchword=%s}",
                        "icon": "https://www.tvdie.cc/favicon.ico"
                    },
                    {
                        "name": "茶杯狐",
                        "url": "https://cupfox.app/s/%s",
                        "icon": "https://p0.meituan.net/dpgroup/cd088044f183d2719f3f9fe56d5c34204207.png"
                    },
                    {
                        "name": "HOHO TV",
                        "url": "https://www.hoho.tv/vod/search.html%p{wd=%s}",
                        "icon": "https://www.hoho.tv/img/left_logo.png"
                    },
                    {
                        "name": "西瓜视频",
                        "url": "https://www.ixigua.com/search/%s/",
                        "icon": "https://sf1-cdn-tos.douyinstatic.com/obj/eden-cn/lpqpflo/ixigua_favicon.ico"
                    },
                    {
                        "name": "量子资源网",
                        "url": "http://lzizy.net/index.php/vod/search.html?wd=%s"
                    },
                    {
                        "name": "蚂蚁4K",
                        "url": "https://www.mayi4k.com/vodsearch/-------------.html?wd=%s",
                        "icon": "https://www.mayi4k.com/upload/mxcms/20230718-1/4bdda0aaaa64c431daf6254f99a5cae1.png",
                        "description": " 4K蓝光原盘磁力链115网盘下载"
                    }
                ]
            },
            {
                "type": "划词搜索",
                "icon": "sitemap",
                "selectTxt": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "关注我的公众号",
                        "url": "https://mp.weixin.qq.com/s?__biz=MzkxMjY1NjkzNQ==&mid=2247483662&idx=1&sn=faf637ec27d15fe02522ff0c6cd4957e",
                        "icon": "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico",
                        "description": "打开配置页删除此项"
                    },
                    {
                        "name": "百度 ",
                        "url": "[\"百度\"]"
                    },
                    {
                        "name": "Google",
                        "url": "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8",
                        "keywords": "textarea[name='q']",
                        "match": "https://www\\.google\\..*/search(?!.*tbm=isch)"
                    },
                    {
                        "name": "📄  复制",
                        "url": "c:%sr",
                        "nobatch": true
                    },
                    {
                        "name": "📝  粘贴",
                        "url": "paste:"
                    },
                    {
                        "name": "🔆 页内搜索",
                        "url": "find:%sr"
                    },
                    {
                        "name": "百度站内搜",
                        "url": "https://www.baidu.com/s?wd=%s%20site%3A%h&ie=utf-8"
                    },
                    {
                        "name": "文字转二维码",
                        "url": "https://hoothin.com/qrcode#%s",
                        "icon": "https://hoothin.com/qrcode/favicon.svg"
                    },
                    {
                        "name": "发送到手机",
                        "url": "https://s.hoothin.com/#p{wait(x-peer)&call(document.querySelector('x-peer').dispatchEvent(new Event('contextmenu')))&#textInput=%s&click(#textInput+div>button)}",
                        "icon": "https://s.hoothin.com/images/favicon-96x96.png",
                        "description": "自动发送选中文字到第一个匹配的设备"
                    },
                    {
                        "name": "问AI",
                        "url": "[\"Poe - Sage AI Chat\"]"
                    },
                    {
                        "name": "豆瓣评分",
                        "url": "showTips:https://www.douban.com/search?cat=1002&q=%s \n{name} \n<br/>\n<p style=\"margin: 5px;\">\n{h3>a}\n<span style=\"position: absolute; right: 10px; color: orange;\">{.rating_nums}</span>\n</p>\n<div style=\"display: flex; font-size: 20px; width: 500px;\">\n<img src=\"https://images.weserv.nl/?url={.pic>a>img|src}\"/>\n<div>\n<div>{.subject-cast}</div>\n<div style=\"font-size: 16px; margin-top: 10px; border-top: 1px solid;\">{.content>p}</div>\n</div>\n</div>",
                        "icon": "https://www.douban.com/favicon.ico"
                    },
                    {
                        "name": "维基百科预览",
                        "url": "showTips:https://zh.wikipedia.org/wiki/%s\n<div style=\"max-height: 500px; margin: 5px; overflow: hidden; font-size: large; text-align: left; font-weight: initial; line-height: initial;\">\n<img style=\"max-width: 250px; margin: 0 10px;\" align=\"left\" src=\"{.infobox img,figure>a>img|src}\"/>\n{.mw-parser-output>p}\n</div>"
                    },
                    {
                        "name": "Metacritic评分",
                        "url": "showTips:https://www.metacritic.com/search/%s/\n<div style=\"display: flex; font-size: 25px;\">\n<img src=\"{img.g-container-rounded-small|src}\"/>\n<div>\n<h2>{.c-pageSiteSearch-results-item>div>p}</h2>\n<div style=\"display: flex; justify-content: space-between; align-items: center;    border-top: 1px solid;\">\n<span style=\"margin: 0 10px;\">{.u-text-uppercase}</span>\n<span style=\"margin: 0 10px;\">{.c-pageSiteSearch-results-item strong}</span>\n<span style=\"color: orange;margin: 0 10px;\">{.c-siteReviewScore}</span>\n</div>\n</div>\n</div>"
                    },
                    {
                        "name": "IMDb评分",
                        "url": "showTips:https://www.imdb.com/find/?q=%s&exact=true.then{.find-title-result .ipc-metadata-list-summary-item__t}\n<h2 style=\"margin: 5px;\">\n{.hero__primary-text}\n<span style=\"position: absolute; right: 10px; color: orange;\">{.ipc-btn__text>div>div>div}</span>\n</h2>\n<div style=\"display: flex; font-size: 20px; width: 500px;\">\n<img style=\"height: fit-content;\" src=\"{.ipc-image|src}\"/>\n<div style=\"font-size: 16px; line-height: 1.5; text-align: left; margin: 5px;\">\n<div>{a.ipc-chip|<span style=\"white-space: nowrap;margin: 5px; font-size: 16px; border-radius: 5px; padding: 2px; box-shadow: 0px 0px 10px 0px #000;\">()</span>}</div>\n<div>Year: {h1+ul>li>.ipc-link}</div>\n<div>Director: {section>div>div>.title-pc-list>li:nth-child(1) li}</div>\n<div>Writer: {section>div>div>.title-pc-list>li:nth-child(2) li}</div>\n<div>Stars: {section>div>div>.title-pc-list>li:nth-child(3) li|()}</div>\n<div style=\"font-size: 16px; margin-top: 10px; border-top: 1px solid;\">{section>p>span}</div>\n</div>\n</div>"
                    },
                    {
                        "name": "展开所有引擎",
                        "url": "https://search.hoothin.com/all#%s"
                    },
                    {
                        "name": "磁力转种子-lolicon",
                        "url": "https://m2t.lolicon.app/#p{#magnet=%s}",
                        "kwFilter": "^magnet:",
                        "description": "磁力转种子",
                        "nobatch": true
                    },
                    {
                        "name": "Magnet-vip",
                        "url": "https://magnet-vip.com/#p{.form-group input=%s&click(.btn-outline-secondary)}",
                        "icon": "https://magnet-vip.com/favicon.png",
                        "kwFilter": "^magnet:",
                        "description": "磁力转种子",
                        "nobatch": true
                    },
                    {
                        "name": "💲美元转人民币",
                        "url": "showTips:http://apilayer.net/api/convert?from=USD&to=CNY&amount=1&access_key=%template{apilayer key} \n{name}<br/><i>%s USD = {json.result|*%s.replace(/\\D/g,'')} RMB</i>",
                        "kwFilter": "\\d\\$|\\$\\d",
                        "nobatch": true
                    },
                    {
                        "name": "📦 批量打开链接",
                        "url": "%s[all]",
                        "kwFilter": "^https?:"
                    },
                    {
                        "name": "🔗  打开文字链接",
                        "url": "%sr.replace(/(点|。)/g,\".\").replace(/[^ \\w\\-_\\.~!\\*';:@&=\\+\\$,\\/\\?#\\[\\]%]/g,\"\").replace(/.*([ :：]|^)(1[a-z0-9]{22,}).*?\\b([a-z0-9]{4}\\b|$).*/i,\"https://pan.baidu.com/s/$1?pwd=$2\").replace(/ /g,\"\").replace(/^/,\"http://\").replace(/^http:\\/\\/(https?:)/,\"$1\")",
                        "kwFilter": "\\w.*[\\.点。].*\\w|1[a-zA-Z0-9]{22,}",
                        "description": "支持类似“pan点baidu。com😄河蟹”以及“1bP23pzUpIV4CMuoMjOfxFA提取码:prt4”的分享链接",
                        "nobatch": true
                    },
                    {
                        "name": "汉语读音",
                        "url": "showTips:https://dict.baidu.com/s?wd=%s&ptype=zici\n<p style=\"margin: 3px\">{.means>div>dl>dt}</p>\n<span style=\"font-size: 18px; line-height: 25px; font-weight: normal; display: block; text-align: left;\">{.means>div>dl>dd}</span>",
                        "icon": "https://m.baidu.com/static/index/icon/w_icon2.png"
                    },
                    {
                        "name": "有道词典英译中",
                        "url": "showTips:https://dict.youdao.com/result?word=%s&lang=en\n{.phone_con}\n{.word-exp|<div style=\"font-size: 20px; line-height: initial; font-weight: normal;\">()</div>}",
                        "kwFilter": "^[a-zA-Z]+$"
                    },
                    {
                        "name": "↩️ 短链接还原",
                        "url": "showTips:%s\n{url}",
                        "kwFilter": "^https?://."
                    },
                    {
                        "name": "📺 预览视频",
                        "url": "showTips:\n<video loop autoplay src=\"%s\">\n<a href=\"%s\" download=\"%s\">Download video</a>\n</video>",
                        "kwFilter": "^http.*\\.(3gpp|m4v|mkv|mp4|ogv|webm)\\b"
                    },
                    {
                        "name": "🎵 预览音频",
                        "url": "showTips:\n<audio loop autoplay src=\"%s\">\n<a href=\"%s\" download=\"%s\">Download audio</a>\n</audio>",
                        "kwFilter": "^http.*\\.(flac|m4a|mp3|oga|ogg|opus|wav)\\b"
                    },
                    {
                        "name": "🏞️ 预览图片",
                        "url": "showTips:\n<img src=\"%s\">",
                        "kwFilter": "^http.*\\.(avif|bmp|gif|gifv|ico|jfif|jpe|jpeg|jpg|png|svg|webp|xbm)\\b"
                    }
                ]
            },
            {
                "type": "以图搜图",
                "icon": "eye",
                "selectImg": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "谷歌以图搜图",
                        "url": "https://www.google.com/searchbyimage?sbisrc=cr_1_0_0&image_url=%T"
                    },
                    {
                        "name": "二维码解码",
                        "url": "https://hoothin.com/qrdecode#p{#fileInput=%i}",
                        "icon": "https://hoothin.com/qrcode/favicon.svg"
                    },
                    {
                        "name": "谷歌翻译图片",
                        "url": "https://translate.google.com/?op=images#p{input[accept^\\=\"image\"]=%i}"
                    },
                    {
                        "name": "WhatAnime",
                        "url": "https://trace.moe/?url=%T",
                        "icon": "https://trace.moe/favicon.png"
                    },
                    {
                        "name": "Lunapic",
                        "url": "https://www.lunapic.com/editor/index.php?action=url&url=%t",
                        "description": "使用 Lunapic 编辑图片",
                        "nobatch": true
                    },
                    {
                        "name": "Gif控制器-以图搜图",
                        "url": "[\"Gif控制器\"]"
                    },
                    {
                        "name": "Pixlr easy",
                        "url": "https://pixlr.com/x/#p{click(#home-open-url)&#image-url=%t&click(.dialog>.buttons>a.button.positive)}",
                        "description": "使用 Pixlr easy 编辑图片",
                        "nobatch": true
                    },
                    {
                        "name": "SauceNAO",
                        "url": "https://saucenao.com/search.php?db=999&url=%t"
                    },
                    {
                        "name": "IQDB",
                        "url": "https://iqdb.org/?url=%t"
                    },
                    {
                        "name": "Yandex以图搜图",
                        "url": "https://yandex.com/images/search?source=collections&rpt=imageview&url=%T"
                    },
                    {
                        "name": "3D IQDB",
                        "url": "https://3d.iqdb.org/?url=%t"
                    },
                    {
                        "name": "百度以图搜图",
                        "url": "https://graph.baidu.com/details?isfromtusoupc=1&tn=pc&carousel=0&promotion_name=pc_image_shituindex&extUiData%5bisLogoShow%5d=1&image=%T"
                    },
                    {
                        "name": "必应以图搜图",
                        "url": "https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:%T"
                    },
                    {
                        "name": "TinEye",
                        "url": "https://www.tineye.com/search?url=%T"
                    },
                    {
                        "name": "搜狗以图搜图",
                        "url": "https://pic.sogou.com/ris?query=%T"
                    },
                    {
                        "name": "360以图搜图",
                        "url": "https://st.so.com/stu?imgurl=%t"
                    },
                    {
                        "name": "ImgOps",
                        "url": "https://imgops.com/%b"
                    },
                    {
                        "name": "Photopea",
                        "url": "https://www.photopea.com/#%7B%22files%22:%5B%22%t%22%5D,%22environment%22:%7B%7D%7D",
                        "nobatch": true
                    },
                    {
                        "name": "二维码生成-以图搜图",
                        "url": "[\"二维码生成\"]"
                    },
                    {
                        "name": "Google lens",
                        "url": "https://www.google.com/imghp#p{click([aria-label\\=\"Search by image\"])&[name\\=\"encoded_image\"]=%i}"
                    }
                ]
            },
            {
                "type": "Etc",
                "icon": "suitcase",
                "sites": [
                    {
                        "name": "邮编库",
                        "url": "http://www.youbianku.com/%s"
                    },
                    {
                        "name": "AMO",
                        "url": "https://addons.mozilla.org/zh-CN/firefox/search/?q=%s"
                    },
                    {
                        "name": "企查查",
                        "url": "https://www.qcc.com/search?key=%s",
                        "match": "^https?:\\/\\/www\\.qcc\\.com\\/(?:web|firm|search)"
                    },
                    {
                        "name": "天眼查",
                        "url": "https://www.tianyancha.com/search?key=%s",
                        "match": "^https?:\\/\\/www\\.tianyancha\\.com\\/(?:search|company)"
                    },
                    {
                        "name": "中國大陸地方志書目查詢系統",
                        "url": "https://webgis.sinica.edu.tw/place/query.asp?A1=%E5%9C%B0%E6%96%B9%E5%BF%97%E5%90%8D&B1=containing&C1=%s&Page_setup=10&D1=AND&A2=99&B2=containing&C2=&D2=AND&A3=99&B3=containing&C3=&page=1",
                        "charset": "Big5"
                    },
                    {
                        "name": "金山文档 · 一起办公才高效",
                        "url": "https://edu.kdocs.cn/?show=all#p{#app input.kdv-input__inner=%s}"
                    }
                ]
            },
            {
                "type": "Github",
                "icon": "fa-brands fa-github  ",
                "match": "github\\.com",
                "selectLink": true,
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "页面镜像 - Fastgit",
                        "url": "%u.replace(/https:\\/\\/github\\.com/,\"https://hub.fastgit.xyz\")",
                        "kwFilter": "https:\\/\\/github\\.com"
                    },
                    {
                        "name": "Raw镜像 - Fastgit",
                        "url": "%t.replace(/raw\\.githubusercontent\\.com/,\"raw.fastgit.org\").replace(/github.com(.*)\\/blob\\/(.*)/,\"raw.fastgit.org$1/$2\")",
                        "kwFilter": "github.com.*\\/blob\\/"
                    },
                    {
                        "name": "Assets镜像 - Fastgit",
                        "url": "%t.replace(/github\\.githubassets\\.com/,\"assets.fastgit.orgz\")",
                        "kwFilter": "github\\.githubassets\\.com"
                    },
                    {
                        "name": "Download镜像- Fastgit",
                        "url": "%t.replace(/github\\.com(.*\\/download\\/)/,\"download.fastgit.org$1\")",
                        "kwFilter": "github\\.com.*\\/download\\/"
                    },
                    {
                        "name": "Archive镜像- Fastgit",
                        "url": "%t.replace(/github\\.com(.*\\/archive\\/)/,\"download.fastgit.org$1\")",
                        "kwFilter": "github\\.com.*\\/archive\\/"
                    },
                    {
                        "name": "Ghproxy镜像加速",
                        "url": "https://ghproxy.com/%t"
                    }
                ]
            },
            {
                "type": "VIP",
                "icon": "data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgc3R5bGU9ImhlaWdodDogMWVtO2ZpbGw6IHdoaXRlO292ZXJmbG93OiBoaWRkZW47IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgcC1pZD0iODI3Ij48cGF0aCBkPSJNNjgzLjE5NTM2MyA1NjcuNjE1NDY5djM0OS4xNDQzOTloNzMuMzY5NDQyVjc4OS45NzUwMTdjMTE3LjI2ODMxMiAxLjczOTU4MiAxNzYuNzIxMDk1LTMuNDc5MTY1IDE5My4xOTU5NjItMTAzLjU1NjMxIDUuMjE4NzQ3LTI5LjI2NTkxNC01LjIxODc0Ny02Mi4xMTMzMjEtMTguMjE0NDQ5LTgwLjEyMzExNC0zOC42ODAxMjQtNTIuMzkyMTI2LTE1NS4wMjc0ODEtMzkuMzk2NDIzLTI0OC4zNTA5NTUtMzguNjgwMTI0ek03NTYuNTY0ODA1IDczMC42MjQ1NjN2LTEwMS44MTY3MjhjNTQuNDM4NjkzLTEuNzM5NTgyIDExMi4wNDk1NjUtNy43NzY5NTYgMTIxLjU2NjEwMyAzNi4yMjQyNDMgMTUuNjU2MjQxIDczLjU3NDA5OC02MC4zNzM3MzggNjcuMzMyMDY4LTEyMS41NjYxMDMgNjUuNTkyNDg1ek01NDEuODc5ODg0IDU2OS4zNTUwNTFjMC44MTg2MjcgMTE1LjUyODczIDAuODE4NjI3IDIzMS44NzYwODcgMS43Mzk1ODIgMzQ3LjQwNDgxN2g3MS42Mjk4NTlWNTY3LjYxNTQ2OWMtMjQuMTQ5NDk1IDEuMDIzMjg0LTQ4LjQwMTMxOSAxLjAyMzI4NC03My4zNjk0NDEgMS43Mzk1ODJ6TTY4MC43Mzk0ODIgMTAyLjEyMzcxM2MtMTEzLjA3Mjg0OSAxMTIuODY4MTkyLTIyNS44Mzg3MTMgMjI0LjkxNzc1OC0zMzkuNzMwMTg5IDMzNy45OTA2MDdWMTAyLjEyMzcxM0g2Ny42OTAyMTdjMC44MTg2MjcgMjIuNDA5OTEzIDAuODE4NjI3IDQ1LjYzODQ1MyAxLjczOTU4MiA2OC4xNTA2OTVoNjYuNDExMTEydjc0NS45NzM4MThjMjcxLjU3OTQ5NC0yNzEuNzg0MTUxIDU0Mi4zNDAzNjItNTQyLjU0NTAxOCA4MTMuOTE5ODU2LTgxNC4xMjQ1MTNINjgwLjczOTQ4MnoiIHAtaWQ9IjgyOCIvPjwvc3ZnPg==",
                "match": "v\\.qq\\.com/x/|\\.mgtv\\.com/.*b/|v\\.youku\\.com/(v_show|video)/|\\.iqiyi\\.com/(v_|dianying)",
                "sites": [
                    {
                        "name": "无名小站",
                        "url": "https://www.administratorw.com/video.php?url=%u"
                    },
                    {
                        "name": "小小解析",
                        "url": "http://tv.hzwdd.cn/#p{#url=%u&click(.btn-play)}",
                        "icon": "http://tv.hzwdd.cn/img/favicon.ico"
                    }
                ]
            },
            {
                "type": "辅助工具",
                "icon": "list-alt",
                "selectTxt": true,
                "selectImg": true,
                "selectAudio": true,
                "selectVideo": true,
                "selectLink": true,
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "手机号码聚合搜索",
                        "url": "[\"360\",\"搜狗\"]",
                        "icon": "data:image/jpg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCABAAEADASIAAhEBAxEB/8QAHAABAAICAwEAAAAAAAAAAAAAAAMIAgcBBQYE/8QAMxAAAQMDAgIIBAYDAAAAAAAAAQIDBAAFEQYSByEIEzFBUWFxgRQyUmIVIzNCkbFyoeH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AsPSlKBSlKBSo2X2pDfWR3UPI+ptYUP5FSUClKUCo33kRo7j7ytrbSCtZxnAAyf8AQqSsHWkPtLacGUOJKFehGD/dBU2+9JPV0nVZmWFbUK0tL/Kgusoc61Hi4rGcn7SMd3jVotPXpjUel7deY6drU+KiQEZzt3JyU+xyPaqFXSzvWvUsuzyilp6NKVGWpw4CSle3JPh31efQ2mjo/QtrsJkiUuExtU8OxaiSo4+3KiB5YoNbWXTvC3VE5Y4cXuTp2+N5KfgH3WHQR4su8lp8QO6vWaT1beIepTozXoZ/GOrL0C4sJ2s3NodpA/a4O9Pr79XJjwuLFsukOdZ3dPaxsTiercKwXojpG5paHU43IVjs/wCGun1FepWqeAto10W+rvtifbmBSU7T1rboaeH+Khzx2dlBuqlRsPIkR232vkdQFp9CMj+6koFKUoKxdJPh29DvA1pbGSqJL2t3AJH6ToGErPkoADP1D7hXp+CfGy33GzxdNatmIiXGKgMxpT6tqJKBySkqPILA5c/m5d9bvmQ41whPRJzDciM+gtutOp3JWk8iCO8VWriJ0bJ8OS7cNAH4yIolRtzqwHmvJCjyWPI4V60G/NSa40zo8sDUl4jQFyRlpC8qUseOEgnHn2V9tl1BZdRRS/YbnDuLKcbjGdSvbnxA5j3FUKvFrvNrkiPfYc2I80OrCJba0FIHcN3d6VtLo22K+yuIyLzBS41aYbbiJrx5Id3IIS0PqO7ary258MhbalKUClKUClKUGDrTb7ex9CXUH9riQofwa4ZYajtBqO0hptPYhtISB7CpKUClKUH/2Q=="
                    },
                    {
                        "name": "🧮  计算器",
                        "url": "calculator://"
                    },
                    {
                        "name": "🔎  Everything搜索",
                        "url": "ES://%s"
                    },
                    {
                        "name": "🦊  打开火狐",
                        "url": "FirefoxURL-308046B0AF4A39CB://%u"
                    },
                    {
                        "name": "⏰  时钟",
                        "url": "ms-clock://"
                    },
                    {
                        "name": "✂️  屏幕截图",
                        "url": "ms-screenclip://"
                    },
                    {
                        "name": "☑️  ToDo",
                        "url": "ms-todo://",
                        "description": "微软To-Do"
                    },
                    {
                        "name": "📓  Onenote",
                        "url": "onenote://"
                    },
                    {
                        "name": "⌨️  VSCode",
                        "url": "vscode://%u"
                    },
                    {
                        "name": "提取文本中链接并打开",
                        "url": "%sr.replace(/(点|。)/g,\".\").replace(/[^\\w\\-_\\.~!\\*'\\(\\);:@&=\\+\\$,\\/\\?#\\[\\]%]/g,\"\")"
                    },
                    {
                        "name": "敏感词查询",
                        "url": "http://www.txttool.com/t/?id=NDY4#p{#wordkey=%sr&click(.panel-body>div>button)}"
                    },
                    {
                        "name": "IP查询",
                        "url": "https://www.ipuu.net/query/ip?search=%sr"
                    },
                    {
                        "name": "⭐ 查找当前Favicon",
                        "url": "javascript:let ico=document.querySelector(\"link[rel='shortcut icon'],link[rel='icon']\");if(ico)window.open(ico.href, \"_blank\");else window.open(location.origin + \"/favicon.ico\", \"_blank\")"
                    },
                    {
                        "name": "🛠️ 扩展",
                        "url": "chrome://extensions/"
                    },
                    {
                        "name": "🐞 远程调试",
                        "url": "chrome://inspect/#devices"
                    },
                    {
                        "name": "🔖 书签管理器",
                        "url": "chrome://bookmarks/"
                    }
                ]
            },
            {
                "type": "当前网页",
                "icon": "list",
                "selectLink": true,
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "小众软件评论",
                        "url": "showTips:%t \n<style>\n#topic-title, #post_1, footer, header, .meta{\n display: none;\n}\n#main-outlet {\n  padding: 20px;\n  text-align: left;\n}\na {\n color: gray;\n}\n.crawler-post-meta {\n font-size: 12px;\n}\naside.quote {\n    margin: 10px 0px 0px 20px;\n    font-style: italic;\n}\nimg {\n    max-height: 200px;\n    width: auto;\n}\naside.onebox {\n    font-size: small;\n    border: 1px solid;\n    border-radius: 10px;\n    padding: 10px;\n    margin: 5px;\n}\n#main-outlet {\n    max-height: 800px;\n    overflow: auto;\n    pointer-events: all;\n}\n</style>\n{noscript[data-path]|innerHTML}",
                        "icon": "https://www.appinn.com/favicon.ico",
                        "kwFilter": "https://meta\\.appinn\\.net/t/topic/"
                    },
                    {
                        "name": "⏬ BBDown",
                        "url": "SearchJumper-BBDown://%u",
                        "description": "需要自行配置软件与注册表",
                        "match": "bilibili\\.com",
                        "hideNotMatch": true
                    },
                    {
                        "name": "SEO查询",
                        "url": "http://seo.chinaz.com/?q=%h"
                    },
                    {
                        "name": "自动下载到百度网盘",
                        "url": "https://pan.baidu.com/disk/main#p{click([data-id\\=downloadLink])&div.nd-download-link div[role\\=dialog] input=%t&click(.nd-download-link button.u-button--primary)}",
                        "icon": "https://nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico"
                    },
                    {
                        "name": "编辑当前网页",
                        "url": "javascript:(function(){document.body.setAttribute('contenteditable', 'true');alert('已开启网页编辑，按ESC键取消');document.onkeydown = function (e) {e = e || window.event;if(e.keyCode==27){document.body.setAttribute('contenteditable', 'false');}}})();",
                        "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjAgOTYwSDY0di02NGg4OTZ2NjR6IG0tNzMuNi02ODYuNGwtODQgODQtNDUuNiA0NS42TDM4NCA3NzZsLTE5MiA1NiA1Ni0xOTIgNTAyLjQtNTAyLjRjNC00IDkuNi02LjQgMTQuNC02LjQgNCAwIDggMS42IDEwLjQgNEw4ODggMjQ4YzcuMiA3LjIgNS42IDE3LjYtMS42IDI1LjZ6TTcxMiAzNTcuNkw2NjYuNCAzMTIgMzA0LjggNjczLjZsLTE4LjQgNjQgNjQtMTguNEw3MTIgMzU3LjZ6IG05Ny42LTk3LjZsLTQ1LjYtNDUuNi01MiA1MiA0NS42IDQ1LjYgNTItNTJ6Ij48L3BhdGg+PC9zdmc+",
                        "nobatch": true
                    },
                    {
                        "name": "限制去除",
                        "url": "javascript:var d=document,b=d.body;with(b.onselectstart=b.oncopy=b.onpaste=b.onkeydown=b.oncontextmenu=b.onmousemove=b.ondragstart=d.oncopy=d.onpaste=null,d.onselectstart=d.oncontextmenu=d.onmousedown=d.onkeydown=function(){return!0},d.wrappedJSObject||d)onmouseup=null,onmousedown=null,oncontextmenu=null;for(var a=d.getElementsByTagName(\"*\"),i=a.length-1;i>=0;i--){var o=a[i];with(o.wrappedJSObject||o)onmouseup=null,onmousedown=null}var h=d.getElementsByTagName(\"head\")[0];if(h){var s=d.createElement(\"style\");s.innerHTML=\"html,*{user-select:text!important;-moz-user-select:text!important;-webkit-user-select:text!important;-webkit-user-drag:text!important;-khtml-user-select:text!important;-khtml-user-drag:text!important;pointer-events:auto!important;}\",h.appendChild(s)}Event.prototype.preventDefault=function(){};",
                        "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04MDAgNDQ4SDcwNFYzMjBjMC0xMDYuNC04NS42LTE5Mi0xOTItMTkyUzMyMCAyMTMuNiAzMjAgMzIwaDY0YzAtNzAuNCA1Ny42LTEyOCAxMjgtMTI4czEyOCA1Ny42IDEyOCAxMjh2MTI4SDIyNGMtMTcuNiAwLTMyIDE0LjQtMzIgMzJ2Mzg0YzAgMTcuNiAxNC40IDMyIDMyIDMyaDU3NmMxNy42IDAgMzItMTQuNCAzMi0zMlY0ODBjMC0xNy42LTE0LjQtMzItMzItMzJ6TTUxMiA3MzZjLTM1LjIgMC02NC0yOC44LTY0LTY0czI4LjgtNjQgNjQtNjQgNjQgMjguOCA2NCA2NC0yOC44IDY0LTY0IDY0eiI+PC9wYXRoPjwvc3ZnPg==",
                        "description": "去除网页右键以及复制限制",
                        "nobatch": true
                    },
                    {
                        "name": "打开链接",
                        "url": "%t",
                        "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik03MjIuOCA0NTlsLTE4LjkgMTguOS0yLjcgMi43LTQuNyA0LjgtNTIuNyA1Mi43IDI2LjMgMjYuMyA1Mi43LTUyLjcgMTg0LjQgMTg0LjQtMjEwLjcgMjEwLjgtMTg0LjQtMTg0LjQgNTIuNi01Mi43LTI2LjMtMjYuNC01Mi43IDUyLjctMjYuMyAyNi40IDIzNy4xIDIzNy4xIDI2My40LTI2My41eiIgZmlsbD0iIzA2MDAwMSIvPjxwYXRoIGQ9Ik0zMjcuNyAzNTMuNmwzNDIuNSAzNDIuNSAyNi4zLTI2LjNMMzU0IDMyNy4zeiIgZmlsbD0iIzA2MDAwMSIvPjxwYXRoIGQ9Ik0zMDEuMyA1MTEuN0wxMTYuOSAzMjcuM2wyMTAuOC0yMTAuN0w1MTIuMSAzMDFsLTUyLjcgNTIuNiAyNi4zIDI2LjQgNTIuNy01Mi43IDI2LjMtMjYuNC0yMzctMjM3TDY0LjIgMzI3LjNsMjM3LjEgMjM3LjEgMjYuMy0yNi4zIDUyLjgtNTIuN0wzNTQgNDU5eiIgZmlsbD0iIzA2MDAwMSIvPjwvc3ZnPg==",
                        "description": "ctrl 后台标签页 alt 小窗 ctrl+shift 隐身窗口",
                        "openInNewTab": true
                    },
                    {
                        "name": "二维码生成",
                        "url": "https://hoothin.com/qrcode#%U",
                        "icon": "https://hoothin.com/qrcode/favicon.svg"
                    },
                    {
                        "name": "短网址生成",
                        "url": "https://cui.la#p{#url=%u}",
                        "icon": "https://cui.la/content/151952ahk56ovvoqhnv557.png.icon.png"
                    },
                    {
                        "name": "分享到微博",
                        "url": "https://service.weibo.com/share/share.php?url=%u&title=%n",
                        "nobatch": true
                    },
                    {
                        "name": "存档当前网页",
                        "url": "https://web.archive.org/save/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico",
                        "nobatch": true
                    },
                    {
                        "name": "万能命令",
                        "url": "https://wn.run/%u",
                        "nobatch": true
                    },
                    {
                        "name": "⏬ 全网视频下载",
                        "url": "lux://%u",
                        "description": "需要配合注册表补丁使用，详阅项目主页",
                        "nobatch": true
                    },
                    {
                        "name": "复制链接为 Markdown",
                        "url": "copy:[%sr](%t)",
                        "nobatch": true
                    },
                    {
                        "name": "新浪短网址",
                        "url": "https://sina.lt/index.php?url=%u"
                    },
                    {
                        "name": "is.gd",
                        "url": "https://is.gd/create.php%p{url=%u&opt=0}",
                        "icon": "https://is.gd/isgd_favicon.ico"
                    },
                    {
                        "name": "URL Shortener",
                        "url": "https://bitly.com/%p{url=%u}",
                        "icon": "https://docrdsfx76ssb.cloudfront.net/static/1678306332/pages/wp-content/uploads/2019/02/favicon.ico"
                    },
                    {
                        "name": "⌨️ 按行输入",
                        "url": "#p{@=%s[]}",
                        "description": "将剪贴板内容按行分割后依次粘贴到当前焦点所在输入框"
                    },
                    {
                        "name": "Google lens-搜索剪贴板图片",
                        "url": "[\"Google lens\"]",
                        "description": "搜索剪贴板图片"
                    },
                    {
                        "name": "Mainonly by jerrylus",
                        "url": "javascript:(function(){var e=document.body;let n=document.head.appendChild(document.createElement(\"style\"));n.textContent=\".mainonly { outline: 2px solid red; }\";let t=CSS.supports(\"selector(:has(*))\");function o(n){n instanceof HTMLElement&&(e.classList.remove(\"mainonly\"),(e=n).classList.add(\"mainonly\"))}function i(e){o(e.target)}function l(o){if(o.preventDefault(),t)n.textContent=\":not(:has(.mainonly), .mainonly, .mainonly *) { visibility: hidden; }\";else{n.textContent=\":not(.mainonly *, .mainonly-ancestor) { visibility: hidden; }\";var i=e;do i.classList.add(\"mainonly-ancestor\");while(i=i.parentElement)}r()}function s(o){if(\"Escape\"===o.key){o.preventDefault();var i=window.scrollY||document.documentElement.scrollTop;if(n.remove(),document.removeEventListener(\"keydown\",s),r(),e?.classList.remove(\"mainonly\"),!t)for(let l of document.getElementsByClassName(\"mainonly-ancestor\"))l.classList.remove(\"mainonly-ancestor\");window.scrollTo(0,i)}}function a(n){n.preventDefault(),n.deltaY<0?o(e.parentElement):o(e.firstElementChild)}function r(){document.removeEventListener(\"mouseover\",i),document.removeEventListener(\"click\",l),document.removeEventListener(\"wheel\",a)}document.addEventListener(\"mouseover\",i),document.addEventListener(\"click\",l),document.addEventListener(\"wheel\",a,{passive:!1}),document.addEventListener(\"keydown\",s)}())"
                    },
                    {
                        "name": "📺 预览视频-当前网页",
                        "url": "[\"📺 预览视频\"]",
                        "kwFilter": "^http.*\\.(3gpp|m4v|mkv|mp4|ogv|webm)(\\?|#|$)"
                    },
                    {
                        "name": "🎵 预览音频-当前网页",
                        "url": "[\"🎵 预览音频\"]",
                        "kwFilter": "^http.*\\.(flac|m4a|mp3|oga|ogg|opus|wav)(\\?|#|$)"
                    },
                    {
                        "name": "🏞️ 预览图片-当前网页",
                        "url": "[\"🏞️ 预览图片\"]",
                        "kwFilter": "^http.*\\.(avif|bmp|gif|gifv|ico|jfif|jpe|jpeg|jpg|png|svg|webp|xbm)(\\?|#|$)"
                    }
                ]
            },
            {
                "type": "网页快照",
                "icon": "clock-rotate-left",
                "selectLink": true,
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "Wayback Machine all",
                        "url": "https://web.archive.org/web/*/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico"
                    },
                    {
                        "name": "Wayback Machine",
                        "url": "https://web.archive.org/web/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico"
                    },
                    {
                        "name": "Google 快照",
                        "url": "https://webcache.googleusercontent.com/search?q=cache:%u"
                    },
                    {
                        "name": "Google 文本快照",
                        "url": "https://webcache.googleusercontent.com/search?strip=1&q=cache:%u"
                    },
                    {
                        "name": "Bing 快照",
                        "url": "https://www.bing.com/search?q=url:%u&go=Search&qs=bs&form=QBRE#p{click(ol#b_results li.b_algo:first-of-type div.b_attribution a.trgr_icon)&open(ol#b_results li.b_algo:first-of-type div.b_attribution a[href*\\=\"cc.bingj.com/cache\"])}"
                    },
                    {
                        "name": "Archive.is",
                        "url": "https://archive.is/newest/%u"
                    },
                    {
                        "name": "Archive.is all",
                        "url": "https://archive.is/%u"
                    },
                    {
                        "name": "Memento",
                        "url": "http://timetravel.mementoweb.org/memento/0/%u",
                        "icon": "http://mementoweb.org/static/css/images/timetravel_logo_20x20.png"
                    },
                    {
                        "name": "Megalodon",
                        "url": "https://megalodon.jp/?url=%u"
                    },
                    {
                        "name": "Yahoo 快照",
                        "url": "https://search.yahoo.com/search?p=url:%u#p{open(#results li:first-of-type a[href*\\=\"cc.bingj.com/cache\"], #results li:first-of-type a[href*\\=\"cc.bingj.com%2fcache\"])}"
                    },
                    {
                        "name": "Ghostarchive",
                        "url": "https://ghostarchive.org/search?term=%u"
                    },
                    {
                        "name": "WebCite",
                        "url": "https://webcitation.org/query?url=%u"
                    }
                ]
            },
            {
                "type": "视频",
                "icon": "circle-play",
                "selectVideo": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "M3u8播放器",
                        "url": "https://players.akamai.com/players/hlsjs?streamUrl=%t"
                    },
                    {
                        "name": "去视频水印",
                        "url": "https://parse.bqrdh.com/smart/#p{.ant-input=%u&click(.ant-input-search-button)}"
                    }
                ]
            },
            {
                "type": "AI",
                "icon": "robot",
                "sites": [
                    {
                        "name": "Bard",
                        "url": "https://bard.google.com/chat#p{.ql-editor.textarea=%s}",
                        "icon": "https://www.gstatic.com/lamda/images/favicon_v1_150160cddff7f294ce30.svg"
                    },
                    {
                        "name": "Poe - Sage AI Chat",
                        "url": "https://poe.com/#p{sleep(2000)&[class*\\=ChatMessageInputContainer]>textarea=%s&click([class*\\=ChatMessageSendButton])}"
                    },
                    {
                        "name": "ChatGPT",
                        "url": "https://chat.openai.com/#p{#prompt-textarea=%s&click(#prompt-textarea+button)}"
                    },
                    {
                        "name": "Futurepedia - Find The Best AI Tools & Software",
                        "url": "https://www.futurepedia.io/#p{input[name\\=q]=%s&click(button[type\\=submit]:not([disabled]))}"
                    }
                ]
            },
            {
                "type": "回收站",
                "icon": "recycle",
                "match": "0",
                "sites": [
                    {
                        "name": "复制知乎回答 ",
                        "url": "c:%element{.AuthorInfo>[itemprop='name']}.prop(content)\n%element{.CopyrightRichText-richText}\n%element{.ContentItem-time}"
                    },
                    {
                        "name": "forfrigg",
                        "url": "http://forfrigg.com/#gsc.tab=0&gsc.q=%s&gsc.sort=",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFQUlEQVR4nMWXT4tlSRHFfxGZee97VdXaOroRBuYbCLpwIaMtbl26Ety7HETQxegX8A8uXLkVP4AwMAgiyKCCqMwoCuKgojjWOI12t1317s3MiHCRr9rpnq56U90LAx6XR76XcfJEnBM3JSIE4DOf/9IL6Y2ffuve2Y6LyCmRn7vF04aKnIvw4kvf+8a3H12TiBAR0U/futU/9fzH+N1vXuPDH/kob56e8tvXfs1nv/JdTDMybZimmQCSCN0DiWA7ZwDWZuSkuEE1Y8qJtXUc+Nvrf+DVV37sL3//m1NE+NsB5ItnRPCn1//I7dtv8de//Jnbt98C4Pf/+A+hGc2NMjdUhGrGunSmOdOqkbPSu7OZM0vttOZMRUmq7JbOsx98jpKT7vPVh9h55Dm+qCIiAIRDb8E8JZII5kavDiIUVUpO4+QetOZYD25sC/OUWKshArUaIvqOPJcCeKhGCtOcuH/ecIIIcAIBzpZKSoIIEFBbZypK92C3jOQi+/VL8lya+CLWarQ26AVwBxxKUXJSlrXjBkiwmQvzlDk7b8yTgkBrRsTl++fLl/YIdX88oHdn7UYQrIuBQskJc8Mddkuj5oQq1OpMKdHE2WwuT3OQARVISVHAAsKCpON0SZXWjW6BR5BzorcOIkgSlto4OS7Uak8OYLd0rAUhMGfh5o2ZIPAY/eEetOqEQ107200ZElwac8ncvbcOwJfEwRLklEhFqatRNoV791dKSeRkJBGON4W1GggIwm7p5KxsN4XajHnKXJTwiRjo3tktFSMwC3IRWuu4D4nulqGOpEJtxnaT6N1Y1g4hIOBP04RzzsxHE0uH6UgokanitO4jcUrjJCIcbTIEnBxPuAVLNVRGoz4xgJITZpCTEAFrdcwckSBrwnHMRj/U1QenaxCM/4gIu6Veuv/BEpwtjbPdikdQu9PMSVmYS2K3jnqHBOFjXYDaHLOg9+B8167c/7AMFTZTZlk6WYWswhgnylwUAqaUEFGmSShJOd4WFCEnmKe0b8THx2EVqGI+ZoGKoCr05qzRcGNvw0LrRm3BWV9JIsxTwh26Ofo2L742AE1KUqEFnC2dpELKwpQTZ2vHHMw6qso8Cds5YR7kJKzNqdWxhyfw9QC4GVOZmEomNOPuRATNgqJK7cZcEq0HhLP04HibaT0oScknBb9ChwcBIEK3YLHG0VHBI8Y7QbNhQONHlCQESgnHA5KCuUOMGXJZHGxCsxhzwIKIQBDOzitTVt57Y0JEhkSB3hxNym7XHshQk1zpAwcBjLnfuHFUEITejZIT1ZxlNbZzQlVQgXmTEAm224wA988bEXBFDx4uQVLBXHCH5n00ZRLqOvzfHTSCtTllEnDoPijPOdFteMITM9B8jNnmTk46qO6BxTAfGVZAKcK6Gr075mNkBwEB7k/RA0rg4eNkFnh3WjOyKrI3JXNHRJhKIgAJwczJ+9LkdzULvPG+9z/Dm6dvcOM9N7lz59+oKh965gTNE5pnQhKigvcgZYEQLIb9XkhN9i+IIkJE4A7JlsMAvJ3zq1/+AoCf/+wVAMrJB7C/v8rjSni1wz8c5+s6WLwKQN7exOoOLVsAnv/kJ3jxq19jXddrpHp81O584ctfvxKAR0QNb5OvQ8M/+eFL/OjlH/Dsxz83Zq0oSALNoBlJGUll/5mQVNBckIs1/V/d651T1rWeAu+g4QEA0/k7mpYXvC0Ko7Onacty985TMxARt+/+659ffByAB3dD4AQ44t3Y8/WjA+fA/UfvhnJxO96DyAxpHpTnNWJ/laE/mvwhAP+v+C9sz+VdwyQu0gAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "威锋网",
                        "url": "https://s.feng.com/index.php?srchtxt=%s",
                        "icon": "data:image/x-icon;base64,AAABAAEAEBAAAAAAIAAAAwAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAsdJREFUeJyNkl1IUwEUx3+73nbVTV13zaZlsw8VIyvbSkiyeimjHtKHIkSiwCAwhIiIoIceCqJeyqIg6qUoiIigDyOKCsUinPmxMpZmpubH5pz7crve7fZQSSuIztvhnP///M//HN3zL9OaMqOyUtaRKxv4n5gKK5zrCeAtkhEe2lJ5sMTIoX4NZ6/nvwhudI0x5ZhHToaAYALMAlhLjZx+rxCORP8JVtU4LaMxxJ+58HvRF5fodvUAEI6pOIciPOkN0eSa4ONwAABRTGHu2DdGxsEPiH5ABXxe8LU5mb+mmFa3l2tBA2ORcQDMjnymvbD46SgNjgzqNy9k3/kmJjZVoNvRltDiMRh69pZdmR/YsGUbjQYrEXczL2r2I5ksrL90hsRMFGlhGYlOH9e3zyUUDPCs+R26xptPtGHPJKWLjJSXr6ehSyTDnsDVeI3RVg+WiloE5Q0dZ0+w/dVTJOsKClq6ObWn5MdK9TVbZz1ock2g5qXzYGslaeZlFNbUIWWm4r7dTn71cbKLlqDMgRa/Ad9UCDnLmGxi50iALJtI6eF6YgEV962rtB6tZdIdYu2RGkyZ6WgqqFIqx+5+IpZg9hoA6AWJiA9K9uwkz74O5+V7yGuqkB12gsEp/AGJRDydeGCadr2e665gsgJ7joC/L05QA3NhLvLyfLKKV2GwptF74y2Pqg8w8nKQac84WTmZdAz6kgkcS+eR9vELk1/B3eam8/wVoqMfSLPEsFWtIkU00n32JOEBJ4piZnN6IJnAIIkcWR3B8/gzfXe6AcguL0M0yuizC5Hte8mdb6JEjlJncrN70wp0mqZpf77roxdOTly6jyc4g6WiFoDIwHuqlic4XFuJxWya7U0yMRJVuNA8TI/OiliwGke4n4MbFVL1IrYFG7AtyPlzVrKCi68H6SnLQxIgFIVPj72cW6lhX2b5C/grvgPjZxiC9n+r/wAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "我的小书屋",
                        "url": "http://mebook.cc/?s=%s%input{Please select your cup/rare/excellent/So big, A/B/C}",
                        "icon": "data:image/x-icon;base64,AAABAAEAEBAAAAAAIAC2AQAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgGAAAAH/P/YQAAAX1JREFUeJylk7Gq6mAQhL8NtxMDAdu/DphKUvgCQdKr8SG08DFSWsp5gxT2FrGNIAo2thY2lkqKaKHurY4ajxzk3oGFhf2Zf2bYFdd1lf+A9d2ICO/6jwlUH0Ke+98gIvx5NzDGEEURnucBMJ/PSZKEPM9L71QVec3AGMNkMsG2bbIswxiDMYbNZkO73S4RnE6nsgIRIQxDbNtmOBwynU4BGI1GhGGI53ksFgvyPKcoCm6324NARFDVu8woigDIsozBYMDxeCTPcy6XS9mv67r6Wl9fX/qM5XKpURSpiPysd3twvV6pVqs0m00ajQbdbhfHcWi1WqRpelcMlDNQVfr9PvV6nV6vx3q9BmA2m5EkCb7vk6bp3S487cH5fGa327Hf7wmCgPF4TBAEBEFAp9MBYLvd3j8qZVCr1VRE1LIstSxL4zjWV8Rx/MO/ZVkqlUpFi6J4jQHHcfB9H4DVasXhcCjNvzMQEfnnYxKRRwYvrB8RqGr5GlW1lPAn+Asf+sooQi/6SwAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "B-OK",
                        "url": "http://b-ok.xyz/s/?q=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEN0lEQVR4nOWWTWxUZRSGn3O/+W3Lj7VtaGlri1UUBEy6IPEnRBMTiYFVW6MmJmDUGHDjlo3EpRsTDQmJUSORhYCYYnDhQkCNhJ8FhM4ChKFUBEMJUjrTzsz9vuPiOkOnc6ftlKILz2Ly5TvvOe97zz2578D/PaTWgp7D5+PxTKxXPdoEbUc9dWovR9T83tjceeboc+IvuIDH96U3esIWlD5EZqlRpyq7UftFauDhE/cmQFWe2H+lV8X9CNIwF7GlUrgRcaw/O9CVnpeAtQd+a7EaGQFitRBXCFH+Wqxe2/GBzomwvBd2ufLb4TbfmV33Sg4gwtIxse+v/fJafWh++kWwZNGJsHetxR+pLJwpB6Cq2VR/d4WIigkkMtHXiuRWwVfFE0gYoSluaEka6iMSEN7lpCHi0ZI0NCUMES/I+6o4LU5C6lZ9PfzMjBNYvT/9Ccg2gJgn/LK5g4SREmjCKqpQFwluPjs/RmvSsLGjHqeQ9R1RT4ibIO8UxgqOpw+NIMEUfFS3pwZW7C5yRsrHJP0ioApL4x5JI1wcKzB4ZZw/sparGR+nyprGOM8uS7L10cUAHLw8zrHrE4xkfOojwuoH4rTWGV5sr6c5YYh5QsEpIhJR4U2gUsCaAyPtTm1LcaweglXlw7O3+PnP8gU+dyvPngtjpPq6uJmz7Dh1E2/KLE+P5gDIW+WNlUvKxixI70OfpxPDW7onYcoOOLXrp7+fqhsFiAhOFasaDijWh0Rysekpnj2A3sGrdapsm3uL2hDTwzj7VpmAfME1gnbW3GmWqC5NHuk5fD5eEmCt60JYtuACqikQ7TH5+IMlARiNCWJCsQutCkAlavJ+pCRA8O4o5EKx90OAaCaGnSgJUMst0PH7wVUlbrrJRdmSgNRQxyVROfrv8cuhs6+3ZkoC2ClOhV9nK1OCr2S1nNPq+XKwniweS1/CzB39tGGRfDwV5wEvLK9jU2c9jf8YkRG4lrWcHJ0MGgjseLKRtY0xmhIG38H1CZ/RSUtzMnSvGervPlI8TzOjyzkgpkBzwnDkpfaywpwN3C051Q0VPAmePmcD5yyaUTHWfTOMvTuZ60N9Xa0VEwBw6Mse7BGkYXTS8tTgCDmnZH1FUYq+qChLooafNrWT9ZUN3wW4qXlBWBQVBCmRK5p2YjZP5SwTUKgrfB/Pxr4C3ga4XXAIEDxQuaWMFxzvHb/B7bzDV4hIeR4g4yugpUpP5aNUX+c5KpDTYtW+9EURWRGWm3cox4b6uzZMvw79T6jCu6qMLCD9Cet5tZvd6n3pHxCeBwkVOmsoOYS9Q31dW6tBZmwc1cKrKB/Mj1wVZXsiFt0+E2xOXtO7+1Q009S0xii7FB4TWBLKCTdE9YyqeSc11HGJneJm612T2a07mF6a93WlIK8g0iFKmwqKckUg7am3N5YwF09vXp6tpe9/Gn8DQrStezS4ePUAAAAASUVORK5CYII="
                    },
                    {
                        "name": "数字图书馆",
                        "url": "https://zh.b-ok.cc/s/?q=%s",
                        "icon": "https://zh.b-ok.cc/favicon.svg"
                    },
                    {
                        "name": "努努影院",
                        "url": "https://www.nunuyy1.org/so/%s-%s--.html"
                    },
                    {
                        "name": "77影院",
                        "url": "https://www.77zyy.com/vodsearch.html?wd=%s",
                        "icon": "https://www.77zyy.com/template/vfed1/asset/img/favicon.png"
                    },
                    {
                        "name": "美剧天堂",
                        "url": "https://www.meijutt.net/sousuo/index.asp%p{searchword=%s}",
                        "charset": "GBK"
                    },
                    {
                        "name": "哔咪动漫",
                        "url": "https://www.bimiacg4.net/vod/search/%p{wd=%s}",
                        "description": "哔咪哔咪,火影忍者,海贼王,这里是兴趣使然的无名小站_bimibimi"
                    },
                    {
                        "name": "🔆  高亮关键词",
                        "url": "javascript:(function()%7Bvar%20count=0,text,dv;text=prompt(%22%E6%90%9C%E7%B4%A2%E9%85%B1%EF%BC%9A%E8%AF%B7%E8%BE%93%E5%85%A5%E9%AB%98%E4%BA%AE%E5%85%B3%E9%94%AE%E8%AF%8D%EF%BC%8Calt%E5%B7%A6%E9%94%AE%E5%8D%95%E5%87%BB%E4%B8%8B%E4%B8%80%E4%B8%AA%EF%BC%8Calt%E5%8F%B3%E9%94%AE%E4%B8%8A%E4%B8%80%E4%B8%AA%EF%BC%8Cr%E8%BF%98%E5%8E%9F%EF%BC%8Cc%7C%E8%87%AA%E5%AE%9A%E4%B9%89%E5%88%86%E9%9A%94(%E7%AB%96%E6%9D%A0)%EF%BC%8Co%E5%8E%9F%E5%A7%8B%E6%96%87%E6%9C%AC:%22,%20%22%S%22);if%20(text==null%7C%7Ctext.length==0)return;if(text===%22r%22)%7B%5B%5D.forEach.call(document.querySelectorAll(%22mark.searchJumper%22),mark=%3E%7Blet%20newNode=document.createTextNode(mark.innerText);mark.parentNode.replaceChild(newNode,mark);%7D);return;%7Dif(text.indexOf(%22o%22)===0)%7Btext=%5Btext.substr(1)%5D;%7Delse%20if(text.indexOf(%22c%22)===0)%7Btext=text.substr(1);text=text.substr(1).split(text.substr(0,1));%7Delse%20text=%5Btext%5D;dv=document.defaultView;let%20marks=%7B%7D;let%20focusMark;function%20setFocus(ele)%7BfocusMark.style.border=%22%22;focusMark=ele;focusMark.scrollIntoView(%7Bbehavior:%22smooth%22,block:%22center%22,inline:%22nearest%22%7D);focusMark.style.border=%222px%20dashed%20red%22;%7Dfunction%20searchWithinNode(node,te,len)%20%7Bvar%20pos,skip,spannode,middlebit,middleclone;skip=0;if(node.nodeType==3)%7Bpos=node.data.toUpperCase().indexOf(te);if%20(pos%3E=0)%20%7Blet%20index=marks%5Bte%5D.length;spannode=document.createElement(%22mark%22);spannode.className=%22searchJumper%22;spannode.addEventListener(%22mousedown%22,e=%3E%7Bif%20(!e.altKey)return;if(e.which===1)%7Bif(index!=marks%5Bte%5D.length-1)%7BsetFocus(marks%5Bte%5D%5Bindex+1%5D);%7D%7Delse%20if(e.which===3)%7Bif(index!=0)%7BsetFocus(marks%5Bte%5D%5Bindex-1%5D);%7D%7D%7D);spannode.addEventListener(%22click%22,e=%3E%7Be.stopPropagation();e.preventDefault();return%20false;%7D);middlebit=node.splitText(pos);middlebit.splitText(len);middleclone=middlebit.cloneNode(true);spannode.appendChild(middleclone);middlebit.parentNode.replaceChild(spannode,middlebit);marks%5Bte%5D.push(spannode);focusMark=spannode;++count;skip%20=%201;%7D%7D%20else%20if%20(node.nodeType==1&&node.childNodes&&node.tagName.toUpperCase()!=%22SCRIPT%22&&node.tagName.toUpperCase()!=%22STYLE%22&&node.tagName.toUpperCase()!=%22MARK%22)%7Bfor%20(var%20child=0;child%3Cnode.childNodes.length;++child)%7Bchild=child+searchWithinNode(node.childNodes%5Bchild%5D,te,len);%7D%7Dreturn%20skip;%7Dtext.forEach(t=%3E%7Bt=t.toUpperCase();marks%5Bt%5D=%5B%5D;searchWithinNode(document.body,t,t.length);%7D)%0A%7D)();"
                    },
                    {
                        "name": "将svg图片复制为base64",
                        "url": "javascript:(()=>{let svg=window.targetElement&&window.targetElement.querySelector('svg');if(svg){navigator.clipboard.writeText('data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(svg)))));alert(\"copy over!\")}})()"
                    }
                ]
            }
        ];
        break;
    default:
        sitesConfig = [
            {
                "type": "Image",
                "icon": "image",
                "sites": [
                    {
                        "name": "Google image",
                        "url": "https://www.google.com/search?q=%s&tbm=isch",
                        "match": "www\\.google\\..*tbm=isch"
                    },
                    {
                        "name": "Bing image",
                        "url": "https://www.bing.com/images/search?q=%s"
                    },
                    {
                        "name": "Pixiv",
                        "url": "http://www.pixiv.net/search.php?word=%s"
                    },
                    {
                        "name": "Flickr",
                        "url": "http://www.flickr.com/search/?q=%s"
                    },
                    {
                        "name": "Pinterest",
                        "url": "https://www.pinterest.com/search/pins/?q=%s&rs=typed&term_meta"
                    },
                    {
                        "name": "Yandex image",
                        "url": "https://yandex.com/images/search?text=%s"
                    },
                    {
                        "name": "Pixabay",
                        "url": "https://pixabay.com/images/search/%s/",
                        "icon": "https://pixabay.com/favicon-32x32.png"
                    },
                    {
                        "name": "Unsplash",
                        "url": "https://unsplash.com/s/photos/%s"
                    },
                    {
                        "name": "500px",
                        "url": "https://500px.com/search?q=%s"
                    },
                    {
                        "name": "Deviantart",
                        "url": "https://www.deviantart.com/browse/all/?q=%s"
                    },
                    {
                        "name": "Search GIF by ChatGPT",
                        "url": "https://poe.com/ChatGPT#p{sleep(1000)&[class*\\='ChatMessageInputContainer'] textarea=hey ChatGPT. hope you're having a great day. From now on you will respond to anything I say with the perfect gif response. Once you know what gif you want to use, compile the most accurate and perfect search phrase that will result in the specific gif you want to send. respond with url: \" Sure, I'm happy to help you!\\n http://scythe-spot-carpenter.glitch.me/search?search_term\\=.gif \n%s&click(button[class*\\='ChatMessageSendButton_sendButton'])}"
                    }
                ]
            },
            {
                "type": "Video",
                "icon": "video",
                "sites": [
                    {
                        "name": "Youtube",
                        "url": "https://www.youtube.com/results?search_query=%s"
                    },
                    {
                        "name": "Niconico",
                        "url": "http://www.nicovideo.jp/search/%s"
                    }
                ]
            },
            {
                "type": "News",
                "icon": "newspaper",
                "sites": [
                    {
                        "name": "Google News",
                        "url": "https://news.google.com/search?q=%s&hl=zh-CN&gl=CN&ceid=CN:zh-Hans",
                        "icon": "https://www.google.com/favicon.ico"
                    },
                    {
                        "name": "CNN",
                        "url": "https://edition.cnn.com/search/?q=%s"
                    },
                    {
                        "name": "BBC",
                        "url": "https://www.bbc.co.uk/search?q=%s"
                    }
                ]
            },
            {
                "type": "Translate",
                "icon": "language",
                "sites": [
                    {
                        "name": "DeepL",
                        "url": "https://www.deepl.com/translator#*/en/%s",
                        "icon": "https://www.deepl.com/img/favicon/favicon_96.png"
                    },
                    {
                        "name": "Google translate",
                        "url": "https://translate.google.com/?text=%s",
                        "match": "translate\\.google\\.com.*\\btext="
                    },
                    {
                        "name": "Bing translate",
                        "url": "http://www.bing.com/dict/search?q=%s"
                    },
                    {
                        "name": "Forvo",
                        "url": "https://www.forvo.com/search/%s"
                    },
                    {
                        "name": "Translate with ChatGPT",
                        "url": "https://poe.com/ChatGPT#p{sleep(1000)&[class*\\='ChatMessageInputContainer'] textarea=Please help me to translate \\`%s\\` to English, please return only translated content not include the origin text&click(button[class*\\='ChatMessageSendButton_sendButton'])}"
                    }
                ]
            },
            {
                "type": "Develop",
                "icon": "code",
                "sites": [
                    {
                        "name": "MDN",
                        "url": "https://developer.mozilla.org/zh-CN/search?q=%s"
                    },
                    {
                        "name": "Stackoverflow",
                        "url": "https://stackoverflow.com/search?q=%s"
                    },
                    {
                        "name": "Can I Use",
                        "url": "http://caniuse.com/#search=%s",
                        "icon": "https://caniuse.com/img/favicon-128.png"
                    },
                    {
                        "name": "GitHub",
                        "url": "https://github.com/search?utf8=✓&q=%s",
                        "match": "https://github\\.com/search\\?.*&q="
                    },
                    {
                        "name": "W3c",
                        "url": "http://www.runoob.com/?s=%s"
                    },
                    {
                        "name": "GreasyFork",
                        "url": "https://greasyfork.org/zh-CN/scripts?q=%s&utf8=✓",
                        "icon": "https://greasyfork.org/packs/media/images/blacklogo96-b2384000fca45aa17e45eb417cbcbb59.png"
                    },
                    {
                        "name": "Gen RegExp by AI",
                        "url": "https://poe.com/ChatGPT#p{sleep(1000)&textarea[class^\\='ChatMessageInput']=Can you help me to write a RegExp which can detect %input{Target,Email address/Phone number} on `%s`&click([class^\\='ChatMessageInputView_sendButton']>button)}",
                        "openInNewTab": true
                    }
                ]
            },
            {
                "type": "Wiki",
                "icon": "book-open-reader",
                "sites": [
                    {
                        "name": "Wikipedia",
                        "url": "http://en.wikipedia.org/wiki/%s",
                        "description": "The largest and most-read reference work in history.#wiki"
                    },
                    {
                        "name": "Quora",
                        "url": "https://www.quora.com/search?q=%s"
                    }
                ]
            },
            {
                "type": "Social",
                "icon": "users",
                "sites": [
                    {
                        "name": "Twitter",
                        "url": "https://twitter.com/search?q=%s"
                    },
                    {
                        "name": "Facebook",
                        "url": "https://www.facebook.com/search/results.php?q=%s"
                    },
                    {
                        "name": "V2ex",
                        "url": "https://www.sov2ex.com/?q=%s",
                        "icon": "https://sov2ex.oss-cn-shanghai.aliyuncs.com/assets/favicon/apple-icon-57x57.png"
                    }
                ]
            },
            {
                "type": "APP",
                "icon": "archive",
                "sites": [
                    {
                        "name": "Play",
                        "url": "https://play.google.com/store/search?q=%s"
                    },
                    {
                        "name": "Coolapk",
                        "url": "https://www.coolapk.com/search?q=%s"
                    },
                    {
                        "name": "Apkpure",
                        "url": "https://apkpure.com/cn/search?q=%s"
                    },
                    {
                        "name": "APKMirror",
                        "url": "https://www.apkmirror.com/?s=%s"
                    },
                    {
                        "name": "Chrome Store",
                        "url": "https://chrome.google.com/webstore/search/%s",
                        "icon": "https://www.google.com/images/icons/product/chrome_web_store-32.png"
                    }
                ]
            },
            {
                "type": "Music",
                "icon": "music",
                "sites": [
                    {
                        "name": "Jango",
                        "url": "https://www.jango.com/music/%s",
                        "icon": "https://s1.cdn107.com/assets/logos/jango/favicon-32x32-2d45face09da6b62b25031d8b9afeefc9274656a5a969c75e6afc644bf85eb96.png"
                    },
                    {
                        "name": "QQ Music",
                        "url": "https://y.qq.com/portal/search.html#page=1&searchid=1&remoteplace=txt.yqq.top&t=song&w=%s"
                    }
                ]
            },
            {
                "type": "Shopping",
                "icon": "shopping-cart",
                "sites": [
                    {
                        "name": "Amazon",
                        "url": "http://www.amazon.cn/s/ref=nb_sb_noss?field-keywords=%s",
                        "icon": "https://www.amazon.cn/favicon.ico"
                    },
                    {
                        "name": "1688",
                        "url": "https://s.1688.com/selloffer/offer_search.htm?keywords=%s"
                    }
                ]
            },
            {
                "type": "E-book",
                "icon": "book",
                "sites": [
                    {
                        "name": "Jiumodiary",
                        "url": "https://www.jiumodiary.com/#p{#SearchWord=%s}",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABi0lEQVR4nJ2VsU4CQRRFzy66GCtLrWysjMbEyi+wNFHBmGDpH1jYWJtAq5WxpoFEorXxB6xs1CBBI4WJVhpNoPBayMAuuzOw3FcwvMe5eTOzy0OYIGCHMk3ayBJf3FMmTxCieotN6lZwMOpsRQzIUBwZNlEk0zdIjwtR7BqQGwsXIicg4HVsgxYBFGzlGS1pepjFHlSSCiUZ/ehQS9rVerJB1eOZeUKapINNXjz14jMbzdhxWImn5oi2dCa3FuObCH85HoJL0o3mIgYeMt0o3qBVbaZ659LlfpOOyCHza5/ewsPjKJXJv0L7ORjhDIwSDnGi+/kxAv6QfAsIvY+At5SxGSxbkEshtKqanpS1PwcmGgN4xfE6hZ4DowXqlitLkh9PlVJe42e8rYvIBr4dG6ANj0mF/ZBBw2Xw7HOX1NY5Hlfd9b2r/1ufmq22gcc18OYyqA39U53Smr3aIosg7zJwRt4MltJYeEn0R9tJavw0NNqEYDvVcM31uH6WgAJVmnSsYIcmVQrh8f4HufpcPqh3SFcAAAAASUVORK5CYII=",
                        "match": "https://www\\.jiumodiary\\.com"
                    },
                    {
                        "name": "Forfrigg",
                        "url": "http://forfrigg.com/#gsc.tab=0&gsc.q=%s&gsc.sort=",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFQUlEQVR4nMWXT4tlSRHFfxGZee97VdXaOroRBuYbCLpwIaMtbl26Ety7HETQxegX8A8uXLkVP4AwMAgiyKCCqMwoCuKgojjWOI12t1317s3MiHCRr9rpnq56U90LAx6XR76XcfJEnBM3JSIE4DOf/9IL6Y2ffuve2Y6LyCmRn7vF04aKnIvw4kvf+8a3H12TiBAR0U/futU/9fzH+N1vXuPDH/kob56e8tvXfs1nv/JdTDMybZimmQCSCN0DiWA7ZwDWZuSkuEE1Y8qJtXUc+Nvrf+DVV37sL3//m1NE+NsB5ItnRPCn1//I7dtv8de//Jnbt98C4Pf/+A+hGc2NMjdUhGrGunSmOdOqkbPSu7OZM0vttOZMRUmq7JbOsx98jpKT7vPVh9h55Dm+qCIiAIRDb8E8JZII5kavDiIUVUpO4+QetOZYD25sC/OUWKshArUaIvqOPJcCeKhGCtOcuH/ecIIIcAIBzpZKSoIIEFBbZypK92C3jOQi+/VL8lya+CLWarQ26AVwBxxKUXJSlrXjBkiwmQvzlDk7b8yTgkBrRsTl++fLl/YIdX88oHdn7UYQrIuBQskJc8Mddkuj5oQq1OpMKdHE2WwuT3OQARVISVHAAsKCpON0SZXWjW6BR5BzorcOIkgSlto4OS7Uak8OYLd0rAUhMGfh5o2ZIPAY/eEetOqEQ107200ZElwac8ncvbcOwJfEwRLklEhFqatRNoV791dKSeRkJBGON4W1GggIwm7p5KxsN4XajHnKXJTwiRjo3tktFSMwC3IRWuu4D4nulqGOpEJtxnaT6N1Y1g4hIOBP04RzzsxHE0uH6UgokanitO4jcUrjJCIcbTIEnBxPuAVLNVRGoz4xgJITZpCTEAFrdcwckSBrwnHMRj/U1QenaxCM/4gIu6Veuv/BEpwtjbPdikdQu9PMSVmYS2K3jnqHBOFjXYDaHLOg9+B8167c/7AMFTZTZlk6WYWswhgnylwUAqaUEFGmSShJOd4WFCEnmKe0b8THx2EVqGI+ZoGKoCr05qzRcGNvw0LrRm3BWV9JIsxTwh26Ofo2L742AE1KUqEFnC2dpELKwpQTZ2vHHMw6qso8Cds5YR7kJKzNqdWxhyfw9QC4GVOZmEomNOPuRATNgqJK7cZcEq0HhLP04HibaT0oScknBb9ChwcBIEK3YLHG0VHBI8Y7QbNhQONHlCQESgnHA5KCuUOMGXJZHGxCsxhzwIKIQBDOzitTVt57Y0JEhkSB3hxNym7XHshQk1zpAwcBjLnfuHFUEITejZIT1ZxlNbZzQlVQgXmTEAm224wA988bEXBFDx4uQVLBXHCH5n00ZRLqOvzfHTSCtTllEnDoPijPOdFteMITM9B8jNnmTk46qO6BxTAfGVZAKcK6Gr075mNkBwEB7k/RA0rg4eNkFnh3WjOyKrI3JXNHRJhKIgAJwczJ+9LkdzULvPG+9z/Dm6dvcOM9N7lz59+oKh965gTNE5pnQhKigvcgZYEQLIb9XkhN9i+IIkJE4A7JlsMAvJ3zq1/+AoCf/+wVAMrJB7C/v8rjSni1wz8c5+s6WLwKQN7exOoOLVsAnv/kJ3jxq19jXddrpHp81O584ctfvxKAR0QNb5OvQ8M/+eFL/OjlH/Dsxz83Zq0oSALNoBlJGUll/5mQVNBckIs1/V/d651T1rWeAu+g4QEA0/k7mpYXvC0Ko7Onacty985TMxARt+/+659ffByAB3dD4AQ44t3Y8/WjA+fA/UfvhnJxO96DyAxpHpTnNWJ/laE/mvwhAP+v+C9sz+VdwyQu0gAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "Library Genesis",
                        "url": "http://gen.lib.rus.ec/search.php?req=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADfElEQVR4nM2XQWgbRxSGv5SFncNSDXQhexB4aQUVRhARDBFOwSEt2PRSU3pI6CFJL8mtLTmEnEoOxYRSQm/pLaE15FCa9NCSQy+FYmQwRQFTVmCCAqJsQIQR7GEWBtrDaFeqsaVdieI+GObtaPa9f2b+9+/o1KtXvb85QXvtJJP/LwA4ZSbv7Bsu33mEEIJACgJfUl+SrDVDLja9uQCcKsuBW/f3ebD9G3gC9Hg8CCs8/uoSb/qmFIDSR3D3RgNZPW0fPEDYFkcv+Wa7XTbcfBy4sBKCBikrBIFtSMHTvV7pWKWPYNJel9XcV0oT9RXL1XJHUJiEz2OHXqyIlUYbjdaA6ZMaS4SKZ0mplGC1UZzbhWaeufYDcX9oHwxgtO2zt3NfWE44sPXpOp9sVI+I9m8rdAQ7keHy7UdonYJwbcIMfpbcpIBr/SRFBhW63300E0AhEq7WHe7d2rBlZwBS+0PmG8Bxx2MCtNZHRJoTAMCHLZ9mawl0apOZ1LYESFIYDG2v7VgYyEJxSynhlXebdJ5281VKv0IYSKQnEA5oA/FAEUUv2VyrF4pZugy/eLC/kPQuDCCzP/sO8cCWpUo0w0QjRvvpCoEUEPhyJtCZR/BLO2E36tHpxvQGGqUUOhkRT2twxHhyXhHjcem7PL539ViBmroD17/e48n3u1bzHWGDZ5Az1h9ejjnUD4a03nmbn7beOzLH1B349uYKwRuC+9u74LnjWp80M1kV2VgGwgVP0IvVsTlmluGdqw1ufHwOBlnyUfnlySdAOIz6CbHCVsfcADIQuQbAeMWOa0GJETCyXZoAZCD05WIAALauXxh57pgLJp0QIcYA9chPUhhoNs6Fx8YtLERnaw71xhLRXjcnpAwqNGsBzbcClqqS0JdIKZCeQCWaqBfzoq/4/FJtcQAAV9brPEw0G2t11lshZ2tHvW7Y2Y9ZbXgsV33AnxpzoQvJYfvx9wEPf+7Q/rXLZzfXuT1l5ZmV2oFJex479AaKZwcx7WcxnShGxUMb0RMoVexrWBjAX8rj2pdP7I1Ia5QaES9TPYHVCgdQKULMCFgWgEo0nb0XNhHYMvMgr4r8nmA1YG0lLBS3cBkuVw1B7TRkWzspRnp8DyAesrl5houNYl/LUiT848Bwd7tNdBATJzpXO+kJAl9QDwM+OB/yfms68+cG8F/Yif85/QdlMHLuJQQjHQAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "B-OK",
                        "url": "http://b-ok.xyz/s/?q=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEN0lEQVR4nOWWTWxUZRSGn3O/+W3Lj7VtaGlri1UUBEy6IPEnRBMTiYFVW6MmJmDUGHDjlo3EpRsTDQmJUSORhYCYYnDhQkCNhJ8FhM4ChKFUBEMJUjrTzsz9vuPiOkOnc6ftlKILz2Ly5TvvOe97zz2578D/PaTWgp7D5+PxTKxXPdoEbUc9dWovR9T83tjceeboc+IvuIDH96U3esIWlD5EZqlRpyq7UftFauDhE/cmQFWe2H+lV8X9CNIwF7GlUrgRcaw/O9CVnpeAtQd+a7EaGQFitRBXCFH+Wqxe2/GBzomwvBd2ufLb4TbfmV33Sg4gwtIxse+v/fJafWh++kWwZNGJsHetxR+pLJwpB6Cq2VR/d4WIigkkMtHXiuRWwVfFE0gYoSluaEka6iMSEN7lpCHi0ZI0NCUMES/I+6o4LU5C6lZ9PfzMjBNYvT/9Ccg2gJgn/LK5g4SREmjCKqpQFwluPjs/RmvSsLGjHqeQ9R1RT4ibIO8UxgqOpw+NIMEUfFS3pwZW7C5yRsrHJP0ioApL4x5JI1wcKzB4ZZw/sparGR+nyprGOM8uS7L10cUAHLw8zrHrE4xkfOojwuoH4rTWGV5sr6c5YYh5QsEpIhJR4U2gUsCaAyPtTm1LcaweglXlw7O3+PnP8gU+dyvPngtjpPq6uJmz7Dh1E2/KLE+P5gDIW+WNlUvKxixI70OfpxPDW7onYcoOOLXrp7+fqhsFiAhOFasaDijWh0Rysekpnj2A3sGrdapsm3uL2hDTwzj7VpmAfME1gnbW3GmWqC5NHuk5fD5eEmCt60JYtuACqikQ7TH5+IMlARiNCWJCsQutCkAlavJ+pCRA8O4o5EKx90OAaCaGnSgJUMst0PH7wVUlbrrJRdmSgNRQxyVROfrv8cuhs6+3ZkoC2ClOhV9nK1OCr2S1nNPq+XKwniweS1/CzB39tGGRfDwV5wEvLK9jU2c9jf8YkRG4lrWcHJ0MGgjseLKRtY0xmhIG38H1CZ/RSUtzMnSvGervPlI8TzOjyzkgpkBzwnDkpfaywpwN3C051Q0VPAmePmcD5yyaUTHWfTOMvTuZ60N9Xa0VEwBw6Mse7BGkYXTS8tTgCDmnZH1FUYq+qChLooafNrWT9ZUN3wW4qXlBWBQVBCmRK5p2YjZP5SwTUKgrfB/Pxr4C3ga4XXAIEDxQuaWMFxzvHb/B7bzDV4hIeR4g4yugpUpP5aNUX+c5KpDTYtW+9EURWRGWm3cox4b6uzZMvw79T6jCu6qMLCD9Cet5tZvd6n3pHxCeBwkVOmsoOYS9Q31dW6tBZmwc1cKrKB/Mj1wVZXsiFt0+E2xOXtO7+1Q009S0xii7FB4TWBLKCTdE9YyqeSc11HGJneJm612T2a07mF6a93WlIK8g0iFKmwqKckUg7am3N5YwF09vXp6tpe9/Gn8DQrStezS4ePUAAAAASUVORK5CYII="
                    }
                ]
            },
            {
                "type": "Download",
                "icon": "download",
                "sites": [
                    {
                        "name": "ThePiratebay",
                        "url": "https://thepiratebay.org/search/%s",
                        "icon": "data:image/jpeg;base64,AAABAAEAEBAAAAAAIAA2AgAAFgAAAIlQTkcNChoKAAAADUlIRFIAAAAQAAAAEAgCAAAAkJFoNgAAAf1JREFUeJx9kj9r8nAQxy8xLQatGmPtIoiigoKCoAZHyeQutEtBHHRpl7yELq6+AP+8AIcWOxURQRzMIDhEyeLilIKDQYUg+eWeIT48VujzWe4Ovtzd9zgKEeEvl/kVFEXZCWMHVVUlSTIMg6bpK6ndpV6vPz4+nmtE7Pf7v/W2qVQqtvI8gWHOyc3NDSGE4zhCyH6/BwDLshDx9vbWFvxYIJ1Oz+fz5+fnXq8ny3KtVnt/f282m5f2mMtFWZblef50Or2+vjqdTtM0X15eFEWx5/zzhIjtdtsuvV7v5cy7uzuHwwEAhULhdDoh4vVNdF0Ph8MulwsAEomEYRiEEAA4Ho9nD8vlUpIk0zTtToIg5PN5n88HAMViURAEjuMAIBgMMgxDCKHG43GpVHp7e3O73Q8PDxzHHQ4H0zTtVVmWpWmapulcLjcYDKbTKTMcDgFgPB5blhWJRDKZjCiKqVTKPvRut1utVqqqdrvdVquVTqepr6+vz89PRVEajcZiseh0OtvtNhAIxONxTdMMw4jFYqFQ6Pv7W9M0QgiFiJqmJZNJn88XjUbv7+89Hk8ikbAsS5ZlVVV5ns9msx8fH6IoVqtVQMT9fu/3+yVJ0nUdf6Lr+mQyeXp6AoDZbIaIgIimaY5Go+12i7+w2WzK5fJ6vUZE6j8vfQki2h/+B8UpLqpv9VygAAAAAElFTkSuQmCC"
                    },
                    {
                        "name": "Google cse",
                        "url": "https://cse.google.com/?q=%s&newwindow=1&cx=006100883259189159113%3Atwgohm0sz8q",
                        "icon": "https://www.google.com/favicon.ico"
                    },
                    {
                        "name": "BTDigg",
                        "url": "https://btdig.com/search?q=%s"
                    },
                    {
                        "name": "Btsow",
                        "url": "https://btsow.com/search/%s",
                        "icon": "https://btsow.bar/app/bts/View/img/favicon.ico",
                        "match": "btsow\\."
                    },
                    {
                        "name": "Torrentkitty",
                        "url": "https://www.torrentkitty.app/search/%s"
                    },
                    {
                        "name": "Idope",
                        "url": "https://idope.se/torrent-list/%s",
                        "icon": "https://idope.se/static/search/pc/img/favicon.ico"
                    },
                    {
                        "name": "limetorrents.co",
                        "url": "https://www.limetorrents.co/search/all/%s"
                    },
                    {
                        "name": "limetorrents.asia",
                        "url": "https://www.limetorrents.asia/search/all/%s"
                    },
                    {
                        "name": "limetorrents.pro",
                        "url": "https://www.limetor.pro/search/all/%s"
                    },
                    {
                        "name": "Cdsoso",
                        "url": "https://www.cdsoso.cc/searches-%s-hot-1-null.html"
                    },
                    {
                        "name": "Sub HD",
                        "url": "https://subhd.la/search/%s",
                        "icon": "https://img.huo720.com/favicon-32x32.png"
                    },
                    {
                        "name": "Subscene",
                        "url": "https://subscene.com/subtitles/searchbytitle:p{query=%s}"
                    },
                    {
                        "name": "R3SUB",
                        "url": "https://r3sub.com/search.php?s=%s"
                    }
                ]
            },
            {
                "type": "Search",
                "icon": "search",
                "sites": [
                    {
                        "name": "Google",
                        "url": "https://www.google.com/search?q=%s&ie=utf-8&oe=utf-8",
                        "match": "https://www\\.google\\..*/search",
                        "charset": "utf-8",
                        "keywords": "textarea[name='q']",
                        "shortcut": "g",
                        "alt": true
                    },
                    {
                        "name": "Google advanced",
                        "url": "https://www.google.com/search?q=%s%input{Filetype, filetype:doc/ filetype:ppt/ filetype:xls/ filetype:pdf}%input{Limit lang/zh-CN/zh-TW/zh-ALL/JA/EN,&lr=lang_zh-CN/&lr=lang_zh-TW/&lr=lang_zh-CN|lang_zh-TW/&lr=lang_ja/&lr=lang_en}%input{Limit date/Last hour/Last day/Last week/Last month/Last year,&as_qdr=h1/&as_qdr=d1/&as_qdr=w1/&as_qdr=m1/&as_qdr=y1}&ie=utf-8&oe=utf-8",
                        "match": "https://www\\.google\\..*/search",
                        "hideNotMatch": true
                    },
                    {
                        "name": "SearX",
                        "url": "https://searx.be/search?q=%s"
                    },
                    {
                        "name": "You",
                        "url": "https://you.com/search?q=%s",
                        "icon": "https://you.com/favicon/favicon-32x32.png"
                    },
                    {
                        "name": "Bing",
                        "url": "https://www.bing.com/search?q=%s"
                    },
                    {
                        "name": "DuckDuckGo",
                        "url": "https://duckduckgo.com/?q=%s"
                    },
                    {
                        "name": "Yahoo",
                        "url": "https://search.yahoo.com/search;?p=%s"
                    },
                    {
                        "name": "Yandex",
                        "url": "https://yandex.com/search/?text=%s"
                    },
                    {
                        "name": "Startpage",
                        "url": "https://www.startpage.com/sp/search?query=%s",
                        "icon": "https://www.startpage.com/sp/cdn/favicons/favicon-16x16--default.png"
                    },
                    {
                        "name": "Fsou",
                        "url": "https://fsoufsou.com/search?q=%s"
                    },
                    {
                        "name": "Qwant",
                        "url": "https://www.qwant.com/?q=%s"
                    },
                    {
                        "name": "Ecosia",
                        "url": "https://www.ecosia.org/search?method=index&q=%s",
                        "icon": "https://cdn-static.ecosia.org/static/icons/favicon.ico"
                    },
                    {
                        "name": "Brave",
                        "url": "https://search.brave.com/search?q=%s",
                        "icon": "https://cdn.search.brave.com/serp/v1/static/brand/16c26cd189da3f0f7ba4e55a584ddde6a7853c9cc340ff9f381afc6cb18e9a1e-favicon-32x32.png"
                    }
                ]
            },
            {
                "type": "Search in page",
                "icon": "sitemap",
                "selectTxt": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "Google ",
                        "url": "[\"Google\"]"
                    },
                    {
                        "name": "💲USD to RMB",
                        "url": "showTips:http://apilayer.net/api/convert?from=USD&to=CNY&amount=1&access_key=%template{apilayer key} \n{name}<br/><i>%s USD = {json.result|*%s.replace(/\\D/,'')} RMB</i>",
                        "kwFilter": "\\d\\$|\\$\\d"
                    },
                    {
                        "name": "Google Search in site",
                        "url": "https://www.google.com/search?q=%s%20site%3A%h&ie=utf-8&oe=utf-8"
                    },
                    {
                        "name": "📄  Copy",
                        "url": "c:%sr"
                    },
                    {
                        "name": "📝  Paste",
                        "url": "paste:"
                    },
                    {
                        "name": "🔆 Find in page",
                        "url": "find:%sr"
                    },
                    {
                        "name": "🔗  Open text link",
                        "url": "%sr.replace(/。/g,\".\").replace(/[^ \\w\\-_\\.~!\\*'\\(\\);:@&=\\+\\$,\\/\\?#\\[\\]%]/g,\"\").replace(/ /g,\"\").replace(/^/,\"http://\").replace(/^http:\\/\\/(https?:)/,\"$1\")",
                        "kwFilter": "\\w.*[\\.。].*\\w|1[a-zA-Z0-9]{22,}",
                        "nobatch": true
                    },
                    {
                        "name": "Words to qrcode",
                        "url": "https://hoothin.com/qrcode#%s",
                        "icon": "https://hoothin.com/qrcode/favicon.svg"
                    },
                    {
                        "name": "IMDb rating",
                        "url": "showTips:https://www.imdb.com/find/?q=%s&exact=true.then{.find-title-result .ipc-metadata-list-summary-item__t}\n<h2 style=\"margin: 5px;\">\n{.hero__primary-text}\n<span style=\"position: absolute; right: 10px; color: orange;\">{.ipc-btn__text>div>div>div}</span>\n</h2>\n<div style=\"display: flex; font-size: 20px; width: 500px;\">\n<img style=\"height: fit-content;\" src=\"{.ipc-image|src}\"/>\n<div style=\"font-size: 16px; line-height: 1.5; text-align: left; margin: 5px;\">\n<div>{a.ipc-chip|<span style=\"white-space: nowrap;margin: 5px; font-size: 16px; border-radius: 5px; padding: 2px; box-shadow: 0px 0px 10px 0px #000;\">()</span>}</div>\n<div>Year: {h1+ul>li>.ipc-link}</div>\n<div>Director: {section>div>div>.title-pc-list>li:nth-child(1) li}</div>\n<div>Writer: {section>div>div>.title-pc-list>li:nth-child(2) li}</div>\n<div>Stars: {section>div>div>.title-pc-list>li:nth-child(3) li|()}</div>\n<div style=\"font-size: 16px; margin-top: 10px; border-top: 1px solid;\">{section>p>span}</div>\n</div>\n</div>"
                    },
                    {
                        "name": "📦 Batch open links",
                        "url": "%s[all]",
                        "kwFilter": "^https?:"
                    },
                    {
                        "name": "Magnet2Torrent-lolicon",
                        "url": "https://m2t.lolicon.app/#p{#magnet=%s}",
                        "kwFilter": "^magnet:",
                        "nobatch": true
                    },
                    {
                        "name": "Magnet-vip",
                        "url": "https://magnet-vip.com/#p{.form-group input=%s&click(.btn-outline-secondary)}",
                        "icon": "https://magnet-vip.com/favicon.png",
                        "kwFilter": "^magnet:",
                        "nobatch": true
                    },
                    {
                        "name": "↩️ Short link restore",
                        "url": "showTips:%s\n{url}",
                        "kwFilter": "^https?://."
                    },
                    {
                        "name": "📺 Preview video",
                        "url": "showTips:\n<video loop autoplay src=\"%s\">\n<a href=\"%s\" download=\"%s\">Download video</a>\n</video>",
                        "kwFilter": "^http.*\\.(3gpp|m4v|mkv|mp4|ogv|webm)\\b"
                    },
                    {
                        "name": "🎵 Preview audio",
                        "url": "showTips:\n<audio loop autoplay src=\"%s\">\n<a href=\"%s\" download=\"%s\">Download audio</a>\n</audio>",
                        "kwFilter": "^http.*\\.(flac|m4a|mp3|oga|ogg|opus|wav)\\b"
                    },
                    {
                        "name": "🏞️ Preview image",
                        "url": "showTips:\n<img src=\"%s\">",
                        "kwFilter": "^http.*\\.(avif|bmp|gif|gifv|ico|jfif|jpe|jpeg|jpg|png|svg|webp|xbm)\\b"
                    }
                ]
            },
            {
                "type": "Page",
                "icon": "list",
                "selectLink": true,
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "Search cache",
                        "url": "https://2tool.top/kuaizhao.php?k=%u",
                        "icon": "data:image/svg+xml,%3Csvg xmlns=\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\" width=\"1em\" height=\"1em\" preserveAspectRatio=\"xMidYMid meet\" viewBox=\"0 0 256 256\"%3E%3Cg fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"16\"%3E%3Cpath d=\"M 239.98507%2C55.993592 A 111.98507%2C39.994664 0 0 1 128%2C95.988256 111.98507%2C39.994664 0 0 1 16.01493%2C55.993592 111.98507%2C39.994664 0 0 1 128%2C15.998927 111.98507%2C39.994664 0 0 1 239.98507%2C55.993592 Z\"%2F%3E%3Cpath d=\"m 239.98507%2C199.97441 a 111.98507%2C39.994664 0 0 1 -55.99253%2C34.63639 111.98507%2C39.994664 0 0 1 -111.985079%2C0 111.98507%2C39.994664 0 0 1 -55.992531%2C-34.6364\"%2F%3E%3Cpath d=\"m 239.98507%2C151.9808 a 111.98507%2C39.994664 0 0 1 -55.99253%2C34.6364 111.98507%2C39.994664 0 0 1 -111.985079%2C-1e-5 A 111.98507%2C39.994664 0 0 1 16.01493%2C151.9808\"%2F%3E%3Cpath d=\"m 239.98507%2C103.9872 a 111.98507%2C39.994664 0 0 1 -55.99253%2C34.6364 111.98507%2C39.994664 0 0 1 -111.985079%2C0 111.98507%2C39.994664 0 0 1 -55.992531%2C-34.6364\"%2F%3E%3Cpath d=\"M 16.01493%2C55.99377 V 199.97441\"%2F%3E%3Cpath d=\"M 239.98507%2C55.993592 V 199.97441\"%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E"
                    },
                    {
                        "name": "Web archive",
                        "url": "https://web.archive.org/web/*/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico"
                    },
                    {
                        "name": "Save archive",
                        "url": "https://web.archive.org/save/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico"
                    },
                    {
                        "name": "Edit current page",
                        "url": "javascript:(function(){document.body.setAttribute('contenteditable', 'true');alert('Now you can modify the page, cancel by ESC');document.onkeydown = function (e) {e = e || window.event;if(e.keyCode==27){document.body.setAttribute('contenteditable', 'false');}}})();"
                    },
                    {
                        "name": "Open url",
                        "url": "%t",
                        "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiPjxwYXRoIGQ9Ik03MjIuOCA0NTlsLTE4LjkgMTguOS0yLjcgMi43LTQuNyA0LjgtNTIuNyA1Mi43IDI2LjMgMjYuMyA1Mi43LTUyLjcgMTg0LjQgMTg0LjQtMjEwLjcgMjEwLjgtMTg0LjQtMTg0LjQgNTIuNi01Mi43LTI2LjMtMjYuNC01Mi43IDUyLjctMjYuMyAyNi40IDIzNy4xIDIzNy4xIDI2My40LTI2My41eiIgZmlsbD0iIzA2MDAwMSIvPjxwYXRoIGQ9Ik0zMjcuNyAzNTMuNmwzNDIuNSAzNDIuNSAyNi4zLTI2LjNMMzU0IDMyNy4zeiIgZmlsbD0iIzA2MDAwMSIvPjxwYXRoIGQ9Ik0zMDEuMyA1MTEuN0wxMTYuOSAzMjcuM2wyMTAuOC0yMTAuN0w1MTIuMSAzMDFsLTUyLjcgNTIuNiAyNi4zIDI2LjQgNTIuNy01Mi43IDI2LjMtMjYuNC0yMzctMjM3TDY0LjIgMzI3LjNsMjM3LjEgMjM3LjEgMjYuMy0yNi4zIDUyLjgtNTIuN0wzNTQgNDU5eiIgZmlsbD0iIzA2MDAwMSIvPjwvc3ZnPg==",
                        "description": "ctrl: backTab | alt: mini-window | ctrl+shift: inPrivate",
                        "openInNewTab": true
                    },
                    {
                        "name": "Copy target svg to base64",
                        "url": "javascript:(()=>{let svg=window.targetElement&&window.targetElement.querySelector('svg');if(svg){navigator.clipboard.writeText('data:image/svg+xml;base64,'+btoa(unescape(encodeURIComponent(new XMLSerializer().serializeToString(svg)))));alert(\"copy over!\")}})()"
                    },
                    {
                        "name": "Google lens-search image from clipboard",
                        "url": "[\"Google lens\"]",
                        "description": "search image from clipboard"
                    },
                    {
                        "name": "Mainonly by jerrylus",
                        "url": "javascript:(function(){var e=document.body;let n=document.head.appendChild(document.createElement(\"style\"));n.textContent=\".mainonly { outline: 2px solid red; }\";let t=CSS.supports(\"selector(:has(*))\");function o(n){n instanceof HTMLElement&&(e.classList.remove(\"mainonly\"),(e=n).classList.add(\"mainonly\"))}function i(e){o(e.target)}function l(o){if(o.preventDefault(),t)n.textContent=\":not(:has(.mainonly), .mainonly, .mainonly *) { visibility: hidden; }\";else{n.textContent=\":not(.mainonly *, .mainonly-ancestor) { visibility: hidden; }\";var i=e;do i.classList.add(\"mainonly-ancestor\");while(i=i.parentElement)}r()}function s(o){if(\"Escape\"===o.key){o.preventDefault();var i=window.scrollY||document.documentElement.scrollTop;if(n.remove(),document.removeEventListener(\"keydown\",s),r(),e?.classList.remove(\"mainonly\"),!t)for(let l of document.getElementsByClassName(\"mainonly-ancestor\"))l.classList.remove(\"mainonly-ancestor\");window.scrollTo(0,i)}}function a(n){n.preventDefault(),n.deltaY<0?o(e.parentElement):o(e.firstElementChild)}function r(){document.removeEventListener(\"mouseover\",i),document.removeEventListener(\"click\",l),document.removeEventListener(\"wheel\",a)}document.addEventListener(\"mouseover\",i),document.addEventListener(\"click\",l),document.addEventListener(\"wheel\",a,{passive:!1}),document.addEventListener(\"keydown\",s)}())"
                    },
                    {
                        "name": "📺 Preview video-Page",
                        "url": "[\"📺 Preview video\"]",
                        "kwFilter": "^http.*\\.(3gpp|m4v|mkv|mp4|ogv|webm)(\\?|#|$)"
                    },
                    {
                        "name": "🎵 Preview audio-Page",
                        "url": "[\"🎵 Preview audio\"]",
                        "kwFilter": "^http.*\\.(flac|m4a|mp3|oga|ogg|opus|wav)(\\?|#|$)"
                    },
                    {
                        "name": "🏞️ Preview image-Page",
                        "url": "[\"🏞️ Preview image\"]",
                        "kwFilter": "^http.*\\.(avif|bmp|gif|gifv|ico|jfif|jpe|jpeg|jpg|png|svg|webp|xbm)(\\?|#|$)"
                    }
                ]
            },
            {
                "type": "Web cache",
                "icon": "clock-rotate-left",
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "Wayback Machine all",
                        "url": "https://web.archive.org/web/*/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico"
                    },
                    {
                        "name": "Wayback Machine",
                        "url": "https://web.archive.org/web/%u",
                        "icon": "https://web.archive.org/_static/images/archive.ico"
                    },
                    {
                        "name": "Google cache",
                        "url": "https://webcache.googleusercontent.com/search?q=cache:%u"
                    },
                    {
                        "name": "Google cache text",
                        "url": "https://webcache.googleusercontent.com/search?strip=1&q=cache:%u"
                    },
                    {
                        "name": "Bing cache",
                        "url": "https://www.bing.com/search?q=url:%u&go=Search&qs=bs&form=QBRE#p{click(ol#b_results li.b_algo:first-of-type div.b_attribution a.trgr_icon)&open(ol#b_results li.b_algo:first-of-type div.b_attribution a[href*\\=\"cc.bingj.com/cache\"])}"
                    },
                    {
                        "name": "Archive.is",
                        "url": "https://archive.is/newest/%u"
                    },
                    {
                        "name": "Archive.is all",
                        "url": "https://archive.is/%u"
                    },
                    {
                        "name": "Memento",
                        "url": "http://timetravel.mementoweb.org/memento/0/%u",
                        "icon": "http://mementoweb.org/static/css/images/timetravel_logo_20x20.png"
                    },
                    {
                        "name": "Megalodon",
                        "url": "https://megalodon.jp/?url=%u"
                    },
                    {
                        "name": "Yahoo cache",
                        "url": "https://search.yahoo.com/search?p=url:%u#p{open(#results li:first-of-type a[href*\\=\"cc.bingj.com/cache\"], #results li:first-of-type a[href*\\=\"cc.bingj.com%2fcache\"])}"
                    },
                    {
                        "name": "Ghostarchive",
                        "url": "https://ghostarchive.org/search?term=%u"
                    },
                    {
                        "name": "WebCite",
                        "url": "https://webcitation.org/query?url=%u"
                    }
                ]
            },
            {
                "type": "Search by image",
                "icon": "eye",
                "selectImg": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "Google Search by image",
                        "url": "https://www.google.com/searchbyimage?image_url=%t"
                    },
                    {
                        "name": "Google translate image",
                        "url": "https://translate.google.com/?op=images#p{input[accept^\\=\"image\"]=%i}"
                    },
                    {
                        "name": "Lunapic editor",
                        "url": "https://www.lunapic.com/editor/index.php?action=url&url=%t",
                        "nobatch": true
                    },
                    {
                        "name": "Pixlr easy editor",
                        "url": "https://pixlr.com/x/#p{click(#home-open-url)&#image-url=%t&click(.dialog>.buttons>a.button.positive)}",
                        "nobatch": true
                    },
                    {
                        "name": "Photopea editor",
                        "url": "https://www.photopea.com/#%7B%22files%22:%5B%22%t%22%5D,%22environment%22:%7B%7D%7D",
                        "nobatch": true
                    },
                    {
                        "name": "Yandex Search by image",
                        "url": "https://yandex.com/images/search?source=collections&rpt=imageview&url=%t"
                    },
                    {
                        "name": "QRCode detection",
                        "url": "https://hoothin.com/qrdecode#p{#fileInput=%i}",
                        "icon": "https://hoothin.com/qrcode/favicon.svg"
                    },
                    {
                        "name": "SauceNAO",
                        "url": "https://saucenao.com/search.php?db=999&url=%t"
                    },
                    {
                        "name": "IQDB",
                        "url": "https://iqdb.org/?url=%t"
                    },
                    {
                        "name": "3D IQDB",
                        "url": "https://3d.iqdb.org/?url=%t"
                    },
                    {
                        "name": "Baidu Search by image",
                        "url": "https://graph.baidu.com/details?isfromtusoupc=1&tn=pc&carousel=0&promotion_name=pc_image_shituindex&extUiData%5bisLogoShow%5d=1&image=%t"
                    },
                    {
                        "name": "Bing Search by image",
                        "url": "https://www.bing.com/images/search?view=detailv2&iss=sbi&form=SBIVSP&sbisrc=UrlPaste&q=imgurl:%t"
                    },
                    {
                        "name": "TinEye",
                        "url": "https://www.tineye.com/search?url=%t"
                    },
                    {
                        "name": "Sogou Search by image",
                        "url": "https://pic.sogou.com/ris?query=%t"
                    },
                    {
                        "name": "WhatAnime",
                        "url": "https://trace.moe/?url=%t",
                        "icon": "https://trace.moe/favicon.png"
                    },
                    {
                        "name": "360 Search by image",
                        "url": "http://st.so.com/stu?imgurl=%t"
                    },
                    {
                        "name": "ZXing QRCode",
                        "url": "https://zxing.org/w/decode?full=true&u=%t"
                    },
                    {
                        "name": "ImgOps",
                        "url": "https://imgops.com/%b"
                    }
                ]
            },
            {
                "type": "Scholar",
                "icon": "graduation-cap",
                "sites": [
                    {
                        "name": "Google scholar",
                        "url": "https://scholar.google.com/scholar?hl=zh-CN&q=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACqklEQVQ4jYWT2UtUURzHL/QH1LMP9hKVNUKFWpP7TDrjU9uEo4WPWlERUbSoueSMaTWjTBCRGV3HiCsSWrTQApVSZBtZWEZSUWZkC3PPne3OzKeHK1NKy4Hfyzl8P+d3vt/fkSRJmpWSVbU9vbxbMZXJSnqZrMx3yErqmrN/r7V+Zf76jjNz5mYXSilZldtKfGBrA5sXcg7Dpg5wX/lzNV+FlmuwsRNy6r9HJFO5v9feBlaXILNWxenT+Pgtzr/W2Oc4azwalqMgLXZ29di9JMXj/xH3P4pybjDKhvYg1qMgpZfKyko3lPk0xr9PF7/4EOfTjwQAiQRcfqpjrlMZeBVjc2eI/FaQ5jlkZWs3qKHENPH7yTg5DYKKExp6DGJxcLRprHILAJr7w5hdIC1wyMquHmNj3/kQN57rALz9Eie/SZBRo/JwLAZAtRLC4jIA7r4pQHqprBS0QkaNysLdAXbKIQAiOjh9Gml7VOS7kaSooGkGwFQqKzYvWFyCgiZBbqPg3mvjRv9ABNPeANeHdSbVBOu8GvYWA9ByMcyKmQCLS5DToFLSKlDuR/kmEox+Moyt6w2TtidAUbPgyKUwZceDWI7MAFhdRgdL9quk7ghw8bGeNPXdZJzKjiCZNSpZtSp5jQKb9zeA1SUw16ms9WqcvBlhcDTG4KsYoxO/ohXhBFWng5jrVCwuQbHnN0B2vaDiRJCJqdzvvtRZfUyQ3SA4dSuCbtjC0JsY5npBYRLg9PfaPEYK14f15NA4fRpLD6jkHxKY9ga4PWKcvRyPk9toGF7sBWmR45S/pN0Y5a6BaLLdroEoGTUqy6oNc99NGk85dCHM8oMCqzuIvQ2k2XPzLAWNX9UiD9i90D0EE8Yo8GQc/A/g2QSMfIHaPsg9DMUe4/dmbrnz8CdxKwtDTtdexQAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "EBSCO",
                        "url": "http://web.b.ebscohost.com/ehost/results?sid=8e76c941-084d-4b93-b05a-d5f182196017%40sessionmgr102&vid=1&hid=128&bquery=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACJ0lEQVQ4jZWT3UtTYRzHT+w4pzddeRFdBAbd1Z8giXtJz9mKvBDCxMqkrK57u6kEyx13zjHWIl8TEbMptaLpZMeMCgdBS8dSRC8WWAS9UJRS1j5d7AWnjuqB78UPHj58n+f7+wpFLp0il45Z1hBs7nVS0krPdoXM/YyEIpdOgaRSWt/JGZ9BvWeUOiXIUXWMxvZxGrQQTd4wTd4wrkv3sDh1LOsBYpVKaX0XPaEYmfPx6wqHlSAHLt/nlDdMZO4tyWSSHXUdmKrUXECxS0eUVIS9V3kYWQTAiCYQKlpT1itaESs9BKYWqHU/QrApuYDsYFMYnJwF4PH0G0RJxeLUKJQ1BKubbYdusvNIF2ZZzQOwKww9mcsCTJKKKKmU1PgoPzvElkoPBZK68RM3AxjRRMp++TWO6yFGns3nT2EzwIcvyzyILBB+mWD1128GJl7nvP2vgOjie6zn/Ow77+d5fInhp/P/BzCiCQSrG6GsBfsFP/1GHMHRhsX5j4BMCoWyxtaD19l1rBuzrGGWVYr3t+cH3Jmc2xijU8NU5UFwKFwZmGLPyb7sMmUBZllDKGvhbtrBxKv0ItmVlMpaqG4O8O7TN7bX3kKU1gDMskZJjY/G9nG+r/wEYPnHKg1aCMfFYaqbA6gjLwCYX/pMYdpVFmCq9LD7xG36jTg9oRgdwWm6x2L0heN0js7QOx5jcHKW3lCM0zcMxPVdyKmzdY3SFc6ptKMtJ4U/fkBXz/LD6BYAAAAASUVORK5CYII="
                    },
                    {
                        "name": "WOS",
                        "url": "http://apps.webofknowledge.com/UA_GeneralSearch.do?fieldCount=3&action=search&product=UA&search_mode=GeneralSearch&max_field_count=25&max_field_notice=Notice%3A+You+cannot+add+another+field.&input_invalid_notice=Search+Error%3A+Please+enter+a+search+term.&input_invalid_notice_limits=+%3Cbr%2F%3ENote%3A+Fields+displayed+in+scrolling+boxes+must+be+combined+with+at+least+one+other+search+field.&sa_img_alt=Select+terms+from+the+index&value(input1)=%s&value%28select1%29=TI&value%28hidInput1%29=initVoid&value%28hidShowIcon1%29=0&value%28bool_1_2%29=AND&value%28input2%29=&value%28select2%29=AU&value%28hidInput2%29=initAuthor&value%28hidShowIcon2%29=1&value%28bool_2_3%29=AND&value%28input3%29=&value%28select3%29=SO&value%28hidInput3%29=initSource&value%28hidShowIcon3%29=1&limitStatus=collapsed&expand_alt=Expand+these+settings&expand_title=Expand+these+settings&collapse_alt=Collapse+these+settings&collapse_title=Collapse+these+settings&SinceLastVisit_UTC=&SinceLastVisit_DATE=&timespanStatus=display%3A+block&timeSpanCollapsedListStatus=display%3A+none&period=Range+Selection&range=ALL&ssStatus=display%3Anone&ss_lemmatization=On&ss_query_language=&rsStatus=display%3Anone&rs_rec_per_page=10&rs_sort_by=PY.D%3BLD.D%3BVL.D%3BSO.A%3BPG.A%3BAU.A&rs_refinePanel=visibility%3Ashow",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABr0lEQVQ4jZ2TPYobQRCFvyNUMpGTjgQbGAqBEZs1i5AD4VWzBoNgF1cihB0NONyk1/mgEwxzgmFuMHMD6Sa7RxgHQ8uzI+HAFRXUT79+7xVMQjPUO/zxFyfv8ONcM3Tafw4nuHZPlxZM62lBu6dzgrsYNsWKNQcA/YAW9xyKew5xSSy/UhWfh1qx5mCKvVsS74ivz7wB2CcsrogAAiIgmqGmWP+bHuD1mbd4N/RgitVbGic4zdBwQxAQm2NxSSwfqI4/OYUZwRSrv9FohtZbGlOMckPVv9ALSP1IAxA+EsYQNUPTYPs08NS/0JcbKvIFeZgRNEM1Q53gwg1hSqIpZoqVG6roiWFGyBfk9JG+j/Te4cOMkN+SX5PLO3x+OzzmHT7NnRFETyw3VKZYviC/QDAfmE9IzwgSB+P/HXecxiic4GyOAdSPNAJy5mCsQvtEFz1RM/S451RvaeKSmIZtjnmHF5CzClMftN/pTDHN0OQDgLj6u+idD5JMyYkCUj5QFevBhcUXDnE1oBKQ5MQLop3g2h1dgnlNBZtj7e7KLYwjHVP7gy5dY8r/eY3/G38A1vO4VlociLQAAAAASUVORK5CYII="
                    },
                    {
                        "name": "JSTOR",
                        "url": "http://www.jstor.org/action/doAdvancedSearch?q0=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAADl0lEQVQ4jS2RS0zbdQCA/3cvJh71ollMICN0FhpwbBlZx+Zg0NdC3/23pbQ8B91YGQOtCAOZJQrIaillLVDgJ6+BPMTJU91Bl7mwOBQQjEuGzJMHTbx8HvD+5Uu+fFLGSy/XlipVQlaohC1NKeT0TOFSZgm3MlvYUtOF+ViKMB9LEbbUdOFWZgk5TXnEKVRCTkkTkkeRMb/cEGS+sZb1T5r54sZVRpwuhq1ONsUU+6tr7C2v8jg5TtLh5uv2Bta7mllqaWDRX49kS1OKe9eqCBvP0u+8RNynI+rIp/nEcdqyT/HX4Qv+/fsfomYnd4xq4j4NAyWFDFboSJjsSLbjSjEbqKXPdpGBEi19lgJWoteZD1XRVZTD1uoyz59uM1hup18uoM9eSMSSz0CJjmGHG0lWqETCZKfPns9Mq5fuwrOETRfpNeQRNqp5srjEwdYO4zfKGasz06vPY/ZWGZ3nThHTWpBsqQqx8tF7DFYYmGnx0u8o5MPT2UwFS2jPUbI5t8Qf27vEnBbW4wG++tSPCNiZft9DTP+/YLUzyFCFHlHvYK6jgpD6FBFrAWHTeX76coXDnT169VrmbvuYD1VyS6Uk5iwiZrAiyYpMMSK7GHAXMtHkouN0FiN+MzOtpfTocvnt4fc839ohJpu569EwVFlM3GsgYslnrNSH5M7MEuELOlpU6QyU6Ih7DWwM3iTpNxPKO8mzzR85+GWXXq2GHl0uC53VDFYW06vPY+HdAJIt9S2xGAww21bK/fA1OvNOU/vKa/Ro1ISNeWx/84DD3T367UaGqi8T9+rp1qi5/urrDFqdSI40pZj2VzHR6GC2vYzlSB3JKya+TTYx0+Zh/4eHHGztcNdtZaJJRtTZWI3VE3UUEdWYkFxKlejXGmlVKYi5tEw0ygx4tIzV2bhzWc32xgN+f/yEhM9BxPIOwzUmQuocItZ8Rj1eJGuqQiwG61kIlSMCNrouFXA7921C5zL5rDifP/ee8WhqluYTGYiAlc8bZKKOIkZqTExUVx1tvN92kz7bBbo1ZxitvcLPa+tMNtSxtbzMi1/3GaupYbLJzr0PSrljOM90sIS4V0//UUKWGHN7SZQbGKoyErUU8V0iydOVNR7dmyPhKmPEb2Ej0cjoVTsfX8il48xJxhucDFncSNY33pxfvBJg1F3GbN11kg4Pw3Y3k9V+hK+SIYsT4a1gzFNBUi5lxFXGqLuMqepaplw+/gNcwmcGmhKGRAAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "Springer",
                        "url": "http://rd.springer.com/search?query=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAuElEQVQ4jbWRsQ2EMAxFMwjFzULHJvR0GeAaKL2GV4jEANmBiorqOipf5ejH+Dg46b5kRYLv5x8niKNl3SQSC6fs/a4UvOamG0pxyrKs231A24+H8xKg7cdi1ukKjcTngEhcjBobT72SC0ADmjA6pyxNN/gApHPKEoklElcAHYJLDRpdjXaJNrL9FjCaNnrTTwEK0RfAl7gMsCBPH3eAzfYaWN5eDgnuqgLs8ySv5+Nr7fP0J8AvegOhkGr6AYHSEgAAAABJRU5ErkJggg=="
                    },
                    {
                        "name": "Wikipedia",
                        "url": "https://en.wikipedia.org/w/index.php?search=%s&button=&title=Special%3ASearch"
                    },
                    {
                        "name": "Internet Archive",
                        "url": "https://archive.org/search.php?query=%s"
                    },
                    {
                        "name": "Scholar",
                        "url": "http://scholar.google.com/scholar?hl=zh-CN&q=%s&btnG=&lr="
                    },
                    {
                        "name": "Google Book",
                        "url": "https://www.google.com/search?q=%s&btnG=搜索图书&tbm=bks&tbo=1&hl=zh-CN&gws_rd=ssl"
                    },
                    {
                        "name": "krugle",
                        "url": "http://opensearch.krugle.org/document/search/#query=%s",
                        "icon": "https://opensearch.krugle.org/media/images/favicon.ico"
                    },
                    {
                        "name": "npm",
                        "url": "https://www.npmjs.org/search?q=%s",
                        "icon": "https://static.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png"
                    }
                ]
            },
            {
                "type": "Movie",
                "icon": "video",
                "sites": [
                    {
                        "name": "Thepiratebay",
                        "url": "https://thepiratebay.org/search/%s"
                    },
                    {
                        "name": "Torrentz2",
                        "url": "https://www.torrentz2.xyz/?q=%s"
                    },
                    {
                        "name": "Torrentz2k",
                        "url": "https://torrentz2k.xyz/search/:p{q=%s&category=all}"
                    },
                    {
                        "name": "1337x.to",
                        "url": "https://www.1377x.to/search/%s/1/"
                    },
                    {
                        "name": "Torlock",
                        "url": "https://www.torlock2.com/all/torrents/%s.html"
                    },
                    {
                        "name": "TD",
                        "url": "https://www.torrentdownloads.me/search/?search=%s"
                    },
                    {
                        "name": "rarbgprx",
                        "url": "https://rarbgprx.org/torrents.php?search=%s"
                    },
                    {
                        "name": "rarbgproxy",
                        "url": "https://rarbgproxy.org/torrents.php?search=%s"
                    },
                    {
                        "name": "kickass1",
                        "url": "https://kat.sx/search.php?q=%s",
                        "icon": "https://kat.sx/kastatic/favicon.ico"
                    },
                    {
                        "name": "kickasstorrents",
                        "url": "https://kickasstorrents.to/usearch/%s"
                    },
                    {
                        "name": "kickass1.to",
                        "url": "https://kickass1.to/usearch/%s/"
                    },
                    {
                        "name": "kat.am",
                        "url": "https://kat.am/usearch/%s/"
                    },
                    {
                        "name": "kickasstorrent.cr",
                        "url": "https://kickasstorrent.cr/usearch/%s/"
                    }
                ]
            },
            {
                "type": "ACG",
                "icon": "gamepad",
                "sites": [
                    {
                        "name": "nyaa.si",
                        "url": "https://nyaa.si/?f=0&c=0_0&q=%s",
                        "icon": "https://nyaa.si/static/favicon.png"
                    },
                    {
                        "name": "Tokyotosho",
                        "url": "https://www.tokyotosho.info/search.php?terms=%s"
                    },
                    {
                        "name": "Mikan",
                        "url": "http://mikanani.me/Home/Search?searchstr=%s"
                    },
                    {
                        "name": "＊MioBT＊",
                        "url": "http://www.miobt.com/search.php?keyword=%s",
                        "icon": "http://www.miobt.com/images/favicon/miobt.ico"
                    },
                    {
                        "name": "shana project",
                        "url": "https://www.shanaproject.com/search/?title=%s"
                    },
                    {
                        "name": "KOTOMI RSS",
                        "url": "https://moe4sale.in/?kw=%s"
                    },
                    {
                        "name": "ACG.RIP",
                        "url": "https://acg.rip/?term=%s"
                    }
                ]
            },
            {
                "type": "Sukebei",
                "icon": "file",
                "sites": [
                    {
                        "name": "nyaa.si",
                        "url": "https://sukebei.nyaa.si/?f=0&c=0_0&q=%s",
                        "icon": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAHmElEQVRYw8WXXYxdVRXHf2vvc849537MvTOdmQ4zUygtpS0FIWL4iBEE9cGqAU0gojHBxAef9MFETXwhRmM00ReNia8kmhh9g0R8kISYiFjAKqYNhZa2Qzud7897zz0fey8fzqVzoS2UJ3Zyc25y99nrt/7rv9feV+J7v6t8hCMAmHn4B+BK1nrwYWmSmtDuGIoSapGhfnSCe6Ys+9KMn/xq8Yr5cSz0+1WU9NgvK4BW3XJhuQThQxFMjVtanZBGM4SmoTvbpD+XYls1FnslYQA2EAiUVkPo3JbQfrCBnU9ZfzXn+LGBAllWUrrrDxxa2LuvQdauI6Js1UJIDJIbwpplxAhrnZgbn9xNs2NwiWAbBp8IpVHKXZbG7SX8dgDQqMFo3bDW8x8YfM+UpdjVYS6pEwfQMxAZCEuwfUgbMXXxrDuPaUf0IwgC8B6kAELBGoPB7Hjg9IJjdswQRZZ+rqS5p3BVpkkEtVpAGFuKZsJc2CKwkCiIDqrmwQuYHKwFV8BiKRCAsaAGVEBM9d2LQcTuALRCh8tz+hoTJyGmVWMxs2RBwGoY4YxBQogUYgXjoXTgqT4CiICUEGTw13khSwzSALWAqZ7qgBJUBB8MKTBvRin6FqzFZh7XD8EKlAIi2AhCD1arwIVCU5SOZiR5l17cwqihIKDplLQniAEJwJuBCgMlGKigZgigdLZKQRXnDYgfvKngwJcBTqAsoKGOvfTYfnuT5dTTbAjx4RG6GtARz2SoXOhbbAAagNjqWUk/kGsAchlAnUKo1SwHhO8U1gCKlp5CDXtGCqZ7K5y6WFw2ZS+FJkKA56Fpz2JmOdODpF+t7mylgBjIBUYtZMVAjcscrsoU0aqojqohlIAqOE+Nkhm3wen54t2NKIS6lDx8g9J1hhcXBAP4HPpdaBSK5Mp6Hx4IlMdrnrQAimEAtIJQrWyVQyyeelBCZpiqO+6MNzl9PsW9p1GluRI6z9ltwzNnDVLx0i/hwY5jv3VMqfJo3fOzScidkBXg3VAJqmwFFEwN9rS61Cws5BF3tdfJu543Nq7eIrMS+r0SXxciFK9C5uBLN3oS4zHe8PUZ5eHdlkLhlW1PWyAvZQegYTNGGpZdsedcGrNZBFgXMKGbnFv44BZ5aKRkcsLxr0V4o2uZbSqlQj0Qvn1QWcmF1Ux5etETldAMhI1Cd0owYjMaps9aatnqwlrPsr/eZWX7/YPXY8ON0zUO70m4tFmSltWhdKjtmQgLasbzn0VHwyp/nvMciaGXw1wq+GEPNGsxvTJkslUymRQ8MLPNqYX8ioAiEBolsp5WIgQGfFZwcFfAha7lzDp8dsbzi/uUvIA/vBXx1PGI584r97cVxfDCsmWvKr8eHwIwpIjPiQKYTDJee7u8asaqUHghd4Y0U/JCKb3y6rzn2GLAZKx87QDsblpeW7e8vqp8YgLun4SXl+DHx+GxMeXpfbAnHDLhcs8w3jSsbjuWtz645hMjljCArZ5jeQNeX/aIwsGOcs8NBiPC7x4yPHfOsTvxzLYCnp2Db92kPHlAWM6VUnUHYLSubKRKVvrrCB4wMRpxaq5H6aEeCf84H9DzsK8tTDUqd9/QNHzziMGrcnxJeeIWODxmcF4ZCYVTm24HYKX7/jeROBScVwoHzhWsrHlKD9bA7M2jvLQaIiE8ckCueLdfKIdGhXpY/WaNYIEXN+1wH7j2aETCSN2ytFn5opsJogVguWNvwptbwkSUgRVaYTBo9kM7JTJXrFk65fiyDnfCaw/nlW6/5J3qVF3b0qkLa0XEnihjNspoaMbf5+T6LqJW+NEhuT6AYlDnHXooHExPRiRlj0whzlPGJWNtu7jqGl5hK1eOL/nLhb4wUPQ6FIB6zTI5sjO1HQvqISs8DfG8tVDQxHFkQvjnhSrEySXPwrbn3IZHFeqhsK9tLhfo8Nj7eCC0VZYAVpSVLcdUJ2ArrU6yZmzppg7n4OJSykhiuGUm4ZM3BTz1glK3JRsZnN1QujlcGLHcOmYYr8tlRU6tm6sDPPbxmEfvbnLsbI/nT+Rc2ihBYTNVJKixd6TERoZurvRKQ2c04ct3Nbht2jDdEvY0PeupMtGwjDdgqatsZMM7TOkXjmfPypUABycN3z/aZv/uiM9/LOGHR5U/Hsv4+V9S5rc9G7nlwmaMJPC5Wy37d1mO3hHQ7Xs+s99wft3znXuFzFmWujAaDS6tKjSjyk8vX3T86d89/rv6HgWSEJ64r8H+3dFloCgQvnF/zBfujPj9Sxm3zwScnHecWHT85rE6AG8ue0pf1TMrlHbHsrDlOTAunF4uiULDagrfe95xcs2QnVvFW2C8tWPCqRgkF75yd/OqRhyrGw5NWUILzRr89IsJzisgWPGERlnteg5MVCC7WwYRYbptSQs4s+7Z6pasn7rExZWCotPgHPEOwMmTBZ86XGN27Np9aXmz5G8nMh65s0Y7MdjBrTYtDP+bd9y8693vnlhwPHOyYCyGzQwevxXeXi7JSiX1AQe0P7wNDV+9t3HN4KpwftXzxD0x7USG7AR54fn0LSF2aEOfWfG8PFdyZNKSO5huCAcmQ+o1w1hD6GPIL21UR/xH/ff8/7zueff8JH+eAAAAAElFTkSuQmCC"
                    },
                    {
                        "name": "Glodls",
                        "url": "https://glodls.to/search_results.php?search=%s"
                    },
                    {
                        "name": "AniDex",
                        "url": "https://anidex.info/?q=%s",
                        "icon": "data:image/ico;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABWiwAAG1IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2PeQti3vsaX7niAQE3VgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2Yggdi6P85z///Qq7n/wMDZYsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOmggdh6/84zP//Sr7s/xUuongAAAAAAAAAAAAAAAAAAAAAAAAAAzI0OEpKTVF8QUNHfBkbHUsAAAAAFRy8VTaF5f81zf//Sr7v/xMoqoIAAAAAAAAAAAAAAAAAAAAAODo9RXx+gNynpJ//ubOr/6+qov+HhIH/R0lKz2Zmgdra5d3/Xrru/w8ntYIAAAAAAAAAAAAAAAAAAAAAQEJFP56dnf/t387///Ld///14f//9uL//O7Z/7ywov+iopz/dniT1R4XwF0AAAAAAAAAAAAAAAAAAAAAAAAAEJSWl9n55tH///DW///s1f//69P//+vT///u2f//+N//uaqZ/zI0NNAAAAAAAAAAAAAAAAAAAAAAAAAAAFNZX5bRx73//+vL///nyv//48T//+LC///jw///5cj//+zT//3jxf9wa2b/AQMGSwAAAAAAAAAAAAAAAAAAAAB+hYv07NfD///ft///163//9Kj///RoP//0qP//9er///euv//6cb/mIl8/xQbIH0AAAAAAAAAAAAAAAAAAAAAhI2U+u/TvP//zpn//8uW///Mmf//zZv//82a///Ll///z5z//9uu/5yJe/8ZIih+AAAAAAAAAAAAAAAAAAAAAGVweKndx7r//8mR///UqP//16///9mz///YsP//1Kj//9Gf///Ej/+AdG7/Bw0SSwAAAAAAAAAAAAAAAAAAAAABBwocrq6w5f/Kp///3rj//+XI///jx///4sX//+LB///crv/RoID/VFlc4wAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAGFrb1TCuLX/+sKl///bwf//7tv//+vV//7Tsv/apYn/eXd3/xkgJEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYmxxWKqnqN3OraL+2ayd/9Gllf+xlIr9eHp80ScvM0MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeb3+GpIiUmPV9io/uUWFokwAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//kAAP/wAAD/4AAA/8EAAPCDAADABwAAgA8AAAAfAAAADwAAAA8AAAAPAAAADwAAAB8AAIAfAADAPwAA4H8AAA=="
                    },
                    {
                        "name": "AcgnX Ero",
                        "url": "https://www.anix.moe/search.php?sort_id=0&keyword=%s"
                    },
                    {
                        "name": "AniRena",
                        "url": "https://www.anirena.com/?s=%s"
                    },
                    {
                        "name": "GGBases",
                        "url": "http://www.ggbases.com/search.so?title=%s"
                    }
                ]
            },
            {
                "type": "Assit",
                "icon": "list-alt",
                "selectTxt": true,
                "selectImg": true,
                "selectAudio": true,
                "selectVideo": true,
                "selectLink": true,
                "selectPage": true,
                "openInNewTab": true,
                "sites": [
                    {
                        "name": "QRcode",
                        "url": "https://hoothin.com/qrcode#%U",
                        "icon": "https://hoothin.com/qrcode/favicon.svg"
                    },
                    {
                        "name": "Show all engines",
                        "url": "https://search.hoothin.com/all#%s"
                    },
                    {
                        "name": "Share to Twitter",
                        "url": "https://twitter.com/intent/tweet?url=%T"
                    },
                    {
                        "name": "Send by Gmail",
                        "url": "https://mail.google.com/mail/u/0/?tf=cm&source=mailto&body=%n %T"
                    },
                    {
                        "name": "Share to Facebook",
                        "url": "https://www.facebook.com/sharer/sharer.php?u=%T&t=%n"
                    },
                    {
                        "name": "🧮  Calculator",
                        "url": "calculator://"
                    },
                    {
                        "name": "🔎  Everything",
                        "url": "ES://%s"
                    },
                    {
                        "name": "🦊  Firefox",
                        "url": "FirefoxURL-308046B0AF4A39CB://%u"
                    },
                    {
                        "name": "⏰  Clock",
                        "url": "ms-clock://"
                    },
                    {
                        "name": "✂️  Screenclip",
                        "url": "ms-screenclip://"
                    },
                    {
                        "name": "☑️  ToDo",
                        "url": "ms-todo://",
                        "description": "Microsoft To-Do"
                    },
                    {
                        "name": "📓  Onenote",
                        "url": "onenote://"
                    },
                    {
                        "name": "⌨️  VSCode",
                        "url": "vscode://%u"
                    },
                    {
                        "name": "Open the link inside words",
                        "url": "%sr.replace(/[^\\w\\-_\\.~!\\*'\\(\\);:@&=\\+\\$,\\/\\?#\\[\\]%]/g,\"\")"
                    },
                    {
                        "name": "Copy to Markdown",
                        "url": "c:[%sr](%t)"
                    },
                    {
                        "name": "📱 Send to phone",
                        "url": "https://s.hoothin.com/#p{wait(x-peer)&call(document.querySelector('x-peer').dispatchEvent(new Event('contextmenu')))&#textInput=%s&click(#textInput+div>button)}",
                        "icon": "https://s.hoothin.com/images/favicon-96x96.png"
                    },
                    {
                        "name": "Bing Search in site",
                        "url": "https://www.bing.com/search?q=%s%20site%3A%h"
                    },
                    {
                        "name": "Duckduckgo Search in site",
                        "url": "https://duckduckgo.com/?q=%s%20site%3A%h"
                    },
                    {
                        "name": "Yahoo Search in site",
                        "url": "https://search.yahoo.com/search;?p=%s%20site%3A%h"
                    },
                    {
                        "name": "Yandex Search in site",
                        "url": "https://yandex.com/search/?text=%s%20site%3A%h"
                    },
                    {
                        "name": "Startpage Search in site",
                        "url": "https://www.startpage.com/sp/search?query=%s%20site%3A%h",
                        "icon": "https://www.startpage.com/sp/cdn/favicons/favicon-16x16--default.png"
                    },
                    {
                        "name": "Douban rating",
                        "url": "showTips:https://www.douban.com/search?cat=1002&q=%s \n<p style=\"margin: 5px;\">\n{h3>a}\n<span style=\"position: absolute; right: 10px; color: orange;\">{.rating_nums}</span>\n</p>\n<div style=\"display: flex; font-size: 20px; width: 500px;\">\n<img src=\"https://images.weserv.nl/?url={.pic>a>img|src}\"/>\n<div>\n<div>{.subject-cast}</div>\n<div style=\"font-size: 16px; margin-top: 10px; border-top: 1px solid;\">{.content>p}</div>\n</div>\n</div>",
                        "icon": "https://www.douban.com/favicon.ico"
                    },
                    {
                        "name": "Metacritic rating",
                        "url": "showTips:https://www.metacritic.com/search/%s/\n<div style=\"display: flex; font-size: 25px;\">\n<img src=\"{img.g-container-rounded-small|src}\"/>\n<div>\n<h2>{.c-pageSiteSearch-results-item>div>p}</h2>\n<div style=\"display: flex; justify-content: space-between; align-items: center;    border-top: 1px solid;\">\n<span style=\"margin: 0 10px;\">{.u-text-uppercase}</span>\n<span style=\"margin: 0 10px;\">{.c-pageSiteSearch-results-item strong}</span>\n<span style=\"color: orange;margin: 0 10px;\">{.c-siteReviewScore}</span>\n</div>\n</div>\n</div>"
                    },
                    {
                        "name": "Preview wikipedia",
                        "url": "showTips:https://en.wikipedia.org/wiki/%s\n<div style=\"max-height: 500px; margin: 5px; overflow: hidden; font-size: large; text-align: left; font-weight: initial; line-height: initial;\">\n<img style=\"max-width: 250px; margin: 0 10px;\" align=\"left\" src=\"{.infobox .image>img|src}\"/>\n{.mw-parser-output>p}\n</div>"
                    },
                    {
                        "name": "Google lens",
                        "url": "https://www.google.com/imghp#p{click([aria-label\\=\"Search by image\"])&[name\\=\"encoded_image\"]=%i}",
                        "description": "Search for clipboard images"
                    },
                    {
                        "name": "🛠️ Copy selected（pic&link）",
                        "url": "c:%element{}"
                    },
                    {
                        "name": "🛠️ Copy selected（txt(link)）",
                        "url": "c:%element{}.replace(/!\\[.*?\\]\\(.*?\\)/g,\"\").replace(/\\[ *\\]\\(.*?\\)\\s*/g,\"\").replace(/\\[((.|\\n)*?)\\](\\(.*?\\))/g,\"$1$3\")"
                    },
                    {
                        "name": "🛠️ Copy selected（{ txt | link }）",
                        "url": "c:%element{}.replace(/!\\[.*?\\]\\(.*?\\)/g,\"\").replace(/\\[\\s*\\]\\(.*?\\)\\s*/g,\"\").replace(/\\[((.|\\n)*?)\\]\\((.*?)\\)/g,\"{ $1 | $3 }\")"
                    }
                ]
            }
        ];
        break;
}