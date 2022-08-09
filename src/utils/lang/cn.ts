import React from 'react';

export const content = {
  sidebar: {
    listMode: '列表模式',
    gridMode: '网格模式',
    joinGroup: '添加内容种子',
    createGroup: '创建种子',
    showHideSeednet: '显示/隐藏种子网络',
    noSeedNetSearchResult: '没有搜到符合的种子网络',
    noTypeGroups: '没有该类型的种子网络',
    recentTip: '最近阅读',
    recentOpen: '最近打开',
    recentAdd: '最近添加',
  },
  welcome: {
    welcomeToUseRum: '欢迎使用 Rumbrary',
    youCanTry: '你可以试试',
    joinGroup: '添加已有种子',
    createGroup: '新建种子网络',
  },
  group: {
    groupName: '种子网络名称',
    desc: '简介',
    seedNet: '种子网络',
    info: '详情',
    exit: '退出',
    name: '名称',
    owner: '创建人',
    groupInfo: '种子网络详情',
    idle: '空闲',
    syncing: '同步中',
    synced: '已同步',
    syncFailed: '同步失败',
    manageGroup: '编辑种子网络',
    exitGroup: '退出种子网络',
    confirmToExit: '确定要退出这个种子网络吗？',
    exited: '已退出',
    exitingGroup: '正在退出群组',
    share: '分享',
    highestBlockId: '最新区块',
    highestHeight: '区块数',
    lastUpdated: '最近更新',
    status: '状态',
    syncingContentTip: '正在检查并同步种子网络的最新内容，请您耐心等待',
    clickToSync: '点击同步最新内容',
  },
  epub: {
    setAsPublic: '设为公开，允许发现',
    bookDetail: '内容详情',
    noDescription: '暂无描述',
    noCover: '暂无封面',
    editCover: '编辑封面',
    editMetadata: '编辑元数据',
    translatorTag: '[译]',
    continueReading: '继续阅读',
    startReading: '开始阅读',
    toggleFullscreen: '切换全屏',
    prevChapter: '上一章',
    nextChapter: '下一章',
    backToPrevPos: '返回跳转前位置',
    chapterSelect: '章节选择',
    toc: '目录',
    noChapter: '暂无章节',
    changeBook: '切换书籍',
    noBook: '暂无书籍',
    uploadedAt: (time: string) => `上传于：${time}`,
    currentReading: '当前阅读',
  },
  epubSettings: {
    displaySetting: '显示设置',
    fontSize: '字号',
    default: '默认',
    lineHeight: '行距',
    theme: '主题',
    light: '浅色',
    dark: '深色',
    black: '黑色',
    font: '字体',
    serif: '衬线',
    sansSerif: '非衬线',
    custom: '自定义',
    customFontTip: '输入你想使用的字体名称，如 微软雅黑, 黑体, Arial, Source Han Sans, 幼圆 等等',
  },
  epubShortCut: {
    shortCut: '快捷键',
    enterFullscreen: '进入全屏',
    exitFullscreen: '退出全屏',
    prevPage: '上一页',
    nextPage: '下一页',
    prevChapter: '上一章',
    nextChapter: '下一章',
    toggleToc: '显示目录',
    toggleHighlighs: '显示标注',
    backToPrevPos: '返回跳转前位置',
  },
  epubHighlights: {
    all: '所有标注',
    list: '标注列表',
    search: '搜索',
    noItem: '暂无标注',
    confirmDelete: '确定要移除这段标记吗？',
  },
  epubMetadata: {
    subTitle: '副标题：',
    isbn: 'ISBN：',
    author: '作者：',
    translator: '译者：',
    publishDate: '出版日期：',
    publisher: '出版商：',
    languages: '语言：',
    languageWithIndex: (index?: React.ReactNode) => `语言${index}：`,
    series: '丛书：',
    seriesNumber: '丛书编号：',
    categoryLevel: '分类：',
    wordCount: '字数：',
    rating: '评分：',
    tags: '标签：',
    tagsNoColon: '标签',
    description: '描述：',
    descriptionNoColon: '描述',
    closeConfirm: '关闭窗口后，未保存的修改会丢失，确定要关闭吗？',
    submitFailed: '提交失败！',
    submitted: '内容元数据已保存修改，正在往链上提交数据，节点同步后生效',
    editMetadata: '编辑元数据',
    isbnTip: '非必填。但为了检索书目的准确性，ISBN号填写提交后将不可修改，请确认后再填写',
    autherTip: '多个人名间请使用 & 分隔。国籍用小括号，如 (法)。外国人名的分隔符请在左侧复制 ･ 使用',
    traslatorTip: '多个人名间请使用 & 分隔',
    addLanguage: (i: 2 | 3) => `添加第${i === 2 && '二'}${i === 3 && '三'}种语言`,
    seriesTip: '本书所属的丛书',
    seriesNumberTip: '1~100的数字',
    categoryLevel1: '一级分类',
    categoryLevel2: '二级分类',
    categoryLevel3: '三级分类',
    submitChanges: '提交修改',
  },
  epubGroupView: {
    noBookUploadTip: [
      '种子网络还没有书籍',
      '点击上方的上传书籍按钮上传第一本书',
    ],
    noBookWaitTip: [
      '种子网络还没有书籍',
      '等待种子网络上传/同步第一本书',
    ],
    uploadingTip: [
      '书籍正在上传中……',
      '上传完毕后，你可以在这里选择书籍开始阅读',
    ],
    uploadedTip: '书籍已成功上传',
    startReading: '开始阅读',
  },
  epubUpload: {
    uploadBook: '上传书籍',
    uploadBookNoPermission: '你没有权限在这个种子网络上传内容',
    readFailed: '读取文件错误',
    parseFailed: '解析文件失败！',
    alreadyUploaded: (name: React.ReactNode) => ['当前种子网络已经上传过', name, '这本书了，还需要重新上传一遍吗？'],
    uploadEpub: '上传Epub文件',
    uploadToSeedNet: (name: string) => `上传到种子网络 "${name}"`,
    dragEpubHere: '将Epub文件拖拽到此处',
    or: '或者',
    selectEpubFile: '选择本地Epub文件',
    selected: '已选择：',
    uploadSuccess: '上传成功！',
    confirmUpload: '确认上传',
  },
  epubCover: {
    readFailed: '文件读取错误',
    editCover: '编辑封面',
    currentCover: '当前封面',
    dragCoverHere: '将封面图片文件拖拽到此处',
    supportFileTip: '支持 .jpg 和 .png， 图片文件大小不可超过2M',
    uploadSuccess: '上传成功！',
    or: '或者',
    selectCoverFile: '选择本地封面图片文件',
    fixedRatio: '固定长宽比',
    cancelSelect: '取消选择',
    confirmCrop: '确认裁剪',
    reCrop: '重新裁剪',
    uploading: '上传中',
    confirmUpload: '确认上传',
  },
  createGroup: {
    createGroup: '新建种子网络',
    selectTemplate: '选择模版',
    selectTemplateTip: '模板会决定你所创建的产品分发信息及内容呈现的形态。 每一个模板都针对使用场景做了专门的设计和功能优化， 对发布功能、经济系统、社交关系、管理员权限、成员管理等功能的支持会有所不同。*种子网络建立后，无法修改模版。',
    NA: '未开放',
    book: '书籍',
    permissionTitle: '发布类种子网络 - 成员权限设置',
    permissionTip: '设置新成员加入后的内容发布权限。*种子网络建立后，无法修改默认权限',
    write: '新成员默认可写',
    comment: '新成员仅可评论',
    readonly: '新成员默认只读',
    writeDesc: [
      '新加入成员默认拥有可写权限，包括发表主帖，评论主贴，回复评论，点赞等操作。管理员可以对某一成员作禁言处理。',
      '新加入成员默认可写的权限设置，适用于时间线呈现的微博客类社交应用。',
    ],
    commentDesc: [
      '新加入成员默认只允许评论，没有权限进行发表主帖的操作。管理员可以对某一成员开放权限，或者禁言。',
      '新加入成员默认只评的权限设置，适用于开放讨论的博客、内容订阅、知识分享等内容发布应用。',
    ],
    readonlyDesc1: (tooltip: React.ReactNode) => [
      '新加入成员默认只读，没有权限进行发表主帖、评论主贴、回复评论、点赞等操作',
      tooltip,
      '。管理员可以对某一成员开放权限。',
    ],
    readonlyDesc2: '新加入成员默认只读的权限设置，适用于个人博客、内容订阅、知识分享等内容发布应用。',
    readonlyTip: '限制成员发帖但是允许成员评论、回复、点赞的权限管理功能即将开放',
    groupBasicInfo: 'Epub类种子网络 - 基本信息',
    name: '名称（种子网络建立后不可更改）',
    desc: '简介（可以不填）',
    confirmCreateEpubSeednet: '确定新建种子网络：书籍 Epub',
    confirmCreateTip: '种子网络建立后，将无法修改种子网络的名称，默认权限设置，以及种子网络的模板。',
    backAndEdit: '返回修改',
    confirmCreate: '确认创建，上传文件',
    created: '创建成功',
  },
  joinGroup: {
    joinGroup: '添加已有种子',
    seedParsingError: '种子文件解析错误',
    existMember: '你已经是这个种子网络的成员',
    pasteSeedText: '粘贴种子文本',
    selectSeedFile: '点击选择种子文件',
    selectedSeedFile: '种子文件已选中',
    selectSeedToJoin: '选择要加入网络的种子文件',
    availablePublicGroups: '有哪些公开的种子网络可以加入？',
  },
  titleBar: {
    about: '关于 Rumbrary',
    checkForUpdate: '检查更新',
    manual: '帮助手册',
    report: '反馈问题',
    exit: '退出',
    dev: '开发者调试',
    devtools: '切换开发者工具',
    exportLogs: '导出调试包',
    clearCache: '清除缓存',
    confirmToClearCacheData: '确定清除客户端的缓存数据吗？',
    relaunch: '重启应用',
    myLib: '管理我的内容库',
    nodeAndNetwork: '节点与网络',
    editProfile: '设置个人信息',
    editWallet: '关联钱包',
    exportKey: '导出密钥',
    importKey: '导入密钥',
    switchLang: '切换语言',
  },
  init: {
    signupNode: '创建节点',
    signupNodeTip: '第一次使用',
    loginNode: '登录节点',
    loginNodeTip: '已经拥有节点',
    externalNode: '外部节点',
    externalNodeTip: '连接到公开可访问的节点',
    importNode: '节点导入',
    exportNode: '节点导出',
    storagePathTip: [
      '请选择一个文件夹来储存节点数据',
      '这份数据只是属于你',
      '我们不会储存数据，也无法帮你找回',
      '请务必妥善保管',
    ],
    storagePathLoginTip: [
      '创建节点时您选择了一个文件夹',
      '里面保存了您的节点信息',
      '现在请重新选中该文件夹',
      '以登录该节点',
    ],
    selectFolder: '选择文件夹',
    createPassword: '创建密码',
    inputPassword: '输入密码',
    savePassword: '记住密码',
    useNewConfig: '使用新的配置',
    selectExistedConfig: '或者选择最近使用过的配置',
    hostPlaceHolder: '127.0.0.1 （可选）',
    portPlaceHolder: '端口',
    jwtPlaceHolder: 'jwt （可选）',
    tlsPlaceHolder: 'TLS 证书',
    connectExternalNode: '连接外部节点',
    starting: '正在启动...',
    startingTooLong: '启动太久，你也可以试试',
    wrongPassword: '启动失败，密码错误...',
    startFailed: '启动失败...',
    connectExternalNodeFailed: '连接外部节点失败...',
    youCanTry: '你可以试试',
  },
  myLib: {
    title: '内容标题',
    author: '作者',
    tags: '标签',
    size: '大小 (MB)',
    format: '格式',
    rating: '评分',
    oparation: '操作',
    leaveGroup: '确实要退出这本书所在的种子网络吗？',
    filter: '筛选器',
    contentType: '内容类型',
    bookCategories: '书籍分类',
    language: '语言',
    myLib: '我的内容库：',
    books: '书籍',
    sort: '排序',
    recentAdd: '按最新上架',
    recentOpen: '按最近浏览',
    coverMode: '封面模式',
    listMode: '列表管理模式',
    emptyTip: [
      '暂时空空如也',
      '加入种子网络后，种子网络内的书籍内容将会呈现在这里',
    ],
  },
  mixin: {
    connectMixin: '连接 Mixin 账号',
    connectMixinPrivacyTip: '别人向您转账之后，他将知道您的 mixin 帐号，将来我们会提供更加匿名的转账方式，以避免暴露您的 mixin 帐号',
    mixinScanToConnect: 'Mixin 扫码连接钱包',
    noMixinOnYourPhone: '手机还没有安装 Mixin ?',
    toDownload: '前往下载',
    confirmUnbindMixin: '确定要取消mixin绑定吗？',
    failToFetchMixinProfile: '获取mixin信息失败',
  },
  profile: {
    setupProfile: '设置个人信息',
    editProfile: '编辑个人信息',
    editSuccess: '修改成功！',
    change: '更换',
    nickname: '昵称',
    connectWallet: '绑定钱包',
    syncingProfile: '正在同步个人资料',
  },
  imageLib: {
    keyword: '关键词',
    pixabayLicenseTip: '图片由 Pixabay 提供，都是免费可自由使用的',
    emptyImageSearchResult: '没有搜索到相关的图片呢',
    imageSearchTip1: '换个关键词试试',
    imageSearchTip2: '也可以换英文试一试',
  },
  update: {
    downloading: '正在下载',
    updating: '正在检查更新',
    alreadyLatestVersion: '当前已安装最新版本',
    newVersionPublished: (version: string) => `新版本 ${version} 已发布`,
    reloadForUpdate: '重启并更新',
    doItLater: '稍后',
  },
  operations: {
    cancel: '取消',
    back: '返回',
    save: '保存',
    confirm: '确认',
    prevStep: '上一步',
    nextStep: '下一步',
    closeWindow: '关闭窗口',
    edit: '编辑',
  },
  ago: {
    justNow: '刚刚',
    minutesAgo: '分钟前',
    hoursAgo: '小时前',
  },
  shareGroup: {
    downloadedThenShare: '已下载，去分享给好友吧~',
    shareSeed: '分享种子',
    copySeed: '复制以上种子',
    copySeedOr: '或',
    downloadSeed: '下载种子文件',
    joinSeedGroup: '加入种子网络',
    openSeedGroup: '打开种子网络',
  },
  manageGroup: {
    savedAndWaitForSyncing: '已保存，正在同步中，大约 20 秒之后完成',
    title: '种子网络基本信息',
    manageGroupSkip: '跳过，以后再设置',
  },
  node: {
    nodeDataNotExist: '该文件夹没有节点数据，请重新选择哦',
    keyStoreNotExist: '该文件夹没有keystore数据，请重新选择哦',
    connectedPeerCount: (count: number) => `已连接 ${count} 个节点`,
    connectedPeerCountTip: (count: number) => `你的节点已连接上网络中的 ${count} 个节点`,
    confirmToExitNode: '确定退出节点吗？',
    exitingNode: '正在退出节点...',
    nodeParams: '节点参数',
    port: '端口',
    tslCert: 'tls证书',
    networkStatus: '网络状态',
    status: '状态',
    traffic: '流量',
    lastHour: '最近一小时',
    lastDay: '最近24小时',
    lastMouth: '最近一个月',
    nodeInfo: '节点信息',
    storageDir: '储存文件夹',
    detail: '详细信息',
    version: '版本',
    exitNode: '退出节点',
    refresh: '重新加载',
  },
  avatar: {
    selectProvider: '选择操作方式',
    selectFromImageLib: '在图库中选择',
    makeAnAvatar: '捏头像',
    selectAvatar: '选择头像',
    uploadImage: '上传图片',
    replace: '更换',
    upload: '上传',
    image: '图片',
    moveOrDragImage: '移动或缩放图片',
  },
  backup: {
    exportKey: '导出密钥...',
    importKey: '导入密钥...',
    selectKeyBackupToImport: '选择要导入密钥的备份文件',
    selectedKeyBackupFile: '备份文件已选中',
    selectKeyBackupFile: '点击选择备份文件',
    selectFolder: '选择文件夹',
    storagePathTip2: '请选择一个文件夹来储存节点数据，这份数据只是属于你，我们不会储存数据，也无法帮你找回，请务必妥善保管',
    importKeyDataDone: '导入完成',
    failedToReadBackipFile: '读取备份文件失败',
    notAValidZipFile: '备份文件无效',
    isNotEmpty: '文件夹不为空',
    incorrectPassword: '密码错误',
    writePermissionDenied: '对该文件夹没有写入权限',
    exportCurrentNodeNeedToQuit: '导出运行节点的数据前需要将节点下线，确定退出吗？',
    edit: '编辑',
    password: '密码',
    enterPassword: '输入密码',
    backOneStep: '返回上一步',
    exportKeyDataDone: '导出完成',
    keyStoreNotExist: '该文件夹没有 keystore 数据，请重新选择哦',
    nodeDataNotExist: '该文件夹没有节点数据，请重新选择哦',
    storagePathLoginTip2: '创建节点时您选择了一个文件夹，里面保存了您的节点信息，现在请重新选中该文件夹以登录该节点。',
    selectFolderToSaveKeyBackupFile: '选择文件夹用以保存备份文件',
  },
  or: '或者',
  require: (name: string) => `请输入${name}`,
  somethingWrong: '貌似出错了',
  copy: '复制',
  copied: '已复制',
  search: '搜索',
  searchText: '请输入要搜索的内容',
};

export type Content = typeof content;
