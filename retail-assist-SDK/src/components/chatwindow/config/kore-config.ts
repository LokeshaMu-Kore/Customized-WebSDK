// var KoreSDK = KoreSDK || {};
import BrandingJSON from '../sass/brandingJSON' // To do
import RetailBrandingJSON from '../sass/retailBrandingJSON'
let chatConfig: any = {}
const botOptions: any = {}
botOptions.logLevel = 'debug'
    ; (botOptions.API_KEY_CONFIG = {
    bootstrapURL: botOptions.koreAPIUrl + 'platform/websdk',
    KEY: 'YOUR_API_KEY',
}),
    (botOptions.enableAck = {
        // set true, to send acknowledgment to server on receiving response from bot
        delivery: false,
    })
botOptions.koreSpeechAPIUrl = '' //deprecated
//botOptions.bearer = "bearer xyz-------------------";
//botOptions.ttsSocketUrl = '';//deprecated
//botOptions.koreAnonymousFn = koreAnonymousFn;
//for webhook based communication use following option
botOptions.webhookConfig = {
    enable: false,
    webhookURL: 'PLEASE_PROVIDE_WEBHOOK_URL',
    apiVersion: 2,
}

// To modify the web socket url use the following option
// botOptions.reWriteSocketURL = {
//     protocol: 'PROTOCOL_TO_BE_REWRITTEN',
//     hostname: 'HOSTNAME_TO_BE_REWRITTEN',
//     port: 'PORT_TO_BE_REWRITTEN'
// };

chatConfig = {
    mockMode: {
        enable: false,
    },
    botOptions: botOptions,
    container: 'body',
    allowIframe: false, // set true, opens authentication links in popup window, default value is "false"
    isSendButton: false, // set true, to show send button below the compose bar
    allowLocation: true, // set false, to deny sending location to server
    loadHistory: true, // set true to load recent chat history
    messageHistoryLimit: 10, // set limit to load recent chat history
    googleMapsAPIKey: '',
    minimizeMode: true, // set true, to show chatwindow in minimized mode, If false is set remove #chatContainer style in chatwindow.css
    multiPageApp: {
        enable: true, //set true for non SPA(Single page applications)
        userIdentityStore: 'localStorage', //'localStorage || sessionStorage'
        chatWindowStateStore: 'localStorage', //'localStorage || sessionStorage'
    },
    supportDelayedMessages: true, // enable to add support for renderDelay in message nodes which will help to render messages with delay from UI
    pingPong: {
        interval: 30000, //In milli sec, To keep the websocket alive skd send ping message in this interval
    },
    enableThemes: false, //set true to apply the branding configured    ,
    branding: RetailBrandingJSON,
    history: {
        paginatedScroll: {
            enable: true, // set true to load history when the user scrolls up.
            batchSize: 10, // To configure the number of messages to load when the user scroll,
            loadingLabel: 'Loading old messages', // Loading label will be displayed when the user uses paginated scroll
        },
    },
    sendFailedMessage: {
        //Number of retries on message send failed
        MAX_RETRIES: 3,
    },
    UI: {
        version: 'v3',
    },
    builderFlag: false,
}

if (!chatConfig.loadHistory) {
    // pagination scroll will be enabled only when loadHistory flag is true
    chatConfig.history.paginatedScroll.enable = false
}
export default chatConfig