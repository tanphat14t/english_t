/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket trac-14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var version = "3.7.1",

	rhtmlSuffix = /HTML$/i,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},


	// Retrieve the text value of an array of DOM nodes
	text: function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {

			// If no nodeType, this is expected to be an array
			while ( ( node = elem[ i++ ] ) ) {

				// Do not traverse comment nodes
				ret += jQuery.text( node );
			}
		}
		if ( nodeType === 1 || nodeType === 11 ) {
			return elem.textContent;
		}
		if ( nodeType === 9 ) {
			return elem.documentElement.textContent;
		}
		if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Do not include comment or processing instruction nodes

		return ret;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function( elem ) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML when documentElement doesn't yet exist, such as inside
		// document fragments.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var splice = arr.splice;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
	"g"
);




// Note: an element does not contain itself
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	return a === bup || !!( bup && bup.nodeType === 1 && (

		// Support: IE 9 - 11+
		// IE doesn't have `contains` on SVG.
		a.contains ?
			a.contains( bup ) :
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if ( asCodePoint ) {

		// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
		if ( ch === "\0" ) {
			return "\uFFFD";
		}

		// Control characters and (dependent upon position) numbers get escaped as code points
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Other potentially-special ASCII characters get backslash-escaped
	return "\\" + ch;
}

jQuery.escapeSelector = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferredDoc = document,
	pushNative = push;

( function() {

var i,
	Expr,
	outermostContext,
	sortInput,
	hasDuplicate,
	push = pushNative,

	// Local document vars
	document,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	matches,

	// Instance-specific data
	expando = jQuery.expando,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rleadingCombinator = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" +
		whitespace + "*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		ID: new RegExp( "^#(" + identifier + ")" ),
		CLASS: new RegExp( "^\\.(" + identifier + ")" ),
		TAG: new RegExp( "^(" + identifier + "|[*])" ),
		ATTR: new RegExp( "^" + attributes ),
		PSEUDO: new RegExp( "^" + pseudos ),
		CHILD: new RegExp(
			"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
				whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
				whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		needsContext: new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( nonHex ) {

			// Strip the backslash prefix from a non-hex escape sequence
			return nonHex;
		}

		// Replace a hexadecimal escape sequence with the encoded Unicode code point
		// Support: IE <=11+
		// For values outside the Basic Multilingual Plane (BMP), manually construct a
		// surrogate pair
		return high < 0 ?
			String.fromCharCode( high + 0x10000 ) :
			String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes; see `setDocument`.
	// Support: IE 9 - 11+, Edge 12 - 18+
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE/Edge.
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", next: "legend" }
	);

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android <=4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = {
		apply: function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		},
		call: function( target ) {
			pushNative.apply( target, slice.call( arguments, 1 ) );
		}
	};
}

function find( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE 9 only
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								push.call( results, elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE 9 only
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( context, elem ) &&
							elem.id === m ) {

							push.call( results, elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( !nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rleadingCombinator.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when
					// strict-comparing two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( newContext != context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = jQuery.escapeSelector( nid );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrimCSS, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties
		// (see https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by jQuery selector module
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		return ( nodeName( elem, "input" ) || nodeName( elem, "button" ) ) &&
			elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11+
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					elem.isDisabled !== !disabled &&
						inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a jQuery selector context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [node] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
function setDocument( node ) {
	var subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc( document );

	// Support: iOS 7 only, IE 9 - 11+
	// Older browsers didn't support unprefixed `matches`.
	matches = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors
	// (see trac-13936).
	// Limit the fix to IE & Edge Legacy; despite Edge 15+ implementing `matches`,
	// all IE 9+ and Edge Legacy versions implement `msMatchesSelector` as well.
	if ( documentElement.msMatchesSelector &&

		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "unload", unloadHandler );
	}

	// Support: IE <10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Support: IE 9 only
	// Check to see if it's possible to do matchesSelector
	// on a disconnected node.
	support.disconnectedMatch = assert( function( el ) {
		return matches.call( el, "*" );
	} );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge don't support the :scope pseudo-class.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
	// Make sure the `:has()` argument is parsed unforgivingly.
	// We include `*` in the test to detect buggy implementations that are
	// _selectively_ forgiving (specifically when the list includes at least
	// one valid selector).
	// Note that we treat complete lack of support for `:has()` as if it were
	// spec-compliant support, which is fine because use of `:has()` in such
	// environments will fail in the qSA path and fall back to jQuery traversal
	// anyway.
	support.cssHas = assert( function() {
		try {
			document.querySelector( ":has(*,:jqfake)" );
			return false;
		} catch ( e ) {
			return true;
		}
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter.ID =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find.ID = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find.TAG = function( tag, context ) {
		if ( typeof context.getElementsByTagName !== "undefined" ) {
			return context.getElementsByTagName( tag );

		// DocumentFragment nodes don't have gEBTN
		} else {
			return context.querySelectorAll( tag );
		}
	};

	// Class
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	rbuggyQSA = [];

	// Build QSA regex
	// Regex strategy adopted from Diego Perini
	assert( function( el ) {

		var input;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Support: iOS <=7 - 8 only
		// Boolean attributes and "value" are not treated correctly in some XML documents
		if ( !el.querySelectorAll( "[selected]" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Support: iOS <=7 - 8 only
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Support: iOS 8 only
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// In-page `selector#id sibling-combinator selector` fails
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":checked" );
		}

		// Support: Windows 8 Native Apps
		// The type and name attributes are restricted during .innerHTML assignment
		input = document.createElement( "input" );
		input.setAttribute( "type", "hidden" );
		el.appendChild( input ).setAttribute( "name", "D" );

		// Support: IE 9 - 11+
		// IE's :disabled selector does not pick up the children of disabled fieldsets
		// Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// In some of the document kinds, these selectors wouldn't work natively.
		// This is probably OK but for backwards compatibility we want to maintain
		// handling them through jQuery traversal in jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":enabled", ":disabled" );
		}

		// Support: IE 11+, Edge 15 - 18+
		// IE 11/Edge don't find elements on a `[name='']` query in some cases.
		// Adding a temporary attribute to the document before the selection works
		// around the issue.
		// Interestingly, IE 10 & older don't seem to have the issue.
		input = document.createElement( "input" );
		input.setAttribute( "name", "" );
		el.appendChild( input );
		if ( !el.querySelectorAll( "[name='']" ).length ) {
			rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
				whitespace + "*(?:''|\"\")" );
		}
	} );

	if ( !support.cssHas ) {

		// Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Our regular `try-catch` mechanism fails to detect natively-unsupported
		// pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
		// in browsers that parse the `:has()` argument as a forgiving selector list.
		// https://drafts.csswg.org/selectors/#relational now requires the argument
		// to be parsed unforgivingly, but browsers have not yet fully adjusted.
		rbuggyQSA.push( ":has" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a === document || a.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b === document || b.ownerDocument == preferredDoc &&
				find.contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	};

	return document;
}

find.matches = function( expr, elements ) {
	return find( expr, null, null, elements );
};

find.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find( expr, document, null, [ elem ] ).length > 0;
};

find.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return jQuery.contains( context, elem );
};


find.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (see trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	if ( val !== undefined ) {
		return val;
	}

	return elem.getAttribute( name );
};

find.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
jQuery.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	//
	// Support: Android <=4.0+
	// Testing for detecting duplicates is unpredictable so instead assume we can't
	// depend on duplicate detection in all browsers without a stable sort.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( results, 0 );
	sort.call( results, sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			splice.call( results, duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack( jQuery.uniqueSort( slice.apply( this ) ) );
};

Expr = jQuery.expr = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		ATTR: function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		CHILD: function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					find.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				find.error( match[ 0 ] );
			}

			return match;
		},

		PSEUDO: function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr.CHILD.test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		TAG: function( nodeNameSelector ) {
			var expectedNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return nodeName( elem, expectedNodeName );
				};
		},

		CLASS: function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace + ")" + className +
					"(" + whitespace + "|$)" ) ) &&
				classCache( className, function( elem ) {
					return pattern.test(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "undefined" &&
								elem.getAttribute( "class" ) ||
							""
					);
				} );
		},

		ATTR: function( name, operator, check ) {
			return function( elem ) {
				var result = find.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				if ( operator === "=" ) {
					return result === check;
				}
				if ( operator === "!=" ) {
					return result !== check;
				}
				if ( operator === "^=" ) {
					return check && result.indexOf( check ) === 0;
				}
				if ( operator === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if ( operator === "$=" ) {
					return check && result.slice( -check.length ) === check;
				}
				if ( operator === "~=" ) {
					return ( " " + result.replace( rwhitespace, " " ) + " " )
						.indexOf( check ) > -1;
				}
				if ( operator === "|=" ) {
					return result === check || result.slice( 0, check.length + 1 ) === check + "-";
				}

				return false;
			};
		},

		CHILD: function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || ( parent[ expando ] = {} );
							cache = outerCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {
								outerCache = elem[ expando ] || ( elem[ expando ] = {} );
								cache = outerCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										nodeName( node, name ) :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as jQuery does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		not: markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element
					// (see https://github.com/jquery/sizzle/issues/299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		has: markFunction( function( selector ) {
			return function( elem ) {
				return find( selector, elem ).length > 0;
			};
		} ),

		contains: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				find.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		target: function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function( elem ) {
			return elem === documentElement;
		},

		focus: function( elem ) {
			return elem === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		enabled: createDisabledPseudo( false ),
		disabled: createDisabledPseudo( true ),

		checked: function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "option" ) && !!elem.selected );
		},

		selected: function( elem ) {

			// Support: IE <=11+
			// Accessing the selectedIndex property
			// forces the browser to treat the default option as
			// selected when in an optgroup.
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		empty: function( elem ) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		parent: function( elem ) {
			return !Expr.pseudos.empty( elem );
		},

		// Element/input types
		header: function( elem ) {
			return rheader.test( elem.nodeName );
		},

		input: function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		button: function( elem ) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName( elem, "button" );
		},

		text: function( elem ) {
			var attr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Support: IE <10 only
				// New HTML5 attribute values (e.g., "search") appear
				// with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		first: createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		last: createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		even: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if ( argument < 0 ) {
				i = argument + length;
			} else if ( argument > length ) {
				i = length;
			} else {
				i = argument;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rleadingCombinator.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	return soFar ?
		find.error( selector ) :

		// Cache the tokens
		tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						if ( skip && nodeName( elem, skip ) ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = outerCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							outerCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		find( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed ||
				multipleContexts( selector || "*",
					context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems;

		if ( matcher ) {

			// If we have a postFinder, or filtered seed, or non-seed postFilter
			// or preexisting results,
			matcherOut = postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results;

			// Find primary matches
			matcher( matcherIn, matcherOut, context, xml );
		} else {
			matcherOut = matcherIn;
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf.call( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || context != outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element
			// (see https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 )
							.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrimCSS, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find.TAG( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: iOS <=7 - 9 only
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
			// elements by id. (see trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							push.call( results, elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					jQuery.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

function compile( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
}

/**
 * A low-level selection function that works with jQuery's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with jQuery selector compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				context
			) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr.needsContext.test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
}

// One-time assignments

// Support: Android <=4.0 - 4.1+
// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Initialize against the default document
setDocument();

// Support: Android <=4.0 - 4.1+
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = find;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// These have always been private, but they used to be documented as part of
// Sizzle so let's maintain them for now for backwards compatibility purposes.
find.compile = compile;
find.select = select;
find.setDocument = setDocument;
find.tokenize = tokenize;

find.escape = jQuery.escapeSelector;
find.getText = jQuery.text;
find.isXML = jQuery.isXMLDoc;
find.selectors = jQuery.expr;
find.support = jQuery.support;
find.uniqueSort = jQuery.uniqueSort;

	/* eslint-enable */

} )();


var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
	// Strict HTML recognition (trac-11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the error, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// The deprecated alias of the above. While the name suggests
								// returning the stack, not an error instance, jQuery just passes
								// it directly to `console.warn` so both will work; an instance
								// just better cooperates with source maps.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

// If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
// captured before the async barrier to get the original error cause
// which may otherwise be hidden.
jQuery.Deferred.exceptionHook = function( error, asyncError ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See trac-6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see trac-8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (trac-14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (trac-11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (trac-14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (trac-13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (trac-13208)
				// Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (trac-13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", true );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, isSetup ) {

	// Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
	if ( !isSetup ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				if ( !saved ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					this[ type ]();
					result = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						return result;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering
				// the native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved ) {

				// ...and capture the result
				dataPriv.set( this, type, jQuery.event.trigger(
					saved[ 0 ],
					saved.slice( 1 ),
					this
				) );

				// Abort handling of the native event by all jQuery handlers while allowing
				// native handlers on the same element to run. On target, this is achieved
				// by stopping immediate propagation just on the jQuery event. However,
				// the native event is re-wrapped by a jQuery one on each level of the
				// propagation so the only way to stop it for jQuery is to stop it for
				// everyone via native `stopPropagation()`. This is not a problem for
				// focus/blur which don't bubble, but it does also stop click on checkboxes
				// and radios. We accept this limitation.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler( nativeEvent ) {
		if ( document.documentMode ) {

			// Support: IE 11+
			// Attach a single focusin/focusout handler on the document while someone wants
			// focus/blur. This is because the former are synchronous in IE while the latter
			// are async. In other browsers, all those handlers are invoked synchronously.

			// `handle` from private data would already wrap the event, but we need
			// to change the `type` here.
			var handle = dataPriv.get( this, "handle" ),
				event = jQuery.event.fix( nativeEvent );
			event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
			event.isSimulated = true;

			// First, handle focusin/focusout
			handle( nativeEvent );

			// ...then, handle focus/blur
			//
			// focus/blur don't bubble while focusin/focusout do; simulate the former by only
			// invoking the handler at the lower level.
			if ( event.target === event.currentTarget ) {

				// The setup part calls `leverageNative`, which, in turn, calls
				// `jQuery.event.add`, so event handle will already have been set
				// by this point.
				handle( event );
			}
		} else {

			// For non-IE browsers, attach a single capturing handler on the document
			// while someone wants focusin/focusout.
			jQuery.event.simulate( delegateType, nativeEvent.target,
				jQuery.event.fix( nativeEvent ) );
		}
	}

	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			var attaches;

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, true );

			if ( document.documentMode ) {

				// Support: IE 9 - 11+
				// We use the same native handler for focusin & focus (and focusout & blur)
				// so we need to coordinate setup & teardown parts between those events.
				// Use `delegateType` as the key as `type` is already used by `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if ( !attaches ) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} else {

				// Return false to allow normal processing in the caller
				return false;
			}
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		teardown: function() {
			var attaches;

			if ( document.documentMode ) {
				attaches = dataPriv.get( this, delegateType ) - 1;
				if ( !attaches ) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} else {
					dataPriv.set( this, delegateType, attaches );
				}
			} else {

				// Return false to indicate standard teardown should be applied
				return false;
			}
		},

		// Suppress native focus or blur if we're currently inside
		// a leveraged native-event stack
		_default: function( event ) {
			return dataPriv.get( event.target, type );
		},

		delegateType: delegateType
	};

	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Support: IE 9 - 11+
	// To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
	// attach a single handler for both events in IE.
	jQuery.event.special[ delegateType ] = {
		setup: function() {

			// Handle: regular nodes (via `this.ownerDocument`), window
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType );

			// Support: IE 9 - 11+
			// We use the same native handler for focusin & focus (and focusout & blur)
			// so we need to coordinate setup & teardown parts between those events.
			// Use `delegateType` as the key as `type` is already used by `leverageNative`.
			if ( !attaches ) {
				if ( document.documentMode ) {
					this.addEventListener( delegateType, focusMappedHandler );
				} else {
					doc.addEventListener( type, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		teardown: function() {
			var doc = this.ownerDocument || this.document || this,
				dataHolder = document.documentMode ? this : doc,
				attaches = dataPriv.get( dataHolder, delegateType ) - 1;

			if ( !attaches ) {
				if ( document.documentMode ) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} else {
					doc.removeEventListener( type, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} else {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (trac-8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Re-enable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {

							// Unwrap a CDATA section containing script contents. This shouldn't be
							// needed as in XML documents they're already not visible when
							// inspecting element contents and in HTML documents they have no
							// meaning but we're preserving that logic for backwards compatibility.
							// This will be removed completely in 4.0. See gh-4904.
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew jQuery#find here for performance reasons:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (trac-8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "box-sizing:content-box;border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is `display: block`
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( name ),

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, trac-12537)
	//   .css('--customProperty) (gh-3144)
	if ( computed ) {

		// Support: IE <=9 - 11+
		// IE only supports `"float"` in `getPropertyValue`; in computed styles
		// it's only available as `"cssFloat"`. We no longer modify properties
		// sent to `.css()` apart from camelCasing, so we need to check both.
		// Normally, this would create difference in behavior: if
		// `getPropertyValue` returns an empty string, the value returned
		// by `.css()` would be `undefined`. This is usually the case for
		// disconnected elements. However, in IE even disconnected elements
		// with no styles return `"none"` for `getPropertyValue( "float" )`
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( isCustomProp && ret ) {

			// Support: Firefox 105+, Chrome <=105+
			// Spec requires trimming whitespace for custom properties (gh-4926).
			// Firefox only trims leading whitespace. Chrome just collapses
			// both leading & trailing whitespace to a single space.
			//
			// Fall back to `undefined` if empty string returned.
			// This collapses a missing definition with property defined
			// and set to an empty string but there's no standard API
			// allowing us to differentiate them without a performance penalty
			// and returning `undefined` aligns with older jQuery.
			//
			// rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
			// as whitespace while CSS does not, but this is not a problem
			// because CSS preprocessing replaces them with U+000A LINE FEED
			// (which *is* CSS whitespace)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace( rtrimCSS, "$1" ) || undefined;
		}

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0,
		marginDelta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		// Count margin delta separately to only add it after scroll gutter adjustment.
		// This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
		if ( box === "margin" ) {
			marginDelta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta + marginDelta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		animationIterationCount: true,
		aspectRatio: true,
		borderImageSlice: true,
		columnCount: true,
		flexGrow: true,
		flexShrink: true,
		fontWeight: true,
		gridArea: true,
		gridColumn: true,
		gridColumnEnd: true,
		gridColumnStart: true,
		gridRow: true,
		gridRowEnd: true,
		gridRowStart: true,
		lineHeight: true,
		opacity: true,
		order: true,
		orphans: true,
		scale: true,
		widows: true,
		zIndex: true,
		zoom: true,

		// SVG-related
		fillOpacity: true,
		floodOpacity: true,
		stopOpacity: true,
		strokeMiterlimit: true,
		strokeOpacity: true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (trac-7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug trac-9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (trac-7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this
			.on( "mouseenter", fnOver )
			.on( "mouseleave", fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./public/backend/js/katex.min.js":
/*!****************************************!*\
  !*** ./public/backend/js/katex.min.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (e, t) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(this, function () {
  return function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var a = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports;
    }
    return r.m = e, r.c = t, r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: n
      });
    }, r.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"];
      } : function () {
        return e;
      };
      return r.d(t, "a", t), t;
    }, r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 63);
  }([function (e, t, r) {
    "use strict";

    var n = r(57),
      a = r.n(n),
      i = r(18),
      o = r.n(i),
      s = r(12),
      l = r(30),
      u = r(28),
      c = r(5),
      h = r(13),
      p = r(19),
      m = ["\\imath", "\u0131", "\\jmath", "\u0237", "\\pounds", "\\mathsterling", "\\textsterling", "\xa3"],
      d = function d(e, t, r) {
        return u.a[r][e] && u.a[r][e].replace && (e = u.a[r][e].replace), {
          value: e,
          metrics: l.a.getCharacterMetrics(e, t, r)
        };
      },
      f = function f(e, t, r, n, a) {
        var i = d(e, t, r),
          o = i.metrics;
        e = i.value;
        var l = void 0;
        if (o) {
          var u = o.italic;
          "text" === r && (u = 0), l = new s.a.symbolNode(e, o.height, o.depth, u, o.skew, o.width, a);
        } else "undefined" != typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "'"), l = new s.a.symbolNode(e, 0, 0, 0, 0, 0, a);
        if (n) {
          l.maxFontSize = n.sizeMultiplier, n.style.isTight() && l.classes.push("mtight");
          var c = n.getColor();
          c && (l.style.color = c);
        }
        return l;
      },
      v = function v(e, t, r, n, a) {
        if ("mathord" === a) {
          var i = g(e, t, r, n);
          return f(e, i.fontName, t, r, n.concat([i.fontClass]));
        }
        if ("textord" === a) {
          if ("ams" === (u.a[t][e] && u.a[t][e].font)) {
            var o = x("amsrm", r.fontWeight, r.fontShape);
            return f(e, o, t, r, n.concat("amsrm", r.fontWeight, r.fontShape));
          }
          var s = x("textrm", r.fontWeight, r.fontShape);
          return f(e, s, t, r, n.concat(r.fontWeight, r.fontShape));
        }
        throw new Error("unexpected type: " + a + " in mathDefault");
      },
      g = function g(e, t, r, n) {
        return /[0-9]/.test(e.charAt(0)) || c.a.contains(m, e) ? {
          fontName: "Main-Italic",
          fontClass: "mainit"
        } : {
          fontName: "Math-Italic",
          fontClass: "mathit"
        };
      },
      y = function y(e) {
        var t = 0,
          r = 0,
          n = 0,
          a = !0,
          i = !1,
          s = void 0;
        try {
          for (var l, u = o()(e.children); !(a = (l = u.next()).done); a = !0) {
            var c = l.value;
            c.height > t && (t = c.height), c.depth > r && (r = c.depth), c.maxFontSize > n && (n = c.maxFontSize);
          }
        } catch (e) {
          i = !0, s = e;
        } finally {
          try {
            !a && u["return"] && u["return"]();
          } finally {
            if (i) throw s;
          }
        }
        e.height = t, e.depth = r, e.maxFontSize = n;
      },
      b = function b(e, t, r, n) {
        var a = new s.a.span(e, t, r, n);
        return y(a), a;
      },
      x = function x(e, t, r) {
        return w(e) + "-" + k(t, r);
      },
      w = function w(e) {
        var t = "";
        switch (e) {
          case "amsrm":
            t = "AMS";
            break;
          case "textrm":
            t = "Main";
            break;
          case "textsf":
            t = "SansSerif";
            break;
          case "texttt":
            t = "Typewriter";
            break;
          default:
            throw new Error("Invalid font provided: " + e);
        }
        return t;
      },
      k = function k(e, t) {
        var r = "";
        return "textbf" === e && (r += "Bold"), "textit" === t && (r += "Italic"), r || "Regular";
      },
      M = {
        mathbf: {
          variant: "bold",
          fontName: "Main-Bold"
        },
        mathrm: {
          variant: "normal",
          fontName: "Main-Regular"
        },
        textit: {
          variant: "italic",
          fontName: "Main-Italic"
        },
        mathbb: {
          variant: "double-struck",
          fontName: "AMS-Regular"
        },
        mathcal: {
          variant: "script",
          fontName: "Caligraphic-Regular"
        },
        mathfrak: {
          variant: "fraktur",
          fontName: "Fraktur-Regular"
        },
        mathscr: {
          variant: "script",
          fontName: "Script-Regular"
        },
        mathsf: {
          variant: "sans-serif",
          fontName: "SansSerif-Regular"
        },
        mathtt: {
          variant: "monospace",
          fontName: "Typewriter-Regular"
        }
      },
      S = {
        vec: ["vec", .471, .714]
      };
    t.a = {
      fontMap: M,
      makeSymbol: f,
      mathsym: function mathsym(e, t, r) {
        var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [];
        return r && r.fontFamily && "boldsymbol" === r.fontFamily && d(e, "Main-Bold", t).metrics ? f(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === u.a[t][e].font ? f(e, "Main-Regular", t, r, n) : f(e, "AMS-Regular", t, r, n.concat(["amsrm"]));
      },
      makeSpan: b,
      makeLineSpan: function makeLineSpan(e, t) {
        var r = t.fontMetrics().defaultRuleThickness,
          n = h.a.ruleSpan(e, r, t);
        return n.height = r, n.style.height = 5 * n.height + "em", n.maxFontSize = 1, n;
      },
      makeAnchor: function makeAnchor(e, t, r, n) {
        var a = new s.a.anchor(e, t, r, n);
        return y(a), a;
      },
      makeFragment: function makeFragment(e) {
        var t = new s.a.documentFragment(e);
        return y(t), t;
      },
      makeVList: function makeVList(e, t) {
        var r = function (e) {
            if ("individualShift" === e.positionType) {
              for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) {
                var s = -t[i].shift - a - t[i].elem.depth,
                  l = s - (t[i - 1].elem.height + t[i - 1].elem.depth);
                a += s, r.push({
                  type: "kern",
                  size: l
                }), r.push(t[i]);
              }
              return {
                children: r,
                depth: n
              };
            }
            var u = void 0;
            if ("top" === e.positionType) {
              var c = e.positionData,
                h = !0,
                p = !1,
                m = void 0;
              try {
                for (var d, f = o()(e.children); !(h = (d = f.next()).done); h = !0) {
                  var v = d.value;
                  c -= "kern" === v.type ? v.size : v.elem.height + v.elem.depth;
                }
              } catch (e) {
                p = !0, m = e;
              } finally {
                try {
                  !h && f["return"] && f["return"]();
                } finally {
                  if (p) throw m;
                }
              }
              u = c;
            } else if ("bottom" === e.positionType) u = -e.positionData;else {
              var g = e.children[0];
              if ("elem" !== g.type) throw new Error('First child must have type "elem".');
              if ("shift" === e.positionType) u = -g.elem.depth - e.positionData;else {
                if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                u = -g.elem.depth;
              }
            }
            return {
              children: e.children,
              depth: u
            };
          }(e),
          n = r.children,
          a = r.depth,
          i = 0,
          l = !0,
          u = !1,
          c = void 0;
        try {
          for (var h, p = o()(n); !(l = (h = p.next()).done); l = !0) {
            var m = h.value;
            if ("elem" === m.type) {
              var d = m.elem;
              i = Math.max(i, d.maxFontSize, d.height);
            }
          }
        } catch (e) {
          u = !0, c = e;
        } finally {
          try {
            !l && p["return"] && p["return"]();
          } finally {
            if (u) throw c;
          }
        }
        i += 2;
        var f = b(["pstrut"], []);
        f.style.height = i + "em";
        var v = [],
          g = a,
          y = a,
          x = a,
          w = !0,
          k = !1,
          M = void 0;
        try {
          for (var S, z = o()(n); !(w = (S = z.next()).done); w = !0) {
            var O = S.value;
            if ("kern" === O.type) x += O.size;else {
              var T = O.elem,
                A = O.wrapperClasses || [],
                N = O.wrapperStyle || {},
                B = b(A, [f, T], void 0, N);
              B.style.top = -i - x - T.depth + "em", O.marginLeft && (B.style.marginLeft = O.marginLeft), O.marginRight && (B.style.marginRight = O.marginRight), v.push(B), x += T.height + T.depth;
            }
            g = Math.min(g, x), y = Math.max(y, x);
          }
        } catch (e) {
          k = !0, M = e;
        } finally {
          try {
            !w && z["return"] && z["return"]();
          } finally {
            if (k) throw M;
          }
        }
        var q = b(["vlist"], v);
        q.style.height = y + "em";
        var C = void 0;
        if (g < 0) {
          var E = b(["vlist"], []);
          E.style.height = -g + "em";
          var j = b(["vlist-s"], [new s.a.symbolNode("\u200B")]);
          C = [b(["vlist-r"], [q, j]), b(["vlist-r"], [E])];
        } else C = [b(["vlist-r"], [q])];
        var R = b(["vlist-t"], C);
        return 2 === C.length && R.classes.push("vlist-t2"), R.height = y, R.depth = -g, R;
      },
      makeOrd: function makeOrd(e, t, r) {
        var n = e.mode,
          a = e.value,
          i = ["mord"],
          o = t.fontFamily;
        if (o) {
          var s = void 0,
            l = void 0;
          if ("boldsymbol" === o) {
            var u = d(a, "Math-BoldItalic", n).metrics ? {
              fontName: "Math-BoldItalic",
              fontClass: "boldsymbol"
            } : {
              fontName: "Main-Bold",
              fontClass: "mathbf"
            };
            s = u.fontName, l = [u.fontClass];
          } else if ("mathit" === o || c.a.contains(m, a)) {
            var h = g(a, n, t, i);
            s = h.fontName, l = [h.fontClass];
          } else -1 !== o.indexOf("math") || "math" === n ? (s = M[o].fontName, l = [o]) : (s = x(o, t.fontWeight, t.fontShape), l = [o, t.fontWeight, t.fontShape]);
          return d(a, s, n).metrics ? f(a, s, n, t, i.concat(l)) : v(a, n, t, i, r);
        }
        return v(a, n, t, i, r);
      },
      makeVerb: function makeVerb(e, t) {
        var r = e.value.body;
        return r = e.value.star ? r.replace(/ /g, "\u2423") : r.replace(/ /g, "\xa0");
      },
      makeGlue: function makeGlue(e, t) {
        var r = b(["mord", "rule"], [], t),
          n = Object(p.a)(e, t);
        return r.style.marginRight = n + "em", r;
      },
      staticSvg: function staticSvg(e, t) {
        var r = a()(S[e], 3),
          n = r[0],
          i = r[1],
          o = r[2],
          l = new s.a.pathNode(n),
          u = new s.a.svgNode([l], {
            width: i + "em",
            height: o + "em",
            style: "width:" + i + "em",
            viewBox: "0 0 " + 1e3 * i + " " + 1e3 * o,
            preserveAspectRatio: "xMinYMin"
          }),
          c = b(["overlay"], [u], t);
        return c.height = o, c.style.height = o + "em", c.style.width = i + "em", c;
      },
      svgData: S,
      tryCombineChars: function tryCombineChars(e) {
        for (var t = 0; t < e.length - 1; t++) e[t].tryCombine(e[t + 1]) && (e.splice(t + 1, 1), t--);
        return e;
      },
      spacingFunctions: {
        "\\qquad": {
          size: "2em",
          className: "qquad"
        },
        "\\quad": {
          size: "1em",
          className: "quad"
        },
        "\\enspace": {
          size: "0.5em",
          className: "enspace"
        },
        "\\;": {
          size: "0.277778em",
          className: "thickspace"
        },
        "\\:": {
          size: "0.22222em",
          className: "mediumspace"
        },
        "\\,": {
          size: "0.16667em",
          className: "thinspace"
        },
        "\\!": {
          size: "-0.16667em",
          className: "negativethinspace"
        }
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(18),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = r(5),
      c = function () {
        function e(t, r) {
          o()(this, e), this.type = t, this.attributes = {}, this.children = r || [];
        }
        return l()(e, [{
          key: "setAttribute",
          value: function value(e, t) {
            this.attributes[e] = t;
          }
        }, {
          key: "toNode",
          value: function value() {
            var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            var r = !0,
              n = !1,
              i = void 0;
            try {
              for (var o, s = a()(this.children); !(r = (o = s.next()).done); r = !0) {
                var l = o.value;
                e.appendChild(l.toNode());
              }
            } catch (e) {
              n = !0, i = e;
            } finally {
              try {
                !r && s["return"] && s["return"]();
              } finally {
                if (n) throw i;
              }
            }
            return e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            var e = "<" + this.type;
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += u.a.escape(this.attributes[t]), e += '"');
            e += ">";
            for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
            return e += "</" + this.type + ">";
          }
        }, {
          key: "toText",
          value: function value() {
            return "mspace" === this.type ? "0.16667em" === this.attributes.width ? "\u2006" : " " : this.children.map(function (e) {
              return e.toText();
            }).join("");
          }
        }]), e;
      }(),
      h = function () {
        function e(t) {
          o()(this, e), this.text = t;
        }
        return l()(e, [{
          key: "toNode",
          value: function value() {
            return document.createTextNode(this.text);
          }
        }, {
          key: "toMarkup",
          value: function value() {
            return u.a.escape(this.text);
          }
        }, {
          key: "toText",
          value: function value() {
            return this.text;
          }
        }]), e;
      }();
    t.a = {
      MathNode: c,
      TextNode: h
    };
  }, function (e, t, r) {
    "use strict";

    r.d(t, "e", function () {
      return h;
    }), r.d(t, "d", function () {
      return m;
    }), r.d(t, "a", function () {
      return f;
    }), r.d(t, "b", function () {
      return v;
    }), t.c = function (e, t, r) {
      var a = f(e, r),
        o = new i.a.MathNode("mrow", a),
        s = new i.a.MathNode("annotation", [new i.a.TextNode(t)]);
      s.setAttribute("encoding", "application/x-tex");
      var l = new i.a.MathNode("semantics", [o, s]),
        u = new i.a.MathNode("math", [l]);
      return n.a.makeSpan(["katex-mathml"], [u]);
    };
    var n = r(0),
      a = r(30),
      i = r(1),
      o = r(6),
      s = r(9),
      l = r(28),
      u = r(5),
      c = r(13),
      h = function h(e, t) {
        return l.a[t][e] && l.a[t][e].replace && (e = l.a[t][e].replace), new i.a.TextNode(e);
      },
      p = function p(e, t) {
        var r = t.fontFamily;
        if (!r) return null;
        var i = e.mode;
        if ("mathit" === r) return "italic";
        if ("boldsymbol" === r) return "bold-italic";
        var o = e.value;
        if (u.a.contains(["\\imath", "\\jmath"], o)) return null;
        l.a[i][o] && l.a[i][o].replace && (o = l.a[i][o].replace);
        var s = n.a.fontMap[r].fontName;
        return a.a.getCharacterMetrics(o, s, i) ? n.a.fontMap[r].variant : null;
      },
      m = {},
      d = {
        mi: "italic",
        mn: "normal",
        mtext: "normal"
      };
    m.mathord = function (e, t) {
      var r = new i.a.MathNode("mi", [h(e.value, e.mode)]),
        n = p(e, t) || "italic";
      return n !== d[r.type] && r.setAttribute("mathvariant", n), r;
    }, m.textord = function (e, t) {
      var r = h(e.value, e.mode),
        n = p(e, t) || "normal",
        a = void 0;
      return a = "text" === e.mode ? new i.a.MathNode("mtext", [r]) : /[0-9]/.test(e.value) ? new i.a.MathNode("mn", [r]) : "\\prime" === e.value ? new i.a.MathNode("mo", [r]) : new i.a.MathNode("mi", [r]), n !== d[a.type] && a.setAttribute("mathvariant", n), a;
    }, m.bin = function (e, t) {
      var r = new i.a.MathNode("mo", [h(e.value, e.mode)]),
        n = p(e, t);
      return "bold-italic" === n && r.setAttribute("mathvariant", n), r;
    }, m.rel = function (e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)]);
    }, m.open = function (e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)]);
    }, m.close = function (e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)]);
    }, m.inner = function (e) {
      return new i.a.MathNode("mo", [h(e.value, e.mode)]);
    }, m.punct = function (e) {
      var t = new i.a.MathNode("mo", [h(e.value, e.mode)]);
      return t.setAttribute("separator", "true"), t;
    }, m.ordgroup = function (e, t) {
      var r = f(e.value, t);
      return new i.a.MathNode("mrow", r);
    }, m.supsub = function (e, t) {
      var r = !1,
        n = void 0;
      e.value.base && "horizBrace" === e.value.base.value.type && !!e.value.sup === e.value.base.value.isOver && (r = !0, n = e.value.base.value.isOver);
      var a = [v(e.value.base, t, !0)];
      e.value.sub && a.push(v(e.value.sub, t, !0)), e.value.sup && a.push(v(e.value.sup, t, !0));
      var o = void 0;
      if (r) o = n ? "mover" : "munder";else if (e.value.sub) {
        if (e.value.sup) {
          var l = e.value.base;
          o = l && l.value.limits && t.style === s.a.DISPLAY ? "munderover" : "msubsup";
        } else {
          var u = e.value.base;
          o = u && u.value.limits && t.style === s.a.DISPLAY ? "munder" : "msub";
        }
      } else {
        var c = e.value.base;
        o = c && c.value.limits && t.style === s.a.DISPLAY ? "mover" : "msup";
      }
      return new i.a.MathNode(o, a);
    }, m.spacing = function (e) {
      var t = void 0;
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? t = new i.a.MathNode("mtext", [new i.a.TextNode("\xa0")]) : (t = new i.a.MathNode("mspace")).setAttribute("width", n.a.spacingFunctions[e.value].size), t;
    }, m.horizBrace = function (e, t) {
      var r = c.a.mathMLnode(e.value.label);
      return new i.a.MathNode(e.value.isOver ? "mover" : "munder", [v(e.value.base, t), r]);
    }, m.xArrow = function (e, t) {
      var r = c.a.mathMLnode(e.value.label),
        n = void 0,
        a = void 0;
      if (e.value.body) {
        var o = v(e.value.body, t);
        e.value.below ? (a = v(e.value.below, t), n = new i.a.MathNode("munderover", [r, a, o])) : n = new i.a.MathNode("mover", [r, o]);
      } else e.value.below ? (a = v(e.value.below, t), n = new i.a.MathNode("munder", [r, a])) : n = new i.a.MathNode("mover", [r]);
      return n;
    }, m.mclass = function (e, t) {
      var r = f(e.value.value, t);
      return new i.a.MathNode("mstyle", r);
    }, m.raisebox = function (e, t) {
      var r = new i.a.MathNode("mpadded", [v(e.value.body, t)]),
        n = e.value.dy.value.number + e.value.dy.value.unit;
      return r.setAttribute("voffset", n), r;
    };
    var f = function f(e, t) {
        for (var r = [], n = 0; n < e.length; n++) {
          var a = e[n];
          r.push(v(a, t));
        }
        return r;
      },
      v = function v(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e) return new i.a.MathNode("mrow");
        if (m[e.type]) {
          var n = m[e.type](e, t);
          return r && "mrow" === n.type && 1 === n.children.length ? n.children[0] : n;
        }
        throw new o.a("Got group of unknown type: '" + e.type + "'");
      };
  }, function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return i;
    }), t.b = function (e) {
      for (var t = e.type, r = e.names, o = e.props, s = e.handler, l = e.htmlBuilder, u = e.mathmlBuilder, c = {
          numArgs: o.numArgs,
          argTypes: o.argTypes,
          greediness: void 0 === o.greediness ? 1 : o.greediness,
          allowedInText: !!o.allowedInText,
          allowedInMath: void 0 === o.allowedInMath || o.allowedInMath,
          numOptionalArgs: o.numOptionalArgs || 0,
          infix: !!o.infix,
          handler: s
        }, h = 0; h < r.length; ++h) i[r[h]] = c;
      t && (l && (n.d[t] = l), u && (a.d[t] = u));
    }, r.d(t, "c", function () {
      return o;
    });
    var n = r(4),
      a = r(2),
      i = {};
    var o = function o(e) {
      return "ordgroup" === e.type ? e.value : [e];
    };
  }, function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return g;
    }), r.d(t, "e", function () {
      return w;
    }), r.d(t, "d", function () {
      return k;
    }), r.d(t, "b", function () {
      return M;
    }), t.c = function (e, t) {
      e = JSON.parse(a()(e));
      var r = g(e, t, !0),
        n = f(["base"], r, t),
        i = f(["strut"]),
        o = f(["strut", "bottom"]);
      i.style.height = n.height + "em", o.style.height = n.height + n.depth + "em", o.style.verticalAlign = -n.depth + "em";
      var s = f(["katex-html"], [i, o, n]);
      return s.setAttribute("aria-hidden", "true"), s;
    };
    var n = r(77),
      a = r.n(n),
      i = r(35),
      o = r.n(i),
      s = r(6),
      l = r(9),
      u = r(0),
      c = r(12),
      h = r(19),
      p = r(5),
      m = r(13),
      d = r(112),
      f = u.a.makeSpan,
      v = {
        display: l.a.DISPLAY,
        text: l.a.TEXT,
        script: l.a.SCRIPT,
        scriptscript: l.a.SCRIPTSCRIPT
      },
      g = function g(e, t, r) {
        for (var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [null, null], a = [], i = 0; i < e.length; i++) {
          var s = e[i],
            l = M(s, t);
          l instanceof c.a.documentFragment ? a.push.apply(a, o()(l.children)) : a.push(l);
        }
        for (var h, m, g, w, k = [n[0] && f([n[0]], [], t)].concat(o()(a.filter(function (e) {
            return e && "mspace" !== e.classes[0];
          })), [n[1] && f([n[1]], [], t)]), S = 1; S < k.length - 1; S++) {
          var z = y(k[S], "left");
          "mbin" === z.classes[0] && (g = k[S - 1], w = r, g ? p.a.contains(["mbin", "mopen", "mrel", "mop", "mpunct"], b(g, "right")) : w) && (z.classes[0] = "mord");
          var O = y(k[S], "right");
          "mbin" === O.classes[0] && (h = k[S + 1], m = r, h ? p.a.contains(["mrel", "mclose", "mpunct"], b(h, "left")) : m) && (O.classes[0] = "mord");
        }
        for (var T = [], A = 0, N = 0; N < a.length; N++) if (T.push(a[N]), "mspace" !== a[N].classes[0] && A < k.length - 1) {
          0 === A && (T.pop(), N--);
          var B = b(k[A], "right"),
            q = b(k[A + 1], "left");
          if (B && q && r) {
            var C = x(k[A + 1]) ? d.b[B][q] : d.a[B][q];
            if (C) {
              var E = t;
              1 === e.length && ("sizing" === e[0].type ? E = t.havingSize(e[0].value.size) : "styling" === e[0].type && (E = t.havingStyle(v[e[0].value.style]))), T.push(u.a.makeGlue(C, E));
            }
          }
          A++;
        }
        for (var j = 0; j < T.length; j++) "\u0338" === T[j].value && (T[j].style.position = "absolute", T[j].style.paddingLeft = "0.8em");
        return T;
      },
      y = function e(t) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
        if ((t instanceof c.a.documentFragment || t instanceof c.a.anchor) && t.children.length) {
          if ("right" === r) return e(t.children[t.children.length - 1]);
          if ("left" === r) return e(t.children[0]);
        }
        return t;
      },
      b = function b(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "right";
        return e ? (e = y(e, t), p.a.contains(["mord", "mop", "mbin", "mrel", "mopen", "mclose", "mpunct", "minner"], e.classes[0]) ? e.classes[0] : null) : null;
      },
      x = function x(e) {
        return e = y(e, "left"), p.a.contains(e.classes, "mtight");
      },
      w = function w(e, t) {
        var r = ["nulldelimiter"].concat(e.baseSizingClasses());
        return f(t.concat(r));
      },
      k = {
        mathord: function mathord(e, t) {
          return u.a.makeOrd(e, t, "mathord");
        },
        textord: function textord(e, t) {
          return u.a.makeOrd(e, t, "textord");
        },
        bin: function bin(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mbin"]);
        },
        rel: function rel(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mrel"]);
        },
        open: function open(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mopen"]);
        },
        close: function close(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mclose"]);
        },
        inner: function inner(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["minner"]);
        },
        punct: function punct(e, t) {
          return u.a.mathsym(e.value, e.mode, t, ["mpunct"]);
        },
        ordgroup: function ordgroup(e, t) {
          return f(["mord"], g(e.value, t, !0), t);
        }
      };
    k.supsub = function (e, t) {
      if (function (e, t) {
        if (e.value.base) {
          var r = e.value.base;
          return "op" === r.type ? r.value.limits && (t.style.size === l.a.DISPLAY.size || r.value.alwaysHandleSupSub) : "accent" === r.type ? p.a.isCharacterBox(r.value.base) : "horizBrace" === r.type ? !e.value.sub === r.value.isOver : null;
        }
        return !1;
      }(e, t)) return k[e.value.base.type](e, t);
      var r = M(e.value.base, t),
        n = void 0,
        a = void 0,
        i = t.fontMetrics(),
        o = void 0,
        s = 0,
        h = 0;
      e.value.sup && (o = t.havingStyle(t.style.sup()), n = M(e.value.sup, o, t), p.a.isCharacterBox(e.value.base) || (s = r.height - o.fontMetrics().supDrop * o.sizeMultiplier / t.sizeMultiplier)), e.value.sub && (o = t.havingStyle(t.style.sub()), a = M(e.value.sub, o, t), p.a.isCharacterBox(e.value.base) || (h = r.depth + o.fontMetrics().subDrop * o.sizeMultiplier / t.sizeMultiplier));
      var m = void 0;
      m = t.style === l.a.DISPLAY ? i.sup1 : t.style.cramped ? i.sup3 : i.sup2;
      var d = t.sizeMultiplier,
        v = .5 / i.ptPerEm / d + "em",
        g = void 0;
      if (e.value.sup) {
        if (e.value.sub) {
          s = Math.max(s, m, n.depth + .25 * i.xHeight), h = Math.max(h, i.sub2);
          var y = i.defaultRuleThickness;
          if (s - n.depth - (a.height - h) < 4 * y) {
            h = 4 * y - (s - n.depth) + a.height;
            var x = .8 * i.xHeight - (s - n.depth);
            x > 0 && (s += x, h -= x);
          }
          var w = [{
            type: "elem",
            elem: a,
            shift: h,
            marginRight: v
          }, {
            type: "elem",
            elem: n,
            shift: -s,
            marginRight: v
          }];
          r instanceof c.a.symbolNode && (w[0].marginLeft = -r.italic + "em"), g = u.a.makeVList({
            positionType: "individualShift",
            children: w
          }, t);
        } else s = Math.max(s, m, n.depth + .25 * i.xHeight), g = u.a.makeVList({
          positionType: "shift",
          positionData: -s,
          children: [{
            type: "elem",
            elem: n,
            marginRight: v
          }]
        }, t);
      } else {
        h = Math.max(h, i.sub1, a.height - .8 * i.xHeight);
        var S = [{
          type: "elem",
          elem: a,
          marginRight: v
        }];
        r instanceof c.a.symbolNode && (S[0].marginLeft = -r.italic + "em"), g = u.a.makeVList({
          positionType: "shift",
          positionData: h,
          children: S
        }, t);
      }
      var z = b(r) || "mord";
      return f([z], [r, f(["msupsub"], [g])], t);
    }, k.spacing = function (e, t) {
      return "\\ " === e.value || "\\space" === e.value || " " === e.value || "~" === e.value ? "text" === e.mode ? u.a.makeOrd(e, t, "textord") : f(["mspace"], [u.a.mathsym(e.value, e.mode, t)], t) : f(["mspace", u.a.spacingFunctions[e.value].className], [], t);
    }, k.horizBrace = function (e, t) {
      var r = t.style,
        n = "supsub" === e.type,
        a = void 0,
        i = void 0;
      n && (e.value.sup ? (i = t.havingStyle(r.sup()), a = M(e.value.sup, i, t)) : (i = t.havingStyle(r.sub()), a = M(e.value.sub, i, t)), e = e.value.base);
      var o = M(e.value.base, t.havingBaseStyle(l.a.DISPLAY)),
        s = m.a.svgSpan(e, t),
        c = void 0;
      if (e.value.isOver ? (c = u.a.makeVList({
        positionType: "firstBaseline",
        children: [{
          type: "elem",
          elem: o
        }, {
          type: "kern",
          size: .1
        }, {
          type: "elem",
          elem: s
        }]
      }, t)).children[0].children[0].children[1].classes.push("svg-align") : (c = u.a.makeVList({
        positionType: "bottom",
        positionData: o.depth + .1 + s.height,
        children: [{
          type: "elem",
          elem: s
        }, {
          type: "kern",
          size: .1
        }, {
          type: "elem",
          elem: o
        }]
      }, t)).children[0].children[0].children[0].classes.push("svg-align"), n) {
        var h = f(["mord", e.value.isOver ? "mover" : "munder"], [c], t);
        c = e.value.isOver ? u.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: h
          }, {
            type: "kern",
            size: .2
          }, {
            type: "elem",
            elem: a
          }]
        }, t) : u.a.makeVList({
          positionType: "bottom",
          positionData: h.depth + .2 + a.height,
          children: [{
            type: "elem",
            elem: a
          }, {
            type: "kern",
            size: .2
          }, {
            type: "elem",
            elem: h
          }]
        }, t);
      }
      return f(["mord", e.value.isOver ? "mover" : "munder"], [c], t);
    }, k.xArrow = function (e, t) {
      var r = t.style,
        n = t.havingStyle(r.sup()),
        a = M(e.value.body, n, t);
      a.classes.push("x-arrow-pad");
      var i = void 0;
      e.value.below && (n = t.havingStyle(r.sub()), (i = M(e.value.below, n, t)).classes.push("x-arrow-pad"));
      var o = m.a.svgSpan(e, t),
        s = -t.fontMetrics().axisHeight + .5 * o.height,
        l = -t.fontMetrics().axisHeight - .5 * o.height - .111;
      "\\xleftequilibrium" === e.value.label && (l -= a.depth);
      var c = void 0;
      if (e.value.below) {
        var h = -t.fontMetrics().axisHeight + i.height + .5 * o.height + .111;
        c = u.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: a,
            shift: l
          }, {
            type: "elem",
            elem: o,
            shift: s
          }, {
            type: "elem",
            elem: i,
            shift: h
          }]
        }, t);
      } else c = u.a.makeVList({
        positionType: "individualShift",
        children: [{
          type: "elem",
          elem: a,
          shift: l
        }, {
          type: "elem",
          elem: o,
          shift: s
        }]
      }, t);
      return c.children[0].children[0].children[1].classes.push("svg-align"), f(["mrel", "x-arrow"], [c], t);
    }, k.mclass = function (e, t) {
      var r = g(e.value.value, t, !0);
      return f([e.value.mclass], r, t);
    }, k.raisebox = function (e, t) {
      var r = k.sizing({
          value: {
            value: [{
              type: "text",
              value: {
                body: e.value.value,
                font: "mathrm"
              }
            }],
            size: 6
          }
        }, t),
        n = Object(h.a)(e.value.dy.value, t);
      return u.a.makeVList({
        positionType: "shift",
        positionData: -n,
        children: [{
          type: "elem",
          elem: r
        }]
      }, t);
    };
    var M = function M(e, t, r) {
      if (!e) return f();
      if (k[e.type]) {
        var n = k[e.type](e, t);
        if (r && t.size !== r.size) {
          n = f(t.sizingClasses(r), [n], t);
          var a = t.sizeMultiplier / r.sizeMultiplier;
          n.height *= a, n.depth *= a;
        }
        return n;
      }
      throw new s.a("Got group of unknown type: '" + e.type + "'");
    };
  }, function (e, t, r) {
    "use strict";

    var n = Array.prototype.indexOf,
      a = function a(e, t) {
        if (null == e) return -1;
        if (n && e.indexOf === n) return e.indexOf(t);
        for (var r = e.length, a = 0; a < r; a++) if (e[a] === t) return a;
        return -1;
      },
      i = /([A-Z])/g,
      o = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        '"': "&quot;",
        "'": "&#x27;"
      },
      s = /[&><"']/g;
    var l = void 0;
    if ("undefined" != typeof document) {
      var u = document.createElement("span");
      l = "textContent" in u ? function (e, t) {
        e.textContent = t;
      } : function (e, t) {
        e.innerText = t;
      };
    }
    var c = function e(t) {
      return !!t && ("ordgroup" === t.type ? 1 === t.value.length ? e(t.value[0]) : t : "color" === t.type ? 1 === t.value.value.length ? e(t.value.value[0]) : t : "font" === t.type ? e(t.value.body) : t);
    };
    t.a = {
      contains: function contains(e, t) {
        return -1 !== a(e, t);
      },
      deflt: function deflt(e, t) {
        return void 0 === e ? t : e;
      },
      escape: function escape(e) {
        return String(e).replace(s, function (e) {
          return o[e];
        });
      },
      hyphenate: function hyphenate(e) {
        return e.replace(i, "-$1").toLowerCase();
      },
      indexOf: a,
      setTextContent: l,
      clearNode: function clearNode(e) {
        l(e, "");
      },
      getBaseElem: c,
      isCharacterBox: function isCharacterBox(e) {
        var t = c(e);
        return "mathord" === t.type || "textord" === t.type || "bin" === t.type || "rel" === t.type || "inner" === t.type || "open" === t.type || "close" === t.type || "punct" === t.type;
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
      a = r.n(n),
      i = (r(14), r(27), function e(t, r) {
        a()(this, e);
        var n = "KaTeX parse error: " + t,
          i = void 0,
          o = r && r.loc;
        if (o && o.start <= o.end) {
          var s = o.lexer.input;
          i = o.start;
          var l = o.end;
          i === s.length ? n += " at end of input: " : n += " at position " + (i + 1) + ": ";
          var u = s.slice(i, l).replace(/[^]/g, "$&\u0332");
          n += (i > 15 ? "\u2026" + s.slice(i - 15, i) : s.slice(0, i)) + u + (l + 15 < s.length ? s.slice(l, l + 15) + "\u2026" : s.slice(l));
        }
        var c = new Error(n);
        return c.name = "ParseError", c.__proto__ = e.prototype, c.position = i, c;
      });
    i.prototype.__proto__ = Error.prototype, t.a = i;
  }, function (e, t, r) {
    "use strict";

    t.__esModule = !0, t["default"] = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    };
  }, function (e, t) {
    var r = e.exports = {
      version: "2.4.0"
    };
    "number" == typeof __e && (__e = r);
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = function () {
        function e(t, r, n) {
          a()(this, e), this.id = t, this.size = r, this.cramped = n;
        }
        return o()(e, [{
          key: "sup",
          value: function value() {
            return l[u[this.id]];
          }
        }, {
          key: "sub",
          value: function value() {
            return l[c[this.id]];
          }
        }, {
          key: "fracNum",
          value: function value() {
            return l[h[this.id]];
          }
        }, {
          key: "fracDen",
          value: function value() {
            return l[p[this.id]];
          }
        }, {
          key: "cramp",
          value: function value() {
            return l[m[this.id]];
          }
        }, {
          key: "text",
          value: function value() {
            return l[d[this.id]];
          }
        }, {
          key: "isTight",
          value: function value() {
            return this.size >= 2;
          }
        }]), e;
      }(),
      l = [new s(0, 0, !1), new s(1, 0, !0), new s(2, 1, !1), new s(3, 1, !0), new s(4, 2, !1), new s(5, 2, !0), new s(6, 3, !1), new s(7, 3, !0)],
      u = [4, 5, 4, 5, 6, 7, 6, 7],
      c = [5, 5, 5, 5, 7, 7, 7, 7],
      h = [2, 3, 4, 5, 6, 7, 6, 7],
      p = [3, 3, 5, 5, 7, 7, 7, 7],
      m = [1, 1, 3, 3, 5, 5, 7, 7],
      d = [0, 1, 2, 3, 2, 3, 2, 3];
    t.a = {
      DISPLAY: l[0],
      TEXT: l[2],
      SCRIPT: l[4],
      SCRIPTSCRIPT: l[6]
    };
  }, function (e, t, r) {
    "use strict";

    t.__esModule = !0;
    var n,
      a = r(73),
      i = (n = a) && n.__esModule ? n : {
        "default": n
      };
    t["default"] = function () {
      function e(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), (0, i["default"])(e, n.key, n);
        }
      }
      return function (t, r, n) {
        return r && e(t.prototype, r), n && e(t, n), t;
      };
    }();
  }, function (e, t, r) {
    var n = r(52)("wks"),
      a = r(32),
      i = r(16).Symbol,
      o = "function" == typeof i;
    (e.exports = function (e) {
      return n[e] || (n[e] = o && i[e] || (o ? i : a)("Symbol." + e));
    }).store = n;
  }, function (e, t, r) {
    "use strict";

    var n = r(18),
      a = r.n(n),
      i = r(105),
      o = r.n(i),
      s = r(7),
      l = r.n(s),
      u = r(10),
      c = r.n(u),
      h = r(42),
      p = r(5),
      m = r(111),
      d = function d(e) {
        for (var t = (e = e.slice()).length - 1; t >= 0; t--) e[t] || e.splice(t, 1);
        return e.join(" ");
      },
      f = function () {
        function e(t, r, n, a) {
          if (l()(this, e), this.classes = t || [], this.children = r || [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = o()({}, a), this.attributes = {}, n) {
            n.style.isTight() && this.classes.push("mtight");
            var i = n.getColor();
            i && (this.style.color = i);
          }
        }
        return c()(e, [{
          key: "setAttribute",
          value: function value(e, t) {
            this.attributes[e] = t;
          }
        }, {
          key: "tryCombine",
          value: function value(e) {
            return !1;
          }
        }, {
          key: "toNode",
          value: function value() {
            var e = document.createElement("span");
            e.className = d(this.classes);
            for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
            for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
            return e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            var e = "<span";
            this.classes.length && (e += ' class="', e += p.a.escape(d(this.classes)), e += '"');
            var t = "";
            for (var r in this.style) this.style.hasOwnProperty(r) && (t += p.a.hyphenate(r) + ":" + this.style[r] + ";");
            t && (e += ' style="' + p.a.escape(t) + '"');
            for (var n in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="', e += p.a.escape(this.attributes[n]), e += '"');
            e += ">";
            for (var a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
            return e += "</span>";
          }
        }]), e;
      }(),
      v = function () {
        function e(t, r, n, a) {
          l()(this, e), this.href = t, this.classes = r, this.children = n, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}, this.attributes = {}, a.style.isTight() && this.classes.push("mtight");
          var i = a.getColor();
          i && (this.style.color = i);
        }
        return c()(e, [{
          key: "setAttribute",
          value: function value(e, t) {
            this.attributes[e] = t;
          }
        }, {
          key: "tryCombine",
          value: function value(e) {
            return !1;
          }
        }, {
          key: "toNode",
          value: function value() {
            var e = document.createElement("a");
            e.setAttribute("href", this.href), this.classes.length && (e.className = d(this.classes));
            for (var t in this.style) Object.prototype.hasOwnProperty.call(this.style, t) && (e.style[t] = this.style[t]);
            for (var r in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, r) && e.setAttribute(r, this.attributes[r]);
            for (var n = 0; n < this.children.length; n++) e.appendChild(this.children[n].toNode());
            return e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            var e = "<a";
            e += 'href="' + (e += p.a.escape(this.href)) + '"', this.classes.length && (e += ' class="' + p.a.escape(d(this.classes)) + '"');
            var t = "";
            for (var r in this.style) this.style.hasOwnProperty(r) && (t += p.a.hyphenate(r) + ":" + this.style[r] + ";");
            t && (e += ' style="' + p.a.escape(t) + '"');
            for (var n in this.attributes) "href" !== n && Object.prototype.hasOwnProperty.call(this.attributes, n) && (e += " " + n + '="' + p.a.escape(this.attributes[n]) + '"');
            e += ">";
            var i = !0,
              o = !1,
              s = void 0;
            try {
              for (var l, u = a()(this.children); !(i = (l = u.next()).done); i = !0) {
                e += l.value.toMarkup();
              }
            } catch (e) {
              o = !0, s = e;
            } finally {
              try {
                !i && u["return"] && u["return"]();
              } finally {
                if (o) throw s;
              }
            }
            return e += "</a>";
          }
        }]), e;
      }(),
      g = function () {
        function e(t) {
          l()(this, e), this.children = t || [], this.height = 0, this.depth = 0, this.maxFontSize = 0;
        }
        return c()(e, [{
          key: "toNode",
          value: function value() {
            for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
            return e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
            return e;
          }
        }]), e;
      }(),
      y = {
        "\xee": "\u0131\u0302",
        "\xef": "\u0131\u0308",
        "\xed": "\u0131\u0301",
        "\xec": "\u0131\u0300"
      },
      b = function () {
        function e(t, r, n, a, i, s, u, c) {
          l()(this, e), this.value = t, this.height = r || 0, this.depth = n || 0, this.italic = a || 0, this.skew = i || 0, this.width = s || 0, this.classes = u || [], this.style = o()({}, c), this.maxFontSize = 0;
          var p = Object(h.a)(this.value.charCodeAt(0));
          p && this.classes.push(p + "_fallback"), /[\xee\xef\xed\xec]/.test(this.value) && (this.value = y[this.value]);
        }
        return c()(e, [{
          key: "tryCombine",
          value: function value(t) {
            if (!t || !(t instanceof e) || this.italic > 0 || d(this.classes) !== d(t.classes) || this.skew !== t.skew || this.maxFontSize !== t.maxFontSize) return !1;
            for (var r in this.style) if (this.style.hasOwnProperty(r) && this.style[r] !== t.style[r]) return !1;
            for (var n in t.style) if (t.style.hasOwnProperty(n) && this.style[n] !== t.style[n]) return !1;
            return this.value += t.value, this.height = Math.max(this.height, t.height), this.depth = Math.max(this.depth, t.depth), this.italic = t.italic, !0;
          }
        }, {
          key: "toNode",
          value: function value() {
            var e = document.createTextNode(this.value),
              t = null;
            this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement("span")).className = d(this.classes));
            for (var r in this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]);
            return t ? (t.appendChild(e), t) : e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            var e = !1,
              t = "<span";
            this.classes.length && (e = !0, t += ' class="', t += p.a.escape(d(this.classes)), t += '"');
            var r = "";
            this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
            for (var n in this.style) this.style.hasOwnProperty(n) && (r += p.a.hyphenate(n) + ":" + this.style[n] + ";");
            r && (e = !0, t += ' style="' + p.a.escape(r) + '"');
            var a = p.a.escape(this.value);
            return e ? (t += ">", t += a, t += "</span>") : a;
          }
        }]), e;
      }(),
      x = function () {
        function e(t, r) {
          l()(this, e), this.children = t || [], this.attributes = r || {}, this.height = 0, this.depth = 0, this.maxFontSize = 0;
        }
        return c()(e, [{
          key: "toNode",
          value: function value() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
            return e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            var e = "<svg";
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
            e += ">";
            for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
            return e += "</svg>";
          }
        }]), e;
      }(),
      w = function () {
        function e(t, r) {
          l()(this, e), this.pathName = t, this.alternate = r;
        }
        return c()(e, [{
          key: "toNode",
          value: function value() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", m.a.path[this.pathName]), e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + m.a.path[this.pathName] + "'/>";
          }
        }]), e;
      }(),
      k = function () {
        function e(t) {
          l()(this, e), this.attributes = t || {};
        }
        return c()(e, [{
          key: "toNode",
          value: function value() {
            var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
            return e;
          }
        }, {
          key: "toMarkup",
          value: function value() {
            var e = "<line";
            for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
            return e += "/>";
          }
        }]), e;
      }();
    t.a = {
      span: f,
      anchor: v,
      documentFragment: g,
      symbolNode: b,
      svgNode: x,
      pathNode: w,
      lineNode: k
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(57),
      a = r.n(n),
      i = r(12),
      o = r(0),
      s = r(1),
      l = r(5),
      u = {
        widehat: "^",
        widetilde: "~",
        utilde: "~",
        overleftarrow: "\u2190",
        underleftarrow: "\u2190",
        xleftarrow: "\u2190",
        overrightarrow: "\u2192",
        underrightarrow: "\u2192",
        xrightarrow: "\u2192",
        underbrace: "\u23B5",
        overbrace: "\u23DE",
        overleftrightarrow: "\u2194",
        underleftrightarrow: "\u2194",
        xleftrightarrow: "\u2194",
        Overrightarrow: "\u21D2",
        xRightarrow: "\u21D2",
        overleftharpoon: "\u21BC",
        xleftharpoonup: "\u21BC",
        overrightharpoon: "\u21C0",
        xrightharpoonup: "\u21C0",
        xLeftarrow: "\u21D0",
        xLeftrightarrow: "\u21D4",
        xhookleftarrow: "\u21A9",
        xhookrightarrow: "\u21AA",
        xmapsto: "\u21A6",
        xrightharpoondown: "\u21C1",
        xleftharpoondown: "\u21BD",
        xrightleftharpoons: "\u21CC",
        xleftrightharpoons: "\u21CB",
        xtwoheadleftarrow: "\u219E",
        xtwoheadrightarrow: "\u21A0",
        xlongequal: "=",
        xtofrom: "\u21C4",
        xrightleftarrows: "\u21C4",
        xrightequilibrium: "\u21CC",
        xleftequilibrium: "\u21CB"
      },
      c = {
        overrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
        overleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
        underrightarrow: [["rightarrow"], .888, 522, "xMaxYMin"],
        underleftarrow: [["leftarrow"], .888, 522, "xMinYMin"],
        xrightarrow: [["rightarrow"], 1.469, 522, "xMaxYMin"],
        xleftarrow: [["leftarrow"], 1.469, 522, "xMinYMin"],
        Overrightarrow: [["doublerightarrow"], .888, 560, "xMaxYMin"],
        xRightarrow: [["doublerightarrow"], 1.526, 560, "xMaxYMin"],
        xLeftarrow: [["doubleleftarrow"], 1.526, 560, "xMinYMin"],
        overleftharpoon: [["leftharpoon"], .888, 522, "xMinYMin"],
        xleftharpoonup: [["leftharpoon"], .888, 522, "xMinYMin"],
        xleftharpoondown: [["leftharpoondown"], .888, 522, "xMinYMin"],
        overrightharpoon: [["rightharpoon"], .888, 522, "xMaxYMin"],
        xrightharpoonup: [["rightharpoon"], .888, 522, "xMaxYMin"],
        xrightharpoondown: [["rightharpoondown"], .888, 522, "xMaxYMin"],
        xlongequal: [["longequal"], .888, 334, "xMinYMin"],
        xtwoheadleftarrow: [["twoheadleftarrow"], .888, 334, "xMinYMin"],
        xtwoheadrightarrow: [["twoheadrightarrow"], .888, 334, "xMaxYMin"],
        overleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
        overbrace: [["leftbrace", "midbrace", "rightbrace"], 1.6, 548],
        underbrace: [["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548],
        underleftrightarrow: [["leftarrow", "rightarrow"], .888, 522],
        xleftrightarrow: [["leftarrow", "rightarrow"], 1.75, 522],
        xLeftrightarrow: [["doubleleftarrow", "doublerightarrow"], 1.75, 560],
        xrightleftharpoons: [["leftharpoondownplus", "rightharpoonplus"], 1.75, 716],
        xleftrightharpoons: [["leftharpoonplus", "rightharpoondownplus"], 1.75, 716],
        xhookleftarrow: [["leftarrow", "righthook"], 1.08, 522],
        xhookrightarrow: [["lefthook", "rightarrow"], 1.08, 522],
        overlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
        underlinesegment: [["leftlinesegment", "rightlinesegment"], .888, 522],
        overgroup: [["leftgroup", "rightgroup"], .888, 342],
        undergroup: [["leftgroupunder", "rightgroupunder"], .888, 342],
        xmapsto: [["leftmapsto", "rightarrow"], 1.5, 522],
        xtofrom: [["leftToFrom", "rightToFrom"], 1.75, 528],
        xrightleftarrows: [["baraboveleftarrow", "rightarrowabovebar"], 1.75, 667],
        xrightequilibrium: [["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716],
        xleftequilibrium: [["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716]
      },
      h = function h(e) {
        return "ordgroup" === e.type ? e.value.length : 1;
      };
    t.a = {
      encloseSpan: function encloseSpan(e, t, r, n) {
        var a = void 0,
          s = e.height + e.depth + 2 * r;
        if (/fbox|color/.test(t)) {
          if (a = o.a.makeSpan(["stretchy", t], [], n), "fbox" === t) {
            var l = n.color && n.getColor();
            l && (a.style.borderColor = l);
          }
        } else {
          var u = [];
          /^[bx]cancel$/.test(t) && u.push(new i.a.lineNode({
            x1: "0",
            y1: "0",
            x2: "100%",
            y2: "100%",
            "stroke-width": "0.046em"
          })), /^x?cancel$/.test(t) && u.push(new i.a.lineNode({
            x1: "0",
            y1: "100%",
            x2: "100%",
            y2: "0",
            "stroke-width": "0.046em"
          }));
          var c = new i.a.svgNode(u, {
            width: "100%",
            height: s + "em"
          });
          a = o.a.makeSpan([], [c], n);
        }
        return a.height = s, a.style.height = s + "em", a;
      },
      mathMLnode: function mathMLnode(e) {
        var t = new s.a.MathNode("mo", [new s.a.TextNode(u[e.substr(1)])]);
        return t.setAttribute("stretchy", "true"), t;
      },
      ruleSpan: function ruleSpan(e, t, r) {
        var n = void 0,
          a = void 0,
          s = "stretchy";
        return "vertical-separator" === e ? (n = new i.a.pathNode("vertSeparator"), a = new i.a.svgNode([n], {
          width: "0.25em",
          height: "400em",
          viewBox: "0 0 250 400000",
          preserveAspectRatio: "xMinYMin slice"
        }), s = "vertical-separator") : (n = new i.a.pathNode("stdHorizRule"), a = new i.a.svgNode([n], {
          width: "400em",
          height: 5 * t + "em",
          viewBox: "0 0 400000 200",
          preserveAspectRatio: "xMinYMin slice"
        })), o.a.makeSpan([s], [a], r);
      },
      svgSpan: function svgSpan(e, t) {
        var r = function () {
            var r = 4e5,
              n = e.value.label.substr(1);
            if (l.a.contains(["widehat", "widetilde", "utilde"], n)) {
              var s = h(e.value.base),
                u = void 0,
                p = void 0,
                m = void 0;
              if (s > 5) u = "widehat" === n ? 420 : 312, r = "widehat" === n ? 2364 : 2340, m = "widehat" === n ? .42 : .34, p = ("widehat" === n ? "widehat" : "tilde") + "4";else {
                var d = [1, 1, 2, 2, 3, 3][s];
                "widehat" === n ? (r = [0, 1062, 2364, 2364, 2364][d], u = [0, 239, 300, 360, 420][d], m = [0, .24, .3, .3, .36, .42][d], p = "widehat" + d) : (r = [0, 600, 1033, 2339, 2340][d], u = [0, 260, 286, 306, 312][d], m = [0, .26, .286, .3, .306, .34][d], p = "tilde" + d);
              }
              var f = new i.a.pathNode(p),
                v = new i.a.svgNode([f], {
                  width: "100%",
                  height: m + "em",
                  viewBox: "0 0 " + r + " " + u,
                  preserveAspectRatio: "none"
                });
              return {
                span: o.a.makeSpan([], [v], t),
                minWidth: 0,
                height: m
              };
            }
            var g = [],
              y = a()(c[n], 4),
              b = y[0],
              x = y[1],
              w = y[2],
              k = y[3],
              M = w / 1e3,
              S = b.length,
              z = void 0,
              O = void 0;
            if (1 === S) z = ["hide-tail"], O = [k];else if (2 === S) z = ["halfarrow-left", "halfarrow-right"], O = ["xMinYMin", "xMaxYMin"];else {
              if (3 !== S) throw new Error("Correct katexImagesData or update code here to support\n                    " + S + " children.");
              z = ["brace-left", "brace-center", "brace-right"], O = ["xMinYMin", "xMidYMin", "xMaxYMin"];
            }
            for (var T = 0; T < S; T++) {
              var A = new i.a.pathNode(b[T]),
                N = new i.a.svgNode([A], {
                  width: "400em",
                  height: M + "em",
                  viewBox: "0 0 " + r + " " + w,
                  preserveAspectRatio: O[T] + " slice"
                }),
                B = o.a.makeSpan([z[T]], [N], t);
              if (1 === S) return {
                span: B,
                minWidth: x,
                height: M
              };
              B.style.height = M + "em", g.push(B);
            }
            return {
              span: o.a.makeSpan(["stretchy"], g, t),
              minWidth: x,
              height: M
            };
          }(),
          n = r.span,
          s = r.minWidth,
          u = r.height;
        return n.height = u, n.style.height = u + "em", s > 0 && (n.style.minWidth = s + "em"), n;
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
      a = r.n(n),
      i = r(31);
    t.a = function e(t, r, n, o, s) {
      a()(this, e), this.type = t, this.value = r, this.mode = n, this.loc = i.a.range(o, s);
    };
  }, function (e, t, r) {
    var n = r(22),
      a = r(70),
      i = r(71),
      o = Object.defineProperty;
    t.f = r(23) ? Object.defineProperty : function (e, t, r) {
      if (n(e), t = i(t, !0), n(r), a) try {
        return o(e, t, r);
      } catch (e) {}
      if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
      return "value" in r && (e[t] = r.value), e;
    };
  }, function (e, t) {
    var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = r);
  }, function (e, t) {
    e.exports = {};
  }, function (e, t, r) {
    e.exports = {
      "default": r(103),
      __esModule: !0
    };
  }, function (e, t, r) {
    "use strict";

    r.d(t, "b", function () {
      return o;
    }), r.d(t, "a", function () {
      return s;
    });
    var n = r(6),
      a = (r(43), {
        pt: 1,
        mm: 7227 / 2540,
        cm: 7227 / 254,
        "in": 72.27,
        bp: 1.00375,
        pc: 12,
        dd: 1238 / 1157,
        cc: 14856 / 1157,
        nd: 685 / 642,
        nc: 1370 / 107,
        sp: 1 / 65536,
        px: 1.00375
      }),
      i = {
        ex: !0,
        em: !0,
        mu: !0
      },
      o = function o(e) {
        return "string" != typeof e && (e = e.unit), e in a || e in i || "ex" === e;
      },
      s = function s(e, t) {
        var r = void 0;
        if (e.unit in a) r = a[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;else {
          var i = void 0;
          if (i = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = i.fontMetrics().xHeight;else {
            if ("em" !== e.unit) throw new n.a("Invalid unit: '" + e.unit + "'");
            r = i.fontMetrics().quad;
          }
          i !== t && (r *= i.sizeMultiplier / t.sizeMultiplier);
        }
        return Math.min(e.number * r, t.maxSize);
      };
  }, function (e, t) {
    e.exports = function (e) {
      return "object" == _typeof(e) ? null !== e : "function" == typeof e;
    };
  }, function (e, t) {
    var r = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return r.call(e, t);
    };
  }, function (e, t, r) {
    var n = r(20);
    e.exports = function (e) {
      if (!n(e)) throw TypeError(e + " is not an object!");
      return e;
    };
  }, function (e, t, r) {
    e.exports = !r(24)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    };
  }, function (e, t, r) {
    var n = r(16),
      a = r(8),
      i = r(47),
      o = r(26),
      s = "prototype",
      _l = function l(e, t, r) {
        var u,
          c,
          h,
          p = e & _l.F,
          m = e & _l.G,
          d = e & _l.S,
          f = e & _l.P,
          v = e & _l.B,
          g = e & _l.W,
          y = m ? a : a[t] || (a[t] = {}),
          b = y[s],
          x = m ? n : d ? n[t] : (n[t] || {})[s];
        m && (r = t);
        for (u in r) (c = !p && x && void 0 !== x[u]) && u in y || (h = c ? x[u] : r[u], y[u] = m && "function" != typeof x[u] ? r[u] : v && c ? i(h, n) : g && x[u] == h ? function (e) {
          var t = function t(_t, r, n) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e();
                case 1:
                  return new e(_t);
                case 2:
                  return new e(_t, r);
              }
              return new e(_t, r, n);
            }
            return e.apply(this, arguments);
          };
          return t[s] = e[s], t;
        }(h) : f && "function" == typeof h ? i(Function.call, h) : h, f && ((y.virtual || (y.virtual = {}))[u] = h, e & _l.R && b && !b[u] && o(b, u, h)));
      };
    _l.F = 1, _l.G = 2, _l.S = 4, _l.P = 8, _l.B = 16, _l.W = 32, _l.U = 64, _l.R = 128, e.exports = _l;
  }, function (e, t, r) {
    var n = r(15),
      a = r(33);
    e.exports = r(23) ? function (e, t, r) {
      return n.f(e, t, a(1, r));
    } : function (e, t, r) {
      return e[t] = r, e;
    };
  }, function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return l;
    });
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(31),
      l = function () {
        function e(t, r) {
          a()(this, e), this.text = t, this.loc = r;
        }
        return o()(e, [{
          key: "range",
          value: function value(t, r) {
            return new e(r, s.a.range(this, t));
          }
        }]), e;
      }();
  }, function (e, t, r) {
    "use strict";

    var n = {
      math: {},
      text: {}
    };
    function a(e, t, r, a, i, o) {
      n[e][i] = {
        font: t,
        group: r,
        replace: a
      }, o && a && (n[e][a] = n[e][i]);
    }
    t.a = n;
    var i = "math",
      o = "text",
      s = "main",
      l = "ams",
      u = "accent",
      c = "bin",
      h = "close",
      p = "inner",
      m = "mathord",
      d = "op",
      f = "open",
      v = "punct",
      g = "rel",
      y = "spacing",
      b = "textord";
    a(i, s, g, "\u2261", "\\equiv", !0), a(i, s, g, "\u227A", "\\prec", !0), a(i, s, g, "\u227B", "\\succ", !0), a(i, s, g, "\u223C", "\\sim", !0), a(i, s, g, "\u22A5", "\\perp"), a(i, s, g, "\u2AAF", "\\preceq", !0), a(i, s, g, "\u2AB0", "\\succeq", !0), a(i, s, g, "\u2243", "\\simeq", !0), a(i, s, g, "\u2223", "\\mid", !0), a(i, s, g, "\u226A", "\\ll"), a(i, s, g, "\u226B", "\\gg", !0), a(i, s, g, "\u224D", "\\asymp", !0), a(i, s, g, "\u2225", "\\parallel"), a(i, s, g, "\u22C8", "\\bowtie", !0), a(i, s, g, "\u2323", "\\smile", !0), a(i, s, g, "\u2291", "\\sqsubseteq", !0), a(i, s, g, "\u2292", "\\sqsupseteq", !0), a(i, s, g, "\u2250", "\\doteq", !0), a(i, s, g, "\u2322", "\\frown", !0), a(i, s, g, "\u220B", "\\ni", !0), a(i, s, g, "\u221D", "\\propto", !0), a(i, s, g, "\u22A2", "\\vdash", !0), a(i, s, g, "\u22A3", "\\dashv", !0), a(i, s, g, "\u220B", "\\owns"), a(i, s, v, ".", "\\ldotp"), a(i, s, v, "\u22C5", "\\cdotp"), a(i, s, b, "#", "\\#"), a(o, s, b, "#", "\\#"), a(i, s, b, "&", "\\&"), a(o, s, b, "&", "\\&"), a(i, s, b, "\u2135", "\\aleph", !0), a(i, s, b, "\u2200", "\\forall", !0), a(i, s, b, "\u210F", "\\hbar"), a(i, s, b, "\u2203", "\\exists", !0), a(i, s, b, "\u2207", "\\nabla", !0), a(i, s, b, "\u266D", "\\flat", !0), a(i, s, b, "\u2113", "\\ell", !0), a(i, s, b, "\u266E", "\\natural", !0), a(i, s, b, "\u2663", "\\clubsuit", !0), a(i, s, b, "\u2118", "\\wp", !0), a(i, s, b, "\u266F", "\\sharp", !0), a(i, s, b, "\u2662", "\\diamondsuit", !0), a(i, s, b, "\u211C", "\\Re", !0), a(i, s, b, "\u2661", "\\heartsuit", !0), a(i, s, b, "\u2111", "\\Im", !0), a(i, s, b, "\u2660", "\\spadesuit", !0), a(o, s, b, "\xa7", "\\S", !0), a(o, s, b, "\xb6", "\\P", !0), a(i, s, b, "\u2020", "\\dag"), a(o, s, b, "\u2020", "\\dag"), a(o, s, b, "\u2020", "\\textdagger"), a(i, s, b, "\u2021", "\\ddag"), a(o, s, b, "\u2021", "\\ddag"), a(o, s, b, "\u2020", "\\textdaggerdbl"), a(i, s, h, "\u23B1", "\\rmoustache"), a(i, s, f, "\u23B0", "\\lmoustache"), a(i, s, h, "\u27EF", "\\rgroup"), a(i, s, f, "\u27EE", "\\lgroup"), a(i, s, c, "\u2213", "\\mp", !0), a(i, s, c, "\u2296", "\\ominus", !0), a(i, s, c, "\u228E", "\\uplus", !0), a(i, s, c, "\u2293", "\\sqcap", !0), a(i, s, c, "\u2217", "\\ast"), a(i, s, c, "\u2294", "\\sqcup", !0), a(i, s, c, "\u25EF", "\\bigcirc"), a(i, s, c, "\u2219", "\\bullet"), a(i, s, c, "\u2021", "\\ddagger"), a(i, s, c, "\u2240", "\\wr", !0), a(i, s, c, "\u2A3F", "\\amalg"), a(i, s, c, "&", "\\And"), a(i, s, g, "\u27F5", "\\longleftarrow", !0), a(i, s, g, "\u21D0", "\\Leftarrow", !0), a(i, s, g, "\u27F8", "\\Longleftarrow", !0), a(i, s, g, "\u27F6", "\\longrightarrow", !0), a(i, s, g, "\u21D2", "\\Rightarrow", !0), a(i, s, g, "\u27F9", "\\Longrightarrow", !0), a(i, s, g, "\u2194", "\\leftrightarrow", !0), a(i, s, g, "\u27F7", "\\longleftrightarrow", !0), a(i, s, g, "\u21D4", "\\Leftrightarrow", !0), a(i, s, g, "\u27FA", "\\Longleftrightarrow", !0), a(i, s, g, "\u21A6", "\\mapsto", !0), a(i, s, g, "\u27FC", "\\longmapsto", !0), a(i, s, g, "\u2197", "\\nearrow", !0), a(i, s, g, "\u21A9", "\\hookleftarrow", !0), a(i, s, g, "\u21AA", "\\hookrightarrow", !0), a(i, s, g, "\u2198", "\\searrow", !0), a(i, s, g, "\u21BC", "\\leftharpoonup", !0), a(i, s, g, "\u21C0", "\\rightharpoonup", !0), a(i, s, g, "\u2199", "\\swarrow", !0), a(i, s, g, "\u21BD", "\\leftharpoondown", !0), a(i, s, g, "\u21C1", "\\rightharpoondown", !0), a(i, s, g, "\u2196", "\\nwarrow", !0), a(i, s, g, "\u21CC", "\\rightleftharpoons", !0), a(i, l, g, "\u226E", "\\nless", !0), a(i, l, g, "\uE010", "\\nleqslant"), a(i, l, g, "\uE011", "\\nleqq"), a(i, l, g, "\u2A87", "\\lneq", !0), a(i, l, g, "\u2268", "\\lneqq", !0), a(i, l, g, "\uE00C", "\\lvertneqq"), a(i, l, g, "\u22E6", "\\lnsim", !0), a(i, l, g, "\u2A89", "\\lnapprox", !0), a(i, l, g, "\u2280", "\\nprec", !0), a(i, l, g, "\u22E0", "\\npreceq", !0), a(i, l, g, "\u22E8", "\\precnsim", !0), a(i, l, g, "\u2AB9", "\\precnapprox", !0), a(i, l, g, "\u2241", "\\nsim", !0), a(i, l, g, "\uE006", "\\nshortmid"), a(i, l, g, "\u2224", "\\nmid", !0), a(i, l, g, "\u22AC", "\\nvdash", !0), a(i, l, g, "\u22AD", "\\nvDash", !0), a(i, l, g, "\u22EA", "\\ntriangleleft"), a(i, l, g, "\u22EC", "\\ntrianglelefteq", !0), a(i, l, g, "\u228A", "\\subsetneq", !0), a(i, l, g, "\uE01A", "\\varsubsetneq"), a(i, l, g, "\u2ACB", "\\subsetneqq", !0), a(i, l, g, "\uE017", "\\varsubsetneqq"), a(i, l, g, "\u226F", "\\ngtr", !0), a(i, l, g, "\uE00F", "\\ngeqslant"), a(i, l, g, "\uE00E", "\\ngeqq"), a(i, l, g, "\u2A88", "\\gneq", !0), a(i, l, g, "\u2269", "\\gneqq", !0), a(i, l, g, "\uE00D", "\\gvertneqq"), a(i, l, g, "\u22E7", "\\gnsim", !0), a(i, l, g, "\u2A8A", "\\gnapprox", !0), a(i, l, g, "\u2281", "\\nsucc", !0), a(i, l, g, "\u22E1", "\\nsucceq", !0), a(i, l, g, "\u22E9", "\\succnsim", !0), a(i, l, g, "\u2ABA", "\\succnapprox", !0), a(i, l, g, "\u2246", "\\ncong", !0), a(i, l, g, "\uE007", "\\nshortparallel"), a(i, l, g, "\u2226", "\\nparallel", !0), a(i, l, g, "\u22AF", "\\nVDash", !0), a(i, l, g, "\u22EB", "\\ntriangleright"), a(i, l, g, "\u22ED", "\\ntrianglerighteq", !0), a(i, l, g, "\uE018", "\\nsupseteqq"), a(i, l, g, "\u228B", "\\supsetneq", !0), a(i, l, g, "\uE01B", "\\varsupsetneq"), a(i, l, g, "\u2ACC", "\\supsetneqq", !0), a(i, l, g, "\uE019", "\\varsupsetneqq"), a(i, l, g, "\u22AE", "\\nVdash", !0), a(i, l, g, "\u2AB5", "\\precneqq", !0), a(i, l, g, "\u2AB6", "\\succneqq", !0), a(i, l, g, "\uE016", "\\nsubseteqq"), a(i, l, c, "\u22B4", "\\unlhd"), a(i, l, c, "\u22B5", "\\unrhd"), a(i, l, g, "\u219A", "\\nleftarrow", !0), a(i, l, g, "\u219B", "\\nrightarrow", !0), a(i, l, g, "\u21CD", "\\nLeftarrow", !0), a(i, l, g, "\u21CF", "\\nRightarrow", !0), a(i, l, g, "\u21AE", "\\nleftrightarrow", !0), a(i, l, g, "\u21CE", "\\nLeftrightarrow", !0), a(i, l, g, "\u25B3", "\\vartriangle"), a(i, l, b, "\u210F", "\\hslash"), a(i, l, b, "\u25BD", "\\triangledown"), a(i, l, b, "\u25CA", "\\lozenge"), a(i, l, b, "\u24C8", "\\circledS"), a(i, l, b, "\xae", "\\circledR"), a(o, l, b, "\xae", "\\circledR"), a(i, l, b, "\u2221", "\\measuredangle", !0), a(i, l, b, "\u2204", "\\nexists"), a(i, l, b, "\u2127", "\\mho"), a(i, l, b, "\u2132", "\\Finv", !0), a(i, l, b, "\u2141", "\\Game", !0), a(i, l, b, "k", "\\Bbbk"), a(i, l, b, "\u2035", "\\backprime"), a(i, l, b, "\u25B2", "\\blacktriangle"), a(i, l, b, "\u25BC", "\\blacktriangledown"), a(i, l, b, "\u25A0", "\\blacksquare"), a(i, l, b, "\u29EB", "\\blacklozenge"), a(i, l, b, "\u2605", "\\bigstar"), a(i, l, b, "\u2222", "\\sphericalangle", !0), a(i, l, b, "\u2201", "\\complement", !0), a(i, l, b, "\xf0", "\\eth", !0), a(i, l, b, "\u2571", "\\diagup"), a(i, l, b, "\u2572", "\\diagdown"), a(i, l, b, "\u25A1", "\\square"), a(i, l, b, "\u25A1", "\\Box"), a(i, l, b, "\u25CA", "\\Diamond"), a(i, l, b, "\xa5", "\\yen", !0), a(i, l, b, "\u2713", "\\checkmark", !0), a(o, l, b, "\u2713", "\\checkmark"), a(i, l, b, "\u2136", "\\beth", !0), a(i, l, b, "\u2138", "\\daleth", !0), a(i, l, b, "\u2137", "\\gimel", !0), a(i, l, b, "\u03DD", "\\digamma"), a(i, l, b, "\u03F0", "\\varkappa"), a(i, l, f, "\u250C", "\\ulcorner"), a(i, l, h, "\u2510", "\\urcorner"), a(i, l, f, "\u2514", "\\llcorner"), a(i, l, h, "\u2518", "\\lrcorner"), a(i, l, g, "\u2266", "\\leqq", !0), a(i, l, g, "\u2A7D", "\\leqslant"), a(i, l, g, "\u2A95", "\\eqslantless", !0), a(i, l, g, "\u2272", "\\lesssim"), a(i, l, g, "\u2A85", "\\lessapprox"), a(i, l, g, "\u224A", "\\approxeq", !0), a(i, l, c, "\u22D6", "\\lessdot"), a(i, l, g, "\u22D8", "\\lll"), a(i, l, g, "\u2276", "\\lessgtr"), a(i, l, g, "\u22DA", "\\lesseqgtr"), a(i, l, g, "\u2A8B", "\\lesseqqgtr"), a(i, l, g, "\u2251", "\\doteqdot"), a(i, l, g, "\u2253", "\\risingdotseq", !0), a(i, l, g, "\u2252", "\\fallingdotseq", !0), a(i, l, g, "\u223D", "\\backsim", !0), a(i, l, g, "\u22CD", "\\backsimeq", !0), a(i, l, g, "\u2AC5", "\\subseteqq", !0), a(i, l, g, "\u22D0", "\\Subset", !0), a(i, l, g, "\u228F", "\\sqsubset", !0), a(i, l, g, "\u227C", "\\preccurlyeq", !0), a(i, l, g, "\u22DE", "\\curlyeqprec", !0), a(i, l, g, "\u227E", "\\precsim", !0), a(i, l, g, "\u2AB7", "\\precapprox", !0), a(i, l, g, "\u22B2", "\\vartriangleleft"), a(i, l, g, "\u22B4", "\\trianglelefteq"), a(i, l, g, "\u22A8", "\\vDash"), a(i, l, g, "\u22AA", "\\Vvdash", !0), a(i, l, g, "\u2323", "\\smallsmile"), a(i, l, g, "\u2322", "\\smallfrown"), a(i, l, g, "\u224F", "\\bumpeq", !0), a(i, l, g, "\u224E", "\\Bumpeq", !0), a(i, l, g, "\u2267", "\\geqq", !0), a(i, l, g, "\u2A7E", "\\geqslant", !0), a(i, l, g, "\u2A96", "\\eqslantgtr", !0), a(i, l, g, "\u2273", "\\gtrsim", !0), a(i, l, g, "\u2A86", "\\gtrapprox", !0), a(i, l, c, "\u22D7", "\\gtrdot"), a(i, l, g, "\u22D9", "\\ggg", !0), a(i, l, g, "\u2277", "\\gtrless", !0), a(i, l, g, "\u22DB", "\\gtreqless", !0), a(i, l, g, "\u2A8C", "\\gtreqqless", !0), a(i, l, g, "\u2256", "\\eqcirc", !0), a(i, l, g, "\u2257", "\\circeq", !0), a(i, l, g, "\u225C", "\\triangleq", !0), a(i, l, g, "\u223C", "\\thicksim"), a(i, l, g, "\u2248", "\\thickapprox"), a(i, l, g, "\u2AC6", "\\supseteqq", !0), a(i, l, g, "\u22D1", "\\Supset", !0), a(i, l, g, "\u2290", "\\sqsupset", !0), a(i, l, g, "\u227D", "\\succcurlyeq", !0), a(i, l, g, "\u22DF", "\\curlyeqsucc", !0), a(i, l, g, "\u227F", "\\succsim", !0), a(i, l, g, "\u2AB8", "\\succapprox", !0), a(i, l, g, "\u22B3", "\\vartriangleright"), a(i, l, g, "\u22B5", "\\trianglerighteq"), a(i, l, g, "\u22A9", "\\Vdash", !0), a(i, l, g, "\u2223", "\\shortmid"), a(i, l, g, "\u2225", "\\shortparallel"), a(i, l, g, "\u226C", "\\between", !0), a(i, l, g, "\u22D4", "\\pitchfork", !0), a(i, l, g, "\u221D", "\\varpropto"), a(i, l, g, "\u25C0", "\\blacktriangleleft"), a(i, l, g, "\u2234", "\\therefore", !0), a(i, l, g, "\u220D", "\\backepsilon"), a(i, l, g, "\u25B6", "\\blacktriangleright"), a(i, l, g, "\u2235", "\\because", !0), a(i, l, g, "\u22D8", "\\llless"), a(i, l, g, "\u22D9", "\\gggtr"), a(i, l, c, "\u22B2", "\\lhd"), a(i, l, c, "\u22B3", "\\rhd"), a(i, l, g, "\u2242", "\\eqsim", !0), a(i, s, g, "\u22C8", "\\Join"), a(i, l, g, "\u2251", "\\Doteq", !0), a(i, l, c, "\u2214", "\\dotplus", !0), a(i, l, c, "\u2216", "\\smallsetminus"), a(i, l, c, "\u22D2", "\\Cap", !0), a(i, l, c, "\u22D3", "\\Cup", !0), a(i, l, c, "\u2A5E", "\\doublebarwedge", !0), a(i, l, c, "\u229F", "\\boxminus", !0), a(i, l, c, "\u229E", "\\boxplus", !0), a(i, l, c, "\u22C7", "\\divideontimes", !0), a(i, l, c, "\u22C9", "\\ltimes", !0), a(i, l, c, "\u22CA", "\\rtimes", !0), a(i, l, c, "\u22CB", "\\leftthreetimes", !0), a(i, l, c, "\u22CC", "\\rightthreetimes", !0), a(i, l, c, "\u22CF", "\\curlywedge", !0), a(i, l, c, "\u22CE", "\\curlyvee", !0), a(i, l, c, "\u229D", "\\circleddash", !0), a(i, l, c, "\u229B", "\\circledast", !0), a(i, l, c, "\u22C5", "\\centerdot"), a(i, l, c, "\u22BA", "\\intercal", !0), a(i, l, c, "\u22D2", "\\doublecap"), a(i, l, c, "\u22D3", "\\doublecup"), a(i, l, c, "\u22A0", "\\boxtimes", !0), a(i, l, g, "\u21E2", "\\dashrightarrow", !0), a(i, l, g, "\u21E0", "\\dashleftarrow", !0), a(i, l, g, "\u21C7", "\\leftleftarrows", !0), a(i, l, g, "\u21C6", "\\leftrightarrows", !0), a(i, l, g, "\u21DA", "\\Lleftarrow", !0), a(i, l, g, "\u219E", "\\twoheadleftarrow", !0), a(i, l, g, "\u21A2", "\\leftarrowtail", !0), a(i, l, g, "\u21AB", "\\looparrowleft", !0), a(i, l, g, "\u21CB", "\\leftrightharpoons", !0), a(i, l, g, "\u21B6", "\\curvearrowleft", !0), a(i, l, g, "\u21BA", "\\circlearrowleft", !0), a(i, l, g, "\u21B0", "\\Lsh", !0), a(i, l, g, "\u21C8", "\\upuparrows", !0), a(i, l, g, "\u21BF", "\\upharpoonleft", !0), a(i, l, g, "\u21C3", "\\downharpoonleft", !0), a(i, l, g, "\u22B8", "\\multimap", !0), a(i, l, g, "\u21AD", "\\leftrightsquigarrow", !0), a(i, l, g, "\u21C9", "\\rightrightarrows", !0), a(i, l, g, "\u21C4", "\\rightleftarrows", !0), a(i, l, g, "\u21A0", "\\twoheadrightarrow", !0), a(i, l, g, "\u21A3", "\\rightarrowtail", !0), a(i, l, g, "\u21AC", "\\looparrowright", !0), a(i, l, g, "\u21B7", "\\curvearrowright", !0), a(i, l, g, "\u21BB", "\\circlearrowright", !0), a(i, l, g, "\u21B1", "\\Rsh", !0), a(i, l, g, "\u21CA", "\\downdownarrows", !0), a(i, l, g, "\u21BE", "\\upharpoonright", !0), a(i, l, g, "\u21C2", "\\downharpoonright", !0), a(i, l, g, "\u21DD", "\\rightsquigarrow", !0), a(i, l, g, "\u21DD", "\\leadsto"), a(i, l, g, "\u21DB", "\\Rrightarrow", !0), a(i, l, g, "\u21BE", "\\restriction"), a(i, s, b, "\u2018", "`"), a(i, s, b, "$", "\\$"), a(o, s, b, "$", "\\$"), a(o, s, b, "$", "\\textdollar"), a(i, s, b, "%", "\\%"), a(o, s, b, "%", "\\%"), a(i, s, b, "_", "\\_"), a(o, s, b, "_", "\\_"), a(o, s, b, "_", "\\textunderscore"), a(i, s, b, "\u2220", "\\angle", !0), a(i, s, b, "\u221E", "\\infty", !0), a(i, s, b, "\u2032", "\\prime"), a(i, s, b, "\u25B3", "\\triangle"), a(i, s, b, "\u0393", "\\Gamma", !0), a(i, s, b, "\u0394", "\\Delta", !0), a(i, s, b, "\u0398", "\\Theta", !0), a(i, s, b, "\u039B", "\\Lambda", !0), a(i, s, b, "\u039E", "\\Xi", !0), a(i, s, b, "\u03A0", "\\Pi", !0), a(i, s, b, "\u03A3", "\\Sigma", !0), a(i, s, b, "\u03A5", "\\Upsilon", !0), a(i, s, b, "\u03A6", "\\Phi", !0), a(i, s, b, "\u03A8", "\\Psi", !0), a(i, s, b, "\u03A9", "\\Omega", !0), a(i, s, b, "\xac", "\\neg"), a(i, s, b, "\xac", "\\lnot"), a(i, s, b, "\u22A4", "\\top"), a(i, s, b, "\u22A5", "\\bot"), a(i, s, b, "\u2205", "\\emptyset"), a(i, l, b, "\u2205", "\\varnothing"), a(i, s, m, "\u03B1", "\\alpha", !0), a(i, s, m, "\u03B2", "\\beta", !0), a(i, s, m, "\u03B3", "\\gamma", !0), a(i, s, m, "\u03B4", "\\delta", !0), a(i, s, m, "\u03F5", "\\epsilon", !0), a(i, s, m, "\u03B6", "\\zeta", !0), a(i, s, m, "\u03B7", "\\eta", !0), a(i, s, m, "\u03B8", "\\theta", !0), a(i, s, m, "\u03B9", "\\iota", !0), a(i, s, m, "\u03BA", "\\kappa", !0), a(i, s, m, "\u03BB", "\\lambda", !0), a(i, s, m, "\u03BC", "\\mu", !0), a(i, s, m, "\u03BD", "\\nu", !0), a(i, s, m, "\u03BE", "\\xi", !0), a(i, s, m, "\u03BF", "\\omicron", !0), a(i, s, m, "\u03C0", "\\pi", !0), a(i, s, m, "\u03C1", "\\rho", !0), a(i, s, m, "\u03C3", "\\sigma", !0), a(i, s, m, "\u03C4", "\\tau", !0), a(i, s, m, "\u03C5", "\\upsilon", !0), a(i, s, m, "\u03D5", "\\phi", !0), a(i, s, m, "\u03C7", "\\chi", !0), a(i, s, m, "\u03C8", "\\psi", !0), a(i, s, m, "\u03C9", "\\omega", !0), a(i, s, m, "\u03B5", "\\varepsilon", !0), a(i, s, m, "\u03D1", "\\vartheta", !0), a(i, s, m, "\u03D6", "\\varpi", !0), a(i, s, m, "\u03F1", "\\varrho", !0), a(i, s, m, "\u03C2", "\\varsigma", !0), a(i, s, m, "\u03C6", "\\varphi", !0), a(i, s, c, "\u2217", "*"), a(i, s, c, "+", "+"), a(i, s, c, "\u2212", "-"), a(i, s, c, "\u22C5", "\\cdot", !0), a(i, s, c, "\u2218", "\\circ"), a(i, s, c, "\xf7", "\\div", !0), a(i, s, c, "\xb1", "\\pm", !0), a(i, s, c, "\xd7", "\\times", !0), a(i, s, c, "\u2229", "\\cap", !0), a(i, s, c, "\u222A", "\\cup", !0), a(i, s, c, "\u2216", "\\setminus"), a(i, s, c, "\u2227", "\\land"), a(i, s, c, "\u2228", "\\lor"), a(i, s, c, "\u2227", "\\wedge", !0), a(i, s, c, "\u2228", "\\vee", !0), a(i, s, b, "\u221A", "\\surd"), a(i, s, f, "(", "("), a(i, s, f, "[", "["), a(i, s, f, "\u27E8", "\\langle", !0), a(i, s, f, "\u2223", "\\lvert"), a(i, s, f, "\u2225", "\\lVert"), a(i, s, h, ")", ")"), a(i, s, h, "]", "]"), a(i, s, h, "?", "?"), a(i, s, h, "!", "!"), a(i, s, h, "\u27E9", "\\rangle", !0), a(i, s, h, "\u2223", "\\rvert"), a(i, s, h, "\u2225", "\\rVert"), a(i, s, g, "=", "="), a(i, s, g, "<", "<"), a(i, s, g, ">", ">"), a(i, s, g, ":", ":"), a(i, s, g, "\u2248", "\\approx", !0), a(i, s, g, "\u2245", "\\cong", !0), a(i, s, g, "\u2265", "\\ge"), a(i, s, g, "\u2265", "\\geq", !0), a(i, s, g, "\u2190", "\\gets"), a(i, s, g, ">", "\\gt"), a(i, s, g, "\u2208", "\\in", !0), a(i, s, g, "\u2209", "\\notin", !0), a(i, s, g, "\u0338", "\\not"), a(i, s, g, "\u2282", "\\subset", !0), a(i, s, g, "\u2283", "\\supset", !0), a(i, s, g, "\u2286", "\\subseteq", !0), a(i, s, g, "\u2287", "\\supseteq", !0), a(i, l, g, "\u2288", "\\nsubseteq", !0), a(i, l, g, "\u2289", "\\nsupseteq", !0), a(i, s, g, "\u22A8", "\\models"), a(i, s, g, "\u2190", "\\leftarrow", !0), a(i, s, g, "\u2264", "\\le"), a(i, s, g, "\u2264", "\\leq", !0), a(i, s, g, "<", "\\lt"), a(i, s, g, "\u2260", "\\ne", !0), a(i, s, g, "\u2260", "\\neq"), a(i, s, g, "\u2192", "\\rightarrow", !0), a(i, s, g, "\u2192", "\\to"), a(i, l, g, "\u2271", "\\ngeq", !0), a(i, l, g, "\u2270", "\\nleq", !0), a(i, s, y, null, "\\!"), a(i, s, y, "\xa0", "\\ "), a(i, s, y, "\xa0", "~"), a(i, s, y, null, "\\,"), a(i, s, y, null, "\\:"), a(i, s, y, null, "\\;"), a(i, s, y, null, "\\enspace"), a(i, s, y, null, "\\qquad"), a(i, s, y, null, "\\quad"), a(i, s, y, "\xa0", "\\space"), a(i, s, y, "\xa0", "\\nobreakspace"), a(o, s, y, null, "\\!"), a(o, s, y, "\xa0", "\\ "), a(o, s, y, "\xa0", "~"), a(o, s, y, null, "\\,"), a(o, s, y, null, "\\:"), a(o, s, y, null, "\\;"), a(o, s, y, null, "\\enspace"), a(o, s, y, null, "\\qquad"), a(o, s, y, null, "\\quad"), a(o, s, y, "\xa0", "\\space"), a(o, s, y, "\xa0", "\\nobreakspace"), a(i, s, v, ",", ","), a(i, s, v, ";", ";"), a(i, s, v, ":", "\\colon"), a(i, l, c, "\u22BC", "\\barwedge", !0), a(i, l, c, "\u22BB", "\\veebar", !0), a(i, s, c, "\u2299", "\\odot", !0), a(i, s, c, "\u2295", "\\oplus", !0), a(i, s, c, "\u2297", "\\otimes", !0), a(i, s, b, "\u2202", "\\partial", !0), a(i, s, c, "\u2298", "\\oslash", !0), a(i, l, c, "\u229A", "\\circledcirc", !0), a(i, l, c, "\u22A1", "\\boxdot", !0), a(i, s, c, "\u25B3", "\\bigtriangleup"), a(i, s, c, "\u25BD", "\\bigtriangledown"), a(i, s, c, "\u2020", "\\dagger"), a(i, s, c, "\u22C4", "\\diamond"), a(i, s, c, "\u22C6", "\\star"), a(i, s, c, "\u25C3", "\\triangleleft"), a(i, s, c, "\u25B9", "\\triangleright"), a(i, s, f, "{", "\\{"), a(o, s, b, "{", "\\{"), a(o, s, b, "{", "\\textbraceleft"), a(i, s, h, "}", "\\}"), a(o, s, b, "}", "\\}"), a(o, s, b, "}", "\\textbraceright"), a(i, s, f, "{", "\\lbrace"), a(i, s, h, "}", "\\rbrace"), a(i, s, f, "[", "\\lbrack"), a(i, s, h, "]", "\\rbrack"), a(o, s, b, "<", "\\textless"), a(o, s, b, ">", "\\textgreater"), a(i, s, f, "\u230A", "\\lfloor"), a(i, s, h, "\u230B", "\\rfloor"), a(i, s, f, "\u2308", "\\lceil"), a(i, s, h, "\u2309", "\\rceil"), a(i, s, b, "\\", "\\backslash"), a(i, s, b, "\u2223", "|"), a(i, s, b, "\u2223", "\\vert"), a(o, s, b, "|", "\\textbar"), a(i, s, b, "\u2225", "\\|"), a(i, s, b, "\u2225", "\\Vert"), a(o, s, b, "\u2225", "\\textbardbl"), a(i, s, g, "\u2191", "\\uparrow", !0), a(i, s, g, "\u21D1", "\\Uparrow", !0), a(i, s, g, "\u2193", "\\downarrow", !0), a(i, s, g, "\u21D3", "\\Downarrow", !0), a(i, s, g, "\u2195", "\\updownarrow", !0), a(i, s, g, "\u21D5", "\\Updownarrow", !0), a(i, s, d, "\u2210", "\\coprod"), a(i, s, d, "\u22C1", "\\bigvee"), a(i, s, d, "\u22C0", "\\bigwedge"), a(i, s, d, "\u2A04", "\\biguplus"), a(i, s, d, "\u22C2", "\\bigcap"), a(i, s, d, "\u22C3", "\\bigcup"), a(i, s, d, "\u222B", "\\int"), a(i, s, d, "\u222B", "\\intop"), a(i, s, d, "\u222C", "\\iint"), a(i, s, d, "\u222D", "\\iiint"), a(i, s, d, "\u220F", "\\prod"), a(i, s, d, "\u2211", "\\sum"), a(i, s, d, "\u2A02", "\\bigotimes"), a(i, s, d, "\u2A01", "\\bigoplus"), a(i, s, d, "\u2A00", "\\bigodot"), a(i, s, d, "\u222E", "\\oint"), a(i, s, d, "\u2A06", "\\bigsqcup"), a(i, s, d, "\u222B", "\\smallint"), a(o, s, p, "\u2026", "\\textellipsis"), a(i, s, p, "\u2026", "\\mathellipsis"), a(o, s, p, "\u2026", "\\ldots", !0), a(i, s, p, "\u2026", "\\ldots", !0), a(i, s, p, "\u22EF", "\\@cdots", !0), a(i, s, p, "\u22F1", "\\ddots", !0), a(i, s, b, "\u22EE", "\\vdots", !0), a(i, s, u, "\u02CA", "\\acute"), a(i, s, u, "\u02CB", "\\grave"), a(i, s, u, "\xa8", "\\ddot"), a(i, s, u, "~", "\\tilde"), a(i, s, u, "\u02C9", "\\bar"), a(i, s, u, "\u02D8", "\\breve"), a(i, s, u, "\u02C7", "\\check"), a(i, s, u, "^", "\\hat"), a(i, s, u, "\u20D7", "\\vec"), a(i, s, u, "\u02D9", "\\dot"), a(i, s, u, "\u02DA", "\\mathring"), a(i, s, m, "\u0131", "\\imath", !0), a(i, s, m, "\u0237", "\\jmath", !0), a(o, s, b, "\u0131", "\\i", !0), a(o, s, b, "\u0237", "\\j", !0), a(o, s, b, "\xdf", "\\ss", !0), a(o, s, b, "\xe6", "\\ae", !0), a(o, s, b, "\xe6", "\\ae", !0), a(o, s, b, "\u0153", "\\oe", !0), a(o, s, b, "\xf8", "\\o", !0), a(o, s, b, "\xc6", "\\AE", !0), a(o, s, b, "\u0152", "\\OE", !0), a(o, s, b, "\xd8", "\\O", !0), a(o, s, u, "\u02CA", "\\'"), a(o, s, u, "\u02CB", "\\`"), a(o, s, u, "\u02C6", "\\^"), a(o, s, u, "\u02DC", "\\~"), a(o, s, u, "\u02C9", "\\="), a(o, s, u, "\u02D8", "\\u"), a(o, s, u, "\u02D9", "\\."), a(o, s, u, "\u02DA", "\\r"), a(o, s, u, "\u02C7", "\\v"), a(o, s, u, "\xa8", '\\"'), a(o, s, u, "\u02DD", "\\H"), a(o, s, b, "\u2013", "--"), a(o, s, b, "\u2013", "\\textendash"), a(o, s, b, "\u2014", "---"), a(o, s, b, "\u2014", "\\textemdash"), a(o, s, b, "\u2018", "`"), a(o, s, b, "\u2018", "\\textquoteleft"), a(o, s, b, "\u2019", "'"), a(o, s, b, "\u2019", "\\textquoteright"), a(o, s, b, "\u201C", "``"), a(o, s, b, "\u201C", "\\textquotedblleft"), a(o, s, b, "\u201D", "''"), a(o, s, b, "\u201D", "\\textquotedblright"), a(i, s, b, "\xb0", "\\degree"), a(o, s, b, "\xb0", "\\degree"), a(i, s, m, "\xa3", "\\pounds"), a(i, s, m, "\xa3", "\\mathsterling", !0), a(o, s, m, "\xa3", "\\pounds"), a(o, s, m, "\xa3", "\\textsterling", !0), a(i, l, b, "\u2720", "\\maltese"), a(o, l, b, "\u2720", "\\maltese"), a(o, s, y, "\xa0", "\\ "), a(o, s, y, "\xa0", " "), a(o, s, y, "\xa0", "~");
    for (var x = '0123456789/@."', w = 0; w < x.length; w++) {
      var k = x.charAt(w);
      a(i, s, b, k, k);
    }
    for (var M = '0123456789!@*()-=+[]<>|";:?/.,', S = 0; S < M.length; S++) {
      var z = M.charAt(S);
      a(o, s, b, z, z);
    }
    for (var O = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", T = 0; T < O.length; T++) {
      var A = O.charAt(T);
      a(i, s, m, A, A), a(o, s, b, A, A);
    }
    for (var N = 0; N < "\xc7\xd0\xde\xe7\xfe".length; N++) {
      var B = "\xc7\xd0\xde\xe7\xfe".charAt(N);
      a(i, s, m, B, B), a(o, s, b, B, B);
    }
    a(o, s, b, "\xf0", "\xf0"), a(o, s, b, "\u2013", "\u2013"), a(o, s, b, "\u2014", "\u2014"), a(o, s, b, "\u2018", "\u2018"), a(o, s, b, "\u2019", "\u2019"), a(o, s, b, "\u201C", "\u201C"), a(o, s, b, "\u201D", "\u201D");
  }, function (e, t, r) {
    var n = r(38);
    e.exports = function (e) {
      return Object(n(e));
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(42),
      a = r(59),
      i = {
        slant: [.25, .25, .25],
        space: [0, 0, 0],
        stretch: [0, 0, 0],
        shrink: [0, 0, 0],
        xHeight: [.431, .431, .431],
        quad: [1, 1.171, 1.472],
        extraSpace: [0, 0, 0],
        num1: [.677, .732, .925],
        num2: [.394, .384, .387],
        num3: [.444, .471, .504],
        denom1: [.686, .752, 1.025],
        denom2: [.345, .344, .532],
        sup1: [.413, .503, .504],
        sup2: [.363, .431, .404],
        sup3: [.289, .286, .294],
        sub1: [.15, .143, .2],
        sub2: [.247, .286, .4],
        supDrop: [.386, .353, .494],
        subDrop: [.05, .071, .1],
        delim1: [2.39, 1.7, 1.98],
        delim2: [1.01, 1.157, 1.42],
        axisHeight: [.25, .25, .25],
        defaultRuleThickness: [.04, .049, .049],
        bigOpSpacing1: [.111, .111, .111],
        bigOpSpacing2: [.166, .166, .166],
        bigOpSpacing3: [.2, .2, .2],
        bigOpSpacing4: [.6, .611, .611],
        bigOpSpacing5: [.1, .143, .143],
        sqrtRuleThickness: [.04, .04, .04],
        ptPerEm: [10, 10, 10],
        doubleRuleSep: [.2, .2, .2]
      },
      o = {
        "\xc5": "A",
        "\xc7": "C",
        "\xd0": "D",
        "\xde": "o",
        "\xe5": "a",
        "\xe7": "c",
        "\xf0": "d",
        "\xfe": "o",
        "\u0410": "A",
        "\u0411": "B",
        "\u0412": "B",
        "\u0413": "F",
        "\u0414": "A",
        "\u0415": "E",
        "\u0416": "K",
        "\u0417": "3",
        "\u0418": "N",
        "\u0419": "N",
        "\u041A": "K",
        "\u041B": "N",
        "\u041C": "M",
        "\u041D": "H",
        "\u041E": "O",
        "\u041F": "N",
        "\u0420": "P",
        "\u0421": "C",
        "\u0422": "T",
        "\u0423": "y",
        "\u0424": "O",
        "\u0425": "X",
        "\u0426": "U",
        "\u0427": "h",
        "\u0428": "W",
        "\u0429": "W",
        "\u042A": "B",
        "\u042B": "X",
        "\u042C": "B",
        "\u042D": "3",
        "\u042E": "X",
        "\u042F": "R",
        "\u0430": "a",
        "\u0431": "b",
        "\u0432": "a",
        "\u0433": "r",
        "\u0434": "y",
        "\u0435": "e",
        "\u0436": "m",
        "\u0437": "e",
        "\u0438": "n",
        "\u0439": "n",
        "\u043A": "n",
        "\u043B": "n",
        "\u043C": "m",
        "\u043D": "n",
        "\u043E": "o",
        "\u043F": "n",
        "\u0440": "p",
        "\u0441": "c",
        "\u0442": "o",
        "\u0443": "y",
        "\u0444": "b",
        "\u0445": "x",
        "\u0446": "n",
        "\u0447": "n",
        "\u0448": "w",
        "\u0449": "w",
        "\u044A": "a",
        "\u044B": "m",
        "\u044C": "a",
        "\u044D": "e",
        "\u044E": "m",
        "\u044F": "r"
      },
      s = {};
    t.a = {
      getFontMetrics: function getFontMetrics(e) {
        var t = void 0;
        if (!s[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
          var r = s[t] = {
            cssEmPerMu: i.quad[t] / 18
          };
          for (var n in i) i.hasOwnProperty(n) && (r[n] = i[n][t]);
        }
        return s[t];
      },
      getCharacterMetrics: function getCharacterMetrics(e, t, r) {
        if (!a.a[t]) throw new Error("Font metrics not found for font: " + t + ".");
        var i = e.charCodeAt(0);
        e[0] in o && (i = o[e[0]].charCodeAt(0));
        var s = a.a[t][i];
        if (s || "text" !== r || Object(n.b)(i) && (s = a.a[t][77]), s) return {
          depth: s[0],
          height: s[1],
          italic: s[2],
          skew: s[3],
          width: s[4]
        };
      }
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(66),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = function () {
        function e(t, r, n) {
          o()(this, e), this.lexer = t, this.start = r, this.end = n, a()(this);
        }
        return l()(e, null, [{
          key: "range",
          value: function value(t, r) {
            return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc;
          }
        }]), e;
      }();
    t.a = u;
  }, function (e, t) {
    var r = 0,
      n = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + n).toString(36));
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
      a = r.n(n),
      i = r(5);
    t.a = function e(t) {
      a()(this, e), t = t || {}, this.displayMode = i.a.deflt(t.displayMode, !1), this.throwOnError = i.a.deflt(t.throwOnError, !0), this.errorColor = i.a.deflt(t.errorColor, "#cc0000"), this.macros = t.macros || {}, this.colorIsTextColor = i.a.deflt(t.colorIsTextColor, !1), this.maxSize = Math.max(0, i.a.deflt(t.maxSize, 1 / 0));
    };
  }, function (e, t, r) {
    "use strict";

    t.__esModule = !0;
    var n,
      a = r(79),
      i = (n = a) && n.__esModule ? n : {
        "default": n
      };
    t["default"] = function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
        return r;
      }
      return (0, i["default"])(e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(81)(!0);
    r(48)(String, "String", function (e) {
      this._t = String(e), this._i = 0;
    }, function () {
      var e,
        t = this._t,
        r = this._i;
      return r >= t.length ? {
        value: void 0,
        done: !0
      } : (e = n(t, r), this._i += e.length, {
        value: e,
        done: !1
      });
    });
  }, function (e, t) {
    var r = Math.ceil,
      n = Math.floor;
    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? n : r)(e);
    };
  }, function (e, t) {
    e.exports = function (e) {
      if (void 0 == e) throw TypeError("Can't call method on  " + e);
      return e;
    };
  }, function (e, t, r) {
    var n = r(87),
      a = r(53);
    e.exports = Object.keys || function (e) {
      return n(e, a);
    };
  }, function (e, t, r) {
    var n = r(49),
      a = r(38);
    e.exports = function (e) {
      return n(a(e));
    };
  }, function (e, t, r) {
    var n = r(52)("keys"),
      a = r(32);
    e.exports = function (e) {
      return n[e] || (n[e] = a(e));
    };
  }, function (e, t, r) {
    "use strict";

    t.a = function (e) {
      var t = !0,
        r = !1,
        n = void 0;
      try {
        for (var a, i = o()(s); !(t = (a = i.next()).done); t = !0) {
          var l = a.value,
            u = !0,
            c = !1,
            h = void 0;
          try {
            for (var p, m = o()(l.blocks); !(u = (p = m.next()).done); u = !0) {
              var d = p.value;
              if (e >= d[0] && e <= d[1]) return l.name;
            }
          } catch (e) {
            c = !0, h = e;
          } finally {
            try {
              !u && m["return"] && m["return"]();
            } finally {
              if (c) throw h;
            }
          }
        }
      } catch (e) {
        r = !0, n = e;
      } finally {
        try {
          !t && i["return"] && i["return"]();
        } finally {
          if (r) throw n;
        }
      }
      return null;
    }, t.b = function (e) {
      for (var t = 0; t < l.length; t += 2) if (e >= l[t] && e <= l[t + 1]) return !0;
      return !1;
    };
    var n = r(35),
      a = r.n(n),
      i = r(18),
      o = r.n(i),
      s = [{
        name: "latin",
        blocks: [[256, 591], [768, 879]]
      }, {
        name: "cyrillic",
        blocks: [[1024, 1279]]
      }, {
        name: "brahmic",
        blocks: [[2304, 4255]]
      }, {
        name: "georgian",
        blocks: [[4256, 4351]]
      }, {
        name: "cjk",
        blocks: [[12288, 12543], [19968, 40879], [65280, 65376]]
      }, {
        name: "hangul",
        blocks: [[44032, 55215]]
      }];
    var l = [];
    s.forEach(function (e) {
      return e.blocks.forEach(function (e) {
        return l.push.apply(l, a()(e));
      });
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(30),
      l = [[1, 1, 1], [2, 1, 1], [3, 1, 1], [4, 2, 1], [5, 2, 1], [6, 3, 1], [7, 4, 2], [8, 6, 3], [9, 7, 6], [10, 8, 7], [11, 10, 9]],
      u = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
      c = function c(e, t) {
        return t.size < 2 ? e : l[e - 1][t.size - 1];
      },
      h = function () {
        function e(t) {
          a()(this, e), this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.fontFamily = t.fontFamily, this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = u[this.size - 1], this.maxSize = t.maxSize, this._fontMetrics = void 0;
        }
        return o()(e, [{
          key: "extend",
          value: function value(t) {
            var r = {
              style: this.style,
              size: this.size,
              textSize: this.textSize,
              color: this.color,
              phantom: this.phantom,
              fontFamily: this.fontFamily,
              fontWeight: this.fontWeight,
              fontShape: this.fontShape,
              maxSize: this.maxSize
            };
            for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
            return new e(r);
          }
        }, {
          key: "havingStyle",
          value: function value(e) {
            return this.style === e ? this : this.extend({
              style: e,
              size: c(this.textSize, e)
            });
          }
        }, {
          key: "havingCrampedStyle",
          value: function value() {
            return this.havingStyle(this.style.cramp());
          }
        }, {
          key: "havingSize",
          value: function value(e) {
            return this.size === e && this.textSize === e ? this : this.extend({
              style: this.style.text(),
              size: e,
              textSize: e,
              sizeMultiplier: u[e - 1]
            });
          }
        }, {
          key: "havingBaseStyle",
          value: function value(t) {
            t = t || this.style.text();
            var r = c(e.BASESIZE, t);
            return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
              style: t,
              size: r
            });
          }
        }, {
          key: "withColor",
          value: function value(e) {
            return this.extend({
              color: e
            });
          }
        }, {
          key: "withPhantom",
          value: function value() {
            return this.extend({
              phantom: !0
            });
          }
        }, {
          key: "withFontFamily",
          value: function value(e) {
            return this.extend({
              fontFamily: e || this.fontFamily
            });
          }
        }, {
          key: "withFontWeight",
          value: function value(e) {
            return this.extend({
              fontWeight: e
            });
          }
        }, {
          key: "withFontShape",
          value: function value(e) {
            return this.extend({
              fontShape: e
            });
          }
        }, {
          key: "sizingClasses",
          value: function value(e) {
            return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : [];
          }
        }, {
          key: "baseSizingClasses",
          value: function value() {
            return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : [];
          }
        }, {
          key: "fontMetrics",
          value: function value() {
            return this._fontMetrics || (this._fontMetrics = s.a.getFontMetrics(this.size)), this._fontMetrics;
          }
        }, {
          key: "getColor",
          value: function value() {
            return this.phantom ? "transparent" : null != this.color && e.colorMap.hasOwnProperty(this.color) ? e.colorMap[this.color] : this.color;
          }
        }]), e;
      }();
    h.BASESIZE = 6, h.colorMap = {
      "katex-blue": "#6495ed",
      "katex-orange": "#ffa500",
      "katex-pink": "#ff00af",
      "katex-red": "#df0030",
      "katex-green": "#28ae7b",
      "katex-gray": "gray",
      "katex-purple": "#9d38bd",
      "katex-blueA": "#ccfaff",
      "katex-blueB": "#80f6ff",
      "katex-blueC": "#63d9ea",
      "katex-blueD": "#11accd",
      "katex-blueE": "#0c7f99",
      "katex-tealA": "#94fff5",
      "katex-tealB": "#26edd5",
      "katex-tealC": "#01d1c1",
      "katex-tealD": "#01a995",
      "katex-tealE": "#208170",
      "katex-greenA": "#b6ffb0",
      "katex-greenB": "#8af281",
      "katex-greenC": "#74cf70",
      "katex-greenD": "#1fab54",
      "katex-greenE": "#0d923f",
      "katex-goldA": "#ffd0a9",
      "katex-goldB": "#ffbb71",
      "katex-goldC": "#ff9c39",
      "katex-goldD": "#e07d10",
      "katex-goldE": "#a75a05",
      "katex-redA": "#fca9a9",
      "katex-redB": "#ff8482",
      "katex-redC": "#f9685d",
      "katex-redD": "#e84d39",
      "katex-redE": "#bc2612",
      "katex-maroonA": "#ffbde0",
      "katex-maroonB": "#ff92c6",
      "katex-maroonC": "#ed5fa6",
      "katex-maroonD": "#ca337c",
      "katex-maroonE": "#9e034e",
      "katex-purpleA": "#ddd7ff",
      "katex-purpleB": "#c6b9fc",
      "katex-purpleC": "#aa87ff",
      "katex-purpleD": "#7854ab",
      "katex-purpleE": "#543b78",
      "katex-mintA": "#f5f9e8",
      "katex-mintB": "#edf2df",
      "katex-mintC": "#e0e5cc",
      "katex-grayA": "#f6f7f7",
      "katex-grayB": "#f0f1f2",
      "katex-grayC": "#e3e5e6",
      "katex-grayD": "#d6d8da",
      "katex-grayE": "#babec2",
      "katex-grayF": "#888d93",
      "katex-grayG": "#626569",
      "katex-grayH": "#3b3e40",
      "katex-grayI": "#21242c",
      "katex-kaBlue": "#314453",
      "katex-kaGreen": "#71B307"
    }, t.a = h;
  }, function (e, t, r) {
    "use strict";

    var n = r(6),
      a = r(9),
      i = r(12),
      o = r(0),
      s = r(30),
      l = r(28),
      u = r(5),
      c = function c(e, t, r) {
        return l.a.math[e] && l.a.math[e].replace ? s.a.getCharacterMetrics(l.a.math[e].replace, t, r) : s.a.getCharacterMetrics(e, t, r);
      },
      h = function h(e, t, r, n) {
        var a = r.havingBaseStyle(t),
          i = o.a.makeSpan((n || []).concat(a.sizingClasses(r)), [e], r);
        return i.delimSizeMultiplier = a.sizeMultiplier / r.sizeMultiplier, i.height *= i.delimSizeMultiplier, i.depth *= i.delimSizeMultiplier, i.maxFontSize = a.sizeMultiplier, i;
      },
      p = function p(e, t, r) {
        var n = t.havingBaseStyle(r),
          a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
        e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a;
      },
      m = function m(e, t, r, n, i, s) {
        var l,
          u,
          c,
          m,
          d = (l = e, u = t, c = i, m = n, o.a.makeSymbol(l, "Size" + u + "-Regular", c, m)),
          f = h(o.a.makeSpan(["delimsizing", "size" + t], [d], n), a.a.TEXT, n, s);
        return r && p(f, n, a.a.TEXT), f;
      },
      d = function d(e, t, r) {
        var n = void 0;
        return "Size1-Regular" === t ? n = "delim-size1" : "Size4-Regular" === t && (n = "delim-size4"), {
          type: "elem",
          elem: o.a.makeSpan(["delimsizinginner", n], [o.a.makeSpan([], [o.a.makeSymbol(e, t, r)])])
        };
      },
      f = function f(e, t, r, n, i, s) {
        var l = void 0,
          u = void 0,
          p = void 0,
          m = void 0;
        l = p = m = e, u = null;
        var f = "Size1-Regular";
        "\\uparrow" === e ? p = m = "\u23D0" : "\\Uparrow" === e ? p = m = "\u2016" : "\\downarrow" === e ? l = p = "\u23D0" : "\\Downarrow" === e ? l = p = "\u2016" : "\\updownarrow" === e ? (l = "\\uparrow", p = "\u23D0", m = "\\downarrow") : "\\Updownarrow" === e ? (l = "\\Uparrow", p = "\u2016", m = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (l = "\u23A1", p = "\u23A2", m = "\u23A3", f = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (l = "\u23A4", p = "\u23A5", m = "\u23A6", f = "Size4-Regular") : "\\lfloor" === e ? (p = l = "\u23A2", m = "\u23A3", f = "Size4-Regular") : "\\lceil" === e ? (l = "\u23A1", p = m = "\u23A2", f = "Size4-Regular") : "\\rfloor" === e ? (p = l = "\u23A5", m = "\u23A6", f = "Size4-Regular") : "\\rceil" === e ? (l = "\u23A4", p = m = "\u23A5", f = "Size4-Regular") : "(" === e ? (l = "\u239B", p = "\u239C", m = "\u239D", f = "Size4-Regular") : ")" === e ? (l = "\u239E", p = "\u239F", m = "\u23A0", f = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (l = "\u23A7", u = "\u23A8", m = "\u23A9", p = "\u23AA", f = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (l = "\u23AB", u = "\u23AC", m = "\u23AD", p = "\u23AA", f = "Size4-Regular") : "\\lgroup" === e ? (l = "\u23A7", m = "\u23A9", p = "\u23AA", f = "Size4-Regular") : "\\rgroup" === e ? (l = "\u23AB", m = "\u23AD", p = "\u23AA", f = "Size4-Regular") : "\\lmoustache" === e ? (l = "\u23A7", m = "\u23AD", p = "\u23AA", f = "Size4-Regular") : "\\rmoustache" === e && (l = "\u23AB", m = "\u23A9", p = "\u23AA", f = "Size4-Regular");
        var v = c(l, f, i),
          g = v.height + v.depth,
          y = c(p, f, i),
          b = y.height + y.depth,
          x = c(m, f, i),
          w = x.height + x.depth,
          k = 0,
          M = 1;
        if (null !== u) {
          var S = c(u, f, i);
          k = S.height + S.depth, M = 2;
        }
        var z = g + w + k,
          O = Math.ceil((t - z) / (M * b)),
          T = z + O * M * b,
          A = n.fontMetrics().axisHeight;
        r && (A *= n.sizeMultiplier);
        var N = T / 2 - A,
          B = [];
        if (B.push(d(m, f, i)), null === u) for (var q = 0; q < O; q++) B.push(d(p, f, i));else {
          for (var C = 0; C < O; C++) B.push(d(p, f, i));
          B.push(d(u, f, i));
          for (var E = 0; E < O; E++) B.push(d(p, f, i));
        }
        B.push(d(l, f, i));
        var j = n.havingBaseStyle(a.a.TEXT),
          R = o.a.makeVList({
            positionType: "bottom",
            positionData: N,
            children: B
          }, j);
        return h(o.a.makeSpan(["delimsizing", "mult"], [R], j), a.a.TEXT, n, s);
      },
      v = function v(e, t, r, n) {
        var a = void 0;
        "sqrtTall" === e && (a = "M702 80H400000v40H742v" + (r - 54 - 80) + "l-4 4-4 4c-.667.7\n-2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1h-12l-28-84c-16.667-52-96.667\n-294.333-240-727l-212 -643 -85 170c-4-3.333-8.333-7.667-13 -13l-13-13l77-155\n 77-156c66 199.333 139 419.667 219 661 l218 661zM702 80H400000v40H742z");
        var s = new i.a.pathNode(e, a),
          l = new i.a.svgNode([s], {
            width: "400em",
            height: t + "em",
            viewBox: "0 0 400000 " + r,
            preserveAspectRatio: "xMinYMin slice"
          });
        return o.a.makeSpan(["hide-tail"], [l], n);
      },
      g = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "\\surd"],
      y = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache"],
      b = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
      x = [0, 1.2, 1.8, 2.4, 3],
      w = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }],
      k = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "stack"
      }],
      M = [{
        type: "small",
        style: a.a.SCRIPTSCRIPT
      }, {
        type: "small",
        style: a.a.SCRIPT
      }, {
        type: "small",
        style: a.a.TEXT
      }, {
        type: "large",
        size: 1
      }, {
        type: "large",
        size: 2
      }, {
        type: "large",
        size: 3
      }, {
        type: "large",
        size: 4
      }, {
        type: "stack"
      }],
      S = function S(e, t, r, n) {
        for (var a, i = Math.min(2, 3 - n.style.size); i < r.length && "stack" !== r[i].type; i++) {
          var o = c(e, "small" === (a = r[i]).type ? "Main-Regular" : "large" === a.type ? "Size" + a.size + "-Regular" : "stack" === a.type ? "Size4-Regular" : void 0, "math"),
            s = o.height + o.depth;
          if ("small" === r[i].type && (s *= n.havingBaseStyle(r[i].style).sizeMultiplier), s > t) return r[i];
        }
        return r[r.length - 1];
      },
      z = function z(e, t, r, n, a, i) {
        "<" === e || "\\lt" === e || "\u27E8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27E9" !== e || (e = "\\rangle");
        var s = void 0;
        s = u.a.contains(b, e) ? w : u.a.contains(g, e) ? M : k;
        var l,
          c,
          d,
          v,
          y,
          x,
          z,
          O,
          T = S(e, t, s, n);
        return "small" === T.type ? (l = e, c = T.style, d = r, v = n, y = a, x = i, z = o.a.makeSymbol(l, "Main-Regular", y, v), O = h(z, c, v, x), d && p(O, v, c), O) : "large" === T.type ? m(e, T.size, r, n, a, i) : f(e, t, r, n, a, i);
      };
    t.a = {
      sqrtImage: function sqrtImage(e, t) {
        var r = S("\\surd", e, M, t),
          n = void 0,
          a = t.sizeMultiplier,
          i = 0,
          o = 0,
          s = 0;
        "small" === r.type ? (s = 1080, o = 1 * (a = t.havingBaseStyle(r.style).sizeMultiplier / t.sizeMultiplier), (n = v("sqrtMain", i = 1.08 * a, s, t)).style.minWidth = "0.853em", n.advanceWidth = .833 * a) : "large" === r.type ? (s = 1080 * x[r.size], o = x[r.size] / a, i = (x[r.size] + .08) / a, (n = v("sqrtSize" + r.size, i, s, t)).style.minWidth = "1.02em", n.advanceWidth = 1 / a) : (i = e / a + .08, o = e / a, s = Math.floor(1e3 * e) + 80, (n = v("sqrtTall", i, s, t)).style.minWidth = "0.742em", n.advanceWidth = 1.056 / a);
        return n.height = o, n.style.height = i + "em", {
          span: n,
          ruleWidth: t.fontMetrics().sqrtRuleThickness * a
        };
      },
      sizedDelim: function sizedDelim(e, t, r, a, i) {
        if ("<" === e || "\\lt" === e || "\u27E8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27E9" !== e || (e = "\\rangle"), u.a.contains(g, e) || u.a.contains(b, e)) return m(e, t, !1, r, a, i);
        if (u.a.contains(y, e)) return f(e, x[t], !1, r, a, i);
        throw new n.a("Illegal delimiter: '" + e + "'");
      },
      customSizedDelim: z,
      leftRightDelim: function leftRightDelim(e, t, r, n, a, i) {
        var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
          s = 5 / n.fontMetrics().ptPerEm,
          l = Math.max(t - o, r + o),
          u = Math.max(l / 500 * 901, 2 * l - s);
        return z(e, u, !0, n, a, i);
      }
    };
  }, function (e, t, r) {
    var n = r(20),
      a = r(16).document,
      i = n(a) && n(a.createElement);
    e.exports = function (e) {
      return i ? a.createElement(e) : {};
    };
  }, function (e, t, r) {
    var n = r(25),
      a = r(8),
      i = r(24);
    e.exports = function (e, t) {
      var r = (a.Object || {})[e] || Object[e],
        o = {};
      o[e] = t(r), n(n.S + n.F * i(function () {
        r(1);
      }), "Object", o);
    };
  }, function (e, t, r) {
    var n = r(72);
    e.exports = function (e, t, r) {
      if (n(e), void 0 === t) return e;
      switch (r) {
        case 1:
          return function (r) {
            return e.call(t, r);
          };
        case 2:
          return function (r, n) {
            return e.call(t, r, n);
          };
        case 3:
          return function (r, n, a) {
            return e.call(t, r, n, a);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(82),
      a = r(25),
      i = r(83),
      o = r(26),
      s = r(21),
      l = r(17),
      u = r(84),
      c = r(54),
      h = r(91),
      p = r(11)("iterator"),
      m = !([].keys && "next" in [].keys()),
      d = "values",
      f = function f() {
        return this;
      };
    e.exports = function (e, t, r, v, g, y, b) {
      u(r, t, v);
      var x,
        w,
        k,
        M = function M(e) {
          if (!m && e in T) return T[e];
          switch (e) {
            case "keys":
            case d:
              return function () {
                return new r(this, e);
              };
          }
          return function () {
            return new r(this, e);
          };
        },
        S = t + " Iterator",
        z = g == d,
        O = !1,
        T = e.prototype,
        A = T[p] || T["@@iterator"] || g && T[g],
        N = A || M(g),
        B = g ? z ? M("entries") : N : void 0,
        q = "Array" == t && T.entries || A;
      if (q && (k = h(q.call(new e()))) !== Object.prototype && (c(k, S, !0), n || s(k, p) || o(k, p, f)), z && A && A.name !== d && (O = !0, N = function N() {
        return A.call(this);
      }), n && !b || !m && !O && T[p] || o(T, p, N), l[t] = N, l[S] = f, g) if (x = {
        values: z ? N : M(d),
        keys: y ? N : M("keys"),
        entries: B
      }, b) for (w in x) w in T || i(T, w, x[w]);else a(a.P + a.F * (m || O), t, x);
      return x;
    };
  }, function (e, t, r) {
    var n = r(50);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == n(e) ? e.split("") : Object(e);
    };
  }, function (e, t) {
    var r = {}.toString;
    e.exports = function (e) {
      return r.call(e).slice(8, -1);
    };
  }, function (e, t, r) {
    var n = r(37),
      a = Math.min;
    e.exports = function (e) {
      return e > 0 ? a(n(e), 9007199254740991) : 0;
    };
  }, function (e, t, r) {
    var n = r(16),
      a = "__core-js_shared__",
      i = n[a] || (n[a] = {});
    e.exports = function (e) {
      return i[e] || (i[e] = {});
    };
  }, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
  }, function (e, t, r) {
    var n = r(15).f,
      a = r(21),
      i = r(11)("toStringTag");
    e.exports = function (e, t, r) {
      e && !a(e = r ? e : e.prototype, i) && n(e, i, {
        configurable: !0,
        value: t
      });
    };
  }, function (e, t, r) {
    var n = r(56),
      a = r(11)("iterator"),
      i = r(17);
    e.exports = r(8).getIteratorMethod = function (e) {
      if (void 0 != e) return e[a] || e["@@iterator"] || i[n(e)];
    };
  }, function (e, t, r) {
    var n = r(50),
      a = r(11)("toStringTag"),
      i = "Arguments" == n(function () {
        return arguments;
      }());
    e.exports = function (e) {
      var t, r, o;
      return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (r = function (e, t) {
        try {
          return e[t];
        } catch (e) {}
      }(t = Object(e), a)) ? r : i ? n(t) : "Object" == (o = n(t)) && "function" == typeof t.callee ? "Arguments" : o;
    };
  }, function (e, t, r) {
    "use strict";

    t.__esModule = !0;
    var n = i(r(97)),
      a = i(r(18));
    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      };
    }
    t["default"] = function () {
      return function (e, t) {
        if (Array.isArray(e)) return e;
        if ((0, n["default"])(Object(e))) return function (e, t) {
          var r = [],
            n = !0,
            i = !1,
            o = void 0;
          try {
            for (var s, l = (0, a["default"])(e); !(n = (s = l.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
          } catch (e) {
            i = !0, o = e;
          } finally {
            try {
              !n && l["return"] && l["return"]();
            } finally {
              if (i) throw o;
            }
          }
          return r;
        }(e, t);
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      };
    }();
  }, function (e, t, r) {
    r(99);
    for (var n = r(16), a = r(26), i = r(17), o = r(11)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
      var u = s[l],
        c = n[u],
        h = c && c.prototype;
      h && !h[o] && a(h, o, u), i[u] = i.Array;
    }
  }, function (e, t, r) {
    "use strict";

    t.a = {
      "AMS-Regular": {
        65: [0, .68889, 0, 0, .72222],
        66: [0, .68889, 0, 0, .66667],
        67: [0, .68889, 0, 0, .72222],
        68: [0, .68889, 0, 0, .72222],
        69: [0, .68889, 0, 0, .66667],
        70: [0, .68889, 0, 0, .61111],
        71: [0, .68889, 0, 0, .77778],
        72: [0, .68889, 0, 0, .77778],
        73: [0, .68889, 0, 0, .38889],
        74: [.16667, .68889, 0, 0, .5],
        75: [0, .68889, 0, 0, .77778],
        76: [0, .68889, 0, 0, .66667],
        77: [0, .68889, 0, 0, .94445],
        78: [0, .68889, 0, 0, .72222],
        79: [.16667, .68889, 0, 0, .77778],
        80: [0, .68889, 0, 0, .61111],
        81: [.16667, .68889, 0, 0, .77778],
        82: [0, .68889, 0, 0, .72222],
        83: [0, .68889, 0, 0, .55556],
        84: [0, .68889, 0, 0, .66667],
        85: [0, .68889, 0, 0, .72222],
        86: [0, .68889, 0, 0, .72222],
        87: [0, .68889, 0, 0, 1],
        88: [0, .68889, 0, 0, .72222],
        89: [0, .68889, 0, 0, .72222],
        90: [0, .68889, 0, 0, .66667],
        107: [0, .68889, 0, 0, .55556],
        165: [0, .675, .025, 0, .75],
        174: [.15559, .69224, 0, 0, .94666],
        240: [0, .68889, 0, 0, .55556],
        295: [0, .68889, 0, 0, .54028],
        710: [0, .825, 0, 0, 2.33334],
        732: [0, .9, 0, 0, 2.33334],
        770: [0, .825, 0, 0, 2.33334],
        771: [0, .9, 0, 0, 2.33334],
        989: [.08167, .58167, 0, 0, .77778],
        1008: [0, .43056, .04028, 0, .66667],
        8245: [0, .54986, 0, 0, .275],
        8463: [0, .68889, 0, 0, .54028],
        8487: [0, .68889, 0, 0, .72222],
        8498: [0, .68889, 0, 0, .55556],
        8502: [0, .68889, 0, 0, .66667],
        8503: [0, .68889, 0, 0, .44445],
        8504: [0, .68889, 0, 0, .66667],
        8513: [0, .68889, 0, 0, .63889],
        8592: [-.03598, .46402, 0, 0, .5],
        8594: [-.03598, .46402, 0, 0, .5],
        8602: [-.13313, .36687, 0, 0, 1],
        8603: [-.13313, .36687, 0, 0, 1],
        8606: [.01354, .52239, 0, 0, 1],
        8608: [.01354, .52239, 0, 0, 1],
        8610: [.01354, .52239, 0, 0, 1.11111],
        8611: [.01354, .52239, 0, 0, 1.11111],
        8619: [0, .54986, 0, 0, 1],
        8620: [0, .54986, 0, 0, 1],
        8621: [-.13313, .37788, 0, 0, 1.38889],
        8622: [-.13313, .36687, 0, 0, 1],
        8624: [0, .69224, 0, 0, .5],
        8625: [0, .69224, 0, 0, .5],
        8630: [0, .43056, 0, 0, 1],
        8631: [0, .43056, 0, 0, 1],
        8634: [.08198, .58198, 0, 0, .77778],
        8635: [.08198, .58198, 0, 0, .77778],
        8638: [.19444, .69224, 0, 0, .41667],
        8639: [.19444, .69224, 0, 0, .41667],
        8642: [.19444, .69224, 0, 0, .41667],
        8643: [.19444, .69224, 0, 0, .41667],
        8644: [.1808, .675, 0, 0, 1],
        8646: [.1808, .675, 0, 0, 1],
        8647: [.1808, .675, 0, 0, 1],
        8648: [.19444, .69224, 0, 0, .83334],
        8649: [.1808, .675, 0, 0, 1],
        8650: [.19444, .69224, 0, 0, .83334],
        8651: [.01354, .52239, 0, 0, 1],
        8652: [.01354, .52239, 0, 0, 1],
        8653: [-.13313, .36687, 0, 0, 1],
        8654: [-.13313, .36687, 0, 0, 1],
        8655: [-.13313, .36687, 0, 0, 1],
        8666: [.13667, .63667, 0, 0, 1],
        8667: [.13667, .63667, 0, 0, 1],
        8669: [-.13313, .37788, 0, 0, 1],
        8672: [-.064, .437, 0, 0, 1187],
        8674: [-.064, .437, 0, 0, 1167],
        8705: [0, .825, 0, 0, .5],
        8708: [0, .68889, 0, 0, .55556],
        8709: [.08167, .58167, 0, 0, .77778],
        8717: [0, .43056, 0, 0, .42917],
        8722: [-.03598, .46402, 0, 0, .5],
        8724: [.08198, .69224, 0, 0, .77778],
        8726: [.08167, .58167, 0, 0, .77778],
        8733: [0, .69224, 0, 0, .77778],
        8736: [0, .69224, 0, 0, .72222],
        8737: [0, .69224, 0, 0, .72222],
        8738: [.03517, .52239, 0, 0, .72222],
        8739: [.08167, .58167, 0, 0, .22222],
        8740: [.25142, .74111, 0, 0, .27778],
        8741: [.08167, .58167, 0, 0, .38889],
        8742: [.25142, .74111, 0, 0, .5],
        8756: [0, .69224, 0, 0, .66667],
        8757: [0, .69224, 0, 0, .66667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8765: [-.13313, .37788, 0, 0, .77778],
        8769: [-.13313, .36687, 0, 0, .77778],
        8770: [-.03625, .46375, 0, 0, .77778],
        8774: [.30274, .79383, 0, 0, .77778],
        8776: [-.01688, .48312, 0, 0, .77778],
        8778: [.08167, .58167, 0, 0, .77778],
        8782: [.06062, .54986, 0, 0, .77778],
        8783: [.06062, .54986, 0, 0, .77778],
        8785: [.08198, .58198, 0, 0, .77778],
        8786: [.08198, .58198, 0, 0, .77778],
        8787: [.08198, .58198, 0, 0, .77778],
        8790: [0, .69224, 0, 0, .77778],
        8791: [.22958, .72958, 0, 0, .77778],
        8796: [.08198, .91667, 0, 0, .77778],
        8806: [.25583, .75583, 0, 0, .77778],
        8807: [.25583, .75583, 0, 0, .77778],
        8808: [.25142, .75726, 0, 0, .77778],
        8809: [.25142, .75726, 0, 0, .77778],
        8812: [.25583, .75583, 0, 0, .5],
        8814: [.20576, .70576, 0, 0, .77778],
        8815: [.20576, .70576, 0, 0, .77778],
        8816: [.30274, .79383, 0, 0, .77778],
        8817: [.30274, .79383, 0, 0, .77778],
        8818: [.22958, .72958, 0, 0, .77778],
        8819: [.22958, .72958, 0, 0, .77778],
        8822: [.1808, .675, 0, 0, .77778],
        8823: [.1808, .675, 0, 0, .77778],
        8828: [.13667, .63667, 0, 0, .77778],
        8829: [.13667, .63667, 0, 0, .77778],
        8830: [.22958, .72958, 0, 0, .77778],
        8831: [.22958, .72958, 0, 0, .77778],
        8832: [.20576, .70576, 0, 0, .77778],
        8833: [.20576, .70576, 0, 0, .77778],
        8840: [.30274, .79383, 0, 0, .77778],
        8841: [.30274, .79383, 0, 0, .77778],
        8842: [.13597, .63597, 0, 0, .77778],
        8843: [.13597, .63597, 0, 0, .77778],
        8847: [.03517, .54986, 0, 0, .77778],
        8848: [.03517, .54986, 0, 0, .77778],
        8858: [.08198, .58198, 0, 0, .77778],
        8859: [.08198, .58198, 0, 0, .77778],
        8861: [.08198, .58198, 0, 0, .77778],
        8862: [0, .675, 0, 0, .77778],
        8863: [0, .675, 0, 0, .77778],
        8864: [0, .675, 0, 0, .77778],
        8865: [0, .675, 0, 0, .77778],
        8872: [0, .69224, 0, 0, .61111],
        8873: [0, .69224, 0, 0, .72222],
        8874: [0, .69224, 0, 0, .88889],
        8876: [0, .68889, 0, 0, .61111],
        8877: [0, .68889, 0, 0, .61111],
        8878: [0, .68889, 0, 0, .72222],
        8879: [0, .68889, 0, 0, .72222],
        8882: [.03517, .54986, 0, 0, .77778],
        8883: [.03517, .54986, 0, 0, .77778],
        8884: [.13667, .63667, 0, 0, .77778],
        8885: [.13667, .63667, 0, 0, .77778],
        8888: [0, .54986, 0, 0, 1.11111],
        8890: [.19444, .43056, 0, 0, .55556],
        8891: [.19444, .69224, 0, 0, .61111],
        8892: [.19444, .69224, 0, 0, .61111],
        8901: [0, .54986, 0, 0, .27778],
        8903: [.08167, .58167, 0, 0, .77778],
        8905: [.08167, .58167, 0, 0, .77778],
        8906: [.08167, .58167, 0, 0, .77778],
        8907: [0, .69224, 0, 0, .77778],
        8908: [0, .69224, 0, 0, .77778],
        8909: [-.03598, .46402, 0, 0, .77778],
        8910: [0, .54986, 0, 0, .76042],
        8911: [0, .54986, 0, 0, .76042],
        8912: [.03517, .54986, 0, 0, .77778],
        8913: [.03517, .54986, 0, 0, .77778],
        8914: [0, .54986, 0, 0, .66667],
        8915: [0, .54986, 0, 0, .66667],
        8916: [0, .69224, 0, 0, .66667],
        8918: [.0391, .5391, 0, 0, .77778],
        8919: [.0391, .5391, 0, 0, .77778],
        8920: [.03517, .54986, 0, 0, 1.33334],
        8921: [.03517, .54986, 0, 0, 1.33334],
        8922: [.38569, .88569, 0, 0, .77778],
        8923: [.38569, .88569, 0, 0, .77778],
        8926: [.13667, .63667, 0, 0, .77778],
        8927: [.13667, .63667, 0, 0, .77778],
        8928: [.30274, .79383, 0, 0, .77778],
        8929: [.30274, .79383, 0, 0, .77778],
        8934: [.23222, .74111, 0, 0, .77778],
        8935: [.23222, .74111, 0, 0, .77778],
        8936: [.23222, .74111, 0, 0, .77778],
        8937: [.23222, .74111, 0, 0, .77778],
        8938: [.20576, .70576, 0, 0, .77778],
        8939: [.20576, .70576, 0, 0, .77778],
        8940: [.30274, .79383, 0, 0, .77778],
        8941: [.30274, .79383, 0, 0, .77778],
        8994: [.19444, .69224, 0, 0, .77778],
        8995: [.19444, .69224, 0, 0, .77778],
        9416: [.15559, .69224, 0, 0, .90222],
        9484: [0, .69224, 0, 0, .5],
        9488: [0, .69224, 0, 0, .5],
        9492: [0, .37788, 0, 0, .5],
        9496: [0, .37788, 0, 0, .5],
        9585: [.19444, .68889, 0, 0, .88889],
        9586: [.19444, .74111, 0, 0, .88889],
        9632: [0, .675, 0, 0, .77778],
        9633: [0, .675, 0, 0, .77778],
        9650: [0, .54986, 0, 0, .72222],
        9651: [0, .54986, 0, 0, .72222],
        9654: [.03517, .54986, 0, 0, .77778],
        9660: [0, .54986, 0, 0, .72222],
        9661: [0, .54986, 0, 0, .72222],
        9664: [.03517, .54986, 0, 0, .77778],
        9674: [.11111, .69224, 0, 0, .66667],
        9733: [.19444, .69224, 0, 0, .94445],
        10003: [0, .69224, 0, 0, .83334],
        10016: [0, .69224, 0, 0, .83334],
        10731: [.11111, .69224, 0, 0, .66667],
        10846: [.19444, .75583, 0, 0, .61111],
        10877: [.13667, .63667, 0, 0, .77778],
        10878: [.13667, .63667, 0, 0, .77778],
        10885: [.25583, .75583, 0, 0, .77778],
        10886: [.25583, .75583, 0, 0, .77778],
        10887: [.13597, .63597, 0, 0, .77778],
        10888: [.13597, .63597, 0, 0, .77778],
        10889: [.26167, .75726, 0, 0, .77778],
        10890: [.26167, .75726, 0, 0, .77778],
        10891: [.48256, .98256, 0, 0, .77778],
        10892: [.48256, .98256, 0, 0, .77778],
        10901: [.13667, .63667, 0, 0, .77778],
        10902: [.13667, .63667, 0, 0, .77778],
        10933: [.25142, .75726, 0, 0, .77778],
        10934: [.25142, .75726, 0, 0, .77778],
        10935: [.26167, .75726, 0, 0, .77778],
        10936: [.26167, .75726, 0, 0, .77778],
        10937: [.26167, .75726, 0, 0, .77778],
        10938: [.26167, .75726, 0, 0, .77778],
        10949: [.25583, .75583, 0, 0, .77778],
        10950: [.25583, .75583, 0, 0, .77778],
        10955: [.28481, .79383, 0, 0, .77778],
        10956: [.28481, .79383, 0, 0, .77778],
        57350: [.08167, .58167, 0, 0, .22222],
        57351: [.08167, .58167, 0, 0, .38889],
        57352: [.08167, .58167, 0, 0, .77778],
        57353: [0, .43056, .04028, 0, .66667],
        57356: [.25142, .75726, 0, 0, .77778],
        57357: [.25142, .75726, 0, 0, .77778],
        57358: [.41951, .91951, 0, 0, .77778],
        57359: [.30274, .79383, 0, 0, .77778],
        57360: [.30274, .79383, 0, 0, .77778],
        57361: [.41951, .91951, 0, 0, .77778],
        57366: [.25142, .75726, 0, 0, .77778],
        57367: [.25142, .75726, 0, 0, .77778],
        57368: [.25142, .75726, 0, 0, .77778],
        57369: [.25142, .75726, 0, 0, .77778],
        57370: [.13597, .63597, 0, 0, .77778],
        57371: [.13597, .63597, 0, 0, .77778]
      },
      "Caligraphic-Regular": {
        48: [0, .43056, 0, 0, .5],
        49: [0, .43056, 0, 0, .5],
        50: [0, .43056, 0, 0, .5],
        51: [.19444, .43056, 0, 0, .5],
        52: [.19444, .43056, 0, 0, .5],
        53: [.19444, .43056, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [.19444, .43056, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [.19444, .43056, 0, 0, .5],
        65: [0, .68333, 0, .19445, .79847],
        66: [0, .68333, .03041, .13889, .65681],
        67: [0, .68333, .05834, .13889, .52653],
        68: [0, .68333, .02778, .08334, .77139],
        69: [0, .68333, .08944, .11111, .52778],
        70: [0, .68333, .09931, .11111, .71875],
        71: [.09722, .68333, .0593, .11111, .59487],
        72: [0, .68333, .00965, .11111, .84452],
        73: [0, .68333, .07382, 0, .54452],
        74: [.09722, .68333, .18472, .16667, .67778],
        75: [0, .68333, .01445, .05556, .76195],
        76: [0, .68333, 0, .13889, .68972],
        77: [0, .68333, 0, .13889, 1.2009],
        78: [0, .68333, .14736, .08334, .82049],
        79: [0, .68333, .02778, .11111, .79611],
        80: [0, .68333, .08222, .08334, .69556],
        81: [.09722, .68333, 0, .11111, .81667],
        82: [0, .68333, 0, .08334, .8475],
        83: [0, .68333, .075, .13889, .60556],
        84: [0, .68333, .25417, 0, .54464],
        85: [0, .68333, .09931, .08334, .62583],
        86: [0, .68333, .08222, 0, .61278],
        87: [0, .68333, .08222, .08334, .98778],
        88: [0, .68333, .14643, .13889, .7133],
        89: [.09722, .68333, .08222, .08334, .66834],
        90: [0, .68333, .07944, .13889, .72473]
      },
      "Fraktur-Regular": {
        33: [0, .69141, 0, 0, .29574],
        34: [0, .69141, 0, 0, .21471],
        38: [0, .69141, 0, 0, .73786],
        39: [0, .69141, 0, 0, .21201],
        40: [.24982, .74947, 0, 0, .38865],
        41: [.24982, .74947, 0, 0, .38865],
        42: [0, .62119, 0, 0, .27764],
        43: [.08319, .58283, 0, 0, .75623],
        44: [0, .10803, 0, 0, .27764],
        45: [.08319, .58283, 0, 0, .75623],
        46: [0, .10803, 0, 0, .27764],
        47: [.24982, .74947, 0, 0, .50181],
        48: [0, .47534, 0, 0, .50181],
        49: [0, .47534, 0, 0, .50181],
        50: [0, .47534, 0, 0, .50181],
        51: [.18906, .47534, 0, 0, .50181],
        52: [.18906, .47534, 0, 0, .50181],
        53: [.18906, .47534, 0, 0, .50181],
        54: [0, .69141, 0, 0, .50181],
        55: [.18906, .47534, 0, 0, .50181],
        56: [0, .69141, 0, 0, .50181],
        57: [.18906, .47534, 0, 0, .50181],
        58: [0, .47534, 0, 0, .21606],
        59: [.12604, .47534, 0, 0, .21606],
        61: [-.13099, .36866, 0, 0, .75623],
        63: [0, .69141, 0, 0, .36245],
        65: [0, .69141, 0, 0, .7176],
        66: [0, .69141, 0, 0, .88397],
        67: [0, .69141, 0, 0, .61254],
        68: [0, .69141, 0, 0, .83158],
        69: [0, .69141, 0, 0, .66278],
        70: [.12604, .69141, 0, 0, .61119],
        71: [0, .69141, 0, 0, .78539],
        72: [.06302, .69141, 0, 0, .7203],
        73: [0, .69141, 0, 0, .55448],
        74: [.12604, .69141, 0, 0, .55231],
        75: [0, .69141, 0, 0, .66845],
        76: [0, .69141, 0, 0, .66602],
        77: [0, .69141, 0, 0, 1.04953],
        78: [0, .69141, 0, 0, .83212],
        79: [0, .69141, 0, 0, .82699],
        80: [.18906, .69141, 0, 0, .82753],
        81: [.03781, .69141, 0, 0, .82699],
        82: [0, .69141, 0, 0, .82807],
        83: [0, .69141, 0, 0, .82861],
        84: [0, .69141, 0, 0, .66899],
        85: [0, .69141, 0, 0, .64576],
        86: [0, .69141, 0, 0, .83131],
        87: [0, .69141, 0, 0, 1.04602],
        88: [0, .69141, 0, 0, .71922],
        89: [.18906, .69141, 0, 0, .83293],
        90: [.12604, .69141, 0, 0, .60201],
        91: [.24982, .74947, 0, 0, .27764],
        93: [.24982, .74947, 0, 0, .27764],
        94: [0, .69141, 0, 0, .49965],
        97: [0, .47534, 0, 0, .50046],
        98: [0, .69141, 0, 0, .51315],
        99: [0, .47534, 0, 0, .38946],
        100: [0, .62119, 0, 0, .49857],
        101: [0, .47534, 0, 0, .40053],
        102: [.18906, .69141, 0, 0, .32626],
        103: [.18906, .47534, 0, 0, .5037],
        104: [.18906, .69141, 0, 0, .52126],
        105: [0, .69141, 0, 0, .27899],
        106: [0, .69141, 0, 0, .28088],
        107: [0, .69141, 0, 0, .38946],
        108: [0, .69141, 0, 0, .27953],
        109: [0, .47534, 0, 0, .76676],
        110: [0, .47534, 0, 0, .52666],
        111: [0, .47534, 0, 0, .48885],
        112: [.18906, .52396, 0, 0, .50046],
        113: [.18906, .47534, 0, 0, .48912],
        114: [0, .47534, 0, 0, .38919],
        115: [0, .47534, 0, 0, .44266],
        116: [0, .62119, 0, 0, .33301],
        117: [0, .47534, 0, 0, .5172],
        118: [0, .52396, 0, 0, .5118],
        119: [0, .52396, 0, 0, .77351],
        120: [.18906, .47534, 0, 0, .38865],
        121: [.18906, .47534, 0, 0, .49884],
        122: [.18906, .47534, 0, 0, .39054],
        8216: [0, .69141, 0, 0, .21471],
        8217: [0, .69141, 0, 0, .21471],
        58112: [0, .62119, 0, 0, .49749],
        58113: [0, .62119, 0, 0, .4983],
        58114: [.18906, .69141, 0, 0, .33328],
        58115: [.18906, .69141, 0, 0, .32923],
        58116: [.18906, .47534, 0, 0, .50343],
        58117: [0, .69141, 0, 0, .33301],
        58118: [0, .62119, 0, 0, .33409],
        58119: [0, .47534, 0, 0, .50073]
      },
      "Main-Bold": {
        33: [0, .69444, 0, 0, .35],
        34: [0, .69444, 0, 0, .60278],
        35: [.19444, .69444, 0, 0, .95833],
        36: [.05556, .75, 0, 0, .575],
        37: [.05556, .75, 0, 0, .95833],
        38: [0, .69444, 0, 0, .89444],
        39: [0, .69444, 0, 0, .31944],
        40: [.25, .75, 0, 0, .44722],
        41: [.25, .75, 0, 0, .44722],
        42: [0, .75, 0, 0, .575],
        43: [.13333, .63333, 0, 0, .89444],
        44: [.19444, .15556, 0, 0, .31944],
        45: [0, .44444, 0, 0, .38333],
        46: [0, .15556, 0, 0, .31944],
        47: [.25, .75, 0, 0, .575],
        48: [0, .64444, 0, 0, .575],
        49: [0, .64444, 0, 0, .575],
        50: [0, .64444, 0, 0, .575],
        51: [0, .64444, 0, 0, .575],
        52: [0, .64444, 0, 0, .575],
        53: [0, .64444, 0, 0, .575],
        54: [0, .64444, 0, 0, .575],
        55: [0, .64444, 0, 0, .575],
        56: [0, .64444, 0, 0, .575],
        57: [0, .64444, 0, 0, .575],
        58: [0, .44444, 0, 0, .31944],
        59: [.19444, .44444, 0, 0, .31944],
        60: [.08556, .58556, 0, 0, .89444],
        61: [-.10889, .39111, 0, 0, .89444],
        62: [.08556, .58556, 0, 0, .89444],
        63: [0, .69444, 0, 0, .54305],
        64: [0, .69444, 0, 0, .89444],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, 0, 0, .81805],
        67: [0, .68611, 0, 0, .83055],
        68: [0, .68611, 0, 0, .88194],
        69: [0, .68611, 0, 0, .75555],
        70: [0, .68611, 0, 0, .72361],
        71: [0, .68611, 0, 0, .90416],
        72: [0, .68611, 0, 0, .9],
        73: [0, .68611, 0, 0, .43611],
        74: [0, .68611, 0, 0, .59444],
        75: [0, .68611, 0, 0, .90138],
        76: [0, .68611, 0, 0, .69166],
        77: [0, .68611, 0, 0, 1.09166],
        78: [0, .68611, 0, 0, .9],
        79: [0, .68611, 0, 0, .86388],
        80: [0, .68611, 0, 0, .78611],
        81: [.19444, .68611, 0, 0, .86388],
        82: [0, .68611, 0, 0, .8625],
        83: [0, .68611, 0, 0, .63889],
        84: [0, .68611, 0, 0, .8],
        85: [0, .68611, 0, 0, .88472],
        86: [0, .68611, .01597, 0, .86944],
        87: [0, .68611, .01597, 0, 1.18888],
        88: [0, .68611, 0, 0, .86944],
        89: [0, .68611, .02875, 0, .86944],
        90: [0, .68611, 0, 0, .70277],
        91: [.25, .75, 0, 0, .31944],
        92: [.25, .75, 0, 0, .575],
        93: [.25, .75, 0, 0, .31944],
        94: [0, .69444, 0, 0, .575],
        95: [.31, .13444, .03194, 0, .575],
        97: [0, .44444, 0, 0, .55902],
        98: [0, .69444, 0, 0, .63889],
        99: [0, .44444, 0, 0, .51111],
        100: [0, .69444, 0, 0, .63889],
        101: [0, .44444, 0, 0, .52708],
        102: [0, .69444, .10903, 0, .35139],
        103: [.19444, .44444, .01597, 0, .575],
        104: [0, .69444, 0, 0, .63889],
        105: [0, .69444, 0, 0, .31944],
        106: [.19444, .69444, 0, 0, .35139],
        107: [0, .69444, 0, 0, .60694],
        108: [0, .69444, 0, 0, .31944],
        109: [0, .44444, 0, 0, .95833],
        110: [0, .44444, 0, 0, .63889],
        111: [0, .44444, 0, 0, .575],
        112: [.19444, .44444, 0, 0, .63889],
        113: [.19444, .44444, 0, 0, .60694],
        114: [0, .44444, 0, 0, .47361],
        115: [0, .44444, 0, 0, .45361],
        116: [0, .63492, 0, 0, .44722],
        117: [0, .44444, 0, 0, .63889],
        118: [0, .44444, .01597, 0, .60694],
        119: [0, .44444, .01597, 0, .83055],
        120: [0, .44444, 0, 0, .60694],
        121: [.19444, .44444, .01597, 0, .60694],
        122: [0, .44444, 0, 0, .51111],
        123: [.25, .75, 0, 0, .575],
        124: [.25, .75, 0, 0, .31944],
        125: [.25, .75, 0, 0, .575],
        126: [.35, .34444, 0, 0, .575],
        168: [0, .69444, 0, 0, .575],
        172: [0, .44444, 0, 0, .76666],
        176: [0, .69444, 0, 0, .86944],
        177: [.13333, .63333, 0, 0, .89444],
        198: [0, .68611, 0, 0, 1.04166],
        215: [.13333, .63333, 0, 0, .89444],
        216: [.04861, .73472, 0, 0, .89444],
        223: [0, .69444, 0, 0, .59722],
        230: [0, .44444, 0, 0, .83055],
        247: [.13333, .63333, 0, 0, .89444],
        248: [.09722, .54167, 0, 0, .575],
        305: [0, .44444, 0, 0, .31944],
        338: [0, .68611, 0, 0, 1.16944],
        339: [0, .44444, 0, 0, .89444],
        567: [.19444, .44444, 0, 0, .35139],
        710: [0, .69444, 0, 0, .575],
        711: [0, .63194, 0, 0, .575],
        713: [0, .59611, 0, 0, .575],
        714: [0, .69444, 0, 0, .575],
        715: [0, .69444, 0, 0, .575],
        728: [0, .69444, 0, 0, .575],
        729: [0, .69444, 0, 0, .31944],
        730: [0, .69444, 0, 0, .86944],
        732: [0, .69444, 0, 0, .575],
        733: [0, .69444, 0, 0, .575],
        824: [.19444, .69444, 0, 0, 0],
        915: [0, .68611, 0, 0, .69166],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, 0, 0, .89444],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, 0, 0, .76666],
        928: [0, .68611, 0, 0, .9],
        931: [0, .68611, 0, 0, .83055],
        933: [0, .68611, 0, 0, .89444],
        934: [0, .68611, 0, 0, .83055],
        936: [0, .68611, 0, 0, .89444],
        937: [0, .68611, 0, 0, .83055],
        8211: [0, .44444, .03194, 0, .575],
        8212: [0, .44444, .03194, 0, 1.14999],
        8216: [0, .69444, 0, 0, .31944],
        8217: [0, .69444, 0, 0, .31944],
        8220: [0, .69444, 0, 0, .60278],
        8221: [0, .69444, 0, 0, .60278],
        8224: [.19444, .69444, 0, 0, .51111],
        8225: [.19444, .69444, 0, 0, .51111],
        8242: [0, .55556, 0, 0, .34444],
        8407: [0, .72444, .15486, 0, .575],
        8463: [0, .69444, 0, 0, .66759],
        8465: [0, .69444, 0, 0, .83055],
        8467: [0, .69444, 0, 0, .47361],
        8472: [.19444, .44444, 0, 0, .74027],
        8476: [0, .69444, 0, 0, .83055],
        8501: [0, .69444, 0, 0, .70277],
        8592: [-.10889, .39111, 0, 0, 1.14999],
        8593: [.19444, .69444, 0, 0, .575],
        8594: [-.10889, .39111, 0, 0, 1.14999],
        8595: [.19444, .69444, 0, 0, .575],
        8596: [-.10889, .39111, 0, 0, 1.14999],
        8597: [.25, .75, 0, 0, .575],
        8598: [.19444, .69444, 0, 0, 1.14999],
        8599: [.19444, .69444, 0, 0, 1.14999],
        8600: [.19444, .69444, 0, 0, 1.14999],
        8601: [.19444, .69444, 0, 0, 1.14999],
        8636: [-.10889, .39111, 0, 0, 1.14999],
        8637: [-.10889, .39111, 0, 0, 1.14999],
        8640: [-.10889, .39111, 0, 0, 1.14999],
        8641: [-.10889, .39111, 0, 0, 1.14999],
        8656: [-.10889, .39111, 0, 0, 1.14999],
        8657: [.19444, .69444, 0, 0, .70277],
        8658: [-.10889, .39111, 0, 0, 1.14999],
        8659: [.19444, .69444, 0, 0, .70277],
        8660: [-.10889, .39111, 0, 0, 1.14999],
        8661: [.25, .75, 0, 0, .70277],
        8704: [0, .69444, 0, 0, .63889],
        8706: [0, .69444, .06389, 0, .62847],
        8707: [0, .69444, 0, 0, .63889],
        8709: [.05556, .75, 0, 0, .575],
        8711: [0, .68611, 0, 0, .95833],
        8712: [.08556, .58556, 0, 0, .76666],
        8715: [.08556, .58556, 0, 0, .76666],
        8722: [.13333, .63333, 0, 0, .89444],
        8723: [.13333, .63333, 0, 0, .89444],
        8725: [.25, .75, 0, 0, .575],
        8726: [.25, .75, 0, 0, .575],
        8727: [-.02778, .47222, 0, 0, .575],
        8728: [-.02639, .47361, 0, 0, .575],
        8729: [-.02639, .47361, 0, 0, .575],
        8730: [.18, .82, 0, 0, .95833],
        8733: [0, .44444, 0, 0, .89444],
        8734: [0, .44444, 0, 0, 1.14999],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .31944],
        8741: [.25, .75, 0, 0, .575],
        8743: [0, .55556, 0, 0, .76666],
        8744: [0, .55556, 0, 0, .76666],
        8745: [0, .55556, 0, 0, .76666],
        8746: [0, .55556, 0, 0, .76666],
        8747: [.19444, .69444, .12778, 0, .56875],
        8764: [-.10889, .39111, 0, 0, .89444],
        8768: [.19444, .69444, 0, 0, .31944],
        8771: [.00222, .50222, 0, 0, .89444],
        8776: [.02444, .52444, 0, 0, .89444],
        8781: [.00222, .50222, 0, 0, .89444],
        8801: [.00222, .50222, 0, 0, .89444],
        8804: [.19667, .69667, 0, 0, .89444],
        8805: [.19667, .69667, 0, 0, .89444],
        8810: [.08556, .58556, 0, 0, 1.14999],
        8811: [.08556, .58556, 0, 0, 1.14999],
        8826: [.08556, .58556, 0, 0, .89444],
        8827: [.08556, .58556, 0, 0, .89444],
        8834: [.08556, .58556, 0, 0, .89444],
        8835: [.08556, .58556, 0, 0, .89444],
        8838: [.19667, .69667, 0, 0, .89444],
        8839: [.19667, .69667, 0, 0, .89444],
        8846: [0, .55556, 0, 0, .76666],
        8849: [.19667, .69667, 0, 0, .89444],
        8850: [.19667, .69667, 0, 0, .89444],
        8851: [0, .55556, 0, 0, .76666],
        8852: [0, .55556, 0, 0, .76666],
        8853: [.13333, .63333, 0, 0, .89444],
        8854: [.13333, .63333, 0, 0, .89444],
        8855: [.13333, .63333, 0, 0, .89444],
        8856: [.13333, .63333, 0, 0, .89444],
        8857: [.13333, .63333, 0, 0, .89444],
        8866: [0, .69444, 0, 0, .70277],
        8867: [0, .69444, 0, 0, .70277],
        8868: [0, .69444, 0, 0, .89444],
        8869: [0, .69444, 0, 0, .89444],
        8900: [-.02639, .47361, 0, 0, .575],
        8901: [-.02639, .47361, 0, 0, .31944],
        8902: [-.02778, .47222, 0, 0, .575],
        8968: [.25, .75, 0, 0, .51111],
        8969: [.25, .75, 0, 0, .51111],
        8970: [.25, .75, 0, 0, .51111],
        8971: [.25, .75, 0, 0, .51111],
        8994: [-.13889, .36111, 0, 0, 1.14999],
        8995: [-.13889, .36111, 0, 0, 1.14999],
        9651: [.19444, .69444, 0, 0, 1.02222],
        9657: [-.02778, .47222, 0, 0, .575],
        9661: [.19444, .69444, 0, 0, 1.02222],
        9667: [-.02778, .47222, 0, 0, .575],
        9711: [.19444, .69444, 0, 0, 1.14999],
        9824: [.12963, .69444, 0, 0, .89444],
        9825: [.12963, .69444, 0, 0, .89444],
        9826: [.12963, .69444, 0, 0, .89444],
        9827: [.12963, .69444, 0, 0, .89444],
        9837: [0, .75, 0, 0, .44722],
        9838: [.19444, .69444, 0, 0, .44722],
        9839: [.19444, .69444, 0, 0, .44722],
        10216: [.25, .75, 0, 0, .44722],
        10217: [.25, .75, 0, 0, .44722],
        10815: [0, .68611, 0, 0, .9],
        10927: [.19667, .69667, 0, 0, .89444],
        10928: [.19667, .69667, 0, 0, .89444]
      },
      "Main-BoldItalic": {
        33: [0, .69444, .11417, 0, .38611],
        34: [0, .69444, .07939, 0, .62055],
        35: [.19444, .69444, .06833, 0, .94444],
        37: [.05556, .75, .12861, 0, .94444],
        38: [0, .69444, .08528, 0, .88555],
        39: [0, .69444, .12945, 0, .35555],
        40: [.25, .75, .15806, 0, .47333],
        41: [.25, .75, .03306, 0, .47333],
        42: [0, .75, .14333, 0, .59111],
        43: [.10333, .60333, .03306, 0, .88555],
        44: [.19444, .14722, 0, 0, .35555],
        45: [0, .44444, .02611, 0, .41444],
        46: [0, .14722, 0, 0, .35555],
        47: [.25, .75, .15806, 0, .59111],
        48: [0, .64444, .13167, 0, .59111],
        49: [0, .64444, .13167, 0, .59111],
        50: [0, .64444, .13167, 0, .59111],
        51: [0, .64444, .13167, 0, .59111],
        52: [.19444, .64444, .13167, 0, .59111],
        53: [0, .64444, .13167, 0, .59111],
        54: [0, .64444, .13167, 0, .59111],
        55: [.19444, .64444, .13167, 0, .59111],
        56: [0, .64444, .13167, 0, .59111],
        57: [0, .64444, .13167, 0, .59111],
        58: [0, .44444, .06695, 0, .35555],
        59: [.19444, .44444, .06695, 0, .35555],
        61: [-.10889, .39111, .06833, 0, .88555],
        63: [0, .69444, .11472, 0, .59111],
        64: [0, .69444, .09208, 0, .88555],
        65: [0, .68611, 0, 0, .86555],
        66: [0, .68611, .0992, 0, .81666],
        67: [0, .68611, .14208, 0, .82666],
        68: [0, .68611, .09062, 0, .87555],
        69: [0, .68611, .11431, 0, .75666],
        70: [0, .68611, .12903, 0, .72722],
        71: [0, .68611, .07347, 0, .89527],
        72: [0, .68611, .17208, 0, .8961],
        73: [0, .68611, .15681, 0, .47166],
        74: [0, .68611, .145, 0, .61055],
        75: [0, .68611, .14208, 0, .89499],
        76: [0, .68611, 0, 0, .69777],
        77: [0, .68611, .17208, 0, 1.07277],
        78: [0, .68611, .17208, 0, .8961],
        79: [0, .68611, .09062, 0, .85499],
        80: [0, .68611, .0992, 0, .78721],
        81: [.19444, .68611, .09062, 0, .85499],
        82: [0, .68611, .02559, 0, .85944],
        83: [0, .68611, .11264, 0, .64999],
        84: [0, .68611, .12903, 0, .7961],
        85: [0, .68611, .17208, 0, .88083],
        86: [0, .68611, .18625, 0, .86555],
        87: [0, .68611, .18625, 0, 1.15999],
        88: [0, .68611, .15681, 0, .86555],
        89: [0, .68611, .19803, 0, .86555],
        90: [0, .68611, .14208, 0, .70888],
        91: [.25, .75, .1875, 0, .35611],
        93: [.25, .75, .09972, 0, .35611],
        94: [0, .69444, .06709, 0, .59111],
        95: [.31, .13444, .09811, 0, .59111],
        97: [0, .44444, .09426, 0, .59111],
        98: [0, .69444, .07861, 0, .53222],
        99: [0, .44444, .05222, 0, .53222],
        100: [0, .69444, .10861, 0, .59111],
        101: [0, .44444, .085, 0, .53222],
        102: [.19444, .69444, .21778, 0, .4],
        103: [.19444, .44444, .105, 0, .53222],
        104: [0, .69444, .09426, 0, .59111],
        105: [0, .69326, .11387, 0, .35555],
        106: [.19444, .69326, .1672, 0, .35555],
        107: [0, .69444, .11111, 0, .53222],
        108: [0, .69444, .10861, 0, .29666],
        109: [0, .44444, .09426, 0, .94444],
        110: [0, .44444, .09426, 0, .64999],
        111: [0, .44444, .07861, 0, .59111],
        112: [.19444, .44444, .07861, 0, .59111],
        113: [.19444, .44444, .105, 0, .53222],
        114: [0, .44444, .11111, 0, .50167],
        115: [0, .44444, .08167, 0, .48694],
        116: [0, .63492, .09639, 0, .385],
        117: [0, .44444, .09426, 0, .62055],
        118: [0, .44444, .11111, 0, .53222],
        119: [0, .44444, .11111, 0, .76777],
        120: [0, .44444, .12583, 0, .56055],
        121: [.19444, .44444, .105, 0, .56166],
        122: [0, .44444, .13889, 0, .49055],
        126: [.35, .34444, .11472, 0, .59111],
        163: [0, .69444, 0, 0, .86853],
        168: [0, .69444, .11473, 0, .59111],
        176: [0, .69444, 0, 0, .94888],
        198: [0, .68611, .11431, 0, 1.02277],
        216: [.04861, .73472, .09062, 0, .88555],
        223: [.19444, .69444, .09736, 0, .665],
        230: [0, .44444, .085, 0, .82666],
        248: [.09722, .54167, .09458, 0, .59111],
        305: [0, .44444, .09426, 0, .35555],
        338: [0, .68611, .11431, 0, 1.14054],
        339: [0, .44444, .085, 0, .82666],
        567: [.19444, .44444, .04611, 0, .385],
        710: [0, .69444, .06709, 0, .59111],
        711: [0, .63194, .08271, 0, .59111],
        713: [0, .59444, .10444, 0, .59111],
        714: [0, .69444, .08528, 0, .59111],
        715: [0, .69444, 0, 0, .59111],
        728: [0, .69444, .10333, 0, .59111],
        729: [0, .69444, .12945, 0, .35555],
        730: [0, .69444, 0, 0, .94888],
        732: [0, .69444, .11472, 0, .59111],
        733: [0, .69444, .11472, 0, .59111],
        915: [0, .68611, .12903, 0, .69777],
        916: [0, .68611, 0, 0, .94444],
        920: [0, .68611, .09062, 0, .88555],
        923: [0, .68611, 0, 0, .80666],
        926: [0, .68611, .15092, 0, .76777],
        928: [0, .68611, .17208, 0, .8961],
        931: [0, .68611, .11431, 0, .82666],
        933: [0, .68611, .10778, 0, .88555],
        934: [0, .68611, .05632, 0, .82666],
        936: [0, .68611, .10778, 0, .88555],
        937: [0, .68611, .0992, 0, .82666],
        8211: [0, .44444, .09811, 0, .59111],
        8212: [0, .44444, .09811, 0, 1.18221],
        8216: [0, .69444, .12945, 0, .35555],
        8217: [0, .69444, .12945, 0, .35555],
        8220: [0, .69444, .16772, 0, .62055],
        8221: [0, .69444, .07939, 0, .62055]
      },
      "Main-Italic": {
        33: [0, .69444, .12417, 0, .30667],
        34: [0, .69444, .06961, 0, .51444],
        35: [.19444, .69444, .06616, 0, .81777],
        37: [.05556, .75, .13639, 0, .81777],
        38: [0, .69444, .09694, 0, .76666],
        39: [0, .69444, .12417, 0, .30667],
        40: [.25, .75, .16194, 0, .40889],
        41: [.25, .75, .03694, 0, .40889],
        42: [0, .75, .14917, 0, .51111],
        43: [.05667, .56167, .03694, 0, .76666],
        44: [.19444, .10556, 0, 0, .30667],
        45: [0, .43056, .02826, 0, .35778],
        46: [0, .10556, 0, 0, .30667],
        47: [.25, .75, .16194, 0, .51111],
        48: [0, .64444, .13556, 0, .51111],
        49: [0, .64444, .13556, 0, .51111],
        50: [0, .64444, .13556, 0, .51111],
        51: [0, .64444, .13556, 0, .51111],
        52: [.19444, .64444, .13556, 0, .51111],
        53: [0, .64444, .13556, 0, .51111],
        54: [0, .64444, .13556, 0, .51111],
        55: [.19444, .64444, .13556, 0, .51111],
        56: [0, .64444, .13556, 0, .51111],
        57: [0, .64444, .13556, 0, .51111],
        58: [0, .43056, .0582, 0, .30667],
        59: [.19444, .43056, .0582, 0, .30667],
        61: [-.13313, .36687, .06616, 0, .76666],
        63: [0, .69444, .1225, 0, .51111],
        64: [0, .69444, .09597, 0, .76666],
        65: [0, .68333, 0, 0, .74333],
        66: [0, .68333, .10257, 0, .70389],
        67: [0, .68333, .14528, 0, .71555],
        68: [0, .68333, .09403, 0, .755],
        69: [0, .68333, .12028, 0, .67833],
        70: [0, .68333, .13305, 0, .65277],
        71: [0, .68333, .08722, 0, .77361],
        72: [0, .68333, .16389, 0, .74333],
        73: [0, .68333, .15806, 0, .38555],
        74: [0, .68333, .14028, 0, .525],
        75: [0, .68333, .14528, 0, .76888],
        76: [0, .68333, 0, 0, .62722],
        77: [0, .68333, .16389, 0, .89666],
        78: [0, .68333, .16389, 0, .74333],
        79: [0, .68333, .09403, 0, .76666],
        80: [0, .68333, .10257, 0, .67833],
        81: [.19444, .68333, .09403, 0, .76666],
        82: [0, .68333, .03868, 0, .72944],
        83: [0, .68333, .11972, 0, .56222],
        84: [0, .68333, .13305, 0, .71555],
        85: [0, .68333, .16389, 0, .74333],
        86: [0, .68333, .18361, 0, .74333],
        87: [0, .68333, .18361, 0, .99888],
        88: [0, .68333, .15806, 0, .74333],
        89: [0, .68333, .19383, 0, .74333],
        90: [0, .68333, .14528, 0, .61333],
        91: [.25, .75, .1875, 0, .30667],
        93: [.25, .75, .10528, 0, .30667],
        94: [0, .69444, .06646, 0, .51111],
        95: [.31, .12056, .09208, 0, .51111],
        97: [0, .43056, .07671, 0, .51111],
        98: [0, .69444, .06312, 0, .46],
        99: [0, .43056, .05653, 0, .46],
        100: [0, .69444, .10333, 0, .51111],
        101: [0, .43056, .07514, 0, .46],
        102: [.19444, .69444, .21194, 0, .30667],
        103: [.19444, .43056, .08847, 0, .46],
        104: [0, .69444, .07671, 0, .51111],
        105: [0, .65536, .1019, 0, .30667],
        106: [.19444, .65536, .14467, 0, .30667],
        107: [0, .69444, .10764, 0, .46],
        108: [0, .69444, .10333, 0, .25555],
        109: [0, .43056, .07671, 0, .81777],
        110: [0, .43056, .07671, 0, .56222],
        111: [0, .43056, .06312, 0, .51111],
        112: [.19444, .43056, .06312, 0, .51111],
        113: [.19444, .43056, .08847, 0, .46],
        114: [0, .43056, .10764, 0, .42166],
        115: [0, .43056, .08208, 0, .40889],
        116: [0, .61508, .09486, 0, .33222],
        117: [0, .43056, .07671, 0, .53666],
        118: [0, .43056, .10764, 0, .46],
        119: [0, .43056, .10764, 0, .66444],
        120: [0, .43056, .12042, 0, .46389],
        121: [.19444, .43056, .08847, 0, .48555],
        122: [0, .43056, .12292, 0, .40889],
        126: [.35, .31786, .11585, 0, .51111],
        163: [0, .69444, 0, 0, .76909],
        168: [0, .66786, .10474, 0, .51111],
        176: [0, .69444, 0, 0, .83129],
        198: [0, .68333, .12028, 0, .88277],
        216: [.04861, .73194, .09403, 0, .76666],
        223: [.19444, .69444, .10514, 0, .53666],
        230: [0, .43056, .07514, 0, .71555],
        248: [.09722, .52778, .09194, 0, .51111],
        305: [0, .43056, 0, .02778, .32246],
        338: [0, .68333, .12028, 0, .98499],
        339: [0, .43056, .07514, 0, .71555],
        567: [.19444, .43056, 0, .08334, .38403],
        710: [0, .69444, .06646, 0, .51111],
        711: [0, .62847, .08295, 0, .51111],
        713: [0, .56167, .10333, 0, .51111],
        714: [0, .69444, .09694, 0, .51111],
        715: [0, .69444, 0, 0, .51111],
        728: [0, .69444, .10806, 0, .51111],
        729: [0, .66786, .11752, 0, .30667],
        730: [0, .69444, 0, 0, .83129],
        732: [0, .66786, .11585, 0, .51111],
        733: [0, .69444, .1225, 0, .51111],
        915: [0, .68333, .13305, 0, .62722],
        916: [0, .68333, 0, 0, .81777],
        920: [0, .68333, .09403, 0, .76666],
        923: [0, .68333, 0, 0, .69222],
        926: [0, .68333, .15294, 0, .66444],
        928: [0, .68333, .16389, 0, .74333],
        931: [0, .68333, .12028, 0, .71555],
        933: [0, .68333, .11111, 0, .76666],
        934: [0, .68333, .05986, 0, .71555],
        936: [0, .68333, .11111, 0, .76666],
        937: [0, .68333, .10257, 0, .71555],
        8211: [0, .43056, .09208, 0, .51111],
        8212: [0, .43056, .09208, 0, 1.02222],
        8216: [0, .69444, .12417, 0, .30667],
        8217: [0, .69444, .12417, 0, .30667],
        8220: [0, .69444, .1685, 0, .51444],
        8221: [0, .69444, .06961, 0, .51444],
        8463: [0, .68889, 0, 0, .54028]
      },
      "Main-Regular": {
        32: [0, 0, 0, 0, 0],
        33: [0, .69444, 0, 0, .27778],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .77778],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.19444, .10556, 0, 0, .27778],
        45: [0, .43056, 0, 0, .33333],
        46: [0, .10556, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .64444, 0, 0, .5],
        49: [0, .64444, 0, 0, .5],
        50: [0, .64444, 0, 0, .5],
        51: [0, .64444, 0, 0, .5],
        52: [0, .64444, 0, 0, .5],
        53: [0, .64444, 0, 0, .5],
        54: [0, .64444, 0, 0, .5],
        55: [0, .64444, 0, 0, .5],
        56: [0, .64444, 0, 0, .5],
        57: [0, .64444, 0, 0, .5],
        58: [0, .43056, 0, 0, .27778],
        59: [.19444, .43056, 0, 0, .27778],
        60: [.0391, .5391, 0, 0, .77778],
        61: [-.13313, .36687, 0, 0, .77778],
        62: [.0391, .5391, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .77778],
        65: [0, .68333, 0, 0, .75],
        66: [0, .68333, 0, 0, .70834],
        67: [0, .68333, 0, 0, .72222],
        68: [0, .68333, 0, 0, .76389],
        69: [0, .68333, 0, 0, .68056],
        70: [0, .68333, 0, 0, .65278],
        71: [0, .68333, 0, 0, .78472],
        72: [0, .68333, 0, 0, .75],
        73: [0, .68333, 0, 0, .36111],
        74: [0, .68333, 0, 0, .51389],
        75: [0, .68333, 0, 0, .77778],
        76: [0, .68333, 0, 0, .625],
        77: [0, .68333, 0, 0, .91667],
        78: [0, .68333, 0, 0, .75],
        79: [0, .68333, 0, 0, .77778],
        80: [0, .68333, 0, 0, .68056],
        81: [.19444, .68333, 0, 0, .77778],
        82: [0, .68333, 0, 0, .73611],
        83: [0, .68333, 0, 0, .55556],
        84: [0, .68333, 0, 0, .72222],
        85: [0, .68333, 0, 0, .75],
        86: [0, .68333, .01389, 0, .75],
        87: [0, .68333, .01389, 0, 1.02778],
        88: [0, .68333, 0, 0, .75],
        89: [0, .68333, .025, 0, .75],
        90: [0, .68333, 0, 0, .61111],
        91: [.25, .75, 0, 0, .27778],
        92: [.25, .75, 0, 0, .5],
        93: [.25, .75, 0, 0, .27778],
        94: [0, .69444, 0, 0, .5],
        95: [.31, .12056, .02778, 0, .5],
        97: [0, .43056, 0, 0, .5],
        98: [0, .69444, 0, 0, .55556],
        99: [0, .43056, 0, 0, .44445],
        100: [0, .69444, 0, 0, .55556],
        101: [0, .43056, 0, 0, .44445],
        102: [0, .69444, .07778, 0, .30556],
        103: [.19444, .43056, .01389, 0, .5],
        104: [0, .69444, 0, 0, .55556],
        105: [0, .66786, 0, 0, .27778],
        106: [.19444, .66786, 0, 0, .30556],
        107: [0, .69444, 0, 0, .52778],
        108: [0, .69444, 0, 0, .27778],
        109: [0, .43056, 0, 0, .83334],
        110: [0, .43056, 0, 0, .55556],
        111: [0, .43056, 0, 0, .5],
        112: [.19444, .43056, 0, 0, .55556],
        113: [.19444, .43056, 0, 0, .52778],
        114: [0, .43056, 0, 0, .39167],
        115: [0, .43056, 0, 0, .39445],
        116: [0, .61508, 0, 0, .38889],
        117: [0, .43056, 0, 0, .55556],
        118: [0, .43056, .01389, 0, .52778],
        119: [0, .43056, .01389, 0, .72222],
        120: [0, .43056, 0, 0, .52778],
        121: [.19444, .43056, .01389, 0, .52778],
        122: [0, .43056, 0, 0, .44445],
        123: [.25, .75, 0, 0, .5],
        124: [.25, .75, 0, 0, .27778],
        125: [.25, .75, 0, 0, .5],
        126: [.35, .31786, 0, 0, .5],
        160: [0, 0, 0, 0, 0],
        168: [0, .66786, 0, 0, .5],
        172: [0, .43056, 0, 0, .66667],
        176: [0, .69444, 0, 0, .75],
        177: [.08333, .58333, 0, 0, .77778],
        198: [0, .68333, 0, 0, .90278],
        215: [.08333, .58333, 0, 0, .77778],
        216: [.04861, .73194, 0, 0, .77778],
        223: [0, .69444, 0, 0, .5],
        230: [0, .43056, 0, 0, .72222],
        247: [.08333, .58333, 0, 0, .77778],
        248: [.09722, .52778, 0, 0, .5],
        305: [0, .43056, 0, 0, .27778],
        338: [0, .68333, 0, 0, 1.01389],
        339: [0, .43056, 0, 0, .77778],
        567: [.19444, .43056, 0, 0, .30556],
        710: [0, .69444, 0, 0, .5],
        711: [0, .62847, 0, 0, .5],
        713: [0, .56778, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .66786, 0, 0, .27778],
        730: [0, .69444, 0, 0, .75],
        732: [0, .66786, 0, 0, .5],
        733: [0, .69444, 0, 0, .5],
        824: [.19444, .69444, 0, 0, 0],
        915: [0, .68333, 0, 0, .625],
        916: [0, .68333, 0, 0, .83334],
        920: [0, .68333, 0, 0, .77778],
        923: [0, .68333, 0, 0, .69445],
        926: [0, .68333, 0, 0, .66667],
        928: [0, .68333, 0, 0, .75],
        931: [0, .68333, 0, 0, .72222],
        933: [0, .68333, 0, 0, .77778],
        934: [0, .68333, 0, 0, .72222],
        936: [0, .68333, 0, 0, .77778],
        937: [0, .68333, 0, 0, .72222],
        8211: [0, .43056, .02778, 0, .5],
        8212: [0, .43056, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5],
        8224: [.19444, .69444, 0, 0, .44445],
        8225: [.19444, .69444, 0, 0, .44445],
        8230: [0, .12, 0, 0, 1015],
        8242: [0, .55556, 0, 0, .275],
        8407: [0, .71444, .15382, 0, .5],
        8463: [0, .68889, 0, 0, .54028],
        8465: [0, .69444, 0, 0, .72222],
        8467: [0, .69444, 0, .11111, .41667],
        8472: [.19444, .43056, 0, .11111, .63646],
        8476: [0, .69444, 0, 0, .72222],
        8501: [0, .69444, 0, 0, .61111],
        8592: [-.13313, .36687, 0, 0, 1],
        8593: [.19444, .69444, 0, 0, .5],
        8594: [-.13313, .36687, 0, 0, 1],
        8595: [.19444, .69444, 0, 0, .5],
        8596: [-.13313, .36687, 0, 0, 1],
        8597: [.25, .75, 0, 0, .5],
        8598: [.19444, .69444, 0, 0, 1],
        8599: [.19444, .69444, 0, 0, 1],
        8600: [.19444, .69444, 0, 0, 1],
        8601: [.19444, .69444, 0, 0, 1],
        8614: [.011, .511, 0, 0, 889],
        8617: [.011, .511, 0, 0, 1015],
        8618: [.011, .511, 0, 0, 1015],
        8636: [-.13313, .36687, 0, 0, 1],
        8637: [-.13313, .36687, 0, 0, 1],
        8640: [-.13313, .36687, 0, 0, 1],
        8641: [-.13313, .36687, 0, 0, 1],
        8652: [.011, .671, 0, 0, 889],
        8656: [-.13313, .36687, 0, 0, 1],
        8657: [.19444, .69444, 0, 0, .61111],
        8658: [-.13313, .36687, 0, 0, 1],
        8659: [.19444, .69444, 0, 0, .61111],
        8660: [-.13313, .36687, 0, 0, 1],
        8661: [.25, .75, 0, 0, .61111],
        8704: [0, .69444, 0, 0, .55556],
        8706: [0, .69444, .05556, .08334, .5309],
        8707: [0, .69444, 0, 0, .55556],
        8709: [.05556, .75, 0, 0, .5],
        8711: [0, .68333, 0, 0, .83334],
        8712: [.0391, .5391, 0, 0, .66667],
        8715: [.0391, .5391, 0, 0, .66667],
        8722: [.08333, .58333, 0, 0, .77778],
        8723: [.08333, .58333, 0, 0, .77778],
        8725: [.25, .75, 0, 0, .5],
        8726: [.25, .75, 0, 0, .5],
        8727: [-.03472, .46528, 0, 0, .5],
        8728: [-.05555, .44445, 0, 0, .5],
        8729: [-.05555, .44445, 0, 0, .5],
        8730: [.2, .8, 0, 0, .83334],
        8733: [0, .43056, 0, 0, .77778],
        8734: [0, .43056, 0, 0, 1],
        8736: [0, .69224, 0, 0, .72222],
        8739: [.25, .75, 0, 0, .27778],
        8741: [.25, .75, 0, 0, .5],
        8743: [0, .55556, 0, 0, .66667],
        8744: [0, .55556, 0, 0, .66667],
        8745: [0, .55556, 0, 0, .66667],
        8746: [0, .55556, 0, 0, .66667],
        8747: [.19444, .69444, .11111, 0, .41667],
        8764: [-.13313, .36687, 0, 0, .77778],
        8768: [.19444, .69444, 0, 0, .27778],
        8771: [-.03625, .46375, 0, 0, .77778],
        8773: [-.022, .589, 0, 0, 667],
        8776: [-.01688, .48312, 0, 0, .77778],
        8781: [-.03625, .46375, 0, 0, .77778],
        8784: [-.133, .67, 0, 0, 666],
        8800: [.215, .716, 0, 0, 666],
        8801: [-.03625, .46375, 0, 0, .77778],
        8804: [.13597, .63597, 0, 0, .77778],
        8805: [.13597, .63597, 0, 0, .77778],
        8810: [.0391, .5391, 0, 0, 1],
        8811: [.0391, .5391, 0, 0, 1],
        8826: [.0391, .5391, 0, 0, .77778],
        8827: [.0391, .5391, 0, 0, .77778],
        8834: [.0391, .5391, 0, 0, .77778],
        8835: [.0391, .5391, 0, 0, .77778],
        8838: [.13597, .63597, 0, 0, .77778],
        8839: [.13597, .63597, 0, 0, .77778],
        8846: [0, .55556, 0, 0, .66667],
        8849: [.13597, .63597, 0, 0, .77778],
        8850: [.13597, .63597, 0, 0, .77778],
        8851: [0, .55556, 0, 0, .66667],
        8852: [0, .55556, 0, 0, .66667],
        8853: [.08333, .58333, 0, 0, .77778],
        8854: [.08333, .58333, 0, 0, .77778],
        8855: [.08333, .58333, 0, 0, .77778],
        8856: [.08333, .58333, 0, 0, .77778],
        8857: [.08333, .58333, 0, 0, .77778],
        8866: [0, .69444, 0, 0, .61111],
        8867: [0, .69444, 0, 0, .61111],
        8868: [0, .69444, 0, 0, .77778],
        8869: [0, .69444, 0, 0, .77778],
        8872: [.249, .75, 0, 0, 692],
        8900: [-.05555, .44445, 0, 0, .5],
        8901: [-.05555, .44445, 0, 0, .27778],
        8902: [-.03472, .46528, 0, 0, .5],
        8904: [.005, .505, 0, 0, 847],
        8942: [.03, .9, 0, 0, 121],
        8943: [-.19, .31, 0, 0, 1015],
        8945: [-.1, .82, 0, 0, 1015],
        8968: [.25, .75, 0, 0, .44445],
        8969: [.25, .75, 0, 0, .44445],
        8970: [.25, .75, 0, 0, .44445],
        8971: [.25, .75, 0, 0, .44445],
        8994: [-.14236, .35764, 0, 0, 1],
        8995: [-.14236, .35764, 0, 0, 1],
        9136: [.244, .744, 0, 0, 301],
        9137: [.244, .744, 0, 0, 301],
        9651: [.19444, .69444, 0, 0, .88889],
        9657: [-.03472, .46528, 0, 0, .5],
        9661: [.19444, .69444, 0, 0, .88889],
        9667: [-.03472, .46528, 0, 0, .5],
        9711: [.19444, .69444, 0, 0, 1],
        9824: [.12963, .69444, 0, 0, .77778],
        9825: [.12963, .69444, 0, 0, .77778],
        9826: [.12963, .69444, 0, 0, .77778],
        9827: [.12963, .69444, 0, 0, .77778],
        9837: [0, .75, 0, 0, .38889],
        9838: [.19444, .69444, 0, 0, .38889],
        9839: [.19444, .69444, 0, 0, .38889],
        10216: [.25, .75, 0, 0, .38889],
        10217: [.25, .75, 0, 0, .38889],
        10222: [.244, .744, 0, 0, 184],
        10223: [.244, .744, 0, 0, 184],
        10229: [.011, .511, 0, 0, 1470],
        10230: [.011, .511, 0, 0, 1469],
        10231: [.011, .511, 0, 0, 1748],
        10232: [.024, .525, 0, 0, 1497],
        10233: [.024, .525, 0, 0, 1526],
        10234: [.024, .525, 0, 0, 1746],
        10236: [.011, .511, 0, 0, 1498],
        10815: [0, .68333, 0, 0, .75],
        10927: [.13597, .63597, 0, 0, .77778],
        10928: [.13597, .63597, 0, 0, .77778]
      },
      "Math-BoldItalic": {
        47: [.19444, .69444, 0, 0, 0],
        65: [0, .68611, 0, 0, .86944],
        66: [0, .68611, .04835, 0, .8664],
        67: [0, .68611, .06979, 0, .81694],
        68: [0, .68611, .03194, 0, .93812],
        69: [0, .68611, .05451, 0, .81007],
        70: [0, .68611, .15972, 0, .68889],
        71: [0, .68611, 0, 0, .88673],
        72: [0, .68611, .08229, 0, .98229],
        73: [0, .68611, .07778, 0, .51111],
        74: [0, .68611, .10069, 0, .63125],
        75: [0, .68611, .06979, 0, .97118],
        76: [0, .68611, 0, 0, .75555],
        77: [0, .68611, .11424, 0, 1.14201],
        78: [0, .68611, .11424, 0, .95034],
        79: [0, .68611, .03194, 0, .83666],
        80: [0, .68611, .15972, 0, .72309],
        81: [.19444, .68611, 0, 0, .86861],
        82: [0, .68611, .00421, 0, .87235],
        83: [0, .68611, .05382, 0, .69271],
        84: [0, .68611, .15972, 0, .63663],
        85: [0, .68611, .11424, 0, .80027],
        86: [0, .68611, .25555, 0, .67778],
        87: [0, .68611, .15972, 0, 1.09305],
        88: [0, .68611, .07778, 0, .94722],
        89: [0, .68611, .25555, 0, .67458],
        90: [0, .68611, .06979, 0, .77257],
        97: [0, .44444, 0, 0, .63287],
        98: [0, .69444, 0, 0, .52083],
        99: [0, .44444, 0, 0, .51342],
        100: [0, .69444, 0, 0, .60972],
        101: [0, .44444, 0, 0, .55361],
        102: [.19444, .69444, .11042, 0, .56806],
        103: [.19444, .44444, .03704, 0, .5449],
        104: [0, .69444, 0, 0, .66759],
        105: [0, .69326, 0, 0, .4048],
        106: [.19444, .69326, .0622, 0, .47083],
        107: [0, .69444, .01852, 0, .6037],
        108: [0, .69444, .0088, 0, .34815],
        109: [0, .44444, 0, 0, 1.0324],
        110: [0, .44444, 0, 0, .71296],
        111: [0, .44444, 0, 0, .58472],
        112: [.19444, .44444, 0, 0, .60092],
        113: [.19444, .44444, .03704, 0, .54213],
        114: [0, .44444, .03194, 0, .5287],
        115: [0, .44444, 0, 0, .53125],
        116: [0, .63492, 0, 0, .41528],
        117: [0, .44444, 0, 0, .68102],
        118: [0, .44444, .03704, 0, .56666],
        119: [0, .44444, .02778, 0, .83148],
        120: [0, .44444, 0, 0, .65903],
        121: [.19444, .44444, .03704, 0, .59028],
        122: [0, .44444, .04213, 0, .55509],
        915: [0, .68611, .15972, 0, .65694],
        916: [0, .68611, 0, 0, .95833],
        920: [0, .68611, .03194, 0, .86722],
        923: [0, .68611, 0, 0, .80555],
        926: [0, .68611, .07458, 0, .84125],
        928: [0, .68611, .08229, 0, .98229],
        931: [0, .68611, .05451, 0, .88507],
        933: [0, .68611, .15972, 0, .67083],
        934: [0, .68611, 0, 0, .76666],
        936: [0, .68611, .11653, 0, .71402],
        937: [0, .68611, .04835, 0, .8789],
        945: [0, .44444, 0, 0, .76064],
        946: [.19444, .69444, .03403, 0, .65972],
        947: [.19444, .44444, .06389, 0, .59003],
        948: [0, .69444, .03819, 0, .52222],
        949: [0, .44444, 0, 0, .52882],
        950: [.19444, .69444, .06215, 0, .50833],
        951: [.19444, .44444, .03704, 0, .6],
        952: [0, .69444, .03194, 0, .5618],
        953: [0, .44444, 0, 0, .41204],
        954: [0, .44444, 0, 0, .66759],
        955: [0, .69444, 0, 0, .67083],
        956: [.19444, .44444, 0, 0, .70787],
        957: [0, .44444, .06898, 0, .57685],
        958: [.19444, .69444, .03021, 0, .50833],
        959: [0, .44444, 0, 0, .58472],
        960: [0, .44444, .03704, 0, .68241],
        961: [.19444, .44444, 0, 0, .6118],
        962: [.09722, .44444, .07917, 0, .42361],
        963: [0, .44444, .03704, 0, .68588],
        964: [0, .44444, .13472, 0, .52083],
        965: [0, .44444, .03704, 0, .63055],
        966: [.19444, .44444, 0, 0, .74722],
        967: [.19444, .44444, 0, 0, .71805],
        968: [.19444, .69444, .03704, 0, .75833],
        969: [0, .44444, .03704, 0, .71782],
        977: [0, .69444, 0, 0, .69155],
        981: [.19444, .69444, 0, 0, .7125],
        982: [0, .44444, .03194, 0, .975],
        1009: [.19444, .44444, 0, 0, .6118],
        1013: [0, .44444, 0, 0, .48333]
      },
      "Math-Italic": {
        47: [.19444, .69444, 0, 0, 0],
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059]
      },
      "Math-Regular": {
        65: [0, .68333, 0, .13889, .75],
        66: [0, .68333, .05017, .08334, .75851],
        67: [0, .68333, .07153, .08334, .71472],
        68: [0, .68333, .02778, .05556, .82792],
        69: [0, .68333, .05764, .08334, .7382],
        70: [0, .68333, .13889, .08334, .64306],
        71: [0, .68333, 0, .08334, .78625],
        72: [0, .68333, .08125, .05556, .83125],
        73: [0, .68333, .07847, .11111, .43958],
        74: [0, .68333, .09618, .16667, .55451],
        75: [0, .68333, .07153, .05556, .84931],
        76: [0, .68333, 0, .02778, .68056],
        77: [0, .68333, .10903, .08334, .97014],
        78: [0, .68333, .10903, .08334, .80347],
        79: [0, .68333, .02778, .08334, .76278],
        80: [0, .68333, .13889, .08334, .64201],
        81: [.19444, .68333, 0, .08334, .79056],
        82: [0, .68333, .00773, .08334, .75929],
        83: [0, .68333, .05764, .08334, .6132],
        84: [0, .68333, .13889, .08334, .58438],
        85: [0, .68333, .10903, .02778, .68278],
        86: [0, .68333, .22222, 0, .58333],
        87: [0, .68333, .13889, 0, .94445],
        88: [0, .68333, .07847, .08334, .82847],
        89: [0, .68333, .22222, 0, .58056],
        90: [0, .68333, .07153, .08334, .68264],
        97: [0, .43056, 0, 0, .52859],
        98: [0, .69444, 0, 0, .42917],
        99: [0, .43056, 0, .05556, .43276],
        100: [0, .69444, 0, .16667, .52049],
        101: [0, .43056, 0, .05556, .46563],
        102: [.19444, .69444, .10764, .16667, .48959],
        103: [.19444, .43056, .03588, .02778, .47697],
        104: [0, .69444, 0, 0, .57616],
        105: [0, .65952, 0, 0, .34451],
        106: [.19444, .65952, .05724, 0, .41181],
        107: [0, .69444, .03148, 0, .5206],
        108: [0, .69444, .01968, .08334, .29838],
        109: [0, .43056, 0, 0, .87801],
        110: [0, .43056, 0, 0, .60023],
        111: [0, .43056, 0, .05556, .48472],
        112: [.19444, .43056, 0, .08334, .50313],
        113: [.19444, .43056, .03588, .08334, .44641],
        114: [0, .43056, .02778, .05556, .45116],
        115: [0, .43056, 0, .05556, .46875],
        116: [0, .61508, 0, .08334, .36111],
        117: [0, .43056, 0, .02778, .57246],
        118: [0, .43056, .03588, .02778, .48472],
        119: [0, .43056, .02691, .08334, .71592],
        120: [0, .43056, 0, .02778, .57153],
        121: [.19444, .43056, .03588, .05556, .49028],
        122: [0, .43056, .04398, .05556, .46505],
        915: [0, .68333, .13889, .08334, .61528],
        916: [0, .68333, 0, .16667, .83334],
        920: [0, .68333, .02778, .08334, .76278],
        923: [0, .68333, 0, .16667, .69445],
        926: [0, .68333, .07569, .08334, .74236],
        928: [0, .68333, .08125, .05556, .83125],
        931: [0, .68333, .05764, .08334, .77986],
        933: [0, .68333, .13889, .05556, .58333],
        934: [0, .68333, 0, .08334, .66667],
        936: [0, .68333, .11, .05556, .61222],
        937: [0, .68333, .05017, .08334, .7724],
        945: [0, .43056, .0037, .02778, .6397],
        946: [.19444, .69444, .05278, .08334, .56563],
        947: [.19444, .43056, .05556, 0, .51773],
        948: [0, .69444, .03785, .05556, .44444],
        949: [0, .43056, 0, .08334, .46632],
        950: [.19444, .69444, .07378, .08334, .4375],
        951: [.19444, .43056, .03588, .05556, .49653],
        952: [0, .69444, .02778, .08334, .46944],
        953: [0, .43056, 0, .05556, .35394],
        954: [0, .43056, 0, 0, .57616],
        955: [0, .69444, 0, 0, .58334],
        956: [.19444, .43056, 0, .02778, .60255],
        957: [0, .43056, .06366, .02778, .49398],
        958: [.19444, .69444, .04601, .11111, .4375],
        959: [0, .43056, 0, .05556, .48472],
        960: [0, .43056, .03588, 0, .57003],
        961: [.19444, .43056, 0, .08334, .51702],
        962: [.09722, .43056, .07986, .08334, .36285],
        963: [0, .43056, .03588, 0, .57141],
        964: [0, .43056, .1132, .02778, .43715],
        965: [0, .43056, .03588, .02778, .54028],
        966: [.19444, .43056, 0, .08334, .65417],
        967: [.19444, .43056, 0, .05556, .62569],
        968: [.19444, .69444, .03588, .11111, .65139],
        969: [0, .43056, .03588, 0, .62245],
        977: [0, .69444, 0, .08334, .59144],
        981: [.19444, .69444, 0, .08334, .59583],
        982: [0, .43056, .02778, 0, .82813],
        1009: [.19444, .43056, 0, .08334, .51702],
        1013: [0, .43056, 0, .05556, .4059]
      },
      "SansSerif-Bold": {
        33: [0, .69444, 0, 0, .36667],
        34: [0, .69444, 0, 0, .55834],
        35: [.19444, .69444, 0, 0, .91667],
        36: [.05556, .75, 0, 0, .55],
        37: [.05556, .75, 0, 0, 1.02912],
        38: [0, .69444, 0, 0, .83056],
        39: [0, .69444, 0, 0, .30556],
        40: [.25, .75, 0, 0, .42778],
        41: [.25, .75, 0, 0, .42778],
        42: [0, .75, 0, 0, .55],
        43: [.11667, .61667, 0, 0, .85556],
        44: [.10556, .13056, 0, 0, .30556],
        45: [0, .45833, 0, 0, .36667],
        46: [0, .13056, 0, 0, .30556],
        47: [.25, .75, 0, 0, .55],
        48: [0, .69444, 0, 0, .55],
        49: [0, .69444, 0, 0, .55],
        50: [0, .69444, 0, 0, .55],
        51: [0, .69444, 0, 0, .55],
        52: [0, .69444, 0, 0, .55],
        53: [0, .69444, 0, 0, .55],
        54: [0, .69444, 0, 0, .55],
        55: [0, .69444, 0, 0, .55],
        56: [0, .69444, 0, 0, .55],
        57: [0, .69444, 0, 0, .55],
        58: [0, .45833, 0, 0, .30556],
        59: [.10556, .45833, 0, 0, .30556],
        61: [-.09375, .40625, 0, 0, .85556],
        63: [0, .69444, 0, 0, .51945],
        64: [0, .69444, 0, 0, .73334],
        65: [0, .69444, 0, 0, .73334],
        66: [0, .69444, 0, 0, .73334],
        67: [0, .69444, 0, 0, .70278],
        68: [0, .69444, 0, 0, .79445],
        69: [0, .69444, 0, 0, .64167],
        70: [0, .69444, 0, 0, .61111],
        71: [0, .69444, 0, 0, .73334],
        72: [0, .69444, 0, 0, .79445],
        73: [0, .69444, 0, 0, .33056],
        74: [0, .69444, 0, 0, .51945],
        75: [0, .69444, 0, 0, .76389],
        76: [0, .69444, 0, 0, .58056],
        77: [0, .69444, 0, 0, .97778],
        78: [0, .69444, 0, 0, .79445],
        79: [0, .69444, 0, 0, .79445],
        80: [0, .69444, 0, 0, .70278],
        81: [.10556, .69444, 0, 0, .79445],
        82: [0, .69444, 0, 0, .70278],
        83: [0, .69444, 0, 0, .61111],
        84: [0, .69444, 0, 0, .73334],
        85: [0, .69444, 0, 0, .76389],
        86: [0, .69444, .01528, 0, .73334],
        87: [0, .69444, .01528, 0, 1.03889],
        88: [0, .69444, 0, 0, .73334],
        89: [0, .69444, .0275, 0, .73334],
        90: [0, .69444, 0, 0, .67223],
        91: [.25, .75, 0, 0, .34306],
        93: [.25, .75, 0, 0, .34306],
        94: [0, .69444, 0, 0, .55],
        95: [.35, .10833, .03056, 0, .55],
        97: [0, .45833, 0, 0, .525],
        98: [0, .69444, 0, 0, .56111],
        99: [0, .45833, 0, 0, .48889],
        100: [0, .69444, 0, 0, .56111],
        101: [0, .45833, 0, 0, .51111],
        102: [0, .69444, .07639, 0, .33611],
        103: [.19444, .45833, .01528, 0, .55],
        104: [0, .69444, 0, 0, .56111],
        105: [0, .69444, 0, 0, .25556],
        106: [.19444, .69444, 0, 0, .28611],
        107: [0, .69444, 0, 0, .53056],
        108: [0, .69444, 0, 0, .25556],
        109: [0, .45833, 0, 0, .86667],
        110: [0, .45833, 0, 0, .56111],
        111: [0, .45833, 0, 0, .55],
        112: [.19444, .45833, 0, 0, .56111],
        113: [.19444, .45833, 0, 0, .56111],
        114: [0, .45833, .01528, 0, .37222],
        115: [0, .45833, 0, 0, .42167],
        116: [0, .58929, 0, 0, .40417],
        117: [0, .45833, 0, 0, .56111],
        118: [0, .45833, .01528, 0, .5],
        119: [0, .45833, .01528, 0, .74445],
        120: [0, .45833, 0, 0, .5],
        121: [.19444, .45833, .01528, 0, .5],
        122: [0, .45833, 0, 0, .47639],
        126: [.35, .34444, 0, 0, .55],
        168: [0, .69444, 0, 0, .55],
        176: [0, .69444, 0, 0, .73334],
        180: [0, .69444, 0, 0, .55],
        305: [0, .45833, 0, 0, .25556],
        567: [.19444, .45833, 0, 0, .28611],
        710: [0, .69444, 0, 0, .55],
        711: [0, .63542, 0, 0, .55],
        713: [0, .63778, 0, 0, .55],
        728: [0, .69444, 0, 0, .55],
        729: [0, .69444, 0, 0, .30556],
        730: [0, .69444, 0, 0, .73334],
        732: [0, .69444, 0, 0, .55],
        733: [0, .69444, 0, 0, .55],
        915: [0, .69444, 0, 0, .58056],
        916: [0, .69444, 0, 0, .91667],
        920: [0, .69444, 0, 0, .85556],
        923: [0, .69444, 0, 0, .67223],
        926: [0, .69444, 0, 0, .73334],
        928: [0, .69444, 0, 0, .79445],
        931: [0, .69444, 0, 0, .79445],
        933: [0, .69444, 0, 0, .85556],
        934: [0, .69444, 0, 0, .79445],
        936: [0, .69444, 0, 0, .85556],
        937: [0, .69444, 0, 0, .79445],
        8211: [0, .45833, .03056, 0, .55],
        8212: [0, .45833, .03056, 0, 1.10001],
        8216: [0, .69444, 0, 0, .30556],
        8217: [0, .69444, 0, 0, .30556],
        8220: [0, .69444, 0, 0, .55834],
        8221: [0, .69444, 0, 0, .55834]
      },
      "SansSerif-Italic": {
        33: [0, .69444, .05733, 0, .31945],
        34: [0, .69444, .00316, 0, .5],
        35: [.19444, .69444, .05087, 0, .83334],
        36: [.05556, .75, .11156, 0, .5],
        37: [.05556, .75, .03126, 0, .83334],
        38: [0, .69444, .03058, 0, .75834],
        39: [0, .69444, .07816, 0, .27778],
        40: [.25, .75, .13164, 0, .38889],
        41: [.25, .75, .02536, 0, .38889],
        42: [0, .75, .11775, 0, .5],
        43: [.08333, .58333, .02536, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, .01946, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, .13164, 0, .5],
        48: [0, .65556, .11156, 0, .5],
        49: [0, .65556, .11156, 0, .5],
        50: [0, .65556, .11156, 0, .5],
        51: [0, .65556, .11156, 0, .5],
        52: [0, .65556, .11156, 0, .5],
        53: [0, .65556, .11156, 0, .5],
        54: [0, .65556, .11156, 0, .5],
        55: [0, .65556, .11156, 0, .5],
        56: [0, .65556, .11156, 0, .5],
        57: [0, .65556, .11156, 0, .5],
        58: [0, .44444, .02502, 0, .27778],
        59: [.125, .44444, .02502, 0, .27778],
        61: [-.13, .37, .05087, 0, .77778],
        63: [0, .69444, .11809, 0, .47222],
        64: [0, .69444, .07555, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, .08293, 0, .66667],
        67: [0, .69444, .11983, 0, .63889],
        68: [0, .69444, .07555, 0, .72223],
        69: [0, .69444, .11983, 0, .59722],
        70: [0, .69444, .13372, 0, .56945],
        71: [0, .69444, .11983, 0, .66667],
        72: [0, .69444, .08094, 0, .70834],
        73: [0, .69444, .13372, 0, .27778],
        74: [0, .69444, .08094, 0, .47222],
        75: [0, .69444, .11983, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, .08094, 0, .875],
        78: [0, .69444, .08094, 0, .70834],
        79: [0, .69444, .07555, 0, .73611],
        80: [0, .69444, .08293, 0, .63889],
        81: [.125, .69444, .07555, 0, .73611],
        82: [0, .69444, .08293, 0, .64584],
        83: [0, .69444, .09205, 0, .55556],
        84: [0, .69444, .13372, 0, .68056],
        85: [0, .69444, .08094, 0, .6875],
        86: [0, .69444, .1615, 0, .66667],
        87: [0, .69444, .1615, 0, .94445],
        88: [0, .69444, .13372, 0, .66667],
        89: [0, .69444, .17261, 0, .66667],
        90: [0, .69444, .11983, 0, .61111],
        91: [.25, .75, .15942, 0, .28889],
        93: [.25, .75, .08719, 0, .28889],
        94: [0, .69444, .0799, 0, .5],
        95: [.35, .09444, .08616, 0, .5],
        97: [0, .44444, .00981, 0, .48056],
        98: [0, .69444, .03057, 0, .51667],
        99: [0, .44444, .08336, 0, .44445],
        100: [0, .69444, .09483, 0, .51667],
        101: [0, .44444, .06778, 0, .44445],
        102: [0, .69444, .21705, 0, .30556],
        103: [.19444, .44444, .10836, 0, .5],
        104: [0, .69444, .01778, 0, .51667],
        105: [0, .67937, .09718, 0, .23889],
        106: [.19444, .67937, .09162, 0, .26667],
        107: [0, .69444, .08336, 0, .48889],
        108: [0, .69444, .09483, 0, .23889],
        109: [0, .44444, .01778, 0, .79445],
        110: [0, .44444, .01778, 0, .51667],
        111: [0, .44444, .06613, 0, .5],
        112: [.19444, .44444, .0389, 0, .51667],
        113: [.19444, .44444, .04169, 0, .51667],
        114: [0, .44444, .10836, 0, .34167],
        115: [0, .44444, .0778, 0, .38333],
        116: [0, .57143, .07225, 0, .36111],
        117: [0, .44444, .04169, 0, .51667],
        118: [0, .44444, .10836, 0, .46111],
        119: [0, .44444, .10836, 0, .68334],
        120: [0, .44444, .09169, 0, .46111],
        121: [.19444, .44444, .10836, 0, .46111],
        122: [0, .44444, .08752, 0, .43472],
        126: [.35, .32659, .08826, 0, .5],
        168: [0, .67937, .06385, 0, .5],
        176: [0, .69444, 0, 0, .73752],
        305: [0, .44444, .04169, 0, .23889],
        567: [.19444, .44444, .04169, 0, .26667],
        710: [0, .69444, .0799, 0, .5],
        711: [0, .63194, .08432, 0, .5],
        713: [0, .60889, .08776, 0, .5],
        714: [0, .69444, .09205, 0, .5],
        715: [0, .69444, 0, 0, .5],
        728: [0, .69444, .09483, 0, .5],
        729: [0, .67937, .07774, 0, .27778],
        730: [0, .69444, 0, 0, .73752],
        732: [0, .67659, .08826, 0, .5],
        733: [0, .69444, .09205, 0, .5],
        915: [0, .69444, .13372, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, .07555, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, .12816, 0, .66667],
        928: [0, .69444, .08094, 0, .70834],
        931: [0, .69444, .11983, 0, .72222],
        933: [0, .69444, .09031, 0, .77778],
        934: [0, .69444, .04603, 0, .72222],
        936: [0, .69444, .09031, 0, .77778],
        937: [0, .69444, .08293, 0, .72222],
        8211: [0, .44444, .08616, 0, .5],
        8212: [0, .44444, .08616, 0, 1],
        8216: [0, .69444, .07816, 0, .27778],
        8217: [0, .69444, .07816, 0, .27778],
        8220: [0, .69444, .14205, 0, .5],
        8221: [0, .69444, .00316, 0, .5]
      },
      "SansSerif-Regular": {
        33: [0, .69444, 0, 0, .31945],
        34: [0, .69444, 0, 0, .5],
        35: [.19444, .69444, 0, 0, .83334],
        36: [.05556, .75, 0, 0, .5],
        37: [.05556, .75, 0, 0, .83334],
        38: [0, .69444, 0, 0, .75834],
        39: [0, .69444, 0, 0, .27778],
        40: [.25, .75, 0, 0, .38889],
        41: [.25, .75, 0, 0, .38889],
        42: [0, .75, 0, 0, .5],
        43: [.08333, .58333, 0, 0, .77778],
        44: [.125, .08333, 0, 0, .27778],
        45: [0, .44444, 0, 0, .33333],
        46: [0, .08333, 0, 0, .27778],
        47: [.25, .75, 0, 0, .5],
        48: [0, .65556, 0, 0, .5],
        49: [0, .65556, 0, 0, .5],
        50: [0, .65556, 0, 0, .5],
        51: [0, .65556, 0, 0, .5],
        52: [0, .65556, 0, 0, .5],
        53: [0, .65556, 0, 0, .5],
        54: [0, .65556, 0, 0, .5],
        55: [0, .65556, 0, 0, .5],
        56: [0, .65556, 0, 0, .5],
        57: [0, .65556, 0, 0, .5],
        58: [0, .44444, 0, 0, .27778],
        59: [.125, .44444, 0, 0, .27778],
        61: [-.13, .37, 0, 0, .77778],
        63: [0, .69444, 0, 0, .47222],
        64: [0, .69444, 0, 0, .66667],
        65: [0, .69444, 0, 0, .66667],
        66: [0, .69444, 0, 0, .66667],
        67: [0, .69444, 0, 0, .63889],
        68: [0, .69444, 0, 0, .72223],
        69: [0, .69444, 0, 0, .59722],
        70: [0, .69444, 0, 0, .56945],
        71: [0, .69444, 0, 0, .66667],
        72: [0, .69444, 0, 0, .70834],
        73: [0, .69444, 0, 0, .27778],
        74: [0, .69444, 0, 0, .47222],
        75: [0, .69444, 0, 0, .69445],
        76: [0, .69444, 0, 0, .54167],
        77: [0, .69444, 0, 0, .875],
        78: [0, .69444, 0, 0, .70834],
        79: [0, .69444, 0, 0, .73611],
        80: [0, .69444, 0, 0, .63889],
        81: [.125, .69444, 0, 0, .73611],
        82: [0, .69444, 0, 0, .64584],
        83: [0, .69444, 0, 0, .55556],
        84: [0, .69444, 0, 0, .68056],
        85: [0, .69444, 0, 0, .6875],
        86: [0, .69444, .01389, 0, .66667],
        87: [0, .69444, .01389, 0, .94445],
        88: [0, .69444, 0, 0, .66667],
        89: [0, .69444, .025, 0, .66667],
        90: [0, .69444, 0, 0, .61111],
        91: [.25, .75, 0, 0, .28889],
        93: [.25, .75, 0, 0, .28889],
        94: [0, .69444, 0, 0, .5],
        95: [.35, .09444, .02778, 0, .5],
        97: [0, .44444, 0, 0, .48056],
        98: [0, .69444, 0, 0, .51667],
        99: [0, .44444, 0, 0, .44445],
        100: [0, .69444, 0, 0, .51667],
        101: [0, .44444, 0, 0, .44445],
        102: [0, .69444, .06944, 0, .30556],
        103: [.19444, .44444, .01389, 0, .5],
        104: [0, .69444, 0, 0, .51667],
        105: [0, .67937, 0, 0, .23889],
        106: [.19444, .67937, 0, 0, .26667],
        107: [0, .69444, 0, 0, .48889],
        108: [0, .69444, 0, 0, .23889],
        109: [0, .44444, 0, 0, .79445],
        110: [0, .44444, 0, 0, .51667],
        111: [0, .44444, 0, 0, .5],
        112: [.19444, .44444, 0, 0, .51667],
        113: [.19444, .44444, 0, 0, .51667],
        114: [0, .44444, .01389, 0, .34167],
        115: [0, .44444, 0, 0, .38333],
        116: [0, .57143, 0, 0, .36111],
        117: [0, .44444, 0, 0, .51667],
        118: [0, .44444, .01389, 0, .46111],
        119: [0, .44444, .01389, 0, .68334],
        120: [0, .44444, 0, 0, .46111],
        121: [.19444, .44444, .01389, 0, .46111],
        122: [0, .44444, 0, 0, .43472],
        126: [.35, .32659, 0, 0, .5],
        176: [0, .69444, 0, 0, .66667],
        305: [0, .44444, 0, 0, .23889],
        567: [.19444, .44444, 0, 0, .26667],
        710: [0, .69444, 0, 0, .5],
        711: [0, .63194, 0, 0, .5],
        713: [0, .60889, 0, 0, .5],
        714: [0, .69444, 0, 0, .5],
        728: [0, .69444, 0, 0, .5],
        729: [0, .67937, 0, 0, .27778],
        730: [0, .69444, 0, 0, .66667],
        733: [0, .69444, 0, 0, .5],
        771: [0, .67659, 0, 0, .5],
        776: [0, .67937, 0, 0, .5],
        915: [0, .69444, 0, 0, .54167],
        916: [0, .69444, 0, 0, .83334],
        920: [0, .69444, 0, 0, .77778],
        923: [0, .69444, 0, 0, .61111],
        926: [0, .69444, 0, 0, .66667],
        928: [0, .69444, 0, 0, .70834],
        931: [0, .69444, 0, 0, .72222],
        933: [0, .69444, 0, 0, .77778],
        934: [0, .69444, 0, 0, .72222],
        936: [0, .69444, 0, 0, .77778],
        937: [0, .69444, 0, 0, .72222],
        8211: [0, .44444, .02778, 0, .5],
        8212: [0, .44444, .02778, 0, 1],
        8216: [0, .69444, 0, 0, .27778],
        8217: [0, .69444, 0, 0, .27778],
        8220: [0, .69444, 0, 0, .5],
        8221: [0, .69444, 0, 0, .5]
      },
      "Script-Regular": {
        65: [0, .7, .22925, 0, .80253],
        66: [0, .7, .04087, 0, .90757],
        67: [0, .7, .1689, 0, .66619],
        68: [0, .7, .09371, 0, .77443],
        69: [0, .7, .18583, 0, .56162],
        70: [0, .7, .13634, 0, .89544],
        71: [0, .7, .17322, 0, .60961],
        72: [0, .7, .29694, 0, .96919],
        73: [0, .7, .19189, 0, .80907],
        74: [.27778, .7, .19189, 0, 1.05159],
        75: [0, .7, .31259, 0, .91364],
        76: [0, .7, .19189, 0, .87373],
        77: [0, .7, .15981, 0, 1.08031],
        78: [0, .7, .3525, 0, .9015],
        79: [0, .7, .08078, 0, .73787],
        80: [0, .7, .08078, 0, 1.01262],
        81: [0, .7, .03305, 0, .88282],
        82: [0, .7, .06259, 0, .85],
        83: [0, .7, .19189, 0, .86767],
        84: [0, .7, .29087, 0, .74697],
        85: [0, .7, .25815, 0, .79996],
        86: [0, .7, .27523, 0, .62204],
        87: [0, .7, .27523, 0, .80532],
        88: [0, .7, .26006, 0, .94445],
        89: [0, .7, .2939, 0, .70961],
        90: [0, .7, .24037, 0, .8212]
      },
      "Size1-Regular": {
        40: [.35001, .85, 0, 0, .45834],
        41: [.35001, .85, 0, 0, .45834],
        47: [.35001, .85, 0, 0, .57778],
        91: [.35001, .85, 0, 0, .41667],
        92: [.35001, .85, 0, 0, .57778],
        93: [.35001, .85, 0, 0, .41667],
        123: [.35001, .85, 0, 0, .58334],
        125: [.35001, .85, 0, 0, .58334],
        710: [0, .72222, 0, 0, .55556],
        732: [0, .72222, 0, 0, .55556],
        770: [0, .72222, 0, 0, .55556],
        771: [0, .72222, 0, 0, .55556],
        8214: [-99e-5, .601, 0, 0, .77778],
        8593: [1e-5, .6, 0, 0, .66667],
        8595: [1e-5, .6, 0, 0, .66667],
        8657: [1e-5, .6, 0, 0, .77778],
        8659: [1e-5, .6, 0, 0, .77778],
        8719: [.25001, .75, 0, 0, .94445],
        8720: [.25001, .75, 0, 0, .94445],
        8721: [.25001, .75, 0, 0, 1.05556],
        8730: [.35001, .85, 0, 0, 1],
        8739: [-.00599, .606, 0, 0, .33333],
        8741: [-.00599, .606, 0, 0, .55556],
        8747: [.30612, .805, .19445, 0, .47222],
        8748: [.306, .805, .19445, 0, .47222],
        8749: [.306, .805, .19445, 0, .47222],
        8750: [.30612, .805, .19445, 0, .47222],
        8896: [.25001, .75, 0, 0, .83334],
        8897: [.25001, .75, 0, 0, .83334],
        8898: [.25001, .75, 0, 0, .83334],
        8899: [.25001, .75, 0, 0, .83334],
        8968: [.35001, .85, 0, 0, .47222],
        8969: [.35001, .85, 0, 0, .47222],
        8970: [.35001, .85, 0, 0, .47222],
        8971: [.35001, .85, 0, 0, .47222],
        9168: [-99e-5, .601, 0, 0, .66667],
        10216: [.35001, .85, 0, 0, .47222],
        10217: [.35001, .85, 0, 0, .47222],
        10752: [.25001, .75, 0, 0, 1.11111],
        10753: [.25001, .75, 0, 0, 1.11111],
        10754: [.25001, .75, 0, 0, 1.11111],
        10756: [.25001, .75, 0, 0, .83334],
        10758: [.25001, .75, 0, 0, .83334]
      },
      "Size2-Regular": {
        40: [.65002, 1.15, 0, 0, .59722],
        41: [.65002, 1.15, 0, 0, .59722],
        47: [.65002, 1.15, 0, 0, .81111],
        91: [.65002, 1.15, 0, 0, .47222],
        92: [.65002, 1.15, 0, 0, .81111],
        93: [.65002, 1.15, 0, 0, .47222],
        123: [.65002, 1.15, 0, 0, .66667],
        125: [.65002, 1.15, 0, 0, .66667],
        710: [0, .75, 0, 0, 1],
        732: [0, .75, 0, 0, 1],
        770: [0, .75, 0, 0, 1],
        771: [0, .75, 0, 0, 1],
        8719: [.55001, 1.05, 0, 0, 1.27778],
        8720: [.55001, 1.05, 0, 0, 1.27778],
        8721: [.55001, 1.05, 0, 0, 1.44445],
        8730: [.65002, 1.15, 0, 0, 1],
        8747: [.86225, 1.36, .44445, 0, .55556],
        8748: [.862, 1.36, .44445, 0, .55556],
        8749: [.862, 1.36, .44445, 0, .55556],
        8750: [.86225, 1.36, .44445, 0, .55556],
        8896: [.55001, 1.05, 0, 0, 1.11111],
        8897: [.55001, 1.05, 0, 0, 1.11111],
        8898: [.55001, 1.05, 0, 0, 1.11111],
        8899: [.55001, 1.05, 0, 0, 1.11111],
        8968: [.65002, 1.15, 0, 0, .52778],
        8969: [.65002, 1.15, 0, 0, .52778],
        8970: [.65002, 1.15, 0, 0, .52778],
        8971: [.65002, 1.15, 0, 0, .52778],
        10216: [.65002, 1.15, 0, 0, .61111],
        10217: [.65002, 1.15, 0, 0, .61111],
        10752: [.55001, 1.05, 0, 0, 1.51112],
        10753: [.55001, 1.05, 0, 0, 1.51112],
        10754: [.55001, 1.05, 0, 0, 1.51112],
        10756: [.55001, 1.05, 0, 0, 1.11111],
        10758: [.55001, 1.05, 0, 0, 1.11111]
      },
      "Size3-Regular": {
        40: [.95003, 1.45, 0, 0, .73611],
        41: [.95003, 1.45, 0, 0, .73611],
        47: [.95003, 1.45, 0, 0, 1.04445],
        91: [.95003, 1.45, 0, 0, .52778],
        92: [.95003, 1.45, 0, 0, 1.04445],
        93: [.95003, 1.45, 0, 0, .52778],
        123: [.95003, 1.45, 0, 0, .75],
        125: [.95003, 1.45, 0, 0, .75],
        710: [0, .75, 0, 0, 1.44445],
        732: [0, .75, 0, 0, 1.44445],
        770: [0, .75, 0, 0, 1.44445],
        771: [0, .75, 0, 0, 1.44445],
        8730: [.95003, 1.45, 0, 0, 1],
        8968: [.95003, 1.45, 0, 0, .58334],
        8969: [.95003, 1.45, 0, 0, .58334],
        8970: [.95003, 1.45, 0, 0, .58334],
        8971: [.95003, 1.45, 0, 0, .58334],
        10216: [.95003, 1.45, 0, 0, .75],
        10217: [.95003, 1.45, 0, 0, .75]
      },
      "Size4-Regular": {
        40: [1.25003, 1.75, 0, 0, .79167],
        41: [1.25003, 1.75, 0, 0, .79167],
        47: [1.25003, 1.75, 0, 0, 1.27778],
        91: [1.25003, 1.75, 0, 0, .58334],
        92: [1.25003, 1.75, 0, 0, 1.27778],
        93: [1.25003, 1.75, 0, 0, .58334],
        123: [1.25003, 1.75, 0, 0, .80556],
        125: [1.25003, 1.75, 0, 0, .80556],
        710: [0, .825, 0, 0, 1.8889],
        732: [0, .825, 0, 0, 1.8889],
        770: [0, .825, 0, 0, 1.8889],
        771: [0, .825, 0, 0, 1.8889],
        8730: [1.25003, 1.75, 0, 0, 1],
        8968: [1.25003, 1.75, 0, 0, .63889],
        8969: [1.25003, 1.75, 0, 0, .63889],
        8970: [1.25003, 1.75, 0, 0, .63889],
        8971: [1.25003, 1.75, 0, 0, .63889],
        9115: [.64502, 1.155, 0, 0, .875],
        9116: [1e-5, .6, 0, 0, .875],
        9117: [.64502, 1.155, 0, 0, .875],
        9118: [.64502, 1.155, 0, 0, .875],
        9119: [1e-5, .6, 0, 0, .875],
        9120: [.64502, 1.155, 0, 0, .875],
        9121: [.64502, 1.155, 0, 0, .66667],
        9122: [-99e-5, .601, 0, 0, .66667],
        9123: [.64502, 1.155, 0, 0, .66667],
        9124: [.64502, 1.155, 0, 0, .66667],
        9125: [-99e-5, .601, 0, 0, .66667],
        9126: [.64502, 1.155, 0, 0, .66667],
        9127: [1e-5, .9, 0, 0, .88889],
        9128: [.65002, 1.15, 0, 0, .88889],
        9129: [.90001, 0, 0, 0, .88889],
        9130: [0, .3, 0, 0, .88889],
        9131: [1e-5, .9, 0, 0, .88889],
        9132: [.65002, 1.15, 0, 0, .88889],
        9133: [.90001, 0, 0, 0, .88889],
        9143: [.88502, .915, 0, 0, 1.05556],
        10216: [1.25003, 1.75, 0, 0, .80556],
        10217: [1.25003, 1.75, 0, 0, .80556],
        57344: [-.00499, .605, 0, 0, 1.05556],
        57345: [-.00499, .605, 0, 0, 1.05556],
        57680: [0, .12, 0, 0, .45],
        57681: [0, .12, 0, 0, .45],
        57682: [0, .12, 0, 0, .45],
        57683: [0, .12, 0, 0, .45]
      },
      "Typewriter-Regular": {
        33: [0, .61111, 0, 0, .525],
        34: [0, .61111, 0, 0, .525],
        35: [0, .61111, 0, 0, .525],
        36: [.08333, .69444, 0, 0, .525],
        37: [.08333, .69444, 0, 0, .525],
        38: [0, .61111, 0, 0, .525],
        39: [0, .61111, 0, 0, .525],
        40: [.08333, .69444, 0, 0, .525],
        41: [.08333, .69444, 0, 0, .525],
        42: [0, .52083, 0, 0, .525],
        43: [-.08056, .53055, 0, 0, .525],
        44: [.13889, .125, 0, 0, .525],
        45: [-.08056, .53055, 0, 0, .525],
        46: [0, .125, 0, 0, .525],
        47: [.08333, .69444, 0, 0, .525],
        48: [0, .61111, 0, 0, .525],
        49: [0, .61111, 0, 0, .525],
        50: [0, .61111, 0, 0, .525],
        51: [0, .61111, 0, 0, .525],
        52: [0, .61111, 0, 0, .525],
        53: [0, .61111, 0, 0, .525],
        54: [0, .61111, 0, 0, .525],
        55: [0, .61111, 0, 0, .525],
        56: [0, .61111, 0, 0, .525],
        57: [0, .61111, 0, 0, .525],
        58: [0, .43056, 0, 0, .525],
        59: [.13889, .43056, 0, 0, .525],
        60: [-.05556, .55556, 0, 0, .525],
        61: [-.19549, .41562, 0, 0, .525],
        62: [-.05556, .55556, 0, 0, .525],
        63: [0, .61111, 0, 0, .525],
        64: [0, .61111, 0, 0, .525],
        65: [0, .61111, 0, 0, .525],
        66: [0, .61111, 0, 0, .525],
        67: [0, .61111, 0, 0, .525],
        68: [0, .61111, 0, 0, .525],
        69: [0, .61111, 0, 0, .525],
        70: [0, .61111, 0, 0, .525],
        71: [0, .61111, 0, 0, .525],
        72: [0, .61111, 0, 0, .525],
        73: [0, .61111, 0, 0, .525],
        74: [0, .61111, 0, 0, .525],
        75: [0, .61111, 0, 0, .525],
        76: [0, .61111, 0, 0, .525],
        77: [0, .61111, 0, 0, .525],
        78: [0, .61111, 0, 0, .525],
        79: [0, .61111, 0, 0, .525],
        80: [0, .61111, 0, 0, .525],
        81: [.13889, .61111, 0, 0, .525],
        82: [0, .61111, 0, 0, .525],
        83: [0, .61111, 0, 0, .525],
        84: [0, .61111, 0, 0, .525],
        85: [0, .61111, 0, 0, .525],
        86: [0, .61111, 0, 0, .525],
        87: [0, .61111, 0, 0, .525],
        88: [0, .61111, 0, 0, .525],
        89: [0, .61111, 0, 0, .525],
        90: [0, .61111, 0, 0, .525],
        91: [.08333, .69444, 0, 0, .525],
        92: [.08333, .69444, 0, 0, .525],
        93: [.08333, .69444, 0, 0, .525],
        94: [0, .61111, 0, 0, .525],
        95: [.09514, 0, 0, 0, .525],
        96: [0, .61111, 0, 0, .525],
        97: [0, .43056, 0, 0, .525],
        98: [0, .61111, 0, 0, .525],
        99: [0, .43056, 0, 0, .525],
        100: [0, .61111, 0, 0, .525],
        101: [0, .43056, 0, 0, .525],
        102: [0, .61111, 0, 0, .525],
        103: [.22222, .43056, 0, 0, .525],
        104: [0, .61111, 0, 0, .525],
        105: [0, .61111, 0, 0, .525],
        106: [.22222, .61111, 0, 0, .525],
        107: [0, .61111, 0, 0, .525],
        108: [0, .61111, 0, 0, .525],
        109: [0, .43056, 0, 0, .525],
        110: [0, .43056, 0, 0, .525],
        111: [0, .43056, 0, 0, .525],
        112: [.22222, .43056, 0, 0, .525],
        113: [.22222, .43056, 0, 0, .525],
        114: [0, .43056, 0, 0, .525],
        115: [0, .43056, 0, 0, .525],
        116: [0, .55358, 0, 0, .525],
        117: [0, .43056, 0, 0, .525],
        118: [0, .43056, 0, 0, .525],
        119: [0, .43056, 0, 0, .525],
        120: [0, .43056, 0, 0, .525],
        121: [.22222, .43056, 0, 0, .525],
        122: [0, .43056, 0, 0, .525],
        123: [.08333, .69444, 0, 0, .525],
        124: [.08333, .69444, 0, 0, .525],
        125: [.08333, .69444, 0, 0, .525],
        126: [0, .61111, 0, 0, .525],
        127: [0, .61111, 0, 0, .525],
        176: [0, .61111, 0, 0, .525],
        305: [0, .43056, 0, 0, .525],
        567: [.22222, .43056, 0, 0, .525],
        711: [0, .56597, 0, 0, .525],
        713: [0, .56555, 0, 0, .525],
        714: [0, .61111, 0, 0, .525],
        715: [0, .61111, 0, 0, .525],
        728: [0, .61111, 0, 0, .525],
        730: [0, .61111, 0, 0, .525],
        770: [0, .61111, 0, 0, .525],
        771: [0, .61111, 0, 0, .525],
        776: [0, .61111, 0, 0, .525],
        915: [0, .61111, 0, 0, .525],
        916: [0, .61111, 0, 0, .525],
        920: [0, .61111, 0, 0, .525],
        923: [0, .61111, 0, 0, .525],
        926: [0, .61111, 0, 0, .525],
        928: [0, .61111, 0, 0, .525],
        931: [0, .61111, 0, 0, .525],
        933: [0, .61111, 0, 0, .525],
        934: [0, .61111, 0, 0, .525],
        936: [0, .61111, 0, 0, .525],
        937: [0, .61111, 0, 0, .525],
        8216: [0, .61111, 0, 0, .525],
        8217: [0, .61111, 0, 0, .525],
        8242: [0, .61111, 0, 0, .525],
        9251: [.11111, .21944, 0, 0, .525]
      }
    };
  }, function (e, t, r) {
    "use strict";

    t.a = u;
    var n = r(0),
      a = r(3),
      i = r(1),
      o = r(5),
      s = r(4),
      l = r(2);
    function u(e, t, r) {
      for (var a = s.a(e, t, !1), i = t.sizeMultiplier / r.sizeMultiplier, l = 0; l < a.length; l++) {
        var u = o.a.indexOf(a[l].classes, "sizing");
        u < 0 ? Array.prototype.push.apply(a[l].classes, t.sizingClasses(r)) : a[l].classes[u + 1] === "reset-size" + t.size && (a[l].classes[u + 1] = "reset-size" + r.size), a[l].height *= i, a[l].depth *= i;
      }
      return n.a.makeFragment(a);
    }
    var c = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
    Object(a.b)({
      type: "sizing",
      names: c,
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function handler(e, t) {
        var r = e.breakOnTokenText,
          n = e.funcName,
          a = e.parser;
        a.consumeSpaces();
        var i = a.parseExpression(!1, r);
        return {
          type: "sizing",
          size: o.a.indexOf(c, n) + 1,
          value: i
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = t.havingSize(e.value.size);
        return u(e.value.value, r, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = t.havingSize(e.value.size),
          n = l.a(e.value.value, r),
          a = new i.a.MathNode("mstyle", n);
        return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a;
      }
    });
  }, function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return i;
    }), t.b = function (e) {
      for (var t = e.type, r = e.names, o = e.props, s = e.handler, l = e.htmlBuilder, u = e.mathmlBuilder, c = {
          numArgs: o.numArgs || 0,
          greediness: 1,
          allowedInText: !1,
          numOptionalArgs: 0,
          handler: s
        }, h = 0; h < r.length; ++h) i[r[h]] = c;
      l && (n.d[t] = l);
      u && (a.d[t] = u);
    };
    var n = r(4),
      a = r(2),
      i = (r(43), r(14), {});
  }, function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return f;
    }), r.d(t, "b", function () {
      return g;
    });
    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(145),
      l = r.n(s),
      u = r(6),
      c = r(31),
      h = r(27),
      p = "%[^\n]*[\n]",
      m = "\\\\[a-zA-Z@]+",
      d = "[\u0300-\u036F]",
      f = new RegExp(d + "+$"),
      v = new RegExp("([ \r\n\t]+)|(" + p + "|[!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + d + "*|[\uD800-\uDBFF][\uDC00-\uDFFF]" + d + "*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|" + m + "|\\\\[^\uD800-\uDFFF])"),
      g = new RegExp("^" + m),
      y = new RegExp("^" + p),
      b = function () {
        function e(t) {
          a()(this, e), this.input = t, this.pos = 0;
        }
        return o()(e, [{
          key: "lex",
          value: function value() {
            var e = this.input,
              t = this.pos;
            if (t === e.length) return new h.a("EOF", new c.a(this, t, t));
            var r = l()(v, e, t);
            if (null === r) throw new u.a("Unexpected character: '" + e[t] + "'", new h.a(e[t], new c.a(this, t, t + 1)));
            var n = r[2] || " ",
              a = this.pos;
            this.pos += r[0].length;
            var i = this.pos;
            return y.test(n) ? this.lex() : new h.a(n, new c.a(this, a, i));
          }
        }]), e;
      }();
    t.c = b;
  }, function (e, t, r) {
    "use strict";

    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var n = r(64),
      a = (r.n(n), r(65));
    t["default"] = a.a;
  }, function (e, t) {}, function (e, t, r) {
    "use strict";

    var n = r(6),
      a = r(34),
      i = r(76),
      o = r(113),
      s = r(5),
      l = function l(e, t, r) {
        s.a.clearNode(t);
        var n = u(e, r).toNode();
        t.appendChild(n);
      };
    "undefined" != typeof document && "CSS1Compat" !== document.compatMode && ("undefined" != typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), l = function l() {
      throw new n.a("KaTeX doesn't work in quirks mode.");
    });
    var u = function u(e, t) {
      var r = new a.a(t),
        n = Object(o.a)(e, r);
      return Object(i.b)(n, e, r);
    };
    t.a = {
      render: l,
      renderToString: function renderToString(e, t) {
        return u(e, t).toMarkup();
      },
      ParseError: n.a,
      __parse: function __parse(e, t) {
        var r = new a.a(t);
        return Object(o.a)(e, r);
      },
      __renderToDomTree: u,
      __renderToHTMLTree: function __renderToHTMLTree(e, t) {
        var r = new a.a(t),
          n = Object(o.a)(e, r);
        return Object(i.a)(n, e, r);
      }
    };
  }, function (e, t, r) {
    e.exports = {
      "default": r(67),
      __esModule: !0
    };
  }, function (e, t, r) {
    r(68), e.exports = r(8).Object.freeze;
  }, function (e, t, r) {
    var n = r(20),
      a = r(69).onFreeze;
    r(46)("freeze", function (e) {
      return function (t) {
        return e && n(t) ? e(a(t)) : t;
      };
    });
  }, function (e, t, r) {
    var n = r(32)("meta"),
      a = r(20),
      i = r(21),
      o = r(15).f,
      s = 0,
      l = Object.isExtensible || function () {
        return !0;
      },
      u = !r(24)(function () {
        return l(Object.preventExtensions({}));
      }),
      c = function c(e) {
        o(e, n, {
          value: {
            i: "O" + ++s,
            w: {}
          }
        });
      },
      h = e.exports = {
        KEY: n,
        NEED: !1,
        fastKey: function fastKey(e, t) {
          if (!a(e)) return "symbol" == _typeof(e) ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, n)) {
            if (!l(e)) return "F";
            if (!t) return "E";
            c(e);
          }
          return e[n].i;
        },
        getWeak: function getWeak(e, t) {
          if (!i(e, n)) {
            if (!l(e)) return !0;
            if (!t) return !1;
            c(e);
          }
          return e[n].w;
        },
        onFreeze: function onFreeze(e) {
          return u && h.NEED && l(e) && !i(e, n) && c(e), e;
        }
      };
  }, function (e, t, r) {
    e.exports = !r(23) && !r(24)(function () {
      return 7 != Object.defineProperty(r(45)("div"), "a", {
        get: function get() {
          return 7;
        }
      }).a;
    });
  }, function (e, t, r) {
    var n = r(20);
    e.exports = function (e, t) {
      if (!n(e)) return e;
      var r, a;
      if (t && "function" == typeof (r = e.toString) && !n(a = r.call(e))) return a;
      if ("function" == typeof (r = e.valueOf) && !n(a = r.call(e))) return a;
      if (!t && "function" == typeof (r = e.toString) && !n(a = r.call(e))) return a;
      throw TypeError("Can't convert object to primitive value");
    };
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e;
    };
  }, function (e, t, r) {
    e.exports = {
      "default": r(74),
      __esModule: !0
    };
  }, function (e, t, r) {
    r(75);
    var n = r(8).Object;
    e.exports = function (e, t, r) {
      return n.defineProperty(e, t, r);
    };
  }, function (e, t, r) {
    var n = r(25);
    n(n.S + n.F * !r(23), "Object", {
      defineProperty: r(15).f
    });
  }, function (e, t, r) {
    "use strict";

    r.d(t, "b", function () {
      return u;
    }), r.d(t, "a", function () {
      return c;
    });
    var n = r(4),
      a = r(2),
      i = r(0),
      o = r(43),
      s = (r(34), r(9)),
      l = function l(e) {
        return new o.a({
          style: e.displayMode ? s.a.DISPLAY : s.a.TEXT,
          maxSize: e.maxSize
        });
      },
      u = function u(e, t, r) {
        var o = l(r),
          s = Object(a.c)(e, t, o),
          u = Object(n.c)(e, o),
          c = i.a.makeSpan(["katex"], [s, u]);
        return r.displayMode ? i.a.makeSpan(["katex-display"], [c]) : c;
      },
      c = function c(e, t, r) {
        var a = l(r),
          o = Object(n.c)(e, a),
          s = i.a.makeSpan(["katex"], [o]);
        return r.displayMode ? i.a.makeSpan(["katex-display"], [s]) : s;
      };
  }, function (e, t, r) {
    e.exports = {
      "default": r(78),
      __esModule: !0
    };
  }, function (e, t, r) {
    var n = r(8),
      a = n.JSON || (n.JSON = {
        stringify: JSON.stringify
      });
    e.exports = function (e) {
      return a.stringify.apply(a, arguments);
    };
  }, function (e, t, r) {
    e.exports = {
      "default": r(80),
      __esModule: !0
    };
  }, function (e, t, r) {
    r(36), r(92), e.exports = r(8).Array.from;
  }, function (e, t, r) {
    var n = r(37),
      a = r(38);
    e.exports = function (e) {
      return function (t, r) {
        var i,
          o,
          s = String(a(t)),
          l = n(r),
          u = s.length;
        return l < 0 || l >= u ? e ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === u || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : i : e ? s.slice(l, l + 2) : o - 56320 + (i - 55296 << 10) + 65536;
      };
    };
  }, function (e, t) {
    e.exports = !0;
  }, function (e, t, r) {
    e.exports = r(26);
  }, function (e, t, r) {
    "use strict";

    var n = r(85),
      a = r(33),
      i = r(54),
      o = {};
    r(26)(o, r(11)("iterator"), function () {
      return this;
    }), e.exports = function (e, t, r) {
      e.prototype = n(o, {
        next: a(1, r)
      }), i(e, t + " Iterator");
    };
  }, function (e, t, r) {
    var n = r(22),
      a = r(86),
      i = r(53),
      o = r(41)("IE_PROTO"),
      s = function s() {},
      l = "prototype",
      _u = function u() {
        var e,
          t = r(45)("iframe"),
          n = i.length;
        for (t.style.display = "none", r(90).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), _u = e.F; n--;) delete _u[l][i[n]];
        return _u();
      };
    e.exports = Object.create || function (e, t) {
      var r;
      return null !== e ? (s[l] = n(e), r = new s(), s[l] = null, r[o] = e) : r = _u(), void 0 === t ? r : a(r, t);
    };
  }, function (e, t, r) {
    var n = r(15),
      a = r(22),
      i = r(39);
    e.exports = r(23) ? Object.defineProperties : function (e, t) {
      a(e);
      for (var r, o = i(t), s = o.length, l = 0; s > l;) n.f(e, r = o[l++], t[r]);
      return e;
    };
  }, function (e, t, r) {
    var n = r(21),
      a = r(40),
      i = r(88)(!1),
      o = r(41)("IE_PROTO");
    e.exports = function (e, t) {
      var r,
        s = a(e),
        l = 0,
        u = [];
      for (r in s) r != o && n(s, r) && u.push(r);
      for (; t.length > l;) n(s, r = t[l++]) && (~i(u, r) || u.push(r));
      return u;
    };
  }, function (e, t, r) {
    var n = r(40),
      a = r(51),
      i = r(89);
    e.exports = function (e) {
      return function (t, r, o) {
        var s,
          l = n(t),
          u = a(l.length),
          c = i(o, u);
        if (e && r != r) {
          for (; u > c;) if ((s = l[c++]) != s) return !0;
        } else for (; u > c; c++) if ((e || c in l) && l[c] === r) return e || c || 0;
        return !e && -1;
      };
    };
  }, function (e, t, r) {
    var n = r(37),
      a = Math.max,
      i = Math.min;
    e.exports = function (e, t) {
      return (e = n(e)) < 0 ? a(e + t, 0) : i(e, t);
    };
  }, function (e, t, r) {
    e.exports = r(16).document && document.documentElement;
  }, function (e, t, r) {
    var n = r(21),
      a = r(29),
      i = r(41)("IE_PROTO"),
      o = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
      return e = a(e), n(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(47),
      a = r(25),
      i = r(29),
      o = r(93),
      s = r(94),
      l = r(51),
      u = r(95),
      c = r(55);
    a(a.S + a.F * !r(96)(function (e) {
      Array.from(e);
    }), "Array", {
      from: function from(e) {
        var t,
          r,
          a,
          h,
          p = i(e),
          m = "function" == typeof this ? this : Array,
          d = arguments.length,
          f = d > 1 ? arguments[1] : void 0,
          v = void 0 !== f,
          g = 0,
          y = c(p);
        if (v && (f = n(f, d > 2 ? arguments[2] : void 0, 2)), void 0 == y || m == Array && s(y)) for (r = new m(t = l(p.length)); t > g; g++) u(r, g, v ? f(p[g], g) : p[g]);else for (h = y.call(p), r = new m(); !(a = h.next()).done; g++) u(r, g, v ? o(h, f, [a.value, g], !0) : a.value);
        return r.length = g, r;
      }
    });
  }, function (e, t, r) {
    var n = r(22);
    e.exports = function (e, t, r, a) {
      try {
        return a ? t(n(r)[0], r[1]) : t(r);
      } catch (t) {
        var i = e["return"];
        throw void 0 !== i && n(i.call(e)), t;
      }
    };
  }, function (e, t, r) {
    var n = r(17),
      a = r(11)("iterator"),
      i = Array.prototype;
    e.exports = function (e) {
      return void 0 !== e && (n.Array === e || i[a] === e);
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(15),
      a = r(33);
    e.exports = function (e, t, r) {
      t in e ? n.f(e, t, a(0, r)) : e[t] = r;
    };
  }, function (e, t, r) {
    var n = r(11)("iterator"),
      a = !1;
    try {
      var i = [7][n]();
      i["return"] = function () {
        a = !0;
      }, Array.from(i, function () {
        throw 2;
      });
    } catch (e) {}
    e.exports = function (e, t) {
      if (!t && !a) return !1;
      var r = !1;
      try {
        var i = [7],
          o = i[n]();
        o.next = function () {
          return {
            done: r = !0
          };
        }, i[n] = function () {
          return o;
        }, e(i);
      } catch (e) {}
      return r;
    };
  }, function (e, t, r) {
    e.exports = {
      "default": r(98),
      __esModule: !0
    };
  }, function (e, t, r) {
    r(58), r(36), e.exports = r(102);
  }, function (e, t, r) {
    "use strict";

    var n = r(100),
      a = r(101),
      i = r(17),
      o = r(40);
    e.exports = r(48)(Array, "Array", function (e, t) {
      this._t = o(e), this._i = 0, this._k = t;
    }, function () {
      var e = this._t,
        t = this._k,
        r = this._i++;
      return !e || r >= e.length ? (this._t = void 0, a(1)) : a(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
    }, "values"), i.Arguments = i.Array, n("keys"), n("values"), n("entries");
  }, function (e, t) {
    e.exports = function () {};
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        value: t,
        done: !!e
      };
    };
  }, function (e, t, r) {
    var n = r(56),
      a = r(11)("iterator"),
      i = r(17);
    e.exports = r(8).isIterable = function (e) {
      var t = Object(e);
      return void 0 !== t[a] || "@@iterator" in t || i.hasOwnProperty(n(t));
    };
  }, function (e, t, r) {
    r(58), r(36), e.exports = r(104);
  }, function (e, t, r) {
    var n = r(22),
      a = r(55);
    e.exports = r(8).getIterator = function (e) {
      var t = a(e);
      if ("function" != typeof t) throw TypeError(e + " is not iterable!");
      return n(t.call(e));
    };
  }, function (e, t, r) {
    e.exports = {
      "default": r(106),
      __esModule: !0
    };
  }, function (e, t, r) {
    r(107), e.exports = r(8).Object.assign;
  }, function (e, t, r) {
    var n = r(25);
    n(n.S + n.F, "Object", {
      assign: r(108)
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(39),
      a = r(109),
      i = r(110),
      o = r(29),
      s = r(49),
      l = Object.assign;
    e.exports = !l || r(24)(function () {
      var e = {},
        t = {},
        r = Symbol(),
        n = "abcdefghijklmnopqrst";
      return e[r] = 7, n.split("").forEach(function (e) {
        t[e] = e;
      }), 7 != l({}, e)[r] || Object.keys(l({}, t)).join("") != n;
    }) ? function (e, t) {
      for (var r = o(e), l = arguments.length, u = 1, c = a.f, h = i.f; l > u;) for (var p, m = s(arguments[u++]), d = c ? n(m).concat(c(m)) : n(m), f = d.length, v = 0; f > v;) h.call(m, p = d[v++]) && (r[p] = m[p]);
      return r;
    } : l;
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols;
  }, function (e, t) {
    t.f = {}.propertyIsEnumerable;
  }, function (e, t, r) {
    "use strict";

    var n = {
      stdHorizRule: "M0 80H400000 v40H0z M0 80H400000 v40H0z",
      vertSeparator: "M100 0h50V400000h-50zM100 0h50V400000h-50z",
      sqrtMain: "M95,702c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,\n-10,-9.5,-14c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54c44.2,-33.3,65.8,\n-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10s173,378,173,378c0.7,0,\n35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429c69,-144,104.5,-217.7,106.5,\n-221c5.3,-9.3,12,-14,20,-14H400000v40H845.2724s-225.272,467,-225.272,467\ns-235,486,-235,486c-2.7,4.7,-9,7,-19,7c-6,0,-10,-1,-12,-3s-194,-422,-194,-422\ns-65,47,-65,47z M834 80H400000v40H845z",
      sqrtSize1: "M263,681c0.7,0,18,39.7,52,119c34,79.3,68.167,\n158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120c340,-704.7,510.7,-1060.3,512,-1067\nc4.7,-7.3,11,-11,19,-11H40000v40H1012.3s-271.3,567,-271.3,567c-38.7,80.7,-84,\n175,-136,283c-52,108,-89.167,185.3,-111.5,232c-22.3,46.7,-33.8,70.3,-34.5,71\nc-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1s-109,-253,-109,-253c-72.7,-168,-109.3,\n-252,-110,-252c-10.7,8,-22,16.7,-34,26c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26\ns76,-59,76,-59s76,-60,76,-60z M1001 80H40000v40H1012z",
      sqrtSize2: "M1001,80H400000v40H1013.1s-83.4,268,-264.1,840c-180.7,\n572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,\n-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744c-10,12,-21,25,-33,39s-32,39,-32,39\nc-6,-5.3,-15,-14,-27,-26s25,-30,25,-30c26.7,-32.7,52,-63,76,-91s52,-60,52,-60\ns208,722,208,722c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,\n-658.5c53.7,-170.3,84.5,-266.8,92.5,-289.5c4,-6.7,10,-10,18,-10z\nM1001 80H400000v40H1013z",
      sqrtSize3: "M424,2478c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,\n-342,-109.8,-513.3,-110.5,-514c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,\n25c-5.7,9.3,-9.8,16,-12.5,20s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,\n-13s76,-122,76,-122s77,-121,77,-121s209,968,209,968c0,-2,84.7,-361.7,254,-1079\nc169.3,-717.3,254.7,-1077.7,256,-1081c4,-6.7,10,-10,18,-10H400000v40H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M1001 80H400000v40H1014z",
      sqrtSize4: "M473,2793c339.3,-1799.3,509.3,-2700,510,-2702\nc3.3,-7.3,9.3,-11,18,-11H400000v40H1017.7s-90.5,478,-276.2,1466c-185.7,988,\n-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,\n-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200c0,-1.3,-5.3,8.7,-16,30c-10.7,\n21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26s76,-153,76,-153s77,-151,\n77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,606z\nM1001 80H400000v40H1017z",
      doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
      doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
      leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
      leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
      leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
      leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
      leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
      leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
      leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
      leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
      leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
      lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
      leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
      leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
      leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
      longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
      midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
      midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
      rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
      rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
      rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
      rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
      rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
      rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
      rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
      rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
      rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
      righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
      rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
      rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
      twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
      twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
      tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
      tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
      tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
      tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
      vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
      widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
      widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
      baraboveleftarrow: "M1 500c30.67-18 59-41.833 85-71.5s45-61.17 57-94.5h23\nc15.33 0 23 .33 23 1 0 .67-5.33 12.67-16 36-16.67 34.67-39 67.33-67 98l-10 11\nh39904v40H96l9 10c27.33 30.67 50.67 65 70 103l14 33c0 .67-7.67 1-23 1h-22\nC116.67 596.33 69 540.67 1 500z M96 480 H400000 v40 H96z\nM1 147 H399905 v40  H1z M0 147 H399905 v40  H0z",
      rightarrowabovebar: "M400000 167c-70.67 42-118 97.67-142 167h-23c-15.33 0\n-23-.33-23-1 0-1.33 5.33-13.67 16-37 18-35.33 41.33-69 70-101l7-8h-39905\nv-40h39905c-389 0 0 0 0 0l-7-8c-28.67-32-52-65.67-70-101-10.67-23.33-16-35.67\n-16-37 0-.67 7.67-1 23-1h23c11.33 33.33 30 64.833 56 94.5s54.67 53.83 86 72.5z\nM0 147 H399905 v40  H0z M96 480 H400000 v40 H0z M96 480 H400000 v40 H0z",
      baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
      rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
      shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
      shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
    };
    t.a = {
      path: n
    };
  }, function (e, t, r) {
    "use strict";

    r.d(t, "a", function () {
      return o;
    }), r.d(t, "b", function () {
      return s;
    });
    var n = {
        number: 3,
        unit: "mu"
      },
      a = {
        number: 4,
        unit: "mu"
      },
      i = {
        number: 5,
        unit: "mu"
      },
      o = {
        mord: {
          mop: n,
          mbin: a,
          mrel: i,
          minner: n
        },
        mop: {
          mord: n,
          mop: n,
          mrel: i,
          minner: n
        },
        mbin: {
          mord: a,
          mop: a,
          mopen: a,
          minner: a
        },
        mrel: {
          mord: i,
          mop: i,
          mopen: i,
          minner: i
        },
        mopen: {},
        mclose: {
          mop: n,
          mbin: a,
          mrel: i,
          minner: n
        },
        mpunct: {
          mord: n,
          mop: n,
          mrel: i,
          mopen: n,
          mclose: n,
          mpunct: n,
          minner: n
        },
        minner: {
          mord: n,
          mop: n,
          mbin: a,
          mrel: i,
          mopen: n,
          mpunct: n,
          minner: n
        }
      },
      s = {
        mord: {
          mop: n
        },
        mop: {
          mord: n,
          mop: n
        },
        mbin: {},
        mrel: {},
        mopen: {},
        mclose: {
          mop: n
        },
        mpunct: {},
        minner: {
          mop: n
        }
      };
  }, function (e, t, r) {
    "use strict";

    var n = r(114);
    t.a = function (e, t) {
      if (!("string" == typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
      return new n.a(e, t).parse();
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(7),
      a = r.n(n),
      i = r(10),
      o = r.n(i),
      s = r(115),
      l = r(142),
      u = r(144),
      c = r(28),
      h = r(19),
      p = r(42),
      m = r(148),
      d = r.n(m),
      f = r(149),
      v = r(14),
      g = r(6),
      y = r(62);
    r(34), r(27);
    function b(e, t) {
      return {
        type: "arg",
        result: e,
        token: t
      };
    }
    function x(e) {
      if ("$" === e.type) throw new g.a("Unexpected $", e.token);
      return e;
    }
    var w = function () {
      function e(t, r) {
        a()(this, e), this.mode = "math", this.gullet = new u.a(t, r.macros, this.mode), r.colorIsTextColor && (this.gullet.macros["\\color"] = "\\textcolor"), this.settings = r, this.leftrightDepth = 0;
      }
      return o()(e, [{
        key: "expect",
        value: function value(e) {
          var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          if (this.nextToken.text !== e) throw new g.a("Expected '" + e + "', got '" + this.nextToken.text + "'", this.nextToken);
          t && this.consume();
        }
      }, {
        key: "consume",
        value: function value() {
          this.nextToken = this.gullet.expandNextToken();
        }
      }, {
        key: "switchMode",
        value: function value(e) {
          this.mode = e, this.gullet.switchMode(e);
        }
      }, {
        key: "parse",
        value: function value() {
          this.consume();
          var e = this.parseInput();
          return e;
        }
      }, {
        key: "parseInput",
        value: function value() {
          var e = this.parseExpression(!1);
          return this.expect("EOF", !1), e;
        }
      }, {
        key: "parseExpression",
        value: function value(t, r) {
          for (var n = [];;) {
            "math" === this.mode && this.consumeSpaces();
            var a = this.nextToken;
            if (-1 !== e.endOfExpression.indexOf(a.text)) break;
            if (r && a.text === r) break;
            if (t && s.a[a.text] && s.a[a.text].infix) break;
            var i = this.parseAtom(r);
            if (!i) {
              if (!this.settings.throwOnError && "\\" === a.text[0]) {
                var o = this.handleUnsupportedCmd();
                n.push(o);
                continue;
              }
              break;
            }
            n.push(i);
          }
          return this.handleInfixNodes(n);
        }
      }, {
        key: "handleInfixNodes",
        value: function value(e) {
          for (var t = -1, r = void 0, n = 0; n < e.length; n++) {
            var a = e[n];
            if ("infix" === a.type) {
              if (-1 !== t) throw new g.a("only one infix operator per group", a.value.token);
              t = n, r = a.value.replaceWith;
            }
          }
          if (-1 !== t && r) {
            var i = void 0,
              o = void 0,
              s = e.slice(0, t),
              l = e.slice(t + 1);
            i = 1 === s.length && "ordgroup" === s[0].type ? s[0] : new v.a("ordgroup", s, this.mode), o = 1 === l.length && "ordgroup" === l[0].type ? l[0] : new v.a("ordgroup", l, this.mode);
            var u = this.callFunction(r, [i, o], []);
            return [new v.a(u.type, u, this.mode)];
          }
          return e;
        }
      }, {
        key: "handleSupSubscript",
        value: function value(t) {
          var r = this.nextToken,
            n = r.text;
          this.consume(), this.consumeSpaces();
          var a = this.parseGroup();
          if (!a) {
            if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new g.a("Expected group after '" + n + "'", r);
            return this.handleUnsupportedCmd();
          }
          var i = x(a);
          if ("fn" === i.type) {
            if (s.a[i.result].greediness > e.SUPSUB_GREEDINESS) return this.parseGivenFunction(a);
            throw new g.a("Got function '" + i.result + "' with no arguments as " + t, r);
          }
          return i.result;
        }
      }, {
        key: "handleUnsupportedCmd",
        value: function value() {
          for (var e = this.nextToken.text, t = [], r = 0; r < e.length; r++) t.push(new v.a("textord", e[r], "text"));
          var n = new v.a("text", {
              body: t,
              type: "text"
            }, this.mode),
            a = new v.a("color", {
              color: this.settings.errorColor,
              value: [n],
              type: "color"
            }, this.mode);
          return this.consume(), a;
        }
      }, {
        key: "parseAtom",
        value: function value(e) {
          var t = this.parseImplicitGroup(e);
          if ("text" === this.mode) return t;
          for (var r = void 0, n = void 0;;) {
            this.consumeSpaces();
            var a = this.nextToken;
            if ("\\limits" === a.text || "\\nolimits" === a.text) {
              if (!t || "op" !== t.type) throw new g.a("Limit controls must follow a math operator", a);
              var i = "\\limits" === a.text;
              t.value.limits = i, t.value.alwaysHandleSupSub = !0, this.consume();
            } else if ("^" === a.text) {
              if (r) throw new g.a("Double superscript", a);
              r = this.handleSupSubscript("superscript");
            } else if ("_" === a.text) {
              if (n) throw new g.a("Double subscript", a);
              n = this.handleSupSubscript("subscript");
            } else {
              if ("'" !== a.text) break;
              if (r) throw new g.a("Double superscript", a);
              var o = new v.a("textord", "\\prime", this.mode),
                s = [o];
              for (this.consume(); "'" === this.nextToken.text;) s.push(o), this.consume();
              "^" === this.nextToken.text && s.push(this.handleSupSubscript("superscript")), r = new v.a("ordgroup", s, this.mode);
            }
          }
          return r || n ? new v.a("supsub", {
            base: t,
            sup: r,
            sub: n
          }, this.mode) : t;
        }
      }, {
        key: "parseImplicitGroup",
        value: function value(e) {
          var t = this.parseSymbol();
          if (null == t) return this.parseFunction();
          if ("arg" === t.type) return this.parseGivenFunction(t);
          var r = t.result;
          if ("$" === r) {
            if ("math" === this.mode) throw new g.a("$ within math mode");
            var n = this.mode;
            this.switchMode("math"), this.consume();
            var a = this.parseExpression(!1, "$");
            return this.expect("$", !1), this.switchMode(n), this.consume(), new v.a("styling", {
              style: "text",
              value: a
            }, "math");
          }
          if ("\\begin" === r) {
            var i = this.parseGivenFunction(t),
              o = i.value.name;
            if (!l.a.hasOwnProperty(o)) throw new g.a("No such environment: " + o, i.value.nameGroup);
            var s = l.a[o],
              u = this.parseArguments("\\begin{" + o + "}", s),
              c = u.args,
              h = u.optArgs,
              p = {
                mode: this.mode,
                envName: o,
                parser: this
              },
              m = s.handler(p, c, h);
            this.expect("\\end", !1);
            var d = this.nextToken,
              f = this.parseFunction();
            if (!f) throw new g.a("failed to parse function after \\end");
            if (f.value.name !== o) throw new g.a("Mismatch: \\begin{" + o + "} matched by \\end{" + f.value.name + "}", d);
            return m;
          }
          return this.parseGivenFunction(t, e);
        }
      }, {
        key: "parseFunction",
        value: function value() {
          var e = this.parseGroup();
          return e ? this.parseGivenFunction(e) : null;
        }
      }, {
        key: "parseGivenFunction",
        value: function value(e, t) {
          if ("fn" === (e = x(e)).type) {
            var r = e.result,
              n = s.a[r];
            if ("text" === this.mode && !n.allowedInText) throw new g.a("Can't use function '" + r + "' in text mode", e.token);
            if ("math" === this.mode && !1 === n.allowedInMath) throw new g.a("Can't use function '" + r + "' in math mode", e.token);
            var a = this.parseArguments(r, n),
              i = a.args,
              o = a.optArgs,
              l = e.token,
              u = this.callFunction(r, i, o, l, t);
            return new v.a(u.type, u, this.mode);
          }
          return e.result;
        }
      }, {
        key: "callFunction",
        value: function value(e, t, r, n, a) {
          var i = {
              funcName: e,
              parser: this,
              token: n,
              breakOnTokenText: a
            },
            o = s.a[e];
          if (o && o.handler) return o.handler(i, t, r);
          throw new g.a("No function handler for " + e);
        }
      }, {
        key: "parseArguments",
        value: function value(e, t) {
          var r = t.numArgs + t.numOptionalArgs;
          if (0 === r) return {
            args: [],
            optArgs: []
          };
          for (var n = t.greediness, a = [], i = [], o = 0; o < r; o++) {
            var l = t.argTypes && t.argTypes[o],
              u = o < t.numOptionalArgs;
            o > 0 && !u && this.consumeSpaces(), 0 !== o || u || "math" !== this.mode || this.consumeSpaces();
            var c = this.nextToken,
              h = l ? this.parseGroupOfType(l, u) : this.parseGroup(u);
            if (!h) {
              if (u) {
                i.push(null);
                continue;
              }
              if (this.settings.throwOnError || "\\" !== this.nextToken.text[0]) throw new g.a("Expected group after '" + e + "'", c);
              h = b(this.handleUnsupportedCmd(), c);
            }
            var p = void 0;
            if ("fn" === (h = x(h)).type) {
              if (!(s.a[h.result].greediness > n)) throw new g.a("Got function '" + h.result + "' as argument to '" + e + "'", c);
              p = this.parseGivenFunction(h);
            } else p = h.result;
            (u ? i : a).push(p);
          }
          return {
            args: a,
            optArgs: i
          };
        }
      }, {
        key: "parseGroupOfType",
        value: function value(e, t) {
          return "original" === e && (e = this.mode), "color" === e ? this.parseColorGroup(t) : "size" === e ? this.parseSizeGroup(t) : "url" === e ? this.parseUrlGroup(t) : this.parseGroup(t, e);
        }
      }, {
        key: "consumeSpaces",
        value: function value() {
          for (; " " === this.nextToken.text;) this.consume();
        }
      }, {
        key: "parseStringGroup",
        value: function value(e, t) {
          if (t && "[" !== this.nextToken.text) return null;
          var r = this.mode;
          this.mode = "text", this.expect(t ? "[" : "{");
          for (var n = "", a = this.nextToken, i = a; this.nextToken.text !== (t ? "]" : "}");) {
            if ("EOF" === this.nextToken.text) throw new g.a("Unexpected end of input in " + e, a.range(this.nextToken, n));
            n += (i = this.nextToken).text, this.consume();
          }
          return this.mode = r, this.expect(t ? "]" : "}"), a.range(i, n);
        }
      }, {
        key: "parseStringGroupWithBalancedBraces",
        value: function value(e, t) {
          if (t && "[" !== this.nextToken.text) return null;
          var r = this.mode;
          this.mode = "text", this.expect(t ? "[" : "{");
          for (var n = "", a = 0, i = this.nextToken, o = i; a > 0 || this.nextToken.text !== (t ? "]" : "}");) {
            if ("EOF" === this.nextToken.text) throw new g.a("Unexpected end of input in " + e, i.range(this.nextToken, n));
            if (n += (o = this.nextToken).text, "{" === o.text) a += 1;else if ("}" === o.text) {
              if (a <= 0) throw new g.a("Unbalanced brace of input in " + e, i.range(this.nextToken, n));
              a -= 1;
            }
            this.consume();
          }
          return this.mode = r, this.expect(t ? "]" : "}"), i.range(o, n);
        }
      }, {
        key: "parseRegexGroup",
        value: function value(e, t) {
          var r = this.mode;
          this.mode = "text";
          for (var n = this.nextToken, a = n, i = ""; "EOF" !== this.nextToken.text && e.test(i + this.nextToken.text);) i += (a = this.nextToken).text, this.consume();
          if ("" === i) throw new g.a("Invalid " + t + ": '" + n.text + "'", n);
          return this.mode = r, n.range(a, i);
        }
      }, {
        key: "parseColorGroup",
        value: function value(e) {
          var t = this.parseStringGroup("color", e);
          if (!t) return null;
          var r = /^(#[a-f0-9]{3}|#[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
          if (!r) throw new g.a("Invalid color: '" + t.text + "'", t);
          return b(new v.a("color", r[0], this.mode), t);
        }
      }, {
        key: "parseUrlGroup",
        value: function value(e) {
          var t = this.parseStringGroupWithBalancedBraces("url", e);
          if (!t) return null;
          var r = t.text.replace(/\\([#$%&~_^{}])/g, "$1");
          return b(new v.a("url", r, this.mode), t);
        }
      }, {
        key: "parseSizeGroup",
        value: function value(e) {
          var t = void 0;
          if (!(t = e || "{" === this.nextToken.text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
          var r = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
          if (!r) throw new g.a("Invalid size: '" + t.text + "'", t);
          var n = {
            number: +(r[1] + r[2]),
            unit: r[3]
          };
          if (!Object(h.b)(n)) throw new g.a("Invalid unit: '" + n.unit + "'", t);
          return b(new v.a("size", n, this.mode), t);
        }
      }, {
        key: "parseGroup",
        value: function value(e, t) {
          var r = this.mode,
            n = this.nextToken;
          if (this.nextToken.text === (e ? "[" : "{")) {
            t && this.switchMode(t), this.consume();
            var a = this.parseExpression(!1, e ? "]" : "}"),
              i = this.nextToken;
            return t && this.switchMode(r), this.expect(e ? "]" : "}"), "text" === t && this.formLigatures(a), b(new v.a("ordgroup", a, this.mode, n, i), n.range(i, n.text));
          }
          t && this.switchMode(t);
          var o = e ? null : this.parseSymbol();
          return t && this.switchMode(r), o;
        }
      }, {
        key: "formLigatures",
        value: function value(e) {
          for (var t = e.length - 1, r = 0; r < t; ++r) {
            var n = e[r],
              a = n.value;
            "-" === a && "-" === e[r + 1].value && (r + 1 < t && "-" === e[r + 2].value ? (e.splice(r, 3, new v.a("textord", "---", "text", n, e[r + 2])), t -= 2) : (e.splice(r, 2, new v.a("textord", "--", "text", n, e[r + 1])), t -= 1)), "'" !== a && "`" !== a || e[r + 1].value !== a || (e.splice(r, 2, new v.a("textord", a + a, "text", n, e[r + 1])), t -= 1);
          }
        }
      }, {
        key: "parseSymbol",
        value: function value() {
          var e,
            t = this.nextToken,
            r = t.text;
          if (s.a[r]) return this.consume(), {
            type: "fn",
            result: (e = t).text,
            token: e
          };
          if (/^\\verb[^a-zA-Z]/.test(r)) {
            this.consume();
            var n = r.slice(5),
              a = "*" === n.charAt(0);
            if (a && (n = n.slice(1)), n.length < 2 || n.charAt(0) !== n.slice(-1)) throw new g.a("\\verb assertion failed --\n                    please report what input caused this bug");
            return n = n.slice(1, -1), b(new v.a("verb", {
              body: n,
              star: a
            }, "text"), t);
          }
          if ("$" === r) return {
            type: "$",
            result: "$",
            token: t
          };
          f.a.hasOwnProperty(r[0]) && !c.a[this.mode][r[0]] && (r = f.a[r[0]] + r.substr(1));
          var i = y.a.exec(r);
          i && ("i" === (r = r.substring(0, i.index)) ? r = "\u0131" : "j" === r && (r = "\u0237"));
          var o = null;
          if (c.a[this.mode][r]) o = new v.a(c.a[this.mode][r].group, r, this.mode, t);else {
            if ("text" !== this.mode || !Object(p.b)(r.charCodeAt(0))) return null;
            o = new v.a("textord", r, this.mode, t);
          }
          if (this.consume(), i) for (var l = 0; l < i[0].length; l++) {
            var u = i[0][l];
            if (!d.a[u]) throw new g.a("Unknown accent ' " + u + "'", t);
            var h = d.a[u][this.mode];
            if (!h) throw new g.a("Accent " + u + " unsupported in " + this.mode + " mode", t);
            o = new v.a("accent", {
              type: "accent",
              label: h,
              isStretchy: !1,
              isShifty: !0,
              base: o
            }, this.mode, t);
          }
          return b(o, t);
        }
      }]), e;
    }();
    w.endOfExpression = ["}", "\\end", "\\right", "&", "\\\\", "\\cr"], w.SUPSUB_GREEDINESS = 1, t.a = w;
  }, function (e, t, r) {
    "use strict";

    var n = r(6),
      a = r(14),
      i = r(3),
      o = (r(116), r(117), r(118), r(119), r(120), r(121), r(122), r(123), r(124), r(125), r(126), r(127), r(128), r(129), r(130), r(131), r(60), r(132), r(133), r(137), r(138), r(139), r(140), r(141), i.a);
    t.a = o;
    var s = function s(e, t, r) {
      Object(i.b)({
        names: e,
        props: t,
        handler: r
      });
    };
    s(["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"], {
      numArgs: 1
    }, function (e, t) {
      var r = t[0];
      return {
        type: "mclass",
        mclass: "m" + e.funcName.substr(5),
        value: Object(i.c)(r)
      };
    }), s(["\\stackrel"], {
      numArgs: 2
    }, function (e, t) {
      var r = t[0],
        n = t[1],
        o = new a.a("op", {
          type: "op",
          limits: !0,
          alwaysHandleSupSub: !0,
          symbol: !1,
          value: Object(i.c)(n)
        }, n.mode);
      return {
        type: "mclass",
        mclass: "mrel",
        value: [new a.a("supsub", {
          base: o,
          sup: r,
          sub: null
        }, r.mode)]
      };
    });
    var l = {
      "\u222B": "\\int",
      "\u222C": "\\iint",
      "\u222D": "\\iiint",
      "\u222E": "\\oint"
    };
    s(["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"], {
      numArgs: 0
    }, function (e) {
      return {
        type: "op",
        limits: !1,
        symbol: !1,
        body: e.funcName
      };
    }), s(["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"], {
      numArgs: 0
    }, function (e) {
      return {
        type: "op",
        limits: !0,
        symbol: !1,
        body: e.funcName
      };
    }), s(["\\int", "\\iint", "\\iiint", "\\oint", "\u222B", "\u222C", "\u222D", "\u222E"], {
      numArgs: 0
    }, function (e) {
      var t = e.funcName;
      return 1 === t.length && (t = l[t]), {
        type: "op",
        limits: !1,
        symbol: !0,
        body: t
      };
    }), s(["\\overbrace", "\\underbrace"], {
      numArgs: 1
    }, function (e, t) {
      var r = t[0];
      return {
        type: "horizBrace",
        label: e.funcName,
        isOver: /^\\over/.test(e.funcName),
        base: r
      };
    }), s(["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"], {
      numArgs: 1,
      numOptionalArgs: 1
    }, function (e, t, r) {
      var n = r[0],
        a = t[0];
      return {
        type: "xArrow",
        label: e.funcName,
        body: a,
        below: n
      };
    }), s(["\\over", "\\choose", "\\atop"], {
      numArgs: 0,
      infix: !0
    }, function (e) {
      var t = void 0;
      switch (e.funcName) {
        case "\\over":
          t = "\\frac";
          break;
        case "\\choose":
          t = "\\binom";
          break;
        case "\\atop":
          t = "\\\\atopfrac";
          break;
        default:
          throw new Error("Unrecognized infix genfrac command");
      }
      return {
        type: "infix",
        replaceWith: t,
        token: e.token
      };
    }), s(["\\\\", "\\cr"], {
      numArgs: 0,
      numOptionalArgs: 1,
      argTypes: ["size"]
    }, function (e, t, r) {
      return {
        type: "cr",
        size: r[0]
      };
    }), s(["\\begin", "\\end"], {
      numArgs: 1,
      argTypes: ["text"]
    }, function (e, t) {
      var r = t[0];
      if ("ordgroup" !== r.type) throw new n.a("Invalid environment name", r);
      for (var a = "", i = 0; i < r.value.length; ++i) a += r.value[i].value;
      return {
        type: "environment",
        name: a,
        nameGroup: r
      };
    }), s(["\\raisebox"], {
      numArgs: 2,
      argTypes: ["size", "text"],
      allowedInText: !0
    }, function (e, t) {
      var r = t[0],
        n = t[1];
      return {
        type: "raisebox",
        dy: r,
        body: n,
        value: Object(i.c)(n)
      };
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(12),
      o = r(1),
      s = r(44),
      l = r(9),
      u = r(4),
      c = r(2);
    Object(n.b)({
      type: "sqrt",
      names: ["\\sqrt"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1
      },
      handler: function handler(e, t, r) {
        var n = r[0];
        return {
          type: "sqrt",
          body: t[0],
          index: n
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = u.b(e.value.body, t.havingCrampedStyle());
        0 === r.height && (r.height = t.fontMetrics().xHeight), r instanceof i.a.documentFragment && (r = a.a.makeSpan([], [r], t));
        var n = t.fontMetrics().defaultRuleThickness,
          o = n;
        t.style.id < l.a.TEXT.id && (o = t.fontMetrics().xHeight);
        var c = n + o / 4,
          h = (r.height + r.depth + c + n) * t.sizeMultiplier,
          p = s.a.sqrtImage(h, t),
          m = p.span,
          d = p.ruleWidth,
          f = m.height - d;
        f > r.height + r.depth + c && (c = (c + f - r.height - r.depth) / 2);
        var v = m.height - r.height - c - d;
        r.style.paddingLeft = m.advanceWidth + "em";
        var g = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r,
            wrapperClasses: ["svg-align"]
          }, {
            type: "kern",
            size: -(r.height + v)
          }, {
            type: "elem",
            elem: m
          }, {
            type: "kern",
            size: d
          }]
        }, t);
        if (e.value.index) {
          var y = t.havingStyle(l.a.SCRIPTSCRIPT),
            b = u.b(e.value.index, y, t),
            x = .6 * (g.height - g.depth),
            w = a.a.makeVList({
              positionType: "shift",
              positionData: -x,
              children: [{
                type: "elem",
                elem: b
              }]
            }, t),
            k = a.a.makeSpan(["root"], [w]);
          return a.a.makeSpan(["mord", "sqrt"], [k, g], t);
        }
        return a.a.makeSpan(["mord", "sqrt"], [g], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        return e.value.index ? new o.a.MathNode("mroot", [c.b(e.value.body, t), c.b(e.value.index, t)]) : new o.a.MathNode("msqrt", [c.b(e.value.body, t)]);
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(6),
      s = r(4),
      l = r(2),
      u = function u(e, t) {
        var r = s.a(e.value.value, t.withColor(e.value.color), !1);
        return new a.a.makeFragment(r);
      },
      c = function c(e, t) {
        var r = l.a(e.value.value, t),
          n = new i.a.MathNode("mstyle", r);
        return n.setAttribute("mathcolor", e.value.color), n;
      };
    Object(n.b)({
      type: "color",
      names: ["\\textcolor"],
      props: {
        numArgs: 2,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "original"]
      },
      handler: function handler(e, t) {
        var r = t[0],
          a = t[1];
        return {
          type: "color",
          color: r.value,
          value: Object(n.c)(a)
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "color",
      names: ["\\blue", "\\orange", "\\pink", "\\red", "\\green", "\\gray", "\\purple", "\\blueA", "\\blueB", "\\blueC", "\\blueD", "\\blueE", "\\tealA", "\\tealB", "\\tealC", "\\tealD", "\\tealE", "\\greenA", "\\greenB", "\\greenC", "\\greenD", "\\greenE", "\\goldA", "\\goldB", "\\goldC", "\\goldD", "\\goldE", "\\redA", "\\redB", "\\redC", "\\redD", "\\redE", "\\maroonA", "\\maroonB", "\\maroonC", "\\maroonD", "\\maroonE", "\\purpleA", "\\purpleB", "\\purpleC", "\\purpleD", "\\purpleE", "\\mintA", "\\mintB", "\\mintC", "\\grayA", "\\grayB", "\\grayC", "\\grayD", "\\grayE", "\\grayF", "\\grayG", "\\grayH", "\\grayI", "\\kaBlue", "\\kaGreen"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "color",
          color: "katex-" + e.funcName.slice(1),
          value: Object(n.c)(r)
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "color",
      names: ["\\color"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color"]
      },
      handler: function handler(e, t) {
        var r = e.parser,
          n = e.breakOnTokenText,
          a = t[0];
        if (!a) throw new o.a("\\color not followed by color");
        var i = r.parseExpression(!0, n);
        return {
          type: "color",
          color: a.value,
          value: i
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2),
      l = {
        "\\text": void 0,
        "\\textrm": "textrm",
        "\\textsf": "textsf",
        "\\texttt": "texttt",
        "\\textnormal": "textrm"
      },
      u = {
        "\\textbf": "textbf"
      },
      c = {
        "\\textit": "textit"
      };
    Object(n.b)({
      type: "text",
      names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textit"],
      props: {
        numArgs: 1,
        argTypes: ["text"],
        greediness: 2,
        allowedInText: !0
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "text",
          body: Object(n.c)(r),
          font: e.funcName
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = e.value.font,
          n = void 0;
        n = l[r] ? t.withFontFamily(l[r]) : u[r] ? t.withFontWeight(u[r]) : t.withFontShape(c[r]);
        var i = o.a(e.value.body, n, !0);
        return a.a.tryCombineChars(i), a.a.makeSpan(["mord", "text"], i, n);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        for (var r = e.value.body, n = [], a = null, o = 0; o < r.length; o++) {
          var l = s.b(r[o], t);
          "mtext" === l.type && null != a ? Array.prototype.push.apply(a.children, l.children) : (n.push(l), "mtext" === l.type && (a = l));
        }
        return 1 === n.length ? n[0] : new i.a.MathNode("mrow", n);
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(5),
      s = r(13),
      l = r(4),
      u = r(2),
      c = function c(e, t) {
        var r = l.b(e.value.body, t),
          n = e.value.label.substr(1),
          i = t.sizeMultiplier,
          u = void 0,
          c = 0,
          h = /color/.test(n);
        if ("sout" === n) (u = a.a.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / i, c = -.5 * t.fontMetrics().xHeight;else {
          r.classes.push(/cancel/.test(n) ? "cancel-pad" : "boxpad");
          var p = 0;
          p = /box/.test(n) ? "colorbox" === n ? .3 : .34 : o.a.isCharacterBox(e.value.body) ? .2 : 0, u = s.a.encloseSpan(r, n, p, t), c = r.depth + p, h && (u.style.backgroundColor = e.value.backgroundColor.value, "fcolorbox" === n && (u.style.borderColor = e.value.borderColor.value));
        }
        var m = void 0;
        return m = h ? a.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: u,
            shift: c
          }, {
            type: "elem",
            elem: r,
            shift: 0
          }]
        }, t) : a.a.makeVList({
          positionType: "individualShift",
          children: [{
            type: "elem",
            elem: r,
            shift: 0
          }, {
            type: "elem",
            elem: u,
            shift: c,
            wrapperClasses: /cancel/.test(n) ? ["svg-align"] : []
          }]
        }, t), /cancel/.test(n) ? a.a.makeSpan(["mord", "cancel-lap"], [m], t) : a.a.makeSpan(["mord"], [m], t);
      },
      h = function h(e, t) {
        var r = new i.a.MathNode("menclose", [u.b(e.value.body, t)]);
        switch (e.value.label) {
          case "\\cancel":
            r.setAttribute("notation", "updiagonalstrike");
            break;
          case "\\bcancel":
            r.setAttribute("notation", "downdiagonalstrike");
            break;
          case "\\sout":
            r.setAttribute("notation", "horizontalstrike");
            break;
          case "\\fbox":
            r.setAttribute("notation", "box");
            break;
          case "\\colorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value);
            break;
          case "\\fcolorbox":
            r.setAttribute("mathbackground", e.value.backgroundColor.value), r.setAttribute("notation", "box");
            break;
          default:
            r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
        }
        return r;
      };
    Object(n.b)({
      type: "enclose",
      names: ["\\colorbox"],
      props: {
        numArgs: 2,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "text"]
      },
      handler: function handler(e, t, r) {
        var n = t[0],
          a = t[1];
        return {
          type: "enclose",
          label: e.funcName,
          backgroundColor: n,
          body: a
        };
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "enclose",
      names: ["\\fcolorbox"],
      props: {
        numArgs: 3,
        allowedInText: !0,
        greediness: 3,
        argTypes: ["color", "color", "text"]
      },
      handler: function handler(e, t, r) {
        var n = t[0],
          a = t[1],
          i = t[2];
        return {
          type: "enclose",
          label: e.funcName,
          backgroundColor: a,
          borderColor: n,
          body: i
        };
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "enclose",
      names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout", "\\fbox"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t, r) {
        var n = t[0];
        return {
          type: "enclose",
          label: e.funcName,
          body: n
        };
      },
      htmlBuilder: c,
      mathmlBuilder: h
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "overline",
      names: ["\\overline"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        return {
          type: "overline",
          body: t[0]
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = o.b(e.value.body, t.havingCrampedStyle()),
          n = a.a.makeLineSpan("overline-line", t),
          i = a.a.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: r
            }, {
              type: "kern",
              size: n.height
            }, {
              type: "elem",
              elem: n
            }]
          }, t);
        return a.a.makeSpan(["mord", "overline"], [i], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new i.a.MathNode("mo", [new i.a.TextNode("\u203E")]);
        r.setAttribute("stretchy", "true");
        var n = new i.a.MathNode("mover", [s.b(e.value.body, t), r]);
        return n.setAttribute("accent", "true"), n;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "underline",
      names: ["\\underline"],
      props: {
        numArgs: 1,
        allowedInText: !0
      },
      handler: function handler(e, t) {
        return {
          type: "underline",
          body: t[0]
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = o.b(e.value.body, t),
          n = a.a.makeLineSpan("underline-line", t),
          i = a.a.makeVList({
            positionType: "top",
            positionData: r.height,
            children: [{
              type: "elem",
              elem: n
            }, {
              type: "kern",
              size: 5 * n.height
            }, {
              type: "elem",
              elem: r
            }]
          }, t);
        return a.a.makeSpan(["mord", "underline"], [i], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new i.a.MathNode("mo", [new i.a.TextNode("\u203E")]);
        r.setAttribute("stretchy", "true");
        var n = new i.a.MathNode("munder", [s.b(e.value.body, t), r]);
        return n.setAttribute("accentunder", "true"), n;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
      a = r(3),
      i = r(1),
      o = r(19);
    Object(a.b)({
      type: "rule",
      names: ["\\rule"],
      props: {
        numArgs: 2,
        numOptionalArgs: 1,
        argTypes: ["size", "size", "size"]
      },
      handler: function handler(e, t, r) {
        var n = r[0],
          a = t[0],
          i = t[1];
        return {
          type: "rule",
          shift: n && n.value,
          width: a.value,
          height: i.value
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = n.a.makeSpan(["mord", "rule"], [], t),
          a = 0;
        e.value.shift && (a = Object(o.a)(e.value.shift, t));
        var i = Object(o.a)(e.value.width, t),
          s = Object(o.a)(e.value.height, t);
        return r.style.borderRightWidth = i + "em", r.style.borderTopWidth = s + "em", r.style.bottom = a + "em", r.width = i, r.height = s + a, r.depth = -a, r.maxFontSize = 1.125 * s * t.sizeMultiplier, r;
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        return new i.a.MathNode("mrow");
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(19),
      s = r(6);
    Object(n.b)({
      type: "kern",
      names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
      props: {
        numArgs: 1,
        argTypes: ["size"],
        allowedInText: !0
      },
      handler: function handler(e, t) {
        var r = "m" === e.funcName[1],
          n = "mu" === t[0].value.unit;
        if (r) {
          if (n || "undefined" != typeof console && console.warn("In LaTeX, " + e.funcName + " supports only mu units, not " + t[0].value.unit + " units"), "math" !== e.parser.mode) throw new s.a("Can't use function '" + e.funcName + "' in text mode");
        } else n && "undefined" != typeof console && console.warn("In LaTeX, " + e.funcName + " does not support mu units");
        return {
          type: "kern",
          dimension: t[0].value
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        return a.a.makeGlue(e.value.dimension, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new i.a.MathNode("mspace"),
          n = Object(o.a)(e.value.dimension, t);
        return r.setAttribute("width", n + "em"), r;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "phantom",
      names: ["\\phantom"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "phantom",
          value: Object(n.c)(r)
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = o.a(e.value.value, t.withPhantom(), !1);
        return new a.a.makeFragment(r);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = s.a(e.value.value, t);
        return new i.a.MathNode("mphantom", r);
      }
    }), Object(n.b)({
      type: "hphantom",
      names: ["\\hphantom"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "hphantom",
          value: Object(n.c)(r),
          body: r
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = a.a.makeSpan([], [o.b(e.value.body, t.withPhantom())]);
        if (r.height = 0, r.depth = 0, r.children) for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
        return r = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r
          }]
        }, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = s.a(e.value.value, t),
          n = new i.a.MathNode("mphantom", r);
        return n.setAttribute("height", "0px"), n;
      }
    }), Object(n.b)({
      type: "vphantom",
      names: ["\\vphantom"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "vphantom",
          value: Object(n.c)(r),
          body: r
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = a.a.makeSpan(["inner"], [o.b(e.value.body, t.withPhantom())]),
          n = a.a.makeSpan(["fix"], []);
        return a.a.makeSpan(["mord", "rlap"], [r, n], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = s.a(e.value.value, t),
          n = new i.a.MathNode("mphantom", r);
        return n.setAttribute("width", "0px"), n;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(9),
      s = r(4),
      l = r(2),
      u = function u(e, t) {
        var r = [];
        if ("bmod" === e.value.modType ? t.style.isTight() ? r.push(a.a.makeSpan(["mspace", "thickspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "muspace"], [], t)) : t.style.size === o.a.DISPLAY.size ? r.push(a.a.makeSpan(["mspace", "quad"], [], t)) : "mod" === e.value.modType ? r.push(a.a.makeSpan(["mspace", "twelvemuspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "eightmuspace"], [], t)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(a.a.mathsym("(", e.mode)), "pod" !== e.value.modType) {
          var n = [a.a.mathsym("m", e.mode), a.a.mathsym("o", e.mode), a.a.mathsym("d", e.mode)];
          "bmod" === e.value.modType ? (r.push(a.a.makeSpan(["mbin"], n, t)), t.style.isTight() ? r.push(a.a.makeSpan(["mspace", "thickspace"], [], t)) : r.push(a.a.makeSpan(["mspace", "muspace"], [], t))) : (Array.prototype.push.apply(r, n), r.push(a.a.makeSpan(["mspace", "sixmuspace"], [], t)));
        }
        return e.value.value && Array.prototype.push.apply(r, s.a(e.value.value, t, !1)), "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(a.a.mathsym(")", e.mode)), a.a.makeFragment(r);
      },
      c = function c(e, t) {
        var r = [];
        if ("pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new i.a.MathNode("mo", [l.e("(", e.mode)])), "pod" !== e.value.modType && r.push(new i.a.MathNode("mo", [l.e("mod", e.mode)])), e.value.value) {
          var n = new i.a.MathNode("mspace");
          n.setAttribute("width", "0.333333em"), r.push(n), r = r.concat(l.a(e.value.value, t));
        }
        return "pod" !== e.value.modType && "pmod" !== e.value.modType || r.push(new i.a.MathNode("mo", [l.e(")", e.mode)])), new i.a.MathNode("mo", r);
      };
    Object(n.b)({
      type: "mod",
      names: ["\\bmod"],
      props: {
        numArgs: 0
      },
      handler: function handler(e, t) {
        return {
          type: "mod",
          modType: "bmod",
          value: null
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    }), Object(n.b)({
      type: "mod",
      names: ["\\pod", "\\pmod", "\\mod"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "mod",
          modType: e.funcName.substr(1),
          value: Object(n.c)(r)
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(12),
      o = r(1),
      s = r(5),
      l = r(9),
      u = r(4),
      c = r(2),
      h = function h(e, t) {
        var r = void 0,
          n = void 0,
          o = !1;
        "supsub" === e.type && (r = e.value.sup, n = e.value.sub, e = e.value.base, o = !0);
        var c = t.style,
          h = !1;
        c.size === l.a.DISPLAY.size && e.value.symbol && !s.a.contains(["\\smallint"], e.value.body) && (h = !0);
        var p = void 0;
        if (e.value.symbol) {
          var m = h ? "Size2-Regular" : "Size1-Regular";
          p = a.a.makeSymbol(e.value.body, m, "math", t, ["mop", "op-symbol", h ? "large-op" : "small-op"]);
        } else if (e.value.value) {
          var d = u.a(e.value.value, t, !0);
          1 === d.length && d[0] instanceof i.a.symbolNode ? (p = d[0]).classes[0] = "mop" : p = a.a.makeSpan(["mop"], d, t);
        } else {
          for (var f = [], v = 1; v < e.value.body.length; v++) f.push(a.a.mathsym(e.value.body[v], e.mode));
          p = a.a.makeSpan(["mop"], f, t);
        }
        var g = 0,
          y = 0;
        if (p instanceof i.a.symbolNode && (g = (p.height - p.depth) / 2 - t.fontMetrics().axisHeight, y = p.italic), o) {
          p = a.a.makeSpan([], [p]);
          var b = void 0,
            x = void 0;
          if (r) {
            var w = u.b(r, t.havingStyle(c.sup()), t);
            x = {
              elem: w,
              kern: Math.max(t.fontMetrics().bigOpSpacing1, t.fontMetrics().bigOpSpacing3 - w.depth)
            };
          }
          if (n) {
            var k = u.b(n, t.havingStyle(c.sub()), t);
            b = {
              elem: k,
              kern: Math.max(t.fontMetrics().bigOpSpacing2, t.fontMetrics().bigOpSpacing4 - k.height)
            };
          }
          var M = void 0;
          if (x && b) {
            var S = t.fontMetrics().bigOpSpacing5 + b.elem.height + b.elem.depth + b.kern + p.depth + g;
            M = a.a.makeVList({
              positionType: "bottom",
              positionData: S,
              children: [{
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: b.elem,
                marginLeft: -y + "em"
              }, {
                type: "kern",
                size: b.kern
              }, {
                type: "elem",
                elem: p
              }, {
                type: "kern",
                size: x.kern
              }, {
                type: "elem",
                elem: x.elem,
                marginLeft: y + "em"
              }, {
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }]
            }, t);
          } else if (b) {
            var z = p.height - g;
            M = a.a.makeVList({
              positionType: "top",
              positionData: z,
              children: [{
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }, {
                type: "elem",
                elem: b.elem,
                marginLeft: -y + "em"
              }, {
                type: "kern",
                size: b.kern
              }, {
                type: "elem",
                elem: p
              }]
            }, t);
          } else {
            if (!x) return p;
            var O = p.depth + g;
            M = a.a.makeVList({
              positionType: "bottom",
              positionData: O,
              children: [{
                type: "elem",
                elem: p
              }, {
                type: "kern",
                size: x.kern
              }, {
                type: "elem",
                elem: x.elem,
                marginLeft: y + "em"
              }, {
                type: "kern",
                size: t.fontMetrics().bigOpSpacing5
              }]
            }, t);
          }
          return a.a.makeSpan(["mop", "op-limits"], [M], t);
        }
        return g && (p.style.position = "relative", p.style.top = g + "em"), p;
      },
      p = function p(e, t) {
        var r = void 0;
        if (e.value.symbol) r = new o.a.MathNode("mo", [c.e(e.value.body, e.mode)]);else {
          if (!e.value.value) {
            r = new o.a.MathNode("mi", [new o.a.TextNode(e.value.body.slice(1))]);
            var n = new o.a.MathNode("mo", [c.e("\u2061", "text")]);
            return new i.a.documentFragment([r, n]);
          }
          r = new o.a.MathNode("mo", c.a(e.value.value, t));
        }
        return r;
      },
      m = {
        "\u220F": "\\prod",
        "\u2210": "\\coprod",
        "\u2211": "\\sum",
        "\u22C0": "\\bigwedge",
        "\u22C1": "\\bigvee",
        "\u22C2": "\\bigcap",
        "\u22C3": "\\bigcap",
        "\u2A00": "\\bigodot",
        "\u2A01": "\\bigoplus",
        "\u2A02": "\\bigotimes",
        "\u2A04": "\\biguplus",
        "\u2A06": "\\bigsqcup"
      };
    Object(n.b)({
      type: "op",
      names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220F", "\u2210", "\u2211", "\u22C0", "\u22C1", "\u22C2", "\u22C3", "\u2A00", "\u2A01", "\u2A02", "\u2A04", "\u2A06"],
      props: {
        numArgs: 0
      },
      handler: function handler(e, t) {
        var r = e.funcName;
        return 1 === r.length && (r = m[r]), {
          type: "op",
          limits: !0,
          symbol: !0,
          body: r
        };
      },
      htmlBuilder: h,
      mathmlBuilder: p
    }), Object(n.b)({
      type: "op",
      names: ["\\mathop"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "op",
          limits: !1,
          symbol: !1,
          value: Object(n.c)(r)
        };
      },
      htmlBuilder: h,
      mathmlBuilder: p
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(18),
      a = r.n(n),
      i = r(3),
      o = r(0),
      s = r(1),
      l = r(12),
      u = r(4),
      c = r(2);
    Object(i.b)({
      type: "operatorname",
      names: ["\\operatorname"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "operatorname",
          value: Object(i.c)(r)
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = [];
        if (e.value.value.length > 0) {
          var n = "",
            i = "",
            s = !0,
            c = !1,
            h = void 0;
          try {
            for (var p, m = a()(e.value.value); !(s = (p = m.next()).done); s = !0) {
              var d = p.value;
              -1 !== "*-/:".indexOf(d.value) && (d.type = "textord");
            }
          } catch (e) {
            c = !0, h = e;
          } finally {
            try {
              !s && m["return"] && m["return"]();
            } finally {
              if (c) throw h;
            }
          }
          var f = u.a(e.value.value, t.withFontFamily("mathrm"), !0),
            v = !0,
            g = !1,
            y = void 0;
          try {
            for (var b, x = a()(f); !(v = (b = x.next()).done); v = !0) {
              var w = b.value;
              w instanceof l.a.symbolNode ? (n = (n = (n = w.value).replace(/\u2212/, "-")).replace(/\u2217/, "*"), i = /[\u0391-\u03D7]/.test(n) ? "math" : "text", r.push(o.a.mathsym(n, i))) : r.push(w);
            }
          } catch (e) {
            g = !0, y = e;
          } finally {
            try {
              !v && x["return"] && x["return"]();
            } finally {
              if (g) throw y;
            }
          }
        }
        return o.a.makeSpan(["mop"], r, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = [];
        if (e.value.value.length > 0) {
          var n = c.a(e.value.value, t.withFontFamily("mathrm")).map(function (e) {
            return e.toText();
          }).join("");
          n = (n = n.replace(/\u2212/g, "-")).replace(/\u2217/g, "*"), r = [new s.a.TextNode(n)];
        }
        var a = new s.a.MathNode("mi", r);
        a.setAttribute("mathvariant", "normal");
        var i = new s.a.MathNode("mo", [c.e("\u2061", "text")]);
        return new l.a.documentFragment([a, i]);
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(44),
      o = r(1),
      s = r(9),
      l = r(4),
      u = r(2);
    Object(n.b)({
      type: "genfrac",
      names: ["\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac"],
      props: {
        numArgs: 2,
        greediness: 2
      },
      handler: function handler(e, t) {
        var r = t[0],
          n = t[1],
          a = void 0,
          i = null,
          o = null,
          s = "auto";
        switch (e.funcName) {
          case "\\dfrac":
          case "\\frac":
          case "\\tfrac":
            a = !0;
            break;
          case "\\\\atopfrac":
            a = !1;
            break;
          case "\\dbinom":
          case "\\binom":
          case "\\tbinom":
            a = !1, i = "(", o = ")";
            break;
          default:
            throw new Error("Unrecognized genfrac command");
        }
        switch (e.funcName) {
          case "\\dfrac":
          case "\\dbinom":
            s = "display";
            break;
          case "\\tfrac":
          case "\\tbinom":
            s = "text";
        }
        return {
          type: "genfrac",
          numer: r,
          denom: n,
          hasBarLine: a,
          leftDelim: i,
          rightDelim: o,
          size: s
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = t.style;
        "display" === e.value.size ? r = s.a.DISPLAY : "text" === e.value.size && (r = s.a.TEXT);
        var n = r.fracNum(),
          o = r.fracDen(),
          u = void 0;
        u = t.havingStyle(n);
        var c = l.b(e.value.numer, u, t);
        u = t.havingStyle(o);
        var h = l.b(e.value.denom, u, t),
          p = void 0,
          m = void 0,
          d = void 0;
        e.value.hasBarLine ? (m = (p = a.a.makeLineSpan("frac-line", t)).height, d = p.height) : (p = null, m = 0, d = t.fontMetrics().defaultRuleThickness);
        var f = void 0,
          v = void 0,
          g = void 0;
        r.size === s.a.DISPLAY.size ? (f = t.fontMetrics().num1, v = m > 0 ? 3 * d : 7 * d, g = t.fontMetrics().denom1) : (m > 0 ? (f = t.fontMetrics().num2, v = d) : (f = t.fontMetrics().num3, v = 3 * d), g = t.fontMetrics().denom2);
        var y = void 0;
        if (p) {
          var b = t.fontMetrics().axisHeight;
          f - c.depth - (b + .5 * m) < v && (f += v - (f - c.depth - (b + .5 * m))), b - .5 * m - (h.height - g) < v && (g += v - (b - .5 * m - (h.height - g)));
          var x = -(b - .5 * m);
          y = a.a.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: h,
              shift: g
            }, {
              type: "elem",
              elem: p,
              shift: x + 2 * m
            }, {
              type: "elem",
              elem: c,
              shift: -f
            }]
          }, t);
        } else {
          var w = f - c.depth - (h.height - g);
          w < v && (f += .5 * (v - w), g += .5 * (v - w)), y = a.a.makeVList({
            positionType: "individualShift",
            children: [{
              type: "elem",
              elem: h,
              shift: g
            }, {
              type: "elem",
              elem: c,
              shift: -f
            }]
          }, t);
        }
        u = t.havingStyle(r), y.height *= u.sizeMultiplier / t.sizeMultiplier, y.depth *= u.sizeMultiplier / t.sizeMultiplier;
        var k = void 0;
        k = r.size === s.a.DISPLAY.size ? t.fontMetrics().delim1 : t.fontMetrics().delim2;
        var M = void 0,
          S = void 0;
        return M = null == e.value.leftDelim ? l.e(t, ["mopen"]) : i.a.customSizedDelim(e.value.leftDelim, k, !0, t.havingStyle(r), e.mode, ["mopen"]), S = null == e.value.rightDelim ? l.e(t, ["mclose"]) : i.a.customSizedDelim(e.value.rightDelim, k, !0, t.havingStyle(r), e.mode, ["mclose"]), a.a.makeSpan(["mord"].concat(u.sizingClasses(t)), [M, a.a.makeSpan(["mfrac"], [y]), S], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new o.a.MathNode("mfrac", [u.b(e.value.numer, t), u.b(e.value.denom, t)]);
        if (e.value.hasBarLine || r.setAttribute("linethickness", "0px"), null != e.value.leftDelim || null != e.value.rightDelim) {
          var n = [];
          if (null != e.value.leftDelim) {
            var a = new o.a.MathNode("mo", [new o.a.TextNode(e.value.leftDelim)]);
            a.setAttribute("fence", "true"), n.push(a);
          }
          if (n.push(r), null != e.value.rightDelim) {
            var i = new o.a.MathNode("mo", [new o.a.TextNode(e.value.rightDelim)]);
            i.setAttribute("fence", "true"), n.push(i);
          }
          return new o.a.MathNode("mrow", n);
        }
        return r;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "lap",
      names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
      props: {
        numArgs: 1,
        allowedInText: !0
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "lap",
          alignment: e.funcName.slice(5),
          body: r
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = void 0;
        "clap" === e.value.alignment ? (r = a.a.makeSpan([], [o.b(e.value.body, t)]), r = a.a.makeSpan(["inner"], [r], t)) : r = a.a.makeSpan(["inner"], [o.b(e.value.body, t)]);
        var n = a.a.makeSpan(["fix"], []);
        return a.a.makeSpan(["mord", e.value.alignment], [r, n], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new i.a.MathNode("mpadded", [s.b(e.value.body, t)]);
        if ("rlap" !== e.value.alignment) {
          var n = "llap" === e.value.alignment ? "-1" : "-0.5";
          r.setAttribute("lspace", n + "width");
        }
        return r.setAttribute("width", "0px"), r;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "smash",
      names: ["\\smash"],
      props: {
        numArgs: 1,
        numOptionalArgs: 1,
        allowedInText: !0
      },
      handler: function handler(e, t, r) {
        var n = !1,
          a = !1,
          i = r[0];
        if (i) {
          for (var o = "", s = 0; s < i.value.length; ++s) if ("t" === (o = i.value[s].value)) n = !0;else {
            if ("b" !== o) {
              n = !1, a = !1;
              break;
            }
            a = !0;
          }
        } else n = !0, a = !0;
        return {
          type: "smash",
          body: t[0],
          smashHeight: n,
          smashDepth: a
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = a.a.makeSpan(["mord"], [o.b(e.value.body, t)]);
        if (!e.value.smashHeight && !e.value.smashDepth) return r;
        if (e.value.smashHeight && (r.height = 0, r.children)) for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
        if (e.value.smashDepth && (r.depth = 0, r.children)) for (var i = 0; i < r.children.length; i++) r.children[i].depth = 0;
        return a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: r
          }]
        }, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new i.a.MathNode("mpadded", [s.b(e.value.body, t)]);
        return e.value.smashHeight && r.setAttribute("height", "0px"), e.value.smashDepth && r.setAttribute("depth", "0px"), r;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
      a = r(3),
      i = r(44),
      o = r(1),
      s = r(6),
      l = r(5),
      u = r(4),
      c = r(2),
      h = {
        "\\bigl": {
          mclass: "mopen",
          size: 1
        },
        "\\Bigl": {
          mclass: "mopen",
          size: 2
        },
        "\\biggl": {
          mclass: "mopen",
          size: 3
        },
        "\\Biggl": {
          mclass: "mopen",
          size: 4
        },
        "\\bigr": {
          mclass: "mclose",
          size: 1
        },
        "\\Bigr": {
          mclass: "mclose",
          size: 2
        },
        "\\biggr": {
          mclass: "mclose",
          size: 3
        },
        "\\Biggr": {
          mclass: "mclose",
          size: 4
        },
        "\\bigm": {
          mclass: "mrel",
          size: 1
        },
        "\\Bigm": {
          mclass: "mrel",
          size: 2
        },
        "\\biggm": {
          mclass: "mrel",
          size: 3
        },
        "\\Biggm": {
          mclass: "mrel",
          size: 4
        },
        "\\big": {
          mclass: "mord",
          size: 1
        },
        "\\Big": {
          mclass: "mord",
          size: 2
        },
        "\\bigg": {
          mclass: "mord",
          size: 3
        },
        "\\Bigg": {
          mclass: "mord",
          size: 4
        }
      },
      p = ["(", ")", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\\lceil", "\\rceil", "<", ">", "\\langle", "\u27E8", "\\rangle", "\u27E9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\\lmoustache", "\\rmoustache", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];
    function m(e, t) {
      if (l.a.contains(p, e.value)) return e;
      throw new s.a("Invalid delimiter: '" + e.value + "' after '" + t.funcName + "'", e);
    }
    Object(a.b)({
      type: "delimsizing",
      names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = m(t[0], e);
        return {
          type: "delimsizing",
          size: h[e.funcName].size,
          mclass: h[e.funcName].mclass,
          value: r.value
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = e.value.value;
        return "." === r ? n.a.makeSpan([e.value.mclass]) : i.a.sizedDelim(r, e.value.size, t, e.mode, [e.value.mclass]);
      },
      mathmlBuilder: function mathmlBuilder(e) {
        var t = [];
        "." !== e.value.value && t.push(c.e(e.value.value, e.mode));
        var r = new o.a.MathNode("mo", t);
        return "mopen" === e.value.mclass || "mclose" === e.value.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r;
      }
    }), Object(a.b)({
      type: "leftright",
      names: ["\\left", "\\right"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = m(t[0], e);
        if ("\\left" === e.funcName) {
          var n = e.parser;
          ++n.leftrightDepth;
          var a = n.parseExpression(!1);
          --n.leftrightDepth, n.expect("\\right", !1);
          var i = n.parseFunction();
          if (!i) throw new s.a("failed to parse function after \\right");
          return {
            type: "leftright",
            body: a,
            left: r.value,
            right: i.value.value
          };
        }
        return {
          type: "leftright",
          value: r.value
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        for (var r = u.a(e.value.body, t, !0, [null, "mclose"]), a = 0, o = 0, s = !1, l = 0; l < r.length; l++) r[l].isMiddle ? s = !0 : (a = Math.max(r[l].height, a), o = Math.max(r[l].depth, o));
        a *= t.sizeMultiplier, o *= t.sizeMultiplier;
        var c = void 0;
        if (c = "." === e.value.left ? u.e(t, ["mopen"]) : i.a.leftRightDelim(e.value.left, a, o, t, e.mode, ["mopen"]), r.unshift(c), s) for (var h = 1; h < r.length; h++) {
          var p = r[h];
          p.isMiddle && (r[h] = i.a.leftRightDelim(p.isMiddle.value, a, o, p.isMiddle.options, e.mode, []));
        }
        var m = void 0;
        return m = "." === e.value.right ? u.e(t, ["mclose"]) : i.a.leftRightDelim(e.value.right, a, o, t, e.mode, ["mclose"]), r.push(m), n.a.makeSpan(["minner"], r, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = c.a(e.value.body, t);
        if ("." !== e.value.left) {
          var n = new o.a.MathNode("mo", [c.e(e.value.left, e.mode)]);
          n.setAttribute("fence", "true"), r.unshift(n);
        }
        if ("." !== e.value.right) {
          var a = new o.a.MathNode("mo", [c.e(e.value.right, e.mode)]);
          a.setAttribute("fence", "true"), r.push(a);
        }
        return new o.a.MathNode("mrow", r);
      }
    }), Object(a.b)({
      type: "middle",
      names: ["\\middle"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = m(t[0], e);
        if (!e.parser.leftrightDepth) throw new s.a("\\middle without preceding \\left", r);
        return {
          type: "middle",
          value: r.value
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = void 0;
        return "." === e.value.value ? r = u.e(t, []) : (r = i.a.sizedDelim(e.value.value, 1, t, e.mode, [])).isMiddle = {
          value: e.value.value,
          options: t
        }, r;
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new o.a.MathNode("mo", [c.e(e.value.middle, e.mode)]);
        return r.setAttribute("fence", "true"), r;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(1),
      i = r(9),
      o = r(60),
      s = r(2),
      l = {
        display: i.a.DISPLAY,
        text: i.a.TEXT,
        script: i.a.SCRIPT,
        scriptscript: i.a.SCRIPTSCRIPT
      };
    Object(n.b)({
      type: "styling",
      names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function handler(e, t) {
        var r = e.breakOnTokenText,
          n = e.funcName,
          a = e.parser;
        a.consumeSpaces();
        var i = a.parseExpression(!0, r);
        return {
          type: "styling",
          style: n.slice(1, n.length - 5),
          value: i
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = l[e.value.style],
          n = t.havingStyle(r);
        return Object(o.a)(e.value.value, n, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = {
            display: i.a.DISPLAY,
            text: i.a.TEXT,
            script: i.a.SCRIPT,
            scriptscript: i.a.SCRIPTSCRIPT
          }[e.value.style],
          n = t.havingStyle(r),
          o = s.a(e.value.value, n),
          l = new a.a.MathNode("mstyle", o),
          u = {
            display: ["0", "true"],
            text: ["0", "false"],
            script: ["1", "false"],
            scriptscript: ["2", "false"]
          }[e.value.style];
        return l.setAttribute("scriptlevel", u[0]), l.setAttribute("displaystyle", u[1]), l;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(134),
      a = r.n(n),
      i = r(3),
      o = r(14),
      s = r(4),
      l = r(2),
      u = function u(e, t) {
        var r = e.value.font;
        return s.b(e.value.body, t.withFontFamily(r));
      },
      c = function c(e, t) {
        var r = e.value.font;
        return l.b(e.value.body, t.withFontFamily(r));
      },
      h = {
        "\\Bbb": "\\mathbb",
        "\\bold": "\\mathbf",
        "\\frak": "\\mathfrak",
        "\\bm": "\\boldsymbol"
      };
    Object(i.b)({
      type: "font",
      names: ["\\mathrm", "\\mathit", "\\mathbf", "\\boldsymbol", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak", "\\bm"],
      props: {
        numArgs: 1,
        greediness: 2
      },
      handler: function handler(e, t) {
        var r = t[0],
          n = e.funcName;
        return n in h && (n = h[n]), {
          type: "font",
          font: n.slice(1),
          body: r
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    });
    var p = {
      "\\rm": "mathrm",
      "\\sf": "mathsf",
      "\\tt": "mathtt",
      "\\bf": "mathbf",
      "\\it": "mathit"
    };
    Object(i.b)({
      type: "font",
      names: a()(p),
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function handler(e, t) {
        var r = e.parser,
          n = e.funcName,
          a = e.breakOnTokenText;
        r.consumeSpaces();
        var i = r.parseExpression(!0, a);
        return {
          type: "font",
          font: p[n],
          body: new o.a("ordgroup", i, r.mode)
        };
      },
      htmlBuilder: u,
      mathmlBuilder: c
    });
  }, function (e, t, r) {
    e.exports = {
      "default": r(135),
      __esModule: !0
    };
  }, function (e, t, r) {
    r(136), e.exports = r(8).Object.keys;
  }, function (e, t, r) {
    var n = r(29),
      a = r(39);
    r(46)("keys", function () {
      return function (e) {
        return a(n(e));
      };
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(5),
      s = r(13),
      l = r(4),
      u = r(2),
      c = function c(e, t) {
        var r = e.value.base,
          n = void 0;
        if ("supsub" === e.type) {
          var i = e;
          r = (e = i.value.base).value.base, i.value.base = r, n = l.b(i, t);
        }
        var u = l.b(r, t.havingCrampedStyle()),
          c = 0;
        if (e.value.isShifty && o.a.isCharacterBox(r)) {
          var h = o.a.getBaseElem(r);
          c = l.b(h, t.havingCrampedStyle()).skew;
        }
        var p = Math.min(u.height, t.fontMetrics().xHeight),
          m = void 0;
        if (e.value.isStretchy) m = s.a.svgSpan(e, t), m = a.a.makeVList({
          positionType: "firstBaseline",
          children: [{
            type: "elem",
            elem: u
          }, {
            type: "elem",
            elem: m,
            wrapperClasses: ["svg-align"],
            wrapperStyle: c > 0 ? {
              width: "calc(100% - " + 2 * c + "em)",
              marginLeft: 2 * c + "em"
            } : void 0
          }]
        }, t);else {
          var d = void 0,
            f = void 0;
          "\\vec" === e.value.label ? (d = a.a.staticSvg("vec", t), f = a.a.svgData.vec[1]) : ((d = a.a.makeSymbol(e.value.label, "Main-Regular", e.mode, t)).italic = 0, f = d.width);
          var v = -f / 2;
          v += c, (m = a.a.makeSpan(["accent-body"], [d])).style.left = v + "em", m = a.a.makeVList({
            positionType: "firstBaseline",
            children: [{
              type: "elem",
              elem: u
            }, {
              type: "kern",
              size: -p
            }, {
              type: "elem",
              elem: m
            }]
          }, t);
        }
        var g = a.a.makeSpan(["mord", "accent"], [m], t);
        return n ? (n.children[0] = g, n.height = Math.max(g.height, n.height), n.classes[0] = "mord", n) : g;
      },
      h = function h(e, t) {
        var r = void 0;
        r = e.value.isStretchy ? s.a.mathMLnode(e.value.label) : new i.a.MathNode("mo", [u.e(e.value.label, e.mode)]);
        var n = new i.a.MathNode("mover", [u.b(e.value.base, t), r]);
        return n.setAttribute("accent", "true"), n;
      },
      p = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map(function (e) {
        return "\\" + e;
      }).join("|"));
    Object(n.b)({
      type: "accent",
      names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0],
          n = !p.test(e.funcName),
          a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName;
        return {
          type: "accent",
          label: e.funcName,
          isStretchy: n,
          isShifty: a,
          base: r
        };
      },
      htmlBuilder: c,
      mathmlBuilder: h
    }), Object(n.b)({
      type: "accent",
      names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v"],
      props: {
        numArgs: 1,
        allowedInText: !0,
        allowedInMath: !1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "accent",
          label: e.funcName,
          isStretchy: !1,
          isShifty: !0,
          base: r
        };
      },
      htmlBuilder: c,
      mathmlBuilder: h
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(13),
      s = r(4),
      l = r(2);
    Object(n.b)({
      type: "accentUnder",
      names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0];
        return {
          type: "accentUnder",
          label: e.funcName,
          base: r
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = s.b(e.value.base, t),
          n = o.a.svgSpan(e, t),
          i = "\\utilde" === e.value.label ? .12 : 0,
          l = a.a.makeVList({
            positionType: "bottom",
            positionData: n.height + i,
            children: [{
              type: "elem",
              elem: n,
              wrapperClasses: ["svg-align"]
            }, {
              type: "kern",
              size: i
            }, {
              type: "elem",
              elem: r
            }]
          }, t);
        return a.a.makeSpan(["mord", "accentunder"], [l], t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = o.a.mathMLnode(e.value.label),
          n = new i.a.MathNode("munder", [l.b(e.value.body, t), r]);
        return n.setAttribute("accentunder", "true"), n;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(6);
    Object(n.b)({
      type: "verb",
      names: ["\\verb"],
      props: {
        numArgs: 0,
        allowedInText: !0
      },
      handler: function handler(e, t, r) {
        throw new o.a("\\verb ended by end of line instead of matching delimiter");
      },
      htmlBuilder: function htmlBuilder(e, t) {
        for (var r = a.a.makeVerb(e, t), n = [], i = t.havingStyle(t.style.text()), o = 0; o < r.length; o++) if ("\xa0" === r[o]) {
          var s = a.a.makeSpan(["mord", "rule"], [], i);
          s.style.marginLeft = "0.525em", n.push(s);
        } else n.push(a.a.makeSymbol(r[o], "Typewriter-Regular", e.mode, i, ["mathtt"]));
        return a.a.tryCombineChars(n), a.a.makeSpan(["mord", "text"].concat(i.sizingClasses(t)), n, i);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = new i.a.TextNode(a.a.makeVerb(e, t)),
          n = new i.a.MathNode("mtext", [r]);
        return n.setAttribute("mathvariant", a.a.fontMap.mathtt.variant), n;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(4),
      s = r(2);
    Object(n.b)({
      type: "href",
      names: ["\\href"],
      props: {
        numArgs: 2,
        argTypes: ["url", "original"]
      },
      handler: function handler(e, t) {
        var r = t[1];
        return {
          type: "href",
          href: t[0].value,
          body: Object(n.c)(r)
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = o.a(e.value.body, t, !1),
          n = e.value.href;
        return new a.a.makeAnchor(n, [], r, t);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = s.a(e.value.body, t),
          n = new i.a.MathNode("mrow", r);
        return n.setAttribute("href", e.value.href), n;
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(3),
      a = r(0),
      i = r(1),
      o = r(9),
      s = r(4),
      l = r(2),
      u = function u(e, t) {
        var r = t.style;
        return r.size === o.a.DISPLAY.size ? e.value.display : r.size === o.a.TEXT.size ? e.value.text : r.size === o.a.SCRIPT.size ? e.value.script : r.size === o.a.SCRIPTSCRIPT.size ? e.value.scriptscript : e.value.text;
      };
    Object(n.b)({
      type: "mathchoice",
      names: ["\\mathchoice"],
      props: {
        numArgs: 4
      },
      handler: function handler(e, t) {
        return {
          type: "mathchoice",
          display: Object(n.c)(t[0]),
          text: Object(n.c)(t[1]),
          script: Object(n.c)(t[2]),
          scriptscript: Object(n.c)(t[3])
        };
      },
      htmlBuilder: function htmlBuilder(e, t) {
        var r = u(e, t),
          n = s.a(r, t, !1);
        return new a.a.makeFragment(n);
      },
      mathmlBuilder: function mathmlBuilder(e, t) {
        var r = u(e, t),
          n = l.a(r, t, !1);
        return new i.a.MathNode("mrow", n);
      }
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(61),
      a = (r(143), n.a);
    t.a = a;
  }, function (e, t, r) {
    "use strict";

    var n = r(0),
      a = r(61),
      i = r(1),
      o = r(6),
      s = r(14),
      l = r(19),
      u = r(5),
      c = r(13),
      h = r(4),
      p = r(2);
    function m(e, t, r) {
      for (var n = [], a = [n], i = [];;) {
        var l = e.parseExpression(!1, void 0);
        l = new s.a("ordgroup", l, e.mode), r && (l = new s.a("styling", {
          style: r,
          value: [l]
        }, e.mode)), n.push(l);
        var u = e.nextToken.text;
        if ("&" === u) e.consume();else {
          if ("\\end" === u) {
            var c = a[a.length - 1];
            a.length > 1 && 1 === c.length && 0 === c[0].value.value[0].value.length && a.pop();
            break;
          }
          if ("\\\\" !== u && "\\cr" !== u) throw new o.a("Expected & or \\\\ or \\end", e.nextToken);
          var h = e.parseFunction();
          if (!h) throw new o.a("Failed to parse function after " + u);
          i.push(h.value.size), n = [], a.push(n);
        }
      }
      return t.body = a, t.rowGaps = i, new s.a(t.type, t, e.mode);
    }
    function d(e) {
      return "d" === e.substr(0, 1) ? "display" : "text";
    }
    var f = function f(e, t) {
        var r = void 0,
          a = void 0,
          i = e.value.body.length,
          s = 0,
          p = new Array(i),
          m = 1 / t.fontMetrics().ptPerEm,
          d = 5 * m,
          f = 12 * m,
          v = 3 * m,
          g = u.a.deflt(e.value.arraystretch, 1) * f,
          y = .7 * g,
          b = .3 * g,
          x = 0;
        for (r = 0; r < e.value.body.length; ++r) {
          var w = e.value.body[r],
            k = y,
            M = b;
          s < w.length && (s = w.length);
          var S = new Array(w.length);
          for (a = 0; a < w.length; ++a) {
            var z = h.b(w[a], t);
            M < z.depth && (M = z.depth), k < z.height && (k = z.height), S[a] = z;
          }
          var O = 0;
          e.value.rowGaps[r] && (O = Object(l.a)(e.value.rowGaps[r].value, t)) > 0 && (M < (O += b) && (M = O), O = 0), e.value.addJot && (M += v), S.height = k, S.depth = M, x += k, S.pos = x, x += M + O, p[r] = S;
        }
        var T = x / 2 + t.fontMetrics().axisHeight,
          A = e.value.cols || [],
          N = [],
          B = void 0,
          q = void 0;
        for (a = 0, q = 0; a < s || q < A.length; ++a, ++q) {
          for (var C = A[q] || {}, E = !0; "separator" === C.type;) {
            if (E || ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = t.fontMetrics().doubleRuleSep + "em", N.push(B)), "|" !== C.separator) throw new o.a("Invalid separator type: " + C.separator);
            var j = c.a.ruleSpan("vertical-separator", .05, t);
            j.style.height = x + "em", j.style.verticalAlign = -(x - T) + "em", N.push(j), C = A[++q] || {}, E = !1;
          }
          if (!(a >= s)) {
            var R = void 0;
            (a > 0 || e.value.hskipBeforeAndAfter) && 0 !== (R = u.a.deflt(C.pregap, d)) && ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = R + "em", N.push(B));
            var H = [];
            for (r = 0; r < i; ++r) {
              var I = p[r],
                D = I[a];
              if (D) {
                var L = I.pos - T;
                D.depth = I.depth, D.height = I.height, H.push({
                  type: "elem",
                  elem: D,
                  shift: L
                });
              }
            }
            H = n.a.makeVList({
              positionType: "individualShift",
              children: H
            }, t), H = n.a.makeSpan(["col-align-" + (C.align || "c")], [H]), N.push(H), (a < s - 1 || e.value.hskipBeforeAndAfter) && 0 !== (R = u.a.deflt(C.postgap, d)) && ((B = n.a.makeSpan(["arraycolsep"], [])).style.width = R + "em", N.push(B));
          }
        }
        return p = n.a.makeSpan(["mtable"], N), n.a.makeSpan(["mord"], [p], t);
      },
      v = function v(e, t) {
        return new i.a.MathNode("mtable", e.value.body.map(function (e) {
          return new i.a.MathNode("mtr", e.map(function (e) {
            return new i.a.MathNode("mtd", [p.b(e, t)]);
          }));
        }));
      },
      g = function g(e, t) {
        var r = {
          type: "array",
          cols: [],
          addJot: !0
        };
        r = m(e.parser, r, "display");
        var n = void 0,
          a = 0,
          i = new s.a("ordgroup", [], e.mode);
        if (t[0] && t[0].value) {
          for (var l = "", u = 0; u < t[0].value.length; u++) l += t[0].value[u].value;
          n = Number(l), a = 2 * n;
        }
        var c = !a;
        r.value.body.forEach(function (e) {
          for (var t = 1; t < e.length; t += 2) {
            e[t].value.value[0].value.unshift(i);
          }
          if (c) a < e.length && (a = e.length);else {
            var r = e.length / 2;
            if (n < r) throw new o.a("Too many math in a row: expected " + n + ", but got " + r, e);
          }
        });
        for (var h = 0; h < a; ++h) {
          var p = "r",
            d = 0;
          h % 2 == 1 ? p = "l" : h > 0 && c && (d = 1), r.value.cols[h] = {
            type: "align",
            align: p,
            pregap: d,
            postgap: 0
          };
        }
        return r;
      };
    Object(a.b)({
      type: "array",
      names: ["array", "darray"],
      props: {
        numArgs: 1
      },
      handler: function handler(e, t) {
        var r = t[0],
          n = {
            type: "array",
            cols: (r = r.value.map ? r.value : [r]).map(function (e) {
              var t = e.value;
              if (-1 !== "lcr".indexOf(t)) return {
                type: "align",
                align: t
              };
              if ("|" === t) return {
                type: "separator",
                separator: "|"
              };
              throw new o.a("Unknown column alignment: " + e.value, e);
            }),
            hskipBeforeAndAfter: !0
          };
        return n = m(e.parser, n, d(e.envName));
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
      props: {
        numArgs: 0
      },
      handler: function handler(e) {
        var t = {
            matrix: null,
            pmatrix: ["(", ")"],
            bmatrix: ["[", "]"],
            Bmatrix: ["\\{", "\\}"],
            vmatrix: ["|", "|"],
            Vmatrix: ["\\Vert", "\\Vert"]
          }[e.envName],
          r = {
            type: "array",
            hskipBeforeAndAfter: !1
          };
        return r = m(e.parser, r, d(e.envName)), t && (r = new s.a("leftright", {
          body: [r],
          left: t[0],
          right: t[1]
        }, e.mode)), r;
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["cases", "dcases"],
      props: {
        numArgs: 0
      },
      handler: function handler(e) {
        var t = {
          type: "array",
          arraystretch: 1.2,
          cols: [{
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 1
          }, {
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 0
          }]
        };
        return t = m(e.parser, t, d(e.envName)), t = new s.a("leftright", {
          body: [t],
          left: "\\{",
          right: "."
        }, e.mode);
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["aligned"],
      props: {
        numArgs: 0
      },
      handler: g,
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["gathered"],
      props: {
        numArgs: 0
      },
      handler: function handler(e) {
        var t = {
          type: "array",
          cols: [{
            type: "align",
            align: "c"
          }],
          addJot: !0
        };
        return t = m(e.parser, t, "display");
      },
      htmlBuilder: f,
      mathmlBuilder: v
    }), Object(a.b)({
      type: "array",
      names: ["alignedat"],
      props: {
        numArgs: 1
      },
      handler: g,
      htmlBuilder: f,
      mathmlBuilder: v
    });
  }, function (e, t, r) {
    "use strict";

    var n = r(35),
      a = r.n(n),
      i = r(7),
      o = r.n(i),
      s = r(10),
      l = r.n(s),
      u = r(62),
      c = r(27),
      h = r(146),
      p = r(6),
      m = r(147),
      d = r.n(m),
      f = function () {
        function e(t, r, n) {
          o()(this, e), this.lexer = new u.c(t), this.macros = d()({}, h.a, r), this.mode = n, this.stack = [];
        }
        return l()(e, [{
          key: "switchMode",
          value: function value(e) {
            this.mode = e;
          }
        }, {
          key: "future",
          value: function value() {
            return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
          }
        }, {
          key: "popToken",
          value: function value() {
            return this.future(), this.stack.pop();
          }
        }, {
          key: "pushToken",
          value: function value(e) {
            this.stack.push(e);
          }
        }, {
          key: "pushTokens",
          value: function value(e) {
            var t;
            (t = this.stack).push.apply(t, a()(e));
          }
        }, {
          key: "consumeSpaces",
          value: function value() {
            for (;;) {
              if (" " !== this.future().text) break;
              this.stack.pop();
            }
          }
        }, {
          key: "consumeArgs",
          value: function value(e) {
            for (var t = [], r = 0; r < e; ++r) {
              this.consumeSpaces();
              var n = this.popToken();
              if ("{" === n.text) {
                for (var a = [], i = 1; 0 !== i;) {
                  var o = this.popToken();
                  if (a.push(o), "{" === o.text) ++i;else if ("}" === o.text) --i;else if ("EOF" === o.text) throw new p.a("End of input in macro argument", n);
                }
                a.pop(), a.reverse(), t[r] = a;
              } else {
                if ("EOF" === n.text) throw new p.a("End of input expecting macro argument");
                t[r] = [n];
              }
            }
            return t;
          }
        }, {
          key: "expandOnce",
          value: function value() {
            var e = this.popToken(),
              t = e.text;
            if ("\\" === t.charAt(0) && u.b.test(t) && this.consumeSpaces(), !this.macros.hasOwnProperty(t)) return this.pushToken(e), e;
            var r = this._getExpansion(t),
              n = r.tokens,
              i = r.numArgs,
              o = n;
            if (i) for (var s = this.consumeArgs(i), l = (o = o.slice()).length - 1; l >= 0; --l) {
              var c = o[l];
              if ("#" === c.text) {
                if (0 === l) throw new p.a("Incomplete placeholder at end of macro body", c);
                if ("#" === (c = o[--l]).text) o.splice(l + 1, 1);else {
                  if (!/^[1-9]$/.test(c.text)) throw new p.a("Not a valid argument number", c);
                  var h;
                  (h = o).splice.apply(h, [l, 2].concat(a()(s[+c.text - 1])));
                }
              }
            }
            return this.pushTokens(o), o;
          }
        }, {
          key: "expandAfterFuture",
          value: function value() {
            return this.expandOnce(), this.future();
          }
        }, {
          key: "expandNextToken",
          value: function value() {
            for (;;) {
              var e = this.expandOnce();
              if (e instanceof c.a) {
                if ("\\relax" !== e.text) return this.stack.pop();
                this.stack.pop();
              }
            }
            throw new Error();
          }
        }, {
          key: "_getExpansion",
          value: function value(e) {
            var t = this.macros[e],
              r = "function" == typeof t ? t(this) : t;
            if ("string" == typeof r) {
              var n = 0;
              if (-1 !== r.indexOf("#")) for (var a = r.replace(/##/g, ""); -1 !== a.indexOf("#" + (n + 1));) ++n;
              for (var i = new u.c(r), o = [], s = i.lex(); "EOF" !== s.text;) o.push(s), s = i.lex();
              o.reverse();
              var l = {
                tokens: o,
                numArgs: n
              };
              return "function" != typeof t && (this.macros[e] = l), l;
            }
            return r;
          }
        }]), e;
      }();
    t.a = f;
  }, function (e, t) {
    e.exports = function (e, t, r) {
      if (e.global || e.sticky) throw new Error("matchAt(...): Only non-global regexes are supported");
      var n = function (e) {
        if (!e.__matchAtRelocatable) {
          var t = e.source + "|()",
            r = "g" + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "");
          e.__matchAtRelocatable = new RegExp(t, r);
        }
        return e.__matchAtRelocatable;
      }(e);
      n.lastIndex = r;
      var a = n.exec(t);
      return null == a[a.length - 1] ? (a.length = a.length - 1, a) : null;
    };
  }, function (e, t, r) {
    "use strict";

    var n = r(59),
      a = r(28),
      i = r(5),
      o = (r(27), {});
    function s(e, t) {
      o[e] = t;
    }
    t.a = o, s("\\@firstoftwo", function (e) {
      return {
        tokens: e.consumeArgs(2)[0],
        numArgs: 0
      };
    }), s("\\@secondoftwo", function (e) {
      return {
        tokens: e.consumeArgs(2)[1],
        numArgs: 0
      };
    }), s("\\@ifnextchar", function (e) {
      var t = e.consumeArgs(3),
        r = e.future();
      return 1 === t[0].length && t[0][0].text === r.text ? {
        tokens: t[1],
        numArgs: 0
      } : {
        tokens: t[2],
        numArgs: 0
      };
    }), s("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), s("\\TextOrMath", function (e) {
      var t = e.consumeArgs(2);
      return "text" === e.mode ? {
        tokens: t[0],
        numArgs: 0
      } : {
        tokens: t[1],
        numArgs: 0
      };
    }), s("\\bgroup", "{"), s("\\egroup", "}"), s("\\begingroup", "{"), s("\\endgroup", "}"), s("\\lq", "`"), s("\\rq", "'"), s("\\lbrack", "["), s("\\rbrack", "]"), s("\\aa", "\\r a"), s("\\AA", "\\r A"), s("\u2102", "\\mathbb{C}"), s("\u210D", "\\mathbb{H}"), s("\u2115", "\\mathbb{N}"), s("\u2119", "\\mathbb{P}"), s("\u211A", "\\mathbb{Q}"), s("\u211D", "\\mathbb{R}"), s("\u2124", "\\mathbb{Z}"), s("\xb7", "\\cdotp"), s("\\llap", "\\mathllap{\\textrm{#1}}"), s("\\rlap", "\\mathrlap{\\textrm{#1}}"), s("\\clap", "\\mathclap{\\textrm{#1}}"), s("\\varGamma", "\\mathit{\\Gamma}"), s("\\varDelta", "\\mathit{\\Delta}"), s("\\varTheta", "\\mathit{\\Theta}"), s("\\varLambda", "\\mathit{\\Lambda}"), s("\\varXi", "\\mathit{\\Xi}"), s("\\varPi", "\\mathit{\\Pi}"), s("\\varSigma", "\\mathit{\\Sigma}"), s("\\varUpsilon", "\\mathit{\\Upsilon}"), s("\\varPhi", "\\mathit{\\Phi}"), s("\\varPsi", "\\mathit{\\Psi}"), s("\\varOmega", "\\mathit{\\Omega}"), s("\\overset", "\\mathop{#2}\\limits^{#1}"), s("\\underset", "\\mathop{#2}\\limits_{#1}"), s("\\boxed", "\\fbox{\\displaystyle{#1}}"), s("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), s("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), s("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
    var l = {
      ",": "\\dotsc",
      "\\not": "\\dotsb",
      "+": "\\dotsb",
      "=": "\\dotsb",
      "<": "\\dotsb",
      ">": "\\dotsb",
      "-": "\\dotsb",
      "*": "\\dotsb",
      ":": "\\dotsb",
      "\\DOTSB": "\\dotsb",
      "\\coprod": "\\dotsb",
      "\\bigvee": "\\dotsb",
      "\\bigwedge": "\\dotsb",
      "\\biguplus": "\\dotsb",
      "\\bigcap": "\\dotsb",
      "\\bigcup": "\\dotsb",
      "\\prod": "\\dotsb",
      "\\sum": "\\dotsb",
      "\\bigotimes": "\\dotsb",
      "\\bigoplus": "\\dotsb",
      "\\bigodot": "\\dotsb",
      "\\bigsqcup": "\\dotsb",
      "\\implies": "\\dotsb",
      "\\impliedby": "\\dotsb",
      "\\And": "\\dotsb",
      "\\longrightarrow": "\\dotsb",
      "\\Longrightarrow": "\\dotsb",
      "\\longleftarrow": "\\dotsb",
      "\\Longleftarrow": "\\dotsb",
      "\\longleftrightarrow": "\\dotsb",
      "\\Longleftrightarrow": "\\dotsb",
      "\\mapsto": "\\dotsb",
      "\\longmapsto": "\\dotsb",
      "\\hookrightarrow": "\\dotsb",
      "\\iff": "\\dotsb",
      "\\doteq": "\\dotsb",
      "\\mathbin": "\\dotsb",
      "\\bmod": "\\dotsb",
      "\\mathrel": "\\dotsb",
      "\\relbar": "\\dotsb",
      "\\Relbar": "\\dotsb",
      "\\xrightarrow": "\\dotsb",
      "\\xleftarrow": "\\dotsb",
      "\\DOTSI": "\\dotsi",
      "\\int": "\\dotsi",
      "\\oint": "\\dotsi",
      "\\iint": "\\dotsi",
      "\\iiint": "\\dotsi",
      "\\iiiint": "\\dotsi",
      "\\idotsint": "\\dotsi",
      "\\DOTSX": "\\dotsx"
    };
    s("\\dots", function (e) {
      var t = "\\dotso",
        r = e.expandAfterFuture().text;
      return r in l ? t = l[r] : "\\not" === r.substr(0, 4) ? t = "\\dotsb" : r in a.a.math && i.a.contains(["bin", "rel"], a.a.math[r].group) && (t = "\\dotsb"), t;
    });
    var u = {
      ")": !0,
      "]": !0,
      "\\rbrack": !0,
      "\\}": !0,
      "\\rbrace": !0,
      "\\rangle": !0,
      "\\rceil": !0,
      "\\rfloor": !0,
      "\\rgroup": !0,
      "\\rmoustache": !0,
      "\\right": !0,
      "\\bigr": !0,
      "\\biggr": !0,
      "\\Bigr": !0,
      "\\Biggr": !0,
      $: !0,
      ";": !0,
      ".": !0,
      ",": !0
    };
    s("\\dotso", function (e) {
      return e.future().text in u ? "\\ldots\\," : "\\ldots";
    }), s("\\dotsc", function (e) {
      var t = e.future().text;
      return t in u && "," !== t ? "\\ldots\\," : "\\ldots";
    }), s("\\cdots", function (e) {
      return e.future().text in u ? "\\@cdots\\," : "\\@cdots";
    }), s("\\dotsb", "\\cdots"), s("\\dotsm", "\\cdots"), s("\\dotsi", "\\!\\cdots"), s("\\dotsx", "\\ldots\\,"), s("\\DOTSI", "\\relax"), s("\\DOTSB", "\\relax"), s("\\DOTSX", "\\relax"), s("\\thinspace", "\\,"), s("\\medspace", "\\:"), s("\\thickspace", "\\;"), s("\\TeX", "\\textrm{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}");
    var c = n.a["Main-Regular"]["T".charCodeAt(0)][1] - .7 * n.a["Main-Regular"]["A".charCodeAt(0)][1] + "em";
    s("\\LaTeX", "\\textrm{L\\kern-.36em\\raisebox{" + c + "}{\\scriptsize A}\\kern-.15em\\TeX}"), s("\\KaTeX", "\\textrm{K\\kern-.17em\\raisebox{" + c + "}{\\scriptsize A}\\kern-.15em\\TeX}"), s("\\hspace", "\\@ifstar\\kern\\kern"), s("\\ordinarycolon", ":"), s("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), s("\\dblcolon", "\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon"), s("\\coloneqq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}="), s("\\Coloneqq", "\\dblcolon\\mathrel{\\mkern-1.2mu}="), s("\\coloneq", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"), s("\\Coloneq", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}"), s("\\eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\Eqqcolon", "=\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\Eqcolon", "\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\colonapprox", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx"), s("\\Colonapprox", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx"), s("\\colonsim", "\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim"), s("\\Colonsim", "\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim"), s("\u2254", "\\coloneqq"), s("\u2255", "\\eqqcolon"), s("\u2A74", "\\Coloneqq"), s("\\ratio", "\\vcentcolon"), s("\\coloncolon", "\\dblcolon"), s("\\colonequals", "\\coloneqq"), s("\\coloncolonequals", "\\Coloneqq"), s("\\equalscolon", "\\eqqcolon"), s("\\equalscoloncolon", "\\Eqqcolon"), s("\\colonminus", "\\coloneq"), s("\\coloncolonminus", "\\Coloneq"), s("\\minuscolon", "\\eqcolon"), s("\\minuscoloncolon", "\\Eqcolon"), s("\\coloncolonapprox", "\\Colonapprox"), s("\\coloncolonsim", "\\Colonsim"), s("\\simcolon", "\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\simcoloncolon", "\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\approxcolon", "\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon"), s("\\approxcoloncolon", "\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon"), s("\\notni", "\\not\\ni"), s("\\limsup", "\\DOTSB\\mathop{\\operatorname{lim\\,sup}}\\limits"), s("\\liminf", "\\DOTSB\\mathop{\\operatorname{lim\\,inf}}\\limits");
  }, function (e, t, r) {
    "use strict";

    var n = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable;
    e.exports = function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
        for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
        if ("0123456789" !== Object.getOwnPropertyNames(t).map(function (e) {
          return t[e];
        }).join("")) return !1;
        var n = {};
        return "abcdefghijklmnopqrst".split("").forEach(function (e) {
          n[e] = e;
        }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("");
      } catch (e) {
        return !1;
      }
    }() ? Object.assign : function (e, t) {
      for (var r, o, s = function (e) {
          if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
          return Object(e);
        }(e), l = 1; l < arguments.length; l++) {
        r = Object(arguments[l]);
        for (var u in r) a.call(r, u) && (s[u] = r[u]);
        if (n) {
          o = n(r);
          for (var c = 0; c < o.length; c++) i.call(r, o[c]) && (s[o[c]] = r[o[c]]);
        }
      }
      return s;
    };
  }, function (e, t) {
    e.exports = {
      "\u0301": {
        text: "\\'",
        math: "\\acute"
      },
      "\u0300": {
        text: "\\`",
        math: "\\grave"
      },
      "\u0308": {
        text: '\\"',
        math: "\\ddot"
      },
      "\u0303": {
        text: "\\~",
        math: "\\tilde"
      },
      "\u0304": {
        text: "\\=",
        math: "\\bar"
      },
      "\u0306": {
        text: "\\u",
        math: "\\breve"
      },
      "\u030C": {
        text: "\\v",
        math: "\\check"
      },
      "\u0302": {
        text: "\\^",
        math: "\\hat"
      },
      "\u0307": {
        text: "\\.",
        math: "\\dot"
      },
      "\u030A": {
        text: "\\r",
        math: "\\mathring"
      },
      "\u030B": {
        text: "\\H"
      }
    };
  }, function (e, t, r) {
    "use strict";

    t.a = {
      "\xe1": "a\u0301",
      "\xe0": "a\u0300",
      "\xe4": "a\u0308",
      "\u01DF": "a\u0308\u0304",
      "\xe3": "a\u0303",
      "\u0101": "a\u0304",
      "\u0103": "a\u0306",
      "\u1EAF": "a\u0306\u0301",
      "\u1EB1": "a\u0306\u0300",
      "\u1EB5": "a\u0306\u0303",
      "\u01CE": "a\u030C",
      "\xe2": "a\u0302",
      "\u1EA5": "a\u0302\u0301",
      "\u1EA7": "a\u0302\u0300",
      "\u1EAB": "a\u0302\u0303",
      "\u0227": "a\u0307",
      "\u01E1": "a\u0307\u0304",
      "\xe5": "a\u030A",
      "\u01FB": "a\u030A\u0301",
      "\u1E03": "b\u0307",
      "\u0107": "c\u0301",
      "\u010D": "c\u030C",
      "\u0109": "c\u0302",
      "\u010B": "c\u0307",
      "\u010F": "d\u030C",
      "\u1E0B": "d\u0307",
      "\xe9": "e\u0301",
      "\xe8": "e\u0300",
      "\xeb": "e\u0308",
      "\u1EBD": "e\u0303",
      "\u0113": "e\u0304",
      "\u1E17": "e\u0304\u0301",
      "\u1E15": "e\u0304\u0300",
      "\u0115": "e\u0306",
      "\u011B": "e\u030C",
      "\xea": "e\u0302",
      "\u1EBF": "e\u0302\u0301",
      "\u1EC1": "e\u0302\u0300",
      "\u1EC5": "e\u0302\u0303",
      "\u0117": "e\u0307",
      "\u1E1F": "f\u0307",
      "\u01F5": "g\u0301",
      "\u1E21": "g\u0304",
      "\u011F": "g\u0306",
      "\u01E7": "g\u030C",
      "\u011D": "g\u0302",
      "\u0121": "g\u0307",
      "\u1E27": "h\u0308",
      "\u021F": "h\u030C",
      "\u0125": "h\u0302",
      "\u1E23": "h\u0307",
      "\xed": "i\u0301",
      "\xec": "i\u0300",
      "\xef": "i\u0308",
      "\u1E2F": "i\u0308\u0301",
      "\u0129": "i\u0303",
      "\u012B": "i\u0304",
      "\u012D": "i\u0306",
      "\u01D0": "i\u030C",
      "\xee": "i\u0302",
      "\u01F0": "j\u030C",
      "\u0135": "j\u0302",
      "\u1E31": "k\u0301",
      "\u01E9": "k\u030C",
      "\u013A": "l\u0301",
      "\u013E": "l\u030C",
      "\u1E3F": "m\u0301",
      "\u1E41": "m\u0307",
      "\u0144": "n\u0301",
      "\u01F9": "n\u0300",
      "\xf1": "n\u0303",
      "\u0148": "n\u030C",
      "\u1E45": "n\u0307",
      "\xf3": "o\u0301",
      "\xf2": "o\u0300",
      "\xf6": "o\u0308",
      "\u022B": "o\u0308\u0304",
      "\xf5": "o\u0303",
      "\u1E4D": "o\u0303\u0301",
      "\u1E4F": "o\u0303\u0308",
      "\u022D": "o\u0303\u0304",
      "\u014D": "o\u0304",
      "\u1E53": "o\u0304\u0301",
      "\u1E51": "o\u0304\u0300",
      "\u014F": "o\u0306",
      "\u01D2": "o\u030C",
      "\xf4": "o\u0302",
      "\u1ED1": "o\u0302\u0301",
      "\u1ED3": "o\u0302\u0300",
      "\u1ED7": "o\u0302\u0303",
      "\u022F": "o\u0307",
      "\u0231": "o\u0307\u0304",
      "\u0151": "o\u030B",
      "\u1E55": "p\u0301",
      "\u1E57": "p\u0307",
      "\u0155": "r\u0301",
      "\u0159": "r\u030C",
      "\u1E59": "r\u0307",
      "\u015B": "s\u0301",
      "\u1E65": "s\u0301\u0307",
      "\u0161": "s\u030C",
      "\u1E67": "s\u030C\u0307",
      "\u015D": "s\u0302",
      "\u1E61": "s\u0307",
      "\u1E97": "t\u0308",
      "\u0165": "t\u030C",
      "\u1E6B": "t\u0307",
      "\xfa": "u\u0301",
      "\xf9": "u\u0300",
      "\xfc": "u\u0308",
      "\u01D8": "u\u0308\u0301",
      "\u01DC": "u\u0308\u0300",
      "\u01D6": "u\u0308\u0304",
      "\u01DA": "u\u0308\u030C",
      "\u0169": "u\u0303",
      "\u1E79": "u\u0303\u0301",
      "\u016B": "u\u0304",
      "\u1E7B": "u\u0304\u0308",
      "\u016D": "u\u0306",
      "\u01D4": "u\u030C",
      "\xfb": "u\u0302",
      "\u016F": "u\u030A",
      "\u0171": "u\u030B",
      "\u1E7D": "v\u0303",
      "\u1E83": "w\u0301",
      "\u1E81": "w\u0300",
      "\u1E85": "w\u0308",
      "\u0175": "w\u0302",
      "\u1E87": "w\u0307",
      "\u1E98": "w\u030A",
      "\u1E8D": "x\u0308",
      "\u1E8B": "x\u0307",
      "\xfd": "y\u0301",
      "\u1EF3": "y\u0300",
      "\xff": "y\u0308",
      "\u1EF9": "y\u0303",
      "\u0233": "y\u0304",
      "\u0177": "y\u0302",
      "\u1E8F": "y\u0307",
      "\u1E99": "y\u030A",
      "\u017A": "z\u0301",
      "\u017E": "z\u030C",
      "\u1E91": "z\u0302",
      "\u017C": "z\u0307",
      "\xc1": "A\u0301",
      "\xc0": "A\u0300",
      "\xc4": "A\u0308",
      "\u01DE": "A\u0308\u0304",
      "\xc3": "A\u0303",
      "\u0100": "A\u0304",
      "\u0102": "A\u0306",
      "\u1EAE": "A\u0306\u0301",
      "\u1EB0": "A\u0306\u0300",
      "\u1EB4": "A\u0306\u0303",
      "\u01CD": "A\u030C",
      "\xc2": "A\u0302",
      "\u1EA4": "A\u0302\u0301",
      "\u1EA6": "A\u0302\u0300",
      "\u1EAA": "A\u0302\u0303",
      "\u0226": "A\u0307",
      "\u01E0": "A\u0307\u0304",
      "\xc5": "A\u030A",
      "\u01FA": "A\u030A\u0301",
      "\u1E02": "B\u0307",
      "\u0106": "C\u0301",
      "\u010C": "C\u030C",
      "\u0108": "C\u0302",
      "\u010A": "C\u0307",
      "\u010E": "D\u030C",
      "\u1E0A": "D\u0307",
      "\xc9": "E\u0301",
      "\xc8": "E\u0300",
      "\xcb": "E\u0308",
      "\u1EBC": "E\u0303",
      "\u0112": "E\u0304",
      "\u1E16": "E\u0304\u0301",
      "\u1E14": "E\u0304\u0300",
      "\u0114": "E\u0306",
      "\u011A": "E\u030C",
      "\xca": "E\u0302",
      "\u1EBE": "E\u0302\u0301",
      "\u1EC0": "E\u0302\u0300",
      "\u1EC4": "E\u0302\u0303",
      "\u0116": "E\u0307",
      "\u1E1E": "F\u0307",
      "\u01F4": "G\u0301",
      "\u1E20": "G\u0304",
      "\u011E": "G\u0306",
      "\u01E6": "G\u030C",
      "\u011C": "G\u0302",
      "\u0120": "G\u0307",
      "\u1E26": "H\u0308",
      "\u021E": "H\u030C",
      "\u0124": "H\u0302",
      "\u1E22": "H\u0307",
      "\xcd": "I\u0301",
      "\xcc": "I\u0300",
      "\xcf": "I\u0308",
      "\u1E2E": "I\u0308\u0301",
      "\u0128": "I\u0303",
      "\u012A": "I\u0304",
      "\u012C": "I\u0306",
      "\u01CF": "I\u030C",
      "\xce": "I\u0302",
      "\u0130": "I\u0307",
      "\u0134": "J\u0302",
      "\u1E30": "K\u0301",
      "\u01E8": "K\u030C",
      "\u0139": "L\u0301",
      "\u013D": "L\u030C",
      "\u1E3E": "M\u0301",
      "\u1E40": "M\u0307",
      "\u0143": "N\u0301",
      "\u01F8": "N\u0300",
      "\xd1": "N\u0303",
      "\u0147": "N\u030C",
      "\u1E44": "N\u0307",
      "\xd3": "O\u0301",
      "\xd2": "O\u0300",
      "\xd6": "O\u0308",
      "\u022A": "O\u0308\u0304",
      "\xd5": "O\u0303",
      "\u1E4C": "O\u0303\u0301",
      "\u1E4E": "O\u0303\u0308",
      "\u022C": "O\u0303\u0304",
      "\u014C": "O\u0304",
      "\u1E52": "O\u0304\u0301",
      "\u1E50": "O\u0304\u0300",
      "\u014E": "O\u0306",
      "\u01D1": "O\u030C",
      "\xd4": "O\u0302",
      "\u1ED0": "O\u0302\u0301",
      "\u1ED2": "O\u0302\u0300",
      "\u1ED6": "O\u0302\u0303",
      "\u022E": "O\u0307",
      "\u0230": "O\u0307\u0304",
      "\u0150": "O\u030B",
      "\u1E54": "P\u0301",
      "\u1E56": "P\u0307",
      "\u0154": "R\u0301",
      "\u0158": "R\u030C",
      "\u1E58": "R\u0307",
      "\u015A": "S\u0301",
      "\u1E64": "S\u0301\u0307",
      "\u0160": "S\u030C",
      "\u1E66": "S\u030C\u0307",
      "\u015C": "S\u0302",
      "\u1E60": "S\u0307",
      "\u0164": "T\u030C",
      "\u1E6A": "T\u0307",
      "\xda": "U\u0301",
      "\xd9": "U\u0300",
      "\xdc": "U\u0308",
      "\u01D7": "U\u0308\u0301",
      "\u01DB": "U\u0308\u0300",
      "\u01D5": "U\u0308\u0304",
      "\u01D9": "U\u0308\u030C",
      "\u0168": "U\u0303",
      "\u1E78": "U\u0303\u0301",
      "\u016A": "U\u0304",
      "\u1E7A": "U\u0304\u0308",
      "\u016C": "U\u0306",
      "\u01D3": "U\u030C",
      "\xdb": "U\u0302",
      "\u016E": "U\u030A",
      "\u0170": "U\u030B",
      "\u1E7C": "V\u0303",
      "\u1E82": "W\u0301",
      "\u1E80": "W\u0300",
      "\u1E84": "W\u0308",
      "\u0174": "W\u0302",
      "\u1E86": "W\u0307",
      "\u1E8C": "X\u0308",
      "\u1E8A": "X\u0307",
      "\xdd": "Y\u0301",
      "\u1EF2": "Y\u0300",
      "\u0178": "Y\u0308",
      "\u1EF8": "Y\u0303",
      "\u0232": "Y\u0304",
      "\u0176": "Y\u0302",
      "\u1E8E": "Y\u0307",
      "\u0179": "Z\u0301",
      "\u017D": "Z\u030C",
      "\u1E90": "Z\u0302",
      "\u017B": "Z\u0307",
      "\u03AC": "\u03B1\u0301",
      "\u1F70": "\u03B1\u0300",
      "\u1FB1": "\u03B1\u0304",
      "\u1FB0": "\u03B1\u0306",
      "\u03AD": "\u03B5\u0301",
      "\u1F72": "\u03B5\u0300",
      "\u03AE": "\u03B7\u0301",
      "\u1F74": "\u03B7\u0300",
      "\u03AF": "\u03B9\u0301",
      "\u1F76": "\u03B9\u0300",
      "\u03CA": "\u03B9\u0308",
      "\u0390": "\u03B9\u0308\u0301",
      "\u1FD2": "\u03B9\u0308\u0300",
      "\u1FD1": "\u03B9\u0304",
      "\u1FD0": "\u03B9\u0306",
      "\u03CC": "\u03BF\u0301",
      "\u1F78": "\u03BF\u0300",
      "\u03CD": "\u03C5\u0301",
      "\u1F7A": "\u03C5\u0300",
      "\u03CB": "\u03C5\u0308",
      "\u03B0": "\u03C5\u0308\u0301",
      "\u1FE2": "\u03C5\u0308\u0300",
      "\u1FE1": "\u03C5\u0304",
      "\u1FE0": "\u03C5\u0306",
      "\u03CE": "\u03C9\u0301",
      "\u1F7C": "\u03C9\u0300",
      "\u038E": "\u03A5\u0301",
      "\u1FEA": "\u03A5\u0300",
      "\u03AB": "\u03A5\u0308",
      "\u1FE9": "\u03A5\u0304",
      "\u1FE8": "\u03A5\u0306",
      "\u038F": "\u03A9\u0301",
      "\u1FFA": "\u03A9\u0300"
    };
  }])["default"];
});

/***/ }),

/***/ "./public/backend/js/summernote-bs4.min.js":
/*!*************************************************!*\
  !*** ./public/backend/js/summernote-bs4.min.js ***!
  \*************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*! For license information please see summernote-bs4.min.js.LICENSE.txt */
!function (t, e) {
  if ("object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module))) module.exports = e(__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"));else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (e),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var o, n; }
}(window, function (t) {
  return function (t) {
    var e = {};
    function n(o) {
      if (e[o]) return e[o].exports;
      var i = e[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: o
      });
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) return t;
      if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & e && "string" != typeof t) for (var i in t) n.d(o, i, function (e) {
        return t[e];
      }.bind(null, i));
      return o;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t["default"];
      } : function () {
        return t;
      };
      return n.d(e, "a", e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 53);
  }({
    0: function _(e, n) {
      e.exports = t;
    },
    1: function _(t, e, n) {
      "use strict";

      var o = n(0),
        i = n.n(o);
      function r(t) {
        return (r = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }
      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var s = function () {
        function t(e, n, o, i) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.markup = e, this.children = n, this.options = o, this.callback = i;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "render",
          value: function value(t) {
            var e = i()(this.markup);
            if (this.options && this.options.contents && e.html(this.options.contents), this.options && this.options.className && e.addClass(this.options.className), this.options && this.options.data && i.a.each(this.options.data, function (t, n) {
              e.attr("data-" + t, n);
            }), this.options && this.options.click && e.on("click", this.options.click), this.children) {
              var n = e.find(".note-children-container");
              this.children.forEach(function (t) {
                t.render(n.length ? n : e);
              });
            }
            return this.callback && this.callback(e, this.options), this.options && this.options.callback && this.options.callback(e), t && t.append(e), e;
          }
        }]) && a(e.prototype, n), o && a(e, o), t;
      }();
      e.a = {
        create: function create(t, e) {
          return function () {
            var n = "object" === r(arguments[1]) ? arguments[1] : arguments[0],
              o = Array.isArray(arguments[0]) ? arguments[0] : [];
            return n && n.children && (o = n.children), new s(t, o, n, e);
          };
        }
      };
    },
    2: function _(t, e) {
      (function (e) {
        t.exports = e;
      }).call(this, {});
    },
    3: function _(t, e, n) {
      "use strict";

      var o = n(0),
        i = n.n(o);
      i.a.summernote = i.a.summernote || {
        lang: {}
      }, i.a.extend(i.a.summernote.lang, {
        "en-US": {
          font: {
            bold: "Bold",
            italic: "Italic",
            underline: "Underline",
            clear: "Remove Font Style",
            height: "Line Height",
            name: "Font Family",
            strikethrough: "Strikethrough",
            subscript: "Subscript",
            superscript: "Superscript",
            size: "Font Size",
            sizeunit: "Font Size Unit"
          },
          image: {
            image: "Picture",
            insert: "Insert Image",
            resizeFull: "Resize full",
            resizeHalf: "Resize half",
            resizeQuarter: "Resize quarter",
            resizeNone: "Original size",
            floatLeft: "Float Left",
            floatRight: "Float Right",
            floatNone: "Remove float",
            shapeRounded: "Shape: Rounded",
            shapeCircle: "Shape: Circle",
            shapeThumbnail: "Shape: Thumbnail",
            shapeNone: "Shape: None",
            dragImageHere: "Drag image or text here",
            dropImage: "Drop image or Text",
            selectFromFiles: "Select from files",
            maximumFileSize: "Maximum file size",
            maximumFileSizeError: "Maximum file size exceeded.",
            url: "Image URL",
            remove: "Remove Image",
            original: "Original"
          },
          video: {
            video: "Video",
            videoLink: "Video Link",
            insert: "Insert Video",
            url: "Video URL",
            providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
          },
          link: {
            link: "Link",
            insert: "Insert Link",
            unlink: "Unlink",
            edit: "Edit",
            textToDisplay: "Text to display",
            url: "To what URL should this link go?",
            openInNewWindow: "Open in new window",
            useProtocol: "Use default protocol"
          },
          table: {
            table: "Table",
            addRowAbove: "Add row above",
            addRowBelow: "Add row below",
            addColLeft: "Add column left",
            addColRight: "Add column right",
            delRow: "Delete row",
            delCol: "Delete column",
            delTable: "Delete table"
          },
          hr: {
            insert: "Insert Horizontal Rule"
          },
          style: {
            style: "Style",
            p: "Normal",
            blockquote: "Quote",
            pre: "Code",
            h1: "Header 1",
            h2: "Header 2",
            h3: "Header 3",
            h4: "Header 4",
            h5: "Header 5",
            h6: "Header 6"
          },
          lists: {
            unordered: "Unordered list",
            ordered: "Ordered list"
          },
          options: {
            help: "Help",
            fullscreen: "Full Screen",
            codeview: "Code View"
          },
          paragraph: {
            paragraph: "Paragraph",
            outdent: "Outdent",
            indent: "Indent",
            left: "Align left",
            center: "Align center",
            right: "Align right",
            justify: "Justify full"
          },
          color: {
            recent: "Recent Color",
            more: "More Color",
            background: "Background Color",
            foreground: "Text Color",
            transparent: "Transparent",
            setTransparent: "Set transparent",
            reset: "Reset",
            resetToDefault: "Reset to default",
            cpSelect: "Select"
          },
          shortcut: {
            shortcuts: "Keyboard shortcuts",
            close: "Close",
            textFormatting: "Text formatting",
            action: "Action",
            paragraphFormatting: "Paragraph formatting",
            documentStyle: "Document Style",
            extraKeys: "Extra keys"
          },
          help: {
            escape: "Escape",
            insertParagraph: "Insert Paragraph",
            undo: "Undo the last command",
            redo: "Redo the last command",
            tab: "Tab",
            untab: "Untab",
            bold: "Set a bold style",
            italic: "Set a italic style",
            underline: "Set a underline style",
            strikethrough: "Set a strikethrough style",
            removeFormat: "Clean a style",
            justifyLeft: "Set left align",
            justifyCenter: "Set center align",
            justifyRight: "Set right align",
            justifyFull: "Set full align",
            insertUnorderedList: "Toggle unordered list",
            insertOrderedList: "Toggle ordered list",
            outdent: "Outdent on current paragraph",
            indent: "Indent on current paragraph",
            formatPara: "Change current block's format as a paragraph(P tag)",
            formatH1: "Change current block's format as H1",
            formatH2: "Change current block's format as H2",
            formatH3: "Change current block's format as H3",
            formatH4: "Change current block's format as H4",
            formatH5: "Change current block's format as H5",
            formatH6: "Change current block's format as H6",
            insertHorizontalRule: "Insert horizontal rule",
            "linkDialog.show": "Show Link Dialog"
          },
          history: {
            undo: "Undo",
            redo: "Redo"
          },
          specialChar: {
            specialChar: "SPECIAL CHARACTERS",
            select: "Select Special characters"
          },
          output: {
            noSelection: "No Selection Made!"
          }
        }
      });
      var r =  true && n(2),
        a = ["sans-serif", "serif", "monospace", "cursive", "fantasy"];
      function s(t) {
        return -1 === i.a.inArray(t.toLowerCase(), a) ? "'".concat(t, "'") : t;
      }
      var l,
        c = navigator.userAgent,
        u = /MSIE|Trident/i.test(c);
      if (u) {
        var d = /MSIE (\d+[.]\d+)/.exec(c);
        d && (l = parseFloat(d[1])), (d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c)) && (l = parseFloat(d[1]));
      }
      var h = /Edge\/\d+/.test(c),
        f = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
        p = u ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input",
        m = {
          isMac: navigator.appVersion.indexOf("Mac") > -1,
          isMSIE: u,
          isEdge: h,
          isFF: !h && /firefox/i.test(c),
          isPhantom: /PhantomJS/i.test(c),
          isWebkit: !h && /webkit/i.test(c),
          isChrome: !h && /chrome/i.test(c),
          isSafari: !h && /safari/i.test(c) && !/chrome/i.test(c),
          browserVersion: l,
          jqueryVersion: parseFloat(i.a.fn.jquery),
          isSupportAmd: r,
          isSupportTouch: f,
          isFontInstalled: function isFontInstalled(t) {
            var e = "Comic Sans MS" === t ? "Courier New" : "Comic Sans MS",
              n = document.createElement("canvas").getContext("2d");
            n.font = "200px '" + e + "'";
            var o = n.measureText("mmmmmmmmmmwwwww").width;
            return n.font = "200px " + s(t) + ', "' + e + '"', o !== n.measureText("mmmmmmmmmmwwwww").width;
          },
          isW3CRangeSupport: !!document.createRange,
          inputEventName: p,
          genericFontFamilies: a,
          validFontName: s
        };
      var v = 0;
      var g = {
        eq: function eq(t) {
          return function (e) {
            return t === e;
          };
        },
        eq2: function eq2(t, e) {
          return t === e;
        },
        peq2: function peq2(t) {
          return function (e, n) {
            return e[t] === n[t];
          };
        },
        ok: function ok() {
          return !0;
        },
        fail: function fail() {
          return !1;
        },
        self: function self(t) {
          return t;
        },
        not: function not(t) {
          return function () {
            return !t.apply(t, arguments);
          };
        },
        and: function and(t, e) {
          return function (n) {
            return t(n) && e(n);
          };
        },
        invoke: function invoke(t, e) {
          return function () {
            return t[e].apply(t, arguments);
          };
        },
        resetUniqueId: function resetUniqueId() {
          v = 0;
        },
        uniqueId: function uniqueId(t) {
          var e = ++v + "";
          return t ? t + e : e;
        },
        rect2bnd: function rect2bnd(t) {
          var e = i()(document);
          return {
            top: t.top + e.scrollTop(),
            left: t.left + e.scrollLeft(),
            width: t.right - t.left,
            height: t.bottom - t.top
          };
        },
        invertObject: function invertObject(t) {
          var e = {};
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[t[n]] = n);
          return e;
        },
        namespaceToCamel: function namespaceToCamel(t, e) {
          return (e = e || "") + t.split(".").map(function (t) {
            return t.substring(0, 1).toUpperCase() + t.substring(1);
          }).join("");
        },
        debounce: function debounce(t, e, n) {
          var o;
          return function () {
            var i = this,
              r = arguments,
              a = function a() {
                o = null, n || t.apply(i, r);
              },
              s = n && !o;
            clearTimeout(o), o = setTimeout(a, e), s && t.apply(i, r);
          };
        },
        isValidUrl: function isValidUrl(t) {
          return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(t);
        }
      };
      function b(t) {
        return t[0];
      }
      function y(t) {
        return t[t.length - 1];
      }
      function k(t) {
        return t.slice(1);
      }
      function w(t, e) {
        if (t && t.length && e) {
          if (t.indexOf) return -1 !== t.indexOf(e);
          if (t.contains) return t.contains(e);
        }
        return !1;
      }
      var C = {
          head: b,
          last: y,
          initial: function initial(t) {
            return t.slice(0, t.length - 1);
          },
          tail: k,
          prev: function prev(t, e) {
            if (t && t.length && e) {
              var n = t.indexOf(e);
              return -1 === n ? null : t[n - 1];
            }
            return null;
          },
          next: function next(t, e) {
            if (t && t.length && e) {
              var n = t.indexOf(e);
              return -1 === n ? null : t[n + 1];
            }
            return null;
          },
          find: function find(t, e) {
            for (var n = 0, o = t.length; n < o; n++) {
              var i = t[n];
              if (e(i)) return i;
            }
          },
          contains: w,
          all: function all(t, e) {
            for (var n = 0, o = t.length; n < o; n++) if (!e(t[n])) return !1;
            return !0;
          },
          sum: function sum(t, e) {
            return e = e || g.self, t.reduce(function (t, n) {
              return t + e(n);
            }, 0);
          },
          from: function from(t) {
            for (var e = [], n = t.length, o = -1; ++o < n;) e[o] = t[o];
            return e;
          },
          isEmpty: function isEmpty(t) {
            return !t || !t.length;
          },
          clusterBy: function clusterBy(t, e) {
            return t.length ? k(t).reduce(function (t, n) {
              var o = y(t);
              return e(y(o), n) ? o[o.length] = n : t[t.length] = [n], t;
            }, [[b(t)]]) : [];
          },
          compact: function compact(t) {
            for (var e = [], n = 0, o = t.length; n < o; n++) t[n] && e.push(t[n]);
            return e;
          },
          unique: function unique(t) {
            for (var e = [], n = 0, o = t.length; n < o; n++) w(e, t[n]) || e.push(t[n]);
            return e;
          }
        },
        x = String.fromCharCode(160);
      function S(t) {
        return t && i()(t).hasClass("note-editable");
      }
      function T(t) {
        return t = t.toUpperCase(), function (e) {
          return e && e.nodeName.toUpperCase() === t;
        };
      }
      function E(t) {
        return t && 3 === t.nodeType;
      }
      function I(t) {
        return t && /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(t.nodeName.toUpperCase());
      }
      function $(t) {
        return !S(t) && t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase());
      }
      var N = T("PRE"),
        P = T("LI");
      var R = T("TABLE"),
        L = T("DATA");
      function A(t) {
        return !(B(t) || F(t) || D(t) || $(t) || R(t) || z(t) || L(t));
      }
      function F(t) {
        return t && /^UL|^OL/.test(t.nodeName.toUpperCase());
      }
      var D = T("HR");
      function H(t) {
        return t && /^TD|^TH/.test(t.nodeName.toUpperCase());
      }
      var z = T("BLOCKQUOTE");
      function B(t) {
        return H(t) || z(t) || S(t);
      }
      var M = T("A");
      var O = T("BODY");
      var j = m.isMSIE && m.browserVersion < 11 ? "&nbsp;" : "<br>";
      function U(t) {
        return E(t) ? t.nodeValue.length : t ? t.childNodes.length : 0;
      }
      function W(t) {
        var e = U(t);
        return 0 === e || !E(t) && 1 === e && t.innerHTML === j || !(!C.all(t.childNodes, E) || "" !== t.innerHTML);
      }
      function K(t) {
        I(t) || U(t) || (t.innerHTML = j);
      }
      function q(t, e) {
        for (; t;) {
          if (e(t)) return t;
          if (S(t)) break;
          t = t.parentNode;
        }
        return null;
      }
      function V(t, e) {
        e = e || g.fail;
        var n = [];
        return q(t, function (t) {
          return S(t) || n.push(t), e(t);
        }), n;
      }
      function _(t, e) {
        e = e || g.fail;
        for (var n = []; t && !e(t);) n.push(t), t = t.nextSibling;
        return n;
      }
      function G(t, e) {
        var n = e.nextSibling,
          o = e.parentNode;
        return n ? o.insertBefore(t, n) : o.appendChild(t), t;
      }
      function Y(t, e) {
        return i.a.each(e, function (e, n) {
          t.appendChild(n);
        }), t;
      }
      function Z(t) {
        return 0 === t.offset;
      }
      function X(t) {
        return t.offset === U(t.node);
      }
      function Q(t) {
        return Z(t) || X(t);
      }
      function J(t, e) {
        for (; t && t !== e;) {
          if (0 !== et(t)) return !1;
          t = t.parentNode;
        }
        return !0;
      }
      function tt(t, e) {
        if (!e) return !1;
        for (; t && t !== e;) {
          if (et(t) !== U(t.parentNode) - 1) return !1;
          t = t.parentNode;
        }
        return !0;
      }
      function et(t) {
        for (var e = 0; t = t.previousSibling;) e += 1;
        return e;
      }
      function nt(t) {
        return !!(t && t.childNodes && t.childNodes.length);
      }
      function ot(t, e) {
        var n, o;
        if (0 === t.offset) {
          if (S(t.node)) return null;
          n = t.node.parentNode, o = et(t.node);
        } else nt(t.node) ? o = U(n = t.node.childNodes[t.offset - 1]) : (n = t.node, o = e ? 0 : t.offset - 1);
        return {
          node: n,
          offset: o
        };
      }
      function it(t, e) {
        var n, o;
        if (U(t.node) === t.offset) {
          if (S(t.node)) return null;
          var i = at(t.node);
          i ? (n = i, o = 0) : (n = t.node.parentNode, o = et(t.node) + 1);
        } else nt(t.node) ? (n = t.node.childNodes[t.offset], o = 0) : (n = t.node, o = e ? U(t.node) : t.offset + 1);
        return {
          node: n,
          offset: o
        };
      }
      function rt(t, e) {
        var n, o;
        if (W(t.node)) return {
          node: n = t.node.nextSibling,
          offset: o = 0
        };
        if (U(t.node) === t.offset) {
          if (S(t.node)) return null;
          var i = at(t.node);
          i ? (n = i, o = 0) : (n = t.node.parentNode, o = et(t.node) + 1), S(n) && (n = t.node.nextSibling, o = 0);
        } else if (nt(t.node)) {
          if (o = 0, W(n = t.node.childNodes[t.offset])) return null;
        } else if (n = t.node, o = e ? U(t.node) : t.offset + 1, W(n)) return null;
        return {
          node: n,
          offset: o
        };
      }
      function at(t) {
        if (t.nextSibling && t.parent === t.nextSibling.parent) return E(t.nextSibling) ? t.nextSibling : at(t.nextSibling);
      }
      function st(t, e) {
        return t.node === e.node && t.offset === e.offset;
      }
      function lt(t, e) {
        var n = e && e.isSkipPaddingBlankHTML,
          o = e && e.isNotSplitEdgePoint,
          i = e && e.isDiscardEmptySplits;
        if (i && (n = !0), Q(t) && (E(t.node) || o)) {
          if (Z(t)) return t.node;
          if (X(t)) return t.node.nextSibling;
        }
        if (E(t.node)) return t.node.splitText(t.offset);
        var r = t.node.childNodes[t.offset],
          a = G(t.node.cloneNode(!1), t.node);
        return Y(a, _(r)), n || (K(t.node), K(a)), i && (W(t.node) && dt(t.node), W(a)) ? (dt(a), t.node.nextSibling) : a;
      }
      function ct(t, e, n) {
        var o = V(e.node, g.eq(t));
        return o.length ? 1 === o.length ? lt(e, n) : o.reduce(function (t, o) {
          return t === e.node && (t = lt(e, n)), lt({
            node: o,
            offset: t ? et(t) : U(o)
          }, n);
        }) : null;
      }
      function ut(t) {
        return document.createElement(t);
      }
      function dt(t, e) {
        if (t && t.parentNode) {
          if (t.removeNode) return t.removeNode(e);
          var n = t.parentNode;
          if (!e) {
            for (var o = [], i = 0, r = t.childNodes.length; i < r; i++) o.push(t.childNodes[i]);
            for (var a = 0, s = o.length; a < s; a++) n.insertBefore(o[a], t);
          }
          n.removeChild(t);
        }
      }
      var ht = T("TEXTAREA");
      function ft(t, e) {
        var n = ht(t[0]) ? t.val() : t.html();
        return e ? n.replace(/[\n\r]/g, "") : n;
      }
      var pt = {
        NBSP_CHAR: x,
        ZERO_WIDTH_NBSP_CHAR: "\uFEFF",
        blank: j,
        emptyPara: "<p>".concat(j, "</p>"),
        makePredByNodeName: T,
        isEditable: S,
        isControlSizing: function isControlSizing(t) {
          return t && i()(t).hasClass("note-control-sizing");
        },
        isText: E,
        isElement: function isElement(t) {
          return t && 1 === t.nodeType;
        },
        isVoid: I,
        isPara: $,
        isPurePara: function isPurePara(t) {
          return $(t) && !P(t);
        },
        isHeading: function isHeading(t) {
          return t && /^H[1-7]/.test(t.nodeName.toUpperCase());
        },
        isInline: A,
        isBlock: g.not(A),
        isBodyInline: function isBodyInline(t) {
          return A(t) && !q(t, $);
        },
        isBody: O,
        isParaInline: function isParaInline(t) {
          return A(t) && !!q(t, $);
        },
        isPre: N,
        isList: F,
        isTable: R,
        isData: L,
        isCell: H,
        isBlockquote: z,
        isBodyContainer: B,
        isAnchor: M,
        isDiv: T("DIV"),
        isLi: P,
        isBR: T("BR"),
        isSpan: T("SPAN"),
        isB: T("B"),
        isU: T("U"),
        isS: T("S"),
        isI: T("I"),
        isImg: T("IMG"),
        isTextarea: ht,
        deepestChildIsEmpty: function deepestChildIsEmpty(t) {
          do {
            if (null === t.firstElementChild || "" === t.firstElementChild.innerHTML) break;
          } while (t = t.firstElementChild);
          return W(t);
        },
        isEmpty: W,
        isEmptyAnchor: g.and(M, W),
        isClosestSibling: function isClosestSibling(t, e) {
          return t.nextSibling === e || t.previousSibling === e;
        },
        withClosestSiblings: function withClosestSiblings(t, e) {
          e = e || g.ok;
          var n = [];
          return t.previousSibling && e(t.previousSibling) && n.push(t.previousSibling), n.push(t), t.nextSibling && e(t.nextSibling) && n.push(t.nextSibling), n;
        },
        nodeLength: U,
        isLeftEdgePoint: Z,
        isRightEdgePoint: X,
        isEdgePoint: Q,
        isLeftEdgeOf: J,
        isRightEdgeOf: tt,
        isLeftEdgePointOf: function isLeftEdgePointOf(t, e) {
          return Z(t) && J(t.node, e);
        },
        isRightEdgePointOf: function isRightEdgePointOf(t, e) {
          return X(t) && tt(t.node, e);
        },
        prevPoint: ot,
        nextPoint: it,
        nextPointWithEmptyNode: rt,
        isSamePoint: st,
        isVisiblePoint: function isVisiblePoint(t) {
          if (E(t.node) || !nt(t.node) || W(t.node)) return !0;
          var e = t.node.childNodes[t.offset - 1],
            n = t.node.childNodes[t.offset];
          return !(e && !I(e) || n && !I(n));
        },
        prevPointUntil: function prevPointUntil(t, e) {
          for (; t;) {
            if (e(t)) return t;
            t = ot(t);
          }
          return null;
        },
        nextPointUntil: function nextPointUntil(t, e) {
          for (; t;) {
            if (e(t)) return t;
            t = it(t);
          }
          return null;
        },
        isCharPoint: function isCharPoint(t) {
          if (!E(t.node)) return !1;
          var e = t.node.nodeValue.charAt(t.offset - 1);
          return e && " " !== e && e !== x;
        },
        isSpacePoint: function isSpacePoint(t) {
          if (!E(t.node)) return !1;
          var e = t.node.nodeValue.charAt(t.offset - 1);
          return " " === e || e === x;
        },
        walkPoint: function walkPoint(t, e, n, o) {
          for (var i = t; i && (n(i), !st(i, e));) {
            i = rt(i, o && t.node !== i.node && e.node !== i.node);
          }
        },
        ancestor: q,
        singleChildAncestor: function singleChildAncestor(t, e) {
          for (t = t.parentNode; t && 1 === U(t);) {
            if (e(t)) return t;
            if (S(t)) break;
            t = t.parentNode;
          }
          return null;
        },
        listAncestor: V,
        lastAncestor: function lastAncestor(t, e) {
          var n = V(t);
          return C.last(n.filter(e));
        },
        listNext: _,
        listPrev: function listPrev(t, e) {
          e = e || g.fail;
          for (var n = []; t && !e(t);) n.push(t), t = t.previousSibling;
          return n;
        },
        listDescendant: function listDescendant(t, e) {
          var n = [];
          return e = e || g.ok, function o(i) {
            t !== i && e(i) && n.push(i);
            for (var r = 0, a = i.childNodes.length; r < a; r++) o(i.childNodes[r]);
          }(t), n;
        },
        commonAncestor: function commonAncestor(t, e) {
          for (var n = V(t), o = e; o; o = o.parentNode) if (n.indexOf(o) > -1) return o;
          return null;
        },
        wrap: function wrap(t, e) {
          var n = t.parentNode,
            o = i()("<" + e + ">")[0];
          return n.insertBefore(o, t), o.appendChild(t), o;
        },
        insertAfter: G,
        appendChildNodes: Y,
        position: et,
        hasChildren: nt,
        makeOffsetPath: function makeOffsetPath(t, e) {
          return V(e, g.eq(t)).map(et).reverse();
        },
        fromOffsetPath: function fromOffsetPath(t, e) {
          for (var n = t, o = 0, i = e.length; o < i; o++) n = n.childNodes.length <= e[o] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[e[o]];
          return n;
        },
        splitTree: ct,
        splitPoint: function splitPoint(t, e) {
          var n,
            o,
            i = e ? $ : B,
            r = V(t.node, i),
            a = C.last(r) || t.node;
          i(a) ? (n = r[r.length - 2], o = a) : o = (n = a).parentNode;
          var s = n && ct(n, t, {
            isSkipPaddingBlankHTML: e,
            isNotSplitEdgePoint: e
          });
          return s || o !== t.node || (s = t.node.childNodes[t.offset]), {
            rightNode: s,
            container: o
          };
        },
        create: ut,
        createText: function createText(t) {
          return document.createTextNode(t);
        },
        remove: dt,
        removeWhile: function removeWhile(t, e) {
          for (; t && !S(t) && e(t);) {
            var n = t.parentNode;
            dt(t), t = n;
          }
        },
        replace: function replace(t, e) {
          if (t.nodeName.toUpperCase() === e.toUpperCase()) return t;
          var n = ut(e);
          return t.style.cssText && (n.style.cssText = t.style.cssText), Y(n, C.from(t.childNodes)), G(n, t), dt(t), n;
        },
        html: function html(t, e) {
          var n = ft(t);
          if (e) {
            n = (n = n.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, function (t, e, n) {
              n = n.toUpperCase();
              var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!e,
                i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
              return t + (o || i ? "\n" : "");
            })).trim();
          }
          return n;
        },
        value: ft,
        posFromPlaceholder: function posFromPlaceholder(t) {
          var e = i()(t),
            n = e.offset(),
            o = e.outerHeight(!0);
          return {
            left: n.left,
            top: n.top + o
          };
        },
        attachEvents: function attachEvents(t, e) {
          Object.keys(e).forEach(function (n) {
            t.on(n, e[n]);
          });
        },
        detachEvents: function detachEvents(t, e) {
          Object.keys(e).forEach(function (n) {
            t.off(n, e[n]);
          });
        },
        isCustomStyleTag: function isCustomStyleTag(t) {
          return t && !E(t) && C.contains(t.classList, "note-styletag");
        }
      };
      function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var vt = function () {
        function t(e, n) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.$note = e, this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = i.a.extend(!0, {}, n), i.a.summernote.ui = i.a.summernote.ui_template(this.options), this.ui = i.a.summernote.ui, this.initialize();
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            return this.layoutInfo = this.ui.createLayout(this.$note), this._initialize(), this.$note.hide(), this;
          }
        }, {
          key: "destroy",
          value: function value() {
            this._destroy(), this.$note.removeData("summernote"), this.ui.removeLayout(this.$note, this.layoutInfo);
          }
        }, {
          key: "reset",
          value: function value() {
            var t = this.isDisabled();
            this.code(pt.emptyPara), this._destroy(), this._initialize(), t && this.disable();
          }
        }, {
          key: "_initialize",
          value: function value() {
            var t = this;
            this.options.id = g.uniqueId(i.a.now()), this.options.container = this.options.container || this.layoutInfo.editor;
            var e = i.a.extend({}, this.options.buttons);
            Object.keys(e).forEach(function (n) {
              t.memo("button." + n, e[n]);
            });
            var n = i.a.extend({}, this.options.modules, i.a.summernote.plugins || {});
            Object.keys(n).forEach(function (e) {
              t.module(e, n[e], !0);
            }), Object.keys(this.modules).forEach(function (e) {
              t.initializeModule(e);
            });
          }
        }, {
          key: "_destroy",
          value: function value() {
            var t = this;
            Object.keys(this.modules).reverse().forEach(function (e) {
              t.removeModule(e);
            }), Object.keys(this.memos).forEach(function (e) {
              t.removeMemo(e);
            }), this.triggerEvent("destroy", this);
          }
        }, {
          key: "code",
          value: function value(t) {
            var e = this.invoke("codeview.isActivated");
            if (void 0 === t) return this.invoke("codeview.sync"), e ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html();
            e ? this.invoke("codeview.sync", t) : this.layoutInfo.editable.html(t), this.$note.val(t), this.triggerEvent("change", t, this.layoutInfo.editable);
          }
        }, {
          key: "isDisabled",
          value: function value() {
            return "false" === this.layoutInfo.editable.attr("contenteditable");
          }
        }, {
          key: "enable",
          value: function value() {
            this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0), this.triggerEvent("disable", !1), this.options.editing = !0;
          }
        }, {
          key: "disable",
          value: function value() {
            this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.options.editing = !1, this.invoke("toolbar.deactivate", !0), this.triggerEvent("disable", !0);
          }
        }, {
          key: "triggerEvent",
          value: function value() {
            var t = C.head(arguments),
              e = C.tail(C.from(arguments)),
              n = this.options.callbacks[g.namespaceToCamel(t, "on")];
            n && n.apply(this.$note[0], e), this.$note.trigger("summernote." + t, e);
          }
        }, {
          key: "initializeModule",
          value: function value(t) {
            var e = this.modules[t];
            e.shouldInitialize = e.shouldInitialize || g.ok, e.shouldInitialize() && (e.initialize && e.initialize(), e.events && pt.attachEvents(this.$note, e.events));
          }
        }, {
          key: "module",
          value: function value(t, e, n) {
            if (1 === arguments.length) return this.modules[t];
            this.modules[t] = new e(this), n || this.initializeModule(t);
          }
        }, {
          key: "removeModule",
          value: function value(t) {
            var e = this.modules[t];
            e.shouldInitialize() && (e.events && pt.detachEvents(this.$note, e.events), e.destroy && e.destroy()), delete this.modules[t];
          }
        }, {
          key: "memo",
          value: function value(t, e) {
            if (1 === arguments.length) return this.memos[t];
            this.memos[t] = e;
          }
        }, {
          key: "removeMemo",
          value: function value(t) {
            this.memos[t] && this.memos[t].destroy && this.memos[t].destroy(), delete this.memos[t];
          }
        }, {
          key: "createInvokeHandlerAndUpdateState",
          value: function value(t, e) {
            var n = this;
            return function (o) {
              n.createInvokeHandler(t, e)(o), n.invoke("buttons.updateCurrentStyle");
            };
          }
        }, {
          key: "createInvokeHandler",
          value: function value(t, e) {
            var n = this;
            return function (o) {
              o.preventDefault();
              var r = i()(o.target);
              n.invoke(t, e || r.closest("[data-value]").data("value"), r);
            };
          }
        }, {
          key: "invoke",
          value: function value() {
            var t = C.head(arguments),
              e = C.tail(C.from(arguments)),
              n = t.split("."),
              o = n.length > 1,
              i = o && C.head(n),
              r = o ? C.last(n) : C.head(n),
              a = this.modules[i || "editor"];
            return !i && this[r] ? this[r].apply(this, e) : a && a[r] && a.shouldInitialize() ? a[r].apply(a, e) : void 0;
          }
        }]) && mt(e.prototype, n), o && mt(e, o), t;
      }();
      function gt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      function bt(t, e) {
        var n,
          o,
          i = t.parentElement(),
          r = document.body.createTextRange(),
          a = C.from(i.childNodes);
        for (n = 0; n < a.length; n++) if (!pt.isText(a[n])) {
          if (r.moveToElementText(a[n]), r.compareEndPoints("StartToStart", t) >= 0) break;
          o = a[n];
        }
        if (0 !== n && pt.isText(a[n - 1])) {
          var s = document.body.createTextRange(),
            l = null;
          s.moveToElementText(o || i), s.collapse(!o), l = o ? o.nextSibling : i.firstChild;
          var c = t.duplicate();
          c.setEndPoint("StartToStart", s);
          for (var u = c.text.replace(/[\r\n]/g, "").length; u > l.nodeValue.length && l.nextSibling;) u -= l.nodeValue.length, l = l.nextSibling;
          l.nodeValue;
          e && l.nextSibling && pt.isText(l.nextSibling) && u === l.nodeValue.length && (u -= l.nodeValue.length, l = l.nextSibling), i = l, n = u;
        }
        return {
          cont: i,
          offset: n
        };
      }
      function yt(t) {
        var e = document.body.createTextRange(),
          n = function t(e, n) {
            var o, i;
            if (pt.isText(e)) {
              var r = pt.listPrev(e, g.not(pt.isText)),
                a = C.last(r).previousSibling;
              o = a || e.parentNode, n += C.sum(C.tail(r), pt.nodeLength), i = !a;
            } else {
              if (o = e.childNodes[n] || e, pt.isText(o)) return t(o, 0);
              n = 0, i = !1;
            }
            return {
              node: o,
              collapseToStart: i,
              offset: n
            };
          }(t.node, t.offset);
        return e.moveToElementText(n.node), e.collapse(n.collapseToStart), e.moveStart("character", n.offset), e;
      }
      i.a.fn.extend({
        summernote: function summernote() {
          var t = i.a.type(C.head(arguments)),
            e = "string" === t,
            n = "object" === t,
            o = i.a.extend({}, i.a.summernote.options, n ? C.head(arguments) : {});
          o.langInfo = i.a.extend(!0, {}, i.a.summernote.lang["en-US"], i.a.summernote.lang[o.lang]), o.icons = i.a.extend(!0, {}, i.a.summernote.options.icons, o.icons), o.tooltip = "auto" === o.tooltip ? !m.isSupportTouch : o.tooltip, this.each(function (t, e) {
            var n = i()(e);
            if (!n.data("summernote")) {
              var r = new vt(n, o);
              n.data("summernote", r), n.data("summernote").triggerEvent("init", r.layoutInfo);
            }
          });
          var r = this.first();
          if (r.length) {
            var a = r.data("summernote");
            if (e) return a.invoke.apply(a, C.from(arguments));
            o.focus && a.invoke("editor.focus");
          }
          return this;
        }
      });
      var kt = function () {
          function t(e, n, o, i) {
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.sc = e, this.so = n, this.ec = o, this.eo = i, this.isOnEditable = this.makeIsOn(pt.isEditable), this.isOnList = this.makeIsOn(pt.isList), this.isOnAnchor = this.makeIsOn(pt.isAnchor), this.isOnCell = this.makeIsOn(pt.isCell), this.isOnData = this.makeIsOn(pt.isData);
          }
          var e, n, o;
          return e = t, (n = [{
            key: "nativeRange",
            value: function value() {
              if (m.isW3CRangeSupport) {
                var t = document.createRange();
                return t.setStart(this.sc, this.so), t.setEnd(this.ec, this.eo), t;
              }
              var e = yt({
                node: this.sc,
                offset: this.so
              });
              return e.setEndPoint("EndToEnd", yt({
                node: this.ec,
                offset: this.eo
              })), e;
            }
          }, {
            key: "getPoints",
            value: function value() {
              return {
                sc: this.sc,
                so: this.so,
                ec: this.ec,
                eo: this.eo
              };
            }
          }, {
            key: "getStartPoint",
            value: function value() {
              return {
                node: this.sc,
                offset: this.so
              };
            }
          }, {
            key: "getEndPoint",
            value: function value() {
              return {
                node: this.ec,
                offset: this.eo
              };
            }
          }, {
            key: "select",
            value: function value() {
              var t = this.nativeRange();
              if (m.isW3CRangeSupport) {
                var e = document.getSelection();
                e.rangeCount > 0 && e.removeAllRanges(), e.addRange(t);
              } else t.select();
              return this;
            }
          }, {
            key: "scrollIntoView",
            value: function value(t) {
              var e = i()(t).height();
              return t.scrollTop + e < this.sc.offsetTop && (t.scrollTop += Math.abs(t.scrollTop + e - this.sc.offsetTop)), this;
            }
          }, {
            key: "normalize",
            value: function value() {
              var e = function e(t, _e) {
                  if (!t) return t;
                  if (pt.isVisiblePoint(t) && (!pt.isEdgePoint(t) || pt.isRightEdgePoint(t) && !_e || pt.isLeftEdgePoint(t) && _e || pt.isRightEdgePoint(t) && _e && pt.isVoid(t.node.nextSibling) || pt.isLeftEdgePoint(t) && !_e && pt.isVoid(t.node.previousSibling) || pt.isBlock(t.node) && pt.isEmpty(t.node))) return t;
                  var n = pt.ancestor(t.node, pt.isBlock),
                    o = !1;
                  if (!o) {
                    var i = pt.prevPoint(t) || {
                      node: null
                    };
                    o = (pt.isLeftEdgePointOf(t, n) || pt.isVoid(i.node)) && !_e;
                  }
                  var r = !1;
                  if (!r) {
                    var a = pt.nextPoint(t) || {
                      node: null
                    };
                    r = (pt.isRightEdgePointOf(t, n) || pt.isVoid(a.node)) && _e;
                  }
                  if (o || r) {
                    if (pt.isVisiblePoint(t)) return t;
                    _e = !_e;
                  }
                  return (_e ? pt.nextPointUntil(pt.nextPoint(t), pt.isVisiblePoint) : pt.prevPointUntil(pt.prevPoint(t), pt.isVisiblePoint)) || t;
                },
                n = e(this.getEndPoint(), !1),
                o = this.isCollapsed() ? n : e(this.getStartPoint(), !0);
              return new t(o.node, o.offset, n.node, n.offset);
            }
          }, {
            key: "nodes",
            value: function value(t, e) {
              t = t || g.ok;
              var n = e && e.includeAncestor,
                o = e && e.fullyContains,
                i = this.getStartPoint(),
                r = this.getEndPoint(),
                a = [],
                s = [];
              return pt.walkPoint(i, r, function (e) {
                var i;
                pt.isEditable(e.node) || (o ? (pt.isLeftEdgePoint(e) && s.push(e.node), pt.isRightEdgePoint(e) && C.contains(s, e.node) && (i = e.node)) : i = n ? pt.ancestor(e.node, t) : e.node, i && t(i) && a.push(i));
              }, !0), C.unique(a);
            }
          }, {
            key: "commonAncestor",
            value: function value() {
              return pt.commonAncestor(this.sc, this.ec);
            }
          }, {
            key: "expand",
            value: function value(e) {
              var n = pt.ancestor(this.sc, e),
                o = pt.ancestor(this.ec, e);
              if (!n && !o) return new t(this.sc, this.so, this.ec, this.eo);
              var i = this.getPoints();
              return n && (i.sc = n, i.so = 0), o && (i.ec = o, i.eo = pt.nodeLength(o)), new t(i.sc, i.so, i.ec, i.eo);
            }
          }, {
            key: "collapse",
            value: function value(e) {
              return e ? new t(this.sc, this.so, this.sc, this.so) : new t(this.ec, this.eo, this.ec, this.eo);
            }
          }, {
            key: "splitText",
            value: function value() {
              var e = this.sc === this.ec,
                n = this.getPoints();
              return pt.isText(this.ec) && !pt.isEdgePoint(this.getEndPoint()) && this.ec.splitText(this.eo), pt.isText(this.sc) && !pt.isEdgePoint(this.getStartPoint()) && (n.sc = this.sc.splitText(this.so), n.so = 0, e && (n.ec = n.sc, n.eo = this.eo - this.so)), new t(n.sc, n.so, n.ec, n.eo);
            }
          }, {
            key: "deleteContents",
            value: function value() {
              if (this.isCollapsed()) return this;
              var e = this.splitText(),
                n = e.nodes(null, {
                  fullyContains: !0
                }),
                o = pt.prevPointUntil(e.getStartPoint(), function (t) {
                  return !C.contains(n, t.node);
                }),
                r = [];
              return i.a.each(n, function (t, e) {
                var n = e.parentNode;
                o.node !== n && 1 === pt.nodeLength(n) && r.push(n), pt.remove(e, !1);
              }), i.a.each(r, function (t, e) {
                pt.remove(e, !1);
              }), new t(o.node, o.offset, o.node, o.offset).normalize();
            }
          }, {
            key: "makeIsOn",
            value: function value(t) {
              return function () {
                var e = pt.ancestor(this.sc, t);
                return !!e && e === pt.ancestor(this.ec, t);
              };
            }
          }, {
            key: "isLeftEdgeOf",
            value: function value(t) {
              if (!pt.isLeftEdgePoint(this.getStartPoint())) return !1;
              var e = pt.ancestor(this.sc, t);
              return e && pt.isLeftEdgeOf(this.sc, e);
            }
          }, {
            key: "isCollapsed",
            value: function value() {
              return this.sc === this.ec && this.so === this.eo;
            }
          }, {
            key: "wrapBodyInlineWithPara",
            value: function value() {
              if (pt.isBodyContainer(this.sc) && pt.isEmpty(this.sc)) return this.sc.innerHTML = pt.emptyPara, new t(this.sc.firstChild, 0, this.sc.firstChild, 0);
              var e,
                n = this.normalize();
              if (pt.isParaInline(this.sc) || pt.isPara(this.sc)) return n;
              if (pt.isInline(n.sc)) {
                var o = pt.listAncestor(n.sc, g.not(pt.isInline));
                e = C.last(o), pt.isInline(e) || (e = o[o.length - 2] || n.sc.childNodes[n.so]);
              } else e = n.sc.childNodes[n.so > 0 ? n.so - 1 : 0];
              if (e) {
                var i = pt.listPrev(e, pt.isParaInline).reverse();
                if ((i = i.concat(pt.listNext(e.nextSibling, pt.isParaInline))).length) {
                  var r = pt.wrap(C.head(i), "p");
                  pt.appendChildNodes(r, C.tail(i));
                }
              }
              return this.normalize();
            }
          }, {
            key: "insertNode",
            value: function value(t) {
              var e = this;
              (pt.isText(t) || pt.isInline(t)) && (e = this.wrapBodyInlineWithPara().deleteContents());
              var n = pt.splitPoint(e.getStartPoint(), pt.isInline(t));
              return n.rightNode ? (n.rightNode.parentNode.insertBefore(t, n.rightNode), pt.isEmpty(n.rightNode) && pt.isPara(t) && n.rightNode.parentNode.removeChild(n.rightNode)) : n.container.appendChild(t), t;
            }
          }, {
            key: "pasteHTML",
            value: function value(t) {
              t = i.a.trim(t);
              var e = i()("<div></div>").html(t)[0],
                n = C.from(e.childNodes),
                o = this,
                r = !1;
              return o.so >= 0 && (n = n.reverse(), r = !0), n = n.map(function (t) {
                return o.insertNode(t);
              }), r && (n = n.reverse()), n;
            }
          }, {
            key: "toString",
            value: function value() {
              var t = this.nativeRange();
              return m.isW3CRangeSupport ? t.toString() : t.text;
            }
          }, {
            key: "getWordRange",
            value: function value(e) {
              var n = this.getEndPoint();
              if (!pt.isCharPoint(n)) return this;
              var o = pt.prevPointUntil(n, function (t) {
                return !pt.isCharPoint(t);
              });
              return e && (n = pt.nextPointUntil(n, function (t) {
                return !pt.isCharPoint(t);
              })), new t(o.node, o.offset, n.node, n.offset);
            }
          }, {
            key: "getWordsRange",
            value: function value(e) {
              var n = this.getEndPoint(),
                o = function o(t) {
                  return !pt.isCharPoint(t) && !pt.isSpacePoint(t);
                };
              if (o(n)) return this;
              var i = pt.prevPointUntil(n, o);
              return e && (n = pt.nextPointUntil(n, o)), new t(i.node, i.offset, n.node, n.offset);
            }
          }, {
            key: "getWordsMatchRange",
            value: function value(e) {
              var n = this.getEndPoint(),
                o = pt.prevPointUntil(n, function (o) {
                  if (!pt.isCharPoint(o) && !pt.isSpacePoint(o)) return !0;
                  var i = new t(o.node, o.offset, n.node, n.offset),
                    r = e.exec(i.toString());
                  return r && 0 === r.index;
                }),
                i = new t(o.node, o.offset, n.node, n.offset),
                r = i.toString(),
                a = e.exec(r);
              return a && a[0].length === r.length ? i : null;
            }
          }, {
            key: "bookmark",
            value: function value(t) {
              return {
                s: {
                  path: pt.makeOffsetPath(t, this.sc),
                  offset: this.so
                },
                e: {
                  path: pt.makeOffsetPath(t, this.ec),
                  offset: this.eo
                }
              };
            }
          }, {
            key: "paraBookmark",
            value: function value(t) {
              return {
                s: {
                  path: C.tail(pt.makeOffsetPath(C.head(t), this.sc)),
                  offset: this.so
                },
                e: {
                  path: C.tail(pt.makeOffsetPath(C.last(t), this.ec)),
                  offset: this.eo
                }
              };
            }
          }, {
            key: "getClientRects",
            value: function value() {
              return this.nativeRange().getClientRects();
            }
          }]) && gt(e.prototype, n), o && gt(e, o), t;
        }(),
        wt = {
          create: function create(t, e, n, o) {
            if (4 === arguments.length) return new kt(t, e, n, o);
            if (2 === arguments.length) return new kt(t, e, n = t, o = e);
            var i = this.createFromSelection();
            if (!i && 1 === arguments.length) {
              var r = arguments[0];
              return pt.isEditable(r) && (r = r.lastChild), this.createFromBodyElement(r, pt.emptyPara === arguments[0].innerHTML);
            }
            return i;
          },
          createFromBodyElement: function createFromBodyElement(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.createFromNode(t);
            return n.collapse(e);
          },
          createFromSelection: function createFromSelection() {
            var t, e, n, o;
            if (m.isW3CRangeSupport) {
              var i = document.getSelection();
              if (!i || 0 === i.rangeCount) return null;
              if (pt.isBody(i.anchorNode)) return null;
              var r = i.getRangeAt(0);
              t = r.startContainer, e = r.startOffset, n = r.endContainer, o = r.endOffset;
            } else {
              var a = document.selection.createRange(),
                s = a.duplicate();
              s.collapse(!1);
              var l = a;
              l.collapse(!0);
              var c = bt(l, !0),
                u = bt(s, !1);
              pt.isText(c.node) && pt.isLeftEdgePoint(c) && pt.isTextNode(u.node) && pt.isRightEdgePoint(u) && u.node.nextSibling === c.node && (c = u), t = c.cont, e = c.offset, n = u.cont, o = u.offset;
            }
            return new kt(t, e, n, o);
          },
          createFromNode: function createFromNode(t) {
            var e = t,
              n = 0,
              o = t,
              i = pt.nodeLength(o);
            return pt.isVoid(e) && (n = pt.listPrev(e).length - 1, e = e.parentNode), pt.isBR(o) ? (i = pt.listPrev(o).length - 1, o = o.parentNode) : pt.isVoid(o) && (i = pt.listPrev(o).length, o = o.parentNode), this.create(e, n, o, i);
          },
          createFromNodeBefore: function createFromNodeBefore(t) {
            return this.createFromNode(t).collapse(!0);
          },
          createFromNodeAfter: function createFromNodeAfter(t) {
            return this.createFromNode(t).collapse();
          },
          createFromBookmark: function createFromBookmark(t, e) {
            var n = pt.fromOffsetPath(t, e.s.path),
              o = e.s.offset,
              i = pt.fromOffsetPath(t, e.e.path),
              r = e.e.offset;
            return new kt(n, o, i, r);
          },
          createFromParaBookmark: function createFromParaBookmark(t, e) {
            var n = t.s.offset,
              o = t.e.offset,
              i = pt.fromOffsetPath(C.head(e), t.s.path),
              r = pt.fromOffsetPath(C.last(e), t.e.path);
            return new kt(i, n, r, o);
          }
        },
        Ct = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          SPACE: 32,
          DELETE: 46,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          NUM0: 48,
          NUM1: 49,
          NUM2: 50,
          NUM3: 51,
          NUM4: 52,
          NUM5: 53,
          NUM6: 54,
          NUM7: 55,
          NUM8: 56,
          B: 66,
          E: 69,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          R: 82,
          S: 83,
          U: 85,
          V: 86,
          Y: 89,
          Z: 90,
          SLASH: 191,
          LEFTBRACKET: 219,
          BACKSLASH: 220,
          RIGHTBRACKET: 221,
          HOME: 36,
          END: 35,
          PAGEUP: 33,
          PAGEDOWN: 34
        },
        xt = {
          isEdit: function isEdit(t) {
            return C.contains([Ct.BACKSPACE, Ct.TAB, Ct.ENTER, Ct.SPACE, Ct.DELETE], t);
          },
          isMove: function isMove(t) {
            return C.contains([Ct.LEFT, Ct.UP, Ct.RIGHT, Ct.DOWN], t);
          },
          isNavigation: function isNavigation(t) {
            return C.contains([Ct.HOME, Ct.END, Ct.PAGEUP, Ct.PAGEDOWN], t);
          },
          nameFromCode: g.invertObject(Ct),
          code: Ct
        };
      function St(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Tt = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.stack = [], this.stackOffset = -1, this.context = e, this.$editable = e.layoutInfo.editable, this.editable = this.$editable[0];
        }
        var e, n, o;
        return e = t, (n = [{
          key: "makeSnapshot",
          value: function value() {
            var t = wt.create(this.editable);
            return {
              contents: this.$editable.html(),
              bookmark: t && t.isOnEditable() ? t.bookmark(this.editable) : {
                s: {
                  path: [],
                  offset: 0
                },
                e: {
                  path: [],
                  offset: 0
                }
              }
            };
          }
        }, {
          key: "applySnapshot",
          value: function value(t) {
            null !== t.contents && this.$editable.html(t.contents), null !== t.bookmark && wt.createFromBookmark(this.editable, t.bookmark).select();
          }
        }, {
          key: "rewind",
          value: function value() {
            this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset = 0, this.applySnapshot(this.stack[this.stackOffset]);
          }
        }, {
          key: "commit",
          value: function value() {
            this.stack = [], this.stackOffset = -1, this.recordUndo();
          }
        }, {
          key: "reset",
          value: function value() {
            this.stack = [], this.stackOffset = -1, this.$editable.html(""), this.recordUndo();
          }
        }, {
          key: "undo",
          value: function value() {
            this.$editable.html() !== this.stack[this.stackOffset].contents && this.recordUndo(), this.stackOffset > 0 && (this.stackOffset--, this.applySnapshot(this.stack[this.stackOffset]));
          }
        }, {
          key: "redo",
          value: function value() {
            this.stack.length - 1 > this.stackOffset && (this.stackOffset++, this.applySnapshot(this.stack[this.stackOffset]));
          }
        }, {
          key: "recordUndo",
          value: function value() {
            this.stackOffset++, this.stack.length > this.stackOffset && (this.stack = this.stack.slice(0, this.stackOffset)), this.stack.push(this.makeSnapshot()), this.stack.length > this.context.options.historyLimit && (this.stack.shift(), this.stackOffset -= 1);
          }
        }]) && St(e.prototype, n), o && St(e, o), t;
      }();
      function Et(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var It = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "jQueryCSS",
          value: function value(t, e) {
            if (m.jqueryVersion < 1.9) {
              var n = {};
              return i.a.each(e, function (e, o) {
                n[o] = t.css(o);
              }), n;
            }
            return t.css(e);
          }
        }, {
          key: "fromNode",
          value: function value(t) {
            var e = this.jQueryCSS(t, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {},
              n = t[0].style.fontSize || e["font-size"];
            return e["font-size"] = parseInt(n, 10), e["font-size-unit"] = n.match(/[a-z%]+$/), e;
          }
        }, {
          key: "stylePara",
          value: function value(t, e) {
            i.a.each(t.nodes(pt.isPara, {
              includeAncestor: !0
            }), function (t, n) {
              i()(n).css(e);
            });
          }
        }, {
          key: "styleNodes",
          value: function value(t, e) {
            t = t.splitText();
            var n = e && e.nodeName || "SPAN",
              o = !(!e || !e.expandClosestSibling),
              r = !(!e || !e.onlyPartialContains);
            if (t.isCollapsed()) return [t.insertNode(pt.create(n))];
            var a = pt.makePredByNodeName(n),
              s = t.nodes(pt.isText, {
                fullyContains: !0
              }).map(function (t) {
                return pt.singleChildAncestor(t, a) || pt.wrap(t, n);
              });
            if (o) {
              if (r) {
                var l = t.nodes();
                a = g.and(a, function (t) {
                  return C.contains(l, t);
                });
              }
              return s.map(function (t) {
                var e = pt.withClosestSiblings(t, a),
                  n = C.head(e),
                  o = C.tail(e);
                return i.a.each(o, function (t, e) {
                  pt.appendChildNodes(n, e.childNodes), pt.remove(e);
                }), C.head(e);
              });
            }
            return s;
          }
        }, {
          key: "current",
          value: function value(t) {
            var e = i()(pt.isElement(t.sc) ? t.sc : t.sc.parentNode),
              n = this.fromNode(e);
            try {
              n = i.a.extend(n, {
                "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal",
                "font-family": document.queryCommandValue("fontname") || n["font-family"]
              });
            } catch (t) {}
            if (t.isOnList()) {
              var o = ["circle", "disc", "disc-leading-zero", "square"].indexOf(n["list-style-type"]) > -1;
              n["list-style"] = o ? "unordered" : "ordered";
            } else n["list-style"] = "none";
            var r = pt.ancestor(t.sc, pt.isPara);
            if (r && r.style["line-height"]) n["line-height"] = r.style.lineHeight;else {
              var a = parseInt(n["line-height"], 10) / parseInt(n["font-size"], 10);
              n["line-height"] = a.toFixed(1);
            }
            return n.anchor = t.isOnAnchor() && pt.ancestor(t.sc, pt.isAnchor), n.ancestors = pt.listAncestor(t.sc, pt.isEditable), n.range = t, n;
          }
        }]) && Et(e.prototype, n), o && Et(e, o), t;
      }();
      function $t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Nt = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "insertOrderedList",
          value: function value(t) {
            this.toggleList("OL", t);
          }
        }, {
          key: "insertUnorderedList",
          value: function value(t) {
            this.toggleList("UL", t);
          }
        }, {
          key: "indent",
          value: function value(t) {
            var e = this,
              n = wt.create(t).wrapBodyInlineWithPara(),
              o = n.nodes(pt.isPara, {
                includeAncestor: !0
              }),
              r = C.clusterBy(o, g.peq2("parentNode"));
            i.a.each(r, function (t, n) {
              var o = C.head(n);
              if (pt.isLi(o)) {
                var r = e.findList(o.previousSibling);
                r ? n.map(function (t) {
                  return r.appendChild(t);
                }) : (e.wrapList(n, o.parentNode.nodeName), n.map(function (t) {
                  return t.parentNode;
                }).map(function (t) {
                  return e.appendToPrevious(t);
                }));
              } else i.a.each(n, function (t, e) {
                i()(e).css("marginLeft", function (t, e) {
                  return (parseInt(e, 10) || 0) + 25;
                });
              });
            }), n.select();
          }
        }, {
          key: "outdent",
          value: function value(t) {
            var e = this,
              n = wt.create(t).wrapBodyInlineWithPara(),
              o = n.nodes(pt.isPara, {
                includeAncestor: !0
              }),
              r = C.clusterBy(o, g.peq2("parentNode"));
            i.a.each(r, function (t, n) {
              var o = C.head(n);
              pt.isLi(o) ? e.releaseList([n]) : i.a.each(n, function (t, e) {
                i()(e).css("marginLeft", function (t, e) {
                  return (e = parseInt(e, 10) || 0) > 25 ? e - 25 : "";
                });
              });
            }), n.select();
          }
        }, {
          key: "toggleList",
          value: function value(t, e) {
            var n = this,
              o = wt.create(e).wrapBodyInlineWithPara(),
              r = o.nodes(pt.isPara, {
                includeAncestor: !0
              }),
              a = o.paraBookmark(r),
              s = C.clusterBy(r, g.peq2("parentNode"));
            if (C.find(r, pt.isPurePara)) {
              var l = [];
              i.a.each(s, function (e, o) {
                l = l.concat(n.wrapList(o, t));
              }), r = l;
            } else {
              var c = o.nodes(pt.isList, {
                includeAncestor: !0
              }).filter(function (e) {
                return !i.a.nodeName(e, t);
              });
              c.length ? i.a.each(c, function (e, n) {
                pt.replace(n, t);
              }) : r = this.releaseList(s, !0);
            }
            wt.createFromParaBookmark(a, r).select();
          }
        }, {
          key: "wrapList",
          value: function value(t, e) {
            var n = C.head(t),
              o = C.last(t),
              i = pt.isList(n.previousSibling) && n.previousSibling,
              r = pt.isList(o.nextSibling) && o.nextSibling,
              a = i || pt.insertAfter(pt.create(e || "UL"), o);
            return t = t.map(function (t) {
              return pt.isPurePara(t) ? pt.replace(t, "LI") : t;
            }), pt.appendChildNodes(a, t), r && (pt.appendChildNodes(a, C.from(r.childNodes)), pt.remove(r)), t;
          }
        }, {
          key: "releaseList",
          value: function value(t, e) {
            var n = this,
              o = [];
            return i.a.each(t, function (t, r) {
              var a = C.head(r),
                s = C.last(r),
                l = e ? pt.lastAncestor(a, pt.isList) : a.parentNode,
                c = l.parentNode;
              if ("LI" === l.parentNode.nodeName) r.map(function (t) {
                var e = n.findNextSiblings(t);
                c.nextSibling ? c.parentNode.insertBefore(t, c.nextSibling) : c.parentNode.appendChild(t), e.length && (n.wrapList(e, l.nodeName), t.appendChild(e[0].parentNode));
              }), 0 === l.children.length && c.removeChild(l), 0 === c.childNodes.length && c.parentNode.removeChild(c);else {
                var u = l.childNodes.length > 1 ? pt.splitTree(l, {
                    node: s.parentNode,
                    offset: pt.position(s) + 1
                  }, {
                    isSkipPaddingBlankHTML: !0
                  }) : null,
                  d = pt.splitTree(l, {
                    node: a.parentNode,
                    offset: pt.position(a)
                  }, {
                    isSkipPaddingBlankHTML: !0
                  });
                r = e ? pt.listDescendant(d, pt.isLi) : C.from(d.childNodes).filter(pt.isLi), !e && pt.isList(l.parentNode) || (r = r.map(function (t) {
                  return pt.replace(t, "P");
                })), i.a.each(C.from(r).reverse(), function (t, e) {
                  pt.insertAfter(e, l);
                });
                var h = C.compact([l, d, u]);
                i.a.each(h, function (t, e) {
                  var n = [e].concat(pt.listDescendant(e, pt.isList));
                  i.a.each(n.reverse(), function (t, e) {
                    pt.nodeLength(e) || pt.remove(e, !0);
                  });
                });
              }
              o = o.concat(r);
            }), o;
          }
        }, {
          key: "appendToPrevious",
          value: function value(t) {
            return t.previousSibling ? pt.appendChildNodes(t.previousSibling, [t]) : this.wrapList([t], "LI");
          }
        }, {
          key: "findList",
          value: function value(t) {
            return t ? C.find(t.children, function (t) {
              return ["OL", "UL"].indexOf(t.nodeName) > -1;
            }) : null;
          }
        }, {
          key: "findNextSiblings",
          value: function value(t) {
            for (var e = []; t.nextSibling;) e.push(t.nextSibling), t = t.nextSibling;
            return e;
          }
        }]) && $t(e.prototype, n), o && $t(e, o), t;
      }();
      function Pt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Rt = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.bullet = new Nt(), this.options = e.options;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "insertTab",
          value: function value(t, e) {
            var n = pt.createText(new Array(e + 1).join(pt.NBSP_CHAR));
            (t = t.deleteContents()).insertNode(n, !0), (t = wt.create(n, e)).select();
          }
        }, {
          key: "insertParagraph",
          value: function value(t, e) {
            e = (e = (e = e || wt.create(t)).deleteContents()).wrapBodyInlineWithPara();
            var n,
              o = pt.ancestor(e.sc, pt.isPara);
            if (o) {
              if (pt.isLi(o) && (pt.isEmpty(o) || pt.deepestChildIsEmpty(o))) return void this.bullet.toggleList(o.parentNode.nodeName);
              var r = null;
              if (1 === this.options.blockquoteBreakingLevel ? r = pt.ancestor(o, pt.isBlockquote) : 2 === this.options.blockquoteBreakingLevel && (r = pt.lastAncestor(o, pt.isBlockquote)), r) {
                n = i()(pt.emptyPara)[0], pt.isRightEdgePoint(e.getStartPoint()) && pt.isBR(e.sc.nextSibling) && i()(e.sc.nextSibling).remove();
                var a = pt.splitTree(r, e.getStartPoint(), {
                  isDiscardEmptySplits: !0
                });
                a ? a.parentNode.insertBefore(n, a) : pt.insertAfter(n, r);
              } else {
                n = pt.splitTree(o, e.getStartPoint());
                var s = pt.listDescendant(o, pt.isEmptyAnchor);
                s = s.concat(pt.listDescendant(n, pt.isEmptyAnchor)), i.a.each(s, function (t, e) {
                  pt.remove(e);
                }), (pt.isHeading(n) || pt.isPre(n) || pt.isCustomStyleTag(n)) && pt.isEmpty(n) && (n = pt.replace(n, "p"));
              }
            } else {
              var l = e.sc.childNodes[e.so];
              n = i()(pt.emptyPara)[0], l ? e.sc.insertBefore(n, l) : e.sc.appendChild(n);
            }
            wt.create(n, 0).normalize().select().scrollIntoView(t);
          }
        }]) && Pt(e.prototype, n), o && Pt(e, o), t;
      }();
      function Lt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var At = function t(e, n, o, i) {
        var r = {
            colPos: 0,
            rowPos: 0
          },
          a = [],
          s = [];
        function l(t, e, n, o, i, r, s) {
          var l = {
            baseRow: n,
            baseCell: o,
            isRowSpan: i,
            isColSpan: r,
            isVirtual: s
          };
          a[t] || (a[t] = []), a[t][e] = l;
        }
        function c(t, e, n, o) {
          return {
            baseCell: t.baseCell,
            action: e,
            virtualTable: {
              rowIndex: n,
              cellIndex: o
            }
          };
        }
        function u(t, e) {
          if (!a[t]) return e;
          if (!a[t][e]) return e;
          for (var n = e; a[t][n];) if (n++, !a[t][n]) return n;
        }
        function d(t, e) {
          var n = u(t.rowIndex, e.cellIndex),
            o = e.colSpan > 1,
            i = e.rowSpan > 1,
            a = t.rowIndex === r.rowPos && e.cellIndex === r.colPos;
          l(t.rowIndex, n, t, e, i, o, !1);
          var s = e.attributes.rowSpan ? parseInt(e.attributes.rowSpan.value, 10) : 0;
          if (s > 1) for (var c = 1; c < s; c++) {
            var d = t.rowIndex + c;
            h(d, n, e, a), l(d, n, t, e, !0, o, !0);
          }
          var f = e.attributes.colSpan ? parseInt(e.attributes.colSpan.value, 10) : 0;
          if (f > 1) for (var p = 1; p < f; p++) {
            var m = u(t.rowIndex, n + p);
            h(t.rowIndex, m, e, a), l(t.rowIndex, m, t, e, i, !0, !0);
          }
        }
        function h(t, e, n, o) {
          t === r.rowPos && r.colPos >= n.cellIndex && n.cellIndex <= e && !o && r.colPos++;
        }
        function f(e) {
          switch (n) {
            case t.where.Column:
              if (e.isColSpan) return t.resultAction.SubtractSpanCount;
              break;
            case t.where.Row:
              if (!e.isVirtual && e.isRowSpan) return t.resultAction.AddCell;
              if (e.isRowSpan) return t.resultAction.SubtractSpanCount;
          }
          return t.resultAction.RemoveCell;
        }
        function p(e) {
          switch (n) {
            case t.where.Column:
              if (e.isColSpan) return t.resultAction.SumSpanCount;
              if (e.isRowSpan && e.isVirtual) return t.resultAction.Ignore;
              break;
            case t.where.Row:
              if (e.isRowSpan) return t.resultAction.SumSpanCount;
              if (e.isColSpan && e.isVirtual) return t.resultAction.Ignore;
          }
          return t.resultAction.AddCell;
        }
        this.getActionList = function () {
          for (var e = n === t.where.Row ? r.rowPos : -1, i = n === t.where.Column ? r.colPos : -1, l = 0, u = !0; u;) {
            var d = e >= 0 ? e : l,
              h = i >= 0 ? i : l,
              m = a[d];
            if (!m) return u = !1, s;
            var v = m[h];
            if (!v) return u = !1, s;
            var g = t.resultAction.Ignore;
            switch (o) {
              case t.requestAction.Add:
                g = p(v);
                break;
              case t.requestAction.Delete:
                g = f(v);
            }
            s.push(c(v, g, d, h)), l++;
          }
          return s;
        }, e && e.tagName && ("td" === e.tagName.toLowerCase() || "th" === e.tagName.toLowerCase()) && (r.colPos = e.cellIndex, e.parentElement && e.parentElement.tagName && "tr" === e.parentElement.tagName.toLowerCase() && (r.rowPos = e.parentElement.rowIndex)), function () {
          for (var t = i.rows, e = 0; e < t.length; e++) for (var n = t[e].cells, o = 0; o < n.length; o++) d(t[e], n[o]);
        }();
      };
      At.where = {
        Row: 0,
        Column: 1
      }, At.requestAction = {
        Add: 0,
        Delete: 1
      }, At.resultAction = {
        Ignore: 0,
        SubtractSpanCount: 1,
        RemoveCell: 2,
        AddCell: 3,
        SumSpanCount: 4
      };
      var Ft = function () {
        function t() {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "tab",
          value: function value(t, e) {
            var n = pt.ancestor(t.commonAncestor(), pt.isCell),
              o = pt.ancestor(n, pt.isTable),
              i = pt.listDescendant(o, pt.isCell),
              r = C[e ? "prev" : "next"](i, n);
            r && wt.create(r, 0).select();
          }
        }, {
          key: "addRow",
          value: function value(t, e) {
            for (var n = pt.ancestor(t.commonAncestor(), pt.isCell), o = i()(n).closest("tr"), r = this.recoverAttributes(o), a = i()("<tr" + r + "></tr>"), s = new At(n, At.where.Row, At.requestAction.Add, i()(o).closest("table")[0]).getActionList(), l = 0; l < s.length; l++) {
              var c = s[l],
                u = this.recoverAttributes(c.baseCell);
              switch (c.action) {
                case At.resultAction.AddCell:
                  a.append("<td" + u + ">" + pt.blank + "</td>");
                  break;
                case At.resultAction.SumSpanCount:
                  if ("top" === e && (c.baseCell.parent ? c.baseCell.closest("tr").rowIndex : 0) <= o[0].rowIndex) {
                    var d = i()("<div></div>").append(i()("<td" + u + ">" + pt.blank + "</td>").removeAttr("rowspan")).html();
                    a.append(d);
                    break;
                  }
                  var h = parseInt(c.baseCell.rowSpan, 10);
                  h++, c.baseCell.setAttribute("rowSpan", h);
              }
            }
            if ("top" === e) o.before(a);else {
              if (n.rowSpan > 1) {
                var f = o[0].rowIndex + (n.rowSpan - 2);
                return void i()(i()(o).parent().find("tr")[f]).after(i()(a));
              }
              o.after(a);
            }
          }
        }, {
          key: "addCol",
          value: function value(t, e) {
            var n = pt.ancestor(t.commonAncestor(), pt.isCell),
              o = i()(n).closest("tr");
            i()(o).siblings().push(o);
            for (var r = new At(n, At.where.Column, At.requestAction.Add, i()(o).closest("table")[0]).getActionList(), a = 0; a < r.length; a++) {
              var s = r[a],
                l = this.recoverAttributes(s.baseCell);
              switch (s.action) {
                case At.resultAction.AddCell:
                  "right" === e ? i()(s.baseCell).after("<td" + l + ">" + pt.blank + "</td>") : i()(s.baseCell).before("<td" + l + ">" + pt.blank + "</td>");
                  break;
                case At.resultAction.SumSpanCount:
                  if ("right" === e) {
                    var c = parseInt(s.baseCell.colSpan, 10);
                    c++, s.baseCell.setAttribute("colSpan", c);
                  } else i()(s.baseCell).before("<td" + l + ">" + pt.blank + "</td>");
              }
            }
          }
        }, {
          key: "recoverAttributes",
          value: function value(t) {
            var e = "";
            if (!t) return e;
            for (var n = t.attributes || [], o = 0; o < n.length; o++) "id" !== n[o].name.toLowerCase() && n[o].specified && (e += " " + n[o].name + "='" + n[o].value + "'");
            return e;
          }
        }, {
          key: "deleteRow",
          value: function value(t) {
            for (var e = pt.ancestor(t.commonAncestor(), pt.isCell), n = i()(e).closest("tr"), o = n.children("td, th").index(i()(e)), r = n[0].rowIndex, a = new At(e, At.where.Row, At.requestAction.Delete, i()(n).closest("table")[0]).getActionList(), s = 0; s < a.length; s++) if (a[s]) {
              var l = a[s].baseCell,
                c = a[s].virtualTable,
                u = l.rowSpan && l.rowSpan > 1,
                d = u ? parseInt(l.rowSpan, 10) : 0;
              switch (a[s].action) {
                case At.resultAction.Ignore:
                  continue;
                case At.resultAction.AddCell:
                  var h = n.next("tr")[0];
                  if (!h) continue;
                  var f = n[0].cells[o];
                  u && (d > 2 ? (d--, h.insertBefore(f, h.cells[o]), h.cells[o].setAttribute("rowSpan", d), h.cells[o].innerHTML = "") : 2 === d && (h.insertBefore(f, h.cells[o]), h.cells[o].removeAttribute("rowSpan"), h.cells[o].innerHTML = ""));
                  continue;
                case At.resultAction.SubtractSpanCount:
                  u && (d > 2 ? (d--, l.setAttribute("rowSpan", d), c.rowIndex !== r && l.cellIndex === o && (l.innerHTML = "")) : 2 === d && (l.removeAttribute("rowSpan"), c.rowIndex !== r && l.cellIndex === o && (l.innerHTML = "")));
                  continue;
                case At.resultAction.RemoveCell:
                  continue;
              }
            }
            n.remove();
          }
        }, {
          key: "deleteCol",
          value: function value(t) {
            for (var e = pt.ancestor(t.commonAncestor(), pt.isCell), n = i()(e).closest("tr"), o = n.children("td, th").index(i()(e)), r = new At(e, At.where.Column, At.requestAction.Delete, i()(n).closest("table")[0]).getActionList(), a = 0; a < r.length; a++) if (r[a]) switch (r[a].action) {
              case At.resultAction.Ignore:
                continue;
              case At.resultAction.SubtractSpanCount:
                var s = r[a].baseCell;
                if (s.colSpan && s.colSpan > 1) {
                  var l = s.colSpan ? parseInt(s.colSpan, 10) : 0;
                  l > 2 ? (l--, s.setAttribute("colSpan", l), s.cellIndex === o && (s.innerHTML = "")) : 2 === l && (s.removeAttribute("colSpan"), s.cellIndex === o && (s.innerHTML = ""));
                }
                continue;
              case At.resultAction.RemoveCell:
                pt.remove(r[a].baseCell, !0);
                continue;
            }
          }
        }, {
          key: "createTable",
          value: function value(t, e, n) {
            for (var o, r = [], a = 0; a < t; a++) r.push("<td>" + pt.blank + "</td>");
            o = r.join("");
            for (var s, l = [], c = 0; c < e; c++) l.push("<tr>" + o + "</tr>");
            s = l.join("");
            var u = i()("<table>" + s + "</table>");
            return n && n.tableClassName && u.addClass(n.tableClassName), u[0];
          }
        }, {
          key: "deleteTable",
          value: function value(t) {
            var e = pt.ancestor(t.commonAncestor(), pt.isCell);
            i()(e).closest("table").remove();
          }
        }]) && Lt(e.prototype, n), o && Lt(e, o), t;
      }();
      function Dt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Ht = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.editable = this.$editable[0], this.lastRange = null, this.snapshot = null, this.style = new It(), this.table = new Ft(), this.typing = new Rt(e), this.bullet = new Nt(), this.history = new Tt(e), this.context.memo("help.escape", this.lang.help.escape), this.context.memo("help.undo", this.lang.help.undo), this.context.memo("help.redo", this.lang.help.redo), this.context.memo("help.tab", this.lang.help.tab), this.context.memo("help.untab", this.lang.help.untab), this.context.memo("help.insertParagraph", this.lang.help.insertParagraph), this.context.memo("help.insertOrderedList", this.lang.help.insertOrderedList), this.context.memo("help.insertUnorderedList", this.lang.help.insertUnorderedList), this.context.memo("help.indent", this.lang.help.indent), this.context.memo("help.outdent", this.lang.help.outdent), this.context.memo("help.formatPara", this.lang.help.formatPara), this.context.memo("help.insertHorizontalRule", this.lang.help.insertHorizontalRule), this.context.memo("help.fontName", this.lang.help.fontName);
          for (var o = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor"], r = 0, a = o.length; r < a; r++) this[o[r]] = function (t) {
            return function (e) {
              n.beforeCommand(), document.execCommand(t, !1, e), n.afterCommand(!0);
            };
          }(o[r]), this.context.memo("help." + o[r], this.lang.help[o[r]]);
          this.fontName = this.wrapCommand(function (t) {
            return n.fontStyling("font-family", m.validFontName(t));
          }), this.fontSize = this.wrapCommand(function (t) {
            var e = n.currentStyle()["font-size-unit"];
            return n.fontStyling("font-size", t + e);
          }), this.fontSizeUnit = this.wrapCommand(function (t) {
            var e = n.currentStyle()["font-size"];
            return n.fontStyling("font-size", e + t);
          });
          for (var s = 1; s <= 6; s++) this["formatH" + s] = function (t) {
            return function () {
              n.formatBlock("H" + t);
            };
          }(s), this.context.memo("help.formatH" + s, this.lang.help["formatH" + s]);
          this.insertParagraph = this.wrapCommand(function () {
            n.typing.insertParagraph(n.editable);
          }), this.insertOrderedList = this.wrapCommand(function () {
            n.bullet.insertOrderedList(n.editable);
          }), this.insertUnorderedList = this.wrapCommand(function () {
            n.bullet.insertUnorderedList(n.editable);
          }), this.indent = this.wrapCommand(function () {
            n.bullet.indent(n.editable);
          }), this.outdent = this.wrapCommand(function () {
            n.bullet.outdent(n.editable);
          }), this.insertNode = this.wrapCommand(function (t) {
            n.isLimited(i()(t).text().length) || (n.getLastRange().insertNode(t), n.setLastRange(wt.createFromNodeAfter(t).select()));
          }), this.insertText = this.wrapCommand(function (t) {
            if (!n.isLimited(t.length)) {
              var e = n.getLastRange().insertNode(pt.createText(t));
              n.setLastRange(wt.create(e, pt.nodeLength(e)).select());
            }
          }), this.pasteHTML = this.wrapCommand(function (t) {
            if (!n.isLimited(t.length)) {
              t = n.context.invoke("codeview.purify", t);
              var e = n.getLastRange().pasteHTML(t);
              n.setLastRange(wt.createFromNodeAfter(C.last(e)).select());
            }
          }), this.formatBlock = this.wrapCommand(function (t, e) {
            var o = n.options.callbacks.onApplyCustomStyle;
            o ? o.call(n, e, n.context, n.onFormatBlock) : n.onFormatBlock(t, e);
          }), this.insertHorizontalRule = this.wrapCommand(function () {
            var t = n.getLastRange().insertNode(pt.create("HR"));
            t.nextSibling && n.setLastRange(wt.create(t.nextSibling, 0).normalize().select());
          }), this.lineHeight = this.wrapCommand(function (t) {
            n.style.stylePara(n.getLastRange(), {
              lineHeight: t
            });
          }), this.createLink = this.wrapCommand(function (t) {
            var e = t.url,
              o = t.text,
              r = t.isNewWindow,
              a = t.checkProtocol,
              s = t.range || n.getLastRange(),
              l = o.length - s.toString().length;
            if (!(l > 0 && n.isLimited(l))) {
              var c = s.toString() !== o;
              "string" == typeof e && (e = e.trim()), n.options.onCreateLink ? e = n.options.onCreateLink(e) : a && (e = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(e) ? e : n.options.defaultProtocol + e);
              var u = [];
              if (c) {
                var d = (s = s.deleteContents()).insertNode(i()("<A>" + o + "</A>")[0]);
                u.push(d);
              } else u = n.style.styleNodes(s, {
                nodeName: "A",
                expandClosestSibling: !0,
                onlyPartialContains: !0
              });
              i.a.each(u, function (t, n) {
                i()(n).attr("href", e), r ? i()(n).attr("target", "_blank") : i()(n).removeAttr("target");
              }), n.setLastRange(n.createRangeFromList(u).select());
            }
          }), this.color = this.wrapCommand(function (t) {
            var e = t.foreColor,
              n = t.backColor;
            e && document.execCommand("foreColor", !1, e), n && document.execCommand("backColor", !1, n);
          }), this.foreColor = this.wrapCommand(function (t) {
            document.execCommand("foreColor", !1, t);
          }), this.insertTable = this.wrapCommand(function (t) {
            var e = t.split("x");
            n.getLastRange().deleteContents().insertNode(n.table.createTable(e[0], e[1], n.options));
          }), this.removeMedia = this.wrapCommand(function () {
            var t = i()(n.restoreTarget()).parent();
            t.closest("figure").length ? t.closest("figure").remove() : t = i()(n.restoreTarget()).detach(), n.context.triggerEvent("media.delete", t, n.$editable);
          }), this.floatMe = this.wrapCommand(function (t) {
            var e = i()(n.restoreTarget());
            e.toggleClass("note-float-left", "left" === t), e.toggleClass("note-float-right", "right" === t), e.css("float", "none" === t ? "" : t);
          }), this.resize = this.wrapCommand(function (t) {
            var e = i()(n.restoreTarget());
            0 === (t = parseFloat(t)) ? e.css("width", "") : e.css({
              width: 100 * t + "%",
              height: ""
            });
          });
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = this;
            this.$editable.on("keydown", function (e) {
              if (e.keyCode === xt.code.ENTER && t.context.triggerEvent("enter", e), t.context.triggerEvent("keydown", e), t.snapshot = t.history.makeSnapshot(), t.hasKeyShortCut = !1, e.isDefaultPrevented() || (t.options.shortcuts ? t.hasKeyShortCut = t.handleKeyMap(e) : t.preventDefaultEditableShortCuts(e)), t.isLimited(1, e)) {
                var n = t.getLastRange();
                if (n.eo - n.so == 0) return !1;
              }
              t.setLastRange(), t.options.recordEveryKeystroke && !1 === t.hasKeyShortCut && t.history.recordUndo();
            }).on("keyup", function (e) {
              t.setLastRange(), t.context.triggerEvent("keyup", e);
            }).on("focus", function (e) {
              t.setLastRange(), t.context.triggerEvent("focus", e);
            }).on("blur", function (e) {
              t.context.triggerEvent("blur", e);
            }).on("mousedown", function (e) {
              t.context.triggerEvent("mousedown", e);
            }).on("mouseup", function (e) {
              t.setLastRange(), t.history.recordUndo(), t.context.triggerEvent("mouseup", e);
            }).on("scroll", function (e) {
              t.context.triggerEvent("scroll", e);
            }).on("paste", function (e) {
              t.setLastRange(), t.context.triggerEvent("paste", e);
            }).on("input", function () {
              t.isLimited(0) && t.snapshot && t.history.applySnapshot(t.snapshot);
            }), this.$editable.attr("spellcheck", this.options.spellCheck), this.$editable.attr("autocorrect", this.options.spellCheck), this.options.disableGrammar && this.$editable.attr("data-gramm", !1), this.$editable.html(pt.html(this.$note) || pt.emptyPara), this.$editable.on(m.inputEventName, g.debounce(function () {
              t.context.triggerEvent("change", t.$editable.html(), t.$editable);
            }, 10)), this.$editable.on("focusin", function (e) {
              t.context.triggerEvent("focusin", e);
            }).on("focusout", function (e) {
              t.context.triggerEvent("focusout", e);
            }), this.options.airMode ? this.options.overrideContextMenu && this.$editor.on("contextmenu", function (e) {
              return t.context.triggerEvent("contextmenu", e), !1;
            }) : (this.options.width && this.$editor.outerWidth(this.options.width), this.options.height && this.$editable.outerHeight(this.options.height), this.options.maxHeight && this.$editable.css("max-height", this.options.maxHeight), this.options.minHeight && this.$editable.css("min-height", this.options.minHeight)), this.history.recordUndo(), this.setLastRange();
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$editable.off();
          }
        }, {
          key: "handleKeyMap",
          value: function value(t) {
            var e = this.options.keyMap[m.isMac ? "mac" : "pc"],
              n = [];
            t.metaKey && n.push("CMD"), t.ctrlKey && !t.altKey && n.push("CTRL"), t.shiftKey && n.push("SHIFT");
            var o = xt.nameFromCode[t.keyCode];
            o && n.push(o);
            var i = e[n.join("+")];
            if ("TAB" !== o || this.options.tabDisable) {
              if (i) {
                if (!1 !== this.context.invoke(i)) return t.preventDefault(), !0;
              } else xt.isEdit(t.keyCode) && this.afterCommand();
            } else this.afterCommand();
            return !1;
          }
        }, {
          key: "preventDefaultEditableShortCuts",
          value: function value(t) {
            (t.ctrlKey || t.metaKey) && C.contains([66, 73, 85], t.keyCode) && t.preventDefault();
          }
        }, {
          key: "isLimited",
          value: function value(t, e) {
            return t = t || 0, (void 0 === e || !(xt.isMove(e.keyCode) || xt.isNavigation(e.keyCode) || e.ctrlKey || e.metaKey || C.contains([xt.code.BACKSPACE, xt.code.DELETE], e.keyCode))) && this.options.maxTextLength > 0 && this.$editable.text().length + t > this.options.maxTextLength;
          }
        }, {
          key: "createRange",
          value: function value() {
            return this.focus(), this.setLastRange(), this.getLastRange();
          }
        }, {
          key: "createRangeFromList",
          value: function value(t) {
            var e = wt.createFromNodeBefore(C.head(t)).getStartPoint(),
              n = wt.createFromNodeAfter(C.last(t)).getEndPoint();
            return wt.create(e.node, e.offset, n.node, n.offset);
          }
        }, {
          key: "setLastRange",
          value: function value(t) {
            t ? this.lastRange = t : (this.lastRange = wt.create(this.editable), 0 === i()(this.lastRange.sc).closest(".note-editable").length && (this.lastRange = wt.createFromBodyElement(this.editable)));
          }
        }, {
          key: "getLastRange",
          value: function value() {
            return this.lastRange || this.setLastRange(), this.lastRange;
          }
        }, {
          key: "saveRange",
          value: function value(t) {
            t && this.getLastRange().collapse().select();
          }
        }, {
          key: "restoreRange",
          value: function value() {
            this.lastRange && (this.lastRange.select(), this.focus());
          }
        }, {
          key: "saveTarget",
          value: function value(t) {
            this.$editable.data("target", t);
          }
        }, {
          key: "clearTarget",
          value: function value() {
            this.$editable.removeData("target");
          }
        }, {
          key: "restoreTarget",
          value: function value() {
            return this.$editable.data("target");
          }
        }, {
          key: "currentStyle",
          value: function value() {
            var t = wt.create();
            return t && (t = t.normalize()), t ? this.style.current(t) : this.style.fromNode(this.$editable);
          }
        }, {
          key: "styleFromNode",
          value: function value(t) {
            return this.style.fromNode(t);
          }
        }, {
          key: "undo",
          value: function value() {
            this.context.triggerEvent("before.command", this.$editable.html()), this.history.undo(), this.context.triggerEvent("change", this.$editable.html(), this.$editable);
          }
        }, {
          key: "commit",
          value: function value() {
            this.context.triggerEvent("before.command", this.$editable.html()), this.history.commit(), this.context.triggerEvent("change", this.$editable.html(), this.$editable);
          }
        }, {
          key: "redo",
          value: function value() {
            this.context.triggerEvent("before.command", this.$editable.html()), this.history.redo(), this.context.triggerEvent("change", this.$editable.html(), this.$editable);
          }
        }, {
          key: "beforeCommand",
          value: function value() {
            this.context.triggerEvent("before.command", this.$editable.html()), document.execCommand("styleWithCSS", !1, this.options.styleWithCSS), this.focus();
          }
        }, {
          key: "afterCommand",
          value: function value(t) {
            this.normalizeContent(), this.history.recordUndo(), t || this.context.triggerEvent("change", this.$editable.html(), this.$editable);
          }
        }, {
          key: "tab",
          value: function value() {
            var t = this.getLastRange();
            if (t.isCollapsed() && t.isOnCell()) this.table.tab(t);else {
              if (0 === this.options.tabSize) return !1;
              this.isLimited(this.options.tabSize) || (this.beforeCommand(), this.typing.insertTab(t, this.options.tabSize), this.afterCommand());
            }
          }
        }, {
          key: "untab",
          value: function value() {
            var t = this.getLastRange();
            if (t.isCollapsed() && t.isOnCell()) this.table.tab(t, !0);else if (0 === this.options.tabSize) return !1;
          }
        }, {
          key: "wrapCommand",
          value: function value(t) {
            return function () {
              this.beforeCommand(), t.apply(this, arguments), this.afterCommand();
            };
          }
        }, {
          key: "insertImage",
          value: function value(t, e) {
            var n,
              o = this;
            return (n = t, i.a.Deferred(function (t) {
              var e = i()("<img>");
              e.one("load", function () {
                e.off("error abort"), t.resolve(e);
              }).one("error abort", function () {
                e.off("load").detach(), t.reject(e);
              }).css({
                display: "none"
              }).appendTo(document.body).attr("src", n);
            }).promise()).then(function (t) {
              o.beforeCommand(), "function" == typeof e ? e(t) : ("string" == typeof e && t.attr("data-filename", e), t.css("width", Math.min(o.$editable.width(), t.width()))), t.show(), o.getLastRange().insertNode(t[0]), o.setLastRange(wt.createFromNodeAfter(t[0]).select()), o.afterCommand();
            }).fail(function (t) {
              o.context.triggerEvent("image.upload.error", t);
            });
          }
        }, {
          key: "insertImagesAsDataURL",
          value: function value(t) {
            var e = this;
            i.a.each(t, function (t, n) {
              var o = n.name;
              e.options.maximumImageFileSize && e.options.maximumImageFileSize < n.size ? e.context.triggerEvent("image.upload.error", e.lang.image.maximumFileSizeError) : function (t) {
                return i.a.Deferred(function (e) {
                  i.a.extend(new FileReader(), {
                    onload: function onload(t) {
                      var n = t.target.result;
                      e.resolve(n);
                    },
                    onerror: function onerror(t) {
                      e.reject(t);
                    }
                  }).readAsDataURL(t);
                }).promise();
              }(n).then(function (t) {
                return e.insertImage(t, o);
              }).fail(function () {
                e.context.triggerEvent("image.upload.error");
              });
            });
          }
        }, {
          key: "insertImagesOrCallback",
          value: function value(t) {
            this.options.callbacks.onImageUpload ? this.context.triggerEvent("image.upload", t) : this.insertImagesAsDataURL(t);
          }
        }, {
          key: "getSelectedText",
          value: function value() {
            var t = this.getLastRange();
            return t.isOnAnchor() && (t = wt.createFromNode(pt.ancestor(t.sc, pt.isAnchor))), t.toString();
          }
        }, {
          key: "onFormatBlock",
          value: function value(t, e) {
            if (document.execCommand("FormatBlock", !1, m.isMSIE ? "<" + t + ">" : t), e && e.length && (e[0].tagName.toUpperCase() !== t.toUpperCase() && (e = e.find(t)), e && e.length)) {
              var n = e[0].className || "";
              if (n) {
                var o = this.createRange();
                i()([o.sc, o.ec]).closest(t).addClass(n);
              }
            }
          }
        }, {
          key: "formatPara",
          value: function value() {
            this.formatBlock("P");
          }
        }, {
          key: "fontStyling",
          value: function value(t, e) {
            var n = this.getLastRange();
            if ("" !== n) {
              var o = this.style.styleNodes(n);
              if (this.$editor.find(".note-status-output").html(""), i()(o).css(t, e), n.isCollapsed()) {
                var r = C.head(o);
                r && !pt.nodeLength(r) && (r.innerHTML = pt.ZERO_WIDTH_NBSP_CHAR, wt.createFromNode(r.firstChild).select(), this.setLastRange(), this.$editable.data("bogus", r));
              } else this.setLastRange(this.createRangeFromList(o).select());
            } else {
              var a = i.a.now();
              this.$editor.find(".note-status-output").html('<div id="note-status-output-' + a + '" class="alert alert-info">' + this.lang.output.noSelection + "</div>"), setTimeout(function () {
                i()("#note-status-output-" + a).remove();
              }, 5e3);
            }
          }
        }, {
          key: "unlink",
          value: function value() {
            var t = this.getLastRange();
            if (t.isOnAnchor()) {
              var e = pt.ancestor(t.sc, pt.isAnchor);
              (t = wt.createFromNode(e)).select(), this.setLastRange(), this.beforeCommand(), document.execCommand("unlink"), this.afterCommand();
            }
          }
        }, {
          key: "getLinkInfo",
          value: function value() {
            var t = this.getLastRange().expand(pt.isAnchor),
              e = i()(C.head(t.nodes(pt.isAnchor))),
              n = {
                range: t,
                text: t.toString(),
                url: e.length ? e.attr("href") : ""
              };
            return e.length && (n.isNewWindow = "_blank" === e.attr("target")), n;
          }
        }, {
          key: "addRow",
          value: function value(t) {
            var e = this.getLastRange(this.$editable);
            e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.addRow(e, t), this.afterCommand());
          }
        }, {
          key: "addCol",
          value: function value(t) {
            var e = this.getLastRange(this.$editable);
            e.isCollapsed() && e.isOnCell() && (this.beforeCommand(), this.table.addCol(e, t), this.afterCommand());
          }
        }, {
          key: "deleteRow",
          value: function value() {
            var t = this.getLastRange(this.$editable);
            t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteRow(t), this.afterCommand());
          }
        }, {
          key: "deleteCol",
          value: function value() {
            var t = this.getLastRange(this.$editable);
            t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteCol(t), this.afterCommand());
          }
        }, {
          key: "deleteTable",
          value: function value() {
            var t = this.getLastRange(this.$editable);
            t.isCollapsed() && t.isOnCell() && (this.beforeCommand(), this.table.deleteTable(t), this.afterCommand());
          }
        }, {
          key: "resizeTo",
          value: function value(t, e, n) {
            var o;
            if (n) {
              var i = t.y / t.x,
                r = e.data("ratio");
              o = {
                width: r > i ? t.x : t.y / r,
                height: r > i ? t.x * r : t.y
              };
            } else o = {
              width: t.x,
              height: t.y
            };
            e.css(o);
          }
        }, {
          key: "hasFocus",
          value: function value() {
            return this.$editable.is(":focus");
          }
        }, {
          key: "focus",
          value: function value() {
            this.hasFocus() || this.$editable.focus();
          }
        }, {
          key: "isEmpty",
          value: function value() {
            return pt.isEmpty(this.$editable[0]) || pt.emptyPara === this.$editable.html();
          }
        }, {
          key: "empty",
          value: function value() {
            this.context.invoke("code", pt.emptyPara);
          }
        }, {
          key: "normalizeContent",
          value: function value() {
            this.$editable[0].normalize();
          }
        }]) && Dt(e.prototype, n), o && Dt(e, o), t;
      }();
      function zt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Bt = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$editable = e.layoutInfo.editable;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            this.$editable.on("paste", this.pasteByEvent.bind(this));
          }
        }, {
          key: "pasteByEvent",
          value: function value(t) {
            var e = this,
              n = t.originalEvent.clipboardData;
            if (n && n.items && n.items.length) {
              var o = n.items.length > 1 ? n.items[1] : C.head(n.items);
              "file" === o.kind && -1 !== o.type.indexOf("image/") ? (this.context.invoke("editor.insertImagesOrCallback", [o.getAsFile()]), t.preventDefault()) : "string" === o.kind && this.context.invoke("editor.isLimited", n.getData("Text").length) && t.preventDefault();
            } else if (window.clipboardData) {
              var i = window.clipboardData.getData("text");
              this.context.invoke("editor.isLimited", i.length) && t.preventDefault();
            }
            setTimeout(function () {
              e.context.invoke("editor.afterCommand");
            }, 10);
          }
        }]) && zt(e.prototype, n), o && zt(e, o), t;
      }();
      function Mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Ot = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$eventListener = i()(document), this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.options = e.options, this.lang = this.options.langInfo, this.documentEventHandlers = {}, this.$dropzone = i()(['<div class="note-dropzone">', '<div class="note-dropzone-message"></div>', "</div>"].join("")).prependTo(this.$editor);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            this.options.disableDragAndDrop ? (this.documentEventHandlers.onDrop = function (t) {
              t.preventDefault();
            }, this.$eventListener = this.$dropzone, this.$eventListener.on("drop", this.documentEventHandlers.onDrop)) : this.attachDragAndDropEvent();
          }
        }, {
          key: "attachDragAndDropEvent",
          value: function value() {
            var t = this,
              e = i()(),
              n = this.$dropzone.find(".note-dropzone-message");
            this.documentEventHandlers.onDragenter = function (o) {
              var i = t.context.invoke("codeview.isActivated"),
                r = t.$editor.width() > 0 && t.$editor.height() > 0;
              i || e.length || !r || (t.$editor.addClass("dragover"), t.$dropzone.width(t.$editor.width()), t.$dropzone.height(t.$editor.height()), n.text(t.lang.image.dragImageHere)), e = e.add(o.target);
            }, this.documentEventHandlers.onDragleave = function (n) {
              (e = e.not(n.target)).length && "BODY" !== n.target.nodeName || (e = i()(), t.$editor.removeClass("dragover"));
            }, this.documentEventHandlers.onDrop = function () {
              e = i()(), t.$editor.removeClass("dragover");
            }, this.$eventListener.on("dragenter", this.documentEventHandlers.onDragenter).on("dragleave", this.documentEventHandlers.onDragleave).on("drop", this.documentEventHandlers.onDrop), this.$dropzone.on("dragenter", function () {
              t.$dropzone.addClass("hover"), n.text(t.lang.image.dropImage);
            }).on("dragleave", function () {
              t.$dropzone.removeClass("hover"), n.text(t.lang.image.dragImageHere);
            }), this.$dropzone.on("drop", function (e) {
              var n = e.originalEvent.dataTransfer;
              e.preventDefault(), n && n.files && n.files.length ? (t.$editable.focus(), t.context.invoke("editor.insertImagesOrCallback", n.files)) : i.a.each(n.types, function (e, o) {
                if (!(o.toLowerCase().indexOf("_moz_") > -1)) {
                  var r = n.getData(o);
                  o.toLowerCase().indexOf("text") > -1 ? t.context.invoke("editor.pasteHTML", r) : i()(r).each(function (e, n) {
                    t.context.invoke("editor.insertNode", n);
                  });
                }
              });
            }).on("dragover", !1);
          }
        }, {
          key: "destroy",
          value: function value() {
            var t = this;
            Object.keys(this.documentEventHandlers).forEach(function (e) {
              t.$eventListener.off(e.substr(2).toLowerCase(), t.documentEventHandlers[e]);
            }), this.documentEventHandlers = {};
          }
        }]) && Mt(e.prototype, n), o && Mt(e, o), t;
      }();
      function jt(t) {
        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
          if (Array.isArray(t) || (t = function (t, e) {
            if (!t) return;
            if ("string" == typeof t) return Ut(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === n && t.constructor && (n = t.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ut(t, e);
          }(t))) {
            var e = 0,
              n = function n() {};
            return {
              s: n,
              n: function n() {
                return e >= t.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: t[e++]
                };
              },
              e: function e(t) {
                throw t;
              },
              f: n
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        var o,
          i,
          r = !0,
          a = !1;
        return {
          s: function s() {
            o = t[Symbol.iterator]();
          },
          n: function n() {
            var t = o.next();
            return r = t.done, t;
          },
          e: function e(t) {
            a = !0, i = t;
          },
          f: function f() {
            try {
              r || null == o["return"] || o["return"]();
            } finally {
              if (a) throw i;
            }
          }
        };
      }
      function Ut(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }
      function Wt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Kt = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$editor = e.layoutInfo.editor, this.$editable = e.layoutInfo.editable, this.$codable = e.layoutInfo.codable, this.options = e.options, this.CodeMirrorConstructor = window.CodeMirror, this.options.codemirror.CodeMirrorConstructor && (this.CodeMirrorConstructor = this.options.codemirror.CodeMirrorConstructor);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "sync",
          value: function value(t) {
            var e = this.isActivated(),
              n = this.CodeMirrorConstructor;
            e && (t ? n ? this.$codable.data("cmEditor").getDoc().setValue(t) : this.$codable.val(t) : n && this.$codable.data("cmEditor").save());
          }
        }, {
          key: "initialize",
          value: function value() {
            var t = this;
            this.$codable.on("keyup", function (e) {
              e.keyCode === xt.code.ESCAPE && t.deactivate();
            });
          }
        }, {
          key: "isActivated",
          value: function value() {
            return this.$editor.hasClass("codeview");
          }
        }, {
          key: "toggle",
          value: function value() {
            this.isActivated() ? this.deactivate() : this.activate(), this.context.triggerEvent("codeview.toggled");
          }
        }, {
          key: "purify",
          value: function value(t) {
            if (this.options.codeviewFilter && (t = t.replace(this.options.codeviewFilterRegex, ""), this.options.codeviewIframeFilter)) {
              var e = this.options.codeviewIframeWhitelistSrc.concat(this.options.codeviewIframeWhitelistSrcBase);
              t = t.replace(/(<iframe.*?>.*?(?:<\/iframe>)?)/gi, function (t) {
                if (/<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(t)) return "";
                var n,
                  o = jt(e);
                try {
                  for (o.s(); !(n = o.n()).done;) {
                    var i = n.value;
                    if (new RegExp('src="(https?:)?//' + i.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") + '/(.+)"').test(t)) return t;
                  }
                } catch (t) {
                  o.e(t);
                } finally {
                  o.f();
                }
                return "";
              });
            }
            return t;
          }
        }, {
          key: "activate",
          value: function value() {
            var t = this,
              e = this.CodeMirrorConstructor;
            if (this.$codable.val(pt.html(this.$editable, this.options.prettifyHtml)), this.$codable.height(this.$editable.height()), this.context.invoke("toolbar.updateCodeview", !0), this.context.invoke("airPopover.updateCodeview", !0), this.$editor.addClass("codeview"), this.$codable.focus(), e) {
              var n = e.fromTextArea(this.$codable[0], this.options.codemirror);
              if (this.options.codemirror.tern) {
                var o = new e.TernServer(this.options.codemirror.tern);
                n.ternServer = o, n.on("cursorActivity", function (t) {
                  o.updateArgHints(t);
                });
              }
              n.on("blur", function (e) {
                t.context.triggerEvent("blur.codeview", n.getValue(), e);
              }), n.on("change", function () {
                t.context.triggerEvent("change.codeview", n.getValue(), n);
              }), n.setSize(null, this.$editable.outerHeight()), this.$codable.data("cmEditor", n);
            } else this.$codable.on("blur", function (e) {
              t.context.triggerEvent("blur.codeview", t.$codable.val(), e);
            }), this.$codable.on("input", function () {
              t.context.triggerEvent("change.codeview", t.$codable.val(), t.$codable);
            });
          }
        }, {
          key: "deactivate",
          value: function value() {
            if (this.CodeMirrorConstructor) {
              var t = this.$codable.data("cmEditor");
              this.$codable.val(t.getValue()), t.toTextArea();
            }
            var e = this.purify(pt.value(this.$codable, this.options.prettifyHtml) || pt.emptyPara),
              n = this.$editable.html() !== e;
            this.$editable.html(e), this.$editable.height(this.options.height ? this.$codable.height() : "auto"), this.$editor.removeClass("codeview"), n && this.context.triggerEvent("change", this.$editable.html(), this.$editable), this.$editable.focus(), this.context.invoke("toolbar.updateCodeview", !1), this.context.invoke("airPopover.updateCodeview", !1);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.isActivated() && this.deactivate();
          }
        }]) && Wt(e.prototype, n), o && Wt(e, o), t;
      }();
      function qt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Vt = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.$document = i()(document), this.$statusbar = e.layoutInfo.statusbar, this.$editable = e.layoutInfo.editable, this.options = e.options;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = this;
            this.options.airMode || this.options.disableResizeEditor ? this.destroy() : this.$statusbar.on("mousedown", function (e) {
              e.preventDefault(), e.stopPropagation();
              var n = t.$editable.offset().top - t.$document.scrollTop(),
                o = function o(e) {
                  var o = e.clientY - (n + 24);
                  o = t.options.minheight > 0 ? Math.max(o, t.options.minheight) : o, o = t.options.maxHeight > 0 ? Math.min(o, t.options.maxHeight) : o, t.$editable.height(o);
                };
              t.$document.on("mousemove", o).one("mouseup", function () {
                t.$document.off("mousemove", o);
              });
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$statusbar.off(), this.$statusbar.addClass("locked");
          }
        }]) && qt(e.prototype, n), o && qt(e, o), t;
      }();
      function _t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Gt = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.$editable = e.layoutInfo.editable, this.$codable = e.layoutInfo.codable, this.$window = i()(window), this.$scrollbar = i()("html, body"), this.onResize = function () {
            n.resizeTo({
              h: n.$window.height() - n.$toolbar.outerHeight()
            });
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "resizeTo",
          value: function value(t) {
            this.$editable.css("height", t.h), this.$codable.css("height", t.h), this.$codable.data("cmeditor") && this.$codable.data("cmeditor").setsize(null, t.h);
          }
        }, {
          key: "toggle",
          value: function value() {
            this.$editor.toggleClass("fullscreen"), this.isFullscreen() ? (this.$editable.data("orgHeight", this.$editable.css("height")), this.$editable.data("orgMaxHeight", this.$editable.css("maxHeight")), this.$editable.css("maxHeight", ""), this.$window.on("resize", this.onResize).trigger("resize"), this.$scrollbar.css("overflow", "hidden")) : (this.$window.off("resize", this.onResize), this.resizeTo({
              h: this.$editable.data("orgHeight")
            }), this.$editable.css("maxHeight", this.$editable.css("orgMaxHeight")), this.$scrollbar.css("overflow", "visible")), this.context.invoke("toolbar.updateFullscreen", this.isFullscreen());
          }
        }, {
          key: "isFullscreen",
          value: function value() {
            return this.$editor.hasClass("fullscreen");
          }
        }]) && _t(e.prototype, n), o && _t(e, o), t;
      }();
      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Zt = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$document = i()(document), this.$editingArea = e.layoutInfo.editingArea, this.options = e.options, this.lang = this.options.langInfo, this.events = {
            "summernote.mousedown": function summernoteMousedown(t, e) {
              n.update(e.target, e) && e.preventDefault();
            },
            "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function summernoteKeyup_summernoteScroll_summernoteChange_summernoteDialogShown() {
              n.update();
            },
            "summernote.disable summernote.blur": function summernoteDisable_summernoteBlur() {
              n.hide();
            },
            "summernote.codeview.toggled": function summernoteCodeviewToggled() {
              n.update();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = this;
            this.$handle = i()(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', this.options.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', this.options.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(this.$editingArea), this.$handle.on("mousedown", function (e) {
              if (pt.isControlSizing(e.target)) {
                e.preventDefault(), e.stopPropagation();
                var n = t.$handle.find(".note-control-selection").data("target"),
                  o = n.offset(),
                  i = t.$document.scrollTop(),
                  r = function r(e) {
                    t.context.invoke("editor.resizeTo", {
                      x: e.clientX - o.left,
                      y: e.clientY - (o.top - i)
                    }, n, !e.shiftKey), t.update(n[0], e);
                  };
                t.$document.on("mousemove", r).one("mouseup", function (e) {
                  e.preventDefault(), t.$document.off("mousemove", r), t.context.invoke("editor.afterCommand");
                }), n.data("ratio") || n.data("ratio", n.height() / n.width());
              }
            }), this.$handle.on("wheel", function (e) {
              e.preventDefault(), t.update();
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$handle.remove();
          }
        }, {
          key: "update",
          value: function value(t, e) {
            if (this.context.isDisabled()) return !1;
            var n = pt.isImg(t),
              o = this.$handle.find(".note-control-selection");
            if (this.context.invoke("imagePopover.update", t, e), n) {
              var r = i()(t),
                a = r.position(),
                s = {
                  left: a.left + parseInt(r.css("marginLeft"), 10),
                  top: a.top + parseInt(r.css("marginTop"), 10)
                },
                l = {
                  w: r.outerWidth(!1),
                  h: r.outerHeight(!1)
                };
              o.css({
                display: "block",
                left: s.left,
                top: s.top,
                width: l.w,
                height: l.h
              }).data("target", r);
              var c = new Image();
              c.src = r.attr("src");
              var u = l.w + "x" + l.h + " (" + this.lang.image.original + ": " + c.width + "x" + c.height + ")";
              o.find(".note-control-selection-info").text(u), this.context.invoke("editor.saveTarget", t);
            } else this.hide();
            return n;
          }
        }, {
          key: "hide",
          value: function value() {
            this.context.invoke("editor.clearTarget"), this.$handle.children().hide();
          }
        }]) && Yt(e.prototype, n), o && Yt(e, o), t;
      }();
      function Xt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Qt = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
        Jt = function () {
          function t(e) {
            var n = this;
            !function (t, e) {
              if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
            }(this, t), this.context = e, this.options = e.options, this.events = {
              "summernote.keyup": function summernoteKeyup(t, e) {
                e.isDefaultPrevented() || n.handleKeyup(e);
              },
              "summernote.keydown": function summernoteKeydown(t, e) {
                n.handleKeydown(e);
              }
            };
          }
          var e, n, o;
          return e = t, (n = [{
            key: "initialize",
            value: function value() {
              this.lastWordRange = null;
            }
          }, {
            key: "destroy",
            value: function value() {
              this.lastWordRange = null;
            }
          }, {
            key: "replace",
            value: function value() {
              if (this.lastWordRange) {
                var t = this.lastWordRange.toString(),
                  e = t.match(Qt);
                if (e && (e[1] || e[2])) {
                  var n = e[1] ? t : "http://" + t,
                    o = this.options.showDomainOnlyForAutolink ? t.replace(/^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i, "").split("/")[0] : t,
                    r = i()("<a />").html(o).attr("href", n)[0];
                  this.context.options.linkTargetBlank && i()(r).attr("target", "_blank"), this.lastWordRange.insertNode(r), this.lastWordRange = null, this.context.invoke("editor.focus");
                }
              }
            }
          }, {
            key: "handleKeydown",
            value: function value(t) {
              if (C.contains([xt.code.ENTER, xt.code.SPACE], t.keyCode)) {
                var e = this.context.invoke("editor.createRange").getWordRange();
                this.lastWordRange = e;
              }
            }
          }, {
            key: "handleKeyup",
            value: function value(t) {
              C.contains([xt.code.ENTER, xt.code.SPACE], t.keyCode) && this.replace();
            }
          }]) && Xt(e.prototype, n), o && Xt(e, o), t;
        }();
      function te(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var ee = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.$note = e.layoutInfo.note, this.events = {
            "summernote.change": function summernoteChange() {
              n.$note.val(e.invoke("code"));
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return pt.isTextarea(this.$note[0]);
          }
        }]) && te(e.prototype, n), o && te(e, o), t;
      }();
      function ne(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var oe = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.options = e.options.replace || {}, this.keys = [xt.code.ENTER, xt.code.SPACE, xt.code.PERIOD, xt.code.COMMA, xt.code.SEMICOLON, xt.code.SLASH], this.previousKeydownCode = null, this.events = {
            "summernote.keyup": function summernoteKeyup(t, e) {
              e.isDefaultPrevented() || n.handleKeyup(e);
            },
            "summernote.keydown": function summernoteKeydown(t, e) {
              n.handleKeydown(e);
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return !!this.options.match;
          }
        }, {
          key: "initialize",
          value: function value() {
            this.lastWord = null;
          }
        }, {
          key: "destroy",
          value: function value() {
            this.lastWord = null;
          }
        }, {
          key: "replace",
          value: function value() {
            if (this.lastWord) {
              var t = this,
                e = this.lastWord.toString();
              this.options.match(e, function (e) {
                if (e) {
                  var n = "";
                  if ("string" == typeof e ? n = pt.createText(e) : e instanceof jQuery ? n = e[0] : e instanceof Node && (n = e), !n) return;
                  t.lastWord.insertNode(n), t.lastWord = null, t.context.invoke("editor.focus");
                }
              });
            }
          }
        }, {
          key: "handleKeydown",
          value: function value(t) {
            if (this.previousKeydownCode && C.contains(this.keys, this.previousKeydownCode)) this.previousKeydownCode = t.keyCode;else {
              if (C.contains(this.keys, t.keyCode)) {
                var e = this.context.invoke("editor.createRange").getWordRange();
                this.lastWord = e;
              }
              this.previousKeydownCode = t.keyCode;
            }
          }
        }, {
          key: "handleKeyup",
          value: function value(t) {
            C.contains(this.keys, t.keyCode) && this.replace();
          }
        }]) && ne(e.prototype, n), o && ne(e, o), t;
      }();
      function ie(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var re = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$editingArea = e.layoutInfo.editingArea, this.options = e.options, !0 === this.options.inheritPlaceholder && (this.options.placeholder = this.context.$note.attr("placeholder") || this.options.placeholder), this.events = {
            "summernote.init summernote.change": function summernoteInit_summernoteChange() {
              n.update();
            },
            "summernote.codeview.toggled": function summernoteCodeviewToggled() {
              n.update();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return !!this.options.placeholder;
          }
        }, {
          key: "initialize",
          value: function value() {
            var t = this;
            this.$placeholder = i()('<div class="note-placeholder">'), this.$placeholder.on("click", function () {
              t.context.invoke("focus");
            }).html(this.options.placeholder).prependTo(this.$editingArea), this.update();
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$placeholder.remove();
          }
        }, {
          key: "update",
          value: function value() {
            var t = !this.context.invoke("codeview.isActivated") && this.context.invoke("editor.isEmpty");
            this.$placeholder.toggle(t);
          }
        }]) && ie(e.prototype, n), o && ie(e, o), t;
      }();
      function ae(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var se = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.ui = i.a.summernote.ui, this.context = e, this.$toolbar = e.layoutInfo.toolbar, this.options = e.options, this.lang = this.options.langInfo, this.invertedKeyMap = g.invertObject(this.options.keyMap[m.isMac ? "mac" : "pc"]);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "representShortcut",
          value: function value(t) {
            var e = this.invertedKeyMap[t];
            return this.options.shortcuts && e ? (m.isMac && (e = e.replace("CMD", "⌘").replace("SHIFT", "⇧")), " (" + (e = e.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : "";
          }
        }, {
          key: "button",
          value: function value(t) {
            return !this.options.tooltip && t.tooltip && delete t.tooltip, t.container = this.options.container, this.ui.button(t);
          }
        }, {
          key: "initialize",
          value: function value() {
            this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.addTablePopoverButtons(), this.fontInstalledMap = {};
          }
        }, {
          key: "destroy",
          value: function value() {
            delete this.fontInstalledMap;
          }
        }, {
          key: "isFontInstalled",
          value: function value(t) {
            return Object.prototype.hasOwnProperty.call(this.fontInstalledMap, t) || (this.fontInstalledMap[t] = m.isFontInstalled(t) || C.contains(this.options.fontNamesIgnoreCheck, t)), this.fontInstalledMap[t];
          }
        }, {
          key: "isFontDeservedToAdd",
          value: function value(t) {
            return "" !== (t = t.toLowerCase()) && this.isFontInstalled(t) && -1 === m.genericFontFamilies.indexOf(t);
          }
        }, {
          key: "colorPalette",
          value: function value(t, e, n, o) {
            var r = this;
            return this.ui.buttonGroup({
              className: "note-color " + t,
              children: [this.button({
                className: "note-current-color-button",
                contents: this.ui.icon(this.options.icons.font + " note-recent-color"),
                tooltip: e,
                click: function click(t) {
                  var e = i()(t.currentTarget);
                  n && o ? r.context.invoke("editor.color", {
                    backColor: e.attr("data-backColor"),
                    foreColor: e.attr("data-foreColor")
                  }) : n ? r.context.invoke("editor.color", {
                    backColor: e.attr("data-backColor")
                  }) : o && r.context.invoke("editor.color", {
                    foreColor: e.attr("data-foreColor")
                  });
                },
                callback: function callback(t) {
                  var e = t.find(".note-recent-color");
                  n && (e.css("background-color", r.options.colorButton.backColor), t.attr("data-backColor", r.options.colorButton.backColor)), o ? (e.css("color", r.options.colorButton.foreColor), t.attr("data-foreColor", r.options.colorButton.foreColor)) : e.css("color", "transparent");
                }
              }), this.button({
                className: "dropdown-toggle",
                contents: this.ui.dropdownButtonContents("", this.options),
                tooltip: this.lang.color.more,
                data: {
                  toggle: "dropdown"
                }
              }), this.ui.dropdown({
                items: (n ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.background + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">', this.lang.color.transparent, "</button>", "</div>", '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker">', this.lang.color.cpSelect, "</button>", '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.backColor + '" data-event="backColorPalette">', "</div>", '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"></div>', "</div>"].join("") : "") + (o ? ['<div class="note-palette">', '<div class="note-palette-title">' + this.lang.color.foreground + "</div>", "<div>", '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">', this.lang.color.resetToDefault, "</button>", "</div>", '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>', "<div>", '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker">', this.lang.color.cpSelect, "</button>", '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' + this.options.colorButton.foreColor + '" data-event="foreColorPalette">', "</div>", '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"></div>', "</div>"].join("") : ""),
                callback: function callback(t) {
                  t.find(".note-holder").each(function (t, e) {
                    var n = i()(e);
                    n.append(r.ui.palette({
                      colors: r.options.colors,
                      colorsName: r.options.colorsName,
                      eventName: n.data("event"),
                      container: r.options.container,
                      tooltip: r.options.tooltip
                    }).render());
                  });
                  var e = [["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"]];
                  t.find(".note-holder-custom").each(function (t, n) {
                    var o = i()(n);
                    o.append(r.ui.palette({
                      colors: e,
                      colorsName: e,
                      eventName: o.data("event"),
                      container: r.options.container,
                      tooltip: r.options.tooltip
                    }).render());
                  }), t.find("input[type=color]").each(function (e, n) {
                    i()(n).change(function () {
                      var e = t.find("#" + i()(this).data("event")).find(".note-color-btn").first(),
                        n = this.value.toUpperCase();
                      e.css("background-color", n).attr("aria-label", n).attr("data-value", n).attr("data-original-title", n), e.click();
                    });
                  });
                },
                click: function click(e) {
                  e.stopPropagation();
                  var n = i()("." + t).find(".note-dropdown-menu"),
                    o = i()(e.target),
                    a = o.data("event"),
                    s = o.attr("data-value");
                  if ("openPalette" === a) {
                    var l = n.find("#" + s),
                      c = i()(n.find("#" + l.data("event")).find(".note-color-row")[0]),
                      u = c.find(".note-color-btn").last().detach(),
                      d = l.val();
                    u.css("background-color", d).attr("aria-label", d).attr("data-value", d).attr("data-original-title", d), c.prepend(u), l.click();
                  } else {
                    if (C.contains(["backColor", "foreColor"], a)) {
                      var h = "backColor" === a ? "background-color" : "color",
                        f = o.closest(".note-color").find(".note-recent-color"),
                        p = o.closest(".note-color").find(".note-current-color-button");
                      f.css(h, s), p.attr("data-" + a, s);
                    }
                    r.context.invoke("editor." + a, s);
                  }
                }
              })]
            }).render();
          }
        }, {
          key: "addToolbarButtons",
          value: function value() {
            var t = this;
            this.context.memo("button.style", function () {
              return t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.magic), t.options),
                tooltip: t.lang.style.style,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdown({
                className: "dropdown-style",
                items: t.options.styleTags,
                title: t.lang.style.style,
                template: function template(e) {
                  "string" == typeof e && (e = {
                    tag: e,
                    title: Object.prototype.hasOwnProperty.call(t.lang.style, e) ? t.lang.style[e] : e
                  });
                  var n = e.tag,
                    o = e.title;
                  return "<" + n + (e.style ? ' style="' + e.style + '" ' : "") + (e.className ? ' class="' + e.className + '"' : "") + ">" + o + "</" + n + ">";
                },
                click: t.context.createInvokeHandler("editor.formatBlock")
              })]).render();
            });
            for (var e = function e(_e2, n) {
                var o = t.options.styleTags[_e2];
                t.context.memo("button.style." + o, function () {
                  return t.button({
                    className: "note-btn-style-" + o,
                    contents: '<div data-value="' + o + '">' + o.toUpperCase() + "</div>",
                    tooltip: t.lang.style[o],
                    click: t.context.createInvokeHandler("editor.formatBlock")
                  }).render();
                });
              }, n = 0, o = this.options.styleTags.length; n < o; n++) e(n);
            this.context.memo("button.bold", function () {
              return t.button({
                className: "note-btn-bold",
                contents: t.ui.icon(t.options.icons.bold),
                tooltip: t.lang.font.bold + t.representShortcut("bold"),
                click: t.context.createInvokeHandlerAndUpdateState("editor.bold")
              }).render();
            }), this.context.memo("button.italic", function () {
              return t.button({
                className: "note-btn-italic",
                contents: t.ui.icon(t.options.icons.italic),
                tooltip: t.lang.font.italic + t.representShortcut("italic"),
                click: t.context.createInvokeHandlerAndUpdateState("editor.italic")
              }).render();
            }), this.context.memo("button.underline", function () {
              return t.button({
                className: "note-btn-underline",
                contents: t.ui.icon(t.options.icons.underline),
                tooltip: t.lang.font.underline + t.representShortcut("underline"),
                click: t.context.createInvokeHandlerAndUpdateState("editor.underline")
              }).render();
            }), this.context.memo("button.clear", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.eraser),
                tooltip: t.lang.font.clear + t.representShortcut("removeFormat"),
                click: t.context.createInvokeHandler("editor.removeFormat")
              }).render();
            }), this.context.memo("button.strikethrough", function () {
              return t.button({
                className: "note-btn-strikethrough",
                contents: t.ui.icon(t.options.icons.strikethrough),
                tooltip: t.lang.font.strikethrough + t.representShortcut("strikethrough"),
                click: t.context.createInvokeHandlerAndUpdateState("editor.strikethrough")
              }).render();
            }), this.context.memo("button.superscript", function () {
              return t.button({
                className: "note-btn-superscript",
                contents: t.ui.icon(t.options.icons.superscript),
                tooltip: t.lang.font.superscript,
                click: t.context.createInvokeHandlerAndUpdateState("editor.superscript")
              }).render();
            }), this.context.memo("button.subscript", function () {
              return t.button({
                className: "note-btn-subscript",
                contents: t.ui.icon(t.options.icons.subscript),
                tooltip: t.lang.font.subscript,
                click: t.context.createInvokeHandlerAndUpdateState("editor.subscript")
              }).render();
            }), this.context.memo("button.fontname", function () {
              var e = t.context.invoke("editor.currentStyle");
              return t.options.addDefaultFonts && i.a.each(e["font-family"].split(","), function (e, n) {
                n = n.trim().replace(/['"]+/g, ""), t.isFontDeservedToAdd(n) && -1 === t.options.fontNames.indexOf(n) && t.options.fontNames.push(n);
              }), t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents('<span class="note-current-fontname"></span>', t.options),
                tooltip: t.lang.font.name,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdownCheck({
                className: "dropdown-fontname",
                checkClassName: t.options.icons.menuCheck,
                items: t.options.fontNames.filter(t.isFontInstalled.bind(t)),
                title: t.lang.font.name,
                template: function template(t) {
                  return '<span style="font-family: ' + m.validFontName(t) + '">' + t + "</span>";
                },
                click: t.context.createInvokeHandlerAndUpdateState("editor.fontName")
              })]).render();
            }), this.context.memo("button.fontsize", function () {
              return t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents('<span class="note-current-fontsize"></span>', t.options),
                tooltip: t.lang.font.size,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdownCheck({
                className: "dropdown-fontsize",
                checkClassName: t.options.icons.menuCheck,
                items: t.options.fontSizes,
                title: t.lang.font.size,
                click: t.context.createInvokeHandlerAndUpdateState("editor.fontSize")
              })]).render();
            }), this.context.memo("button.fontsizeunit", function () {
              return t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents('<span class="note-current-fontsizeunit"></span>', t.options),
                tooltip: t.lang.font.sizeunit,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdownCheck({
                className: "dropdown-fontsizeunit",
                checkClassName: t.options.icons.menuCheck,
                items: t.options.fontSizeUnits,
                title: t.lang.font.sizeunit,
                click: t.context.createInvokeHandlerAndUpdateState("editor.fontSizeUnit")
              })]).render();
            }), this.context.memo("button.color", function () {
              return t.colorPalette("note-color-all", t.lang.color.recent, !0, !0);
            }), this.context.memo("button.forecolor", function () {
              return t.colorPalette("note-color-fore", t.lang.color.foreground, !1, !0);
            }), this.context.memo("button.backcolor", function () {
              return t.colorPalette("note-color-back", t.lang.color.background, !0, !1);
            }), this.context.memo("button.ul", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.unorderedlist),
                tooltip: t.lang.lists.unordered + t.representShortcut("insertUnorderedList"),
                click: t.context.createInvokeHandler("editor.insertUnorderedList")
              }).render();
            }), this.context.memo("button.ol", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.orderedlist),
                tooltip: t.lang.lists.ordered + t.representShortcut("insertOrderedList"),
                click: t.context.createInvokeHandler("editor.insertOrderedList")
              }).render();
            });
            var r = this.button({
                contents: this.ui.icon(this.options.icons.alignLeft),
                tooltip: this.lang.paragraph.left + this.representShortcut("justifyLeft"),
                click: this.context.createInvokeHandler("editor.justifyLeft")
              }),
              a = this.button({
                contents: this.ui.icon(this.options.icons.alignCenter),
                tooltip: this.lang.paragraph.center + this.representShortcut("justifyCenter"),
                click: this.context.createInvokeHandler("editor.justifyCenter")
              }),
              s = this.button({
                contents: this.ui.icon(this.options.icons.alignRight),
                tooltip: this.lang.paragraph.right + this.representShortcut("justifyRight"),
                click: this.context.createInvokeHandler("editor.justifyRight")
              }),
              l = this.button({
                contents: this.ui.icon(this.options.icons.alignJustify),
                tooltip: this.lang.paragraph.justify + this.representShortcut("justifyFull"),
                click: this.context.createInvokeHandler("editor.justifyFull")
              }),
              c = this.button({
                contents: this.ui.icon(this.options.icons.outdent),
                tooltip: this.lang.paragraph.outdent + this.representShortcut("outdent"),
                click: this.context.createInvokeHandler("editor.outdent")
              }),
              u = this.button({
                contents: this.ui.icon(this.options.icons.indent),
                tooltip: this.lang.paragraph.indent + this.representShortcut("indent"),
                click: this.context.createInvokeHandler("editor.indent")
              });
            this.context.memo("button.justifyLeft", g.invoke(r, "render")), this.context.memo("button.justifyCenter", g.invoke(a, "render")), this.context.memo("button.justifyRight", g.invoke(s, "render")), this.context.memo("button.justifyFull", g.invoke(l, "render")), this.context.memo("button.outdent", g.invoke(c, "render")), this.context.memo("button.indent", g.invoke(u, "render")), this.context.memo("button.paragraph", function () {
              return t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.alignLeft), t.options),
                tooltip: t.lang.paragraph.paragraph,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdown([t.ui.buttonGroup({
                className: "note-align",
                children: [r, a, s, l]
              }), t.ui.buttonGroup({
                className: "note-list",
                children: [c, u]
              })])]).render();
            }), this.context.memo("button.height", function () {
              return t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.textHeight), t.options),
                tooltip: t.lang.font.height,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdownCheck({
                items: t.options.lineHeights,
                checkClassName: t.options.icons.menuCheck,
                className: "dropdown-line-height",
                title: t.lang.font.height,
                click: t.context.createInvokeHandler("editor.lineHeight")
              })]).render();
            }), this.context.memo("button.table", function () {
              return t.ui.buttonGroup([t.button({
                className: "dropdown-toggle",
                contents: t.ui.dropdownButtonContents(t.ui.icon(t.options.icons.table), t.options),
                tooltip: t.lang.table.table,
                data: {
                  toggle: "dropdown"
                }
              }), t.ui.dropdown({
                title: t.lang.table.table,
                className: "note-table",
                items: ['<div class="note-dimension-picker">', '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>', '<div class="note-dimension-picker-highlighted"></div>', '<div class="note-dimension-picker-unhighlighted"></div>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
              })], {
                callback: function callback(e) {
                  e.find(".note-dimension-picker-mousecatcher").css({
                    width: t.options.insertTableMaxSize.col + "em",
                    height: t.options.insertTableMaxSize.row + "em"
                  }).mousedown(t.context.createInvokeHandler("editor.insertTable")).on("mousemove", t.tableMoveHandler.bind(t));
                }
              }).render();
            }), this.context.memo("button.link", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.link),
                tooltip: t.lang.link.link + t.representShortcut("linkDialog.show"),
                click: t.context.createInvokeHandler("linkDialog.show")
              }).render();
            }), this.context.memo("button.picture", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.picture),
                tooltip: t.lang.image.image,
                click: t.context.createInvokeHandler("imageDialog.show")
              }).render();
            }), this.context.memo("button.video", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.video),
                tooltip: t.lang.video.video,
                click: t.context.createInvokeHandler("videoDialog.show")
              }).render();
            }), this.context.memo("button.hr", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.minus),
                tooltip: t.lang.hr.insert + t.representShortcut("insertHorizontalRule"),
                click: t.context.createInvokeHandler("editor.insertHorizontalRule")
              }).render();
            }), this.context.memo("button.fullscreen", function () {
              return t.button({
                className: "btn-fullscreen note-codeview-keep",
                contents: t.ui.icon(t.options.icons.arrowsAlt),
                tooltip: t.lang.options.fullscreen,
                click: t.context.createInvokeHandler("fullscreen.toggle")
              }).render();
            }), this.context.memo("button.codeview", function () {
              return t.button({
                className: "btn-codeview note-codeview-keep",
                contents: t.ui.icon(t.options.icons.code),
                tooltip: t.lang.options.codeview,
                click: t.context.createInvokeHandler("codeview.toggle")
              }).render();
            }), this.context.memo("button.redo", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.redo),
                tooltip: t.lang.history.redo + t.representShortcut("redo"),
                click: t.context.createInvokeHandler("editor.redo")
              }).render();
            }), this.context.memo("button.undo", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.undo),
                tooltip: t.lang.history.undo + t.representShortcut("undo"),
                click: t.context.createInvokeHandler("editor.undo")
              }).render();
            }), this.context.memo("button.help", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.question),
                tooltip: t.lang.options.help,
                click: t.context.createInvokeHandler("helpDialog.show")
              }).render();
            });
          }
        }, {
          key: "addImagePopoverButtons",
          value: function value() {
            var t = this;
            this.context.memo("button.resizeFull", function () {
              return t.button({
                contents: '<span class="note-fontsize-10">100%</span>',
                tooltip: t.lang.image.resizeFull,
                click: t.context.createInvokeHandler("editor.resize", "1")
              }).render();
            }), this.context.memo("button.resizeHalf", function () {
              return t.button({
                contents: '<span class="note-fontsize-10">50%</span>',
                tooltip: t.lang.image.resizeHalf,
                click: t.context.createInvokeHandler("editor.resize", "0.5")
              }).render();
            }), this.context.memo("button.resizeQuarter", function () {
              return t.button({
                contents: '<span class="note-fontsize-10">25%</span>',
                tooltip: t.lang.image.resizeQuarter,
                click: t.context.createInvokeHandler("editor.resize", "0.25")
              }).render();
            }), this.context.memo("button.resizeNone", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.rollback),
                tooltip: t.lang.image.resizeNone,
                click: t.context.createInvokeHandler("editor.resize", "0")
              }).render();
            }), this.context.memo("button.floatLeft", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.floatLeft),
                tooltip: t.lang.image.floatLeft,
                click: t.context.createInvokeHandler("editor.floatMe", "left")
              }).render();
            }), this.context.memo("button.floatRight", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.floatRight),
                tooltip: t.lang.image.floatRight,
                click: t.context.createInvokeHandler("editor.floatMe", "right")
              }).render();
            }), this.context.memo("button.floatNone", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.rollback),
                tooltip: t.lang.image.floatNone,
                click: t.context.createInvokeHandler("editor.floatMe", "none")
              }).render();
            }), this.context.memo("button.removeMedia", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.trash),
                tooltip: t.lang.image.remove,
                click: t.context.createInvokeHandler("editor.removeMedia")
              }).render();
            });
          }
        }, {
          key: "addLinkPopoverButtons",
          value: function value() {
            var t = this;
            this.context.memo("button.linkDialogShow", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.link),
                tooltip: t.lang.link.edit,
                click: t.context.createInvokeHandler("linkDialog.show")
              }).render();
            }), this.context.memo("button.unlink", function () {
              return t.button({
                contents: t.ui.icon(t.options.icons.unlink),
                tooltip: t.lang.link.unlink,
                click: t.context.createInvokeHandler("editor.unlink")
              }).render();
            });
          }
        }, {
          key: "addTablePopoverButtons",
          value: function value() {
            var t = this;
            this.context.memo("button.addRowUp", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.rowAbove),
                tooltip: t.lang.table.addRowAbove,
                click: t.context.createInvokeHandler("editor.addRow", "top")
              }).render();
            }), this.context.memo("button.addRowDown", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.rowBelow),
                tooltip: t.lang.table.addRowBelow,
                click: t.context.createInvokeHandler("editor.addRow", "bottom")
              }).render();
            }), this.context.memo("button.addColLeft", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.colBefore),
                tooltip: t.lang.table.addColLeft,
                click: t.context.createInvokeHandler("editor.addCol", "left")
              }).render();
            }), this.context.memo("button.addColRight", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.colAfter),
                tooltip: t.lang.table.addColRight,
                click: t.context.createInvokeHandler("editor.addCol", "right")
              }).render();
            }), this.context.memo("button.deleteRow", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.rowRemove),
                tooltip: t.lang.table.delRow,
                click: t.context.createInvokeHandler("editor.deleteRow")
              }).render();
            }), this.context.memo("button.deleteCol", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.colRemove),
                tooltip: t.lang.table.delCol,
                click: t.context.createInvokeHandler("editor.deleteCol")
              }).render();
            }), this.context.memo("button.deleteTable", function () {
              return t.button({
                className: "btn-md",
                contents: t.ui.icon(t.options.icons.trash),
                tooltip: t.lang.table.delTable,
                click: t.context.createInvokeHandler("editor.deleteTable")
              }).render();
            });
          }
        }, {
          key: "build",
          value: function value(t, e) {
            for (var n = 0, o = e.length; n < o; n++) {
              for (var i = e[n], r = Array.isArray(i) ? i[0] : i, a = Array.isArray(i) ? 1 === i.length ? [i[0]] : i[1] : [i], s = this.ui.buttonGroup({
                  className: "note-" + r
                }).render(), l = 0, c = a.length; l < c; l++) {
                var u = this.context.memo("button." + a[l]);
                u && s.append("function" == typeof u ? u(this.context) : u);
              }
              s.appendTo(t);
            }
          }
        }, {
          key: "updateCurrentStyle",
          value: function value(t) {
            var e = this,
              n = t || this.$toolbar,
              o = this.context.invoke("editor.currentStyle");
            if (this.updateBtnStates(n, {
              ".note-btn-bold": function noteBtnBold() {
                return "bold" === o["font-bold"];
              },
              ".note-btn-italic": function noteBtnItalic() {
                return "italic" === o["font-italic"];
              },
              ".note-btn-underline": function noteBtnUnderline() {
                return "underline" === o["font-underline"];
              },
              ".note-btn-subscript": function noteBtnSubscript() {
                return "subscript" === o["font-subscript"];
              },
              ".note-btn-superscript": function noteBtnSuperscript() {
                return "superscript" === o["font-superscript"];
              },
              ".note-btn-strikethrough": function noteBtnStrikethrough() {
                return "strikethrough" === o["font-strikethrough"];
              }
            }), o["font-family"]) {
              var r = o["font-family"].split(",").map(function (t) {
                  return t.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "");
                }),
                a = C.find(r, this.isFontInstalled.bind(this));
              n.find(".dropdown-fontname a").each(function (t, e) {
                var n = i()(e),
                  o = n.data("value") + "" == a + "";
                n.toggleClass("checked", o);
              }), n.find(".note-current-fontname").text(a).css("font-family", a);
            }
            if (o["font-size"]) {
              var s = o["font-size"];
              n.find(".dropdown-fontsize a").each(function (t, e) {
                var n = i()(e),
                  o = n.data("value") + "" == s + "";
                n.toggleClass("checked", o);
              }), n.find(".note-current-fontsize").text(s);
              var l = o["font-size-unit"];
              n.find(".dropdown-fontsizeunit a").each(function (t, e) {
                var n = i()(e),
                  o = n.data("value") + "" == l + "";
                n.toggleClass("checked", o);
              }), n.find(".note-current-fontsizeunit").text(l);
            }
            if (o["line-height"]) {
              var c = o["line-height"];
              n.find(".dropdown-line-height li a").each(function (t, n) {
                var o = i()(n).data("value") + "" == c + "";
                e.className = o ? "checked" : "";
              });
            }
          }
        }, {
          key: "updateBtnStates",
          value: function value(t, e) {
            var n = this;
            i.a.each(e, function (e, o) {
              n.ui.toggleBtnActive(t.find(e), o());
            });
          }
        }, {
          key: "tableMoveHandler",
          value: function value(t) {
            var e,
              n = i()(t.target.parentNode),
              o = n.next(),
              r = n.find(".note-dimension-picker-mousecatcher"),
              a = n.find(".note-dimension-picker-highlighted"),
              s = n.find(".note-dimension-picker-unhighlighted");
            if (void 0 === t.offsetX) {
              var l = i()(t.target).offset();
              e = {
                x: t.pageX - l.left,
                y: t.pageY - l.top
              };
            } else e = {
              x: t.offsetX,
              y: t.offsetY
            };
            var c = Math.ceil(e.x / 18) || 1,
              u = Math.ceil(e.y / 18) || 1;
            a.css({
              width: c + "em",
              height: u + "em"
            }), r.data("value", c + "x" + u), c > 3 && c < this.options.insertTableMaxSize.col && s.css({
              width: c + 1 + "em"
            }), u > 3 && u < this.options.insertTableMaxSize.row && s.css({
              height: u + 1 + "em"
            }), o.html(c + " x " + u);
          }
        }]) && ae(e.prototype, n), o && ae(e, o), t;
      }();
      function le(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var ce = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.$window = i()(window), this.$document = i()(document), this.ui = i.a.summernote.ui, this.$note = e.layoutInfo.note, this.$editor = e.layoutInfo.editor, this.$toolbar = e.layoutInfo.toolbar, this.$editable = e.layoutInfo.editable, this.$statusbar = e.layoutInfo.statusbar, this.options = e.options, this.isFollowing = !1, this.followScroll = this.followScroll.bind(this);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return !this.options.airMode;
          }
        }, {
          key: "initialize",
          value: function value() {
            var t = this;
            this.options.toolbar = this.options.toolbar || [], this.options.toolbar.length ? this.context.invoke("buttons.build", this.$toolbar, this.options.toolbar) : this.$toolbar.hide(), this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer), this.changeContainer(!1), this.$note.on("summernote.keyup summernote.mouseup summernote.change", function () {
              t.context.invoke("buttons.updateCurrentStyle");
            }), this.context.invoke("buttons.updateCurrentStyle"), this.options.followingToolbar && this.$window.on("scroll resize", this.followScroll);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$toolbar.children().remove(), this.options.followingToolbar && this.$window.off("scroll resize", this.followScroll);
          }
        }, {
          key: "followScroll",
          value: function value() {
            if (this.$editor.hasClass("fullscreen")) return !1;
            var t = this.$editor.outerHeight(),
              e = this.$editor.width(),
              n = this.$toolbar.height(),
              o = this.$statusbar.height(),
              r = 0;
            this.options.otherStaticBar && (r = i()(this.options.otherStaticBar).outerHeight());
            var a = this.$document.scrollTop(),
              s = this.$editor.offset().top,
              l = s - r,
              c = s + t - r - n - o;
            !this.isFollowing && a > l && a < c - n ? (this.isFollowing = !0, this.$editable.css({
              marginTop: this.$toolbar.outerHeight()
            }), this.$toolbar.css({
              position: "fixed",
              top: r,
              width: e,
              zIndex: 1e3
            })) : this.isFollowing && (a < l || a > c) && (this.isFollowing = !1, this.$toolbar.css({
              position: "relative",
              top: 0,
              width: "100%",
              zIndex: "auto"
            }), this.$editable.css({
              marginTop: ""
            }));
          }
        }, {
          key: "changeContainer",
          value: function value(t) {
            t ? this.$toolbar.prependTo(this.$editor) : this.options.toolbarContainer && this.$toolbar.appendTo(this.options.toolbarContainer), this.options.followingToolbar && this.followScroll();
          }
        }, {
          key: "updateFullscreen",
          value: function value(t) {
            this.ui.toggleBtnActive(this.$toolbar.find(".btn-fullscreen"), t), this.changeContainer(t);
          }
        }, {
          key: "updateCodeview",
          value: function value(t) {
            this.ui.toggleBtnActive(this.$toolbar.find(".btn-codeview"), t), t ? this.deactivate() : this.activate();
          }
        }, {
          key: "activate",
          value: function value(t) {
            var e = this.$toolbar.find("button");
            t || (e = e.not(".note-codeview-keep")), this.ui.toggleBtn(e, !0);
          }
        }, {
          key: "deactivate",
          value: function value(t) {
            var e = this.$toolbar.find("button");
            t || (e = e.not(".note-codeview-keep")), this.ui.toggleBtn(e, !1);
          }
        }]) && le(e.prototype, n), o && le(e, o), t;
      }();
      function ue(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var de = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.$body = i()(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo, e.memo("help.linkDialog.show", this.options.langInfo.help["linkDialog.show"]);
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = this.options.dialogsInBody ? this.$body : this.options.container,
              e = ['<div class="form-group note-form-group">', '<label for="note-dialog-link-txt-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.link.textToDisplay, "</label>"), '<input id="note-dialog-link-txt-'.concat(this.options.id, '" class="note-link-text form-control note-form-control note-input" type="text"/>'), "</div>", '<div class="form-group note-form-group">', '<label for="note-dialog-link-url-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.link.url, "</label>"), '<input id="note-dialog-link-url-'.concat(this.options.id, '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>'), "</div>", this.options.disableLinkTarget ? "" : i()("<div/>").append(this.ui.checkbox({
                className: "sn-checkbox-open-in-new-window",
                text: this.lang.link.openInNewWindow,
                checked: !0
              }).render()).html(), i()("<div/>").append(this.ui.checkbox({
                className: "sn-checkbox-use-protocol",
                text: this.lang.link.useProtocol,
                checked: !0
              }).render()).html()].join(""),
              n = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-link-btn", '" value="').concat(this.lang.link.insert, '" disabled>');
            this.$dialog = this.ui.dialog({
              className: "link-dialog",
              title: this.lang.link.insert,
              fade: this.options.dialogsFade,
              body: e,
              footer: n
            }).render().appendTo(t);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.ui.hideDialog(this.$dialog), this.$dialog.remove();
          }
        }, {
          key: "bindEnterKey",
          value: function value(t, e) {
            t.on("keypress", function (t) {
              t.keyCode === xt.code.ENTER && (t.preventDefault(), e.trigger("click"));
            });
          }
        }, {
          key: "toggleLinkBtn",
          value: function value(t, e, n) {
            this.ui.toggleBtn(t, e.val() && n.val());
          }
        }, {
          key: "showLinkDialog",
          value: function value(t) {
            var e = this;
            return i.a.Deferred(function (n) {
              var o = e.$dialog.find(".note-link-text"),
                i = e.$dialog.find(".note-link-url"),
                r = e.$dialog.find(".note-link-btn"),
                a = e.$dialog.find(".sn-checkbox-open-in-new-window input[type=checkbox]"),
                s = e.$dialog.find(".sn-checkbox-use-protocol input[type=checkbox]");
              e.ui.onDialogShown(e.$dialog, function () {
                e.context.triggerEvent("dialog.shown"), !t.url && g.isValidUrl(t.text) && (t.url = t.text), o.on("input paste propertychange", function () {
                  t.text = o.val(), e.toggleLinkBtn(r, o, i);
                }).val(t.text), i.on("input paste propertychange", function () {
                  t.text || o.val(i.val()), e.toggleLinkBtn(r, o, i);
                }).val(t.url), m.isSupportTouch || i.trigger("focus"), e.toggleLinkBtn(r, o, i), e.bindEnterKey(i, r), e.bindEnterKey(o, r);
                var l = void 0 !== t.isNewWindow ? t.isNewWindow : e.context.options.linkTargetBlank;
                a.prop("checked", l);
                var c = !t.url && e.context.options.useProtocol;
                s.prop("checked", c), r.one("click", function (r) {
                  r.preventDefault(), n.resolve({
                    range: t.range,
                    url: i.val(),
                    text: o.val(),
                    isNewWindow: a.is(":checked"),
                    checkProtocol: s.is(":checked")
                  }), e.ui.hideDialog(e.$dialog);
                });
              }), e.ui.onDialogHidden(e.$dialog, function () {
                o.off(), i.off(), r.off(), "pending" === n.state() && n.reject();
              }), e.ui.showDialog(e.$dialog);
            }).promise();
          }
        }, {
          key: "show",
          value: function value() {
            var t = this,
              e = this.context.invoke("editor.getLinkInfo");
            this.context.invoke("editor.saveRange"), this.showLinkDialog(e).then(function (e) {
              t.context.invoke("editor.restoreRange"), t.context.invoke("editor.createLink", e);
            }).fail(function () {
              t.context.invoke("editor.restoreRange");
            });
          }
        }]) && ue(e.prototype, n), o && ue(e, o), t;
      }();
      function he(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var fe = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.options = e.options, this.events = {
            "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function summernoteKeyup_summernoteMouseup_summernoteChange_summernoteScroll() {
              n.update();
            },
            "summernote.disable summernote.dialog.shown summernote.blur": function summernoteDisable_summernoteDialogShown_summernoteBlur() {
              n.hide();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return !C.isEmpty(this.options.popover.link);
          }
        }, {
          key: "initialize",
          value: function value() {
            this.$popover = this.ui.popover({
              className: "note-link-popover",
              callback: function callback(t) {
                t.find(".popover-content,.note-popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>');
              }
            }).render().appendTo(this.options.container);
            var t = this.$popover.find(".popover-content,.note-popover-content");
            this.context.invoke("buttons.build", t, this.options.popover.link), this.$popover.on("mousedown", function (t) {
              t.preventDefault();
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$popover.remove();
          }
        }, {
          key: "update",
          value: function value() {
            if (this.context.invoke("editor.hasFocus")) {
              var t = this.context.invoke("editor.getLastRange");
              if (t.isCollapsed() && t.isOnAnchor()) {
                var e = pt.ancestor(t.sc, pt.isAnchor),
                  n = i()(e).attr("href");
                this.$popover.find("a").attr("href", n).text(n);
                var o = pt.posFromPlaceholder(e),
                  r = i()(this.options.container).offset();
                o.top -= r.top, o.left -= r.left, this.$popover.css({
                  display: "block",
                  left: o.left,
                  top: o.top
                });
              } else this.hide();
            } else this.hide();
          }
        }, {
          key: "hide",
          value: function value() {
            this.$popover.hide();
          }
        }]) && he(e.prototype, n), o && he(e, o), t;
      }();
      function pe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var me = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.$body = i()(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = "";
            if (this.options.maximumImageFileSize) {
              var e = Math.floor(Math.log(this.options.maximumImageFileSize) / Math.log(1024)),
                n = 1 * (this.options.maximumImageFileSize / Math.pow(1024, e)).toFixed(2) + " " + " KMGTP"[e] + "B";
              t = "<small>".concat(this.lang.image.maximumFileSize + " : " + n, "</small>");
            }
            var o = this.options.dialogsInBody ? this.$body : this.options.container,
              i = ['<div class="form-group note-form-group note-group-select-from-files">', '<label for="note-dialog-image-file-' + this.options.id + '" class="note-form-label">' + this.lang.image.selectFromFiles + "</label>", '<input id="note-dialog-image-file-' + this.options.id + '" class="note-image-input form-control-file note-form-control note-input" ', ' type="file" name="files" accept="image/*" multiple="multiple"/>', t, "</div>", '<div class="form-group note-group-image-url">', '<label for="note-dialog-image-url-' + this.options.id + '" class="note-form-label">' + this.lang.image.url + "</label>", '<input id="note-dialog-image-url-' + this.options.id + '" class="note-image-url form-control note-form-control note-input" type="text"/>', "</div>"].join(""),
              r = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-image-btn", '" value="').concat(this.lang.image.insert, '" disabled>');
            this.$dialog = this.ui.dialog({
              title: this.lang.image.insert,
              fade: this.options.dialogsFade,
              body: i,
              footer: r
            }).render().appendTo(o);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.ui.hideDialog(this.$dialog), this.$dialog.remove();
          }
        }, {
          key: "bindEnterKey",
          value: function value(t, e) {
            t.on("keypress", function (t) {
              t.keyCode === xt.code.ENTER && (t.preventDefault(), e.trigger("click"));
            });
          }
        }, {
          key: "show",
          value: function value() {
            var t = this;
            this.context.invoke("editor.saveRange"), this.showImageDialog().then(function (e) {
              t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange"), "string" == typeof e ? t.options.callbacks.onImageLinkInsert ? t.context.triggerEvent("image.link.insert", e) : t.context.invoke("editor.insertImage", e) : t.context.invoke("editor.insertImagesOrCallback", e);
            }).fail(function () {
              t.context.invoke("editor.restoreRange");
            });
          }
        }, {
          key: "showImageDialog",
          value: function value() {
            var t = this;
            return i.a.Deferred(function (e) {
              var n = t.$dialog.find(".note-image-input"),
                o = t.$dialog.find(".note-image-url"),
                i = t.$dialog.find(".note-image-btn");
              t.ui.onDialogShown(t.$dialog, function () {
                t.context.triggerEvent("dialog.shown"), n.replaceWith(n.clone().on("change", function (t) {
                  e.resolve(t.target.files || t.target.value);
                }).val("")), o.on("input paste propertychange", function () {
                  t.ui.toggleBtn(i, o.val());
                }).val(""), m.isSupportTouch || o.trigger("focus"), i.click(function (t) {
                  t.preventDefault(), e.resolve(o.val());
                }), t.bindEnterKey(o, i);
              }), t.ui.onDialogHidden(t.$dialog, function () {
                n.off(), o.off(), i.off(), "pending" === e.state() && e.reject();
              }), t.ui.showDialog(t.$dialog);
            });
          }
        }]) && pe(e.prototype, n), o && pe(e, o), t;
      }();
      function ve(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var ge = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.editable = e.layoutInfo.editable[0], this.options = e.options, this.events = {
            "summernote.disable summernote.blur": function summernoteDisable_summernoteBlur() {
              n.hide();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return !C.isEmpty(this.options.popover.image);
          }
        }, {
          key: "initialize",
          value: function value() {
            this.$popover = this.ui.popover({
              className: "note-image-popover"
            }).render().appendTo(this.options.container);
            var t = this.$popover.find(".popover-content,.note-popover-content");
            this.context.invoke("buttons.build", t, this.options.popover.image), this.$popover.on("mousedown", function (t) {
              t.preventDefault();
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$popover.remove();
          }
        }, {
          key: "update",
          value: function value(t, e) {
            if (pt.isImg(t)) {
              var n = i()(t).offset(),
                o = i()(this.options.container).offset(),
                r = {};
              this.options.popatmouse ? (r.left = e.pageX - 20, r.top = e.pageY) : r = n, r.top -= o.top, r.left -= o.left, this.$popover.css({
                display: "block",
                left: r.left,
                top: r.top
              });
            } else this.hide();
          }
        }, {
          key: "hide",
          value: function value() {
            this.$popover.hide();
          }
        }]) && ve(e.prototype, n), o && ve(e, o), t;
      }();
      function be(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var ye = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.options = e.options, this.events = {
            "summernote.mousedown": function summernoteMousedown(t, e) {
              n.update(e.target);
            },
            "summernote.keyup summernote.scroll summernote.change": function summernoteKeyup_summernoteScroll_summernoteChange() {
              n.update();
            },
            "summernote.disable summernote.blur": function summernoteDisable_summernoteBlur() {
              n.hide();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return !C.isEmpty(this.options.popover.table);
          }
        }, {
          key: "initialize",
          value: function value() {
            this.$popover = this.ui.popover({
              className: "note-table-popover"
            }).render().appendTo(this.options.container);
            var t = this.$popover.find(".popover-content,.note-popover-content");
            this.context.invoke("buttons.build", t, this.options.popover.table), m.isFF && document.execCommand("enableInlineTableEditing", !1, !1), this.$popover.on("mousedown", function (t) {
              t.preventDefault();
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$popover.remove();
          }
        }, {
          key: "update",
          value: function value(t) {
            if (this.context.isDisabled()) return !1;
            var e = pt.isCell(t);
            if (e) {
              var n = pt.posFromPlaceholder(t),
                o = i()(this.options.container).offset();
              n.top -= o.top, n.left -= o.left, this.$popover.css({
                display: "block",
                left: n.left,
                top: n.top
              });
            } else this.hide();
            return e;
          }
        }, {
          key: "hide",
          value: function value() {
            this.$popover.hide();
          }
        }]) && be(e.prototype, n), o && be(e, o), t;
      }();
      function ke(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var we = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.$body = i()(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = this.options.dialogsInBody ? this.$body : this.options.container,
              e = ['<div class="form-group note-form-group row-fluid">', '<label for="note-dialog-video-url-'.concat(this.options.id, '" class="note-form-label">').concat(this.lang.video.url, ' <small class="text-muted">').concat(this.lang.video.providers, "</small></label>"), '<input id="note-dialog-video-url-'.concat(this.options.id, '" class="note-video-url form-control note-form-control note-input" type="text"/>'), "</div>"].join(""),
              n = '<input type="button" href="#" class="'.concat("btn btn-primary note-btn note-btn-primary note-video-btn", '" value="').concat(this.lang.video.insert, '" disabled>');
            this.$dialog = this.ui.dialog({
              title: this.lang.video.insert,
              fade: this.options.dialogsFade,
              body: e,
              footer: n
            }).render().appendTo(t);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.ui.hideDialog(this.$dialog), this.$dialog.remove();
          }
        }, {
          key: "bindEnterKey",
          value: function value(t, e) {
            t.on("keypress", function (t) {
              t.keyCode === xt.code.ENTER && (t.preventDefault(), e.trigger("click"));
            });
          }
        }, {
          key: "createVideoNode",
          value: function value(t) {
            var e,
              n = t.match(/\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/),
              o = t.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),
              r = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
              a = t.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/),
              s = t.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
              l = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
              c = t.match(/\/\/v\.qq\.com.*?vid=(.+)/),
              u = t.match(/\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/),
              d = t.match(/^.+.(mp4|m4v)$/),
              h = t.match(/^.+.(ogg|ogv)$/),
              f = t.match(/^.+.(webm)$/),
              p = t.match(/(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/);
            if (n && 11 === n[1].length) {
              var m = n[1],
                v = 0;
              if (void 0 !== n[2]) {
                var g = n[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
                if (g) for (var b = [3600, 60, 1], y = 0, k = b.length; y < k; y++) v += void 0 !== g[y + 1] ? b[y] * parseInt(g[y + 1], 10) : 0;
              }
              e = i()("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + m + (v > 0 ? "?start=" + v : "")).attr("width", "640").attr("height", "360");
            } else if (o && o[0].length) e = i()("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + o[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");else if (r && r[0].length) e = i()("<iframe>").attr("frameborder", 0).attr("src", r[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");else if (a && a[3].length) e = i()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + a[3]).attr("width", "640").attr("height", "360");else if (s && s[2].length) e = i()("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + s[2]).attr("width", "640").attr("height", "360");else if (l && l[1].length) e = i()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + l[1]);else if (c && c[1].length || u && u[2].length) {
              var w = c && c[1].length ? c[1] : u[2];
              e = i()("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "310").attr("width", "500").attr("src", "https://v.qq.com/txp/iframe/player.html?vid=" + w + "&amp;auto=0");
            } else if (d || h || f) e = i()("<video controls>").attr("src", t).attr("width", "640").attr("height", "360");else {
              if (!p || !p[0].length) return !1;
              e = i()("<iframe>").attr("frameborder", 0).attr("src", "https://www.facebook.com/plugins/video.php?href=" + encodeURIComponent(p[0]) + "&show_text=0&width=560").attr("width", "560").attr("height", "301").attr("scrolling", "no").attr("allowtransparency", "true");
            }
            return e.addClass("note-video-clip"), e[0];
          }
        }, {
          key: "show",
          value: function value() {
            var t = this,
              e = this.context.invoke("editor.getSelectedText");
            this.context.invoke("editor.saveRange"), this.showVideoDialog(e).then(function (e) {
              t.ui.hideDialog(t.$dialog), t.context.invoke("editor.restoreRange");
              var n = t.createVideoNode(e);
              n && t.context.invoke("editor.insertNode", n);
            }).fail(function () {
              t.context.invoke("editor.restoreRange");
            });
          }
        }, {
          key: "showVideoDialog",
          value: function value() {
            var t = this;
            return i.a.Deferred(function (e) {
              var n = t.$dialog.find(".note-video-url"),
                o = t.$dialog.find(".note-video-btn");
              t.ui.onDialogShown(t.$dialog, function () {
                t.context.triggerEvent("dialog.shown"), n.on("input paste propertychange", function () {
                  t.ui.toggleBtn(o, n.val());
                }), m.isSupportTouch || n.trigger("focus"), o.click(function (t) {
                  t.preventDefault(), e.resolve(n.val());
                }), t.bindEnterKey(n, o);
              }), t.ui.onDialogHidden(t.$dialog, function () {
                n.off(), o.off(), "pending" === e.state() && e.reject();
              }), t.ui.showDialog(t.$dialog);
            });
          }
        }]) && ke(e.prototype, n), o && ke(e, o), t;
      }();
      function Ce(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var xe = function () {
        function t(e) {
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.$body = i()(document.body), this.$editor = e.layoutInfo.editor, this.options = e.options, this.lang = this.options.langInfo;
        }
        var e, n, o;
        return e = t, (n = [{
          key: "initialize",
          value: function value() {
            var t = this.options.dialogsInBody ? this.$body : this.options.container,
              e = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.18</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
            this.$dialog = this.ui.dialog({
              title: this.lang.options.help,
              fade: this.options.dialogsFade,
              body: this.createShortcutList(),
              footer: e,
              callback: function callback(t) {
                t.find(".modal-body,.note-modal-body").css({
                  "max-height": 300,
                  overflow: "scroll"
                });
              }
            }).render().appendTo(t);
          }
        }, {
          key: "destroy",
          value: function value() {
            this.ui.hideDialog(this.$dialog), this.$dialog.remove();
          }
        }, {
          key: "createShortcutList",
          value: function value() {
            var t = this,
              e = this.options.keyMap[m.isMac ? "mac" : "pc"];
            return Object.keys(e).map(function (n) {
              var o = e[n],
                r = i()('<div><div class="help-list-item"></div></div>');
              return r.append(i()("<label><kbd>" + n + "</kdb></label>").css({
                width: 180,
                "margin-right": 10
              })).append(i()("<span/>").html(t.context.memo("help." + o) || o)), r.html();
            }).join("");
          }
        }, {
          key: "showHelpDialog",
          value: function value() {
            var t = this;
            return i.a.Deferred(function (e) {
              t.ui.onDialogShown(t.$dialog, function () {
                t.context.triggerEvent("dialog.shown"), e.resolve();
              }), t.ui.showDialog(t.$dialog);
            }).promise();
          }
        }, {
          key: "show",
          value: function value() {
            var t = this;
            this.context.invoke("editor.saveRange"), this.showHelpDialog().then(function () {
              t.context.invoke("editor.restoreRange");
            });
          }
        }]) && Ce(e.prototype, n), o && Ce(e, o), t;
      }();
      function Se(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Te = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.options = e.options, this.hidable = !0, this.onContextmenu = !1, this.pageX = null, this.pageY = null, this.events = {
            "summernote.contextmenu": function summernoteContextmenu(t) {
              n.options.editing && (t.preventDefault(), t.stopPropagation(), n.onContextmenu = !0, n.update(!0));
            },
            "summernote.mousedown": function summernoteMousedown(t, e) {
              n.pageX = e.pageX, n.pageY = e.pageY;
            },
            "summernote.keyup summernote.mouseup summernote.scroll": function summernoteKeyup_summernoteMouseup_summernoteScroll(t, e) {
              n.options.editing && !n.onContextmenu && (n.pageX = e.pageX, n.pageY = e.pageY, n.update()), n.onContextmenu = !1;
            },
            "summernote.disable summernote.change summernote.dialog.shown summernote.blur": function summernoteDisable_summernoteChange_summernoteDialogShown_summernoteBlur() {
              n.hide();
            },
            "summernote.focusout": function summernoteFocusout() {
              n.$popover.is(":active,:focus") || n.hide();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return this.options.airMode && !C.isEmpty(this.options.popover.air);
          }
        }, {
          key: "initialize",
          value: function value() {
            var t = this;
            this.$popover = this.ui.popover({
              className: "note-air-popover"
            }).render().appendTo(this.options.container);
            var e = this.$popover.find(".popover-content");
            this.context.invoke("buttons.build", e, this.options.popover.air), this.$popover.on("mousedown", function () {
              t.hidable = !1;
            }), this.$popover.on("mouseup", function () {
              t.hidable = !0;
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$popover.remove();
          }
        }, {
          key: "update",
          value: function value(t) {
            var e = this.context.invoke("editor.currentStyle");
            if (!e.range || e.range.isCollapsed() && !t) this.hide();else {
              var n = {
                  left: this.pageX,
                  top: this.pageY
                },
                o = i()(this.options.container).offset();
              n.top -= o.top, n.left -= o.left, this.$popover.css({
                display: "block",
                left: Math.max(n.left, 0) + -5,
                top: n.top + 5
              }), this.context.invoke("buttons.updateCurrentStyle", this.$popover);
            }
          }
        }, {
          key: "updateCodeview",
          value: function value(t) {
            this.ui.toggleBtnActive(this.$popover.find(".btn-codeview"), t), t && this.hide();
          }
        }, {
          key: "hide",
          value: function value() {
            this.hidable && this.$popover.hide();
          }
        }]) && Se(e.prototype, n), o && Se(e, o), t;
      }();
      function Ee(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }
      var Ie = function () {
        function t(e) {
          var n = this;
          !function (t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
          }(this, t), this.context = e, this.ui = i.a.summernote.ui, this.$editable = e.layoutInfo.editable, this.options = e.options, this.hint = this.options.hint || [], this.direction = this.options.hintDirection || "bottom", this.hints = Array.isArray(this.hint) ? this.hint : [this.hint], this.events = {
            "summernote.keyup": function summernoteKeyup(t, e) {
              e.isDefaultPrevented() || n.handleKeyup(e);
            },
            "summernote.keydown": function summernoteKeydown(t, e) {
              n.handleKeydown(e);
            },
            "summernote.disable summernote.dialog.shown summernote.blur": function summernoteDisable_summernoteDialogShown_summernoteBlur() {
              n.hide();
            }
          };
        }
        var e, n, o;
        return e = t, (n = [{
          key: "shouldInitialize",
          value: function value() {
            return this.hints.length > 0;
          }
        }, {
          key: "initialize",
          value: function value() {
            var t = this;
            this.lastWordRange = null, this.matchingWord = null, this.$popover = this.ui.popover({
              className: "note-hint-popover",
              hideArrow: !0,
              direction: ""
            }).render().appendTo(this.options.container), this.$popover.hide(), this.$content = this.$popover.find(".popover-content,.note-popover-content"), this.$content.on("click", ".note-hint-item", function (e) {
              t.$content.find(".active").removeClass("active"), i()(e.currentTarget).addClass("active"), t.replace();
            }), this.$popover.on("mousedown", function (t) {
              t.preventDefault();
            });
          }
        }, {
          key: "destroy",
          value: function value() {
            this.$popover.remove();
          }
        }, {
          key: "selectItem",
          value: function value(t) {
            this.$content.find(".active").removeClass("active"), t.addClass("active"), this.$content[0].scrollTop = t[0].offsetTop - this.$content.innerHeight() / 2;
          }
        }, {
          key: "moveDown",
          value: function value() {
            var t = this.$content.find(".note-hint-item.active"),
              e = t.next();
            if (e.length) this.selectItem(e);else {
              var n = t.parent().next();
              n.length || (n = this.$content.find(".note-hint-group").first()), this.selectItem(n.find(".note-hint-item").first());
            }
          }
        }, {
          key: "moveUp",
          value: function value() {
            var t = this.$content.find(".note-hint-item.active"),
              e = t.prev();
            if (e.length) this.selectItem(e);else {
              var n = t.parent().prev();
              n.length || (n = this.$content.find(".note-hint-group").last()), this.selectItem(n.find(".note-hint-item").last());
            }
          }
        }, {
          key: "replace",
          value: function value() {
            var t = this.$content.find(".note-hint-item.active");
            if (t.length) {
              var e = this.nodeFromItem(t);
              if (null !== this.matchingWord && 0 === this.matchingWord.length) this.lastWordRange.so = this.lastWordRange.eo;else if (null !== this.matchingWord && this.matchingWord.length > 0 && !this.lastWordRange.isCollapsed()) {
                var n = this.lastWordRange.eo - this.lastWordRange.so - this.matchingWord.length;
                n > 0 && (this.lastWordRange.so += n);
              }
              if (this.lastWordRange.insertNode(e), "next" === this.options.hintSelect) {
                var o = document.createTextNode("");
                i()(e).after(o), wt.createFromNodeBefore(o).select();
              } else wt.createFromNodeAfter(e).select();
              this.lastWordRange = null, this.hide(), this.context.invoke("editor.focus");
            }
          }
        }, {
          key: "nodeFromItem",
          value: function value(t) {
            var e = this.hints[t.data("index")],
              n = t.data("item"),
              o = e.content ? e.content(n) : n;
            return "string" == typeof o && (o = pt.createText(o)), o;
          }
        }, {
          key: "createItemTemplates",
          value: function value(t, e) {
            var n = this.hints[t];
            return e.map(function (e) {
              var o = i()('<div class="note-hint-item"/>');
              return o.append(n.template ? n.template(e) : e + ""), o.data({
                index: t,
                item: e
              }), o;
            });
          }
        }, {
          key: "handleKeydown",
          value: function value(t) {
            this.$popover.is(":visible") && (t.keyCode === xt.code.ENTER ? (t.preventDefault(), this.replace()) : t.keyCode === xt.code.UP ? (t.preventDefault(), this.moveUp()) : t.keyCode === xt.code.DOWN && (t.preventDefault(), this.moveDown()));
          }
        }, {
          key: "searchKeyword",
          value: function value(t, e, n) {
            var o = this.hints[t];
            if (o && o.match.test(e) && o.search) {
              var i = o.match.exec(e);
              this.matchingWord = i[0], o.search(i[1], n);
            } else n();
          }
        }, {
          key: "createGroup",
          value: function value(t, e) {
            var n = this,
              o = i()('<div class="note-hint-group note-hint-group-' + t + '"></div>');
            return this.searchKeyword(t, e, function (e) {
              (e = e || []).length && (o.html(n.createItemTemplates(t, e)), n.show());
            }), o;
          }
        }, {
          key: "handleKeyup",
          value: function value(t) {
            var e = this;
            if (!C.contains([xt.code.ENTER, xt.code.UP, xt.code.DOWN], t.keyCode)) {
              var n,
                o,
                r = this.context.invoke("editor.getLastRange");
              if ("words" === this.options.hintMode) {
                if (n = r.getWordsRange(r), o = n.toString(), this.hints.forEach(function (t) {
                  if (t.match.test(o)) return n = r.getWordsMatchRange(t.match), !1;
                }), !n) return void this.hide();
                o = n.toString();
              } else n = r.getWordRange(), o = n.toString();
              if (this.hints.length && o) {
                this.$content.empty();
                var a = g.rect2bnd(C.last(n.getClientRects())),
                  s = i()(this.options.container).offset();
                a && (a.top -= s.top, a.left -= s.left, this.$popover.hide(), this.lastWordRange = n, this.hints.forEach(function (t, n) {
                  t.match.test(o) && e.createGroup(n, o).appendTo(e.$content);
                }), this.$content.find(".note-hint-item:first").addClass("active"), "top" === this.direction ? this.$popover.css({
                  left: a.left,
                  top: a.top - this.$popover.outerHeight() - 5
                }) : this.$popover.css({
                  left: a.left,
                  top: a.top + a.height + 5
                }));
              } else this.hide();
            }
          }
        }, {
          key: "show",
          value: function value() {
            this.$popover.show();
          }
        }, {
          key: "hide",
          value: function value() {
            this.$popover.hide();
          }
        }]) && Ee(e.prototype, n), o && Ee(e, o), t;
      }();
      i.a.summernote = i.a.extend(i.a.summernote, {
        version: "0.8.18",
        plugins: {},
        dom: pt,
        range: wt,
        lists: C,
        options: {
          langInfo: i.a.summernote.lang["en-US"],
          editing: !0,
          modules: {
            editor: Ht,
            clipboard: Bt,
            dropzone: Ot,
            codeview: Kt,
            statusbar: Vt,
            fullscreen: Gt,
            handle: Zt,
            hintPopover: Ie,
            autoLink: Jt,
            autoSync: ee,
            autoReplace: oe,
            placeholder: re,
            buttons: se,
            toolbar: ce,
            linkDialog: de,
            linkPopover: fe,
            imageDialog: me,
            imagePopover: ge,
            tablePopover: ye,
            videoDialog: we,
            helpDialog: xe,
            airPopover: Te
          },
          buttons: {},
          lang: "en-US",
          followingToolbar: !1,
          toolbarPosition: "top",
          otherStaticBar: "",
          codeviewKeepButton: !1,
          toolbar: [["style", ["style"]], ["font", ["bold", "underline", "clear"]], ["fontname", ["fontname"]], ["color", ["color"]], ["para", ["ul", "ol", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture", "video"]], ["view", ["fullscreen", "codeview", "help"]]],
          popatmouse: !0,
          popover: {
            image: [["resize", ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"]], ["float", ["floatLeft", "floatRight", "floatNone"]], ["remove", ["removeMedia"]]],
            link: [["link", ["linkDialogShow", "unlink"]]],
            table: [["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]], ["delete", ["deleteRow", "deleteCol", "deleteTable"]]],
            air: [["color", ["color"]], ["font", ["bold", "underline", "clear"]], ["para", ["ul", "paragraph"]], ["table", ["table"]], ["insert", ["link", "picture"]], ["view", ["fullscreen", "codeview"]]]
          },
          airMode: !1,
          overrideContextMenu: !1,
          width: null,
          height: null,
          linkTargetBlank: !0,
          useProtocol: !0,
          defaultProtocol: "http://",
          focus: !1,
          tabDisabled: !1,
          tabSize: 4,
          styleWithCSS: !1,
          shortcuts: !0,
          textareaAutoSync: !0,
          tooltip: "auto",
          container: null,
          maxTextLength: 0,
          blockquoteBreakingLevel: 2,
          spellCheck: !0,
          disableGrammar: !1,
          placeholder: null,
          inheritPlaceholder: !1,
          recordEveryKeystroke: !1,
          historyLimit: 200,
          showDomainOnlyForAutolink: !1,
          hintMode: "word",
          hintSelect: "after",
          hintDirection: "bottom",
          styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
          fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "Lucida Grande", "Tahoma", "Times New Roman", "Verdana"],
          fontNamesIgnoreCheck: [],
          addDefaultFonts: !0,
          fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
          fontSizeUnits: ["px", "pt"],
          colors: [["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"], ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"], ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"], ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"], ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"], ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"], ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"], ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]],
          colorsName: [["Black", "Tundora", "Dove Gray", "Star Dust", "Pale Slate", "Gallery", "Alabaster", "White"], ["Red", "Orange Peel", "Yellow", "Green", "Cyan", "Blue", "Electric Violet", "Magenta"], ["Azalea", "Karry", "Egg White", "Zanah", "Botticelli", "Tropical Blue", "Mischka", "Twilight"], ["Tonys Pink", "Peach Orange", "Cream Brulee", "Sprout", "Casper", "Perano", "Cold Purple", "Careys Pink"], ["Mandy", "Rajah", "Dandelion", "Olivine", "Gulf Stream", "Viking", "Blue Marguerite", "Puce"], ["Guardsman Red", "Fire Bush", "Golden Dream", "Chelsea Cucumber", "Smalt Blue", "Boston Blue", "Butterfly Bush", "Cadillac"], ["Sangria", "Mai Tai", "Buddha Gold", "Forest Green", "Eden", "Venice Blue", "Meteorite", "Claret"], ["Rosewood", "Cinnamon", "Olive", "Parsley", "Tiber", "Midnight Blue", "Valentino", "Loulou"]],
          colorButton: {
            foreColor: "#000000",
            backColor: "#FFFF00"
          },
          lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
          tableClassName: "table table-bordered",
          insertTableMaxSize: {
            col: 10,
            row: 10
          },
          dialogsInBody: !1,
          dialogsFade: !1,
          maximumImageFileSize: null,
          callbacks: {
            onBeforeCommand: null,
            onBlur: null,
            onBlurCodeview: null,
            onChange: null,
            onChangeCodeview: null,
            onDialogShown: null,
            onEnter: null,
            onFocus: null,
            onImageLinkInsert: null,
            onImageUpload: null,
            onImageUploadError: null,
            onInit: null,
            onKeydown: null,
            onKeyup: null,
            onMousedown: null,
            onMouseup: null,
            onPaste: null,
            onScroll: null
          },
          codemirror: {
            mode: "text/html",
            htmlMode: !0,
            lineNumbers: !0
          },
          codeviewFilter: !1,
          codeviewFilterRegex: /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
          codeviewIframeFilter: !0,
          codeviewIframeWhitelistSrc: [],
          codeviewIframeWhitelistSrcBase: ["www.youtube.com", "www.youtube-nocookie.com", "www.facebook.com", "vine.co", "instagram.com", "player.vimeo.com", "www.dailymotion.com", "player.youku.com", "v.qq.com"],
          keyMap: {
            pc: {
              ESC: "escape",
              ENTER: "insertParagraph",
              "CTRL+Z": "undo",
              "CTRL+Y": "redo",
              TAB: "tab",
              "SHIFT+TAB": "untab",
              "CTRL+B": "bold",
              "CTRL+I": "italic",
              "CTRL+U": "underline",
              "CTRL+SHIFT+S": "strikethrough",
              "CTRL+BACKSLASH": "removeFormat",
              "CTRL+SHIFT+L": "justifyLeft",
              "CTRL+SHIFT+E": "justifyCenter",
              "CTRL+SHIFT+R": "justifyRight",
              "CTRL+SHIFT+J": "justifyFull",
              "CTRL+SHIFT+NUM7": "insertUnorderedList",
              "CTRL+SHIFT+NUM8": "insertOrderedList",
              "CTRL+LEFTBRACKET": "outdent",
              "CTRL+RIGHTBRACKET": "indent",
              "CTRL+NUM0": "formatPara",
              "CTRL+NUM1": "formatH1",
              "CTRL+NUM2": "formatH2",
              "CTRL+NUM3": "formatH3",
              "CTRL+NUM4": "formatH4",
              "CTRL+NUM5": "formatH5",
              "CTRL+NUM6": "formatH6",
              "CTRL+ENTER": "insertHorizontalRule",
              "CTRL+K": "linkDialog.show"
            },
            mac: {
              ESC: "escape",
              ENTER: "insertParagraph",
              "CMD+Z": "undo",
              "CMD+SHIFT+Z": "redo",
              TAB: "tab",
              "SHIFT+TAB": "untab",
              "CMD+B": "bold",
              "CMD+I": "italic",
              "CMD+U": "underline",
              "CMD+SHIFT+S": "strikethrough",
              "CMD+BACKSLASH": "removeFormat",
              "CMD+SHIFT+L": "justifyLeft",
              "CMD+SHIFT+E": "justifyCenter",
              "CMD+SHIFT+R": "justifyRight",
              "CMD+SHIFT+J": "justifyFull",
              "CMD+SHIFT+NUM7": "insertUnorderedList",
              "CMD+SHIFT+NUM8": "insertOrderedList",
              "CMD+LEFTBRACKET": "outdent",
              "CMD+RIGHTBRACKET": "indent",
              "CMD+NUM0": "formatPara",
              "CMD+NUM1": "formatH1",
              "CMD+NUM2": "formatH2",
              "CMD+NUM3": "formatH3",
              "CMD+NUM4": "formatH4",
              "CMD+NUM5": "formatH5",
              "CMD+NUM6": "formatH6",
              "CMD+ENTER": "insertHorizontalRule",
              "CMD+K": "linkDialog.show"
            }
          },
          icons: {
            align: "note-icon-align",
            alignCenter: "note-icon-align-center",
            alignJustify: "note-icon-align-justify",
            alignLeft: "note-icon-align-left",
            alignRight: "note-icon-align-right",
            rowBelow: "note-icon-row-below",
            colBefore: "note-icon-col-before",
            colAfter: "note-icon-col-after",
            rowAbove: "note-icon-row-above",
            rowRemove: "note-icon-row-remove",
            colRemove: "note-icon-col-remove",
            indent: "note-icon-align-indent",
            outdent: "note-icon-align-outdent",
            arrowsAlt: "note-icon-arrows-alt",
            bold: "note-icon-bold",
            caret: "note-icon-caret",
            circle: "note-icon-circle",
            close: "note-icon-close",
            code: "note-icon-code",
            eraser: "note-icon-eraser",
            floatLeft: "note-icon-float-left",
            floatRight: "note-icon-float-right",
            font: "note-icon-font",
            frame: "note-icon-frame",
            italic: "note-icon-italic",
            link: "note-icon-link",
            unlink: "note-icon-chain-broken",
            magic: "note-icon-magic",
            menuCheck: "note-icon-menu-check",
            minus: "note-icon-minus",
            orderedlist: "note-icon-orderedlist",
            pencil: "note-icon-pencil",
            picture: "note-icon-picture",
            question: "note-icon-question",
            redo: "note-icon-redo",
            rollback: "note-icon-rollback",
            square: "note-icon-square",
            strikethrough: "note-icon-strikethrough",
            subscript: "note-icon-subscript",
            superscript: "note-icon-superscript",
            table: "note-icon-table",
            textHeight: "note-icon-text-height",
            trash: "note-icon-trash",
            underline: "note-icon-underline",
            undo: "note-icon-undo",
            unorderedlist: "note-icon-unorderedlist",
            video: "note-icon-video"
          }
        }
      });
    },
    5: function _(t, e, n) {},
    53: function _(t, e, n) {
      "use strict";

      n.r(e);
      var o = n(0),
        i = n.n(o),
        r = n(1);
      function a(t) {
        return (a = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        })(t);
      }
      var s = r.a.create('<div class="note-editor note-frame card"/>'),
        l = r.a.create('<div class="note-toolbar card-header" role="toolbar"/>'),
        c = r.a.create('<div class="note-editing-area"/>'),
        u = r.a.create('<textarea class="note-codable" aria-multiline="true"/>'),
        d = r.a.create('<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"/>'),
        h = r.a.create(['<output class="note-status-output" role="status" aria-live="polite"></output>', '<div class="note-statusbar" role="status">', '<div class="note-resizebar" aria-label="Resize">', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', '<div class="note-icon-bar"></div>', "</div>", "</div>"].join("")),
        f = r.a.create('<div class="note-editor note-airframe"/>'),
        p = r.a.create(['<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>', '<output class="note-status-output" role="status" aria-live="polite"></output>'].join("")),
        m = r.a.create('<div class="note-btn-group btn-group">'),
        v = r.a.create('<div class="note-dropdown-menu dropdown-menu" role="list">', function (t, e) {
          var n = Array.isArray(e.items) ? e.items.map(function (t) {
            var n = "string" == typeof t ? t : t.value || "",
              o = e.template ? e.template(t) : t,
              i = "object" === a(t) ? t.option : void 0;
            return '<a class="dropdown-item" href="#" ' + ('data-value="' + n + '"' + (void 0 !== i ? ' data-option="' + i + '"' : "")) + ' role="listitem" aria-label="' + n + '">' + o + "</a>";
          }).join("") : e.items;
          t.html(n).attr({
            "aria-label": e.title
          }), e && e.codeviewKeepButton && t.addClass("note-codeview-keep");
        }),
        g = function g(t) {
          return t;
        },
        b = r.a.create('<div class="note-dropdown-menu dropdown-menu note-check" role="list">', function (t, e) {
          var n = Array.isArray(e.items) ? e.items.map(function (t) {
            var n = "string" == typeof t ? t : t.value || "",
              o = e.template ? e.template(t) : t;
            return '<a class="dropdown-item" href="#" data-value="' + n + '" role="listitem" aria-label="' + t + '">' + C(e.checkClassName) + " " + o + "</a>";
          }).join("") : e.items;
          t.html(n).attr({
            "aria-label": e.title
          }), e && e.codeviewKeepButton && t.addClass("note-codeview-keep");
        }),
        y = r.a.create('<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>', function (t, e) {
          e.fade && t.addClass("fade"), t.attr({
            "aria-label": e.title
          }), t.html(['<div class="modal-dialog">', '<div class="modal-content">', e.title ? '<div class="modal-header"><h4 class="modal-title">' + e.title + '</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button></div>' : "", '<div class="modal-body">' + e.body + "</div>", e.footer ? '<div class="modal-footer">' + e.footer + "</div>" : "", "</div>", "</div>"].join(""));
        }),
        k = r.a.create(['<div class="note-popover popover in">', '<div class="arrow"></div>', '<div class="popover-content note-children-container"></div>', "</div>"].join(""), function (t, e) {
          var n = void 0 !== e.direction ? e.direction : "bottom";
          t.addClass(n), e.hideArrow && t.find(".arrow").hide();
        }),
        w = r.a.create('<div class="form-check"></div>', function (t, e) {
          t.html(['<label class="form-check-label"' + (e.id ? ' for="note-' + e.id + '"' : "") + ">", '<input type="checkbox" class="form-check-input"' + (e.id ? ' id="note-' + e.id + '"' : ""), e.checked ? " checked" : "", ' aria-label="' + (e.text ? e.text : "") + '"', ' aria-checked="' + (e.checked ? "true" : "false") + '"/>', " " + (e.text ? e.text : "") + "</label>"].join(""));
        }),
        C = function C(t, e) {
          return "<" + (e = e || "i") + ' class="' + t + '"></' + e + ">";
        },
        x = function x(t) {
          return {
            editor: s,
            toolbar: l,
            editingArea: c,
            codable: u,
            editable: d,
            statusbar: h,
            airEditor: f,
            airEditable: p,
            buttonGroup: m,
            dropdown: v,
            dropdownButtonContents: g,
            dropdownCheck: b,
            dialog: y,
            popover: k,
            icon: C,
            checkbox: w,
            options: t,
            palette: function palette(e, n) {
              return r.a.create('<div class="note-color-palette"/>', function (e, n) {
                for (var o = [], i = 0, r = n.colors.length; i < r; i++) {
                  for (var a = n.eventName, s = n.colors[i], l = n.colorsName[i], c = [], u = 0, d = s.length; u < d; u++) {
                    var h = s[u],
                      f = l[u];
                    c.push(['<button type="button" class="note-color-btn"', 'style="background-color:', h, '" ', 'data-event="', a, '" ', 'data-value="', h, '" ', 'title="', f, '" ', 'aria-label="', f, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""));
                  }
                  o.push('<div class="note-color-row">' + c.join("") + "</div>");
                }
                e.html(o.join("")), n.tooltip && e.find(".note-color-btn").tooltip({
                  container: n.container || t.container,
                  trigger: "hover",
                  placement: "bottom"
                });
              })(e, n);
            },
            button: function button(e, n) {
              return r.a.create('<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1">', function (e, n) {
                n && n.tooltip && e.attr({
                  title: n.tooltip,
                  "aria-label": n.tooltip
                }).tooltip({
                  container: n.container || t.container,
                  trigger: "hover",
                  placement: "bottom"
                }).on("click", function (t) {
                  i()(t.currentTarget).tooltip("hide");
                }), n && n.codeviewButton && e.addClass("note-codeview-keep");
              })(e, n);
            },
            toggleBtn: function toggleBtn(t, e) {
              t.toggleClass("disabled", !e), t.attr("disabled", !e);
            },
            toggleBtnActive: function toggleBtnActive(t, e) {
              t.toggleClass("active", e);
            },
            onDialogShown: function onDialogShown(t, e) {
              t.one("shown.bs.modal", e);
            },
            onDialogHidden: function onDialogHidden(t, e) {
              t.one("hidden.bs.modal", e);
            },
            showDialog: function showDialog(t) {
              t.modal("show");
            },
            hideDialog: function hideDialog(t) {
              t.modal("hide");
            },
            createLayout: function createLayout(e) {
              var n = (t.airMode ? f([c([u(), p()])]) : "bottom" === t.toolbarPosition ? s([c([u(), d()]), l(), h()]) : s([l(), c([u(), d()]), h()])).render();
              return n.insertAfter(e), {
                note: e,
                editor: n,
                toolbar: n.find(".note-toolbar"),
                editingArea: n.find(".note-editing-area"),
                editable: n.find(".note-editable"),
                codable: n.find(".note-codable"),
                statusbar: n.find(".note-statusbar")
              };
            },
            removeLayout: function removeLayout(t, e) {
              t.html(e.editable.html()), e.editor.remove(), t.show();
            }
          };
        };
      n(3), n(5);
      i.a.summernote = i.a.extend(i.a.summernote, {
        ui_template: x,
        "interface": "bs4"
      }), i.a.summernote.options.styleTags = ["p", {
        title: "Blockquote",
        tag: "blockquote",
        className: "blockquote",
        value: "blockquote"
      }, "pre", "h1", "h2", "h3", "h4", "h5", "h6"];
    }
  });
});

/***/ }),

/***/ "./public/backend/js/summernote-math.js":
/*!**********************************************!*\
  !*** ./public/backend/js/summernote-math.js ***!
  \**********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
(function (factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  $.extend(true, $.summernote.lang, {
    'en-US': {
      /* English */
      math: {
        dialogTitle: 'Insert Math',
        tooltip: 'Insert Math',
        pluginTitle: 'Insert math',
        ok: 'Insert',
        cancel: 'Cancel'
      }
    }
  });
  $.extend($.summernote.options, {
    math: {
      icon: '<b>&sum;</b>'
    }
  });
  $.extend($.summernote.plugins, {
    'math': function math(context) {
      var self = this;
      var ui = $.summernote.ui;
      //var $note=context.layoutInfo.note;
      var $editor = context.layoutInfo.editor;
      //var $editable=context.layoutInfo.editable;
      var options = context.options;
      var lang = options.langInfo;
      self.events = {
        'summernote.keyup summernote.mouseup summernote.change summernote.scroll': function summernoteKeyup_summernoteMouseup_summernoteChange_summernoteScroll() {
          self.update();
        },
        'summernote.disable summernote.dialog.shown': function summernoteDisable_summernoteDialogShown() {
          self.hide();
        }
      };
      context.memo('button.math', function () {
        var button = ui.button({
          contents: options.math.icon,
          container: false,
          tooltip: lang.math.tooltip,
          click: function click(e) {
            // Cursor position must be saved because is lost when popup is opened.
            context.invoke('editor.saveRange');
            context.invoke('math.show');
          }
        });
        return button.render();
      });
      self.initialize = function () {
        var $container = options.dialogsInBody ? $(document.body) : $editor;
        var body = "<div class=\"form-group\">\n                    <p>Type <a href=\"https://khan.github.io/KaTeX/function-support.html\" target=_blank\">LaTeX markup</a> here: </p>\n                    <p><input class=\"note-latex form-control\"></p>\n                    <p>Preview: </p>\n                    <div style=\"min-height:20px;\"><span class=\"note-math-dialog\"></span></div>\n\n                    <script>\n                    var $mathElement = $('.note-math-dialog');\n                    var mathSpan = $mathElement;\n                    var latexSpan = document.getElementsByClassName('note-latex');\n\n\n                    for(let i=0;i<latexSpan.length;i++){\n                        latexSpan[i].addEventListener('keyup', renderMath);\n                    }\n\n                    function renderMath(){\n                        let oldMath = mathSpan;\n                        try {\n                            for(let i=0;i<mathSpan.length;i++){\n                                katex.render(this.value, mathSpan[i]);\n                            }\n                        }\n                        catch(e) {\n                            // KaTeX parse error while typing, to prevent rendered math from dissappearing while typing\n                            // partially complete markup\n                            for(let $i=0;i<mathSpan.length;i++){\n                                mathSpan.innerHTML = oldMath.innerHTML;\n                            }\n                        }\n                    }\n\n                    </script>\n\n                    </div>";
        self.$dialog = ui.dialog({
          title: lang.math.dialogTitle,
          body: body,
          footer: '<button class="btn btn-primary note-math-btn">' + lang.math.ok + '</button>'
        }).render().appendTo($container);
        self.$popover = ui.popover({
          className: 'note-math-popover'
        }).render().appendTo(options.container);
        var $content = self.$popover.find('.popover-content,.note-popover-content');
        context.invoke('buttons.build', $content, ['math']);
      };
      self.hasMath = function (node) {
        return node && $(node).hasClass('note-math');
      };
      self.isOnMath = function (range) {
        var ancestor = $.summernote.dom.ancestor(range.sc, self.hasMath);
        return !!ancestor && ancestor === $.summernote.dom.ancestor(range.ec, self.hasMath);
      };
      self.update = function () {
        // Prevent focusing on editable when invoke('code') is executed
        if (!context.invoke('editor.hasFocus')) {
          self.hide();
          return;
        }
        var rng = context.invoke('editor.getLastRange');
        if (rng.isCollapsed() && self.isOnMath(rng)) {
          var node = $.summernote.dom.ancestor(rng.sc, self.hasMath);
          var latex = $(node).find('.note-latex');
          if (latex.text().length !== 0) {
            self.$popover.find('button').html(latex.text());
            var pos = $.summernote.dom.posFromPlaceholder(node);
            self.$popover.css({
              display: 'block',
              left: pos.left,
              top: pos.top
            });
          } else {
            self.hide();
          }
        } else {
          self.hide();
        }
      };
      self.hide = function () {
        self.$popover.hide();
      };
      self.destroy = function () {
        ui.hideDialog(this.$dialog);
        self.$dialog.remove();
        self.$popover.remove();
      };
      self.bindEnterKey = function ($input, $btn) {
        $input.on('keypress', function (event) {
          if (event.keyCode === 13) $btn.trigger('click');
        });
      };
      self.bindLabels = function () {
        self.$dialog.find('.form-control:first').focus().select();
        self.$dialog.find('label').on('click', function () {
          $(this).parent().find('.form-control:first').focus();
        });
      };
      self.show = function () {
        var $mathSpan = self.$dialog.find('.note-math-dialog');
        var $latexSpan = self.$dialog.find('#note-latex');
        var $selectedMathNode = self.getSelectedMath();
        if ($selectedMathNode === null) {
          // reset the dialog input and math
          $mathSpan.empty();
          $latexSpan.val('');
        } else {
          // edit the selected math node
          // get the hidden LaTeX markup from the selected math node
          var hiddenLatex = $selectedMathNode.find('.note-latex').text();
          $latexSpan.val(hiddenLatex);
          katex.render(hiddenLatex, $mathSpan[0]);
        }
        var mathInfo = {}; // not used

        self.showMathDialog(mathInfo).then(function (mathInfo) {
          ui.hideDialog(self.$dialog);
          var $mathNodeClone = $mathSpan.clone();
          var $latexNode = $('<span>');
          $latexNode.addClass('note-latex').css('display', 'none').text($latexSpan.val()).appendTo($mathNodeClone);

          // So we don't pick up the dialog node when selecting math nodes in the editor
          $mathNodeClone.removeClass('note-math-dialog').addClass('note-math');

          // We restore cursor position and element is inserted in correct pos.
          context.invoke('editor.restoreRange');
          context.invoke('editor.focus');
          if ($selectedMathNode === null) context.invoke('editor.insertNode', $mathNodeClone[0]);else {
            // if we are editing an existing mathNode, just replace the contents:
            if ($.trim($latexNode.html()) == '') {
              // unless there's nothing there, then delete the node
              $selectedMathNode.remove();
            } else {
              $selectedMathNode.html($mathNodeClone.html());
            }
          }
        });
      };
      self.showMathDialog = function (editorInfo) {
        return $.Deferred(function (deferred) {
          var $editBtn = self.$dialog.find('.note-math-btn');
          ui.onDialogShown(self.$dialog, function () {
            context.triggerEvent('dialog.shown');
            $editBtn.click(function (e) {
              e.preventDefault();
              deferred.resolve({});
            });
            self.bindEnterKey($editBtn);
            self.bindLabels();
          });
          ui.onDialogHidden(self.$dialog, function () {
            $editBtn.off('click');
            if (deferred.state() === 'pending') deferred.reject();
          });
          ui.showDialog(self.$dialog);
        });
      };
      self.getSelectedMath = function () {
        var selection = window.getSelection();
        if (selection) {
          // get all math nodes
          var $selectedMathNode = null;
          var $mathNodes = $('.note-math');
          $mathNodes.each(function () {
            if (selection.containsNode(this, true)) {
              $selectedMathNode = $(this);
            }
          });
          return $selectedMathNode;
        }
      };
    }
  });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./public/backend/js/summernote-bs4.min.js");
/******/ 	__webpack_require__("./public/backend/js/katex.min.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./public/backend/js/summernote-math.js");
/******/ 	
/******/ })()
;