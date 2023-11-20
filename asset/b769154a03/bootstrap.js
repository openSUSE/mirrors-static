/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function(global,factory){"use strict";if(typeof module==="object"&&typeof module.exports==="object"){module.exports=global.document?factory(global,true):function(w){if(!w.document){throw new Error("jQuery requires a window with a document");}
return factory(w);};}else{factory(global);}})(typeof window!=="undefined"?window:this,function(window,noGlobal){"use strict";var arr=[];var document=window.document;var getProto=Object.getPrototypeOf;var slice=arr.slice;var concat=arr.concat;var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){return typeof obj==="function"&&typeof obj.nodeType!=="number";};var isWindow=function isWindow(obj){return obj!=null&&obj===obj.window;};var preservedScriptAttributes={type:true,src:true,noModule:true};function DOMEval(code,doc,node){doc=doc||document;var i,script=doc.createElement("script");script.text=code;if(node){for(i in preservedScriptAttributes){if(node[i]){script[i]=node[i];}}}
doc.head.appendChild(script).parentNode.removeChild(script);}
function toType(obj){if(obj==null){return obj+"";}
return typeof obj==="object"||typeof obj==="function"?class2type[toString.call(obj)]||"object":typeof obj;}
var
version="3.3.1",jQuery=function(selector,context){return new jQuery.fn.init(selector,context);},rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){return slice.call(this);},get:function(num){if(num==null){return slice.call(this);}
return num<0?this[num+this.length]:this[num];},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;},each:function(callback){return jQuery.each(this,callback);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},slice:function(){return this.pushStack(slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},end:function(){return this.prevObject||this.constructor();},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[i]||{};i++;}
if(typeof target!=="object"&&!isFunction(target)){target={};}
if(i===length){target=this;i--;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&Array.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),isReady:true,error:function(msg){throw new Error(msg);},noop:function(){},isPlainObject:function(obj){var proto,Ctor;if(!obj||toString.call(obj)!=="[object Object]"){return false;}
proto=getProto(obj);if(!proto){return true;}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},globalEval:function(code){DOMEval(code);},each:function(obj,callback){var length,i=0;if(isArrayLike(obj)){length=obj.length;for(;i<length;i++){if(callback.call(obj[i],i,obj[i])===false){break;}}}else{for(i in obj){if(callback.call(obj[i],i,obj[i])===false){break;}}}
return obj;},trim:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArrayLike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){return arr==null?-1:indexOf.call(arr,elem,i);},merge:function(first,second){var len=+second.length,j=0,i=first.length;for(;j<len;j++){first[i++]=second[j];}
first.length=i;return first;},grep:function(elems,callback,invert){var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){matches.push(elems[i]);}}
return matches;},map:function(elems,callback,arg){var length,value,i=0,ret=[];if(isArrayLike(elems)){length=elems.length;for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret.push(value);}}}
return concat.apply([],ret);},guid:1,support:support});if(typeof Symbol==="function"){jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArrayLike(obj){var length=!!obj&&"length" in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){return false;}
return type==="array"||length===0||typeof length==="number"&&length>0&&(length-1)in obj;}
var Sizzle=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function(window){var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando="sizzle"+1*new Date(),preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),sortOrder=function(a,b){if(a===b){hasDuplicate=true;}
return 0;},hasOwn=({}).hasOwnProperty,arr=[],pop=arr.pop,push_native=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){var i=0,len=list.length;for(;i<len;i++){if(list[i]===elem){return i;}}
return-1;},booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",whitespace="[\\x20\\t\\r\\n\\f]",identifier="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+whitespace+
"*\\]",pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",rwhitespace=new RegExp(whitespace+"+","g"),rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+whitespace+"*"),rattributeQuotes=new RegExp("="+whitespace+"*([^\\]'\"]*?)"+whitespace+"*\\]","g"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+identifier+")"),"CLASS":new RegExp("^\\.("+identifier+")"),"TAG":new RegExp("^("+identifier+"|[*])"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),"bool":new RegExp("^(?:"+booleans+")$","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp("\\\\([\\da-f]{1,6}"+whitespace+"?|("+whitespace+")|.)","ig"),funescape=function(_,escaped,escapedWhitespace){var high="0x"+escaped-0x10000;return high!==high||escapedWhitespace?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){if(asCodePoint){if(ch==="\0"){return"\uFFFD";}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";}
return"\\"+ch;},unloadHandler=function(){setDocument();},disabledAncestor=addCombinator(function(elem){return elem.disabled===true&&("form" in elem||"label" in elem);},{dir:"parentNode",next:"legend"});try{push.apply((arr=slice.call(preferredDoc.childNodes)),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;}catch(e){push={apply:arr.length?function(target,els){push_native.apply(target,slice.call(els));}:function(target,els){var j=target.length,i=0;while((target[j++]=els[i++])){}
target.length=j-1;}};}
function Sizzle(selector,context,results,seed){var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=="string"||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){return results;}
if(!seed){if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;if(documentIsHTML){if(nodeType!==11&&(match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){if((elem=context.getElementById(m))){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,context.getElementsByTagName(selector));return results;}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){push.apply(results,context.getElementsByClassName(m));return results;}}
if(support.qsa&&!compilerCache[selector+" "]&&(!rbuggyQSA||!rbuggyQSA.test(selector))){if(nodeType!==1){newContext=context;newSelector=selector;}else if(context.nodeName.toLowerCase()!=="object"){if((nid=context.getAttribute("id"))){nid=nid.replace(rcssescape,fcssescape);}else{context.setAttribute("id",(nid=expando));}
groups=tokenize(selector);i=groups.length;while(i--){groups[i]="#"+nid+" "+toSelector(groups[i]);}
newSelector=groups.join(",");newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;}
if(newSelector){try{push.apply(results,newContext.querySelectorAll(newSelector));return results;}catch(qsaError){}finally{if(nid===expando){context.removeAttribute("id");}}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
function createCache(){var keys=[];function cache(key,value){if(keys.push(key+" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key+" "]=value);}
return cache;}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var el=document.createElement("fieldset");try{return!!fn(el);}catch(e){return false;}finally{if(el.parentNode){el.parentNode.removeChild(el);}
el=null;}}
function addHandle(attrs,handler){var arr=attrs.split("|"),i=arr.length;while(i--){Expr.attrHandle[arr[i]]=handler;}}
function siblingCheck(a,b){var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createDisabledPseudo(disabled){return function(elem){if("form" in elem){if(elem.parentNode&&elem.disabled===false){if("label" in elem){if("label" in elem.parentNode){return elem.parentNode.disabled===disabled;}else{return elem.disabled===disabled;}}
return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&disabledAncestor(elem)===disabled;}
return elem.disabled===disabled;}else if("label" in elem){return elem.disabled===disabled;}
return false;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
function testContext(context){return context&&typeof context.getElementsByTagName!=="undefined"&&context;}
support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!==document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){if(subWindow.addEventListener){subWindow.addEventListener("unload",unloadHandler,false);}else if(subWindow.attachEvent){subWindow.attachEvent("onunload",unloadHandler);}}
support.attributes=assert(function(el){el.className="i";return!el.getAttribute("className");});support.getElementsByTagName=assert(function(el){el.appendChild(document.createComment(""));return!el.getElementsByTagName("*").length;});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;});if(support.getById){Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var elem=context.getElementById(id);return elem?[elem]:[];}};}else{Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");return node&&node.value===attrId;};};Expr.find["ID"]=function(id,context){if(typeof context.getElementById!=="undefined"&&documentIsHTML){var node,i,elems,elem=context.getElementById(id);if(elem){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}
elems=context.getElementsByName(id);i=0;while((elem=elems[i++])){node=elem.getAttributeNode("id");if(node&&node.value===id){return[elem];}}}
return[];}};}
Expr.find["TAG"]=support.getElementsByTagName?function(tag,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(tag);}else if(support.qsa){return context.querySelectorAll(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["CLASS"]=support.getElementsByClassName&&function(className,context){if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[];if((support.qsa=rnative.test(document.querySelectorAll))){assert(function(el){docElem.appendChild(el).innerHTML="<a id='"+expando+"'></a>"+
"<select id='"+expando+"-\r\\' msallowcapture=''>"+
"<option selected=''></option></select>";if(el.querySelectorAll("[msallowcapture^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:''|\"\")");}
if(!el.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");}
if(!el.querySelectorAll("[id~="+expando+"-]").length){rbuggyQSA.push("~=");}
if(!el.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}
if(!el.querySelectorAll("a#"+expando+"+*").length){rbuggyQSA.push(".#.+[+~]");}});assert(function(el){el.innerHTML="<a href='' disabled='disabled'></a>"+
"<select disabled='disabled'><option/></select>";var input=document.createElement("input");input.setAttribute("type","hidden");el.appendChild(input).setAttribute("name","D");if(el.querySelectorAll("[name=d]").length){rbuggyQSA.push("name"+whitespace+"*[*^$|!~]?=");}
if(el.querySelectorAll(":enabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
docElem.appendChild(el).disabled=true;if(el.querySelectorAll(":disabled").length!==2){rbuggyQSA.push(":enabled",":disabled");}
el.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=rnative.test((matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(el){support.disconnectedMatch=matches.call(el,"*");matches.call(el,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join("|"));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=hasCompare?function(a,b){if(a===b){hasDuplicate=true;return 0;}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){return compare;}
compare=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){if(a===document||a.ownerDocument===preferredDoc&&contains(preferredDoc,a)){return-1;}
if(b===document||b.ownerDocument===preferredDoc&&contains(preferredDoc,b)){return 1;}
return sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}
return compare&4?-1:1;}:function(a,b){if(a===b){hasDuplicate=true;return 0;}
var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){return a===document?-1:b===document?1:aup?-1:bup?1:sortInput?(indexOf(sortInput,a)-indexOf(sortInput,b)):0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&documentIsHTML&&!compilerCache[expr+" "]&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;};Sizzle.escape=function(sel){return(sel+"").replace(rcssescape,fcssescape);};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){while((elem=results[i++])){if(elem===results[i]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
sortInput=null;return results;};getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){while((node=elem[i++])){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[6]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[3]){match[2]=match[4]||match[5]||"";}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeNameSelector){var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==="*"?function(){return true;}:function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(typeof elem.className==="string"&&elem.className||typeof elem.getAttribute!=="undefined"&&elem.getAttribute("class")||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result.replace(rwhitespace," ")+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){uniqueCache[type]=[dirruns,nodeIndex,diff];break;}}}else{if(useCache){node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;}
if(diff===false){while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];}
if(node===elem){break;}}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){text=text.replace(runescape,funescape);return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsHTML?elem.lang:elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":createDisabledPseudo(false),"disabled":createDisabledPseudo(true),"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeType<6){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()==="text");},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};Expr.pseudos["nth"]=Expr.pseudos["eq"];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters();tokenize=Sizzle.tokenize=function(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push((tokens=[]));}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);};function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}
return false;}:function(elem,context,xml){var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){elem=elem[dir]||elem;}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){return(newCache[2]=oldCache[2]);}else{uniqueCache[key]=newCache;if((newCache[2]=matcher(elem,context,xml))){return true;}}}}}
return false;};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){var ret=(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===" "?"*":""})).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){var elem,j,matcher,matchedCount=0,i="0",unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",outermost),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),len=elems.length;if(outermost){outermostContext=context===document||context||outermost;}
for(;i!==len&&(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;if(!context&&elem.ownerDocument!==document){setDocument(elem);xml=!documentIsHTML;}
while((matcher=elementMatchers[j++])){if(matcher(elem,context||document,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,match){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!match){match=tokenize(selector);}
i=match.length;while(i--){cached=matcherFromTokens(match[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;}
return cached;};select=Sizzle.select=function(selector,context,results,seed){var i,tokens,token,type,find,compiled=typeof selector==="function"&&selector,match=!seed&&tokenize((selector=compiled.selector||selector));results=results||[];if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){context=(Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){return results;}else if(compiled){context=context.parentNode;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,seed);return results;}
break;}}}}
(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;};support.sortStable=expando.split("").sort(sortOrder).join("")===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){return el.compareDocumentPosition(document.createElement("fieldset"))&1;});if(!assert(function(el){el.innerHTML="<a href='#'></a>";return el.firstChild.getAttribute("href")==="#";})){addHandle("type|href|height|width",function(elem,name,isXML){if(!isXML){return elem.getAttribute(name,name.toLowerCase()==="type"?1:2);}});}
if(!support.attributes||!assert(function(el){el.innerHTML="<input/>";el.firstChild.setAttribute("value","");return el.firstChild.getAttribute("value")==="";})){addHandle("value",function(elem,name,isXML){if(!isXML&&elem.nodeName.toLowerCase()==="input"){return elem.defaultValue;}});}
if(!assert(function(el){return el.getAttribute("disabled")==null;})){addHandle(booleans,function(elem,name,isXML){var val;if(!isXML){return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;}});}
return Sizzle;})(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){if(elem.nodeType===1){if(truncate&&jQuery(elem).is(until)){break;}
matched.push(elem);}}
return matched;};var siblings=function(n,elem){var matched=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){matched.push(n);}}
return matched;};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();};var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);function winnow(elements,qualifier,not){if(isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){return!!qualifier.call(elem,i,elem)!==not;});}
if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)!==not;});}
if(typeof qualifier!=="string"){return jQuery.grep(elements,function(elem){return(indexOf.call(qualifier,elem)>-1)!==not;});}
return jQuery.filter(qualifier,elements,not);}
jQuery.filter=function(expr,elems,not){var elem=elems[0];if(not){expr=":not("+expr+")";}
if(elems.length===1&&elem.nodeType===1){return jQuery.find.matchesSelector(elem,expr)?[elem]:[];}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){return elem.nodeType===1;}));};jQuery.fn.extend({find:function(selector){var i,ret,len=this.length,self=this;if(typeof selector!=="string"){return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
ret=this.pushStack([]);for(i=0;i<len;i++){jQuery.find(selector,self[i],ret);}
return len>1?jQuery.uniqueSort(ret):ret;},filter:function(selector){return this.pushStack(winnow(this,selector||[],false));},not:function(selector){return this.pushStack(winnow(this,selector||[],true));},is:function(selector){return!!winnow(this,typeof selector==="string"&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){var match,elem;if(!selector){return this;}
root=root||rootjQuery;if(typeof selector==="string"){if(selector[0]==="<"&&selector[selector.length-1]===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem){this[0]=elem;this.length=1;}
return this;}}else if(!context||context.jquery){return(context||root).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(isFunction(selector)){return root.ready!==undefined?root.ready(selector):selector(jQuery);}
return jQuery.makeArray(selector,this);};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){var targets=jQuery(target,this),l=targets.length;return this.filter(function(){var i=0;for(;i<l;i++){if(jQuery.contains(this,targets[i])){return true;}}});},closest:function(selectors,context){var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=="string"&&jQuery(selectors);if(!rneedsContext.test(selectors)){for(;i<l;i++){for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){matched.push(cur);break;}}}}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return indexOf.call(jQuery(elem),this[0]);}
return indexOf.call(this,elem.jquery?elem[0]:elem);},add:function(selector,context){return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});function sibling(cur,dir){while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return dir(elem,"nextSibling");},prevAll:function(elem){return dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return dir(elem,"previousSibling",until);},siblings:function(elem){return siblings((elem.parentNode||{}).firstChild,elem);},children:function(elem){return siblings(elem.firstChild);},contents:function(elem){if(nodeName(elem,"iframe")){return elem.contentDocument;}
if(nodeName(elem,"template")){elem=elem.content||elem;}
return jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=="Until"){selector=until;}
if(selector&&typeof selector==="string"){matched=jQuery.filter(selector,matched);}
if(this.length>1){if(!guaranteedUnique[name]){jQuery.uniqueSort(matched);}
if(rparentsprev.test(name)){matched.reverse();}}
return this.pushStack(matched);};});var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);function createOptions(options){var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?createOptions(options):jQuery.extend({},options);var
firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){memory=queue.shift();while(++firingIndex<list.length){if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){firingIndex=list.length;memory=false;}}}
if(!options.memory){memory=false;}
firing=false;if(locked){if(memory){list=[];}else{list="";}}},self={add:function(){if(list){if(memory&&!firing){firingIndex=list.length-1;queue.push(memory);}
(function add(args){jQuery.each(args,function(_,arg){if(isFunction(arg)){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&toType(arg)!=="string"){add(arg);}});})(arguments);if(memory&&!firing){fire();}}
return this;},remove:function(){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(index<=firingIndex){firingIndex--;}}});return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:list.length>0;},empty:function(){if(list){list=[];}
return this;},disable:function(){locked=queue=[];list=memory="";return this;},disabled:function(){return!list;},lock:function(){locked=queue=[];if(!memory&&!firing){list=memory="";}
return this;},locked:function(){return!!locked;},fireWith:function(context,args){if(!locked){args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){fire();}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};function Identity(v){return v;}
function Thrower(ex){throw ex;}
function adoptValue(value,resolve,reject,noValue){var method;try{if(value&&isFunction((method=value.promise))){method.call(value).done(resolve).fail(reject);}else if(value&&isFunction((method=value.then))){method.call(value,resolve,reject);}else{resolve.apply(undefined,[value].slice(noValue));}}catch(value){reject.apply(undefined,[value]);}}
jQuery.extend({Deferred:function(func){var tuples=[["notify","progress",jQuery.Callbacks("memory"),jQuery.Callbacks("memory"),2],["resolve","done",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),0,"resolved"],["reject","fail",jQuery.Callbacks("once memory"),jQuery.Callbacks("once memory"),1,"rejected"]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},"catch":function(fn){return promise.then(null,fn);},pipe:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);}else{newDefer[tuple[0]+"With"](this,fn?[returned]:arguments);}});});fns=null;}).promise();},then:function(onFulfilled,onRejected,onProgress){var maxDepth=0;function resolve(depth,deferred,handler,special){return function(){var that=this,args=arguments,mightThrow=function(){var returned,then;if(depth<maxDepth){return;}
returned=handler.apply(that,args);if(returned===deferred.promise()){throw new TypeError("Thenable self-resolution");}
then=returned&&(typeof returned==="object"||typeof returned==="function")&&returned.then;if(isFunction(then)){if(special){then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));}else{maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));}}else{if(handler!==Identity){that=undefined;args=[returned];}
(special||deferred.resolveWith)(that,args);}},process=special?mightThrow:function(){try{mightThrow();}catch(e){if(jQuery.Deferred.exceptionHook){jQuery.Deferred.exceptionHook(e,process.stackTrace);}
if(depth+1>=maxDepth){if(handler!==Thrower){that=undefined;args=[e];}
deferred.rejectWith(that,args);}}};if(depth){process();}else{if(jQuery.Deferred.getStackHook){process.stackTrace=jQuery.Deferred.getStackHook();}
window.setTimeout(process);}};}
return jQuery.Deferred(function(newDefer){tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);}
list.add(tuple[3].fire);deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(singleValue){var
remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),master=jQuery.Deferred(),updateFunc=function(i){return function(value){resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!(--remaining)){master.resolveWith(resolveContexts,resolveValues);}};};if(remaining<=1){adoptValue(singleValue,master.done(updateFunc(i)).resolve,master.reject,!remaining);if(master.state()==="pending"||isFunction(resolveValues[i]&&resolveValues[i].then)){return master.then();}}
while(i--){adoptValue(resolveValues[i],updateFunc(i),master.reject);}
return master.promise();}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){window.console.warn("jQuery.Deferred exception: "+error.message,error.stack,stack);}};jQuery.readyException=function(error){window.setTimeout(function(){throw error;});};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){readyList
.then(fn)
.catch(function(error){jQuery.readyException(error);});return this;};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);}});jQuery.ready.then=readyList.then;function completed(){document.removeEventListener("DOMContentLoaded",completed);window.removeEventListener("load",completed);jQuery.ready();}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){window.setTimeout(jQuery.ready);}else{document.addEventListener("DOMContentLoaded",completed);window.addEventListener("load",completed);}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,len=elems.length,bulk=key==null;if(toType(key)==="object"){chainable=true;for(i in key){access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<len;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
if(chainable){return elems;}
if(bulk){return fn.call(elems);}
return len?fn(elems[0],key):emptyGet;};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(all,letter){return letter.toUpperCase();}
function camelCase(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);}
var acceptData=function(owner){return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);};function Data(){this.expando=jQuery.expando+Data.uid++;}
Data.uid=1;Data.prototype={cache:function(owner){var value=owner[this.expando];if(!value){value={};if(acceptData(owner)){if(owner.nodeType){owner[this.expando]=value;}else{Object.defineProperty(owner,this.expando,{value:value,configurable:true});}}}
return value;},set:function(owner,data,value){var prop,cache=this.cache(owner);if(typeof data==="string"){cache[camelCase(data)]=value;}else{for(prop in data){cache[camelCase(prop)]=data[prop];}}
return cache;},get:function(owner,key){return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];},access:function(owner,key,value){if(key===undefined||((key&&typeof key==="string")&&value===undefined)){return this.get(owner,key);}
this.set(owner,key,value);return value!==undefined?value:key;},remove:function(owner,key){var i,cache=owner[this.expando];if(cache===undefined){return;}
if(key!==undefined){if(Array.isArray(key)){key=key.map(camelCase);}else{key=camelCase(key);key=key in cache?[key]:(key.match(rnothtmlwhite)||[]);}
i=key.length;while(i--){delete cache[key[i]];}}
if(key===undefined||jQuery.isEmptyObject(cache)){if(owner.nodeType){owner[this.expando]=undefined;}else{delete owner[this.expando];}}},hasData:function(owner){var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);}};var dataPriv=new Data();var dataUser=new Data();var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){if(data==="true"){return true;}
if(data==="false"){return false;}
if(data==="null"){return null;}
if(data===+data+""){return+data;}
if(rbrace.test(data)){return JSON.parse(data);}
return data;}
function dataAttr(elem,key,data){var name;if(data===undefined&&elem.nodeType===1){name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=getData(data);}catch(e){}
dataUser.set(elem,key,data);}else{data=undefined;}}
return data;}
jQuery.extend({hasData:function(elem){return dataUser.hasData(elem)||dataPriv.hasData(elem);},data:function(elem,name,data){return dataUser.access(elem,name,data);},removeData:function(elem,name){dataUser.remove(elem,name);},_data:function(elem,name,data){return dataPriv.access(elem,name,data);},_removeData:function(elem,name){dataPriv.remove(elem,name);}});jQuery.fn.extend({data:function(key,value){var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){if(this.length){data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){i=attrs.length;while(i--){if(attrs[i]){name=attrs[i].name;if(name.indexOf("data-")===0){name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}}
dataPriv.set(elem,"hasDataAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){dataUser.set(this,key);});}
return access(this,function(value){var data;if(elem&&value===undefined){data=dataUser.get(elem,key);if(data!==undefined){return data;}
data=dataAttr(elem,key);if(data!==undefined){return data;}
return;}
this.each(function(){dataUser.set(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){dataUser.remove(this,key);});}});jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=dataPriv.get(elem,type);if(data){if(!queue||Array.isArray(data)){queue=dataPriv.access(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){dataPriv.remove(elem,[type+"queue",key]);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=dataPriv.get(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");var cssExpand=["Top","Right","Bottom","Left"];var isHiddenWithinTree=function(elem,el){elem=el||elem;return elem.style.display==="none"||elem.style.display===""&&jQuery.contains(elem.ownerDocument,elem)&&jQuery.css(elem,"display")==="none";};var swap=function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;};function adjustCSS(elem,prop,valueParts,tween){var adjusted,scale,maxIterations=20,currentValue=tween?function(){return tween.cur();}:function(){return jQuery.css(elem,prop,"");},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),initialInUnit=(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){maxIterations=0;}
initialInUnit=initialInUnit/scale;}
initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];}
if(valueParts){initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;}}
return adjusted;}
var defaultDisplayMap={};function getDefaultDisplay(elem){var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){return display;}
temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,"display");temp.parentNode.removeChild(temp);if(display==="none"){display="block";}
defaultDisplayMap[nodeName]=display;return display;}
function showHide(elements,show){var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
display=elem.style.display;if(show){if(display==="none"){values[index]=dataPriv.get(elem,"display")||null;if(!values[index]){elem.style.display="";}}
if(elem.style.display===""&&isHiddenWithinTree(elem)){values[index]=getDefaultDisplay(elem);}}else{if(display!=="none"){values[index]="none";dataPriv.set(elem,"display",display);}}}
for(index=0;index<length;index++){if(values[index]!=null){elements[index].style.display=values[index];}}
return elements;}
jQuery.fn.extend({show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){if(typeof state==="boolean"){return state?this.show():this.hide();}
return this.each(function(){if(isHiddenWithinTree(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});var rcheckableType=(/^(?:checkbox|radio)$/i);var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);var wrapMap={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;function getAll(context,tag){var ret;if(typeof context.getElementsByTagName!=="undefined"){ret=context.getElementsByTagName(tag||"*");}else if(typeof context.querySelectorAll!=="undefined"){ret=context.querySelectorAll(tag||"*");}else{ret=[];}
if(tag===undefined||tag&&nodeName(context,tag)){return jQuery.merge([context],ret);}
return ret;}
function setGlobalEval(elems,refElements){var i=0,l=elems.length;for(;i<l;i++){dataPriv.set(elems[i],"globalEval",!refElements||dataPriv.get(refElements[i],"globalEval"));}}
var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){var elem,tmp,tag,wrap,contains,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(toType(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||fragment.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent="";}}}
fragment.textContent="";i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)>-1){if(ignored){ignored.push(elem);}
continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(fragment.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
return fragment;}
(function(){var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement("div")),input=document.createElement("input");input.setAttribute("type","radio");input.setAttribute("checked","checked");input.setAttribute("name","t");div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML="<textarea>x</textarea>";support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;})();var documentElement=document.documentElement;var
rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){return true;}
function returnFalse(){return false;}
function safeActiveElement(){try{return document.activeElement;}catch(err){}}
function on(elem,types,selector,data,fn,one){var origFn,type;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){on(elem,type,selector,data,types[type],one);}
return elem;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return elem;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return elem.each(function(){jQuery.event.add(this,types,fn,data,selector);});}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(selector){jQuery.find.matchesSelector(documentElement,selector);}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;};}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}},remove:function(elem,types,handler,selector,mappedTypes){var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(rnothtmlwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){dataPriv.remove(elem,"handle events");}},dispatch:function(nativeEvent){var event=jQuery.event.fix(nativeEvent);var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),handlers=(dataPriv.get(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){args[i]=arguments[i];}
event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.rnamespace||event.rnamespace.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==="click"&&event.button>=1)){for(;cur!==this;cur=cur.parentNode||this){if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matchedSelectors[sel]===undefined){matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;}
if(matchedSelectors[sel]){matchedHandlers.push(handleObj);}}
if(matchedHandlers.length){handlerQueue.push({elem:cur,handlers:matchedHandlers});}}}}
cur=this;if(delegateCount<handlers.length){handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},addProp:function(name,hook){Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){if(this.originalEvent){return hook(this.originalEvent);}}:function(){if(this.originalEvent){return this.originalEvent[name];}},set:function(value){Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});}});},fix:function(originalEvent){return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);},special:{load:{noBubble:true},focus:{trigger:function(){if(this!==safeActiveElement()&&this.focus){this.focus();return false;}},delegateType:"focusin"},blur:{trigger:function(){if(this===safeActiveElement()&&this.blur){this.blur();return false;}},delegateType:"focusout"},click:{trigger:function(){if(this.type==="checkbox"&&this.click&&nodeName(this,"input")){this.click();return false;}},_default:function(event){return nodeName(event.target,"a");}},beforeunload:{postDispatch:function(event){if(event.result!==undefined&&event.originalEvent){event.originalEvent.returnValue=event.result;}}}}};jQuery.removeEvent=function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=(src.target&&src.target.nodeType===3)?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){e.preventDefault();}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopPropagation();}},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){e.stopImmediatePropagation();}
this.stopPropagation();}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,"char":true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:function(event){var button=event.button;if(event.which==null&&rkeyEvent.test(event.type)){return event.charCode!=null?event.charCode:event.keyCode;}
if(!event.which&&button!==undefined&&rmouseEvent.test(event.type)){if(button&1){return 1;}
if(button&2){return 3;}
if(button&4){return 2;}
return 0;}
return event.which;}},jQuery.event.addProp);jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});jQuery.fn.extend({on:function(types,selector,data,fn){return on(this,types,selector,data,fn);},one:function(types,selector,data,fn){return on(this,types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});}});var
rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){if(nodeName(elem,"table")&&nodeName(content.nodeType!==11?content:content.firstChild,"tr")){return jQuery(elem).children("tbody")[0]||elem;}
return elem;}
function disableScript(elem){elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;return elem;}
function restoreScript(elem){if((elem.type||"").slice(0,5)==="true/"){elem.type=elem.type.slice(5);}else{elem.removeAttribute("type");}
return elem;}
function cloneCopyEvent(src,dest){var i,l,type,pdataOld,pdataCur,udataOld,udataCur,events;if(dest.nodeType!==1){return;}
if(dataPriv.hasData(src)){pdataOld=dataPriv.access(src);pdataCur=dataPriv.set(dest,pdataOld);events=pdataOld.events;if(events){delete pdataCur.handle;pdataCur.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}}
if(dataUser.hasData(src)){udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);}}
function fixInput(src,dest){var nodeName=dest.nodeName.toLowerCase();if(nodeName==="input"&&rcheckableType.test(src.type)){dest.checked=src.checked;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
function domManip(collection,args,callback,ignored){args=concat.apply([],args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||(l>1&&typeof value==="string"&&!support.checkClone&&rchecked.test(value))){return collection.each(function(index){var self=collection.eq(index);if(valueIsFunction){args[0]=value.call(this,index,self.html());}
domManip(self,args,callback,ignored);});}
if(l){fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first||ignored){scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(collection[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!dataPriv.access(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src&&(node.type||"").toLowerCase()!=="module"){if(jQuery._evalUrl){jQuery._evalUrl(node.src);}}else{DOMEval(node.textContent.replace(rcleanScript,""),doc,node);}}}}}}
return collection;}
function remove(elem,selector,keepData){var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){if(!keepData&&node.nodeType===1){jQuery.cleanData(getAll(node));}
if(node.parentNode){if(keepData&&jQuery.contains(node.ownerDocument,node)){setGlobalEval(getAll(node,"script"));}
node.parentNode.removeChild(node);}}
return elem;}
jQuery.extend({htmlPrefilter:function(html){return html.replace(rxhtmlTag,"<$1></$2>");},clone:function(elem,dataAndEvents,deepDataAndEvents){var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=jQuery.contains(elem.ownerDocument,elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){fixInput(srcElements[i],destElements[i]);}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){cloneCopyEvent(srcElements[i],destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
return clone;},cleanData:function(elems){var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){if(acceptData(elem)){if((data=elem[dataPriv.expando])){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
elem[dataPriv.expando]=undefined;}
if(elem[dataUser.expando]){elem[dataUser.expando]=undefined;}}}}});jQuery.fn.extend({detach:function(selector){return remove(this,selector,true);},remove:function(selector){return remove(this,selector);},text:function(value){return access(this,function(value){return value===undefined?jQuery.text(this):this.empty().each(function(){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.textContent=value;}});},null,value,arguments.length);},append:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.appendChild(elem);}});},prepend:function(){return domManip(this,arguments,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);}});},before:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return domManip(this,arguments,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.textContent="";}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){return elem.innerHTML;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=jQuery.htmlPrefilter(value);try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(){var ignored=[];return domManip(this,arguments,function(elem){var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){jQuery.cleanData(getAll(this));if(parent){parent.replaceChild(elem,this);}}},ignored);}});jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());}
return this.pushStack(ret);};});var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");var getStyles=function(elem){var view=elem.ownerDocument.defaultView;if(!view||!view.opener){view=window;}
return view.getComputedStyle(elem);};var rboxStyle=new RegExp(cssExpand.join("|"),"i");(function(){function computeStyleTests(){if(!div){return;}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+
"margin-top:1px;padding:0;border:0";div.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;"+
"margin:auto;border:1px;padding:1px;"+
"width:60%;top:1%";documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=="1%";reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right="60%";pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position="absolute";scrollboxSizeVal=div.offsetWidth===36||"absolute";documentElement.removeChild(container);div=null;}
function roundPixelMeasures(measure){return Math.round(parseFloat(measure));}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableMarginLeftVal,container=document.createElement("div"),div=document.createElement("div");if(!div.style){return;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery.extend(support,{boxSizingReliable:function(){computeStyleTests();return boxSizingReliableVal;},pixelBoxStyles:function(){computeStyleTests();return pixelBoxStylesVal;},pixelPosition:function(){computeStyleTests();return pixelPositionVal;},reliableMarginLeft:function(){computeStyleTests();return reliableMarginLeftVal;},scrollboxSize:function(){computeStyleTests();return scrollboxSizeVal;}});})();function curCSS(elem,name,computed){var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){ret=computed.getPropertyValue(name)||computed[name];if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret!==undefined?ret+"":ret;}
function addGetHookIf(conditionFn,hookFn){return{get:function(){if(conditionFn()){delete this.get;return;}
return(this.get=hookFn).apply(this,arguments);}};}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:"0",fontWeight:"400"},cssPrefixes=["Webkit","Moz","ms"],emptyStyle=document.createElement("div").style;function vendorPropName(name){if(name in emptyStyle){return name;}
var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in emptyStyle){return name;}}}
function finalPropName(name){var ret=jQuery.cssProps[name];if(!ret){ret=jQuery.cssProps[name]=vendorPropName(name)||name;}
return ret;}
function setPositiveNumber(elem,value,subtract){var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):value;}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){var i=dimension==="width"?1:0,extra=0,delta=0;if(box===(isBorderBox?"border":"content")){return 0;}
for(;i<4;i+=2){if(box==="margin"){delta+=jQuery.css(elem,box+cssExpand[i],true,styles);}
if(!isBorderBox){delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(box!=="padding"){delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}else{extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{if(box==="content"){delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(box!=="margin"){delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
if(!isBorderBox&&computedVal>=0){delta+=Math.max(0,Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
computedVal-
delta-
extra-
0.5));}
return delta;}
function getWidthOrHeight(elem,dimension,extra){var styles=getStyles(elem),val=curCSS(elem,dimension,styles),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box",valueIsBorderBox=isBorderBox;if(rnumnonpx.test(val)){if(!extra){return val;}
val="auto";}
valueIsBorderBox=valueIsBorderBox&&(support.boxSizingReliable()||val===elem.style[dimension]);if(val==="auto"||!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline"){val=elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)];valueIsBorderBox=true;}
val=parseFloat(val)||0;return(val+
boxModelAdjustment(elem,dimension,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles,val))+"px";}
jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"animationIterationCount":true,"columnCount":true,"fillOpacity":true,"flexGrow":true,"flexShrink":true,"fontWeight":true,"lineHeight":true,"opacity":true,"order":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){value=adjustCSS(elem,name,ret);type="number";}
if(value==null||value!==value){return;}
if(type==="number"){value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set" in hooks)||(value=hooks.set(elem,value,extra))!==undefined){if(isCustomProp){style.setProperty(name,value);}else{style[name]=value;}}}else{if(hooks&&"get" in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){name=finalPropName(origName);}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get" in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;}
return val;}});jQuery.each(["height","width"],function(i,dimension){jQuery.cssHooks[dimension]={get:function(elem,computed,extra){if(computed){return rdisplayswap.test(jQuery.css(elem,"display"))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){return getWidthOrHeight(elem,dimension,extra);}):getWidthOrHeight(elem,dimension,extra);}},set:function(elem,value,extra){var matches,styles=getStyles(elem),isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box",subtract=extra&&boxModelAdjustment(elem,dimension,extra,isBorderBox,styles);if(isBorderBox&&support.scrollboxSize()===styles.position){subtract-=Math.ceil(elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
parseFloat(styles[dimension])-
boxModelAdjustment(elem,dimension,"border",false,styles)-
0.5);}
if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||"px")!=="px"){elem.style[dimension]=value;value=jQuery.css(elem,dimension);}
return setPositiveNumber(elem,value,subtract);}};});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){if(computed){return(parseFloat(curCSS(elem,"marginLeft"))||elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){return elem.getBoundingClientRect().left;}))+"px";}});jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(prefix!=="margin"){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});jQuery.fn.extend({css:function(name,value){return access(this,function(elem,name,value){var styles,len,map={},i=0;if(Array.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);}});function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.nodeType===1&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;},_default:"swing"};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var
fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){if(inProgress){if(document.hidden===false&&window.requestAnimationFrame){window.requestAnimationFrame(schedule);}else{window.setTimeout(schedule,jQuery.fx.interval);}
jQuery.fx.tick();}}
function createFxNow(){window.setTimeout(function(){fxNow=undefined;});return(fxNow=Date.now());}
function genFx(type,includeWidth){var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
function createTween(value,prop,animation){var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if((tween=collection[index].call(animation,prop,value))){return tween;}}}
function defaultPrefilter(elem,props,opts){var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox="width" in props||"height" in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,"fxshow");if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
for(prop in props){value=props[prop];if(rfxtypes.test(value)){delete props[prop];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){if(value==="show"&&dataShow&&dataShow[prop]!==undefined){hidden=true;}else{continue;}}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);}}
propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){return;}
if(isBox&&elem.nodeType===1){opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){restoreDisplay=dataPriv.get(elem,"display");}
display=jQuery.css(elem,"display");if(display==="none"){if(restoreDisplay){display=restoreDisplay;}else{showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,"display");showHide([elem]);}}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){if(jQuery.css(elem,"float")==="none"){if(!propTween){anim.done(function(){style.display=restoreDisplay;});if(restoreDisplay==null){display=style.display;restoreDisplay=display==="none"?"":display;}}
style.display="inline-block";}}}
if(opts.overflow){style.overflow="hidden";anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}
propTween=false;for(prop in orig){if(!propTween){if(dataShow){if("hidden" in dataShow){hidden=dataShow.hidden;}}else{dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){showHide([elem],true);}
anim.done(function(){if(!hidden){showHide([elem]);}
dataPriv.remove(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){dataShow[prop]=propTween.start;if(hidden){propTween.end=propTween.start;propTween.start=0;}}}}
function propFilter(props,specialEasing){var index,name,easing,value,hooks;for(index in props){name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand" in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
function Animation(elem,properties,options){var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}
if(!length){deferred.notifyWith(elem,[animation,1,0]);}
deferred.resolveWith(elem,[animation]);return false;},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){if(isFunction(result.stop)){jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);}
return result;}}
jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
animation
.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;}
jQuery.Animation=jQuery.extend(Animation,{tweeners:{"*":[function(prop,value){var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;}]},tweener:function(props,callback){if(isFunction(props)){callback=props;props=["*"];}else{props=props.match(rnothtmlwhite);}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);}},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){if(prepend){Animation.prefilters.unshift(callback);}else{Animation.prefilters.push(callback);}}});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){opt.duration=0;}else{if(typeof opt.duration!=="number"){if(opt.duration in jQuery.fx.speeds){opt.duration=jQuery.fx.speeds[opt.duration];}else{opt.duration=jQuery.fx.speeds._default;}}}
if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHiddenWithinTree).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=dataPriv.get(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=dataPriv.get(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){hooks.stop.call(this,true);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.timers=[];jQuery.fx.tick=function(){var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){jQuery.timers.push(timer);jQuery.fx.start();};jQuery.fx.interval=13;jQuery.fx.start=function(){if(inProgress){return;}
inProgress=true;schedule();};jQuery.fx.stop=function(){inProgress=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=window.setTimeout(next,time);hooks.stop=function(){window.clearTimeout(timeout);};});};(function(){var input=document.createElement("input"),select=document.createElement("select"),opt=select.appendChild(document.createElement("option"));input.type="checkbox";support.checkOn=input.value!=="";support.optSelected=opt.selected;input=document.createElement("input");input.value="t";input.type="radio";support.radioValue=input.value==="t";})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){return access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});}});jQuery.extend({attr:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute==="undefined"){return jQuery.prop(elem,name,value);}
if(nType!==1||!jQuery.isXMLDoc(elem)){hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);return;}
if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
elem.setAttribute(name,value+"");return value;}
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;},attrHooks:{type:{set:function(elem,value){if(!support.radioValue&&value==="radio"&&nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},removeAttr:function(elem,value){var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){elem.removeAttribute(name);}}}});boolHook={set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else{elem.setAttribute(name,name);}
return name;}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(i,name){var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;}
return ret;};});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){return access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){return this.each(function(){delete this[jQuery.propFix[name]||name];});}});jQuery.extend({prop:function(elem,name,value){var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){return;}
if(nType!==1||!jQuery.isXMLDoc(elem)){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set" in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}
return(elem[name]=value);}
if(hooks&&"get" in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}
return elem[name];},propHooks:{tabIndex:{get:function(elem){var tabindex=jQuery.find.attr(elem,"tabindex");if(tabindex){return parseInt(tabindex,10);}
if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){return 0;}
return-1;}}},propFix:{"for":"htmlFor","class":"className"}});if(!support.optSelected){jQuery.propHooks.selected={get:function(elem){var parent=elem.parentNode;if(parent&&parent.parentNode){parent.parentNode.selectedIndex;}
return null;},set:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}}};}
jQuery.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){jQuery.propFix[this.toLowerCase()]=this;});function stripAndCollapse(value){var tokens=value.match(rnothtmlwhite)||[];return tokens.join(" ");}
function getClass(elem){return elem.getAttribute&&elem.getAttribute("class")||"";}
function classesToArray(value){if(Array.isArray(value)){return value;}
if(typeof value==="string"){return value.match(rnothtmlwhite)||[];}
return[];}
jQuery.fn.extend({addClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,getClass(this)));});}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},removeClass:function(value){var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,getClass(this)));});}
if(!arguments.length){return this.attr("class","");}
classes=classesToArray(value);if(classes.length){while((elem=this[i++])){curValue=getClass(elem);cur=elem.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>-1){cur=cur.replace(" "+clazz+" "," ");}}
finalValue=stripAndCollapse(cur);if(curValue!==finalValue){elem.setAttribute("class",finalValue);}}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isValidValue=type==="string"||Array.isArray(value);if(typeof stateVal==="boolean"&&isValidValue){return stateVal?this.addClass(value):this.removeClass(value);}
if(isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);});}
return this.each(function(){var className,i,self,classNames;if(isValidValue){i=0;self=jQuery(this);classNames=classesToArray(value);while((className=classNames[i++])){if(self.hasClass(className)){self.removeClass(className);}else{self.addClass(className);}}}else if(value===undefined||type==="boolean"){className=getClass(this);if(className){dataPriv.set(this,"__className__",className);}
if(this.setAttribute){this.setAttribute("class",className||value===false?"":dataPriv.get(this,"__className__")||"");}}});},hasClass:function(selector){var className,elem,i=0;className=" "+selector+" ";while((elem=this[i++])){if(elem.nodeType===1&&(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){return true;}}
return false;}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get" in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;if(typeof ret==="string"){return ret.replace(rreturn,"");}
return ret==null?"":ret;}
return;}
valueIsFunction=isFunction(value);return this.each(function(i){var val;if(this.nodeType!==1){return;}
if(valueIsFunction){val=value.call(this,i,jQuery(this).val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(Array.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set" in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=jQuery.find.attr(elem,"value");return val!=null?val:stripAndCollapse(jQuery.text(elem));}},select:{get:function(elem){var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one",values=one?null:[],max=one?index+1:options.length;if(index<0){i=max;}else{i=one?index:0;}
for(;i<max;i++){option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){optionSet=true;}}
if(!optionSet){elem.selectedIndex=-1;}
return values;}}}});jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={set:function(elem,value){if(Array.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);}}};if(!support.checkOn){jQuery.valHooks[this].get=function(elem){return elem.getAttribute("value")===null?"on":elem.value;};}});support.focusin="onfocusin" in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){e.stopPropagation();};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,"type")?event.type:event,namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>-1){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join(".");event.rnamespace=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,"events")||{})[event.type]&&dataPriv.get(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){event.result=handle.apply(cur,data);if(event.result===false){event.preventDefault();}}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){if(ontype&&isFunction(elem[type])&&!isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;if(event.isPropagationStopped()){lastElement.addEventListener(type,stopPropagationCallback);}
elem[type]();if(event.isPropagationStopped()){lastElement.removeEventListener(type,stopPropagationCallback);}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},simulate:function(type,elem,event){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);}});jQuery.fn.extend({trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});if(!support.focusin){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));};jQuery.event.special[fix]={setup:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix);if(!attaches){doc.addEventListener(orig,handler,true);}
dataPriv.access(doc,fix,(attaches||0)+1);},teardown:function(){var doc=this.ownerDocument||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);}else{dataPriv.access(doc,fix,attaches);}}};});}
var location=window.location;var nonce=Date.now();var rquery=(/\?/);jQuery.parseXML=function(data){var xml;if(!data||typeof data!=="string"){return null;}
try{xml=(new window.DOMParser()).parseFromString(data,"text/xml");}catch(e){xml=undefined;}
if(!xml||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;};var
rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){var name;if(Array.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",v,traditional,add);}});}else if(!traditional&&toType(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,valueOrFunction){var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);};if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&");};jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;})
.filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));})
.map(function(i,elem){var val=jQuery(this).val();if(val==null){return null;}
if(Array.isArray(val)){return jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};});}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});var
r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes="*/".concat("*"),originAnchor=document.createElement("a");originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
function ajaxHandleResponses(s,jqXHR,responses){var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response,jqXHR,isSuccess){var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
current=dataTypes.shift();while(current){if(s.responseFields[current]){jqXHR[s.responseFields[current]]=response;}
if(!prev&&isSuccess&&s.dataFilter){response=s.dataFilter(response,s.dataType);}
prev=current;current=dataTypes.shift();if(current){if(current==="*"){current=prev;}else if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.unshift(tmp[1]);}
break;}}}}
if(conv!==true){if(conv&&s.throws){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}}}
return{state:"success",data:response};}
jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:"GET",isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":true,"text json":JSON.parse,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(completed){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return completed?responseHeadersString:null;},setRequestHeader:function(name,value){if(completed==null){name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(completed==null){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(completed){jqXHR.always(map[jqXHR.status]);}else{for(code in map){statusCode[code]=[statusCode[code],map[code]];}}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+"")
.replace(rprotocol,location.protocol+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];if(s.crossDomain==null){urlAnchor=document.createElement("a");try{urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==urlAnchor.protocol+"//"+urlAnchor.host;}catch(e){s.crossDomain=true;}}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){return jqXHR;}
fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,"");if(!s.hasContent){uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==="string")){cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;delete s.data;}
if(s.cache===false){cacheURL=cacheURL.replace(rantiCache,"$1");uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce++)+uncached;}
s.url=cacheURL+uncached;}else if(s.data&&s.processData&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){s.data=s.data.replace(r20,"+");}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){return jqXHR.abort();}
strAbort="abort";completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(completed){return jqXHR;}
if(s.async&&s.timeout>0){timeoutTimer=window.setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{completed=false;transport.send(requestHeaders,done);}catch(e){if(completed){throw e;}
done(-1,e);}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){return;}
completed=true;if(timeoutTimer){window.clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204||s.type==="HEAD"){statusText="nocontent";}else if(status===304){statusText="notmodified";}else{statusText=response.state;success=response.data;error=response.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");}});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));};});jQuery._evalUrl=function(url){return jQuery.ajax({url:url,type:"GET",dataType:"script",cache:true,async:false,global:false,"throws":true});};jQuery.fn.extend({wrapAll:function(html){var wrap;if(this[0]){if(isFunction(html)){html=html.call(this[0]);}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstElementChild){elem=elem.firstElementChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var htmlIsFunction=isFunction(html);return this.each(function(i){jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);});},unwrap:function(selector){this.parent(selector).not("body").each(function(){jQuery(this).replaceWith(this.childNodes);});return this;}});jQuery.expr.pseudos.hidden=function(elem){return!jQuery.expr.pseudos.visible(elem);};jQuery.expr.pseudos.visible=function(elem){return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};jQuery.ajaxSettings.xhr=function(){try{return new window.XMLHttpRequest();}catch(e){}};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&("withCredentials" in xhrSupported);support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){return{send:function(headers,complete){var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){for(i in options.xhrFields){xhr[i]=options.xhrFields[i];}}
if(options.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(options.mimeType);}
if(!options.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
for(i in headers){xhr.setRequestHeader(i,headers[i]);}
callback=function(type){return function(){if(callback){callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==="abort"){xhr.abort();}else if(type==="error"){if(typeof xhr.status!=="number"){complete(0,"error");}else{complete(xhr.status,xhr.statusText);}}else{complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||"text")!=="text"||typeof xhr.responseText!=="string"?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());}}};};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback("error");if(xhr.onabort!==undefined){xhr.onabort=errorCallback;}else{xhr.onreadystatechange=function(){if(xhr.readyState===4){window.setTimeout(function(){if(callback){errorCallback();}});}};}
callback=callback("abort");try{xhr.send(options.hasContent&&options.data||null);}catch(e){if(callback){throw e;}}},abort:function(){if(callback){callback();}}};}});jQuery.ajaxPrefilter(function(s){if(s.crossDomain){s.contents.script=false;}});jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,callback;return{send:function(_,complete){script=jQuery("<script>").prop({charset:s.scriptCharset,src:s.url}).on("load error",callback=function(evt){script.remove();callback=null;if(evt){complete(evt.type==="error"?404:200,evt.type);}});document.head.appendChild(script[0]);},abort:function(){if(callback){callback();}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){if(overwritten===undefined){jQuery(window).removeProp(callbackName);}else{window[callbackName]=overwritten;}
if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});support.createHTMLDocument=(function(){var body=document.implementation.createHTMLDocument("").body;body.innerHTML="<form></form><form></form>";return body.childNodes.length===2;})();jQuery.parseHTML=function(data,context,keepScripts){if(typeof data!=="string"){return[];}
if(typeof context==="boolean"){keepScripts=context;context=false;}
var base,parsed,scripts;if(!context){if(support.createHTMLDocument){context=document.implementation.createHTMLDocument("");base=context.createElement("base");base.href=document.location.href;context.head.appendChild(base);}else{context=document;}}
parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);};jQuery.fn.load=function(url,params,callback){var selector,type,response,self=this,off=url.indexOf(" ");if(off>-1){selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);}
if(isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type||"GET",dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).always(callback&&function(jqXHR,status){self.each(function(){callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);});});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.expr.pseudos.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};jQuery.offset={setOffset:function(elem,options,i){var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,"position"),curElem=jQuery(elem),props={};if(position==="static"){elem.style.position="relative";}
curOffset=curElem.offset();curCSSTop=jQuery.css(elem,"top");curCSSLeft=jQuery.css(elem,"left");calculatePosition=(position==="absolute"||position==="fixed")&&(curCSSTop+curCSSLeft).indexOf("auto")>-1;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(isFunction(options)){options=options.call(elem,i,jQuery.extend({},curOffset));}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using" in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({offset:function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var rect,win,elem=this[0];if(!elem){return;}
if(!elem.getClientRects().length){return{top:0,left:0};}
rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};},position:function(){if(!this[0]){return;}
var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.parentNode;}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);}}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){offsetParent=offsetParent.offsetParent;}
return offsetParent||documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top="pageYOffset"===prop;jQuery.fn[method]=function(val){return access(this,function(elem,method,val){var win;if(isWindow(elem)){win=elem;}else if(elem.nodeType===9){win=elem.defaultView;}
if(val===undefined){return win?win[prop]:elem[method];}
if(win){win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);}else{elem[method]=val;}},method,val,arguments.length);};});jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}});});jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return access(this,function(elem,type,value){var doc;if(isWindow(elem)){return funcName.indexOf("outer")===0?elem["inner"+name]:elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable);};});});jQuery.each(("blur focus focusin focusout resize scroll click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.extend({hover:function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);}});jQuery.fn.extend({bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);}});jQuery.proxy=function(fn,context){var tmp,args,proxy;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!isFunction(fn)){return undefined;}
args=slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;};jQuery.holdReady=function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){var type=jQuery.type(obj);return(type==="number"||type==="string")&&!isNaN(obj-parseFloat(obj));};if(typeof define==="function"&&define.amd){define("jquery",[],function(){return jQuery;});}
var
_jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;};if(!noGlobal){window.jQuery=window.$=jQuery;}
return jQuery;});
/**
 * @summary     DataTables
 * @description Paginate, search and order HTML tables
 * @version     1.10.16
 * @file        jquery.dataTables.js
 * @author      SpryMedia Ltd
 * @contact     www.datatables.net
 * @copyright   Copyright 2008-2017 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */
(function(factory){"use strict";if(typeof define==='function'&&define.amd){define(['jquery'],function($){return factory($,window,document);});}
else if(typeof exports==='object'){module.exports=function(root,$){if(!root){root=window;}
if(!$){$=typeof window!=='undefined'?require('jquery'):require('jquery')(root);}
return factory($,root,root.document);};}
else{factory(jQuery,window,document);}}
(function($,window,document,undefined){"use strict";var DataTable=function(options)
{this.$=function(sSelector,oOpts)
{return this.api(true).$(sSelector,oOpts);};this._=function(sSelector,oOpts)
{return this.api(true).rows(sSelector,oOpts).data();};this.api=function(traditional)
{return traditional?new _Api(_fnSettingsFromNode(this[_ext.iApiIndex])):new _Api(this);};this.fnAddData=function(data,redraw)
{var api=this.api(true);var rows=$.isArray(data)&&($.isArray(data[0])||$.isPlainObject(data[0]))?api.rows.add(data):api.row.add(data);if(redraw===undefined||redraw){api.draw();}
return rows.flatten().toArray();};this.fnAdjustColumnSizing=function(bRedraw)
{var api=this.api(true).columns.adjust();var settings=api.settings()[0];var scroll=settings.oScroll;if(bRedraw===undefined||bRedraw){api.draw(false);}
else if(scroll.sX!==""||scroll.sY!==""){_fnScrollDraw(settings);}};this.fnClearTable=function(bRedraw)
{var api=this.api(true).clear();if(bRedraw===undefined||bRedraw){api.draw();}};this.fnClose=function(nTr)
{this.api(true).row(nTr).child.hide();};this.fnDeleteRow=function(target,callback,redraw)
{var api=this.api(true);var rows=api.rows(target);var settings=rows.settings()[0];var data=settings.aoData[rows[0][0]];rows.remove();if(callback){callback.call(this,settings,data);}
if(redraw===undefined||redraw){api.draw();}
return data;};this.fnDestroy=function(remove)
{this.api(true).destroy(remove);};this.fnDraw=function(complete)
{this.api(true).draw(complete);};this.fnFilter=function(sInput,iColumn,bRegex,bSmart,bShowGlobal,bCaseInsensitive)
{var api=this.api(true);if(iColumn===null||iColumn===undefined){api.search(sInput,bRegex,bSmart,bCaseInsensitive);}
else{api.column(iColumn).search(sInput,bRegex,bSmart,bCaseInsensitive);}
api.draw();};this.fnGetData=function(src,col)
{var api=this.api(true);if(src!==undefined){var type=src.nodeName?src.nodeName.toLowerCase():'';return col!==undefined||type=='td'||type=='th'?api.cell(src,col).data():api.row(src).data()||null;}
return api.data().toArray();};this.fnGetNodes=function(iRow)
{var api=this.api(true);return iRow!==undefined?api.row(iRow).node():api.rows().nodes().flatten().toArray();};this.fnGetPosition=function(node)
{var api=this.api(true);var nodeName=node.nodeName.toUpperCase();if(nodeName=='TR'){return api.row(node).index();}
else if(nodeName=='TD'||nodeName=='TH'){var cell=api.cell(node).index();return[cell.row,cell.columnVisible,cell.column];}
return null;};this.fnIsOpen=function(nTr)
{return this.api(true).row(nTr).child.isShown();};this.fnOpen=function(nTr,mHtml,sClass)
{return this.api(true)
.row(nTr)
.child(mHtml,sClass)
.show()
.child()[0];};this.fnPageChange=function(mAction,bRedraw)
{var api=this.api(true).page(mAction);if(bRedraw===undefined||bRedraw){api.draw(false);}};this.fnSetColumnVis=function(iCol,bShow,bRedraw)
{var api=this.api(true).column(iCol).visible(bShow);if(bRedraw===undefined||bRedraw){api.columns.adjust().draw();}};this.fnSettings=function()
{return _fnSettingsFromNode(this[_ext.iApiIndex]);};this.fnSort=function(aaSort)
{this.api(true).order(aaSort).draw();};this.fnSortListener=function(nNode,iColumn,fnCallback)
{this.api(true).order.listener(nNode,iColumn,fnCallback);};this.fnUpdate=function(mData,mRow,iColumn,bRedraw,bAction)
{var api=this.api(true);if(iColumn===undefined||iColumn===null){api.row(mRow).data(mData);}
else{api.cell(mRow,iColumn).data(mData);}
if(bAction===undefined||bAction){api.columns.adjust();}
if(bRedraw===undefined||bRedraw){api.draw();}
return 0;};this.fnVersionCheck=_ext.fnVersionCheck;var _that=this;var emptyInit=options===undefined;var len=this.length;if(emptyInit){options={};}
this.oApi=this.internal=_ext.internal;for(var fn in DataTable.ext.internal){if(fn){this[fn]=_fnExternApiFunc(fn);}}
this.each(function(){var o={};var oInit=len>1?_fnExtend(o,options,true):options;var i=0,iLen,j,jLen,k,kLen;var sId=this.getAttribute('id');var bInitHandedOff=false;var defaults=DataTable.defaults;var $this=$(this);if(this.nodeName.toLowerCase()!='table')
{_fnLog(null,0,'Non-table node initialisation ('+this.nodeName+')',2);return;}
_fnCompatOpts(defaults);_fnCompatCols(defaults.column);_fnCamelToHungarian(defaults,defaults,true);_fnCamelToHungarian(defaults.column,defaults.column,true);_fnCamelToHungarian(defaults,$.extend(oInit,$this.data()));var allSettings=DataTable.settings;for(i=0,iLen=allSettings.length;i<iLen;i++)
{var s=allSettings[i];if(s.nTable==this||s.nTHead.parentNode==this||(s.nTFoot&&s.nTFoot.parentNode==this))
{var bRetrieve=oInit.bRetrieve!==undefined?oInit.bRetrieve:defaults.bRetrieve;var bDestroy=oInit.bDestroy!==undefined?oInit.bDestroy:defaults.bDestroy;if(emptyInit||bRetrieve)
{return s.oInstance;}
else if(bDestroy)
{s.oInstance.fnDestroy();break;}
else
{_fnLog(s,0,'Cannot reinitialise DataTable',3);return;}}
if(s.sTableId==this.id)
{allSettings.splice(i,1);break;}}
if(sId===null||sId==="")
{sId="DataTables_Table_"+(DataTable.ext._unique++);this.id=sId;}
var oSettings=$.extend(true,{},DataTable.models.oSettings,{"sDestroyWidth":$this[0].style.width,"sInstance":sId,"sTableId":sId});oSettings.nTable=this;oSettings.oApi=_that.internal;oSettings.oInit=oInit;allSettings.push(oSettings);oSettings.oInstance=(_that.length===1)?_that:$this.dataTable();_fnCompatOpts(oInit);if(oInit.oLanguage)
{_fnLanguageCompat(oInit.oLanguage);}
if(oInit.aLengthMenu&&!oInit.iDisplayLength)
{oInit.iDisplayLength=$.isArray(oInit.aLengthMenu[0])?oInit.aLengthMenu[0][0]:oInit.aLengthMenu[0];}
oInit=_fnExtend($.extend(true,{},defaults),oInit);_fnMap(oSettings.oFeatures,oInit,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]);_fnMap(oSettings,oInit,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]);_fnMap(oSettings.oScroll,oInit,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);_fnMap(oSettings.oLanguage,oInit,"fnInfoCallback");_fnCallbackReg(oSettings,'aoDrawCallback',oInit.fnDrawCallback,'user');_fnCallbackReg(oSettings,'aoServerParams',oInit.fnServerParams,'user');_fnCallbackReg(oSettings,'aoStateSaveParams',oInit.fnStateSaveParams,'user');_fnCallbackReg(oSettings,'aoStateLoadParams',oInit.fnStateLoadParams,'user');_fnCallbackReg(oSettings,'aoStateLoaded',oInit.fnStateLoaded,'user');_fnCallbackReg(oSettings,'aoRowCallback',oInit.fnRowCallback,'user');_fnCallbackReg(oSettings,'aoRowCreatedCallback',oInit.fnCreatedRow,'user');_fnCallbackReg(oSettings,'aoHeaderCallback',oInit.fnHeaderCallback,'user');_fnCallbackReg(oSettings,'aoFooterCallback',oInit.fnFooterCallback,'user');_fnCallbackReg(oSettings,'aoInitComplete',oInit.fnInitComplete,'user');_fnCallbackReg(oSettings,'aoPreDrawCallback',oInit.fnPreDrawCallback,'user');oSettings.rowIdFn=_fnGetObjectDataFn(oInit.rowId);_fnBrowserDetect(oSettings);var oClasses=oSettings.oClasses;$.extend(oClasses,DataTable.ext.classes,oInit.oClasses);$this.addClass(oClasses.sTable);if(oSettings.iInitDisplayStart===undefined)
{oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}
if(oInit.iDeferLoading!==null)
{oSettings.bDeferLoading=true;var tmp=$.isArray(oInit.iDeferLoading);oSettings._iRecordsDisplay=tmp?oInit.iDeferLoading[0]:oInit.iDeferLoading;oSettings._iRecordsTotal=tmp?oInit.iDeferLoading[1]:oInit.iDeferLoading;}
var oLanguage=oSettings.oLanguage;$.extend(true,oLanguage,oInit.oLanguage);if(oLanguage.sUrl)
{$.ajax({dataType:'json',url:oLanguage.sUrl,success:function(json){_fnLanguageCompat(json);_fnCamelToHungarian(defaults.oLanguage,json);$.extend(true,oLanguage,json);_fnInitialise(oSettings);},error:function(){_fnInitialise(oSettings);}});bInitHandedOff=true;}
if(oInit.asStripeClasses===null)
{oSettings.asStripeClasses=[oClasses.sStripeOdd,oClasses.sStripeEven];}
var stripeClasses=oSettings.asStripeClasses;var rowOne=$this.children('tbody').find('tr').eq(0);if($.inArray(true,$.map(stripeClasses,function(el,i){return rowOne.hasClass(el);}))!==-1){$('tbody tr',this).removeClass(stripeClasses.join(' '));oSettings.asDestroyStripes=stripeClasses.slice();}
var anThs=[];var aoColumnsInit;var nThead=this.getElementsByTagName('thead');if(nThead.length!==0)
{_fnDetectHeader(oSettings.aoHeader,nThead[0]);anThs=_fnGetUniqueThs(oSettings);}
if(oInit.aoColumns===null)
{aoColumnsInit=[];for(i=0,iLen=anThs.length;i<iLen;i++)
{aoColumnsInit.push(null);}}
else
{aoColumnsInit=oInit.aoColumns;}
for(i=0,iLen=aoColumnsInit.length;i<iLen;i++)
{_fnAddColumn(oSettings,anThs?anThs[i]:null);}
_fnApplyColumnDefs(oSettings,oInit.aoColumnDefs,aoColumnsInit,function(iCol,oDef){_fnColumnOptions(oSettings,iCol,oDef);});if(rowOne.length){var a=function(cell,name){return cell.getAttribute('data-'+name)!==null?name:null;};$(rowOne[0]).children('th, td').each(function(i,cell){var col=oSettings.aoColumns[i];if(col.mData===i){var sort=a(cell,'sort')||a(cell,'order');var filter=a(cell,'filter')||a(cell,'search');if(sort!==null||filter!==null){col.mData={_:i+'.display',sort:sort!==null?i+'.@data-'+sort:undefined,type:sort!==null?i+'.@data-'+sort:undefined,filter:filter!==null?i+'.@data-'+filter:undefined};_fnColumnOptions(oSettings,i);}}});}
var features=oSettings.oFeatures;var loadedInit=function(){if(oInit.aaSorting===undefined){var sorting=oSettings.aaSorting;for(i=0,iLen=sorting.length;i<iLen;i++){sorting[i][1]=oSettings.aoColumns[i].asSorting[0];}}
_fnSortingClasses(oSettings);if(features.bSort){_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted){var aSort=_fnSortFlatten(oSettings);var sortedColumns={};$.each(aSort,function(i,val){sortedColumns[val.src]=val.dir;});_fnCallbackFire(oSettings,null,'order',[oSettings,aSort,sortedColumns]);_fnSortAria(oSettings);}});}
_fnCallbackReg(oSettings,'aoDrawCallback',function(){if(oSettings.bSorted||_fnDataSource(oSettings)==='ssp'||features.bDeferRender){_fnSortingClasses(oSettings);}},'sc');var captions=$this.children('caption').each(function(){this._captionSide=$(this).css('caption-side');});var thead=$this.children('thead');if(thead.length===0){thead=$('<thead/>').appendTo($this);}
oSettings.nTHead=thead[0];var tbody=$this.children('tbody');if(tbody.length===0){tbody=$('<tbody/>').appendTo($this);}
oSettings.nTBody=tbody[0];var tfoot=$this.children('tfoot');if(tfoot.length===0&&captions.length>0&&(oSettings.oScroll.sX!==""||oSettings.oScroll.sY!=="")){tfoot=$('<tfoot/>').appendTo($this);}
if(tfoot.length===0||tfoot.children().length===0){$this.addClass(oClasses.sNoFooter);}
else if(tfoot.length>0){oSettings.nTFoot=tfoot[0];_fnDetectHeader(oSettings.aoFooter,oSettings.nTFoot);}
if(oInit.aaData){for(i=0;i<oInit.aaData.length;i++){_fnAddData(oSettings,oInit.aaData[i]);}}
else if(oSettings.bDeferLoading||_fnDataSource(oSettings)=='dom'){_fnAddTr(oSettings,$(oSettings.nTBody).children('tr'));}
oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bInitialised=true;if(bInitHandedOff===false){_fnInitialise(oSettings);}};if(oInit.bStateSave)
{features.bStateSave=true;_fnCallbackReg(oSettings,'aoDrawCallback',_fnSaveState,'state_save');_fnLoadState(oSettings,oInit,loadedInit);}
else{loadedInit();}});_that=null;return this;};var _ext;var _Api;var _api_register;var _api_registerPlural;var _re_dic={};var _re_new_lines=/[\r\n]/g;var _re_html=/<.*?>/g;var _re_date=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/;var _re_escape_regex=new RegExp('(\\'+['/','.','*','+','?','|','(',')','[',']','{','}','\\','$','^','-'].join('|\\')+')','g');var _re_formatted_numeric=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi;var _empty=function(d){return!d||d===true||d==='-'?true:false;};var _intVal=function(s){var integer=parseInt(s,10);return!isNaN(integer)&&isFinite(s)?integer:null;};var _numToDecimal=function(num,decimalPoint){if(!_re_dic[decimalPoint]){_re_dic[decimalPoint]=new RegExp(_fnEscapeRegex(decimalPoint),'g');}
return typeof num==='string'&&decimalPoint!=='.'?num.replace(/\./g,'').replace(_re_dic[decimalPoint],'.'):num;};var _isNumber=function(d,decimalPoint,formatted){var strType=typeof d==='string';if(_empty(d)){return true;}
if(decimalPoint&&strType){d=_numToDecimal(d,decimalPoint);}
if(formatted&&strType){d=d.replace(_re_formatted_numeric,'');}
return!isNaN(parseFloat(d))&&isFinite(d);};var _isHtml=function(d){return _empty(d)||typeof d==='string';};var _htmlNumeric=function(d,decimalPoint,formatted){if(_empty(d)){return true;}
var html=_isHtml(d);return!html?null:_isNumber(_stripHtml(d),decimalPoint,formatted)?true:null;};var _pluck=function(a,prop,prop2){var out=[];var i=0,ien=a.length;if(prop2!==undefined){for(;i<ien;i++){if(a[i]&&a[i][prop]){out.push(a[i][prop][prop2]);}}}
else{for(;i<ien;i++){if(a[i]){out.push(a[i][prop]);}}}
return out;};var _pluck_order=function(a,order,prop,prop2)
{var out=[];var i=0,ien=order.length;if(prop2!==undefined){for(;i<ien;i++){if(a[order[i]][prop]){out.push(a[order[i]][prop][prop2]);}}}
else{for(;i<ien;i++){out.push(a[order[i]][prop]);}}
return out;};var _range=function(len,start)
{var out=[];var end;if(start===undefined){start=0;end=len;}
else{end=start;start=len;}
for(var i=start;i<end;i++){out.push(i);}
return out;};var _removeEmpty=function(a)
{var out=[];for(var i=0,ien=a.length;i<ien;i++){if(a[i]){out.push(a[i]);}}
return out;};var _stripHtml=function(d){return d.replace(_re_html,'');};var _areAllUnique=function(src){if(src.length<2){return true;}
var sorted=src.slice().sort();var last=sorted[0];for(var i=1,ien=sorted.length;i<ien;i++){if(sorted[i]===last){return false;}
last=sorted[i];}
return true;};var _unique=function(src)
{if(_areAllUnique(src)){return src.slice();}
var
out=[],val,i,ien=src.length,j,k=0;again:for(i=0;i<ien;i++){val=src[i];for(j=0;j<k;j++){if(out[j]===val){continue again;}}
out.push(val);k++;}
return out;};DataTable.util={throttle:function(fn,freq){var
frequency=freq!==undefined?freq:200,last,timer;return function(){var
that=this,now=+new Date(),args=arguments;if(last&&now<last+frequency){clearTimeout(timer);timer=setTimeout(function(){last=undefined;fn.apply(that,args);},frequency);}
else{last=now;fn.apply(that,args);}};},escapeRegex:function(val){return val.replace(_re_escape_regex,'\\$1');}};function _fnHungarianMap(o)
{var
hungarian='a aa ai ao as b fn i m o s ',match,newKey,map={};$.each(o,function(key,val){match=key.match(/^([^A-Z]+?)([A-Z])/);if(match&&hungarian.indexOf(match[1]+' ')!==-1)
{newKey=key.replace(match[0],match[2].toLowerCase());map[newKey]=key;if(match[1]==='o')
{_fnHungarianMap(o[key]);}}});o._hungarianMap=map;}
function _fnCamelToHungarian(src,user,force)
{if(!src._hungarianMap){_fnHungarianMap(src);}
var hungarianKey;$.each(user,function(key,val){hungarianKey=src._hungarianMap[key];if(hungarianKey!==undefined&&(force||user[hungarianKey]===undefined))
{if(hungarianKey.charAt(0)==='o')
{if(!user[hungarianKey]){user[hungarianKey]={};}
$.extend(true,user[hungarianKey],user[key]);_fnCamelToHungarian(src[hungarianKey],user[hungarianKey],force);}
else{user[hungarianKey]=user[key];}}});}
function _fnLanguageCompat(lang)
{var defaults=DataTable.defaults.oLanguage;var zeroRecords=lang.sZeroRecords;if(!lang.sEmptyTable&&zeroRecords&&defaults.sEmptyTable==="No data available in table")
{_fnMap(lang,lang,'sZeroRecords','sEmptyTable');}
if(!lang.sLoadingRecords&&zeroRecords&&defaults.sLoadingRecords==="Loading...")
{_fnMap(lang,lang,'sZeroRecords','sLoadingRecords');}
if(lang.sInfoThousands){lang.sThousands=lang.sInfoThousands;}
var decimal=lang.sDecimal;if(decimal){_addNumericSort(decimal);}}
var _fnCompatMap=function(o,knew,old){if(o[knew]!==undefined){o[old]=o[knew];}};function _fnCompatOpts(init)
{_fnCompatMap(init,'ordering','bSort');_fnCompatMap(init,'orderMulti','bSortMulti');_fnCompatMap(init,'orderClasses','bSortClasses');_fnCompatMap(init,'orderCellsTop','bSortCellsTop');_fnCompatMap(init,'order','aaSorting');_fnCompatMap(init,'orderFixed','aaSortingFixed');_fnCompatMap(init,'paging','bPaginate');_fnCompatMap(init,'pagingType','sPaginationType');_fnCompatMap(init,'pageLength','iDisplayLength');_fnCompatMap(init,'searching','bFilter');if(typeof init.sScrollX==='boolean'){init.sScrollX=init.sScrollX?'100%':'';}
if(typeof init.scrollX==='boolean'){init.scrollX=init.scrollX?'100%':'';}
var searchCols=init.aoSearchCols;if(searchCols){for(var i=0,ien=searchCols.length;i<ien;i++){if(searchCols[i]){_fnCamelToHungarian(DataTable.models.oSearch,searchCols[i]);}}}}
function _fnCompatCols(init)
{_fnCompatMap(init,'orderable','bSortable');_fnCompatMap(init,'orderData','aDataSort');_fnCompatMap(init,'orderSequence','asSorting');_fnCompatMap(init,'orderDataType','sortDataType');var dataSort=init.aDataSort;if(typeof dataSort==='number'&&!$.isArray(dataSort)){init.aDataSort=[dataSort];}}
function _fnBrowserDetect(settings)
{if(!DataTable.__browser){var browser={};DataTable.__browser=browser;var n=$('<div/>')
.css({position:'fixed',top:0,left:$(window).scrollLeft()*-1,height:1,width:1,overflow:'hidden'})
.append($('<div/>')
.css({position:'absolute',top:1,left:1,width:100,overflow:'scroll'})
.append($('<div/>')
.css({width:'100%',height:10})))
.appendTo('body');var outer=n.children();var inner=outer.children();browser.barWidth=outer[0].offsetWidth-outer[0].clientWidth;browser.bScrollOversize=inner[0].offsetWidth===100&&outer[0].clientWidth!==100;browser.bScrollbarLeft=Math.round(inner.offset().left)!==1;browser.bBounding=n[0].getBoundingClientRect().width?true:false;n.remove();}
$.extend(settings.oBrowser,DataTable.__browser);settings.oScroll.iBarWidth=DataTable.__browser.barWidth;}
function _fnReduce(that,fn,init,start,end,inc)
{var
i=start,value,isSet=false;if(init!==undefined){value=init;isSet=true;}
while(i!==end){if(!that.hasOwnProperty(i)){continue;}
value=isSet?fn(value,that[i],i,that):that[i];isSet=true;i+=inc;}
return value;}
function _fnAddColumn(oSettings,nTh)
{var oDefaults=DataTable.defaults.column;var iCol=oSettings.aoColumns.length;var oCol=$.extend({},DataTable.models.oColumn,oDefaults,{"nTh":nTh?nTh:document.createElement('th'),"sTitle":oDefaults.sTitle?oDefaults.sTitle:nTh?nTh.innerHTML:'',"aDataSort":oDefaults.aDataSort?oDefaults.aDataSort:[iCol],"mData":oDefaults.mData?oDefaults.mData:iCol,idx:iCol});oSettings.aoColumns.push(oCol);var searchCols=oSettings.aoPreSearchCols;searchCols[iCol]=$.extend({},DataTable.models.oSearch,searchCols[iCol]);_fnColumnOptions(oSettings,iCol,$(nTh).data());}
function _fnColumnOptions(oSettings,iCol,oOptions)
{var oCol=oSettings.aoColumns[iCol];var oClasses=oSettings.oClasses;var th=$(oCol.nTh);if(!oCol.sWidthOrig){oCol.sWidthOrig=th.attr('width')||null;var t=(th.attr('style')||'').match(/width:\s*(\d+[pxem%]+)/);if(t){oCol.sWidthOrig=t[1];}}
if(oOptions!==undefined&&oOptions!==null)
{_fnCompatCols(oOptions);_fnCamelToHungarian(DataTable.defaults.column,oOptions);if(oOptions.mDataProp!==undefined&&!oOptions.mData)
{oOptions.mData=oOptions.mDataProp;}
if(oOptions.sType)
{oCol._sManualType=oOptions.sType;}
if(oOptions.className&&!oOptions.sClass)
{oOptions.sClass=oOptions.className;}
if(oOptions.sClass){th.addClass(oOptions.sClass);}
$.extend(oCol,oOptions);_fnMap(oCol,oOptions,"sWidth","sWidthOrig");if(oOptions.iDataSort!==undefined)
{oCol.aDataSort=[oOptions.iDataSort];}
_fnMap(oCol,oOptions,"aDataSort");}
var mDataSrc=oCol.mData;var mData=_fnGetObjectDataFn(mDataSrc);var mRender=oCol.mRender?_fnGetObjectDataFn(oCol.mRender):null;var attrTest=function(src){return typeof src==='string'&&src.indexOf('@')!==-1;};oCol._bAttrSrc=$.isPlainObject(mDataSrc)&&(attrTest(mDataSrc.sort)||attrTest(mDataSrc.type)||attrTest(mDataSrc.filter));oCol._setter=null;oCol.fnGetData=function(rowData,type,meta){var innerData=mData(rowData,type,undefined,meta);return mRender&&type?mRender(innerData,type,rowData,meta):innerData;};oCol.fnSetData=function(rowData,val,meta){return _fnSetObjectDataFn(mDataSrc)(rowData,val,meta);};if(typeof mDataSrc!=='number'){oSettings._rowReadObject=true;}
if(!oSettings.oFeatures.bSort)
{oCol.bSortable=false;th.addClass(oClasses.sSortableNone);}
var bAsc=$.inArray('asc',oCol.asSorting)!==-1;var bDesc=$.inArray('desc',oCol.asSorting)!==-1;if(!oCol.bSortable||(!bAsc&&!bDesc))
{oCol.sSortingClass=oClasses.sSortableNone;oCol.sSortingClassJUI="";}
else if(bAsc&&!bDesc)
{oCol.sSortingClass=oClasses.sSortableAsc;oCol.sSortingClassJUI=oClasses.sSortJUIAscAllowed;}
else if(!bAsc&&bDesc)
{oCol.sSortingClass=oClasses.sSortableDesc;oCol.sSortingClassJUI=oClasses.sSortJUIDescAllowed;}
else
{oCol.sSortingClass=oClasses.sSortable;oCol.sSortingClassJUI=oClasses.sSortJUI;}}
function _fnAdjustColumnSizing(settings)
{if(settings.oFeatures.bAutoWidth!==false)
{var columns=settings.aoColumns;_fnCalculateColumnWidths(settings);for(var i=0,iLen=columns.length;i<iLen;i++)
{columns[i].nTh.style.width=columns[i].sWidth;}}
var scroll=settings.oScroll;if(scroll.sY!==''||scroll.sX!=='')
{_fnScrollDraw(settings);}
_fnCallbackFire(settings,null,'column-sizing',[settings]);}
function _fnVisibleToColumnIndex(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');return typeof aiVis[iMatch]==='number'?aiVis[iMatch]:null;}
function _fnColumnIndexToVisible(oSettings,iMatch)
{var aiVis=_fnGetColumns(oSettings,'bVisible');var iPos=$.inArray(iMatch,aiVis);return iPos!==-1?iPos:null;}
function _fnVisbleColumns(oSettings)
{var vis=0;$.each(oSettings.aoColumns,function(i,col){if(col.bVisible&&$(col.nTh).css('display')!=='none'){vis++;}});return vis;}
function _fnGetColumns(oSettings,sParam)
{var a=[];$.map(oSettings.aoColumns,function(val,i){if(val[sParam]){a.push(i);}});return a;}
function _fnColumnTypes(settings)
{var columns=settings.aoColumns;var data=settings.aoData;var types=DataTable.ext.type.detect;var i,ien,j,jen,k,ken;var col,cell,detectedType,cache;for(i=0,ien=columns.length;i<ien;i++){col=columns[i];cache=[];if(!col.sType&&col._sManualType){col.sType=col._sManualType;}
else if(!col.sType){for(j=0,jen=types.length;j<jen;j++){for(k=0,ken=data.length;k<ken;k++){if(cache[k]===undefined){cache[k]=_fnGetCellData(settings,k,i,'type');}
detectedType=types[j](cache[k],settings);if(!detectedType&&j!==types.length-1){break;}
if(detectedType==='html'){break;}}
if(detectedType){col.sType=detectedType;break;}}
if(!col.sType){col.sType='string';}}}}
function _fnApplyColumnDefs(oSettings,aoColDefs,aoCols,fn)
{var i,iLen,j,jLen,k,kLen,def;var columns=oSettings.aoColumns;if(aoColDefs)
{for(i=aoColDefs.length-1;i>=0;i--)
{def=aoColDefs[i];var aTargets=def.targets!==undefined?def.targets:def.aTargets;if(!$.isArray(aTargets))
{aTargets=[aTargets];}
for(j=0,jLen=aTargets.length;j<jLen;j++)
{if(typeof aTargets[j]==='number'&&aTargets[j]>=0)
{while(columns.length<=aTargets[j])
{_fnAddColumn(oSettings);}
fn(aTargets[j],def);}
else if(typeof aTargets[j]==='number'&&aTargets[j]<0)
{fn(columns.length+aTargets[j],def);}
else if(typeof aTargets[j]==='string')
{for(k=0,kLen=columns.length;k<kLen;k++)
{if(aTargets[j]=="_all"||$(columns[k].nTh).hasClass(aTargets[j]))
{fn(k,def);}}}}}}
if(aoCols)
{for(i=0,iLen=aoCols.length;i<iLen;i++)
{fn(i,aoCols[i]);}}}
function _fnAddData(oSettings,aDataIn,nTr,anTds)
{var iRow=oSettings.aoData.length;var oData=$.extend(true,{},DataTable.models.oRow,{src:nTr?'dom':'data',idx:iRow});oData._aData=aDataIn;oSettings.aoData.push(oData);var nTd,sThisType;var columns=oSettings.aoColumns;for(var i=0,iLen=columns.length;i<iLen;i++)
{columns[i].sType=null;}
oSettings.aiDisplayMaster.push(iRow);var id=oSettings.rowIdFn(aDataIn);if(id!==undefined){oSettings.aIds[id]=oData;}
if(nTr||!oSettings.oFeatures.bDeferRender)
{_fnCreateTr(oSettings,iRow,nTr,anTds);}
return iRow;}
function _fnAddTr(settings,trs)
{var row;if(!(trs instanceof $)){trs=$(trs);}
return trs.map(function(i,el){row=_fnGetRowElements(settings,el);return _fnAddData(settings,row.data,el,row.cells);});}
function _fnNodeToDataIndex(oSettings,n)
{return(n._DT_RowIndex!==undefined)?n._DT_RowIndex:null;}
function _fnNodeToColumnIndex(oSettings,iRow,n)
{return $.inArray(n,oSettings.aoData[iRow].anCells);}
function _fnGetCellData(settings,rowIdx,colIdx,type)
{var draw=settings.iDraw;var col=settings.aoColumns[colIdx];var rowData=settings.aoData[rowIdx]._aData;var defaultContent=col.sDefaultContent;var cellData=col.fnGetData(rowData,type,{settings:settings,row:rowIdx,col:colIdx});if(cellData===undefined){if(settings.iDrawError!=draw&&defaultContent===null){_fnLog(settings,0,"Requested unknown parameter "+
(typeof col.mData=='function'?'{function}':"'"+col.mData+"'")+
" for row "+rowIdx+", column "+colIdx,4);settings.iDrawError=draw;}
return defaultContent;}
if((cellData===rowData||cellData===null)&&defaultContent!==null&&type!==undefined){cellData=defaultContent;}
else if(typeof cellData==='function'){return cellData.call(rowData);}
if(cellData===null&&type=='display'){return'';}
return cellData;}
function _fnSetCellData(settings,rowIdx,colIdx,val)
{var col=settings.aoColumns[colIdx];var rowData=settings.aoData[rowIdx]._aData;col.fnSetData(rowData,val,{settings:settings,row:rowIdx,col:colIdx});}
var __reArray=/\[.*?\]$/;var __reFn=/\(\)$/;function _fnSplitObjNotation(str)
{return $.map(str.match(/(\\.|[^\.])+/g)||[''],function(s){return s.replace(/\\\./g,'.');});}
function _fnGetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{var o={};$.each(mSource,function(key,val){if(val){o[key]=_fnGetObjectDataFn(val);}});return function(data,type,row,meta){var t=o[type]||o._;return t!==undefined?t(data,type,row,meta):data;};}
else if(mSource===null)
{return function(data){return data;};}
else if(typeof mSource==='function')
{return function(data,type,row,meta){return mSource(data,type,row,meta);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var fetchData=function(data,type,src){var arrayNotation,funcNotation,out,innerSrc;if(src!=="")
{var a=_fnSplitObjNotation(src);for(var i=0,iLen=a.length;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');if(a[i]!==""){data=data[a[i]];}
out=[];a.splice(0,i+1);innerSrc=a.join('.');if($.isArray(data)){for(var j=0,jLen=data.length;j<jLen;j++){out.push(fetchData(data[j],type,innerSrc));}}
var join=arrayNotation[0].substring(1,arrayNotation[0].length-1);data=(join==="")?out:out.join(join);break;}
else if(funcNotation)
{a[i]=a[i].replace(__reFn,'');data=data[a[i]]();continue;}
if(data===null||data[a[i]]===undefined)
{return undefined;}
data=data[a[i]];}}
return data;};return function(data,type){return fetchData(data,type,mSource);};}
else
{return function(data,type){return data[mSource];};}}
function _fnSetObjectDataFn(mSource)
{if($.isPlainObject(mSource))
{return _fnSetObjectDataFn(mSource._);}
else if(mSource===null)
{return function(){};}
else if(typeof mSource==='function')
{return function(data,val,meta){mSource(data,'set',val,meta);};}
else if(typeof mSource==='string'&&(mSource.indexOf('.')!==-1||mSource.indexOf('[')!==-1||mSource.indexOf('(')!==-1))
{var setData=function(data,val,src){var a=_fnSplitObjNotation(src),b;var aLast=a[a.length-1];var arrayNotation,funcNotation,o,innerSrc;for(var i=0,iLen=a.length-1;i<iLen;i++)
{arrayNotation=a[i].match(__reArray);funcNotation=a[i].match(__reFn);if(arrayNotation)
{a[i]=a[i].replace(__reArray,'');data[a[i]]=[];b=a.slice();b.splice(0,i+1);innerSrc=b.join('.');if($.isArray(val))
{for(var j=0,jLen=val.length;j<jLen;j++)
{o={};setData(o,val[j],innerSrc);data[a[i]].push(o);}}
else
{data[a[i]]=val;}
return;}
else if(funcNotation)
{a[i]=a[i].replace(__reFn,'');data=data[a[i]](val);}
if(data[a[i]]===null||data[a[i]]===undefined)
{data[a[i]]={};}
data=data[a[i]];}
if(aLast.match(__reFn))
{data=data[aLast.replace(__reFn,'')](val);}
else
{data[aLast.replace(__reArray,'')]=val;}};return function(data,val){return setData(data,val,mSource);};}
else
{return function(data,val){data[mSource]=val;};}}
function _fnGetDataMaster(settings)
{return _pluck(settings.aoData,'_aData');}
function _fnClearTable(settings)
{settings.aoData.length=0;settings.aiDisplayMaster.length=0;settings.aiDisplay.length=0;settings.aIds={};}
function _fnDeleteIndex(a,iTarget,splice)
{var iTargetIndex=-1;for(var i=0,iLen=a.length;i<iLen;i++)
{if(a[i]==iTarget)
{iTargetIndex=i;}
else if(a[i]>iTarget)
{a[i]--;}}
if(iTargetIndex!=-1&&splice===undefined)
{a.splice(iTargetIndex,1);}}
function _fnInvalidate(settings,rowIdx,src,colIdx)
{var row=settings.aoData[rowIdx];var i,ien;var cellWrite=function(cell,col){while(cell.childNodes.length){cell.removeChild(cell.firstChild);}
cell.innerHTML=_fnGetCellData(settings,rowIdx,col,'display');};if(src==='dom'||((!src||src==='auto')&&row.src==='dom')){row._aData=_fnGetRowElements(settings,row,colIdx,colIdx===undefined?undefined:row._aData)
.data;}
else{var cells=row.anCells;if(cells){if(colIdx!==undefined){cellWrite(cells[colIdx],colIdx);}
else{for(i=0,ien=cells.length;i<ien;i++){cellWrite(cells[i],i);}}}}
row._aSortData=null;row._aFilterData=null;var cols=settings.aoColumns;if(colIdx!==undefined){cols[colIdx].sType=null;}
else{for(i=0,ien=cols.length;i<ien;i++){cols[i].sType=null;}
_fnRowAttributes(settings,row);}}
function _fnGetRowElements(settings,row,colIdx,d)
{var
tds=[],td=row.firstChild,name,col,o,i=0,contents,columns=settings.aoColumns,objectRead=settings._rowReadObject;d=d!==undefined?d:objectRead?{}:[];var attr=function(str,td){if(typeof str==='string'){var idx=str.indexOf('@');if(idx!==-1){var attr=str.substring(idx+1);var setter=_fnSetObjectDataFn(str);setter(d,td.getAttribute(attr));}}};var cellProcess=function(cell){if(colIdx===undefined||colIdx===i){col=columns[i];contents=$.trim(cell.innerHTML);if(col&&col._bAttrSrc){var setter=_fnSetObjectDataFn(col.mData._);setter(d,contents);attr(col.mData.sort,cell);attr(col.mData.type,cell);attr(col.mData.filter,cell);}
else{if(objectRead){if(!col._setter){col._setter=_fnSetObjectDataFn(col.mData);}
col._setter(d,contents);}
else{d[i]=contents;}}}
i++;};if(td){while(td){name=td.nodeName.toUpperCase();if(name=="TD"||name=="TH"){cellProcess(td);tds.push(td);}
td=td.nextSibling;}}
else{tds=row.anCells;for(var j=0,jen=tds.length;j<jen;j++){cellProcess(tds[j]);}}
var rowNode=row.firstChild?row:row.nTr;if(rowNode){var id=rowNode.getAttribute('id');if(id){_fnSetObjectDataFn(settings.rowId)(d,id);}}
return{data:d,cells:tds};}
function _fnCreateTr(oSettings,iRow,nTrIn,anTds)
{var
row=oSettings.aoData[iRow],rowData=row._aData,cells=[],nTr,nTd,oCol,i,iLen;if(row.nTr===null)
{nTr=nTrIn||document.createElement('tr');row.nTr=nTr;row.anCells=cells;nTr._DT_RowIndex=iRow;_fnRowAttributes(oSettings,row);for(i=0,iLen=oSettings.aoColumns.length;i<iLen;i++)
{oCol=oSettings.aoColumns[i];nTd=nTrIn?anTds[i]:document.createElement(oCol.sCellType);nTd._DT_CellIndex={row:iRow,column:i};cells.push(nTd);if((!nTrIn||oCol.mRender||oCol.mData!==i)&&(!$.isPlainObject(oCol.mData)||oCol.mData._!==i+'.display')){nTd.innerHTML=_fnGetCellData(oSettings,iRow,i,'display');}
if(oCol.sClass)
{nTd.className+=' '+oCol.sClass;}
if(oCol.bVisible&&!nTrIn)
{nTr.appendChild(nTd);}
else if(!oCol.bVisible&&nTrIn)
{nTd.parentNode.removeChild(nTd);}
if(oCol.fnCreatedCell)
{oCol.fnCreatedCell.call(oSettings.oInstance,nTd,_fnGetCellData(oSettings,iRow,i),rowData,iRow,i);}}
_fnCallbackFire(oSettings,'aoRowCreatedCallback',null,[nTr,rowData,iRow]);}
row.nTr.setAttribute('role','row');}
function _fnRowAttributes(settings,row)
{var tr=row.nTr;var data=row._aData;if(tr){var id=settings.rowIdFn(data);if(id){tr.id=id;}
if(data.DT_RowClass){var a=data.DT_RowClass.split(' ');row.__rowc=row.__rowc?_unique(row.__rowc.concat(a)):a;$(tr)
.removeClass(row.__rowc.join(' '))
.addClass(data.DT_RowClass);}
if(data.DT_RowAttr){$(tr).attr(data.DT_RowAttr);}
if(data.DT_RowData){$(tr).data(data.DT_RowData);}}}
function _fnBuildHead(oSettings)
{var i,ien,cell,row,column;var thead=oSettings.nTHead;var tfoot=oSettings.nTFoot;var createHeader=$('th, td',thead).length===0;var classes=oSettings.oClasses;var columns=oSettings.aoColumns;if(createHeader){row=$('<tr/>').appendTo(thead);}
for(i=0,ien=columns.length;i<ien;i++){column=columns[i];cell=$(column.nTh).addClass(column.sClass);if(createHeader){cell.appendTo(row);}
if(oSettings.oFeatures.bSort){cell.addClass(column.sSortingClass);if(column.bSortable!==false){cell
.attr('tabindex',oSettings.iTabIndex)
.attr('aria-controls',oSettings.sTableId);_fnSortAttachListener(oSettings,column.nTh,i);}}
if(column.sTitle!=cell[0].innerHTML){cell.html(column.sTitle);}
_fnRenderer(oSettings,'header')(oSettings,cell,column,classes);}
if(createHeader){_fnDetectHeader(oSettings.aoHeader,thead);}
$(thead).find('>tr').attr('role','row');$(thead).find('>tr>th, >tr>td').addClass(classes.sHeaderTH);$(tfoot).find('>tr>th, >tr>td').addClass(classes.sFooterTH);if(tfoot!==null){var cells=oSettings.aoFooter[0];for(i=0,ien=cells.length;i<ien;i++){column=columns[i];column.nTf=cells[i].cell;if(column.sClass){$(column.nTf).addClass(column.sClass);}}}}
function _fnDrawHead(oSettings,aoSource,bIncludeHidden)
{var i,iLen,j,jLen,k,kLen,n,nLocalTr;var aoLocal=[];var aApplied=[];var iColumns=oSettings.aoColumns.length;var iRowspan,iColspan;if(!aoSource)
{return;}
if(bIncludeHidden===undefined)
{bIncludeHidden=false;}
for(i=0,iLen=aoSource.length;i<iLen;i++)
{aoLocal[i]=aoSource[i].slice();aoLocal[i].nTr=aoSource[i].nTr;for(j=iColumns-1;j>=0;j--)
{if(!oSettings.aoColumns[j].bVisible&&!bIncludeHidden)
{aoLocal[i].splice(j,1);}}
aApplied.push([]);}
for(i=0,iLen=aoLocal.length;i<iLen;i++)
{nLocalTr=aoLocal[i].nTr;if(nLocalTr)
{while((n=nLocalTr.firstChild))
{nLocalTr.removeChild(n);}}
for(j=0,jLen=aoLocal[i].length;j<jLen;j++)
{iRowspan=1;iColspan=1;if(aApplied[i][j]===undefined)
{nLocalTr.appendChild(aoLocal[i][j].cell);aApplied[i][j]=1;while(aoLocal[i+iRowspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i+iRowspan][j].cell)
{aApplied[i+iRowspan][j]=1;iRowspan++;}
while(aoLocal[i][j+iColspan]!==undefined&&aoLocal[i][j].cell==aoLocal[i][j+iColspan].cell)
{for(k=0;k<iRowspan;k++)
{aApplied[i+k][j+iColspan]=1;}
iColspan++;}
$(aoLocal[i][j].cell)
.attr('rowspan',iRowspan)
.attr('colspan',iColspan);}}}}
function _fnDraw(oSettings)
{var aPreDraw=_fnCallbackFire(oSettings,'aoPreDrawCallback','preDraw',[oSettings]);if($.inArray(false,aPreDraw)!==-1)
{_fnProcessingDisplay(oSettings,false);return;}
var i,iLen,n;var anRows=[];var iRowCount=0;var asStripeClasses=oSettings.asStripeClasses;var iStripes=asStripeClasses.length;var iOpenRows=oSettings.aoOpenRows.length;var oLang=oSettings.oLanguage;var iInitDisplayStart=oSettings.iInitDisplayStart;var bServerSide=_fnDataSource(oSettings)=='ssp';var aiDisplay=oSettings.aiDisplay;oSettings.bDrawing=true;if(iInitDisplayStart!==undefined&&iInitDisplayStart!==-1)
{oSettings._iDisplayStart=bServerSide?iInitDisplayStart:iInitDisplayStart>=oSettings.fnRecordsDisplay()?0:iInitDisplayStart;oSettings.iInitDisplayStart=-1;}
var iDisplayStart=oSettings._iDisplayStart;var iDisplayEnd=oSettings.fnDisplayEnd();if(oSettings.bDeferLoading)
{oSettings.bDeferLoading=false;oSettings.iDraw++;_fnProcessingDisplay(oSettings,false);}
else if(!bServerSide)
{oSettings.iDraw++;}
else if(!oSettings.bDestroying&&!_fnAjaxUpdate(oSettings))
{return;}
if(aiDisplay.length!==0)
{var iStart=bServerSide?0:iDisplayStart;var iEnd=bServerSide?oSettings.aoData.length:iDisplayEnd;for(var j=iStart;j<iEnd;j++)
{var iDataIndex=aiDisplay[j];var aoData=oSettings.aoData[iDataIndex];if(aoData.nTr===null)
{_fnCreateTr(oSettings,iDataIndex);}
var nRow=aoData.nTr;if(iStripes!==0)
{var sStripe=asStripeClasses[iRowCount%iStripes];if(aoData._sRowStripe!=sStripe)
{$(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);aoData._sRowStripe=sStripe;}}
_fnCallbackFire(oSettings,'aoRowCallback',null,[nRow,aoData._aData,iRowCount,j]);anRows.push(nRow);iRowCount++;}}
else
{var sZero=oLang.sZeroRecords;if(oSettings.iDraw==1&&_fnDataSource(oSettings)=='ajax')
{sZero=oLang.sLoadingRecords;}
else if(oLang.sEmptyTable&&oSettings.fnRecordsTotal()===0)
{sZero=oLang.sEmptyTable;}
anRows[0]=$('<tr/>',{'class':iStripes?asStripeClasses[0]:''})
.append($('<td />',{'valign':'top','colSpan':_fnVisbleColumns(oSettings),'class':oSettings.oClasses.sRowEmpty}).html(sZero))[0];}
_fnCallbackFire(oSettings,'aoHeaderCallback','header',[$(oSettings.nTHead).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);_fnCallbackFire(oSettings,'aoFooterCallback','footer',[$(oSettings.nTFoot).children('tr')[0],_fnGetDataMaster(oSettings),iDisplayStart,iDisplayEnd,aiDisplay]);var body=$(oSettings.nTBody);body.children().detach();body.append($(anRows));_fnCallbackFire(oSettings,'aoDrawCallback','draw',[oSettings]);oSettings.bSorted=false;oSettings.bFiltered=false;oSettings.bDrawing=false;}
function _fnReDraw(settings,holdPosition)
{var
features=settings.oFeatures,sort=features.bSort,filter=features.bFilter;if(sort){_fnSort(settings);}
if(filter){_fnFilterComplete(settings,settings.oPreviousSearch);}
else{settings.aiDisplay=settings.aiDisplayMaster.slice();}
if(holdPosition!==true){settings._iDisplayStart=0;}
settings._drawHold=holdPosition;_fnDraw(settings);settings._drawHold=false;}
function _fnAddOptionsHtml(oSettings)
{var classes=oSettings.oClasses;var table=$(oSettings.nTable);var holding=$('<div/>').insertBefore(table);var features=oSettings.oFeatures;var insert=$('<div/>',{id:oSettings.sTableId+'_wrapper','class':classes.sWrapper+(oSettings.nTFoot?'':' '+classes.sNoFooter)});oSettings.nHolding=holding[0];oSettings.nTableWrapper=insert[0];oSettings.nTableReinsertBefore=oSettings.nTable.nextSibling;var aDom=oSettings.sDom.split('');var featureNode,cOption,nNewNode,cNext,sAttr,j;for(var i=0;i<aDom.length;i++)
{featureNode=null;cOption=aDom[i];if(cOption=='<')
{nNewNode=$('<div/>')[0];cNext=aDom[i+1];if(cNext=="'"||cNext=='"')
{sAttr="";j=2;while(aDom[i+j]!=cNext)
{sAttr+=aDom[i+j];j++;}
if(sAttr=="H")
{sAttr=classes.sJUIHeader;}
else if(sAttr=="F")
{sAttr=classes.sJUIFooter;}
if(sAttr.indexOf('.')!=-1)
{var aSplit=sAttr.split('.');nNewNode.id=aSplit[0].substr(1,aSplit[0].length-1);nNewNode.className=aSplit[1];}
else if(sAttr.charAt(0)=="#")
{nNewNode.id=sAttr.substr(1,sAttr.length-1);}
else
{nNewNode.className=sAttr;}
i+=j;}
insert.append(nNewNode);insert=$(nNewNode);}
else if(cOption=='>')
{insert=insert.parent();}
else if(cOption=='l'&&features.bPaginate&&features.bLengthChange)
{featureNode=_fnFeatureHtmlLength(oSettings);}
else if(cOption=='f'&&features.bFilter)
{featureNode=_fnFeatureHtmlFilter(oSettings);}
else if(cOption=='r'&&features.bProcessing)
{featureNode=_fnFeatureHtmlProcessing(oSettings);}
else if(cOption=='t')
{featureNode=_fnFeatureHtmlTable(oSettings);}
else if(cOption=='i'&&features.bInfo)
{featureNode=_fnFeatureHtmlInfo(oSettings);}
else if(cOption=='p'&&features.bPaginate)
{featureNode=_fnFeatureHtmlPaginate(oSettings);}
else if(DataTable.ext.feature.length!==0)
{var aoFeatures=DataTable.ext.feature;for(var k=0,kLen=aoFeatures.length;k<kLen;k++)
{if(cOption==aoFeatures[k].cFeature)
{featureNode=aoFeatures[k].fnInit(oSettings);break;}}}
if(featureNode)
{var aanFeatures=oSettings.aanFeatures;if(!aanFeatures[cOption])
{aanFeatures[cOption]=[];}
aanFeatures[cOption].push(featureNode);insert.append(featureNode);}}
holding.replaceWith(insert);oSettings.nHolding=null;}
function _fnDetectHeader(aLayout,nThead)
{var nTrs=$(nThead).children('tr');var nTr,nCell;var i,k,l,iLen,jLen,iColShifted,iColumn,iColspan,iRowspan;var bUnique;var fnShiftCol=function(a,i,j){var k=a[i];while(k[j]){j++;}
return j;};aLayout.splice(0,aLayout.length);for(i=0,iLen=nTrs.length;i<iLen;i++)
{aLayout.push([]);}
for(i=0,iLen=nTrs.length;i<iLen;i++)
{nTr=nTrs[i];iColumn=0;nCell=nTr.firstChild;while(nCell){if(nCell.nodeName.toUpperCase()=="TD"||nCell.nodeName.toUpperCase()=="TH")
{iColspan=nCell.getAttribute('colspan')*1;iRowspan=nCell.getAttribute('rowspan')*1;iColspan=(!iColspan||iColspan===0||iColspan===1)?1:iColspan;iRowspan=(!iRowspan||iRowspan===0||iRowspan===1)?1:iRowspan;iColShifted=fnShiftCol(aLayout,i,iColumn);bUnique=iColspan===1?true:false;for(l=0;l<iColspan;l++)
{for(k=0;k<iRowspan;k++)
{aLayout[i+k][iColShifted+l]={"cell":nCell,"unique":bUnique};aLayout[i+k].nTr=nTr;}}}
nCell=nCell.nextSibling;}}}
function _fnGetUniqueThs(oSettings,nHeader,aLayout)
{var aReturn=[];if(!aLayout)
{aLayout=oSettings.aoHeader;if(nHeader)
{aLayout=[];_fnDetectHeader(aLayout,nHeader);}}
for(var i=0,iLen=aLayout.length;i<iLen;i++)
{for(var j=0,jLen=aLayout[i].length;j<jLen;j++)
{if(aLayout[i][j].unique&&(!aReturn[j]||!oSettings.bSortCellsTop))
{aReturn[j]=aLayout[i][j].cell;}}}
return aReturn;}
function _fnBuildAjax(oSettings,data,fn)
{_fnCallbackFire(oSettings,'aoServerParams','serverParams',[data]);if(data&&$.isArray(data)){var tmp={};var rbracket=/(.*?)\[\]$/;$.each(data,function(key,val){var match=val.name.match(rbracket);if(match){var name=match[0];if(!tmp[name]){tmp[name]=[];}
tmp[name].push(val.value);}
else{tmp[val.name]=val.value;}});data=tmp;}
var ajaxData;var ajax=oSettings.ajax;var instance=oSettings.oInstance;var callback=function(json){_fnCallbackFire(oSettings,null,'xhr',[oSettings,json,oSettings.jqXHR]);fn(json);};if($.isPlainObject(ajax)&&ajax.data)
{ajaxData=ajax.data;var newData=$.isFunction(ajaxData)?ajaxData(data,oSettings):ajaxData;data=$.isFunction(ajaxData)&&newData?newData:$.extend(true,data,newData);delete ajax.data;}
var baseAjax={"data":data,"success":function(json){var error=json.error||json.sError;if(error){_fnLog(oSettings,0,error);}
oSettings.json=json;callback(json);},"dataType":"json","cache":false,"type":oSettings.sServerMethod,"error":function(xhr,error,thrown){var ret=_fnCallbackFire(oSettings,null,'xhr',[oSettings,null,oSettings.jqXHR]);if($.inArray(true,ret)===-1){if(error=="parsererror"){_fnLog(oSettings,0,'Invalid JSON response',1);}
else if(xhr.readyState===4){_fnLog(oSettings,0,'Ajax error',7);}}
_fnProcessingDisplay(oSettings,false);}};oSettings.oAjaxData=data;_fnCallbackFire(oSettings,null,'preXhr',[oSettings,data]);if(oSettings.fnServerData)
{oSettings.fnServerData.call(instance,oSettings.sAjaxSource,$.map(data,function(val,key){return{name:key,value:val};}),callback,oSettings);}
else if(oSettings.sAjaxSource||typeof ajax==='string')
{oSettings.jqXHR=$.ajax($.extend(baseAjax,{url:ajax||oSettings.sAjaxSource}));}
else if($.isFunction(ajax))
{oSettings.jqXHR=ajax.call(instance,data,callback,oSettings);}
else
{oSettings.jqXHR=$.ajax($.extend(baseAjax,ajax));ajax.data=ajaxData;}}
function _fnAjaxUpdate(settings)
{if(settings.bAjaxDataGet){settings.iDraw++;_fnProcessingDisplay(settings,true);_fnBuildAjax(settings,_fnAjaxParameters(settings),function(json){_fnAjaxUpdateDraw(settings,json);});return false;}
return true;}
function _fnAjaxParameters(settings)
{var
columns=settings.aoColumns,columnCount=columns.length,features=settings.oFeatures,preSearch=settings.oPreviousSearch,preColSearch=settings.aoPreSearchCols,i,data=[],dataProp,column,columnSearch,sort=_fnSortFlatten(settings),displayStart=settings._iDisplayStart,displayLength=features.bPaginate!==false?settings._iDisplayLength:-1;var param=function(name,value){data.push({'name':name,'value':value});};param('sEcho',settings.iDraw);param('iColumns',columnCount);param('sColumns',_pluck(columns,'sName').join(','));param('iDisplayStart',displayStart);param('iDisplayLength',displayLength);var d={draw:settings.iDraw,columns:[],order:[],start:displayStart,length:displayLength,search:{value:preSearch.sSearch,regex:preSearch.bRegex}};for(i=0;i<columnCount;i++){column=columns[i];columnSearch=preColSearch[i];dataProp=typeof column.mData=="function"?'function':column.mData;d.columns.push({data:dataProp,name:column.sName,searchable:column.bSearchable,orderable:column.bSortable,search:{value:columnSearch.sSearch,regex:columnSearch.bRegex}});param("mDataProp_"+i,dataProp);if(features.bFilter){param('sSearch_'+i,columnSearch.sSearch);param('bRegex_'+i,columnSearch.bRegex);param('bSearchable_'+i,column.bSearchable);}
if(features.bSort){param('bSortable_'+i,column.bSortable);}}
if(features.bFilter){param('sSearch',preSearch.sSearch);param('bRegex',preSearch.bRegex);}
if(features.bSort){$.each(sort,function(i,val){d.order.push({column:val.col,dir:val.dir});param('iSortCol_'+i,val.col);param('sSortDir_'+i,val.dir);});param('iSortingCols',sort.length);}
var legacy=DataTable.ext.legacy.ajax;if(legacy===null){return settings.sAjaxSource?data:d;}
return legacy?data:d;}
function _fnAjaxUpdateDraw(settings,json)
{var compat=function(old,modern){return json[old]!==undefined?json[old]:json[modern];};var data=_fnAjaxDataSrc(settings,json);var draw=compat('sEcho','draw');var recordsTotal=compat('iTotalRecords','recordsTotal');var recordsFiltered=compat('iTotalDisplayRecords','recordsFiltered');if(draw){if(draw*1<settings.iDraw){return;}
settings.iDraw=draw*1;}
_fnClearTable(settings);settings._iRecordsTotal=parseInt(recordsTotal,10);settings._iRecordsDisplay=parseInt(recordsFiltered,10);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
settings.aiDisplay=settings.aiDisplayMaster.slice();settings.bAjaxDataGet=false;_fnDraw(settings);if(!settings._bInitComplete){_fnInitComplete(settings,json);}
settings.bAjaxDataGet=true;_fnProcessingDisplay(settings,false);}
function _fnAjaxDataSrc(oSettings,json)
{var dataSrc=$.isPlainObject(oSettings.ajax)&&oSettings.ajax.dataSrc!==undefined?oSettings.ajax.dataSrc:oSettings.sAjaxDataProp;if(dataSrc==='data'){return json.aaData||json[dataSrc];}
return dataSrc!==""?_fnGetObjectDataFn(dataSrc)(json):json;}
function _fnFeatureHtmlFilter(settings)
{var classes=settings.oClasses;var tableId=settings.sTableId;var language=settings.oLanguage;var previousSearch=settings.oPreviousSearch;var features=settings.aanFeatures;var input='<input type="search" class="'+classes.sFilterInput+'"/>';var str=language.sSearch;str=str.match(/_INPUT_/)?str.replace('_INPUT_',input):str+input;var filter=$('<div/>',{'id':!features.f?tableId+'_filter':null,'class':classes.sFilter})
.append($('<label/>').append(str));var searchFn=function(){var n=features.f;var val=!this.value?"":this.value;if(val!=previousSearch.sSearch){_fnFilterComplete(settings,{"sSearch":val,"bRegex":previousSearch.bRegex,"bSmart":previousSearch.bSmart,"bCaseInsensitive":previousSearch.bCaseInsensitive});settings._iDisplayStart=0;_fnDraw(settings);}};var searchDelay=settings.searchDelay!==null?settings.searchDelay:_fnDataSource(settings)==='ssp'?400:0;var jqFilter=$('input',filter)
.val(previousSearch.sSearch)
.attr('placeholder',language.sSearchPlaceholder)
.on('keyup.DT search.DT input.DT paste.DT cut.DT',searchDelay?_fnThrottle(searchFn,searchDelay):searchFn)
.on('keypress.DT',function(e){if(e.keyCode==13){return false;}})
.attr('aria-controls',tableId);$(settings.nTable).on('search.dt.DT',function(ev,s){if(settings===s){try{if(jqFilter[0]!==document.activeElement){jqFilter.val(previousSearch.sSearch);}}
catch(e){}}});return filter[0];}
function _fnFilterComplete(oSettings,oInput,iForce)
{var oPrevSearch=oSettings.oPreviousSearch;var aoPrevSearch=oSettings.aoPreSearchCols;var fnSaveFilter=function(oFilter){oPrevSearch.sSearch=oFilter.sSearch;oPrevSearch.bRegex=oFilter.bRegex;oPrevSearch.bSmart=oFilter.bSmart;oPrevSearch.bCaseInsensitive=oFilter.bCaseInsensitive;};var fnRegex=function(o){return o.bEscapeRegex!==undefined?!o.bEscapeRegex:o.bRegex;};_fnColumnTypes(oSettings);if(_fnDataSource(oSettings)!='ssp')
{_fnFilter(oSettings,oInput.sSearch,iForce,fnRegex(oInput),oInput.bSmart,oInput.bCaseInsensitive);fnSaveFilter(oInput);for(var i=0;i<aoPrevSearch.length;i++)
{_fnFilterColumn(oSettings,aoPrevSearch[i].sSearch,i,fnRegex(aoPrevSearch[i]),aoPrevSearch[i].bSmart,aoPrevSearch[i].bCaseInsensitive);}
_fnFilterCustom(oSettings);}
else
{fnSaveFilter(oInput);}
oSettings.bFiltered=true;_fnCallbackFire(oSettings,null,'search',[oSettings]);}
function _fnFilterCustom(settings)
{var filters=DataTable.ext.search;var displayRows=settings.aiDisplay;var row,rowIdx;for(var i=0,ien=filters.length;i<ien;i++){var rows=[];for(var j=0,jen=displayRows.length;j<jen;j++){rowIdx=displayRows[j];row=settings.aoData[rowIdx];if(filters[i](settings,row._aFilterData,rowIdx,row._aData,j)){rows.push(rowIdx);}}
displayRows.length=0;$.merge(displayRows,rows);}}
function _fnFilterColumn(settings,searchStr,colIdx,regex,smart,caseInsensitive)
{if(searchStr===''){return;}
var data;var out=[];var display=settings.aiDisplay;var rpSearch=_fnFilterCreateSearch(searchStr,regex,smart,caseInsensitive);for(var i=0;i<display.length;i++){data=settings.aoData[display[i]]._aFilterData[colIdx];if(rpSearch.test(data)){out.push(display[i]);}}
settings.aiDisplay=out;}
function _fnFilter(settings,input,force,regex,smart,caseInsensitive)
{var rpSearch=_fnFilterCreateSearch(input,regex,smart,caseInsensitive);var prevSearch=settings.oPreviousSearch.sSearch;var displayMaster=settings.aiDisplayMaster;var display,invalidated,i;var filtered=[];if(DataTable.ext.search.length!==0){force=true;}
invalidated=_fnFilterData(settings);if(input.length<=0){settings.aiDisplay=displayMaster.slice();}
else{if(invalidated||force||prevSearch.length>input.length||input.indexOf(prevSearch)!==0||settings.bSorted){settings.aiDisplay=displayMaster.slice();}
display=settings.aiDisplay;for(i=0;i<display.length;i++){if(rpSearch.test(settings.aoData[display[i]]._sFilterRow)){filtered.push(display[i]);}}
settings.aiDisplay=filtered;}}
function _fnFilterCreateSearch(search,regex,smart,caseInsensitive)
{search=regex?search:_fnEscapeRegex(search);if(smart){var a=$.map(search.match(/"[^"]+"|[^ ]+/g)||[''],function(word){if(word.charAt(0)==='"'){var m=word.match(/^"(.*)"$/);word=m?m[1]:word;}
return word.replace('"','');});search='^(?=.*?'+a.join(')(?=.*?')+').*$';}
return new RegExp(search,caseInsensitive?'i':'');}
var _fnEscapeRegex=DataTable.util.escapeRegex;var __filter_div=$('<div>')[0];var __filter_div_textContent=__filter_div.textContent!==undefined;function _fnFilterData(settings)
{var columns=settings.aoColumns;var column;var i,j,ien,jen,filterData,cellData,row;var fomatters=DataTable.ext.type.search;var wasInvalidated=false;for(i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aFilterData){filterData=[];for(j=0,jen=columns.length;j<jen;j++){column=columns[j];if(column.bSearchable){cellData=_fnGetCellData(settings,i,j,'filter');if(fomatters[column.sType]){cellData=fomatters[column.sType](cellData);}
if(cellData===null){cellData='';}
if(typeof cellData!=='string'&&cellData.toString){cellData=cellData.toString();}}
else{cellData='';}
if(cellData.indexOf&&cellData.indexOf('&')!==-1){__filter_div.innerHTML=cellData;cellData=__filter_div_textContent?__filter_div.textContent:__filter_div.innerText;}
if(cellData.replace){cellData=cellData.replace(/[\r\n]/g,'');}
filterData.push(cellData);}
row._aFilterData=filterData;row._sFilterRow=filterData.join('  ');wasInvalidated=true;}}
return wasInvalidated;}
function _fnSearchToCamel(obj)
{return{search:obj.sSearch,smart:obj.bSmart,regex:obj.bRegex,caseInsensitive:obj.bCaseInsensitive};}
function _fnSearchToHung(obj)
{return{sSearch:obj.search,bSmart:obj.smart,bRegex:obj.regex,bCaseInsensitive:obj.caseInsensitive};}
function _fnFeatureHtmlInfo(settings)
{var
tid=settings.sTableId,nodes=settings.aanFeatures.i,n=$('<div/>',{'class':settings.oClasses.sInfo,'id':!nodes?tid+'_info':null});if(!nodes){settings.aoDrawCallback.push({"fn":_fnUpdateInfo,"sName":"information"});n
.attr('role','status')
.attr('aria-live','polite');$(settings.nTable).attr('aria-describedby',tid+'_info');}
return n[0];}
function _fnUpdateInfo(settings)
{var nodes=settings.aanFeatures.i;if(nodes.length===0){return;}
var
lang=settings.oLanguage,start=settings._iDisplayStart+1,end=settings.fnDisplayEnd(),max=settings.fnRecordsTotal(),total=settings.fnRecordsDisplay(),out=total?lang.sInfo:lang.sInfoEmpty;if(total!==max){out+=' '+lang.sInfoFiltered;}
out+=lang.sInfoPostFix;out=_fnInfoMacros(settings,out);var callback=lang.fnInfoCallback;if(callback!==null){out=callback.call(settings.oInstance,settings,start,end,max,total,out);}
$(nodes).html(out);}
function _fnInfoMacros(settings,str)
{var
formatter=settings.fnFormatNumber,start=settings._iDisplayStart+1,len=settings._iDisplayLength,vis=settings.fnRecordsDisplay(),all=len===-1;return str.
replace(/_START_/g,formatter.call(settings,start)).
replace(/_END_/g,formatter.call(settings,settings.fnDisplayEnd())).
replace(/_MAX_/g,formatter.call(settings,settings.fnRecordsTotal())).
replace(/_TOTAL_/g,formatter.call(settings,vis)).
replace(/_PAGE_/g,formatter.call(settings,all?1:Math.ceil(start/len))).
replace(/_PAGES_/g,formatter.call(settings,all?1:Math.ceil(vis/len)));}
function _fnInitialise(settings)
{var i,iLen,iAjaxStart=settings.iInitDisplayStart;var columns=settings.aoColumns,column;var features=settings.oFeatures;var deferLoading=settings.bDeferLoading;if(!settings.bInitialised){setTimeout(function(){_fnInitialise(settings);},200);return;}
_fnAddOptionsHtml(settings);_fnBuildHead(settings);_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnProcessingDisplay(settings,true);if(features.bAutoWidth){_fnCalculateColumnWidths(settings);}
for(i=0,iLen=columns.length;i<iLen;i++){column=columns[i];if(column.sWidth){column.nTh.style.width=_fnStringToCss(column.sWidth);}}
_fnCallbackFire(settings,null,'preInit',[settings]);_fnReDraw(settings);var dataSrc=_fnDataSource(settings);if(dataSrc!='ssp'||deferLoading){if(dataSrc=='ajax'){_fnBuildAjax(settings,[],function(json){var aData=_fnAjaxDataSrc(settings,json);for(i=0;i<aData.length;i++){_fnAddData(settings,aData[i]);}
settings.iInitDisplayStart=iAjaxStart;_fnReDraw(settings);_fnProcessingDisplay(settings,false);_fnInitComplete(settings,json);},settings);}
else{_fnProcessingDisplay(settings,false);_fnInitComplete(settings);}}}
function _fnInitComplete(settings,json)
{settings._bInitComplete=true;if(json||settings.oInit.aaData){_fnAdjustColumnSizing(settings);}
_fnCallbackFire(settings,null,'plugin-init',[settings,json]);_fnCallbackFire(settings,'aoInitComplete','init',[settings,json]);}
function _fnLengthChange(settings,val)
{var len=parseInt(val,10);settings._iDisplayLength=len;_fnLengthOverflow(settings);_fnCallbackFire(settings,null,'length',[settings,len]);}
function _fnFeatureHtmlLength(settings)
{var
classes=settings.oClasses,tableId=settings.sTableId,menu=settings.aLengthMenu,d2=$.isArray(menu[0]),lengths=d2?menu[0]:menu,language=d2?menu[1]:menu;var select=$('<select/>',{'name':tableId+'_length','aria-controls':tableId,'class':classes.sLengthSelect});for(var i=0,ien=lengths.length;i<ien;i++){select[0][i]=new Option(typeof language[i]==='number'?settings.fnFormatNumber(language[i]):language[i],lengths[i]);}
var div=$('<div><label/></div>').addClass(classes.sLength);if(!settings.aanFeatures.l){div[0].id=tableId+'_length';}
div.children().append(settings.oLanguage.sLengthMenu.replace('_MENU_',select[0].outerHTML));$('select',div)
.val(settings._iDisplayLength)
.on('change.DT',function(e){_fnLengthChange(settings,$(this).val());_fnDraw(settings);});$(settings.nTable).on('length.dt.DT',function(e,s,len){if(settings===s){$('select',div).val(len);}});return div[0];}
function _fnFeatureHtmlPaginate(settings)
{var
type=settings.sPaginationType,plugin=DataTable.ext.pager[type],modern=typeof plugin==='function',redraw=function(settings){_fnDraw(settings);},node=$('<div/>').addClass(settings.oClasses.sPaging+type)[0],features=settings.aanFeatures;if(!modern){plugin.fnInit(settings,node,redraw);}
if(!features.p)
{node.id=settings.sTableId+'_paginate';settings.aoDrawCallback.push({"fn":function(settings){if(modern){var
start=settings._iDisplayStart,len=settings._iDisplayLength,visRecords=settings.fnRecordsDisplay(),all=len===-1,page=all?0:Math.ceil(start/len),pages=all?1:Math.ceil(visRecords/len),buttons=plugin(page,pages),i,ien;for(i=0,ien=features.p.length;i<ien;i++){_fnRenderer(settings,'pageButton')(settings,features.p[i],i,buttons,page,pages);}}
else{plugin.fnUpdate(settings,redraw);}},"sName":"pagination"});}
return node;}
function _fnPageChange(settings,action,redraw)
{var
start=settings._iDisplayStart,len=settings._iDisplayLength,records=settings.fnRecordsDisplay();if(records===0||len===-1)
{start=0;}
else if(typeof action==="number")
{start=action*len;if(start>records)
{start=0;}}
else if(action=="first")
{start=0;}
else if(action=="previous")
{start=len>=0?start-len:0;if(start<0)
{start=0;}}
else if(action=="next")
{if(start+len<records)
{start+=len;}}
else if(action=="last")
{start=Math.floor((records-1)/len)*len;}
else
{_fnLog(settings,0,"Unknown paging action: "+action,5);}
var changed=settings._iDisplayStart!==start;settings._iDisplayStart=start;if(changed){_fnCallbackFire(settings,null,'page',[settings]);if(redraw){_fnDraw(settings);}}
return changed;}
function _fnFeatureHtmlProcessing(settings)
{return $('<div/>',{'id':!settings.aanFeatures.r?settings.sTableId+'_processing':null,'class':settings.oClasses.sProcessing})
.html(settings.oLanguage.sProcessing)
.insertBefore(settings.nTable)[0];}
function _fnProcessingDisplay(settings,show)
{if(settings.oFeatures.bProcessing){$(settings.aanFeatures.r).css('display',show?'block':'none');}
_fnCallbackFire(settings,null,'processing',[settings,show]);}
function _fnFeatureHtmlTable(settings)
{var table=$(settings.nTable);table.attr('role','grid');var scroll=settings.oScroll;if(scroll.sX===''&&scroll.sY===''){return settings.nTable;}
var scrollX=scroll.sX;var scrollY=scroll.sY;var classes=settings.oClasses;var caption=table.children('caption');var captionSide=caption.length?caption[0]._captionSide:null;var headerClone=$(table[0].cloneNode(false));var footerClone=$(table[0].cloneNode(false));var footer=table.children('tfoot');var _div='<div/>';var size=function(s){return!s?null:_fnStringToCss(s);};if(!footer.length){footer=null;}
var scroller=$(_div,{'class':classes.sScrollWrapper})
.append($(_div,{'class':classes.sScrollHead})
.css({overflow:'hidden',position:'relative',border:0,width:scrollX?size(scrollX):'100%'})
.append($(_div,{'class':classes.sScrollHeadInner})
.css({'box-sizing':'content-box',width:scroll.sXInner||'100%'})
.append(headerClone
.removeAttr('id')
.css('margin-left',0)
.append(captionSide==='top'?caption:null)
.append(table.children('thead')))))
.append($(_div,{'class':classes.sScrollBody})
.css({position:'relative',overflow:'auto',width:size(scrollX)})
.append(table));if(footer){scroller.append($(_div,{'class':classes.sScrollFoot})
.css({overflow:'hidden',border:0,width:scrollX?size(scrollX):'100%'})
.append($(_div,{'class':classes.sScrollFootInner})
.append(footerClone
.removeAttr('id')
.css('margin-left',0)
.append(captionSide==='bottom'?caption:null)
.append(table.children('tfoot')))));}
var children=scroller.children();var scrollHead=children[0];var scrollBody=children[1];var scrollFoot=footer?children[2]:null;if(scrollX){$(scrollBody).on('scroll.DT',function(e){var scrollLeft=this.scrollLeft;scrollHead.scrollLeft=scrollLeft;if(footer){scrollFoot.scrollLeft=scrollLeft;}});}
$(scrollBody).css(scrollY&&scroll.bCollapse?'max-height':'height',scrollY);settings.nScrollHead=scrollHead;settings.nScrollBody=scrollBody;settings.nScrollFoot=scrollFoot;settings.aoDrawCallback.push({"fn":_fnScrollDraw,"sName":"scrolling"});return scroller[0];}
function _fnScrollDraw(settings)
{var
scroll=settings.oScroll,scrollX=scroll.sX,scrollXInner=scroll.sXInner,scrollY=scroll.sY,barWidth=scroll.iBarWidth,divHeader=$(settings.nScrollHead),divHeaderStyle=divHeader[0].style,divHeaderInner=divHeader.children('div'),divHeaderInnerStyle=divHeaderInner[0].style,divHeaderTable=divHeaderInner.children('table'),divBodyEl=settings.nScrollBody,divBody=$(divBodyEl),divBodyStyle=divBodyEl.style,divFooter=$(settings.nScrollFoot),divFooterInner=divFooter.children('div'),divFooterTable=divFooterInner.children('table'),header=$(settings.nTHead),table=$(settings.nTable),tableEl=table[0],tableStyle=tableEl.style,footer=settings.nTFoot?$(settings.nTFoot):null,browser=settings.oBrowser,ie67=browser.bScrollOversize,dtHeaderCells=_pluck(settings.aoColumns,'nTh'),headerTrgEls,footerTrgEls,headerSrcEls,footerSrcEls,headerCopy,footerCopy,headerWidths=[],footerWidths=[],headerContent=[],footerContent=[],idx,correction,sanityWidth,zeroOut=function(nSizer){var style=nSizer.style;style.paddingTop="0";style.paddingBottom="0";style.borderTopWidth="0";style.borderBottomWidth="0";style.height=0;};var scrollBarVis=divBodyEl.scrollHeight>divBodyEl.clientHeight;if(settings.scrollBarVis!==scrollBarVis&&settings.scrollBarVis!==undefined){settings.scrollBarVis=scrollBarVis;_fnAdjustColumnSizing(settings);return;}
else{settings.scrollBarVis=scrollBarVis;}
table.children('thead, tfoot').remove();if(footer){footerCopy=footer.clone().prependTo(table);footerTrgEls=footer.find('tr');footerSrcEls=footerCopy.find('tr');}
headerCopy=header.clone().prependTo(table);headerTrgEls=header.find('tr');headerSrcEls=headerCopy.find('tr');headerCopy.find('th, td').removeAttr('tabindex');if(!scrollX)
{divBodyStyle.width='100%';divHeader[0].style.width='100%';}
$.each(_fnGetUniqueThs(settings,headerCopy),function(i,el){idx=_fnVisibleToColumnIndex(settings,i);el.style.width=settings.aoColumns[idx].sWidth;});if(footer){_fnApplyToChildren(function(n){n.style.width="";},footerSrcEls);}
sanityWidth=table.outerWidth();if(scrollX===""){tableStyle.width="100%";if(ie67&&(table.find('tbody').height()>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(table.outerWidth()-barWidth);}
sanityWidth=table.outerWidth();}
else if(scrollXInner!==""){tableStyle.width=_fnStringToCss(scrollXInner);sanityWidth=table.outerWidth();}
_fnApplyToChildren(zeroOut,headerSrcEls);_fnApplyToChildren(function(nSizer){headerContent.push(nSizer.innerHTML);headerWidths.push(_fnStringToCss($(nSizer).css('width')));},headerSrcEls);_fnApplyToChildren(function(nToSize,i){if($.inArray(nToSize,dtHeaderCells)!==-1){nToSize.style.width=headerWidths[i];}},headerTrgEls);$(headerSrcEls).height(0);if(footer)
{_fnApplyToChildren(zeroOut,footerSrcEls);_fnApplyToChildren(function(nSizer){footerContent.push(nSizer.innerHTML);footerWidths.push(_fnStringToCss($(nSizer).css('width')));},footerSrcEls);_fnApplyToChildren(function(nToSize,i){nToSize.style.width=footerWidths[i];},footerTrgEls);$(footerSrcEls).height(0);}
_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+headerContent[i]+'</div>';nSizer.style.width=headerWidths[i];},headerSrcEls);if(footer)
{_fnApplyToChildren(function(nSizer,i){nSizer.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+footerContent[i]+'</div>';nSizer.style.width=footerWidths[i];},footerSrcEls);}
if(table.outerWidth()<sanityWidth)
{correction=((divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll"))?sanityWidth+barWidth:sanityWidth;if(ie67&&(divBodyEl.scrollHeight>divBodyEl.offsetHeight||divBody.css('overflow-y')=="scroll")){tableStyle.width=_fnStringToCss(correction-barWidth);}
if(scrollX===""||scrollXInner!==""){_fnLog(settings,1,'Possible column misalignment',6);}}
else
{correction='100%';}
divBodyStyle.width=_fnStringToCss(correction);divHeaderStyle.width=_fnStringToCss(correction);if(footer){settings.nScrollFoot.style.width=_fnStringToCss(correction);}
if(!scrollY){if(ie67){divBodyStyle.height=_fnStringToCss(tableEl.offsetHeight+barWidth);}}
var iOuterWidth=table.outerWidth();divHeaderTable[0].style.width=_fnStringToCss(iOuterWidth);divHeaderInnerStyle.width=_fnStringToCss(iOuterWidth);var bScrolling=table.height()>divBodyEl.clientHeight||divBody.css('overflow-y')=="scroll";var padding='padding'+(browser.bScrollbarLeft?'Left':'Right');divHeaderInnerStyle[padding]=bScrolling?barWidth+"px":"0px";if(footer){divFooterTable[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style.width=_fnStringToCss(iOuterWidth);divFooterInner[0].style[padding]=bScrolling?barWidth+"px":"0px";}
table.children('colgroup').insertBefore(table.children('thead'));divBody.scroll();if((settings.bSorted||settings.bFiltered)&&!settings._drawHold){divBodyEl.scrollTop=0;}}
function _fnApplyToChildren(fn,an1,an2)
{var index=0,i=0,iLen=an1.length;var nNode1,nNode2;while(i<iLen){nNode1=an1[i].firstChild;nNode2=an2?an2[i].firstChild:null;while(nNode1){if(nNode1.nodeType===1){if(an2){fn(nNode1,nNode2,index);}
else{fn(nNode1,index);}
index++;}
nNode1=nNode1.nextSibling;nNode2=an2?nNode2.nextSibling:null;}
i++;}}
var __re_html_remove=/<.*?>/g;function _fnCalculateColumnWidths(oSettings)
{var
table=oSettings.nTable,columns=oSettings.aoColumns,scroll=oSettings.oScroll,scrollY=scroll.sY,scrollX=scroll.sX,scrollXInner=scroll.sXInner,columnCount=columns.length,visibleColumns=_fnGetColumns(oSettings,'bVisible'),headerCells=$('th',oSettings.nTHead),tableWidthAttr=table.getAttribute('width'),tableContainer=table.parentNode,userInputs=false,i,column,columnIdx,width,outerWidth,browser=oSettings.oBrowser,ie67=browser.bScrollOversize;var styleWidth=table.style.width;if(styleWidth&&styleWidth.indexOf('%')!==-1){tableWidthAttr=styleWidth;}
for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];if(column.sWidth!==null){column.sWidth=_fnConvertToWidth(column.sWidthOrig,tableContainer);userInputs=true;}}
if(ie67||!userInputs&&!scrollX&&!scrollY&&columnCount==_fnVisbleColumns(oSettings)&&columnCount==headerCells.length){for(i=0;i<columnCount;i++){var colIdx=_fnVisibleToColumnIndex(oSettings,i);if(colIdx!==null){columns[colIdx].sWidth=_fnStringToCss(headerCells.eq(i).width());}}}
else
{var tmpTable=$(table).clone()
.css('visibility','hidden')
.removeAttr('id');tmpTable.find('tbody tr').remove();var tr=$('<tr/>').appendTo(tmpTable.find('tbody'));tmpTable.find('thead, tfoot').remove();tmpTable
.append($(oSettings.nTHead).clone())
.append($(oSettings.nTFoot).clone());tmpTable.find('tfoot th, tfoot td').css('width','');headerCells=_fnGetUniqueThs(oSettings,tmpTable.find('thead')[0]);for(i=0;i<visibleColumns.length;i++){column=columns[visibleColumns[i]];headerCells[i].style.width=column.sWidthOrig!==null&&column.sWidthOrig!==''?_fnStringToCss(column.sWidthOrig):'';if(column.sWidthOrig&&scrollX){$(headerCells[i]).append($('<div/>').css({width:column.sWidthOrig,margin:0,padding:0,border:0,height:1}));}}
if(oSettings.aoData.length){for(i=0;i<visibleColumns.length;i++){columnIdx=visibleColumns[i];column=columns[columnIdx];$(_fnGetWidestNode(oSettings,columnIdx))
.clone(false)
.append(column.sContentPadding)
.appendTo(tr);}}
$('[name]',tmpTable).removeAttr('name');var holder=$('<div/>').css(scrollX||scrollY?{position:'absolute',top:0,left:0,height:1,right:0,overflow:'hidden'}:{})
.append(tmpTable)
.appendTo(tableContainer);if(scrollX&&scrollXInner){tmpTable.width(scrollXInner);}
else if(scrollX){tmpTable.css('width','auto');tmpTable.removeAttr('width');if(tmpTable.width()<tableContainer.clientWidth&&tableWidthAttr){tmpTable.width(tableContainer.clientWidth);}}
else if(scrollY){tmpTable.width(tableContainer.clientWidth);}
else if(tableWidthAttr){tmpTable.width(tableWidthAttr);}
var total=0;for(i=0;i<visibleColumns.length;i++){var cell=$(headerCells[i]);var border=cell.outerWidth()-cell.width();var bounding=browser.bBounding?Math.ceil(headerCells[i].getBoundingClientRect().width):cell.outerWidth();total+=bounding;columns[visibleColumns[i]].sWidth=_fnStringToCss(bounding-border);}
table.style.width=_fnStringToCss(total);holder.remove();}
if(tableWidthAttr){table.style.width=_fnStringToCss(tableWidthAttr);}
if((tableWidthAttr||scrollX)&&!oSettings._reszEvt){var bindResize=function(){$(window).on('resize.DT-'+oSettings.sInstance,_fnThrottle(function(){_fnAdjustColumnSizing(oSettings);}));};if(ie67){setTimeout(bindResize,1000);}
else{bindResize();}
oSettings._reszEvt=true;}}
var _fnThrottle=DataTable.util.throttle;function _fnConvertToWidth(width,parent)
{if(!width){return 0;}
var n=$('<div/>')
.css('width',_fnStringToCss(width))
.appendTo(parent||document.body);var val=n[0].offsetWidth;n.remove();return val;}
function _fnGetWidestNode(settings,colIdx)
{var idx=_fnGetMaxLenString(settings,colIdx);if(idx<0){return null;}
var data=settings.aoData[idx];return!data.nTr?$('<td/>').html(_fnGetCellData(settings,idx,colIdx,'display'))[0]:data.anCells[colIdx];}
function _fnGetMaxLenString(settings,colIdx)
{var s,max=-1,maxIdx=-1;for(var i=0,ien=settings.aoData.length;i<ien;i++){s=_fnGetCellData(settings,i,colIdx,'display')+'';s=s.replace(__re_html_remove,'');s=s.replace(/&nbsp;/g,' ');if(s.length>max){max=s.length;maxIdx=i;}}
return maxIdx;}
function _fnStringToCss(s)
{if(s===null){return'0px';}
if(typeof s=='number'){return s<0?'0px':s+'px';}
return s.match(/\d$/)?s+'px':s;}
function _fnSortFlatten(settings)
{var
i,iLen,k,kLen,aSort=[],aiOrig=[],aoColumns=settings.aoColumns,aDataSort,iCol,sType,srcCol,fixed=settings.aaSortingFixed,fixedObj=$.isPlainObject(fixed),nestedSort=[],add=function(a){if(a.length&&!$.isArray(a[0])){nestedSort.push(a);}
else{$.merge(nestedSort,a);}};if($.isArray(fixed)){add(fixed);}
if(fixedObj&&fixed.pre){add(fixed.pre);}
add(settings.aaSorting);if(fixedObj&&fixed.post){add(fixed.post);}
for(i=0;i<nestedSort.length;i++)
{srcCol=nestedSort[i][0];aDataSort=aoColumns[srcCol].aDataSort;for(k=0,kLen=aDataSort.length;k<kLen;k++)
{iCol=aDataSort[k];sType=aoColumns[iCol].sType||'string';if(nestedSort[i]._idx===undefined){nestedSort[i]._idx=$.inArray(nestedSort[i][1],aoColumns[iCol].asSorting);}
aSort.push({src:srcCol,col:iCol,dir:nestedSort[i][1],index:nestedSort[i]._idx,type:sType,formatter:DataTable.ext.type.order[sType+"-pre"]});}}
return aSort;}
function _fnSort(oSettings)
{var
i,ien,iLen,j,jLen,k,kLen,sDataType,nTh,aiOrig=[],oExtSort=DataTable.ext.type.order,aoData=oSettings.aoData,aoColumns=oSettings.aoColumns,aDataSort,data,iCol,sType,oSort,formatters=0,sortCol,displayMaster=oSettings.aiDisplayMaster,aSort;_fnColumnTypes(oSettings);aSort=_fnSortFlatten(oSettings);for(i=0,ien=aSort.length;i<ien;i++){sortCol=aSort[i];if(sortCol.formatter){formatters++;}
_fnSortData(oSettings,sortCol.col);}
if(_fnDataSource(oSettings)!='ssp'&&aSort.length!==0)
{for(i=0,iLen=displayMaster.length;i<iLen;i++){aiOrig[displayMaster[i]]=i;}
if(formatters===aSort.length){displayMaster.sort(function(a,b){var
x,y,k,test,sort,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];test=x<y?-1:x>y?1:0;if(test!==0){return sort.dir==='asc'?test:-test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}
else{displayMaster.sort(function(a,b){var
x,y,k,l,test,sort,fn,len=aSort.length,dataA=aoData[a]._aSortData,dataB=aoData[b]._aSortData;for(k=0;k<len;k++){sort=aSort[k];x=dataA[sort.col];y=dataB[sort.col];fn=oExtSort[sort.type+"-"+sort.dir]||oExtSort["string-"+sort.dir];test=fn(x,y);if(test!==0){return test;}}
x=aiOrig[a];y=aiOrig[b];return x<y?-1:x>y?1:0;});}}
oSettings.bSorted=true;}
function _fnSortAria(settings)
{var label;var nextSort;var columns=settings.aoColumns;var aSort=_fnSortFlatten(settings);var oAria=settings.oLanguage.oAria;for(var i=0,iLen=columns.length;i<iLen;i++)
{var col=columns[i];var asSorting=col.asSorting;var sTitle=col.sTitle.replace(/<.*?>/g,"");var th=col.nTh;th.removeAttribute('aria-sort');if(col.bSortable){if(aSort.length>0&&aSort[0].col==i){th.setAttribute('aria-sort',aSort[0].dir=="asc"?"ascending":"descending");nextSort=asSorting[aSort[0].index+1]||asSorting[0];}
else{nextSort=asSorting[0];}
label=sTitle+(nextSort==="asc"?oAria.sSortAscending:oAria.sSortDescending);}
else{label=sTitle;}
th.setAttribute('aria-label',label);}}
function _fnSortListener(settings,colIdx,append,callback)
{var col=settings.aoColumns[colIdx];var sorting=settings.aaSorting;var asSorting=col.asSorting;var nextSortIdx;var next=function(a,overflow){var idx=a._idx;if(idx===undefined){idx=$.inArray(a[1],asSorting);}
return idx+1<asSorting.length?idx+1:overflow?null:0;};if(typeof sorting[0]==='number'){sorting=settings.aaSorting=[sorting];}
if(append&&settings.oFeatures.bSortMulti){var sortIdx=$.inArray(colIdx,_pluck(sorting,'0'));if(sortIdx!==-1){nextSortIdx=next(sorting[sortIdx],true);if(nextSortIdx===null&&sorting.length===1){nextSortIdx=0;}
if(nextSortIdx===null){sorting.splice(sortIdx,1);}
else{sorting[sortIdx][1]=asSorting[nextSortIdx];sorting[sortIdx]._idx=nextSortIdx;}}
else{sorting.push([colIdx,asSorting[0],0]);sorting[sorting.length-1]._idx=0;}}
else if(sorting.length&&sorting[0][0]==colIdx){nextSortIdx=next(sorting[0]);sorting.length=1;sorting[0][1]=asSorting[nextSortIdx];sorting[0]._idx=nextSortIdx;}
else{sorting.length=0;sorting.push([colIdx,asSorting[0]]);sorting[0]._idx=0;}
_fnReDraw(settings);if(typeof callback=='function'){callback(settings);}}
function _fnSortAttachListener(settings,attachTo,colIdx,callback)
{var col=settings.aoColumns[colIdx];_fnBindAction(attachTo,{},function(e){if(col.bSortable===false){return;}
if(settings.oFeatures.bProcessing){_fnProcessingDisplay(settings,true);setTimeout(function(){_fnSortListener(settings,colIdx,e.shiftKey,callback);if(_fnDataSource(settings)!=='ssp'){_fnProcessingDisplay(settings,false);}},0);}
else{_fnSortListener(settings,colIdx,e.shiftKey,callback);}});}
function _fnSortingClasses(settings)
{var oldSort=settings.aLastSort;var sortClass=settings.oClasses.sSortColumn;var sort=_fnSortFlatten(settings);var features=settings.oFeatures;var i,ien,colIdx;if(features.bSort&&features.bSortClasses){for(i=0,ien=oldSort.length;i<ien;i++){colIdx=oldSort[i].src;$(_pluck(settings.aoData,'anCells',colIdx))
.removeClass(sortClass+(i<2?i+1:3));}
for(i=0,ien=sort.length;i<ien;i++){colIdx=sort[i].src;$(_pluck(settings.aoData,'anCells',colIdx))
.addClass(sortClass+(i<2?i+1:3));}}
settings.aLastSort=sort;}
function _fnSortData(settings,idx)
{var column=settings.aoColumns[idx];var customSort=DataTable.ext.order[column.sSortDataType];var customData;if(customSort){customData=customSort.call(settings.oInstance,settings,idx,_fnColumnIndexToVisible(settings,idx));}
var row,cellData;var formatter=DataTable.ext.type.order[column.sType+"-pre"];for(var i=0,ien=settings.aoData.length;i<ien;i++){row=settings.aoData[i];if(!row._aSortData){row._aSortData=[];}
if(!row._aSortData[idx]||customSort){cellData=customSort?customData[i]:_fnGetCellData(settings,i,idx,'sort');row._aSortData[idx]=formatter?formatter(cellData):cellData;}}}
function _fnSaveState(settings)
{if(!settings.oFeatures.bStateSave||settings.bDestroying)
{return;}
var state={time:+new Date(),start:settings._iDisplayStart,length:settings._iDisplayLength,order:$.extend(true,[],settings.aaSorting),search:_fnSearchToCamel(settings.oPreviousSearch),columns:$.map(settings.aoColumns,function(col,i){return{visible:col.bVisible,search:_fnSearchToCamel(settings.aoPreSearchCols[i])};})};_fnCallbackFire(settings,"aoStateSaveParams",'stateSaveParams',[settings,state]);settings.oSavedState=state;settings.fnStateSaveCallback.call(settings.oInstance,settings,state);}
function _fnLoadState(settings,oInit,callback)
{var i,ien;var columns=settings.aoColumns;var loaded=function(s){if(!s||!s.time){callback();return;}
var abStateLoad=_fnCallbackFire(settings,'aoStateLoadParams','stateLoadParams',[settings,s]);if($.inArray(false,abStateLoad)!==-1){callback();return;}
var duration=settings.iStateDuration;if(duration>0&&s.time<+new Date()-(duration*1000)){callback();return;}
if(s.columns&&columns.length!==s.columns.length){callback();return;}
settings.oLoadedState=$.extend(true,{},s);if(s.start!==undefined){settings._iDisplayStart=s.start;settings.iInitDisplayStart=s.start;}
if(s.length!==undefined){settings._iDisplayLength=s.length;}
if(s.order!==undefined){settings.aaSorting=[];$.each(s.order,function(i,col){settings.aaSorting.push(col[0]>=columns.length?[0,col[1]]:col);});}
if(s.search!==undefined){$.extend(settings.oPreviousSearch,_fnSearchToHung(s.search));}
if(s.columns){for(i=0,ien=s.columns.length;i<ien;i++){var col=s.columns[i];if(col.visible!==undefined){columns[i].bVisible=col.visible;}
if(col.search!==undefined){$.extend(settings.aoPreSearchCols[i],_fnSearchToHung(col.search));}}}
_fnCallbackFire(settings,'aoStateLoaded','stateLoaded',[settings,s]);callback();}
if(!settings.oFeatures.bStateSave){callback();return;}
var state=settings.fnStateLoadCallback.call(settings.oInstance,settings,loaded);if(state!==undefined){loaded(state);}}
function _fnSettingsFromNode(table)
{var settings=DataTable.settings;var idx=$.inArray(table,_pluck(settings,'nTable'));return idx!==-1?settings[idx]:null;}
function _fnLog(settings,level,msg,tn)
{msg='DataTables warning: '+
(settings?'table id='+settings.sTableId+' - ':'')+msg;if(tn){msg+='. For more information about this error, please see '+
'http://datatables.net/tn/'+tn;}
if(!level){var ext=DataTable.ext;var type=ext.sErrMode||ext.errMode;if(settings){_fnCallbackFire(settings,null,'error',[settings,tn,msg]);}
if(type=='alert'){alert(msg);}
else if(type=='throw'){throw new Error(msg);}
else if(typeof type=='function'){type(settings,tn,msg);}}
else if(window.console&&console.log){console.log(msg);}}
function _fnMap(ret,src,name,mappedName)
{if($.isArray(name)){$.each(name,function(i,val){if($.isArray(val)){_fnMap(ret,src,val[0],val[1]);}
else{_fnMap(ret,src,val);}});return;}
if(mappedName===undefined){mappedName=name;}
if(src[name]!==undefined){ret[mappedName]=src[name];}}
function _fnExtend(out,extender,breakRefs)
{var val;for(var prop in extender){if(extender.hasOwnProperty(prop)){val=extender[prop];if($.isPlainObject(val)){if(!$.isPlainObject(out[prop])){out[prop]={};}
$.extend(true,out[prop],val);}
else if(breakRefs&&prop!=='data'&&prop!=='aaData'&&$.isArray(val)){out[prop]=val.slice();}
else{out[prop]=val;}}}
return out;}
function _fnBindAction(n,oData,fn)
{$(n)
.on('click.DT',oData,function(e){n.blur();fn(e);})
.on('keypress.DT',oData,function(e){if(e.which===13){e.preventDefault();fn(e);}})
.on('selectstart.DT',function(){return false;});}
function _fnCallbackReg(oSettings,sStore,fn,sName)
{if(fn)
{oSettings[sStore].push({"fn":fn,"sName":sName});}}
function _fnCallbackFire(settings,callbackArr,eventName,args)
{var ret=[];if(callbackArr){ret=$.map(settings[callbackArr].slice().reverse(),function(val,i){return val.fn.apply(settings.oInstance,args);});}
if(eventName!==null){var e=$.Event(eventName+'.dt');$(settings.nTable).trigger(e,args);ret.push(e.result);}
return ret;}
function _fnLengthOverflow(settings)
{var
start=settings._iDisplayStart,end=settings.fnDisplayEnd(),len=settings._iDisplayLength;if(start>=end)
{start=end-len;}
start-=(start%len);if(len===-1||start<0)
{start=0;}
settings._iDisplayStart=start;}
function _fnRenderer(settings,type)
{var renderer=settings.renderer;var host=DataTable.ext.renderer[type];if($.isPlainObject(renderer)&&renderer[type]){return host[renderer[type]]||host._;}
else if(typeof renderer==='string'){return host[renderer]||host._;}
return host._;}
function _fnDataSource(settings)
{if(settings.oFeatures.bServerSide){return'ssp';}
else if(settings.ajax||settings.sAjaxSource){return'ajax';}
return'dom';}
var __apiStruct=[];var __arrayProto=Array.prototype;var _toSettings=function(mixed)
{var idx,jq;var settings=DataTable.settings;var tables=$.map(settings,function(el,i){return el.nTable;});if(!mixed){return[];}
else if(mixed.nTable&&mixed.oApi){return[mixed];}
else if(mixed.nodeName&&mixed.nodeName.toLowerCase()==='table'){idx=$.inArray(mixed,tables);return idx!==-1?[settings[idx]]:null;}
else if(mixed&&typeof mixed.settings==='function'){return mixed.settings().toArray();}
else if(typeof mixed==='string'){jq=$(mixed);}
else if(mixed instanceof $){jq=mixed;}
if(jq){return jq.map(function(i){idx=$.inArray(this,tables);return idx!==-1?settings[idx]:null;}).toArray();}};_Api=function(context,data)
{if(!(this instanceof _Api)){return new _Api(context,data);}
var settings=[];var ctxSettings=function(o){var a=_toSettings(o);if(a){settings=settings.concat(a);}};if($.isArray(context)){for(var i=0,ien=context.length;i<ien;i++){ctxSettings(context[i]);}}
else{ctxSettings(context);}
this.context=_unique(settings);if(data){$.merge(this,data);}
this.selector={rows:null,cols:null,opts:null};_Api.extend(this,this,__apiStruct);};DataTable.Api=_Api;$.extend(_Api.prototype,{any:function()
{return this.count()!==0;},concat:__arrayProto.concat,context:[],count:function()
{return this.flatten().length;},each:function(fn)
{for(var i=0,ien=this.length;i<ien;i++){fn.call(this,this[i],i,this);}
return this;},eq:function(idx)
{var ctx=this.context;return ctx.length>idx?new _Api(ctx[idx],this[idx]):null;},filter:function(fn)
{var a=[];if(__arrayProto.filter){a=__arrayProto.filter.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){if(fn.call(this,this[i],i,this)){a.push(this[i]);}}}
return new _Api(this.context,a);},flatten:function()
{var a=[];return new _Api(this.context,a.concat.apply(a,this.toArray()));},join:__arrayProto.join,indexOf:__arrayProto.indexOf||function(obj,start)
{for(var i=(start||0),ien=this.length;i<ien;i++){if(this[i]===obj){return i;}}
return-1;},iterator:function(flatten,type,fn,alwaysNew){var
a=[],ret,i,ien,j,jen,context=this.context,rows,items,item,selector=this.selector;if(typeof flatten==='string'){alwaysNew=fn;fn=type;type=flatten;flatten=false;}
for(i=0,ien=context.length;i<ien;i++){var apiInst=new _Api(context[i]);if(type==='table'){ret=fn.call(apiInst,context[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='columns'||type==='rows'){ret=fn.call(apiInst,context[i],this[i],i);if(ret!==undefined){a.push(ret);}}
else if(type==='column'||type==='column-rows'||type==='row'||type==='cell'){items=this[i];if(type==='column-rows'){rows=_selector_row_indexes(context[i],selector.opts);}
for(j=0,jen=items.length;j<jen;j++){item=items[j];if(type==='cell'){ret=fn.call(apiInst,context[i],item.row,item.column,i,j);}
else{ret=fn.call(apiInst,context[i],item,i,j,rows);}
if(ret!==undefined){a.push(ret);}}}}
if(a.length||alwaysNew){var api=new _Api(context,flatten?a.concat.apply([],a):a);var apiSelector=api.selector;apiSelector.rows=selector.rows;apiSelector.cols=selector.cols;apiSelector.opts=selector.opts;return api;}
return this;},lastIndexOf:__arrayProto.lastIndexOf||function(obj,start)
{return this.indexOf.apply(this.toArray.reverse(),arguments);},length:0,map:function(fn)
{var a=[];if(__arrayProto.map){a=__arrayProto.map.call(this,fn,this);}
else{for(var i=0,ien=this.length;i<ien;i++){a.push(fn.call(this,this[i],i));}}
return new _Api(this.context,a);},pluck:function(prop)
{return this.map(function(el){return el[prop];});},pop:__arrayProto.pop,push:__arrayProto.push,reduce:__arrayProto.reduce||function(fn,init)
{return _fnReduce(this,fn,init,0,this.length,1);},reduceRight:__arrayProto.reduceRight||function(fn,init)
{return _fnReduce(this,fn,init,this.length-1,-1,-1);},reverse:__arrayProto.reverse,selector:null,shift:__arrayProto.shift,slice:function(){return new _Api(this.context,this);},sort:__arrayProto.sort,splice:__arrayProto.splice,toArray:function()
{return __arrayProto.slice.call(this);},to$:function()
{return $(this);},toJQuery:function()
{return $(this);},unique:function()
{return new _Api(this.context,_unique(this));},unshift:__arrayProto.unshift});_Api.extend=function(scope,obj,ext)
{if(!ext.length||!obj||(!(obj instanceof _Api)&&!obj.__dt_wrapper)){return;}
var
i,ien,j,jen,struct,inner,methodScoping=function(scope,fn,struc){return function(){var ret=fn.apply(scope,arguments);_Api.extend(ret,ret,struc.methodExt);return ret;};};for(i=0,ien=ext.length;i<ien;i++){struct=ext[i];obj[struct.name]=typeof struct.val==='function'?methodScoping(scope,struct.val,struct):$.isPlainObject(struct.val)?{}:struct.val;obj[struct.name].__dt_wrapper=true;_Api.extend(scope,obj[struct.name],struct.propExt);}};_Api.register=_api_register=function(name,val)
{if($.isArray(name)){for(var j=0,jen=name.length;j<jen;j++){_Api.register(name[j],val);}
return;}
var
i,ien,heir=name.split('.'),struct=__apiStruct,key,method;var find=function(src,name){for(var i=0,ien=src.length;i<ien;i++){if(src[i].name===name){return src[i];}}
return null;};for(i=0,ien=heir.length;i<ien;i++){method=heir[i].indexOf('()')!==-1;key=method?heir[i].replace('()',''):heir[i];var src=find(struct,key);if(!src){src={name:key,val:{},methodExt:[],propExt:[]};struct.push(src);}
if(i===ien-1){src.val=val;}
else{struct=method?src.methodExt:src.propExt;}}};_Api.registerPlural=_api_registerPlural=function(pluralName,singularName,val){_Api.register(pluralName,val);_Api.register(singularName,function(){var ret=val.apply(this,arguments);if(ret===this){return this;}
else if(ret instanceof _Api){return ret.length?$.isArray(ret[0])?new _Api(ret.context,ret[0]):ret[0]:undefined;}
return ret;});};var __table_selector=function(selector,a)
{if(typeof selector==='number'){return[a[selector]];}
var nodes=$.map(a,function(el,i){return el.nTable;});return $(nodes)
.filter(selector)
.map(function(i){var idx=$.inArray(this,nodes);return a[idx];})
.toArray();};_api_register('tables()',function(selector){return selector?new _Api(__table_selector(selector,this.context)):this;});_api_register('table()',function(selector){var tables=this.tables(selector);var ctx=tables.context;return ctx.length?new _Api(ctx[0]):tables;});_api_registerPlural('tables().nodes()','table().node()',function(){return this.iterator('table',function(ctx){return ctx.nTable;},1);});_api_registerPlural('tables().body()','table().body()',function(){return this.iterator('table',function(ctx){return ctx.nTBody;},1);});_api_registerPlural('tables().header()','table().header()',function(){return this.iterator('table',function(ctx){return ctx.nTHead;},1);});_api_registerPlural('tables().footer()','table().footer()',function(){return this.iterator('table',function(ctx){return ctx.nTFoot;},1);});_api_registerPlural('tables().containers()','table().container()',function(){return this.iterator('table',function(ctx){return ctx.nTableWrapper;},1);});_api_register('draw()',function(paging){return this.iterator('table',function(settings){if(paging==='page'){_fnDraw(settings);}
else{if(typeof paging==='string'){paging=paging==='full-hold'?false:true;}
_fnReDraw(settings,paging===false);}});});_api_register('page()',function(action){if(action===undefined){return this.page.info().page;}
return this.iterator('table',function(settings){_fnPageChange(settings,action);});});_api_register('page.info()',function(action){if(this.context.length===0){return undefined;}
var
settings=this.context[0],start=settings._iDisplayStart,len=settings.oFeatures.bPaginate?settings._iDisplayLength:-1,visRecords=settings.fnRecordsDisplay(),all=len===-1;return{"page":all?0:Math.floor(start/len),"pages":all?1:Math.ceil(visRecords/len),"start":start,"end":settings.fnDisplayEnd(),"length":len,"recordsTotal":settings.fnRecordsTotal(),"recordsDisplay":visRecords,"serverSide":_fnDataSource(settings)==='ssp'};});_api_register('page.len()',function(len){if(len===undefined){return this.context.length!==0?this.context[0]._iDisplayLength:undefined;}
return this.iterator('table',function(settings){_fnLengthChange(settings,len);});});var __reload=function(settings,holdPosition,callback){if(callback){var api=new _Api(settings);api.one('draw',function(){callback(api.ajax.json());});}
if(_fnDataSource(settings)=='ssp'){_fnReDraw(settings,holdPosition);}
else{_fnProcessingDisplay(settings,true);var xhr=settings.jqXHR;if(xhr&&xhr.readyState!==4){xhr.abort();}
_fnBuildAjax(settings,[],function(json){_fnClearTable(settings);var data=_fnAjaxDataSrc(settings,json);for(var i=0,ien=data.length;i<ien;i++){_fnAddData(settings,data[i]);}
_fnReDraw(settings,holdPosition);_fnProcessingDisplay(settings,false);});}};_api_register('ajax.json()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].json;}});_api_register('ajax.params()',function(){var ctx=this.context;if(ctx.length>0){return ctx[0].oAjaxData;}});_api_register('ajax.reload()',function(callback,resetPaging){return this.iterator('table',function(settings){__reload(settings,resetPaging===false,callback);});});_api_register('ajax.url()',function(url){var ctx=this.context;if(url===undefined){if(ctx.length===0){return undefined;}
ctx=ctx[0];return ctx.ajax?$.isPlainObject(ctx.ajax)?ctx.ajax.url:ctx.ajax:ctx.sAjaxSource;}
return this.iterator('table',function(settings){if($.isPlainObject(settings.ajax)){settings.ajax.url=url;}
else{settings.ajax=url;}});});_api_register('ajax.url().load()',function(callback,resetPaging){return this.iterator('table',function(ctx){__reload(ctx,resetPaging===false,callback);});});var _selector_run=function(type,selector,selectFn,settings,opts)
{var
out=[],res,a,i,ien,j,jen,selectorType=typeof selector;if(!selector||selectorType==='string'||selectorType==='function'||selector.length===undefined){selector=[selector];}
for(i=0,ien=selector.length;i<ien;i++){a=selector[i]&&selector[i].split&&!selector[i].match(/[\[\(:]/)?selector[i].split(','):[selector[i]];for(j=0,jen=a.length;j<jen;j++){res=selectFn(typeof a[j]==='string'?$.trim(a[j]):a[j]);if(res&&res.length){out=out.concat(res);}}}
var ext=_ext.selector[type];if(ext.length){for(i=0,ien=ext.length;i<ien;i++){out=ext[i](settings,opts,out);}}
return _unique(out);};var _selector_opts=function(opts)
{if(!opts){opts={};}
if(opts.filter&&opts.search===undefined){opts.search=opts.filter;}
return $.extend({search:'none',order:'current',page:'all'},opts);};var _selector_first=function(inst)
{for(var i=0,ien=inst.length;i<ien;i++){if(inst[i].length>0){inst[0]=inst[i];inst[0].length=1;inst.length=1;inst.context=[inst.context[i]];return inst;}}
inst.length=0;return inst;};var _selector_row_indexes=function(settings,opts)
{var
i,ien,tmp,a=[],displayFiltered=settings.aiDisplay,displayMaster=settings.aiDisplayMaster;var
search=opts.search,order=opts.order,page=opts.page;if(_fnDataSource(settings)=='ssp'){return search==='removed'?[]:_range(0,displayMaster.length);}
else if(page=='current'){for(i=settings._iDisplayStart,ien=settings.fnDisplayEnd();i<ien;i++){a.push(displayFiltered[i]);}}
else if(order=='current'||order=='applied'){a=search=='none'?displayMaster.slice():search=='applied'?displayFiltered.slice():$.map(displayMaster,function(el,i){return $.inArray(el,displayFiltered)===-1?el:null;});}
else if(order=='index'||order=='original'){for(i=0,ien=settings.aoData.length;i<ien;i++){if(search=='none'){a.push(i);}
else{tmp=$.inArray(i,displayFiltered);if((tmp===-1&&search=='removed')||(tmp>=0&&search=='applied'))
{a.push(i);}}}}
return a;};var __row_selector=function(settings,selector,opts)
{var rows;var run=function(sel){var selInt=_intVal(sel);var i,ien;if(selInt!==null&&!opts){return[selInt];}
if(!rows){rows=_selector_row_indexes(settings,opts);}
if(selInt!==null&&$.inArray(selInt,rows)!==-1){return[selInt];}
else if(sel===null||sel===undefined||sel===''){return rows;}
if(typeof sel==='function'){return $.map(rows,function(idx){var row=settings.aoData[idx];return sel(idx,row._aData,row.nTr)?idx:null;});}
var nodes=_removeEmpty(_pluck_order(settings.aoData,rows,'nTr'));if(sel.nodeName){if(sel._DT_RowIndex!==undefined){return[sel._DT_RowIndex];}
else if(sel._DT_CellIndex){return[sel._DT_CellIndex.row];}
else{var host=$(sel).closest('*[data-dt-row]');return host.length?[host.data('dt-row')]:[];}}
if(typeof sel==='string'&&sel.charAt(0)==='#'){var rowObj=settings.aIds[sel.replace(/^#/,'')];if(rowObj!==undefined){return[rowObj.idx];}}
return $(nodes)
.filter(sel)
.map(function(){return this._DT_RowIndex;})
.toArray();};return _selector_run('row',selector,run,settings,opts);};_api_register('rows()',function(selector,opts){if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __row_selector(settings,selector,opts);},1);inst.selector.rows=selector;inst.selector.opts=opts;return inst;});_api_register('rows().nodes()',function(){return this.iterator('row',function(settings,row){return settings.aoData[row].nTr||undefined;},1);});_api_register('rows().data()',function(){return this.iterator(true,'rows',function(settings,rows){return _pluck_order(settings.aoData,rows,'_aData');},1);});_api_registerPlural('rows().cache()','row().cache()',function(type){return this.iterator('row',function(settings,row){var r=settings.aoData[row];return type==='search'?r._aFilterData:r._aSortData;},1);});_api_registerPlural('rows().invalidate()','row().invalidate()',function(src){return this.iterator('row',function(settings,row){_fnInvalidate(settings,row,src);});});_api_registerPlural('rows().indexes()','row().index()',function(){return this.iterator('row',function(settings,row){return row;},1);});_api_registerPlural('rows().ids()','row().id()',function(hash){var a=[];var context=this.context;for(var i=0,ien=context.length;i<ien;i++){for(var j=0,jen=this[i].length;j<jen;j++){var id=context[i].rowIdFn(context[i].aoData[this[i][j]]._aData);a.push((hash===true?'#':'')+id);}}
return new _Api(context,a);});_api_registerPlural('rows().remove()','row().remove()',function(){var that=this;this.iterator('row',function(settings,row,thatIdx){var data=settings.aoData;var rowData=data[row];var i,ien,j,jen;var loopRow,loopCells;data.splice(row,1);for(i=0,ien=data.length;i<ien;i++){loopRow=data[i];loopCells=loopRow.anCells;if(loopRow.nTr!==null){loopRow.nTr._DT_RowIndex=i;}
if(loopCells!==null){for(j=0,jen=loopCells.length;j<jen;j++){loopCells[j]._DT_CellIndex.row=i;}}}
_fnDeleteIndex(settings.aiDisplayMaster,row);_fnDeleteIndex(settings.aiDisplay,row);_fnDeleteIndex(that[thatIdx],row,false);if(settings._iRecordsDisplay>0){settings._iRecordsDisplay--;}
_fnLengthOverflow(settings);var id=settings.rowIdFn(rowData._aData);if(id!==undefined){delete settings.aIds[id];}});this.iterator('table',function(settings){for(var i=0,ien=settings.aoData.length;i<ien;i++){settings.aoData[i].idx=i;}});return this;});_api_register('rows.add()',function(rows){var newRows=this.iterator('table',function(settings){var row,i,ien;var out=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){out.push(_fnAddTr(settings,row)[0]);}
else{out.push(_fnAddData(settings,row));}}
return out;},1);var modRows=this.rows(-1);modRows.pop();$.merge(modRows,newRows);return modRows;});_api_register('row()',function(selector,opts){return _selector_first(this.rows(selector,opts));});_api_register('row().data()',function(data){var ctx=this.context;if(data===undefined){return ctx.length&&this.length?ctx[0].aoData[this[0]]._aData:undefined;}
ctx[0].aoData[this[0]]._aData=data;_fnInvalidate(ctx[0],this[0],'data');return this;});_api_register('row().node()',function(){var ctx=this.context;return ctx.length&&this.length?ctx[0].aoData[this[0]].nTr||null:null;});_api_register('row.add()',function(row){if(row instanceof $&&row.length){row=row[0];}
var rows=this.iterator('table',function(settings){if(row.nodeName&&row.nodeName.toUpperCase()==='TR'){return _fnAddTr(settings,row)[0];}
return _fnAddData(settings,row);});return this.row(rows[0]);});var __details_add=function(ctx,row,data,klass)
{var rows=[];var addRow=function(r,k){if($.isArray(r)||r instanceof $){for(var i=0,ien=r.length;i<ien;i++){addRow(r[i],k);}
return;}
if(r.nodeName&&r.nodeName.toLowerCase()==='tr'){rows.push(r);}
else{var created=$('<tr><td/></tr>').addClass(k);$('td',created)
.addClass(k)
.html(r)
[0].colSpan=_fnVisbleColumns(ctx);rows.push(created[0]);}};addRow(data,klass);if(row._details){row._details.detach();}
row._details=$(rows);if(row._detailsShow){row._details.insertAfter(row.nTr);}};var __details_remove=function(api,idx)
{var ctx=api.context;if(ctx.length){var row=ctx[0].aoData[idx!==undefined?idx:api[0]];if(row&&row._details){row._details.remove();row._detailsShow=undefined;row._details=undefined;}}};var __details_display=function(api,show){var ctx=api.context;if(ctx.length&&api.length){var row=ctx[0].aoData[api[0]];if(row._details){row._detailsShow=show;if(show){row._details.insertAfter(row.nTr);}
else{row._details.detach();}
__details_events(ctx[0]);}}};var __details_events=function(settings)
{var api=new _Api(settings);var namespace='.dt.DT_details';var drawEvent='draw'+namespace;var colvisEvent='column-visibility'+namespace;var destroyEvent='destroy'+namespace;var data=settings.aoData;api.off(drawEvent+' '+colvisEvent+' '+destroyEvent);if(_pluck(data,'_details').length>0){api.on(drawEvent,function(e,ctx){if(settings!==ctx){return;}
api.rows({page:'current'}).eq(0).each(function(idx){var row=data[idx];if(row._detailsShow){row._details.insertAfter(row.nTr);}});});api.on(colvisEvent,function(e,ctx,idx,vis){if(settings!==ctx){return;}
var row,visible=_fnVisbleColumns(ctx);for(var i=0,ien=data.length;i<ien;i++){row=data[i];if(row._details){row._details.children('td[colspan]').attr('colspan',visible);}}});api.on(destroyEvent,function(e,ctx){if(settings!==ctx){return;}
for(var i=0,ien=data.length;i<ien;i++){if(data[i]._details){__details_remove(api,i);}}});}};var _emp='';var _child_obj=_emp+'row().child';var _child_mth=_child_obj+'()';_api_register(_child_mth,function(data,klass){var ctx=this.context;if(data===undefined){return ctx.length&&this.length?ctx[0].aoData[this[0]]._details:undefined;}
else if(data===true){this.child.show();}
else if(data===false){__details_remove(this);}
else if(ctx.length&&this.length){__details_add(ctx[0],ctx[0].aoData[this[0]],data,klass);}
return this;});_api_register([_child_obj+'.show()',_child_mth+'.show()'],function(show){__details_display(this,true);return this;});_api_register([_child_obj+'.hide()',_child_mth+'.hide()'],function(){__details_display(this,false);return this;});_api_register([_child_obj+'.remove()',_child_mth+'.remove()'],function(){__details_remove(this);return this;});_api_register(_child_obj+'.isShown()',function(){var ctx=this.context;if(ctx.length&&this.length){return ctx[0].aoData[this[0]]._detailsShow||false;}
return false;});var __re_column_selector=/^([^:]+):(name|visIdx|visible)$/;var __columnData=function(settings,column,r1,r2,rows){var a=[];for(var row=0,ien=rows.length;row<ien;row++){a.push(_fnGetCellData(settings,rows[row],column));}
return a;};var __column_selector=function(settings,selector,opts)
{var
columns=settings.aoColumns,names=_pluck(columns,'sName'),nodes=_pluck(columns,'nTh');var run=function(s){var selInt=_intVal(s);if(s===''){return _range(columns.length);}
if(selInt!==null){return[selInt>=0?selInt:columns.length+selInt];}
if(typeof s==='function'){var rows=_selector_row_indexes(settings,opts);return $.map(columns,function(col,idx){return s(idx,__columnData(settings,idx,0,0,rows),nodes[idx])?idx:null;});}
var match=typeof s==='string'?s.match(__re_column_selector):'';if(match){switch(match[2]){case'visIdx':case'visible':var idx=parseInt(match[1],10);if(idx<0){var visColumns=$.map(columns,function(col,i){return col.bVisible?i:null;});return[visColumns[visColumns.length+idx]];}
return[_fnVisibleToColumnIndex(settings,idx)];case'name':return $.map(names,function(name,i){return name===match[1]?i:null;});default:return[];}}
if(s.nodeName&&s._DT_CellIndex){return[s._DT_CellIndex.column];}
var jqResult=$(nodes)
.filter(s)
.map(function(){return $.inArray(this,nodes);})
.toArray();if(jqResult.length||!s.nodeName){return jqResult;}
var host=$(s).closest('*[data-dt-column]');return host.length?[host.data('dt-column')]:[];};return _selector_run('column',selector,run,settings,opts);};var __setColumnVis=function(settings,column,vis){var
cols=settings.aoColumns,col=cols[column],data=settings.aoData,row,cells,i,ien,tr;if(vis===undefined){return col.bVisible;}
if(col.bVisible===vis){return;}
if(vis){var insertBefore=$.inArray(true,_pluck(cols,'bVisible'),column+1);for(i=0,ien=data.length;i<ien;i++){tr=data[i].nTr;cells=data[i].anCells;if(tr){tr.insertBefore(cells[column],cells[insertBefore]||null);}}}
else{$(_pluck(settings.aoData,'anCells',column)).detach();}
col.bVisible=vis;_fnDrawHead(settings,settings.aoHeader);_fnDrawHead(settings,settings.aoFooter);_fnSaveState(settings);};_api_register('columns()',function(selector,opts){if(selector===undefined){selector='';}
else if($.isPlainObject(selector)){opts=selector;selector='';}
opts=_selector_opts(opts);var inst=this.iterator('table',function(settings){return __column_selector(settings,selector,opts);},1);inst.selector.cols=selector;inst.selector.opts=opts;return inst;});_api_registerPlural('columns().header()','column().header()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTh;},1);});_api_registerPlural('columns().footer()','column().footer()',function(selector,opts){return this.iterator('column',function(settings,column){return settings.aoColumns[column].nTf;},1);});_api_registerPlural('columns().data()','column().data()',function(){return this.iterator('column-rows',__columnData,1);});_api_registerPlural('columns().dataSrc()','column().dataSrc()',function(){return this.iterator('column',function(settings,column){return settings.aoColumns[column].mData;},1);});_api_registerPlural('columns().cache()','column().cache()',function(type){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,type==='search'?'_aFilterData':'_aSortData',column);},1);});_api_registerPlural('columns().nodes()','column().nodes()',function(){return this.iterator('column-rows',function(settings,column,i,j,rows){return _pluck_order(settings.aoData,rows,'anCells',column);},1);});_api_registerPlural('columns().visible()','column().visible()',function(vis,calc){var ret=this.iterator('column',function(settings,column){if(vis===undefined){return settings.aoColumns[column].bVisible;}
__setColumnVis(settings,column,vis);});if(vis!==undefined){this.iterator('column',function(settings,column){_fnCallbackFire(settings,null,'column-visibility',[settings,column,vis,calc]);});if(calc===undefined||calc){this.columns.adjust();}}
return ret;});_api_registerPlural('columns().indexes()','column().index()',function(type){return this.iterator('column',function(settings,column){return type==='visible'?_fnColumnIndexToVisible(settings,column):column;},1);});_api_register('columns.adjust()',function(){return this.iterator('table',function(settings){_fnAdjustColumnSizing(settings);},1);});_api_register('column.index()',function(type,idx){if(this.context.length!==0){var ctx=this.context[0];if(type==='fromVisible'||type==='toData'){return _fnVisibleToColumnIndex(ctx,idx);}
else if(type==='fromData'||type==='toVisible'){return _fnColumnIndexToVisible(ctx,idx);}}});_api_register('column()',function(selector,opts){return _selector_first(this.columns(selector,opts));});var __cell_selector=function(settings,selector,opts)
{var data=settings.aoData;var rows=_selector_row_indexes(settings,opts);var cells=_removeEmpty(_pluck_order(data,rows,'anCells'));var allCells=$([].concat.apply([],cells));var row;var columns=settings.aoColumns.length;var a,i,ien,j,o,host;var run=function(s){var fnSelector=typeof s==='function';if(s===null||s===undefined||fnSelector){a=[];for(i=0,ien=rows.length;i<ien;i++){row=rows[i];for(j=0;j<columns;j++){o={row:row,column:j};if(fnSelector){host=data[row];if(s(o,_fnGetCellData(settings,row,j),host.anCells?host.anCells[j]:null)){a.push(o);}}
else{a.push(o);}}}
return a;}
if($.isPlainObject(s)){return[s];}
var jqResult=allCells
.filter(s)
.map(function(i,el){return{row:el._DT_CellIndex.row,column:el._DT_CellIndex.column};})
.toArray();if(jqResult.length||!s.nodeName){return jqResult;}
host=$(s).closest('*[data-dt-row]');return host.length?[{row:host.data('dt-row'),column:host.data('dt-column')}]:[];};return _selector_run('cell',selector,run,settings,opts);};_api_register('cells()',function(rowSelector,columnSelector,opts){if($.isPlainObject(rowSelector)){if(rowSelector.row===undefined){opts=rowSelector;rowSelector=null;}
else{opts=columnSelector;columnSelector=null;}}
if($.isPlainObject(columnSelector)){opts=columnSelector;columnSelector=null;}
if(columnSelector===null||columnSelector===undefined){return this.iterator('table',function(settings){return __cell_selector(settings,rowSelector,_selector_opts(opts));});}
var columns=this.columns(columnSelector,opts);var rows=this.rows(rowSelector,opts);var a,i,ien,j,jen;var cells=this.iterator('table',function(settings,idx){a=[];for(i=0,ien=rows[idx].length;i<ien;i++){for(j=0,jen=columns[idx].length;j<jen;j++){a.push({row:rows[idx][i],column:columns[idx][j]});}}
return a;},1);$.extend(cells.selector,{cols:columnSelector,rows:rowSelector,opts:opts});return cells;});_api_registerPlural('cells().nodes()','cell().node()',function(){return this.iterator('cell',function(settings,row,column){var data=settings.aoData[row];return data&&data.anCells?data.anCells[column]:undefined;},1);});_api_register('cells().data()',function(){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column);},1);});_api_registerPlural('cells().cache()','cell().cache()',function(type){type=type==='search'?'_aFilterData':'_aSortData';return this.iterator('cell',function(settings,row,column){return settings.aoData[row][type][column];},1);});_api_registerPlural('cells().render()','cell().render()',function(type){return this.iterator('cell',function(settings,row,column){return _fnGetCellData(settings,row,column,type);},1);});_api_registerPlural('cells().indexes()','cell().index()',function(){return this.iterator('cell',function(settings,row,column){return{row:row,column:column,columnVisible:_fnColumnIndexToVisible(settings,column)};},1);});_api_registerPlural('cells().invalidate()','cell().invalidate()',function(src){return this.iterator('cell',function(settings,row,column){_fnInvalidate(settings,row,src,column);});});_api_register('cell()',function(rowSelector,columnSelector,opts){return _selector_first(this.cells(rowSelector,columnSelector,opts));});_api_register('cell().data()',function(data){var ctx=this.context;var cell=this[0];if(data===undefined){return ctx.length&&cell.length?_fnGetCellData(ctx[0],cell[0].row,cell[0].column):undefined;}
_fnSetCellData(ctx[0],cell[0].row,cell[0].column,data);_fnInvalidate(ctx[0],cell[0].row,'data',cell[0].column);return this;});_api_register('order()',function(order,dir){var ctx=this.context;if(order===undefined){return ctx.length!==0?ctx[0].aaSorting:undefined;}
if(typeof order==='number'){order=[[order,dir]];}
else if(order.length&&!$.isArray(order[0])){order=Array.prototype.slice.call(arguments);}
return this.iterator('table',function(settings){settings.aaSorting=order.slice();});});_api_register('order.listener()',function(node,column,callback){return this.iterator('table',function(settings){_fnSortAttachListener(settings,node,column,callback);});});_api_register('order.fixed()',function(set){if(!set){var ctx=this.context;var fixed=ctx.length?ctx[0].aaSortingFixed:undefined;return $.isArray(fixed)?{pre:fixed}:fixed;}
return this.iterator('table',function(settings){settings.aaSortingFixed=$.extend(true,{},set);});});_api_register(['columns().order()','column().order()'],function(dir){var that=this;return this.iterator('table',function(settings,i){var sort=[];$.each(that[i],function(j,col){sort.push([col,dir]);});settings.aaSorting=sort;});});_api_register('search()',function(input,regex,smart,caseInsen){var ctx=this.context;if(input===undefined){return ctx.length!==0?ctx[0].oPreviousSearch.sSearch:undefined;}
return this.iterator('table',function(settings){if(!settings.oFeatures.bFilter){return;}
_fnFilterComplete(settings,$.extend({},settings.oPreviousSearch,{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen}),1);});});_api_registerPlural('columns().search()','column().search()',function(input,regex,smart,caseInsen){return this.iterator('column',function(settings,column){var preSearch=settings.aoPreSearchCols;if(input===undefined){return preSearch[column].sSearch;}
if(!settings.oFeatures.bFilter){return;}
$.extend(preSearch[column],{"sSearch":input+"","bRegex":regex===null?false:regex,"bSmart":smart===null?true:smart,"bCaseInsensitive":caseInsen===null?true:caseInsen});_fnFilterComplete(settings,settings.oPreviousSearch,1);});});_api_register('state()',function(){return this.context.length?this.context[0].oSavedState:null;});_api_register('state.clear()',function(){return this.iterator('table',function(settings){settings.fnStateSaveCallback.call(settings.oInstance,settings,{});});});_api_register('state.loaded()',function(){return this.context.length?this.context[0].oLoadedState:null;});_api_register('state.save()',function(){return this.iterator('table',function(settings){_fnSaveState(settings);});});DataTable.versionCheck=DataTable.fnVersionCheck=function(version)
{var aThis=DataTable.version.split('.');var aThat=version.split('.');var iThis,iThat;for(var i=0,iLen=aThat.length;i<iLen;i++){iThis=parseInt(aThis[i],10)||0;iThat=parseInt(aThat[i],10)||0;if(iThis===iThat){continue;}
return iThis>iThat;}
return true;};DataTable.isDataTable=DataTable.fnIsDataTable=function(table)
{var t=$(table).get(0);var is=false;if(table instanceof DataTable.Api){return true;}
$.each(DataTable.settings,function(i,o){var head=o.nScrollHead?$('table',o.nScrollHead)[0]:null;var foot=o.nScrollFoot?$('table',o.nScrollFoot)[0]:null;if(o.nTable===t||head===t||foot===t){is=true;}});return is;};DataTable.tables=DataTable.fnTables=function(visible)
{var api=false;if($.isPlainObject(visible)){api=visible.api;visible=visible.visible;}
var a=$.map(DataTable.settings,function(o){if(!visible||(visible&&$(o.nTable).is(':visible'))){return o.nTable;}});return api?new _Api(a):a;};DataTable.camelToHungarian=_fnCamelToHungarian;_api_register('$()',function(selector,opts){var
rows=this.rows(opts).nodes(),jqRows=$(rows);return $([].concat(jqRows.filter(selector).toArray(),jqRows.find(selector).toArray()));});$.each(['on','one','off'],function(i,key){_api_register(key+'()',function(){var args=Array.prototype.slice.call(arguments);args[0]=$.map(args[0].split(/\s/),function(e){return!e.match(/\.dt\b/)?e+'.dt':e;}).join(' ');var inst=$(this.tables().nodes());inst[key].apply(inst,args);return this;});});_api_register('clear()',function(){return this.iterator('table',function(settings){_fnClearTable(settings);});});_api_register('settings()',function(){return new _Api(this.context,this.context);});_api_register('init()',function(){var ctx=this.context;return ctx.length?ctx[0].oInit:null;});_api_register('data()',function(){return this.iterator('table',function(settings){return _pluck(settings.aoData,'_aData');}).flatten();});_api_register('destroy()',function(remove){remove=remove||false;return this.iterator('table',function(settings){var orig=settings.nTableWrapper.parentNode;var classes=settings.oClasses;var table=settings.nTable;var tbody=settings.nTBody;var thead=settings.nTHead;var tfoot=settings.nTFoot;var jqTable=$(table);var jqTbody=$(tbody);var jqWrapper=$(settings.nTableWrapper);var rows=$.map(settings.aoData,function(r){return r.nTr;});var i,ien;settings.bDestroying=true;_fnCallbackFire(settings,"aoDestroyCallback","destroy",[settings]);if(!remove){new _Api(settings).columns().visible(true);}
jqWrapper.off('.DT').find(':not(tbody *)').off('.DT');$(window).off('.DT-'+settings.sInstance);if(table!=thead.parentNode){jqTable.children('thead').detach();jqTable.append(thead);}
if(tfoot&&table!=tfoot.parentNode){jqTable.children('tfoot').detach();jqTable.append(tfoot);}
settings.aaSorting=[];settings.aaSortingFixed=[];_fnSortingClasses(settings);$(rows).removeClass(settings.asStripeClasses.join(' '));$('th, td',thead).removeClass(classes.sSortable+' '+
classes.sSortableAsc+' '+classes.sSortableDesc+' '+classes.sSortableNone);jqTbody.children().detach();jqTbody.append(rows);var removedMethod=remove?'remove':'detach';jqTable[removedMethod]();jqWrapper[removedMethod]();if(!remove&&orig){orig.insertBefore(table,settings.nTableReinsertBefore);jqTable
.css('width',settings.sDestroyWidth)
.removeClass(classes.sTable);ien=settings.asDestroyStripes.length;if(ien){jqTbody.children().each(function(i){$(this).addClass(settings.asDestroyStripes[i%ien]);});}}
var idx=$.inArray(settings,DataTable.settings);if(idx!==-1){DataTable.settings.splice(idx,1);}});});$.each(['column','row','cell'],function(i,type){_api_register(type+'s().every()',function(fn){var opts=this.selector.opts;var api=this;return this.iterator(type,function(settings,arg1,arg2,arg3,arg4){fn.call(api[type](arg1,type==='cell'?arg2:opts,type==='cell'?opts:undefined),arg1,arg2,arg3,arg4);});});});_api_register('i18n()',function(token,def,plural){var ctx=this.context[0];var resolved=_fnGetObjectDataFn(token)(ctx.oLanguage);if(resolved===undefined){resolved=def;}
if(plural!==undefined&&$.isPlainObject(resolved)){resolved=resolved[plural]!==undefined?resolved[plural]:resolved._;}
return resolved.replace('%d',plural);});DataTable.version="1.10.16";DataTable.settings=[];DataTable.models={};DataTable.models.oSearch={"bCaseInsensitive":true,"sSearch":"","bRegex":false,"bSmart":true};DataTable.models.oRow={"nTr":null,"anCells":null,"_aData":[],"_aSortData":null,"_aFilterData":null,"_sFilterRow":null,"_sRowStripe":"","src":null,"idx":-1};DataTable.models.oColumn={"idx":null,"aDataSort":null,"asSorting":null,"bSearchable":null,"bSortable":null,"bVisible":null,"_sManualType":null,"_bAttrSrc":false,"fnCreatedCell":null,"fnGetData":null,"fnSetData":null,"mData":null,"mRender":null,"nTh":null,"nTf":null,"sClass":null,"sContentPadding":null,"sDefaultContent":null,"sName":null,"sSortDataType":'std',"sSortingClass":null,"sSortingClassJUI":null,"sTitle":null,"sType":null,"sWidth":null,"sWidthOrig":null};DataTable.defaults={"aaData":null,"aaSorting":[[0,'asc']],"aaSortingFixed":[],"ajax":null,"aLengthMenu":[10,25,50,100],"aoColumns":null,"aoColumnDefs":null,"aoSearchCols":[],"asStripeClasses":null,"bAutoWidth":true,"bDeferRender":false,"bDestroy":false,"bFilter":true,"bInfo":true,"bLengthChange":true,"bPaginate":true,"bProcessing":false,"bRetrieve":false,"bScrollCollapse":false,"bServerSide":false,"bSort":true,"bSortMulti":true,"bSortCellsTop":false,"bSortClasses":true,"bStateSave":false,"fnCreatedRow":null,"fnDrawCallback":null,"fnFooterCallback":null,"fnFormatNumber":function(toFormat){return toFormat.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands);},"fnHeaderCallback":null,"fnInfoCallback":null,"fnInitComplete":null,"fnPreDrawCallback":null,"fnRowCallback":null,"fnServerData":null,"fnServerParams":null,"fnStateLoadCallback":function(settings){try{return JSON.parse((settings.iStateDuration===-1?sessionStorage:localStorage).getItem('DataTables_'+settings.sInstance+'_'+location.pathname));}catch(e){}},"fnStateLoadParams":null,"fnStateLoaded":null,"fnStateSaveCallback":function(settings,data){try{(settings.iStateDuration===-1?sessionStorage:localStorage).setItem('DataTables_'+settings.sInstance+'_'+location.pathname,JSON.stringify(data));}catch(e){}},"fnStateSaveParams":null,"iStateDuration":7200,"iDeferLoading":null,"iDisplayLength":10,"iDisplayStart":0,"iTabIndex":0,"oClasses":{},"oLanguage":{"oAria":{"sSortAscending":": activate to sort column ascending","sSortDescending":": activate to sort column descending"},"oPaginate":{"sFirst":"First","sLast":"Last","sNext":"Next","sPrevious":"Previous"},"sEmptyTable":"No data available in table","sInfo":"Showing _START_ to _END_ of _TOTAL_ entries","sInfoEmpty":"Showing 0 to 0 of 0 entries","sInfoFiltered":"(filtered from _MAX_ total entries)","sInfoPostFix":"","sDecimal":"","sThousands":",","sLengthMenu":"Show _MENU_ entries","sLoadingRecords":"Loading...","sProcessing":"Processing...","sSearch":"Search:","sSearchPlaceholder":"","sUrl":"","sZeroRecords":"No matching records found"},"oSearch":$.extend({},DataTable.models.oSearch),"sAjaxDataProp":"data","sAjaxSource":null,"sDom":"lfrtip","searchDelay":null,"sPaginationType":"simple_numbers","sScrollX":"","sScrollXInner":"","sScrollY":"","sServerMethod":"GET","renderer":null,"rowId":"DT_RowId"};_fnHungarianMap(DataTable.defaults);DataTable.defaults.column={"aDataSort":null,"iDataSort":-1,"asSorting":['asc','desc'],"bSearchable":true,"bSortable":true,"bVisible":true,"fnCreatedCell":null,"mData":null,"mRender":null,"sCellType":"td","sClass":"","sContentPadding":"","sDefaultContent":null,"sName":"","sSortDataType":"std","sTitle":null,"sType":null,"sWidth":null};_fnHungarianMap(DataTable.defaults.column);DataTable.models.oSettings={"oFeatures":{"bAutoWidth":null,"bDeferRender":null,"bFilter":null,"bInfo":null,"bLengthChange":null,"bPaginate":null,"bProcessing":null,"bServerSide":null,"bSort":null,"bSortMulti":null,"bSortClasses":null,"bStateSave":null},"oScroll":{"bCollapse":null,"iBarWidth":0,"sX":null,"sXInner":null,"sY":null},"oLanguage":{"fnInfoCallback":null},"oBrowser":{"bScrollOversize":false,"bScrollbarLeft":false,"bBounding":false,"barWidth":0},"ajax":null,"aanFeatures":[],"aoData":[],"aiDisplay":[],"aiDisplayMaster":[],"aIds":{},"aoColumns":[],"aoHeader":[],"aoFooter":[],"oPreviousSearch":{},"aoPreSearchCols":[],"aaSorting":null,"aaSortingFixed":[],"asStripeClasses":null,"asDestroyStripes":[],"sDestroyWidth":0,"aoRowCallback":[],"aoHeaderCallback":[],"aoFooterCallback":[],"aoDrawCallback":[],"aoRowCreatedCallback":[],"aoPreDrawCallback":[],"aoInitComplete":[],"aoStateSaveParams":[],"aoStateLoadParams":[],"aoStateLoaded":[],"sTableId":"","nTable":null,"nTHead":null,"nTFoot":null,"nTBody":null,"nTableWrapper":null,"bDeferLoading":false,"bInitialised":false,"aoOpenRows":[],"sDom":null,"searchDelay":null,"sPaginationType":"two_button","iStateDuration":0,"aoStateSave":[],"aoStateLoad":[],"oSavedState":null,"oLoadedState":null,"sAjaxSource":null,"sAjaxDataProp":null,"bAjaxDataGet":true,"jqXHR":null,"json":undefined,"oAjaxData":undefined,"fnServerData":null,"aoServerParams":[],"sServerMethod":null,"fnFormatNumber":null,"aLengthMenu":null,"iDraw":0,"bDrawing":false,"iDrawError":-1,"_iDisplayLength":10,"_iDisplayStart":0,"_iRecordsTotal":0,"_iRecordsDisplay":0,"oClasses":{},"bFiltered":false,"bSorted":false,"bSortCellsTop":null,"oInit":null,"aoDestroyCallback":[],"fnRecordsTotal":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsTotal*1:this.aiDisplayMaster.length;},"fnRecordsDisplay":function()
{return _fnDataSource(this)=='ssp'?this._iRecordsDisplay*1:this.aiDisplay.length;},"fnDisplayEnd":function()
{var
len=this._iDisplayLength,start=this._iDisplayStart,calc=start+len,records=this.aiDisplay.length,features=this.oFeatures,paginate=features.bPaginate;if(features.bServerSide){return paginate===false||len===-1?start+records:Math.min(start+len,this._iRecordsDisplay);}
else{return!paginate||calc>records||len===-1?records:calc;}},"oInstance":null,"sInstance":null,"iTabIndex":0,"nScrollHead":null,"nScrollFoot":null,"aLastSort":[],"oPlugins":{},"rowIdFn":null,"rowId":null};DataTable.ext=_ext={buttons:{},classes:{},builder:"-source-",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:DataTable.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:DataTable.version};$.extend(_ext,{afnFiltering:_ext.search,aTypes:_ext.type.detect,ofnSearch:_ext.type.search,oSort:_ext.type.order,afnSortData:_ext.order,aoFeatures:_ext.feature,oApi:_ext.internal,oStdClasses:_ext.classes,oPagination:_ext.pager});$.extend(DataTable.ext.classes,{"sTable":"dataTable","sNoFooter":"no-footer","sPageButton":"paginate_button","sPageButtonActive":"current","sPageButtonDisabled":"disabled","sStripeOdd":"odd","sStripeEven":"even","sRowEmpty":"dataTables_empty","sWrapper":"dataTables_wrapper","sFilter":"dataTables_filter","sInfo":"dataTables_info","sPaging":"dataTables_paginate paging_","sLength":"dataTables_length","sProcessing":"dataTables_processing","sSortAsc":"sorting_asc","sSortDesc":"sorting_desc","sSortable":"sorting","sSortableAsc":"sorting_asc_disabled","sSortableDesc":"sorting_desc_disabled","sSortableNone":"sorting_disabled","sSortColumn":"sorting_","sFilterInput":"","sLengthSelect":"","sScrollWrapper":"dataTables_scroll","sScrollHead":"dataTables_scrollHead","sScrollHeadInner":"dataTables_scrollHeadInner","sScrollBody":"dataTables_scrollBody","sScrollFoot":"dataTables_scrollFoot","sScrollFootInner":"dataTables_scrollFootInner","sHeaderTH":"","sFooterTH":"","sSortJUIAsc":"","sSortJUIDesc":"","sSortJUI":"","sSortJUIAscAllowed":"","sSortJUIDescAllowed":"","sSortJUIWrapper":"","sSortIcon":"","sJUIHeader":"","sJUIFooter":""});var extPagination=DataTable.ext.pager;function _numbers(page,pages){var
numbers=[],buttons=extPagination.numbers_length,half=Math.floor(buttons/2),i=1;if(pages<=buttons){numbers=_range(0,pages);}
else if(page<=half){numbers=_range(0,buttons-2);numbers.push('ellipsis');numbers.push(pages-1);}
else if(page>=pages-1-half){numbers=_range(pages-(buttons-2),pages);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
else{numbers=_range(page-half+2,page+half-1);numbers.push('ellipsis');numbers.push(pages-1);numbers.splice(0,0,'ellipsis');numbers.splice(0,0,0);}
numbers.DT_el='span';return numbers;}
$.extend(extPagination,{simple:function(page,pages){return['previous','next'];},full:function(page,pages){return['first','previous','next','last'];},numbers:function(page,pages){return[_numbers(page,pages)];},simple_numbers:function(page,pages){return['previous',_numbers(page,pages),'next'];},full_numbers:function(page,pages){return['first','previous',_numbers(page,pages),'next','last'];},first_last_numbers:function(page,pages){return['first',_numbers(page,pages),'last'];},_numbers:_numbers,numbers_length:7});$.extend(true,DataTable.ext.renderer,{pageButton:{_:function(settings,host,idx,buttons,page,pages){var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var aria=settings.oLanguage.oAria.paginate||{};var btnDisplay,btnClass,counter=0;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){_fnPageChange(settings,e.data.action,true);};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){var inner=$('<'+(button.DT_el||'div')+'/>')
.appendTo(container);attach(inner,button);}
else{btnDisplay=null;btnClass='';switch(button){case'ellipsis':container.append('<span class="ellipsis">&#x2026;</span>');break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' '+classes.sPageButtonDisabled);break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' '+classes.sPageButtonDisabled);break;default:btnDisplay=button+1;btnClass=page===button?classes.sPageButtonActive:'';break;}
if(btnDisplay!==null){node=$('<a>',{'class':classes.sPageButton+' '+btnClass,'aria-controls':settings.sTableId,'aria-label':aria[button],'data-dt-idx':counter,'tabindex':settings.iTabIndex,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null})
.html(btnDisplay)
.appendTo(container);_fnBindAction(node,{action:button},clickHandler);counter++;}}}};var activeEl;try{activeEl=$(host).find(document.activeElement).data('dt-idx');}
catch(e){}
attach($(host).empty(),buttons);if(activeEl!==undefined){$(host).find('[data-dt-idx='+activeEl+']').focus();}}}});$.extend(DataTable.ext.type.detect,[function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal)?'num'+decimal:null;},function(d,settings)
{if(d&&!(d instanceof Date)&&!_re_date.test(d)){return null;}
var parsed=Date.parse(d);return(parsed!==null&&!isNaN(parsed))||_empty(d)?'date':null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _isNumber(d,decimal,true)?'num-fmt'+decimal:null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal)?'html-num'+decimal:null;},function(d,settings)
{var decimal=settings.oLanguage.sDecimal;return _htmlNumeric(d,decimal,true)?'html-num-fmt'+decimal:null;},function(d,settings)
{return _empty(d)||(typeof d==='string'&&d.indexOf('<')!==-1)?'html':null;}]);$.extend(DataTable.ext.type.search,{html:function(data){return _empty(data)?data:typeof data==='string'?data
.replace(_re_new_lines," ")
.replace(_re_html,""):'';},string:function(data){return _empty(data)?data:typeof data==='string'?data.replace(_re_new_lines," "):data;}});var __numericReplace=function(d,decimalPlace,re1,re2){if(d!==0&&(!d||d==='-')){return-Infinity;}
if(decimalPlace){d=_numToDecimal(d,decimalPlace);}
if(d.replace){if(re1){d=d.replace(re1,'');}
if(re2){d=d.replace(re2,'');}}
return d*1;};function _addNumericSort(decimalPlace){$.each({"num":function(d){return __numericReplace(d,decimalPlace);},"num-fmt":function(d){return __numericReplace(d,decimalPlace,_re_formatted_numeric);},"html-num":function(d){return __numericReplace(d,decimalPlace,_re_html);},"html-num-fmt":function(d){return __numericReplace(d,decimalPlace,_re_html,_re_formatted_numeric);}},function(key,fn){_ext.type.order[key+decimalPlace+'-pre']=fn;if(key.match(/^html\-/)){_ext.type.search[key+decimalPlace]=_ext.type.search.html;}});}
$.extend(_ext.type.order,{"date-pre":function(d){return Date.parse(d)||-Infinity;},"html-pre":function(a){return _empty(a)?'':a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+'';},"string-pre":function(a){return _empty(a)?'':typeof a==='string'?a.toLowerCase():!a.toString?'':a.toString();},"string-asc":function(x,y){return((x<y)?-1:((x>y)?1:0));},"string-desc":function(x,y){return((x<y)?1:((x>y)?-1:0));}});_addNumericSort('');$.extend(true,DataTable.ext.renderer,{header:{_:function(settings,cell,column,classes){$(settings.nTable).on('order.dt.DT',function(e,ctx,sorting,columns){if(settings!==ctx){return;}
var colIdx=column.idx;cell
.removeClass(column.sSortingClass+' '+
classes.sSortAsc+' '+
classes.sSortDesc)
.addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);});},jqueryui:function(settings,cell,column,classes){$('<div/>')
.addClass(classes.sSortJUIWrapper)
.append(cell.contents())
.append($('<span/>')
.addClass(classes.sSortIcon+' '+column.sSortingClassJUI))
.appendTo(cell);$(settings.nTable).on('order.dt.DT',function(e,ctx,sorting,columns){if(settings!==ctx){return;}
var colIdx=column.idx;cell
.removeClass(classes.sSortAsc+" "+classes.sSortDesc)
.addClass(columns[colIdx]=='asc'?classes.sSortAsc:columns[colIdx]=='desc'?classes.sSortDesc:column.sSortingClass);cell
.find('span.'+classes.sSortIcon)
.removeClass(classes.sSortJUIAsc+" "+
classes.sSortJUIDesc+" "+
classes.sSortJUI+" "+
classes.sSortJUIAscAllowed+" "+
classes.sSortJUIDescAllowed)
.addClass(columns[colIdx]=='asc'?classes.sSortJUIAsc:columns[colIdx]=='desc'?classes.sSortJUIDesc:column.sSortingClassJUI);});}}});var __htmlEscapeEntities=function(d){return typeof d==='string'?d.replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'):d;};DataTable.render={number:function(thousands,decimal,precision,prefix,postfix){return{display:function(d){if(typeof d!=='number'&&typeof d!=='string'){return d;}
var negative=d<0?'-':'';var flo=parseFloat(d);if(isNaN(flo)){return __htmlEscapeEntities(d);}
flo=flo.toFixed(precision);d=Math.abs(flo);var intPart=parseInt(d,10);var floatPart=precision?decimal+(d-intPart).toFixed(precision).substring(2):'';return negative+(prefix||'')+
intPart.toString().replace(/\B(?=(\d{3})+(?!\d))/g,thousands)+
floatPart+
(postfix||'');}};},text:function(){return{display:__htmlEscapeEntities};}};function _fnExternApiFunc(fn)
{return function(){var args=[_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return DataTable.ext.internal[fn].apply(this,args);};}
$.extend(DataTable.ext.internal,{_fnExternApiFunc:_fnExternApiFunc,_fnBuildAjax:_fnBuildAjax,_fnAjaxUpdate:_fnAjaxUpdate,_fnAjaxParameters:_fnAjaxParameters,_fnAjaxUpdateDraw:_fnAjaxUpdateDraw,_fnAjaxDataSrc:_fnAjaxDataSrc,_fnAddColumn:_fnAddColumn,_fnColumnOptions:_fnColumnOptions,_fnAdjustColumnSizing:_fnAdjustColumnSizing,_fnVisibleToColumnIndex:_fnVisibleToColumnIndex,_fnColumnIndexToVisible:_fnColumnIndexToVisible,_fnVisbleColumns:_fnVisbleColumns,_fnGetColumns:_fnGetColumns,_fnColumnTypes:_fnColumnTypes,_fnApplyColumnDefs:_fnApplyColumnDefs,_fnHungarianMap:_fnHungarianMap,_fnCamelToHungarian:_fnCamelToHungarian,_fnLanguageCompat:_fnLanguageCompat,_fnBrowserDetect:_fnBrowserDetect,_fnAddData:_fnAddData,_fnAddTr:_fnAddTr,_fnNodeToDataIndex:_fnNodeToDataIndex,_fnNodeToColumnIndex:_fnNodeToColumnIndex,_fnGetCellData:_fnGetCellData,_fnSetCellData:_fnSetCellData,_fnSplitObjNotation:_fnSplitObjNotation,_fnGetObjectDataFn:_fnGetObjectDataFn,_fnSetObjectDataFn:_fnSetObjectDataFn,_fnGetDataMaster:_fnGetDataMaster,_fnClearTable:_fnClearTable,_fnDeleteIndex:_fnDeleteIndex,_fnInvalidate:_fnInvalidate,_fnGetRowElements:_fnGetRowElements,_fnCreateTr:_fnCreateTr,_fnBuildHead:_fnBuildHead,_fnDrawHead:_fnDrawHead,_fnDraw:_fnDraw,_fnReDraw:_fnReDraw,_fnAddOptionsHtml:_fnAddOptionsHtml,_fnDetectHeader:_fnDetectHeader,_fnGetUniqueThs:_fnGetUniqueThs,_fnFeatureHtmlFilter:_fnFeatureHtmlFilter,_fnFilterComplete:_fnFilterComplete,_fnFilterCustom:_fnFilterCustom,_fnFilterColumn:_fnFilterColumn,_fnFilter:_fnFilter,_fnFilterCreateSearch:_fnFilterCreateSearch,_fnEscapeRegex:_fnEscapeRegex,_fnFilterData:_fnFilterData,_fnFeatureHtmlInfo:_fnFeatureHtmlInfo,_fnUpdateInfo:_fnUpdateInfo,_fnInfoMacros:_fnInfoMacros,_fnInitialise:_fnInitialise,_fnInitComplete:_fnInitComplete,_fnLengthChange:_fnLengthChange,_fnFeatureHtmlLength:_fnFeatureHtmlLength,_fnFeatureHtmlPaginate:_fnFeatureHtmlPaginate,_fnPageChange:_fnPageChange,_fnFeatureHtmlProcessing:_fnFeatureHtmlProcessing,_fnProcessingDisplay:_fnProcessingDisplay,_fnFeatureHtmlTable:_fnFeatureHtmlTable,_fnScrollDraw:_fnScrollDraw,_fnApplyToChildren:_fnApplyToChildren,_fnCalculateColumnWidths:_fnCalculateColumnWidths,_fnThrottle:_fnThrottle,_fnConvertToWidth:_fnConvertToWidth,_fnGetWidestNode:_fnGetWidestNode,_fnGetMaxLenString:_fnGetMaxLenString,_fnStringToCss:_fnStringToCss,_fnSortFlatten:_fnSortFlatten,_fnSort:_fnSort,_fnSortAria:_fnSortAria,_fnSortListener:_fnSortListener,_fnSortAttachListener:_fnSortAttachListener,_fnSortingClasses:_fnSortingClasses,_fnSortData:_fnSortData,_fnSaveState:_fnSaveState,_fnLoadState:_fnLoadState,_fnSettingsFromNode:_fnSettingsFromNode,_fnLog:_fnLog,_fnMap:_fnMap,_fnBindAction:_fnBindAction,_fnCallbackReg:_fnCallbackReg,_fnCallbackFire:_fnCallbackFire,_fnLengthOverflow:_fnLengthOverflow,_fnRenderer:_fnRenderer,_fnDataSource:_fnDataSource,_fnRowAttributes:_fnRowAttributes,_fnCalculateEnd:function(){}});$.fn.dataTable=DataTable;DataTable.$=$;$.fn.dataTableSettings=DataTable.settings;$.fn.dataTableExt=DataTable.ext;$.fn.DataTable=function(opts){return $(this).dataTable(opts).api();};$.each(DataTable,function(prop,val){$.fn.DataTable[prop]=val;});return $.fn.dataTable;}));
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery','datatables.net'],function($){return factory($,window,document);});}
else if(typeof exports==='object'){module.exports=function(root,$){if(!root){root=window;}
if(!$||!$.fn.dataTable){$=require('datatables.net')(root,$).$;}
return factory($,root,root.document);};}
else{factory(jQuery,window,document);}}(function($,window,document,undefined){'use strict';var DataTable=$.fn.dataTable;$.extend(true,DataTable.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>>"+
"<'row'<'col-sm-12'tr>>"+
"<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:'bootstrap'});$.extend(DataTable.ext.classes,{sWrapper:"dataTables_wrapper container-fluid dt-bootstrap4",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-control form-control-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"});DataTable.ext.renderer.pageButton.bootstrap=function(settings,host,idx,buttons,page,pages){var api=new DataTable.Api(settings);var classes=settings.oClasses;var lang=settings.oLanguage.oPaginate;var aria=settings.oLanguage.oAria.paginate||{};var btnDisplay,btnClass,counter=0;var attach=function(container,buttons){var i,ien,node,button;var clickHandler=function(e){e.preventDefault();if(!$(e.currentTarget).hasClass('disabled')&&api.page()!=e.data.action){api.page(e.data.action).draw('page');}};for(i=0,ien=buttons.length;i<ien;i++){button=buttons[i];if($.isArray(button)){attach(container,button);}
else{btnDisplay='';btnClass='';switch(button){case'ellipsis':btnDisplay='&#x2026;';btnClass='disabled';break;case'first':btnDisplay=lang.sFirst;btnClass=button+(page>0?'':' disabled');break;case'previous':btnDisplay=lang.sPrevious;btnClass=button+(page>0?'':' disabled');break;case'next':btnDisplay=lang.sNext;btnClass=button+(page<pages-1?'':' disabled');break;case'last':btnDisplay=lang.sLast;btnClass=button+(page<pages-1?'':' disabled');break;default:btnDisplay=button+1;btnClass=page===button?'active':'';break;}
if(btnDisplay){node=$('<li>',{'class':classes.sPageButton+' '+btnClass,'id':idx===0&&typeof button==='string'?settings.sTableId+'_'+button:null})
.append($('<a>',{'href':'#','aria-controls':settings.sTableId,'aria-label':aria[button],'data-dt-idx':counter,'tabindex':settings.iTabIndex,'class':'page-link'})
.html(btnDisplay))
.appendTo(container);settings.oApi._fnBindAction(node,{action:button},clickHandler);counter++;}}}};var activeEl;try{activeEl=$(host).find(document.activeElement).data('dt-idx');}
catch(e){}
attach($(host).empty().html('<ul class="pagination"/>').children('ul'),buttons);if(activeEl!==undefined){$(host).find('[data-dt-idx='+activeEl+']').focus();}};return DataTable;}));
/**
 * Timeago is a jQuery plugin that makes it easy to support automatically
 * updating fuzzy timestamps (e.g. "4 minutes ago" or "about 1 day ago").
 *
 * @name timeago
 * @version 1.6.7
 * @requires jQuery >=1.5.0 <4.0
 * @author Ryan McGeary
 * @license MIT License - http://www.opensource.org/licenses/mit-license.php
 *
 * For usage and examples, visit:
 * http://timeago.yarp.com/
 *
 * Copyright (c) 2008-2019, Ryan McGeary (ryan -[at]- mcgeary [*dot*] org)
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module==='object'&&typeof module.exports==='object'){factory(require('jquery'));}else{factory(jQuery);}}(function($){$.timeago=function(timestamp){if(timestamp instanceof Date){return inWords(timestamp);}else if(typeof timestamp==="string"){return inWords($.timeago.parse(timestamp));}else if(typeof timestamp==="number"){return inWords(new Date(timestamp));}else{return inWords($.timeago.datetime(timestamp));}};var $t=$.timeago;$.extend($.timeago,{settings:{refreshMillis:60000,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,autoDispose:true,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(distanceMillis){if(!this.settings.allowPast&&!this.settings.allowFuture){throw'timeago allowPast and allowFuture settings can not both be set to false.';}
var $l=this.settings.strings;var prefix=$l.prefixAgo;var suffix=$l.suffixAgo;if(this.settings.allowFuture){if(distanceMillis<0){prefix=$l.prefixFromNow;suffix=$l.suffixFromNow;}}
if(!this.settings.allowPast&&distanceMillis>=0){return this.settings.strings.inPast;}
var seconds=Math.abs(distanceMillis)/1000;var minutes=seconds/60;var hours=minutes/60;var days=hours/24;var years=days/365;function substitute(stringOrFunction,number){var string=$.isFunction(stringOrFunction)?stringOrFunction(number,distanceMillis):stringOrFunction;var value=($l.numbers&&$l.numbers[number])||number;return string.replace(/%d/i,value);}
var words=seconds<45&&substitute($l.seconds,Math.round(seconds))||seconds<90&&substitute($l.minute,1)||minutes<45&&substitute($l.minutes,Math.round(minutes))||minutes<90&&substitute($l.hour,1)||hours<24&&substitute($l.hours,Math.round(hours))||hours<42&&substitute($l.day,1)||days<30&&substitute($l.days,Math.round(days))||days<45&&substitute($l.month,1)||days<365&&substitute($l.months,Math.round(days/30))||years<1.5&&substitute($l.year,1)||substitute($l.years,Math.round(years));var separator=$l.wordSeparator||"";if($l.wordSeparator===undefined){separator=" ";}
return $.trim([prefix,words,suffix].join(separator));},parse:function(iso8601){var s=$.trim(iso8601);s=s.replace(/\.\d+/,"");s=s.replace(/-/,"/").replace(/-/,"/");s=s.replace(/T/," ").replace(/Z/," UTC");s=s.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2");s=s.replace(/([\+\-]\d\d)$/," $100");return new Date(s);},datetime:function(elem){var iso8601=$t.isTime(elem)?$(elem).attr("datetime"):$(elem).attr("title");return $t.parse(iso8601);},isTime:function(elem){return $(elem).get(0).tagName.toLowerCase()==="time";}});var functions={init:function(){functions.dispose.call(this);var refresh_el=$.proxy(refresh,this);refresh_el();var $s=$t.settings;if($s.refreshMillis>0){this._timeagoInterval=setInterval(refresh_el,$s.refreshMillis);}},update:function(timestamp){var date=(timestamp instanceof Date)?timestamp:$t.parse(timestamp);$(this).data('timeago',{datetime:date});if($t.settings.localeTitle){$(this).attr("title",date.toLocaleString());}
refresh.apply(this);},updateFromDOM:function(){$(this).data('timeago',{datetime:$t.parse($t.isTime(this)?$(this).attr("datetime"):$(this).attr("title"))});refresh.apply(this);},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval);this._timeagoInterval=null;}}};$.fn.timeago=function(action,options){var fn=action?functions[action]:functions.init;if(!fn){throw new Error("Unknown function name '"+action+"' for timeago");}
this.each(function(){fn.call(this,options);});return this;};function refresh(){var $s=$t.settings;if($s.autoDispose&&!$.contains(document.documentElement,this)){$(this).timeago("dispose");return this;}
var data=prepareData(this);if(!isNaN(data.datetime)){if($s.cutoff===0||Math.abs(distance(data.datetime))<$s.cutoff){$(this).text(inWords(data.datetime));}else{if($(this).attr('title').length>0){$(this).text($(this).attr('title'));}}}
return this;}
function prepareData(element){element=$(element);if(!element.data("timeago")){element.data("timeago",{datetime:$t.datetime(element)});var text=$.trim(element.text());if($t.settings.localeTitle){element.attr("title",element.data('timeago').datetime.toLocaleString());}else if(text.length>0&&!($t.isTime(element)&&element.attr("title"))){element.attr("title",text);}}
return element.data("timeago");}
function inWords(date){return $t.inWords(distance(date));}
function distance(date){return(new Date().getTime()-date.getTime());}
document.createElement("abbr");document.createElement("time");}));
function setupForAll(){$('[data-toggle="tooltip"]').tooltip({html:true});$('[data-toggle="popover"]').popover({html:true});$('[data-toggle="popover"]').on('click',function(e){e.target.closest('a').focus();});}
function addFlash(status,text,container){if(!container){container=$('#flash-messages');}
var div=$('<div class="alert alert-primary alert-dismissible fade show" role="alert"></div>');if(typeof text==='string'){div.append($('<span>'+text+'</span>'));}else{div.append(text);}
div.append($('<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'));div.addClass('alert-'+status);container.append(div);return div;}
function addUniqueFlash(status,id,text,container){if(!window.uniqueFlashMessages){window.uniqueFlashMessages={};}
var existingFlashMessage=window.uniqueFlashMessages[id];if(existingFlashMessage){existingFlashMessage.find('span').first().text(text);return;}
var msgElement=addFlash(status,text,container);window.uniqueFlashMessages[id]=msgElement;msgElement.on('closed.bs.alert',function(){delete window.uniqueFlashMessages[id];});}
function parseQueryParams(){var params={};$.each(window.location.search.substr(1).split('&'),function(index,param){var equationSignIndex=param.indexOf('=');var key,value;if(equationSignIndex<0){key=decodeURIComponent(param);value=undefined;}else{key=decodeURIComponent(param.substr(0,equationSignIndex));value=decodeURIComponent(param.substr(equationSignIndex+1));}
if(Array.isArray(params[key])){params[key].push(value);}else{params[key]=[value];}});return params;}
function updateQueryParams(params){if(!history.replaceState){return;}
var search=[];$.each(params,function(key,values){$.each(values,function(index,value){if(value===undefined){search.push(encodeURIComponent(key));}else{search.push(encodeURIComponent(key)+'='+encodeURIComponent(value));}});});history.replaceState({},document.title,window.location.pathname+'?'+search.join('&'));}
function reloadPage(){location.reload();}
function htmlEscape(str){if(str===undefined||str===null){return'';}
return String(str)
.replace(/&/g,'&amp;')
.replace(/"/g,'&quot;')
.replace(/'/g,'&#39;')
.replace(/</g,'&lt;')
.replace(/>/g,'&gt;');}
function pollFolderStats(url){url=url.concat('?status=all');$.get(url).done(function(data){$('.folder-stats-servers-recent').text((data?data.recent:'no data'));$('.folder-stats-servers-outdated').text(data?data.outdated:'no data');$('.folder-stats-servers-not-scanned').text(data?data.not_scanned:'no data');$('.folder-stats-last-sync').text(data?data.last_sync:'no data');if(!data){$('.folder-sync-job-position').text('no data');}else if(data.sync_job_position){$('.folder-sync-job-position').text('Position in queue: '.concat(data.sync_job_position));}else{$('.folder-sync-job-position').text('Not scheduled');}});}
function pollFolderJobStats(id){var url='/rest/folder_jobs/'+id;$.get(url).done(function(data){$('.folder-job-sync-waiting-count').text(data.sync_waiting_count);$('.folder-job-sync-running-count').text(data.sync_running_count);$('.folder-job-scan-waiting-count').text(data.scan_waiting_count);$('.folder-job-scan-running-count').text(data.scan_running_count);});}
function handleAjaxError(request,code,error){if(request.responseJSON!=undefined&&request.responseJSON.error){error+=': '+request.responseJSON.error;}else if(request.responseText!=undefined&&request.responseText){error+=': '+request.responseText.error;}
addFlash('danger','Error: '+error);}
function deleteAndRedirect(btn,redir){$.ajax({url:btn.dataset.deleteurl,method:'DELETE',dataType:'json',success:function(data){location.href=redir;},error:handleAjaxError,});}
function encodeComponentExceptColon(str){return(encodeURIComponent(str)
.replace(/%(3A|2B)/g,(str,hex)=>String.fromCharCode(parseInt(hex,16))));}
function setupBrowseTable(path){var columns=[];if(path!='/'){path=path+'/';}
columns.push({data:'name',className:'name',defaultContent:"",type:"version-string",render:function(data,type,row,meta){if(type==='display'){var d=data;var t='';if(row['name'].slice(-1)==='/'){d=data.slice(0,-1);t='/';}
var desc=row['desc'];if(desc){data='<a style="--desc: \''+desc+'\'" href="'+path+encodeComponentExceptColon(d)+t+'">'+data+'</a>';}else{data='<a href="'+path+encodeComponentExceptColon(d)+t+'">'+data+'</a>';}}
if(type==='sort'){if(data.slice(-1)!='/'){data='~'+data;}else{data='_'+data;}}
return data;}});columns.push({data:'mtime',className:'mtime',defaultContent:"",render:function(data,type,row,meta){if(type==='display'&&data>0){data=new Date(data*1000).toLocaleString().replace(/.\d+$/,"").replace(/:\d\d (AM|PM)$/," $1");if(row['name'].slice(-1)!='/'){data='<a href="'+path+encodeComponentExceptColon(row['name'])+'.mirrorlist">'+data+'</a>';}else{data='<a href="'+path+encodeComponentExceptColon(row['name'].slice(0,-1))+'/">'+data+'</a>';}}
return data;}});columns.push({data:'size',className:'size',defaultContent:"",render:function(data,type,row,meta){if(type==='display'){if(row['name'].slice(-1)=='/'){return'';}
if(data===null){data='...';}else if(Math.abs(data)>1024){const units=['kB','MB','GB','TB','PB','EB','ZB','YB'];let u=-1;do{data/=1024;++u;}while(Math.round(Math.abs(data)*10)>=1024&&u<units.length-1);data=data.toFixed(1)+' '+units[u];}
data='<a href="'+path+encodeComponentExceptColon(row['name'])+'.mirrorlist">'+data+'</a>';}
return data;}});jQuery.extend(jQuery.fn.dataTableExt.oSort,{"version-string-asc":function(a,b){return a.localeCompare(b,undefined,{numeric:true,sensitivity:'base'});},"version-string-desc":function(a,b){return b.localeCompare(a,undefined,{numeric:true,sensitivity:'base'});}});var url=$("#browse_api_url").val();var table=$('.browsetable');var dataTable=table.DataTable({ajax:{url:url,},lengthMenu:[            [20,100,1000,10,-1],            [20,100,1000,10,'All'],        ],columns:columns,search:{regex:true,},});dataTable.rowData=[];}
var mirrors_country=[];var mirrors_region=[];var mirrors_rest=[];var mapObject=[{},{},{},{}];var mapAlias=["map1","map2","map3","mapAll"];var mapScale=[4,3,1,1];var mapCenter=[1,1,0,0];function handleMirrorlistAjaxError(request,code,error,element){if(request.responseJSON!=undefined&&request.responseJSON.error){error+=': '+request.responseJSON.error;}else if(request.responseText!=undefined&&request.responseText){error+=': '+request.responseText.error;}
if(element){element.innerText='Error: '+error;}}
function loadMirrorlist(url,country,region,element1,element2,element3){$.ajax({url:url,method:'GET',data:{COUNTRY:country,REGION:region},success:function(response){var l1=response.l1;for(var i=0;i<l1.length;i++){var obj=l1[i];if(!obj){continue;}
var a=document.createElement("a");var span=document.createElement("span");span.innerHTML=" ("+obj.location+")";var ul=document.getElementById(element1);var li=document.createElement("li");a.textContent=obj.hostname;a.setAttribute('href',obj.url);li.appendChild(a);li.appendChild(span);ul.appendChild(li);mirrors_country.push({url:obj.url,hostname:obj.hostname,country:obj.location,lat:obj.lat,lng:obj.lng,});document.getElementById("h51").innerText=mirrors_country.length;}
var ulh=document.getElementById(element1.concat('tohide'));if(ulh){ulh.style.display="none";}
var l2=response.l2;for(var i=0;i<l2.length;i++){var obj=l2[i];if(!obj){continue;}
var a=document.createElement("a");var span=document.createElement("span");span.innerHTML=" ("+obj.location+")";var ul=document.getElementById(element2);var li=document.createElement("li");a.textContent=obj.hostname;a.setAttribute('href',obj.url);li.appendChild(a);li.appendChild(span);ul.appendChild(li);mirrors_region.push({url:obj.url,hostname:obj.hostname,country:obj.location,lat:obj.lat,lng:obj.lng,});document.getElementById("h52").innerText=mirrors_region.length;}
ulh=document.getElementById(element2.concat('tohide'));if(ulh){ulh.style.display="none";}
var l3=response.l3;for(var i=0;i<l3.length;i++){var obj=l3[i];if(!obj){continue;}
var a=document.createElement("a");var span=document.createElement("span");span.innerHTML=" ("+obj.location+")";var ul=document.getElementById(element3);var li=document.createElement("li");a.textContent=obj.hostname;a.setAttribute('href',obj.url);li.appendChild(a);li.appendChild(span);ul.appendChild(li);mirrors_rest.push({url:obj.url,hostname:obj.hostname,country:obj.location,lat:obj.lat,lng:obj.lng,});document.getElementById("h53").innerText=mirrors_rest.length;}
ulh=document.getElementById(element3.concat('tohide'));if(ulh){ulh.style.display="none";}},error:function(xhr,ajaxOptions,thrownError,controlToShow){var ulh=document.getElementById(element1.concat('tohide'));if(ulh){ulh.style.display="none";}
ulh=document.getElementById(element2.concat('tohide'));if(ulh){ulh.style.display="none";}
ulh=document.getElementById(element3.concat('tohide'));if(ulh){ulh.style.display="none";}
handleMirrorlistAjaxError(xhr,ajaxOptions,thrownError,element);},});}
function toggleMap(lat,lng,idx){var x=document.getElementById(mapAlias[idx]);if(x.style.display==="none"){initMap(lat,lng,idx);x.style.display="block";}else{x.style.display="none";mapObject[idx].off();mapObject[idx].remove();mapObject[idx]={};}}
function initMap(lat,lng,idx){var center=[0,0];if(mapCenter[idx]){center=[lat,lng];}
mapObject[idx]=L.map(mapAlias[idx]).setView(center,mapScale[idx]);var map=mapObject[idx];const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);var arr;switch(idx){case 0:arr=mirrors_country;break;case 1:arr=mirrors_region;break;case 2:arr=mirrors_rest;break;default:arr=[].concat(mirrors_country,mirrors_region,mirrors_rest);}
for(const m of arr){var mirrormarker=L.marker([m.lat,m.lng]).addTo(map)
.bindPopup('<a href='+m.url+'>'+(new URL(m.url)).hostname+'</a>');if(preferred_url&&m.url==preferred_url){mirrormarker._icon.classList.add("huechange1");}}
const marker=L.marker([lat,lng]).addTo(map)
.bindPopup('<i>You</i>');marker._icon.classList.add("huechange");setTimeout(function(){map.invalidateSize();},100);}
function checkFileOnMirrors(path){$.ajax({url:'/rest/server/check_file?file='+path,type:"PUT",dataType:'json',success:function(response){handleCheckFileOnMirror(response.job_id);},error:handleAdminTableApiError});}
function handleCheckFileOnMirror(job_id){$(location).attr('href','/minion/jobs?id='+job_id);}
function setupReportTable(){var columns=[];columns.push({data:'region',defaultContent:""});columns.push({data:'country',defaultContent:""});columns.push({data:'url',defaultContent:""});$('#checkboxes label').each(function(){var columnName=$(this).text();if(columnName=='Blame'){return;}
columnName=columnName.trim().replace(/ /g,"").toLowerCase().replace(/\./g,"");if(columnName.match(/^\d/)){columnName='c'+columnName;}
columns.push({data:(columnName+'score'),defaultContent:""});columns.push({data:(columnName+'victim'),defaultContent:""});});var url=$("#reporttable_api_url").val();var table=$('.reporttable');var dataTable=table.DataTable({order:[[0,'asc']],ajax:{url:url,dataSrc:'report'},columns:columns,search:{regex:true,},});dataTable.rowData=[];$('#checkboxes').on('change',':checkbox',function(){layoutReportTable();});layoutReportTable();}
function layoutReportTable(){var dt=$('.reporttable').DataTable();var victim=1;if(!$('#victimcheckbox').is(":checked")){victim=0;}
var existchecked=0;$('#checkboxes label').each(function(){var columnName=$(this).text();if(columnName=='Blame'){return;}
var vis=1;if($("[ id='"+columnName+"checkbox' ]").is(":checked")){existchecked=1;}});var i=0;var firstColumnHack=0;var firstColumnIndex=3;$('#checkboxes label').each(function(){var lbl=$(this);var columnName=lbl.text();if(columnName=='Blame'){return;}
var vis=1;if(existchecked&&!$("[ id='"+columnName+"checkbox' ]").is(":checked")){vis=0;}
if(i==0){firstColumnHack=vis;}
var index=firstColumnIndex+2*i;if(vis!=dt.columns(index).visible()){dt.columns(index).visible(vis);}
if(vis&&victim!=dt.columns(index+1).visible()){dt.columns(index+1).visible(victim);}else if(!vis&&dt.columns(index+1).visible()){dt.columns(index+1).visible(vis);}
i=i+1;});dt.columns(firstColumnIndex).visible(firstColumnHack);}
function setupReportDownloadTable(column){var columns=[];var keys=column.split(',');columns.push({data:'dt',defaultContent:"",render:function(data){var date=new Date(data);return date.toLocaleDateString();}});columns.push({data:column,defaultContent:"",render:function(data,type,row,meta){data="";for(let i=0;i<keys.length;i++){if(data!=""){data=data+',';}
data=data+row[keys[i]];}
return data;}});columns.push({data:'total_requests',defaultContent:""});columns.push({data:'known_files_requested',defaultContent:""});columns.push({data:'known_files_redirected',defaultContent:""});columns.push({data:'bytes_redirected',defaultContent:"",render:function(data,type,row,meta){if(type==='display'){if(Math.abs(data)<1024){return data;}
const units=['kB','MB','GB','TB','PB','EB','ZB','YB'];let u=-1;do{data/=1024;++u;}while(Math.round(Math.abs(data)*10)>=1024&&u<units.length-1);return data.toFixed(1)+' '+units[u];}
return data;}});var url=$("#reporttable_api_url").val();var table=$('.reporttable');var dataTable=table.DataTable({order:[[0,'desc']],ajax:{url:url,},columns:columns,lengthMenu:[            [100,1000,10,-1],            [100,1000,10,'All'],        ],search:{regex:true,},});dataTable.rowData=[];}
function updateTextArea(textArea){textArea.style.height='auto';textArea.style.height=Math.min(textArea.scrollHeight+5,300)+'px';}
function extendAdminTableSearch(searchTerm){window.adminTable.search('(('+window.adminTable.search()+')|('+searchTerm+'))');}
var newRowId='new row';function showAdminTableRow(row){var adminTable=window.adminTable;var pageInfo=adminTable.page.info();var rowPosition=adminTable.rows({search:'applied'})[0].indexOf(row.index());if(rowPosition<0){var rowData=row.data();extendAdminTableSearch(!rowData.id?newRowId:rowData.id);rowPosition=adminTable.rows({search:'applied'})[0].indexOf(row.index());}
if(rowPosition<0){addFlash('info','The added/updated row has been filtered out.');return;}
if(rowPosition<pageInfo.start||rowPosition>=pageInfo.end){adminTable.page(Math.floor(rowPosition/adminTable.page.len())).draw(false);}
$('html').animate({scrollTop:$(row.node()).offset().top},250);}
function addAdminTableRow(){var adminTable=window.adminTable;var newRow=adminTable.row.add(adminTable.emptyRow);var newRowIndex=newRow.index();adminTable.rowData[newRowIndex]=jQuery.extend({isEditing:true},adminTable.emptyRow);newRow.invalidate().draw();showAdminTableRow(newRow);}
function isEditingAdminTableRow(meta){var rowData=window.adminTable.rowData;var rowIndex=meta.row;return rowIndex<rowData.length&&rowData[rowIndex].isEditing;}
function setEditingAdminTableRow(tdElement,editing,submitted){var adminTable=window.adminTable;var rowData=adminTable.rowData;var row=adminTable.row(tdElement);if(!row){addFlash('danger','Internal error: invalid table row/cell specified');return;}
var rowIndex=row.index();if(rowIndex<rowData.length){var data=rowData[rowIndex];data.isEditing=editing;if(submitted){row.data(data);}}
row.invalidate().draw(false);}
function refreshAdminTableRow(tdElement){window.adminTable.row(tdElement).invalidate().draw();}
function handleAdminTableApiError(request,status,error){if(request.responseJSON!=undefined&&request.responseJSON.error){error+=': '+request.responseJSON.error;}
addFlash('danger',error);}
function handleAdminTableSubmit(tdElement,response,id){setEditingAdminTableRow(tdElement,false,true);$.ajax({url:$("#admintable_api_url").val()+"/"+id,type:"GET",dataType:'json',success:function(resp){var rowData=resp[Object.keys(resp)[0]];if(rowData){rowData=rowData[0];}
if(!rowData){addFlash('danger','Internal error: server replied invalid row data.');return;}
var adminTable=window.adminTable;var row=adminTable.row(tdElement);var rowIndex=row.index();if(rowIndex>=adminTable.rowData.length){return;}
row.data(adminTable.rowData[rowIndex]=rowData).draw(false);showAdminTableRow(row);},error:handleAdminTableApiError,});}
function handleServerLocationSubmit(tdElement,response,id){$(location).attr('href','/minion/jobs?id='+response.job_id);}
function getAdminTableRowData(trElement,dataToSubmit,internalRowData){var tableHeadings=trElement.closest('table').find('th');trElement.find('td').each(function(){var th=tableHeadings.eq(this.cellIndex);var name=th.text().trim().toLowerCase();var value;if(th.hasClass("col_value")){value=$(this).find("input").val();if(name==='enabled'&&value===""){value="0";}
if(dataToSubmit){dataToSubmit[name]=value;}
if(internalRowData){internalRowData[name]=value;}}});}
function submitAdminTableRow(tdElement,id){var adminTable=window.adminTable;var rowIndex=adminTable.row(tdElement).index();if(rowIndex===undefined){addFlash('danger','Internal error: invalid table cell specified');return;}
var rowData=adminTable.rowData[rowIndex];if(!rowData){addFlash('danger','Internal error: row data is missing');return;}
var dataToSubmit={};try{getAdminTableRowData($(tdElement).parent('tr'),dataToSubmit,rowData);}catch(e){if(e.type!=='invalid line'){throw e;}
addFlash('danger','Line '+e.lineNo+' of settings is invalid: '+e.text);return;}
var url=$("#admintable_api_url").val();if(id){$.ajax({url:url+"/"+id,type:"POST",dataType:'json',data:dataToSubmit,headers:{'X-HTTP-Method-Override':'PUT'},success:function(response){handleAdminTableSubmit(tdElement,response,id);},error:handleAdminTableApiError});}else{$.ajax({url:url,type:"POST",dataType:'json',data:dataToSubmit,success:function(response){handleAdminTableSubmit(tdElement,response,response.id);},error:handleAdminTableApiError});}}
function submitServerLocationRow(tdElement,id){$.ajax({url:'/rest/server/location/'+id,type:"PUT",dataType:'json',success:function(response){handleServerLocationSubmit(tdElement,response,response.id);},error:handleAdminTableApiError});}
function removeAdminTableRow(tdElement){var adminTable=window.adminTable;var row=adminTable.row(tdElement);var rowIndex=row.index();if(rowIndex!==undefined&&rowIndex<adminTable.rowData.length){adminTable.rowData.splice(rowIndex,1);}
row.remove().draw();}
function deleteTableRow(tdElement,id){if(!confirm("Really delete?")){return;}
if(!id){removeAdminTableRow(tdElement);return;}
$.ajax({url:$("#admintable_api_url").val()+"/"+id,type:"DELETE",dataType:'json',success:function(){removeAdminTableRow(tdElement);},error:handleAdminTableApiError});}
function renderAdminTableValue(data,type,row,meta){if(type!=='display'){return data?data:'';}
if(isEditingAdminTableRow(meta)){return'<input type="text" value="'+htmlEscape(data)+'"/>';}
return htmlEscape(data);}
function renderAdminTableSettingsList(data,type,row,meta){var plainText=type!=='display';var edit=isEditingAdminTableRow(meta);var result='';if(edit){result+='<textarea class="key-value-pairs" oninput="updateTextArea(this);">';}
for(var j=0;j<data.length;j++){var keyValuePair=data[j];var key=htmlEscape(keyValuePair.key);var value=htmlEscape(keyValuePair.value);if(edit||plainText){result+=key+'='+value+'\n';}else{result+='<span class="key-value-pair"><span class="key">'+key+
'</span>=<span class="value">'+value+'</span></span><br/>';}}
if(edit){result+='</textarea>';}
return result;}
function renderAdminTableHostname(data,type,row,meta){if(type!=='display'){return data?data:'';}
if(isEditingAdminTableRow(meta)){return'<input type="text" value="'+htmlEscape(data)+'"/>';}
return data?'<a href="/app/server/'+htmlEscape(data)+'">'+htmlEscape(data)+'</>':'';}
function renderAdminTableLongText(data,type,row,meta){if(type!=='display'){return data?data:'';}
if(isEditingAdminTableRow(meta)){return'<input type="text" value="'+htmlEscape(data)+'"/>';}
if(data&&data.length>25){return data.substring(0,21)+'...';}
return data?data:'';}
function renderAdminTableDescription(data,type,row,meta){if(type!=='display'){return data?data:'';}
if(isEditingAdminTableRow(meta)){return'<textarea class="description">'+htmlEscape(data)+'</textarea>';}
return htmlEscape(data);}
function renderAdminTableActions(data,type,row,meta){if(type!=='display'){return data?data:newRowId;}
if(isEditingAdminTableRow(meta)){return renderEditableAdminTableActions(data,type,row,meta);}
if(!window.editable){return'';}
var url=$("#admintable_api_url").val();var noActions=document.getElementById("regionmirrorproviderpanel");var res='';if(!noActions){res='<button type="submit" class="btn" alt="Edit" title="Edit" onclick="setEditingAdminTableRow(this.parentElement, true, false);"><i class="far fa-edit"></i></button>';}
if(url=='/rest/server'&&data){return res+'<button type="submit" class="btn" alt="UpdateLocation" title="Update Location" onclick="submitServerLocationRow(this.parentElement, '+data+');"><i class="far fa-bookmark"></i></button>';}else{return res}}
function renderEditableAdminTableActions(data,type,row,meta){if(type!=='display'){return data?data:newRowId;}
if(!window.editable){return'';}
if(data){return'<button type="submit" class="btn" alt="Update" title="Update" onclick="submitAdminTableRow(this.parentElement, '+data+
');"><i class="far fa-save"></i></button><button type="submit" class="btn" alt="Cancel" title="Cancel" onclick="setEditingAdminTableRow(this.parentElement, false, true);"><i class="fa fa-undo"></i></button><button type="submit" class="btn" alt="Delete" title="Delete" onclick="deleteTableRow(this.parentElement, '+data+
');"><i class="fa fa-trash-alt"></i></button>';}else{return'<button type="submit" class="btn" alt="Add" title="Add" onclick="submitAdminTableRow(this.parentElement);"><i class="far fa-save"></i></button><button type="submit" class="btn" alt="Cancel" title="Cancel" onclick="deleteTableRow(this.parentElement);"><i class="fa fa-undo"></i></button>';}}
function setupAdminTable(editable){jQuery.extend(jQuery.fn.dataTableExt.oSort,{'empty-string-last-asc':function(str1,str2){if(str1===''){return 1;}
if(str2===''){return-1;}
return((str1<str2)?-1:((str1>str2)?1:0));},'empty-string-last-desc':function(str1,str2){if(str1===''){return 1;}
if(str2===''){return-1;}
return((str1<str2)?1:((str1>str2)?-1:0));}});var emptyRow={};var columns=[];var columnDefs=[];var thElements=$('.admintable thead th').each(function(){var th=$(this);var columnName;if(th.hasClass('col_action')){columnName='id';}else{columnName=th.text().trim().toLowerCase();}
columns.push({data:columnName});var columnDef={targets:columns.length-1,type:'empty-string-last',};if(th.hasClass('col_value')){if(columnName=='hostname'){columnDef.render=renderAdminTableHostname;}else if(columnName=='public notes'||columnName=='comment'||columnName=='sponsor'){columnDef.render=renderAdminTableLongText;}else{columnDef.render=renderAdminTableValue;}
emptyRow[columnName]="";}else if(th.hasClass('col_settings')){columnDef.render=renderAdminTableSettings;emptyRow.settings={};}else if(th.hasClass('col_settings_list')){columnDef.render=renderAdminTableSettingsList;columnDef.orderable=false;emptyRow.settings=[];}else if(th.hasClass('col_description')){columnDef.render=renderAdminTableDescription;emptyRow.description="";}else if(th.hasClass('col_action')){columnDef.render=renderAdminTableActions;columnDef.orderable=false;}else{emptyRow[columnName]="";}
columnDefs.push(columnDef);});var url=$("#admintable_api_url").val()+window.location.search;var table=$('.admintable');var dataTable=table.DataTable({order:[[0,'asc']],ajax:{url:url,dataSrc:function(json){var rowData=json[Object.keys(json)[0]];if(!rowData){addFlash('danger','Internal error: server response misses table data');return(dataTable.rowData=[]);}
return(dataTable.rowData=rowData);},},columns:columns,columnDefs:columnDefs,search:{regex:true,},fnInitComplete:function(oSettings,json){if(url==="/rest/server"||url=="/rest/myserver"){var servers=json.Server;if(!servers)
servers=json.MyServer;if(!servers)
return;var regions={};for(const server of servers){var region=server.region;if(region){if(!regions[region])regions[region]=1
else regions[region]+=1;}
var extra=server["extra regions"];if(extra){for(const x of extra.split(",")){if(x&&(!region||region!=x)){if(!regions[x])regions[x]=1
else regions[x]+=1;}}}}
if(Object.keys(regions).length<2)return;var panel=document.getElementById("regionspanel");if(!panel)return;var ul=document.getElementById("regionspanelul");if(!ul)return;Object.keys(regions).forEach(function(key){var li=document.createElement("li");li.style.float='left';li.style.margin='0 15px';var a=document.createElement("a");a.textContent=key+" ("+regions[key]+")";if(url=="/rest/myserver"){a.setAttribute("href","/app/myserver?region="+key);}else{a.setAttribute("href","/app/server?region="+key);}
li.appendChild(a);ul.appendChild(li);});panel.style.display="block";}},});dataTable.rowData=[];dataTable.emptyRow=emptyRow;dataTable.on('preDraw',function(){var rowData=dataTable.rowData;table.find('tr').each(function(){var row=adminTable.row(this);var rowIndex=row.index();if(rowIndex===undefined||rowIndex>=rowData.length){return;}
var data=jQuery.extend({},rowData[rowIndex]);if(!data.isEditing){return;}
getAdminTableRowData($(this),undefined,data);row.data(data);});});dataTable.on('draw',function(){table.find('textarea').each(function(){updateTextArea(this);});});window.editable=editable;window.adminTable=dataTable;table.find('th .help_popover').on('click',function(event){event.stopPropagation();});}
function setup_admin_user(){window.admin_user_table=$('#users').DataTable({order:[[0,'asc']]});$('#users').on('change','input[name="role"]:radio',function(){var username=$(this).parents('tr').find('.name').text();var role=$(this).attr('id');role=$('label[for="'+role+'"]').text();function findDefault(form){return form.find('input[class="default"]').first();}
function rollback(form){findDefault(form).prop('checked','checked');}
var form=$(this).parent('form');if(!confirm("Are you sure to put "+username+" into role: "+$.trim(role)+"?")){rollback(form);return;}
var data=form.serializeArray();var newRole=data[0].value;$.ajax({type:'POST',url:form.attr('action'),data:jQuery.param(data),success:function(data){findDefault(form).removeClass('default');form.find('input[value="'+newRole+'"]').addClass('default');},error:function(xhr,ajaxOptions,thrownError){rollback(form);var error_message='An error occurred when changing the user role. ';if(xhr.responseJSON&&xhr.responseJSON.error)
error_message+=xhr.responseJSON.error;addFlash('danger',error_message);}});});window.deleteUser=function(id){if(!confirm("Are you sure you want to delete this user?"))
return;$.ajax({url:'/admin/user/'+id,method:'DELETE',dataType:'json',success:function(){addFlash('info','The user was deleted successfully.');window.admin_user_table.row($("#user_"+id)).remove().draw();},error:function(xhr,ajaxOptions,thrownError){var error_message='An error occurred when deleting the user. ';if(xhr.responseJSON&&xhr.responseJSON.error)
error_message+=xhr.responseJSON.error;addFlash('danger',error_message);}});};}
var audit_url;var audit_ajax_url;function loadAuditLogTable(){$('#audit_log_table').DataTable({processing:true,serverSide:true,searchDelay:1000,search:{search:searchquery},ajax:{url:audit_ajax_url,type:"GET",dataType:'json'},columns:[{data:'event_time'},{data:'user'},{data:'event'},{data:'event_data'}],order:[[0,'desc']],columnDefs:[{targets:0,render:function(data,type,row){if(type==='display')
return'<a href="'+audit_url+'?event_id='+row.id+'" title='+data+'>'+jQuery.timeago(data+" UTC")+'</a>';else
return data;}},{targets:1,render:function(data,type,row){if(type==='display')
return'<a href="'+audit_url+'?user_id='+row.user_id+'" title="See all user actions"'+'>'+data+'</a>';else
return data;}},{targets:3,width:"50%",render:function(data,type,row){if(type==='display'&&data){var parsed_data;try{parsed_data=JSON.stringify(JSON.parse(data),null,2);}catch(e){parsed_data=data;}
return'<span class="audit_event_data" title="'+htmlEscape(parsed_data)+'">'+htmlEscape(parsed_data)+'</span>';}else{return data;}}},],});}
function setupServerNote(hostname){var table=$('#server_note');var dataTable=table.DataTable({ajax:{url:'/rest/server/note/'+hostname,},deferRender:true,columns:[{data:'dt'},{data:'acc'},{data:'kind'},{data:'msg'}],order:[[0,'desc']],initComplete:function(){this.api()
.columns()
.every(function(){var column=this;var colheader=this.header();var title=$(colheader).text().trim();if(title!=='Kind'){return false;}
var select=$('<select id="select_kind"><option value="">All</option></select>')
.appendTo($(column.header()).empty())
.on('change',function(){var val=$.fn.dataTable.util.escapeRegex($(this).val());column
.search(val?val:'',true,false)
.draw();});select.append('<option value="Note">Note</option>');select.append('<option value="Email">Email</option>');select.append('<option value="Ftp">Ftp</option>');select.append('<option value="Rsync">Rsync</option>');});}});}
function setupServerIncident(server_id){var table=$('#server_incident').DataTable({ajax:{url:'/rest/server/check/'+server_id,},deferRender:true,columns:[{data:'dt'},{data:'capability'},{data:'extra'}],order:[[0,'desc']],});}
function addServerNote(hostname,kind,msg){$.ajax({type:'POST',url:'/rest/server/note/'+hostname,data:{kind:kind,msg:msg},success:function(data){location.reload();},error:function(xhr,ajaxOptions,thrownError){var error_message='An error occurred while adding server '+kind+': ';if(xhr.responseJSON&&xhr.responseJSON.error)
error_message+=xhr.responseJSON.error;addFlash('danger',error_message);}});}
function addServerNoteButtonStatus(){if(document.getElementById("new-note-text").value===""){document.getElementById('new-note-submit').disabled=true;}else{document.getElementById('new-note-submit').disabled=false;}}
/*!
 * Bootstrap 4 multi dropdown navbar ( https://bootstrapthemes.co/demo/resource/bootstrap-4-multi-dropdown-navbar/ )
 * Copyright 2017.
 * Licensed under the GPL license
 */
$(document).ready(function(){$('.dropdown-menu a.dropdown-toggle').on('click',function(e){var $el=$(this);var $parent=$(this).offsetParent(".dropdown-menu");if(!$(this).next().hasClass('show')){$(this).parents('.dropdown-menu').first().find('.show').removeClass("show");}
var $subMenu=$(this).next(".dropdown-menu");$subMenu.toggleClass('show');$(this).parent("li").toggleClass('show');$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown',function(e){$('.dropdown-menu .show').removeClass("show");});if(!$parent.parent().hasClass('navbar-nav')){$el.next().css({"top":$el[0].offsetTop,"left":$parent.outerWidth()-4});}
return false;});});
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global.Popper=factory());}(this,(function(){'use strict';var isBrowser=typeof window!=='undefined'&&typeof document!=='undefined';var longerTimeoutBrowsers=['Edge','Trident','Firefox'];var timeoutDuration=0;for(var i=0;i<longerTimeoutBrowsers.length;i+=1){if(isBrowser&&navigator.userAgent.indexOf(longerTimeoutBrowsers[i])>=0){timeoutDuration=1;break;}}
function microtaskDebounce(fn){var called=false;return function(){if(called){return;}
called=true;window.Promise.resolve().then(function(){called=false;fn();});};}
function taskDebounce(fn){var scheduled=false;return function(){if(!scheduled){scheduled=true;setTimeout(function(){scheduled=false;fn();},timeoutDuration);}};}
var supportsMicroTasks=isBrowser&&window.Promise;var debounce=supportsMicroTasks?microtaskDebounce:taskDebounce;function isFunction(functionToCheck){var getType={};return functionToCheck&&getType.toString.call(functionToCheck)==='[object Function]';}
function getStyleComputedProperty(element,property){if(element.nodeType!==1){return[];}
var css=getComputedStyle(element,null);return property?css[property]:css;}
function getParentNode(element){if(element.nodeName==='HTML'){return element;}
return element.parentNode||element.host;}
function getScrollParent(element){if(!element){return document.body;}
switch(element.nodeName){case'HTML':case'BODY':return element.ownerDocument.body;case'#document':return element.body;}
var _getStyleComputedProp=getStyleComputedProperty(element),overflow=_getStyleComputedProp.overflow,overflowX=_getStyleComputedProp.overflowX,overflowY=_getStyleComputedProp.overflowY;if(/(auto|scroll)/.test(overflow+overflowY+overflowX)){return element;}
return getScrollParent(getParentNode(element));}
function getOffsetParent(element){var offsetParent=element&&element.offsetParent;var nodeName=offsetParent&&offsetParent.nodeName;if(!nodeName||nodeName==='BODY'||nodeName==='HTML'){if(element){return element.ownerDocument.documentElement;}
return document.documentElement;}
if(['TD','TABLE'].indexOf(offsetParent.nodeName)!==-1&&getStyleComputedProperty(offsetParent,'position')==='static'){return getOffsetParent(offsetParent);}
return offsetParent;}
function isOffsetContainer(element){var nodeName=element.nodeName;if(nodeName==='BODY'){return false;}
return nodeName==='HTML'||getOffsetParent(element.firstElementChild)===element;}
function getRoot(node){if(node.parentNode!==null){return getRoot(node.parentNode);}
return node;}
function findCommonOffsetParent(element1,element2){if(!element1||!element1.nodeType||!element2||!element2.nodeType){return document.documentElement;}
var order=element1.compareDocumentPosition(element2)&Node.DOCUMENT_POSITION_FOLLOWING;var start=order?element1:element2;var end=order?element2:element1;var range=document.createRange();range.setStart(start,0);range.setEnd(end,0);var commonAncestorContainer=range.commonAncestorContainer;if(element1!==commonAncestorContainer&&element2!==commonAncestorContainer||start.contains(end)){if(isOffsetContainer(commonAncestorContainer)){return commonAncestorContainer;}
return getOffsetParent(commonAncestorContainer);}
var element1root=getRoot(element1);if(element1root.host){return findCommonOffsetParent(element1root.host,element2);}else{return findCommonOffsetParent(element1,getRoot(element2).host);}}
function getScroll(element){var side=arguments.length>1&&arguments[1]!==undefined?arguments[1]:'top';var upperSide=side==='top'?'scrollTop':'scrollLeft';var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){var html=element.ownerDocument.documentElement;var scrollingElement=element.ownerDocument.scrollingElement||html;return scrollingElement[upperSide];}
return element[upperSide];}
function includeScroll(rect,element){var subtract=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');var modifier=subtract?-1:1;rect.top+=scrollTop*modifier;rect.bottom+=scrollTop*modifier;rect.left+=scrollLeft*modifier;rect.right+=scrollLeft*modifier;return rect;}
function getBordersSize(styles,axis){var sideA=axis==='x'?'Left':'Top';var sideB=sideA==='Left'?'Right':'Bottom';return parseFloat(styles['border'+sideA+'Width'],10)+parseFloat(styles['border'+sideB+'Width'],10);}
var isIE10=undefined;var isIE10$1=function(){if(isIE10===undefined){isIE10=navigator.appVersion.indexOf('MSIE 10')!==-1;}
return isIE10;};function getSize(axis,body,html,computedStyle){return Math.max(body['offset'+axis],body['scroll'+axis],html['client'+axis],html['offset'+axis],html['scroll'+axis],isIE10$1()?html['offset'+axis]+computedStyle['margin'+(axis==='Height'?'Top':'Left')]+computedStyle['margin'+(axis==='Height'?'Bottom':'Right')]:0);}
function getWindowSizes(){var body=document.body;var html=document.documentElement;var computedStyle=isIE10$1()&&getComputedStyle(html);return{height:getSize('Height',body,html,computedStyle),width:getSize('Width',body,html,computedStyle)};}
var classCallCheck=function(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}};var createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}
return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var defineProperty=function(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}
return obj;};var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}
return target;};function getClientRect(offsets){return _extends({},offsets,{right:offsets.left+offsets.width,bottom:offsets.top+offsets.height});}
function getBoundingClientRect(element){var rect={};if(isIE10$1()){try{rect=element.getBoundingClientRect();var scrollTop=getScroll(element,'top');var scrollLeft=getScroll(element,'left');rect.top+=scrollTop;rect.left+=scrollLeft;rect.bottom+=scrollTop;rect.right+=scrollLeft;}catch(err){}}else{rect=element.getBoundingClientRect();}
var result={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top};var sizes=element.nodeName==='HTML'?getWindowSizes():{};var width=sizes.width||element.clientWidth||result.right-result.left;var height=sizes.height||element.clientHeight||result.bottom-result.top;var horizScrollbar=element.offsetWidth-width;var vertScrollbar=element.offsetHeight-height;if(horizScrollbar||vertScrollbar){var styles=getStyleComputedProperty(element);horizScrollbar-=getBordersSize(styles,'x');vertScrollbar-=getBordersSize(styles,'y');result.width-=horizScrollbar;result.height-=vertScrollbar;}
return getClientRect(result);}
function getOffsetRectRelativeToArbitraryNode(children,parent){var isIE10=isIE10$1();var isHTML=parent.nodeName==='HTML';var childrenRect=getBoundingClientRect(children);var parentRect=getBoundingClientRect(parent);var scrollParent=getScrollParent(children);var styles=getStyleComputedProperty(parent);var borderTopWidth=parseFloat(styles.borderTopWidth,10);var borderLeftWidth=parseFloat(styles.borderLeftWidth,10);var offsets=getClientRect({top:childrenRect.top-parentRect.top-borderTopWidth,left:childrenRect.left-parentRect.left-borderLeftWidth,width:childrenRect.width,height:childrenRect.height});offsets.marginTop=0;offsets.marginLeft=0;if(!isIE10&&isHTML){var marginTop=parseFloat(styles.marginTop,10);var marginLeft=parseFloat(styles.marginLeft,10);offsets.top-=borderTopWidth-marginTop;offsets.bottom-=borderTopWidth-marginTop;offsets.left-=borderLeftWidth-marginLeft;offsets.right-=borderLeftWidth-marginLeft;offsets.marginTop=marginTop;offsets.marginLeft=marginLeft;}
if(isIE10?parent.contains(scrollParent):parent===scrollParent&&scrollParent.nodeName!=='BODY'){offsets=includeScroll(offsets,parent);}
return offsets;}
function getViewportOffsetRectRelativeToArtbitraryNode(element){var html=element.ownerDocument.documentElement;var relativeOffset=getOffsetRectRelativeToArbitraryNode(element,html);var width=Math.max(html.clientWidth,window.innerWidth||0);var height=Math.max(html.clientHeight,window.innerHeight||0);var scrollTop=getScroll(html);var scrollLeft=getScroll(html,'left');var offset={top:scrollTop-relativeOffset.top+relativeOffset.marginTop,left:scrollLeft-relativeOffset.left+relativeOffset.marginLeft,width:width,height:height};return getClientRect(offset);}
function isFixed(element){var nodeName=element.nodeName;if(nodeName==='BODY'||nodeName==='HTML'){return false;}
if(getStyleComputedProperty(element,'position')==='fixed'){return true;}
return isFixed(getParentNode(element));}
function getBoundaries(popper,reference,padding,boundariesElement){var boundaries={top:0,left:0};var offsetParent=findCommonOffsetParent(popper,reference);if(boundariesElement==='viewport'){boundaries=getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);}else{var boundariesNode=void 0;if(boundariesElement==='scrollParent'){boundariesNode=getScrollParent(getParentNode(reference));if(boundariesNode.nodeName==='BODY'){boundariesNode=popper.ownerDocument.documentElement;}}else if(boundariesElement==='window'){boundariesNode=popper.ownerDocument.documentElement;}else{boundariesNode=boundariesElement;}
var offsets=getOffsetRectRelativeToArbitraryNode(boundariesNode,offsetParent);if(boundariesNode.nodeName==='HTML'&&!isFixed(offsetParent)){var _getWindowSizes=getWindowSizes(),height=_getWindowSizes.height,width=_getWindowSizes.width;boundaries.top+=offsets.top-offsets.marginTop;boundaries.bottom=height+offsets.top;boundaries.left+=offsets.left-offsets.marginLeft;boundaries.right=width+offsets.left;}else{boundaries=offsets;}}
boundaries.left+=padding;boundaries.top+=padding;boundaries.right-=padding;boundaries.bottom-=padding;return boundaries;}
function getArea(_ref){var width=_ref.width,height=_ref.height;return width*height;}
function computeAutoPlacement(placement,refRect,popper,reference,boundariesElement){var padding=arguments.length>5&&arguments[5]!==undefined?arguments[5]:0;if(placement.indexOf('auto')===-1){return placement;}
var boundaries=getBoundaries(popper,reference,padding,boundariesElement);var rects={top:{width:boundaries.width,height:refRect.top-boundaries.top},right:{width:boundaries.right-refRect.right,height:boundaries.height},bottom:{width:boundaries.width,height:boundaries.bottom-refRect.bottom},left:{width:refRect.left-boundaries.left,height:boundaries.height}};var sortedAreas=Object.keys(rects).map(function(key){return _extends({key:key},rects[key],{area:getArea(rects[key])});}).sort(function(a,b){return b.area-a.area;});var filteredAreas=sortedAreas.filter(function(_ref2){var width=_ref2.width,height=_ref2.height;return width>=popper.clientWidth&&height>=popper.clientHeight;});var computedPlacement=filteredAreas.length>0?filteredAreas[0].key:sortedAreas[0].key;var variation=placement.split('-')[1];return computedPlacement+(variation?'-'+variation:'');}
function getReferenceOffsets(state,popper,reference){var commonOffsetParent=findCommonOffsetParent(popper,reference);return getOffsetRectRelativeToArbitraryNode(reference,commonOffsetParent);}
function getOuterSizes(element){var styles=getComputedStyle(element);var x=parseFloat(styles.marginTop)+parseFloat(styles.marginBottom);var y=parseFloat(styles.marginLeft)+parseFloat(styles.marginRight);var result={width:element.offsetWidth+y,height:element.offsetHeight+x};return result;}
function getOppositePlacement(placement){var hash={left:'right',right:'left',bottom:'top',top:'bottom'};return placement.replace(/left|right|bottom|top/g,function(matched){return hash[matched];});}
function getPopperOffsets(popper,referenceOffsets,placement){placement=placement.split('-')[0];var popperRect=getOuterSizes(popper);var popperOffsets={width:popperRect.width,height:popperRect.height};var isHoriz=['right','left'].indexOf(placement)!==-1;var mainSide=isHoriz?'top':'left';var secondarySide=isHoriz?'left':'top';var measurement=isHoriz?'height':'width';var secondaryMeasurement=!isHoriz?'height':'width';popperOffsets[mainSide]=referenceOffsets[mainSide]+referenceOffsets[measurement]/2-popperRect[measurement]/2;if(placement===secondarySide){popperOffsets[secondarySide]=referenceOffsets[secondarySide]-popperRect[secondaryMeasurement];}else{popperOffsets[secondarySide]=referenceOffsets[getOppositePlacement(secondarySide)];}
return popperOffsets;}
function find(arr,check){if(Array.prototype.find){return arr.find(check);}
return arr.filter(check)[0];}
function findIndex(arr,prop,value){if(Array.prototype.findIndex){return arr.findIndex(function(cur){return cur[prop]===value;});}
var match=find(arr,function(obj){return obj[prop]===value;});return arr.indexOf(match);}
function runModifiers(modifiers,data,ends){var modifiersToRun=ends===undefined?modifiers:modifiers.slice(0,findIndex(modifiers,'name',ends));modifiersToRun.forEach(function(modifier){if(modifier['function']){console.warn('`modifier.function` is deprecated, use `modifier.fn`!');}
var fn=modifier['function']||modifier.fn;if(modifier.enabled&&isFunction(fn)){data.offsets.popper=getClientRect(data.offsets.popper);data.offsets.reference=getClientRect(data.offsets.reference);data=fn(data,modifier);}});return data;}
function update(){if(this.state.isDestroyed){return;}
var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:false,offsets:{}};data.offsets.reference=getReferenceOffsets(this.state,this.popper,this.reference);data.placement=computeAutoPlacement(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding);data.originalPlacement=data.placement;data.offsets.popper=getPopperOffsets(this.popper,data.offsets.reference,data.placement);data.offsets.popper.position='absolute';data=runModifiers(this.modifiers,data);if(!this.state.isCreated){this.state.isCreated=true;this.options.onCreate(data);}else{this.options.onUpdate(data);}}
function isModifierEnabled(modifiers,modifierName){return modifiers.some(function(_ref){var name=_ref.name,enabled=_ref.enabled;return enabled&&name===modifierName;});}
function getSupportedPropertyName(property){var prefixes=[false,'ms','Webkit','Moz','O'];var upperProp=property.charAt(0).toUpperCase()+property.slice(1);for(var i=0;i<prefixes.length-1;i++){var prefix=prefixes[i];var toCheck=prefix?''+prefix+upperProp:property;if(typeof document.body.style[toCheck]!=='undefined'){return toCheck;}}
return null;}
function destroy(){this.state.isDestroyed=true;if(isModifierEnabled(this.modifiers,'applyStyle')){this.popper.removeAttribute('x-placement');this.popper.style.left='';this.popper.style.position='';this.popper.style.top='';this.popper.style[getSupportedPropertyName('transform')]='';}
this.disableEventListeners();if(this.options.removeOnDestroy){this.popper.parentNode.removeChild(this.popper);}
return this;}
function getWindow(element){var ownerDocument=element.ownerDocument;return ownerDocument?ownerDocument.defaultView:window;}
function attachToScrollParents(scrollParent,event,callback,scrollParents){var isBody=scrollParent.nodeName==='BODY';var target=isBody?scrollParent.ownerDocument.defaultView:scrollParent;target.addEventListener(event,callback,{passive:true});if(!isBody){attachToScrollParents(getScrollParent(target.parentNode),event,callback,scrollParents);}
scrollParents.push(target);}
function setupEventListeners(reference,options,state,updateBound){state.updateBound=updateBound;getWindow(reference).addEventListener('resize',state.updateBound,{passive:true});var scrollElement=getScrollParent(reference);attachToScrollParents(scrollElement,'scroll',state.updateBound,state.scrollParents);state.scrollElement=scrollElement;state.eventsEnabled=true;return state;}
function enableEventListeners(){if(!this.state.eventsEnabled){this.state=setupEventListeners(this.reference,this.options,this.state,this.scheduleUpdate);}}
function removeEventListeners(reference,state){getWindow(reference).removeEventListener('resize',state.updateBound);state.scrollParents.forEach(function(target){target.removeEventListener('scroll',state.updateBound);});state.updateBound=null;state.scrollParents=[];state.scrollElement=null;state.eventsEnabled=false;return state;}
function disableEventListeners(){if(this.state.eventsEnabled){cancelAnimationFrame(this.scheduleUpdate);this.state=removeEventListeners(this.reference,this.state);}}
function isNumeric(n){return n!==''&&!isNaN(parseFloat(n))&&isFinite(n);}
function setStyles(element,styles){Object.keys(styles).forEach(function(prop){var unit='';if(['width','height','top','right','bottom','left'].indexOf(prop)!==-1&&isNumeric(styles[prop])){unit='px';}
element.style[prop]=styles[prop]+unit;});}
function setAttributes(element,attributes){Object.keys(attributes).forEach(function(prop){var value=attributes[prop];if(value!==false){element.setAttribute(prop,attributes[prop]);}else{element.removeAttribute(prop);}});}
function applyStyle(data){setStyles(data.instance.popper,data.styles);setAttributes(data.instance.popper,data.attributes);if(data.arrowElement&&Object.keys(data.arrowStyles).length){setStyles(data.arrowElement,data.arrowStyles);}
return data;}
function applyStyleOnLoad(reference,popper,options,modifierOptions,state){var referenceOffsets=getReferenceOffsets(state,popper,reference);var placement=computeAutoPlacement(options.placement,referenceOffsets,popper,reference,options.modifiers.flip.boundariesElement,options.modifiers.flip.padding);popper.setAttribute('x-placement',placement);setStyles(popper,{position:'absolute'});return options;}
function computeStyle(data,options){var x=options.x,y=options.y;var popper=data.offsets.popper;var legacyGpuAccelerationOption=find(data.instance.modifiers,function(modifier){return modifier.name==='applyStyle';}).gpuAcceleration;if(legacyGpuAccelerationOption!==undefined){console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');}
var gpuAcceleration=legacyGpuAccelerationOption!==undefined?legacyGpuAccelerationOption:options.gpuAcceleration;var offsetParent=getOffsetParent(data.instance.popper);var offsetParentRect=getBoundingClientRect(offsetParent);var styles={position:popper.position};var offsets={left:Math.floor(popper.left),top:Math.floor(popper.top),bottom:Math.floor(popper.bottom),right:Math.floor(popper.right)};var sideA=x==='bottom'?'top':'bottom';var sideB=y==='right'?'left':'right';var prefixedProperty=getSupportedPropertyName('transform');var left=void 0,top=void 0;if(sideA==='bottom'){top=-offsetParentRect.height+offsets.bottom;}else{top=offsets.top;}
if(sideB==='right'){left=-offsetParentRect.width+offsets.right;}else{left=offsets.left;}
if(gpuAcceleration&&prefixedProperty){styles[prefixedProperty]='translate3d('+left+'px, '+top+'px, 0)';styles[sideA]=0;styles[sideB]=0;styles.willChange='transform';}else{var invertTop=sideA==='bottom'?-1:1;var invertLeft=sideB==='right'?-1:1;styles[sideA]=top*invertTop;styles[sideB]=left*invertLeft;styles.willChange=sideA+', '+sideB;}
var attributes={'x-placement':data.placement};data.attributes=_extends({},attributes,data.attributes);data.styles=_extends({},styles,data.styles);data.arrowStyles=_extends({},data.offsets.arrow,data.arrowStyles);return data;}
function isModifierRequired(modifiers,requestingName,requestedName){var requesting=find(modifiers,function(_ref){var name=_ref.name;return name===requestingName;});var isRequired=!!requesting&&modifiers.some(function(modifier){return modifier.name===requestedName&&modifier.enabled&&modifier.order<requesting.order;});if(!isRequired){var _requesting='`'+requestingName+'`';var requested='`'+requestedName+'`';console.warn(requested+' modifier is required by '+_requesting+' modifier in order to work, be sure to include it before '+_requesting+'!');}
return isRequired;}
function arrow(data,options){var _data$offsets$arrow;if(!isModifierRequired(data.instance.modifiers,'arrow','keepTogether')){return data;}
var arrowElement=options.element;if(typeof arrowElement==='string'){arrowElement=data.instance.popper.querySelector(arrowElement);if(!arrowElement){return data;}}else{if(!data.instance.popper.contains(arrowElement)){console.warn('WARNING: `arrow.element` must be child of its popper element!');return data;}}
var placement=data.placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isVertical=['left','right'].indexOf(placement)!==-1;var len=isVertical?'height':'width';var sideCapitalized=isVertical?'Top':'Left';var side=sideCapitalized.toLowerCase();var altSide=isVertical?'left':'top';var opSide=isVertical?'bottom':'right';var arrowElementSize=getOuterSizes(arrowElement)[len];if(reference[opSide]-arrowElementSize<popper[side]){data.offsets.popper[side]-=popper[side]-(reference[opSide]-arrowElementSize);}
if(reference[side]+arrowElementSize>popper[opSide]){data.offsets.popper[side]+=reference[side]+arrowElementSize-popper[opSide];}
data.offsets.popper=getClientRect(data.offsets.popper);var center=reference[side]+reference[len]/2-arrowElementSize/2;var css=getStyleComputedProperty(data.instance.popper);var popperMarginSide=parseFloat(css['margin'+sideCapitalized],10);var popperBorderSide=parseFloat(css['border'+sideCapitalized+'Width'],10);var sideValue=center-data.offsets.popper[side]-popperMarginSide-popperBorderSide;sideValue=Math.max(Math.min(popper[len]-arrowElementSize,sideValue),0);data.arrowElement=arrowElement;data.offsets.arrow=(_data$offsets$arrow={},defineProperty(_data$offsets$arrow,side,Math.round(sideValue)),defineProperty(_data$offsets$arrow,altSide,''),_data$offsets$arrow);return data;}
function getOppositeVariation(variation){if(variation==='end'){return'start';}else if(variation==='start'){return'end';}
return variation;}
var placements=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'];var validPlacements=placements.slice(3);function clockwise(placement){var counter=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var index=validPlacements.indexOf(placement);var arr=validPlacements.slice(index+1).concat(validPlacements.slice(0,index));return counter?arr.reverse():arr;}
var BEHAVIORS={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};function flip(data,options){if(isModifierEnabled(data.instance.modifiers,'inner')){return data;}
if(data.flipped&&data.placement===data.originalPlacement){return data;}
var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,options.boundariesElement);var placement=data.placement.split('-')[0];var placementOpposite=getOppositePlacement(placement);var variation=data.placement.split('-')[1]||'';var flipOrder=[];switch(options.behavior){case BEHAVIORS.FLIP:flipOrder=[placement,placementOpposite];break;case BEHAVIORS.CLOCKWISE:flipOrder=clockwise(placement);break;case BEHAVIORS.COUNTERCLOCKWISE:flipOrder=clockwise(placement,true);break;default:flipOrder=options.behavior;}
flipOrder.forEach(function(step,index){if(placement!==step||flipOrder.length===index+1){return data;}
placement=data.placement.split('-')[0];placementOpposite=getOppositePlacement(placement);var popperOffsets=data.offsets.popper;var refOffsets=data.offsets.reference;var floor=Math.floor;var overlapsRef=placement==='left'&&floor(popperOffsets.right)>floor(refOffsets.left)||placement==='right'&&floor(popperOffsets.left)<floor(refOffsets.right)||placement==='top'&&floor(popperOffsets.bottom)>floor(refOffsets.top)||placement==='bottom'&&floor(popperOffsets.top)<floor(refOffsets.bottom);var overflowsLeft=floor(popperOffsets.left)<floor(boundaries.left);var overflowsRight=floor(popperOffsets.right)>floor(boundaries.right);var overflowsTop=floor(popperOffsets.top)<floor(boundaries.top);var overflowsBottom=floor(popperOffsets.bottom)>floor(boundaries.bottom);var overflowsBoundaries=placement==='left'&&overflowsLeft||placement==='right'&&overflowsRight||placement==='top'&&overflowsTop||placement==='bottom'&&overflowsBottom;var isVertical=['top','bottom'].indexOf(placement)!==-1;var flippedVariation=!!options.flipVariations&&(isVertical&&variation==='start'&&overflowsLeft||isVertical&&variation==='end'&&overflowsRight||!isVertical&&variation==='start'&&overflowsTop||!isVertical&&variation==='end'&&overflowsBottom);if(overlapsRef||overflowsBoundaries||flippedVariation){data.flipped=true;if(overlapsRef||overflowsBoundaries){placement=flipOrder[index+1];}
if(flippedVariation){variation=getOppositeVariation(variation);}
data.placement=placement+(variation?'-'+variation:'');data.offsets.popper=_extends({},data.offsets.popper,getPopperOffsets(data.instance.popper,data.offsets.reference,data.placement));data=runModifiers(data.instance.modifiers,data,'flip');}});return data;}
function keepTogether(data){var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var placement=data.placement.split('-')[0];var floor=Math.floor;var isVertical=['top','bottom'].indexOf(placement)!==-1;var side=isVertical?'right':'bottom';var opSide=isVertical?'left':'top';var measurement=isVertical?'width':'height';if(popper[side]<floor(reference[opSide])){data.offsets.popper[opSide]=floor(reference[opSide])-popper[measurement];}
if(popper[opSide]>floor(reference[side])){data.offsets.popper[opSide]=floor(reference[side]);}
return data;}
function toValue(str,measurement,popperOffsets,referenceOffsets){var split=str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);var value=+split[1];var unit=split[2];if(!value){return str;}
if(unit.indexOf('%')===0){var element=void 0;switch(unit){case'%p':element=popperOffsets;break;case'%':case'%r':default:element=referenceOffsets;}
var rect=getClientRect(element);return rect[measurement]/100*value;}else if(unit==='vh'||unit==='vw'){var size=void 0;if(unit==='vh'){size=Math.max(document.documentElement.clientHeight,window.innerHeight||0);}else{size=Math.max(document.documentElement.clientWidth,window.innerWidth||0);}
return size/100*value;}else{return value;}}
function parseOffset(offset,popperOffsets,referenceOffsets,basePlacement){var offsets=[0,0];var useHeight=['right','left'].indexOf(basePlacement)!==-1;var fragments=offset.split(/(\+|\-)/).map(function(frag){return frag.trim();});var divider=fragments.indexOf(find(fragments,function(frag){return frag.search(/,|\s/)!==-1;}));if(fragments[divider]&&fragments[divider].indexOf(',')===-1){console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');}
var splitRegex=/\s*,\s*|\s+/;var ops=divider!==-1?[fragments.slice(0,divider).concat([fragments[divider].split(splitRegex)[0]]),[fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider+1))]:[fragments];ops=ops.map(function(op,index){var measurement=(index===1?!useHeight:useHeight)?'height':'width';var mergeWithPrevious=false;return op
.reduce(function(a,b){if(a[a.length-1]===''&&['+','-'].indexOf(b)!==-1){a[a.length-1]=b;mergeWithPrevious=true;return a;}else if(mergeWithPrevious){a[a.length-1]+=b;mergeWithPrevious=false;return a;}else{return a.concat(b);}},[])
.map(function(str){return toValue(str,measurement,popperOffsets,referenceOffsets);});});ops.forEach(function(op,index){op.forEach(function(frag,index2){if(isNumeric(frag)){offsets[index]+=frag*(op[index2-1]==='-'?-1:1);}});});return offsets;}
function offset(data,_ref){var offset=_ref.offset;var placement=data.placement,_data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var basePlacement=placement.split('-')[0];var offsets=void 0;if(isNumeric(+offset)){offsets=[+offset,0];}else{offsets=parseOffset(offset,popper,reference,basePlacement);}
if(basePlacement==='left'){popper.top+=offsets[0];popper.left-=offsets[1];}else if(basePlacement==='right'){popper.top+=offsets[0];popper.left+=offsets[1];}else if(basePlacement==='top'){popper.left+=offsets[0];popper.top-=offsets[1];}else if(basePlacement==='bottom'){popper.left+=offsets[0];popper.top+=offsets[1];}
data.popper=popper;return data;}
function preventOverflow(data,options){var boundariesElement=options.boundariesElement||getOffsetParent(data.instance.popper);if(data.instance.reference===boundariesElement){boundariesElement=getOffsetParent(boundariesElement);}
var boundaries=getBoundaries(data.instance.popper,data.instance.reference,options.padding,boundariesElement);options.boundaries=boundaries;var order=options.priority;var popper=data.offsets.popper;var check={primary:function primary(placement){var value=popper[placement];if(popper[placement]<boundaries[placement]&&!options.escapeWithReference){value=Math.max(popper[placement],boundaries[placement]);}
return defineProperty({},placement,value);},secondary:function secondary(placement){var mainSide=placement==='right'?'left':'top';var value=popper[mainSide];if(popper[placement]>boundaries[placement]&&!options.escapeWithReference){value=Math.min(popper[mainSide],boundaries[placement]-(placement==='right'?popper.width:popper.height));}
return defineProperty({},mainSide,value);}};order.forEach(function(placement){var side=['left','top'].indexOf(placement)!==-1?'primary':'secondary';popper=_extends({},popper,check[side](placement));});data.offsets.popper=popper;return data;}
function shift(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var shiftvariation=placement.split('-')[1];if(shiftvariation){var _data$offsets=data.offsets,reference=_data$offsets.reference,popper=_data$offsets.popper;var isVertical=['bottom','top'].indexOf(basePlacement)!==-1;var side=isVertical?'left':'top';var measurement=isVertical?'width':'height';var shiftOffsets={start:defineProperty({},side,reference[side]),end:defineProperty({},side,reference[side]+reference[measurement]-popper[measurement])};data.offsets.popper=_extends({},popper,shiftOffsets[shiftvariation]);}
return data;}
function hide(data){if(!isModifierRequired(data.instance.modifiers,'hide','preventOverflow')){return data;}
var refRect=data.offsets.reference;var bound=find(data.instance.modifiers,function(modifier){return modifier.name==='preventOverflow';}).boundaries;if(refRect.bottom<bound.top||refRect.left>bound.right||refRect.top>bound.bottom||refRect.right<bound.left){if(data.hide===true){return data;}
data.hide=true;data.attributes['x-out-of-boundaries']='';}else{if(data.hide===false){return data;}
data.hide=false;data.attributes['x-out-of-boundaries']=false;}
return data;}
function inner(data){var placement=data.placement;var basePlacement=placement.split('-')[0];var _data$offsets=data.offsets,popper=_data$offsets.popper,reference=_data$offsets.reference;var isHoriz=['left','right'].indexOf(basePlacement)!==-1;var subtractLength=['top','left'].indexOf(basePlacement)===-1;popper[isHoriz?'left':'top']=reference[basePlacement]-(subtractLength?popper[isHoriz?'width':'height']:0);data.placement=getOppositePlacement(placement);data.offsets.popper=getClientRect(popper);return data;}
var modifiers={shift:{order:100,enabled:true,fn:shift},offset:{order:200,enabled:true,fn:offset,offset:0},preventOverflow:{order:300,enabled:true,fn:preventOverflow,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:true,fn:keepTogether},arrow:{order:500,enabled:true,fn:arrow,element:'[x-arrow]'},flip:{order:600,enabled:true,fn:flip,behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:false,fn:inner},hide:{order:800,enabled:true,fn:hide},computeStyle:{order:850,enabled:true,fn:computeStyle,gpuAcceleration:true,x:'bottom',y:'right'},applyStyle:{order:900,enabled:true,fn:applyStyle,onLoad:applyStyleOnLoad,gpuAcceleration:undefined}};var Defaults={placement:'bottom',eventsEnabled:true,removeOnDestroy:false,onCreate:function onCreate(){},onUpdate:function onUpdate(){},modifiers:modifiers};var Popper=function(){function Popper(reference,popper){var _this=this;var options=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};classCallCheck(this,Popper);this.scheduleUpdate=function(){return requestAnimationFrame(_this.update);};this.update=debounce(this.update.bind(this));this.options=_extends({},Popper.Defaults,options);this.state={isDestroyed:false,isCreated:false,scrollParents:[]};this.reference=reference&&reference.jquery?reference[0]:reference;this.popper=popper&&popper.jquery?popper[0]:popper;this.options.modifiers={};Object.keys(_extends({},Popper.Defaults.modifiers,options.modifiers)).forEach(function(name){_this.options.modifiers[name]=_extends({},Popper.Defaults.modifiers[name]||{},options.modifiers?options.modifiers[name]:{});});this.modifiers=Object.keys(this.options.modifiers).map(function(name){return _extends({name:name},_this.options.modifiers[name]);})
.sort(function(a,b){return a.order-b.order;});this.modifiers.forEach(function(modifierOptions){if(modifierOptions.enabled&&isFunction(modifierOptions.onLoad)){modifierOptions.onLoad(_this.reference,_this.popper,_this.options,modifierOptions,_this.state);}});this.update();var eventsEnabled=this.options.eventsEnabled;if(eventsEnabled){this.enableEventListeners();}
this.state.eventsEnabled=eventsEnabled;}
createClass(Popper,[{key:'update',value:function update$$1(){return update.call(this);}},{key:'destroy',value:function destroy$$1(){return destroy.call(this);}},{key:'enableEventListeners',value:function enableEventListeners$$1(){return enableEventListeners.call(this);}},{key:'disableEventListeners',value:function disableEventListeners$$1(){return disableEventListeners.call(this);}}]);return Popper;}();Popper.Utils=(typeof window!=='undefined'?window:global).PopperUtils;Popper.placements=placements;Popper.Defaults=Defaults;return Popper;})));
/*!
  * Bootstrap v4.5.2 (https://getbootstrap.com/)
  * Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?factory(exports,require('jquery'),require('popper.js')):typeof define==='function'&&define.amd?define(['exports','jquery','popper.js'],factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,factory(global.bootstrap={},global.jQuery,global.Popper));}(this,(function(exports,$,Popper){'use strict';$=$&&Object.prototype.hasOwnProperty.call($,'default')?$['default']:$;Popper=Popper&&Object.prototype.hasOwnProperty.call(Popper,'default')?Popper['default']:Popper;function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value" in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}
function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}
function _extends(){_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}
return target;};return _extends.apply(this,arguments);}
function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;subClass.__proto__=superClass;}
var TRANSITION_END='transitionend';var MAX_UID=1000000;var MILLISECONDS_MULTIPLIER=1000;function toType(obj){if(obj===null||typeof obj==='undefined'){return""+obj;}
return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();}
function getSpecialTransitionEndEvent(){return{bindType:TRANSITION_END,delegateType:TRANSITION_END,handle:function handle(event){if($(event.target).is(this)){return event.handleObj.handler.apply(this,arguments);}
return undefined;}};}
function transitionEndEmulator(duration){var _this=this;var called=false;$(this).one(Util.TRANSITION_END,function(){called=true;});setTimeout(function(){if(!called){Util.triggerTransitionEnd(_this);}},duration);return this;}
function setTransitionEndSupport(){$.fn.emulateTransitionEnd=transitionEndEmulator;$.event.special[Util.TRANSITION_END]=getSpecialTransitionEndEvent();}
var Util={TRANSITION_END:'bsTransitionEnd',getUID:function getUID(prefix){do{prefix+=~~(Math.random()*MAX_UID);}while(document.getElementById(prefix));return prefix;},getSelectorFromElement:function getSelectorFromElement(element){var selector=element.getAttribute('data-target');if(!selector||selector==='#'){var hrefAttr=element.getAttribute('href');selector=hrefAttr&&hrefAttr!=='#'?hrefAttr.trim():'';}
try{return document.querySelector(selector)?selector:null;}catch(err){return null;}},getTransitionDurationFromElement:function getTransitionDurationFromElement(element){if(!element){return 0;}
var transitionDuration=$(element).css('transition-duration');var transitionDelay=$(element).css('transition-delay');var floatTransitionDuration=parseFloat(transitionDuration);var floatTransitionDelay=parseFloat(transitionDelay);if(!floatTransitionDuration&&!floatTransitionDelay){return 0;}
transitionDuration=transitionDuration.split(',')[0];transitionDelay=transitionDelay.split(',')[0];return(parseFloat(transitionDuration)+parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER;},reflow:function reflow(element){return element.offsetHeight;},triggerTransitionEnd:function triggerTransitionEnd(element){$(element).trigger(TRANSITION_END);},supportsTransitionEnd:function supportsTransitionEnd(){return Boolean(TRANSITION_END);},isElement:function isElement(obj){return(obj[0]||obj).nodeType;},typeCheckConfig:function typeCheckConfig(componentName,config,configTypes){for(var property in configTypes){if(Object.prototype.hasOwnProperty.call(configTypes,property)){var expectedTypes=configTypes[property];var value=config[property];var valueType=value&&Util.isElement(value)?'element':toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new Error(componentName.toUpperCase()+": "+("Option \""+property+"\" provided type \""+valueType+"\" ")+("but expected type \""+expectedTypes+"\"."));}}}},findShadowRoot:function findShadowRoot(element){if(!document.documentElement.attachShadow){return null;}
if(typeof element.getRootNode==='function'){var root=element.getRootNode();return root instanceof ShadowRoot?root:null;}
if(element instanceof ShadowRoot){return element;}
if(!element.parentNode){return null;}
return Util.findShadowRoot(element.parentNode);},jQueryDetection:function jQueryDetection(){if(typeof $==='undefined'){throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');}
var version=$.fn.jquery.split(' ')[0].split('.');var minMajor=1;var ltMajor=2;var minMinor=9;var minPatch=1;var maxMajor=4;if(version[0]<ltMajor&&version[1]<minMinor||version[0]===minMajor&&version[1]===minMinor&&version[2]<minPatch||version[0]>=maxMajor){throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');}}};Util.jQueryDetection();setTransitionEndSupport();var NAME='alert';var VERSION='4.5.2';var DATA_KEY='bs.alert';var EVENT_KEY="."+DATA_KEY;var DATA_API_KEY='.data-api';var JQUERY_NO_CONFLICT=$.fn[NAME];var SELECTOR_DISMISS='[data-dismiss="alert"]';var EVENT_CLOSE="close"+EVENT_KEY;var EVENT_CLOSED="closed"+EVENT_KEY;var EVENT_CLICK_DATA_API="click"+EVENT_KEY+DATA_API_KEY;var CLASS_NAME_ALERT='alert';var CLASS_NAME_FADE='fade';var CLASS_NAME_SHOW='show';var Alert=function(){function Alert(element){this._element=element;}
var _proto=Alert.prototype;_proto.close=function close(element){var rootElement=this._element;if(element){rootElement=this._getRootElement(element);}
var customEvent=this._triggerCloseEvent(rootElement);if(customEvent.isDefaultPrevented()){return;}
this._removeElement(rootElement);};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY);this._element=null;};_proto._getRootElement=function _getRootElement(element){var selector=Util.getSelectorFromElement(element);var parent=false;if(selector){parent=document.querySelector(selector);}
if(!parent){parent=$(element).closest("."+CLASS_NAME_ALERT)[0];}
return parent;};_proto._triggerCloseEvent=function _triggerCloseEvent(element){var closeEvent=$.Event(EVENT_CLOSE);$(element).trigger(closeEvent);return closeEvent;};_proto._removeElement=function _removeElement(element){var _this=this;$(element).removeClass(CLASS_NAME_SHOW);if(!$(element).hasClass(CLASS_NAME_FADE)){this._destroyElement(element);return;}
var transitionDuration=Util.getTransitionDurationFromElement(element);$(element).one(Util.TRANSITION_END,function(event){return _this._destroyElement(element,event);}).emulateTransitionEnd(transitionDuration);};_proto._destroyElement=function _destroyElement(element){$(element).detach().trigger(EVENT_CLOSED).remove();};Alert._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY);if(!data){data=new Alert(this);$element.data(DATA_KEY,data);}
if(config==='close'){data[config](this);}});};Alert._handleDismiss=function _handleDismiss(alertInstance){return function(event){if(event){event.preventDefault();}
alertInstance.close(this);};};_createClass(Alert,null,[{key:"VERSION",get:function get(){return VERSION;}}]);return Alert;}();$(document).on(EVENT_CLICK_DATA_API,SELECTOR_DISMISS,Alert._handleDismiss(new Alert()));$.fn[NAME]=Alert._jQueryInterface;$.fn[NAME].Constructor=Alert;$.fn[NAME].noConflict=function(){$.fn[NAME]=JQUERY_NO_CONFLICT;return Alert._jQueryInterface;};var NAME$1='button';var VERSION$1='4.5.2';var DATA_KEY$1='bs.button';var EVENT_KEY$1="."+DATA_KEY$1;var DATA_API_KEY$1='.data-api';var JQUERY_NO_CONFLICT$1=$.fn[NAME$1];var CLASS_NAME_ACTIVE='active';var CLASS_NAME_BUTTON='btn';var CLASS_NAME_FOCUS='focus';var SELECTOR_DATA_TOGGLE_CARROT='[data-toggle^="button"]';var SELECTOR_DATA_TOGGLES='[data-toggle="buttons"]';var SELECTOR_DATA_TOGGLE='[data-toggle="button"]';var SELECTOR_DATA_TOGGLES_BUTTONS='[data-toggle="buttons"] .btn';var SELECTOR_INPUT='input:not([type="hidden"])';var SELECTOR_ACTIVE='.active';var SELECTOR_BUTTON='.btn';var EVENT_CLICK_DATA_API$1="click"+EVENT_KEY$1+DATA_API_KEY$1;var EVENT_FOCUS_BLUR_DATA_API="focus"+EVENT_KEY$1+DATA_API_KEY$1+" "+("blur"+EVENT_KEY$1+DATA_API_KEY$1);var EVENT_LOAD_DATA_API="load"+EVENT_KEY$1+DATA_API_KEY$1;var Button=function(){function Button(element){this._element=element;}
var _proto=Button.prototype;_proto.toggle=function toggle(){var triggerChangeEvent=true;var addAriaPressed=true;var rootElement=$(this._element).closest(SELECTOR_DATA_TOGGLES)[0];if(rootElement){var input=this._element.querySelector(SELECTOR_INPUT);if(input){if(input.type==='radio'){if(input.checked&&this._element.classList.contains(CLASS_NAME_ACTIVE)){triggerChangeEvent=false;}else{var activeElement=rootElement.querySelector(SELECTOR_ACTIVE);if(activeElement){$(activeElement).removeClass(CLASS_NAME_ACTIVE);}}}
if(triggerChangeEvent){if(input.type==='checkbox'||input.type==='radio'){input.checked=!this._element.classList.contains(CLASS_NAME_ACTIVE);}
$(input).trigger('change');}
input.focus();addAriaPressed=false;}}
if(!(this._element.hasAttribute('disabled')||this._element.classList.contains('disabled'))){if(addAriaPressed){this._element.setAttribute('aria-pressed',!this._element.classList.contains(CLASS_NAME_ACTIVE));}
if(triggerChangeEvent){$(this._element).toggleClass(CLASS_NAME_ACTIVE);}}};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$1);this._element=null;};Button._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$1);if(!data){data=new Button(this);$(this).data(DATA_KEY$1,data);}
if(config==='toggle'){data[config]();}});};_createClass(Button,null,[{key:"VERSION",get:function get(){return VERSION$1;}}]);return Button;}();$(document).on(EVENT_CLICK_DATA_API$1,SELECTOR_DATA_TOGGLE_CARROT,function(event){var button=event.target;var initialButton=button;if(!$(button).hasClass(CLASS_NAME_BUTTON)){button=$(button).closest(SELECTOR_BUTTON)[0];}
if(!button||button.hasAttribute('disabled')||button.classList.contains('disabled')){event.preventDefault();}else{var inputBtn=button.querySelector(SELECTOR_INPUT);if(inputBtn&&(inputBtn.hasAttribute('disabled')||inputBtn.classList.contains('disabled'))){event.preventDefault();return;}
if(initialButton.tagName!=='LABEL'||inputBtn&&inputBtn.type!=='checkbox'){Button._jQueryInterface.call($(button),'toggle');}}}).on(EVENT_FOCUS_BLUR_DATA_API,SELECTOR_DATA_TOGGLE_CARROT,function(event){var button=$(event.target).closest(SELECTOR_BUTTON)[0];$(button).toggleClass(CLASS_NAME_FOCUS,/^focus(in)?$/.test(event.type));});$(window).on(EVENT_LOAD_DATA_API,function(){var buttons=[].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLES_BUTTONS));for(var i=0,len=buttons.length;i<len;i++){var button=buttons[i];var input=button.querySelector(SELECTOR_INPUT);if(input.checked||input.hasAttribute('checked')){button.classList.add(CLASS_NAME_ACTIVE);}else{button.classList.remove(CLASS_NAME_ACTIVE);}}
buttons=[].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE));for(var _i=0,_len=buttons.length;_i<_len;_i++){var _button=buttons[_i];if(_button.getAttribute('aria-pressed')==='true'){_button.classList.add(CLASS_NAME_ACTIVE);}else{_button.classList.remove(CLASS_NAME_ACTIVE);}}});$.fn[NAME$1]=Button._jQueryInterface;$.fn[NAME$1].Constructor=Button;$.fn[NAME$1].noConflict=function(){$.fn[NAME$1]=JQUERY_NO_CONFLICT$1;return Button._jQueryInterface;};var NAME$2='carousel';var VERSION$2='4.5.2';var DATA_KEY$2='bs.carousel';var EVENT_KEY$2="."+DATA_KEY$2;var DATA_API_KEY$2='.data-api';var JQUERY_NO_CONFLICT$2=$.fn[NAME$2];var ARROW_LEFT_KEYCODE=37;var ARROW_RIGHT_KEYCODE=39;var TOUCHEVENT_COMPAT_WAIT=500;var SWIPE_THRESHOLD=40;var Default={interval:5000,keyboard:true,slide:false,pause:'hover',wrap:true,touch:true};var DefaultType={interval:'(number|boolean)',keyboard:'boolean',slide:'(boolean|string)',pause:'(string|boolean)',wrap:'boolean',touch:'boolean'};var DIRECTION_NEXT='next';var DIRECTION_PREV='prev';var DIRECTION_LEFT='left';var DIRECTION_RIGHT='right';var EVENT_SLIDE="slide"+EVENT_KEY$2;var EVENT_SLID="slid"+EVENT_KEY$2;var EVENT_KEYDOWN="keydown"+EVENT_KEY$2;var EVENT_MOUSEENTER="mouseenter"+EVENT_KEY$2;var EVENT_MOUSELEAVE="mouseleave"+EVENT_KEY$2;var EVENT_TOUCHSTART="touchstart"+EVENT_KEY$2;var EVENT_TOUCHMOVE="touchmove"+EVENT_KEY$2;var EVENT_TOUCHEND="touchend"+EVENT_KEY$2;var EVENT_POINTERDOWN="pointerdown"+EVENT_KEY$2;var EVENT_POINTERUP="pointerup"+EVENT_KEY$2;var EVENT_DRAG_START="dragstart"+EVENT_KEY$2;var EVENT_LOAD_DATA_API$1="load"+EVENT_KEY$2+DATA_API_KEY$2;var EVENT_CLICK_DATA_API$2="click"+EVENT_KEY$2+DATA_API_KEY$2;var CLASS_NAME_CAROUSEL='carousel';var CLASS_NAME_ACTIVE$1='active';var CLASS_NAME_SLIDE='slide';var CLASS_NAME_RIGHT='carousel-item-right';var CLASS_NAME_LEFT='carousel-item-left';var CLASS_NAME_NEXT='carousel-item-next';var CLASS_NAME_PREV='carousel-item-prev';var CLASS_NAME_POINTER_EVENT='pointer-event';var SELECTOR_ACTIVE$1='.active';var SELECTOR_ACTIVE_ITEM='.active.carousel-item';var SELECTOR_ITEM='.carousel-item';var SELECTOR_ITEM_IMG='.carousel-item img';var SELECTOR_NEXT_PREV='.carousel-item-next, .carousel-item-prev';var SELECTOR_INDICATORS='.carousel-indicators';var SELECTOR_DATA_SLIDE='[data-slide], [data-slide-to]';var SELECTOR_DATA_RIDE='[data-ride="carousel"]';var PointerType={TOUCH:'touch',PEN:'pen'};var Carousel=function(){function Carousel(element,config){this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this.touchTimeout=null;this.touchStartX=0;this.touchDeltaX=0;this._config=this._getConfig(config);this._element=element;this._indicatorsElement=this._element.querySelector(SELECTOR_INDICATORS);this._touchSupported='ontouchstart' in document.documentElement||navigator.maxTouchPoints>0;this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent);this._addEventListeners();}
var _proto=Carousel.prototype;_proto.next=function next(){if(!this._isSliding){this._slide(DIRECTION_NEXT);}};_proto.nextWhenVisible=function nextWhenVisible(){if(!document.hidden&&$(this._element).is(':visible')&&$(this._element).css('visibility')!=='hidden'){this.next();}};_proto.prev=function prev(){if(!this._isSliding){this._slide(DIRECTION_PREV);}};_proto.pause=function pause(event){if(!event){this._isPaused=true;}
if(this._element.querySelector(SELECTOR_NEXT_PREV)){Util.triggerTransitionEnd(this._element);this.cycle(true);}
clearInterval(this._interval);this._interval=null;};_proto.cycle=function cycle(event){if(!event){this._isPaused=false;}
if(this._interval){clearInterval(this._interval);this._interval=null;}
if(this._config.interval&&!this._isPaused){this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval);}};_proto.to=function to(index){var _this=this;this._activeElement=this._element.querySelector(SELECTOR_ACTIVE_ITEM);var activeIndex=this._getItemIndex(this._activeElement);if(index>this._items.length-1||index<0){return;}
if(this._isSliding){$(this._element).one(EVENT_SLID,function(){return _this.to(index);});return;}
if(activeIndex===index){this.pause();this.cycle();return;}
var direction=index>activeIndex?DIRECTION_NEXT:DIRECTION_PREV;this._slide(direction,this._items[index]);};_proto.dispose=function dispose(){$(this._element).off(EVENT_KEY$2);$.removeData(this._element,DATA_KEY$2);this._items=null;this._config=null;this._element=null;this._interval=null;this._isPaused=null;this._isSliding=null;this._activeElement=null;this._indicatorsElement=null;};_proto._getConfig=function _getConfig(config){config=_extends({},Default,config);Util.typeCheckConfig(NAME$2,config,DefaultType);return config;};_proto._handleSwipe=function _handleSwipe(){var absDeltax=Math.abs(this.touchDeltaX);if(absDeltax<=SWIPE_THRESHOLD){return;}
var direction=absDeltax/this.touchDeltaX;this.touchDeltaX=0;if(direction>0){this.prev();}
if(direction<0){this.next();}};_proto._addEventListeners=function _addEventListeners(){var _this2=this;if(this._config.keyboard){$(this._element).on(EVENT_KEYDOWN,function(event){return _this2._keydown(event);});}
if(this._config.pause==='hover'){$(this._element).on(EVENT_MOUSEENTER,function(event){return _this2.pause(event);}).on(EVENT_MOUSELEAVE,function(event){return _this2.cycle(event);});}
if(this._config.touch){this._addTouchEventListeners();}};_proto._addTouchEventListeners=function _addTouchEventListeners(){var _this3=this;if(!this._touchSupported){return;}
var start=function start(event){if(_this3._pointerEvent&&PointerType[event.originalEvent.pointerType.toUpperCase()]){_this3.touchStartX=event.originalEvent.clientX;}else if(!_this3._pointerEvent){_this3.touchStartX=event.originalEvent.touches[0].clientX;}};var move=function move(event){if(event.originalEvent.touches&&event.originalEvent.touches.length>1){_this3.touchDeltaX=0;}else{_this3.touchDeltaX=event.originalEvent.touches[0].clientX-_this3.touchStartX;}};var end=function end(event){if(_this3._pointerEvent&&PointerType[event.originalEvent.pointerType.toUpperCase()]){_this3.touchDeltaX=event.originalEvent.clientX-_this3.touchStartX;}
_this3._handleSwipe();if(_this3._config.pause==='hover'){_this3.pause();if(_this3.touchTimeout){clearTimeout(_this3.touchTimeout);}
_this3.touchTimeout=setTimeout(function(event){return _this3.cycle(event);},TOUCHEVENT_COMPAT_WAIT+_this3._config.interval);}};$(this._element.querySelectorAll(SELECTOR_ITEM_IMG)).on(EVENT_DRAG_START,function(e){return e.preventDefault();});if(this._pointerEvent){$(this._element).on(EVENT_POINTERDOWN,function(event){return start(event);});$(this._element).on(EVENT_POINTERUP,function(event){return end(event);});this._element.classList.add(CLASS_NAME_POINTER_EVENT);}else{$(this._element).on(EVENT_TOUCHSTART,function(event){return start(event);});$(this._element).on(EVENT_TOUCHMOVE,function(event){return move(event);});$(this._element).on(EVENT_TOUCHEND,function(event){return end(event);});}};_proto._keydown=function _keydown(event){if(/input|textarea/i.test(event.target.tagName)){return;}
switch(event.which){case ARROW_LEFT_KEYCODE:event.preventDefault();this.prev();break;case ARROW_RIGHT_KEYCODE:event.preventDefault();this.next();break;}};_proto._getItemIndex=function _getItemIndex(element){this._items=element&&element.parentNode?[].slice.call(element.parentNode.querySelectorAll(SELECTOR_ITEM)):[];return this._items.indexOf(element);};_proto._getItemByDirection=function _getItemByDirection(direction,activeElement){var isNextDirection=direction===DIRECTION_NEXT;var isPrevDirection=direction===DIRECTION_PREV;var activeIndex=this._getItemIndex(activeElement);var lastItemIndex=this._items.length-1;var isGoingToWrap=isPrevDirection&&activeIndex===0||isNextDirection&&activeIndex===lastItemIndex;if(isGoingToWrap&&!this._config.wrap){return activeElement;}
var delta=direction===DIRECTION_PREV?-1:1;var itemIndex=(activeIndex+delta)%this._items.length;return itemIndex===-1?this._items[this._items.length-1]:this._items[itemIndex];};_proto._triggerSlideEvent=function _triggerSlideEvent(relatedTarget,eventDirectionName){var targetIndex=this._getItemIndex(relatedTarget);var fromIndex=this._getItemIndex(this._element.querySelector(SELECTOR_ACTIVE_ITEM));var slideEvent=$.Event(EVENT_SLIDE,{relatedTarget:relatedTarget,direction:eventDirectionName,from:fromIndex,to:targetIndex});$(this._element).trigger(slideEvent);return slideEvent;};_proto._setActiveIndicatorElement=function _setActiveIndicatorElement(element){if(this._indicatorsElement){var indicators=[].slice.call(this._indicatorsElement.querySelectorAll(SELECTOR_ACTIVE$1));$(indicators).removeClass(CLASS_NAME_ACTIVE$1);var nextIndicator=this._indicatorsElement.children[this._getItemIndex(element)];if(nextIndicator){$(nextIndicator).addClass(CLASS_NAME_ACTIVE$1);}}};_proto._slide=function _slide(direction,element){var _this4=this;var activeElement=this._element.querySelector(SELECTOR_ACTIVE_ITEM);var activeElementIndex=this._getItemIndex(activeElement);var nextElement=element||activeElement&&this._getItemByDirection(direction,activeElement);var nextElementIndex=this._getItemIndex(nextElement);var isCycling=Boolean(this._interval);var directionalClassName;var orderClassName;var eventDirectionName;if(direction===DIRECTION_NEXT){directionalClassName=CLASS_NAME_LEFT;orderClassName=CLASS_NAME_NEXT;eventDirectionName=DIRECTION_LEFT;}else{directionalClassName=CLASS_NAME_RIGHT;orderClassName=CLASS_NAME_PREV;eventDirectionName=DIRECTION_RIGHT;}
if(nextElement&&$(nextElement).hasClass(CLASS_NAME_ACTIVE$1)){this._isSliding=false;return;}
var slideEvent=this._triggerSlideEvent(nextElement,eventDirectionName);if(slideEvent.isDefaultPrevented()){return;}
if(!activeElement||!nextElement){return;}
this._isSliding=true;if(isCycling){this.pause();}
this._setActiveIndicatorElement(nextElement);var slidEvent=$.Event(EVENT_SLID,{relatedTarget:nextElement,direction:eventDirectionName,from:activeElementIndex,to:nextElementIndex});if($(this._element).hasClass(CLASS_NAME_SLIDE)){$(nextElement).addClass(orderClassName);Util.reflow(nextElement);$(activeElement).addClass(directionalClassName);$(nextElement).addClass(directionalClassName);var nextElementInterval=parseInt(nextElement.getAttribute('data-interval'),10);if(nextElementInterval){this._config.defaultInterval=this._config.defaultInterval||this._config.interval;this._config.interval=nextElementInterval;}else{this._config.interval=this._config.defaultInterval||this._config.interval;}
var transitionDuration=Util.getTransitionDurationFromElement(activeElement);$(activeElement).one(Util.TRANSITION_END,function(){$(nextElement).removeClass(directionalClassName+" "+orderClassName).addClass(CLASS_NAME_ACTIVE$1);$(activeElement).removeClass(CLASS_NAME_ACTIVE$1+" "+orderClassName+" "+directionalClassName);_this4._isSliding=false;setTimeout(function(){return $(_this4._element).trigger(slidEvent);},0);}).emulateTransitionEnd(transitionDuration);}else{$(activeElement).removeClass(CLASS_NAME_ACTIVE$1);$(nextElement).addClass(CLASS_NAME_ACTIVE$1);this._isSliding=false;$(this._element).trigger(slidEvent);}
if(isCycling){this.cycle();}};Carousel._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$2);var _config=_extends({},Default,$(this).data());if(typeof config==='object'){_config=_extends({},_config,config);}
var action=typeof config==='string'?config:_config.slide;if(!data){data=new Carousel(this,_config);$(this).data(DATA_KEY$2,data);}
if(typeof config==='number'){data.to(config);}else if(typeof action==='string'){if(typeof data[action]==='undefined'){throw new TypeError("No method named \""+action+"\"");}
data[action]();}else if(_config.interval&&_config.ride){data.pause();data.cycle();}});};Carousel._dataApiClickHandler=function _dataApiClickHandler(event){var selector=Util.getSelectorFromElement(this);if(!selector){return;}
var target=$(selector)[0];if(!target||!$(target).hasClass(CLASS_NAME_CAROUSEL)){return;}
var config=_extends({},$(target).data(),$(this).data());var slideIndex=this.getAttribute('data-slide-to');if(slideIndex){config.interval=false;}
Carousel._jQueryInterface.call($(target),config);if(slideIndex){$(target).data(DATA_KEY$2).to(slideIndex);}
event.preventDefault();};_createClass(Carousel,null,[{key:"VERSION",get:function get(){return VERSION$2;}},{key:"Default",get:function get(){return Default;}}]);return Carousel;}();$(document).on(EVENT_CLICK_DATA_API$2,SELECTOR_DATA_SLIDE,Carousel._dataApiClickHandler);$(window).on(EVENT_LOAD_DATA_API$1,function(){var carousels=[].slice.call(document.querySelectorAll(SELECTOR_DATA_RIDE));for(var i=0,len=carousels.length;i<len;i++){var $carousel=$(carousels[i]);Carousel._jQueryInterface.call($carousel,$carousel.data());}});$.fn[NAME$2]=Carousel._jQueryInterface;$.fn[NAME$2].Constructor=Carousel;$.fn[NAME$2].noConflict=function(){$.fn[NAME$2]=JQUERY_NO_CONFLICT$2;return Carousel._jQueryInterface;};var NAME$3='collapse';var VERSION$3='4.5.2';var DATA_KEY$3='bs.collapse';var EVENT_KEY$3="."+DATA_KEY$3;var DATA_API_KEY$3='.data-api';var JQUERY_NO_CONFLICT$3=$.fn[NAME$3];var Default$1={toggle:true,parent:''};var DefaultType$1={toggle:'boolean',parent:'(string|element)'};var EVENT_SHOW="show"+EVENT_KEY$3;var EVENT_SHOWN="shown"+EVENT_KEY$3;var EVENT_HIDE="hide"+EVENT_KEY$3;var EVENT_HIDDEN="hidden"+EVENT_KEY$3;var EVENT_CLICK_DATA_API$3="click"+EVENT_KEY$3+DATA_API_KEY$3;var CLASS_NAME_SHOW$1='show';var CLASS_NAME_COLLAPSE='collapse';var CLASS_NAME_COLLAPSING='collapsing';var CLASS_NAME_COLLAPSED='collapsed';var DIMENSION_WIDTH='width';var DIMENSION_HEIGHT='height';var SELECTOR_ACTIVES='.show, .collapsing';var SELECTOR_DATA_TOGGLE$1='[data-toggle="collapse"]';var Collapse=function(){function Collapse(element,config){this._isTransitioning=false;this._element=element;this._config=this._getConfig(config);this._triggerArray=[].slice.call(document.querySelectorAll("[data-toggle=\"collapse\"][href=\"#"+element.id+"\"],"+("[data-toggle=\"collapse\"][data-target=\"#"+element.id+"\"]")));var toggleList=[].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$1));for(var i=0,len=toggleList.length;i<len;i++){var elem=toggleList[i];var selector=Util.getSelectorFromElement(elem);var filterElement=[].slice.call(document.querySelectorAll(selector)).filter(function(foundElem){return foundElem===element;});if(selector!==null&&filterElement.length>0){this._selector=selector;this._triggerArray.push(elem);}}
this._parent=this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray);}
if(this._config.toggle){this.toggle();}}
var _proto=Collapse.prototype;_proto.toggle=function toggle(){if($(this._element).hasClass(CLASS_NAME_SHOW$1)){this.hide();}else{this.show();}};_proto.show=function show(){var _this=this;if(this._isTransitioning||$(this._element).hasClass(CLASS_NAME_SHOW$1)){return;}
var actives;var activesData;if(this._parent){actives=[].slice.call(this._parent.querySelectorAll(SELECTOR_ACTIVES)).filter(function(elem){if(typeof _this._config.parent==='string'){return elem.getAttribute('data-parent')===_this._config.parent;}
return elem.classList.contains(CLASS_NAME_COLLAPSE);});if(actives.length===0){actives=null;}}
if(actives){activesData=$(actives).not(this._selector).data(DATA_KEY$3);if(activesData&&activesData._isTransitioning){return;}}
var startEvent=$.Event(EVENT_SHOW);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}
if(actives){Collapse._jQueryInterface.call($(actives).not(this._selector),'hide');if(!activesData){$(actives).data(DATA_KEY$3,null);}}
var dimension=this._getDimension();$(this._element).removeClass(CLASS_NAME_COLLAPSE).addClass(CLASS_NAME_COLLAPSING);this._element.style[dimension]=0;if(this._triggerArray.length){$(this._triggerArray).removeClass(CLASS_NAME_COLLAPSED).attr('aria-expanded',true);}
this.setTransitioning(true);var complete=function complete(){$(_this._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE+" "+CLASS_NAME_SHOW$1);_this._element.style[dimension]='';_this.setTransitioning(false);$(_this._element).trigger(EVENT_SHOWN);};var capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);var scrollSize="scroll"+capitalizedDimension;var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);this._element.style[dimension]=this._element[scrollSize]+"px";};_proto.hide=function hide(){var _this2=this;if(this._isTransitioning||!$(this._element).hasClass(CLASS_NAME_SHOW$1)){return;}
var startEvent=$.Event(EVENT_HIDE);$(this._element).trigger(startEvent);if(startEvent.isDefaultPrevented()){return;}
var dimension=this._getDimension();this._element.style[dimension]=this._element.getBoundingClientRect()[dimension]+"px";Util.reflow(this._element);$(this._element).addClass(CLASS_NAME_COLLAPSING).removeClass(CLASS_NAME_COLLAPSE+" "+CLASS_NAME_SHOW$1);var triggerArrayLength=this._triggerArray.length;if(triggerArrayLength>0){for(var i=0;i<triggerArrayLength;i++){var trigger=this._triggerArray[i];var selector=Util.getSelectorFromElement(trigger);if(selector!==null){var $elem=$([].slice.call(document.querySelectorAll(selector)));if(!$elem.hasClass(CLASS_NAME_SHOW$1)){$(trigger).addClass(CLASS_NAME_COLLAPSED).attr('aria-expanded',false);}}}}
this.setTransitioning(true);var complete=function complete(){_this2.setTransitioning(false);$(_this2._element).removeClass(CLASS_NAME_COLLAPSING).addClass(CLASS_NAME_COLLAPSE).trigger(EVENT_HIDDEN);};this._element.style[dimension]='';var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);};_proto.setTransitioning=function setTransitioning(isTransitioning){this._isTransitioning=isTransitioning;};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$3);this._config=null;this._parent=null;this._element=null;this._triggerArray=null;this._isTransitioning=null;};_proto._getConfig=function _getConfig(config){config=_extends({},Default$1,config);config.toggle=Boolean(config.toggle);Util.typeCheckConfig(NAME$3,config,DefaultType$1);return config;};_proto._getDimension=function _getDimension(){var hasWidth=$(this._element).hasClass(DIMENSION_WIDTH);return hasWidth?DIMENSION_WIDTH:DIMENSION_HEIGHT;};_proto._getParent=function _getParent(){var _this3=this;var parent;if(Util.isElement(this._config.parent)){parent=this._config.parent;if(typeof this._config.parent.jquery!=='undefined'){parent=this._config.parent[0];}}else{parent=document.querySelector(this._config.parent);}
var selector="[data-toggle=\"collapse\"][data-parent=\""+this._config.parent+"\"]";var children=[].slice.call(parent.querySelectorAll(selector));$(children).each(function(i,element){_this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element),[element]);});return parent;};_proto._addAriaAndCollapsedClass=function _addAriaAndCollapsedClass(element,triggerArray){var isOpen=$(element).hasClass(CLASS_NAME_SHOW$1);if(triggerArray.length){$(triggerArray).toggleClass(CLASS_NAME_COLLAPSED,!isOpen).attr('aria-expanded',isOpen);}};Collapse._getTargetFromElement=function _getTargetFromElement(element){var selector=Util.getSelectorFromElement(element);return selector?document.querySelector(selector):null;};Collapse._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY$3);var _config=_extends({},Default$1,$this.data(),typeof config==='object'&&config?config:{});if(!data&&_config.toggle&&typeof config==='string'&&/show|hide/.test(config)){_config.toggle=false;}
if(!data){data=new Collapse(this,_config);$this.data(DATA_KEY$3,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config]();}});};_createClass(Collapse,null,[{key:"VERSION",get:function get(){return VERSION$3;}},{key:"Default",get:function get(){return Default$1;}}]);return Collapse;}();$(document).on(EVENT_CLICK_DATA_API$3,SELECTOR_DATA_TOGGLE$1,function(event){if(event.currentTarget.tagName==='A'){event.preventDefault();}
var $trigger=$(this);var selector=Util.getSelectorFromElement(this);var selectors=[].slice.call(document.querySelectorAll(selector));$(selectors).each(function(){var $target=$(this);var data=$target.data(DATA_KEY$3);var config=data?'toggle':$trigger.data();Collapse._jQueryInterface.call($target,config);});});$.fn[NAME$3]=Collapse._jQueryInterface;$.fn[NAME$3].Constructor=Collapse;$.fn[NAME$3].noConflict=function(){$.fn[NAME$3]=JQUERY_NO_CONFLICT$3;return Collapse._jQueryInterface;};var NAME$4='dropdown';var VERSION$4='4.5.2';var DATA_KEY$4='bs.dropdown';var EVENT_KEY$4="."+DATA_KEY$4;var DATA_API_KEY$4='.data-api';var JQUERY_NO_CONFLICT$4=$.fn[NAME$4];var ESCAPE_KEYCODE=27;var SPACE_KEYCODE=32;var TAB_KEYCODE=9;var ARROW_UP_KEYCODE=38;var ARROW_DOWN_KEYCODE=40;var RIGHT_MOUSE_BUTTON_WHICH=3;var REGEXP_KEYDOWN=new RegExp(ARROW_UP_KEYCODE+"|"+ARROW_DOWN_KEYCODE+"|"+ESCAPE_KEYCODE);var EVENT_HIDE$1="hide"+EVENT_KEY$4;var EVENT_HIDDEN$1="hidden"+EVENT_KEY$4;var EVENT_SHOW$1="show"+EVENT_KEY$4;var EVENT_SHOWN$1="shown"+EVENT_KEY$4;var EVENT_CLICK="click"+EVENT_KEY$4;var EVENT_CLICK_DATA_API$4="click"+EVENT_KEY$4+DATA_API_KEY$4;var EVENT_KEYDOWN_DATA_API="keydown"+EVENT_KEY$4+DATA_API_KEY$4;var EVENT_KEYUP_DATA_API="keyup"+EVENT_KEY$4+DATA_API_KEY$4;var CLASS_NAME_DISABLED='disabled';var CLASS_NAME_SHOW$2='show';var CLASS_NAME_DROPUP='dropup';var CLASS_NAME_DROPRIGHT='dropright';var CLASS_NAME_DROPLEFT='dropleft';var CLASS_NAME_MENURIGHT='dropdown-menu-right';var CLASS_NAME_POSITION_STATIC='position-static';var SELECTOR_DATA_TOGGLE$2='[data-toggle="dropdown"]';var SELECTOR_FORM_CHILD='.dropdown form';var SELECTOR_MENU='.dropdown-menu';var SELECTOR_NAVBAR_NAV='.navbar-nav';var SELECTOR_VISIBLE_ITEMS='.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)';var PLACEMENT_TOP='top-start';var PLACEMENT_TOPEND='top-end';var PLACEMENT_BOTTOM='bottom-start';var PLACEMENT_BOTTOMEND='bottom-end';var PLACEMENT_RIGHT='right-start';var PLACEMENT_LEFT='left-start';var Default$2={offset:0,flip:true,boundary:'scrollParent',reference:'toggle',display:'dynamic',popperConfig:null};var DefaultType$2={offset:'(number|string|function)',flip:'boolean',boundary:'(string|element)',reference:'(string|element)',display:'string',popperConfig:'(null|object)'};var Dropdown=function(){function Dropdown(element,config){this._element=element;this._popper=null;this._config=this._getConfig(config);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners();}
var _proto=Dropdown.prototype;_proto.toggle=function toggle(){if(this._element.disabled||$(this._element).hasClass(CLASS_NAME_DISABLED)){return;}
var isActive=$(this._menu).hasClass(CLASS_NAME_SHOW$2);Dropdown._clearMenus();if(isActive){return;}
this.show(true);};_proto.show=function show(usePopper){if(usePopper===void 0){usePopper=false;}
if(this._element.disabled||$(this._element).hasClass(CLASS_NAME_DISABLED)||$(this._menu).hasClass(CLASS_NAME_SHOW$2)){return;}
var relatedTarget={relatedTarget:this._element};var showEvent=$.Event(EVENT_SHOW$1,relatedTarget);var parent=Dropdown._getParentFromElement(this._element);$(parent).trigger(showEvent);if(showEvent.isDefaultPrevented()){return;}
if(!this._inNavbar&&usePopper){if(typeof Popper==='undefined'){throw new TypeError('Bootstrap\'s dropdowns require Popper.js (https://popper.js.org/)');}
var referenceElement=this._element;if(this._config.reference==='parent'){referenceElement=parent;}else if(Util.isElement(this._config.reference)){referenceElement=this._config.reference;if(typeof this._config.reference.jquery!=='undefined'){referenceElement=this._config.reference[0];}}
if(this._config.boundary!=='scrollParent'){$(parent).addClass(CLASS_NAME_POSITION_STATIC);}
this._popper=new Popper(referenceElement,this._menu,this._getPopperConfig());}
if('ontouchstart' in document.documentElement&&$(parent).closest(SELECTOR_NAVBAR_NAV).length===0){$(document.body).children().on('mouseover',null,$.noop);}
this._element.focus();this._element.setAttribute('aria-expanded',true);$(this._menu).toggleClass(CLASS_NAME_SHOW$2);$(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_SHOWN$1,relatedTarget));};_proto.hide=function hide(){if(this._element.disabled||$(this._element).hasClass(CLASS_NAME_DISABLED)||!$(this._menu).hasClass(CLASS_NAME_SHOW$2)){return;}
var relatedTarget={relatedTarget:this._element};var hideEvent=$.Event(EVENT_HIDE$1,relatedTarget);var parent=Dropdown._getParentFromElement(this._element);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}
if(this._popper){this._popper.destroy();}
$(this._menu).toggleClass(CLASS_NAME_SHOW$2);$(parent).toggleClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1,relatedTarget));};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$4);$(this._element).off(EVENT_KEY$4);this._element=null;this._menu=null;if(this._popper!==null){this._popper.destroy();this._popper=null;}};_proto.update=function update(){this._inNavbar=this._detectNavbar();if(this._popper!==null){this._popper.scheduleUpdate();}};_proto._addEventListeners=function _addEventListeners(){var _this=this;$(this._element).on(EVENT_CLICK,function(event){event.preventDefault();event.stopPropagation();_this.toggle();});};_proto._getConfig=function _getConfig(config){config=_extends({},this.constructor.Default,$(this._element).data(),config);Util.typeCheckConfig(NAME$4,config,this.constructor.DefaultType);return config;};_proto._getMenuElement=function _getMenuElement(){if(!this._menu){var parent=Dropdown._getParentFromElement(this._element);if(parent){this._menu=parent.querySelector(SELECTOR_MENU);}}
return this._menu;};_proto._getPlacement=function _getPlacement(){var $parentDropdown=$(this._element.parentNode);var placement=PLACEMENT_BOTTOM;if($parentDropdown.hasClass(CLASS_NAME_DROPUP)){placement=$(this._menu).hasClass(CLASS_NAME_MENURIGHT)?PLACEMENT_TOPEND:PLACEMENT_TOP;}else if($parentDropdown.hasClass(CLASS_NAME_DROPRIGHT)){placement=PLACEMENT_RIGHT;}else if($parentDropdown.hasClass(CLASS_NAME_DROPLEFT)){placement=PLACEMENT_LEFT;}else if($(this._menu).hasClass(CLASS_NAME_MENURIGHT)){placement=PLACEMENT_BOTTOMEND;}
return placement;};_proto._detectNavbar=function _detectNavbar(){return $(this._element).closest('.navbar').length>0;};_proto._getOffset=function _getOffset(){var _this2=this;var offset={};if(typeof this._config.offset==='function'){offset.fn=function(data){data.offsets=_extends({},data.offsets,_this2._config.offset(data.offsets,_this2._element)||{});return data;};}else{offset.offset=this._config.offset;}
return offset;};_proto._getPopperConfig=function _getPopperConfig(){var popperConfig={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};if(this._config.display==='static'){popperConfig.modifiers.applyStyle={enabled:false};}
return _extends({},popperConfig,this._config.popperConfig);};Dropdown._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$4);var _config=typeof config==='object'?config:null;if(!data){data=new Dropdown(this,_config);$(this).data(DATA_KEY$4,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config]();}});};Dropdown._clearMenus=function _clearMenus(event){if(event&&(event.which===RIGHT_MOUSE_BUTTON_WHICH||event.type==='keyup'&&event.which!==TAB_KEYCODE)){return;}
var toggles=[].slice.call(document.querySelectorAll(SELECTOR_DATA_TOGGLE$2));for(var i=0,len=toggles.length;i<len;i++){var parent=Dropdown._getParentFromElement(toggles[i]);var context=$(toggles[i]).data(DATA_KEY$4);var relatedTarget={relatedTarget:toggles[i]};if(event&&event.type==='click'){relatedTarget.clickEvent=event;}
if(!context){continue;}
var dropdownMenu=context._menu;if(!$(parent).hasClass(CLASS_NAME_SHOW$2)){continue;}
if(event&&(event.type==='click'&&/input|textarea/i.test(event.target.tagName)||event.type==='keyup'&&event.which===TAB_KEYCODE)&&$.contains(parent,event.target)){continue;}
var hideEvent=$.Event(EVENT_HIDE$1,relatedTarget);$(parent).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){continue;}
if('ontouchstart' in document.documentElement){$(document.body).children().off('mouseover',null,$.noop);}
toggles[i].setAttribute('aria-expanded','false');if(context._popper){context._popper.destroy();}
$(dropdownMenu).removeClass(CLASS_NAME_SHOW$2);$(parent).removeClass(CLASS_NAME_SHOW$2).trigger($.Event(EVENT_HIDDEN$1,relatedTarget));}};Dropdown._getParentFromElement=function _getParentFromElement(element){var parent;var selector=Util.getSelectorFromElement(element);if(selector){parent=document.querySelector(selector);}
return parent||element.parentNode;};Dropdown._dataApiKeydownHandler=function _dataApiKeydownHandler(event){if(/input|textarea/i.test(event.target.tagName)?event.which===SPACE_KEYCODE||event.which!==ESCAPE_KEYCODE&&(event.which!==ARROW_DOWN_KEYCODE&&event.which!==ARROW_UP_KEYCODE||$(event.target).closest(SELECTOR_MENU).length):!REGEXP_KEYDOWN.test(event.which)){return;}
if(this.disabled||$(this).hasClass(CLASS_NAME_DISABLED)){return;}
var parent=Dropdown._getParentFromElement(this);var isActive=$(parent).hasClass(CLASS_NAME_SHOW$2);if(!isActive&&event.which===ESCAPE_KEYCODE){return;}
event.preventDefault();event.stopPropagation();if(!isActive||isActive&&(event.which===ESCAPE_KEYCODE||event.which===SPACE_KEYCODE)){if(event.which===ESCAPE_KEYCODE){$(parent.querySelector(SELECTOR_DATA_TOGGLE$2)).trigger('focus');}
$(this).trigger('click');return;}
var items=[].slice.call(parent.querySelectorAll(SELECTOR_VISIBLE_ITEMS)).filter(function(item){return $(item).is(':visible');});if(items.length===0){return;}
var index=items.indexOf(event.target);if(event.which===ARROW_UP_KEYCODE&&index>0){index--;}
if(event.which===ARROW_DOWN_KEYCODE&&index<items.length-1){index++;}
if(index<0){index=0;}
items[index].focus();};_createClass(Dropdown,null,[{key:"VERSION",get:function get(){return VERSION$4;}},{key:"Default",get:function get(){return Default$2;}},{key:"DefaultType",get:function get(){return DefaultType$2;}}]);return Dropdown;}();$(document).on(EVENT_KEYDOWN_DATA_API,SELECTOR_DATA_TOGGLE$2,Dropdown._dataApiKeydownHandler).on(EVENT_KEYDOWN_DATA_API,SELECTOR_MENU,Dropdown._dataApiKeydownHandler).on(EVENT_CLICK_DATA_API$4+" "+EVENT_KEYUP_DATA_API,Dropdown._clearMenus).on(EVENT_CLICK_DATA_API$4,SELECTOR_DATA_TOGGLE$2,function(event){event.preventDefault();event.stopPropagation();Dropdown._jQueryInterface.call($(this),'toggle');}).on(EVENT_CLICK_DATA_API$4,SELECTOR_FORM_CHILD,function(e){e.stopPropagation();});$.fn[NAME$4]=Dropdown._jQueryInterface;$.fn[NAME$4].Constructor=Dropdown;$.fn[NAME$4].noConflict=function(){$.fn[NAME$4]=JQUERY_NO_CONFLICT$4;return Dropdown._jQueryInterface;};var NAME$5='modal';var VERSION$5='4.5.2';var DATA_KEY$5='bs.modal';var EVENT_KEY$5="."+DATA_KEY$5;var DATA_API_KEY$5='.data-api';var JQUERY_NO_CONFLICT$5=$.fn[NAME$5];var ESCAPE_KEYCODE$1=27;var Default$3={backdrop:true,keyboard:true,focus:true,show:true};var DefaultType$3={backdrop:'(boolean|string)',keyboard:'boolean',focus:'boolean',show:'boolean'};var EVENT_HIDE$2="hide"+EVENT_KEY$5;var EVENT_HIDE_PREVENTED="hidePrevented"+EVENT_KEY$5;var EVENT_HIDDEN$2="hidden"+EVENT_KEY$5;var EVENT_SHOW$2="show"+EVENT_KEY$5;var EVENT_SHOWN$2="shown"+EVENT_KEY$5;var EVENT_FOCUSIN="focusin"+EVENT_KEY$5;var EVENT_RESIZE="resize"+EVENT_KEY$5;var EVENT_CLICK_DISMISS="click.dismiss"+EVENT_KEY$5;var EVENT_KEYDOWN_DISMISS="keydown.dismiss"+EVENT_KEY$5;var EVENT_MOUSEUP_DISMISS="mouseup.dismiss"+EVENT_KEY$5;var EVENT_MOUSEDOWN_DISMISS="mousedown.dismiss"+EVENT_KEY$5;var EVENT_CLICK_DATA_API$5="click"+EVENT_KEY$5+DATA_API_KEY$5;var CLASS_NAME_SCROLLABLE='modal-dialog-scrollable';var CLASS_NAME_SCROLLBAR_MEASURER='modal-scrollbar-measure';var CLASS_NAME_BACKDROP='modal-backdrop';var CLASS_NAME_OPEN='modal-open';var CLASS_NAME_FADE$1='fade';var CLASS_NAME_SHOW$3='show';var CLASS_NAME_STATIC='modal-static';var SELECTOR_DIALOG='.modal-dialog';var SELECTOR_MODAL_BODY='.modal-body';var SELECTOR_DATA_TOGGLE$3='[data-toggle="modal"]';var SELECTOR_DATA_DISMISS='[data-dismiss="modal"]';var SELECTOR_FIXED_CONTENT='.fixed-top, .fixed-bottom, .is-fixed, .sticky-top';var SELECTOR_STICKY_CONTENT='.sticky-top';var Modal=function(){function Modal(element,config){this._config=this._getConfig(config);this._element=element;this._dialog=element.querySelector(SELECTOR_DIALOG);this._backdrop=null;this._isShown=false;this._isBodyOverflowing=false;this._ignoreBackdropClick=false;this._isTransitioning=false;this._scrollbarWidth=0;}
var _proto=Modal.prototype;_proto.toggle=function toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget);};_proto.show=function show(relatedTarget){var _this=this;if(this._isShown||this._isTransitioning){return;}
if($(this._element).hasClass(CLASS_NAME_FADE$1)){this._isTransitioning=true;}
var showEvent=$.Event(EVENT_SHOW$2,{relatedTarget:relatedTarget});$(this._element).trigger(showEvent);if(this._isShown||showEvent.isDefaultPrevented()){return;}
this._isShown=true;this._checkScrollbar();this._setScrollbar();this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();$(this._element).on(EVENT_CLICK_DISMISS,SELECTOR_DATA_DISMISS,function(event){return _this.hide(event);});$(this._dialog).on(EVENT_MOUSEDOWN_DISMISS,function(){$(_this._element).one(EVENT_MOUSEUP_DISMISS,function(event){if($(event.target).is(_this._element)){_this._ignoreBackdropClick=true;}});});this._showBackdrop(function(){return _this._showElement(relatedTarget);});};_proto.hide=function hide(event){var _this2=this;if(event){event.preventDefault();}
if(!this._isShown||this._isTransitioning){return;}
var hideEvent=$.Event(EVENT_HIDE$2);$(this._element).trigger(hideEvent);if(!this._isShown||hideEvent.isDefaultPrevented()){return;}
this._isShown=false;var transition=$(this._element).hasClass(CLASS_NAME_FADE$1);if(transition){this._isTransitioning=true;}
this._setEscapeEvent();this._setResizeEvent();$(document).off(EVENT_FOCUSIN);$(this._element).removeClass(CLASS_NAME_SHOW$3);$(this._element).off(EVENT_CLICK_DISMISS);$(this._dialog).off(EVENT_MOUSEDOWN_DISMISS);if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,function(event){return _this2._hideModal(event);}).emulateTransitionEnd(transitionDuration);}else{this._hideModal();}};_proto.dispose=function dispose(){[window,this._element,this._dialog].forEach(function(htmlElement){return $(htmlElement).off(EVENT_KEY$5);});$(document).off(EVENT_FOCUSIN);$.removeData(this._element,DATA_KEY$5);this._config=null;this._element=null;this._dialog=null;this._backdrop=null;this._isShown=null;this._isBodyOverflowing=null;this._ignoreBackdropClick=null;this._isTransitioning=null;this._scrollbarWidth=null;};_proto.handleUpdate=function handleUpdate(){this._adjustDialog();};_proto._getConfig=function _getConfig(config){config=_extends({},Default$3,config);Util.typeCheckConfig(NAME$5,config,DefaultType$3);return config;};_proto._triggerBackdropTransition=function _triggerBackdropTransition(){var _this3=this;if(this._config.backdrop==='static'){var hideEventPrevented=$.Event(EVENT_HIDE_PREVENTED);$(this._element).trigger(hideEventPrevented);if(hideEventPrevented.defaultPrevented){return;}
var isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!isModalOverflowing){this._element.style.overflowY='hidden';}
this._element.classList.add(CLASS_NAME_STATIC);var modalTransitionDuration=Util.getTransitionDurationFromElement(this._dialog);$(this._element).off(Util.TRANSITION_END);$(this._element).one(Util.TRANSITION_END,function(){_this3._element.classList.remove(CLASS_NAME_STATIC);if(!isModalOverflowing){$(_this3._element).one(Util.TRANSITION_END,function(){_this3._element.style.overflowY='';}).emulateTransitionEnd(_this3._element,modalTransitionDuration);}}).emulateTransitionEnd(modalTransitionDuration);this._element.focus();}else{this.hide();}};_proto._showElement=function _showElement(relatedTarget){var _this4=this;var transition=$(this._element).hasClass(CLASS_NAME_FADE$1);var modalBody=this._dialog?this._dialog.querySelector(SELECTOR_MODAL_BODY):null;if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){document.body.appendChild(this._element);}
this._element.style.display='block';this._element.removeAttribute('aria-hidden');this._element.setAttribute('aria-modal',true);this._element.setAttribute('role','dialog');if($(this._dialog).hasClass(CLASS_NAME_SCROLLABLE)&&modalBody){modalBody.scrollTop=0;}else{this._element.scrollTop=0;}
if(transition){Util.reflow(this._element);}
$(this._element).addClass(CLASS_NAME_SHOW$3);if(this._config.focus){this._enforceFocus();}
var shownEvent=$.Event(EVENT_SHOWN$2,{relatedTarget:relatedTarget});var transitionComplete=function transitionComplete(){if(_this4._config.focus){_this4._element.focus();}
_this4._isTransitioning=false;$(_this4._element).trigger(shownEvent);};if(transition){var transitionDuration=Util.getTransitionDurationFromElement(this._dialog);$(this._dialog).one(Util.TRANSITION_END,transitionComplete).emulateTransitionEnd(transitionDuration);}else{transitionComplete();}};_proto._enforceFocus=function _enforceFocus(){var _this5=this;$(document).off(EVENT_FOCUSIN)
.on(EVENT_FOCUSIN,function(event){if(document!==event.target&&_this5._element!==event.target&&$(_this5._element).has(event.target).length===0){_this5._element.focus();}});};_proto._setEscapeEvent=function _setEscapeEvent(){var _this6=this;if(this._isShown){$(this._element).on(EVENT_KEYDOWN_DISMISS,function(event){if(_this6._config.keyboard&&event.which===ESCAPE_KEYCODE$1){event.preventDefault();_this6.hide();}else if(!_this6._config.keyboard&&event.which===ESCAPE_KEYCODE$1){_this6._triggerBackdropTransition();}});}else if(!this._isShown){$(this._element).off(EVENT_KEYDOWN_DISMISS);}};_proto._setResizeEvent=function _setResizeEvent(){var _this7=this;if(this._isShown){$(window).on(EVENT_RESIZE,function(event){return _this7.handleUpdate(event);});}else{$(window).off(EVENT_RESIZE);}};_proto._hideModal=function _hideModal(){var _this8=this;this._element.style.display='none';this._element.setAttribute('aria-hidden',true);this._element.removeAttribute('aria-modal');this._element.removeAttribute('role');this._isTransitioning=false;this._showBackdrop(function(){$(document.body).removeClass(CLASS_NAME_OPEN);_this8._resetAdjustments();_this8._resetScrollbar();$(_this8._element).trigger(EVENT_HIDDEN$2);});};_proto._removeBackdrop=function _removeBackdrop(){if(this._backdrop){$(this._backdrop).remove();this._backdrop=null;}};_proto._showBackdrop=function _showBackdrop(callback){var _this9=this;var animate=$(this._element).hasClass(CLASS_NAME_FADE$1)?CLASS_NAME_FADE$1:'';if(this._isShown&&this._config.backdrop){this._backdrop=document.createElement('div');this._backdrop.className=CLASS_NAME_BACKDROP;if(animate){this._backdrop.classList.add(animate);}
$(this._backdrop).appendTo(document.body);$(this._element).on(EVENT_CLICK_DISMISS,function(event){if(_this9._ignoreBackdropClick){_this9._ignoreBackdropClick=false;return;}
if(event.target!==event.currentTarget){return;}
_this9._triggerBackdropTransition();});if(animate){Util.reflow(this._backdrop);}
$(this._backdrop).addClass(CLASS_NAME_SHOW$3);if(!callback){return;}
if(!animate){callback();return;}
var backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$(this._backdrop).one(Util.TRANSITION_END,callback).emulateTransitionEnd(backdropTransitionDuration);}else if(!this._isShown&&this._backdrop){$(this._backdrop).removeClass(CLASS_NAME_SHOW$3);var callbackRemove=function callbackRemove(){_this9._removeBackdrop();if(callback){callback();}};if($(this._element).hasClass(CLASS_NAME_FADE$1)){var _backdropTransitionDuration=Util.getTransitionDurationFromElement(this._backdrop);$(this._backdrop).one(Util.TRANSITION_END,callbackRemove).emulateTransitionEnd(_backdropTransitionDuration);}else{callbackRemove();}}else if(callback){callback();}};_proto._adjustDialog=function _adjustDialog(){var isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!this._isBodyOverflowing&&isModalOverflowing){this._element.style.paddingLeft=this._scrollbarWidth+"px";}
if(this._isBodyOverflowing&&!isModalOverflowing){this._element.style.paddingRight=this._scrollbarWidth+"px";}};_proto._resetAdjustments=function _resetAdjustments(){this._element.style.paddingLeft='';this._element.style.paddingRight='';};_proto._checkScrollbar=function _checkScrollbar(){var rect=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(rect.left+rect.right)<window.innerWidth;this._scrollbarWidth=this._getScrollbarWidth();};_proto._setScrollbar=function _setScrollbar(){var _this10=this;if(this._isBodyOverflowing){var fixedContent=[].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));var stickyContent=[].slice.call(document.querySelectorAll(SELECTOR_STICKY_CONTENT));$(fixedContent).each(function(index,element){var actualPadding=element.style.paddingRight;var calculatedPadding=$(element).css('padding-right');$(element).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+_this10._scrollbarWidth+"px");});$(stickyContent).each(function(index,element){var actualMargin=element.style.marginRight;var calculatedMargin=$(element).css('margin-right');$(element).data('margin-right',actualMargin).css('margin-right',parseFloat(calculatedMargin)-_this10._scrollbarWidth+"px");});var actualPadding=document.body.style.paddingRight;var calculatedPadding=$(document.body).css('padding-right');$(document.body).data('padding-right',actualPadding).css('padding-right',parseFloat(calculatedPadding)+this._scrollbarWidth+"px");}
$(document.body).addClass(CLASS_NAME_OPEN);};_proto._resetScrollbar=function _resetScrollbar(){var fixedContent=[].slice.call(document.querySelectorAll(SELECTOR_FIXED_CONTENT));$(fixedContent).each(function(index,element){var padding=$(element).data('padding-right');$(element).removeData('padding-right');element.style.paddingRight=padding?padding:'';});var elements=[].slice.call(document.querySelectorAll(""+SELECTOR_STICKY_CONTENT));$(elements).each(function(index,element){var margin=$(element).data('margin-right');if(typeof margin!=='undefined'){$(element).css('margin-right',margin).removeData('margin-right');}});var padding=$(document.body).data('padding-right');$(document.body).removeData('padding-right');document.body.style.paddingRight=padding?padding:'';};_proto._getScrollbarWidth=function _getScrollbarWidth(){var scrollDiv=document.createElement('div');scrollDiv.className=CLASS_NAME_SCROLLBAR_MEASURER;document.body.appendChild(scrollDiv);var scrollbarWidth=scrollDiv.getBoundingClientRect().width-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);return scrollbarWidth;};Modal._jQueryInterface=function _jQueryInterface(config,relatedTarget){return this.each(function(){var data=$(this).data(DATA_KEY$5);var _config=_extends({},Default$3,$(this).data(),typeof config==='object'&&config?config:{});if(!data){data=new Modal(this,_config);$(this).data(DATA_KEY$5,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config](relatedTarget);}else if(_config.show){data.show(relatedTarget);}});};_createClass(Modal,null,[{key:"VERSION",get:function get(){return VERSION$5;}},{key:"Default",get:function get(){return Default$3;}}]);return Modal;}();$(document).on(EVENT_CLICK_DATA_API$5,SELECTOR_DATA_TOGGLE$3,function(event){var _this11=this;var target;var selector=Util.getSelectorFromElement(this);if(selector){target=document.querySelector(selector);}
var config=$(target).data(DATA_KEY$5)?'toggle':_extends({},$(target).data(),$(this).data());if(this.tagName==='A'||this.tagName==='AREA'){event.preventDefault();}
var $target=$(target).one(EVENT_SHOW$2,function(showEvent){if(showEvent.isDefaultPrevented()){return;}
$target.one(EVENT_HIDDEN$2,function(){if($(_this11).is(':visible')){_this11.focus();}});});Modal._jQueryInterface.call($(target),config,this);});$.fn[NAME$5]=Modal._jQueryInterface;$.fn[NAME$5].Constructor=Modal;$.fn[NAME$5].noConflict=function(){$.fn[NAME$5]=JQUERY_NO_CONFLICT$5;return Modal._jQueryInterface;};var uriAttrs=['background','cite','href','itemtype','longdesc','poster','src','xlink:href'];var ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i;var DefaultWhitelist={'*':['class','dir','id','lang','role',ARIA_ATTRIBUTE_PATTERN],a:['target','href','title','rel'],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:['src','srcset','alt','title','width','height'],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};var SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi;var DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function allowedAttribute(attr,allowedAttributeList){var attrName=attr.nodeName.toLowerCase();if(allowedAttributeList.indexOf(attrName)!==-1){if(uriAttrs.indexOf(attrName)!==-1){return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN)||attr.nodeValue.match(DATA_URL_PATTERN));}
return true;}
var regExp=allowedAttributeList.filter(function(attrRegex){return attrRegex instanceof RegExp;});for(var i=0,len=regExp.length;i<len;i++){if(attrName.match(regExp[i])){return true;}}
return false;}
function sanitizeHtml(unsafeHtml,whiteList,sanitizeFn){if(unsafeHtml.length===0){return unsafeHtml;}
if(sanitizeFn&&typeof sanitizeFn==='function'){return sanitizeFn(unsafeHtml);}
var domParser=new window.DOMParser();var createdDocument=domParser.parseFromString(unsafeHtml,'text/html');var whitelistKeys=Object.keys(whiteList);var elements=[].slice.call(createdDocument.body.querySelectorAll('*'));var _loop=function _loop(i,len){var el=elements[i];var elName=el.nodeName.toLowerCase();if(whitelistKeys.indexOf(el.nodeName.toLowerCase())===-1){el.parentNode.removeChild(el);return"continue";}
var attributeList=[].slice.call(el.attributes);var whitelistedAttributes=[].concat(whiteList['*']||[],whiteList[elName]||[]);attributeList.forEach(function(attr){if(!allowedAttribute(attr,whitelistedAttributes)){el.removeAttribute(attr.nodeName);}});};for(var i=0,len=elements.length;i<len;i++){var _ret=_loop(i);if(_ret==="continue")continue;}
return createdDocument.body.innerHTML;}
var NAME$6='tooltip';var VERSION$6='4.5.2';var DATA_KEY$6='bs.tooltip';var EVENT_KEY$6="."+DATA_KEY$6;var JQUERY_NO_CONFLICT$6=$.fn[NAME$6];var CLASS_PREFIX='bs-tooltip';var BSCLS_PREFIX_REGEX=new RegExp("(^|\\s)"+CLASS_PREFIX+"\\S+",'g');var DISALLOWED_ATTRIBUTES=['sanitize','whiteList','sanitizeFn'];var DefaultType$4={animation:'boolean',template:'string',title:'(string|element|function)',trigger:'string',delay:'(number|object)',html:'boolean',selector:'(string|boolean)',placement:'(string|function)',offset:'(number|string|function)',container:'(string|element|boolean)',fallbackPlacement:'(string|array)',boundary:'(string|element)',sanitize:'boolean',sanitizeFn:'(null|function)',whiteList:'object',popperConfig:'(null|object)'};var AttachmentMap={AUTO:'auto',TOP:'top',RIGHT:'right',BOTTOM:'bottom',LEFT:'left'};var Default$4={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="arrow"></div>'+'<div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,selector:false,placement:'top',offset:0,container:false,fallbackPlacement:'flip',boundary:'scrollParent',sanitize:true,sanitizeFn:null,whiteList:DefaultWhitelist,popperConfig:null};var HOVER_STATE_SHOW='show';var HOVER_STATE_OUT='out';var Event={HIDE:"hide"+EVENT_KEY$6,HIDDEN:"hidden"+EVENT_KEY$6,SHOW:"show"+EVENT_KEY$6,SHOWN:"shown"+EVENT_KEY$6,INSERTED:"inserted"+EVENT_KEY$6,CLICK:"click"+EVENT_KEY$6,FOCUSIN:"focusin"+EVENT_KEY$6,FOCUSOUT:"focusout"+EVENT_KEY$6,MOUSEENTER:"mouseenter"+EVENT_KEY$6,MOUSELEAVE:"mouseleave"+EVENT_KEY$6};var CLASS_NAME_FADE$2='fade';var CLASS_NAME_SHOW$4='show';var SELECTOR_TOOLTIP_INNER='.tooltip-inner';var SELECTOR_ARROW='.arrow';var TRIGGER_HOVER='hover';var TRIGGER_FOCUS='focus';var TRIGGER_CLICK='click';var TRIGGER_MANUAL='manual';var Tooltip=function(){function Tooltip(element,config){if(typeof Popper==='undefined'){throw new TypeError('Bootstrap\'s tooltips require Popper.js (https://popper.js.org/)');}
this._isEnabled=true;this._timeout=0;this._hoverState='';this._activeTrigger={};this._popper=null;this.element=element;this.config=this._getConfig(config);this.tip=null;this._setListeners();}
var _proto=Tooltip.prototype;_proto.enable=function enable(){this._isEnabled=true;};_proto.disable=function disable(){this._isEnabled=false;};_proto.toggleEnabled=function toggleEnabled(){this._isEnabled=!this._isEnabled;};_proto.toggle=function toggle(event){if(!this._isEnabled){return;}
if(event){var dataKey=this.constructor.DATA_KEY;var context=$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}
context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context);}else{context._leave(null,context);}}else{if($(this.getTipElement()).hasClass(CLASS_NAME_SHOW$4)){this._leave(null,this);return;}
this._enter(null,this);}};_proto.dispose=function dispose(){clearTimeout(this._timeout);$.removeData(this.element,this.constructor.DATA_KEY);$(this.element).off(this.constructor.EVENT_KEY);$(this.element).closest('.modal').off('hide.bs.modal',this._hideModalHandler);if(this.tip){$(this.tip).remove();}
this._isEnabled=null;this._timeout=null;this._hoverState=null;this._activeTrigger=null;if(this._popper){this._popper.destroy();}
this._popper=null;this.element=null;this.config=null;this.tip=null;};_proto.show=function show(){var _this=this;if($(this.element).css('display')==='none'){throw new Error('Please use show on visible elements');}
var showEvent=$.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){$(this.element).trigger(showEvent);var shadowRoot=Util.findShadowRoot(this.element);var isInTheDom=$.contains(shadowRoot!==null?shadowRoot:this.element.ownerDocument.documentElement,this.element);if(showEvent.isDefaultPrevented()||!isInTheDom){return;}
var tip=this.getTipElement();var tipId=Util.getUID(this.constructor.NAME);tip.setAttribute('id',tipId);this.element.setAttribute('aria-describedby',tipId);this.setContent();if(this.config.animation){$(tip).addClass(CLASS_NAME_FADE$2);}
var placement=typeof this.config.placement==='function'?this.config.placement.call(this,tip,this.element):this.config.placement;var attachment=this._getAttachment(placement);this.addAttachmentClass(attachment);var container=this._getContainer();$(tip).data(this.constructor.DATA_KEY,this);if(!$.contains(this.element.ownerDocument.documentElement,this.tip)){$(tip).appendTo(container);}
$(this.element).trigger(this.constructor.Event.INSERTED);this._popper=new Popper(this.element,tip,this._getPopperConfig(attachment));$(tip).addClass(CLASS_NAME_SHOW$4);if('ontouchstart' in document.documentElement){$(document.body).children().on('mouseover',null,$.noop);}
var complete=function complete(){if(_this.config.animation){_this._fixTransition();}
var prevHoverState=_this._hoverState;_this._hoverState=null;$(_this.element).trigger(_this.constructor.Event.SHOWN);if(prevHoverState===HOVER_STATE_OUT){_this._leave(null,_this);}};if($(this.tip).hasClass(CLASS_NAME_FADE$2)){var transitionDuration=Util.getTransitionDurationFromElement(this.tip);$(this.tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}}};_proto.hide=function hide(callback){var _this2=this;var tip=this.getTipElement();var hideEvent=$.Event(this.constructor.Event.HIDE);var complete=function complete(){if(_this2._hoverState!==HOVER_STATE_SHOW&&tip.parentNode){tip.parentNode.removeChild(tip);}
_this2._cleanTipClass();_this2.element.removeAttribute('aria-describedby');$(_this2.element).trigger(_this2.constructor.Event.HIDDEN);if(_this2._popper!==null){_this2._popper.destroy();}
if(callback){callback();}};$(this.element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}
$(tip).removeClass(CLASS_NAME_SHOW$4);if('ontouchstart' in document.documentElement){$(document.body).children().off('mouseover',null,$.noop);}
this._activeTrigger[TRIGGER_CLICK]=false;this._activeTrigger[TRIGGER_FOCUS]=false;this._activeTrigger[TRIGGER_HOVER]=false;if($(this.tip).hasClass(CLASS_NAME_FADE$2)){var transitionDuration=Util.getTransitionDurationFromElement(tip);$(tip).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}
this._hoverState='';};_proto.update=function update(){if(this._popper!==null){this._popper.scheduleUpdate();}};_proto.isWithContent=function isWithContent(){return Boolean(this.getTitle());};_proto.addAttachmentClass=function addAttachmentClass(attachment){$(this.getTipElement()).addClass(CLASS_PREFIX+"-"+attachment);};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$(this.config.template)[0];return this.tip;};_proto.setContent=function setContent(){var tip=this.getTipElement();this.setElementContent($(tip.querySelectorAll(SELECTOR_TOOLTIP_INNER)),this.getTitle());$(tip).removeClass(CLASS_NAME_FADE$2+" "+CLASS_NAME_SHOW$4);};_proto.setElementContent=function setElementContent($element,content){if(typeof content==='object'&&(content.nodeType||content.jquery)){if(this.config.html){if(!$(content).parent().is($element)){$element.empty().append(content);}}else{$element.text($(content).text());}
return;}
if(this.config.html){if(this.config.sanitize){content=sanitizeHtml(content,this.config.whiteList,this.config.sanitizeFn);}
$element.html(content);}else{$element.text(content);}};_proto.getTitle=function getTitle(){var title=this.element.getAttribute('data-original-title');if(!title){title=typeof this.config.title==='function'?this.config.title.call(this.element):this.config.title;}
return title;};_proto._getPopperConfig=function _getPopperConfig(attachment){var _this3=this;var defaultBsConfig={placement:attachment,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:SELECTOR_ARROW},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function onCreate(data){if(data.originalPlacement!==data.placement){_this3._handlePopperPlacementChange(data);}},onUpdate:function onUpdate(data){return _this3._handlePopperPlacementChange(data);}};return _extends({},defaultBsConfig,this.config.popperConfig);};_proto._getOffset=function _getOffset(){var _this4=this;var offset={};if(typeof this.config.offset==='function'){offset.fn=function(data){data.offsets=_extends({},data.offsets,_this4.config.offset(data.offsets,_this4.element)||{});return data;};}else{offset.offset=this.config.offset;}
return offset;};_proto._getContainer=function _getContainer(){if(this.config.container===false){return document.body;}
if(Util.isElement(this.config.container)){return $(this.config.container);}
return $(document).find(this.config.container);};_proto._getAttachment=function _getAttachment(placement){return AttachmentMap[placement.toUpperCase()];};_proto._setListeners=function _setListeners(){var _this5=this;var triggers=this.config.trigger.split(' ');triggers.forEach(function(trigger){if(trigger==='click'){$(_this5.element).on(_this5.constructor.Event.CLICK,_this5.config.selector,function(event){return _this5.toggle(event);});}else if(trigger!==TRIGGER_MANUAL){var eventIn=trigger===TRIGGER_HOVER?_this5.constructor.Event.MOUSEENTER:_this5.constructor.Event.FOCUSIN;var eventOut=trigger===TRIGGER_HOVER?_this5.constructor.Event.MOUSELEAVE:_this5.constructor.Event.FOCUSOUT;$(_this5.element).on(eventIn,_this5.config.selector,function(event){return _this5._enter(event);}).on(eventOut,_this5.config.selector,function(event){return _this5._leave(event);});}});this._hideModalHandler=function(){if(_this5.element){_this5.hide();}};$(this.element).closest('.modal').on('hide.bs.modal',this._hideModalHandler);if(this.config.selector){this.config=_extends({},this.config,{trigger:'manual',selector:''});}else{this._fixTitle();}};_proto._fixTitle=function _fixTitle(){var titleType=typeof this.element.getAttribute('data-original-title');if(this.element.getAttribute('title')||titleType!=='string'){this.element.setAttribute('data-original-title',this.element.getAttribute('title')||'');this.element.setAttribute('title','');}};_proto._enter=function _enter(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}
if(event){context._activeTrigger[event.type==='focusin'?TRIGGER_FOCUS:TRIGGER_HOVER]=true;}
if($(context.getTipElement()).hasClass(CLASS_NAME_SHOW$4)||context._hoverState===HOVER_STATE_SHOW){context._hoverState=HOVER_STATE_SHOW;return;}
clearTimeout(context._timeout);context._hoverState=HOVER_STATE_SHOW;if(!context.config.delay||!context.config.delay.show){context.show();return;}
context._timeout=setTimeout(function(){if(context._hoverState===HOVER_STATE_SHOW){context.show();}},context.config.delay.show);};_proto._leave=function _leave(event,context){var dataKey=this.constructor.DATA_KEY;context=context||$(event.currentTarget).data(dataKey);if(!context){context=new this.constructor(event.currentTarget,this._getDelegateConfig());$(event.currentTarget).data(dataKey,context);}
if(event){context._activeTrigger[event.type==='focusout'?TRIGGER_FOCUS:TRIGGER_HOVER]=false;}
if(context._isWithActiveTrigger()){return;}
clearTimeout(context._timeout);context._hoverState=HOVER_STATE_OUT;if(!context.config.delay||!context.config.delay.hide){context.hide();return;}
context._timeout=setTimeout(function(){if(context._hoverState===HOVER_STATE_OUT){context.hide();}},context.config.delay.hide);};_proto._isWithActiveTrigger=function _isWithActiveTrigger(){for(var trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return true;}}
return false;};_proto._getConfig=function _getConfig(config){var dataAttributes=$(this.element).data();Object.keys(dataAttributes).forEach(function(dataAttr){if(DISALLOWED_ATTRIBUTES.indexOf(dataAttr)!==-1){delete dataAttributes[dataAttr];}});config=_extends({},this.constructor.Default,dataAttributes,typeof config==='object'&&config?config:{});if(typeof config.delay==='number'){config.delay={show:config.delay,hide:config.delay};}
if(typeof config.title==='number'){config.title=config.title.toString();}
if(typeof config.content==='number'){config.content=config.content.toString();}
Util.typeCheckConfig(NAME$6,config,this.constructor.DefaultType);if(config.sanitize){config.template=sanitizeHtml(config.template,config.whiteList,config.sanitizeFn);}
return config;};_proto._getDelegateConfig=function _getDelegateConfig(){var config={};if(this.config){for(var key in this.config){if(this.constructor.Default[key]!==this.config[key]){config[key]=this.config[key];}}}
return config;};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX);if(tabClass!==null&&tabClass.length){$tip.removeClass(tabClass.join(''));}};_proto._handlePopperPlacementChange=function _handlePopperPlacementChange(popperData){this.tip=popperData.instance.popper;this._cleanTipClass();this.addAttachmentClass(this._getAttachment(popperData.placement));};_proto._fixTransition=function _fixTransition(){var tip=this.getTipElement();var initConfigAnimation=this.config.animation;if(tip.getAttribute('x-placement')!==null){return;}
$(tip).removeClass(CLASS_NAME_FADE$2);this.config.animation=false;this.hide();this.show();this.config.animation=initConfigAnimation;};Tooltip._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$6);var _config=typeof config==='object'&&config;if(!data&&/dispose|hide/.test(config)){return;}
if(!data){data=new Tooltip(this,_config);$(this).data(DATA_KEY$6,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config]();}});};_createClass(Tooltip,null,[{key:"VERSION",get:function get(){return VERSION$6;}},{key:"Default",get:function get(){return Default$4;}},{key:"NAME",get:function get(){return NAME$6;}},{key:"DATA_KEY",get:function get(){return DATA_KEY$6;}},{key:"Event",get:function get(){return Event;}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY$6;}},{key:"DefaultType",get:function get(){return DefaultType$4;}}]);return Tooltip;}();$.fn[NAME$6]=Tooltip._jQueryInterface;$.fn[NAME$6].Constructor=Tooltip;$.fn[NAME$6].noConflict=function(){$.fn[NAME$6]=JQUERY_NO_CONFLICT$6;return Tooltip._jQueryInterface;};var NAME$7='popover';var VERSION$7='4.5.2';var DATA_KEY$7='bs.popover';var EVENT_KEY$7="."+DATA_KEY$7;var JQUERY_NO_CONFLICT$7=$.fn[NAME$7];var CLASS_PREFIX$1='bs-popover';var BSCLS_PREFIX_REGEX$1=new RegExp("(^|\\s)"+CLASS_PREFIX$1+"\\S+",'g');var Default$5=_extends({},Tooltip.Default,{placement:'right',trigger:'click',content:'',template:'<div class="popover" role="tooltip">'+'<div class="arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div></div>'});var DefaultType$5=_extends({},Tooltip.DefaultType,{content:'(string|element|function)'});var CLASS_NAME_FADE$3='fade';var CLASS_NAME_SHOW$5='show';var SELECTOR_TITLE='.popover-header';var SELECTOR_CONTENT='.popover-body';var Event$1={HIDE:"hide"+EVENT_KEY$7,HIDDEN:"hidden"+EVENT_KEY$7,SHOW:"show"+EVENT_KEY$7,SHOWN:"shown"+EVENT_KEY$7,INSERTED:"inserted"+EVENT_KEY$7,CLICK:"click"+EVENT_KEY$7,FOCUSIN:"focusin"+EVENT_KEY$7,FOCUSOUT:"focusout"+EVENT_KEY$7,MOUSEENTER:"mouseenter"+EVENT_KEY$7,MOUSELEAVE:"mouseleave"+EVENT_KEY$7};var Popover=function(_Tooltip){_inheritsLoose(Popover,_Tooltip);function Popover(){return _Tooltip.apply(this,arguments)||this;}
var _proto=Popover.prototype;_proto.isWithContent=function isWithContent(){return this.getTitle()||this._getContent();};_proto.addAttachmentClass=function addAttachmentClass(attachment){$(this.getTipElement()).addClass(CLASS_PREFIX$1+"-"+attachment);};_proto.getTipElement=function getTipElement(){this.tip=this.tip||$(this.config.template)[0];return this.tip;};_proto.setContent=function setContent(){var $tip=$(this.getTipElement());this.setElementContent($tip.find(SELECTOR_TITLE),this.getTitle());var content=this._getContent();if(typeof content==='function'){content=content.call(this.element);}
this.setElementContent($tip.find(SELECTOR_CONTENT),content);$tip.removeClass(CLASS_NAME_FADE$3+" "+CLASS_NAME_SHOW$5);};_proto._getContent=function _getContent(){return this.element.getAttribute('data-content')||this.config.content;};_proto._cleanTipClass=function _cleanTipClass(){var $tip=$(this.getTipElement());var tabClass=$tip.attr('class').match(BSCLS_PREFIX_REGEX$1);if(tabClass!==null&&tabClass.length>0){$tip.removeClass(tabClass.join(''));}};Popover._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$7);var _config=typeof config==='object'?config:null;if(!data&&/dispose|hide/.test(config)){return;}
if(!data){data=new Popover(this,_config);$(this).data(DATA_KEY$7,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config]();}});};_createClass(Popover,null,[{key:"VERSION",get:function get(){return VERSION$7;}},{key:"Default",get:function get(){return Default$5;}},{key:"NAME",get:function get(){return NAME$7;}},{key:"DATA_KEY",get:function get(){return DATA_KEY$7;}},{key:"Event",get:function get(){return Event$1;}},{key:"EVENT_KEY",get:function get(){return EVENT_KEY$7;}},{key:"DefaultType",get:function get(){return DefaultType$5;}}]);return Popover;}(Tooltip);$.fn[NAME$7]=Popover._jQueryInterface;$.fn[NAME$7].Constructor=Popover;$.fn[NAME$7].noConflict=function(){$.fn[NAME$7]=JQUERY_NO_CONFLICT$7;return Popover._jQueryInterface;};var NAME$8='scrollspy';var VERSION$8='4.5.2';var DATA_KEY$8='bs.scrollspy';var EVENT_KEY$8="."+DATA_KEY$8;var DATA_API_KEY$6='.data-api';var JQUERY_NO_CONFLICT$8=$.fn[NAME$8];var Default$6={offset:10,method:'auto',target:''};var DefaultType$6={offset:'number',method:'string',target:'(string|element)'};var EVENT_ACTIVATE="activate"+EVENT_KEY$8;var EVENT_SCROLL="scroll"+EVENT_KEY$8;var EVENT_LOAD_DATA_API$2="load"+EVENT_KEY$8+DATA_API_KEY$6;var CLASS_NAME_DROPDOWN_ITEM='dropdown-item';var CLASS_NAME_ACTIVE$2='active';var SELECTOR_DATA_SPY='[data-spy="scroll"]';var SELECTOR_NAV_LIST_GROUP='.nav, .list-group';var SELECTOR_NAV_LINKS='.nav-link';var SELECTOR_NAV_ITEMS='.nav-item';var SELECTOR_LIST_ITEMS='.list-group-item';var SELECTOR_DROPDOWN='.dropdown';var SELECTOR_DROPDOWN_ITEMS='.dropdown-item';var SELECTOR_DROPDOWN_TOGGLE='.dropdown-toggle';var METHOD_OFFSET='offset';var METHOD_POSITION='position';var ScrollSpy=function(){function ScrollSpy(element,config){var _this=this;this._element=element;this._scrollElement=element.tagName==='BODY'?window:element;this._config=this._getConfig(config);this._selector=this._config.target+" "+SELECTOR_NAV_LINKS+","+(this._config.target+" "+SELECTOR_LIST_ITEMS+",")+(this._config.target+" "+SELECTOR_DROPDOWN_ITEMS);this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;$(this._scrollElement).on(EVENT_SCROLL,function(event){return _this._process(event);});this.refresh();this._process();}
var _proto=ScrollSpy.prototype;_proto.refresh=function refresh(){var _this2=this;var autoMethod=this._scrollElement===this._scrollElement.window?METHOD_OFFSET:METHOD_POSITION;var offsetMethod=this._config.method==='auto'?autoMethod:this._config.method;var offsetBase=offsetMethod===METHOD_POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();var targets=[].slice.call(document.querySelectorAll(this._selector));targets.map(function(element){var target;var targetSelector=Util.getSelectorFromElement(element);if(targetSelector){target=document.querySelector(targetSelector);}
if(target){var targetBCR=target.getBoundingClientRect();if(targetBCR.width||targetBCR.height){return[$(target)[offsetMethod]().top+offsetBase,targetSelector];}}
return null;}).filter(function(item){return item;}).sort(function(a,b){return a[0]-b[0];}).forEach(function(item){_this2._offsets.push(item[0]);_this2._targets.push(item[1]);});};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$8);$(this._scrollElement).off(EVENT_KEY$8);this._element=null;this._scrollElement=null;this._config=null;this._selector=null;this._offsets=null;this._targets=null;this._activeTarget=null;this._scrollHeight=null;};_proto._getConfig=function _getConfig(config){config=_extends({},Default$6,typeof config==='object'&&config?config:{});if(typeof config.target!=='string'&&Util.isElement(config.target)){var id=$(config.target).attr('id');if(!id){id=Util.getUID(NAME$8);$(config.target).attr('id',id);}
config.target="#"+id;}
Util.typeCheckConfig(NAME$8,config,DefaultType$6);return config;};_proto._getScrollTop=function _getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop;};_proto._getScrollHeight=function _getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);};_proto._getOffsetHeight=function _getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height;};_proto._process=function _process(){var scrollTop=this._getScrollTop()+this._config.offset;var scrollHeight=this._getScrollHeight();var maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh();}
if(scrollTop>=maxScroll){var target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target);}
return;}
if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return;}
for(var i=this._offsets.length;i--;){var isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(typeof this._offsets[i+1]==='undefined'||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i]);}}};_proto._activate=function _activate(target){this._activeTarget=target;this._clear();var queries=this._selector.split(',').map(function(selector){return selector+"[data-target=\""+target+"\"],"+selector+"[href=\""+target+"\"]";});var $link=$([].slice.call(document.querySelectorAll(queries.join(','))));if($link.hasClass(CLASS_NAME_DROPDOWN_ITEM)){$link.closest(SELECTOR_DROPDOWN).find(SELECTOR_DROPDOWN_TOGGLE).addClass(CLASS_NAME_ACTIVE$2);$link.addClass(CLASS_NAME_ACTIVE$2);}else{$link.addClass(CLASS_NAME_ACTIVE$2);$link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_LINKS+", "+SELECTOR_LIST_ITEMS).addClass(CLASS_NAME_ACTIVE$2);$link.parents(SELECTOR_NAV_LIST_GROUP).prev(SELECTOR_NAV_ITEMS).children(SELECTOR_NAV_LINKS).addClass(CLASS_NAME_ACTIVE$2);}
$(this._scrollElement).trigger(EVENT_ACTIVATE,{relatedTarget:target});};_proto._clear=function _clear(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(node){return node.classList.contains(CLASS_NAME_ACTIVE$2);}).forEach(function(node){return node.classList.remove(CLASS_NAME_ACTIVE$2);});};ScrollSpy._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var data=$(this).data(DATA_KEY$8);var _config=typeof config==='object'&&config;if(!data){data=new ScrollSpy(this,_config);$(this).data(DATA_KEY$8,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config]();}});};_createClass(ScrollSpy,null,[{key:"VERSION",get:function get(){return VERSION$8;}},{key:"Default",get:function get(){return Default$6;}}]);return ScrollSpy;}();$(window).on(EVENT_LOAD_DATA_API$2,function(){var scrollSpys=[].slice.call(document.querySelectorAll(SELECTOR_DATA_SPY));var scrollSpysLength=scrollSpys.length;for(var i=scrollSpysLength;i--;){var $spy=$(scrollSpys[i]);ScrollSpy._jQueryInterface.call($spy,$spy.data());}});$.fn[NAME$8]=ScrollSpy._jQueryInterface;$.fn[NAME$8].Constructor=ScrollSpy;$.fn[NAME$8].noConflict=function(){$.fn[NAME$8]=JQUERY_NO_CONFLICT$8;return ScrollSpy._jQueryInterface;};var NAME$9='tab';var VERSION$9='4.5.2';var DATA_KEY$9='bs.tab';var EVENT_KEY$9="."+DATA_KEY$9;var DATA_API_KEY$7='.data-api';var JQUERY_NO_CONFLICT$9=$.fn[NAME$9];var EVENT_HIDE$3="hide"+EVENT_KEY$9;var EVENT_HIDDEN$3="hidden"+EVENT_KEY$9;var EVENT_SHOW$3="show"+EVENT_KEY$9;var EVENT_SHOWN$3="shown"+EVENT_KEY$9;var EVENT_CLICK_DATA_API$6="click"+EVENT_KEY$9+DATA_API_KEY$7;var CLASS_NAME_DROPDOWN_MENU='dropdown-menu';var CLASS_NAME_ACTIVE$3='active';var CLASS_NAME_DISABLED$1='disabled';var CLASS_NAME_FADE$4='fade';var CLASS_NAME_SHOW$6='show';var SELECTOR_DROPDOWN$1='.dropdown';var SELECTOR_NAV_LIST_GROUP$1='.nav, .list-group';var SELECTOR_ACTIVE$2='.active';var SELECTOR_ACTIVE_UL='> li > .active';var SELECTOR_DATA_TOGGLE$4='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]';var SELECTOR_DROPDOWN_TOGGLE$1='.dropdown-toggle';var SELECTOR_DROPDOWN_ACTIVE_CHILD='> .dropdown-menu .active';var Tab=function(){function Tab(element){this._element=element;}
var _proto=Tab.prototype;_proto.show=function show(){var _this=this;if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&$(this._element).hasClass(CLASS_NAME_ACTIVE$3)||$(this._element).hasClass(CLASS_NAME_DISABLED$1)){return;}
var target;var previous;var listElement=$(this._element).closest(SELECTOR_NAV_LIST_GROUP$1)[0];var selector=Util.getSelectorFromElement(this._element);if(listElement){var itemSelector=listElement.nodeName==='UL'||listElement.nodeName==='OL'?SELECTOR_ACTIVE_UL:SELECTOR_ACTIVE$2;previous=$.makeArray($(listElement).find(itemSelector));previous=previous[previous.length-1];}
var hideEvent=$.Event(EVENT_HIDE$3,{relatedTarget:this._element});var showEvent=$.Event(EVENT_SHOW$3,{relatedTarget:previous});if(previous){$(previous).trigger(hideEvent);}
$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()){return;}
if(selector){target=document.querySelector(selector);}
this._activate(this._element,listElement);var complete=function complete(){var hiddenEvent=$.Event(EVENT_HIDDEN$3,{relatedTarget:_this._element});var shownEvent=$.Event(EVENT_SHOWN$3,{relatedTarget:previous});$(previous).trigger(hiddenEvent);$(_this._element).trigger(shownEvent);};if(target){this._activate(target,target.parentNode,complete);}else{complete();}};_proto.dispose=function dispose(){$.removeData(this._element,DATA_KEY$9);this._element=null;};_proto._activate=function _activate(element,container,callback){var _this2=this;var activeElements=container&&(container.nodeName==='UL'||container.nodeName==='OL')?$(container).find(SELECTOR_ACTIVE_UL):$(container).children(SELECTOR_ACTIVE$2);var active=activeElements[0];var isTransitioning=callback&&active&&$(active).hasClass(CLASS_NAME_FADE$4);var complete=function complete(){return _this2._transitionComplete(element,active,callback);};if(active&&isTransitioning){var transitionDuration=Util.getTransitionDurationFromElement(active);$(active).removeClass(CLASS_NAME_SHOW$6).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};_proto._transitionComplete=function _transitionComplete(element,active,callback){if(active){$(active).removeClass(CLASS_NAME_ACTIVE$3);var dropdownChild=$(active.parentNode).find(SELECTOR_DROPDOWN_ACTIVE_CHILD)[0];if(dropdownChild){$(dropdownChild).removeClass(CLASS_NAME_ACTIVE$3);}
if(active.getAttribute('role')==='tab'){active.setAttribute('aria-selected',false);}}
$(element).addClass(CLASS_NAME_ACTIVE$3);if(element.getAttribute('role')==='tab'){element.setAttribute('aria-selected',true);}
Util.reflow(element);if(element.classList.contains(CLASS_NAME_FADE$4)){element.classList.add(CLASS_NAME_SHOW$6);}
if(element.parentNode&&$(element.parentNode).hasClass(CLASS_NAME_DROPDOWN_MENU)){var dropdownElement=$(element).closest(SELECTOR_DROPDOWN$1)[0];if(dropdownElement){var dropdownToggleList=[].slice.call(dropdownElement.querySelectorAll(SELECTOR_DROPDOWN_TOGGLE$1));$(dropdownToggleList).addClass(CLASS_NAME_ACTIVE$3);}
element.setAttribute('aria-expanded',true);}
if(callback){callback();}};Tab._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $this=$(this);var data=$this.data(DATA_KEY$9);if(!data){data=new Tab(this);$this.data(DATA_KEY$9,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config]();}});};_createClass(Tab,null,[{key:"VERSION",get:function get(){return VERSION$9;}}]);return Tab;}();$(document).on(EVENT_CLICK_DATA_API$6,SELECTOR_DATA_TOGGLE$4,function(event){event.preventDefault();Tab._jQueryInterface.call($(this),'show');});$.fn[NAME$9]=Tab._jQueryInterface;$.fn[NAME$9].Constructor=Tab;$.fn[NAME$9].noConflict=function(){$.fn[NAME$9]=JQUERY_NO_CONFLICT$9;return Tab._jQueryInterface;};var NAME$a='toast';var VERSION$a='4.5.2';var DATA_KEY$a='bs.toast';var EVENT_KEY$a="."+DATA_KEY$a;var JQUERY_NO_CONFLICT$a=$.fn[NAME$a];var EVENT_CLICK_DISMISS$1="click.dismiss"+EVENT_KEY$a;var EVENT_HIDE$4="hide"+EVENT_KEY$a;var EVENT_HIDDEN$4="hidden"+EVENT_KEY$a;var EVENT_SHOW$4="show"+EVENT_KEY$a;var EVENT_SHOWN$4="shown"+EVENT_KEY$a;var CLASS_NAME_FADE$5='fade';var CLASS_NAME_HIDE='hide';var CLASS_NAME_SHOW$7='show';var CLASS_NAME_SHOWING='showing';var DefaultType$7={animation:'boolean',autohide:'boolean',delay:'number'};var Default$7={animation:true,autohide:true,delay:500};var SELECTOR_DATA_DISMISS$1='[data-dismiss="toast"]';var Toast=function(){function Toast(element,config){this._element=element;this._config=this._getConfig(config);this._timeout=null;this._setListeners();}
var _proto=Toast.prototype;_proto.show=function show(){var _this=this;var showEvent=$.Event(EVENT_SHOW$4);$(this._element).trigger(showEvent);if(showEvent.isDefaultPrevented()){return;}
this._clearTimeout();if(this._config.animation){this._element.classList.add(CLASS_NAME_FADE$5);}
var complete=function complete(){_this._element.classList.remove(CLASS_NAME_SHOWING);_this._element.classList.add(CLASS_NAME_SHOW$7);$(_this._element).trigger(EVENT_SHOWN$4);if(_this._config.autohide){_this._timeout=setTimeout(function(){_this.hide();},_this._config.delay);}};this._element.classList.remove(CLASS_NAME_HIDE);Util.reflow(this._element);this._element.classList.add(CLASS_NAME_SHOWING);if(this._config.animation){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};_proto.hide=function hide(){if(!this._element.classList.contains(CLASS_NAME_SHOW$7)){return;}
var hideEvent=$.Event(EVENT_HIDE$4);$(this._element).trigger(hideEvent);if(hideEvent.isDefaultPrevented()){return;}
this._close();};_proto.dispose=function dispose(){this._clearTimeout();if(this._element.classList.contains(CLASS_NAME_SHOW$7)){this._element.classList.remove(CLASS_NAME_SHOW$7);}
$(this._element).off(EVENT_CLICK_DISMISS$1);$.removeData(this._element,DATA_KEY$a);this._element=null;this._config=null;};_proto._getConfig=function _getConfig(config){config=_extends({},Default$7,$(this._element).data(),typeof config==='object'&&config?config:{});Util.typeCheckConfig(NAME$a,config,this.constructor.DefaultType);return config;};_proto._setListeners=function _setListeners(){var _this2=this;$(this._element).on(EVENT_CLICK_DISMISS$1,SELECTOR_DATA_DISMISS$1,function(){return _this2.hide();});};_proto._close=function _close(){var _this3=this;var complete=function complete(){_this3._element.classList.add(CLASS_NAME_HIDE);$(_this3._element).trigger(EVENT_HIDDEN$4);};this._element.classList.remove(CLASS_NAME_SHOW$7);if(this._config.animation){var transitionDuration=Util.getTransitionDurationFromElement(this._element);$(this._element).one(Util.TRANSITION_END,complete).emulateTransitionEnd(transitionDuration);}else{complete();}};_proto._clearTimeout=function _clearTimeout(){clearTimeout(this._timeout);this._timeout=null;};Toast._jQueryInterface=function _jQueryInterface(config){return this.each(function(){var $element=$(this);var data=$element.data(DATA_KEY$a);var _config=typeof config==='object'&&config;if(!data){data=new Toast(this,_config);$element.data(DATA_KEY$a,data);}
if(typeof config==='string'){if(typeof data[config]==='undefined'){throw new TypeError("No method named \""+config+"\"");}
data[config](this);}});};_createClass(Toast,null,[{key:"VERSION",get:function get(){return VERSION$a;}},{key:"DefaultType",get:function get(){return DefaultType$7;}},{key:"Default",get:function get(){return Default$7;}}]);return Toast;}();$.fn[NAME$a]=Toast._jQueryInterface;$.fn[NAME$a].Constructor=Toast;$.fn[NAME$a].noConflict=function(){$.fn[NAME$a]=JQUERY_NO_CONFLICT$a;return Toast._jQueryInterface;};exports.Alert=Alert;exports.Button=Button;exports.Carousel=Carousel;exports.Collapse=Collapse;exports.Dropdown=Dropdown;exports.Modal=Modal;exports.Popover=Popover;exports.Scrollspy=ScrollSpy;exports.Tab=Tab;exports.Toast=Toast;exports.Tooltip=Tooltip;exports.Util=Util;Object.defineProperty(exports,'__esModule',{value:true});})));
(function(){var $,AbstractChosen,Chosen,SelectParser,_ref,__bind=function(fn,me){return function(){return fn.apply(me,arguments);};},__hasProp={}.hasOwnProperty,__extends=function(child,parent){for(var key in parent){if(__hasProp.call(parent,key))child[key]=parent[key];}function ctor(){this.constructor=child;}ctor.prototype=parent.prototype;child.prototype=new ctor();child.__super__=parent.prototype;return child;};SelectParser=(function(){function SelectParser(){this.options_index=0;this.parsed=[];}
SelectParser.prototype.add_node=function(child){if(child.nodeName.toUpperCase()==="OPTGROUP"){return this.add_group(child);}else{return this.add_option(child);}};SelectParser.prototype.add_group=function(group){var group_position,option,_i,_len,_ref,_results;group_position=this.parsed.length;this.parsed.push({array_index:group_position,group:true,label:this.escapeExpression(group.label),title:group.title?group.title:void 0,children:0,disabled:group.disabled,classes:group.className});_ref=group.childNodes;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){option=_ref[_i];_results.push(this.add_option(option,group_position,group.disabled));}
return _results;};SelectParser.prototype.add_option=function(option,group_position,group_disabled){if(option.nodeName.toUpperCase()==="OPTION"){if(option.text!==""){if(group_position!=null){this.parsed[group_position].children+=1;}
this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,value:option.value,text:option.text,html:option.innerHTML,title:option.title?option.title:void 0,selected:option.selected,disabled:group_disabled===true?group_disabled:option.disabled,group_array_index:group_position,group_label:group_position!=null?this.parsed[group_position].label:null,classes:option.className,style:option.style.cssText});}else{this.parsed.push({array_index:this.parsed.length,options_index:this.options_index,empty:true});}
return this.options_index+=1;}};SelectParser.prototype.escapeExpression=function(text){var map,unsafe_chars;if((text==null)||text===false){return"";}
if(!/[\&\<\>\"\'\`]/.test(text)){return text;}
map={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"};unsafe_chars=/&(?!\w+;)|[\<\>\"\'\`]/g;return text.replace(unsafe_chars,function(chr){return map[chr]||"&amp;";});};return SelectParser;})();SelectParser.select_to_array=function(select){var child,parser,_i,_len,_ref;parser=new SelectParser();_ref=select.childNodes;for(_i=0,_len=_ref.length;_i<_len;_i++){child=_ref[_i];parser.add_node(child);}
return parser.parsed;};AbstractChosen=(function(){function AbstractChosen(form_field,options){this.form_field=form_field;this.options=options!=null?options:{};this.label_click_handler=__bind(this.label_click_handler,this);if(!AbstractChosen.browser_is_supported()){return;}
this.is_multiple=this.form_field.multiple;this.set_default_text();this.set_default_values();this.setup();this.set_up_html();this.register_observers();this.on_ready();}
AbstractChosen.prototype.set_default_values=function(){var _this=this;this.click_test_action=function(evt){return _this.test_active_click(evt);};this.activate_action=function(evt){return _this.activate_field(evt);};this.active_field=false;this.mouse_on_container=false;this.results_showing=false;this.result_highlighted=null;this.is_rtl=this.options.rtl||/\bchosen-rtl\b/.test(this.form_field.className);this.allow_single_deselect=(this.options.allow_single_deselect!=null)&&(this.form_field.options[0]!=null)&&this.form_field.options[0].text===""?this.options.allow_single_deselect:false;this.disable_search_threshold=this.options.disable_search_threshold||0;this.disable_search=this.options.disable_search||false;this.enable_split_word_search=this.options.enable_split_word_search!=null?this.options.enable_split_word_search:true;this.group_search=this.options.group_search!=null?this.options.group_search:true;this.search_contains=this.options.search_contains||false;this.single_backstroke_delete=this.options.single_backstroke_delete!=null?this.options.single_backstroke_delete:true;this.max_selected_options=this.options.max_selected_options||Infinity;this.inherit_select_classes=this.options.inherit_select_classes||false;this.display_selected_options=this.options.display_selected_options!=null?this.options.display_selected_options:true;this.display_disabled_options=this.options.display_disabled_options!=null?this.options.display_disabled_options:true;this.include_group_label_in_selected=this.options.include_group_label_in_selected||false;this.max_shown_results=this.options.max_shown_results||Number.POSITIVE_INFINITY;this.case_sensitive_search=this.options.case_sensitive_search||false;return this.hide_results_on_select=this.options.hide_results_on_select!=null?this.options.hide_results_on_select:true;};AbstractChosen.prototype.set_default_text=function(){if(this.form_field.getAttribute("data-placeholder")){this.default_text=this.form_field.getAttribute("data-placeholder");}else if(this.is_multiple){this.default_text=this.options.placeholder_text_multiple||this.options.placeholder_text||AbstractChosen.default_multiple_text;}else{this.default_text=this.options.placeholder_text_single||this.options.placeholder_text||AbstractChosen.default_single_text;}
this.default_text=this.escape_html(this.default_text);return this.results_none_found=this.form_field.getAttribute("data-no_results_text")||this.options.no_results_text||AbstractChosen.default_no_result_text;};AbstractChosen.prototype.choice_label=function(item){if(this.include_group_label_in_selected&&(item.group_label!=null)){return"<b class='group-name'>"+item.group_label+"</b>"+item.html;}else{return item.html;}};AbstractChosen.prototype.mouse_enter=function(){return this.mouse_on_container=true;};AbstractChosen.prototype.mouse_leave=function(){return this.mouse_on_container=false;};AbstractChosen.prototype.input_focus=function(evt){var _this=this;if(this.is_multiple){if(!this.active_field){return setTimeout((function(){return _this.container_mousedown();}),50);}}else{if(!this.active_field){return this.activate_field();}}};AbstractChosen.prototype.input_blur=function(evt){var _this=this;if(!this.mouse_on_container){this.active_field=false;return setTimeout((function(){return _this.blur_test();}),100);}};AbstractChosen.prototype.label_click_handler=function(evt){if(this.is_multiple){return this.container_mousedown(evt);}else{return this.activate_field();}};AbstractChosen.prototype.results_option_build=function(options){var content,data,data_content,shown_results,_i,_len,_ref;content='';shown_results=0;_ref=this.results_data;for(_i=0,_len=_ref.length;_i<_len;_i++){data=_ref[_i];data_content='';if(data.group){data_content=this.result_add_group(data);}else{data_content=this.result_add_option(data);}
if(data_content!==''){shown_results++;content+=data_content;}
if(options!=null?options.first:void 0){if(data.selected&&this.is_multiple){this.choice_build(data);}else if(data.selected&&!this.is_multiple){this.single_set_selected_text(this.choice_label(data));}}
if(shown_results>=this.max_shown_results){break;}}
return content;};AbstractChosen.prototype.result_add_option=function(option){var classes,option_el;if(!option.search_match){return'';}
if(!this.include_option_in_results(option)){return'';}
classes=[];if(!option.disabled&&!(option.selected&&this.is_multiple)){classes.push("active-result");}
if(option.disabled&&!(option.selected&&this.is_multiple)){classes.push("disabled-result");}
if(option.selected){classes.push("result-selected");}
if(option.group_array_index!=null){classes.push("group-option");}
if(option.classes!==""){classes.push(option.classes);}
option_el=document.createElement("li");option_el.className=classes.join(" ");option_el.style.cssText=option.style;option_el.setAttribute("data-option-array-index",option.array_index);option_el.innerHTML=option.search_text;if(option.title){option_el.title=option.title;}
return this.outerHTML(option_el);};AbstractChosen.prototype.result_add_group=function(group){var classes,group_el;if(!(group.search_match||group.group_match)){return'';}
if(!(group.active_options>0)){return'';}
classes=[];classes.push("group-result");if(group.classes){classes.push(group.classes);}
group_el=document.createElement("li");group_el.className=classes.join(" ");group_el.innerHTML=group.search_text;if(group.title){group_el.title=group.title;}
return this.outerHTML(group_el);};AbstractChosen.prototype.results_update_field=function(){this.set_default_text();if(!this.is_multiple){this.results_reset_cleanup();}
this.result_clear_highlight();this.results_build();if(this.results_showing){return this.winnow_results();}};AbstractChosen.prototype.reset_single_select_options=function(){var result,_i,_len,_ref,_results;_ref=this.results_data;_results=[];for(_i=0,_len=_ref.length;_i<_len;_i++){result=_ref[_i];if(result.selected){_results.push(result.selected=false);}else{_results.push(void 0);}}
return _results;};AbstractChosen.prototype.results_toggle=function(){if(this.results_showing){return this.results_hide();}else{return this.results_show();}};AbstractChosen.prototype.results_search=function(evt){if(this.results_showing){return this.winnow_results();}else{return this.results_show();}};AbstractChosen.prototype.winnow_results=function(){var escapedSearchText,highlightRegex,option,regex,results,results_group,searchText,startpos,text,_i,_len,_ref;this.no_results_clear();results=0;searchText=this.get_search_text();escapedSearchText=searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&");regex=this.get_search_regex(escapedSearchText);highlightRegex=this.get_highlight_regex(escapedSearchText);_ref=this.results_data;for(_i=0,_len=_ref.length;_i<_len;_i++){option=_ref[_i];option.search_match=false;results_group=null;if(this.include_option_in_results(option)){if(option.group){option.group_match=false;option.active_options=0;}
if((option.group_array_index!=null)&&this.results_data[option.group_array_index]){results_group=this.results_data[option.group_array_index];if(results_group.active_options===0&&results_group.search_match){results+=1;}
results_group.active_options+=1;}
option.search_text=option.group?option.label:option.html;if(!(option.group&&!this.group_search)){option.search_match=this.search_string_match(option.search_text,regex);if(option.search_match&&!option.group){results+=1;}
if(option.search_match){if(searchText.length){startpos=option.search_text.search(highlightRegex);text=option.search_text.substr(0,startpos+searchText.length)+'</em>'+option.search_text.substr(startpos+searchText.length);option.search_text=text.substr(0,startpos)+'<em>'+text.substr(startpos);}
if(results_group!=null){results_group.group_match=true;}}else if((option.group_array_index!=null)&&this.results_data[option.group_array_index].search_match){option.search_match=true;}}}}
this.result_clear_highlight();if(results<1&&searchText.length){this.update_results_content("");return this.no_results(searchText);}else{this.update_results_content(this.results_option_build());return this.winnow_results_set_highlight();}};AbstractChosen.prototype.get_search_regex=function(escaped_search_string){var regex_anchor,regex_flag;regex_anchor=this.search_contains?"":"^";regex_flag=this.case_sensitive_search?"":"i";return new RegExp(regex_anchor+escaped_search_string,regex_flag);};AbstractChosen.prototype.get_highlight_regex=function(escaped_search_string){var regex_anchor,regex_flag;regex_anchor=this.search_contains?"":"\\b";regex_flag=this.case_sensitive_search?"":"i";return new RegExp(regex_anchor+escaped_search_string,regex_flag);};AbstractChosen.prototype.search_string_match=function(search_string,regex){var part,parts,_i,_len;if(regex.test(search_string)){return true;}else if(this.enable_split_word_search&&(search_string.indexOf(" ")>=0||search_string.indexOf("[")===0)){parts=search_string.replace(/\[|\]/g,"").split(" ");if(parts.length){for(_i=0,_len=parts.length;_i<_len;_i++){part=parts[_i];if(regex.test(part)){return true;}}}}};AbstractChosen.prototype.choices_count=function(){var option,_i,_len,_ref;if(this.selected_option_count!=null){return this.selected_option_count;}
this.selected_option_count=0;_ref=this.form_field.options;for(_i=0,_len=_ref.length;_i<_len;_i++){option=_ref[_i];if(option.selected){this.selected_option_count+=1;}}
return this.selected_option_count;};AbstractChosen.prototype.choices_click=function(evt){evt.preventDefault();this.activate_field();if(!(this.results_showing||this.is_disabled)){return this.results_show();}};AbstractChosen.prototype.keydown_checker=function(evt){var stroke,_ref;stroke=(_ref=evt.which)!=null?_ref:evt.keyCode;this.search_field_scale();if(stroke!==8&&this.pending_backstroke){this.clear_backstroke();}
switch(stroke){case 8:this.backstroke_length=this.get_search_field_value().length;break;case 9:if(this.results_showing&&!this.is_multiple){this.result_select(evt);}
this.mouse_on_container=false;break;case 13:if(this.results_showing){evt.preventDefault();}
break;case 27:if(this.results_showing){evt.preventDefault();}
break;case 32:if(this.disable_search){evt.preventDefault();}
break;case 38:evt.preventDefault();this.keyup_arrow();break;case 40:evt.preventDefault();this.keydown_arrow();break;}};AbstractChosen.prototype.keyup_checker=function(evt){var stroke,_ref;stroke=(_ref=evt.which)!=null?_ref:evt.keyCode;this.search_field_scale();switch(stroke){case 8:if(this.is_multiple&&this.backstroke_length<1&&this.choices_count()>0){this.keydown_backstroke();}else if(!this.pending_backstroke){this.result_clear_highlight();this.results_search();}
break;case 13:evt.preventDefault();if(this.results_showing){this.result_select(evt);}
break;case 27:if(this.results_showing){this.results_hide();}
break;case 9:case 16:case 17:case 18:case 38:case 40:case 91:break;default:this.results_search();break;}};AbstractChosen.prototype.clipboard_event_checker=function(evt){var _this=this;if(this.is_disabled){return;}
return setTimeout((function(){return _this.results_search();}),50);};AbstractChosen.prototype.container_width=function(){if(this.options.width!=null){return this.options.width;}else{return""+this.form_field.offsetWidth+"px";}};AbstractChosen.prototype.include_option_in_results=function(option){if(this.is_multiple&&(!this.display_selected_options&&option.selected)){return false;}
if(!this.display_disabled_options&&option.disabled){return false;}
if(option.empty){return false;}
return true;};AbstractChosen.prototype.search_results_touchstart=function(evt){this.touch_started=true;return this.search_results_mouseover(evt);};AbstractChosen.prototype.search_results_touchmove=function(evt){this.touch_started=false;return this.search_results_mouseout(evt);};AbstractChosen.prototype.search_results_touchend=function(evt){if(this.touch_started){return this.search_results_mouseup(evt);}};AbstractChosen.prototype.outerHTML=function(element){var tmp;if(element.outerHTML){return element.outerHTML;}
tmp=document.createElement("div");tmp.appendChild(element);return tmp.innerHTML;};AbstractChosen.prototype.get_single_html=function(){return"<a class=\"chosen-single chosen-default\">\n  <span>"+this.default_text+"</span>\n  <div><b></b></div>\n</a>\n<div class=\"chosen-drop\">\n  <div class=\"chosen-search\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" />\n  </div>\n  <ul class=\"chosen-results\"></ul>\n</div>";};AbstractChosen.prototype.get_multi_html=function(){return"<ul class=\"chosen-choices\">\n  <li class=\"search-field\">\n    <input class=\"chosen-search-input\" type=\"text\" autocomplete=\"off\" value=\""+this.default_text+"\" />\n  </li>\n</ul>\n<div class=\"chosen-drop\">\n  <ul class=\"chosen-results\"></ul>\n</div>";};AbstractChosen.prototype.get_no_results_html=function(terms){return"<li class=\"no-results\">\n  "+this.results_none_found+" <span>"+terms+"</span>\n</li>";};AbstractChosen.browser_is_supported=function(){if("Microsoft Internet Explorer"===window.navigator.appName){return document.documentMode>=8;}
if(/iP(od|hone)/i.test(window.navigator.userAgent)||/IEMobile/i.test(window.navigator.userAgent)||/Windows Phone/i.test(window.navigator.userAgent)||/BlackBerry/i.test(window.navigator.userAgent)||/BB10/i.test(window.navigator.userAgent)||/Android.*Mobile/i.test(window.navigator.userAgent)){return false;}
return true;};AbstractChosen.default_multiple_text="Select Some Options";AbstractChosen.default_single_text="Select an Option";AbstractChosen.default_no_result_text="No results match";return AbstractChosen;})();$=jQuery;$.fn.extend({chosen:function(options){if(!AbstractChosen.browser_is_supported()){return this;}
return this.each(function(input_field){var $this,chosen;$this=$(this);chosen=$this.data('chosen');if(options==='destroy'){if(chosen instanceof Chosen){chosen.destroy();}
return;}
if(!(chosen instanceof Chosen)){$this.data('chosen',new Chosen(this,options));}});}});Chosen=(function(_super){__extends(Chosen,_super);function Chosen(){_ref=Chosen.__super__.constructor.apply(this,arguments);return _ref;}
Chosen.prototype.setup=function(){this.form_field_jq=$(this.form_field);return this.current_selectedIndex=this.form_field.selectedIndex;};Chosen.prototype.set_up_html=function(){var container_classes,container_props;container_classes=["chosen-container"];container_classes.push("chosen-container-"+(this.is_multiple?"multi":"single"));if(this.inherit_select_classes&&this.form_field.className){container_classes.push(this.form_field.className);}
if(this.is_rtl){container_classes.push("chosen-rtl");}
container_props={'class':container_classes.join(' '),'title':this.form_field.title};if(this.form_field.id.length){container_props.id=this.form_field.id.replace(/[^\w]/g,'_')+"_chosen";}
this.container=$("<div />",container_props);this.container.width(this.container_width());if(this.is_multiple){this.container.html(this.get_multi_html());}else{this.container.html(this.get_single_html());}
this.form_field_jq.hide().after(this.container);this.dropdown=this.container.find('div.chosen-drop').first();this.search_field=this.container.find('input').first();this.search_results=this.container.find('ul.chosen-results').first();this.search_field_scale();this.search_no_results=this.container.find('li.no-results').first();if(this.is_multiple){this.search_choices=this.container.find('ul.chosen-choices').first();this.search_container=this.container.find('li.search-field').first();}else{this.search_container=this.container.find('div.chosen-search').first();this.selected_item=this.container.find('.chosen-single').first();}
this.results_build();this.set_tab_index();return this.set_label_behavior();};Chosen.prototype.on_ready=function(){return this.form_field_jq.trigger("chosen:ready",{chosen:this});};Chosen.prototype.register_observers=function(){var _this=this;this.container.bind('touchstart.chosen',function(evt){_this.container_mousedown(evt);});this.container.bind('touchend.chosen',function(evt){_this.container_mouseup(evt);});this.container.bind('mousedown.chosen',function(evt){_this.container_mousedown(evt);});this.container.bind('mouseup.chosen',function(evt){_this.container_mouseup(evt);});this.container.bind('mouseenter.chosen',function(evt){_this.mouse_enter(evt);});this.container.bind('mouseleave.chosen',function(evt){_this.mouse_leave(evt);});this.search_results.bind('mouseup.chosen',function(evt){_this.search_results_mouseup(evt);});this.search_results.bind('mouseover.chosen',function(evt){_this.search_results_mouseover(evt);});this.search_results.bind('mouseout.chosen',function(evt){_this.search_results_mouseout(evt);});this.search_results.bind('mousewheel.chosen DOMMouseScroll.chosen',function(evt){_this.search_results_mousewheel(evt);});this.search_results.bind('touchstart.chosen',function(evt){_this.search_results_touchstart(evt);});this.search_results.bind('touchmove.chosen',function(evt){_this.search_results_touchmove(evt);});this.search_results.bind('touchend.chosen',function(evt){_this.search_results_touchend(evt);});this.form_field_jq.bind("chosen:updated.chosen",function(evt){_this.results_update_field(evt);});this.form_field_jq.bind("chosen:activate.chosen",function(evt){_this.activate_field(evt);});this.form_field_jq.bind("chosen:open.chosen",function(evt){_this.container_mousedown(evt);});this.form_field_jq.bind("chosen:close.chosen",function(evt){_this.close_field(evt);});this.search_field.bind('blur.chosen',function(evt){_this.input_blur(evt);});this.search_field.bind('keyup.chosen',function(evt){_this.keyup_checker(evt);});this.search_field.bind('keydown.chosen',function(evt){_this.keydown_checker(evt);});this.search_field.bind('focus.chosen',function(evt){_this.input_focus(evt);});this.search_field.bind('cut.chosen',function(evt){_this.clipboard_event_checker(evt);});this.search_field.bind('paste.chosen',function(evt){_this.clipboard_event_checker(evt);});if(this.is_multiple){return this.search_choices.bind('click.chosen',function(evt){_this.choices_click(evt);});}else{return this.container.bind('click.chosen',function(evt){evt.preventDefault();});}};Chosen.prototype.destroy=function(){$(this.container[0].ownerDocument).unbind('click.chosen',this.click_test_action);if(this.form_field_label.length>0){this.form_field_label.unbind('click.chosen');}
if(this.search_field[0].tabIndex){this.form_field_jq[0].tabIndex=this.search_field[0].tabIndex;}
this.container.remove();this.form_field_jq.removeData('chosen');return this.form_field_jq.show();};Chosen.prototype.search_field_disabled=function(){this.is_disabled=this.form_field.disabled||this.form_field_jq.parents('fieldset').is(':disabled');this.container.toggleClass('chosen-disabled',this.is_disabled);this.search_field[0].disabled=this.is_disabled;if(!this.is_multiple){this.selected_item.unbind('focus.chosen',this.activate_field);}
if(this.is_disabled){return this.close_field();}else if(!this.is_multiple){return this.selected_item.bind('focus.chosen',this.activate_field);}};Chosen.prototype.container_mousedown=function(evt){var _ref1;if(this.is_disabled){return;}
if(evt&&((_ref1=evt.type)==='mousedown'||_ref1==='touchstart')&&!this.results_showing){evt.preventDefault();}
if(!((evt!=null)&&($(evt.target)).hasClass("search-choice-close"))){if(!this.active_field){if(this.is_multiple){this.search_field.val("");}
$(this.container[0].ownerDocument).bind('click.chosen',this.click_test_action);this.results_show();}else if(!this.is_multiple&&evt&&(($(evt.target)[0]===this.selected_item[0])||$(evt.target).parents("a.chosen-single").length)){evt.preventDefault();this.results_toggle();}
return this.activate_field();}};Chosen.prototype.container_mouseup=function(evt){if(evt.target.nodeName==="ABBR"&&!this.is_disabled){return this.results_reset(evt);}};Chosen.prototype.search_results_mousewheel=function(evt){var delta;if(evt.originalEvent){delta=evt.originalEvent.deltaY||-evt.originalEvent.wheelDelta||evt.originalEvent.detail;}
if(delta!=null){evt.preventDefault();if(evt.type==='DOMMouseScroll'){delta=delta*40;}
return this.search_results.scrollTop(delta+this.search_results.scrollTop());}};Chosen.prototype.blur_test=function(evt){if(!this.active_field&&this.container.hasClass("chosen-container-active")){return this.close_field();}};Chosen.prototype.close_field=function(){$(this.container[0].ownerDocument).unbind("click.chosen",this.click_test_action);this.active_field=false;this.results_hide();this.container.removeClass("chosen-container-active");this.clear_backstroke();this.show_search_field_default();this.search_field_scale();return this.search_field.blur();};Chosen.prototype.activate_field=function(){if(this.is_disabled){return;}
this.container.addClass("chosen-container-active");this.active_field=true;this.search_field.val(this.search_field.val());return this.search_field.focus();};Chosen.prototype.test_active_click=function(evt){var active_container;active_container=$(evt.target).closest('.chosen-container');if(active_container.length&&this.container[0]===active_container[0]){return this.active_field=true;}else{return this.close_field();}};Chosen.prototype.results_build=function(){this.parsing=true;this.selected_option_count=null;this.results_data=SelectParser.select_to_array(this.form_field);if(this.is_multiple){this.search_choices.find("li.search-choice").remove();}else if(!this.is_multiple){this.single_set_selected_text();if(this.disable_search||this.form_field.options.length<=this.disable_search_threshold){this.search_field[0].readOnly=true;this.container.addClass("chosen-container-single-nosearch");}else{this.search_field[0].readOnly=false;this.container.removeClass("chosen-container-single-nosearch");}}
this.update_results_content(this.results_option_build({first:true}));this.search_field_disabled();this.show_search_field_default();this.search_field_scale();return this.parsing=false;};Chosen.prototype.result_do_highlight=function(el){var high_bottom,high_top,maxHeight,visible_bottom,visible_top;if(el.length){this.result_clear_highlight();this.result_highlight=el;this.result_highlight.addClass("highlighted");maxHeight=parseInt(this.search_results.css("maxHeight"),10);visible_top=this.search_results.scrollTop();visible_bottom=maxHeight+visible_top;high_top=this.result_highlight.position().top+this.search_results.scrollTop();high_bottom=high_top+this.result_highlight.outerHeight();if(high_bottom>=visible_bottom){return this.search_results.scrollTop((high_bottom-maxHeight)>0?high_bottom-maxHeight:0);}else if(high_top<visible_top){return this.search_results.scrollTop(high_top);}}};Chosen.prototype.result_clear_highlight=function(){if(this.result_highlight){this.result_highlight.removeClass("highlighted");}
return this.result_highlight=null;};Chosen.prototype.results_show=function(){if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return false;}
this.container.addClass("chosen-with-drop");this.results_showing=true;this.search_field.focus();this.search_field.val(this.get_search_field_value());this.winnow_results();return this.form_field_jq.trigger("chosen:showing_dropdown",{chosen:this});};Chosen.prototype.update_results_content=function(content){return this.search_results.html(content);};Chosen.prototype.results_hide=function(){if(this.results_showing){this.result_clear_highlight();this.container.removeClass("chosen-with-drop");this.form_field_jq.trigger("chosen:hiding_dropdown",{chosen:this});}
return this.results_showing=false;};Chosen.prototype.set_tab_index=function(el){var ti;if(this.form_field.tabIndex){ti=this.form_field.tabIndex;this.form_field.tabIndex=-1;return this.search_field[0].tabIndex=ti;}};Chosen.prototype.set_label_behavior=function(){this.form_field_label=this.form_field_jq.parents("label");if(!this.form_field_label.length&&this.form_field.id.length){this.form_field_label=$("label[for='"+this.form_field.id+"']");}
if(this.form_field_label.length>0){return this.form_field_label.bind('click.chosen',this.label_click_handler);}};Chosen.prototype.show_search_field_default=function(){if(this.is_multiple&&this.choices_count()<1&&!this.active_field){this.search_field.val(this.default_text);return this.search_field.addClass("default");}else{this.search_field.val("");return this.search_field.removeClass("default");}};Chosen.prototype.search_results_mouseup=function(evt){var target;target=$(evt.target).hasClass("active-result")?$(evt.target):$(evt.target).parents(".active-result").first();if(target.length){this.result_highlight=target;this.result_select(evt);return this.search_field.focus();}};Chosen.prototype.search_results_mouseover=function(evt){var target;target=$(evt.target).hasClass("active-result")?$(evt.target):$(evt.target).parents(".active-result").first();if(target){return this.result_do_highlight(target);}};Chosen.prototype.search_results_mouseout=function(evt){if($(evt.target).hasClass("active-result"||$(evt.target).parents('.active-result').first())){return this.result_clear_highlight();}};Chosen.prototype.choice_build=function(item){var choice,close_link,_this=this;choice=$('<li />',{"class":"search-choice"}).html("<span>"+(this.choice_label(item))+"</span>");if(item.disabled){choice.addClass('search-choice-disabled');}else{close_link=$('<a />',{"class":'search-choice-close','data-option-array-index':item.array_index});close_link.bind('click.chosen',function(evt){return _this.choice_destroy_link_click(evt);});choice.append(close_link);}
return this.search_container.before(choice);};Chosen.prototype.choice_destroy_link_click=function(evt){evt.preventDefault();evt.stopPropagation();if(!this.is_disabled){return this.choice_destroy($(evt.target));}};Chosen.prototype.choice_destroy=function(link){if(this.result_deselect(link[0].getAttribute("data-option-array-index"))){if(this.active_field){this.search_field.focus();}else{this.show_search_field_default();}
if(this.is_multiple&&this.choices_count()>0&&this.get_search_field_value().length<1){this.results_hide();}
link.parents('li').first().remove();return this.search_field_scale();}};Chosen.prototype.results_reset=function(){this.reset_single_select_options();this.form_field.options[0].selected=true;this.single_set_selected_text();this.show_search_field_default();this.results_reset_cleanup();this.trigger_form_field_change();if(this.active_field){return this.results_hide();}};Chosen.prototype.results_reset_cleanup=function(){this.current_selectedIndex=this.form_field.selectedIndex;return this.selected_item.find("abbr").remove();};Chosen.prototype.result_select=function(evt){var high,item;if(this.result_highlight){high=this.result_highlight;this.result_clear_highlight();if(this.is_multiple&&this.max_selected_options<=this.choices_count()){this.form_field_jq.trigger("chosen:maxselected",{chosen:this});return false;}
if(this.is_multiple){high.removeClass("active-result");}else{this.reset_single_select_options();}
high.addClass("result-selected");item=this.results_data[high[0].getAttribute("data-option-array-index")];item.selected=true;this.form_field.options[item.options_index].selected=true;this.selected_option_count=null;if(this.is_multiple){this.choice_build(item);}else{this.single_set_selected_text(this.choice_label(item));}
if(!(this.is_multiple&&(!this.hide_results_on_select||(evt.metaKey||evt.ctrlKey)))){this.results_hide();this.show_search_field_default();}
if(this.is_multiple||this.form_field.selectedIndex!==this.current_selectedIndex){this.trigger_form_field_change({selected:this.form_field.options[item.options_index].value});}
this.current_selectedIndex=this.form_field.selectedIndex;evt.preventDefault();return this.search_field_scale();}};Chosen.prototype.single_set_selected_text=function(text){if(text==null){text=this.default_text;}
if(text===this.default_text){this.selected_item.addClass("chosen-default");}else{this.single_deselect_control_build();this.selected_item.removeClass("chosen-default");}
return this.selected_item.find("span").html(text);};Chosen.prototype.result_deselect=function(pos){var result_data;result_data=this.results_data[pos];if(!this.form_field.options[result_data.options_index].disabled){result_data.selected=false;this.form_field.options[result_data.options_index].selected=false;this.selected_option_count=null;this.result_clear_highlight();if(this.results_showing){this.winnow_results();}
this.trigger_form_field_change({deselected:this.form_field.options[result_data.options_index].value});this.search_field_scale();return true;}else{return false;}};Chosen.prototype.single_deselect_control_build=function(){if(!this.allow_single_deselect){return;}
if(!this.selected_item.find("abbr").length){this.selected_item.find("span").first().after("<abbr class=\"search-choice-close\"></abbr>");}
return this.selected_item.addClass("chosen-single-with-deselect");};Chosen.prototype.get_search_field_value=function(){return this.search_field.val();};Chosen.prototype.get_search_text=function(){return this.escape_html($.trim(this.get_search_field_value()));};Chosen.prototype.escape_html=function(text){return $('<div/>').text(text).html();};Chosen.prototype.winnow_results_set_highlight=function(){var do_high,selected_results;selected_results=!this.is_multiple?this.search_results.find(".result-selected.active-result"):[];do_high=selected_results.length?selected_results.first():this.search_results.find(".active-result").first();if(do_high!=null){return this.result_do_highlight(do_high);}};Chosen.prototype.no_results=function(terms){var no_results_html;no_results_html=this.get_no_results_html(terms);this.search_results.append(no_results_html);return this.form_field_jq.trigger("chosen:no_results",{chosen:this});};Chosen.prototype.no_results_clear=function(){return this.search_results.find(".no-results").remove();};Chosen.prototype.keydown_arrow=function(){var next_sib;if(this.results_showing&&this.result_highlight){next_sib=this.result_highlight.nextAll("li.active-result").first();if(next_sib){return this.result_do_highlight(next_sib);}}else{return this.results_show();}};Chosen.prototype.keyup_arrow=function(){var prev_sibs;if(!this.results_showing&&!this.is_multiple){return this.results_show();}else if(this.result_highlight){prev_sibs=this.result_highlight.prevAll("li.active-result");if(prev_sibs.length){return this.result_do_highlight(prev_sibs.first());}else{if(this.choices_count()>0){this.results_hide();}
return this.result_clear_highlight();}}};Chosen.prototype.keydown_backstroke=function(){var next_available_destroy;if(this.pending_backstroke){this.choice_destroy(this.pending_backstroke.find("a").first());return this.clear_backstroke();}else{next_available_destroy=this.search_container.siblings("li.search-choice").last();if(next_available_destroy.length&&!next_available_destroy.hasClass("search-choice-disabled")){this.pending_backstroke=next_available_destroy;if(this.single_backstroke_delete){return this.keydown_backstroke();}else{return this.pending_backstroke.addClass("search-choice-focus");}}}};Chosen.prototype.clear_backstroke=function(){if(this.pending_backstroke){this.pending_backstroke.removeClass("search-choice-focus");}
return this.pending_backstroke=null;};Chosen.prototype.search_field_scale=function(){var container_width,div,style,style_block,styles,width,_i,_len;if(!this.is_multiple){return;}
style_block={position:'absolute',left:'-1000px',top:'-1000px',display:'none',whiteSpace:'pre'};styles=['fontSize','fontStyle','fontWeight','fontFamily','lineHeight','textTransform','letterSpacing'];for(_i=0,_len=styles.length;_i<_len;_i++){style=styles[_i];style_block[style]=this.search_field.css(style);}
div=$('<div />').css(style_block);div.text(this.get_search_field_value());$('body').append(div);width=div.width()+25;div.remove();container_width=this.container.outerWidth();width=Math.min(container_width-10,width);return this.search_field.width(width);};Chosen.prototype.trigger_form_field_change=function(extra){this.form_field_jq.trigger("input",extra);return this.form_field_jq.trigger("change",extra);};return Chosen;})(AbstractChosen);}).call(this);
(function($,undefined){'use strict';if($.rails!==undefined){$.error('jquery-ujs has already been loaded!');}
var rails;var $document=$(document);$.rails=rails={linkClickSelector:'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',buttonClickSelector:'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',inputChangeSelector:'select[data-remote], input[data-remote], textarea[data-remote]',formSubmitSelector:'form',formInputClickSelector:'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',disableSelector:'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',enableSelector:'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',requiredInputSelector:'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',fileInputSelector:'input[type=file]:not([disabled])',linkDisableSelector:'a[data-disable-with], a[data-disable]',buttonDisableSelector:'button[data-remote][data-disable-with], button[data-remote][data-disable]',csrfToken:function(){return $('meta[name=csrf-token]').attr('content');},csrfParam:function(){return $('meta[name=csrf-param]').attr('content');},CSRFProtection:function(xhr){var token=rails.csrfToken();if(token)xhr.setRequestHeader('X-CSRF-Token',token);},refreshCSRFTokens:function(){$('form input[name="'+rails.csrfParam()+'"]').val(rails.csrfToken());},fire:function(obj,name,data){var event=$.Event(name);obj.trigger(event,data);return event.result!==false;},confirm:function(message){return confirm(message);},ajax:function(options){return $.ajax(options);},href:function(element){return element[0].href;},isRemote:function(element){return element.data('remote')!==undefined&&element.data('remote')!==false;},handleRemote:function(element){var method,url,data,withCredentials,dataType,options;if(rails.fire(element,'ajax:before')){withCredentials=element.data('with-credentials')||null;dataType=element.data('type')||($.ajaxSettings&&$.ajaxSettings.dataType);if(element.is('form')){method=element.data('ujs:submit-button-formmethod')||element.attr('method');url=element.data('ujs:submit-button-formaction')||element.attr('action');data=$(element[0]).serializeArray();var button=element.data('ujs:submit-button');if(button){data.push(button);element.data('ujs:submit-button',null);}
element.data('ujs:submit-button-formmethod',null);element.data('ujs:submit-button-formaction',null);}else if(element.is(rails.inputChangeSelector)){method=element.data('method');url=element.data('url');data=element.serialize();if(element.data('params'))data=data+'&'+element.data('params');}else if(element.is(rails.buttonClickSelector)){method=element.data('method')||'get';url=element.data('url');data=element.serialize();if(element.data('params'))data=data+'&'+element.data('params');}else{method=element.data('method');url=rails.href(element);data=element.data('params')||null;}
options={type:method||'GET',data:data,dataType:dataType,beforeSend:function(xhr,settings){if(settings.dataType===undefined){xhr.setRequestHeader('accept','*/*;q=0.5, '+settings.accepts.script);}
if(rails.fire(element,'ajax:beforeSend',[xhr,settings])){element.trigger('ajax:send',xhr);}else{return false;}},success:function(data,status,xhr){element.trigger('ajax:success',[data,status,xhr]);},complete:function(xhr,status){element.trigger('ajax:complete',[xhr,status]);},error:function(xhr,status,error){element.trigger('ajax:error',[xhr,status,error]);},crossDomain:rails.isCrossDomain(url)};if(withCredentials){options.xhrFields={withCredentials:withCredentials};}
if(url){options.url=url;}
return rails.ajax(options);}else{return false;}},isCrossDomain:function(url){var originAnchor=document.createElement('a');originAnchor.href=location.href;var urlAnchor=document.createElement('a');try{urlAnchor.href=url;urlAnchor.href=urlAnchor.href;return!(((!urlAnchor.protocol||urlAnchor.protocol===':')&&!urlAnchor.host)||(originAnchor.protocol+'//'+originAnchor.host===urlAnchor.protocol+'//'+urlAnchor.host));}catch(e){return true;}},handleMethod:function(link){var href=rails.href(link),method=link.data('method'),target=link.attr('target'),csrfToken=rails.csrfToken(),csrfParam=rails.csrfParam(),form=$('<form method="post" action="'+href+'"></form>'),metadataInput='<input name="_method" value="'+method+'" type="hidden" />';if(csrfParam!==undefined&&csrfToken!==undefined&&!rails.isCrossDomain(href)){metadataInput+='<input name="'+csrfParam+'" value="'+csrfToken+'" type="hidden" />';}
if(target){form.attr('target',target);}
form.hide().append(metadataInput).appendTo('body');form.submit();},formElements:function(form,selector){return form.is('form')?$(form[0].elements).filter(selector):form.find(selector);},disableFormElements:function(form){rails.formElements(form,rails.disableSelector).each(function(){rails.disableFormElement($(this));});},disableFormElement:function(element){var method,replacement;method=element.is('button')?'html':'val';replacement=element.data('disable-with');if(replacement!==undefined){element.data('ujs:enable-with',element[method]());element[method](replacement);}
element.prop('disabled',true);element.data('ujs:disabled',true);},enableFormElements:function(form){rails.formElements(form,rails.enableSelector).each(function(){rails.enableFormElement($(this));});},enableFormElement:function(element){var method=element.is('button')?'html':'val';if(element.data('ujs:enable-with')!==undefined){element[method](element.data('ujs:enable-with'));element.removeData('ujs:enable-with');}
element.prop('disabled',false);element.removeData('ujs:disabled');},allowAction:function(element){var message=element.data('confirm'),answer=false,callback;if(!message){return true;}
if(rails.fire(element,'confirm')){try{answer=rails.confirm(message);}catch(e){(console.error||console.log).call(console,e.stack||e);}
callback=rails.fire(element,'confirm:complete',[answer]);}
return answer&&callback;},blankInputs:function(form,specifiedSelector,nonBlank){var foundInputs=$(),input,valueToCheck,radiosForNameWithNoneSelected,radioName,selector=specifiedSelector||'input,textarea',requiredInputs=form.find(selector),checkedRadioButtonNames={};requiredInputs.each(function(){input=$(this);if(input.is('input[type=radio]')){radioName=input.attr('name');if(!checkedRadioButtonNames[radioName]){if(form.find('input[type=radio]:checked[name="'+radioName+'"]').length===0){radiosForNameWithNoneSelected=form.find('input[type=radio][name="'+radioName+'"]');foundInputs=foundInputs.add(radiosForNameWithNoneSelected);}
checkedRadioButtonNames[radioName]=radioName;}}else{valueToCheck=input.is('input[type=checkbox],input[type=radio]')?input.is(':checked'):!!input.val();if(valueToCheck===nonBlank){foundInputs=foundInputs.add(input);}}});return foundInputs.length?foundInputs:false;},nonBlankInputs:function(form,specifiedSelector){return rails.blankInputs(form,specifiedSelector,true);},stopEverything:function(e){$(e.target).trigger('ujs:everythingStopped');e.stopImmediatePropagation();return false;},disableElement:function(element){var replacement=element.data('disable-with');if(replacement!==undefined){element.data('ujs:enable-with',element.html());element.html(replacement);}
element.bind('click.railsDisable',function(e){return rails.stopEverything(e);});element.data('ujs:disabled',true);},enableElement:function(element){if(element.data('ujs:enable-with')!==undefined){element.html(element.data('ujs:enable-with'));element.removeData('ujs:enable-with');}
element.unbind('click.railsDisable');element.removeData('ujs:disabled');}};if(rails.fire($document,'rails:attachBindings')){$.ajaxPrefilter(function(options,originalOptions,xhr){if(!options.crossDomain){rails.CSRFProtection(xhr);}});$(window).on('pageshow.rails',function(){$($.rails.enableSelector).each(function(){var element=$(this);if(element.data('ujs:disabled')){$.rails.enableFormElement(element);}});$($.rails.linkDisableSelector).each(function(){var element=$(this);if(element.data('ujs:disabled')){$.rails.enableElement(element);}});});$document.delegate(rails.linkDisableSelector,'ajax:complete',function(){rails.enableElement($(this));});$document.delegate(rails.buttonDisableSelector,'ajax:complete',function(){rails.enableFormElement($(this));});$document.delegate(rails.linkClickSelector,'click.rails',function(e){var link=$(this),method=link.data('method'),data=link.data('params'),metaClick=e.metaKey||e.ctrlKey;if(!rails.allowAction(link))return rails.stopEverything(e);if(!metaClick&&link.is(rails.linkDisableSelector))rails.disableElement(link);if(rails.isRemote(link)){if(metaClick&&(!method||method==='GET')&&!data){return true;}
var handleRemote=rails.handleRemote(link);if(handleRemote===false){rails.enableElement(link);}else{handleRemote.fail(function(){rails.enableElement(link);});}
return false;}else if(method){rails.handleMethod(link);return false;}});$document.delegate(rails.buttonClickSelector,'click.rails',function(e){var button=$(this);if(!rails.allowAction(button)||!rails.isRemote(button))return rails.stopEverything(e);if(button.is(rails.buttonDisableSelector))rails.disableFormElement(button);var handleRemote=rails.handleRemote(button);if(handleRemote===false){rails.enableFormElement(button);}else{handleRemote.fail(function(){rails.enableFormElement(button);});}
return false;});$document.delegate(rails.inputChangeSelector,'change.rails',function(e){var link=$(this);if(!rails.allowAction(link)||!rails.isRemote(link))return rails.stopEverything(e);rails.handleRemote(link);return false;});$document.delegate(rails.formSubmitSelector,'submit.rails',function(e){var form=$(this),remote=rails.isRemote(form),blankRequiredInputs,nonBlankFileInputs;if(!rails.allowAction(form))return rails.stopEverything(e);if(form.attr('novalidate')===undefined){if(form.data('ujs:formnovalidate-button')===undefined){blankRequiredInputs=rails.blankInputs(form,rails.requiredInputSelector,false);if(blankRequiredInputs&&rails.fire(form,'ajax:aborted:required',[blankRequiredInputs])){return rails.stopEverything(e);}}else{form.data('ujs:formnovalidate-button',undefined);}}
if(remote){nonBlankFileInputs=rails.nonBlankInputs(form,rails.fileInputSelector);if(nonBlankFileInputs){setTimeout(function(){rails.disableFormElements(form);},13);var aborted=rails.fire(form,'ajax:aborted:file',[nonBlankFileInputs]);if(!aborted){setTimeout(function(){rails.enableFormElements(form);},13);}
return aborted;}
rails.handleRemote(form);return false;}else{setTimeout(function(){rails.disableFormElements(form);},13);}});$document.delegate(rails.formInputClickSelector,'click.rails',function(event){var button=$(this);if(!rails.allowAction(button))return rails.stopEverything(event);var name=button.attr('name'),data=name?{name:name,value:button.val()}:null;var form=button.closest('form');if(form.length===0){form=$('#'+button.attr('form'));}
form.data('ujs:submit-button',data);form.data('ujs:formnovalidate-button',button.attr('formnovalidate'));form.data('ujs:submit-button-formaction',button.attr('formaction'));form.data('ujs:submit-button-formmethod',button.attr('formmethod'));});$document.delegate(rails.formSubmitSelector,'ajax:send.rails',function(event){if(this===event.target)rails.disableFormElements($(this));});$document.delegate(rails.formSubmitSelector,'ajax:complete.rails',function(event){if(this===event.target)rails.enableFormElements($(this));});$(function(){rails.refreshCSRFTokens();});}})(jQuery);
/* ========================================================================
 * bootstrap-tour - v0.12.0
 * http://bootstraptour.com
 * ========================================================================
 * Copyright 2012-2017 Ulrich Sossou
 *
 * ========================================================================
 * Licensed under the MIT License (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://opensource.org/licenses/MIT
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================================
 */

var bind=function(t,e){return function(){return t.apply(e,arguments)}};!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],function(o){return t.Tour=e(o)}):"object"==typeof exports?module.exports=e(require("jquery")):t.Tour=e(t.jQuery)}(window,function(t){var e;return e=window.document,function(){function o(e){this._showPopoverAndOverlay=bind(this._showPopoverAndOverlay,this);var o;try{o=window.localStorage}catch(t){o=!1}this._options=t.extend({name:"tour",steps:[],container:"body",autoscroll:!0,keyboard:!0,storage:o,debug:!1,backdrop:!1,backdropContainer:"body",backdropPadding:0,redirect:!0,orphan:!1,duration:!1,delay:!1,basePath:"",template:'<div class="popover" role="tooltip"> <div class="arrow"></div> <h3 class="popover-header"></h3> <div class="popover-body"></div> <div class="popover-navigation"> <div class="btn-group"> <button class="btn btn-sm btn-secondary" data-role="prev">&laquo; Prev</button> <button class="btn btn-sm btn-secondary" data-role="next">Next &raquo;</button> <button class="btn btn-sm btn-secondary" data-role="pause-resume" data-pause-text="Pause" data-resume-text="Resume">Pause</button> </div> <button class="btn btn-sm btn-secondary" data-role="end">End tour</button> </div> </div>',afterSetState:function(t,e){},afterGetState:function(t,e){},afterRemoveState:function(t){},onStart:function(t){},onEnd:function(t){},onShow:function(t){},onShown:function(t){},onHide:function(t){},onHidden:function(t){},onNext:function(t){},onPrev:function(t){},onPause:function(t,e){},onResume:function(t,e){},onRedirectError:function(t){}},e),this._force=!1,this._inited=!1,this._current=null,this.backdrops=[]}return o.prototype.addSteps=function(t){var e,o,n;for(e=0,o=t.length;e<o;e++)n=t[e],this.addStep(n);return this},o.prototype.addStep=function(t){return this._options.steps.push(t),this},o.prototype.getStep=function(e){if(null!=this._options.steps[e])return t.extend({id:"step-"+e,path:"",host:"",placement:"right",title:"",content:"<p></p>",next:e===this._options.steps.length-1?-1:e+1,prev:e-1,animation:!0,container:this._options.container,autoscroll:this._options.autoscroll,backdrop:this._options.backdrop,backdropContainer:this._options.backdropContainer,backdropPadding:this._options.backdropPadding,redirect:this._options.redirect,reflexElement:this._options.steps[e].element,backdropElement:this._options.steps[e].element,orphan:this._options.orphan,duration:this._options.duration,delay:this._options.delay,template:this._options.template,onShow:this._options.onShow,onShown:this._options.onShown,onHide:this._options.onHide,onHidden:this._options.onHidden,onNext:this._options.onNext,onPrev:this._options.onPrev,onPause:this._options.onPause,onResume:this._options.onResume,onRedirectError:this._options.onRedirectError},this._options.steps[e])},o.prototype.init=function(t){return this._force=t,this.ended()?(this._debug("Tour ended, init prevented."),this):(this.setCurrentStep(),this._initMouseNavigation(),this._initKeyboardNavigation(),null!==this._current&&this.showStep(this._current),this._inited=!0,this)},o.prototype.start=function(t){var e;return null==t&&(t=!1),this._inited||this.init(t),null===this._current&&(e=this._makePromise(null!=this._options.onStart?this._options.onStart(this):void 0),this._callOnPromiseDone(e,this.showStep,0)),this},o.prototype.next=function(){var t;return t=this.hideStep(this._current,this._current+1),this._callOnPromiseDone(t,this._showNextStep)},o.prototype.prev=function(){var t;return t=this.hideStep(this._current,this._current-1),this._callOnPromiseDone(t,this._showPrevStep)},o.prototype.goTo=function(t){var e;return e=this.hideStep(this._current,t),this._callOnPromiseDone(e,this.showStep,t)},o.prototype.end=function(){var o,n;return o=function(o){return function(n){if(t(e).off("click.tour-"+o._options.name),t(e).off("keyup.tour-"+o._options.name),o._setState("end","yes"),o._inited=!1,o._force=!1,o._clearTimer(),null!=o._options.onEnd)return o._options.onEnd(o)}}(this),n=this.hideStep(this._current),this._callOnPromiseDone(n,o)},o.prototype.ended=function(){return!this._force&&!!this._getState("end")},o.prototype.restart=function(){return this._removeState("current_step"),this._removeState("end"),this._removeState("redirect_to"),this.start()},o.prototype.pause=function(){var t;return(t=this.getStep(this._current))&&t.duration?(this._paused=!0,this._duration-=(new Date).getTime()-this._start,window.clearTimeout(this._timer),this._debug("Paused/Stopped step "+(this._current+1)+" timer ("+this._duration+" remaining)."),null!=t.onPause?t.onPause(this,this._duration):void 0):this},o.prototype.resume=function(){var t;return(t=this.getStep(this._current))&&t.duration?(this._paused=!1,this._start=(new Date).getTime(),this._duration=this._duration||t.duration,this._timer=window.setTimeout(function(t){return function(){return t._isLast()?t.next():t.end()}}(this),this._duration),this._debug("Started step "+(this._current+1)+" timer with duration "+this._duration),null!=t.onResume&&this._duration!==t.duration?t.onResume(this,this._duration):void 0):this},o.prototype.hideStep=function(e,o){var n,i,r,s;if(s=this.getStep(e))return this._clearTimer(),r=this._makePromise(null!=s.onHide?s.onHide(this,e):void 0),i=function(n){return function(i){var r,a;if((r=t(s.element)).data("bs.popover")||(r=t("body")),r.popover("dispose").removeClass("tour-"+n._options.name+"-element tour-"+n._options.name+"-"+e+"-element").removeData("bs.popover"),s.reflex&&t(s.reflexElement).removeClass("tour-step-element-reflex").off(n._reflexEvent(s.reflex)+".tour-"+n._options.name),s.backdrop&&((a=null!=o&&n.getStep(o))&&a.backdrop&&a.backdropElement===s.backdropElement||n._hideOverlayElement(s)),null!=s.onHidden)return s.onHidden(n)}}(this),n=s.delay.hide||s.delay,"[object Number]"==={}.toString.call(n)&&n>0?(this._debug("Wait "+n+" milliseconds to hide the step "+(this._current+1)),window.setTimeout(function(t){return function(){return t._callOnPromiseDone(r,i)}}(this),n)):this._callOnPromiseDone(r,i),r},o.prototype.showStep=function(t){var o,n,i,r,s,a;return this.ended()?(this._debug("Tour ended, showStep prevented."),this):(a=this.getStep(t))&&(s=t<this._current,n=this._makePromise(null!=a.onShow?a.onShow(this,t):void 0),this.setCurrentStep(t),o=function(){switch({}.toString.call(a.path)){case"[object Function]":return a.path();case"[object String]":return this._options.basePath+a.path;default:return a.path}}.call(this),!a.redirect||!this._isRedirect(a.host,o,e.location)||(this._redirect(a,t,o),this._isJustPathHashDifferent(a.host,o,e.location)))?(r=function(e){return function(o){if(e._isOrphan(a)){if(!1===a.orphan)return e._debug("Skip the orphan step "+(e._current+1)+".\nOrphan option is false and the element does not exist or is hidden."),void(s?e._showPrevStep():e._showNextStep());e._debug("Show the orphan step "+(e._current+1)+". Orphans option is true.")}if(a.autoscroll?e._scrollIntoView(t):e._showPopoverAndOverlay(t),a.duration)return e.resume()}}(this),i=a.delay.show||a.delay,"[object Number]"==={}.toString.call(i)&&i>0?(this._debug("Wait "+i+" milliseconds to show the step "+(this._current+1)),window.setTimeout(function(t){return function(){return t._callOnPromiseDone(n,r)}}(this),i)):this._callOnPromiseDone(n,r),n):void 0},o.prototype.getCurrentStep=function(){return this._current},o.prototype.setCurrentStep=function(t){return null!=t?(this._current=t,this._setState("current_step",t)):(this._current=this._getState("current_step"),this._current=null===this._current?null:parseInt(this._current,10)),this},o.prototype.redraw=function(){return this._showOverlayElement(this.getStep(this.getCurrentStep()))},o.prototype._setState=function(t,e){var o;if(this._options.storage){o=this._options.name+"_"+t;try{this._options.storage.setItem(o,e)}catch(t){t.code===DOMException.QUOTA_EXCEEDED_ERR&&this._debug("LocalStorage quota exceeded. State storage failed.")}return this._options.afterSetState(o,e)}return null==this._state&&(this._state={}),this._state[t]=e},o.prototype._removeState=function(t){var e;return this._options.storage?(e=this._options.name+"_"+t,this._options.storage.removeItem(e),this._options.afterRemoveState(e)):null!=this._state?delete this._state[t]:void 0},o.prototype._getState=function(t){var e,o;return this._options.storage?(e=this._options.name+"_"+t,o=this._options.storage.getItem(e)):null!=this._state&&(o=this._state[t]),void 0!==o&&"null"!==o||(o=null),this._options.afterGetState(t,o),o},o.prototype._showNextStep=function(){var t,e,o;return o=this.getStep(this._current),e=function(t){return function(e){return t.showStep(o.next)}}(this),t=this._makePromise(null!=o.onNext?o.onNext(this):void 0),this._callOnPromiseDone(t,e)},o.prototype._showPrevStep=function(){var t,e,o;return o=this.getStep(this._current),e=function(t){return function(e){return t.showStep(o.prev)}}(this),t=this._makePromise(null!=o.onPrev?o.onPrev(this):void 0),this._callOnPromiseDone(t,e)},o.prototype._debug=function(t){if(this._options.debug)return window.console.log("Bootstrap Tour '"+this._options.name+"' | "+t)},o.prototype._isRedirect=function(t,e,o){var n;return!(null==t||""===t||!("[object RegExp]"==={}.toString.call(t)&&!t.test(o.origin)||"[object String]"==={}.toString.call(t)&&this._isHostDifferent(t,o)))||(n=[o.pathname,o.search,o.hash].join(""),null!=e&&""!==e&&("[object RegExp]"==={}.toString.call(e)&&!e.test(n)||"[object String]"==={}.toString.call(e)&&this._isPathDifferent(e,n)))},o.prototype._isHostDifferent=function(t,e){switch({}.toString.call(t)){case"[object RegExp]":return!t.test(e.origin);case"[object String]":return this._getProtocol(t)!==this._getProtocol(e.href)||this._getHost(t)!==this._getHost(e.href);default:return!0}},o.prototype._isPathDifferent=function(t,e){return this._getPath(t)!==this._getPath(e)||!this._equal(this._getQuery(t),this._getQuery(e))||!this._equal(this._getHash(t),this._getHash(e))},o.prototype._isJustPathHashDifferent=function(t,e,o){var n;return(null==t||""===t||!this._isHostDifferent(t,o))&&(n=[o.pathname,o.search,o.hash].join(""),"[object String]"==={}.toString.call(e)&&(this._getPath(e)===this._getPath(n)&&this._equal(this._getQuery(e),this._getQuery(n))&&!this._equal(this._getHash(e),this._getHash(n))))},o.prototype._redirect=function(o,n,i){var r;return t.isFunction(o.redirect)?o.redirect.call(this,i):(r="[object String]"==={}.toString.call(o.host)?""+o.host+i:i,this._debug("Redirect to "+r),this._getState("redirect_to")!==""+n?(this._setState("redirect_to",""+n),e.location.href=r):(this._debug("Error redirection loop to "+i),this._removeState("redirect_to"),null!=o.onRedirectError?o.onRedirectError(this):void 0))},o.prototype._isOrphan=function(e){return null==e.element||!t(e.element).length||t(e.element).is(":hidden")&&"http://www.w3.org/2000/svg"!==t(e.element)[0].namespaceURI},o.prototype._isLast=function(){return this._current<this._options.steps.length-1},o.prototype._showPopoverAndOverlay=function(t){var e;if(this.getCurrentStep()===t&&!this.ended())return(e=this.getStep(t)).backdrop&&this._showOverlayElement(e),this._showPopover(e,t),null!=e.onShown&&e.onShown(this),this._debug("Step "+(this._current+1)+" of "+this._options.steps.length)},o.prototype._showPopover=function(e,o){var n,i,r;return t(".tour-"+this._options.name).remove(),r=t.extend({},this._options),i=this._isOrphan(e),e.template=this._template(e,o),i&&(e.element="body",e.placement="top"),(n=t(e.element)).addClass("tour-"+this._options.name+"-element tour-"+this._options.name+"-"+o+"-element"),e.options&&t.extend(r,e.options),e.reflex&&!i&&t(e.reflexElement).addClass("tour-step-element-reflex").off(this._reflexEvent(e.reflex)+".tour-"+this._options.name).on(this._reflexEvent(e.reflex)+".tour-"+this._options.name,function(t){return function(){return t._isLast()?t.next():t.end()}}(this)),n.popover({placement:e.placement,trigger:"manual",title:e.title,content:e.content,html:!0,animation:e.animation,container:e.container,template:e.template,selector:e.element}).popover("show"),t(n.data("bs.popover").getTipElement()).attr("id",e.id)},o.prototype._template=function(e,o){var n,i,r,s,a,h;return h=e.template,this._isOrphan(e)&&"[object Boolean]"!=={}.toString.call(e.orphan)&&(h=e.orphan),a=t(t.isFunction(h)?h(o,e):h),n=a.find(".popover-navigation"),r=n.find('[data-role="prev"]'),i=n.find('[data-role="next"]'),s=n.find('[data-role="pause-resume"]'),this._isOrphan(e)&&a.addClass("orphan"),a.addClass("tour-"+this._options.name+" tour-"+this._options.name+"-"+o),e.reflex&&a.addClass("tour-"+this._options.name+"-reflex"),e.prev<0&&r.addClass("disabled").prop("disabled",!0).prop("tabindex",-1),e.next<0&&i.addClass("disabled").prop("disabled",!0).prop("tabindex",-1),e.duration||s.remove(),a.clone().wrap("<div>").parent().html()},o.prototype._reflexEvent=function(t){return"[object Boolean]"==={}.toString.call(t)?"click":t},o.prototype._scrollIntoView=function(e){var o,n,i,r,s,a,h,p;if(h=this.getStep(e),!(o=t(h.element)).length)return this._showPopoverAndOverlay(e);switch(n=t(window),s=o.offset().top,r=o.outerHeight(),p=n.height(),a=0,h.placement){case"top":a=Math.max(0,s-p/2);break;case"left":case"right":a=Math.max(0,s+r/2-p/2);break;case"bottom":a=Math.max(0,s+r-p/2)}return this._debug("Scroll into view. ScrollTop: "+a+". Element offset: "+s+". Window height: "+p+"."),i=0,t("body, html").stop(!0,!0).animate({scrollTop:Math.ceil(a)},function(t){return function(){if(2==++i)return t._showPopoverAndOverlay(e),t._debug("Scroll into view.\nAnimation end element offset: "+o.offset().top+".\nWindow height: "+n.height()+".")}}(this))},o.prototype._initMouseNavigation=function(){var o;return o=this,t(e).off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='prev']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='next']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='end']").off("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='pause-resume']").on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='next']",function(t){return function(e){return e.preventDefault(),t.next()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='prev']",function(t){return function(e){if(e.preventDefault(),t._current>0)return t.prev()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='end']",function(t){return function(e){return e.preventDefault(),t.end()}}(this)).on("click.tour-"+this._options.name,".popover.tour-"+this._options.name+" *[data-role='pause-resume']",function(e){var n;return e.preventDefault(),(n=t(this)).text(o._paused?n.data("pause-text"):n.data("resume-text")),o._paused?o.resume():o.pause()})},o.prototype._initKeyboardNavigation=function(){if(this._options.keyboard)return t(e).on("keyup.tour-"+this._options.name,function(t){return function(e){if(e.which)switch(e.which){case 39:return e.preventDefault(),t._isLast()?t.next():t.end();case 37:if(e.preventDefault(),t._current>0)return t.prev()}}}(this))},o.prototype._makePromise=function(e){return e&&t.isFunction(e.then)?e:null},o.prototype._callOnPromiseDone=function(t,e,o){return t?t.then(function(t){return function(n){return e.call(t,o)}}(this)):e.call(this,o)},o.prototype._showBackground=function(o,n){var i,r,s,a,h,p,u,l,c;for(s=t(e).height(),c=t(e).width(),l=[],a=0,h=(u=["top","bottom","left","right"]).length;a<h;a++)switch(p=u[a],i=null!=(r=this.backdrops)[p]?r[p]:r[p]=t("<div>",{class:"tour-backdrop "+p}),t(o.backdropContainer).append(i),p){case"top":l.push(i.height(n.offset.top>0?n.offset.top:0).width(c).offset({top:0,left:0}));break;case"bottom":l.push(i.offset({top:n.offset.top+n.height,left:0}).height(s-(n.offset.top+n.height)).width(c));break;case"left":l.push(i.offset({top:n.offset.top,left:0}).height(n.height).width(n.offset.left>0?n.offset.left:0));break;case"right":l.push(i.offset({top:n.offset.top,left:n.offset.left+n.width}).height(n.height).width(c-(n.offset.left+n.width)));break;default:l.push(void 0)}return l},o.prototype._showOverlayElement=function(e){var o,n;return 0===(o=t(e.backdropElement)).length?n={width:0,height:0,offset:{top:0,left:0}}:(n={width:o.innerWidth(),height:o.innerHeight(),offset:o.offset()},o.addClass("tour-step-backdrop"),e.backdropPadding&&(n=this._applyBackdropPadding(e.backdropPadding,n))),this._showBackground(e,n)},o.prototype._hideOverlayElement=function(e){var o,n,i;t(e.backdropElement).removeClass("tour-step-backdrop"),i=this.backdrops;for(n in i)(o=i[n])&&void 0!==o.remove&&o.remove();return this.backdrops=[]},o.prototype._applyBackdropPadding=function(t,e){return"object"==typeof t?(null==t.top&&(t.top=0),null==t.right&&(t.right=0),null==t.bottom&&(t.bottom=0),null==t.left&&(t.left=0),e.offset.top=e.offset.top-t.top,e.offset.left=e.offset.left-t.left,e.width=e.width+t.left+t.right,e.height=e.height+t.top+t.bottom):(e.offset.top=e.offset.top-t,e.offset.left=e.offset.left-t,e.width=e.width+2*t,e.height=e.height+2*t),e},o.prototype._clearTimer=function(){return window.clearTimeout(this._timer),this._timer=null,this._duration=null},o.prototype._getProtocol=function(t){return(t=t.split("://")).length>1?t[0]:"http"},o.prototype._getHost=function(t){return t=t.split("//"),(t=t.length>1?t[1]:t[0]).split("/")[0]},o.prototype._getPath=function(t){return t.replace(/\/?$/,"").split("?")[0].split("#")[0]},o.prototype._getQuery=function(t){return this._getParams(t,"?")},o.prototype._getHash=function(t){return this._getParams(t,"#")},o.prototype._getParams=function(t,e){var o,n,i,r,s;if(1===(r=t.split(e)).length)return{};for(s={},o=0,n=(r=r[1].split("&")).length;o<n;o++)s[(i=(i=r[o]).split("="))[0]]=i[1]||"";return s},o.prototype._equal=function(t,e){var o,n,i,r,s,a;if("[object Object]"==={}.toString.call(t)&&"[object Object]"==={}.toString.call(e)){if(r=Object.keys(t),s=Object.keys(e),r.length!==s.length)return!1;for(n in t)if(a=t[n],!this._equal(e[n],a))return!1;return!0}if("[object Array]"==={}.toString.call(t)&&"[object Array]"==={}.toString.call(e)){if(t.length!==e.length)return!1;for(n=o=0,i=t.length;o<i;n=++o)if(a=t[n],!this._equal(a,e[n]))return!1;return!0}return t===e},o}()});
