var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.prospector;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.8.2";
var $strongName = '46A377AE47E571D376026ED8695C12DB';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = 2147483647, $intern_1 = {3:1, 7:1, 5:1}, $intern_2 = {57:1}, $intern_3 = {3:1, 5:1}, $intern_4 = {3:1, 57:1, 115:1}, $intern_5 = {3:1, 12:1, 9:1, 10:1}, $intern_6 = {23:1, 41:1, 3:1, 8:1, 6:1}, $intern_7 = {23:1, 42:1, 3:1, 8:1, 6:1}, $intern_8 = {20:1, 3:1, 8:1, 6:1}, $intern_9 = {23:1, 76:1, 3:1, 8:1, 6:1}, $intern_10 = {23:1, 32:1, 3:1, 8:1, 6:1}, $intern_11 = {85:1, 3:1, 12:1, 9:1, 10:1}, $intern_12 = 4194304, $intern_13 = {69:1, 48:1, 60:1, 59:1, 70:1, 45:1, 36:1}, $intern_14 = {114:1}, $intern_15 = {49:1}, $intern_16 = {56:1}, $intern_17 = 65536, $intern_18 = 2097152, $intern_19 = 16777216, $intern_20 = 33554432, $intern_21 = 67108864, $intern_22 = {69:1, 48:1, 60:1, 59:1, 70:1, 131:1, 45:1, 36:1}, $intern_23 = {18:1}, $intern_24 = {3:1}, $intern_25 = 65535, $intern_26 = -2147483648, $intern_27 = {3:1, 12:1, 11:1, 9:1, 10:1}, $intern_28 = {8:1, 73:1}, $intern_29 = 9999, $intern_30 = {18:1, 25:1}, $intern_31 = {47:1}, $intern_32 = {40:1, 55:1}, $intern_33 = {33:1, 31:1, 96:1}, $intern_34 = {33:1, 31:1, 51:1, 65:1, 58:1}, $intern_35 = 16777215, $intern_36 = 34962, $intern_37 = 34963, $intern_38 = {18:1, 78:1, 25:1}, $intern_39 = {3:1, 8:1, 6:1, 17:1}, $intern_40 = -3.4028234663852886E38, $intern_41 = 3.4028234663852886E38, $intern_42 = {47:1, 40:1, 55:1}, $intern_43 = {3:1, 5:1, 24:1, 22:1}, $intern_44 = {15:1, 399:1}, $intern_45 = -16777216, $intern_46 = -7842543, $intern_47 = {3:1, 5:1, 22:1}, $intern_48 = {3:1, 8:1, 6:1, 88:1};
var _, prototypesByTypeId_0, initFnList_0, permutationId = -1;
function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function typeMarkerFn(){
}

function toString_9(object){
  if (Array.isArray(object) && object.typeMarker === typeMarkerFn) {
    return $getName(getClass__Ljava_lang_Class___devirtual$(object)) + '@' + (hashCode__I__devirtual$(object) >>> 0).toString(16);
  }
  return object.toString();
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeIdOrPrototype, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0, superPrototype;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = prototype_0 instanceof Array?prototype_0[0]:null;
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = (superPrototype = superTypeIdOrPrototype && superTypeIdOrPrototype.prototype , !superPrototype && (superPrototype = prototypesByTypeId_0[superTypeIdOrPrototype]) , portableObjCreate(superPrototype));
    _.castableTypeMap = castableTypeMap;
    !superTypeIdOrPrototype && (_.typeMarker = typeMarkerFn);
    prototypesByTypeId[typeId] = _;
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz = clazz);
}

function bootstrap(){
  prototypesByTypeId_0 = {};
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
  function now_0(){
    return (new Date).getTime();
  }

  !Date.now && (Date.now = now_0);
}

bootstrap();
function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return instanceOfString(this$static)?$equals(this$static, other):instanceOfDouble(this$static)?(checkCriticalNotNull(this$static) , this$static === other):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static === other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals_0(other):isJavaArray(this$static)?this$static === other:!!this$static && !!this$static.equals?this$static.equals(other):maskUndefined(this$static) === maskUndefined(other);
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return instanceOfString(this$static)?Ljava_lang_String_2_classLit:instanceOfDouble(this$static)?Ljava_lang_Double_2_classLit:instanceOfBoolean(this$static)?Ljava_lang_Boolean_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz:isJavaArray(this$static)?this$static.___clazz:this$static.___clazz || Array.isArray(this$static) && getClassLiteralForArray(Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 1) || Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return instanceOfString(this$static)?getHashCode_0(this$static):instanceOfDouble(this$static)?round_int((checkCriticalNotNull(this$static) , this$static)):instanceOfBoolean(this$static)?(checkCriticalNotNull(this$static) , this$static)?1231:1237:hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode_0():isJavaArray(this$static)?getHashCode(this$static):!!this$static && !!this$static.hashCode?this$static.hashCode():getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals_0 = function equals(other){
  return this === other;
}
;
_.getClass_0 = function getClass_0(){
  return this.___clazz;
}
;
_.hashCode_0 = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.equals = function(other){
  return this.equals_0(other);
}
;
_.hashCode = function(){
  return this.hashCode_0();
}
;
_.toString = function(){
  return this.toString_0();
}
;
function canCast(src_0, dstId){
  if (instanceOfString(src_0)) {
    return !!stringCastMap[dstId];
  }
   else if (src_0.castableTypeMap) {
    return !!src_0.castableTypeMap[dstId];
  }
   else if (instanceOfDouble(src_0)) {
    return !!doubleCastMap[dstId];
  }
   else if (instanceOfBoolean(src_0)) {
    return !!booleanCastMap[dstId];
  }
  return false;
}

function castToArray(src_0){
  var elementTypeCategory;
  src_0 == null || Array.isArray(src_0) && (elementTypeCategory = getElementTypeCategory(src_0) , !(elementTypeCategory >= 14 && elementTypeCategory <= 16));
  return src_0;
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function hasJavaObjectVirtualDispatch(src_0){
  return !Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfBoolean(src_0){
  return typeof src_0 === 'boolean';
}

function instanceOfDouble(src_0){
  return typeof src_0 === 'number';
}

function instanceOfJso(src_0){
  return src_0 != null && (typeof src_0 === 'object' || typeof src_0 === 'function') && !(src_0.typeMarker === typeMarkerFn);
}

function instanceOfString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return Math.max(Math.min(x_0, $intern_0), -2147483648) | 0;
}

var booleanCastMap, doubleCastMap, stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getEnumConstants(this$static){
  return this$static.enumConstantsFunc && this$static.enumConstantsFunc();
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function $getSimpleName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.simpleName;
}

function Class(){
  this.sequentialId = nextSequentialId++;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(typeId){
  var clazz;
  clazz = new Class;
  clazz.typeName = 'Class$' + (typeId?'S' + typeId:'' + clazz.sequentialId);
  clazz.canonicalName = clazz.typeName;
  clazz.simpleName = clazz.typeName;
  return clazz;
}

function createForClass(typeId){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(typeId);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  clazz.enumConstantsFunc = enumConstantsFunc;
  return clazz;
}

function createForPrimitive(primitiveTypeId){
  var clazz;
  clazz = createClassObject(primitiveTypeId);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  return prototypesByTypeId_0[typeId];
}

function initializeNames(clazz){
  if (clazz.isArray_0()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_0()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz = clazz;
}

defineClass(146, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  return $getSimpleName(this);
}
;
_.isArray_0 = function isArray(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString_0 = function toString_14(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
_.sequentialId = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass(1);
var Ljava_lang_Class_2_classLit = createForClass(146);
function $clinit_AbstractSound(){
  $clinit_AbstractSound = emptyMethod;
  INITIAL_LOAD_STATE = ($clinit_Sound$LoadState() , LOAD_STATE_UNINITIALIZED);
}

function $addEventHandler(this$static, handler){
  $add_0(this$static.soundHandlerCollection, handler);
  this$static.loadState != INITIAL_LOAD_STATE && $onSoundLoadStateChange(handler, new SoundLoadStateChangeEvent(this$static));
}

function $setLoadState(this$static, loadState){
  if (loadState != this$static.loadState) {
    this$static.loadState = loadState;
    loadState != INITIAL_LOAD_STATE && $fireOnSoundLoadStateChange(this$static.soundHandlerCollection, this$static);
  }
}

function AbstractSound(url_0){
  $clinit_AbstractSound();
  this.soundHandlerCollection = new SoundHandlerCollection;
  this.loadState = INITIAL_LOAD_STATE;
  this.mimeType = 'audio/mpeg';
  this.url_0 = url_0;
  this.streaming = false;
  this.crossOrigin = false;
}

defineClass(111, 1, {});
_.toString_0 = function toString_1(){
  return this.getSoundType() + '("' + this.mimeType + '", "' + this.url_0 + '", ' + (this.streaming?'streaming':'not streaming') + ', ' + (this.crossOrigin?'cross origin':'same origin') + ')';
}
;
_.crossOrigin = false;
_.streaming = false;
var INITIAL_LOAD_STATE;
var Lcom_allen_1sauer_gwt_voices_client_AbstractSound_2_classLit = createForClass(111);
function $clinit_FlashSound(){
  $clinit_FlashSound = emptyMethod;
  $clinit_AbstractSound();
  soundList = new ArrayList;
}

function $playbackCompleted(this$static){
  $fireOnPlaybackComplete(this$static.soundHandlerCollection, this$static);
}

function $registerSound(this$static){
  if (!this$static.soundRegistered) {
    $registerSound_0(this$static.voicesMovie, this$static);
    this$static.soundRegistered = true;
  }
}

function $soundLoaded(this$static){
  $setLoadState(this$static, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
  this$static.volume_0 != 100 && $setVolume(this$static.voicesMovie, this$static.soundNumber, this$static.volume_0);
  this$static.looping && $setLooping(this$static.voicesMovie, this$static.soundNumber, this$static.looping);
}

function FlashSound(url_0, voicesMovie){
  $clinit_FlashSound();
  AbstractSound.call(this, url_0);
  this.voicesMovie = voicesMovie;
  this.soundNumber = soundList.array.length;
  $add_0(soundList, this);
  $registerSound(this);
}

defineClass(179, 111, {179:1}, FlashSound);
_.getSoundType = function getSoundType(){
  return $clinit_SoundType() , FLASH;
}
;
_.play_0 = function play(){
  $registerSound(this);
  if (this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY)) {
    return $playSound(this.voicesMovie, this.soundNumber);
  }
  return false;
}
;
_.setLooping_0 = function setLooping(looping){
  this.looping = looping;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setLooping(this.voicesMovie, this.soundNumber, looping);
}
;
_.setVolume_0 = function setVolume(volume){
  this.volume_0 = volume;
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $setVolume(this.voicesMovie, this.soundNumber, volume);
}
;
_.stop_0 = function stop_1(){
  this.loadState == ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY) && $stopSound(this.voicesMovie, this.soundNumber);
}
;
_.looping = false;
_.soundNumber = 0;
_.soundRegistered = false;
_.volume_0 = 100;
var soundList;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound_2_classLit = createForClass(179);
function FlashSound$1(val$index){
  this.val$index1 = val$index;
}

defineClass(366, 1, {}, FlashSound$1);
_.execute = function execute(){
  $playbackCompleted($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$1_2_classLit = createForClass(366);
function FlashSound$2(val$index){
  this.val$index1 = val$index;
}

defineClass(367, 1, {}, FlashSound$2);
_.execute = function execute_0(){
  $soundLoaded($get(($clinit_FlashSound() , soundList), this.val$index1));
}
;
_.val$index1 = 0;
var Lcom_allen_1sauer_gwt_voices_client_FlashSound$2_2_classLit = createForClass(367);
function $createAudioElement(this$static){
  var elem;
  !!this$static.endedRegistration && $removeHandler(this$static.endedRegistration.real);
  !!this$static.audio && $removeFromParent(this$static.audio);
  this$static.audio = createIfSupported();
  elem = $getElement(this$static.audio);
  this$static.endedRegistration = $addBitlessDomHandler(this$static.audio, this$static.endedHandler, ($clinit_EndedEvent() , $clinit_EndedEvent() , TYPE));
  $add_2(($clinit_RootPanel() , get_3()), this$static.audio);
  this$static.crossOrigin && (elem.setAttribute('crossOrigin', 'anonymous') , undefined);
  $setSrc(elem, this$static.url_0);
}

function Html5Sound(url_0){
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.endedHandler = new Html5Sound$1(this);
  $createAudioElement(this);
  mimeTypeSupport = getMimeTypeSupport();
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      throw toJs(new IllegalArgumentException_0('unexpected MIME type support ' + mimeTypeSupport));
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

function getMimeTypeSupport(){
  var canPlayType;
  $clinit_AbstractSound();
  var support;
  if (!isSupported()) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  support = (canPlayType = $getElement(createIfSupported()).canPlayType('audio/mpeg') , canPlayType == 'no'?'':canPlayType);
  if ($equals('probably', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  if ($equals('maybe', support)) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY;
  }
  return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN;
}

defineClass(370, 111, {}, Html5Sound);
_.getSoundType = function getSoundType_0(){
  return $clinit_SoundType() , HTML5;
}
;
_.play_0 = function play_0(){
  var elem;
  elem = $getElement(this.audio);
  elem.pause();
  try {
    elem.currentTime = 0;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 12))
      throw toJs($e0);
  }
  elem.currentTime != 0 && $createAudioElement(this);
  elem.play();
  return true;
}
;
_.setLooping_0 = function setLooping_0(looping){
  $setBooleanAttr($getMediaElement(this.audio), looping);
}
;
_.setVolume_0 = function setVolume_0(volume){
  $setVolume_1($getMediaElement(this.audio), volume / 100);
}
;
_.stop_0 = function stop_2(){
  $getMediaElement(this.audio).pause();
}
;
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound_2_classLit = createForClass(370);
function Html5Sound$1(this$0){
  this.this$01 = this$0;
}

defineClass(371, 1, {457:1, 449:1}, Html5Sound$1);
var Lcom_allen_1sauer_gwt_voices_client_Html5Sound$1_2_classLit = createForClass(371);
function NativeSound(url_0, soundControllerElement){
  var elem, m;
  $clinit_AbstractSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  this.soundControllerElement = soundControllerElement;
  elem = $createElement(url_0);
  $setVolume_0(elem, 0);
  $play(soundControllerElement, elem);
  this.element = $createElement(url_0);
  mimeTypeSupport = (m = navigator.mimeTypes['audio/mpeg'] , m != null && m.enabledPlugin != null?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED));
  switch (mimeTypeSupport.ordinal) {
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_MAYBE_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    case 1:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

defineClass(368, 111, {}, NativeSound);
_.getSoundType = function getSoundType_1(){
  return $clinit_SoundType() , NATIVE;
}
;
_.play_0 = function play_1(){
  return $play(this.soundControllerElement, this.element);
}
;
_.setLooping_0 = function setLooping_1(looping){
  this.element.setAttribute('loop', 'infinite');
}
;
_.setVolume_0 = function setVolume_1(volume){
  $setVolume_0(this.element, volume);
}
;
_.stop_0 = function stop_3(){
  $stop(this.element);
}
;
var Lcom_allen_1sauer_gwt_voices_client_NativeSound_2_classLit = createForClass(368);
function $name(this$static){
  return this$static.name_0 != null?this$static.name_0:'' + this$static.ordinal;
}

function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(6, 1, {3:1, 8:1, 6:1});
_.equals_0 = function equals_0(other){
  return this === other;
}
;
_.hashCode_0 = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString_0 = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass(6);
function $clinit_Sound$LoadState(){
  $clinit_Sound$LoadState = emptyMethod;
  LOAD_STATE_NOT_SUPPORTED = new Sound$LoadState('LOAD_STATE_NOT_SUPPORTED', 0);
  LOAD_STATE_SUPPORT_NOT_KNOWN = new Sound$LoadState('LOAD_STATE_SUPPORT_NOT_KNOWN', 1);
  LOAD_STATE_SUPPORTED_AND_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_AND_READY', 2);
  LOAD_STATE_SUPPORTED_MAYBE_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_MAYBE_READY', 3);
  LOAD_STATE_SUPPORTED_NOT_READY = new Sound$LoadState('LOAD_STATE_SUPPORTED_NOT_READY', 4);
  LOAD_STATE_UNINITIALIZED = new Sound$LoadState('LOAD_STATE_UNINITIALIZED', 5);
}

function Sound$LoadState(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_0(){
  $clinit_Sound$LoadState();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit, 1), $intern_1, 54, 0, [LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_UNINITIALIZED]);
}

defineClass(54, 6, {54:1, 3:1, 8:1, 6:1}, Sound$LoadState);
var LOAD_STATE_NOT_SUPPORTED, LOAD_STATE_SUPPORTED_AND_READY, LOAD_STATE_SUPPORTED_MAYBE_READY, LOAD_STATE_SUPPORTED_NOT_READY, LOAD_STATE_SUPPORT_NOT_KNOWN, LOAD_STATE_UNINITIALIZED;
var Lcom_allen_1sauer_gwt_voices_client_Sound$LoadState_2_classLit = createForEnum(54, values_0);
function $clinit_SoundController(){
  $clinit_SoundController = emptyMethod;
  $wnd.$GWT_VOICES_VERSION = '3.3.2';
}

function $createSound(this$static, url_0){
  var sound;
  sound = $createSoundImpl(this$static, url_0);
  sound.setVolume_0(this$static.defaultVolume);
  return sound;
}

function $createSoundImpl(this$static, url_0){
  var c, c$array, c$index, c$max, sound;
  sound = null;
  for (c$array = this$static.preferredSoundTypes , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    switch (c.ordinal) {
      case 1:
        sound = $createSoundImplHtml5(url_0);
        break;
      case 0:
        sound = $createSoundImplFlash(this$static, url_0);
        break;
      case 2:
        sound = $createSoundImplWebAudio(url_0);
        break;
      case 3:
        sound = $createSoundImplWebAudio(url_0);
    }
    if (sound) {
      return sound;
    }
  }
  sound = $createSoundImplWebAudio(url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplFlash(this$static, url_0);
  if (sound) {
    return sound;
  }
  sound = $createSoundImplHtml5(url_0);
  if (sound) {
    return sound;
  }
  sound = new NativeSound(url_0, this$static.soundContainer);
  return sound;
}

function $createSoundImplFlash(this$static, url_0){
  var mimeTypeSupport, sound, vm;
  if ($equals(url_0.substr(0, 5), 'data:')) {
    return null;
  }
  $clinit_FlashMovie();
  if (impl_0.impl.getMajorVersion() >= 9) {
    vm = $getVoicesMovie(this$static);
    mimeTypeSupport = $getMimeTypeSupport(vm);
    if (mimeTypeSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) || mimeTypeSupport == MIME_TYPE_SUPPORT_NOT_READY) {
      sound = new FlashSound(url_0, vm);
      return sound;
    }
  }
  return null;
}

function $createSoundImplHtml5(url_0){
  if (getMimeTypeSupport() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new Html5Sound(url_0);
  }
  return null;
}

function $createSoundImplWebAudio(url_0){
  if (getMimeTypeSupport_0() == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return new WebAudioSound(url_0);
  }
  return null;
}

function $getVoicesMovie(this$static){
  if (!this$static.voicesWrapper) {
    this$static.voicesWrapper = new VoicesMovie('gwtVoices' + uniqueId++, this$static.gwtVoicesSwfBaseUrl);
    $clinit_DOM();
    $appendChild(this$static.soundContainer, resolve(this$static.voicesWrapper.element));
  }
  return this$static.voicesWrapper;
}

function $setPreferredSoundTypes(this$static, soundTypes){
  var s$index, s$max;
  for (s$index = 0 , s$max = soundTypes.length; s$index < s$max; ++s$index)
  ;
  this$static.preferredSoundTypes = soundTypes;
}

function SoundController(){
  var s, i, gwtVoices, style;
  $clinit_SoundController();
  this.soundContainer = ($clinit_DOM() , $doc.createElement('div'));
  this.gwtVoicesSwfBaseUrl = ($clinit_Impl() , s = $doc.location.href , i = s.indexOf('#') , i != -1 && (s = s.substring(0, i)) , i = s.indexOf('?') , i != -1 && (s = s.substring(0, i)) , i = s.lastIndexOf('/') , i != -1 && (s = s.substring(0, i)) , s.length > 0?s + '/':'');
  gwtVoices = getParameter('gwt-voices');
  $equals(($clinit_SoundType() , FLASH).queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 34, 0, [FLASH])):$equals(HTML5.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 34, 0, [HTML5])):$equals(WEB_AUDIO.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 34, 0, [WEB_AUDIO])):$equals(NATIVE.queryParameterValue, gwtVoices)?$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 34, 0, [NATIVE])):$setPreferredSoundTypes(this, stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 34, 0, [WEB_AUDIO, FLASH, HTML5]));
  $appendChild(($clinit_RootPanel() , $doc.body), this.soundContainer);
  style = this.soundContainer.style;
  style['position'] = ($clinit_Style$Position() , 'absolute');
  style['overflow'] = ($clinit_Style$Overflow() , 'hidden');
  style['left'] = ($clinit_Style$Unit() , '-500.0px');
  style['top'] = '-500.0px';
  style['width'] = '0.0px';
  style['height'] = '0.0px';
}

defineClass(297, 1, {}, SoundController);
_.defaultVolume = 100;
var Lcom_allen_1sauer_gwt_voices_client_SoundController_2_classLit = createForClass(297);
function $clinit_SoundController$MimeTypeSupport(){
  $clinit_SoundController$MimeTypeSupport = emptyMethod;
  MIME_TYPE_NOT_SUPPORTED = new SoundController$MimeTypeSupport('MIME_TYPE_NOT_SUPPORTED', 0);
  MIME_TYPE_SUPPORT_NOT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_NOT_READY', 1);
  MIME_TYPE_SUPPORT_READY = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_READY', 2);
  MIME_TYPE_SUPPORT_UNKNOWN = new SoundController$MimeTypeSupport('MIME_TYPE_SUPPORT_UNKNOWN', 3);
}

function SoundController$MimeTypeSupport(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_SoundController$MimeTypeSupport();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit, 1), $intern_1, 77, 0, [MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN]);
}

defineClass(77, 6, {77:1, 3:1, 8:1, 6:1}, SoundController$MimeTypeSupport);
var MIME_TYPE_NOT_SUPPORTED, MIME_TYPE_SUPPORT_NOT_READY, MIME_TYPE_SUPPORT_READY, MIME_TYPE_SUPPORT_UNKNOWN;
var Lcom_allen_1sauer_gwt_voices_client_SoundController$MimeTypeSupport_2_classLit = createForEnum(77, values_1);
function $clinit_SoundType(){
  $clinit_SoundType = emptyMethod;
  FLASH = new SoundType('FLASH', 0, 'flash');
  HTML5 = new SoundType('HTML5', 1, 'html5');
  NATIVE = new SoundType('NATIVE', 2, 'native');
  WEB_AUDIO = new SoundType('WEB_AUDIO', 3, 'webaudio');
}

function SoundType(enum$name, enum$ordinal, queryParameterValue){
  Enum.call(this, enum$name, enum$ordinal);
  this.queryParameterValue = queryParameterValue;
}

function values_2(){
  $clinit_SoundType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit, 1), $intern_1, 34, 0, [FLASH, HTML5, NATIVE, WEB_AUDIO]);
}

defineClass(34, 6, {34:1, 3:1, 8:1, 6:1}, SoundType);
var FLASH, HTML5, NATIVE, WEB_AUDIO;
var Lcom_allen_1sauer_gwt_voices_client_SoundType_2_classLit = createForEnum(34, values_2);
function $clinit_WebAudioSound(){
  $clinit_WebAudioSound = emptyMethod;
  $clinit_AbstractSound();
  audioContext = createAudioContext();
}

function $createVoice(this$static, url_0){
  var context = audioContext;
  var request = new $wnd.XMLHttpRequest;
  request.open('GET', url_0, true);
  request.responseType = 'arraybuffer';
  var self_0 = this$static;
  request.onload = function(){
    function onSuccess(decodedBuffer){
      self_0.buffer_0 = decodedBuffer;
      self_0.soundLoaded_0();
    }

    function onFailure(){
      self_0.soundLoadFailed();
    }

    context.decodeAudioData(request.response, onSuccess, onFailure);
  }
  ;
  request.send();
}

function WebAudioSound(url_0){
  $clinit_WebAudioSound();
  var mimeTypeSupport;
  AbstractSound.call(this, url_0);
  try {
    $createVoice(this, url_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
    }
     else 
      throw toJs($e0);
  }
  mimeTypeSupport = getMimeTypeSupport_0();
  switch (mimeTypeSupport.ordinal) {
    case 1:
    case 2:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_NOT_READY));
      break;
    case 0:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
      break;
    case 3:
      $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORT_NOT_KNOWN));
      break;
    default:throw toJs(new IllegalArgumentException_0('unknown MIME type support ' + mimeTypeSupport));
  }
}

function createAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  return null;
}

function getMimeTypeSupport_0(){
  $clinit_WebAudioSound();
  if (!audioContext) {
    return $clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED;
  }
  return getMimeTypeSupport();
}

defineClass(375, 111, {}, WebAudioSound);
_.getSoundType = function getSoundType_2(){
  return $clinit_SoundType() , WEB_AUDIO;
}
;
_.plackbackCompleted = function plackbackCompleted(){
  $fireOnPlaybackComplete(this.soundHandlerCollection, this);
}
;
_.play_0 = function play_2(){
  var buffer = this.buffer_0;
  if (buffer == null) {
    return false;
  }
  this.stop_0();
  var context = audioContext;
  var voice = context.createBufferSource();
  this.voice = voice;
  this.looping && (voice.loop = true);
  var node = voice;
  var volume = this.volume_0;
  if (volume != 100) {
    var gainNode = context.createGain();
    gainNode.gain.value = volume / 100;
    node.connect(gainNode);
    node = gainNode;
  }
  node.connect(context.destination);
  voice.buffer = buffer;
  voice.start(context.currentTime);
  if (!voice.loop) {
    var self_0 = this;
    setTimeout(function(){
      self_0.plackbackCompleted();
    }
    , voice.buffer.duration * 1000);
  }
  return true;
}
;
_.setLooping_0 = function setLooping_2(looping){
  this.looping = looping;
}
;
_.setVolume_0 = function setVolume_2(volume){
  this.volume_0 = volume;
}
;
_.soundLoadFailed = function soundLoadFailed(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
}
;
_.soundLoaded_0 = function soundLoaded(){
  $setLoadState(this, ($clinit_Sound$LoadState() , LOAD_STATE_SUPPORTED_AND_READY));
}
;
_.stop_0 = function stop_4(){
  var context = audioContext;
  var voice = this.voice;
  if (voice == null) {
    return;
  }
  voice.stop(context.currentTime);
  this.voice = null;
}
;
_.looping = false;
_.volume_0 = 0;
var audioContext;
var Lcom_allen_1sauer_gwt_voices_client_WebAudioSound_2_classLit = createForClass(375);
function EventObject(source){
  this.source = source;
}

defineClass(184, 1, {});
var Ljava_util_EventObject_2_classLit = createForClass(184);
function PlaybackCompleteEvent(source){
  EventObject.call(this, source);
}

defineClass(396, 184, {}, PlaybackCompleteEvent);
_.toString_0 = function toString_3(){
  var name_0, sound;
  sound = this.source;
  return name_0 = ($ensureNamesAreInitialized(Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit) , Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit.typeName) , $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1) + ': ' + sound;
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_PlaybackCompleteEvent_2_classLit = createForClass(396);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    e = iter.next_1();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_2();
      return true;
    }
  }
  return false;
}

function $clear(this$static){
  var iter;
  for (iter = this$static.iterator(); iter.hasNext_0();) {
    iter.next_1();
    iter.remove_2();
  }
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkCriticalNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

defineClass(429, 1, {});
_.add_0 = function add_0(o){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this collection'));
}
;
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove = function remove_0(o){
  return $advanceToFind(this, o, true);
}
;
_.toString_0 = function toString_4(){
  var e, e$iterator, joiner;
  joiner = new StringJoiner('[', ']');
  for (e$iterator = this.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    $add_6(joiner, e === this?'(this Collection)':e == null?'null':toString_9(e));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass(429);
defineClass(432, 429, $intern_2);
_.add_1 = function add_1(index_0, element){
  throw toJs(new UnsupportedOperationException_0('Add not supported on this list'));
}
;
_.add_0 = function add_2(obj){
  this.add_1(this.size_1(), obj);
  return true;
}
;
_.equals_0 = function equals_1(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 57)) {
    return false;
  }
  other = o;
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext_0();) {
    elem = elem$iterator.next_1();
    elemOther = iterOther.next_1();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode_0 = function hashCode_2(){
  return hashCode_17(this);
}
;
_.iterator = function iterator_0(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_0 = function remove_1(index_0){
  throw toJs(new UnsupportedOperationException_0('Remove not supported on this list'));
}
;
var Ljava_util_AbstractList_2_classLit = createForClass(432);
function $add(this$static, index_0, o){
  checkCriticalPositionIndex(index_0, this$static.array.length);
  insertTo(this$static.array, index_0, o);
}

function $add_0(this$static, o){
  this$static.array[this$static.array.length] = o;
  return true;
}

function $addAll(this$static, c){
  var cArray, len;
  cArray = clone_0(c.array, c.array.length);
  len = cArray.length;
  if (len == 0) {
    return false;
  }
  insertTo_0(this$static.array, this$static.array.length, cArray);
  return true;
}

function $get(this$static, index_0){
  checkCriticalElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_19(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove(this$static, index_0){
  var previous;
  previous = (checkCriticalElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  removeFrom(this$static.array, index_0, 1);
  return previous;
}

function ArrayList(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
}

defineClass(19, 432, $intern_4, ArrayList);
_.add_1 = function add_3(index_0, o){
  $add(this, index_0, o);
}
;
_.add_0 = function add_4(o){
  return $add_0(this, o);
}
;
_.contains_0 = function contains_0(o){
  return $indexOf(this, o, 0) != -1;
}
;
_.get_0 = function get_0(index_0){
  return $get(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.iterator = function iterator_1(){
  return new ArrayList$1(this);
}
;
_.remove_0 = function remove_2(index_0){
  return $remove(this, index_0);
}
;
_.remove = function remove_3(o){
  var i;
  i = $indexOf(this, o, 0);
  if (i == -1) {
    return false;
  }
  checkCriticalElementIndex(i, this.array.length);
  removeFrom(this.array, i, 1);
  return true;
}
;
_.size_1 = function size_1(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass(19);
function $fireOnPlaybackComplete(this$static, sender){
  var handler, handler$iterator;
  new PlaybackCompleteEvent(sender);
  for (handler$iterator = new ArrayList$1(this$static); handler$iterator.i < handler$iterator.this$01.array.length;) {
    handler = $next_3(handler$iterator);
    handler.this$01.playing = false;
  }
}

function $fireOnSoundLoadStateChange(this$static, sender){
  var event_0, handler, handler$iterator;
  event_0 = new SoundLoadStateChangeEvent(sender);
  for (handler$iterator = new ArrayList$1(this$static); handler$iterator.i < handler$iterator.this$01.array.length;) {
    handler = $next_3(handler$iterator);
    $onSoundLoadStateChange(handler, event_0);
  }
}

function SoundHandlerCollection(){
  ArrayList.call(this);
}

defineClass(384, 19, $intern_4, SoundHandlerCollection);
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundHandlerCollection_2_classLit = createForClass(384);
function SoundLoadStateChangeEvent(source){
  EventObject.call(this, source);
  this.loadState = source.loadState;
}

defineClass(185, 184, {}, SoundLoadStateChangeEvent);
_.toString_0 = function toString_5(){
  var name_0, sound;
  sound = this.source;
  return name_0 = ($ensureNamesAreInitialized(Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit) , Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit.typeName) , $substring(name_0, $lastIndexOf(name_0, fromCodePoint(46)) + 1) + ': ' + sound + '; ' + $name(this.loadState);
}
;
var Lcom_allen_1sauer_gwt_voices_client_handler_SoundLoadStateChangeEvent_2_classLit = createForClass(185);
function $clinit_FlashMovie(){
  $clinit_FlashMovie = emptyMethod;
  impl_0 = new FlashMovieImplPlayN;
}

defineClass(372, 1, {});
var impl_0;
var Lcom_allen_1sauer_gwt_voices_client_ui_FlashMovie_2_classLit = createForClass(372);
function $clinit_VoicesMovie(){
  $clinit_VoicesMovie = emptyMethod;
  $clinit_FlashMovie();
  FLASH_SUPPORTED_MIME_TYPES = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['audio/mpeg', 'audio/mpeg; codecs=MP3']);
}

function $callCreateSound(this$static, id_0, soundURL, checkPolicyFile){
  var elem = this$static.element;
  elem.createSound(id_0, soundURL, checkPolicyFile);
}

function $getMimeTypeSupport(this$static){
  switch (this$static.flashSupport.ordinal) {
    case 2:
    case 1:
      return contains_1(FLASH_SUPPORTED_MIME_TYPES)?($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY):($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_NOT_SUPPORTED);
    case 3:
    case 0:
      return this$static.flashSupport;
    default:throw toJs(new RuntimeException_0('Unhandled flash support value ' + this$static.flashSupport));
  }
}

function $installFlashCallbackHooks(this$static, id_1){
  $doc.VoicesMovie === undefined && ($doc.VoicesMovie = {});
  var self_0 = this$static;
  $doc.VoicesMovie[id_1] = {};
  $doc.VoicesMovie[id_1].ready = function(){
    self_0.movieReady();
  }
  ;
  $doc.VoicesMovie[id_1].soundLoaded = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$2(id_0));
    return true;
  }
  ;
  $doc.VoicesMovie[id_1].playbackCompleted = function(id_0){
    $clinit_FlashSound();
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FlashSound$1(id_0));
  }
  ;
  $doc.VoicesMovie[id_1].log = function(text_0){
    self_0.debug('FLASH[' + id_1 + ']: ' + text_0);
  }
  ;
}

function $movieUnsupported(this$static){
  var flashSound, flashSound$iterator;
  for (flashSound$iterator = new ArrayList$1(this$static.unitializedSoundList); flashSound$iterator.i < flashSound$iterator.this$01.array.length;) {
    flashSound = $next_3(flashSound$iterator);
    $setLoadState(flashSound, ($clinit_Sound$LoadState() , LOAD_STATE_NOT_SUPPORTED));
  }
}

function $playSound(this$static, id_0){
  var elem;
  if (this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)) {
    return elem = this$static.element , elem.playSound(id_0);
  }
  return false;
}

function $registerSound_0(this$static, flashSound){
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY)?$callCreateSound(this$static, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin):$add_0(this$static.unitializedSoundList, flashSound);
}

function $setLooping(this$static, id_0, looping){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setLooping(id_0, looping?$intern_0:0) , undefined);
}

function $setVolume(this$static, id_0, volume){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.setVolume(id_0, volume / 100) , undefined);
}

function $stopSound(this$static, id_0){
  var elem;
  this$static.flashSupport == ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY) && (elem = this$static.element , elem.stopSound(id_0) , undefined);
}

function VoicesMovie(id_0, gwtVoicesSwfBaseUrl){
  $clinit_VoicesMovie();
  this.element = $createElementMaybeSetURL(impl_0, id_0, gwtVoicesSwfBaseUrl + 'gwt-voices.swf');
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_UNKNOWN);
  this.unitializedSoundList = new ArrayList;
  $installFlashCallbackHooks(this, id_0);
  if (impl_0.impl.getMajorVersion() >= 9) {
    this.flashSupport = MIME_TYPE_SUPPORT_NOT_READY;
  }
   else {
    this.flashSupport = MIME_TYPE_NOT_SUPPORTED;
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new VoicesMovie$1(this));
  }
}

defineClass(373, 372, {}, VoicesMovie);
_.debug = function debug(text_0){
  $clinit_System();
}
;
_.movieReady = function movieReady(){
  var flashSound, iterator;
  this.flashSupport = ($clinit_SoundController$MimeTypeSupport() , MIME_TYPE_SUPPORT_READY);
  for (iterator = new ArrayList$1(this.unitializedSoundList); iterator.i < iterator.this$01.array.length;) {
    flashSound = $next_3(iterator);
    $callCreateSound(this, flashSound.soundNumber, flashSound.url_0, flashSound.crossOrigin);
    $remove_10(iterator);
  }
}
;
var FLASH_SUPPORTED_MIME_TYPES;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie_2_classLit = createForClass(373);
function VoicesMovie$1(this$0){
  this.this$01 = this$0;
}

defineClass(374, 1, {}, VoicesMovie$1);
_.execute = function execute_1(){
  $movieUnsupported(this.this$01);
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_VoicesMovie$1_2_classLit = createForClass(374);
defineClass(443, 1, {});
_.getMajorVersion = function getMajorVersion(){
  var versionString;
  versionString = this.getVersionString();
  return versionString == null?0:__parseAndValidateInt($replaceFirst(versionString, ',.*', ''));
}
;
_.getVersionString = function getVersionString(){
  var rawVersionString;
  rawVersionString = this.getRawVersionString();
  return rawVersionString == null?null:$replaceFirst($replaceAll(rawVersionString, '\\D*(\\d+)', '$1,'), ',$', '');
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImpl_2_classLit = createForClass(443);
function FlashMovieImplIE6(){
}

defineClass(388, 443, {}, FlashMovieImplIE6);
_.createElementMaybeSetURL = function createElementMaybeSetURL(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.tabIndex = -1;
  elem.id = id_0;
  elem.classid = 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000';
  elem.codebase = 'http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0';
  elem.FlashVars = 'id=' + id_0;
  elem.Movie = url_0;
  return elem;
}
;
_.getRawVersionString = function getRawVersionString(){
  try {
    return (new ActiveXObject('ShockwaveFlash.ShockwaveFlash')).GetVariable('$version');
  }
   catch (e) {
    return null;
  }
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplIE6_2_classLit = createForClass(388);
function $createElementMaybeSetURL(this$static, id_0, url_0){
  return this$static.impl.createElementMaybeSetURL(id_0, url_0);
}

function FlashMovieImplPlayN(){
  $wnd.navigator.userAgent.indexOf('MSIE') != -1?(this.impl = new FlashMovieImplIE6):(this.impl = new FlashMovieImplSafari);
}

defineClass(383, 443, {}, FlashMovieImplPlayN);
_.createElementMaybeSetURL = function createElementMaybeSetURL_0(id_0, url_0){
  return $createElementMaybeSetURL(this, id_0, url_0);
}
;
_.getMajorVersion = function getMajorVersion_0(){
  return this.impl.getMajorVersion();
}
;
_.getRawVersionString = function getRawVersionString_0(){
  return this.impl.getRawVersionString();
}
;
_.getVersionString = function getVersionString_0(){
  return this.impl.getVersionString();
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplPlayN_2_classLit = createForClass(383);
defineClass(444, 443, {});
_.createElementMaybeSetURL = function createElementMaybeSetURL_1(id_0, url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('id', id_0);
  elem.setAttribute('type', 'application/x-shockwave-flash');
  elem.setAttribute('data', url_0);
  var param = $doc.createElement('param');
  param.setAttribute('name', 'FlashVars');
  param.setAttribute('value', 'id=' + id_0);
  elem.appendChild(param);
  return elem;
}
;
_.getRawVersionString = function getRawVersionString_1(){
  var p = navigator.plugins['Shockwave Flash'];
  return p == null?null:p.description;
}
;
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplStandard_2_classLit = createForClass(444);
function FlashMovieImplSafari(){
}

defineClass(389, 444, {}, FlashMovieImplSafari);
var Lcom_allen_1sauer_gwt_voices_client_ui_impl_FlashMovieImplSafari_2_classLit = createForClass(389);
function $stop(elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
}

function $createElement(url_0){
  var elem = $doc.createElement('object');
  elem.setAttribute('data', url_0);
  elem.setAttribute('autostart', 'true');
  return elem;
}

function $setVolume_0(elem, volume){
  elem.setAttribute('volume', '' + volume);
}

function $play(soundControllerElement, elem){
  var parent_0 = elem.parentNode;
  parent_0 != null && parent_0.removeChild(elem);
  soundControllerElement.appendChild(elem);
  return true;
}

var uniqueId = 1000;
function contains_1(arr){
  var element, element$index, element$max;
  for (element$index = 0 , element$max = arr.length; element$index < element$max; ++element$index) {
    element = arr[element$index];
    if ($equals(element, 'audio/mpeg')) {
      return true;
    }
  }
  return false;
}

var Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass(0);
function $drawImage(this$static, image, dx, dy){
  this$static.drawImage(image, dx, dy);
}

function $drawImage_0(this$static, image, dx, dy, dw, dh){
  this$static.drawImage(image, dx, dy, dw, dh);
}

function $drawImage_1(this$static, image, sx, sy, sw, sh, dx, dy, dw, dh){
  this$static.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
}

function $fillRect(this$static, x_0, y_0, w, h){
  this$static.fillRect(x_0, y_0, w, h);
}

function $scale(this$static, x_0, y_0){
  this$static.scale(x_0, y_0);
}

function $setFillStyleWeb(this$static, fillStyle){
  this$static.fillStyle = fillStyle;
}

function Duration(){
  this.start_0 = now_1();
}

defineClass(324, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass(324);
function setUncaughtExceptionHandler(handler){
  uncaughtExceptionHandler = handler;
}

var uncaughtExceptionHandler = null;
function $$init(this$static){
  this$static.stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 50, 0, 0, 1);
}

function $addSuppressed(this$static, exception){
  checkCriticalNotNull_0(exception, 'Cannot suppress a null exception.');
  checkCriticalArgument_0(exception != this$static, 'Exception can not suppress itself.');
  if (this$static.disableSuppression) {
    return;
  }
  this$static.suppressedExceptions == null?(this$static.suppressedExceptions = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Throwable_2_classLit, 1), $intern_3, 10, 0, [exception])):(this$static.suppressedExceptions[this$static.suppressedExceptions.length] = exception);
}

function $fillInStackTrace(this$static){
  if (this$static.writetableStackTrace) {
    this$static.backingJsObject !== '__noinit__' && this$static.initializeBackingError();
    this$static.stackTrace = null;
  }
  return this$static;
}

function $initCause(this$static, cause){
  checkCriticalState_0(!this$static.cause);
  checkCriticalArgument_0(cause != this$static, 'Self-causation not permitted');
  this$static.cause = cause;
  return this$static;
}

function $printStackTraceImpl(this$static, out, ident){
  var t, t$array, t$index, t$max, theCause;
  $printStackTraceItems(this$static);
  for (t$array = (this$static.suppressedExceptions == null && (this$static.suppressedExceptions = initUnidimensionalArray(Ljava_lang_Throwable_2_classLit, $intern_3, 10, 0, 0, 1)) , this$static.suppressedExceptions) , t$index = 0 , t$max = t$array.length; t$index < t$max; ++t$index) {
    t = t$array[t$index];
    $printStackTraceImpl(t, out, '\t' + ident);
  }
  theCause = this$static.cause;
  !!theCause && $printStackTraceImpl(theCause, out, ident);
}

function $printStackTraceItems(this$static){
  var element$array, element$index, element$max, stackTrace;
  for (element$array = (this$static.stackTrace == null && (this$static.stackTrace = ($clinit_StackTraceCreator() , stackTrace = collector.getStackTrace(this$static) , dropInternalFrames(stackTrace))) , this$static.stackTrace) , element$index = 0 , element$max = element$array.length; element$index < element$max; ++element$index)
  ;
}

function $setBackingJsObject(this$static, backingJsObject){
  this$static.backingJsObject = backingJsObject;
  backingJsObject != null && setPropertySafe(backingJsObject, '__java$exception', this$static);
}

function $toString(this$static, message){
  var className;
  className = $getName(this$static.___clazz);
  return message == null?className:className + ': ' + message;
}

function fixIE(e){
  if (!('stack' in e)) {
    try {
      throw e;
    }
     catch (ignored) {
    }
  }
  return e;
}

defineClass(10, 1, {3:1, 10:1});
_.createError = function createError(msg){
  return new $wnd.Error(msg);
}
;
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.initializeBackingError = function initializeBackingError(){
  var className, errorMessage, message;
  message = this.detailMessage == null?null:this.detailMessage.replace(new RegExp('\n', 'g'), ' ');
  errorMessage = (className = $getName(this.___clazz) , message == null?className:className + ': ' + message);
  $setBackingJsObject(this, fixIE(this.createError(errorMessage)));
  captureStackTrace(this);
}
;
_.toString_0 = function toString_6(){
  return $toString(this, this.getMessage());
}
;
_.backingJsObject = '__noinit__';
_.disableSuppression = false;
_.writetableStackTrace = true;
var Ljava_lang_Throwable_2_classLit = createForClass(10);
function Exception(message){
  $$init(this);
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(12, 10, {3:1, 12:1, 10:1}, Exception);
var Ljava_lang_Exception_2_classLit = createForClass(12);
function RuntimeException(){
  $$init(this);
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message, cause){
  $$init(this);
  this.cause = cause;
  this.detailMessage = message;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

function RuntimeException_2(cause){
  $$init(this);
  this.detailMessage = !cause?null:$toString(cause, cause.getMessage());
  this.cause = cause;
  $fillInStackTrace(this);
  this.initializeBackingError();
}

defineClass(9, 12, $intern_5, RuntimeException, RuntimeException_0, RuntimeException_2);
var Ljava_lang_RuntimeException_2_classLit = createForClass(9);
defineClass(119, 9, $intern_5);
var Ljava_lang_JsException_2_classLit = createForClass(119);
defineClass(202, 119, $intern_5);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass(202);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?exception == null?null:exception.name:instanceOfString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description_0 = this$static.description_0 + ': ' + (instanceOfJso(exception)?exception == null?null:exception.message:exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description_0;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  $$init(this);
  $fillInStackTrace(this);
  this.backingJsObject = e;
  e != null && setPropertySafe(e, '__java$exception', this);
  this.detailMessage = e == null?'null':toString_9(e);
  this.description_0 = '';
  this.e = e;
  this.description_0 = '';
}

defineClass(72, 202, {72:1, 3:1, 12:1, 9:1, 10:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass(72);
function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

defineClass(400, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass(400);
function $clinit_Impl(){
  $clinit_Impl = emptyMethod;
  !!($clinit_StackTraceCreator() , collector);
}

function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  $clinit_Impl();
  return function(){
    return entry0(jsFunction, this, arguments);
    var __0;
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry, t;
  initialEntry = enter();
  try {
    if (uncaughtExceptionHandler) {
      try {
        return apply_0(jsFunction, thisObj, args);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          t = $e0;
          reportUncaughtException(t);
          return undefined;
        }
         else 
          throw toJs($e0);
      }
    }
     else {
      return apply_0(jsFunction, thisObj, args);
    }
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function reportUncaughtException(e){
  $clinit_Impl();
  var handler;
  handler = uncaughtExceptionHandler;
  if (handler) {
    if (handler == uncaughtExceptionHandlerForTest) {
      return;
    }
    $reportError(handler.this$01, 'Uncaught Exception: ', e);
    return;
  }
  reportToBrowser(instanceOf(e, 72)?e.getThrown():e);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, uncaughtExceptionHandlerForTest, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && (newTasks[newTasks.length] = tasks[i] , undefined);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_1(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_2(cmd){
  return cmd.execute_0();
}

function push_1(queue, task){
  !queue && (queue = []);
  queue[queue.length] = task;
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_1(rescheduled, t)):t[0].execute();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        reportUncaughtException(e);
      }
       else 
        throw toJs($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_2)(cmd);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(325, 400, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass(325);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(326, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_3(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass(326);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(327, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_4(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass(327);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !supportsErrorStack();
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(error){
  $clinit_StackTraceCreator();
  collector.collect(error);
}

function dropInternalFrames(stackTrace){
  var dropFrameUntilFnName, dropFrameUntilFnName2, i, numberOfFramesToSearch;
  dropFrameUntilFnName = 'captureStackTrace';
  dropFrameUntilFnName2 = 'initializeBackingError';
  numberOfFramesToSearch = min_0(stackTrace.length, 5);
  for (i = numberOfFramesToSearch - 1; i >= 0; i--) {
    if ($equals(stackTrace[i].methodName, dropFrameUntilFnName) || $equals(stackTrace[i].methodName, dropFrameUntilFnName2)) {
      stackTrace.length >= i + 1 && (stackTrace.splice(0, i + 1) , undefined);
      break;
    }
  }
  return stackTrace;
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

function parseInt_0(number){
  $clinit_StackTraceCreator();
  return parseInt(number) || -1;
}

function supportsErrorStack(){
  if (Error.stackTraceLimit > 0) {
    $wnd.Error.stackTraceLimit = Error.stackTraceLimit = 64;
    return true;
  }
  return 'stack' in new Error;
}

var collector;
defineClass(412, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass(412);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(203, 412, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(error){
  var seen = {}, name_1;
  var fnStack = [];
  error['fnStack'] = fnStack;
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
_.getStackTrace = function getStackTrace(t){
  var i, length_0, stack_0, stackTrace;
  stack_0 = ($clinit_StackTraceCreator() , t && t['fnStack']?t['fnStack']:[]);
  length_0 = stack_0.length;
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 50, length_0, 0, 1);
  for (i = 0; i < length_0; i++) {
    stackTrace[i] = new StackTraceElement(stack_0[i], null, -1);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass(203);
function $parse(this$static, stString){
  var closeParen, col, endFileUrlIndex, fileName, index_0, lastColonIndex, line, location_0, toReturn;
  if (stString.length == 0) {
    return this$static.createSte('Unknown', 'anonymous', -1, -1);
  }
  toReturn = $trim(stString);
  $equals(toReturn.substr(0, 3), 'at ') && (toReturn = toReturn.substr(3));
  toReturn = toReturn.replace(/\[.*?\]/g, '');
  index_0 = toReturn.indexOf('(');
  if (index_0 == -1) {
    index_0 = toReturn.indexOf('@');
    if (index_0 == -1) {
      location_0 = toReturn;
      toReturn = '';
    }
     else {
      location_0 = $trim(toReturn.substr(index_0 + 1));
      toReturn = $trim(toReturn.substr(0, index_0));
    }
  }
   else {
    closeParen = toReturn.indexOf(')', index_0);
    location_0 = toReturn.substr(index_0 + 1, closeParen - (index_0 + 1));
    toReturn = $trim(toReturn.substr(0, index_0));
  }
  index_0 = $indexOf_1(toReturn, fromCodePoint(46));
  index_0 != -1 && (toReturn = toReturn.substr(index_0 + 1));
  (toReturn.length == 0 || $equals(toReturn, 'Anonymous function')) && (toReturn = 'anonymous');
  lastColonIndex = $lastIndexOf(location_0, fromCodePoint(58));
  endFileUrlIndex = $lastIndexOf_0(location_0, fromCodePoint(58), lastColonIndex - 1);
  line = -1;
  col = -1;
  fileName = 'Unknown';
  if (lastColonIndex != -1 && endFileUrlIndex != -1) {
    fileName = location_0.substr(0, endFileUrlIndex);
    line = parseInt_0(location_0.substr(endFileUrlIndex + 1, lastColonIndex - (endFileUrlIndex + 1)));
    col = parseInt_0(location_0.substr(lastColonIndex + 1));
  }
  return this$static.createSte(fileName, toReturn, line, col);
}

defineClass(413, 412, {});
_.collect = function collect_0(error){
}
;
_.createSte = function createSte(fileName, method, line, col){
  return new StackTraceElement(method, fileName + '@' + col, line < 0?-1:line);
}
;
_.getStackTrace = function getStackTrace_0(t){
  var addIndex, i, length_0, stack_0, stackTrace, ste, e;
  stack_0 = ($clinit_StackTraceCreator() , e = t.backingJsObject , e && e.stack?e.stack.split('\n'):[]);
  stackTrace = initUnidimensionalArray(Ljava_lang_StackTraceElement_2_classLit, $intern_3, 50, 0, 0, 1);
  addIndex = 0;
  length_0 = stack_0.length;
  if (length_0 == 0) {
    return stackTrace;
  }
  ste = $parse(this, stack_0[0]);
  $equals(ste.methodName, 'anonymous') || (stackTrace[addIndex++] = ste);
  for (i = 1; i < length_0; i++) {
    stackTrace[addIndex++] = $parse(this, stack_0[i]);
  }
  return stackTrace;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass(413);
function StackTraceCreator$CollectorModernNoSourceMap(){
}

defineClass(204, 413, {}, StackTraceCreator$CollectorModernNoSourceMap);
_.createSte = function createSte_0(fileName, method, line, col){
  return new StackTraceElement(method, fileName, -1);
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass(204);
function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function $setBooleanAttr(this$static, value_0){
  value_0?(this$static.setAttribute('loop', '') , undefined):(this$static.removeAttribute('loop') , undefined);
}

function $setSrc(this$static, url_0){
  this$static.src = url_0;
}

function $setVolume_1(this$static, volume){
  this$static.volume = volume;
}

function $setHeight(this$static, height){
  this$static.height = height;
}

function $setWidth(this$static, width_0){
  this$static.width = width_0;
}

function $eventGetButton(evt){
  var button = evt.button;
  if (button == 1) {
    return 4;
  }
   else if (button == 2) {
    return 2;
  }
  return 1;
}

function $isOrHasChild(parent_0, child){
  return parent_0.contains(child);
}

function $getAbsoluteLeft(elem){
  var left, rect;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  left = rect?rect.left + $getScrollLeft_0(elem.ownerDocument.body):getAbsoluteLeftUsingOffsets(elem);
  return left | 0;
}

function $getAbsoluteTop(elem){
  var rect, top_0, top_1;
  rect = elem.getBoundingClientRect && elem.getBoundingClientRect();
  top_0 = rect?rect.top + ((elem.ownerDocument.body.scrollTop || 0) | 0):getAbsoluteTopUsingOffsets(elem);
  return top_0 | 0;
}

function $getScrollLeft(doc){
  return doc.documentElement.scrollLeft || doc.body.scrollLeft;
}

function $getScrollLeft_0(elem){
  if (!$equalsIgnoreCase(elem.tagName) && elem.ownerDocument.defaultView.getComputedStyle(elem, '').direction == 'rtl') {
    return ((elem.scrollLeft || 0) | 0) - (((elem.scrollWidth || 0) | 0) - (elem.clientWidth | 0));
  }
  return (elem.scrollLeft || 0) | 0;
}

function $getScrollTop(doc){
  return doc.documentElement.scrollTop || doc.body.scrollTop;
}

function $getTabIndex(elem){
  return typeof elem.tabIndex != 'undefined'?elem.tabIndex:-1;
}

function getAbsoluteLeftUsingOffsets(elem){
  if (elem.offsetLeft == null) {
    return 0;
  }
  var left = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      left -= curr.scrollLeft;
      doc.defaultView.getComputedStyle(curr, '').getPropertyValue('direction') == 'rtl' && (left += curr.scrollWidth - curr.clientWidth);
      curr = curr.parentNode;
    }
  }
  while (elem) {
    left += elem.offsetLeft;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      left += doc.body.scrollLeft;
      return left;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (left += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-left-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return left;
}

function getAbsoluteTopUsingOffsets(elem){
  if (elem.offsetTop == null) {
    return 0;
  }
  var top_0 = 0;
  var doc = elem.ownerDocument;
  var curr = elem.parentNode;
  if (curr) {
    while (curr.offsetParent) {
      top_0 -= curr.scrollTop;
      curr = curr.parentNode;
    }
  }
  while (elem) {
    top_0 += elem.offsetTop;
    if (doc.defaultView.getComputedStyle(elem, '')['position'] == 'fixed') {
      top_0 += doc.body.scrollTop;
      return top_0;
    }
    var parent_0 = elem.offsetParent;
    parent_0 && $wnd.devicePixelRatio && (top_0 += parseInt(doc.defaultView.getComputedStyle(parent_0, '').getPropertyValue('border-top-width')));
    if (parent_0 && parent_0.tagName == 'BODY' && elem.style.position == 'absolute') {
      break;
    }
    elem = parent_0;
  }
  return top_0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $clinit_Style$Overflow(){
  $clinit_Style$Overflow = emptyMethod;
  VISIBLE = new Style$Overflow$1;
  HIDDEN = new Style$Overflow$2;
  SCROLL = new Style$Overflow$3;
  AUTO = new Style$Overflow$4;
}

function Style$Overflow(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Overflow();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Overflow_2_classLit, 1), $intern_1, 41, 0, [VISIBLE, HIDDEN, SCROLL, AUTO]);
}

defineClass(41, 6, $intern_6);
var AUTO, HIDDEN, SCROLL, VISIBLE;
var Lcom_google_gwt_dom_client_Style$Overflow_2_classLit = createForEnum(41, values_3);
function Style$Overflow$1(){
  Style$Overflow.call(this, 'VISIBLE', 0);
}

defineClass(282, 41, $intern_6, Style$Overflow$1);
var Lcom_google_gwt_dom_client_Style$Overflow$1_2_classLit = createForEnum(282, null);
function Style$Overflow$2(){
  Style$Overflow.call(this, 'HIDDEN', 1);
}

defineClass(283, 41, $intern_6, Style$Overflow$2);
var Lcom_google_gwt_dom_client_Style$Overflow$2_2_classLit = createForEnum(283, null);
function Style$Overflow$3(){
  Style$Overflow.call(this, 'SCROLL', 2);
}

defineClass(284, 41, $intern_6, Style$Overflow$3);
var Lcom_google_gwt_dom_client_Style$Overflow$3_2_classLit = createForEnum(284, null);
function Style$Overflow$4(){
  Style$Overflow.call(this, 'AUTO', 3);
}

defineClass(285, 41, $intern_6, Style$Overflow$4);
var Lcom_google_gwt_dom_client_Style$Overflow$4_2_classLit = createForEnum(285, null);
function $clinit_Style$Position(){
  $clinit_Style$Position = emptyMethod;
  STATIC = new Style$Position$1;
  RELATIVE = new Style$Position$2;
  ABSOLUTE = new Style$Position$3;
  FIXED = new Style$Position$4;
}

function Style$Position(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$Position();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Position_2_classLit, 1), $intern_1, 42, 0, [STATIC, RELATIVE, ABSOLUTE, FIXED]);
}

defineClass(42, 6, $intern_7);
var ABSOLUTE, FIXED, RELATIVE, STATIC;
var Lcom_google_gwt_dom_client_Style$Position_2_classLit = createForEnum(42, values_4);
function Style$Position$1(){
  Style$Position.call(this, 'STATIC', 0);
}

defineClass(286, 42, $intern_7, Style$Position$1);
var Lcom_google_gwt_dom_client_Style$Position$1_2_classLit = createForEnum(286, null);
function Style$Position$2(){
  Style$Position.call(this, 'RELATIVE', 1);
}

defineClass(287, 42, $intern_7, Style$Position$2);
var Lcom_google_gwt_dom_client_Style$Position$2_2_classLit = createForEnum(287, null);
function Style$Position$3(){
  Style$Position.call(this, 'ABSOLUTE', 2);
}

defineClass(288, 42, $intern_7, Style$Position$3);
var Lcom_google_gwt_dom_client_Style$Position$3_2_classLit = createForEnum(288, null);
function Style$Position$4(){
  Style$Position.call(this, 'FIXED', 3);
}

defineClass(289, 42, $intern_7, Style$Position$4);
var Lcom_google_gwt_dom_client_Style$Position$4_2_classLit = createForEnum(289, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_Style$Unit();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_1, 20, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(20, 6, $intern_8);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum(20, values_5);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(273, 20, $intern_8, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum(273, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(274, 20, $intern_8, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum(274, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(275, 20, $intern_8, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum(275, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(276, 20, $intern_8, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum(276, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(277, 20, $intern_8, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum(277, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(278, 20, $intern_8, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum(278, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(279, 20, $intern_8, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum(279, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(280, 20, $intern_8, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum(280, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(281, 20, $intern_8, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum(281, null);
function $clinit_Style$Visibility(){
  $clinit_Style$Visibility = emptyMethod;
  VISIBLE_0 = new Style$Visibility$1;
  HIDDEN_0 = new Style$Visibility$2;
}

function Style$Visibility(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_Style$Visibility();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Visibility_2_classLit, 1), $intern_1, 76, 0, [VISIBLE_0, HIDDEN_0]);
}

defineClass(76, 6, $intern_9);
var HIDDEN_0, VISIBLE_0;
var Lcom_google_gwt_dom_client_Style$Visibility_2_classLit = createForEnum(76, values_6);
function Style$Visibility$1(){
  Style$Visibility.call(this, 'VISIBLE', 0);
}

defineClass(290, 76, $intern_9, Style$Visibility$1);
var Lcom_google_gwt_dom_client_Style$Visibility$1_2_classLit = createForEnum(290, null);
function Style$Visibility$2(){
  Style$Visibility.call(this, 'HIDDEN', 1);
}

defineClass(291, 76, $intern_9, Style$Visibility$2);
var Lcom_google_gwt_dom_client_Style$Visibility$2_2_classLit = createForEnum(291, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_7(){
  $clinit_Style$WhiteSpace();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_1, 32, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(32, 6, $intern_10);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum(32, values_7);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(292, 32, $intern_10, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum(292, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(293, 32, $intern_10, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum(293, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(294, 32, $intern_10, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum(294, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(295, 32, $intern_10, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum(295, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(296, 32, $intern_10, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum(296, null);
function $getRelativeX(this$static, target){
  return ((this$static.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument);
}

function $getRelativeY(this$static, target){
  return ((this$static.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument);
}

defineClass(420, 1, {});
_.toString_0 = function toString_7(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass(420);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(421, 420, {});
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass(421);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = $unsafeGet(registered, nativeEvent.type);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext_0();) {
        type_0 = type$iterator.next_1();
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent_0(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(448, 421, {});
_.getAssociatedType = function getAssociatedType(){
  return $clinit_EndedEvent() , TYPE;
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass(448);
defineClass(247, 1, {});
_.hashCode_0 = function hashCode_3(){
  return this.index_0;
}
;
_.toString_0 = function toString_8(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass(247);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(124, 247, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass(124);
function DomEvent$Type(flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = registered.map_0['ended'];
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, types);
  }
  types.add_0(this);
  this.name_0 = 'ended';
}

defineClass(191, 124, {191:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass(191);
function $clinit_EndedEvent(){
  $clinit_EndedEvent = emptyMethod;
  TYPE = new DomEvent$Type(new EndedEvent);
}

function EndedEvent(){
}

defineClass(394, 448, {}, EndedEvent);
_.dispatch = function dispatch(handler){
  $fireOnPlaybackComplete(handler.this$01.soundHandlerCollection, handler.this$01);
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_EndedEvent_2_classLit = createForClass(394);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, value_0){
  this$static.map_0['ended'] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(397, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass(397);
function CloseEvent_0(){
}

function fire(source){
  var event_0;
  if (TYPE_0) {
    event_0 = new CloseEvent_0;
    $fireEvent(source, event_0);
  }
}

defineClass(362, 421, {}, CloseEvent_0);
_.dispatch = function dispatch_0(handler){
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_0(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass(362);
function $addHandler(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent(this$static, event_0){
  var e, oldSource;
  !event_0.dead || (event_0.dead = false , event_0.source = null);
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 85)) {
      e = $e0;
      throw toJs(new UmbrellaException_0(e.causes));
    }
     else 
      throw toJs($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function HandlerManager(source){
  this.eventBus = new HandlerManager$Bus;
  this.source = source;
}

defineClass(123, 1, {48:1}, HandlerManager);
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass(123);
defineClass(422, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass(422);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_0(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  var l;
  if (!type_0) {
    throw toJs(new NullPointerException_0('Cannot add a handler with a null type'));
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):(l = $ensureHandlerList(this$static, type_0, null) , l.add_0(handler));
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_0(handler);
}

function $doFire(this$static, event_0){
  var causes, directHandlers, e, handler, handlers, it;
  if (!event_0) {
    throw toJs(new NullPointerException_0('Cannot fire null event'));
  }
  try {
    ++this$static.firingDepth;
    handlers = (directHandlers = $getHandlerList(this$static, event_0.getAssociatedType(), null) , directHandlers);
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext_0()) {
      handler = this$static.isReverseOrder?it.previous():it.next_1();
      try {
        event_0.dispatch(handler);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 10)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $put_2(causes.map_0, e, causes);
        }
         else 
          throw toJs($e0);
      }
    }
    if (causes) {
      throw toJs(new UmbrellaException(causes));
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove(handler);
  removed && l.isEmpty() && (sourceMap = $get_5(this$static.map_0, type_0) , sourceMap.remove_1(source) , sourceMap.isEmpty() && $remove_5(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_2(this$static.map_0, type_0, sourceMap);
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    handlers = new ArrayList;
    sourceMap.put(source, handlers);
  }
  return handlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = $get_5(this$static.map_0, type_0);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = sourceMap.get_1(source);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new ArrayList$1(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01.array.length;) {
        c = $next_3(c$iterator);
        c.execute();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

defineClass(248, 422, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass(248);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(){
  this.map_0 = new HashMap;
  this.isReverseOrder = false;
}

defineClass(249, 248, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass(249);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(350, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass(350);
function UmbrellaException(causes){
  var cause, cause$iterator, i;
  RuntimeException_1.call(this, makeMessage(causes), causes.isEmpty()?null:causes.iterator().next_1());
  this.causes = causes;
  i = 0;
  for (cause$iterator = causes.iterator(); cause$iterator.hasNext_0();) {
    cause = cause$iterator.next_1();
    if (i++ == 0) {
      continue;
    }
    $addSuppressed(this, cause);
  }
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_0(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext_0();) {
    t = t$iterator.next_1();
    first?(first = false):(b.string += '; ' , b);
    $append_7(b, t.getMessage());
  }
  return b.string;
}

defineClass(85, 9, $intern_11, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass(85);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(175, 85, $intern_11, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass(175);
function throwIfNull(value_0){
  if (null == value_0) {
    throw toJs(new NullPointerException_0('encodedURLComponent cannot be null'));
  }
}

function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function getElementTypeCategory(array){
  return array.__elementTypeCategory$ == null?10:array.__elementTypeCategory$;
}

function initUnidimensionalArray(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  elementTypeCategory != 10 && stampJavaTypeInfo(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 14:
    case 15:
      initValue = 0;
      break;
    case 16:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function isJavaArray(src_0){
  return Array.isArray(src_0) && src_0.typeMarker === typeMarkerFn;
}

function stampJavaTypeInfo(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz = arrayClass;
  array.castableTypeMap = castableTypeMap;
  array.typeMarker = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function stampJavaTypeInfo_0(array, referenceType){
  getElementTypeCategory(referenceType) != 10 && stampJavaTypeInfo(getClass__Ljava_lang_Class___devirtual$(referenceType), referenceType.castableTypeMap, referenceType.__elementTypeId$, getElementTypeCategory(referenceType), array);
  return array;
}

function compare(a, b){
  var a0, a1, a2, b0, b1, b2, signA, signB;
  signA = a.h >> 19;
  signB = b.h >> 19;
  if (signA != signB) {
    return signB - signA;
  }
  a2 = a.h;
  b2 = b.h;
  if (a2 != b2) {
    return a2 - b2;
  }
  a1 = a.m;
  b1 = b.m;
  if (a1 != b1) {
    return a1 - b1;
  }
  a0 = a.l;
  b0 = b.l;
  return a0 - b0;
}

function toJava(e){
  var javaException;
  if (instanceOf(e, 10)) {
    return e;
  }
  javaException = e && e['__java$exception'];
  if (!javaException) {
    javaException = new JavaScriptException(e);
    captureStackTrace(javaException);
  }
  return javaException;
}

function toJs(t){
  return t.backingJsObject;
}

function compare_0(a, b){
  var result;
  if (isSmallLong0(a) && isSmallLong0(b)) {
    result = a - b;
    if (!isNaN(result)) {
      return result;
    }
  }
  return compare(isSmallLong0(a)?toBigLong(a):a, isSmallLong0(b)?toBigLong(b):b);
}

function isSmallLong0(value_0){
  return typeof value_0 === 'number';
}

function toBigLong(longValue){
  var a0, a1, a3, value_0;
  value_0 = longValue;
  a3 = 0;
  if (value_0 < 0) {
    value_0 += 17592186044416;
    a3 = 1048575;
  }
  a1 = round_int(value_0 / $intern_12);
  a0 = round_int(value_0 - a1 * $intern_12);
  return {l:a0, m:a1, h:a3};
}

function init(){
  var config, raw, platform;
  $onModuleLoad();
  new ProspectorHtml$HtmlClipboard;
  config = new HtmlPlatform$Config;
  raw = new HtmlPlatform(config);
  platform = new ProspectorHtml$HtmlPlatform(raw);
  raw.assets.pathPrefix = 'prospector/';
  new Prospector(platform);
  $listenForVisibilityChange(raw);
  $requestAnimationFrame(new HtmlPlatform$2(raw));
}

function $getElement(this$static){
  return $clinit_DOM() , this$static.element;
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $sinkBitlessEvent(this$static, eventTypeName){
  sinkBitlessEvent(($clinit_DOM() , this$static.element), eventTypeName);
}

defineClass(45, 1, {59:1, 45:1});
_.toString_0 = function toString_10(){
  if (!this.element) {
    return '(null handle)';
  }
  return ($clinit_DOM() , this.element).outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass(45);
function $addBitlessDomHandler(this$static, handler, type_0){
  $sinkBitlessEvent(this$static, type_0.name_0);
  return $addHandler(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent_0(this$static, event_0){
  !!this$static.handlerManager && $fireEvent(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document"));
  }
  this$static.attached = true;
  $clinit_DOM();
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?sinkEvents(this$static.element, bitsToAdd | (this$static.element.__eventBits || 0)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw toJs(new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document"));
  }
  try {
    this$static.doDetachChildren();
  }
   finally {
    $clinit_DOM();
    this$static.element.__listener = null;
    this$static.attached = false;
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_2(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    $remove_2(this$static.parent_0, this$static);
  }
   else if (this$static.parent_0) {
    throw toJs(new IllegalStateException_0("This widget's parent does not implement HasWidgets"));
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && $onDetach(this$static);
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw toJs(new IllegalStateException_0('Cannot set a new parent without first clearing the old parent'));
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(36, 45, $intern_13);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  var related;
  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget;
      if (!!related && $isOrHasChild(this.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this, this.element);
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass(36);
function $clinit_FocusWidget(){
  $clinit_FocusWidget = emptyMethod;
  $clinit_FocusImpl();
}

defineClass(441, 36, $intern_13);
_.onAttach = function onAttach_0(){
  var tabIndex;
  $onAttach(this);
  tabIndex = $getTabIndex(($clinit_DOM() , this.element));
  -1 == tabIndex && (this.element.tabIndex = 0 , undefined);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass(441);
function $getMediaElement(this$static){
  return $clinit_DOM() , this$static.element;
}

defineClass(381, 441, $intern_13);
var Lcom_google_gwt_media_client_MediaBase_2_classLit = createForClass(381);
function Audio_0(element){
  $setElement(this, ($clinit_DOM() , element));
}

function createIfSupported(){
  $clinit_FocusWidget();
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return null;
  }
  return new Audio_0(element);
}

function isSupported(){
  $clinit_FocusWidget();
  var element;
  !detector && (detector = new Audio$AudioElementSupportDetectedMaybe);
  element = $doc.createElement('audio');
  if (!element.canPlayType) {
    return false;
  }
  return true;
}

defineClass(382, 381, $intern_13, Audio_0);
var detector;
var Lcom_google_gwt_media_client_Audio_2_classLit = createForClass(382);
defineClass(442, 1, {});
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetector_2_classLit = createForClass(442);
function Audio$AudioElementSupportDetectedMaybe(){
}

defineClass(183, 442, {}, Audio$AudioElementSupportDetectedMaybe);
var Lcom_google_gwt_media_client_Audio$AudioElementSupportDetectedMaybe_2_classLit = createForClass(183);
function $exec(this$static, input_0){
  return this$static.exec(input_0);
}

function $getItem(this$static, key){
  return $getItem_0(this$static.storage, key);
}

function $key(this$static, index_0){
  return $key_0(this$static.storage, index_0);
}

function $removeItem(this$static, key){
  $removeItem_0(this$static.storage, key);
}

function $setItem(this$static, key, data_0){
  $setItem_0(this$static.storage, key, data_0);
}

function Storage_0(){
  this.storage = 'localStorage';
}

defineClass(298, 1, {}, Storage_0);
var localStorage_0;
var Lcom_google_gwt_storage_client_Storage_2_classLit = createForClass(298);
function $clinit_Storage$StorageSupportDetector(){
  $clinit_Storage$StorageSupportDetector = emptyMethod;
  localStorageSupported = checkStorageSupport('localStorage');
  checkStorageSupport('sessionStorage');
}

function checkStorageSupport(storage){
  var c = '_gwt_dummy_';
  try {
    $wnd[storage].setItem(c, c);
    $wnd[storage].removeItem(c);
    return true;
  }
   catch (e) {
    return false;
  }
}

var localStorageSupported = false;
function $getItem_0(storage, key){
  return $wnd[storage].getItem(key);
}

function $getLength(storage){
  return $wnd[storage].length;
}

function $key_0(storage, index_0){
  return index_0 >= 0 && index_0 < $wnd[storage].length?$wnd[storage].key(index_0):null;
}

function $removeItem_0(storage, key){
  $wnd[storage].getItem(key);
  $wnd[storage].removeItem(key);
}

function $setItem_0(storage, key, data_0){
  $wnd[storage].getItem(key);
  $wnd[storage].setItem(key, data_0);
}

function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = this$static.get_1(key);
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !this$static.containsKey(key)) {
    return false;
  }
  return true;
}

function $implFindEntry(this$static, key, remove){
  var entry, iter, k;
  for (iter = this$static.entrySet_0().iterator(); iter.hasNext_0();) {
    entry = iter.next_1();
    k = entry.getKey();
    if (maskUndefined(key) === maskUndefined(k) || key != null && equals_Ljava_lang_Object__Z__devirtual$(key, k)) {
      if (remove) {
        entry = new AbstractMap$SimpleEntry(entry.getKey(), entry.getValue());
        iter.remove_2();
      }
      return entry;
    }
  }
  return null;
}

function $toString_0(this$static, o){
  return o === this$static?'(this Map)':o == null?'null':toString_9(o);
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(428, 1, $intern_14);
_.containsKey = function containsKey(key){
  return !!$implFindEntry(this, key, false);
}
;
_.equals_0 = function equals_2(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 114)) {
    return false;
  }
  otherMap = obj;
  if (this.size_1() != otherMap.size_1()) {
    return false;
  }
  for (entry$iterator = otherMap.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.get_1 = function get_1(key){
  return getEntryValueOrNull($implFindEntry(this, key, false));
}
;
_.hashCode_0 = function hashCode_4(){
  return hashCode_16(this.entrySet_0());
}
;
_.isEmpty = function isEmpty_1(){
  return this.size_1() == 0;
}
;
_.put = function put(key, value_0){
  throw toJs(new UnsupportedOperationException_0('Put not supported on this map'));
}
;
_.remove_1 = function remove_4(key){
  return getEntryValueOrNull($implFindEntry(this, key, true));
}
;
_.size_1 = function size_2(){
  return this.entrySet_0().size_1();
}
;
_.toString_0 = function toString_11(){
  var entry, entry$iterator, joiner;
  joiner = new StringJoiner('{', '}');
  for (entry$iterator = this.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    $add_6(joiner, $toString_0(this, entry.getKey()) + '=' + $toString_0(this, entry.getValue()));
  }
  return !joiner.builder?joiner.emptyValue:joiner.suffix.length == 0?joiner.builder.string:joiner.builder.string + ('' + joiner.suffix);
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass(428);
function $get_0(this$static, key){
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  return $getItem(this$static.storage, toString_9(key));
}

function $put(this$static, key, value_0){
  var old;
  if (key == null || value_0 == null) {
    throw toJs(new NullPointerException);
  }
  old = $getItem(this$static.storage, key);
  $setItem(this$static.storage, key, value_0);
  return old;
}

function $remove_0(this$static, key){
  var k, old;
  if (key == null) {
    throw toJs(new NullPointerException);
  }
  k = toString_9(key);
  old = $getItem(this$static.storage, k);
  $removeItem(this$static.storage, k);
  return old;
}

function StorageMap(storage){
  this.storage = storage;
}

defineClass(299, 428, $intern_14, StorageMap);
_.get_1 = function get_2(key){
  return $get_0(this, key);
}
;
_.put = function put_0(key, value_0){
  return $put(this, key, value_0);
}
;
_.remove_1 = function remove_5(key){
  return $remove_0(this, key);
}
;
_.containsKey = function containsKey_0(key){
  return $get_0(this, key) != null;
}
;
_.entrySet_0 = function entrySet(){
  return new StorageMap$StorageEntrySet(this);
}
;
_.size_1 = function size_3(){
  return $getLength(this.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap_2_classLit = createForClass(299);
function $eq(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && $equals(a, b);
}

function $hashCode(o){
  return o != null?getHashCode_0(o):0;
}

function StorageMap$StorageEntry(this$0, key){
  this.this$01 = this$0;
  this.key_0 = key;
}

defineClass(300, 1, $intern_15, StorageMap$StorageEntry);
_.getKey = function getKey(){
  return this.key_0;
}
;
_.getValue = function getValue(){
  return $get_0(this.this$01, this.key_0);
}
;
_.setValue = function setValue(value_0){
  return $put(this.this$01, this.key_0, value_0);
}
;
_.equals_0 = function equals_3(obj){
  var e;
  if (!instanceOf(obj, 49)) {
    return false;
  }
  e = obj;
  return $eq(this.key_0, e.getKey()) && $eq($get_0(this.this$01, this.key_0), e.getValue());
}
;
_.hashCode_0 = function hashCode_5(){
  return $hashCode(this.key_0) ^ $hashCode($get_0(this.this$01, this.key_0));
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntry_2_classLit = createForClass(300);
function $next(this$static){
  if (this$static.index_0 >= $getLength(this$static.this$01.storage.storage) - 1) {
    throw toJs(new NoSuchElementException);
  }
  ++this$static.index_0;
  this$static.lastKey = $key(this$static.this$01.storage, this$static.index_0);
  return new StorageMap$StorageEntry(this$static.this$01, this$static.lastKey);
}

function StorageMap$StorageEntryIterator(this$0){
  this.this$01 = this$0;
}

defineClass(301, 1, {}, StorageMap$StorageEntryIterator);
_.next_1 = function next(){
  return $next(this);
}
;
_.hasNext_0 = function hasNext(){
  return this.index_0 < $getLength(this.this$01.storage.storage) - 1;
}
;
_.remove_2 = function remove_6(){
  if (this.lastKey == null) {
    throw toJs(new IllegalStateException);
  }
  $removeItem(this.this$01.storage, this.lastKey);
  this.lastKey = null;
  --this.index_0;
}
;
_.index_0 = -1;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntryIterator_2_classLit = createForClass(301);
defineClass(430, 429, $intern_16);
_.equals_0 = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 56)) {
    return false;
  }
  other = o;
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode_0 = function hashCode_6(){
  return hashCode_16(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass(430);
function $contains(this$static, o){
  var e, key, value_0;
  if (!instanceOf(o, 49)) {
    return false;
  }
  e = o;
  key = e.getKey();
  value_0 = e.getValue();
  return key != null && value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, $get_0(this$static.this$01, key));
}

function StorageMap$StorageEntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(302, 430, $intern_16, StorageMap$StorageEntrySet);
_.contains_0 = function contains_2(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_2(){
  return new StorageMap$StorageEntryIterator(this.this$01);
}
;
_.remove = function remove_7(o){
  var entry;
  if (!$contains(this, o)) {
    return false;
  }
  entry = o;
  return $remove_0(this.this$01, entry.getKey()) != null;
}
;
_.size_1 = function size_4(){
  return $getLength(this.this$01.storage.storage);
}
;
var Lcom_google_gwt_storage_client_StorageMap$StorageEntrySet_2_classLit = createForClass(302);
function create(buffer, byteOffset, length_0){
  return new Float32Array(buffer, byteOffset, length_0);
}

function create_0(buffer, byteOffset, length_0){
  return new Int16Array(buffer, byteOffset, length_0);
}

function create_1(buffer, byteOffset, length_0){
  return new Int32Array(buffer, byteOffset, length_0);
}

function create_2(buffer, byteOffset, length_0){
  return new Int8Array(buffer, byteOffset, length_0);
}

function create_3(buffer, byteOffset, length_0){
  return new Uint16Array(buffer, byteOffset, length_0);
}

function create_4(buffer, byteOffset, length_0){
  return new Uint8Array(buffer, byteOffset, length_0);
}

function $clinit_DOM(){
  $clinit_DOM = emptyMethod;
  $clinit_DOMImplStandard();
}

function dispatchEvent_0(evt, elem, listener){
  $clinit_DOM();
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function resolve(maybePotential){
  $clinit_DOM();
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function sinkBitlessEvent(elem, eventTypeName){
  var dispatchMap, dispatcher;
  $clinit_DOM();
  $maybeInitializeEventSystem();
  dispatchMap = bitlessEventDispatchers;
  dispatcher = dispatchMap[eventTypeName] || dispatchMap['_default_'];
  elem.addEventListener(eventTypeName, dispatcher, false);
}

function sinkEvents(elem, eventBits){
  $clinit_DOM();
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_0?TYPE_0:(TYPE_0 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0), type_0, handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initWindowCloseHandler();
    closeHandlersInitialized = true;
  }
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_0 && $fireEvent(handlers_0, event_0);
    return null;
  }
  return null;
}

var closeHandlersInitialized = false, handlers_0;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_1 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(246, 421, {}, Window$ClosingEvent);
_.dispatch = function dispatch_1(handler){
  null.$_nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_1(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass(246);
function buildListParamMap(queryString){
  var entry, entry$iterator, key, kv, kvPair, kvPair$array, kvPair$index, kvPair$max, out, qs, val, values, regexp;
  out = new HashMap;
  if (queryString != null && queryString.length > 1) {
    qs = queryString.substr(1);
    for (kvPair$array = $split(qs, '&', 0) , kvPair$index = 0 , kvPair$max = kvPair$array.length; kvPair$index < kvPair$max; ++kvPair$index) {
      kvPair = kvPair$array[kvPair$index];
      kv = $split(kvPair, '=', 2);
      key = kv[0];
      if (key.length == 0) {
        continue;
      }
      val = kv.length > 1?kv[1]:'';
      try {
        val = (throwIfNull(val) , regexp = /\+/g , decodeURIComponent(val.replace(regexp, '%20')));
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (!instanceOf($e0, 72))
          throw toJs($e0);
      }
      values = out.get_1(key);
      if (!values) {
        values = new ArrayList;
        out.put(key, values);
      }
      values.add_0(val);
    }
  }
  for (entry$iterator = out.entrySet_0().iterator(); entry$iterator.hasNext_0();) {
    entry = entry$iterator.next_1();
    entry.setValue(unmodifiableList(entry.getValue()));
  }
  out = ($clinit_Collections() , new Collections$UnmodifiableMap(out));
  return out;
}

function ensureListParameterMap(){
  var currentQueryString;
  currentQueryString = $wnd.location.search;
  if (!listParamMap || !$equals(cachedQueryString, currentQueryString)) {
    listParamMap = buildListParamMap(currentQueryString);
    cachedQueryString = currentQueryString;
  }
}

function getParameter(name_0){
  var paramsForName;
  ensureListParameterMap();
  paramsForName = listParamMap.get_1(name_0);
  return !paramsForName?null:paramsForName.get_0(paramsForName.size_1() - 1);
}

var cachedQueryString = '', listParamMap;
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(151, 123, {48:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass(151);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return 32768;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_17;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return 524288;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return $intern_18;
    case 'touchend':
      return $intern_12;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return $intern_19;
    case 'gesturechange':
      return $intern_20;
    case 'gestureend':
      return $intern_21;
    default:return -1;
  }
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 60)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $clinit_DOMImplStandard(){
  $clinit_DOMImplStandard = emptyMethod;
  bitlessEventDispatchers = {_default_:dispatchEvent_2, dragenter:dispatchDragEvent, dragover:dispatchDragEvent};
  captureEventDispatchers = {click:dispatchCapturedMouseEvent, dblclick:dispatchCapturedMouseEvent, mousedown:dispatchCapturedMouseEvent, mouseup:dispatchCapturedMouseEvent, mousemove:dispatchCapturedMouseEvent, mouseover:dispatchCapturedMouseEvent, mouseout:dispatchCapturedMouseEvent, mousewheel:dispatchCapturedMouseEvent, keydown:dispatchCapturedEvent, keyup:dispatchCapturedEvent, keypress:dispatchCapturedEvent, touchstart:dispatchCapturedMouseEvent, touchend:dispatchCapturedMouseEvent, touchmove:dispatchCapturedMouseEvent, touchcancel:dispatchCapturedMouseEvent, gesturestart:dispatchCapturedMouseEvent, gestureend:dispatchCapturedMouseEvent, gesturechange:dispatchCapturedMouseEvent};
}

function $initEventSystem(){
  dispatchEvent_1 = $entry(dispatchEvent_2);
  dispatchUnhandledEvent = $entry(dispatchUnhandledEvent_0);
  var foreach = foreach_0;
  var bitlessEvents = bitlessEventDispatchers;
  foreach(bitlessEvents, function(e, fn){
    bitlessEvents[e] = $entry(fn);
  }
  );
  var captureEvents_0 = captureEventDispatchers;
  foreach(captureEvents_0, function(e, fn){
    captureEvents_0[e] = $entry(fn);
  }
  );
  foreach(captureEvents_0, function(e, fn){
    $wnd.addEventListener(e, fn, true);
  }
  );
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?dispatchEvent_1:null);
  chMask & 2 && (elem.ondblclick = bits & 2?dispatchEvent_1:null);
  chMask & 4 && (elem.onmousedown = bits & 4?dispatchEvent_1:null);
  chMask & 8 && (elem.onmouseup = bits & 8?dispatchEvent_1:null);
  chMask & 16 && (elem.onmouseover = bits & 16?dispatchEvent_1:null);
  chMask & 32 && (elem.onmouseout = bits & 32?dispatchEvent_1:null);
  chMask & 64 && (elem.onmousemove = bits & 64?dispatchEvent_1:null);
  chMask & 128 && (elem.onkeydown = bits & 128?dispatchEvent_1:null);
  chMask & 256 && (elem.onkeypress = bits & 256?dispatchEvent_1:null);
  chMask & 512 && (elem.onkeyup = bits & 512?dispatchEvent_1:null);
  chMask & 1024 && (elem.onchange = bits & 1024?dispatchEvent_1:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?dispatchEvent_1:null);
  chMask & 4096 && (elem.onblur = bits & 4096?dispatchEvent_1:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?dispatchEvent_1:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?dispatchEvent_1:null);
  chMask & 32768 && (elem.onload = bits & 32768?dispatchUnhandledEvent:null);
  chMask & $intern_17 && (elem.onerror = bits & $intern_17?dispatchEvent_1:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?dispatchEvent_1:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?dispatchEvent_1:null);
  chMask & 524288 && (elem.onpaste = bits & 524288?dispatchEvent_1:null);
  chMask & 1048576 && (elem.ontouchstart = bits & 1048576?dispatchEvent_1:null);
  chMask & $intern_18 && (elem.ontouchmove = bits & $intern_18?dispatchEvent_1:null);
  chMask & $intern_12 && (elem.ontouchend = bits & $intern_12?dispatchEvent_1:null);
  chMask & 8388608 && (elem.ontouchcancel = bits & 8388608?dispatchEvent_1:null);
  chMask & $intern_19 && (elem.ongesturestart = bits & $intern_19?dispatchEvent_1:null);
  chMask & $intern_20 && (elem.ongesturechange = bits & $intern_20?dispatchEvent_1:null);
  chMask & $intern_21 && (elem.ongestureend = bits & $intern_21?dispatchEvent_1:null);
}

function dispatchCapturedEvent(evt){
  $clinit_DOM();
}

function dispatchCapturedMouseEvent(evt){
  $clinit_DOM();
  return;
}

function dispatchDragEvent(evt){
  evt.preventDefault();
  dispatchEvent_2(evt);
}

function dispatchEvent_2(evt){
  var element;
  element = getFirstAncestorWithListener(evt);
  if (!element) {
    return;
  }
  dispatchEvent_0(evt, element.nodeType != 1?null:element, getEventListener(element));
}

function dispatchUnhandledEvent_0(evt){
  var element;
  element = evt.currentTarget || $wnd;
  element['__gwtLastUnhandledEvent'] = evt.type;
  dispatchEvent_2(evt);
}

function getFirstAncestorWithListener(evt){
  var curElem;
  curElem = evt.currentTarget || $wnd;
  while (!!curElem && !getEventListener(curElem)) {
    curElem = curElem.parentNode;
  }
  return curElem;
}

var bitlessEventDispatchers, captureEventDispatchers, dispatchEvent_1, dispatchUnhandledEvent;
function foreach_0(map_0, fn){
  for (var e in map_0) {
    map_0.hasOwnProperty(e) && fn(e, map_0[e]);
  }
}

function $initWindowCloseHandler(){
  var oldOnBeforeUnload = $wnd.onbeforeunload;
  var oldOnUnload = $wnd.onunload;
  $wnd.onbeforeunload = function(evt){
    var ret, oldRet;
    try {
      ret = $entry(onClosing)();
    }
     finally {
      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);
    }
    if (ret != null) {
      return ret;
    }
    if (oldRet != null) {
      return oldRet;
    }
  }
  ;
  $wnd.onunload = $entry(function(evt){
    try {
      closeHandlersInitialized && fire((!handlers_0 && (handlers_0 = new Window$WindowHandlers) , handlers_0));
    }
     finally {
      oldOnUnload && oldOnUnload(evt);
      $wnd.onresize = null;
      $wnd.onscroll = null;
      $wnd.onbeforeunload = null;
      $wnd.onunload = null;
    }
  }
  );
}

defineClass(440, 36, $intern_13);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass(440);
function $add_1(this$static, child, container){
  $removeFromParent(child);
  $add_3(this$static.children, child);
  $clinit_DOM();
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_1(this$static, w){
  var elem, parent_0;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = ($clinit_DOM() , w.element);
    $removeChild((null , parent_0 = elem.parentNode , (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null) , parent_0), elem);
    $remove_4(this$static.children, w);
  }
  return true;
}

defineClass(351, 440, $intern_13);
_.iterator = function iterator_3(){
  return new WidgetCollection$WidgetIterator(this.children);
}
;
_.remove_3 = function remove_8(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass(351);
function $add_2(this$static, w){
  $add_1(this$static, w, ($clinit_DOM() , this$static.element));
}

function $remove_2(this$static, w){
  var removed;
  removed = $remove_1(this$static, w);
  removed && changeToStaticPositioning(($clinit_DOM() , w.element));
  return removed;
}

function changeToStaticPositioning(elem){
  elem.style['left'] = '';
  elem.style['top'] = '';
  elem.style['position'] = '';
}

defineClass(352, 351, $intern_13);
_.remove_3 = function remove_9(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass(352);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext_0();) {
    w = w$iterator.next_1();
    try {
      c.execute_1(w);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $put_2(caught.map_0, e, caught);
      }
       else 
        throw toJs($e0);
    }
  }
  if (caught) {
    throw toJs(new AttachDetachException(caught));
  }
}

defineClass(356, 175, $intern_11, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass(356);
function AttachDetachException$1(){
}

defineClass(357, 1, {}, AttachDetachException$1);
_.execute_1 = function execute_5(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass(357);
function AttachDetachException$2(){
}

defineClass(358, 1, {}, AttachDetachException$2);
_.execute_1 = function execute_6(w){
  $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass(358);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  this.children = new WidgetCollection(this);
  $setElement(this, ($clinit_DOM() , elem));
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    $onDetach(widget);
  }
   finally {
    $remove_12(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_3(){
  $clinit_RootPanel();
  var rp;
  rp = $get_5(rootPanels, null);
  if (rp) {
    return rp;
  }
  $size(rootPanels) == 0 && addCloseHandler(new RootPanel$2);
  rp = new RootPanel$DefaultRootPanel;
  $put_2(rootPanels, null, rp);
  $add_5(widgetsToDetach, rp);
  return rp;
}

defineClass(131, 352, $intern_22);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass(131);
function RootPanel$1(){
}

defineClass(354, 1, {}, RootPanel$1);
_.execute_1 = function execute_7(w){
  w.attached && $onDetach(w);
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass(354);
function RootPanel$2(){
}

defineClass(355, 1, {456:1, 449:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass(355);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, ($clinit_RootPanel() , $doc.body));
}

defineClass(353, 131, $intern_22, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass(353);
function $add_3(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $indexOf_0(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 36, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      newArray[i0] = this$static.array[i0];
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    this$static.array[i] = this$static.array[i - 1];
  }
  this$static.array[beforeIndex] = w;
}

function $remove_3(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    this$static.array[i] = this$static.array[i + 1];
  }
  this$static.array[this$static.size_0] = null;
}

function $remove_4(this$static, w){
  var index_0;
  index_0 = $indexOf_0(this$static, w);
  if (index_0 == -1) {
    throw toJs(new NoSuchElementException);
  }
  $remove_3(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initUnidimensionalArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_3, 36, 4, 0, 1);
}

defineClass(395, 1, {}, WidgetCollection);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass(395);
function $next_0(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw toJs(new NoSuchElementException);
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(192, 1, {}, WidgetCollection$WidgetIterator);
_.next_1 = function next_0(){
  return $next_0(this);
}
;
_.hasNext_0 = function hasNext_0(){
  return this.index_0 < this.this$01.size_0;
}
;
_.remove_2 = function remove_10(){
  if (!this.currentWidget) {
    throw toJs(new IllegalStateException);
  }
  this.this$01.parent_0.remove_3(this.currentWidget);
  --this.index_0;
  this.currentWidget = null;
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass(192);
function $clinit_FocusImpl(){
  $clinit_FocusImpl = emptyMethod;
  implPanel = new FocusImplSafari;
  implPanel?new FocusImpl:implPanel;
}

function FocusImpl(){
}

defineClass(387, 1, {}, FocusImpl);
var implPanel;
var Lcom_google_gwt_user_client_ui_impl_FocusImpl_2_classLit = createForClass(387);
defineClass(447, 387, {});
var Lcom_google_gwt_user_client_ui_impl_FocusImplStandard_2_classLit = createForClass(447);
function FocusImplSafari(){
}

defineClass(393, 447, {}, FocusImplSafari);
var Lcom_google_gwt_user_client_ui_impl_FocusImplSafari_2_classLit = createForClass(393);
function $setAntialias(this$static, antialias){
  this$static.antialias = antialias;
}

function $attachShader(this$static, program, shader){
  this$static.attachShader(program, shader);
}

function $bindBuffer(this$static, target, buffer){
  this$static.bindBuffer(target, buffer);
}

function $bindFramebuffer(this$static, target, framebuffer){
  this$static.bindFramebuffer(target, framebuffer);
}

function $bindTexture(this$static, target, texture){
  this$static.bindTexture(target, texture);
}

function $bufferData(this$static, target, data_0, usage){
  this$static.bufferData(target, data_0, usage);
}

function $clearColor(this$static, red, green, blue, alpha_0){
  this$static.clearColor(red, green, blue, alpha_0);
}

function $compileShader(this$static, shader){
  this$static.compileShader(shader);
}

function $createShader(this$static, type_0){
  return this$static.createShader(type_0);
}

function $deleteProgram(this$static, program){
  this$static.deleteProgram(program);
}

function $deleteShader(this$static, shader){
  this$static.deleteShader(shader);
}

function $disableVertexAttribArray(this$static, index_0){
  this$static.disableVertexAttribArray(index_0);
}

function $drawElements(this$static, mode, count, type_0, offset){
  this$static.drawElements(mode, count, type_0, offset);
}

function $enableVertexAttribArray(this$static, index_0){
  this$static.enableVertexAttribArray(index_0);
}

function $getAttribLocation(this$static, program, name_0){
  return this$static.getAttribLocation(program, name_0);
}

function $getProgramInfoLog(this$static, program){
  return this$static.getProgramInfoLog(program);
}

function $getProgramParameterb(this$static, program, pname){
  return this$static.getProgramParameter(program, pname);
}

function $getShaderInfoLog(this$static, shader){
  return this$static.getShaderInfoLog(shader);
}

function $getShaderParameterb(this$static, shader, pname){
  return this$static.getShaderParameter(shader, pname);
}

function $getUniformLocation(this$static, program, name_0){
  return this$static.getUniformLocation(program, name_0);
}

function $linkProgram(this$static, program){
  this$static.linkProgram(program);
}

function $scissor(this$static, x_0, y_0, width_0, height){
  this$static.scissor(x_0, y_0, width_0, height);
}

function $shaderSource(this$static, shader, source){
  this$static.shaderSource(shader, source);
}

function $texImage2D(this$static, target, level, internalformat, format, type_0, image){
  this$static.texImage2D(target, level, internalformat, format, type_0, image);
}

function $texParameteri(this$static, target, pname, param){
  this$static.texParameteri(target, pname, param);
}

function $uniform1f(this$static, location_0, x_0){
  this$static.uniform1f(location_0, x_0);
}

function $uniform1i(this$static, location_0, x_0){
  this$static.uniform1i(location_0, x_0);
}

function $uniform2f(this$static, location_0, x_0, y_0){
  this$static.uniform2f(location_0, x_0, y_0);
}

function $uniform4fv(this$static, location_0, v){
  this$static.uniform4fv(location_0, v);
}

function $useProgram(this$static, program){
  this$static.useProgram(program);
}

function $vertexAttribPointer(this$static, indx, size_0, type_0, normalized, stride, offset){
  this$static.vertexAttribPointer(indx, size_0, type_0, normalized, stride, offset);
}

function $viewport(this$static, x_0, y_0, width_0, height){
  this$static.viewport(x_0, y_0, width_0, height);
}

function getContext(canvas, attributes){
  var names = ['webgl', 'experimental-webgl', 'moz-webgl', 'webkit-webgl', 'webkit-3d'];
  for (var i = 0; i < names.length; i++) {
    try {
      var ctx = canvas.getContext(names[i], attributes);
      if (ctx != null) {
        if ($wnd.WebGLDebugUtils) {
          $wnd.console && $wnd.console.log && console.log('WebGL debugging enabled');
          return $wnd.WebGLDebugUtils.makeDebugContext(ctx);
        }
        return ctx;
      }
    }
     catch (e) {
    }
  }
  return null;
}

function $setOnReadyStateChange(this$static, handler){
  var _this = this$static;
  this$static.onreadystatechange = $entry(function(){
    handler.onReadyStateChange(_this);
  }
  );
}

function $setResponseType(this$static, responseType){
  this$static.responseType = responseType;
}

function $clinit_XMLHttpRequest$ResponseType(){
  $clinit_XMLHttpRequest$ResponseType = emptyMethod;
  Default = new XMLHttpRequest$ResponseType('Default', 0, '');
  ArrayBuffer_0 = new XMLHttpRequest$ResponseType('ArrayBuffer', 1, 'arraybuffer');
}

function XMLHttpRequest$ResponseType(enum$name, enum$ordinal, responseTypeString){
  Enum.call(this, enum$name, enum$ordinal);
  this.responseTypeString = responseTypeString;
}

function values_8(){
  $clinit_XMLHttpRequest$ResponseType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_xhr_client_XMLHttpRequest$ResponseType_2_classLit, 1), $intern_1, 107, 0, [Default, ArrayBuffer_0]);
}

defineClass(107, 6, {107:1, 3:1, 8:1, 6:1}, XMLHttpRequest$ResponseType);
var ArrayBuffer_0, Default;
var Lcom_google_gwt_xhr_client_XMLHttpRequest$ResponseType_2_classLit = createForEnum(107, values_8);
function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(250, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass(250);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(251, 1, {450:1}, SimpleEventBus$2);
_.execute = function execute_8(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass(251);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(252, 1, {450:1}, SimpleEventBus$3);
_.execute = function execute_9(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass(252);
defineClass(445, 1, $intern_23);
var Ljava_io_InputStream_2_classLit = createForClass(445);
function $read(this$static){
  return this$static.pos < this$static.count?this$static.buf[this$static.pos++] & 255:-1;
}

function ByteArrayInputStream(buf){
  this.buf = buf;
  this.count = buf.length;
}

defineClass(390, 445, $intern_23, ByteArrayInputStream);
_.count = 0;
_.pos = 0;
var Ljava_io_ByteArrayInputStream_2_classLit = createForClass(390);
defineClass(414, 1, $intern_23);
var Ljava_io_OutputStream_2_classLit = createForClass(414);
function $expand(this$static){
  var newbuf;
  if (this$static.count + 1 <= this$static.buf.length) {
    return;
  }
  newbuf = initUnidimensionalArray(B_classLit, $intern_24, 14, (this$static.count + 1) * 2, 15, 1);
  arraycopy(this$static.buf, newbuf, 0, this$static.count);
  this$static.buf = newbuf;
}

function $toByteArray(this$static){
  var newArray;
  newArray = initUnidimensionalArray(B_classLit, $intern_24, 14, this$static.count, 15, 1);
  arraycopy(this$static.buf, newArray, 0, this$static.count);
  return newArray;
}

function $write(this$static, oneByte){
  this$static.count == this$static.buf.length && $expand(this$static);
  this$static.buf[this$static.count++] = oneByte << 24 >> 24;
}

function ByteArrayOutputStream(){
  this.buf = initUnidimensionalArray(B_classLit, $intern_24, 14, 32, 15, 1);
}

defineClass(139, 414, $intern_23, ByteArrayOutputStream);
_.toString_0 = function toString_12(){
  var lastArg;
  return valueOf_0($decodeString(this.buf, (lastArg = this.count , $clinit_EmulatedCharset() , lastArg)));
}
;
_.count = 0;
var Ljava_io_ByteArrayOutputStream_2_classLit = createForClass(139);
defineClass(415, 414, $intern_23);
var Ljava_io_FilterOutputStream_2_classLit = createForClass(415);
function PrintStream(){
}

defineClass(207, 415, $intern_23, PrintStream);
var Ljava_io_PrintStream_2_classLit = createForClass(207);
function $charAt(this$static, index_0){
  return $charAt_0(this$static.string, index_0);
}

function $setLength(this$static, newLength){
  var oldLength;
  oldLength = this$static.string.length;
  newLength < oldLength?(this$static.string = $substring_0(this$static.string, 0, newLength)):newLength > oldLength && (this$static.string += valueOf_0(initUnidimensionalArray(C_classLit, $intern_24, 14, newLength - oldLength, 15, 1)));
}

function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(118, 1, {144:1});
_.toString_0 = function toString_13(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass(118);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  FALSE = false;
}

booleanCastMap = {3:1, 8:1};
var FALSE;
var Ljava_lang_Boolean_2_classLit = createForClass(410);
function codePointAt(index_0, limit){
  var hiSurrogate, loSurrogate;
  hiSurrogate = $charAt_0('    o---|###|###|###', index_0++);
  if (hiSurrogate >= 55296 && hiSurrogate <= 56319 && index_0 < limit && isLowSurrogate(loSurrogate = '    o---|###|###|###'.charCodeAt(index_0))) {
    return $intern_17 + ((hiSurrogate & 1023) << 10) + (loSurrogate & 1023);
  }
  return hiSurrogate;
}

function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function isLowSurrogate(ch_0){
  return ch_0 >= 56320 && ch_0 <= 57343;
}

function toChars(codePoint, dst, dstIndex){
  checkCriticalArgument(codePoint >= 0 && codePoint <= 1114111);
  if (codePoint >= $intern_17) {
    dst[dstIndex++] = 55296 + (codePoint - $intern_17 >> 10 & 1023) & $intern_25;
    dst[dstIndex] = 56320 + (codePoint - $intern_17 & 1023) & $intern_25;
    return 2;
  }
   else {
    dst[dstIndex] = codePoint & $intern_25;
    return 1;
  }
}

function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw toJs(new NumberFormatException('null'));
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw toJs(new NumberFormatException('For input string: "' + s + '"'));
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < $intern_26;
  if (isNaN(toReturn)) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
   else if (isTooLow || toReturn > $intern_0) {
    throw toJs(new NumberFormatException('For input string: "' + s + '"'));
  }
  return toReturn;
}

defineClass(117, 1, {3:1, 117:1});
var Ljava_lang_Number_2_classLit = createForClass(117);
doubleCastMap = {3:1, 8:1, 117:1};
var Ljava_lang_Double_2_classLit = createForClass(411);
function IllegalArgumentException(){
  RuntimeException.call(this);
}

function IllegalArgumentException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(11, 9, $intern_27, IllegalArgumentException, IllegalArgumentException_0);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass(11);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(13, 9, $intern_5, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass(13);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(38, 9, $intern_5, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass(38);
function Integer(value_0){
  this.value_0 = value_0;
}

function highestOneBit(i){
  var rtn;
  if (i < 0) {
    return $intern_26;
  }
   else if (i == 0) {
    return 0;
  }
   else {
    for (rtn = 1073741824; (rtn & i) == 0; rtn >>= 1)
    ;
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues)[rebase];
    !result && (result = boxedValues[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(89, 117, {3:1, 8:1, 89:1, 117:1}, Integer);
_.equals_0 = function equals_5(o){
  return instanceOf(o, 89) && o.value_0 == this.value_0;
}
;
_.hashCode_0 = function hashCode_7(){
  return this.value_0;
}
;
_.toString_0 = function toString_15(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass(89);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues = initUnidimensionalArray(Ljava_lang_Integer_2_classLit, $intern_3, 89, 256, 0, 1);
}

var boxedValues;
function abs_0(x_0){
  return x_0 < 0?-x_0:x_0;
}

function max_0(x_0, y_0){
  return x_0 > y_0?x_0:y_0;
}

function min_0(x_0, y_0){
  return x_0 < y_0?x_0:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(39, 119, $intern_5, NullPointerException, NullPointerException_0);
_.createError = function createError_0(msg){
  return new $wnd.TypeError(msg);
}
;
var Ljava_lang_NullPointerException_2_classLit = createForClass(39);
function NumberFormatException(message){
  IllegalArgumentException_0.call(this, message);
}

defineClass(99, 11, $intern_27, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass(99);
function StackTraceElement(methodName, fileName, lineNumber){
  this.className = 'Unknown';
  this.methodName = methodName;
  this.fileName = fileName;
  this.lineNumber = lineNumber;
}

defineClass(50, 1, {3:1, 50:1}, StackTraceElement);
_.equals_0 = function equals_6(other){
  var st;
  if (instanceOf(other, 50)) {
    st = other;
    return this.lineNumber == st.lineNumber && this.methodName == st.methodName && this.className == st.className && this.fileName == st.fileName;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_8(){
  return hashCode_15(stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_Object_2_classLit, 1), $intern_3, 1, 5, [valueOf(this.lineNumber), this.className, this.methodName, this.fileName]));
}
;
_.toString_0 = function toString_16(){
  return this.className + '.' + this.methodName + '(' + (this.fileName != null?this.fileName:'Unknown Source') + (this.lineNumber >= 0?':' + this.lineNumber:'') + ')';
}
;
_.lineNumber = 0;
var Ljava_lang_StackTraceElement_2_classLit = createForClass(50);
function $charAt_0(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return checkCriticalNotNull(this$static) , this$static === other;
}

function $equalsIgnoreCase(other){
  checkCriticalNotNull('body');
  if (other == null) {
    return false;
  }
  if ($equals('body', other)) {
    return true;
  }
  return 'body'.length == other.length && $equals('body'.toLowerCase(), other.toLowerCase());
}

function $indexOf_1(this$static, str){
  return this$static.indexOf(str);
}

function $lastIndexOf(this$static, str){
  return this$static.lastIndexOf(str);
}

function $lastIndexOf_0(this$static, str, start_0){
  return this$static.lastIndexOf(str, start_0);
}

function $replace(this$static, from, to){
  var regex, replacement;
  regex = $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1');
  replacement = $replaceAll($replaceAll(to, '\\\\', '\\\\\\\\'), '\\$', '\\\\$');
  return $replaceAll(this$static, regex, replacement);
}

function $replaceAll(this$static, regex, replace){
  replace = translateReplaceString(replace);
  return this$static.replace(new RegExp(regex, 'g'), replace);
}

function $replaceFirst(this$static, regex, replace){
  var jsRegEx;
  replace = translateReplaceString(replace);
  jsRegEx = new RegExp(regex);
  return this$static.replace(jsRegEx, replace);
}

function $split(this$static, regex, maxMatch){
  var compiled, count, lastNonEmpty, lastTrail, matchObj, out, trail;
  compiled = new RegExp(regex, 'g');
  out = initUnidimensionalArray(Ljava_lang_String_2_classLit, $intern_3, 2, 0, 6, 1);
  count = 0;
  trail = this$static;
  lastTrail = null;
  while (true) {
    matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = $substring_0(trail, 0, matchObj.index);
      trail = $substring_0(trail, matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substr(0, 1);
        trail = trail.substr(1);
      }
      lastTrail = trail;
      ++count;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && (out.length = lastNonEmpty , undefined);
  }
  return out;
}

function $subSequence(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $substring(this$static, beginIndex){
  return this$static.substr(beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  var end, length_0, start_0;
  length_0 = this$static.length;
  start_0 = 0;
  while (start_0 < length_0 && this$static.charCodeAt(start_0) <= 32) {
    ++start_0;
  }
  end = length_0;
  while (end > start_0 && this$static.charCodeAt(end - 1) <= 32) {
    --end;
  }
  return start_0 > 0 || end < length_0?this$static.substr(start_0, end - start_0):this$static;
}

function fromCharCode(array){
  return String.fromCharCode.apply(null, array);
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_17) {
    hiSurrogate = 55296 + (codePoint - $intern_17 >> 10 & 1023) & $intern_25;
    loSurrogate = 56320 + (codePoint - $intern_17 & 1023) & $intern_25;
    return String.fromCharCode(hiSurrogate) + ('' + String.fromCharCode(loSurrogate));
  }
   else {
    return String.fromCharCode(codePoint & $intern_25);
  }
}

function translateReplaceString(replaceStr){
  var pos;
  pos = 0;
  while (0 <= (pos = replaceStr.indexOf('\\', pos))) {
    replaceStr.charCodeAt(pos + 1) == 36?(replaceStr = replaceStr.substr(0, pos) + '$' + $substring(replaceStr, ++pos)):(replaceStr = replaceStr.substr(0, pos) + ('' + $substring(replaceStr, ++pos)));
  }
  return replaceStr;
}

function valueOf_0(x_0){
  return valueOf_1(x_0, x_0.length);
}

function valueOf_1(x_0, count){
  var batchEnd, batchStart, s;
  checkCriticalStringBounds(count, x_0.length);
  s = '';
  for (batchStart = 0; batchStart < count;) {
    batchEnd = batchStart + 10000 < count?batchStart + 10000:count;
    s += fromCharCode(x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

stringCastMap = {3:1, 144:1, 8:1, 2:1};
var Ljava_lang_String_2_classLit = createForClass(2);
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function StringBuffer(){
  AbstractStringBuilder.call(this, '');
}

defineClass(100, 118, {144:1}, StringBuffer);
var Ljava_lang_StringBuffer_2_classLit = createForClass(100);
function $append_1(this$static, x_0){
  this$static.string += String.fromCharCode(x_0);
  return this$static;
}

function $append_2(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_3(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_4(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_5(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_6(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_7(this$static, x_0){
  this$static.string += '' + x_0;
  return this$static;
}

function $append_8(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(s){
  AbstractStringBuilder.call(this, (checkCriticalNotNull(s) , s));
}

defineClass(37, 118, {144:1}, StringBuilder, StringBuilder_0);
var Ljava_lang_StringBuilder_2_classLit = createForClass(37);
function StringIndexOutOfBoundsException(message){
  IndexOutOfBoundsException_0.call(this, message);
}

defineClass(206, 38, $intern_5, StringIndexOutOfBoundsException);
var Ljava_lang_StringIndexOutOfBoundsException_2_classLit = createForClass(206);
function $clinit_System(){
  $clinit_System = emptyMethod;
  out_0 = new PrintStream;
}

function arraycopy(src_0, dest, destOfs, len){
  $clinit_System();
  var destlen, srclen;
  checkCriticalNotNull_0(src_0, 'src');
  checkCriticalNotNull_0(dest, 'dest');
  getClass__Ljava_lang_Class___devirtual$(src_0);
  getClass__Ljava_lang_Class___devirtual$(dest);
  srclen = src_0.length;
  destlen = dest.length;
  if (destOfs < 0 || len < 0 || len > srclen || destOfs + len > destlen) {
    throw toJs(new IndexOutOfBoundsException);
  }
  len > 0 && copy(src_0, 0, dest, destOfs, len, true);
}

defineClass(487, 1, {});
var out_0;
function UnsupportedOperationException(){
  RuntimeException.call(this);
}

function UnsupportedOperationException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(26, 9, $intern_5, UnsupportedOperationException, UnsupportedOperationException_0);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass(26);
function $clear_0(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  this$static.limit = this$static.capacity;
  return this$static;
}

function $limit(this$static, newLimit){
  if (newLimit < 0 || newLimit > this$static.capacity) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.limit = newLimit;
  this$static.position_0 > newLimit && (this$static.position_0 = newLimit);
  this$static.mark != -1 && this$static.mark > newLimit && (this$static.mark = -1);
  return this$static;
}

function $position(this$static){
  if (0 > this$static.limit) {
    throw toJs(new IllegalArgumentException);
  }
  this$static.position_0 = 0;
  this$static.mark != -1 && this$static.mark > this$static.position_0 && (this$static.mark = -1);
  return this$static;
}

function $rewind(this$static){
  this$static.position_0 = 0;
  this$static.mark = -1;
  return this$static;
}

function Buffer(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  this.capacity = this.limit = capacity;
}

defineClass(95, 1, {});
_.capacity = 0;
_.limit = 0;
_.mark = -1;
_.position_0 = 0;
var Ljava_nio_Buffer_2_classLit = createForClass(95);
function BufferOverflowException(){
  RuntimeException.call(this);
}

defineClass(178, 9, $intern_5, BufferOverflowException);
var Ljava_nio_BufferOverflowException_2_classLit = createForClass(178);
function $$init_0(this$static){
  this$static.order = ($clinit_ByteOrder() , BIG_ENDIAN);
}

function $asIntBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new IntBuffer($slice(this$static));
}

function $asShortBuffer(this$static){
  if (this$static.order != ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER)) {
    throw toJs(new RuntimeException_0('Native order supported only.'));
  }
  return new ShortBuffer($slice(this$static));
}

function $get_1(this$static, index_0){
  return this$static.byteArray[index_0];
}

function $order(this$static, byteOrder){
  this$static.order = byteOrder;
  return this$static;
}

function $slice(this$static){
  var slice_0;
  slice_0 = new ByteBuffer_1(this$static.byteArray.buffer, this$static.limit - this$static.position_0, this$static.byteArray.byteOffset + this$static.position_0);
  slice_0.order = this$static.order;
  return slice_0;
}

function ByteBuffer(capacity){
  ByteBuffer_0.call(this, new ArrayBuffer(capacity));
}

function ByteBuffer_0(buf){
  Buffer.call(this, buf.byteLength);
  $$init_0(this);
  this.byteArray = new Int8Array(buf);
}

function ByteBuffer_1(buffer, capacity, offset){
  Buffer.call(this, capacity);
  $$init_0(this);
  this.byteArray = new Int8Array(buffer, offset, capacity);
}

function allocateDirect(capacity){
  if (capacity < 0) {
    throw toJs(new IllegalArgumentException);
  }
  return new ByteBuffer(capacity);
}

defineClass(97, 95, {8:1, 97:1, 142:1}, ByteBuffer, ByteBuffer_1);
_.equals_0 = function equals_7(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 97)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_1(this, myPosition++) == $get_1(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize(){
  return 1;
}
;
_.getElementType = function getElementType(){
  return 5120;
}
;
_.getTypedArray = function getTypedArray(){
  return this.byteArray;
}
;
_.hashCode_0 = function hashCode_9(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_1(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_17(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ByteBuffer_2_classLit) , Ljava_nio_ByteBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ByteBuffer_2_classLit = createForClass(97);
function $clinit_ByteOrder(){
  $clinit_ByteOrder = emptyMethod;
  BIG_ENDIAN = new ByteOrder('BIG_ENDIAN');
  LITTLE_ENDIAN = new ByteOrder('LITTLE_ENDIAN');
  NATIVE_ORDER = LITTLE_ENDIAN;
}

function ByteOrder(name_0){
  this.name_0 = name_0;
}

defineClass(177, 1, {}, ByteOrder);
_.toString_0 = function toString_18(){
  return this.name_0;
}
;
var BIG_ENDIAN, LITTLE_ENDIAN, NATIVE_ORDER;
var Ljava_nio_ByteOrder_2_classLit = createForClass(177);
function $get_2(this$static, index_0){
  return this$static.floatArray[index_0];
}

function $put_0(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.floatArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function FloatBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.floatArray = create(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(108, 95, {8:1, 108:1, 142:1}, FloatBuffer);
_.equals_0 = function equals_8(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 108)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_2(this, myPosition++) == $get_2(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_0(){
  return 4;
}
;
_.getElementType = function getElementType_0(){
  return 5126;
}
;
_.getTypedArray = function getTypedArray_0(){
  return this.floatArray;
}
;
_.toString_0 = function toString_19(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_FloatBuffer_2_classLit) , Ljava_nio_FloatBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_FloatBuffer_2_classLit = createForClass(108);
function $get_3(this$static, index_0){
  return this$static.intArray[index_0];
}

function IntBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 2);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.intArray = create_1(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(133, 95, {8:1, 133:1, 142:1}, IntBuffer);
_.equals_0 = function equals_9(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 133)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_3(this, myPosition++) == $get_3(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_1(){
  return 4;
}
;
_.getElementType = function getElementType_1(){
  return 5124;
}
;
_.getTypedArray = function getTypedArray_1(){
  return this.intArray;
}
;
_.hashCode_0 = function hashCode_10(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_3(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_20(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_IntBuffer_2_classLit) , Ljava_nio_IntBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_IntBuffer_2_classLit = createForClass(133);
function $get_4(this$static, index_0){
  return this$static.shortArray[index_0];
}

function $put_1(this$static, src_0, len){
  var i, length_0;
  length_0 = src_0.length;
  if (len < 0 || compare_0(len, length_0) > 0) {
    throw toJs(new IndexOutOfBoundsException);
  }
  if (len > this$static.limit - this$static.position_0) {
    throw toJs(new BufferOverflowException);
  }
  for (i = 0; i < len; i++) {
    this$static.shortArray[this$static.position_0++] = src_0[i];
  }
  return this$static;
}

function ShortBuffer(byteBuffer){
  Buffer.call(this, byteBuffer.capacity >> 1);
  this.byteBuffer = byteBuffer;
  $clear_0(this.byteBuffer);
  this.shortArray = create_0(byteBuffer.byteArray.buffer, byteBuffer.byteArray.byteOffset, this.capacity);
}

defineClass(132, 95, {8:1, 132:1, 142:1}, ShortBuffer);
_.equals_0 = function equals_10(other){
  var equalSoFar, myPosition, otherBuffer, otherPosition;
  if (!instanceOf(other, 132)) {
    return false;
  }
  otherBuffer = other;
  if (this.limit - this.position_0 != otherBuffer.limit - otherBuffer.position_0) {
    return false;
  }
  myPosition = this.position_0;
  otherPosition = otherBuffer.position_0;
  equalSoFar = true;
  while (equalSoFar && myPosition < this.limit) {
    equalSoFar = $get_4(this, myPosition++) == $get_4(otherBuffer, otherPosition++);
  }
  return equalSoFar;
}
;
_.getElementSize = function getElementSize_2(){
  return 2;
}
;
_.getElementType = function getElementType_2(){
  return 5122;
}
;
_.getTypedArray = function getTypedArray_2(){
  return this.shortArray;
}
;
_.hashCode_0 = function hashCode_11(){
  var hash, myPosition;
  myPosition = this.position_0;
  hash = 0;
  while (myPosition < this.limit) {
    hash = hash + $get_4(this, myPosition++);
  }
  return hash;
}
;
_.toString_0 = function toString_21(){
  var buf;
  buf = new StringBuffer;
  $append_0(buf, ($ensureNamesAreInitialized(Ljava_nio_ShortBuffer_2_classLit) , Ljava_nio_ShortBuffer_2_classLit.typeName));
  buf.string += ', status: capacity=';
  $append(buf, this.capacity);
  buf.string += ' position=';
  $append(buf, this.position_0);
  buf.string += ' limit=';
  $append(buf, this.limit);
  return buf.string;
}
;
var Ljava_nio_ShortBuffer_2_classLit = createForClass(132);
defineClass(73, 1, $intern_28);
_.equals_0 = function equals_11(o){
  var that;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 73)) {
    return false;
  }
  that = o;
  return $equals(this.name_0, that.name_0);
}
;
_.hashCode_0 = function hashCode_12(){
  return getHashCode_0(this.name_0);
}
;
_.toString_0 = function toString_22(){
  return this.name_0;
}
;
var Ljava_nio_charset_Charset_2_classLit = createForClass(73);
function $containsKey(this$static, key){
  return instanceOfString(key)?key == null?!!$getEntry(this$static.hashCodeMap, null):$contains_3(this$static.stringMap, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $get_5(this$static, key){
  return instanceOfString(key)?key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):$get_6(this$static.stringMap, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $put_2(this$static, key, value_0){
  return instanceOfString(key)?$putStringValue(this$static, key, value_0):$put_3(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_3(this$static.hashCodeMap, null, value_0):$put_4(this$static.stringMap, key, value_0);
}

function $remove_5(this$static, key){
  return instanceOfString(key)?key == null?$remove_13(this$static.hashCodeMap, null):$remove_14(this$static.stringMap, key):$remove_13(this$static.hashCodeMap, key);
}

function $reset(this$static){
  var modCount;
  this$static.hashCodeMap = new InternalHashCodeMap(this$static);
  this$static.stringMap = new InternalStringMap(this$static);
  modCount = this$static['_gwt_modCount'] | 0;
  this$static['_gwt_modCount'] = modCount + 1;
}

function $size(this$static){
  return this$static.hashCodeMap.size_0 + this$static.stringMap.size_0;
}

defineClass(305, 428, $intern_14);
_.containsKey = function containsKey_1(key){
  return $containsKey(this, key);
}
;
_.entrySet_0 = function entrySet_0(){
  return new AbstractHashMap$EntrySet(this);
}
;
_.get_1 = function get_4(key){
  return $get_5(this, key);
}
;
_.put = function put_1(key, value_0){
  return $putStringValue(this, key, value_0);
}
;
_.remove_1 = function remove_11(key){
  return $remove_5(this, key);
}
;
_.size_1 = function size_5(){
  return $size(this);
}
;
var Ljava_util_AbstractHashMap_2_classLit = createForClass(305);
function $contains_0(this$static, o){
  if (instanceOf(o, 49)) {
    return $containsEntry(this$static.this$01, o);
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(105, 430, $intern_16, AbstractHashMap$EntrySet);
_.contains_0 = function contains_3(o){
  return $contains_0(this, o);
}
;
_.iterator = function iterator_5(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_12(entry){
  var key;
  if ($contains_0(this, entry)) {
    key = entry.getKey();
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_6(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass(105);
function $computeHasNext(this$static){
  if (this$static.current.hasNext_0()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = new InternalHashCodeMap$1(this$static.this$01.hashCodeMap);
  return this$static.current.hasNext_0();
}

function $next_1(this$static){
  var rv;
  checkStructuralChange(this$static.this$01, this$static);
  checkCriticalElement(this$static.hasNext);
  this$static.last = this$static.current;
  rv = this$static.current.next_1();
  this$static.hasNext = $computeHasNext(this$static);
  return rv;
}

function $remove_6(this$static){
  var modCount;
  checkCriticalState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_2();
  this$static.last = null;
  this$static.hasNext = $computeHasNext(this$static);
  modCount = this$static.this$01['_gwt_modCount'];
  this$static['_gwt_modCount'] = modCount;
}

function AbstractHashMap$EntrySetIterator(this$0){
  var modCount;
  this.this$01 = this$0;
  this.stringMapEntries = new InternalStringMap$1(this.this$01.stringMap);
  this.current = this.stringMapEntries;
  this.hasNext = $computeHasNext(this);
  modCount = this$0['_gwt_modCount'];
  this['_gwt_modCount'] = modCount;
}

defineClass(106, 1, {}, AbstractHashMap$EntrySetIterator);
_.next_1 = function next_1(){
  return $next_1(this);
}
;
_.hasNext_0 = function hasNext_1(){
  return this.hasNext;
}
;
_.remove_2 = function remove_13(){
  $remove_6(this);
}
;
_.hasNext = false;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass(106);
function $remove_7(this$static){
  checkCriticalState(this$static.last != -1);
  this$static.this$01_0.remove_0(this$static.last);
  this$static.i = this$static.last;
  this$static.last = -1;
}

function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(155, 1, {}, AbstractList$IteratorImpl);
_.hasNext_0 = function hasNext_2(){
  return this.i < this.this$01_0.size_1();
}
;
_.next_1 = function next_2(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_2 = function remove_14(){
  $remove_7(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass(155);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkCriticalPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(156, 155, {}, AbstractList$ListIteratorImpl);
_.remove_2 = function remove_15(){
  $remove_7(this);
}
;
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass(156);
function AbstractList$SubList(wrapped, fromIndex, toIndex){
  checkCriticalPositionIndexes(fromIndex, toIndex, wrapped.array.length);
  this.wrapped = wrapped;
  this.fromIndex = fromIndex;
  this.size_0 = toIndex - fromIndex;
}

defineClass(320, 432, $intern_2, AbstractList$SubList);
_.add_1 = function add_5(index_0, element){
  checkCriticalPositionIndex(index_0, this.size_0);
  $add(this.wrapped, this.fromIndex + index_0, element);
  ++this.size_0;
}
;
_.get_0 = function get_5(index_0){
  return checkCriticalElementIndex(index_0, this.size_0) , $get(this.wrapped, this.fromIndex + index_0);
}
;
_.remove_0 = function remove_16(index_0){
  var result;
  checkCriticalElementIndex(index_0, this.size_0);
  result = $remove(this.wrapped, this.fromIndex + index_0);
  --this.size_0;
  return result;
}
;
_.size_1 = function size_7(){
  return this.size_0;
}
;
_.fromIndex = 0;
_.size_0 = 0;
var Ljava_util_AbstractList$SubList_2_classLit = createForClass(320);
function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(304, 430, $intern_16, AbstractMap$1);
_.contains_0 = function contains_4(key){
  return $containsKey(this.this$01, key);
}
;
_.iterator = function iterator_6(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this.this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_17(key){
  if ($containsKey(this.this$01, key)) {
    $remove_5(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_8(){
  return $size(this.this$01);
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass(304);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(154, 1, {}, AbstractMap$1$1);
_.hasNext_0 = function hasNext_3(){
  return this.val$outerIter2.hasNext;
}
;
_.next_1 = function next_3(){
  var entry;
  entry = $next_1(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_2 = function remove_18(){
  $remove_6(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass(154);
defineClass(303, 1, $intern_15);
_.equals_0 = function equals_12(other){
  var entry;
  if (!instanceOf(other, 49)) {
    return false;
  }
  entry = other;
  return equals_19(this.key_0, entry.getKey()) && equals_19(this.value_0, entry.getValue());
}
;
_.getKey = function getKey_0(){
  return this.key_0;
}
;
_.getValue = function getValue_0(){
  return this.value_0;
}
;
_.hashCode_0 = function hashCode_13(){
  return hashCode_22(this.key_0) ^ hashCode_22(this.value_0);
}
;
_.setValue = function setValue_0(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString_0 = function toString_23(){
  return this.key_0 + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass(303);
function AbstractMap$SimpleEntry(key, value_0){
  this.key_0 = key;
  this.value_0 = value_0;
}

defineClass(153, 303, $intern_15, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass(153);
defineClass(439, 1, $intern_15);
_.equals_0 = function equals_13(other){
  var entry;
  if (!instanceOf(other, 49)) {
    return false;
  }
  entry = other;
  return equals_19(this.val$entry2.value[0], entry.getKey()) && equals_19($getValue(this), entry.getValue());
}
;
_.hashCode_0 = function hashCode_14(){
  return hashCode_22(this.val$entry2.value[0]) ^ hashCode_22($getValue(this));
}
;
_.toString_0 = function toString_24(){
  return this.val$entry2.value[0] + '=' + $getValue(this);
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass(439);
function $addFirst(this$static, e){
  checkCriticalNotNull(e);
  this$static.head = this$static.head - 1 & this$static.array.length - 1;
  this$static.array[this$static.head] = e;
  $ensureCapacity(this$static);
}

function $clear_1(this$static){
  if (this$static.head == this$static.tail) {
    return;
  }
  this$static.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 8, 5, 1);
  this$static.head = 0;
  this$static.tail = 0;
}

function $contains_1(it, o){
  if (o == null) {
    return false;
  }
  while (it.currentIndex != it.fence) {
    if (equals_Ljava_lang_Object__Z__devirtual$(o, $next_2(it))) {
      return true;
    }
  }
  return false;
}

function $copyElements(this$static, dest, count){
  var dstIdx, i, mask;
  mask = this$static.array.length - 1;
  for (i = this$static.head , dstIdx = 0; dstIdx < count; i = i + 1 & mask , ++dstIdx) {
    dest[dstIdx] = this$static.array[i];
  }
}

function $ensureCapacity(this$static){
  var newArray, newLength, numElements;
  if (this$static.head != this$static.tail) {
    return;
  }
  numElements = this$static.array.length;
  newLength = highestOneBit(8 > numElements?8:numElements) << 1;
  if (this$static.head != 0) {
    newArray = createFrom(this$static.array, newLength);
    $copyElements(this$static, newArray, numElements);
    this$static.array = newArray;
    this$static.head = 0;
  }
   else {
    setLength(this$static.array, newLength);
  }
  this$static.tail = numElements;
}

function $pollFirst(this$static){
  var e;
  e = this$static.array[this$static.head];
  if (e == null) {
    return null;
  }
  this$static.array[this$static.head] = null;
  this$static.head = this$static.head + 1 & this$static.array.length - 1;
  return e;
}

function $remove_8(it, o){
  if ($contains_1(it, o)) {
    $remove_9(it);
    return true;
  }
  return false;
}

function $removeAtIndex(this$static, i){
  var headDistance, mask, size_0, tailDistance;
  mask = this$static.array.length - 1;
  headDistance = i - this$static.head & mask;
  tailDistance = this$static.tail - i & mask;
  size_0 = this$static.tail - this$static.head & mask;
  checkConcurrentModification(headDistance < size_0);
  if (headDistance >= tailDistance) {
    $shiftLeftAtIndex(this$static, i);
    return -1;
  }
   else {
    $shiftRightAtIndex(this$static, i);
    return 1;
  }
}

function $shiftLeftAtIndex(this$static, i){
  var mask, nextOffset;
  mask = this$static.array.length - 1;
  this$static.tail = this$static.tail - 1 & mask;
  while (i != this$static.tail) {
    nextOffset = i + 1 & mask;
    this$static.array[i] = this$static.array[nextOffset];
    i = nextOffset;
  }
  this$static.array[this$static.tail] = null;
}

function $shiftRightAtIndex(this$static, i){
  var mask, prevOffset;
  mask = this$static.array.length - 1;
  while (i != this$static.head) {
    prevOffset = i - 1 & mask;
    this$static.array[i] = this$static.array[prevOffset];
    i = prevOffset;
  }
  this$static.array[this$static.head] = null;
  this$static.head = this$static.head + 1 & mask;
}

function ArrayDeque(){
  this.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 8, 5, 1);
}

function checkConcurrentModification(expression){
  if (!expression) {
    throw toJs(new ConcurrentModificationException);
  }
}

defineClass(189, 429, {}, ArrayDeque);
_.add_0 = function add_6(e){
  checkCriticalNotNull(e);
  this.array[this.tail] = e;
  this.tail = this.tail + 1 & this.array.length - 1;
  $ensureCapacity(this);
  return true;
}
;
_.contains_0 = function contains_5(o){
  return $contains_1(new ArrayDeque$IteratorImpl(this), o);
}
;
_.isEmpty = function isEmpty_2(){
  return this.head == this.tail;
}
;
_.iterator = function iterator_7(){
  return new ArrayDeque$IteratorImpl(this);
}
;
_.remove = function remove_19(o){
  return $remove_8(new ArrayDeque$IteratorImpl(this), o);
}
;
_.size_1 = function size_9(){
  return this.tail - this.head & this.array.length - 1;
}
;
_.head = 0;
_.tail = 0;
var Ljava_util_ArrayDeque_2_classLit = createForClass(189);
function $next_2(this$static){
  var e;
  checkCriticalElement(this$static.currentIndex != this$static.fence);
  e = this$static.this$01.array[this$static.currentIndex];
  checkConcurrentModification(this$static.fence == this$static.this$01.tail && e != null);
  this$static.lastIndex = this$static.currentIndex;
  this$static.currentIndex = this$static.currentIndex + 1 & this$static.this$01.array.length - 1;
  return e;
}

function $remove_9(this$static){
  checkCriticalState(this$static.lastIndex >= 0);
  if ($removeAtIndex(this$static.this$01, this$static.lastIndex) < 0) {
    this$static.currentIndex = this$static.currentIndex - 1 & this$static.this$01.array.length - 1;
    this$static.fence = this$static.this$01.tail;
  }
  this$static.lastIndex = -1;
}

function ArrayDeque$IteratorImpl(this$0){
  this.this$01 = this$0;
  this.currentIndex = this.this$01.head;
  this.fence = this.this$01.tail;
}

defineClass(140, 1, {}, ArrayDeque$IteratorImpl);
_.hasNext_0 = function hasNext_4(){
  return this.currentIndex != this.fence;
}
;
_.next_1 = function next_4(){
  return $next_2(this);
}
;
_.remove_2 = function remove_20(){
  $remove_9(this);
}
;
_.currentIndex = 0;
_.fence = 0;
_.lastIndex = -1;
var Ljava_util_ArrayDeque$IteratorImpl_2_classLit = createForClass(140);
function $next_3(this$static){
  checkCriticalElement(this$static.i < this$static.this$01.array.length);
  this$static.last = this$static.i++;
  return this$static.this$01.array[this$static.last];
}

function $remove_10(this$static){
  checkCriticalState(this$static.last != -1);
  $remove(this$static.this$01, this$static.i = this$static.last);
  this$static.last = -1;
}

function ArrayList$1(this$0){
  this.this$01 = this$0;
}

defineClass(27, 1, {}, ArrayList$1);
_.hasNext_0 = function hasNext_5(){
  return this.i < this.this$01.array.length;
}
;
_.next_1 = function next_5(){
  return $next_3(this);
}
;
_.remove_2 = function remove_21(){
  $remove_10(this);
}
;
_.i = 0;
_.last = -1;
var Ljava_util_ArrayList$1_2_classLit = createForClass(27);
function equals_14(array1, array2){
  var i;
  if (maskUndefined(array1) === maskUndefined(array2)) {
    return true;
  }
  if (array1 == null || array2 == null) {
    return false;
  }
  if (array1.length != array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

function fill(a){
  fill0(a, a.length);
}

function fill0(a, toIndex){
  var i;
  for (i = 0; i < toIndex; ++i) {
    a[i] = $intern_29;
  }
}

function fill0_0(a, toIndex, val){
  var i;
  for (i = 0; i < toIndex; ++i) {
    a[i] = val;
  }
}

function hashCode_15(a){
  var e, e$index, e$max, hashCode;
  hashCode = 1;
  for (e$index = 0 , e$max = a.length; e$index < e$max; ++e$index) {
    e = a[e$index];
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_16(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function hashCode_17(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext_0();) {
    e = e$iterator.next_1();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = hashCode | 0;
  }
  return hashCode;
}

function unmodifiableList(list){
  $clinit_Collections();
  return instanceOf(list, 115)?new Collections$UnmodifiableRandomAccessList(list):new Collections$UnmodifiableList(list);
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(331, 432, $intern_4, Collections$EmptyList);
_.contains_0 = function contains_6(object){
  return false;
}
;
_.get_0 = function get_6(location_0){
  checkCriticalElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_0;
}
;
_.size_1 = function size_10(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass(331);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_0 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(332, 1, {}, Collections$EmptyListIterator);
_.hasNext_0 = function hasNext_6(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next_1 = function next_6(){
  throw toJs(new NoSuchElementException);
}
;
_.previous = function previous_1(){
  throw toJs(new NoSuchElementException);
}
;
_.remove_2 = function remove_22(){
  throw toJs(new IllegalStateException);
}
;
var INSTANCE_0;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass(332);
defineClass(164, 1, {});
_.add_0 = function add_7(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.isEmpty = function isEmpty_3(){
  return this.coll.isEmpty();
}
;
_.iterator = function iterator_9(){
  return new Collections$UnmodifiableCollectionIterator(this.coll.iterator());
}
;
_.remove = function remove_23(o){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_11(){
  return this.coll.size_1();
}
;
_.toString_0 = function toString_25(){
  return toString_9(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableCollection_2_classLit = createForClass(164);
function $remove_11(){
  throw toJs(new UnsupportedOperationException);
}

function Collections$UnmodifiableCollectionIterator(it){
  this.it = it;
}

defineClass(166, 1, {}, Collections$UnmodifiableCollectionIterator);
_.hasNext_0 = function hasNext_7(){
  return this.it.hasNext_0();
}
;
_.next_1 = function next_7(){
  return this.it.next_1();
}
;
_.remove_2 = function remove_24(){
  $remove_11();
}
;
var Ljava_util_Collections$UnmodifiableCollectionIterator_2_classLit = createForClass(166);
function Collections$UnmodifiableList(list){
  this.coll = list;
  this.list = list;
}

defineClass(165, 164, $intern_2, Collections$UnmodifiableList);
_.equals_0 = function equals_15(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.list, o);
}
;
_.get_0 = function get_7(index_0){
  return this.list.get_0(index_0);
}
;
_.hashCode_0 = function hashCode_18(){
  return hashCode__I__devirtual$(this.list);
}
;
_.isEmpty = function isEmpty_4(){
  return this.list.isEmpty();
}
;
_.listIterator = function listIterator_2(){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(0));
}
;
_.listIterator_0 = function listIterator_3(from){
  return new Collections$UnmodifiableListIterator(this.list.listIterator_0(from));
}
;
var Ljava_util_Collections$UnmodifiableList_2_classLit = createForClass(165);
function Collections$UnmodifiableListIterator(lit){
  Collections$UnmodifiableCollectionIterator.call(this, lit);
  this.lit = lit;
}

defineClass(167, 166, {}, Collections$UnmodifiableListIterator);
_.remove_2 = function remove_25(){
  $remove_11();
}
;
_.hasPrevious = function hasPrevious_1(){
  return this.lit.hasPrevious();
}
;
_.previous = function previous_2(){
  return this.lit.previous();
}
;
var Ljava_util_Collections$UnmodifiableListIterator_2_classLit = createForClass(167);
function Collections$UnmodifiableMap(map_0){
  this.map_0 = map_0;
}

defineClass(333, 1, $intern_14, Collections$UnmodifiableMap);
_.entrySet_0 = function entrySet_1(){
  !this.entrySet && (this.entrySet = new Collections$UnmodifiableMap$UnmodifiableEntrySet(this.map_0.entrySet_0()));
  return this.entrySet;
}
;
_.equals_0 = function equals_16(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.map_0, o);
}
;
_.get_1 = function get_8(key){
  return this.map_0.get_1(key);
}
;
_.hashCode_0 = function hashCode_19(){
  return hashCode__I__devirtual$(this.map_0);
}
;
_.isEmpty = function isEmpty_5(){
  return this.map_0.isEmpty();
}
;
_.put = function put_2(key, value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.remove_1 = function remove_26(key){
  throw toJs(new UnsupportedOperationException);
}
;
_.size_1 = function size_12(){
  return this.map_0.size_1();
}
;
_.toString_0 = function toString_26(){
  return toString_9(this.map_0);
}
;
var Ljava_util_Collections$UnmodifiableMap_2_classLit = createForClass(333);
defineClass(334, 164, $intern_16);
_.equals_0 = function equals_17(o){
  return equals_Ljava_lang_Object__Z__devirtual$(this.coll, o);
}
;
_.hashCode_0 = function hashCode_20(){
  return hashCode__I__devirtual$(this.coll);
}
;
var Ljava_util_Collections$UnmodifiableSet_2_classLit = createForClass(334);
function Collections$UnmodifiableMap$UnmodifiableEntrySet(s){
  this.coll = s;
}

defineClass(335, 334, $intern_16, Collections$UnmodifiableMap$UnmodifiableEntrySet);
_.iterator = function iterator_10(){
  var it;
  it = this.coll.iterator();
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$1(it);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet_2_classLit = createForClass(335);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$1(val$it){
  this.val$it2 = val$it;
}

defineClass(338, 1, {}, Collections$UnmodifiableMap$UnmodifiableEntrySet$1);
_.next_1 = function next_8(){
  return new Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(this.val$it2.next_1());
}
;
_.hasNext_0 = function hasNext_8(){
  return this.val$it2.hasNext_0();
}
;
_.remove_2 = function remove_27(){
  throw toJs(new UnsupportedOperationException);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$1_2_classLit = createForClass(338);
function Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry(entry){
  this.entry = entry;
}

defineClass(336, 1, $intern_15, Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry);
_.equals_0 = function equals_18(o){
  return this.entry.equals_0(o);
}
;
_.getKey = function getKey_1(){
  return this.entry.getKey();
}
;
_.getValue = function getValue_1(){
  return this.entry.getValue();
}
;
_.hashCode_0 = function hashCode_21(){
  return this.entry.hashCode_0();
}
;
_.setValue = function setValue_1(value_0){
  throw toJs(new UnsupportedOperationException);
}
;
_.toString_0 = function toString_27(){
  return toString_9(this.entry);
}
;
var Ljava_util_Collections$UnmodifiableMap$UnmodifiableEntrySet$UnmodifiableEntry_2_classLit = createForClass(336);
function Collections$UnmodifiableRandomAccessList(list){
  Collections$UnmodifiableList.call(this, list);
}

defineClass(337, 165, {57:1, 115:1}, Collections$UnmodifiableRandomAccessList);
var Ljava_util_Collections$UnmodifiableRandomAccessList_2_classLit = createForClass(337);
function checkStructuralChange(host, iterator){
  if (iterator['_gwt_modCount'] != host['_gwt_modCount']) {
    throw toJs(new ConcurrentModificationException);
  }
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0['_gwt_modCount'] | 0;
  map_0['_gwt_modCount'] = modCount + 1;
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(182, 9, $intern_5, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass(182);
defineClass(446, 430, $intern_16);
var Ljava_util_EnumSet_2_classLit = createForClass(446);
function $add_4(this$static, e){
  var ordinal;
  checkCriticalNotNull(e);
  ordinal = e.ordinal;
  if (!this$static.set_0[ordinal]) {
    this$static.set_0[ordinal] = e;
    ++this$static.size_0;
    return true;
  }
  return false;
}

function $containsEnum(this$static, e){
  return !!e && this$static.set_0[e.ordinal] == e;
}

function EnumSet$EnumSetImpl(all, set_0){
  this.all = all;
  this.set_0 = set_0;
  this.size_0 = 0;
}

defineClass(391, 446, $intern_16, EnumSet$EnumSetImpl);
_.add_0 = function add_8(e){
  return $add_4(this, e);
}
;
_.contains_0 = function contains_7(o){
  return instanceOf(o, 6) && $containsEnum(this, o);
}
;
_.iterator = function iterator_11(){
  return new EnumSet$EnumSetImpl$IteratorImpl(this);
}
;
_.remove = function remove_28(o){
  return false;
}
;
_.size_1 = function size_13(){
  return this.size_0;
}
;
_.size_0 = 0;
var Ljava_util_EnumSet$EnumSetImpl_2_classLit = createForClass(391);
function $findNext(this$static){
  var c;
  ++this$static.i;
  for (c = this$static.this$11.all.length; this$static.i < c; ++this$static.i) {
    if (this$static.this$11.set_0[this$static.i]) {
      return;
    }
  }
}

function EnumSet$EnumSetImpl$IteratorImpl(this$1){
  this.this$11 = this$1;
  $findNext(this);
}

defineClass(392, 1, {}, EnumSet$EnumSetImpl$IteratorImpl);
_.next_1 = function next_9(){
  return checkCriticalElement(this.i < this.this$11.all.length) , this.last = this.i , $findNext(this) , this.this$11.set_0[this.last];
}
;
_.hasNext_0 = function hasNext_9(){
  return this.i < this.this$11.all.length;
}
;
_.remove_2 = function remove_29(){
  checkCriticalState(this.last != -1);
  this.this$11.set_0[this.last] = null;
  --this.this$11.size_0;
  this.last = -1;
}
;
_.i = -1;
_.last = -1;
var Ljava_util_EnumSet$EnumSetImpl$IteratorImpl_2_classLit = createForClass(392);
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function HashMap(){
  $reset(this);
}

defineClass(43, 305, {3:1, 114:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass(43);
function $add_5(this$static, o){
  var old;
  old = $put_2(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_2(this$static, o){
  return $containsKey(this$static.map_0, o);
}

function $remove_12(this$static, o){
  return $remove_5(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(134, 430, {3:1, 56:1}, HashSet);
_.add_0 = function add_9(o){
  return $add_5(this, o);
}
;
_.contains_0 = function contains_8(o){
  return $contains_2(this, o);
}
;
_.isEmpty = function isEmpty_6(){
  return $size(this.map_0) == 0;
}
;
_.iterator = function iterator_12(){
  var outerIter;
  return outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet((new AbstractMap$1(this.map_0)).this$01)).this$01) , new AbstractMap$1$1(outerIter);
}
;
_.remove = function remove_30(o){
  return $remove_12(this, o);
}
;
_.size_1 = function size_14(){
  return $size(this.map_0);
}
;
var Ljava_util_HashSet_2_classLit = createForClass(134);
function $findEntryInChain(key, chain){
  var entry, entry$index, entry$max;
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $getChainOrEmpty(this$static, hashCode){
  var chain;
  chain = this$static.backingMap.get(hashCode);
  return chain == null?[]:chain;
}

function $getEntry(this$static, key){
  var hashCode;
  return $findEntryInChain(key, $getChainOrEmpty(this$static, key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0)));
}

function $put_3(this$static, key, value_0){
  var chain, chain0, entry, hashCode, hashCode0;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  if (chain0.length == 0) {
    this$static.backingMap.set(hashCode0, chain0);
  }
   else {
    entry = $findEntryInChain(key, chain0);
    if (entry) {
      return entry.setValue(value_0);
    }
  }
  chain0[chain0.length] = new AbstractMap$SimpleEntry(key, value_0);
  ++this$static.size_0;
  structureChanged(this$static.host);
  return null;
}

function $remove_13(this$static, key){
  var chain, chain0, entry, hashCode, hashCode0, i;
  hashCode0 = key == null?0:(hashCode = hashCode__I__devirtual$(key) , hashCode | 0);
  chain0 = (chain = this$static.backingMap.get(hashCode0) , chain == null?[]:chain);
  for (i = 0; i < chain0.length; i++) {
    entry = chain0[i];
    if ($equals_0(key, entry.getKey())) {
      if (chain0.length == 1) {
        chain0.length = 0;
        this$static.backingMap['delete'](hashCode0);
      }
       else {
        chain0.splice(i, 1);
      }
      --this$static.size_0;
      structureChanged(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalHashCodeMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(349, 1, {}, InternalHashCodeMap);
_.iterator = function iterator_13(){
  return new InternalHashCodeMap$1(this);
}
;
_.size_0 = 0;
var Ljava_util_InternalHashCodeMap_2_classLit = createForClass(349);
function InternalHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.chains = this.this$01.backingMap.entries();
  this.chain = [];
}

defineClass(174, 1, {}, InternalHashCodeMap$1);
_.next_1 = function next_10(){
  return this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.hasNext_0 = function hasNext_10(){
  var current;
  if (this.itemIndex < this.chain.length) {
    return true;
  }
  current = this.chains.next();
  if (!current.done) {
    this.chain = current.value[1];
    this.itemIndex = 0;
    return true;
  }
  return false;
}
;
_.remove_2 = function remove_31(){
  $remove_13(this.this$01, this.lastEntry.getKey());
  this.itemIndex != 0 && --this.itemIndex;
}
;
_.itemIndex = 0;
_.lastEntry = null;
var Ljava_util_InternalHashCodeMap$1_2_classLit = createForClass(174);
function $clinit_InternalJsMapFactory(){
  $clinit_InternalJsMapFactory = emptyMethod;
  jsMapCtor = getJsMapConstructor();
}

function canHandleObjectCreateAndProto(){
  if (!Object.create || !Object.getOwnPropertyNames) {
    return false;
  }
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  if (Object.getOwnPropertyNames(map_0).length == 0) {
    return false;
  }
  return true;
}

function getJsMapConstructor(){
  function isCorrectIterationProtocol(){
    try {
      return (new Map).entries().next().done;
    }
     catch (e) {
      return false;
    }
  }

  if (typeof Map === 'function' && Map.prototype.entries && isCorrectIterationProtocol()) {
    return Map;
  }
   else {
    return getJsMapPolyFill();
  }
}

function getJsMapPolyFill(){
  function Stringmap(){
    this.obj = this.createObject();
  }

  ;
  Stringmap.prototype.createObject = function(key){
    return Object.create(null);
  }
  ;
  Stringmap.prototype.get = function(key){
    return this.obj[key];
  }
  ;
  Stringmap.prototype.set = function(key, value_0){
    this.obj[key] = value_0;
  }
  ;
  Stringmap.prototype['delete'] = function(key){
    delete this.obj[key];
  }
  ;
  Stringmap.prototype.keys = function(){
    return Object.getOwnPropertyNames(this.obj);
  }
  ;
  Stringmap.prototype.entries = function(){
    var keys_0 = this.keys();
    var map_0 = this;
    var nextIndex = 0;
    return {next:function(){
      if (nextIndex >= keys_0.length)
        return {done:true};
      var key = keys_0[nextIndex++];
      return {value:[key, map_0.get(key)], done:false};
    }
    };
  }
  ;
  if (!canHandleObjectCreateAndProto()) {
    Stringmap.prototype.createObject = function(){
      return {};
    }
    ;
    Stringmap.prototype.get = function(key){
      return this.obj[':' + key];
    }
    ;
    Stringmap.prototype.set = function(key, value_0){
      this.obj[':' + key] = value_0;
    }
    ;
    Stringmap.prototype['delete'] = function(key){
      delete this.obj[':' + key];
    }
    ;
    Stringmap.prototype.keys = function(){
      var result = [];
      for (var key in this.obj) {
        key.charCodeAt(0) == 58 && result.push(key.substring(1));
      }
      return result;
    }
    ;
  }
  return Stringmap;
}

function newJsMap(){
  $clinit_InternalJsMapFactory();
  return new jsMapCtor;
}

var jsMapCtor;
function $contains_3(this$static, key){
  return !(this$static.backingMap.get(key) === undefined);
}

function $get_6(this$static, key){
  return this$static.backingMap.get(key);
}

function $put_4(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap.get(key);
  this$static.backingMap.set(key, value_0 === undefined?null:value_0);
  if (oldValue === undefined) {
    ++this$static.size_0;
    structureChanged(this$static.host);
  }
   else {
    ++this$static.valueMod;
  }
  return oldValue;
}

function $remove_14(this$static, key){
  var value_0;
  value_0 = this$static.backingMap.get(key);
  if (value_0 === undefined) {
    ++this$static.valueMod;
  }
   else {
    this$static.backingMap['delete'](key);
    --this$static.size_0;
    structureChanged(this$static.host);
  }
  return value_0;
}

function InternalStringMap(host){
  this.backingMap = newJsMap();
  this.host = host;
}

defineClass(347, 1, {}, InternalStringMap);
_.iterator = function iterator_14(){
  return new InternalStringMap$1(this);
}
;
_.size_0 = 0;
_.valueMod = 0;
var Ljava_util_InternalStringMap_2_classLit = createForClass(347);
function InternalStringMap$1(this$0){
  this.this$01 = this$0;
  this.entries_0 = this.this$01.backingMap.entries();
  this.current = this.entries_0.next();
}

defineClass(173, 1, {}, InternalStringMap$1);
_.next_1 = function next_11(){
  return this.last = this.current , this.current = this.entries_0.next() , new InternalStringMap$2(this.this$01, this.last, this.this$01.valueMod);
}
;
_.hasNext_0 = function hasNext_11(){
  return !this.current.done;
}
;
_.remove_2 = function remove_32(){
  $remove_14(this.this$01, this.last.value[0]);
}
;
var Ljava_util_InternalStringMap$1_2_classLit = createForClass(173);
function $getValue(this$static){
  if (this$static.this$01.valueMod != this$static.val$lastValueMod3) {
    return $get_6(this$static.this$01, this$static.val$entry2.value[0]);
  }
  return this$static.val$entry2.value[1];
}

function InternalStringMap$2(this$0, val$entry, val$lastValueMod){
  this.this$01 = this$0;
  this.val$entry2 = val$entry;
  this.val$lastValueMod3 = val$lastValueMod;
}

defineClass(348, 439, $intern_15, InternalStringMap$2);
_.getKey = function getKey_2(){
  return this.val$entry2.value[0];
}
;
_.getValue = function getValue_2(){
  return $getValue(this);
}
;
_.setValue = function setValue_2(object){
  return $put_4(this.this$01, this.val$entry2.value[0], object);
}
;
_.val$lastValueMod3 = 0;
var Ljava_util_InternalStringMap$2_2_classLit = createForClass(348);
function NoSuchElementException(){
  RuntimeException.call(this);
}

function NoSuchElementException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(46, 9, $intern_5, NoSuchElementException, NoSuchElementException_0);
var Ljava_util_NoSuchElementException_2_classLit = createForClass(46);
function equals_19(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_22(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

function $add_6(this$static, newElement){
  !this$static.builder?(this$static.builder = new StringBuilder_0(this$static.prefix)):$append_7(this$static.builder, this$static.delimiter);
  $append_5(this$static.builder, newElement);
  return this$static;
}

function StringJoiner(prefix, suffix){
  this.delimiter = ', ';
  this.prefix = prefix;
  this.suffix = suffix;
  this.emptyValue = this.prefix + ('' + this.suffix);
}

defineClass(147, 1, {}, StringJoiner);
_.toString_0 = function toString_28(){
  return !this.builder?this.emptyValue:this.suffix.length == 0?this.builder.string:this.builder.string + ('' + this.suffix);
}
;
var Ljava_util_StringJoiner_2_classLit = createForClass(147);
function applySplice(array, index_0, deleteCount, arrayToAdd){
  Array.prototype.splice.apply(array, [index_0, deleteCount].concat(arrayToAdd));
}

function clone_0(array, toIndex){
  var result;
  result = array.slice(0, toIndex);
  return stampJavaTypeInfo_0(result, array);
}

function copy(src_0, srcOfs, dest, destOfs, len, overwrite){
  var batchEnd, batchStart, end;
  if (maskUndefined(src_0) === maskUndefined(dest)) {
    src_0 = src_0.slice(srcOfs, srcOfs + len);
    srcOfs = 0;
  }
  for (batchStart = srcOfs , end = srcOfs + len; batchStart < end;) {
    batchEnd = batchStart + 10000 < end?batchStart + 10000:end;
    len = batchEnd - batchStart;
    applySplice(dest, destOfs, overwrite?len:0, src_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
    destOfs += len;
  }
}

function createFrom(array, length_0){
  var result;
  result = new Array(length_0);
  return stampJavaTypeInfo_0(result, array);
}

function insertTo(array, index_0, value_0){
  array.splice(index_0, 0, value_0);
}

function insertTo_0(array, index_0, values){
  copy(values, 0, array, index_0, values.length, false);
}

function removeFrom(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function setLength(array, length_0){
  array.length = length_0;
}

function $clinit_EmulatedCharset(){
  $clinit_EmulatedCharset = emptyMethod;
  new EmulatedCharset$UtfCharset;
  new EmulatedCharset$LatinCharset('ISO-LATIN-1');
  new EmulatedCharset$LatinCharset('ISO-8859-1');
}

function EmulatedCharset(name_0){
  this.name_0 = name_0;
}

defineClass(148, 73, $intern_28);
var Ljavaemul_internal_EmulatedCharset_2_classLit = createForClass(148);
function EmulatedCharset$LatinCharset(name_0){
  EmulatedCharset.call(this, name_0);
}

defineClass(149, 148, $intern_28, EmulatedCharset$LatinCharset);
var Ljavaemul_internal_EmulatedCharset$LatinCharset_2_classLit = createForClass(149);
function $decodeString(bytes, len){
  var b, ch_0, charCount, chars, count, i, i0, outIdx;
  charCount = 0;
  for (i0 = 0; i0 < len;) {
    ++charCount;
    ch_0 = bytes[i0];
    if ((ch_0 & 192) == 128) {
      throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
     else if ((ch_0 & 128) == 0) {
      ++i0;
    }
     else if ((ch_0 & 224) == 192) {
      i0 += 2;
    }
     else if ((ch_0 & 240) == 224) {
      i0 += 3;
    }
     else if ((ch_0 & 248) == 240) {
      i0 += 4;
    }
     else {
      throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence'));
    }
    if (i0 > len) {
      throw toJs(new IndexOutOfBoundsException_0('Invalid UTF8 sequence'));
    }
  }
  chars = initUnidimensionalArray(C_classLit, $intern_24, 14, charCount, 15, 1);
  outIdx = 0;
  count = 0;
  for (i = 0; i < len;) {
    ch_0 = bytes[i++];
    if ((ch_0 & 128) == 0) {
      count = 1;
      ch_0 &= 127;
    }
     else if ((ch_0 & 224) == 192) {
      count = 2;
      ch_0 &= 31;
    }
     else if ((ch_0 & 240) == 224) {
      count = 3;
      ch_0 &= 15;
    }
     else if ((ch_0 & 248) == 240) {
      count = 4;
      ch_0 &= 7;
    }
     else if ((ch_0 & 252) == 248) {
      count = 5;
      ch_0 &= 3;
    }
    while (--count > 0) {
      b = bytes[i++];
      if ((b & 192) != 128) {
        throw toJs(new IllegalArgumentException_0('Invalid UTF8 sequence at ' + (i - 1) + ', byte=' + (b >>> 0).toString(16)));
      }
      ch_0 = ch_0 << 6 | b & 63;
    }
    outIdx += toChars(ch_0, chars, outIdx);
  }
  return chars;
}

function $encodeUtf8(bytes, ofs, codePoint){
  if (codePoint < 128) {
    bytes[ofs] = (codePoint & 127) << 24 >> 24;
    return 1;
  }
   else if (codePoint < 2048) {
    bytes[ofs++] = (codePoint >> 6 & 31 | 192) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 2;
  }
   else if (codePoint < $intern_17) {
    bytes[ofs++] = (codePoint >> 12 & 15 | 224) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 6 & 63 | 128) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 3;
  }
   else if (codePoint < $intern_18) {
    bytes[ofs++] = (codePoint >> 18 & 7 | 240) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 12 & 63 | 128) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 6 & 63 | 128) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 4;
  }
   else if (codePoint < $intern_21) {
    bytes[ofs++] = (codePoint >> 24 & 3 | 248) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 18 & 63 | 128) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 12 & 63 | 128) << 24 >> 24;
    bytes[ofs++] = (codePoint >> 6 & 63 | 128) << 24 >> 24;
    bytes[ofs] = (codePoint & 63 | 128) << 24 >> 24;
    return 5;
  }
  throw toJs(new IllegalArgumentException_0('Character out of range: ' + codePoint));
}

function $getBytes(){
  var byteCount, bytes, ch_0, i, i0, n, out;
  n = '    o---|###|###|###'.length;
  byteCount = 0;
  for (i0 = 0; i0 < n;) {
    ch_0 = codePointAt(i0, '    o---|###|###|###'.length);
    i0 += ch_0 >= $intern_17?2:1;
    ch_0 < 128?++byteCount:ch_0 < 2048?(byteCount += 2):ch_0 < $intern_17?(byteCount += 3):ch_0 < $intern_18?(byteCount += 4):ch_0 < $intern_21 && (byteCount += 5);
  }
  bytes = initUnidimensionalArray(B_classLit, $intern_24, 14, byteCount, 15, 1);
  out = 0;
  for (i = 0; i < n;) {
    ch_0 = codePointAt(i, '    o---|###|###|###'.length);
    i += ch_0 >= $intern_17?2:1;
    out += $encodeUtf8(bytes, out, ch_0);
  }
  return bytes;
}

function EmulatedCharset$UtfCharset(){
  EmulatedCharset.call(this, 'UTF-8');
}

defineClass(205, 148, $intern_28, EmulatedCharset$UtfCharset);
var Ljavaemul_internal_EmulatedCharset$UtfCharset_2_classLit = createForClass(205);
function checkCriticalArgument(expression){
  if (!expression) {
    throw toJs(new IllegalArgumentException);
  }
}

function checkCriticalArgument_0(expression, errorMessage){
  if (!expression) {
    throw toJs(new IllegalArgumentException_0(errorMessage));
  }
}

function checkCriticalElement(expression){
  if (!expression) {
    throw toJs(new NoSuchElementException);
  }
}

function checkCriticalElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalNotNull(reference){
  if (reference == null) {
    throw toJs(new NullPointerException);
  }
  return reference;
}

function checkCriticalNotNull_0(reference, errorMessage){
  if (reference == null) {
    throw toJs(new NullPointerException_0(errorMessage));
  }
}

function checkCriticalPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0));
  }
}

function checkCriticalPositionIndexes(start_0, end, size_0){
  if (start_0 < 0 || end > size_0) {
    throw toJs(new IndexOutOfBoundsException_0('fromIndex: ' + start_0 + ', toIndex: ' + end + ', size: ' + size_0));
  }
  if (start_0 > end) {
    throw toJs(new IllegalArgumentException_0('fromIndex: ' + start_0 + ' > toIndex: ' + end));
  }
}

function checkCriticalState(expression){
  if (!expression) {
    throw toJs(new IllegalStateException);
  }
}

function checkCriticalState_0(expression){
  if (!expression) {
    throw toJs(new IllegalStateException_0("Can't overwrite cause"));
  }
}

function checkCriticalStringBounds(end, length_0){
  if (end > length_0 || end < 0) {
    throw toJs(new StringIndexOutOfBoundsException('fromIndex: 0, toIndex: ' + end + ', length: ' + length_0));
  }
}

function checkNotNull(reference){
  checkCriticalNotNull(reference);
  return reference;
}

function setPropertySafe(map_0, key, value_0){
  try {
    map_0[key] = value_0;
  }
   catch (ignored) {
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++nextHashId);
}

var nextHashId = 0;
function $clinit_StringHashCache(){
  $clinit_StringHashCache = emptyMethod;
  back_1 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = hashCode | 0;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt_0(str, i++);
  }
  hashCode = hashCode | 0;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_StringHashCache();
  var hashCode, key, result;
  key = ':' + str;
  result = front[key];
  if (!(result === undefined)) {
    return result;
  }
  result = back_1[key];
  hashCode = result === undefined?compute(str):result;
  increment();
  front[key] = hashCode;
  return hashCode;
}

function increment(){
  if (count_0 == 256) {
    back_1 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_1, count_0 = 0, front;
defineClass(416, 1, {});
var Lplayn_core_Assets_2_classLit = createForClass(416);
defineClass(419, 1, {});
var Lplayn_core_Audio_2_classLit = createForClass(419);
function $draw(this$static, image, x_0, y_0){
  return $draw_0(this$static, image, x_0, y_0, image.width_1(), image.height_1());
}

function $draw_0(this$static, image, x_0, y_0, w, h){
  image.draw(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $toTexture(this$static, config){
  return $createTexture_0(this$static.image, config);
}

function Canvas_0(image){
  this.image = image;
  this.width_0 = $invScaled(image.scale_0, image.pixelWidth);
  this.height_0 = $invScaled(image.scale_0, image.pixelHeight);
  if (this.width_0 <= 0 || this.height_0 <= 0)
    throw toJs(new IllegalArgumentException_0('Canvas must be > 0 in width and height: ' + this.width_0 + 'x' + this.height_0));
}

defineClass(363, 1, $intern_30);
_.height_0 = 0;
_.width_0 = 0;
var Lplayn_core_Canvas_2_classLit = createForClass(363);
function Clock(){
}

defineClass(129, 1, {129:1}, Clock);
_.tick = 0;
var Lplayn_core_Clock_2_classLit = createForClass(129);
defineClass(33, 1, {33:1});
var Lplayn_core_Event_2_classLit = createForClass(33);
function $setFlag(this$static, flag){
  this$static.flags |= flag;
}

function Event$Input(time){
  this.flags = 0;
  this.time = time;
}

function modifierFlags(altP, ctrlP, metaP, shiftP){
  var flags;
  flags = 0;
  altP && (flags |= 2);
  ctrlP && (flags |= 4);
  metaP && (flags |= 16);
  shiftP && (flags |= 8);
  return flags;
}

defineClass(31, 33, {33:1, 31:1});
_.addFields = function addFields(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
}
;
_.name_1 = function name_2(){
  return 'Input';
}
;
_.toString_0 = function toString_29(){
  var builder;
  builder = $append_1(new StringBuilder_0(this.name_1()), 91);
  this.addFields(builder);
  return (builder.string += ']' , builder).string;
}
;
_.flags = 0;
_.time = 0;
var Lplayn_core_Event$Input_2_classLit = createForClass(31);
function Event$XY(time, x_0, y_0){
  Event$Input.call(this, time);
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(51, 31, {33:1, 31:1, 51:1, 58:1});
_.addFields = function addFields_0(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
}
;
_.name_1 = function name_3(){
  return 'XY';
}
;
_.x_0 = 0;
_.y_0 = 0;
var Lplayn_core_Event$XY_2_classLit = createForClass(51);
defineClass(426, 1, {});
var Lplayn_core_Exec_2_classLit = createForClass(426);
function $clinit_Reactor(){
  $clinit_Reactor = emptyMethod;
  DISPATCHING = new Cons(null, null);
}

function $addConnection(this$static, listener){
  if (!listener)
    throw toJs(new NullPointerException_0('Null listener'));
  return $addCons(this$static, new Cons(this$static, listener));
}

function $addCons(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$1(this$static, cons))):(this$static._listeners = insert(this$static._listeners, cons));
  return cons;
}

function $clearConnections(this$static){
  if (this$static._listeners == DISPATCHING)
    throw toJs(new IllegalStateException_0('Cannot clear connections while dispatching.'));
  this$static._listeners = null;
}

function $disconnect(this$static, cons){
  this$static._listeners == DISPATCHING?(this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$2(this$static, cons))):(this$static._listeners = remove_33(this$static._listeners, cons));
}

function $notify(this$static, notifier, a1, a2, a3){
  var cons, ex, exn, lners, run, sentinel, run_0;
  if (this$static._listeners == DISPATCHING) {
    this$static._pendingRuns = append(this$static._pendingRuns, new Reactor$4(this$static, notifier, a1, a2, a3));
    return;
  }
  lners = this$static._listeners;
  sentinel = DISPATCHING;
  this$static._listeners = sentinel;
  exn = null;
  try {
    for (cons = lners; cons; cons = cons.next_0) {
      try {
        notifier.notify(cons._ref._lner, a1, a2, a3);
      }
       catch ($e0) {
        $e0 = toJava($e0);
        if (instanceOf($e0, 9)) {
          ex = $e0;
          exn = ex;
        }
         else 
          throw toJs($e0);
      }
      cons._oneShot && $close(cons);
    }
  }
   finally {
    this$static._listeners = lners;
    while (run = (run_0 = this$static._pendingRuns , !!run_0 && (this$static._pendingRuns = run_0.next_0) , run_0)) {
      try {
        run.run();
      }
       catch ($e1) {
        $e1 = toJava($e1);
        if (instanceOf($e1, 9)) {
          ex = $e1;
          exn = ex;
        }
         else 
          throw toJs($e1);
      }
    }
  }
  if (exn)
    throw toJs(exn);
}

function append(head, action){
  if (!head)
    return action;
  head.next_0 = append(head.next_0, action);
  return head;
}

defineClass(423, 1, {});
var DISPATCHING;
var Lreact_Reactor_2_classLit = createForClass(423);
function $map(this$static, func){
  var sigh, xf;
  sigh = new Try$1(func);
  return xf = ($clinit_RPromise() , new RPromise) , $onComplete(this$static, new RFuture$9(xf, sigh)) , xf;
}

function $onComplete(this$static, slot){
  var result;
  result = this$static._result;
  result?$onEmit(slot, result):$addConnection(this$static, slot);
  return this$static;
}

defineClass(427, 423, {});
_.placeholderListener = function placeholderListener(){
  var p;
  p = ($clinit_Slots() , NOOP);
  return p;
}
;
var Lreact_RFuture_2_classLit = createForClass(427);
function $clinit_RPromise(){
  $clinit_RPromise = emptyMethod;
  $clinit_Reactor();
  COMPLETE = new RPromise$1;
}

function $complete(this$static, result){
  if (this$static._result)
    throw toJs(new IllegalStateException_0('Already completed'));
  this$static._result = result;
  try {
    $notify(this$static, COMPLETE, result, null, null);
  }
   finally {
    $clearConnections(this$static);
  }
}

function RPromise(){
  $clinit_RPromise();
}

defineClass(75, 427, {75:1}, RPromise);
_.fail = function fail(cause){
  $complete(this, new Try$Failure(cause));
}
;
_.result = function result_0(){
  return this._result;
}
;
_.succeed = function succeed(value_0){
  $complete(this, new Try$Success(value_0));
}
;
var COMPLETE;
var Lreact_RPromise_2_classLit = createForClass(75);
function $fail(this$static, cause){
  $invokeLater(this$static.this$01, new Exec$1$2(this$static, cause));
}

function $succeed(this$static, value_0){
  $invokeLater(this$static.this$01, new Exec$1$1(this$static, value_0));
}

function Exec$1(this$0){
  $clinit_RPromise();
  this.this$01 = this$0;
}

defineClass(263, 75, {75:1}, Exec$1);
_.fail = function fail_0(cause){
  $fail(this, cause);
}
;
_.succeed = function succeed_0(value_0){
  $succeed(this, value_0);
}
;
var Lplayn_core_Exec$1_2_classLit = createForClass(263);
function Exec$1$1(this$1, val$value){
  this.this$11 = this$1;
  this.val$value2 = val$value;
}

defineClass(264, 1, $intern_31, Exec$1$1);
_.run = function run_1(){
  $complete(this.this$11, new Try$Success(this.val$value2));
}
;
var Lplayn_core_Exec$1$1_2_classLit = createForClass(264);
function Exec$1$2(this$1, val$cause){
  this.this$11 = this$1;
  this.val$cause2 = val$cause;
}

defineClass(265, 1, $intern_31, Exec$1$2);
_.run = function run_2(){
  $complete(this.this$11, new Try$Failure(this.val$cause2));
}
;
var Lplayn_core_Exec$1$2_2_classLit = createForClass(265);
function $dispatch(this$static){
  var action, e, ii, ll;
  $addAll(this$static.running, this$static.pending);
  this$static.pending.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
  for (ii = 0 , ll = this$static.running.array.length; ii < ll; ii++) {
    action = $get(this$static.running, ii);
    try {
      action.run();
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 10)) {
        e = $e0;
        $reportError(this$static.plat, 'invokeLater Runnable failed: ' + action, e);
      }
       else 
        throw toJs($e0);
    }
  }
  this$static.running.array = initUnidimensionalArray(Ljava_lang_Object_2_classLit, $intern_3, 1, 0, 5, 1);
}

function $invokeLater(this$static, action){
  $add_0(this$static.pending, action);
}

function Exec$Default(plat){
  this.pending = new ArrayList;
  this.running = new ArrayList;
  this.plat = plat;
  $atPrio($addConnection(plat.frame_0, new Exec$Default$1(this)), 32767);
}

defineClass(261, 426, {}, Exec$Default);
var Lplayn_core_Exec$Default_2_classLit = createForClass(261);
defineClass(40, 1, $intern_32);
_.onChange = function onChange(value_0, oldValue){
  this.onEmit(value_0);
}
;
var Lreact_Slot_2_classLit = createForClass(40);
function Exec$Default$1(this$1){
  this.this$11 = this$1;
}

defineClass(262, 40, $intern_32, Exec$Default$1);
_.onEmit = function onEmit(unused){
  $dispatch(this.this$11);
}
;
var Lplayn_core_Exec$Default$1_2_classLit = createForClass(262);
function $checkError(this$static){
  var reported;
  reported = 0;
  if (this$static.checkErrors) {
    while (this$static.gl.getError() != 0) {
      reported += 1;
      $clinit_System();
    }
  }
  return reported > 0;
}

function $glGenTexture(this$static){
  $resizeIntBuffer(this$static.bufs);
  $glGenTextures(this$static, this$static.bufs.intBuffer);
  return this$static.bufs.intBuffer.intArray[0];
}

function $glUniform4fv(this$static, location_0, count, v){
  $setFloatBuffer(this$static.bufs, v, 4 * count);
  $glUniform4fv_0(this$static, location_0, count, this$static.bufs.floatBuffer);
}

function GL20(buffers, checkErrors){
  this.bufs = buffers;
  this.checkErrors = checkErrors;
}

defineClass(269, 1, {});
_.checkErrors = false;
var Lplayn_core_GL20_2_classLit = createForClass(269);
function $newCap(cap, length_0){
  var newLength;
  newLength = cap << 1;
  while (newLength < length_0) {
    newLength <<= 1;
  }
  return newLength;
}

function $resizeIntBuffer(this$static){
  var cap;
  cap = this$static.intBuffer.capacity;
  cap < 1?(this$static.intBuffer = $asIntBuffer($createByteBuffer($newCap(cap, 1) * 4))):$position(this$static.intBuffer);
  $limit(this$static.intBuffer, 1);
}

function $setFloatBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.floatBuffer.capacity;
  cap < length_0?(this$static.floatBuffer = new FloatBuffer($slice($createByteBuffer($newCap(cap, length_0) * 4)))):$position(this$static.floatBuffer);
  $limit(this$static.floatBuffer, length_0);
  $put_0(this$static.floatBuffer, source, length_0);
  $rewind(this$static.floatBuffer);
}

function $setShortBuffer(this$static, source, length_0){
  var cap;
  cap = this$static.shortBuffer.capacity;
  cap < length_0?(this$static.shortBuffer = $asShortBuffer($createByteBuffer($newCap(cap, length_0) * 2))):$position(this$static.shortBuffer);
  $limit(this$static.shortBuffer, length_0);
  $put_1(this$static.shortBuffer, source, length_0);
  $rewind(this$static.shortBuffer);
}

defineClass(271, 1, {});
var Lplayn_core_GL20$Buffers_2_classLit = createForClass(271);
function $begin(this$static){
  if (this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched begin()'));
  this$static.begun = true;
}

function $end(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' mismatched end()'));
  try {
    this$static.flush();
  }
   finally {
    this$static.begun = false;
  }
}

function $flush(this$static){
  if (!this$static.begun)
    throw toJs(new IllegalStateException_0($getSimpleName(this$static.___clazz) + ' flush() without begin()'));
}

defineClass(431, 1, $intern_30);
_.begin = function begin_0(fbufWidth, fbufHeight, flip){
  $begin(this);
}
;
_.flush = function flush(){
  $flush(this);
}
;
_.begun = false;
var Lplayn_core_GLBatch_2_classLit = createForClass(431);
function $activate(this$static){
  $glUseProgram(this$static.gl, this$static.id_0);
}

function $compileShader_0(this$static, type_0, shaderSource){
  var compiled, log_0, shader;
  shader = $glCreateShader(this$static.gl, type_0);
  if (shader == 0)
    throw toJs(new RuntimeException_0('Failed to create shader (' + type_0 + '): ' + this$static.gl.gl.getError()));
  $glShaderSource(this$static.gl, shader, shaderSource);
  $glCompileShader(this$static.gl, shader);
  compiled = initUnidimensionalArray(I_classLit, $intern_24, 14, 1, 15, 1);
  $glGetShaderiv(this$static.gl, shader, compiled);
  if (compiled[0] == 0) {
    log_0 = $glGetShaderInfoLog(this$static.gl, shader);
    $glDeleteShader(this$static.gl, shader);
    throw toJs(new RuntimeException_0('Failed to compile shader (' + type_0 + '): ' + log_0));
  }
  return shader;
}

function $getAttribLocation_0(this$static, name_0){
  var loc;
  loc = $glGetAttribLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function $getUniformLocation_0(this$static, name_0){
  var loc;
  loc = $glGetUniformLocation(this$static.gl, this$static.id_0, name_0);
  return loc;
}

function GLProgram(gl, vertexSource, fragmentSource){
  var fragmentShader, id_0, linkStatus, log_0, prog, program, sh, sh0, vertexShader;
  this.gl = gl;
  id_0 = 0;
  vertexShader = 0;
  fragmentShader = 0;
  try {
    id_0 = (program = gl.gl.createProgram() , $add_7(gl.programs, program));
    if (id_0 == 0)
      throw toJs(new RuntimeException_0('Failed to create program: ' + gl.gl.getError()));
    $checkError(gl);
    vertexShader = $compileShader_0(this, 35633, vertexSource);
    $glAttachShader(gl, id_0, vertexShader);
    $checkError(gl);
    fragmentShader = $compileShader_0(this, 35632, fragmentSource);
    $glAttachShader(gl, id_0, fragmentShader);
    $checkError(gl);
    $linkProgram(gl.gl, gl.programs[id_0]);
    linkStatus = initUnidimensionalArray(I_classLit, $intern_24, 14, 1, 15, 1);
    linkStatus[0] = $getProgramParameterb(gl.gl, gl.programs[id_0], 35714)?1:0;
    if (linkStatus[0] == 0) {
      log_0 = $getProgramInfoLog(gl.gl, gl.programs[id_0]);
      prog = $remove_15(gl.programs, id_0);
      $deleteProgram(gl.gl, prog);
      throw toJs(new RuntimeException_0('Failed to link program: ' + log_0));
    }
    this.id_0 = id_0;
    id_0 = vertexShader = fragmentShader = 0;
  }
   finally {
    id_0 != 0 && (prog = $remove_15(gl.programs, id_0) , $deleteProgram(gl.gl, prog));
    vertexShader != 0 && (sh0 = $remove_15(gl.shaders, vertexShader) , $deleteShader(gl.gl, sh0));
    fragmentShader != 0 && (sh = $remove_15(gl.shaders, fragmentShader) , $deleteShader(gl.gl, sh));
  }
}

defineClass(176, 1, $intern_30, GLProgram);
_.id_0 = 0;
var Lplayn_core_GLProgram_2_classLit = createForClass(176);
function $onFrame(this$static){
  var nextUpdate, paintTick, updateDt, updateRate, updateTick, updates;
  nextUpdate = this$static.nextUpdate;
  updateTick = $tick(this$static.plat);
  if (updateTick >= nextUpdate) {
    updateRate = this$static.updateRate;
    updates = 0;
    while (updateTick >= nextUpdate) {
      nextUpdate += updateRate;
      ++updates;
    }
    this$static.nextUpdate = nextUpdate;
    updateDt = updates * updateRate;
    this$static.updateClock.tick += updateDt;
    $update_0(this$static);
  }
  paintTick = $tick(this$static.plat);
  this$static.paintClock.tick = paintTick;
  $emit(this$static.paint, this$static.paintClock);
}

defineClass(215, 1, {});
_.nextUpdate = 0;
_.updateRate = 0;
var Lplayn_core_Game_2_classLit = createForClass(215);
function Game$1(this$0){
  this.this$01 = this$0;
}

defineClass(220, 40, $intern_32, Game$1);
_.onEmit = function onEmit_0(plat){
  var lastArg;
  $onFrame((lastArg = this , plat , lastArg).this$01);
}
;
var Lplayn_core_Game$1_2_classLit = createForClass(220);
function $colorTex(this$static){
  var canvas;
  if (!this$static.colorTex) {
    canvas = $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, 1), $scaledCeil(this$static.scale_0, 1));
    $fillRect_1(($setFillStyleWeb(canvas.ctx, cssColorString(-1)) , canvas), 0, 0, canvas.width_0, canvas.height_0);
    this$static.colorTex = $toTexture(canvas, ($clinit_Texture$Config() , UNMANAGED));
  }
  return this$static.colorTex;
}

function $createCanvas(this$static, width_0, height){
  return $createCanvasImpl(this$static, this$static.scale_0, $scaledCeil(this$static.scale_0, width_0), $scaledCeil(this$static.scale_0, height));
}

function $createTexture(this$static, config){
  var id_0, minFilter;
  id_0 = $glGenTexture(this$static.gl);
  $glBindTexture(this$static.gl, id_0);
  $glTexParameteri(this$static.gl, 10240, config.magFilter);
  minFilter = mipmapify(config.minFilter, config.mipmaps);
  $glTexParameteri(this$static.gl, 10241, minFilter);
  $glTexParameteri(this$static.gl, 10242, config.repeatX?10497:33071);
  $glTexParameteri(this$static.gl, 10243, config.repeatY?10497:33071);
  return id_0;
}

function $viewportChanged(this$static, pixelWidth, pixelHeight){
  this$static.viewPixelWidth = pixelWidth;
  this$static.viewPixelHeight = pixelHeight;
  this$static.viewSizeM.width_0 = $invScaled(this$static.scale_0, pixelWidth);
  this$static.viewSizeM.height_0 = $invScaled(this$static.scale_0, pixelHeight);
  $info_0(this$static.plat.log_0, 'viewPortChanged ' + pixelWidth + 'x' + pixelHeight + ' / ' + this$static.scale_0.factor + ' -> ' + this$static.viewSize);
}

function Graphics(plat, gl, scale){
  this.viewSizeM = new Dimension;
  this.viewSize = this.viewSizeM;
  this.defaultRenderTarget = new Graphics$1(this, this);
  this.plat = plat;
  this.gl = gl;
  this.scale_0 = scale;
}

function mipmapify(filter, mipmaps){
  if (!mipmaps)
    return filter;
  switch (filter) {
    case 9728:
      return 9984;
    case 9729:
      return 9985;
    default:return filter;
  }
}

defineClass(225, 1, {});
_.viewPixelHeight = 0;
_.viewPixelWidth = 0;
var Lplayn_core_Graphics_2_classLit = createForClass(225);
function $bind(this$static){
  $glBindFramebuffer(this$static.gfx.gl);
  $glViewport(this$static.gfx.gl, this$static.this$01.viewPixelWidth, this$static.this$01.viewPixelHeight);
}

defineClass(227, 1, $intern_30);
_.toString_0 = function toString_30(){
  return '[id=0, size=' + this.this$01.viewPixelWidth + 'x' + this.this$01.viewPixelHeight + ' @ ' + this.this$01.scale_0.factor + 'x' + this.this$01.scale_0.factor + ', flip=' + true + ']';
}
;
var Lplayn_core_RenderTarget_2_classLit = createForClass(227);
function Graphics$1(this$0, $anonymous0){
  this.this$01 = this$0;
  this.gfx = $anonymous0;
}

defineClass(228, 227, $intern_30, Graphics$1);
var Lplayn_core_Graphics$1_2_classLit = createForClass(228);
defineClass(436, 1, {});
var Lplayn_core_TileSource_2_classLit = createForClass(436);
function $$init_1(this$static){
  this$static.texconf = ($clinit_Texture$Config() , DEFAULT);
}

function $createTexture_0(this$static, config){
  var tex, texHeight, texWidth;
  if (!this$static.state.result())
    throw toJs(new IllegalStateException_0('Cannot create texture from unready image: ' + this$static));
  texWidth = $toTexWidth(config, this$static.pixelWidth);
  texHeight = $toTexHeight(config, this$static.pixelHeight);
  if (texWidth <= 0 || texHeight <= 0)
    throw toJs(new IllegalArgumentException_0('Invalid texture size: ' + texWidth + 'x' + texHeight + ' from: ' + this$static));
  tex = new Texture(this$static.gfx, $createTexture(this$static.gfx, config), config, texWidth, texHeight, this$static.scale_0, $invScaled(this$static.scale_0, this$static.pixelWidth), $invScaled(this$static.scale_0, this$static.pixelHeight));
  $update(tex, this$static);
  return tex;
}

function $region(this$static, rx, ry, rwidth, rheight){
  return new Image$2(this$static, rx, ry, rwidth, rheight);
}

function $texture(this$static){
  (!this$static.texture || this$static.texture.disposed) && (this$static.texture = $createTexture_0(this$static, this$static.texconf));
  return this$static.texture;
}

defineClass(171, 436, {});
_.height_1 = function height_0(){
  return $invScaled(this.scale_0, this.pixelHeight);
}
;
_.width_1 = function width_1(){
  return $invScaled(this.scale_0, this.pixelWidth);
}
;
var Lplayn_core_Image_2_classLit = createForClass(171);
defineClass(438, 436, {});
var Lplayn_core_Image$Region_2_classLit = createForClass(438);
function Image$2(val$image, val$rx, val$ry, val$rwidth, val$rheight){
  this.val$image2 = val$image;
  this.val$rx3 = val$rx;
  this.val$ry4 = val$ry;
  this.val$rwidth5 = val$rwidth;
  this.val$rheight6 = val$rheight;
}

defineClass(329, 438, {}, Image$2);
_.draw = function draw(ctx, x_0, y_0, width_0, height){
  $draw_4(this.val$image2, ctx, x_0, y_0, width_0, height, this.val$rx3, this.val$ry4, this.val$rwidth5, this.val$rheight6);
}
;
_.height_1 = function height_1(){
  return this.val$rheight6;
}
;
_.width_1 = function width_2(){
  return this.val$rwidth5;
}
;
_.val$rheight6 = 0;
_.val$rwidth5 = 0;
_.val$rx3 = 0;
_.val$ry4 = 0;
var Lplayn_core_Image$2_2_classLit = createForClass(329);
function $fail_0(this$static, error){
  this$static.pixelWidth == 0 && (this$static.pixelWidth = 50);
  this$static.pixelHeight == 0 && (this$static.pixelHeight = 50);
  $setBitmap(this$static, $createErrorBitmap(this$static.pixelWidth, this$static.pixelHeight));
  this$static.state.fail(error);
}

function $succeed_0(this$static, data_0){
  this$static.scale_0 = data_0.scale_0;
  this$static.pixelWidth = data_0.pixelWidth;
  this$static.pixelHeight = data_0.pixelHeight;
  $setBitmap(this$static, data_0.bitmap);
  this$static.state.succeed(this$static);
}

function ImageImpl(gfx, scale, pixelWidth, pixelHeight, bitmap){
  $$init_1(this);
  this.gfx = gfx;
  this.state = ($clinit_Reactor() , $clinit_Reactor() , new RFuture$1(new Try$Success(this)));
  if (pixelWidth == 0 || pixelHeight == 0)
    throw toJs(new IllegalArgumentException_0('Invalid size for ready image: ' + pixelWidth + 'x' + pixelHeight + ' bitmap: ' + bitmap));
  this.source = '<canvas>';
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
  this.img = bitmap;
}

function ImageImpl_0(gfx, state, preScale, preWidth, preHeight, source){
  $$init_1(this);
  this.gfx = gfx;
  this.state = state;
  this.source = source;
  this.scale_0 = preScale;
  this.pixelWidth = preWidth;
  this.pixelHeight = preHeight;
}

defineClass(172, 171, {});
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl_2_classLit = createForClass(172);
function ImageImpl$Data(scale, bitmap, pixelWidth, pixelHeight){
  this.bitmap = bitmap;
  this.scale_0 = scale;
  this.pixelWidth = pixelWidth;
  this.pixelHeight = pixelHeight;
}

defineClass(342, 1, {}, ImageImpl$Data);
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_ImageImpl$Data_2_classLit = createForClass(342);
defineClass(230, 1, {});
var Lplayn_core_Input_2_classLit = createForClass(230);
function $clinit_Key(){
  $clinit_Key = emptyMethod;
  A = new Key('A', 0);
  B = new Key('B', 1);
  C = new Key('C', 2);
  D = new Key('D', 3);
  E_0 = new Key('E', 4);
  F_0 = new Key('F', 5);
  G = new Key('G', 6);
  H = new Key('H', 7);
  I = new Key('I', 8);
  J = new Key('J', 9);
  K = new Key('K', 10);
  L = new Key('L', 11);
  M = new Key('M', 12);
  N = new Key('N', 13);
  O = new Key('O', 14);
  P = new Key('P', 15);
  Q = new Key('Q', 16);
  R = new Key('R', 17);
  S = new Key('S', 18);
  T = new Key('T', 19);
  U = new Key('U', 20);
  V = new Key('V', 21);
  W = new Key('W', 22);
  X = new Key('X', 23);
  Y = new Key('Y', 24);
  Z = new Key('Z', 25);
  K0 = new Key('K0', 26);
  K1 = new Key('K1', 27);
  K2 = new Key('K2', 28);
  K3 = new Key('K3', 29);
  K4 = new Key('K4', 30);
  K5 = new Key('K5', 31);
  K6 = new Key('K6', 32);
  K7 = new Key('K7', 33);
  K8 = new Key('K8', 34);
  K9 = new Key('K9', 35);
  NP0 = new Key('NP0', 36);
  NP1 = new Key('NP1', 37);
  NP2 = new Key('NP2', 38);
  NP3 = new Key('NP3', 39);
  NP4 = new Key('NP4', 40);
  NP5 = new Key('NP5', 41);
  NP6 = new Key('NP6', 42);
  NP7 = new Key('NP7', 43);
  NP8 = new Key('NP8', 44);
  NP9 = new Key('NP9', 45);
  NP_ADD = new Key('NP_ADD', 46);
  NP_DECIMAL = new Key('NP_DECIMAL', 47);
  NP_DELETE = new Key('NP_DELETE', 48);
  NP_DIVIDE = new Key('NP_DIVIDE', 49);
  NP_MULTIPLY = new Key('NP_MULTIPLY', 50);
  NP_NUM_LOCK = new Key('NP_NUM_LOCK', 51);
  NP_SUBTRACT = new Key('NP_SUBTRACT', 52);
  NP_DOWN = new Key('NP_DOWN', 53);
  NP_LEFT = new Key('NP_LEFT', 54);
  NP_RIGHT = new Key('NP_RIGHT', 55);
  NP_UP = new Key('NP_UP', 56);
  F1 = new Key('F1', 57);
  F2 = new Key('F2', 58);
  F3 = new Key('F3', 59);
  F4 = new Key('F4', 60);
  F5 = new Key('F5', 61);
  F6 = new Key('F6', 62);
  F7 = new Key('F7', 63);
  F8 = new Key('F8', 64);
  F9 = new Key('F9', 65);
  F10 = new Key('F10', 66);
  F11 = new Key('F11', 67);
  F12 = new Key('F12', 68);
  AMPERSAND = new Key('AMPERSAND', 69);
  ASTERISK = new Key('ASTERISK', 70);
  AT = new Key('AT', 71);
  BACKQUOTE = new Key('BACKQUOTE', 72);
  BACKSLASH = new Key('BACKSLASH', 73);
  BANG = new Key('BANG', 74);
  CIRCUMFLEX = new Key('CIRCUMFLEX', 75);
  COLON = new Key('COLON', 76);
  COMMA = new Key('COMMA', 77);
  DOLLAR = new Key('DOLLAR', 78);
  DOUBLE_QUOTE = new Key('DOUBLE_QUOTE', 79);
  EQUALS = new Key('EQUALS', 80);
  GREATER = new Key('GREATER', 81);
  HASH = new Key('HASH', 82);
  LEFT_BRACE = new Key('LEFT_BRACE', 83);
  LEFT_BRACKET = new Key('LEFT_BRACKET', 84);
  LEFT_PAREN = new Key('LEFT_PAREN', 85);
  LESS = new Key('LESS', 86);
  MINUS = new Key('MINUS', 87);
  MULTIPLY = new Key('MULTIPLY', 88);
  PERCENT = new Key('PERCENT', 89);
  PERIOD = new Key('PERIOD', 90);
  PLUS = new Key('PLUS', 91);
  QUOTE = new Key('QUOTE', 92);
  RIGHT_BRACE = new Key('RIGHT_BRACE', 93);
  RIGHT_BRACKET = new Key('RIGHT_BRACKET', 94);
  RIGHT_PAREN = new Key('RIGHT_PAREN', 95);
  SEMICOLON = new Key('SEMICOLON', 96);
  SLASH = new Key('SLASH', 97);
  SPACE = new Key('SPACE', 98);
  TILDE = new Key('TILDE', 99);
  QUESTION_MARK = new Key('QUESTION_MARK', 100);
  UNDERSCORE = new Key('UNDERSCORE', 101);
  VERTICAL_BAR = new Key('VERTICAL_BAR', 102);
  ALT = new Key('ALT', 103);
  CONTROL = new Key('CONTROL', 104);
  CAPS_LOCK = new Key('CAPS_LOCK', 105);
  SHIFT = new Key('SHIFT', 106);
  META = new Key('META', 107);
  DOWN = new Key('DOWN', 108);
  END = new Key('END', 109);
  HOME = new Key('HOME', 110);
  LEFT = new Key('LEFT', 111);
  PAGE_UP = new Key('PAGE_UP', 112);
  PAGE_DOWN = new Key('PAGE_DOWN', 113);
  RIGHT = new Key('RIGHT', 114);
  UP = new Key('UP', 115);
  BACKSPACE = new Key('BACKSPACE', 116);
  DELETE = new Key('DELETE', 117);
  ENTER = new Key('ENTER', 118);
  INSERT = new Key('INSERT', 119);
  TAB = new Key('TAB', 120);
  ESCAPE = new Key('ESCAPE', 121);
  PAUSE = new Key('PAUSE', 122);
  PRINT_SCREEN = new Key('PRINT_SCREEN', 123);
  SCROLL_LOCK = new Key('SCROLL_LOCK', 124);
  WINDOWS = new Key('WINDOWS', 125);
  MEDIA_CLOSE = new Key('MEDIA_CLOSE', 126);
  MEDIA_EJECT = new Key('MEDIA_EJECT', 127);
  MEDIA_FAST_FORWARD = new Key('MEDIA_FAST_FORWARD', 128);
  MEDIA_NEXT = new Key('MEDIA_NEXT', 129);
  MEDIA_PAUSE = new Key('MEDIA_PAUSE', 130);
  MEDIA_PLAY = new Key('MEDIA_PLAY', 131);
  MEDIA_PLAY_PAUSE = new Key('MEDIA_PLAY_PAUSE', 132);
  MEDIA_PREVIOUS = new Key('MEDIA_PREVIOUS', 133);
  MEDIA_RECORD = new Key('MEDIA_RECORD', 134);
  MEDIA_REWIND = new Key('MEDIA_REWIND', 135);
  MEDIA_STOP = new Key('MEDIA_STOP', 136);
  BLUE = new Key('BLUE', 137);
  GREEN = new Key('GREEN', 138);
  RED = new Key('RED', 139);
  YELLOW = new Key('YELLOW', 140);
  APP_SWITCH = new Key('APP_SWITCH', 141);
  AVR_INPUT = new Key('AVR_INPUT', 142);
  AVR_POWER = new Key('AVR_POWER', 143);
  BACK = new Key('BACK', 144);
  BOOKMARK = new Key('BOOKMARK', 145);
  BREAK = new Key('BREAK', 146);
  BUTTON_1 = new Key('BUTTON_1', 147);
  BUTTON_2 = new Key('BUTTON_2', 148);
  BUTTON_3 = new Key('BUTTON_3', 149);
  BUTTON_4 = new Key('BUTTON_4', 150);
  BUTTON_5 = new Key('BUTTON_5', 151);
  BUTTON_6 = new Key('BUTTON_6', 152);
  BUTTON_7 = new Key('BUTTON_7', 153);
  BUTTON_8 = new Key('BUTTON_8', 154);
  BUTTON_9 = new Key('BUTTON_9', 155);
  BUTTON_10 = new Key('BUTTON_10', 156);
  BUTTON_11 = new Key('BUTTON_11', 157);
  BUTTON_12 = new Key('BUTTON_12', 158);
  BUTTON_13 = new Key('BUTTON_13', 159);
  BUTTON_14 = new Key('BUTTON_14', 160);
  BUTTON_15 = new Key('BUTTON_15', 161);
  BUTTON_16 = new Key('BUTTON_16', 162);
  BUTTON_A = new Key('BUTTON_A', 163);
  BUTTON_B = new Key('BUTTON_B', 164);
  BUTTON_C = new Key('BUTTON_C', 165);
  BUTTON_L1 = new Key('BUTTON_L1', 166);
  BUTTON_L2 = new Key('BUTTON_L2', 167);
  BUTTON_MODE = new Key('BUTTON_MODE', 168);
  BUTTON_R1 = new Key('BUTTON_R1', 169);
  BUTTON_R2 = new Key('BUTTON_R2', 170);
  BUTTON_SELECT = new Key('BUTTON_SELECT', 171);
  BUTTON_START = new Key('BUTTON_START', 172);
  BUTTON_THUMBL = new Key('BUTTON_THUMBL', 173);
  BUTTON_THUMBR = new Key('BUTTON_THUMBR', 174);
  BUTTON_X = new Key('BUTTON_X', 175);
  BUTTON_Y = new Key('BUTTON_Y', 176);
  BUTTON_Z = new Key('BUTTON_Z', 177);
  CALL = new Key('CALL', 178);
  CAMERA = new Key('CAMERA', 179);
  CAPTIONS = new Key('CAPTIONS', 180);
  CHANNEL_DOWN = new Key('CHANNEL_DOWN', 181);
  CHANNEL_UP = new Key('CHANNEL_UP', 182);
  CLEAR = new Key('CLEAR', 183);
  DPAD_CENTER = new Key('DPAD_CENTER', 184);
  DPAD_DOWN = new Key('DPAD_DOWN', 185);
  DPAD_LEFT = new Key('DPAD_LEFT', 186);
  DPAD_RIGHT = new Key('DPAD_RIGHT', 187);
  DPAD_UP = new Key('DPAD_UP', 188);
  DVR = new Key('DVR', 189);
  ENDCALL = new Key('ENDCALL', 190);
  ENVELOPE = new Key('ENVELOPE', 191);
  EXPLORER = new Key('EXPLORER', 192);
  FOCUS = new Key('FOCUS', 193);
  FORWARD = new Key('FORWARD', 194);
  FORWARD_DEL = new Key('FORWARD_DEL', 195);
  FUNCTION = new Key('FUNCTION', 196);
  GUIDE = new Key('GUIDE', 197);
  HEADSETHOOK = new Key('HEADSETHOOK', 198);
  INFO = new Key('INFO', 199);
  MENU = new Key('MENU', 200);
  MUTE = new Key('MUTE', 201);
  NOTIFICATION = new Key('NOTIFICATION', 202);
  NUM = new Key('NUM', 203);
  PICTSYMBOLS = new Key('PICTSYMBOLS', 204);
  POWER = new Key('POWER', 205);
  SEARCH = new Key('SEARCH', 206);
  SETTINGS = new Key('SETTINGS', 207);
  SOFT_LEFT = new Key('SOFT_LEFT', 208);
  SOFT_RIGHT = new Key('SOFT_RIGHT', 209);
  STAR = new Key('STAR', 210);
  STB_INPUT = new Key('STB_INPUT', 211);
  STB_POWER = new Key('STB_POWER', 212);
  SWITCH_CHARSET = new Key('SWITCH_CHARSET', 213);
  SYM = new Key('SYM', 214);
  SYSRQ = new Key('SYSRQ', 215);
  TV = new Key('TV', 216);
  TV_INPUT = new Key('TV_INPUT', 217);
  TV_POWER = new Key('TV_POWER', 218);
  VOLUME_DOWN = new Key('VOLUME_DOWN', 219);
  VOLUME_MUTE = new Key('VOLUME_MUTE', 220);
  VOLUME_UP = new Key('VOLUME_UP', 221);
  WINDOW = new Key('WINDOW', 222);
  ZOOM_IN = new Key('ZOOM_IN', 223);
  ZOOM_OUT = new Key('ZOOM_OUT', 224);
  UNKNOWN = new Key('UNKNOWN', 225);
}

function Key(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_9(){
  $clinit_Key();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Key_2_classLit, 1), $intern_1, 4, 0, [A, B, C, D, E_0, F_0, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_MULTIPLY, NP_NUM_LOCK, NP_SUBTRACT, NP_DOWN, NP_LEFT, NP_RIGHT, NP_UP, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, AMPERSAND, ASTERISK, AT, BACKQUOTE, BACKSLASH, BANG, CIRCUMFLEX, COLON, COMMA, DOLLAR, DOUBLE_QUOTE, EQUALS, GREATER, HASH, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, MINUS, MULTIPLY, PERCENT, PERIOD, PLUS, QUOTE, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, SEMICOLON, SLASH, SPACE, TILDE, QUESTION_MARK, UNDERSCORE, VERTICAL_BAR, ALT, CONTROL, CAPS_LOCK, SHIFT, META, DOWN, END, HOME, LEFT, PAGE_UP, PAGE_DOWN, RIGHT, UP, BACKSPACE, DELETE, ENTER, INSERT, TAB, ESCAPE, PAUSE, PRINT_SCREEN, SCROLL_LOCK, WINDOWS, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, BLUE, GREEN, RED, YELLOW, APP_SWITCH, AVR_INPUT, AVR_POWER, BACK, BOOKMARK, BREAK, BUTTON_1, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, CALL, CAMERA, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CLEAR, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, ENDCALL, ENVELOPE, EXPLORER, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, GUIDE, HEADSETHOOK, INFO, MENU, MUTE, NOTIFICATION, NUM, PICTSYMBOLS, POWER, SEARCH, SETTINGS, SOFT_LEFT, SOFT_RIGHT, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, TV, TV_INPUT, TV_POWER, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, WINDOW, ZOOM_IN, ZOOM_OUT, UNKNOWN]);
}

defineClass(4, 6, {3:1, 8:1, 6:1, 4:1}, Key);
var A, ALT, AMPERSAND, APP_SWITCH, ASTERISK, AT, AVR_INPUT, AVR_POWER, B, BACK, BACKQUOTE, BACKSLASH, BACKSPACE, BANG, BLUE, BOOKMARK, BREAK, BUTTON_1, BUTTON_10, BUTTON_11, BUTTON_12, BUTTON_13, BUTTON_14, BUTTON_15, BUTTON_16, BUTTON_2, BUTTON_3, BUTTON_4, BUTTON_5, BUTTON_6, BUTTON_7, BUTTON_8, BUTTON_9, BUTTON_A, BUTTON_B, BUTTON_C, BUTTON_L1, BUTTON_L2, BUTTON_MODE, BUTTON_R1, BUTTON_R2, BUTTON_SELECT, BUTTON_START, BUTTON_THUMBL, BUTTON_THUMBR, BUTTON_X, BUTTON_Y, BUTTON_Z, C, CALL, CAMERA, CAPS_LOCK, CAPTIONS, CHANNEL_DOWN, CHANNEL_UP, CIRCUMFLEX, CLEAR, COLON, COMMA, CONTROL, D, DELETE, DOLLAR, DOUBLE_QUOTE, DOWN, DPAD_CENTER, DPAD_DOWN, DPAD_LEFT, DPAD_RIGHT, DPAD_UP, DVR, E_0, END, ENDCALL, ENTER, ENVELOPE, EQUALS, ESCAPE, EXPLORER, F_0, F1, F10, F11, F12, F2, F3, F4, F5, F6, F7, F8, F9, FOCUS, FORWARD, FORWARD_DEL, FUNCTION, G, GREATER, GREEN, GUIDE, H, HASH, HEADSETHOOK, HOME, I, INFO, INSERT, J, K, K0, K1, K2, K3, K4, K5, K6, K7, K8, K9, L, LEFT, LEFT_BRACE, LEFT_BRACKET, LEFT_PAREN, LESS, M, MEDIA_CLOSE, MEDIA_EJECT, MEDIA_FAST_FORWARD, MEDIA_NEXT, MEDIA_PAUSE, MEDIA_PLAY, MEDIA_PLAY_PAUSE, MEDIA_PREVIOUS, MEDIA_RECORD, MEDIA_REWIND, MEDIA_STOP, MENU, META, MINUS, MULTIPLY, MUTE, N, NOTIFICATION, NP0, NP1, NP2, NP3, NP4, NP5, NP6, NP7, NP8, NP9, NP_ADD, NP_DECIMAL, NP_DELETE, NP_DIVIDE, NP_DOWN, NP_LEFT, NP_MULTIPLY, NP_NUM_LOCK, NP_RIGHT, NP_SUBTRACT, NP_UP, NUM, O, P, PAGE_DOWN, PAGE_UP, PAUSE, PERCENT, PERIOD, PICTSYMBOLS, PLUS, POWER, PRINT_SCREEN, Q, QUESTION_MARK, QUOTE, R, RED, RIGHT, RIGHT_BRACE, RIGHT_BRACKET, RIGHT_PAREN, S, SCROLL_LOCK, SEARCH, SEMICOLON, SETTINGS, SHIFT, SLASH, SOFT_LEFT, SOFT_RIGHT, SPACE, STAR, STB_INPUT, STB_POWER, SWITCH_CHARSET, SYM, SYSRQ, T, TAB, TILDE, TV, TV_INPUT, TV_POWER, U, UNDERSCORE, UNKNOWN, UP, V, VERTICAL_BAR, VOLUME_DOWN, VOLUME_MUTE, VOLUME_UP, W, WINDOW, WINDOWS, X, Y, YELLOW, Z, ZOOM_IN, ZOOM_OUT;
var Lplayn_core_Key_2_classLit = createForEnum(4, values_9);
function Keyboard$Event(time){
  Event$Input.call(this, time);
}

defineClass(96, 31, $intern_33);
var Lplayn_core_Keyboard$Event_2_classLit = createForClass(96);
function Keyboard$KeyEvent(time, key, down){
  Keyboard$Event.call(this, time);
  this.key_0 = key;
  this.down = down;
}

defineClass(109, 96, {33:1, 31:1, 96:1, 109:1}, Keyboard$KeyEvent);
_.addFields = function addFields_1(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_8($append_7($append_6((builder.string += ', key=' , builder), this.key_0), ', down='), this.down);
}
;
_.name_1 = function name_4(){
  return 'Key';
}
;
_.down = false;
var Lplayn_core_Keyboard$KeyEvent_2_classLit = createForClass(109);
function Keyboard$TypedEvent(time, typedChar){
  Keyboard$Event.call(this, time);
  this.typedChar = typedChar;
}

defineClass(359, 96, $intern_33, Keyboard$TypedEvent);
_.addFields = function addFields_2(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_1((builder.string += ', typedChar=' , builder), this.typedChar);
}
;
_.name_1 = function name_5(){
  return 'Typed';
}
;
_.typedChar = 0;
var Lplayn_core_Keyboard$TypedEvent_2_classLit = createForClass(359);
function $debug(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , DEBUG), msg, null);
}

function $error(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , ERROR), msg, null);
}

function $error_0(this$static, e){
  $log(this$static, ($clinit_Log$Level() , ERROR), 'init()', e);
}

function $info(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $info_0(this$static, msg){
  $log(this$static, ($clinit_Log$Level() , INFO_0), msg, null);
}

function $log(this$static, level, msg, e){
  var lmsg;
  level.ordinal >= this$static.minLevel.ordinal && (lmsg = level + ': ' + msg , !!e && (lmsg += ': ' + e.getMessage()) , $clinit_System() , !!e && $printStackTraceImpl(e, out_0, '') , $wnd.console && $wnd.console.info && (e != null?$wnd.console.info(lmsg, e):$wnd.console.info(lmsg)) , undefined , undefined);
}

function $warn(this$static, msg, e){
  $log(this$static, ($clinit_Log$Level() , WARN), msg, e);
}

defineClass(258, 1, {});
var Lplayn_core_Log_2_classLit = createForClass(258);
function $clinit_Log$Level(){
  $clinit_Log$Level = emptyMethod;
  DEBUG = new Log$Level('DEBUG', 0);
  INFO_0 = new Log$Level('INFO', 1);
  WARN = new Log$Level('WARN', 2);
  ERROR = new Log$Level('ERROR', 3);
}

function Log$Level(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_10(){
  $clinit_Log$Level();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Log$Level_2_classLit, 1), $intern_1, 74, 0, [DEBUG, INFO_0, WARN, ERROR]);
}

defineClass(74, 6, {3:1, 8:1, 6:1, 74:1}, Log$Level);
var DEBUG, ERROR, INFO_0, WARN;
var Lplayn_core_Log$Level_2_classLit = createForEnum(74, values_10);
function Mouse$Event(time, x_0, y_0){
  Event$XY.call(this, time, x_0, y_0);
}

defineClass(65, 51, $intern_34);
var Lplayn_core_Mouse$Event_2_classLit = createForClass(65);
function Mouse$ButtonEvent(time, x_0, y_0, button, down){
  Mouse$Event.call(this, time, x_0, y_0);
  this.button_0 = button;
  this.down = down;
}

defineClass(110, 65, {33:1, 31:1, 51:1, 110:1, 65:1, 58:1}, Mouse$ButtonEvent);
_.addFields = function addFields_3(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_8($append_7($append_6((builder.string += ', id=' , builder), this.button_0), ', down='), this.down);
}
;
_.name_1 = function name_6(){
  return 'Button';
}
;
_.down = false;
var Lplayn_core_Mouse$ButtonEvent_2_classLit = createForClass(110);
function $clinit_Mouse$ButtonEvent$Id(){
  $clinit_Mouse$ButtonEvent$Id = emptyMethod;
  LEFT_0 = new Mouse$ButtonEvent$Id('LEFT', 0);
  RIGHT_0 = new Mouse$ButtonEvent$Id('RIGHT', 1);
  MIDDLE = new Mouse$ButtonEvent$Id('MIDDLE', 2);
  X1 = new Mouse$ButtonEvent$Id('X1', 3);
  X2 = new Mouse$ButtonEvent$Id('X2', 4);
}

function Mouse$ButtonEvent$Id(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_11(){
  $clinit_Mouse$ButtonEvent$Id();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Mouse$ButtonEvent$Id_2_classLit, 1), $intern_1, 66, 0, [LEFT_0, RIGHT_0, MIDDLE, X1, X2]);
}

defineClass(66, 6, {3:1, 8:1, 6:1, 66:1}, Mouse$ButtonEvent$Id);
var LEFT_0, MIDDLE, RIGHT_0, X1, X2;
var Lplayn_core_Mouse$ButtonEvent$Id_2_classLit = createForEnum(66, values_11);
function Mouse$MotionEvent(time, x_0, y_0, dx, dy){
  Mouse$Event.call(this, time, x_0, y_0);
  this.dx = dx;
  this.dy = dy;
}

defineClass(360, 65, $intern_34, Mouse$MotionEvent);
_.addFields = function addFields_4(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3((builder.string += ', dx=' , builder), this.dx), ', dy='), this.dy);
}
;
_.name_1 = function name_7(){
  return 'MotionEvent';
}
;
_.dx = 0;
_.dy = 0;
var Lplayn_core_Mouse$MotionEvent_2_classLit = createForClass(360);
function Mouse$WheelEvent(time, x_0, y_0, velocity){
  Mouse$Event.call(this, time, x_0, y_0);
  this.velocity = velocity;
}

defineClass(361, 65, $intern_34, Mouse$WheelEvent);
_.addFields = function addFields_5(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3((builder.string += ', velocity=' , builder), this.velocity);
}
;
_.name_1 = function name_8(){
  return 'Wheel';
}
;
_.velocity = 0;
var Lplayn_core_Mouse$WheelEvent_2_classLit = createForClass(361);
function $dispatchEvent(this$static, signal, event_0){
  var cause;
  try {
    $notify(signal, ($clinit_AbstractSignal() , EMIT), event_0, null, null);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      cause = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Event dispatch failure', cause);
    }
     else 
      throw toJs($e0);
  }
}

function $emitFrame(this$static){
  var e;
  try {
    $emit(this$static.frame_0, this$static);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $emit(this$static.errors, new Platform$Error);
      $warn(this$static.log_0, 'Frame tick exception', e);
    }
     else 
      throw toJs($e0);
  }
}

function $reportError(this$static, message, cause){
  $emit(this$static.errors, new Platform$Error);
  $warn(this$static.log_0, message, cause);
}

defineClass(120, 1, {120:1});
var Lplayn_core_Platform_2_classLit = createForClass(120);
function Platform$Error(){
}

defineClass(121, 1, {}, Platform$Error);
var Lplayn_core_Platform$Error_2_classLit = createForClass(121);
function $clinit_Platform$Lifecycle(){
  $clinit_Platform$Lifecycle = emptyMethod;
  PAUSE_0 = new Platform$Lifecycle('PAUSE', 0);
  RESUME = new Platform$Lifecycle('RESUME', 1);
  EXIT = new Platform$Lifecycle('EXIT', 2);
}

function Platform$Lifecycle(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_12(){
  $clinit_Platform$Lifecycle();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Platform$Lifecycle_2_classLit, 1), $intern_1, 90, 0, [PAUSE_0, RESUME, EXIT]);
}

defineClass(90, 6, {3:1, 8:1, 6:1, 90:1}, Platform$Lifecycle);
var EXIT, PAUSE_0, RESUME;
var Lplayn_core_Platform$Lifecycle_2_classLit = createForEnum(90, values_12);
defineClass(306, 431, $intern_30);
_.end = function end_0(){
  $end(this);
  this.curTexId = 0;
}
;
_.curTexId = 0;
var Lplayn_core_TexturedBatch_2_classLit = createForClass(306);
function $addQuad(this$static, tint, m00, m01, m10, m11, tx, ty, left, top_0, right, bottom, sr, sb){
  this$static.addQuad(tint, m00, m01, m10, m11, tx, ty, left, top_0, 0, 0, right, top_0, sr, 0, left, bottom, 0, sb, right, bottom, sr, sb);
}

function $addQuad_0(this$static, tex, tint, xf, x_0, y_0, w, h){
  var sb, sr;
  this$static.curTexId != 0 && this$static.curTexId != tex.id_0 && this$static.flush();
  this$static.curTexId = tex.id_0;
  sr = tex.config.repeatX?w / tex.displayWidth:1;
  sb = tex.config.repeatY?h / tex.displayHeight:1;
  $addQuad(this$static, tint, xf.m00, xf.m01, xf.m10, xf.m11, xf.tx, xf.ty, x_0, y_0, x_0 + w, y_0 + h, sr, sb);
}

defineClass(160, 306, $intern_30);
var Lplayn_core_QuadBatch_2_classLit = createForClass(160);
function $clinit_Scale(){
  $clinit_Scale = emptyMethod;
  ONE = new Scale(1);
}

function $computePath(path, scale){
  var didx, scaleFactor;
  if (scale <= 1)
    return path;
  scaleFactor = round_int(scale * 10);
  scaleFactor % 10 == 0 && (scaleFactor = scaleFactor / 10 | 0);
  didx = path.lastIndexOf('.');
  return didx == -1?path:path.substr(0, didx) + '@' + scaleFactor + 'x' + path.substr(didx);
}

function $getScaledResources(this$static, path){
  var rscale, rsrcs;
  rsrcs = new ArrayList;
  $add_0(rsrcs, new Scale$ScaledResource(this$static, $computePath(path, this$static.factor)));
  for (rscale = ifloor(this$static.factor); rscale > 1; rscale -= 1) {
    rscale != this$static.factor && $add_0(rsrcs, new Scale$ScaledResource(new Scale(rscale), $computePath(path, rscale)));
  }
  $add_0(rsrcs, new Scale$ScaledResource(ONE, path));
  return rsrcs;
}

function $invScaled(this$static, length_0){
  return length_0 / this$static.factor;
}

function $scaledCeil(this$static, length_0){
  return iceil(this$static.factor * length_0);
}

function Scale(factor){
  $clinit_Scale();
  this.factor = factor;
}

defineClass(102, 1, {}, Scale);
_.toString_0 = function toString_31(){
  return 'x' + this.factor;
}
;
_.factor = 0;
var ONE;
var Lplayn_core_Scale_2_classLit = createForClass(102);
function Scale$ScaledResource(scale, path){
  this.scale_0 = scale;
  this.path = path;
}

defineClass(103, 1, {103:1}, Scale$ScaledResource);
_.toString_0 = function toString_32(){
  return this.scale_0 + ': ' + this.path;
}
;
var Lplayn_core_Scale$ScaledResource_2_classLit = createForClass(103);
function Sound(state){
  this.state = state;
}

defineClass(330, 1, {});
var Lplayn_core_Sound_2_classLit = createForClass(330);
function $fail_1(this$static, error){
  $fail(this$static.state, error);
}

function $play_0(this$static){
  this$static.playing = true;
  return !!this$static.impl && this$static.impl.play_0();
}

function $setVolume_2(this$static){
  this$static.volume_0 = 0.25;
  !!this$static.impl && $setVolumeImpl(this$static, this$static.volume_0);
}

function $stop_0(this$static){
  this$static.playing = false;
  !!this$static.impl && this$static.impl.stop_0();
}

function $succeed_1(this$static, impl){
  this$static.impl = impl;
  $setVolumeImpl(this$static, this$static.volume_0);
  $setLoopingImpl(this$static, this$static.looping);
  this$static.playing && this$static.impl.play_0();
  $succeed(this$static.state, this$static);
}

defineClass(343, 330, {});
_.looping = false;
_.playing = false;
_.volume_0 = 1;
var Lplayn_core_SoundImpl_2_classLit = createForClass(343);
function $begin_0(this$static){
  $bind(this$static.target);
  $beginBatch(this$static, this$static.batch);
  return this$static;
}

function $beginBatch(this$static, batch){
  batch.begin(this$static.target.this$01.viewPixelWidth, this$static.target.this$01.viewPixelHeight, true);
  return batch;
}

function $clear_2(this$static, red, green, blue, alpha_0){
  $glClearColor(this$static.batch.gl, red, green, blue, alpha_0);
  this$static.batch.gl.gl.clear(16384);
  return this$static;
}

function $draw_1(this$static, tile, x_0, y_0){
  return $draw_2(this$static, tile, x_0, y_0, tile.displayWidth, tile.displayHeight);
}

function $draw_2(this$static, tile, x_0, y_0, w, h){
  (!this$static.checkIntersection || $intersects(this$static, x_0, y_0, w, h)) && $addToBatch(tile, this$static.batch, this$static.tint, this$static.lastTrans, x_0, y_0, w, h);
  return this$static;
}

function $end_0(this$static){
  this$static.batch.end();
  return this$static;
}

function $endClipped(this$static){
  var r;
  this$static.batch.flush();
  r = (--this$static.scissorDepth , this$static.scissorDepth == 0?null:$get(this$static.scissors, this$static.scissorDepth - 1));
  !r?(this$static.batch.gl.gl.disable(3089) , undefined):$glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  $checkError(this$static.batch.gl);
}

function $fillRect_0(this$static, x_0, y_0, width_0, height){
  $addQuad_0(this$static.batch, this$static.colorTex, combine(this$static.fillColor, this$static.tint), this$static.lastTrans, x_0, y_0, width_0, height);
  return this$static;
}

function $intersects(this$static, x_0, y_0, w, h){
  var ih, iw, ix, iy, scissor, th, tw;
  $transform_0(this$static.lastTrans, $set(this$static.intersectionTestPoint, x_0, y_0), this$static.intersectionTestPoint);
  $transform_1(this$static.lastTrans, $set_0(this$static.intersectionTestSize, w, h), this$static.intersectionTestSize);
  ix = this$static.intersectionTestPoint.x_0;
  iy = this$static.intersectionTestPoint.y_0;
  iw = this$static.intersectionTestSize.x_0;
  ih = this$static.intersectionTestSize.y_0;
  if (this$static.scissorDepth > 0) {
    scissor = $get(this$static.scissors, this$static.scissorDepth - 1);
    return $intersects_0(scissor, round_int(ix), round_int(iy), round_int(iw), round_int(ih));
  }
  tw = this$static.target.this$01.viewPixelWidth;
  th = this$static.target.this$01.viewPixelHeight;
  return ix + iw > 0 && ix < tw && iy + ih > 0 && iy < th;
}

function $pushScissorState(this$static, x_0, y_0, width_0, height){
  var pr, r;
  this$static.scissorDepth == this$static.scissors.array.length && $add_0(this$static.scissors, new Rectangle);
  r = $get(this$static.scissors, this$static.scissorDepth);
  if (this$static.scissorDepth == 0) {
    r.x_0 = x_0;
    r.y_0 = y_0;
    r.height_0 = height;
    r.width_0 = width_0;
  }
   else {
    pr = $get(this$static.scissors, this$static.scissorDepth - 1);
    $setLocation(r, max_0(pr.x_0, x_0), max_0(pr.y_0, y_0));
    $setSize_0(r, max_0(min_0(pr.x_0 + pr.width_0 - 1, x_0 + width_0 - 1) - r.x_0, 0), max_0(min_0(pr.y_0 + pr.height_0 - 1, y_0 + height - 1) - r.y_0, 0));
  }
  ++this$static.scissorDepth;
  return r;
}

function $restoreTx(this$static){
  var tsSize;
  tsSize = this$static.transformStack.array.length;
  $remove(this$static.transformStack, --tsSize);
  this$static.lastTrans = this$static.transformStack.array.length == 0?null:$get(this$static.transformStack, tsSize - 1);
  return this$static;
}

function $saveTx(this$static){
  $add_0(this$static.transformStack, this$static.lastTrans = $copy(this$static.lastTrans));
  return this$static;
}

function $scale_0(this$static, sx, sy){
  $scale_2(this$static.lastTrans, sx, sy);
  return this$static;
}

function $setFillColor(this$static, color_0){
  this$static.fillColor = color_0;
  return this$static;
}

function $startClipped(this$static, x_0, y_0, width_0, height){
  var r;
  this$static.batch.flush();
  r = $pushScissorState(this$static, x_0, this$static.target.this$01.viewPixelHeight - y_0 - height, width_0, height);
  $glScissor(this$static.batch.gl, r.x_0, r.y_0, r.width_0, r.height_0);
  this$static.scissorDepth == 1 && (this$static.batch.gl.gl.enable(3089) , undefined);
  $checkError(this$static.batch.gl);
  return !(r.width_0 <= 0 || r.height_0 <= 0);
}

function $translate(this$static, x_0, y_0){
  $translate_0(this$static.lastTrans, x_0, y_0);
  return this$static;
}

function Surface(gfx, target, defaultBatch){
  this.transformStack = new ArrayList;
  this.scissors = new ArrayList;
  this.intersectionTestPoint = new Point;
  this.intersectionTestSize = new Vector;
  this.target = target;
  this.batch = defaultBatch;
  $add_0(this.transformStack, this.lastTrans = new AffineTransform);
  this.colorTex = $colorTex(gfx);
  $scale_0(this, target.this$01.scale_0.factor, target.this$01.scale_0.factor);
}

defineClass(254, 1, $intern_30, Surface);
_.checkIntersection = false;
_.fillColor = 0;
_.scissorDepth = 0;
_.tint = -1;
var Lplayn_core_Surface_2_classLit = createForClass(254);
defineClass(437, 436, {});
_.toString_0 = function toString_33(){
  return 'Tile[' + this.displayWidth + 'x' + this.displayHeight + '/' + ($clinit_Points() , toString_46(0, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(0, TO_STRING_DECIMAL_PLACES))) + '/' + (toString_46(1, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(1, TO_STRING_DECIMAL_PLACES))) + '] <- ' + this;
}
;
var Lplayn_core_Tile_2_classLit = createForClass(437);
function $addToBatch(this$static, batch, tint, tx, x_0, y_0, width_0, height){
  $addQuad_0(batch, this$static, tint, tx, x_0, y_0, width_0, height);
}

function $update(this$static, image){
  var pixHeight, pixWidth, potHeight, potWidth, scaled;
  if (this$static.config.repeatX || this$static.config.repeatY || this$static.config.mipmaps) {
    pixWidth = image.pixelWidth;
    pixHeight = image.pixelHeight;
    potWidth = $toTexWidth(this$static.config, pixWidth);
    potHeight = $toTexWidth(this$static.config, pixHeight);
    if (potWidth != pixWidth || potHeight != pixHeight) {
      scaled = $createCanvasImpl(this$static.gfx, ($clinit_Scale() , ONE), potWidth, potHeight);
      $draw_3(image, scaled.ctx, 0, 0, potWidth, potHeight);
      $upload(scaled.image, this$static.gfx, this$static);
    }
     else 
      $upload(image, this$static.gfx, this$static);
  }
   else 
    $upload(image, this$static.gfx, this$static);
  this$static.config.mipmaps && (this$static.gfx.gl.gl.generateMipmap(3553) , undefined);
}

function Texture(gfx, id_0, config, pixWidth, pixHeight, scale, dispWidth, dispHeight){
  this.gfx = gfx;
  this.id_0 = id_0;
  this.config = config;
  this.pixelWidth = pixWidth;
  this.pixelHeight = pixHeight;
  this.scale_0 = scale;
  this.displayWidth = dispWidth;
  this.displayHeight = dispHeight;
}

function nextPOT(value_0){
  var bit, count, highest, ii;
  bit = 32768;
  highest = -1;
  count = 0;
  for (ii = 15; ii >= 0; --ii , bit >>= 1) {
    if ((value_0 & bit) == 0)
      continue;
    ++count;
    highest == -1 && (highest = ii);
  }
  return count > 1?1 << highest + 1:value_0;
}

defineClass(328, 437, $intern_30, Texture);
_.toString_0 = function toString_34(){
  return 'Texture[id=' + this.id_0 + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', dsize=' + this.displayWidth + 'x' + this.displayHeight + ' @ ' + this.scale_0 + ', config=' + this.config + ']';
}
;
_.displayHeight = 0;
_.displayWidth = 0;
_.disposed = false;
_.id_0 = 0;
_.pixelHeight = 0;
_.pixelWidth = 0;
var Lplayn_core_Texture_2_classLit = createForClass(328);
function $clinit_Texture$Config(){
  $clinit_Texture$Config = emptyMethod;
  DEFAULT = new Texture$Config(true);
  UNMANAGED = new Texture$Config(false);
}

function $toTexHeight(this$static, sourceHeight){
  return this$static.repeatY || this$static.mipmaps?nextPOT(sourceHeight):sourceHeight;
}

function $toTexWidth(this$static, sourceWidth){
  return this$static.repeatX || this$static.mipmaps?nextPOT(sourceWidth):sourceWidth;
}

function Texture$Config(managed){
  this.managed = managed;
  this.repeatX = false;
  this.repeatY = false;
  this.minFilter = 9729;
  this.magFilter = 9729;
  this.mipmaps = false;
}

defineClass(163, 1, {}, Texture$Config);
_.toString_0 = function toString_35(){
  var repstr;
  repstr = (this.repeatX?'x':'') + (this.repeatY?'y':'');
  return '[managed=' + this.managed + ', repeat=' + repstr + ', filter=' + this.minFilter + '/' + this.magFilter + ', mipmaps=' + this.mipmaps + ']';
}
;
_.magFilter = 0;
_.managed = false;
_.minFilter = 0;
_.mipmaps = false;
_.repeatX = false;
_.repeatY = false;
var DEFAULT, UNMANAGED;
var Lplayn_core_Texture$Config_2_classLit = createForClass(163);
function $fragment(){
  var str;
  str = new StringBuilder_0('#ifdef GL_ES\nprecision lowp float;\n#else\n#define lowp\n#define mediump\n#define highp\n#endif\n');
  str.string += 'uniform lowp sampler2D u_Texture;\n';
  str.string += 'varying mediump vec2 v_TexCoord;\nvarying lowp vec4 v_Color;\n';
  str.string += 'void main(void) {\n';
  str.string += '  vec4 textureColor = texture2D(u_Texture, v_TexCoord);\n';
  str.string += '  textureColor.rgb *= v_Color.rgb;\n';
  str.string += '  textureColor *= v_Color.a;\n';
  str.string += '  gl_FragColor = textureColor;\n}';
  return str.string;
}

function combine(curTint, tint){
  var newA, newB, newG, newR;
  newA = ((curTint >> 24 & 255) * ((tint >> 24 & 255) + 1) & 65280) << 16;
  if ((tint & $intern_35) == $intern_35) {
    return newA | curTint & $intern_35;
  }
  newR = ((curTint >> 16 & 255) * ((tint >> 16 & 255) + 1) & 65280) << 8;
  newG = (curTint >> 8 & 255) * ((tint >> 8 & 255) + 1) & 65280;
  newB = (curTint & 255) * ((tint & 255) + 1) >> 8 & 255;
  return newA | newR | newG | newB;
}

function Touch$Event(time, x_0, y_0, kind, id_0){
  Event$XY.call(this, time, x_0, y_0);
  this.kind = kind;
  this.id_0 = id_0;
  this.pressure = -1;
  this.size_0 = -1;
}

defineClass(101, 51, {33:1, 31:1, 51:1, 101:1, 58:1}, Touch$Event);
_.addFields = function addFields_6(builder){
  $append_4($append_7($append_2((builder.string += 'time=' , builder), this.time), ', flags='), this.flags);
  $append_3($append_7($append_3((builder.string += ', x=' , builder), this.x_0), ', y='), this.y_0);
  $append_3($append_7($append_3($append_7($append_4($append_7($append_6((builder.string += ', kind=' , builder), this.kind), ', id='), this.id_0), ', pressure='), this.pressure), ', size='), this.size_0);
}
;
_.name_1 = function name_9(){
  return 'Touch';
}
;
_.id_0 = 0;
_.pressure = 0;
_.size_0 = 0;
var Lplayn_core_Touch$Event_2_classLit = createForClass(101);
function $clinit_Touch$Event$Kind(){
  $clinit_Touch$Event$Kind = emptyMethod;
  START = new Touch$Event$Kind('START', 0);
  MOVE = new Touch$Event$Kind('MOVE', 1);
  END_0 = new Touch$Event$Kind('END', 2);
  CANCEL = new Touch$Event$Kind('CANCEL', 3);
}

function Touch$Event$Kind(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_13(){
  $clinit_Touch$Event$Kind();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_core_Touch$Event$Kind_2_classLit, 1), $intern_1, 86, 0, [START, MOVE, END_0, CANCEL]);
}

defineClass(86, 6, {3:1, 8:1, 6:1, 86:1}, Touch$Event$Kind);
var CANCEL, END_0, MOVE, START;
var Lplayn_core_Touch$Event$Kind_2_classLit = createForEnum(86, values_13);
function $clinit_TriangleBatch(){
  $clinit_TriangleBatch = emptyMethod;
  QUAD_INDICES = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_24, 14, 15, [0, 1, 2, 1, 3, 2]);
}

function $addElems(this$static, vertIdx, indices, indicesLen){
  var data_0, ii, ll, offset;
  data_0 = this$static.elements;
  offset = this$static.elemPos;
  for (ii = 0 , ll = indicesLen; ii < ll; ii++) {
    data_0[offset++] = vertIdx + indices[ii] << 16 >> 16;
  }
  this$static.elemPos = offset;
}

function $beginPrimitive(this$static){
  var availElems, availVerts, elems, vertIdx, verts;
  vertIdx = this$static.vertPos / 12 | 0;
  verts = vertIdx + 4;
  elems = this$static.elemPos + 6;
  availVerts = this$static.vertices.length / 12 | 0;
  availElems = this$static.elements.length;
  if (verts <= availVerts && elems <= availElems)
    return vertIdx;
  $flush_0(this$static);
  verts > availVerts && $expandVerts(this$static, verts);
  elems > availElems && $expandElems(this$static, elems);
  return 0;
}

function $bindAttribsBufs(this$static){
  $glBindBuffer(this$static.gl, $intern_36, this$static.verticesId);
  $glBindVertAttrib(this$static, this$static.aMatrix, 4, 0);
  $glBindVertAttrib(this$static, this$static.aTranslation, 2, 16);
  $glBindVertAttrib(this$static, this$static.aColor, 2, 24);
  $glBindVertAttrib(this$static, this$static.aPosition, 2, 32);
  $glBindVertAttrib(this$static, this$static.aTexCoord, 2, 40);
  $glBindBuffer(this$static.gl, $intern_37, this$static.elementsId);
  this$static.gl.gl.activeTexture(33984);
  $glUniform1i(this$static.gl, this$static.uTexture);
}

function $expandElems(this$static, elemCount){
  var newElems;
  newElems = this$static.elements.length;
  while (newElems < elemCount)
    newElems += 96;
  this$static.elements = initUnidimensionalArray(S_classLit, $intern_24, 14, newElems, 15, 1);
}

function $expandVerts(this$static, vertCount){
  var newVerts;
  newVerts = this$static.vertices.length / 12 | 0;
  while (newVerts < vertCount)
    newVerts += 64;
  this$static.vertices = initUnidimensionalArray(F_classLit, $intern_24, 14, newVerts * 12, 15, 1);
}

function $flush_0(this$static){
  $flush(this$static);
  if (this$static.vertPos > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    if (this$static.delayedBinding) {
      $bindAttribsBufs(this$static);
      $checkError(this$static.gl);
    }
    $setFloatBuffer(this$static.gl.bufs, this$static.vertices, this$static.vertPos);
    $glBufferData(this$static.gl, $intern_36, this$static.vertPos * 4, this$static.gl.bufs.floatBuffer, 35040);
    $setShortBuffer(this$static.gl.bufs, this$static.elements, this$static.elemPos);
    $glBufferData(this$static.gl, $intern_37, this$static.elemPos * 2, this$static.gl.bufs.shortBuffer, 35040);
    $checkError(this$static.gl);
    $glDrawElements(this$static.gl, this$static.elemPos);
    $checkError(this$static.gl);
    this$static.vertPos = 0;
    this$static.elemPos = 0;
  }
}

function $glBindVertAttrib(this$static, loc, size_0, offset){
  $glEnableVertexAttribArray(this$static.gl, loc);
  $glVertexAttribPointer(this$static.gl, loc, size_0, 5126, 48, offset);
}

function TriangleBatch(gl){
  var ids;
  $clinit_TriangleBatch();
  this.gl = gl;
  this.delayedBinding = $equals('Intel', gl.gl.getParameter(7936));
  this.program = new GLProgram(gl, 'uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nattribute vec4 a_Matrix;\nattribute vec2 a_Translation;\nattribute vec2 a_Color;\nattribute vec2 a_Position;\nattribute vec2 a_TexCoord;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nmat3 transform = mat3(\n  a_Matrix[0],      a_Matrix[1],      0,\n  a_Matrix[2],      a_Matrix[3],      0,\n  a_Translation[0], a_Translation[1], 1);\ngl_Position = vec4(transform * vec3(a_Position, 1.0), 1);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_TexCoord;\nfloat red = mod(a_Color.x, 256.0);\nfloat alpha = (a_Color.x - red) / 256.0;\nfloat blue = mod(a_Color.y, 256.0);\nfloat green = (a_Color.y - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.aMatrix = $getAttribLocation_0(this.program, 'a_Matrix');
  this.aTranslation = $getAttribLocation_0(this.program, 'a_Translation');
  this.aColor = $getAttribLocation_0(this.program, 'a_Color');
  this.aPosition = $getAttribLocation_0(this.program, 'a_Position');
  this.aTexCoord = $getAttribLocation_0(this.program, 'a_TexCoord');
  this.stableAttrs = initUnidimensionalArray(F_classLit, $intern_24, 14, 8, 15, 1);
  this.vertices = initUnidimensionalArray(F_classLit, $intern_24, 14, 768, 15, 1);
  this.elements = initUnidimensionalArray(S_classLit, $intern_24, 14, 96, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_24, 14, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $checkError(gl);
}

function add_10(into, offset, x_0, y_0, sx, sy){
  into[offset++] = x_0;
  into[offset++] = y_0;
  into[offset++] = sx;
  into[offset++] = sy;
  return offset;
}

defineClass(162, 160, $intern_30, TriangleBatch);
_.addQuad = function addQuad(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var offset, stables, vertIdx, verts, stables_0;
  stables_0 = this.stableAttrs;
  stables_0[0] = m00;
  stables_0[1] = m01;
  stables_0[2] = m10;
  stables_0[3] = m11;
  stables_0[4] = tx;
  stables_0[5] = ty;
  stables_0[6] = tint >> 16 & $intern_25;
  stables_0[7] = tint & $intern_25;
  vertIdx = $beginPrimitive(this);
  offset = this.vertPos;
  verts = this.vertices;
  stables = this.stableAttrs;
  offset = add_10(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x1, y1, sx1, sy1);
  offset = add_10(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x2, y2, sx2, sy2);
  offset = add_10(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x3, y3, sx3, sy3);
  offset = add_10(verts, (arraycopy(stables, verts, offset, stables.length) , offset + stables.length), x4, y4, sx4, sy4);
  this.vertPos = offset;
  $addElems(this, vertIdx, QUAD_INDICES, QUAD_INDICES.length);
}
;
_.begin = function begin_1(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  this.delayedBinding || $bindAttribsBufs(this);
  $checkError(this.gl);
}
;
_.end = function end_1(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aMatrix);
  $glDisableVertexAttribArray(this.gl, this.aTranslation);
  $glDisableVertexAttribArray(this.gl, this.aColor);
  $glDisableVertexAttribArray(this.gl, this.aPosition);
  $glDisableVertexAttribArray(this.gl, this.aTexCoord);
  $checkError(this.gl);
}
;
_.flush = function flush_0(){
  $flush_0(this);
}
;
_.toString_0 = function toString_36(){
  return 'tris/' + (this.elements.length / QUAD_INDICES.length | 0);
}
;
_.aColor = 0;
_.aMatrix = 0;
_.aPosition = 0;
_.aTexCoord = 0;
_.aTranslation = 0;
_.delayedBinding = false;
_.elemPos = 0;
_.elementsId = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.vertPos = 0;
_.verticesId = 0;
var QUAD_INDICES;
var Lplayn_core_TriangleBatch_2_classLit = createForClass(162);
function $flush_1(this$static){
  $flush(this$static);
  if (this$static.quadCounter > 0) {
    $glBindTexture(this$static.gl, this$static.curTexId);
    $checkError(this$static.gl);
    $glUniform4fv(this$static.gl, this$static.uData, this$static.quadCounter * 3, this$static.data_0);
    $glDrawElements(this$static.gl, this$static.quadCounter * 6);
    $checkError(this$static.gl);
    this$static.quadCounter = 0;
  }
}

function UniformQuadBatch(gl){
  UniformQuadBatch_0.call(this, gl);
}

function UniformQuadBatch_0(gl){
  var base, base0, base1, base2, base3, ee, elems, ids, ii, maxVecs, verts, vv;
  this.gl = gl;
  maxVecs = usableMaxUniformVectors(gl);
  if (maxVecs < 3)
    throw toJs(new RuntimeException_0('GL_MAX_VERTEX_UNIFORM_VECTORS too low: have ' + maxVecs + ', need at least ' + 3));
  this.maxQuads = maxVecs / 3 | 0;
  this.program = new GLProgram(gl, $replace($replace('uniform vec2 u_HScreenSize;\nuniform float u_Flip;\nuniform vec4 u_Data[_VEC4S_PER_QUAD_*_MAX_QUADS_];\nattribute vec3 a_Vertex;\nvarying vec2 v_TexCoord;\nvarying vec4 v_Color;\nvoid main(void) {\nint index = _VEC4S_PER_QUAD_*int(a_Vertex.z);\nvec4 mat = u_Data[index+0];\nvec4 txc = u_Data[index+1];\nvec4 tcs = u_Data[index+2];\nmat3 transform = mat3(\n  mat.x, mat.y, 0,\n  mat.z, mat.w, 0,\n  txc.x, txc.y, 1);\ngl_Position = vec4(transform * vec3(a_Vertex.xy, 1.0), 1.0);\ngl_Position.xy /= u_HScreenSize.xy;\ngl_Position.xy -= 1.0;\ngl_Position.y *= u_Flip;\nv_TexCoord = a_Vertex.xy * tcs.xy + txc.zw;\nfloat red = mod(tcs.z, 256.0);\nfloat alpha = (tcs.z - red) / 256.0;\nfloat blue = mod(tcs.w, 256.0);\nfloat green = (tcs.w - blue) / 256.0;\nv_Color = vec4(red / 255.0, green / 255.0, blue / 255.0, alpha / 255.0);\n}', '_MAX_QUADS_', '' + this.maxQuads), '_VEC4S_PER_QUAD_', '3'), $fragment());
  this.uTexture = $getUniformLocation_0(this.program, 'u_Texture');
  this.uHScreenSize = $getUniformLocation_0(this.program, 'u_HScreenSize');
  this.uFlip = $getUniformLocation_0(this.program, 'u_Flip');
  this.uData = $getUniformLocation_0(this.program, 'u_Data');
  this.aVertex = $getAttribLocation_0(this.program, 'a_Vertex');
  verts = initUnidimensionalArray(S_classLit, $intern_24, 14, this.maxQuads * 4 * 3, 15, 1);
  elems = initUnidimensionalArray(S_classLit, $intern_24, 14, this.maxQuads * 6, 15, 1);
  vv = 0;
  ee = 0;
  for (ii = 0; ii < this.maxQuads; ii++) {
    verts[vv++] = 0;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 0;
    verts[vv++] = ii;
    verts[vv++] = 0;
    verts[vv++] = 1;
    verts[vv++] = ii;
    verts[vv++] = 1;
    verts[vv++] = 1;
    verts[vv++] = ii;
    base = ii * 4 << 16 >> 16;
    base0 = base;
    base1 = ++base;
    base2 = ++base;
    base3 = ++base;
    elems[ee++] = base0;
    elems[ee++] = base1;
    elems[ee++] = base2;
    elems[ee++] = base1;
    elems[ee++] = base3;
    elems[ee++] = base2;
  }
  this.data_0 = initUnidimensionalArray(F_classLit, $intern_24, 14, this.maxQuads * 3 * 4, 15, 1);
  ids = initUnidimensionalArray(I_classLit, $intern_24, 14, 2, 15, 1);
  $glGenBuffers(gl, ids);
  this.verticesId = ids[0];
  this.elementsId = ids[1];
  $glBindBuffer(gl, $intern_36, this.verticesId);
  $setShortBuffer(gl.bufs, verts, verts.length);
  $glBufferData(gl, $intern_36, verts.length * 2, gl.bufs.shortBuffer, 35044);
  $glBindBuffer(gl, $intern_37, this.elementsId);
  $setShortBuffer(gl.bufs, elems, elems.length);
  $glBufferData(gl, $intern_37, elems.length * 2, gl.bufs.shortBuffer, 35044);
  $checkError(gl);
}

function usableMaxUniformVectors(gl){
  var glErr, maxVecs;
  maxVecs = gl.gl.getParameter(36347) - 3;
  glErr = gl.gl.getError();
  if (glErr != 0)
    throw toJs(new RuntimeException_0('Unable to query GL_MAX_VERTEX_UNIFORM_VECTORS,  error ' + glErr));
  return maxVecs;
}

defineClass(161, 160, $intern_30, UniformQuadBatch);
_.addQuad = function addQuad_0(tint, m00, m01, m10, m11, tx, ty, x1, y1, sx1, sy1, x2, y2, sx2, sy2, x3, y3, sx3, sy3, x4, y4, sx4, sy4){
  var dh, dw, pos;
  pos = this.quadCounter * 3 * 4;
  dw = x2 - x1;
  dh = y3 - y1;
  this.data_0[pos++] = m00 * dw;
  this.data_0[pos++] = m01 * dw;
  this.data_0[pos++] = m10 * dh;
  this.data_0[pos++] = m11 * dh;
  this.data_0[pos++] = tx + m00 * x1 + m10 * y1;
  this.data_0[pos++] = ty + m01 * x1 + m11 * y1;
  this.data_0[pos++] = sx1;
  this.data_0[pos++] = sy1;
  this.data_0[pos++] = sx2 - sx1;
  this.data_0[pos++] = sy3 - sy1;
  this.data_0[pos++] = tint >> 16 & $intern_25;
  this.data_0[pos++] = tint & $intern_25;
  ++this.quadCounter;
  this.quadCounter >= this.maxQuads && $flush_1(this);
}
;
_.begin = function begin_2(fbufWidth, fbufHeight, flip){
  $begin(this);
  $activate(this.program);
  $glUniform2f(this.gl, this.uHScreenSize, fbufWidth / 2, fbufHeight / 2);
  $glUniform1f(this.gl, this.uFlip, flip?-1:1);
  $glBindBuffer(this.gl, $intern_36, this.verticesId);
  $glEnableVertexAttribArray(this.gl, this.aVertex);
  $glVertexAttribPointer(this.gl, this.aVertex, 3, 5122, 0, 0);
  $glBindBuffer(this.gl, $intern_37, this.elementsId);
  this.gl.gl.activeTexture(33984);
  $glUniform1i(this.gl, this.uTexture);
  $checkError(this.gl);
}
;
_.end = function end_2(){
  $end(this);
  this.curTexId = 0;
  $glDisableVertexAttribArray(this.gl, this.aVertex);
  $checkError(this.gl);
}
;
_.flush = function flush_1(){
  $flush_1(this);
}
;
_.toString_0 = function toString_37(){
  return 'uquad/' + this.maxQuads;
}
;
_.aVertex = 0;
_.elementsId = 0;
_.maxQuads = 0;
_.quadCounter = 0;
_.uData = 0;
_.uFlip = 0;
_.uHScreenSize = 0;
_.uTexture = 0;
_.verticesId = 0;
var Lplayn_core_UniformQuadBatch_2_classLit = createForClass(161);
function $doXhr(this$static, path, rtype){
  var result, xhr;
  result = ($clinit_RPromise() , new RPromise);
  xhr = new $wnd.XMLHttpRequest;
  xhr.open('GET', path, true);
  $setResponseType(xhr, rtype.responseTypeString);
  $setOnReadyStateChange(xhr, new HtmlAssets$5(this$static, path, result));
  xhr.send(null);
  return result;
}

function $getBundle(this$static, collection){
  var clientBundle, entry, entry$iterator, regExp;
  clientBundle = null;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.clientBundles)).this$01); entry$iterator.hasNext;) {
    entry = $next_1(entry$iterator);
    regExp = entry.getKey();
    !!$exec(new RegExp(regExp), collection) && (clientBundle = entry.getValue());
  }
  return clientBundle;
}

function $getImage(this$static, path){
  var assetScale, rsrcs;
  assetScale = ($clinit_Scale() , ONE);
  rsrcs = $getScaledResources(assetScale, path);
  return $getImage_0(this$static, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).path, (checkCriticalElementIndex(0, rsrcs.array.length) , rsrcs.array[0]).scale_0);
}

function $getImage_0(this$static, path, scale){
  var url_0, img;
  url_0 = this$static.pathPrefix + ('' + path);
  $getBundle(this$static, path);
  return img = $doc.createElement('img') , 'crossOrigin' in img && img.setAttribute('crossOrigin', 'anonymous') , img.src = url_0 , new HtmlImage_0(this$static.plat.graphics, scale, img, url_0);
}

function $getSound(this$static, path){
  var url_0;
  url_0 = this$static.pathPrefix + path;
  $getBundle(this$static, path);
  url_0 += '.mp3';
  return $createSound_0(this$static.plat.audio, url_0);
}

function $getText(this$static, path){
  var e, fullPath, result, xdr;
  fullPath = this$static.pathPrefix + path;
  try {
    return $map($doXhr(this$static, fullPath, ($clinit_XMLHttpRequest$ResponseType() , Default)), new HtmlAssets$1);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 72)) {
      e = $e0;
      if ($wnd.navigator.userAgent.indexOf('MSIE') != -1) {
        return $map((result = ($clinit_RPromise() , new RPromise) , xdr = new $wnd.XDomainRequest , $setHandler(xdr, new HtmlAssets$4(this$static, fullPath, result)) , xdr.open('GET', fullPath, true) , xdr.send() , result), new HtmlAssets$2);
      }
       else {
        throw toJs(e);
      }
    }
     else 
      throw toJs($e0);
  }
}

function HtmlAssets(plat){
  this.clientBundles = new HashMap;
  this.pathPrefix = ($clinit_Impl() , $moduleBase);
  this.plat = plat;
}

defineClass(210, 416, {}, HtmlAssets);
var Lplayn_html_HtmlAssets_2_classLit = createForClass(210);
function HtmlAssets$1(){
}

defineClass(211, 1, {}, HtmlAssets$1);
_.apply_0 = function apply_1(xhr){
  return xhr.responseText;
}
;
var Lplayn_html_HtmlAssets$1_2_classLit = createForClass(211);
function HtmlAssets$2(){
}

defineClass(212, 1, {}, HtmlAssets$2);
_.apply_0 = function apply_2(xdr){
  return xdr.responseText;
}
;
var Lplayn_html_HtmlAssets$2_2_classLit = createForClass(212);
function HtmlAssets$4(this$0, val$path, val$result){
  this.this$01 = this$0;
  this.val$path2 = val$path;
  this.val$result3 = val$result;
}

defineClass(213, 1, {}, HtmlAssets$4);
_.onError = function onError(xdr){
  $error(this.this$01.plat.log_0, 'xdr::onError[' + this.val$path2 + ']()');
  $complete(this.val$result3, new Try$Failure(new Exception('Error getting ' + this.val$path2 + ' : ' + xdr.contentType)));
}
;
_.onLoad = function onLoad(xdr){
  $complete(this.val$result3, new Try$Success(xdr));
}
;
_.onProgress = function onProgress(xdr){
}
;
_.onTimeout = function onTimeout(xdr){
  $error(this.this$01.plat.log_0, 'xdr::onTimeout[' + this.val$path2 + ']()');
  $complete(this.val$result3, new Try$Failure(new Exception('Error getting ' + this.val$path2 + ' : ' + xdr.contentType)));
}
;
var Lplayn_html_HtmlAssets$4_2_classLit = createForClass(213);
function HtmlAssets$5(this$0, val$path, val$result){
  this.this$01 = this$0;
  this.val$path2 = val$path;
  this.val$result3 = val$result;
}

defineClass(214, 1, {}, HtmlAssets$5);
_.onReadyStateChange = function onReadyStateChange(xhr){
  var readyState, status_0, status_1;
  readyState = xhr.readyState;
  if (readyState == 4) {
    status_0 = xhr.status;
    if (status_0 != 0 && (status_0 < 200 || status_0 >= 400)) {
      $error(this.this$01.plat.log_0, 'xhr::onReadyStateChange[' + this.val$path2 + ']' + '(readyState = ' + 4 + '; status = ' + status_0 + ')');
      $complete(this.val$result3, new Try$Failure(new Exception('Error getting ' + this.val$path2 + ' : ' + xhr.statusText)));
    }
     else {
      $complete(this.val$result3, new Try$Success(xhr));
    }
  }
}
;
var Lplayn_html_HtmlAssets$5_2_classLit = createForClass(214);
function $createSound_0(this$static, url_0){
  var sound;
  sound = $createSound(this$static.soundController, url_0);
  return new HtmlSound(this$static.plat.exec_0, sound);
}

function HtmlAudio(plat){
  var types;
  this.soundController = new SoundController;
  this.plat = plat;
  types = this.soundController.preferredSoundTypes;
  $debug(plat.log_0, 'Preferred sound type(s): ' + types);
  maybeCreateAudioContext();
}

function maybeCreateAudioContext(){
  try {
    return new AudioContext;
  }
   catch (ignore) {
  }
  try {
    return new webkitAudioContext;
  }
   catch (ignore) {
  }
  return null;
}

defineClass(244, 419, {}, HtmlAudio);
var Lplayn_html_HtmlAudio_2_classLit = createForClass(244);
function $fillRect_1(this$static, x_0, y_0, w, h){
  $fillRect(this$static.ctx, x_0, y_0, w, h);
  return this$static;
}

function $scale_1(this$static){
  this$static.ctx.scale(-1, 1);
  return this$static;
}

function $setFillColor_0(this$static, color_0){
  $setFillStyleWeb(this$static.ctx, cssColorString(color_0));
  return this$static;
}

function HtmlCanvas(image){
  var scale;
  Canvas_0.call(this, image);
  this.ctx = image.canvas.getContext('2d');
  scale = image.scale_0.factor;
  $scale(this.ctx, scale, scale);
}

defineClass(145, 363, $intern_30, HtmlCanvas);
var Lplayn_html_HtmlCanvas_2_classLit = createForClass(145);
function $getTypedArray(buffer, type_0, byteSize){
  var arrayHolder, bufferElementSize, byteOffset, webGLArray;
  if (!instanceOf(buffer, 142)) {
    throw toJs(new RuntimeException_0('Native buffer required ' + buffer));
  }
  arrayHolder = buffer;
  bufferElementSize = arrayHolder.getElementSize();
  webGLArray = arrayHolder.getTypedArray();
  byteSize == -1 && (byteSize = (buffer.limit - buffer.position_0) * bufferElementSize);
  if (byteSize == buffer.capacity * bufferElementSize && type_0 == arrayHolder.getElementType()) {
    return webGLArray;
  }
  byteOffset = webGLArray.byteOffset + buffer.position_0 * bufferElementSize;
  switch (type_0) {
    case 5126:
      return create(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5121:
      return create_4(webGLArray.buffer, byteOffset, byteSize);
    case 5123:
      return create_3(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5124:
      return create_1(webGLArray.buffer, byteOffset, byteSize / 4 | 0);
    case 5122:
      return create_0(webGLArray.buffer, byteOffset, byteSize / 2 | 0);
    case 5120:
      return create_2(webGLArray.buffer, byteOffset, byteSize);
    default:throw toJs(new IllegalArgumentException_0('Type: ' + type_0));
  }
}

function $glAttachShader(this$static, program, shader){
  var glProgram, glShader;
  glProgram = this$static.programs[program];
  glShader = this$static.shaders[shader];
  $attachShader(this$static.gl, glProgram, glShader);
}

function $glBindBuffer(this$static, target, buffer){
  var webGlBuf;
  webGlBuf = this$static.buffers[buffer];
  target == $intern_36?(this$static.requestedArrayBuffer = webGlBuf):target == $intern_37?(this$static.requestedElementArrayBuffer = webGlBuf):$bindBuffer(this$static.gl, target, webGlBuf);
}

function $glBindFramebuffer(this$static){
  $bindFramebuffer(this$static.gl, 36160, this$static.frameBuffers[0]);
}

function $glBindTexture(this$static, texture){
  $bindTexture(this$static.gl, 3553, this$static.textures[texture]);
}

function $glBufferData(this$static, target, byteSize, data_0, usage){
  if (target == $intern_36) {
    if (this$static.requestedArrayBuffer != this$static.boundArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_36, this$static.requestedArrayBuffer);
      this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
    }
  }
   else if (target == $intern_37) {
    if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
      $bindBuffer(this$static.gl, $intern_37, this$static.requestedElementArrayBuffer);
      this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
    }
  }
  $bufferData(this$static.gl, target, $getTypedArray(data_0, 5120, byteSize), usage);
}

function $glClearColor(this$static, red, green, blue, alpha_0){
  $clearColor(this$static.gl, red, green, blue, alpha_0);
}

function $glCompileShader(this$static, shader){
  var glShader;
  glShader = this$static.shaders[shader];
  $compileShader(this$static.gl, glShader);
}

function $glCreateShader(this$static, type_0){
  var shader;
  shader = $createShader(this$static.gl, type_0);
  return $add_7(this$static.shaders, shader);
}

function $glDeleteShader(this$static, shader){
  var sh;
  sh = $remove_15(this$static.shaders, shader);
  $deleteShader(this$static.gl, sh);
}

function $glDisableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays &= ~(1 << index_0);
}

function $glDrawElements(this$static, count){
  $prepareDraw(this$static);
  if (this$static.requestedElementArrayBuffer != this$static.boundElementArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_37, this$static.requestedElementArrayBuffer);
    this$static.boundElementArrayBuffer = this$static.requestedElementArrayBuffer;
  }
  $drawElements(this$static.gl, 4, count, 5123, 0);
}

function $glEnableVertexAttribArray(this$static, index_0){
  this$static.enabledArrays |= 1 << index_0;
}

function $glGenBuffers(this$static, buffers){
  var buffer, i, id_0;
  for (i = 0; i < 2; i++) {
    buffer = this$static.gl.createBuffer();
    id_0 = $add_7(this$static.buffers, buffer);
    buffers[i] = id_0;
  }
}

function $glGenTextures(this$static, textures){
  var i, id_0, pos, texture;
  pos = textures.position_0;
  for (i = 0; i < 1; i++) {
    texture = this$static.gl.createTexture();
    id_0 = $add_7(this$static.textures, texture);
    textures.intArray[pos + i] = id_0;
  }
}

function $glGetAttribLocation(this$static, program, name_0){
  var prog;
  prog = this$static.programs[program];
  return $getAttribLocation(this$static.gl, prog, name_0);
}

function $glGetShaderInfoLog(this$static, shader){
  return $getShaderInfoLog(this$static.gl, this$static.shaders[shader]);
}

function $glGetShaderiv(this$static, shader, params){
  params[0] = $getShaderParameterb(this$static.gl, this$static.shaders[shader], 35713)?1:0;
}

function $glGetUniformLocation(this$static, program, name_0){
  var id_0, location_0, progUniforms;
  location_0 = $getUniformLocation(this$static.gl, this$static.programs[program], name_0);
  progUniforms = this$static.uniforms[program];
  if (!progUniforms) {
    progUniforms = [undefined];
    this$static.uniforms[program] = progUniforms;
  }
  id_0 = $add_7(progUniforms, location_0);
  return id_0;
}

function $glScissor(this$static, x_0, y_0, width_0, height){
  $scissor(this$static.gl, x_0, y_0, width_0, height);
}

function $glShaderSource(this$static, shader, string){
  $shaderSource(this$static.gl, this$static.shaders[shader], string);
}

function $glTexImage2D(this$static, image){
  $texImage2D(this$static.gl, 3553, 0, 6408, 6408, 5121, image);
  $checkError(this$static);
}

function $glTexParameteri(this$static, glTextureMinFilter, glFilterMin){
  $texParameteri(this$static.gl, 3553, glTextureMinFilter, glFilterMin);
}

function $glUniform1f(this$static, location_0, x_0){
  $uniform1f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0);
}

function $glUniform1i(this$static, location_0){
  $uniform1i(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], 0);
}

function $glUniform2f(this$static, location_0, x_0, y_0){
  $uniform2f(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], x_0, y_0);
}

function $glUniform4fv_0(this$static, location_0, count, v){
  $uniform4fv(this$static.gl, this$static.uniforms[this$static.currProgram][location_0], $getTypedArray(v, 5126, 16 * count));
}

function $glUseProgram(this$static, program){
  this$static.currProgram = program;
  $useProgram(this$static.gl, this$static.programs[program]);
}

function $glVertexAttribPointer(this$static, indx, size_0, type_0, stride, ptr){
  this$static.useNioBuffer &= ~(1 << indx);
  if (this$static.boundArrayBuffer != this$static.requestedArrayBuffer) {
    $bindBuffer(this$static.gl, $intern_36, this$static.requestedArrayBuffer);
    this$static.boundArrayBuffer = this$static.requestedArrayBuffer;
  }
  $vertexAttribPointer(this$static.gl, indx, size_0, type_0, false, stride, ptr);
}

function $glViewport(this$static, w, h){
  $viewport(this$static.gl, 0, 0, w, h);
}

function $init(this$static, gl){
  var data_0, ii;
  gl.pixelStorei(37441, 1);
  this$static.gl = gl;
  gl.createBuffer();
  for (ii = 0; ii < 5; ii++) {
    data_0 = new HtmlGL20$VertexAttribArrayState;
    data_0.webGlBuffer = gl.createBuffer();
    this$static.vertexAttribArrayState[ii] = data_0;
  }
}

function $prepareDraw(this$static){
  var data_0, elementSize, enabled, i, mask, previousElementSize, previousNio;
  previousNio = null;
  previousElementSize = 0;
  if (this$static.useNioBuffer == 0 && this$static.enabledArrays == this$static.previouslyEnabledArrays) {
    return;
  }
  for (i = 0; i < 5; i++) {
    mask = 1 << i;
    enabled = this$static.enabledArrays & mask;
    enabled != (this$static.previouslyEnabledArrays & mask) && (enabled != 0?$enableVertexAttribArray(this$static.gl, i):$disableVertexAttribArray(this$static.gl, i));
    if (enabled != 0 && (this$static.useNioBuffer & mask) != 0) {
      data_0 = this$static.vertexAttribArrayState[i];
      if (!!previousNio && previousNio.nioBufferLimit >= data_0.nioBufferLimit) {
        if (this$static.boundArrayBuffer != previousNio.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_36, previousNio.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * previousElementSize);
      }
       else {
        if (this$static.boundArrayBuffer != data_0.webGlBuffer) {
          $bindBuffer(this$static.gl, $intern_36, data_0.webGlBuffer);
          this$static.boundArrayBuffer = data_0.webGlBuffer;
        }
        elementSize = getElementSize_3();
        null.$_nullMethod();
        if (data_0.nioBufferPosition * elementSize < data_0.stride) {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_36, $getTypedArray(data_0.nioBuffer, data_0.type_0, data_0.nioBufferLimit * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, data_0.nioBufferPosition * elementSize);
          previousNio = data_0;
          previousElementSize = elementSize;
        }
         else {
          null.$_nullMethod();
          $bufferData(this$static.gl, $intern_36, $getTypedArray(data_0.nioBuffer, data_0.type_0, (data_0.nioBufferLimit - data_0.nioBufferPosition) * elementSize), 35040);
          $vertexAttribPointer(this$static.gl, i, data_0.size_0, data_0.type_0, data_0.normalize, data_0.stride, 0);
        }
        null.$_nullMethod();
      }
    }
  }
  this$static.previouslyEnabledArrays = this$static.enabledArrays;
}

function HtmlGL20(){
  GL20.call(this, new HtmlGL20$1, ($clinit_HtmlUrlParameters() , checkGLErrors));
  this.programs = [undefined];
  this.shaders = [undefined];
  this.buffers = [undefined];
  this.frameBuffers = [undefined];
  this.textures = [undefined];
  this.uniforms = [undefined];
  this.vertexAttribArrayState = initUnidimensionalArray(Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit, $intern_3, 126, 5, 0, 1);
}

function getElementSize_3(){
  throw toJs(new RuntimeException_0('Unrecognized buffer type: ' + null.$_nullMethod()));
}

defineClass(270, 269, {}, HtmlGL20);
_.currProgram = 0;
_.enabledArrays = 0;
_.previouslyEnabledArrays = 0;
_.useNioBuffer = 0;
var Lplayn_html_HtmlGL20_2_classLit = createForClass(270);
function $createByteBuffer(size_0){
  var buffer;
  buffer = allocateDirect(size_0);
  $order(buffer, ($clinit_ByteOrder() , $clinit_ByteOrder() , NATIVE_ORDER));
  return buffer;
}

function HtmlGL20$1(){
  this.intBuffer = $asIntBuffer($createByteBuffer(128));
  this.floatBuffer = new FloatBuffer($slice($createByteBuffer(128)));
  this.shortBuffer = $asShortBuffer($createByteBuffer(64));
  $createByteBuffer(256);
}

defineClass(272, 271, {}, HtmlGL20$1);
var Lplayn_html_HtmlGL20$1_2_classLit = createForClass(272);
function $add_7(this$static, value_0){
  this$static.push(value_0);
  return this$static.length - 1;
}

function $remove_15(this$static, key){
  var value_0 = this$static[key];
  delete this$static[key];
  return value_0;
}

function HtmlGL20$VertexAttribArrayState(){
}

defineClass(126, 1, {126:1}, HtmlGL20$VertexAttribArrayState);
_.nioBufferLimit = 0;
_.nioBufferPosition = 0;
_.normalize = false;
_.size_0 = 0;
_.stride = 0;
_.type_0 = 0;
var Lplayn_html_HtmlGL20$VertexAttribArrayState_2_classLit = createForClass(126);
function $createCanvasImpl(this$static, scale, pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this$static, scale, elem));
}

function $screenSize(this$static){
  this$static.screenSize.width_0 = $doc.documentElement.clientWidth | 0;
  this$static.screenSize.height_0 = $doc.documentElement.clientHeight | 0;
  return this$static.screenSize;
}

function $setSize(this$static, width_0, height){
  var fbScale;
  this$static.rootElement.style['width'] = width_0 + ($clinit_Style$Unit() , 'px');
  this$static.rootElement.style['height'] = height + 'px';
  fbScale = new Scale(this$static.frameBufferPixelRatio);
  $setWidth(this$static.canvas, iceil(fbScale.factor * width_0));
  $setHeight(this$static.canvas, iceil(fbScale.factor * height));
  this$static.canvas.style['width'] = width_0 + 'px';
  this$static.canvas.style['height'] = height + 'px';
  $viewportChanged(this$static, this$static.canvas.width, this$static.canvas.height);
}

function $transformMouse(this$static, x_0, y_0){
  return $set(this$static.mousePoint, x_0 / this$static.mouseScale, y_0 / this$static.mouseScale);
}

function $updateTexture(this$static, tex, img){
  $glBindTexture(this$static.gl, tex);
  $glTexImage2D(this$static.gl, img);
}

function HtmlGraphics(plat, config){
  var attrs, doc, glc, root;
  Graphics.call(this, plat, new HtmlGL20, new Scale(config.scaleFactor));
  new HashMap;
  this.mousePoint = new Point;
  this.screenSize = new Dimension;
  this.frameBufferPixelRatio = config.frameBufferPixelRatio;
  this.mouseScale = config.scaleFactor / this.frameBufferPixelRatio;
  doc = $doc;
  this.dummyCanvas = doc.createElement('canvas');
  this.dummyCanvas.getContext('2d');
  root = $getElementById(doc, config.rootId);
  if (!root) {
    root = doc.createElement('div');
    root.setAttribute('style', 'width: 640px; height: 480px');
    $appendChild(doc.body, root);
  }
   else {
    root.innerHTML = '';
  }
  this.rootElement = root;
  this.measureElement = doc.createElement('div');
  this.measureElement.style['visibility'] = ($clinit_Style$Visibility() , 'hidden');
  this.measureElement.style['position'] = ($clinit_Style$Position() , 'absolute');
  this.measureElement.style['top'] = ($clinit_Style$Unit() , '-500.0px');
  this.measureElement.style['overflow'] = ($clinit_Style$Overflow() , 'visible');
  this.measureElement.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'nowrap');
  $appendChild(root, this.measureElement);
  this.canvas = $doc.createElement('canvas');
  $appendChild(root, this.canvas);
  $setSize(this, (root.offsetWidth || 0) | 0, (root.offsetHeight || 0) | 0);
  attrs = {premultipliedAlpha:false};
  attrs.alpha = false;
  $setAntialias(attrs, config.antiAliasing);
  glc = getContext(this.canvas, attrs);
  if (!glc)
    throw toJs(new RuntimeException_0('Unable to create GL context'));
  $init(this.gl, glc);
}

function cssColorString(color_0){
  var a, b, g, r;
  a = (color_0 >> 24 & 255) / 255;
  r = color_0 >> 16 & 255;
  g = color_0 >> 8 & 255;
  b = color_0 & 255;
  return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
}

defineClass(226, 225, {}, HtmlGraphics);
_.frameBufferPixelRatio = 0;
_.mouseScale = 0;
var experimentalScale = 1;
var Lplayn_html_HtmlGraphics_2_classLit = createForClass(226);
function $createErrorBitmap(pixelWidth, pixelHeight){
  var img;
  img = $doc.createElement('img');
  img.width = pixelWidth;
  img.height = pixelHeight;
  return img;
}

function $draw_3(this$static, ctx, x_0, y_0, width_0, height){
  $drawImage_0(ctx, this$static.img, x_0, y_0, width_0, height);
}

function $draw_4(this$static, ctx, dx, dy, dw, dh, sx, sy, sw, sh){
  sx *= this$static.scale_0.factor;
  sy *= this$static.scale_0.factor;
  sw *= this$static.scale_0.factor;
  sh *= this$static.scale_0.factor;
  $drawImage_1(ctx, this$static.img, sx, sy, sw, sh, dx, dy, dw, dh);
}

function $getRgb(this$static, startY, width_0, height, rgbArray, scanSize){
  var a, b, ctx, dst, g, i, imageData, pixelData, r, x_0, y_0;
  if (!this$static.canvas) {
    this$static.canvas = this$static.img.ownerDocument.createElement('canvas');
    $setHeight(this$static.canvas, this$static.img.height);
    $setWidth(this$static.canvas, this$static.img.width);
    $drawImage(this$static.canvas.getContext('2d'), this$static.img, 0, 0);
  }
  ctx = this$static.canvas.getContext('2d');
  imageData = ctx.getImageData(0, startY, width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      r = pixelData[i++] || 0;
      g = pixelData[i++] || 0;
      b = pixelData[i++] || 0;
      a = pixelData[i++] || 0;
      rgbArray[dst + x_0] = a << 24 | r << 16 | g << 8 | b;
    }
    dst += scanSize;
  }
}

function $setBitmap(this$static, bitmap){
  this$static.img = bitmap;
}

function $setRgb(this$static, width_0, height, rgbArray, scanSize){
  var argb, ctx, dst, i, imageData, pixelData, x_0, y_0;
  ctx = this$static.canvas.getContext('2d');
  imageData = ctx.createImageData(width_0, height);
  pixelData = imageData.data;
  i = 0;
  dst = 0;
  for (y_0 = 0; y_0 < height; y_0++) {
    for (x_0 = 0; x_0 < width_0; x_0++) {
      argb = rgbArray[dst + x_0];
      pixelData[i++] = argb >> 16 & 255;
      pixelData[i++] = argb >> 8 & 255;
      pixelData[i++] = argb & 255;
      pixelData[i++] = argb >> 24 & 255;
    }
    dst += scanSize;
  }
  ctx.putImageData(imageData, 0, 0);
}

function $upload(this$static, gfx, tex){
  $updateTexture(gfx, tex.id_0, this$static.img);
}

function HtmlImage(gfx, scale, elem){
  ImageImpl.call(this, gfx, scale, elem.width, elem.height, elem);
  this.canvas = elem;
}

function HtmlImage_0(gfx, scale, elem, source){
  var pstate;
  ImageImpl_0.call(this, gfx, ($clinit_RPromise() , new RPromise), scale, elem.width, elem.height, source);
  this.img = elem;
  pstate = this.state;
  if (this.img.complete)
    pstate.succeed(this);
  else {
    new HtmlInput$EventCloseHandler(this.img, 'load', new HtmlImage$1(this, scale), false);
    new HtmlInput$EventCloseHandler(this.img, 'error', new HtmlImage$2(this), false);
  }
}

defineClass(116, 172, {}, HtmlImage, HtmlImage_0);
_.draw = function draw_0(ctx, x_0, y_0, width_0, height){
  $draw_3(this, ctx, x_0, y_0, width_0, height);
}
;
_.toString_0 = function toString_38(){
  return 'Image[src=' + this.source + ', scale=' + this.scale_0 + ', size=' + $invScaled(this.scale_0, this.pixelWidth) + 'x' + $invScaled(this.scale_0, this.pixelHeight) + ', psize=' + this.pixelWidth + 'x' + this.pixelHeight + ', img=' + this.img + ', canvas=' + this.canvas + ']';
}
;
var Lplayn_html_HtmlImage_2_classLit = createForClass(116);
function HtmlImage$1(this$0, val$fscale){
  this.this$01 = this$0;
  this.val$fscale2 = val$fscale;
}

defineClass(340, 1, {}, HtmlImage$1);
_.handleEvent = function handleEvent(evt){
  $succeed_0(this.this$01, new ImageImpl$Data(this.val$fscale2, this.this$01.img, this.this$01.img.width, this.this$01.img.height));
}
;
var Lplayn_html_HtmlImage$1_2_classLit = createForClass(340);
function HtmlImage$2(this$0){
  this.this$01 = this$0;
}

defineClass(341, 1, {}, HtmlImage$2);
_.handleEvent = function handleEvent_0(evt){
  $fail_0(this.this$01, new RuntimeException_0('Error loading image ' + this.this$01.img.src));
}
;
var Lplayn_html_HtmlImage$2_2_classLit = createForClass(341);
function $dispatch_0(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
    $dispatchEvent(this$static.plat, this$static.keyboardEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
  }
}

function $dispatch_1(this$static, event_0, nevent){
  try {
    $setFlag(event_0, modifierFlags(!!nevent.altKey, !!nevent.ctrlKey, !!nevent.metaKey, !!nevent.shiftKey));
    $dispatchEvent(this$static.plat, this$static.mouseEvents, event_0);
  }
   finally {
    (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
  }
}

function $dispatch_2(this$static, events, nevent){
  var event_0, event$index, event$max;
  try {
    $dispatchEvent(this$static.plat, this$static.touchEvents, events);
  }
   finally {
    for (event$index = 0 , event$max = events.length; event$index < event$max; ++event$index) {
      event_0 = events[event$index];
      (event_0.flags & 1) != 0 && (nevent.preventDefault() , undefined);
    }
  }
}

function $handleRequestsInUserEventContext(this$static){
  this$static.isRequestingMouseLock && !$isMouseLocked() && $requestMouseLockImpl(this$static.rootElement);
}

function $isMouseLocked(){
  return !!($doc.pointerLockElement || $doc.webkitPointerLockElement || $doc.mozPointerLockElement);
}

function $requestMouseLockImpl(element){
  element.requestPointerLock = element.requestPointerLock || element.webkitRequestPointerLock || element.mozRequestPointerLock;
  element.requestPointerLock && element.requestPointerLock();
}

function $toTouchEvents(this$static, kind, nevent){
  var id_0, nativeTouches, nativeTouchesLen, t, time, touch, touches, x_0, xy, y_0;
  nativeTouches = nevent.changedTouches;
  nativeTouchesLen = nativeTouches.length;
  touches = initUnidimensionalArray(Lplayn_core_Touch$Event_2_classLit, $intern_3, 101, nativeTouchesLen, 0, 1);
  time = now_2();
  for (t = 0; t < nativeTouchesLen; t++) {
    touch = nativeTouches[t];
    x_0 = $getRelativeX(touch, this$static.rootElement);
    y_0 = $getRelativeY(touch, this$static.rootElement);
    xy = $transformMouse(this$static.plat.graphics, x_0, y_0);
    id_0 = nevent.changedTouches[t].identifier || 0;
    touches[t] = new Touch$Event(time, xy.x_0, xy.y_0, kind, id_0);
  }
  return touches;
}

function HtmlInput(hplat, root){
  this.mouseEvents = ($clinit_AbstractSignal() , new Signal);
  this.touchEvents = new Signal;
  this.keyboardEvents = new Signal;
  this.lastMousePt = new Point;
  this.plat = hplat;
  this.rootElement = root;
  capturePageEvent('keydown', new HtmlInput$1(this));
  capturePageEvent('keypress', new HtmlInput$2(this));
  capturePageEvent('keyup', new HtmlInput$3(this));
  new HtmlInput$EventCloseHandler($doc, 'contextmenu', new HtmlInput$4, false);
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousedown', new HtmlInput$5(this, this), true);
  capturePageEvent('mouseup', new HtmlInput$6(this, this));
  capturePageEvent('mousemove', new HtmlInput$7(this));
  new HtmlInput$EventCloseHandler(this.rootElement, 'mousemove', new HtmlInput$8(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, getMouseWheelEvent(), new HtmlInput$9(this), true);
  new HtmlInput$EventCloseHandler(this.rootElement, 'touchstart', new HtmlInput$10(this), true);
  capturePageEvent('touchmove', new HtmlInput$11(this));
  capturePageEvent('touchend', new HtmlInput$12(this));
}

function capturePageEvent(name_0, handler){
  return new HtmlInput$EventCloseHandler($doc, name_0, handler, true);
}

function getMouseButton(evt){
  switch ($eventGetButton(evt)) {
    case 1:
      return $clinit_Mouse$ButtonEvent$Id() , LEFT_0;
    case 4:
      return $clinit_Mouse$ButtonEvent$Id() , MIDDLE;
    case 2:
      return $clinit_Mouse$ButtonEvent$Id() , RIGHT_0;
    default:return null;
  }
}

function getMouseWheelEvent(){
  if (navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    return 'DOMMouseScroll';
  }
   else {
    return 'mousewheel';
  }
}

function getMouseWheelVelocity(evt){
  var delta = 0;
  var agentInfo = ($clinit_HtmlPlatform() , agentInfo_0);
  if (agentInfo.isFirefox) {
    agentInfo.isMacOS?(delta = 1 * evt.detail):(delta = 1 * evt.detail / 3);
  }
   else if (agentInfo.isOpera) {
    agentInfo.isLinux?(delta = -1 * evt.wheelDelta / 80):(delta = -1 * evt.wheelDelta / 40);
  }
   else if (agentInfo.isChrome || agentInfo.isSafari || agentInfo.isIE) {
    delta = -1 * evt.wheelDelta / 120;
    Math.abs(delta) < 1 && (agentInfo.isWindows?(delta = -1 * evt.wheelDelta):agentInfo.isMacOS && (delta = -1 * evt.wheelDelta / 3));
  }
  return delta;
}

function getRelativeX(e, target){
  return (((e.clientX || 0) | 0) - $getAbsoluteLeft(target) + $getScrollLeft_0(target) + $getScrollLeft(target.ownerDocument)) / experimentalScale;
}

function getRelativeY(e, target){
  return (((e.clientY || 0) | 0) - $getAbsoluteTop(target) + ((target.scrollTop || 0) | 0) + $getScrollTop(target.ownerDocument)) / experimentalScale;
}

function keyForCode(keyCode){
  switch (keyCode) {
    case 18:
      return $clinit_Key() , ALT;
    case 8:
      return $clinit_Key() , BACKSPACE;
    case 17:
      return $clinit_Key() , CONTROL;
    case 46:
      return $clinit_Key() , DELETE;
    case 40:
      return $clinit_Key() , DOWN;
    case 35:
      return $clinit_Key() , END;
    case 13:
      return $clinit_Key() , ENTER;
    case 27:
      return $clinit_Key() , ESCAPE;
    case 36:
      return $clinit_Key() , HOME;
    case 37:
      return $clinit_Key() , LEFT;
    case 34:
      return $clinit_Key() , PAGE_DOWN;
    case 33:
      return $clinit_Key() , PAGE_UP;
    case 39:
      return $clinit_Key() , RIGHT;
    case 16:
      return $clinit_Key() , SHIFT;
    case 9:
      return $clinit_Key() , TAB;
    case 38:
      return $clinit_Key() , UP;
    case 19:
      return $clinit_Key() , PAUSE;
    case 20:
      return $clinit_Key() , CAPS_LOCK;
    case 32:
      return $clinit_Key() , SPACE;
    case 45:
      return $clinit_Key() , INSERT;
    case 48:
      return $clinit_Key() , K0;
    case 49:
      return $clinit_Key() , K1;
    case 50:
      return $clinit_Key() , K2;
    case 51:
      return $clinit_Key() , K3;
    case 52:
      return $clinit_Key() , K4;
    case 53:
      return $clinit_Key() , K5;
    case 54:
      return $clinit_Key() , K6;
    case 55:
      return $clinit_Key() , K7;
    case 56:
      return $clinit_Key() , K8;
    case 57:
      return $clinit_Key() , K9;
    case 65:
      return $clinit_Key() , A;
    case 66:
      return $clinit_Key() , B;
    case 67:
      return $clinit_Key() , C;
    case 68:
      return $clinit_Key() , D;
    case 69:
      return $clinit_Key() , E_0;
    case 70:
      return $clinit_Key() , F_0;
    case 71:
      return $clinit_Key() , G;
    case 72:
      return $clinit_Key() , H;
    case 73:
      return $clinit_Key() , I;
    case 74:
      return $clinit_Key() , J;
    case 75:
      return $clinit_Key() , K;
    case 76:
      return $clinit_Key() , L;
    case 77:
      return $clinit_Key() , M;
    case 78:
      return $clinit_Key() , N;
    case 79:
      return $clinit_Key() , O;
    case 80:
      return $clinit_Key() , P;
    case 81:
      return $clinit_Key() , Q;
    case 82:
      return $clinit_Key() , R;
    case 83:
      return $clinit_Key() , S;
    case 84:
      return $clinit_Key() , T;
    case 85:
      return $clinit_Key() , U;
    case 86:
      return $clinit_Key() , V;
    case 87:
      return $clinit_Key() , W;
    case 88:
      return $clinit_Key() , X;
    case 89:
      return $clinit_Key() , Y;
    case 90:
      return $clinit_Key() , Z;
    case 92:
    case 91:
      return $clinit_Key() , WINDOWS;
    case 96:
      return $clinit_Key() , NP0;
    case 97:
      return $clinit_Key() , NP1;
    case 98:
      return $clinit_Key() , NP2;
    case 99:
      return $clinit_Key() , NP3;
    case 100:
      return $clinit_Key() , NP4;
    case 101:
      return $clinit_Key() , NP5;
    case 102:
      return $clinit_Key() , NP6;
    case 103:
      return $clinit_Key() , NP7;
    case 104:
      return $clinit_Key() , NP8;
    case 105:
      return $clinit_Key() , NP9;
    case 106:
      return $clinit_Key() , NP_MULTIPLY;
    case 107:
      return $clinit_Key() , NP_ADD;
    case 109:
      return $clinit_Key() , NP_SUBTRACT;
    case 110:
      return $clinit_Key() , NP_DECIMAL;
    case 111:
      return $clinit_Key() , NP_DIVIDE;
    case 112:
      return $clinit_Key() , F1;
    case 113:
      return $clinit_Key() , F2;
    case 114:
      return $clinit_Key() , F3;
    case 115:
      return $clinit_Key() , F4;
    case 116:
      return $clinit_Key() , F5;
    case 117:
      return $clinit_Key() , F6;
    case 118:
      return $clinit_Key() , F7;
    case 119:
      return $clinit_Key() , F8;
    case 120:
      return $clinit_Key() , F9;
    case 121:
      return $clinit_Key() , F10;
    case 122:
      return $clinit_Key() , F11;
    case 123:
      return $clinit_Key() , F12;
    case 144:
      return $clinit_Key() , NP_NUM_LOCK;
    case 145:
      return $clinit_Key() , SCROLL_LOCK;
    case 186:
      return $clinit_Key() , SEMICOLON;
    case 187:
      return $clinit_Key() , EQUALS;
    case 188:
      return $clinit_Key() , COMMA;
    case 189:
      return $clinit_Key() , MINUS;
    case 190:
      return $clinit_Key() , PERIOD;
    case 191:
      return $clinit_Key() , SLASH;
    case 192:
      return $clinit_Key() , BACKQUOTE;
    case 219:
      return $clinit_Key() , LEFT_BRACKET;
    case 220:
      return $clinit_Key() , BACKSLASH;
    case 221:
      return $clinit_Key() , RIGHT_BRACKET;
    case 222:
      return $clinit_Key() , QUOTE;
    default:return $clinit_Key() , UNKNOWN;
  }
}

defineClass(231, 230, {}, HtmlInput);
_.inDragSequence = false;
_.inTouchSequence = false;
_.isRequestingMouseLock = false;
var Lplayn_html_HtmlInput_2_classLit = createForClass(231);
function HtmlInput$1(this$0){
  this.this$01 = this$0;
}

defineClass(232, 1, {}, HtmlInput$1);
_.handleEvent = function handleEvent_1(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, true), nevent);
}
;
var Lplayn_html_HtmlInput$1_2_classLit = createForClass(232);
function HtmlInput$10(this$0){
  this.this$01 = this$0;
}

defineClass(241, 1, {}, HtmlInput$10);
_.handleEvent = function handleEvent_2(nevent){
  this.this$01.inTouchSequence = true;
  $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , START), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$10_2_classLit = createForClass(241);
function HtmlInput$11(this$0){
  this.this$01 = this$0;
}

defineClass(242, 1, {}, HtmlInput$11);
_.handleEvent = function handleEvent_3(nevent){
  this.this$01.inTouchSequence && $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , MOVE), nevent), nevent);
}
;
var Lplayn_html_HtmlInput$11_2_classLit = createForClass(242);
function HtmlInput$12(this$0){
  this.this$01 = this$0;
}

defineClass(243, 1, {}, HtmlInput$12);
_.handleEvent = function handleEvent_4(nevent){
  if (this.this$01.inTouchSequence) {
    $dispatch_2(this.this$01, $toTouchEvents(this.this$01, ($clinit_Touch$Event$Kind() , END_0), nevent), nevent);
    nevent.touches.length == 0 && (this.this$01.inTouchSequence = false);
  }
}
;
var Lplayn_html_HtmlInput$12_2_classLit = createForClass(243);
function HtmlInput$1XYEventHandler(this$0){
  this.this$01_0 = this$0;
}

defineClass(122, 1, {});
_.handleEvent = function handleEvent_5(ev){
  var xy;
  xy = $transformMouse(this.this$01_0.plat.graphics, getRelativeX(ev, this.this$01_0.rootElement), getRelativeY(ev, this.this$01_0.rootElement));
  this.handleEvent_0(ev, xy.x_0, xy.y_0);
}
;
var Lplayn_html_HtmlInput$1XYEventHandler_2_classLit = createForClass(122);
function HtmlInput$1MoveEventHandler(this$0){
  this.this$01 = this$0;
  this.this$01_0 = this$0;
}

defineClass(150, 122, {});
_.handleEvent_0 = function handleEvent_6(ev, x_0, y_0){
  var dx, dy;
  if (this.lastX == -1) {
    this.lastX = x_0;
    this.lastY = y_0;
  }
  if (this.this$01.inDragSequence == this.wantDragSequence()) {
    if ($isMouseLocked()) {
      dx = ev.webkitMovementX;
      dy = ev.webkitMovementY;
    }
     else {
      dx = x_0 - this.lastX;
      dy = y_0 - this.lastY;
    }
    $dispatch_1(this.this$01, new Mouse$MotionEvent(now_2(), x_0, y_0, dx, dy), ev);
  }
  this.lastX = x_0;
  this.lastY = y_0;
  $set(this.this$01.lastMousePt, x_0, y_0);
}
;
_.lastX = -1;
_.lastY = -1;
var Lplayn_html_HtmlInput$1MoveEventHandler_2_classLit = createForClass(150);
function HtmlInput$2(this$0){
  this.this$01 = this$0;
}

defineClass(233, 1, {}, HtmlInput$2);
_.handleEvent = function handleEvent_7(nevent){
  $dispatch_0(this.this$01, new Keyboard$TypedEvent(now_2(), (nevent.charCode || 0) & $intern_25), nevent);
}
;
var Lplayn_html_HtmlInput$2_2_classLit = createForClass(233);
function HtmlInput$3(this$0){
  this.this$01 = this$0;
}

defineClass(234, 1, {}, HtmlInput$3);
_.handleEvent = function handleEvent_8(nevent){
  var key;
  key = keyForCode(nevent.keyCode | 0);
  $dispatch_0(this.this$01, new Keyboard$KeyEvent(now_2(), key, false), nevent);
}
;
var Lplayn_html_HtmlInput$3_2_classLit = createForClass(234);
function HtmlInput$4(){
}

defineClass(235, 1, {}, HtmlInput$4);
_.handleEvent = function handleEvent_9(evt){
  evt.preventDefault();
  evt.stopPropagation();
}
;
var Lplayn_html_HtmlInput$4_2_classLit = createForClass(235);
function HtmlInput$5(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(236, 122, {}, HtmlInput$5);
_.handleEvent_0 = function handleEvent_10(ev, x_0, y_0){
  var btn;
  this.this$02.inDragSequence = true;
  btn = getMouseButton(ev);
  !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, true), ev);
}
;
var Lplayn_html_HtmlInput$5_2_classLit = createForClass(236);
function HtmlInput$6(this$0, this$0_1){
  this.this$02 = this$0_1;
  HtmlInput$1XYEventHandler.call(this, this$0);
}

defineClass(237, 122, {}, HtmlInput$6);
_.handleEvent_0 = function handleEvent_11(ev, x_0, y_0){
  var btn;
  if (this.this$02.inDragSequence) {
    this.this$02.inDragSequence = false;
    btn = getMouseButton(ev);
    !!btn && $dispatch_1(this.this$02, new Mouse$ButtonEvent(now_2(), x_0, y_0, btn, false), ev);
  }
  $handleRequestsInUserEventContext(this.this$02);
}
;
var Lplayn_html_HtmlInput$6_2_classLit = createForClass(237);
function HtmlInput$7(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(238, 150, {}, HtmlInput$7);
_.wantDragSequence = function wantDragSequence(){
  return true;
}
;
var Lplayn_html_HtmlInput$7_2_classLit = createForClass(238);
function HtmlInput$8(this$0){
  HtmlInput$1MoveEventHandler.call(this, this$0);
}

defineClass(239, 150, {}, HtmlInput$8);
_.wantDragSequence = function wantDragSequence_0(){
  return false;
}
;
var Lplayn_html_HtmlInput$8_2_classLit = createForClass(239);
function HtmlInput$9(this$0){
  this.this$01 = this$0;
}

defineClass(240, 1, {}, HtmlInput$9);
_.handleEvent = function handleEvent_12(ev){
  var vel;
  vel = getMouseWheelVelocity(ev);
  $dispatch_1(this.this$01, new Mouse$WheelEvent(now_2(), this.this$01.lastMousePt.x_0, this.this$01.lastMousePt.y_0, vel), ev);
}
;
var Lplayn_html_HtmlInput$9_2_classLit = createForClass(240);
function $addEventListener(closeHandler, target, name_0, handler, capture){
  var listener = function(e){
    handler.handleEvent(e);
  }
  ;
  target.addEventListener(name_0, listener, capture);
  closeHandler.setListener(listener);
}

function HtmlInput$EventCloseHandler(target, name_0, eventHandler, capture){
  $addEventListener(this, target, name_0, eventHandler, capture);
}

defineClass(52, 1, {}, HtmlInput$EventCloseHandler);
_.setListener = function setListener(listener){
}
;
var Lplayn_html_HtmlInput$EventCloseHandler_2_classLit = createForClass(52);
defineClass(259, 258, {});
var Lplayn_html_HtmlLog_2_classLit = createForClass(259);
function HtmlLogSimple(){
  this.minLevel = ($clinit_Log$Level() , DEBUG);
}

defineClass(260, 259, {}, HtmlLogSimple);
var Lplayn_html_HtmlLogSimple_2_classLit = createForClass(260);
function $clinit_HtmlPlatform(){
  var userAgent;
  $clinit_HtmlPlatform = emptyMethod;
  agentInfo_0 = (userAgent = navigator.userAgent.toLowerCase() , {isFirefox:userAgent.indexOf('firefox') != -1, isChrome:userAgent.indexOf('chrome') != -1, isSafari:userAgent.indexOf('safari') != -1, isOpera:userAgent.indexOf('opera') != -1, isIE:userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1, isMacOS:userAgent.indexOf('mac') != -1, isLinux:userAgent.indexOf('linux') != -1, isWindows:userAgent.indexOf('win') != -1});
}

function $listenForVisibilityChange(plat){
  $doc.addEventListener('visibilitychange', function(){
    plat.visibilityChanged();
  }
  , false);
}

function $requestAnimationFrame(callback){
  var fn = function(){
    callback.run();
  }
  ;
  $wnd.requestAnimationFrame?$wnd.requestAnimationFrame(fn):$wnd.mozRequestAnimationFrame?$wnd.mozRequestAnimationFrame(fn):$wnd.webkitRequestAnimationFrame?$wnd.webkitRequestAnimationFrame(fn):$wnd.setTimeout(fn, 20);
}

function $scheduleBackgroundFrame(millis, callback){
  $wnd.setTimeout(function(){
    callback.run();
  }
  , millis);
}

function $tick(this$static){
  return round_int(now_2() - this$static.start_0);
}

function HtmlPlatform(config){
  $clinit_HtmlPlatform();
  var e;
  this.lifecycle = ($clinit_AbstractSignal() , new Signal);
  this.frame_0 = new Signal;
  this.errors = new Signal;
  this.start_0 = initNow();
  this.log_0 = new HtmlLogSimple;
  this.exec_0 = new Exec$Default(this);
  setUncaughtExceptionHandler(new HtmlPlatform$1(this));
  $info(this.log_0, 'DPR ' + devicePixelRatio_0() + ' BSPR ' + ($wnd.webkitBackingStorePixelRatio || 1));
  try {
    this.backgroundFrameMillis = 0;
    this.graphics = new HtmlGraphics(this, config);
    this.input_0 = new HtmlInput(this, this.graphics.rootElement);
    this.audio = new HtmlAudio(this);
    this.assets = new HtmlAssets(this);
    new HtmlStorage;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      e = $e0;
      $error_0(this.log_0, e);
      alert_0('failed to init(): ' + e.getMessage());
      throw toJs(new RuntimeException_2(e));
    }
     else 
      throw toJs($e0);
  }
}

function devicePixelRatio_0(){
  $clinit_HtmlPlatform();
  return $wnd.devicePixelRatio || 1;
}

function initNow(){
  function now_0(){
    return +new Date;
  }

  !Date.now && (Date.now = now_0);
  return Date.now();
}

function now_2(){
  $clinit_HtmlPlatform();
  return Date.now();
}

defineClass(195, 120, {120:1}, HtmlPlatform);
_.visibilityChanged = function visibilityChanged(){
  var isHidden;
  isHidden = $doc.hidden;
  $dispatchEvent(this, this.lifecycle, isHidden?($clinit_Platform$Lifecycle() , PAUSE_0):($clinit_Platform$Lifecycle() , RESUME));
  isHidden && this.backgroundFrameMillis > 0 && $scheduleBackgroundFrame(this.backgroundFrameMillis, new HtmlPlatform$3(this));
}
;
_.backgroundFrameMillis = 0;
_.start_0 = 0;
var agentInfo_0;
var Lplayn_html_HtmlPlatform_2_classLit = createForClass(195);
function HtmlPlatform$1(this$0){
  this.this$01 = this$0;
}

defineClass(208, 1, {}, HtmlPlatform$1);
var Lplayn_html_HtmlPlatform$1_2_classLit = createForClass(208);
function HtmlPlatform$2(this$0){
  this.this$01 = this$0;
}

defineClass(198, 1, $intern_31, HtmlPlatform$2);
_.run = function run_3(){
  $requestAnimationFrame(this);
  $emitFrame(this.this$01);
}
;
var Lplayn_html_HtmlPlatform$2_2_classLit = createForClass(198);
function HtmlPlatform$3(this$0){
  this.this$01 = this$0;
}

defineClass(209, 1, $intern_31, HtmlPlatform$3);
_.run = function run_4(){
  if ($doc.hidden) {
    $scheduleBackgroundFrame(this.this$01.backgroundFrameMillis, this);
    $emitFrame(this.this$01);
  }
}
;
var Lplayn_html_HtmlPlatform$3_2_classLit = createForClass(209);
function HtmlPlatform$Config(){
  requestedMode();
  this.scaleFactor = devicePixelRatio_0();
  this.frameBufferPixelRatio = devicePixelRatio_0();
}

defineClass(194, 1, {}, HtmlPlatform$Config);
_.antiAliasing = true;
_.frameBufferPixelRatio = 0;
_.rootId = 'playn-root';
_.scaleFactor = 0;
var Lplayn_html_HtmlPlatform$Config_2_classLit = createForClass(194);
function $setLoopingImpl(this$static, looping){
  this$static.impl.setLooping_0(looping);
}

function $setVolumeImpl(this$static, volume){
  this$static.impl.setVolume_0(round_int(volume * 100));
}

function HtmlSound(exec_0, sound){
  Sound.call(this, new Exec$1(exec_0));
  $addEventHandler(sound, new HtmlSound$1(this, sound));
}

defineClass(344, 343, {}, HtmlSound);
var Lplayn_html_HtmlSound_2_classLit = createForClass(344);
function $onSoundLoadStateChange(this$static, event_0){
  var loadState;
  loadState = event_0.loadState;
  switch (loadState.ordinal) {
    case 5:
    case 4:
      break;
    case 2:
    case 1:
    case 3:
      $succeed_1(this$static.this$01, this$static.val$sound2);
      break;
    case 0:
      $fail_1(this$static.this$01, new Exception(loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal));
      break;
    default:throw toJs(new RuntimeException_0('Unrecognized sound load state ' + (loadState.name_0 != null?loadState.name_0:'' + loadState.ordinal)));
  }
}

function HtmlSound$1(this$0, val$sound){
  this.this$01 = this$0;
  this.val$sound2 = val$sound;
}

defineClass(345, 1, {455:1}, HtmlSound$1);
var Lplayn_html_HtmlSound$1_2_classLit = createForClass(345);
function HtmlStorage(){
  var storage;
  storage = (!localStorage_0 && ($clinit_Storage$StorageSupportDetector() , localStorageSupported) && (localStorage_0 = new Storage_0) , localStorage_0);
  storage?new StorageMap(storage):new HashMap;
}

defineClass(245, 1, {}, HtmlStorage);
var Lplayn_html_HtmlStorage_2_classLit = createForClass(245);
function $clinit_HtmlUrlParameters(){
  $clinit_HtmlUrlParameters = emptyMethod;
  checkGLErrors = $equals('check', getParameter('glerrors'));
  $equals('quad', getParameter('glshader'));
}

var checkGLErrors = false;
function requestedMode(){
  var renderer;
  renderer = getParameter('renderer');
  if ($equals('canvas', renderer)) {
    return 1;
  }
   else if ($equals('gl', renderer)) {
    return 0;
  }
  return 2;
}

function $setHandler(this$static, handler){
  var _this = this$static;
  this$static.onerror = $entry(function(){
    handler.onError(_this);
  }
  );
  this$static.onload = $entry(function(){
    handler.onLoad(_this);
  }
  );
  this$static.onprogress = $entry(function(){
    handler.onProgress(_this);
  }
  );
  this$static.ontimeout = $entry(function(){
    handler.onTimeout(_this);
  }
  );
}

function $isSet(this$static, flag){
  return (this$static.flags & flag.bitmask) != 0;
}

function $name_0(this$static){
  if (this$static.name_0 == null) {
    this$static.name_0 = $getName(this$static.___clazz);
    this$static.name_0 = checkNotNull($substring(this$static.name_0, this$static.name_0.lastIndexOf('.') + 1));
  }
  return this$static.name_0;
}

function $setFlag_0(this$static, flag, active){
  active?(this$static.flags |= flag.bitmask):(this$static.flags &= ~flag.bitmask);
}

function $setState(this$static, state){
  $updateAndNotify(this$static.state, state);
}

function $transform(this$static){
  var cosa, m00, m01, m10, m11, sina, tx, ty;
  if ($isSet(this$static, ($clinit_Layer$Flag() , XFDIRTY))) {
    sina = $wnd.Math.sin(this$static.rotation);
    cosa = $wnd.Math.cos(this$static.rotation);
    m00 = cosa * this$static.scaleX;
    m01 = sina * this$static.scaleY;
    m10 = -sina * this$static.scaleX;
    m11 = cosa * this$static.scaleY;
    tx = this$static.transform.tx;
    ty = this$static.transform.ty;
    $setTransform(this$static.transform, m00, m01, m10, m11, tx, ty);
    $setFlag_0(this$static, XFDIRTY, false);
  }
  return this$static.transform;
}

defineClass(78, 1, $intern_38);
_.toString_0 = function toString_39(){
  var buf;
  buf = new StringBuilder_0($name_0(this));
  $append_7($append_4((buf.string += ' @ ' , buf), hashCode__I__devirtual$(this)), ' [');
  this.toString_1(buf);
  return (buf.string += ']' , buf).string;
}
;
_.toString_1 = function toString_40(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
}
;
_.flags = 0;
_.rotation = 0;
_.scaleX = 1;
_.scaleY = 1;
var Lplayn_scene_Layer_2_classLit = createForClass(78);
defineClass(307, 78, $intern_38);
var Lplayn_scene_ClippedLayer_2_classLit = createForClass(307);
defineClass(308, 307, $intern_38);
_.iterator = function iterator_15(){
  return new ArrayList$1(this.children);
}
;
_.toString_1 = function toString_41(buf){
  $append_6((buf.string += 'tx=' , buf), $transform(this));
  $append_4((buf.string += ', children=' , buf), this.children.array.length);
}
;
var Lplayn_scene_GroupLayer_2_classLit = createForClass(308);
function $clinit_Layer$Flag(){
  $clinit_Layer$Flag = emptyMethod;
  VISIBLE_1 = new Layer$Flag('VISIBLE', 0, 1);
  INTERACTIVE = new Layer$Flag('INTERACTIVE', 1, 2);
  XFDIRTY = new Layer$Flag('XFDIRTY', 2, 4);
  ODIRTY = new Layer$Flag('ODIRTY', 3, 8);
}

function Layer$Flag(enum$name, enum$ordinal, bitmask){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitmask = bitmask;
}

function values_14(){
  $clinit_Layer$Flag();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Flag_2_classLit, 1), $intern_1, 79, 0, [VISIBLE_1, INTERACTIVE, XFDIRTY, ODIRTY]);
}

defineClass(79, 6, {3:1, 8:1, 6:1, 79:1}, Layer$Flag);
_.bitmask = 0;
var INTERACTIVE, ODIRTY, VISIBLE_1, XFDIRTY;
var Lplayn_scene_Layer$Flag_2_classLit = createForEnum(79, values_14);
function $clinit_Layer$Origin(){
  $clinit_Layer$Origin = emptyMethod;
  FIXED_0 = new Layer$Origin$1;
  CENTER = new Layer$Origin$2;
  UL = new Layer$Origin$3;
  UR = new Layer$Origin$4;
  LL = new Layer$Origin$5;
  LR = new Layer$Origin$6;
  TC = new Layer$Origin$7;
  BC = new Layer$Origin$8;
  LC = new Layer$Origin$9;
  RC = new Layer$Origin$10;
}

function Layer$Origin(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_15(){
  $clinit_Layer$Origin();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$Origin_2_classLit, 1), $intern_1, 17, 0, [FIXED_0, CENTER, UL, UR, LL, LR, TC, BC, LC, RC]);
}

defineClass(17, 6, $intern_39);
var BC, CENTER, FIXED_0, LC, LL, LR, RC, TC, UL, UR;
var Lplayn_scene_Layer$Origin_2_classLit = createForEnum(17, values_15);
function Layer$Origin$1(){
  Layer$Origin.call(this, 'FIXED', 0);
}

defineClass(310, 17, $intern_39, Layer$Origin$1);
var Lplayn_scene_Layer$Origin$1_2_classLit = createForEnum(310, null);
function Layer$Origin$10(){
  Layer$Origin.call(this, 'RC', 9);
}

defineClass(319, 17, $intern_39, Layer$Origin$10);
var Lplayn_scene_Layer$Origin$10_2_classLit = createForEnum(319, null);
function Layer$Origin$2(){
  Layer$Origin.call(this, 'CENTER', 1);
}

defineClass(311, 17, $intern_39, Layer$Origin$2);
var Lplayn_scene_Layer$Origin$2_2_classLit = createForEnum(311, null);
function Layer$Origin$3(){
  Layer$Origin.call(this, 'UL', 2);
}

defineClass(312, 17, $intern_39, Layer$Origin$3);
var Lplayn_scene_Layer$Origin$3_2_classLit = createForEnum(312, null);
function Layer$Origin$4(){
  Layer$Origin.call(this, 'UR', 3);
}

defineClass(313, 17, $intern_39, Layer$Origin$4);
var Lplayn_scene_Layer$Origin$4_2_classLit = createForEnum(313, null);
function Layer$Origin$5(){
  Layer$Origin.call(this, 'LL', 4);
}

defineClass(314, 17, $intern_39, Layer$Origin$5);
var Lplayn_scene_Layer$Origin$5_2_classLit = createForEnum(314, null);
function Layer$Origin$6(){
  Layer$Origin.call(this, 'LR', 5);
}

defineClass(315, 17, $intern_39, Layer$Origin$6);
var Lplayn_scene_Layer$Origin$6_2_classLit = createForEnum(315, null);
function Layer$Origin$7(){
  Layer$Origin.call(this, 'TC', 6);
}

defineClass(316, 17, $intern_39, Layer$Origin$7);
var Lplayn_scene_Layer$Origin$7_2_classLit = createForEnum(316, null);
function Layer$Origin$8(){
  Layer$Origin.call(this, 'BC', 7);
}

defineClass(317, 17, $intern_39, Layer$Origin$8);
var Lplayn_scene_Layer$Origin$8_2_classLit = createForEnum(317, null);
function Layer$Origin$9(){
  Layer$Origin.call(this, 'LC', 8);
}

defineClass(318, 17, $intern_39, Layer$Origin$9);
var Lplayn_scene_Layer$Origin$9_2_classLit = createForEnum(318, null);
function $clinit_Layer$State(){
  $clinit_Layer$State = emptyMethod;
  REMOVED = new Layer$State('REMOVED', 0);
  ADDED = new Layer$State('ADDED', 1);
  DISPOSED = new Layer$State('DISPOSED', 2);
}

function Layer$State(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_16(){
  $clinit_Layer$State();
  return stampJavaTypeInfo(getClassLiteralForArray(Lplayn_scene_Layer$State_2_classLit, 1), $intern_1, 94, 0, [REMOVED, ADDED, DISPOSED]);
}

defineClass(94, 6, {3:1, 8:1, 6:1, 94:1}, Layer$State);
var ADDED, DISPOSED, REMOVED;
var Lplayn_scene_Layer$State_2_classLit = createForEnum(94, values_16);
function RootLayer(){
  this.state = ($clinit_AbstractValue() , new Value(($clinit_Layer$State() , REMOVED)));
  this.transform = new AffineTransform;
  $clinit_Layer$Origin();
  $setFlag_0(this, ($clinit_Layer$Flag() , VISIBLE_1), true);
  this.children = new ArrayList;
  new AffineTransform;
  $setState(this, ADDED);
}

defineClass(309, 308, $intern_38, RootLayer);
var Lplayn_scene_RootLayer_2_classLit = createForClass(309);
function $createDefaultBatch(gl){
  var maxVecs;
  try {
    maxVecs = usableMaxUniformVectors(gl);
    if (maxVecs >= 48)
      return new UniformQuadBatch(gl);
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (!instanceOf($e0, 12))
      throw toJs($e0);
  }
  return new TriangleBatch(gl);
}

function SceneGame(plat){
  var gl;
  $clinit_AbstractSignal();
  this.paint = new Signal;
  this.updateClock = new Clock;
  this.paintClock = new Clock;
  this.plat = plat;
  this.updateRate = 33;
  $addConnection(plat.frame_0, new Game$1(this));
  gl = plat.graphics.gl;
  gl.gl.disable(2884);
  gl.gl.enable(3042);
  gl.gl.blendFunc(1, 771);
  this.defaultBatch = $createDefaultBatch(gl);
  this.viewSurf = new Surface(plat.graphics, plat.graphics.defaultRenderTarget, this.defaultBatch);
  new RootLayer;
  $atPrio($addConnection(this.paint, new SceneGame$1(this)), -1);
}

defineClass(216, 215, {});
var Lplayn_scene_SceneGame_2_classLit = createForClass(216);
function SceneGame$1(this$0){
  this.this$01 = this$0;
}

defineClass(219, 40, $intern_32, SceneGame$1);
_.onEmit = function onEmit_1(clock){
  var lastArg;
  $paintScene((lastArg = this , clock , lastArg).this$01);
}
;
var Lplayn_scene_SceneGame$1_2_classLit = createForClass(219);
defineClass(159, 1, {159:1});
_.equals_0 = function equals_20(obj){
  var d;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 82)) {
    d = obj;
    return d.width_0 == this.width_0 && d.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_23(){
  return round_int(this.width_0) ^ round_int(this.height_0);
}
;
_.toString_0 = function toString_42(){
  return $clinit_Dimensions() , this.width_0 + 'x' + this.height_0;
}
;
var Lpythagoras_f_AbstractDimension_2_classLit = createForClass(159);
defineClass(158, 1, {158:1, 58:1});
_.equals_0 = function equals_21(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 81)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_24(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_43(){
  return pointToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractPoint_2_classLit = createForClass(158);
defineClass(435, 1, {});
var Lpythagoras_f_AbstractTransform_2_classLit = createForClass(435);
defineClass(168, 1, {168:1, 58:1});
_.equals_0 = function equals_22(obj){
  var p;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 44)) {
    p = obj;
    return this.x_0 == p.x_0 && this.y_0 == p.y_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_25(){
  return round_int(this.x_0) ^ round_int(this.y_0);
}
;
_.toString_0 = function toString_44(){
  return vectorToString(this.x_0, this.y_0);
}
;
var Lpythagoras_f_AbstractVector_2_classLit = createForClass(168);
function $copy(this$static){
  return new AffineTransform_0(this$static.m00, this$static.m01, this$static.m10, this$static.m11, this$static.tx, this$static.ty);
}

function $scale_2(this$static, scaleX, scaleY){
  this$static.m00 *= scaleX;
  this$static.m01 *= scaleX;
  this$static.m10 *= scaleY;
  this$static.m11 *= scaleY;
  return this$static;
}

function $setTransform(this$static, m00, m01, m10, m11, tx, ty){
  this$static.m00 = m00;
  this$static.m01 = m01;
  this$static.m10 = m10;
  this$static.m11 = m11;
  this$static.tx = tx;
  this$static.ty = ty;
  return this$static;
}

function $transform_0(this$static, p, into){
  var x_0, y_0;
  x_0 = p.x_0;
  y_0 = p.y_0;
  return $set(into, this$static.m00 * x_0 + this$static.m10 * y_0 + this$static.tx, this$static.m01 * x_0 + this$static.m11 * y_0 + this$static.ty);
}

function $transform_1(this$static, v, into){
  var x_0, y_0;
  x_0 = v.x_0;
  y_0 = v.y_0;
  return $set_0(into, this$static.m00 * x_0 + this$static.m10 * y_0, this$static.m01 * x_0 + this$static.m11 * y_0);
}

function $translate_0(this$static, tx, ty){
  this$static.tx += this$static.m00 * tx + this$static.m10 * ty;
  this$static.ty += this$static.m11 * ty + this$static.m01 * tx;
  return this$static;
}

function AffineTransform(){
  AffineTransform_0.call(this, 1, 0, 0, 1, 0, 0);
}

function AffineTransform_0(m00, m01, m10, m11, tx, ty){
  this.m00 = m00;
  this.m01 = m01;
  this.m10 = m10;
  this.m11 = m11;
  this.tx = tx;
  this.ty = ty;
}

defineClass(83, 435, {83:1}, AffineTransform, AffineTransform_0);
_.toString_0 = function toString_45(){
  return this.m00 != 1 || this.m01 != 0 || this.m10 != 0 || this.m11 != 1?'affine [' + toString_46(this.m00, TO_STRING_DECIMAL_PLACES) + ' ' + toString_46(this.m01, TO_STRING_DECIMAL_PLACES) + ' ' + toString_46(this.m10, TO_STRING_DECIMAL_PLACES) + ' ' + toString_46(this.m11, TO_STRING_DECIMAL_PLACES) + ' ' + new Vector_0(this.tx, this.ty) + ']':this.tx != 0 || this.ty != 0?'trans ' + new Vector_0(this.tx, this.ty):'ident';
}
;
_.m00 = 0;
_.m01 = 0;
_.m10 = 0;
_.m11 = 0;
_.tx = 0;
_.ty = 0;
var Lpythagoras_f_AffineTransform_2_classLit = createForClass(83);
function Dimension(){
  Dimension_0.call(this);
}

function Dimension_0(){
  this.width_0 = 0;
  this.height_0 = 0;
}

defineClass(82, 159, {3:1, 159:1, 82:1}, Dimension, Dimension_0);
_.height_0 = 0;
_.width_0 = 0;
var Lpythagoras_f_Dimension_2_classLit = createForClass(82);
function $clinit_Dimensions(){
  $clinit_Dimensions = emptyMethod;
  new Dimension_0;
}

function iceil(v){
  var iv;
  iv = round_int(v);
  return v <= 0 || iv == v || iv == $intern_0?iv:iv + 1;
}

function ifloor(v){
  var iv;
  iv = round_int(v);
  return v >= 0 || iv == v || iv == $intern_26?iv:iv - 1;
}

function toString_46(value_0, decimalPlaces){
  var buf, ii, ii0, ivalue;
  if (isNaN(value_0))
    return 'NaN';
  buf = new StringBuilder;
  if (value_0 >= 0)
    buf.string += '+';
  else {
    buf.string += '-';
    value_0 = -value_0;
  }
  ivalue = round_int(value_0);
  buf.string += ivalue;
  if (decimalPlaces > 0) {
    buf.string += '.';
    for (ii0 = 0; ii0 < decimalPlaces; ii0++) {
      value_0 = (value_0 - ivalue) * 10;
      ivalue = round_int(value_0);
      buf.string += ivalue;
    }
    for (ii = 0; ii < decimalPlaces - 1; ii++) {
      $charAt(buf, buf.string.length - 1) == 48 && $setLength(buf, buf.string.length - 1);
    }
  }
  return buf.string;
}

var TO_STRING_DECIMAL_PLACES = 3;
function $set(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Point(){
}

function Point_0(){
  this.x_0 = 0;
  this.y_0 = 0;
}

defineClass(81, 158, {3:1, 158:1, 81:1, 58:1}, Point, Point_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Point_2_classLit = createForClass(81);
function $clinit_Points(){
  $clinit_Points = emptyMethod;
  new Point_0;
}

function pointToString(x_0, y_0){
  $clinit_Points();
  return toString_46(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(y_0, TO_STRING_DECIMAL_PLACES));
}

function $set_0(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  return this$static;
}

function Vector(){
}

function Vector_0(x_0, y_0){
  this.x_0 = x_0;
  this.y_0 = y_0;
}

defineClass(44, 168, {168:1, 44:1, 58:1}, Vector, Vector_0);
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_f_Vector_2_classLit = createForClass(44);
function $clinit_Vectors(){
  $clinit_Vectors = emptyMethod;
  new Vector_0(1, 0);
  new Vector_0(0, 1);
  new Vector_0(0, 0);
  new Vector_0($intern_40, $intern_40);
  new Vector_0($intern_41, $intern_41);
}

function vectorToString(x_0, y_0){
  $clinit_Vectors();
  return toString_46(x_0, TO_STRING_DECIMAL_PLACES) + ('' + toString_46(y_0, TO_STRING_DECIMAL_PLACES));
}

function $intersects_0(this$static, rx, ry, rw, rh){
  var x1, x2, y1, y2;
  if (this$static.width_0 <= 0 || this$static.height_0 <= 0)
    return false;
  x1 = this$static.x_0;
  y1 = this$static.y_0;
  x2 = x1 + this$static.width_0;
  y2 = y1 + this$static.height_0;
  return rx + rw > x1 && rx < x2 && ry + rh > y1 && ry < y2;
}

defineClass(187, 1, {187:1});
_.equals_0 = function equals_23(obj){
  var r;
  if (obj === this) {
    return true;
  }
  if (instanceOf(obj, 138)) {
    r = obj;
    return r.x_0 == this.x_0 && r.y_0 == this.y_0 && r.width_0 == this.width_0 && r.height_0 == this.height_0;
  }
  return false;
}
;
_.hashCode_0 = function hashCode_26(){
  return this.x_0 ^ this.y_0 ^ this.width_0 ^ this.height_0;
}
;
_.toString_0 = function toString_47(){
  return this.width_0 + 'x' + this.height_0 + pointToString_0(this.x_0, this.y_0);
}
;
var Lpythagoras_i_AbstractRectangle_2_classLit = createForClass(187);
function pointToString_0(x_0, y_0){
  var buf;
  buf = new StringBuilder;
  x_0 >= 0 && (buf.string += '+' , buf);
  buf.string += x_0;
  y_0 >= 0 && (buf.string += '+' , buf);
  buf.string += y_0;
  return buf.string;
}

function $setLocation(this$static, x_0, y_0){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
}

function $setSize_0(this$static, width_0, height){
  this$static.width_0 = width_0;
  this$static.height_0 = height;
}

function Rectangle(){
}

defineClass(138, 187, {3:1, 187:1, 138:1}, Rectangle);
_.height_0 = 0;
_.width_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var Lpythagoras_i_Rectangle_2_classLit = createForClass(138);
function $clinit_AbstractSignal(){
  $clinit_AbstractSignal = emptyMethod;
  $clinit_Reactor();
  EMIT = new AbstractSignal$1;
}

defineClass(424, 423, {});
_.placeholderListener = function placeholderListener_0(){
  var p;
  return p = ($clinit_Slots() , NOOP) , p;
}
;
var EMIT;
var Lreact_AbstractSignal_2_classLit = createForClass(424);
defineClass(425, 1, {});
var Lreact_Reactor$Notifier_2_classLit = createForClass(425);
function AbstractSignal$1(){
}

defineClass(257, 425, {}, AbstractSignal$1);
_.notify = function notify(slot, event_0, _1, _2){
  slot.onEmit(event_0);
}
;
var Lreact_AbstractSignal$1_2_classLit = createForClass(257);
function $clinit_AbstractValue(){
  $clinit_AbstractValue = emptyMethod;
  $clinit_Reactor();
  CHANGE = new AbstractValue$1;
}

function $updateAndNotify(this$static, value_0){
  var ovalue, oldValue;
  ovalue = (oldValue = this$static._value , this$static._value = value_0 , oldValue);
  $clinit_Reactor();
  !(value_0 == ovalue || !!value_0 && value_0 == ovalue) && $notify(this$static, CHANGE, value_0, ovalue, null);
  return ovalue;
}

defineClass(169, 423, {169:1});
_.placeholderListener = function placeholderListener_1(){
  var p;
  return p = ($clinit_Slots() , NOOP) , p;
}
;
_.equals_0 = function equals_24(other){
  var ovalue, value_0;
  if (other == null)
    return false;
  if (getClass__Ljava_lang_Class___devirtual$(other) != Lreact_Value_2_classLit)
    return false;
  value_0 = this._value;
  ovalue = other._value;
  return $clinit_Reactor() , value_0 == ovalue || !!value_0 && value_0 == ovalue;
}
;
_.hashCode_0 = function hashCode_27(){
  var value_0;
  value_0 = this._value;
  return !value_0?0:getHashCode(value_0);
}
;
_.toString_0 = function toString_48(){
  var cname;
  cname = ($ensureNamesAreInitialized(Lreact_Value_2_classLit) , Lreact_Value_2_classLit.typeName);
  return $substring(cname, cname.lastIndexOf('.') + 1) + '(' + this._value + ')';
}
;
var CHANGE;
var Lreact_AbstractValue_2_classLit = createForClass(169);
function AbstractValue$1(){
}

defineClass(339, 425, {}, AbstractValue$1);
_.notify = function notify_0(lner, value_0, oldValue, ignored){
  lner.onChange(value_0, oldValue);
}
;
var Lreact_AbstractValue$1_2_classLit = createForClass(339);
defineClass(433, 1, $intern_30);
var Lreact_Connection_2_classLit = createForClass(433);
function $atPrio(this$static, priority){
  if (!this$static._owner)
    throw toJs(new IllegalStateException_0('Cannot change priority of disconnected connection.'));
  $disconnect(this$static._owner, this$static);
  this$static.next_0 = null;
  this$static._priority = priority;
  $addCons(this$static._owner, this$static);
  return this$static;
}

function $close(this$static){
  if (this$static._owner) {
    $defang(this$static._ref, this$static._owner.placeholderListener());
    $disconnect(this$static._owner, this$static);
    this$static._owner = null;
  }
}

function Cons(owner, listener){
  this._owner = owner;
  this._ref = new Cons$StrongRef(listener);
}

function insert(head, cons){
  if (!head) {
    return cons;
  }
   else if (cons._priority > head._priority) {
    cons.next_0 = head;
    return cons;
  }
   else {
    head.next_0 = insert(head.next_0, cons);
    return head;
  }
}

function remove_33(head, cons){
  if (!head)
    return null;
  if (head == cons)
    return head.next_0;
  head.next_0 = remove_33(head.next_0, cons);
  return head;
}

defineClass(157, 433, $intern_30, Cons);
_.toString_0 = function toString_49(){
  return '[owner=' + this._owner + ', pri=' + this._priority + ', lner=' + this._ref._lner + ', hasNext=' + !!this.next_0 + ', oneShot=' + this._oneShot + ']';
}
;
_._oneShot = false;
_._priority = 0;
var Lreact_Cons_2_classLit = createForClass(157);
defineClass(434, 1, {});
var Lreact_Cons$ListenerRef_2_classLit = createForClass(434);
function $defang(this$static, noop){
  this$static._lner = noop;
}

function Cons$StrongRef(lner){
  this._lner = lner;
}

defineClass(323, 434, {}, Cons$StrongRef);
var Lreact_Cons$StrongRef_2_classLit = createForClass(323);
function RFuture$1(val$result){
  $clinit_Reactor();
  this.val$result1 = val$result;
}

defineClass(267, 427, {}, RFuture$1);
_.result = function result_1(){
  return this.val$result1;
}
;
var Lreact_RFuture$1_2_classLit = createForClass(267);
function $onEmit(this$static, result){
  var t;
  try {
    $complete(this$static.val$xf2, $apply(this$static.val$func3, result));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      t = $e0;
      $complete(this$static.val$xf2, new Try$Failure(t));
    }
     else 
      throw toJs($e0);
  }
}

function RFuture$9(val$xf, val$func){
  this.val$xf2 = val$xf;
  this.val$func3 = val$func;
}

defineClass(268, 1, {}, RFuture$9);
_.onEmit = function onEmit_2(result){
  $onEmit(this, result);
}
;
var Lreact_RFuture$9_2_classLit = createForClass(268);
function RPromise$1(){
}

defineClass(266, 425, {}, RPromise$1);
_.notify = function notify_1(lner, value_0, i0, i1){
  lner.onEmit(value_0);
}
;
var Lreact_RPromise$1_2_classLit = createForClass(266);
defineClass(417, 1, $intern_31);
var Lreact_Reactor$Runs_2_classLit = createForClass(417);
function Reactor$1(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(221, 417, $intern_31, Reactor$1);
_.run = function run_5(){
  this.this$01._listeners = insert(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$1_2_classLit = createForClass(221);
function Reactor$2(this$0, val$cons){
  this.this$01 = this$0;
  this.val$cons2 = val$cons;
}

defineClass(222, 417, $intern_31, Reactor$2);
_.run = function run_6(){
  this.this$01._listeners = remove_33(this.this$01._listeners, this.val$cons2);
}
;
var Lreact_Reactor$2_2_classLit = createForClass(222);
function Reactor$4(this$0, val$notifier, val$a1, val$a2, val$a3){
  this.this$01 = this$0;
  this.val$notifier2 = val$notifier;
  this.val$a13 = val$a1;
  this.val$a24 = val$a2;
  this.val$a35 = val$a3;
}

defineClass(223, 417, $intern_31, Reactor$4);
_.run = function run_7(){
  $notify(this.this$01, this.val$notifier2, this.val$a13, this.val$a24, this.val$a35);
}
;
var Lreact_Reactor$4_2_classLit = createForClass(223);
function $emit(this$static, event_0){
  $notify(this$static, EMIT, event_0, null, null);
}

function Signal(){
  $clinit_AbstractSignal();
}

defineClass(62, 424, {}, Signal);
var Lreact_Signal_2_classLit = createForClass(62);
function $clinit_Slots(){
  $clinit_Slots = emptyMethod;
  NOOP = new Slots$1;
}

var NOOP;
defineClass(418, 40, $intern_42);
_.onEmit = function onEmit_3(event_0){
  this.onEmit_0();
}
;
_.run = function run_8(){
  this.onEmit_0();
}
;
var Lreact_UnitSlot_2_classLit = createForClass(418);
function Slots$1(){
}

defineClass(364, 418, $intern_42, Slots$1);
_.onEmit_0 = function onEmit_4(){
}
;
var Lreact_Slots$1_2_classLit = createForClass(364);
defineClass(130, 1, {130:1});
var Lreact_Try_2_classLit = createForClass(130);
function $apply(this$static, result){
  return result.map_1(this$static.val$func1);
}

function Try$1(val$func){
  this.val$func1 = val$func;
}

defineClass(346, 1, {}, Try$1);
_.apply_0 = function apply_3(result){
  return result.map_1(this.val$func1);
}
;
var Lreact_Try$1_2_classLit = createForClass(346);
function Try$Failure(cause){
  this.cause = cause;
}

defineClass(64, 130, {130:1}, Try$Failure);
_.get_2 = function get_9(){
  if (instanceOf(this.cause, 9)) {
    throw toJs(this.cause);
  }
   else if (instanceOf(this.cause, 71)) {
    throw toJs(this.cause);
  }
   else {
    throw toJs($initCause(new RuntimeException, this.cause));
  }
}
;
_.map_1 = function map_1(func){
  return this;
}
;
_.toString_0 = function toString_50(){
  return 'Failure(' + this.cause + ')';
}
;
var Lreact_Try$Failure_2_classLit = createForClass(64);
function Try$Success(value_0){
  this.value_0 = value_0;
}

defineClass(84, 130, {130:1}, Try$Success);
_.get_2 = function get_10(){
  return this.value_0;
}
;
_.map_1 = function map_2(func){
  var t;
  try {
    return new Try$Success(func.apply_0(this.value_0));
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 10)) {
      t = $e0;
      return new Try$Failure(t);
    }
     else 
      throw toJs($e0);
  }
}
;
_.toString_0 = function toString_51(){
  return 'Success(' + this.value_0 + ')';
}
;
var Lreact_Try$Success_2_classLit = createForClass(84);
function Value(value_0){
  $clinit_AbstractValue();
  this._value = value_0;
}

defineClass(170, 169, {169:1, 170:1}, Value);
var Lreact_Value_2_classLit = createForClass(170);
function $clinit_Image(){
  $clinit_Image = emptyMethod;
  LOAD_TRACKER = new LoadTracker;
}

function $cycle(this$static, animator){
  var bottomRow, colorCycle, h, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  bottomRow = initUnidimensionalArray(I_classLit, $intern_24, 14, w, 15, 1);
  $getRgb(this$static.raw, h - 1, w, 1, bottomRow, w);
  colorCycle = ($clinit_ColorCycle() , fromColors(findColors(bottomRow)));
  return $apply_0(colorCycle, this$static, animator);
}

function $getPixels(this$static){
  var h, pixels, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = initUnidimensionalArray(I_classLit, $intern_24, 14, w * h, 15, 1);
  $getRgb(this$static.raw, 0, w, h, pixels, w);
  return pixels;
}

function $recolor(this$static, recolor){
  var c, h, i, pixels, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  pixels = $getPixels(this$static);
  for (i = 0; i < pixels.length; i++) {
    pixels[i] &= recolor;
  }
  c = INSTANCE_2.createRawCanvas(w, h);
  $setRgb(c.image, w, h, pixels, w);
  return new Image_0(c.image);
}

function $setPixels(this$static, pixels){
  var h, w;
  w = this$static.raw.pixelWidth;
  h = this$static.raw.pixelHeight;
  $setRgb(this$static.raw, w, h, pixels, w);
}

function $subImage(this$static, x_0, y_0, width_0, height){
  var canvas;
  canvas = INSTANCE_2.createRawCanvas(width_0, height);
  $draw(canvas, $region(this$static.raw, x_0, y_0, width_0, height), 0, 0);
  return new Image_0(canvas.image);
}

function $tile(this$static, size_0){
  return $tile_0(this$static, size_0, size_0);
}

function $tile_0(this$static, xSize, ySize){
  var h, i, result, w, x_0, y_0;
  w = this$static.raw.pixelWidth / xSize | 0;
  h = this$static.raw.pixelHeight / ySize | 0;
  i = 0;
  result = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, w * h, 0, 1);
  for (y_0 = 0; y_0 < h; y_0++) {
    for (x_0 = 0; x_0 < w; x_0++) {
      result[i++] = this$static.subImage(x_0 * xSize, y_0 * ySize, xSize, ySize);
    }
  }
  return result;
}

function Image_0(raw){
  $clinit_Image();
  this.raw = raw;
}

function load(name_0){
  $clinit_Image();
  var result;
  result = new Image_0($getImage(INSTANCE_2.raw.assets, name_0));
  $add_0(LOAD_TRACKER, result);
  return result;
}

defineClass(15, 1, $intern_44, Image_0);
_.cycle = function cycle_0(animator){
  return $cycle(this, animator);
}
;
_.flipLTR = function flipLTR(){
  var canvas;
  canvas = new Canvas_1(INSTANCE_2.createRawCanvas(this.raw.pixelWidth, this.raw.pixelHeight));
  $scale_1(canvas.raw);
  $draw_5(canvas, this, -this.raw.pixelWidth, 0);
  return canvas.image;
}
;
_.isLoaded = function isLoaded(){
  return !!this.raw.state.result();
}
;
_.raw_0 = function raw_0(){
  return this.raw;
}
;
_.subImage = function subImage(x_0, y_0, width_0, height){
  return $subImage(this, x_0, y_0, width_0, height);
}
;
var LOAD_TRACKER;
var Lxor_core_Image_2_classLit = createForClass(15);
function AnimatedImage(animator, frames_0){
  $clinit_Image();
  Image_0.call(this, frames_0[0].raw);
  this.animator = animator;
  this.frames_0 = frames_0;
}

defineClass(141, 15, $intern_44, AnimatedImage);
_.cycle = function cycle_1(animator){
  throw toJs(new UnsupportedOperationException);
}
;
_.flipLTR = function flipLTR_0(){
  var flipFrames, i;
  flipFrames = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, this.frames_0.length, 0, 1);
  for (i = 0; i < this.frames_0.length; i++) {
    flipFrames[i] = this.frames_0[i].flipLTR();
  }
  return new AnimatedImage(this.animator, flipFrames);
}
;
_.raw_0 = function raw_1(){
  return this.frames_0[this.animator.signal % this.frames_0.length].raw;
}
;
_.subImage = function subImage_0(x_0, y_0, width_0, height){
  var i, subFrames;
  subFrames = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, this.frames_0.length, 0, 1);
  for (i = 0; i < this.frames_0.length; i++) {
    subFrames[i] = this.frames_0[i].subImage(x_0, y_0, width_0, height);
  }
  return new AnimatedImage(this.animator, subFrames);
}
;
var Lxor_core_AnimatedImage_2_classLit = createForClass(141);
function $frame(this$static, percent){
  var frame_0;
  frame_0 = (this$static.frames_0.length * this$static.repeats * percent / 100 | 0) % this$static.frames_0.length;
  return this$static.frames_0[frame_0];
}

function Animation(frames_0, repeats){
  this.frames_0 = frames_0;
  this.repeats = repeats;
}

defineClass(91, 1, {91:1}, Animation);
_.repeats = 0;
var Lxor_core_Animation_2_classLit = createForClass(91);
function $clinit_Animator(){
  $clinit_Animator = emptyMethod;
  SPRITE = new Animator('SPRITE', 0, 100);
  MAP = new Animator('MAP', 1, 200);
  MAP_SLOW = new Animator('MAP_SLOW', 2, 600);
  ALL_ANIMATORS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Animator_2_classLit, 1), $intern_1, 87, 0, [SPRITE, MAP, MAP_SLOW]);
}

function Animator(enum$name, enum$ordinal, msPerSignal){
  Enum.call(this, enum$name, enum$ordinal);
  this.msPerSignal = msPerSignal;
}

function tick(){
  $clinit_Animator();
  var animator, animator$array, animator$index, animator$max;
  ++ticks;
  for (animator$array = ALL_ANIMATORS , animator$index = 0 , animator$max = animator$array.length; animator$index < animator$max; ++animator$index) {
    animator = animator$array[animator$index];
    animator.signal = ticks / max_0(1, animator.msPerSignal / 33 | 0) | 0;
  }
}

function values_17(){
  $clinit_Animator();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Animator_2_classLit, 1), $intern_1, 87, 0, [SPRITE, MAP, MAP_SLOW]);
}

defineClass(87, 6, {3:1, 8:1, 6:1, 87:1}, Animator);
_.msPerSignal = 0;
_.signal = 0;
var ALL_ANIMATORS, MAP, MAP_SLOW, SPRITE, ticks = 0;
var Lxor_core_Animator_2_classLit = createForEnum(87, values_17);
function $clinit_AsciiMazeLoader(){
  $clinit_AsciiMazeLoader = emptyMethod;
  LOAD_TABLE = new HashMap;
  SAVE_TABLE = new HashMap;
  addAsciiCell('  |..|: | :', ($clinit_Cells$CellType() , EMPTY));
  addAsciiCell('P2|p2|2p|2P', PIP);
  addAsciiCell('P1|p1|1p|1P', HERB);
  addAsciiCell('Ro|ro|RO|rO', ROCK);
  addAsciiCell('Ze|ze|ZE|ze', ZEPPELIN);
  addAsciiCell('Sp|sp|SP|sp', SPHERE);
  addAsciiCell('Ba|ba|BA|bA', BALLOON);
  addAsciiCell('De|de|DE|dE', DECOY);
  addAsciiCell('Nw|nw|NW|nW', MAP_NW);
  addAsciiCell('Ne|ne|NE|nE', MAP_NE);
  addAsciiCell('Sw|sw|SW|sW', MAP_SW);
  addAsciiCell('Se|se|SE|sE', MAP_SE);
  addAsciiCell('Te|te|TE|te', TELEPORT);
  addAsciiCell('Vf|vf|VF|vF', FIELD_V);
  addAsciiCell('Hf|hf|HF|hF', FIELD_H);
  addAsciiCell('Tb|tb|TB|tB', TIN_BOMB);
  addAsciiCell('Dy|dy|DY|dY', DYNAMITE);
  addAsciiCell('Ex|ex|EX|ex', EXIT_0);
  addAsciiCell('[]|{}|{]|[}', WALL);
}

function addAsciiCell(asciiCells, cellType){
  var code_0, f, pieces;
  pieces = $split(asciiCells, '\\|', 4);
  for (f = 0; f < 4; f++) {
    code_0 = encodeCell(cellType, f);
    $put_2(LOAD_TABLE, valueOf(pieces[f].charCodeAt(0) << 16 | pieces[f].charCodeAt(1)), valueOf(code_0));
    $put_2(SAVE_TABLE, valueOf(code_0), pieces[f]);
  }
}

function isValidCell(first, second){
  return $containsKey(LOAD_TABLE, valueOf(first << 16 | second));
}

function loadList(string){
  $clinit_AsciiMazeLoader();
  var l, line, lines, result;
  lines = $split(string, '\n', 0);
  result = new ArrayList;
  $add_0(result, loadMaze(lines, 0));
  for (l = 0; l < lines.length; l++) {
    line = lines[l];
    $equals($trim(line).substr(0, '===='.length), '====') && $add_0(result, loadMaze(lines, l + 1));
  }
  return result;
}

function loadMaze(lines, l){
  $clinit_AsciiMazeLoader();
  var e, floorTheme, height, i, line, maze, pieces, title_0, wallTheme, width_0, x_0, y_0;
  title_0 = '';
  width_0 = 32;
  height = 32;
  wallTheme = 0;
  floorTheme = 0;
  line = '';
  for (; l < lines.length; l++) {
    line = lines[l];
    if ($trim(line).length == 0)
      continue;
    if (looksLikeMazeData(line))
      break;
    try {
      pieces = $split(line, ',', 4);
      pieces.length >= 1 && (width_0 = height = __parseAndValidateInt($trim(pieces[0])));
      pieces.length >= 2 && (height = __parseAndValidateInt($trim(pieces[1])));
      pieces.length >= 3 && (wallTheme = floorTheme = __parseAndValidateInt($trim(pieces[2])) - 1);
      pieces.length >= 4 && (floorTheme = __parseAndValidateInt($trim(pieces[3])) - 1);
    }
     catch ($e0) {
      $e0 = toJava($e0);
      if (instanceOf($e0, 12)) {
        title_0 = $trim(line);
      }
       else 
        throw toJs($e0);
    }
  }
  if (l == lines.length) {
    return null;
  }
  maze = new Maze_0(title_0, width_0, height, wallTheme, floorTheme);
  for (y_0 = 0; y_0 < height && l < lines.length; y_0++) {
    line = lines[l];
    for (x_0 = 0 , i = 0; x_0 < width_0; x_0++) {
      try {
        $set_2(maze, x_0, y_0, parseCell(safeCharAt(line, i++), safeCharAt(line, i++)));
      }
       catch ($e1) {
        $e1 = toJava($e1);
        if (instanceOf($e1, 11)) {
          e = $e1;
          throw toJs(new IllegalArgumentException_0(e.detailMessage + '\n at line: \n' + line));
        }
         else 
          throw toJs($e1);
      }
    }
    ++l;
  }
  $updateAllWalls(maze);
  return maze;
}

function looksLikeMazeData(line){
  var i, stop_0;
  for (i = 0; i < line.length; i += 2) {
    if (safeCharAt(line, i) != 32 || safeCharAt(line, i + 1) != 32)
      break;
  }
  stop_0 = min_0(line.length, i + 8);
  for (i = i; i < stop_0; i += 2) {
    if (!isValidCell(safeCharAt(line, i), safeCharAt(line, i + 1)))
      return false;
  }
  return true;
}

function parseCell(first, second){
  var result;
  result = $get_5(LOAD_TABLE, valueOf(first << 16 | second));
  if (!result)
    throw toJs(new IllegalArgumentException_0('Unrecognized cell: ' + String.fromCharCode(first) + String.fromCharCode(second)));
  return result.value_0;
}

function safeCharAt(s, index_0){
  if (index_0 >= s.length)
    return 32;
  return s.charCodeAt(index_0);
}

function saveMaze(maze){
  $clinit_AsciiMazeLoader();
  var code_0, result, x_0, y_0;
  result = '';
  result += maze.title_0 + '\n';
  result += maze.width_0 + ', ' + maze.height_0 + ', ' + (maze.wallTheme + 1) + ', ' + (maze.floorTheme + 1) + '\n';
  for (y_0 = 0; y_0 < maze.height_0; y_0++) {
    for (x_0 = 0; x_0 < maze.width_0; x_0++) {
      code_0 = $get_7(maze, (checkBounds('x', x_0, maze.width_0) , checkBounds('y', y_0, maze.height_0) , y_0 * maze.width_0 + x_0));
      code_0 = encodeCell(cellType_0(code_0), ($clinit_Cells() , (code_0 & FLOOR_TYPE_MASK) >> 6));
      result += $get_5(SAVE_TABLE, valueOf(code_0));
    }
    result += '\n';
  }
  result += '\n';
  return result;
}

var LOAD_TABLE, SAVE_TABLE;
function $indexToX(this$static, index_0){
  checkBounds('index', index_0, this$static.width_0 * this$static.height_0);
  return index_0 % this$static.width_0;
}

function $indexToY(this$static, index_0){
  checkBounds('index', index_0, this$static.width_0 * this$static.height_0);
  return index_0 / this$static.width_0 | 0;
}

function $isValidXY(this$static, x_0, y_0){
  return isInBounds(x_0, this$static.width_0) && isInBounds(y_0, this$static.height_0);
}

function $xyToIndex(this$static, x_0, y_0){
  checkBounds('x', x_0, this$static.width_0);
  checkBounds('y', y_0, this$static.height_0);
  return y_0 * this$static.width_0 + x_0;
}

function checkBounds(var_0, index_0, size_0){
  if (!(0 <= index_0 && index_0 < size_0)) {
    throw toJs(new IllegalArgumentException_0('Index outside grid: Should be 0 <= ' + var_0 + ' < ' + size_0 + ' but was: ' + index_0));
  }
}

function isInBounds(index_0, size_0){
  return 0 <= index_0 && index_0 < size_0;
}

defineClass(321, 1, {});
_.height_0 = 0;
_.width_0 = 0;
var Lxor_core_BaseGrid_2_classLit = createForClass(321);
function $getThemedFloorTiles(this$static){
  return ($clinit_Tiles() , FLOOR_TILES)[this$static.maze_0().floorTheme];
}

function $getThemedWallTiles(this$static){
  return ($clinit_Tiles() , WALL_TILES)[this$static.maze_0().wallTheme];
}

function $render(this$static, viewport, percent, surface, renderGridlines){
  var offsetX, offsetY, scale;
  $saveTx(surface.raw);
  try {
    scale = 8 / viewport.size_0;
    $scale_0(surface.raw, scale, scale);
    offsetX = -(viewport.originX * 24 + (viewport.deltaX * 24 * percent / 100 | 0));
    offsetY = -(viewport.originY * 24 + (viewport.deltaY * 24 * percent / 100 | 0));
    $translate(surface.raw, offsetX, offsetY);
    $renderRect(this$static, min_0(viewport.originX, viewport.originX + viewport.deltaX), min_0(viewport.originY, viewport.originY + viewport.deltaY), max_0(viewport.originX + viewport.size_0, viewport.originX + viewport.size_0 + viewport.deltaX), max_0(viewport.originY + viewport.size_0, viewport.originY + viewport.size_0 + viewport.deltaY), surface);
    renderGridlines && scale >= 0.5 && $renderGridlines(min_0(viewport.originX, viewport.originX + viewport.deltaX), min_0(viewport.originY, viewport.originY + viewport.deltaY), max_0(viewport.originX + viewport.size_0, viewport.originX + viewport.size_0 + viewport.deltaX), max_0(viewport.originY + viewport.size_0, viewport.originY + viewport.size_0 + viewport.deltaY), surface);
    this$static.drawAnimations(percent, surface);
  }
   finally {
    $restoreTx(surface.raw);
  }
}

function $renderAll(this$static, surface){
  $renderRect(this$static, 0, 0, this$static.maze.width_0, this$static.maze.height_0, surface);
}

function $renderGridlines(startX, startY, stopX, stopY, surface){
  var height, width_0, x_0, y_0;
  height = (stopY - startY) * 24;
  for (x_0 = startX; x_0 < stopX; x_0++) {
    $setFillColor(surface.raw, -1996488705);
    $fillRect_0(surface.raw, x_0 * 24, startY * 24, 1, height);
  }
  width_0 = (stopX - startX) * 24;
  for (y_0 = startY; y_0 < stopY; y_0++) {
    $setFillColor(surface.raw, -1996488705);
    $fillRect_0(surface.raw, startX * 24, y_0 * 24, width_0, 1);
  }
}

function $renderRect(this$static, startX, startY, stopX, stopY, surface){
  var cell, cellType, x_0, y_0;
  for (x_0 = startX; x_0 < stopX; x_0++) {
    for (y_0 = startY; y_0 < stopY; y_0++) {
      if (!$isValidXY(this$static.maze_0(), x_0, y_0)) {
        continue;
      }
      cell = $get_8(this$static.maze_0(), x_0, y_0);
      this$static.drawFloor(x_0, y_0) && $draw_7(surface, this$static.getThemedFloorTiles()[$clinit_Cells() , (cell & FLOOR_TYPE_MASK) >> 6], x_0 * 24, y_0 * 24);
      $clinit_Cells();
      (cell & ($clinit_Cells$CellType() , WALL).code_0) == WALL.code_0?this$static.drawWall(x_0, y_0) && $draw_7(surface, this$static.getThemedWallTiles()[wallType_0(cell)], x_0 * 24, y_0 * 24):this$static.drawSprite(x_0, y_0) && $draw_7(surface, (cellType = cellType_0(cell) , cellType == EMPTY || cellType == UNKNOWN_0?null:($clinit_Sprites() , CELLS)[cellType.code_0]), x_0 * 24, y_0 * 24);
    }
  }
}

function BaseMazeRenderer(maze){
  this.maze = maze;
}

defineClass(136, 1, {}, BaseMazeRenderer);
_.drawAnimations = function drawAnimations(percent, surface){
}
;
_.drawFloor = function drawFloor(x_0, y_0){
  return true;
}
;
_.drawSprite = function drawSprite(x_0, y_0){
  return true;
}
;
_.drawWall = function drawWall(x_0, y_0){
  return true;
}
;
_.getThemedFloorTiles = function getThemedFloorTiles(){
  return $getThemedFloorTiles(this);
}
;
_.getThemedWallTiles = function getThemedWallTiles(){
  return $getThemedWallTiles(this);
}
;
_.maze_0 = function maze_0(){
  return this.maze;
}
;
var Lxor_core_BaseMazeRenderer_2_classLit = createForClass(136);
function $get_7(this$static, index_0){
  checkBounds('index', index_0, this$static.width_0 * this$static.height_0);
  return this$static.data_0[index_0];
}

function $get_8(this$static, x_0, y_0){
  return $get_7(this$static, (checkBounds('x', x_0, this$static.width_0) , checkBounds('y', y_0, this$static.height_0) , y_0 * this$static.width_0 + x_0));
}

function $isSameByteGrid(this$static, that){
  return this$static.width_0 == that.width_0 && this$static.height_0 == that.height_0 && equals_14(this$static.data_0, that.data_0);
}

function $safeGet(this$static, x_0, y_0){
  if (isInBounds(x_0, this$static.width_0) && isInBounds(y_0, this$static.height_0)) {
    return $get_7(this$static, (checkBounds('x', x_0, this$static.width_0) , checkBounds('y', y_0, this$static.height_0) , y_0 * this$static.width_0 + x_0));
  }
  return 0;
}

function $set_1(this$static, index_0, value_0){
  checkBounds('index', index_0, this$static.width_0 * this$static.height_0);
  this$static.data_0[index_0] = value_0 << 24 >> 24;
}

function $set_2(this$static, x_0, y_0, value_0){
  $set_1(this$static, (checkBounds('x', x_0, this$static.width_0) , checkBounds('y', y_0, this$static.height_0) , y_0 * this$static.width_0 + x_0), value_0);
}

function $toString_1(this$static){
  var i, sb;
  sb = new StringBuilder;
  for (i = 0; i < this$static.data_0.length; i++) {
    $append_7(sb, '' + (this$static.data_0[i] & 255) + ' ');
    i % this$static.width_0 == 0 && (sb.string += '\n' , sb);
  }
  return sb.string;
}

function ByteGrid(data_0, width_0, height){
  this.width_0 = width_0;
  this.height_0 = height;
  if (data_0.length != width_0 * height)
    throw toJs(new IllegalArgumentException_0('data.length'));
  this.data_0 = data_0;
}

defineClass(128, 321, {}, ByteGrid);
_.toString_0 = function toString_52(){
  return $toString_1(this);
}
;
var Lxor_core_ByteGrid_2_classLit = createForClass(128);
function $draw_5(this$static, image, x_0, y_0){
  $draw(this$static.raw, image.raw, x_0, y_0);
}

function $fillRect_2(this$static, x_0, y_0, w, h, color_0){
  $setFillColor_0(this$static.raw, color_0);
  $fillRect_1(this$static.raw, x_0, y_0, w, h);
}

function Canvas_1(raw){
  this.raw = raw;
  this.image = new Image_0(raw.image);
}

defineClass(113, 1, {}, Canvas_1);
_.draw_0 = function draw_1(image, x_0, y_0){
  $draw_5(this, image, x_0, y_0);
}
;
var Lxor_core_Canvas_2_classLit = createForClass(113);
function $clinit_Cells(){
  $clinit_Cells = emptyMethod;
  LOOKUP_TABLE = createLookupTable(values_18(), initUnidimensionalArray(Lxor_core_Cells$CellType_2_classLit, $intern_1, 16, 32, 0, 1), ($clinit_Cells$CellType() , UNKNOWN_0));
  ALL_CELL_TYPES = values_18();
  NUM_CELL_TYPES = ALL_CELL_TYPES.length;
  CELL_TYPE_MASK = setLowBits(6);
  FLOOR_TYPE_MASK = setLowBits(2) << 6;
  WALL_TYPE_MASK = setLowBits(4);
}

function cellType_0(code_0){
  $clinit_Cells();
  code_0 = code_0 & CELL_TYPE_MASK;
  return (code_0 & ($clinit_Cells$CellType() , WALL).code_0) == WALL.code_0?WALL:LOOKUP_TABLE[code_0];
}

function encodeCell(cellType, floorType){
  $clinit_Cells();
  if (cellType == ($clinit_Cells$CellType() , UNKNOWN_0))
    throw toJs(new IllegalArgumentException_0("Can't encode UNKNOWN"));
  return cellType.code_0 | floorType << 6 & FLOOR_TYPE_MASK;
}

function setLowBits(numBits){
  if (numBits > 8)
    throw toJs(new IllegalArgumentException_0('numBits'));
  return 255 >> 8 - numBits;
}

function updateCellType(code_0, cellType){
  $clinit_Cells();
  if (cellType == ($clinit_Cells$CellType() , UNKNOWN_0))
    throw toJs(new IllegalArgumentException_0("Can't encode UNKNOWN"));
  return code_0 & FLOOR_TYPE_MASK | cellType.code_0;
}

function wallType_0(code_0){
  $clinit_Cells();
  if ((code_0 & ($clinit_Cells$CellType() , WALL).code_0) != WALL.code_0) {
    throw toJs(new IllegalArgumentException_0('Not a wall!'));
  }
  return code_0 & WALL_TYPE_MASK;
}

var ALL_CELL_TYPES, CELL_TYPE_MASK = 0, FLOOR_TYPE_MASK = 0, LOOKUP_TABLE, NUM_CELL_TYPES = 0, WALL_TYPE_MASK = 0;
function $clinit_Cells$CellType(){
  $clinit_Cells$CellType = emptyMethod;
  UNKNOWN_0 = new Cells$CellType;
  EMPTY = new Cells$CellType_0('EMPTY', 1, 0);
  PIP = new Cells$CellType_0('PIP', 2, 1);
  HERB = new Cells$CellType_0('HERB', 3, 2);
  ROCK = new Cells$CellType_0('ROCK', 4, 3);
  ZEPPELIN = new Cells$CellType_0('ZEPPELIN', 5, 4);
  SPHERE = new Cells$CellType_0('SPHERE', 6, 5);
  BALLOON = new Cells$CellType_0('BALLOON', 7, 6);
  DECOY = new Cells$CellType_0('DECOY', 8, 7);
  MAP_NW = new Cells$CellType_0('MAP_NW', 9, 8);
  MAP_NE = new Cells$CellType_0('MAP_NE', 10, 9);
  MAP_SW = new Cells$CellType_0('MAP_SW', 11, 10);
  MAP_SE = new Cells$CellType_0('MAP_SE', 12, 11);
  TELEPORT = new Cells$CellType_0('TELEPORT', 13, 12);
  FIELD_V = new Cells$CellType_0('FIELD_V', 14, 13);
  FIELD_H = new Cells$CellType_0('FIELD_H', 15, 14);
  TIN_BOMB = new Cells$CellType_0('TIN_BOMB', 16, 15);
  DYNAMITE = new Cells$CellType_0('DYNAMITE', 17, 16);
  EXIT_0 = new Cells$CellType_0('EXIT', 18, 17);
  WALL = new Cells$CellType_0('WALL', 19, 32);
}

function Cells$CellType(){
  Enum.call(this, 'UNKNOWN', 0);
  this.code_0 = $intern_26;
}

function Cells$CellType_0(enum$name, enum$ordinal, code_0){
  Enum.call(this, enum$name, enum$ordinal);
  this.code_0 = code_0;
}

function values_18(){
  $clinit_Cells$CellType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Cells$CellType_2_classLit, 1), $intern_1, 16, 0, [UNKNOWN_0, EMPTY, PIP, HERB, ROCK, ZEPPELIN, SPHERE, BALLOON, DECOY, MAP_NW, MAP_NE, MAP_SW, MAP_SE, TELEPORT, FIELD_V, FIELD_H, TIN_BOMB, DYNAMITE, EXIT_0, WALL]);
}

defineClass(16, 6, {3:1, 8:1, 6:1, 16:1, 454:1}, Cells$CellType, Cells$CellType_0);
_.code_0 = 0;
var BALLOON, DECOY, DYNAMITE, EMPTY, EXIT_0, FIELD_H, FIELD_V, HERB, MAP_NE, MAP_NW, MAP_SE, MAP_SW, PIP, ROCK, SPHERE, TELEPORT, TIN_BOMB, UNKNOWN_0, WALL, ZEPPELIN;
var Lxor_core_Cells$CellType_2_classLit = createForEnum(16, values_18);
function $addListener(this$static, listener){
  $add_0(this$static.listeners, listener);
}

function $notifyListeners(this$static){
  var listener, listener$iterator;
  for (listener$iterator = new ArrayList$1(this$static.listeners); listener$iterator.i < listener$iterator.this$01.array.length;) {
    listener = $next_3(listener$iterator);
    listener.onEmit(this$static.snippet);
  }
}

function $readFromSystem(){
  throw toJs(new UnsupportedOperationException);
}

function $setSnippet(this$static, snippet, notifyListeners){
  this$static.snippet = snippet;
  notifyListeners && $notifyListeners(this$static);
}

function $writeSnippetToSystem(this$static){
  this$static.writeToSystem(this$static.snippet);
  $notifyListeners(this$static);
}

function onSystemCopyEvent(){
  $writeSnippetToSystem(INSTANCE_1);
}

function onSystemPasteEvent(pasted){
  $setSnippet(INSTANCE_1, pasted, true);
}

defineClass(200, 1, {});
_.writeToSystem = function writeToSystem(text_0){
  $clinit_System();
}
;
var INSTANCE_1;
var Lxor_core_Clipboard_2_classLit = createForClass(200);
function createLookupTable(input_0, output, defaultValue){
  var code_0, inputValue, inputValue$index, inputValue$max;
  fill0_0(output, output.length, defaultValue);
  for (inputValue$index = 0 , inputValue$max = input_0.length; inputValue$index < inputValue$max; ++inputValue$index) {
    inputValue = input_0[inputValue$index];
    code_0 = inputValue.code_0;
    code_0 >= 0 && code_0 < output.length && (output[code_0] = inputValue);
  }
  return output;
}

function $clinit_ColorCycle(){
  $clinit_ColorCycle = emptyMethod;
  EMPTY_0 = new ColorCycle;
}

function $addCycle(this$static, cycle){
  var i, lastIndex;
  lastIndex = cycle.size_0 - 1;
  for (i = 0; i < lastIndex; i++) {
    $addEdge(this$static, (checkCriticalElementIndex(i, cycle.size_0) , $get(cycle.wrapped, cycle.fromIndex + i)).value_0, (checkCriticalElementIndex(i + 1, cycle.size_0) , $get(cycle.wrapped, cycle.fromIndex + (i + 1))).value_0);
  }
  $addEdge(this$static, (checkCriticalElementIndex(lastIndex, cycle.size_0) , $get(cycle.wrapped, cycle.fromIndex + lastIndex)).value_0, (checkCriticalElementIndex(0, cycle.size_0) , $get(cycle.wrapped, cycle.fromIndex)).value_0);
  this$static.maxCycleLength = max_0(this$static.maxCycleLength, cycle.size_0);
}

function $addEdge(this$static, from, to){
  $add_0(this$static.edges, valueOf(from));
  $add_0(this$static.edges, valueOf(to));
}

function $apply_0(this$static, in_0, animator){
  var canvas, frames_0, i, pixels;
  if (this$static.maxCycleLength <= 1) {
    return in_0;
  }
  frames_0 = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, this$static.maxCycleLength, 0, 1);
  frames_0[0] = in_0;
  pixels = $getPixels(in_0);
  for (i = 1; i < frames_0.length; i++) {
    canvas = new Canvas_1(INSTANCE_2.createRawCanvas(in_0.raw.pixelWidth, in_0.raw.pixelHeight));
    $stepThroughCycle(this$static, pixels);
    $setPixels(canvas.image, pixels);
    frames_0[i] = canvas.image;
  }
  return new AnimatedImage(animator, frames_0);
}

function $stepThroughCycle(this$static, pixels){
  var e, i, pixel;
  this$static.edgesInts == null && (this$static.edgesInts = toIntArray(this$static.edges));
  for (i = 0; i < pixels.length; i++) {
    pixel = pixels[i];
    for (e = 0; e < this$static.edgesInts.length; e += 2) {
      if (pixel == this$static.edgesInts[e]) {
        pixels[i] = this$static.edgesInts[e + 1];
        break;
      }
    }
  }
}

function ColorCycle(){
  this.edges = new ArrayList;
}

function findColors(pixelRow){
  $clinit_ColorCycle();
  var color_0, i, prevColor, result;
  prevColor = 0;
  result = new ArrayList;
  for (i = 0; i < pixelRow.length; i++) {
    color_0 = pixelRow[i];
    (color_0 & $intern_45) == 0 && (color_0 = 0);
    if (color_0 != prevColor) {
      $add_0(result, valueOf(color_0));
      prevColor = color_0;
    }
  }
  prevColor != 0 && $add_0(result, valueOf(0));
  return result;
}

function fromColors(colors){
  $clinit_ColorCycle();
  var i, result, start_0;
  if (colors.array.length <= 1)
    return EMPTY_0;
  result = new ColorCycle;
  start_0 = 0;
  for (i = 0; i < colors.array.length; i++) {
    if ((checkCriticalElementIndex(i, colors.array.length) , colors.array[i]).value_0 == 0) {
      $addCycle(result, new AbstractList$SubList(colors, start_0, i));
      start_0 = i + 1;
    }
  }
  return result;
}

function toIntArray(list){
  var i, result;
  result = initUnidimensionalArray(I_classLit, $intern_24, 14, list.array.length, 15, 1);
  for (i = 0; i < result.length; i++) {
    result[i] = (checkCriticalElementIndex(i, list.array.length) , list.array[i]).value_0;
  }
  return result;
}

defineClass(188, 1, {}, ColorCycle);
_.maxCycleLength = 0;
var EMPTY_0;
var Lxor_core_ColorCycle_2_classLit = createForClass(188);
function $clinit_Control(){
  $clinit_Control = emptyMethod;
  UP_0 = new Control('UP', 0, ($clinit_Direction() , UP_1), 85);
  DOWN_0 = new Control('DOWN', 1, DOWN_1, 68);
  LEFT_1 = new Control('LEFT', 2, LEFT_2, 76);
  RIGHT_1 = new Control('RIGHT', 3, RIGHT_2, 82);
  OK = new Control('OK', 4, null, 120);
  ALL_CONTROLS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Control_2_classLit, 1), $intern_1, 53, 0, [UP_0, DOWN_0, LEFT_1, RIGHT_1, OK]);
}

function Control(enum$name, enum$ordinal, direction, letter){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitCode = 1 << this.ordinal;
  this.direction_0 = direction;
  this.letter = letter;
}

function forKey(key){
  $clinit_Control();
  switch (key.ordinal) {
    case 115:
    case 22:
      return UP_0;
    case 108:
    case 18:
      return DOWN_0;
    case 111:
    case 0:
      return LEFT_1;
    case 114:
    case 3:
      return RIGHT_1;
    case 118:
    case 98:
      return OK;
    default:return null;
  }
}

function forLetter(c){
  $clinit_Control();
  switch (c) {
    case 85:
    case 117:
      return UP_0;
    case 68:
    case 100:
      return DOWN_0;
    case 76:
    case 108:
      return LEFT_1;
    case 82:
    case 114:
      return RIGHT_1;
    case 88:
    case 120:
      return OK;
    default:return null;
  }
}

function values_19(){
  $clinit_Control();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Control_2_classLit, 1), $intern_1, 53, 0, [UP_0, DOWN_0, LEFT_1, RIGHT_1, OK]);
}

defineClass(53, 6, {3:1, 8:1, 6:1, 53:1}, Control);
_.bitCode = 0;
_.letter = 0;
var ALL_CONTROLS, DOWN_0, LEFT_1, OK, RIGHT_1, UP_0;
var Lxor_core_Control_2_classLit = createForEnum(53, values_19);
function $clearFresh(this$static){
  this$static.freshControl = null;
  this$static.freshExtraControl = null;
  this$static.freshMouseClick = false;
}

function $freshControl(this$static){
  var result;
  result = this$static.freshControl;
  this$static.freshControl = null;
  return result;
}

function $isAnyFreshExtraControl(this$static){
  this$static.freshExtraControl = null;
  return this$static.extraControlBits != 0;
}

function $isFresh(this$static, c){
  if (this$static.freshControl == c) {
    this$static.freshControl = null;
    return true;
  }
  return false;
}

function $isFresh_0(this$static, c){
  if (this$static.freshExtraControl == c) {
    this$static.freshExtraControl = null;
    return true;
  }
  return false;
}

function $isFreshClickInside(this$static, x_0, y_0, width_0, height){
  if (this$static.freshMouseClick && this$static.lastMouseX >= x_0 && this$static.lastMouseX <= x_0 + width_0 && this$static.lastMouseY >= y_0 && this$static.lastMouseY <= y_0 + height) {
    this$static.freshMouseClick = false;
    return true;
  }
  return false;
}

function $isFreshClickInsideViewport(this$static, x_0, y_0, width_0, height){
  if (this$static.freshMouseClick && this$static.lastMouseX >= x_0 + 16 && this$static.lastMouseX <= x_0 + 16 + width_0 && this$static.lastMouseY >= y_0 + 16 && this$static.lastMouseY <= y_0 + 16 + height) {
    this$static.freshMouseClick = false;
    return true;
  }
  return false;
}

function $isFreshMouseClick(this$static){
  var result;
  result = this$static.freshMouseClick;
  this$static.freshMouseClick = false;
  return result;
}

function $isPressed(this$static, c){
  return (this$static.controlBits & c.bitCode) != 0;
}

function $isPressed_0(this$static, c){
  return (this$static.extraControlBits & c.bitCode) != 0;
}

function $isViewportPressed(this$static){
  return this$static.mousePressed && this$static.lastMouseX >= 16 && this$static.lastMouseX <= 208 && this$static.lastMouseY >= 16 && this$static.lastMouseY <= 208;
}

function $onControlChange(this$static, c, pressed){
  var lastControlBits;
  lastControlBits = this$static.controlBits;
  if (pressed) {
    this$static.controlBits |= c.bitCode;
    lastControlBits != this$static.controlBits && (this$static.freshControl = c);
  }
   else {
    this$static.controlBits &= ~c.bitCode;
    this$static.freshControl = null;
  }
}

function $onExtraControlChange(this$static, c, pressed){
  if (pressed) {
    this$static.extraControlBits |= c.bitCode;
    this$static.freshExtraControl = c;
  }
   else {
    this$static.extraControlBits &= ~c.bitCode;
    this$static.freshExtraControl = null;
  }
}

function $onKeyChange(this$static, k, pressed){
  var c, ec;
  c = forKey(k);
  !!c && $onControlChange(this$static, c, pressed);
  ec = forKey_0(k);
  !!ec && $onExtraControlChange(this$static, ec, pressed);
}

function $onMouseChange(this$static, rawX, rawY, pressed){
  this$static.mousePressed = pressed;
  if (this$static.mousePressed) {
    this$static.lastMouseX = round_int(rawX / this$static.mouseScale);
    this$static.lastMouseY = round_int(rawY / this$static.mouseScale);
    this$static.freshMouseClick = true;
  }
}

function $onMouseDragged(this$static, rawX, rawY){
  if (this$static.mousePressed && !this$static.freshMouseClick) {
    this$static.lastMouseX = round_int(rawX / this$static.mouseScale);
    this$static.lastMouseY = round_int(rawY / this$static.mouseScale);
  }
}

function $onlyPressedControl(this$static){
  var c, c$array, c$index, c$max;
  for (c$array = ($clinit_Control() , ALL_CONTROLS) , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
    c = c$array[c$index];
    if (c.bitCode == this$static.controlBits)
      return c;
  }
  return null;
}

function ControlState(){
  this.mouseScale = INSTANCE_2.zoom;
}

defineClass(152, 1, {}, ControlState);
_.controlBits = 0;
_.extraControlBits = 0;
_.freshControl = null;
_.freshExtraControl = null;
_.freshMouseClick = false;
_.lastMouseX = 0;
_.lastMouseY = 0;
_.mousePressed = false;
_.mouseScale = 0;
var Lxor_core_ControlState_2_classLit = createForClass(152);
function $render_0(numDigits, x_0, y_0, start_0, delta, percent, surface){
  var end, endDigit, gear, i, startDigit, yDelta;
  x_0 += 21 * (numDigits - 1);
  end = start_0 + delta;
  if (delta < 0) {
    start_0 = end;
    end = end - delta;
    percent = 99 - percent;
  }
  yDelta = 38 * percent / 100 | 0;
  for (i = 0; i < numDigits; i++) {
    startDigit = start_0 % 10;
    endDigit = end % 10;
    if (startDigit == endDigit) {
      $draw_7(surface, DIGITS[startDigit], x_0 + 4, y_0 + 13);
      gear = (i + startDigit) % GEARS.length;
      $draw_7(surface, GEARS[gear], x_0 + 17, y_0);
    }
     else {
      $startClipped(surface.raw, round_int(x_0 * surface.clipFactor), round_int((y_0 + 7) * surface.clipFactor), round_int(21 * surface.clipFactor), round_int(31 * surface.clipFactor));
      $draw_7(surface, DIGITS[startDigit], x_0 + 4, y_0 + 13 - yDelta);
      $draw_7(surface, DIGITS[endDigit], x_0 + 4, y_0 + 38 + 13 - yDelta);
      $endClipped(surface.raw);
      gear = i + startDigit;
      percent > 0 && percent < 99 && (gear += ($clinit_Animator() , SPRITE).signal);
      gear %= GEARS.length;
      $draw_7(surface, GEARS[gear], x_0 + 17, y_0);
    }
    start_0 = start_0 / 10 | 0;
    end = end / 10 | 0;
    x_0 -= 21;
  }
}

function $renderBalloons(this$static, surface, percent){
  $render_0(2, 269, 139, this$static.requiredBalloons, this$static.deltaRequiredBalloons, percent, surface);
}

function $renderMoves(this$static, surface, percent){
  $render_0(4, 228, 88, this$static.moves, this$static.deltaMoves, percent, surface);
}

function $reset_0(this$static){
  this$static.moves = 0;
  this$static.requiredBalloons = this$static.mazeState.requiredBalloons;
  this$static.deltaMoves = this$static.deltaRequiredBalloons = 0;
  $updateStateIcon(this$static);
}

function $updateStateIcon(this$static){
  var player;
  if (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_COMPLETED)) {
    this$static.stateIcon = ($clinit_Sprites() , CELLS)[($clinit_Cells$CellType() , BALLOON).code_0];
  }
   else if (this$static.mazeState.state == LEVEL_FAILED) {
    this$static.stateIcon = ($clinit_Sprites() , CELLS)[($clinit_Cells$CellType() , DECOY).code_0];
  }
   else {
    player = $getActivePlayer(this$static.mazeState);
    !!player && (this$static.stateIcon = ($clinit_Sprites() , CELLS)[player.cellType.code_0]);
  }
  this$static.stateIconOffset = 1;
}

function CounterRenderer(mazeState){
  this.stateIcon = ($clinit_Sprites() , ROCK_EYES)[1];
  this.mazeState = mazeState;
  $add_0(mazeState.mazeStateListeners, this);
}

defineClass(376, 1, {398:1}, CounterRenderer);
_.onStateTransition = function onStateTransition(oldState, newState, event_0){
  this.moves += this.deltaMoves;
  this.deltaMoves = 0;
  this.requiredBalloons += this.deltaRequiredBalloons;
  this.deltaRequiredBalloons = 0;
  oldState == ($clinit_MazeState$State() , WAITING_FOR_PLAYER) && newState != WAITING_FOR_PLAYER && (this.deltaMoves = 1);
  event_0 == ($clinit_MazeState$AdditionalEvent() , BALLOON_COLLECTED) && (this.deltaRequiredBalloons = -1);
  $updateStateIcon(this);
}
;
_.deltaMoves = 0;
_.deltaRequiredBalloons = 0;
_.moves = 0;
_.requiredBalloons = 0;
_.stateIconOffset = 0;
var Lxor_core_CounterRenderer_2_classLit = createForClass(376);
function $clinit_Direction(){
  $clinit_Direction = emptyMethod;
  UP_1 = new Direction('UP', 0, 0, -1);
  DOWN_1 = new Direction('DOWN', 1, 0, 1);
  LEFT_2 = new Direction('LEFT', 2, -1, 0);
  RIGHT_2 = new Direction('RIGHT', 3, 1, 0);
  ALL_DIRECTIONS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [UP_1, DOWN_1, LEFT_2, RIGHT_2]);
  NUM_DIRECTIONS = ALL_DIRECTIONS.length;
  VERTICAL_DIRECTIONS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [UP_1, DOWN_1]);
  HORIZONTAL_DIRECTIONS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [LEFT_2, RIGHT_2]);
  addOpposite(UP_1, DOWN_1);
  addOpposite(LEFT_2, RIGHT_2);
}

function $dx(this$static, x_0){
  return x_0 + this$static.dx;
}

function $dy(this$static, y_0){
  return y_0 + this$static.dy;
}

function $isHorizontal(this$static){
  return this$static == LEFT_2 || this$static == RIGHT_2;
}

function $isVertical(this$static){
  return this$static == UP_1 || this$static == DOWN_1;
}

function Direction(enum$name, enum$ordinal, dx, dy){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitCode = 1 << this.ordinal;
  this.dx = dx;
  this.dy = dy;
}

function addOpposite(a, b){
  if (!!a.opposite || !!b.opposite)
    throw toJs(new IllegalStateException);
  a.opposite = b;
  b.opposite = a;
}

function values_20(){
  $clinit_Direction();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [UP_1, DOWN_1, LEFT_2, RIGHT_2]);
}

defineClass(30, 6, {3:1, 8:1, 6:1, 30:1}, Direction);
_.bitCode = 0;
_.dx = 0;
_.dy = 0;
var ALL_DIRECTIONS, DOWN_1, HORIZONTAL_DIRECTIONS, LEFT_2, NUM_DIRECTIONS = 0, RIGHT_2, UP_1, VERTICAL_DIRECTIONS;
var Lxor_core_Direction_2_classLit = createForEnum(30, values_20);
function $clinit_ExtraControl(){
  $clinit_ExtraControl = emptyMethod;
  BACK_0 = new ExtraControl('BACK', 0);
  ZOOM_IN_0 = new ExtraControl('ZOOM_IN', 1);
  ZOOM_OUT_0 = new ExtraControl('ZOOM_OUT', 2);
  FAST_FORWARD = new ExtraControl('FAST_FORWARD', 3);
  SPECIAL = new ExtraControl('SPECIAL', 4);
  INTERRUPT = new ExtraControl('INTERRUPT', 5);
  PLAY = new ExtraControl('PLAY', 6);
  LOAD = new ExtraControl('LOAD', 7);
  SAVE = new ExtraControl('SAVE', 8);
}

function ExtraControl(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.bitCode = 1 << this.ordinal;
}

function forKey_0(key){
  $clinit_ExtraControl();
  switch (key.ordinal) {
    case 121:
      return BACK_0;
    case 106:
      return FAST_FORWARD;
    case 91:
    case 80:
    case 93:
    case 94:
      return ZOOM_IN_0;
    case 87:
    case 101:
    case 83:
    case 84:
      return ZOOM_OUT_0;
    case 104:
      return SPECIAL;
    case 2:
      return INTERRUPT;
    case 15:
      return PLAY;
    case 11:
    case 14:
      return LOAD;
    case 18:
      return SAVE;
    default:return null;
  }
}

function values_21(){
  $clinit_ExtraControl();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_ExtraControl_2_classLit, 1), $intern_1, 35, 0, [BACK_0, ZOOM_IN_0, ZOOM_OUT_0, FAST_FORWARD, SPECIAL, INTERRUPT, PLAY, LOAD, SAVE]);
}

defineClass(35, 6, {3:1, 8:1, 6:1, 35:1}, ExtraControl);
_.bitCode = 0;
var BACK_0, FAST_FORWARD, INTERRUPT, LOAD, PLAY, SAVE, SPECIAL, ZOOM_IN_0, ZOOM_OUT_0;
var Lxor_core_ExtraControl_2_classLit = createForEnum(35, values_21);
function $centered(this$static, target, text_0, sx, sy){
  var i, start_0, y_0;
  y_0 = sy;
  start_0 = 0;
  for (i = 0; i < text_0.length; i++) {
    if (text_0.charCodeAt(i) == 10) {
      $centeredSingleLine(this$static, target, text_0.substr(start_0, i - start_0), sx, y_0);
      y_0 += 8;
      start_0 = i + 1;
    }
  }
  $centeredSingleLine(this$static, target, $subSequence(text_0, start_0, text_0.length), sx, y_0);
}

function $centeredSingleLine(this$static, target, text_0, x_0, y_0){
  $singleLine(this$static, target, text_0, x_0 - (text_0.length * 8 / 2 | 0), y_0 - 4);
}

function $drawChar(this$static, target, c, x_0, y_0){
  var index_0;
  index_0 = c - 32;
  index_0 >= 0 && index_0 < this$static.images.length && target.draw_0(this$static.images[index_0], x_0, y_0);
}

function $drawTextBox(this$static, surface, text_0, x_0, y_0, w, h, color_0){
  var numLines;
  numLines = count_1(text_0) + 1;
  $setFillColor(surface.raw, $intern_45);
  $fillRect_0(surface.raw, x_0, y_0, w, h);
  $setFillColor(surface.raw, color_0);
  $fillRect_0(surface.raw, x_0 - 0.5, y_0 - 0.5, w + 1, 1);
  $setFillColor(surface.raw, color_0);
  $fillRect_0(surface.raw, x_0 - 0.5, y_0 - 0.5, 1, h + 1);
  $setFillColor(surface.raw, color_0);
  $fillRect_0(surface.raw, x_0 - 0.5, y_0 + h - 0.5, w + 1, 1);
  $setFillColor(surface.raw, color_0);
  $fillRect_0(surface.raw, x_0 + w - 0.5, y_0 - 0.5, 1, h + 1);
  x_0 = x_0 + ((w + 1) / 2 | 0);
  y_0 = y_0 + ((h + 1) / 2 | 0) - (numLines * 8 / 2 | 0) + 4;
  $centered(this$static, surface, text_0, x_0, y_0);
}

function $leftAligned(this$static, target, text_0, sx, sy){
  var i, x_0, y_0;
  x_0 = sx;
  y_0 = sy;
  for (i = 0; i < text_0.length; i++) {
    if (text_0.charCodeAt(i) == 10) {
      x_0 = sx;
      y_0 += 8;
      continue;
    }
    $drawChar(this$static, target, text_0.charCodeAt(i), x_0, y_0);
    x_0 += 8;
  }
}

function $singleLine(this$static, target, text_0, sx, sy){
  var i, x_0;
  x_0 = sx;
  for (i = 0; i < text_0.length; i++) {
    $drawChar(this$static, target, text_0.charCodeAt(i), x_0, sy);
    x_0 += 8;
  }
}

function Font(images){
  this.images = images;
}

function count_1(text_0){
  var count, i;
  count = 0;
  for (i = 0; i < text_0.length; i++) {
    text_0.charCodeAt(i) == 10 && (count += 1);
  }
  return count;
}

defineClass(104, 1, {}, Font);
var BLACK, BROWN, RAW, WHITE, YELLOW_0;
var Lxor_core_Font_2_classLit = createForClass(104);
function $decode(this$static, encoded){
  try {
    $decodeOrThrow(this$static, encoded);
    return true;
  }
   catch ($e0) {
    $e0 = toJava($e0);
    if (instanceOf($e0, 12)) {
      return false;
    }
     else 
      throw toJs($e0);
  }
}

function $decodeAndUpdate(this$static, encoded){
  var i;
  if ($decode(this$static, encoded)) {
    for (i = 0; i < 15; i++) {
      $updateHighscore_0(this$static.left_0, i, this$static.highscores[i]);
      $updateHighscore_0(this$static.right, i, this$static.highscores[i + 15]);
    }
    return true;
  }
  return false;
}

function $decodeAndUpdate_0(this$static, lines){
  var line, line$index, line$max, success;
  success = false;
  for (line$index = 0 , line$max = lines.length; line$index < line$max; ++line$index) {
    line = lines[line$index];
    if (line.length == 0)
      continue;
    success = success | $decodeAndUpdate(this$static, line);
  }
  return success;
}

function $decodeOrThrow(this$static, encoded){
  var checkSum, h, i, out, x_0;
  if (encoded.length > 100)
    throw toJs(new IllegalArgumentException_0('Too long'));
  fill(this$static.highscores);
  out = 0;
  checkSum = START_CHECKSUM;
  for (i = 0; i < encoded.length;) {
    x_0 = decodeChar(encoded, i++);
    if (x_0 <= 15) {
      out += x_0;
      checkSum ^= x_0;
    }
     else {
      (x_0 & 32) != 0?(h = (x_0 & -33) << 6 | decodeChar(encoded, i++)):(h = (x_0 & -49) << 12 | decodeChar(encoded, i++) << 6 | decodeChar(encoded, i++));
      if (h == checkSum && i == encoded.length) {
        return;
      }
       else if (out < this$static.highscores.length) {
        this$static.highscores[out++] = 0 > ($intern_29 < h?$intern_29:h)?0:$intern_29 < h?$intern_29:h;
        checkSum ^= h;
      }
    }
  }
  throw toJs(new IllegalArgumentException_0('Checksum failed'));
}

function $encode(this$static){
  var i;
  for (i = 0; i < 15; i++) {
    this$static.highscores[i] = this$static.left_0.entries_0[i].highscore;
    this$static.highscores[i + 15] = this$static.right.entries_0[i].highscore;
  }
  return encode(this$static.highscores);
}

function HighscoresEncoder(left, right){
  this.highscores = initUnidimensionalArray(I_classLit, $intern_24, 14, 30, 15, 1);
  this.left_0 = left;
  this.right = right;
}

function asChar(i){
  if (i >= 0) {
    if (i < 26) {
      return i + 65 & $intern_25;
    }
     else if (i < 52) {
      return i - 26 + 97 & $intern_25;
    }
     else if (i < 62) {
      return i - 52 + 48 & $intern_25;
    }
     else if (i == 62) {
      return 43;
    }
     else if (i == 63) {
      return 47;
    }
  }
  throw toJs(new IllegalArgumentException_0('Invalid int: ' + i));
}

function asInt(c){
  if (c >= 65 && c <= 90) {
    return c - 65;
  }
   else if (c >= 97 && c <= 122) {
    return c - 97 + 26;
  }
   else if (c >= 48 && c <= 57) {
    return c - 48 + 52;
  }
   else if (c == 43) {
    return 62;
  }
   else if (c == 47) {
    return 63;
  }
  throw toJs(new IllegalArgumentException_0('Invalid char: ' + String.fromCharCode(c)));
}

function decodeChar(s, index_0){
  return asInt(s.charCodeAt(index_0));
}

function encode(highscores){
  var checkSum, highscore, highscore$index, highscore$max, result, zeroes;
  zeroes = 0;
  checkSum = START_CHECKSUM;
  result = new StringBuilder;
  for (highscore$index = 0 , highscore$max = highscores.length; highscore$index < highscore$max; ++highscore$index) {
    highscore = highscores[highscore$index];
    highscore = 0 > ($intern_29 < highscore?$intern_29:highscore)?0:$intern_29 < highscore?$intern_29:highscore;
    if (highscore > 0 && highscore < $intern_29) {
      if (zeroes > 0) {
        if (zeroes > 15) {
          $append_7(result, '' + charToString(asChar(15)));
          zeroes -= 15;
          checkSum ^= 15;
        }
        $append_7(result, '' + charToString(asChar(zeroes)));
        checkSum ^= zeroes;
        zeroes = 0;
      }
      $append_7(result, highscore < 2048?'' + charToString(asChar((highscore & 4032) >> 6 | 32)) + charToString(asChar(highscore & 63)):'' + charToString(asChar((highscore & 61440) >> 12 | 16)) + charToString(asChar((highscore & 4032) >> 6)) + charToString(asChar(highscore & 63)));
      checkSum ^= highscore;
    }
     else {
      ++zeroes;
    }
  }
  result.string.length != 0 && $append_7(result, checkSum < 2048?'' + charToString(asChar((checkSum & 4032) >> 6 | 32)) + charToString(asChar(checkSum & 63)):'' + charToString(asChar((checkSum & 61440) >> 12 | 16)) + charToString(asChar((checkSum & 4032) >> 6)) + charToString(asChar(checkSum & 63)));
  return result.string;
}

defineClass(380, 1, {}, HighscoresEncoder);
var START_CHECKSUM = 4567;
var Lxor_core_HighscoresEncoder_2_classLit = createForClass(380);
function $drawActiveObject(this$static, percent, surface){
  var cellType, d, d$array, d$index, d$max, fastPercent, rd, sprite, x_0, y_0;
  switch (this$static.mazeState.state.ordinal) {
    case 2:
    case 3:
      x_0 = $getActiveObjectX(this$static.mazeState);
      y_0 = $getActiveObjectY(this$static.mazeState);
      cellType = $getActiveObjectType(this$static.mazeState);
      sprite = ($clinit_Sprites() , CELLS)[cellType.code_0];
      if (cellType == ($clinit_Cells$CellType() , SPHERE) && percent >= 25 && percent < 75) {
        rd = $isHorizontal(this$static.mazeState.movement)?($clinit_Sprites$RollDirection() , HORIZ):($clinit_Sprites$RollDirection() , VERTI);
        sprite = SPHERE_ROLL[rd.code_0];
      }
       else 
        cellType == ROCK && (sprite = ROCK_EYES[round_int(ROCK_EYES.length * $wnd.Math.random())]);
      $drawSlidingTile(surface, sprite, x_0, y_0, this$static.mazeState.movement, percent);
      break;
    case 4:
      x_0 = $getActiveObjectX(this$static.mazeState);
      y_0 = $getActiveObjectY(this$static.mazeState);
      cellType = $getActiveObjectType(this$static.mazeState);
      fastPercent = 25 + (percent * 75 / 100 | 0);
      $draw_7(surface, $frame(($clinit_Sprites() , EXPLOSION_ANIM), fastPercent), x_0 * 24, y_0 * 24);
      for (d$array = getExplosionDirections(cellType) , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
        d = d$array[d$index];
        $draw_7(surface, $frame(EXPLOSION_ANIM, percent), (x_0 + d.dx) * 24, (y_0 + d.dy) * 24);
      }

  }
}

function $drawActivePlayer(this$static, percent, surface){
  var player, pose, sprite, x_0, y_0;
  player = $getActivePlayer(this$static.mazeState);
  if (!player)
    return;
  x_0 = player.x_0;
  y_0 = player.y_0;
  if (this$static.mazeState.state == ($clinit_MazeState$State() , SWITCHING_PLAYER)) {
    pose = percent < 50?($clinit_Player$Pose() , UP_2):($clinit_Player$Pose() , DOWN_2);
    $draw_7(surface, ($clinit_Sprites() , PLAYERS_POSES)[player.code_0][pose.code_0], x_0 * 24, y_0 * 24);
  }
   else if (player.state == ($clinit_Player$PlayerState() , ALIVE) || player.state == TELEPORTING) {
    pose = $pose(player, percent);
    sprite = ($clinit_Sprites() , PLAYERS_POSES)[player.code_0][pose.code_0];
    $drawSlidingTile(surface, sprite, x_0, y_0, player.movement, percent);
  }
   else 
    player.state == DYING && $draw_7(surface, $frame(($clinit_Sprites() , PLAYERS_DYING)[player.code_0], percent), x_0 * 24, y_0 * 24);
}

function $isAnimatedObject(this$static, x_0, y_0){
  var cellType;
  switch (this$static.mazeState.state.ordinal) {
    case 2:
    case 3:
      return x_0 == $getActiveObjectX(this$static.mazeState) && y_0 == $getActiveObjectY(this$static.mazeState);
    case 4:
      if ($isBorder(this$static.mazeState, x_0, y_0))
        return false;
      cellType = $getActiveObjectType(this$static.mazeState);
      return abs_0(x_0 - $getActiveObjectX(this$static.mazeState)) <= ($clinit_MazeState() , cellType == ($clinit_Cells$CellType() , DYNAMITE)?1:0) && abs_0(y_0 - $getActiveObjectY(this$static.mazeState)) <= (cellType == TIN_BOMB?1:0);
    default:return false;
  }
}

function $isAnimatedPlayer(this$static, x_0, y_0){
  var player, state;
  player = $getActivePlayer(this$static.mazeState);
  if (!!player && x_0 == player.x_0 && y_0 == player.y_0) {
    state = player.state;
    return state == ($clinit_Player$PlayerState() , ALIVE) || state == EXPLODING || state == DYING;
  }
  return false;
}

function InGameMazeRenderer(mazeState){
  InGameMazeRenderer_0.call(this, mazeState, ($clinit_Tiles() , WALL_TILES)[mazeState.maze.wallTheme], FLOOR_TILES[mazeState.maze.floorTheme]);
}

function InGameMazeRenderer_0(mazeState, wallTiles, floorTiles){
  BaseMazeRenderer.call(this, mazeState.maze);
  this.mazeState = mazeState;
  this.wallTiles = wallTiles;
  this.floorTiles = floorTiles;
}

defineClass(186, 136, {}, InGameMazeRenderer);
_.drawAnimations = function drawAnimations_0(percent, surface){
  $drawActivePlayer(this, percent, surface);
  $drawActiveObject(this, percent, surface);
}
;
_.drawFloor = function drawFloor_0(x_0, y_0){
  return this.mazeState.collectedDecoys % 2 == 0;
}
;
_.drawSprite = function drawSprite_0(x_0, y_0){
  return !($isAnimatedPlayer(this, x_0, y_0) || $isAnimatedObject(this, x_0, y_0));
}
;
_.drawWall = function drawWall_0(x_0, y_0){
  return this.mazeState.collectedDecoys % 2 == 0 && !($isAnimatedPlayer(this, x_0, y_0) || $isAnimatedObject(this, x_0, y_0));
}
;
_.getThemedFloorTiles = function getThemedFloorTiles_0(){
  return this.floorTiles;
}
;
_.getThemedWallTiles = function getThemedWallTiles_0(){
  return this.wallTiles;
}
;
_.maze_0 = function maze_1(){
  return this.mazeState.maze;
}
;
var Lxor_core_InGameMazeRenderer_2_classLit = createForClass(186);
function clamp(x_0, upper){
  return 0 > (upper < x_0?upper:x_0)?0:upper < x_0?upper:x_0;
}

function modulo(x_0, y_0){
  return (x_0 % y_0 + y_0) % y_0;
}

function $clinit_LevelEditor(){
  $clinit_LevelEditor = emptyMethod;
  VIEWPORT_SIZES = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_24, 14, 15, [8, 16, 32]);
  DEFAULT_EDITOR_MAZE = createDefaultEditorMaze();
}

function $adjustTheme(this$static, delta){
  if ($isPressed_0(this$static.controlState, ($clinit_ExtraControl() , FAST_FORWARD))) {
    this$static.paintCell = ($clinit_Cells$CellType() , EMPTY).code_0;
    this$static.maze.floorTheme = modulo(this$static.maze.floorTheme + delta, 15);
  }
   else {
    this$static.paintCell = ($clinit_Cells$CellType() , WALL).code_0;
    this$static.maze.floorTheme = this$static.maze.wallTheme = modulo(this$static.maze.wallTheme + delta, 15);
  }
  this$static.stateIconOffset = stateIconOffset_0(cellType_0(this$static.paintCell));
}

function $customMazeOrNull(this$static){
  return isDefaultEditorMaze(this$static.maze)?null:this$static.maze;
}

function $getFloorTile(this$static, cell){
  return ($clinit_Tiles() , FLOOR_TILES)[this$static.maze.floorTheme][$clinit_Cells() , (cell & FLOOR_TYPE_MASK) >> 6];
}

function $getWallTile(this$static, cell){
  return ($clinit_Tiles() , WALL_TILES)[this$static.maze.wallTheme][wallType_0(cell)];
}

function $handleControls(this$static){
  var c, c$array, c$index, c$max, deltaX, deltaY, mazeX, mazeY, mousePressed, paintCellType, paletteX, paletteY;
  ($isFresh(this$static.controlState, ($clinit_Control() , OK)) || $isFreshClickInside(this$static.controlState, 218, 137, 40, 40)) && (this$static.showPalette = !this$static.showPalette);
  if (!$isMoving(this$static.viewport_0) && !$isPressed_0(this$static.controlState, ($clinit_ExtraControl() , SPECIAL))) {
    deltaX = 0;
    deltaY = 0;
    for (c$array = ALL_CONTROLS , c$index = 0 , c$max = c$array.length; c$index < c$max; ++c$index) {
      c = c$array[c$index];
      if (c != OK && $isPressed(this$static.controlState, c)) {
        deltaX += c.direction_0.dx;
        deltaY += c.direction_0.dy;
      }
    }
    $tryMove_0(this$static.viewport_0, deltaX, deltaY);
    $isMoving(this$static.viewport_0) && (this$static.msSinceLastMove = 0);
  }
  mousePressed = false;
  if ($isFreshClickInside(this$static.controlState, 16, 16, 192, 192)) {
    mousePressed = true;
    this$static.ignoreFirstMousePress = false;
  }
   else 
    $isViewportPressed(this$static.controlState) && !this$static.ignoreFirstMousePress && (mousePressed = true);
  if (mousePressed) {
    paletteX = ((this$static.controlState.lastMouseX - 16) * 8 / 192 | 0) - 5;
    paletteY = (this$static.controlState.lastMouseY - 16) * 8 / 192 | 0;
    if (this$static.showPalette && paletteX >= 0) {
      this$static.paintCell = $get_8(this$static.paletteMaze, paletteX, paletteY);
      this$static.stateIconOffset = stateIconOffset_0(cellType_0(this$static.paintCell));
    }
     else {
      mazeX = ((this$static.controlState.lastMouseX - 16) * this$static.viewport_0.size_0 / 192 | 0) + this$static.viewport_0.originX;
      mazeY = ((this$static.controlState.lastMouseY - 16) * this$static.viewport_0.size_0 / 192 | 0) + this$static.viewport_0.originY;
      paintCellType = cellType_0(this$static.paintCell);
      paintCellType == ($clinit_Cells$CellType() , EMPTY)?$set_2(this$static.maze, mazeX, mazeY, this$static.paintCell):$updateCellType(this$static.maze, mazeX, mazeY, paintCellType);
      $updateNeighbouringWalls(this$static.maze, mazeX, mazeY);
      $updateMap(this$static.mapRenderer);
    }
  }
  $isFresh_0(this$static.controlState, ($clinit_ExtraControl() , ZOOM_IN_0))?(this$static.viewportSizeIndex = clamp(this$static.viewportSizeIndex + -1, VIEWPORT_SIZES.length - 1) , $resize(this$static.viewport_0, VIEWPORT_SIZES[this$static.viewportSizeIndex])):$isFresh_0(this$static.controlState, ZOOM_OUT_0) && (this$static.viewportSizeIndex = clamp(this$static.viewportSizeIndex + 1, VIEWPORT_SIZES.length - 1) , $resize(this$static.viewport_0, VIEWPORT_SIZES[this$static.viewportSizeIndex]));
  $isFresh(this$static.controlState, LEFT_1) && $isPressed_0(this$static.controlState, SPECIAL)?$adjustTheme(this$static, -1):$isFresh(this$static.controlState, RIGHT_1) && $isPressed_0(this$static.controlState, SPECIAL) && $adjustTheme(this$static, 1);
  $isFresh_0(this$static.controlState, BACK_0) && (this$static.showPalette?(this$static.showPalette = false):(this$static.active = false));
  $isFreshClickInside(this$static.controlState, 218, 180, 15, 15)?$adjustTheme(this$static, -1):$isFreshClickInside(this$static.controlState, 243, 180, 15, 15) && $adjustTheme(this$static, 1);
  $isFreshClickInside(this$static.controlState, 293, 184, 24, 24) && (this$static.active = false);
}

function $render_1(this$static, surface, deltaMs){
  var percent;
  percent = $isMoving(this$static.viewport_0)?clamp(100 * (this$static.msSinceLastMove + deltaMs) / 100 | 0, 99):0;
  $render(this$static.mazeRenderer, this$static.viewport_0, percent, surface, true);
  if (this$static.showPalette) {
    $translate(surface.raw, 120, 0);
    $setFillColor(surface.raw, $intern_45);
    $fillRect_0(surface.raw, 0, 0, 72, 192);
    $renderAll(this$static.paletteRenderer, surface);
    $translate(surface.raw, -120, 0);
  }
}

function $resetViewportSize(this$static){
  this$static.viewportSizeIndex = 1;
  $resize(this$static.viewport_0, VIEWPORT_SIZES[this$static.viewportSizeIndex]);
}

function $setActive(this$static, active){
  active && !this$static.active && (this$static.ignoreFirstMousePress = true);
  this$static.active = active;
}

function $stateIcon(this$static){
  var cellType, paintCellType;
  paintCellType = cellType_0(this$static.paintCell);
  return paintCellType == ($clinit_Cells$CellType() , EMPTY)?$getFloorTile(this$static, this$static.paintCell):paintCellType == WALL?$getWallTile(this$static, this$static.paintCell):(cellType = cellType_0(this$static.paintCell) , cellType == EMPTY || cellType == UNKNOWN_0?null:($clinit_Sprites() , CELLS)[cellType.code_0]);
}

function $tick_0(this$static){
  this$static.msSinceLastMove += 33;
  $isMoving(this$static.viewport_0) && this$static.msSinceLastMove >= 100 && $completeMove_0(this$static.viewport_0);
  $handleControls(this$static);
}

function LevelEditor(maze, controlState){
  $clinit_LevelEditor();
  this.paintCell = ($clinit_Cells$CellType() , WALL).code_0;
  this.maze = maze;
  this.paletteMaze = ($clinit_AsciiMazeLoader() , loadMaze($split('3, 8\n[]  ..\n  :  :\n  P1P2\nRoBaDe\nHfNwNe\nDySwSe\nTbVfZe\nSpTeEx\n', '\n', 0), 0));
  this.controlState = controlState;
  this.viewport_0 = new Viewport(maze, VIEWPORT_SIZES[this.viewportSizeIndex]);
  this.mazeRenderer = new BaseMazeRenderer(maze);
  this.paletteRenderer = new LevelEditor$PaletteRenderer(this, this.paletteMaze);
  this.mapRenderer = new MapRenderer(maze);
}

function createDefaultEditorMaze(){
  var maze, x_0, y_0;
  maze = ($clinit_AsciiMazeLoader() , loadMaze($split('32\n[][][][][][][][]\n[]              \n[]    P2        \n[]  P1          \n[]      Ex      \n[]              \n[]              \n[]              \n', '\n', 0), 0));
  maze.title_0 = 'Untitled maze';
  for (x_0 = 0; x_0 < maze.width_0; x_0++) {
    $set_2(maze, x_0, 0, ($clinit_Cells$CellType() , WALL).code_0);
    $set_2(maze, x_0, maze.height_0 - 1, WALL.code_0);
  }
  for (y_0 = 0; y_0 < maze.height_0; y_0++) {
    $set_2(maze, 0, y_0, ($clinit_Cells$CellType() , WALL).code_0);
    $set_2(maze, maze.width_0 - 1, y_0, WALL.code_0);
  }
  $updateAllWalls(maze);
  return maze;
}

function isDefaultEditorMaze(maze){
  return $isSameByteGrid(DEFAULT_EDITOR_MAZE, maze);
}

defineClass(180, 1, {}, LevelEditor);
_.active = false;
_.ignoreFirstMousePress = false;
_.msSinceLastMove = 0;
_.paintCell = 0;
_.showPalette = false;
_.stateIconOffset = 0;
_.viewportSizeIndex = 1;
var DEFAULT_EDITOR_MAZE, VIEWPORT_SIZES;
var Lxor_core_LevelEditor_2_classLit = createForClass(180);
function LevelEditor$PaletteRenderer(this$0, maze){
  this.this$01 = this$0;
  BaseMazeRenderer.call(this, maze);
}

defineClass(369, 136, {}, LevelEditor$PaletteRenderer);
_.drawFloor = function drawFloor_1(x_0, y_0){
  return x_0 > 0 && y_0 < 2;
}
;
_.getThemedFloorTiles = function getThemedFloorTiles_1(){
  return $getThemedFloorTiles(this.this$01.mazeRenderer);
}
;
_.getThemedWallTiles = function getThemedWallTiles_1(){
  return $getThemedWallTiles(this.this$01.mazeRenderer);
}
;
var Lxor_core_LevelEditor$PaletteRenderer_2_classLit = createForClass(369);
function $isBackClicked(this$static, controlState){
  if (this$static.back_0 == ($clinit_Direction() , LEFT_2)) {
    return $isFreshClickInsideViewport(controlState, 2, 173, 16, 15);
  }
   else if (this$static.back_0 == RIGHT_2) {
    return $isFreshClickInsideViewport(controlState, 172, 173, 16, 15);
  }
  return false;
}

function $isMazeClicked(this$static, controlState){
  var i;
  if (controlState.freshMouseClick) {
    for (i = 0; i < 15; i++) {
      if ($isFreshClickInsideViewport(controlState, 0, 6 + i * 11, 192, 8)) {
        this$static.selectedIndex = i;
        return true;
      }
    }
  }
  return false;
}

function $render_2(this$static, surface){
  var entryIndex, font, i;
  for (i = 0; i < 15; i++) {
    entryIndex = i + this$static.startIndex;
    font = entryIndex == this$static.selectedIndex?WHITE:YELLOW_0;
    $singleLine(font, surface, this$static.entries_0[entryIndex].rowText, 4, 6 + i * 11);
  }
  $drawTextBox(BROWN, surface, this$static.listTitle, 20, 173, 150, 15, $intern_46);
  this$static.back_0 == ($clinit_Direction() , LEFT_2)?$drawTextBox(BROWN, surface, '<', 2, 173, 16, 15, $intern_46):this$static.back_0 == RIGHT_2 && $drawTextBox(BROWN, surface, '>', 172, 173, 16, 15, $intern_46);
}

function $selectMazeByTitle(this$static, title_0){
  var i;
  for (i = 0; i < 15; i++) {
    if ($equals(this$static.entries_0[i].maze.title_0, title_0)) {
      this$static.selectedIndex = i;
      return true;
    }
  }
  return false;
}

function $selected(this$static){
  return this$static.entries_0[this$static.selectedIndex].maze;
}

function $setSelectedIndex(this$static, selectedIndex){
  this$static.selectedIndex = clamp(selectedIndex, this$static.entries_0.length);
}

function $upOrDown(this$static, d){
  this$static.selectedIndex = $dy(d, this$static.selectedIndex);
  this$static.selectedIndex = modulo(this$static.selectedIndex, this$static.entries_0.length);
  this$static.selectedIndex < this$static.startIndex?(this$static.startIndex = this$static.selectedIndex):this$static.selectedIndex >= this$static.startIndex + 15 && (this$static.startIndex = this$static.selectedIndex - 15 + 1);
}

function $updateHighscore(this$static, highscore){
  $updateHighscore_0(this$static, this$static.selectedIndex, highscore);
}

function $updateHighscore_0(this$static, index_0, highscore){
  highscore = min_0(highscore, this$static.entries_0[index_0].highscore);
  highscore != this$static.entries_0[index_0].highscore && (this$static.entries_0[index_0] = new ListMenu$ListEntry(this$static.entries_0[index_0].maze, highscore));
}

function ListMenu(listTitle, mazes, back_0){
  ListMenu_0.call(this, listTitle, toListEntries(mazes), back_0);
}

function ListMenu_0(listTitle, entries, back_0){
  this.listTitle = listTitle;
  this.entries_0 = entries;
  this.back_0 = back_0;
}

function fixedLength(s){
  s == null && (s = '');
  return s.length <= 19?s + ('' + $substring_0('                              ', 0, 19 - s.length)):s.substr(0, 19);
}

function toListEntries(mazes){
  var index_0, m, m$iterator, result;
  result = initUnidimensionalArray(Lxor_core_ListMenu$ListEntry_2_classLit, $intern_3, 112, mazes.array.length, 0, 1);
  index_0 = 0;
  for (m$iterator = new ArrayList$1(mazes); m$iterator.i < m$iterator.this$01.array.length;) {
    m = $next_3(m$iterator);
    result[index_0++] = new ListMenu$ListEntry(m, $intern_29);
  }
  return result;
}

defineClass(137, 1, {}, ListMenu);
_.selectedIndex = 0;
_.startIndex = 0;
var Lxor_core_ListMenu_2_classLit = createForClass(137);
function ListMenu$ListEntry(maze, highscore){
  var highscoreLen;
  this.maze = maze;
  this.fixedLengthTitle = fixedLength(maze.title_0);
  this.highscore = highscore;
  highscoreLen = ('' + highscore).length;
  this.rowText = this.fixedLengthTitle + ('' + '                              '.substr(0, 4 - highscoreLen)) + highscore;
}

defineClass(112, 1, {112:1}, ListMenu$ListEntry);
_.highscore = 0;
var Lxor_core_ListMenu$ListEntry_2_classLit = createForClass(112);
function $loadState(this$static){
  var customLevel, i, lines, replay;
  if (this$static.state == null || this$static.state.length == 0) {
    return null;
  }
  lines = $split(this$static.state, '\n', 0);
  for (i = 0; i < lines.length; i++) {
    lines[i] = $trim(lines[i]);
  }
  $decodeAndUpdate_0(this$static.highscoresEncoder, lines);
  replay = decode(lines);
  customLevel = ($clinit_AsciiMazeLoader() , loadMaze(lines, 0));
  return new LoadSaveMenu$Loaded(replay.title_0, replay.moves, customLevel);
}

function $render_3(this$static, surface){
  $centeredSingleLine(YELLOW_0, surface, '- Current State -', 96, 12);
  $centeredSingleLine(BROWN, surface, 'Copy  save  Paste  load', 96, 24);
  $centeredSingleLine(BROWN, surface, '&            &', 96, 24);
  $drawTextBox(BROWN, surface, 'Copy', 8, 140, 84, 20, $intern_46);
  $drawTextBox(BROWN, surface, 'Ctrl+V\nto Paste', 99, 140, 84, 20, $intern_45);
  $drawTextBox(BROWN, surface, 'Back', 8, 166, 84, 20, $intern_46);
  $drawTextBox(BROWN, surface, 'Load state', 99, 166, 84, 20, $intern_46);
  !!this$static.image && drawScaledImage(surface, this$static.inverseMs > 0?this$static.image:this$static.inverse);
}

function $setState_0(this$static, state){
  this$static.state = state;
  $setSnippet(INSTANCE_1, state, false);
  $updateTextSize(this$static);
  this$static.image = renderText(this$static.maxWidth, this$static.maxHeight, this$static.state, false);
  this$static.inverse = renderText(this$static.maxWidth, this$static.maxHeight, this$static.state, true);
}

function $setState_1(this$static, mazeController, customLevel){
  var highscores, maze, replay, state;
  highscores = $encode(this$static.highscoresEncoder);
  highscores.length == 0 || (highscores = 'Highscores:\n' + highscores + '\n\n');
  replay = encode_0(mazeController);
  replay.length == 0 || (replay = 'Replay:\n' + replay + '\n\n');
  maze = '';
  !!customLevel && (maze = 'Maze:\n' + saveMaze(customLevel));
  state = highscores + replay + maze;
  $setState_0(this$static, state);
}

function $tick_1(this$static){
  this$static.inverseMs -= 33;
  $isFreshClickInsideViewport(this$static.controlState, 8, 140, 84, 20)?$writeSnippetToSystem(INSTANCE_1):$isFreshClickInsideViewport(this$static.controlState, 99, 140, 84, 20) && false?$setSnippet(INSTANCE_1, $readFromSystem(), true):$isFreshClickInsideViewport(this$static.controlState, 8, 166, 84, 20)?$load(this$static.mainMenu, null):$isFreshClickInsideViewport(this$static.controlState, 99, 166, 84, 20) && $load(this$static.mainMenu, $loadState(this$static));
}

function $updateTextSize(this$static){
  var i, width_0;
  this$static.maxHeight = 1;
  this$static.maxWidth = 1;
  width_0 = 1;
  for (i = 0; i < this$static.state.length; i++) {
    if ($charAt_0(this$static.state, i) == 10) {
      this$static.maxHeight += 1;
      width_0 = 1;
    }
     else {
      width_0 += 1;
      this$static.maxWidth = max_0(this$static.maxWidth, width_0);
    }
  }
}

function LoadSaveMenu(mainMenu, highscoresEncoder, controlState){
  this.clipboardSlot = new LoadSaveMenu$1(this);
  this.mainMenu = mainMenu;
  this.highscoresEncoder = highscoresEncoder;
  this.controlState = controlState;
  $addListener(INSTANCE_1, this.clipboardSlot);
}

function drawScaledImage(surface, image){
  var scale, xScale, yScale;
  xScale = 192 / image.raw.pixelWidth;
  yScale = 108 / image.raw.pixelHeight;
  scale = $wnd.Math.min(xScale, yScale);
  scale = $wnd.Math.min(scale, 1);
  $draw_6(surface, image, image.raw.pixelWidth * scale, image.raw.pixelHeight * scale);
}

function renderText(maxWidth, maxHeight, text_0, inverse){
  var font, result;
  result = new Canvas_1(INSTANCE_2.createRawCanvas(maxWidth * 8, maxHeight * 8));
  font = inverse?BLACK:BROWN;
  $fillRect_2(result, 0, 0, result.image.raw.pixelWidth, result.image.raw.pixelHeight, inverse?$intern_46:$intern_45);
  $leftAligned(font, result, text_0, 0, 0);
  return new Image_0(result.raw.image);
}

defineClass(377, 1, {}, LoadSaveMenu);
_.inverseMs = 0;
_.maxHeight = 0;
_.maxWidth = 0;
var Lxor_core_LoadSaveMenu_2_classLit = createForClass(377);
function LoadSaveMenu$1(this$0){
  this.this$01 = this$0;
}

defineClass(379, 40, $intern_32, LoadSaveMenu$1);
_.onEmit = function onEmit_5(text_0){
  $equals(text_0, this.this$01.state) || $setState_0(this.this$01, text_0);
  this.this$01.inverseMs = 100;
}
;
var Lxor_core_LoadSaveMenu$1_2_classLit = createForClass(379);
function LoadSaveMenu$Loaded(replayTitle, replayMoves, customLevel){
  this.replayTitle = replayTitle;
  this.replayMoves = replayMoves;
  this.customLevel = customLevel;
}

defineClass(378, 1, {}, LoadSaveMenu$Loaded);
var Lxor_core_LoadSaveMenu$Loaded_2_classLit = createForClass(378);
function $isLoaded(this$static){
  var loadable, loadable$iterator;
  if (this$static.array.length == 0)
    return false;
  for (loadable$iterator = new ArrayList$1(this$static); loadable$iterator.i < loadable$iterator.this$01.array.length;) {
    loadable = $next_3(loadable$iterator);
    if (!loadable.isLoaded())
      return false;
  }
  return true;
}

function $loadedCount(this$static){
  var count, loadable, loadable$iterator;
  count = 0;
  for (loadable$iterator = new ArrayList$1(this$static); loadable$iterator.i < loadable$iterator.this$01.array.length;) {
    loadable = $next_3(loadable$iterator);
    loadable.isLoaded() && (count += 1);
  }
  return count;
}

function $text(this$static){
  return $loadedCount(this$static) + ' of ' + this$static.array.length;
}

function LoadTracker(){
  ArrayList.call(this);
}

defineClass(127, 19, $intern_4, LoadTracker);
var Lxor_core_LoadTracker_2_classLit = createForClass(127);
function $isCollected(this$static, map_0){
  return !this$static.mazeState || $containsEnum(this$static.mazeState.collectedMaps, map_0);
}

function $render_4(this$static, x1, y1, x2, y2, canvas){
  var cellType, color_0, x_0, y_0;
  for (y_0 = y1; y_0 < y2; y_0++) {
    for (x_0 = x1; x_0 < x2; x_0++) {
      cellType = $getCellType(this$static.mazeState?this$static.mazeState.maze:this$static.maze, x_0, y_0);
      color_0 = $intern_45;
      cellType == ($clinit_Cells$CellType() , WALL)?(color_0 = -1127322):cellType == BALLOON && (color_0 = -1);
      $fillRect_2(canvas, (x_0 + this$static.originX) * this$static.zoom, (y_0 + this$static.originY) * this$static.zoom, this$static.zoom, this$static.zoom, color_0);
    }
  }
}

function $updateMap(this$static){
  var canvas, halfHeight, halfWidth, height, width_0;
  canvas = new Canvas_1(INSTANCE_2.createRawCanvas(64, 64));
  $setFillColor_0(canvas.raw, $intern_45);
  $fillRect_1(canvas.raw, 0, 0, 64, 64);
  width_0 = (this$static.mazeState?this$static.mazeState.maze:this$static.maze).width_0;
  height = (this$static.mazeState?this$static.mazeState.maze:this$static.maze).height_0;
  halfWidth = (width_0 + 1) / 2 | 0;
  halfHeight = (height + 1) / 2 | 0;
  $isCollected(this$static, ($clinit_Cells$CellType() , MAP_NW)) && $render_4(this$static, 0, 0, halfWidth, halfHeight, canvas);
  $isCollected(this$static, MAP_NE) && $render_4(this$static, halfWidth, 0, width_0, halfHeight, canvas);
  $isCollected(this$static, MAP_SW) && $render_4(this$static, 0, halfHeight, halfWidth, height, canvas);
  $isCollected(this$static, MAP_SE) && $render_4(this$static, halfWidth, halfHeight, width_0, height, canvas);
  this$static.map_0 = new Image_0(canvas.raw.image);
}

function MapRenderer(maze){
  this.maze = maze;
  this.mazeState = null;
  this.size_0 = findSize(maze);
  this.zoom = 64 / this.size_0 | 0;
  this.originX = (this.size_0 - maze.width_0) / 2 | 0;
  this.originY = (this.size_0 - maze.height_0) / 2 | 0;
  $updateMap(this);
}

function MapRenderer_0(mazeState){
  this.maze = null;
  this.mazeState = mazeState;
  this.size_0 = 1;
  this.size_0 = findSize(mazeState.maze);
  this.zoom = 64 / this.size_0 | 0;
  this.originX = (this.size_0 - mazeState.maze.width_0) / 2 | 0;
  this.originY = (this.size_0 - mazeState.maze.height_0) / 2 | 0;
  $updateMap(this);
  $add_0(mazeState.mazeStateListeners, this);
}

function findSize(maze){
  var size_0;
  size_0 = 1;
  while (maze.width_0 > size_0 || maze.height_0 > size_0) {
    size_0 *= 2;
  }
  return size_0;
}

defineClass(181, 1, {398:1}, MapRenderer, MapRenderer_0);
_.onStateTransition = function onStateTransition_0(oldState, newState, event_0){
  (oldState == ($clinit_MazeState$State() , EXPLOSION) || event_0 == ($clinit_MazeState$AdditionalEvent() , BALLOON_COLLECTED) || event_0 == ($clinit_MazeState$AdditionalEvent() , MAP_COLLECTED)) && $updateMap(this);
}
;
_.map_0 = null;
_.originX = 0;
_.originY = 0;
_.size_0 = 0;
_.zoom = 0;
var Lxor_core_MapRenderer_2_classLit = createForClass(181);
function $clone(this$static){
  var clone;
  clone = new Maze_0(this$static.title_0, this$static.width_0, this$static.height_0, this$static.wallTheme, this$static.floorTheme);
  arraycopy(this$static.data_0, clone.data_0, 0, this$static.data_0.length);
  return clone;
}

function $countCellType(this$static, cellType){
  var count, i;
  count = 0;
  for (i = 0; i < this$static.data_0.length; i++) {
    cellType_0(this$static.data_0[i]) == cellType && ++count;
  }
  return count;
}

function $findCellType(this$static, cellType){
  var i;
  for (i = 0; i < this$static.data_0.length; i++) {
    if (cellType_0(this$static.data_0[i]) == cellType) {
      return i;
    }
  }
  return -1;
}

function $findCellType_0(this$static, cellType, startIndex){
  var i, index_0;
  for (i = 0; i < this$static.data_0.length; i++) {
    index_0 = (startIndex + i) % this$static.data_0.length;
    if (cellType_0(this$static.data_0[index_0]) == cellType) {
      return index_0;
    }
  }
  return -1;
}

function $getCellType(this$static, x_0, y_0){
  return cellType_0($get_7(this$static, (checkBounds('x', x_0, this$static.width_0) , checkBounds('y', y_0, this$static.height_0) , y_0 * this$static.width_0 + x_0)));
}

function $updateAllWalls(this$static){
  var x_0, y_0;
  for (x_0 = 0; x_0 < this$static.width_0; x_0++) {
    for (y_0 = 0; y_0 < this$static.height_0; y_0++) {
      $updateWallType(this$static, x_0, y_0);
    }
  }
}

function $updateCellType(this$static, x_0, y_0, newCellType){
  var newCode, oldCode;
  oldCode = $get_7(this$static, (checkBounds('x', x_0, this$static.width_0) , checkBounds('y', y_0, this$static.height_0) , y_0 * this$static.width_0 + x_0));
  newCode = updateCellType(oldCode, newCellType);
  $set_1(this$static, (checkBounds('x', x_0, this$static.width_0) , checkBounds('y', y_0, this$static.height_0) , y_0 * this$static.width_0 + x_0), newCode);
  $clinit_Cells();
  (oldCode & ($clinit_Cells$CellType() , WALL).code_0) == WALL.code_0 != ((newCode & WALL.code_0) == WALL.code_0) && $updateNeighbouringWalls(this$static, x_0, y_0);
  return cellType_0(oldCode);
}

function $updateNeighbouringWalls(this$static, x_0, y_0){
  var d, d$array, d$index, d$max;
  $updateWallType(this$static, x_0, y_0);
  for (d$array = ($clinit_Direction() , ALL_DIRECTIONS) , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    $updateWallType(this$static, x_0 + d.dx, y_0 + d.dy);
  }
}

function $updateWallType(this$static, x_0, y_0){
  var d, d$array, d$index, d$max, wallTypeCode;
  $clinit_Cells();
  if (($safeGet(this$static, x_0, y_0) & ($clinit_Cells$CellType() , WALL).code_0) != WALL.code_0)
    return;
  wallTypeCode = 0;
  for (d$array = ($clinit_Direction() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [UP_1, DOWN_1, LEFT_2, RIGHT_2])) , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    ($safeGet(this$static, x_0 + d.dx, y_0 + d.dy) & WALL.code_0) == WALL.code_0 && (wallTypeCode |= d.bitCode);
  }
  $set_2(this$static, x_0, y_0, WALL.code_0 | wallTypeCode);
}

function Maze(){
  Maze_0.call(this, '', 32, 32, 0, 0);
}

function Maze_0(title_0, width_0, height, wallTheme, floorTheme){
  ByteGrid.call(this, initUnidimensionalArray(B_classLit, $intern_24, 14, width_0 * height, 15, 1), width_0, height);
  this.title_0 = title_0 != null?title_0:'';
  this.wallTheme = wallTheme;
  this.floorTheme = floorTheme;
}

defineClass(68, 128, {68:1}, Maze, Maze_0);
_.toString_0 = function toString_53(){
  return this.title_0 + '\n' + $toString_1(this);
}
;
_.floorTheme = 0;
_.title_0 = '';
_.wallTheme = 0;
var Lxor_core_Maze_2_classLit = createForClass(68);
function $clinit_MazeController(){
  $clinit_MazeController = emptyMethod;
  VIEWPORT_SIZES_0 = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_24, 14, 15, [8, 10, 12, 16, 32]);
}

function $abortReplay(this$static){
  this$static.dialogText = 'REPLAY INTERRUPT';
  this$static.lastReplayLength = this$static.movesOut.count;
  this$static.movesIn = null;
}

function $adjustViewportSize(this$static, delta){
  var i;
  this$static.viewportSizeIndex = clamp(this$static.viewportSizeIndex + delta, VIEWPORT_SIZES_0.length - 1);
  for (i = 0; i < this$static.viewports.length; i++) {
    $resize_0(this$static.viewports[i], VIEWPORT_SIZES_0[this$static.viewportSizeIndex], this$static.mazeState.players[i]);
  }
}

function $centerOnPlayers(this$static){
  var i;
  for (i = 0; i < this$static.viewports.length; i++) {
    $centerOnPlayer(this$static.viewports[i], this$static.mazeState.players[i]);
  }
}

function $checkForGameOver(this$static){
  if ((this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == LEVEL_COMPLETED) && !!this$static.callback) {
    $onGameOver(this$static.callback, this$static.mazeState.state == LEVEL_COMPLETED?this$static.movesOut.count:$intern_0);
    this$static.callback = null;
  }
  if ((this$static.mazeState.state == LEVEL_FAILED || this$static.mazeState.state == LEVEL_COMPLETED) && !!this$static.movesIn) {
    this$static.lastReplayLength = this$static.movesOut.count;
    this$static.movesIn = null;
  }
}

function $chooseSpeedUp(this$static){
  if (this$static.movesIn) {
    if (this$static.warpTo > 0) {
      $chooseWarpSpeedUp(this$static, this$static.warpTo);
    }
     else {
      this$static.speedUp = 2;
      this$static.superSpeedUp = $isPressed_0(this$static.controlState, ($clinit_ExtraControl() , FAST_FORWARD))?1:0;
    }
  }
   else {
    this$static.speedUp = $isPressed_0(this$static.controlState, ($clinit_ExtraControl() , FAST_FORWARD))?2:1;
    this$static.superSpeedUp = 0;
  }
}

function $chooseWarpSpeedUp(this$static, replayLength){
  this$static.speedUp = 4;
  this$static.superSpeedUp = replayLength * 33 / 5000 | 0;
  this$static.superSpeedUp = max_0(this$static.superSpeedUp, 2);
}

function $dialogText(this$static){
  if (!this$static.active)
    return null;
  if (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED)) {
    return 'You failed!';
  }
   else if (this$static.mazeState.state == LEVEL_COMPLETED) {
    return 'Congratulations!';
  }
  return this$static.dialogText;
}

function $getActiveViewportIndex(this$static){
  var activePlayerIndex;
  activePlayerIndex = this$static.mazeState.activePlayerIndex;
  activePlayerIndex >= 0 && (this$static.activeViewportIndex = activePlayerIndex);
  return this$static.activeViewportIndex;
}

function $handleControls_0(this$static){
  var c;
  if ($isFresh(this$static.controlState, ($clinit_Control() , OK))) {
    $dialogText(this$static) != null?(this$static.dialogText = null , (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == LEVEL_COMPLETED) && (this$static.active = false)):$tryAct(this$static, OK);
  }
   else if ($dialogText(this$static) == null) {
    c = $onlyPressedControl(this$static.controlState);
    !!c && c != OK?$tryAct(this$static, c):$isFreshClickInside(this$static.controlState, 218, 137, 40, 40) && $tryAct(this$static, OK);
  }
}

function $isStateSkippable(this$static){
  var activeObjectX, activeObjectY, d, viewport;
  if (this$static.mazeState.state != ($clinit_MazeState$State() , OBJECT_MOVING))
    return false;
  if (this$static.mazeState.additionalEvent != ($clinit_MazeState$AdditionalEvent() , NONE))
    return false;
  activeObjectX = $getActiveObjectX(this$static.mazeState);
  activeObjectY = $getActiveObjectY(this$static.mazeState);
  viewport = this$static.viewports[$getActiveViewportIndex(this$static)];
  if (viewport.deltaX != 0 || viewport.deltaY != 0)
    return false;
  if (activeObjectX >= viewport.originX && activeObjectX < viewport.originX + viewport.size_0 && activeObjectY >= viewport.originY && activeObjectY < viewport.originY + viewport.size_0)
    return false;
  d = this$static.mazeState.movement;
  if ($contains_4(viewport, activeObjectX + d.dx, activeObjectY + d.dy))
    return false;
  return true;
}

function $percent(this$static, deltaMs){
  var totalMsForCurrentState;
  totalMsForCurrentState = this$static.mazeState.state.ms;
  if (totalMsForCurrentState == 0) {
    return 0;
  }
  return clamp(100 * (this$static.msInCurrentState + this$static.speedUp * deltaMs) / totalMsForCurrentState | 0, 99);
}

function $render_5(this$static, surface, deltaMs){
  $render(this$static.mazeRenderer, this$static.viewports[$getActiveViewportIndex(this$static)], $percent(this$static, deltaMs), surface, false);
  $dialogText(this$static) != null && $drawTextBox(BROWN, surface, $dialogText(this$static), 26, 71, 140, 50, $intern_46);
}

function $renderBalloonsCounter(this$static, surface, deltaMs){
  $renderBalloons(this$static.counterRenderer, surface, $percent(this$static, deltaMs));
}

function $renderMap(this$static){
  if (!this$static.active)
    return null;
  return this$static.mapRenderer.map_0;
}

function $renderMovesCounter(this$static, surface, deltaMs){
  $renderMoves(this$static.counterRenderer, surface, $percent(this$static, deltaMs));
}

function $replayNextMoves(this$static, numMoves){
  while (!!this$static.movesIn && numMoves > 0) {
    $tryStartReplayOneMove(this$static);
    $skipToSettled(this$static);
    --numMoves;
  }
}

function $reset_1(this$static){
  $reset_2(this$static.mazeState);
  $updateMap(this$static.mapRenderer);
  $reset_0(this$static.counterRenderer);
  $centerOnPlayers(this$static);
  this$static.activeViewportIndex = 0;
  this$static.active = true;
  this$static.wasActive = true;
}

function $skipToSettled(this$static){
  var activePlayerIndex;
  while (!$isSettled(this$static.mazeState)) {
    $advanceToNextState(this$static.mazeState);
    activePlayerIndex = this$static.mazeState.activePlayerIndex;
    activePlayerIndex >= 0 && (this$static.activeViewportIndex = activePlayerIndex);
    $followPlayer(this$static.viewports[this$static.activeViewportIndex], this$static.mazeState.players[this$static.activeViewportIndex]);
  }
}

function $startReplay(this$static){
  !!this$static.movesIn && this$static.movesOut.count < 10 && this$static.lastReplayLength > this$static.movesOut.count && (this$static.warpTo = this$static.lastReplayLength);
  if (this$static.movesIn)
    return;
  if (this$static.movesOut.count == 0)
    return;
  $reset_1(this$static);
  this$static.warpTo = 0;
  this$static.movesIn = new ByteArrayInputStream($toByteArray(this$static.movesOut));
  this$static.movesOut = new ByteArrayOutputStream;
  this$static.dialogText = null;
}

function $tick_2(this$static){
  var activePlayerIndex, totalMsForCurrentState;
  $isFresh_0(this$static.controlState, ($clinit_ExtraControl() , BACK_0)) && (this$static.movesIn?$abortReplay(this$static):$dialogText(this$static) != null?(this$static.dialogText = null , (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == LEVEL_COMPLETED) && (this$static.active = false)):(this$static.active = false));
  $dialogText(this$static) != null && $isFresh(this$static.controlState, ($clinit_Control() , OK)) && (this$static.dialogText = null , (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == LEVEL_COMPLETED) && (this$static.active = false));
  !!this$static.movesIn && $isFresh_0(this$static.controlState, INTERRUPT) && $abortReplay(this$static);
  $isFresh_0(this$static.controlState, ZOOM_IN_0)?$adjustViewportSize(this$static, -1):$isFresh_0(this$static.controlState, ZOOM_OUT_0) && $adjustViewportSize(this$static, 1);
  $chooseSpeedUp(this$static);
  if (!!this$static.movesIn && this$static.superSpeedUp > 0) {
    $replayNextMoves(this$static, this$static.superSpeedUp);
    $checkForGameOver(this$static);
    return;
  }
  this$static.msInCurrentState += this$static.speedUp * 33;
  if (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == LEVEL_COMPLETED)
    return;
  totalMsForCurrentState = this$static.mazeState.state.ms;
  if (totalMsForCurrentState > 0 && this$static.msInCurrentState >= totalMsForCurrentState) {
    $advanceToNextState(this$static.mazeState);
    while ($isStateSkippable(this$static)) {
      $advanceToNextState(this$static.mazeState);
    }
    this$static.msInCurrentState -= totalMsForCurrentState;
    totalMsForCurrentState = this$static.mazeState.state.ms;
    totalMsForCurrentState > 0 && (this$static.msInCurrentState = min_0(this$static.msInCurrentState, totalMsForCurrentState / 2 | 0));
  }
  this$static.movesIn?$tryStartReplayOneMove(this$static):$handleControls_0(this$static);
  $checkForGameOver(this$static);
  activePlayerIndex = this$static.mazeState.activePlayerIndex;
  activePlayerIndex >= 0 && (this$static.activeViewportIndex = activePlayerIndex);
  $followPlayer(this$static.viewports[this$static.activeViewportIndex], this$static.mazeState.players[this$static.activeViewportIndex]);
}

function $tryAct(this$static, c){
  var result;
  if (this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == LEVEL_COMPLETED)
    return false;
  result = false;
  c.direction_0?(result = $tryMove(this$static.mazeState, c.direction_0)):c == ($clinit_Control() , OK) && (result = $trySwitchPlayer(this$static.mazeState));
  if (result) {
    this$static.msInCurrentState = 0;
    $write(this$static.movesOut, c.letter);
  }
  return result;
}

function $tryStartReplayOneMove(this$static){
  var control, letter;
  if (!this$static.movesIn || !$isSettled(this$static.mazeState) || this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_FAILED) || this$static.mazeState.state == ($clinit_MazeState$State() , LEVEL_COMPLETED)) {
    return;
  }
  if (this$static.warpTo > 0 && this$static.movesOut.count >= this$static.warpTo) {
    this$static.dialogText = 'REPLAY REPLAYED';
    this$static.movesIn = null;
    return;
  }
  control = null;
  while (!control) {
    letter = $read(this$static.movesIn);
    if (letter == -1) {
      this$static.movesIn = null;
      this$static.lastReplayLength = this$static.movesOut.count;
      return;
    }
    control = forLetter(letter & $intern_25);
  }
  if (!$tryAct(this$static, control)) {
    this$static.dialogText = 'REPLAY INVALID';
    this$static.movesIn = null;
    return;
  }
  $getActiveViewportIndex(this$static);
  $followPlayer(this$static.viewports[this$static.activeViewportIndex], this$static.mazeState.players[this$static.activeViewportIndex]);
}

function MazeController(){
  $clinit_MazeController();
  MazeController_0.call(this, new Maze, new ControlState, null);
}

function MazeController_0(initialMaze, controlState, callback){
  $clinit_MazeController();
  var i;
  this.mazeState = new MazeState(initialMaze);
  this.controlState = controlState;
  this.mazeRenderer = new InGameMazeRenderer(this.mazeState);
  this.mapRenderer = new MapRenderer_0(this.mazeState);
  this.counterRenderer = new CounterRenderer(this.mazeState);
  this.viewports = initUnidimensionalArray(Lxor_core_Viewport_2_classLit, $intern_3, 98, ($clinit_Player() , NUM_PLAYER_TYPES), 0, 1);
  $add_0(this.mazeState.mazeStateListeners, ($clinit_Sounds() , SOUND_EFFECTS_PLAYER));
  for (i = 0; i < this.viewports.length; i++) {
    this.viewports[i] = new Viewport_0(initialMaze, VIEWPORT_SIZES_0[this.viewportSizeIndex], this.mazeState.players[i]);
  }
  $centerOnPlayers(this);
  this.activeViewportIndex = 0;
  this.movesOut = new ByteArrayOutputStream;
  this.callback = callback;
}

defineClass(67, 1, {}, MazeController, MazeController_0);
_.active = false;
_.activeViewportIndex = 0;
_.lastReplayLength = 0;
_.msInCurrentState = 0;
_.speedUp = 1;
_.superSpeedUp = 0;
_.viewportSizeIndex = 0;
_.warpTo = 0;
_.wasActive = false;
var VIEWPORT_SIZES_0;
var Lxor_core_MazeController_2_classLit = createForClass(67);
function $clinit_MazeState(){
  $clinit_MazeState = emptyMethod;
  BALLOON_CHEAT = checkNotNull(($clinit_Boolean() , FALSE));
  NUM_STATES = values_23().length;
  NUM_ADDITIONAL_EVENTS = ($clinit_MazeState$AdditionalEvent() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_MazeState$AdditionalEvent_2_classLit, 1), $intern_1, 61, 0, [NONE, BALLOON_COLLECTED, MAP_COLLECTED, OBJECT_STOPPED])).length;
  TELEPORT_DIRECTIONS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [($clinit_Direction() , RIGHT_2), UP_1, LEFT_2, DOWN_1]);
}

function $addAdditionalEvent(this$static, newAdditionalEvent){
  if (this$static.additionalEvent)
    throw toJs(new IllegalStateException_0('Cannot add more than one additional event'));
  this$static.additionalEvent = newAdditionalEvent;
}

function $advanceStateFromPendingActions(this$static){
  if (this$static.state)
    return;
  $startAnyPendingPlayerDeaths(this$static);
  if (this$static.state)
    return;
  $collectAnyPendingDecoys(this$static);
  if (this$static.state)
    return;
  $tryKeepActiveObjectMoving(this$static);
  if (this$static.state)
    return;
  $tryLetAnyUnsupportedObjectFall(this$static);
}

function $advanceToNextState(this$static){
  var player, player_0;
  if (this$static.state == ($clinit_MazeState$State() , WAITING_FOR_PLAYER) || this$static.state == LEVEL_FAILED || this$static.state == LEVEL_COMPLETED) {
    return;
  }
  $beginStateTransition(this$static);
  switch (this$static.previousState.ordinal) {
    case 5:
      $completeStateTransition(this$static, WAITING_FOR_PLAYER);
      break;
    case 1:
      $completePlayerMove(this$static);
      break;
    case 2:
      $completeObjectMove(this$static);
      $completePlayerMove(this$static);
      break;
    case 3:
      $completeObjectMove(this$static);
      $tryDestroyVictimOfFallingObject(this$static);
      break;
    case 4:
      $completeExplosion(this$static);
      break;
    case 9:
      player = $getActivePlayer(this$static);
      $startTeleportPlayerFrom(this$static, player, player.x_0, player.y_0);
      break;
    case 8:
      break;
    case 6:
      player_0 = $getActivePlayer(this$static);
      $updateCellType(this$static.maze, player_0.x_0, player_0.y_0, ($clinit_Cells$CellType() , EMPTY));
      $enqueueUnsupportedNeighbours(this$static, player_0.x_0, player_0.y_0, null, true);
      $completeDying(player_0);
      break;
    case 7:
      $resetPoses(this$static);
      break;
    default:throw toJs(new UnsupportedOperationException);
  }
  if (this$static.state)
    return;
  $advanceStateFromPendingActions(this$static);
  if (this$static.state)
    return;
  this$static.activePlayerIndex = $findNextPlayerWithState(this$static, this$static.activePlayerIndex, ($clinit_Player$PlayerState() , ALIVE));
  this$static.activePlayerIndex != this$static.activePlayerIndex && $resetPoses(this$static);
  $completeStateTransition(this$static, this$static.activePlayerIndex != -1?WAITING_FOR_PLAYER:LEVEL_FAILED);
}

function $beginPlayerInitiatedStateTransition(this$static){
  if (this$static.state != ($clinit_MazeState$State() , WAITING_FOR_PLAYER))
    throw toJs(new IllegalStateException_0('Player cannot start transition from current state'));
  $beginStateTransition(this$static);
}

function $beginStateTransition(this$static){
  if (!this$static.state)
    throw toJs(new IllegalStateException_0('Cannot begin state transition from null state'));
  this$static.previousState = this$static.state;
  this$static.state = null;
  this$static.additionalEvent = null;
}

function $cancelPlayerInitiatedStateTransition(this$static){
  if (this$static.state)
    throw toJs(new IllegalStateException_0('Cannot cancel state transition when state is already set'));
  this$static.state = ($clinit_MazeState$State() , WAITING_FOR_PLAYER);
}

function $collectAnyPendingDecoys(this$static){
  if (this$static.pendingDecoys > 0) {
    ++this$static.collectedDecoys;
    --this$static.pendingDecoys;
    $completeStateTransition(this$static, ($clinit_MazeState$State() , LIGHTS_TOGGLING));
  }
}

function $completeExplosion(this$static){
  var d, d$index, d$max, destX, destY, destroyedCellType, explosionDirections, player, player$array, player$index, player$max, x_0, y_0;
  x_0 = $indexToX(this$static.maze, this$static.activeObjectIndex);
  y_0 = $indexToY(this$static.maze, this$static.activeObjectIndex);
  explosionDirections = getExplosionDirections($getCellType(this$static.maze, x_0, y_0));
  $updateCellType(this$static.maze, x_0, y_0, ($clinit_Cells$CellType() , EMPTY));
  $enqueueUnsupportedNeighbours(this$static, x_0, y_0, null, false);
  for (d$index = 0 , d$max = explosionDirections.length; d$index < d$max; ++d$index) {
    d = explosionDirections[d$index];
    destX = x_0 + d.dx;
    destY = y_0 + d.dy;
    if (destX <= 0 || destY <= 0 || destX >= this$static.maze.width_0 - 1 || destY >= this$static.maze.height_0 - 1)
      continue;
    for (player$array = this$static.players , player$index = 0 , player$max = player$array.length; player$index < player$max; ++player$index) {
      player = player$array[player$index];
      player.state == ($clinit_Player$PlayerState() , EXPLODING) && $setState_2(player, DYING);
    }
    destroyedCellType = $updateCellType(this$static.maze, destX, destY, EMPTY);
    destroyedCellType == DECOY && ++this$static.pendingDecoys;
    $enqueueUnsupportedNeighbours(this$static, destX, destY, null, false);
  }
}

function $completeObjectMove(this$static){
  var activeObjectType, destX, destY, x_0, y_0;
  x_0 = $indexToX(this$static.maze, this$static.activeObjectIndex);
  y_0 = $indexToY(this$static.maze, this$static.activeObjectIndex);
  activeObjectType = $updateCellType(this$static.maze, x_0, y_0, ($clinit_Cells$CellType() , EMPTY));
  this$static.previousState != ($clinit_MazeState$State() , PLAYER_PUSHING_OBJECT) && $enqueueUnsupportedNeighbours(this$static, x_0, y_0, this$static.movement, false);
  destX = $dx(this$static.movement, x_0);
  destY = $dy(this$static.movement, y_0);
  $updateCellType(this$static.maze, destX, destY, activeObjectType);
  this$static.activeObjectIndex = $xyToIndex(this$static.maze, destX, destY);
}

function $completePlayerMove(this$static){
  var player;
  player = $getActivePlayer(this$static);
  $updateCellType(this$static.maze, player.x_0, player.y_0, ($clinit_Cells$CellType() , EMPTY));
  $enqueueUnsupportedNeighbours(this$static, player.x_0, player.y_0, player.movement, true);
  $completeMove(player);
  $updateCellType(this$static.maze, player.x_0, player.y_0, player.cellType);
}

function $completeStateTransition(this$static, newState){
  if (this$static.state)
    throw toJs(new IllegalStateException_0('Cannot finish state transition when state is already set'));
  !this$static.additionalEvent && (this$static.additionalEvent = ($clinit_MazeState$AdditionalEvent() , NONE));
  this$static.state = newState;
  $notifyStateListeners(this$static);
}

function $enqueueUnsupportedNeighbours(this$static, x_0, y_0, emptiedInDirection, isPlayer){
  var emptiedInHorizontal;
  emptiedInHorizontal = !!emptiedInDirection && (emptiedInDirection == ($clinit_Direction() , LEFT_2) || emptiedInDirection == RIGHT_2);
  if (emptiedInHorizontal) {
    $tryEnqueueUnsupportedNeighbour(this$static, x_0, y_0, ($clinit_Direction() , RIGHT_2), isPlayer);
    $tryEnqueueUnsupportedNeighbour(this$static, x_0, y_0, UP_1, isPlayer);
  }
   else {
    $tryEnqueueUnsupportedNeighbour(this$static, x_0, y_0, ($clinit_Direction() , UP_1), isPlayer);
    $tryEnqueueUnsupportedNeighbour(this$static, x_0, y_0, RIGHT_2, isPlayer);
  }
}

function $findNextPlayerWithState(this$static, startPlayer, playerState){
  var i, playerIndex;
  startPlayer < 0 && (startPlayer = 0);
  for (i = 0; i < this$static.players.length; i++) {
    playerIndex = (startPlayer + i) % this$static.players.length;
    if (this$static.players[playerIndex].state == playerState) {
      return playerIndex;
    }
  }
  return -1;
}

function $getActiveObjectType(this$static){
  if (this$static.activeObjectIndex == -1)
    return null;
  return cellType_0($get_7(this$static.maze, this$static.activeObjectIndex));
}

function $getActiveObjectX(this$static){
  return $indexToX(this$static.maze, this$static.activeObjectIndex);
}

function $getActiveObjectY(this$static){
  return $indexToY(this$static.maze, this$static.activeObjectIndex);
}

function $getActivePlayer(this$static){
  if (this$static.activePlayerIndex == -1)
    return null;
  return this$static.players[this$static.activePlayerIndex];
}

function $isBorder(this$static, x_0, y_0){
  return x_0 <= 0 || y_0 <= 0 || x_0 >= this$static.maze.width_0 - 1 || y_0 >= this$static.maze.height_0 - 1;
}

function $isPushable(this$static, x_0, y_0, cellType, push_0){
  var fallingDirection;
  if (x_0 <= 0 || y_0 <= 0 || x_0 >= this$static.maze.width_0 - 1 || y_0 >= this$static.maze.height_0 - 1)
    return false;
  if (cellType == ($clinit_Cells$CellType() , SPHERE)) {
    return true;
  }
  fallingDirection = getFallingDirection(cellType);
  if (!fallingDirection) {
    return false;
  }
  return (fallingDirection == ($clinit_Direction() , LEFT_2) || fallingDirection == RIGHT_2) ^ (push_0 == LEFT_2 || push_0 == RIGHT_2);
}

function $isSettled(this$static){
  return this$static.state == ($clinit_MazeState$State() , WAITING_FOR_PLAYER) || this$static.state == LEVEL_FAILED || this$static.state == LEVEL_COMPLETED;
}

function $isStateTransitionComplete(this$static, expectedState){
  if (!!this$static.state && this$static.state != expectedState) {
    throw toJs(new IllegalStateException_0('Arrived in unexpected state: ' + this$static.state));
  }
  return !!this$static.state;
}

function $isUnsupportedObject(this$static, x_0, y_0){
  var d, destCellType, destX, destY, objectType;
  objectType = $getCellType(this$static.maze, x_0, y_0);
  d = getFallingDirection(objectType);
  if (!d) {
    return false;
  }
  destX = x_0 + d.dx;
  destY = y_0 + d.dy;
  destCellType = cellType_0($safeGet(this$static.maze, destX, destY));
  if ($tryToEmpty(this$static, destX, destY, destCellType, d)) {
    $updateCellType(this$static.maze, destX, destY, ($clinit_Cells$CellType() , EMPTY));
    return true;
  }
  return false;
}

function $notifyStateListeners(this$static){
  var listener, listener$iterator;
  for (listener$iterator = new ArrayList$1(this$static.mazeStateListeners); listener$iterator.i < listener$iterator.this$01.array.length;) {
    listener = $next_3(listener$iterator);
    listener.onStateTransition(this$static.previousState, this$static.state, this$static.additionalEvent);
  }
}

function $reset_2(this$static){
  var player, player$array, player$index, player$max;
  this$static.maze = $clone(this$static.initialMaze);
  $clear(this$static.collectedMaps);
  this$static.requiredBalloons = $countCellType(this$static.maze, ($clinit_Cells$CellType() , BALLOON));
  this$static.collectedBalloons = 0;
  this$static.pendingDecoys = this$static.collectedDecoys = 0;
  $clear_1(this$static.currentStack);
  $clear_1(this$static.globalStack);
  this$static.activeObjectIndex = -1;
  for (player$array = this$static.players , player$index = 0 , player$max = player$array.length; player$index < player$max; ++player$index) {
    player = player$array[player$index];
    $reset_4(player, this$static.maze);
  }
  this$static.activePlayerIndex = $findNextPlayerWithState(this$static, 0, ($clinit_Player$PlayerState() , ALIVE));
  this$static.state = this$static.activePlayerIndex != -1?($clinit_MazeState$State() , WAITING_FOR_PLAYER):($clinit_MazeState$State() , LEVEL_FAILED);
  this$static.previousState = this$static.state;
  this$static.additionalEvent = ($clinit_MazeState$AdditionalEvent() , NONE);
}

function $resetPoses(this$static){
  var player, player$array, player$index, player$max;
  for (player$array = this$static.players , player$index = 0 , player$max = player$array.length; player$index < player$max; ++player$index) {
    player = player$array[player$index];
    player.pose = ($clinit_Player$Pose() , CENTER_0);
  }
}

function $startAnyPendingPlayerDeaths(this$static){
  var dyingPlayer;
  dyingPlayer = $findNextPlayerWithState(this$static, this$static.activePlayerIndex, ($clinit_Player$PlayerState() , DYING));
  if (dyingPlayer != -1) {
    this$static.activePlayerIndex = dyingPlayer;
    $completeStateTransition(this$static, ($clinit_MazeState$State() , PLAYER_DYING));
  }
}

function $startTeleportPlayerFrom(this$static, player, x_0, y_0){
  var d, d$array, d$index, d$max, destX, destY, inTeleportIndex, outTeleportIndex, tx, ty;
  inTeleportIndex = $xyToIndex(this$static.maze, x_0, y_0);
  outTeleportIndex = $findCellType_0(this$static.maze, ($clinit_Cells$CellType() , TELEPORT), inTeleportIndex + 1);
  tx = $indexToX(this$static.maze, outTeleportIndex);
  ty = $indexToY(this$static.maze, outTeleportIndex);
  for (d$array = TELEPORT_DIRECTIONS , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    destX = tx + d.dx;
    destY = ty + d.dy;
    if (!(destX <= 0 || destY <= 0 || destX >= this$static.maze.width_0 - 1 || destY >= this$static.maze.height_0 - 1) && cellType_0($safeGet(this$static.maze, destX, destY)) == EMPTY) {
      $teleportTo(player, destX, destY, false);
      $updateCellType(this$static.maze, destX, destY, player.cellType);
      $completeStateTransition(this$static, ($clinit_MazeState$State() , THROUGH_TELEPORT));
      return;
    }
  }
  $teleportTo(player, tx, ty, true);
  $completeStateTransition(this$static, ($clinit_MazeState$State() , STUCK_IN_TELEPORT));
}

function $tryDestroyVictimOfFallingObject(this$static){
  var d, destCellType, destX, destY, player, player$array, player$array0, player$index, player$index0, player$max, player$max0, x_0, y_0;
  if (this$static.previousState != ($clinit_MazeState$State() , OBJECT_MOVING))
    throw toJs(new IllegalStateException_0('Nothing falling!'));
  x_0 = $indexToX(this$static.maze, this$static.activeObjectIndex);
  y_0 = $indexToY(this$static.maze, this$static.activeObjectIndex);
  d = getFallingDirection($getCellType(this$static.maze, x_0, y_0));
  if (!d) {
    return;
  }
  destX = x_0 + d.dx;
  destY = y_0 + d.dy;
  if (destX <= 0 || destY <= 0 || destX >= this$static.maze.width_0 - 1 || destY >= this$static.maze.height_0 - 1)
    return;
  for (player$array0 = this$static.players , player$index0 = 0 , player$max0 = player$array0.length; player$index0 < player$max0; ++player$index0) {
    player = player$array0[player$index0];
    if (player.state == ($clinit_Player$PlayerState() , ALIVE) && player.x_0 == destX && player.y_0 == destY) {
      $setState_2(player, DYING);
      return;
    }
  }
  destCellType = cellType_0($safeGet(this$static.maze, destX, destY));
  if (getExplosionDirections(destCellType) == null) {
    return;
  }
  for (player$array = this$static.players , player$index = 0 , player$max = player$array.length; player$index < player$max; ++player$index) {
    player = player$array[player$index];
    if (player.state != ($clinit_Player$PlayerState() , ALIVE))
      continue;
    abs_0(destX - player.x_0) <= (destCellType == ($clinit_Cells$CellType() , DYNAMITE)?1:0) && abs_0(destY - player.y_0) <= (destCellType == TIN_BOMB?1:0) && $setState_2(player, EXPLODING);
  }
  $updateCellType(this$static.maze, x_0, y_0, ($clinit_Cells$CellType() , EMPTY));
  $enqueueUnsupportedNeighbours(this$static, x_0, y_0, d, false);
  this$static.activeObjectIndex = $xyToIndex(this$static.maze, destX, destY);
  $completeStateTransition(this$static, EXPLOSION);
}

function $tryEnqueueUnsupportedNeighbour(this$static, x_0, y_0, d, isPlayer){
  var neighbour;
  x_0 = x_0 + d.dx;
  y_0 = y_0 + d.dy;
  neighbour = cellType_0($safeGet(this$static.maze, x_0, y_0));
  getFallingDirection(neighbour) == d.opposite && (isPlayer?$addFirst(this$static.globalStack, valueOf($xyToIndex(this$static.maze, x_0, y_0))):$addFirst(this$static.currentStack, valueOf($xyToIndex(this$static.maze, x_0, y_0))));
}

function $tryKeepActiveObjectMoving(this$static){
  var activeObjectType, destX, destY, x_0, y_0;
  if (this$static.activeObjectIndex == -1)
    return;
  if (this$static.previousState != ($clinit_MazeState$State() , OBJECT_MOVING) && this$static.previousState != PLAYER_PUSHING_OBJECT && this$static.previousState != PLAYER_DYING) {
    return;
  }
  x_0 = $indexToX(this$static.maze, this$static.activeObjectIndex);
  y_0 = $indexToY(this$static.maze, this$static.activeObjectIndex);
  activeObjectType = $getCellType(this$static.maze, x_0, y_0);
  if (activeObjectType == ($clinit_Cells$CellType() , SPHERE)) {
    destX = $dx(this$static.movement, x_0);
    destY = $dy(this$static.movement, y_0);
    if (!(destX <= 0 || destY <= 0 || destX >= this$static.maze.width_0 - 1 || destY >= this$static.maze.height_0 - 1) && $getCellType(this$static.maze, destX, destY) == EMPTY) {
      $completeStateTransition(this$static, OBJECT_MOVING);
      return;
    }
     else {
      $addAdditionalEvent(this$static, ($clinit_MazeState$AdditionalEvent() , OBJECT_STOPPED));
      return;
    }
  }
   else if (getFallingDirection(activeObjectType)) {
    $tryLetObjectFall(this$static, x_0, y_0);
    if ($isStateTransitionComplete(this$static, OBJECT_MOVING)) {
      return;
    }
     else 
      this$static.previousState == OBJECT_MOVING && $addAdditionalEvent(this$static, ($clinit_MazeState$AdditionalEvent() , OBJECT_STOPPED));
  }
}

function $tryLetAnyUnsupportedObjectFall(this$static){
  var objectIndex;
  while (objectIndex = $pollFirst(this$static.currentStack)) {
    $addFirst(this$static.globalStack, objectIndex);
  }
  while (objectIndex = $pollFirst(this$static.globalStack)) {
    $tryLetObjectFall(this$static, $indexToX(this$static.maze, objectIndex.value_0), $indexToY(this$static.maze, objectIndex.value_0));
    if ($isStateTransitionComplete(this$static, ($clinit_MazeState$State() , OBJECT_MOVING))) {
      return;
    }
  }
}

function $tryLetObjectFall(this$static, x_0, y_0){
  if (!$isUnsupportedObject(this$static, x_0, y_0)) {
    return;
  }
  this$static.activeObjectIndex = $xyToIndex(this$static.maze, x_0, y_0);
  this$static.movement = getFallingDirection(cellType_0($get_8(this$static.maze, x_0, y_0)));
  $completeStateTransition(this$static, ($clinit_MazeState$State() , OBJECT_MOVING));
}

function $tryMove(this$static, d){
  var destCellType, destX, destY, player, pushToCellType, pushToX, pushToY;
  if (this$static.state != ($clinit_MazeState$State() , WAITING_FOR_PLAYER)) {
    return false;
  }
  $beginPlayerInitiatedStateTransition(this$static);
  player = $getActivePlayer(this$static);
  destX = $dx(d, player.x_0);
  destY = $dy(d, player.y_0);
  destCellType = cellType_0($safeGet(this$static.maze, destX, destY));
  if ($tryToEmpty(this$static, destX, destY, destCellType, d) || $tryToCollect(this$static, destX, destY, destCellType)) {
    $updateCellType(this$static.maze, destX, destY, ($clinit_Cells$CellType() , EMPTY));
    $startMove(player, d);
    $completeStateTransition(this$static, PLAYER_MOVING);
    this$static.movement = d;
    return true;
  }
  if ($isPushable(this$static, destX, destY, destCellType, d)) {
    pushToX = destX + d.dx;
    pushToY = destY + d.dy;
    pushToCellType = cellType_0($safeGet(this$static.maze, pushToX, pushToY));
    if ($tryToEmpty(this$static, pushToX, pushToY, pushToCellType, d)) {
      $updateCellType(this$static.maze, pushToX, pushToY, ($clinit_Cells$CellType() , EMPTY));
      $startMove(player, d);
      $completeStateTransition(this$static, PLAYER_PUSHING_OBJECT);
      this$static.activeObjectIndex = $xyToIndex(this$static.maze, destX, destY);
      this$static.movement = d;
      return true;
    }
  }
  if (destCellType == ($clinit_Cells$CellType() , TELEPORT)) {
    $updateCellType(this$static.maze, player.x_0, player.y_0, EMPTY);
    $enqueueUnsupportedNeighbours(this$static, player.x_0, player.y_0, d, true);
    $resetPoses(this$static);
    $startTeleportPlayerFrom(this$static, player, destX, destY);
    return true;
  }
  if (destCellType == EXIT_0 && (this$static.collectedBalloons == this$static.requiredBalloons || BALLOON_CHEAT)) {
    $updateCellType(this$static.maze, player.x_0, player.y_0, EMPTY);
    this$static.activePlayerIndex = -1;
    $completeStateTransition(this$static, LEVEL_COMPLETED);
    return true;
  }
  $cancelPlayerInitiatedStateTransition(this$static);
  return false;
}

function $trySwitchPlayer(this$static){
  var nextPlayerIndex;
  if (this$static.state != ($clinit_MazeState$State() , WAITING_FOR_PLAYER)) {
    return false;
  }
  $beginPlayerInitiatedStateTransition(this$static);
  nextPlayerIndex = $findNextPlayerWithState(this$static, this$static.activePlayerIndex + 1, ($clinit_Player$PlayerState() , ALIVE));
  if (nextPlayerIndex != -1 && nextPlayerIndex != this$static.activePlayerIndex) {
    this$static.activePlayerIndex = nextPlayerIndex;
    $resetPoses(this$static);
    $completeStateTransition(this$static, SWITCHING_PLAYER);
    return true;
  }
  if (nextPlayerIndex == -1) {
    $completeStateTransition(this$static, LEVEL_FAILED);
    return false;
  }
  $cancelPlayerInitiatedStateTransition(this$static);
  return false;
}

function $tryToCollect(this$static, x_0, y_0, cellType){
  if (x_0 <= 0 || y_0 <= 0 || x_0 >= this$static.maze.width_0 - 1 || y_0 >= this$static.maze.height_0 - 1)
    return false;
  switch (cellType.ordinal) {
    case 7:
      ++this$static.collectedBalloons;
      $addAdditionalEvent(this$static, ($clinit_MazeState$AdditionalEvent() , BALLOON_COLLECTED));
      return true;
    case 8:
      ++this$static.pendingDecoys;
      return true;
    case 9:
    case 10:
    case 11:
    case 12:
      $add_4(this$static.collectedMaps, cellType);
      $addAdditionalEvent(this$static, ($clinit_MazeState$AdditionalEvent() , MAP_COLLECTED));
      return true;
    default:return false;
  }
}

function $tryToEmpty(this$static, x_0, y_0, cellType, d){
  if (x_0 <= 0 || y_0 <= 0 || x_0 >= this$static.maze.width_0 - 1 || y_0 >= this$static.maze.height_0 - 1)
    return false;
  switch (cellType.ordinal) {
    case 1:
      return true;
    case 14:
      return d == ($clinit_Direction() , UP_1) || d == DOWN_1;
    case 15:
      return d == ($clinit_Direction() , LEFT_2) || d == RIGHT_2;
    default:return false;
  }
}

function MazeState(initialMaze){
  $clinit_MazeState();
  var all, i, playerType, playerType$array, playerType$index, playerType$max;
  this.players = initUnidimensionalArray(Lxor_core_Player_2_classLit, $intern_3, 125, ($clinit_Player() , NUM_PLAYER_TYPES), 0, 1);
  i = 0;
  for (playerType$array = ($clinit_Player$PlayerType() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$PlayerType_2_classLit, 1), $intern_1, 80, 0, [HERB_0, PIP_0])) , playerType$index = 0 , playerType$max = playerType$array.length; playerType$index < playerType$max; ++playerType$index) {
    playerType = playerType$array[playerType$index];
    this.players[i++] = new Player(playerType);
  }
  this.collectedMaps = (all = $getEnumConstants(Lxor_core_Cells$CellType_2_classLit) , new EnumSet$EnumSetImpl(all, createFrom(all, all.length)));
  this.currentStack = new ArrayDeque;
  this.globalStack = new ArrayDeque;
  this.mazeStateListeners = new ArrayList;
  this.initialMaze = initialMaze;
  $updateAllWalls(this.initialMaze);
  $reset_2(this);
}

function getExplosionDirections(cellType){
  $clinit_MazeState();
  switch (cellType.ordinal) {
    case 17:
      return $clinit_Direction() , HORIZONTAL_DIRECTIONS;
    case 16:
      return $clinit_Direction() , VERTICAL_DIRECTIONS;
    default:return null;
  }
}

function getFallingDirection(cellType){
  switch (cellType.ordinal) {
    case 4:
    case 17:
      return $clinit_Direction() , DOWN_1;
    case 5:
    case 16:
      return $clinit_Direction() , LEFT_2;
    default:return null;
  }
}

defineClass(256, 1, {}, MazeState);
_.activeObjectIndex = 0;
_.activePlayerIndex = 0;
_.collectedBalloons = 0;
_.collectedDecoys = 0;
_.pendingDecoys = 0;
_.requiredBalloons = 0;
var BALLOON_CHEAT = false, NUM_ADDITIONAL_EVENTS = 0, NUM_STATES = 0, TELEPORT_DIRECTIONS;
var Lxor_core_MazeState_2_classLit = createForClass(256);
function $clinit_MazeState$AdditionalEvent(){
  $clinit_MazeState$AdditionalEvent = emptyMethod;
  NONE = new MazeState$AdditionalEvent('NONE', 0);
  BALLOON_COLLECTED = new MazeState$AdditionalEvent('BALLOON_COLLECTED', 1);
  MAP_COLLECTED = new MazeState$AdditionalEvent('MAP_COLLECTED', 2);
  OBJECT_STOPPED = new MazeState$AdditionalEvent('OBJECT_STOPPED', 3);
}

function MazeState$AdditionalEvent(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.code_0 = this.ordinal;
}

function values_22(){
  $clinit_MazeState$AdditionalEvent();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_MazeState$AdditionalEvent_2_classLit, 1), $intern_1, 61, 0, [NONE, BALLOON_COLLECTED, MAP_COLLECTED, OBJECT_STOPPED]);
}

defineClass(61, 6, {3:1, 8:1, 6:1, 61:1}, MazeState$AdditionalEvent);
_.code_0 = 0;
var BALLOON_COLLECTED, MAP_COLLECTED, NONE, OBJECT_STOPPED;
var Lxor_core_MazeState$AdditionalEvent_2_classLit = createForEnum(61, values_22);
function $clinit_MazeState$State(){
  $clinit_MazeState$State = emptyMethod;
  WAITING_FOR_PLAYER = new MazeState$State;
  PLAYER_MOVING = new MazeState$State_0('PLAYER_MOVING', 1, 250);
  PLAYER_PUSHING_OBJECT = new MazeState$State_0('PLAYER_PUSHING_OBJECT', 2, 250);
  OBJECT_MOVING = new MazeState$State_0('OBJECT_MOVING', 3, 100);
  EXPLOSION = new MazeState$State_0('EXPLOSION', 4, 500);
  SWITCHING_PLAYER = new MazeState$State_0('SWITCHING_PLAYER', 5, 500);
  PLAYER_DYING = new MazeState$State_0('PLAYER_DYING', 6, 1500);
  LIGHTS_TOGGLING = new MazeState$State_0('LIGHTS_TOGGLING', 7, 150);
  THROUGH_TELEPORT = new MazeState$State_0('THROUGH_TELEPORT', 8, 300);
  STUCK_IN_TELEPORT = new MazeState$State_0('STUCK_IN_TELEPORT', 9, 1000);
  LEVEL_FAILED = new MazeState$State_0('LEVEL_FAILED', 10, 250);
  LEVEL_COMPLETED = new MazeState$State_0('LEVEL_COMPLETED', 11, 250);
}

function $$init_2(this$static){
  this$static.code_0 = this$static.ordinal;
}

function MazeState$State(){
  Enum.call(this, 'WAITING_FOR_PLAYER', 0);
  $$init_2(this);
  this.ms = 0;
}

function MazeState$State_0(enum$name, enum$ordinal, ms){
  Enum.call(this, enum$name, enum$ordinal);
  $$init_2(this);
  this.ms = ms;
}

function values_23(){
  $clinit_MazeState$State();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_MazeState$State_2_classLit, 1), $intern_1, 29, 0, [WAITING_FOR_PLAYER, PLAYER_MOVING, PLAYER_PUSHING_OBJECT, OBJECT_MOVING, EXPLOSION, SWITCHING_PLAYER, PLAYER_DYING, LIGHTS_TOGGLING, THROUGH_TELEPORT, STUCK_IN_TELEPORT, LEVEL_FAILED, LEVEL_COMPLETED]);
}

defineClass(29, 6, {3:1, 8:1, 6:1, 29:1}, MazeState$State, MazeState$State_0);
_.code_0 = 0;
_.ms = 0;
var EXPLOSION, LEVEL_COMPLETED, LEVEL_FAILED, LIGHTS_TOGGLING, OBJECT_MOVING, PLAYER_DYING, PLAYER_MOVING, PLAYER_PUSHING_OBJECT, STUCK_IN_TELEPORT, SWITCHING_PLAYER, THROUGH_TELEPORT, WAITING_FOR_PLAYER;
var Lxor_core_MazeState$State_2_classLit = createForEnum(29, values_23);
var PROCYON_MAZES, PROCYON_MAZES_FUTURE, XOR_MAZES, XOR_MAZES_FUTURE;
function $clinit_Menu(){
  $clinit_Menu = emptyMethod;
  TIP_SPRITES = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Cells$CellType_2_classLit, 1), $intern_1, 16, 0, [($clinit_Cells$CellType() , HERB), PIP, BALLOON, EXIT_0, FIELD_H, FIELD_V, MAP_NW, ROCK, ZEPPELIN, DYNAMITE, TIN_BOMB, SPHERE, DECOY, TELEPORT]);
  TIP_TEXT = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['Guide HERB using\nthe arrow keys', 'Switch to PIP by\npressing Enter', 'Find all BALLOONS\nbefore escaping', 'Get to the EXIT\nto finish the maze', 'HORIZONTAL FIELD\nGo along the field', 'VERTICAL FIELD\nUp or down only', 'Get a MAP to\nfind your way', 'ROCKS fall down\nand can be pushed', "ZEPPELINS fly left\nDon't get hit!", 'DYNAMITE falls and\nexplodes when hit', 'TIN BOMB explodes\ntoo but flies left', 'Push the SPHERE\nin any direction', 'DECOY has a nasty\nsurprise. Avoid!', 'This is a TELEPORT\nBeam me up Scottie!']);
  CREDITS_TEXT = stampJavaTypeInfo(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_3, 2, 6, ['\nGame concept:\n  Astral Software', '\nGraphics:\n  Andreas Voigt', '\nAudio:\n  Nirto K Fischer', '\nAdvisory:\n  Thorsten Meyer', 'Amiga programmers:\n  Erik von Hesse\n  Olaf Siemens', '\nHTML5 programmer:\n  A Olsen using Playn', '     (C) 1989 by\n   Hidden Treasures  \n    and Logotron']);
}

function $activeList(this$static){
  if (this$static.selectedList == ($clinit_Direction() , LEFT_2))
    return this$static.leftList;
  else if (this$static.selectedList == RIGHT_2)
    return this$static.rightList;
  return null;
}

function $handleGlobalControls(this$static){
  if (this$static.levelEditor.active && !this$static.mazeController.active) {
    return;
  }
  if ($isFreshClickInside(this$static.controlState, 220, 184, 20, 24)) {
    $clinit_Sounds();
    music = !music;
    music?$play_0(PARTITURE.raw):$stop_0(PARTITURE.raw);
  }
   else if ($isFreshClickInside(this$static.controlState, 240, 184, 14, 24)) {
    $clinit_Sounds();
    sounds = !sounds;
    sounds && $play_0(THUMP.raw);
  }
   else if ($isFreshClickInside(this$static.controlState, 262, 184, 24, 24)) {
    !!this$static.mazeController.callback && $selectMaze(this$static.mazeController.callback);
    $startReplay(this$static.mazeController);
  }
   else 
    $isFreshClickInside(this$static.controlState, 293, 184, 24, 24) && (this$static.loadSave?(this$static.loadSave = false):this$static.mazeController.movesIn?$abortReplay(this$static.mazeController):this$static.mazeController.active?(this$static.mazeController.active = false):this$static.levelEditor.active?$setActive(this$static.levelEditor, false):this$static.selectedList?(this$static.selectedList = null):($clinit_System() , out_0));
}

function $handleMenuControls(this$static){
  var c;
  if (this$static.intro && (!!$freshControl(this$static.controlState) || $isAnyFreshExtraControl(this$static.controlState) || $isFreshMouseClick(this$static.controlState) || this$static.menuMs > 10000)) {
    this$static.intro = false;
    this$static.menuMs = 0;
    return;
  }
  c = $freshControl(this$static.controlState);
  if (!!c && !!$activeList(this$static)) {
    if (c == ($clinit_Control() , OK)) {
      this$static.mazeController = new MazeController_0($selected($activeList(this$static)), this$static.controlState, new Menu$HighscoreCallback(this$static, this$static.selectedList, $activeList(this$static).selectedIndex));
      $reset_1(this$static.mazeController);
    }
     else 
      $isVertical(c.direction_0) && $upOrDown($activeList(this$static), c.direction_0);
  }
  if (!!c && !!c.direction_0 && $isHorizontal(c.direction_0)) {
    !this$static.selectedList?(this$static.selectedList = c.direction_0):this$static.selectedList == c.direction_0.opposite && (this$static.selectedList = null);
    this$static.menuMs = 0;
  }
  if ($isFresh_0(this$static.controlState, ($clinit_ExtraControl() , BACK_0)) && !!this$static.selectedList) {
    this$static.selectedList = null;
    this$static.menuMs = 0;
  }
  if (!this$static.selectedList) {
    if ($isFreshClickInsideViewport(this$static.controlState, 0, 40, 96, 40)) {
      this$static.selectedList = ($clinit_Direction() , LEFT_2);
    }
     else if ($isFreshClickInsideViewport(this$static.controlState, 96, 40, 96, 40)) {
      this$static.selectedList = ($clinit_Direction() , RIGHT_2);
    }
     else if ($isFreshClickInsideViewport(this$static.controlState, 8, 134, 84, 20)) {
      $setState_1(this$static.loadSaveMenu, this$static.mazeController, $customMazeOrNull(this$static.levelEditor));
      this$static.loadSave = true;
    }
     else 
      $isFreshClickInsideViewport(this$static.controlState, 99, 134, 84, 20) && $setActive(this$static.levelEditor, true);
  }
   else if ($isMazeClicked($activeList(this$static), this$static.controlState)) {
    this$static.mazeController = new MazeController_0($selected($activeList(this$static)), this$static.controlState, new Menu$HighscoreCallback(this$static, this$static.selectedList, $activeList(this$static).selectedIndex));
    $reset_1(this$static.mazeController);
  }
   else 
    $isBackClicked($activeList(this$static), this$static.controlState) && (this$static.selectedList = null);
}

function $load(this$static, loaded){
  this$static.loadSave = false;
  if (!loaded) {
    return;
  }
  if (loaded.customLevel) {
    this$static.levelEditor = new LevelEditor(loaded.customLevel, this$static.controlState);
    $setActive(this$static.levelEditor, true);
    if ($equals(loaded.customLevel.title_0, loaded.replayTitle)) {
      this$static.mazeController = new MazeController_0(loaded.customLevel, this$static.controlState, null);
      this$static.mazeController.movesOut = loaded.replayMoves;
      $startReplay(this$static.mazeController);
      return;
    }
  }
  if (loaded.replayTitle != null && $selectMazeByTitle_0(this$static, loaded.replayTitle)) {
    this$static.mazeController = new MazeController_0($selected($activeList(this$static)), this$static.controlState, new Menu$HighscoreCallback(this$static, this$static.selectedList, $activeList(this$static).selectedIndex));
    this$static.mazeController.movesOut = loaded.replayMoves;
    this$static.levelEditor.active || $startReplay(this$static.mazeController);
  }
}

function $renderAll_0(this$static, surface, deltaMs){
  var isEditorMode, stateIcon, stateIconOffset;
  isEditorMode = this$static.levelEditor.active && !this$static.mazeController.active;
  stateIcon = isEditorMode?$stateIcon(this$static.levelEditor):this$static.mazeController.counterRenderer.stateIcon;
  stateIconOffset = isEditorMode?this$static.levelEditor.stateIconOffset:this$static.mazeController.counterRenderer.stateIconOffset;
  $draw_7(surface, stateIcon, 226, 145 + stateIconOffset);
  $draw_7(surface, TITLE, 0, 0);
  isEditorMode && $draw_7(surface, EDITOR_BUTTONS, 213, 149);
  $renderViewport(this$static, surface, deltaMs);
  this$static.mazeController.active?$draw_7(surface, $renderMap(this$static.mazeController), 240, 12):this$static.levelEditor.active && $draw_7(surface, this$static.levelEditor.mapRenderer.map_0, 240, 12);
  if (this$static.mazeController.active || this$static.mazeController.wasActive && !this$static.levelEditor.active) {
    $renderMovesCounter(this$static.mazeController, surface, deltaMs);
    $renderBalloonsCounter(this$static.mazeController, surface, deltaMs);
  }
}

function $renderViewport(this$static, surface, deltaMs){
  var tip, credit;
  if (this$static.intro)
    return;
  $startClipped(surface.raw, round_int(16 * surface.clipFactor), round_int(16 * surface.clipFactor), round_int(192 * surface.clipFactor), round_int(192 * surface.clipFactor));
  try {
    $translate(surface.raw, 16, 16);
    $setFillColor(surface.raw, $intern_45);
    $fillRect_0(surface.raw, 0, 0, 192, 192);
    this$static.mazeController.active?$render_5(this$static.mazeController, surface, deltaMs):this$static.levelEditor.active?$render_1(this$static.levelEditor, surface, deltaMs):this$static.loadSave?$render_3(this$static.loadSaveMenu, surface):$activeList(this$static)?$render_2($activeList(this$static), surface):($centeredSingleLine(BROWN, surface, 'Guide the Prospectors', 96, 12) , $centeredSingleLine(BROWN, surface, 'through the', 96, 24) , $drawTextBox(BROWN, surface, 'Mazes\nof Xor', 8, 40, 84, 40, $intern_46) , $drawTextBox(BROWN, surface, 'Mazes of\nProcyon', 99, 40, 84, 40, $intern_46) , $drawTextBox(WHITE, surface, '<', 2, 52, 15, 15, $intern_46) , $drawTextBox(WHITE, surface, '>', 174, 52, 15, 15, $intern_46) , tip = modulo(this$static.menuMs / 5000 | 0, TIP_SPRITES.length) , $draw_7(surface, ($clinit_Sprites() , CELLS)[TIP_SPRITES[tip].code_0], 8, 96) , $drawTextBox(BROWN, surface, TIP_TEXT[tip], 34, 98, 152, 20, 0) , $drawTextBox(BROWN, surface, 'Load/Save', 8, 134, 84, 20, $intern_46) , $drawTextBox(BROWN, surface, 'Level\nEditor', 99, 134, 84, 20, $intern_46) , credit = modulo((this$static.menuMs - 2500) / 5000 | 0, CREDITS_TEXT.length) , $leftAligned(BROWN, surface, CREDITS_TEXT[credit], 8, 164) , undefined);
    $translate(surface.raw, -16, -16);
  }
   finally {
    $endClipped(surface.raw);
  }
}

function $selectMazeByTitle_0(this$static, title_0){
  if ($selectMazeByTitle(this$static.leftList, title_0)) {
    this$static.selectedList = ($clinit_Direction() , LEFT_2);
    return true;
  }
   else if ($selectMazeByTitle(this$static.rightList, title_0)) {
    this$static.selectedList = ($clinit_Direction() , RIGHT_2);
    return true;
  }
  return false;
}

function $tick_3(this$static){
  if (this$static.mazeController.active) {
    $tick_2(this$static.mazeController);
  }
   else if (this$static.levelEditor.active) {
    $tick_0(this$static.levelEditor);
    if ($isFresh_0(this$static.controlState, ($clinit_ExtraControl() , PLAY)) || $isFreshClickInside(this$static.controlState, 262, 184, 24, 24)) {
      this$static.mazeController = new MazeController_0(this$static.levelEditor.maze, this$static.controlState, null);
      $reset_1(this$static.mazeController);
      this$static.mazeController.dialogText = 'Playing level';
      $resetViewportSize(this$static.levelEditor);
    }
  }
   else if (this$static.loadSave) {
    $tick_1(this$static.loadSaveMenu);
  }
   else {
    this$static.menuMs += 33;
    $handleMenuControls(this$static);
  }
  $handleGlobalControls(this$static);
  $clearFresh(this$static.controlState);
}

function Menu(controlState, xorMaxes, procyonMazes){
  var maze;
  $clinit_Menu();
  this.mazeController = new MazeController;
  this.controlState = controlState;
  this.leftList = new ListMenu('Mazes of Xor', xorMaxes, ($clinit_Direction() , RIGHT_2));
  this.rightList = new ListMenu('Mazes of Procyon', procyonMazes, LEFT_2);
  this.levelEditor = new LevelEditor(($clinit_LevelEditor() , maze = $clone(DEFAULT_EDITOR_MAZE) , maze.floorTheme = maze.wallTheme = round_int(15 * $wnd.Math.random()) , maze), controlState);
  this.highscoresEncoder = new HighscoresEncoder(this.leftList, this.rightList);
  this.loadSaveMenu = new LoadSaveMenu(this, this.highscoresEncoder, controlState);
}

defineClass(365, 1, {}, Menu);
_.intro = true;
_.loadSave = false;
_.menuMs = 0;
var CREDITS_TEXT, TIP_SPRITES, TIP_TEXT;
var Lxor_core_Menu_2_classLit = createForClass(365);
function $onGameOver(this$static, highscore){
  this$static.this$01.selectedList = this$static.selectList;
  $setSelectedIndex($activeList(this$static.this$01), this$static.mazeIndex);
  $updateHighscore($activeList(this$static.this$01), highscore);
}

function $selectMaze(this$static){
  this$static.this$01.selectedList = this$static.selectList;
  $setSelectedIndex($activeList(this$static.this$01), this$static.mazeIndex);
}

function Menu$HighscoreCallback(this$0, selectList, mazeIndex){
  this.this$01 = this$0;
  this.selectList = selectList;
  this.mazeIndex = mazeIndex;
}

defineClass(135, 1, {}, Menu$HighscoreCallback);
_.mazeIndex = 0;
var Lxor_core_Menu$HighscoreCallback_2_classLit = createForClass(135);
var DIGITS, DIGITS_RAW, EDITOR_BUTTONS, GEARS, TITLE;
function $pixelate(this$static){
  var gl20;
  gl20 = this$static.raw.graphics.gl;
  gl20.gl.texParameteri(3553, 10241, 9728);
  gl20.gl.texParameteri(3553, 10240, 9728);
}

defineClass(199, 1, {});
_.createRawCanvas = function createRawCanvas(pixelWidth, pixelHeight){
  return $createCanvas(this.raw.graphics, pixelWidth, pixelHeight);
}
;
_.setSize = function setSize(width_0, height){
  $clinit_System();
}
;
_.zoom = 0;
var INSTANCE_2;
var Lxor_core_Platform_2_classLit = createForClass(199);
function $clinit_Player(){
  $clinit_Player = emptyMethod;
  ALL_PLAYER_TYPES = ($clinit_Player$PlayerType() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$PlayerType_2_classLit, 1), $intern_1, 80, 0, [HERB_0, PIP_0]));
  NUM_PLAYER_TYPES = ALL_PLAYER_TYPES.length;
  ALL_POSES = ($clinit_Player$Pose() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [CENTER_0, UP_2, DOWN_2, LEFT_3, RIGHT_3, HALF_LEFT, HALF_RIGHT]));
  NUM_POSES = ALL_POSES.length;
}

function $completeDying(this$static){
  if (this$static.state != ($clinit_Player$PlayerState() , DYING))
    throw toJs(new IllegalStateException);
  this$static.state = DEAD;
}

function $completeMove(this$static){
  if (!this$static.movement)
    throw toJs(new IllegalStateException);
  this$static.x_0 = $dx(this$static.movement, this$static.x_0);
  this$static.y_0 = $dy(this$static.movement, this$static.y_0);
  this$static.pose = $getNextPose(this$static.pose, this$static.movement, 3);
  this$static.movement = null;
}

function $pose(this$static, percent){
  var doubleFrame, frame_0;
  if (!this$static.movement) {
    return this$static.pose;
  }
  doubleFrame = percent * 6 / 100 | 0;
  frame_0 = (doubleFrame + 1) / 2 | 0;
  return $getNextPose(this$static.pose, this$static.movement, frame_0);
}

function $reset_3(this$static, x_0, y_0, state){
  this$static.state = state;
  this$static.pose = ($clinit_Player$Pose() , CENTER_0);
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.movement = null;
}

function $reset_4(this$static, maze){
  var index_0, isFoundInMaze;
  index_0 = $findCellType(maze, this$static.playerType.cellType);
  isFoundInMaze = index_0 >= 0;
  isFoundInMaze?$reset_3(this$static, (checkBounds('index', index_0, maze.width_0 * maze.height_0) , index_0 % maze.width_0), (checkBounds('index', index_0, maze.width_0 * maze.height_0) , index_0 / maze.width_0 | 0), ($clinit_Player$PlayerState() , ALIVE)):$reset_3(this$static, 0, 0, ($clinit_Player$PlayerState() , DEAD));
}

function $setState_2(this$static, state){
  this$static.state = state;
}

function $startMove(this$static, movement){
  if (this$static.movement)
    throw toJs(new IllegalStateException);
  this$static.movement = movement;
}

function $teleportTo(this$static, x_0, y_0, stuck){
  this$static.x_0 = x_0;
  this$static.y_0 = y_0;
  this$static.state = stuck?($clinit_Player$PlayerState() , TELEPORTING):($clinit_Player$PlayerState() , ALIVE);
}

function Player(playerType){
  $clinit_Player();
  this.playerType = playerType;
  this.code_0 = playerType.code_0;
  this.cellType = playerType.cellType;
}

defineClass(125, 1, {125:1}, Player);
_.code_0 = 0;
_.x_0 = 0;
_.y_0 = 0;
var ALL_PLAYER_TYPES, ALL_POSES, NUM_PLAYER_TYPES = 0, NUM_POSES = 0;
var Lxor_core_Player_2_classLit = createForClass(125);
function $clinit_Player$PlayerState(){
  $clinit_Player$PlayerState = emptyMethod;
  ALIVE = new Player$PlayerState('ALIVE', 0);
  EXPLODING = new Player$PlayerState('EXPLODING', 1);
  DYING = new Player$PlayerState('DYING', 2);
  DEAD = new Player$PlayerState('DEAD', 3);
  TELEPORTING = new Player$PlayerState('TELEPORTING', 4);
}

function Player$PlayerState(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_24(){
  $clinit_Player$PlayerState();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$PlayerState_2_classLit, 1), $intern_1, 63, 0, [ALIVE, EXPLODING, DYING, DEAD, TELEPORTING]);
}

defineClass(63, 6, {3:1, 8:1, 6:1, 63:1}, Player$PlayerState);
var ALIVE, DEAD, DYING, EXPLODING, TELEPORTING;
var Lxor_core_Player$PlayerState_2_classLit = createForEnum(63, values_24);
function $clinit_Player$PlayerType(){
  $clinit_Player$PlayerType = emptyMethod;
  HERB_0 = new Player$PlayerType('HERB', 0, ($clinit_Cells$CellType() , HERB));
  PIP_0 = new Player$PlayerType('PIP', 1, PIP);
}

function Player$PlayerType(enum$name, enum$ordinal, cellType){
  Enum.call(this, enum$name, enum$ordinal);
  this.code_0 = this.ordinal;
  this.cellType = cellType;
}

function values_25(){
  $clinit_Player$PlayerType();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$PlayerType_2_classLit, 1), $intern_1, 80, 0, [HERB_0, PIP_0]);
}

defineClass(80, 6, {3:1, 8:1, 6:1, 80:1}, Player$PlayerType);
_.code_0 = 0;
var HERB_0, PIP_0;
var Lxor_core_Player$PlayerType_2_classLit = createForEnum(80, values_25);
function $clinit_Player$Pose(){
  $clinit_Player$Pose = emptyMethod;
  CENTER_0 = new Player$Pose('CENTER', 0);
  UP_2 = new Player$Pose('UP', 1);
  DOWN_2 = new Player$Pose('DOWN', 2);
  LEFT_3 = new Player$Pose('LEFT', 3);
  RIGHT_3 = new Player$Pose('RIGHT', 4);
  HALF_LEFT = new Player$Pose('HALF_LEFT', 5);
  HALF_RIGHT = new Player$Pose('HALF_RIGHT', 6);
  addTransitionChain(($clinit_Direction() , DOWN_1), stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [UP_2, CENTER_0, DOWN_2]));
  addTransitionChain(RIGHT_2, stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [LEFT_3, HALF_LEFT, CENTER_0, HALF_RIGHT, RIGHT_3]));
  addOneWayTransitionChain(UP_1, stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [LEFT_3, HALF_LEFT, UP_2]));
  addOneWayTransitionChain(DOWN_1, stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [LEFT_3, HALF_LEFT, DOWN_2]));
  addOneWayTransitionChain(UP_1, stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [RIGHT_3, HALF_RIGHT, UP_2]));
  addOneWayTransitionChain(DOWN_1, stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [RIGHT_3, HALF_RIGHT, DOWN_2]));
  $addTransition(UP_2, LEFT_2, HALF_LEFT);
  $addTransition(UP_2, RIGHT_2, HALF_RIGHT);
  $addTransition(DOWN_2, LEFT_2, HALF_LEFT);
  $addTransition(DOWN_2, RIGHT_2, HALF_RIGHT);
  $addTransition(UP_2, UP_1, UP_2);
  $addTransition(DOWN_2, DOWN_1, DOWN_2);
  $addTransition(LEFT_3, LEFT_2, LEFT_3);
  $addTransition(RIGHT_3, RIGHT_2, RIGHT_3);
  checkAllTransitions();
}

function $addTransition(this$static, d, nextPose){
  if (this$static.transitions[d.ordinal])
    throw toJs(new IllegalStateException);
  this$static.transitions[d.ordinal] = nextPose;
}

function $getNextPose(this$static, d, steps){
  if (steps == 0 || this$static.transitions[d.ordinal] == this$static) {
    return this$static;
  }
  return $getNextPose(this$static.transitions[d.ordinal], d, steps - 1);
}

function Player$Pose(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.code_0 = this.ordinal;
  this.transitions = initUnidimensionalArray(Lxor_core_Player$Pose_2_classLit, $intern_1, 21, ($clinit_Direction() , NUM_DIRECTIONS), 0, 1);
}

function addOneWayTransitionChain(d, poses){
  var i;
  for (i = 0; i < poses.length - 1; i++) {
    $addTransition(poses[i], d, poses[i + 1]);
  }
}

function addTransitionChain(d, poses){
  var i;
  for (i = 0; i < poses.length - 1; i++) {
    $addTransition(poses[i], d, poses[i + 1]);
    $addTransition(poses[i + 1], d.opposite, poses[i]);
  }
}

function checkAllTransitions(){
  var d, d$array, d$index, d$max, p, p$array, p$index, p$max;
  for (p$array = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [CENTER_0, UP_2, DOWN_2, LEFT_3, RIGHT_3, HALF_LEFT, HALF_RIGHT]) , p$index = 0 , p$max = p$array.length; p$index < p$max; ++p$index) {
    p = p$array[p$index];
    for (d$array = ($clinit_Direction() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [UP_1, DOWN_1, LEFT_2, RIGHT_2])) , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
      d = d$array[d$index];
      if (!p.transitions[d.ordinal])
        throw toJs(new NullPointerException_0('pose=' + p + ' direction=' + d));
    }
  }
}

function values_26(){
  $clinit_Player$Pose();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Player$Pose_2_classLit, 1), $intern_1, 21, 0, [CENTER_0, UP_2, DOWN_2, LEFT_3, RIGHT_3, HALF_LEFT, HALF_RIGHT]);
}

defineClass(21, 6, {3:1, 8:1, 6:1, 21:1}, Player$Pose);
_.code_0 = 0;
var CENTER_0, DOWN_2, HALF_LEFT, HALF_RIGHT, LEFT_3, RIGHT_3, UP_2;
var Lxor_core_Player$Pose_2_classLit = createForEnum(21, values_26);
function $paintScene(this$static){
  var deltaMs;
  deltaMs = $tick(INSTANCE_2.raw) - this$static.updatedAtMs;
  $saveTx(this$static.surface.raw);
  $begin_0(this$static.surface.raw);
  $clear_2(this$static.surface.raw, 0, 0, 0, 1);
  $scale_3(this$static.surface, INSTANCE_2.zoom, INSTANCE_2.zoom);
  try {
    if (this$static.loadingFinished) {
      $renderAll_0(this$static.menu, this$static.surface, deltaMs);
    }
     else if (this$static.fontLoaded) {
      $fillRect_3(this$static.surface, $intern_45);
      if (this$static.titleLoaded) {
        $draw_7(this$static.surface, TITLE, 0, 0);
        $fillRect_3(this$static.surface, -2013265920);
      }
      $renderLoadingProgress(this$static.surface);
    }
     else {
      $clear_2(this$static.viewSurf, 1, 1, 1, 1);
    }
  }
   finally {
    $end_0(this$static.surface.raw);
    $restoreTx(this$static.surface.raw);
  }
}

function $renderLoadingProgress(surface){
  $singleLine(YELLOW_0, surface, 'Images: ' + $text(($clinit_Image() , LOAD_TRACKER)), 24, 24);
  $singleLine(YELLOW_0, surface, 'Sounds: ' + $text(($clinit_Sound() , LOAD_TRACKER_0)), 24, 40);
  $singleLine(YELLOW_0, surface, 'Music: ' + $text(MUSIC_LOAD_TRACKER), 24, 56);
  $singleLine(YELLOW_0, surface, ($clinit_Sounds() , music)?'[Esc] to cancel music':'Music cancelled', 24, 72);
}

function $update_0(this$static){
  this$static.updatedAtMs = $tick(INSTANCE_2.raw);
  if (this$static.loadingFinished) {
    $tick_3(this$static.menu);
    tick();
  }
   else if (!this$static.fontLoaded && !!RAW.raw.state.result()) {
    WHITE = new Font($tile(RAW, 8));
    YELLOW_0 = new Font($tile($recolor(RAW, -1127322), 8));
    BROWN = new Font($tile($recolor(RAW, $intern_46), 8));
    BLACK = new Font($tile($recolor(RAW, $intern_45), 8));
    this$static.fontLoaded = true;
  }
   else if (!this$static.titleLoaded && !!TITLE.raw.state.result()) {
    DIGITS = $tile_0($recolor(DIGITS_RAW, 2004296192), 9, 15);
    GEARS = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Image_2_classLit, 1), $intern_43, 15, 0, [$subImage(TITLE, 245, 88, 4, 38), $subImage(TITLE, 286, 139, 4, 38)]);
    this$static.titleLoaded = true;
  }
   else if ($isLoaded(($clinit_Image() , LOAD_TRACKER)) && $isLoaded(($clinit_Sound() , LOAD_TRACKER_0)) && (!($clinit_Sounds() , music) || $isLoaded(($clinit_Sound() , MUSIC_LOAD_TRACKER))) && !!XOR_MAZES_FUTURE._result && !!PROCYON_MAZES_FUTURE._result) {
    finishLoading_0();
    finishLoading();
    $clinit_Sounds();
    addSound_0(($clinit_MazeState$State() , EXPLOSION), EXPLOSION_0);
    addSound_0(THROUGH_TELEPORT, TELEPORT_0);
    addSound_0(STUCK_IN_TELEPORT, TELEPORT_0);
    addSound_0(PLAYER_DYING, DYING_0);
    addSound_0(LEVEL_COMPLETED, CONGRATULATIONS);
    addSound(($clinit_MazeState$AdditionalEvent() , BALLOON_COLLECTED), BALLOON_0);
    addSound(MAP_COLLECTED, MAP_0);
    addSound(OBJECT_STOPPED, THUMP);
    XOR_MAZES = loadList(XOR_MAZES_FUTURE._result.get_2());
    PROCYON_MAZES = loadList(PROCYON_MAZES_FUTURE._result.get_2());
    this$static.menu = new Menu(this$static.controlState, XOR_MAZES, PROCYON_MAZES);
    $clearFresh(this$static.controlState);
    music && $play_0(PARTITURE.raw);
    this$static.loadingFinished = true;
  }
}

function Prospector(platform){
  var result;
  SceneGame.call(this, platform.raw);
  this.loadingFinished = false;
  this.titleLoaded = false;
  this.fontLoaded = false;
  this.keySlot = new Prospector$1(this);
  this.mouseSlot = new Prospector$2(this);
  this.surface = new Surface_0(this.viewSurf);
  this.surface.clipFactor = platform.raw.graphics.scale_0.factor * platform.zoom;
  TITLE = load('title.png');
  DIGITS_RAW = load('digits.png');
  EDITOR_BUTTONS = load('editorbuttons.png');
  RAW = load('widefont.png');
  $clinit_Tiles();
  TILES_RAW = load('tiles.png');
  $clinit_Sprites();
  SPRITES_RAW = load('sprites.png');
  $clinit_Sounds();
  EXPLOSION_0 = load_0('explosion');
  TELEPORT_0 = load_0('teleport');
  DYING_0 = load_0('dying');
  CONGRATULATIONS = load_0('congratulations');
  BALLOON_0 = load_0('balloon');
  MAP_0 = load_0('map');
  THUMP = load_0('thump');
  PARTITURE = ($clinit_Sound() , result = new Sound_0($getSound(INSTANCE_2.raw.assets, 'partiture')) , $add_0(MUSIC_LOAD_TRACKER, result) , $setVolume_2(result.raw) , result);
  XOR_MAZES_FUTURE = $getText(INSTANCE_2.raw.assets, 'standard.mazes.txt');
  PROCYON_MAZES_FUTURE = $getText(INSTANCE_2.raw.assets, 'standard2.mazes.txt');
  this.controlState = new ControlState;
  $addConnection(this.plat.input_0.keyboardEvents, this.keySlot);
  $addConnection(this.plat.input_0.mouseEvents, this.mouseSlot);
}

defineClass(197, 216, {}, Prospector);
_.fontLoaded = false;
_.loadingFinished = false;
_.titleLoaded = false;
_.updatedAtMs = 0;
var Lxor_core_Prospector_2_classLit = createForClass(197);
function $onEmit_0(this$static, e){
  var ke;
  if (instanceOf(e, 109)) {
    ke = e;
    $onKeyChange(this$static.this$01.controlState, ke.key_0, ke.down);
    !this$static.this$01.loadingFinished && ke.key_0 == ($clinit_Key() , ESCAPE) && ($clinit_Sounds() , music = false);
  }
}

function Prospector$1(this$0){
  this.this$01 = this$0;
}

defineClass(217, 40, $intern_32, Prospector$1);
_.onEmit = function onEmit_6(e){
  $onEmit_0(this, e);
}
;
var Lxor_core_Prospector$1_2_classLit = createForClass(217);
function Prospector$2(this$0){
  this.this$01 = this$0;
}

defineClass(218, 40, $intern_32, Prospector$2);
_.onEmit = function onEmit_7(e){
  instanceOf(e, 110)?$onMouseChange(this.this$01.controlState, round_int(e.x_0), round_int(e.y_0), e.down):this.this$01.controlState.mousePressed && $onMouseDragged(this.this$01.controlState, round_int(e.x_0), round_int(e.y_0));
}
;
var Lxor_core_Prospector$2_2_classLit = createForClass(218);
function decode(lines){
  var line, line$index, line$max, moves, potentialTitle, title_0;
  title_0 = null;
  potentialTitle = null;
  moves = new ByteArrayOutputStream;
  for (line$index = 0 , line$max = lines.length; line$index < line$max; ++line$index) {
    line = lines[line$index];
    if (line.length == 0)
      continue;
    if (looksLikeReplay(line)) {
      if (potentialTitle != null) {
        title_0 = potentialTitle;
        moves.count = 0;
      }
      decodeMoves(line, moves);
    }
     else {
      potentialTitle = line;
    }
  }
  if (title_0 != null && moves.count > 0) {
    return new ReplayEncoder$Replay(title_0, moves);
  }
  return $clinit_ReplayEncoder$Replay() , EMPTY_1;
}

function decodeMoves(str, result){
  var c, i;
  for (i = 0; i < str.length; i++) {
    c = str.charCodeAt(i);
    $indexOf_1('ULDRXuldrx', fromCodePoint(c)) != -1 && (result.count == result.buf.length && $expand(result) , result.buf[result.count++] = c << 24 >> 24);
  }
}

function encode_0(mazeController){
  if (!mazeController.movesOut || mazeController.movesOut.count == 0) {
    return '';
  }
  return mazeController.mazeState.maze.title_0 + '\n' + encodeMoves(mazeController.movesOut);
}

function encodeMoves(moves){
  var lastArg;
  return limitWidth(valueOf_0($decodeString(moves.buf, (lastArg = moves.count , $clinit_EmulatedCharset() , lastArg))));
}

function limitWidth(in_0){
  var begin, end, result;
  if (in_0.length <= 80) {
    return in_0 + '\n';
  }
  result = new StringBuilder;
  for (begin = 0; begin < in_0.length;) {
    end = min_0(begin + 80, in_0.length);
    $append_1($append_7(result, in_0.substr(begin, end - begin)), 10);
    begin = end;
  }
  return result.string;
}

function looksLikeReplay(s){
  var i;
  for (i = 0; i < min_0(10, s.length); i++) {
    if ($indexOf_1('ULDRXuldrx', fromCodePoint(s.charCodeAt(i))) == -1) {
      return false;
    }
  }
  return true;
}

function $clinit_ReplayEncoder$Replay(){
  $clinit_ReplayEncoder$Replay = emptyMethod;
  EMPTY_1 = new ReplayEncoder$Replay(null, null);
}

function ReplayEncoder$Replay(title_0, moves){
  $clinit_ReplayEncoder$Replay();
  this.title_0 = title_0;
  this.moves = moves;
}

defineClass(190, 1, {}, ReplayEncoder$Replay);
var EMPTY_1;
var Lxor_core_ReplayEncoder$Replay_2_classLit = createForClass(190);
function $clinit_Sound(){
  $clinit_Sound = emptyMethod;
  LOAD_TRACKER_0 = new LoadTracker;
  MUSIC_LOAD_TRACKER = new LoadTracker;
}

function Sound_0(raw){
  this.raw = raw;
}

function load_0(name_0){
  $clinit_Sound();
  var result;
  result = new Sound_0($getSound(INSTANCE_2.raw.assets, name_0));
  $add_0(LOAD_TRACKER_0, result);
  $setVolume_2(result.raw);
  return result;
}

defineClass(93, 1, {399:1, 93:1}, Sound_0);
_.isLoaded = function isLoaded_0(){
  return !!this.raw.state._result;
}
;
var LOAD_TRACKER_0, MUSIC_LOAD_TRACKER;
var Lxor_core_Sound_2_classLit = createForClass(93);
function $clinit_Sounds(){
  $clinit_Sounds = emptyMethod;
  STATE_SOUNDS = initUnidimensionalArray(Lxor_core_Sound_2_classLit, $intern_47, 93, ($clinit_MazeState() , NUM_STATES), 0, 1);
  EVENT_SOUNDS = initUnidimensionalArray(Lxor_core_Sound_2_classLit, $intern_47, 93, NUM_ADDITIONAL_EVENTS, 0, 1);
  SOUND_EFFECTS_PLAYER = new Sounds$1;
}

function addSound(event_0, sound){
  EVENT_SOUNDS[event_0.code_0] = sound;
}

function addSound_0(state, sound){
  STATE_SOUNDS[state.code_0] = sound;
}

var BALLOON_0, CONGRATULATIONS, DYING_0, EVENT_SOUNDS, EXPLOSION_0, MAP_0, PARTITURE, SOUND_EFFECTS_PLAYER, STATE_SOUNDS, TELEPORT_0, THUMP, music = true, sounds = true;
function Sounds$1(){
}

defineClass(255, 1, {398:1}, Sounds$1);
_.onStateTransition = function onStateTransition_1(oldState, newState, event_0){
  var sound;
  sound = ($clinit_Sounds() , STATE_SOUNDS)[newState.code_0];
  !sound && (sound = EVENT_SOUNDS[event_0.code_0]);
  !!sound && sounds && $play_0(sound.raw);
}
;
var Lxor_core_Sounds$1_2_classLit = createForClass(255);
function $add_8(this$static, part){
  $add_0(this$static.parts, part);
  this$static.size_0 += part.length;
  return this$static;
}

function $get_9(this$static, index_0){
  var part, part$iterator;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new NoSuchElementException_0('Expected 0 <= index < ' + this$static.size_0 + ', but was: ' + index_0));
  }
  for (part$iterator = new ArrayList$1(this$static.parts); part$iterator.i < part$iterator.this$01.array.length;) {
    part = castToArray($next_3(part$iterator));
    if (index_0 < part.length) {
      return part[index_0];
    }
    index_0 -= part.length;
  }
  throw toJs(new IllegalStateException);
}

function $indexOfElement(this$static, part, arrayIndex){
  return $offsetOfArray(this$static, part) + arrayIndex;
}

function $offsetOfArray(this$static, part){
  var offset, p, p$iterator;
  offset = 0;
  for (p$iterator = new ArrayList$1(this$static.parts); p$iterator.i < p$iterator.this$01.array.length;) {
    p = castToArray($next_3(p$iterator));
    if (maskUndefined(p) === maskUndefined(part))
      return offset;
    offset += p.length;
  }
  throw toJs(new NoSuchElementException_0(part + ' is not a part of ' + this$static));
}

function $set_3(this$static, index_0, element){
  var part, part$iterator, replaced;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw toJs(new NoSuchElementException_0('Expected 0 <= index < ' + this$static.size_0 + ', but was: ' + index_0));
  }
  for (part$iterator = new ArrayList$1(this$static.parts); part$iterator.i < part$iterator.this$01.array.length;) {
    part = castToArray($next_3(part$iterator));
    if (index_0 < part.length) {
      replaced = part[index_0];
      part[index_0] = element;
      return replaced;
    }
    index_0 -= part.length;
  }
  throw toJs(new IllegalStateException);
}

function SplicedArrayList(){
  this.parts = new ArrayList;
}

defineClass(322, 432, $intern_2, SplicedArrayList);
_.get_0 = function get_11(index_0){
  return $get_9(this, index_0);
}
;
_.size_1 = function size_15(){
  return this.size_0;
}
;
_.size_0 = 0;
var Lxor_core_SplicedArrayList_2_classLit = createForClass(322);
function $clinit_Sprites(){
  $clinit_Sprites = emptyMethod;
  NUM_ROLL_DIRECTIONS = ($clinit_Sprites$RollDirection() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Sprites$RollDirection_2_classLit, 1), $intern_1, 92, 0, [HORIZ, VERTI])).length;
  CELLS = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, ($clinit_Cells() , NUM_CELL_TYPES), 0, 1);
  HERB_POSES = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, ($clinit_Player() , NUM_POSES), 0, 1);
  PIP_POSES = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, NUM_POSES, 0, 1);
  SPHERE_ROLL = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, NUM_ROLL_DIRECTIONS, 0, 1);
  ROCK_EYES = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, 3, 0, 1);
  HERB_DYING = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, 4, 0, 1);
  PIP_DYING = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, 6, 0, 1);
  EXPLOSION_1 = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, 9, 0, 1);
  ALL_SPRITES = $add_8($add_8($add_8($add_8($add_8($add_8($add_8($add_8(new SplicedArrayList, CELLS), HERB_POSES), PIP_POSES), SPHERE_ROLL), ROCK_EYES), HERB_DYING), PIP_DYING), EXPLOSION_1);
  PLAYERS_POSES = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Image_2_classLit, 2), $intern_3, 24, 0, [HERB_POSES, PIP_POSES]);
  PLAYERS_DYING = stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Animation_2_classLit, 1), $intern_3, 91, 0, [new Animation(HERB_DYING, 3), new Animation(PIP_DYING, 3)]);
  EXPLOSION_ANIM = new Animation(EXPLOSION_1, 1);
  SPRITE_SHEET = stampJavaTypeInfo(getClassLiteralForArray(I_classLit, 1), $intern_24, 14, 15, [herb(($clinit_Player$Pose() , CENTER_0)), herb(UP_2), herb(DOWN_2), herb(HALF_RIGHT), herb(RIGHT_3), pip(CENTER_0), pip(UP_2), pip(DOWN_2), pip(HALF_RIGHT), pip(RIGHT_3), cell_0(($clinit_Cells$CellType() , BALLOON)), cell_0(MAP_NW), cell_0(MAP_NE), cell_0(ROCK), cell_0(ZEPPELIN), cell_0(DECOY), cell_0(MAP_SW), cell_0(MAP_SE), cell_0(FIELD_H), cell_0(FIELD_V), cell_0(SPHERE), sphere(HORIZ), sphere(VERTI), cell_0(DYNAMITE), cell_0(TIN_BOMB), cell_0(TELEPORT), cell_0(EXIT_0), $indexOfElement(ALL_SPRITES, ROCK_EYES, 0), $indexOfElement(ALL_SPRITES, ROCK_EYES, 1), $indexOfElement(ALL_SPRITES, ROCK_EYES, 2), $indexOfElement(ALL_SPRITES, HERB_DYING, 0), $indexOfElement(ALL_SPRITES, HERB_DYING, 1), $indexOfElement(ALL_SPRITES, HERB_DYING, 2), $indexOfElement(ALL_SPRITES, PIP_DYING, 0), $indexOfElement(ALL_SPRITES, PIP_DYING, 1), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 0), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 1), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 2), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 3), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 4), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 5), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 6), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 7), $indexOfElement(ALL_SPRITES, EXPLOSION_1, 8), -1]);
}

function cell_0(cellType){
  return $indexOfElement(ALL_SPRITES, CELLS, cellType.code_0);
}

function copy_0(a, b){
  $get_9(ALL_SPRITES, a) != null?$set_3(ALL_SPRITES, b, $get_9(ALL_SPRITES, a)):$set_3(ALL_SPRITES, a, $get_9(ALL_SPRITES, b));
}

function copyAndFlipLTR(a, b){
  $get_9(ALL_SPRITES, a) != null?$set_3(ALL_SPRITES, b, $get_9(ALL_SPRITES, a).flipLTR()):$set_3(ALL_SPRITES, a, $get_9(ALL_SPRITES, b).flipLTR());
}

function finishLoading(){
  $clinit_Sprites();
  var dest, spritesSource, src_0;
  spritesSource = $tile($cycle(SPRITES_RAW, ($clinit_Animator() , SPRITE)), 24);
  for (src_0 = 0; src_0 < SPRITE_SHEET.length; src_0++) {
    dest = SPRITE_SHEET[src_0];
    dest >= 0 && dest < ALL_SPRITES.size_0 && $set_3(ALL_SPRITES, dest, spritesSource[src_0]);
  }
  copy_0(herb(($clinit_Player$Pose() , CENTER_0)), cell_0(($clinit_Cells$CellType() , HERB)));
  copy_0(pip(CENTER_0), cell_0(PIP));
  copyAndFlipLTR(herb(HALF_RIGHT), herb(HALF_LEFT));
  copyAndFlipLTR(herb(RIGHT_3), herb(LEFT_3));
  copyAndFlipLTR(pip(HALF_RIGHT), pip(HALF_LEFT));
  copyAndFlipLTR(pip(RIGHT_3), pip(LEFT_3));
  copy_0($indexOfElement(ALL_SPRITES, HERB_DYING, 1), $indexOfElement(ALL_SPRITES, HERB_DYING, 3));
  copyAndFlipLTR($indexOfElement(ALL_SPRITES, PIP_DYING, 0), $indexOfElement(ALL_SPRITES, PIP_DYING, 3));
  copyAndFlipLTR($indexOfElement(ALL_SPRITES, PIP_DYING, 1), $indexOfElement(ALL_SPRITES, PIP_DYING, 4));
  copy_0($indexOfElement(ALL_SPRITES, PIP_DYING, 0), $indexOfElement(ALL_SPRITES, PIP_DYING, 2));
  copy_0($indexOfElement(ALL_SPRITES, PIP_DYING, 3), $indexOfElement(ALL_SPRITES, PIP_DYING, 5));
}

function herb(pose){
  return $indexOfElement(ALL_SPRITES, HERB_POSES, pose.code_0);
}

function pip(pose){
  return $indexOfElement(ALL_SPRITES, PIP_POSES, pose.code_0);
}

function sphere(rd){
  return $indexOfElement(ALL_SPRITES, SPHERE_ROLL, rd.code_0);
}

function stateIconOffset_0(cellType){
  $clinit_Sprites();
  switch (cellType.ordinal) {
    case 3:
    case 2:
    case 7:
    case 8:
    case 6:
      return 1;
    default:return 0;
  }
}

var ALL_SPRITES, CELLS, EXPLOSION_1, EXPLOSION_ANIM, HERB_DYING, HERB_POSES, NUM_ROLL_DIRECTIONS = 0, PIP_DYING, PIP_POSES, PLAYERS_DYING, PLAYERS_POSES, ROCK_EYES, SPHERE_ROLL, SPRITES_RAW, SPRITE_SHEET;
function $clinit_Sprites$RollDirection(){
  $clinit_Sprites$RollDirection = emptyMethod;
  HORIZ = new Sprites$RollDirection('HORIZ', 0);
  VERTI = new Sprites$RollDirection('VERTI', 1);
}

function Sprites$RollDirection(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
  this.code_0 = this.ordinal;
}

function values_27(){
  $clinit_Sprites$RollDirection();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Sprites$RollDirection_2_classLit, 1), $intern_1, 92, 0, [HORIZ, VERTI]);
}

defineClass(92, 6, {3:1, 8:1, 6:1, 92:1}, Sprites$RollDirection);
_.code_0 = 0;
var HORIZ, VERTI;
var Lxor_core_Sprites$RollDirection_2_classLit = createForEnum(92, values_27);
function $draw_6(this$static, image, w, h){
  if (!image)
    return;
  $pixelate(INSTANCE_2);
  $draw_2(this$static.raw, $texture(image.raw), 0, 30, w, h);
  $pixelate(INSTANCE_2);
}

function $draw_7(this$static, image, x_0, y_0){
  if (!image)
    return;
  $pixelate(INSTANCE_2);
  $draw_1(this$static.raw, $texture(image.raw_0()), x_0, y_0);
  $pixelate(INSTANCE_2);
}

function $drawSlidingTile(this$static, tile, x_0, y_0, movement, percent){
  var px, py;
  if (!tile)
    return;
  if (!movement) {
    $draw_7(this$static, tile, x_0 * 24, y_0 * 24);
  }
   else {
    px = x_0 * 24 + (movement.dx * 24 * percent / 100 | 0);
    py = y_0 * 24 + (movement.dy * 24 * percent / 100 | 0);
    $draw_7(this$static, tile, px, py);
  }
}

function $fillRect_3(this$static, color_0){
  $setFillColor(this$static.raw, color_0);
  $fillRect_0(this$static.raw, 0, 0, 320, 224);
}

function $scale_3(this$static, x_0, y_0){
  $scale_0(this$static.raw, x_0, y_0);
}

function Surface_0(raw){
  this.raw = raw;
}

defineClass(253, 1, {}, Surface_0);
_.draw_0 = function draw_2(image, x_0, y_0){
  $draw_7(this, image, x_0, y_0);
}
;
_.clipFactor = 1;
var Lxor_core_Surface_2_classLit = createForClass(253);
function $clinit_Tiles(){
  $clinit_Tiles = emptyMethod;
  FLOOR_TILES = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_3, 24, 15, 0, 2);
  WALL_TILES = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_3, 24, 15, 0, 2);
  TEMPLATE_GRID = new ByteGrid(($clinit_EmulatedCharset() , $getBytes()), 4, 5);
}

function finishLoading_0(){
  $clinit_Tiles();
  var animator, floorType, i, j, themeTiles, themes;
  themes = $tile_0(TILES_RAW, 96, 121);
  for (i = 0; i < 15; i++) {
    FLOOR_TILES[i] = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, 4, 0, 1);
    WALL_TILES[i] = initUnidimensionalArray(Lxor_core_Image_2_classLit, $intern_43, 15, 16, 0, 1);
    animator = i == 5?($clinit_Animator() , MAP_SLOW):($clinit_Animator() , MAP);
    themeTiles = $tile(themes[i].cycle(animator), 24);
    floorType = 0;
    for (j = 0; j < 20; j++) {
      '    o---|###|###|###'.charCodeAt(j) == 32?(FLOOR_TILES[i][floorType++] = themeTiles[j]):(WALL_TILES[i][getWallTypeFromTemplate(j)] = themeTiles[j]);
    }
  }
}

function getWallTypeFromTemplate(index_0){
  var d, d$array, d$index, d$max, wallType, x_0, y_0;
  x_0 = $indexToX(TEMPLATE_GRID, index_0);
  y_0 = $indexToY(TEMPLATE_GRID, index_0);
  wallType = 0;
  for (d$array = ($clinit_Direction() , stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Direction_2_classLit, 1), $intern_1, 30, 0, [UP_1, DOWN_1, LEFT_2, RIGHT_2])) , d$index = 0 , d$max = d$array.length; d$index < d$max; ++d$index) {
    d = d$array[d$index];
    $safeGet(TEMPLATE_GRID, x_0, y_0) == $safeGet(TEMPLATE_GRID, x_0 + d.dx, y_0 + d.dy) && (wallType |= d.bitCode);
  }
  return wallType;
}

var FLOOR_TILES, TEMPLATE_GRID, TILES_RAW, WALL_TILES;
function $centerOnPlayer(this$static, player){
  this$static.originX = $originToCenterOnPlayer(this$static, player, ($clinit_Viewport$Axis() , HORIZONTAL));
  this$static.originY = $originToCenterOnPlayer(this$static, player, VERTICAL);
}

function $completeMove_0(this$static){
  this$static.originX += this$static.deltaX;
  this$static.originY += this$static.deltaY;
  this$static.deltaX = this$static.deltaY = 0;
}

function $constrainDeltaToMaze(this$static, delta, axis_0){
  var origin_0;
  origin_0 = axis_0.origin_0(this$static);
  return constrainOriginToMaze(origin_0 + delta, this$static.size_0, axis_0.size_2(this$static.maze)) - origin_0;
}

function $constrainOriginToMaze(this$static, origin_0, axis_0){
  return constrainOriginToMaze(origin_0, this$static.size_0, axis_0.size_2(this$static.maze));
}

function $contains_4(this$static, mazeX, mazeY){
  return mazeX >= this$static.originX && mazeX < this$static.originX + this$static.size_0 && mazeY >= this$static.originY && mazeY < this$static.originY + this$static.size_0;
}

function $deltaToFollowPlayer(this$static, player, axis_0){
  return $deltaToFollowTarget(this$static, axis_0.position_1(player), axis_0);
}

function $deltaToFollowTarget(this$static, target, axis_0){
  var origin_0, targetFromOrigin;
  return (origin_0 = axis_0.origin_0(this$static) , targetFromOrigin = target - origin_0 , targetFromOrigin < this$static.lookAheadBorder?(origin_0 += targetFromOrigin - this$static.lookAheadBorder):targetFromOrigin >= this$static.size_0 - this$static.lookAheadBorder && (origin_0 += targetFromOrigin + this$static.lookAheadBorder + 1 - this$static.size_0) , constrainOriginToMaze(origin_0, this$static.size_0, axis_0.size_2(this$static.maze))) - axis_0.origin_0(this$static);
}

function $followMovingPlayer(this$static, player){
  var pm;
  pm = player.movement;
  if (pm) {
    this$static.deltaX = $deltaToFollowTarget(this$static, $dx(pm, player.x_0), ($clinit_Viewport$Axis() , HORIZONTAL));
    this$static.deltaY = $deltaToFollowTarget(this$static, $dy(pm, player.y_0), VERTICAL);
  }
   else {
    this$static.deltaX = 0;
    this$static.deltaY = 0;
  }
}

function $followPlayer(this$static, player){
  var dx, dy;
  dx = $deltaToFollowPlayer(this$static, player, ($clinit_Viewport$Axis() , HORIZONTAL));
  dy = $deltaToFollowPlayer(this$static, player, VERTICAL);
  if ((dx < 0?-dx:dx) + (dy < 0?-dy:dy) > 1) {
    this$static.originX = $originToCenterOnPlayer(this$static, player, HORIZONTAL);
    this$static.originY = $originToCenterOnPlayer(this$static, player, VERTICAL);
  }
   else {
    this$static.originX += dx;
    this$static.originY += dy;
  }
  $followMovingPlayer(this$static, player);
}

function $isMoving(this$static){
  return this$static.deltaX != 0 || this$static.deltaY != 0;
}

function $originToCenterOnPlayer(this$static, player, axis_0){
  var origin_0;
  origin_0 = axis_0.position_1(player) - ((this$static.size_0 + 1) / 2 | 0);
  return constrainOriginToMaze(origin_0, this$static.size_0, axis_0.size_2(this$static.maze));
}

function $resize(this$static, newSize){
  var delta;
  if (newSize == this$static.size_0)
    return;
  delta = newSize - this$static.size_0;
  this$static.size_0 = newSize;
  this$static.lookAheadBorder = chooseLookAheadBorder(this$static.size_0);
  this$static.originX = $constrainOriginToMaze(this$static, this$static.originX - (delta / 2 | 0), ($clinit_Viewport$Axis() , HORIZONTAL));
  this$static.originY = $constrainOriginToMaze(this$static, this$static.originY - (delta / 2 | 0), VERTICAL);
}

function $resize_0(this$static, newSize, player){
  if (newSize == this$static.size_0)
    return;
  this$static.size_0 = newSize;
  this$static.lookAheadBorder = chooseLookAheadBorder(this$static.size_0);
  this$static.originX = $originToCenterOnPlayer(this$static, player, ($clinit_Viewport$Axis() , HORIZONTAL));
  this$static.originY = $originToCenterOnPlayer(this$static, player, VERTICAL);
  $followMovingPlayer(this$static, player);
}

function $tryMove_0(this$static, dx, dy){
  this$static.deltaX = $constrainDeltaToMaze(this$static, dx, ($clinit_Viewport$Axis() , HORIZONTAL));
  this$static.deltaY = $constrainDeltaToMaze(this$static, dy, VERTICAL);
}

function Viewport(maze, size_0){
  this.maze = maze;
  this.size_0 = size_0;
  this.lookAheadBorder = chooseLookAheadBorder(size_0);
}

function Viewport_0(maze, size_0, player){
  Viewport.call(this, maze, size_0);
  this.originX = $originToCenterOnPlayer(this, player, ($clinit_Viewport$Axis() , HORIZONTAL));
  this.originY = $originToCenterOnPlayer(this, player, VERTICAL);
}

function chooseLookAheadBorder(size_0){
  if (size_0 <= 2)
    return 0;
  else if (size_0 <= 8)
    return 1;
  else if (size_0 <= 10)
    return 2;
  else if (size_0 <= 12)
    return 3;
  return 4;
}

function constrainOriginToMaze(origin_0, viewportSize, mazeSize){
  if (viewportSize >= mazeSize) {
    return ((mazeSize + 1) / 2 | 0) - ((viewportSize + 1) / 2 | 0);
  }
   else if (origin_0 <= 0) {
    return 0;
  }
   else if (origin_0 + viewportSize >= mazeSize) {
    return mazeSize - viewportSize;
  }
  return origin_0;
}

defineClass(98, 1, {98:1}, Viewport, Viewport_0);
_.deltaX = 0;
_.deltaY = 0;
_.lookAheadBorder = 0;
_.originX = 0;
_.originY = 0;
_.size_0 = 0;
var Lxor_core_Viewport_2_classLit = createForClass(98);
function $clinit_Viewport$Axis(){
  $clinit_Viewport$Axis = emptyMethod;
  HORIZONTAL = new Viewport$Axis$1;
  VERTICAL = new Viewport$Axis$2;
}

function Viewport$Axis(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_28(){
  $clinit_Viewport$Axis();
  return stampJavaTypeInfo(getClassLiteralForArray(Lxor_core_Viewport$Axis_2_classLit, 1), $intern_1, 88, 0, [HORIZONTAL, VERTICAL]);
}

defineClass(88, 6, $intern_48);
var HORIZONTAL, VERTICAL;
var Lxor_core_Viewport$Axis_2_classLit = createForEnum(88, values_28);
function Viewport$Axis$1(){
  Viewport$Axis.call(this, 'HORIZONTAL', 0);
}

defineClass(385, 88, $intern_48, Viewport$Axis$1);
_.origin_0 = function origin_1(v){
  return v.originX;
}
;
_.position_1 = function position(p){
  return p.x_0;
}
;
_.size_2 = function size_16(m){
  return m.width_0;
}
;
var Lxor_core_Viewport$Axis$1_2_classLit = createForEnum(385, null);
function Viewport$Axis$2(){
  Viewport$Axis.call(this, 'VERTICAL', 1);
}

defineClass(386, 88, $intern_48, Viewport$Axis$2);
_.origin_0 = function origin_2(v){
  return v.originY;
}
;
_.position_1 = function position_0(p){
  return p.y_0;
}
;
_.size_2 = function size_17(m){
  return m.height_0;
}
;
var Lxor_core_Viewport$Axis$2_2_classLit = createForEnum(386, null);
function $addDocumentListeners(){
  window.top.document.body.addEventListener('cut', function(e){
    onSystemCopyEvent();
  }
  );
  window.top.document.body.addEventListener('copy', function(e){
    onSystemCopyEvent();
  }
  );
  window.top.document.body.addEventListener('paste', function(e){
    onSystemPasteEvent(e.clipboardData.getData('text'));
  }
  );
}

function ProspectorHtml$HtmlClipboard(){
  this.listeners = new ArrayList;
  INSTANCE_1 = this;
  $addDocumentListeners();
}

defineClass(193, 200, {}, ProspectorHtml$HtmlClipboard);
_.writeToSystem = function writeToSystem_0(text_0){
  var textArea = document.createElement('textarea');
  textArea.style.position = 'fixed';
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = '2em';
  textArea.style.height = '2em';
  textArea.style.padding = 0;
  textArea.style.border = 'none';
  textArea.style.outline = 'none';
  textArea.style.boxShadow = 'none';
  textArea.style.background = 'transparent';
  textArea.value = text_0;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    !document.execCommand('copy') && console.log('Copy failed');
  }
   catch (err) {
    console.log('Copy failed');
  }
  document.body.removeChild(textArea);
}
;
var Lxor_html_ProspectorHtml$HtmlClipboard_2_classLit = createForClass(193);
function ProspectorHtml$HtmlPlatform(raw){
  var availableArea, widthZoom, heightZoom, zoom;
  this.raw = raw;
  this.zoom = (availableArea = $screenSize(this.raw.graphics) , widthZoom = availableArea.width_0 / 320 , heightZoom = availableArea.height_0 / 224 , zoom = $wnd.Math.min(widthZoom, heightZoom) , $wnd.Math.max(1, zoom));
  this.setSize(round_int(320 * this.zoom), round_int(224 * this.zoom));
  INSTANCE_2 = this;
}

defineClass(196, 199, {}, ProspectorHtml$HtmlPlatform);
_.createRawCanvas = function createRawCanvas_0(pixelWidth, pixelHeight){
  var elem;
  elem = $doc.createElement('canvas');
  elem.width = pixelWidth;
  elem.height = pixelHeight;
  return new HtmlCanvas(new HtmlImage(this.raw.graphics, ($clinit_Scale() , ONE), elem));
}
;
_.setSize = function setSize_0(width_0, height){
  $setSize(this.raw.graphics, width_0, height);
}
;
var Lxor_html_ProspectorHtml$HtmlPlatform_2_classLit = createForClass(196);
var C_classLit = createForPrimitive('C');
var B_classLit = createForPrimitive('B');
var F_classLit = createForPrimitive('F');
var I_classLit = createForPrimitive('I');
var S_classLit = createForPrimitive('S');
var $entry = ($clinit_Impl() , entry_0);
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'safari']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=prospector-0.js

