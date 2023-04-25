!function(E,_){"object"==typeof exports&&"object"==typeof module?module.exports=_():"function"==typeof define&&define.amd?define("eventsLib",[],_):"object"==typeof exports?exports.eventsLib=_():E.eventsLib=_()}("undefined"==typeof self?this:self,(()=>(()=>{"use strict";var E={97:(E,_)=>{var T;Object.defineProperty(_,"__esModule",{value:!0}),_.EVENTS=void 0,(T=_.EVENTS||(_.EVENTS={})).GET_LOCALE="TS_GET_LOCALE",T.SET_LOCALE="TS_SET_LOCALE",T.GET_CREDENTIALS_PROVIDED="TS_GET_CREDENTIALS_PROVIDED",T.SET_CREDENTIALS_PROVIDED="TS_SET_CREDENTIALS_PROVIDED",T.SAVE_CREDENTIALS="TS_SAVE_CREDENTIALS",T.GET_SALES_CHANNELS_PROVIDED="TS_GET_SALES_CHANNELS_PROVIDED",T.SET_SALES_CHANNELS_PROVIDED="TS_SET_SALES_CHANNELS_PROVIDED",T.SAVE_MAPPED_CHANNEL="TS_SAVE_MAPPED_CHANNEL ",T.GET_MAPPED_CHANNELS="TS_GET_MAPPED_CHANNELS",T.SET_MAPPED_CHANNELS="TS_SET_MAPPED_CHANNELS",T.GET_TRUSTBADGE_CONFIGURATION_PROVIDED="TS_GET_TRUSTBADGE_CONFIGURATION_PROVIDED",T.SET_TRUSTBADGE_CONFIGURATION_PROVIDED="TS_SET_TRUSTBADGE_CONFIGURATION_PROVIDED",T.SAVE_TRUSTBADGE_CONFIGURATION="TS_SAVE_TRUSTBADGE_CONFIGURATION",T.GET_LOCATION_FOR_WIDGET="TS_GET_LOCATION_FOR_WIDGET",T.SET_LOCATION_FOR_WIDGET="TS_SET_LOCATION_FOR_WIDGET",T.GET_AVAILABLE_PRODUCT_IDENTIFIERS="TS_GET_AVAILABLE_PRODUCT_IDENTIFIERS",T.SET_AVAILABLE_PRODUCT_IDENTIFIERS="TS_SET_AVAILABLE_PRODUCT_IDENTIFIERS",T.SAVE_WIDGET_CHANGES="TS_SAVE_WIDGET_CHANGES",T.GET_WIDGET_PROVIDED="TS_GET_WIDGET_PROVIDED",T.SET_WIDGET_PROVIDED="TS_SET_WIDGET_PROVIDED",T.ACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL="TS_ACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL",T.DEACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL="TS_DEACTIVATE_PRODUCT_REVIEW_FOR_CHANNEL",T.GET_PRODUCT_REVIEW_FOR_CHANNEL="TS_GET_PRODUCT_REVIEW_FOR_CHANNEL",T.SET_PRODUCT_REVIEW_FOR_CHANNEL="TS_SET_PRODUCT_REVIEW_FOR_CHANNEL",T.SAVE_USE_ESTIMATED_DELIVERY_DATE_FOR_CHANNEL="TS_SAVE_USE_ESTIMATED_DELIVERY_DATE_FOR_CHANNEL",T.GET_USE_ESTIMATED_DELIVERY_DATE_FOR_CHANNEL="TS_GET_USE_ESTIMATED_DELIVERY_DATE_FOR_CHANNEL",T.SET_USE_ESTIMATED_DELIVERY_DATE_FOR_CHANNEL="TS_SET_USE_ESTIMATED_DELIVERY_DATE_FOR_CHANNEL",T.SAVE_USE_EVENTS_BY_ORDER_STATUS_FOR_CHANNEL="TS_SAVE_USE_EVENTS_BY_ORDER_STATUS_FOR_CHANNEL",T.GET_USE_EVENTS_BY_ORDER_STATUS_FOR_CHANNEL="TS_GET_USE_EVENTS_BY_ORDER_STATUS_FOR_CHANNEL",T.SET_USE_EVENTS_BY_ORDER_STATUS_FOR_CHANNEL="TS_SET_USE_EVENTS_BY_ORDER_STATUS_FOR_CHANNEL",T.EXPORT_PREVIOUS_ORDER="TS_EXPORT_PREVIOUS_ORDER",T.SET_EXPORT_PREVIOUS_ORDER="TS_SET_EXPORT_PREVIOUS_ORDER",T.GET_INFORMATION_OF_SYSTEM="TS_GET_INFORMATION_OF_SYSTEM",T.SET_INFORMATION_OF_SYSTEM="TS_SET_INFORMATION_OF_SYSTEM",T.DISCONNECTED="TS_DISCONNECTED",T.SET_DISCONNECTED="TS_SET_DISCONNECTED",T.NOTIFICATION="TS_NOTIFICATION",T.ERROR="TS_ERROR"},679:(E,_,T)=>{Object.defineProperty(_,"__esModule",{value:!0}),_.dispatchAction=_.registerEvents=void 0;var S=T(97);_.registerEvents=function(E){var _=new AbortController;return window.addEventListener("message",(function(_){return function(E,_){var T;if(E.data&&(null!==(T=E.data)&&void 0!==T&&T.action||"string"==typeof E.data)){var A;try{A=JSON.parse(E.data)}catch(_){A={action:S.EVENTS.ERROR,payload:{message:"Error receiving ".concat(E.data)}}}_.hasOwnProperty(A.action)&&_[A.action](A)}}(_,E)}),{signal:_.signal}),function(){console.log("file: registerEvents.ts:25  usub  usub:"),_.abort()}},_.dispatchAction=function(E){return window.postMessage(JSON.stringify(E))}}},_={};function T(S){var A=_[S];if(void 0!==A)return A.exports;var R=_[S]={exports:{}};return E[S](R,R.exports,T),R.exports}var S={};return(()=>{var E=S,_=T(679),A=T(97);E.default={registerEvents:_.registerEvents,dispatchAction:_.dispatchAction,EVENTS:A.EVENTS}})(),S.default})()));