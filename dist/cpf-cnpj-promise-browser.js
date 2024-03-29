(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('events'), require('string_decoder'), require('buffer'), require('util'), require('stream')) :
  typeof define === 'function' && define.amd ? define(['events', 'string_decoder', 'buffer', 'util', 'stream'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cpfCnpj = factory(global.require$$2, global.require$$1$3, global.require$$2$1, global.require$$0$3, global.require$$0$4));
}(this, (function (require$$2, require$$1$3, require$$2$1, require$$0$3, require$$0$4) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
  var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1$3);
  var require$$2__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$2$1);
  var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0$3);
  var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$4);

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (_isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;

    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = o[Symbol.iterator]();
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var CpfCnpjPromiseError = /*#__PURE__*/function (_Error) {
    _inherits(CpfCnpjPromiseError, _Error);

    var _super = _createSuper(CpfCnpjPromiseError);

    function CpfCnpjPromiseError() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          message = _ref.message,
          type = _ref.type,
          errors = _ref.errors;

      _classCallCheck(this, CpfCnpjPromiseError);

      _this = _super.call(this);
      _this.name = 'CpfCnpjPromiseError';
      _this.message = message;
      _this.type = type;
      _this.errors = errors;
      return _this;
    }

    return CpfCnpjPromiseError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  function fetch (e, n) {
    return n = n || {}, new Promise(function (t, r) {
      var s = new XMLHttpRequest(),
          o = [],
          u = [],
          i = {},
          a = function a() {
        return {
          ok: 2 == (s.status / 100 | 0),
          statusText: s.statusText,
          status: s.status,
          url: s.responseURL,
          text: function text() {
            return Promise.resolve(s.responseText);
          },
          json: function json() {
            return Promise.resolve(s.responseText).then(JSON.parse);
          },
          blob: function blob() {
            return Promise.resolve(new Blob([s.response]));
          },
          clone: a,
          headers: {
            keys: function keys() {
              return o;
            },
            entries: function entries() {
              return u;
            },
            get: function get(e) {
              return i[e.toLowerCase()];
            },
            has: function has(e) {
              return e.toLowerCase() in i;
            }
          }
        };
      };

      for (var l in s.open(n.method || "get", e, !0), s.onload = function () {
        s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
          o.push(n = n.toLowerCase()), u.push([n, t]), i[n] = i[n] ? i[n] + "," + t : t;
        }), t(a());
      }, s.onerror = r, s.withCredentials = "include" == n.credentials, n.headers) {
        s.setRequestHeader(l, n.headers[l]);
      }

      s.send(n.body || null);
    });
  }

  var ServiceError = /*#__PURE__*/function (_Error) {
    _inherits(ServiceError, _Error);

    var _super = _createSuper(ServiceError);

    function ServiceError() {
      var _this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          message = _ref.message,
          service = _ref.service;

      _classCallCheck(this, ServiceError);

      _this = _super.call(this);
      _this.name = 'ServiceError';
      _this.message = message;
      _this.service = service;
      return _this;
    }

    return ServiceError;
  }( /*#__PURE__*/_wrapNativeSuper(Error));

  var receitaWsProvider = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cnpj) {
      var url, options;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Consult CNPJ at ReceitaWS
              url = "https://www.receitaws.com.br/v1/cnpj/".concat(encodeURI(cnpj));
              options = {
                method: 'GET'
              };
              _context.next = 4;
              return fetch(url, options).then(parseResponse).then(extractValuesData)["catch"](throwApplicationError);

            case 4:
              return _context.abrupt("return", _context.sent);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function receitaWsProvider(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var parseResponse = function parseResponse(res) {
    if (res.ok === false || res.status !== 200) {
      throw new Error('CNPJ não encontrado na base de dados da Receita WS.');
    }

    return res.json();
  };

  var extractValuesData = function extractValuesData(res) {
    var data = {
      name: res.nome,
      fantasy: res.fantasia,
      cep: res.cep,
      state: res.uf,
      city: res.municipio,
      neighborhood: res.bairro,
      street: res.logradouro,
      streetnumber: res.numero,
      complement: res.complemento,
      phone: res.telefone,
      mail: res.email,
      service: 'receitaws'
    };
    return data;
  };

  var throwApplicationError = function throwApplicationError(error) {
    var serviceError = new ServiceError({
      message: error.response.data.message,
      service: 'receitaws'
    });
    throw serviceError;
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  		path: basedir,
  		exports: {},
  		require: function (path, base) {
  			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
  		}
  	}, fn(module, module.exports), module.exports;
  }

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var decodeMap = {
  	"0": 65533,
  	"128": 8364,
  	"130": 8218,
  	"131": 402,
  	"132": 8222,
  	"133": 8230,
  	"134": 8224,
  	"135": 8225,
  	"136": 710,
  	"137": 8240,
  	"138": 352,
  	"139": 8249,
  	"140": 338,
  	"142": 381,
  	"145": 8216,
  	"146": 8217,
  	"147": 8220,
  	"148": 8221,
  	"149": 8226,
  	"150": 8211,
  	"151": 8212,
  	"152": 732,
  	"153": 8482,
  	"154": 353,
  	"155": 8250,
  	"156": 339,
  	"158": 382,
  	"159": 376
  };

  var decode_codepoint = decodeCodePoint; // modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119

  function decodeCodePoint(codePoint) {
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
      return "\uFFFD";
    }

    if (codePoint in decodeMap) {
      codePoint = decodeMap[codePoint];
    }

    var output = "";

    if (codePoint > 0xffff) {
      codePoint -= 0x10000;
      output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
      codePoint = 0xdc00 | codePoint & 0x3ff;
    }

    output += String.fromCharCode(codePoint);
    return output;
  }

  var Aacute = "Á";
  var aacute = "á";
  var Abreve = "Ă";
  var abreve = "ă";
  var ac = "∾";
  var acd = "∿";
  var acE = "∾̳";
  var Acirc = "Â";
  var acirc = "â";
  var acute = "´";
  var Acy = "А";
  var acy = "а";
  var AElig = "Æ";
  var aelig = "æ";
  var af = "⁡";
  var Afr = "𝔄";
  var afr = "𝔞";
  var Agrave = "À";
  var agrave = "à";
  var alefsym = "ℵ";
  var aleph = "ℵ";
  var Alpha = "Α";
  var alpha = "α";
  var Amacr = "Ā";
  var amacr = "ā";
  var amalg = "⨿";
  var amp = "&";
  var AMP = "&";
  var andand = "⩕";
  var And = "⩓";
  var and = "∧";
  var andd = "⩜";
  var andslope = "⩘";
  var andv = "⩚";
  var ang = "∠";
  var ange = "⦤";
  var angle = "∠";
  var angmsdaa = "⦨";
  var angmsdab = "⦩";
  var angmsdac = "⦪";
  var angmsdad = "⦫";
  var angmsdae = "⦬";
  var angmsdaf = "⦭";
  var angmsdag = "⦮";
  var angmsdah = "⦯";
  var angmsd = "∡";
  var angrt = "∟";
  var angrtvb = "⊾";
  var angrtvbd = "⦝";
  var angsph = "∢";
  var angst = "Å";
  var angzarr = "⍼";
  var Aogon = "Ą";
  var aogon = "ą";
  var Aopf = "𝔸";
  var aopf = "𝕒";
  var apacir = "⩯";
  var ap = "≈";
  var apE = "⩰";
  var ape = "≊";
  var apid = "≋";
  var apos = "'";
  var ApplyFunction = "⁡";
  var approx = "≈";
  var approxeq = "≊";
  var Aring = "Å";
  var aring = "å";
  var Ascr = "𝒜";
  var ascr = "𝒶";
  var Assign = "≔";
  var ast = "*";
  var asymp = "≈";
  var asympeq = "≍";
  var Atilde = "Ã";
  var atilde = "ã";
  var Auml = "Ä";
  var auml = "ä";
  var awconint = "∳";
  var awint = "⨑";
  var backcong = "≌";
  var backepsilon = "϶";
  var backprime = "‵";
  var backsim = "∽";
  var backsimeq = "⋍";
  var Backslash = "∖";
  var Barv = "⫧";
  var barvee = "⊽";
  var barwed = "⌅";
  var Barwed = "⌆";
  var barwedge = "⌅";
  var bbrk = "⎵";
  var bbrktbrk = "⎶";
  var bcong = "≌";
  var Bcy = "Б";
  var bcy = "б";
  var bdquo = "„";
  var becaus = "∵";
  var because = "∵";
  var Because = "∵";
  var bemptyv = "⦰";
  var bepsi = "϶";
  var bernou = "ℬ";
  var Bernoullis = "ℬ";
  var Beta = "Β";
  var beta = "β";
  var beth = "ℶ";
  var between = "≬";
  var Bfr = "𝔅";
  var bfr = "𝔟";
  var bigcap = "⋂";
  var bigcirc = "◯";
  var bigcup = "⋃";
  var bigodot = "⨀";
  var bigoplus = "⨁";
  var bigotimes = "⨂";
  var bigsqcup = "⨆";
  var bigstar = "★";
  var bigtriangledown = "▽";
  var bigtriangleup = "△";
  var biguplus = "⨄";
  var bigvee = "⋁";
  var bigwedge = "⋀";
  var bkarow = "⤍";
  var blacklozenge = "⧫";
  var blacksquare = "▪";
  var blacktriangle = "▴";
  var blacktriangledown = "▾";
  var blacktriangleleft = "◂";
  var blacktriangleright = "▸";
  var blank = "␣";
  var blk12 = "▒";
  var blk14 = "░";
  var blk34 = "▓";
  var block = "█";
  var bne = "=⃥";
  var bnequiv = "≡⃥";
  var bNot = "⫭";
  var bnot = "⌐";
  var Bopf = "𝔹";
  var bopf = "𝕓";
  var bot = "⊥";
  var bottom = "⊥";
  var bowtie = "⋈";
  var boxbox = "⧉";
  var boxdl = "┐";
  var boxdL = "╕";
  var boxDl = "╖";
  var boxDL = "╗";
  var boxdr = "┌";
  var boxdR = "╒";
  var boxDr = "╓";
  var boxDR = "╔";
  var boxh = "─";
  var boxH = "═";
  var boxhd = "┬";
  var boxHd = "╤";
  var boxhD = "╥";
  var boxHD = "╦";
  var boxhu = "┴";
  var boxHu = "╧";
  var boxhU = "╨";
  var boxHU = "╩";
  var boxminus = "⊟";
  var boxplus = "⊞";
  var boxtimes = "⊠";
  var boxul = "┘";
  var boxuL = "╛";
  var boxUl = "╜";
  var boxUL = "╝";
  var boxur = "└";
  var boxuR = "╘";
  var boxUr = "╙";
  var boxUR = "╚";
  var boxv = "│";
  var boxV = "║";
  var boxvh = "┼";
  var boxvH = "╪";
  var boxVh = "╫";
  var boxVH = "╬";
  var boxvl = "┤";
  var boxvL = "╡";
  var boxVl = "╢";
  var boxVL = "╣";
  var boxvr = "├";
  var boxvR = "╞";
  var boxVr = "╟";
  var boxVR = "╠";
  var bprime = "‵";
  var breve = "˘";
  var Breve = "˘";
  var brvbar = "¦";
  var bscr = "𝒷";
  var Bscr = "ℬ";
  var bsemi = "⁏";
  var bsim = "∽";
  var bsime = "⋍";
  var bsolb = "⧅";
  var bsol = "\\";
  var bsolhsub = "⟈";
  var bull = "•";
  var bullet = "•";
  var bump = "≎";
  var bumpE = "⪮";
  var bumpe = "≏";
  var Bumpeq = "≎";
  var bumpeq = "≏";
  var Cacute = "Ć";
  var cacute = "ć";
  var capand = "⩄";
  var capbrcup = "⩉";
  var capcap = "⩋";
  var cap = "∩";
  var Cap = "⋒";
  var capcup = "⩇";
  var capdot = "⩀";
  var CapitalDifferentialD = "ⅅ";
  var caps = "∩︀";
  var caret = "⁁";
  var caron = "ˇ";
  var Cayleys = "ℭ";
  var ccaps = "⩍";
  var Ccaron = "Č";
  var ccaron = "č";
  var Ccedil = "Ç";
  var ccedil = "ç";
  var Ccirc = "Ĉ";
  var ccirc = "ĉ";
  var Cconint = "∰";
  var ccups = "⩌";
  var ccupssm = "⩐";
  var Cdot = "Ċ";
  var cdot = "ċ";
  var cedil = "¸";
  var Cedilla = "¸";
  var cemptyv = "⦲";
  var cent = "¢";
  var centerdot = "·";
  var CenterDot = "·";
  var cfr = "𝔠";
  var Cfr = "ℭ";
  var CHcy = "Ч";
  var chcy = "ч";
  var check = "✓";
  var checkmark = "✓";
  var Chi = "Χ";
  var chi = "χ";
  var circ = "ˆ";
  var circeq = "≗";
  var circlearrowleft = "↺";
  var circlearrowright = "↻";
  var circledast = "⊛";
  var circledcirc = "⊚";
  var circleddash = "⊝";
  var CircleDot = "⊙";
  var circledR = "®";
  var circledS = "Ⓢ";
  var CircleMinus = "⊖";
  var CirclePlus = "⊕";
  var CircleTimes = "⊗";
  var cir = "○";
  var cirE = "⧃";
  var cire = "≗";
  var cirfnint = "⨐";
  var cirmid = "⫯";
  var cirscir = "⧂";
  var ClockwiseContourIntegral = "∲";
  var CloseCurlyDoubleQuote = "”";
  var CloseCurlyQuote = "’";
  var clubs = "♣";
  var clubsuit = "♣";
  var colon = ":";
  var Colon = "∷";
  var Colone = "⩴";
  var colone = "≔";
  var coloneq = "≔";
  var comma = ",";
  var commat = "@";
  var comp = "∁";
  var compfn = "∘";
  var complement = "∁";
  var complexes = "ℂ";
  var cong = "≅";
  var congdot = "⩭";
  var Congruent = "≡";
  var conint = "∮";
  var Conint = "∯";
  var ContourIntegral = "∮";
  var copf = "𝕔";
  var Copf = "ℂ";
  var coprod = "∐";
  var Coproduct = "∐";
  var copy = "©";
  var COPY = "©";
  var copysr = "℗";
  var CounterClockwiseContourIntegral = "∳";
  var crarr = "↵";
  var cross = "✗";
  var Cross = "⨯";
  var Cscr = "𝒞";
  var cscr = "𝒸";
  var csub = "⫏";
  var csube = "⫑";
  var csup = "⫐";
  var csupe = "⫒";
  var ctdot = "⋯";
  var cudarrl = "⤸";
  var cudarrr = "⤵";
  var cuepr = "⋞";
  var cuesc = "⋟";
  var cularr = "↶";
  var cularrp = "⤽";
  var cupbrcap = "⩈";
  var cupcap = "⩆";
  var CupCap = "≍";
  var cup = "∪";
  var Cup = "⋓";
  var cupcup = "⩊";
  var cupdot = "⊍";
  var cupor = "⩅";
  var cups = "∪︀";
  var curarr = "↷";
  var curarrm = "⤼";
  var curlyeqprec = "⋞";
  var curlyeqsucc = "⋟";
  var curlyvee = "⋎";
  var curlywedge = "⋏";
  var curren = "¤";
  var curvearrowleft = "↶";
  var curvearrowright = "↷";
  var cuvee = "⋎";
  var cuwed = "⋏";
  var cwconint = "∲";
  var cwint = "∱";
  var cylcty = "⌭";
  var dagger = "†";
  var Dagger = "‡";
  var daleth = "ℸ";
  var darr = "↓";
  var Darr = "↡";
  var dArr = "⇓";
  var dash = "‐";
  var Dashv = "⫤";
  var dashv = "⊣";
  var dbkarow = "⤏";
  var dblac = "˝";
  var Dcaron = "Ď";
  var dcaron = "ď";
  var Dcy = "Д";
  var dcy = "д";
  var ddagger = "‡";
  var ddarr = "⇊";
  var DD = "ⅅ";
  var dd = "ⅆ";
  var DDotrahd = "⤑";
  var ddotseq = "⩷";
  var deg = "°";
  var Del = "∇";
  var Delta = "Δ";
  var delta = "δ";
  var demptyv = "⦱";
  var dfisht = "⥿";
  var Dfr = "𝔇";
  var dfr = "𝔡";
  var dHar = "⥥";
  var dharl = "⇃";
  var dharr = "⇂";
  var DiacriticalAcute = "´";
  var DiacriticalDot = "˙";
  var DiacriticalDoubleAcute = "˝";
  var DiacriticalGrave = "`";
  var DiacriticalTilde = "˜";
  var diam = "⋄";
  var diamond = "⋄";
  var Diamond = "⋄";
  var diamondsuit = "♦";
  var diams = "♦";
  var die = "¨";
  var DifferentialD = "ⅆ";
  var digamma = "ϝ";
  var disin = "⋲";
  var div = "÷";
  var divide = "÷";
  var divideontimes = "⋇";
  var divonx = "⋇";
  var DJcy = "Ђ";
  var djcy = "ђ";
  var dlcorn = "⌞";
  var dlcrop = "⌍";
  var dollar = "$";
  var Dopf = "𝔻";
  var dopf = "𝕕";
  var Dot = "¨";
  var dot = "˙";
  var DotDot = "⃜";
  var doteq = "≐";
  var doteqdot = "≑";
  var DotEqual = "≐";
  var dotminus = "∸";
  var dotplus = "∔";
  var dotsquare = "⊡";
  var doublebarwedge = "⌆";
  var DoubleContourIntegral = "∯";
  var DoubleDot = "¨";
  var DoubleDownArrow = "⇓";
  var DoubleLeftArrow = "⇐";
  var DoubleLeftRightArrow = "⇔";
  var DoubleLeftTee = "⫤";
  var DoubleLongLeftArrow = "⟸";
  var DoubleLongLeftRightArrow = "⟺";
  var DoubleLongRightArrow = "⟹";
  var DoubleRightArrow = "⇒";
  var DoubleRightTee = "⊨";
  var DoubleUpArrow = "⇑";
  var DoubleUpDownArrow = "⇕";
  var DoubleVerticalBar = "∥";
  var DownArrowBar = "⤓";
  var downarrow = "↓";
  var DownArrow = "↓";
  var Downarrow = "⇓";
  var DownArrowUpArrow = "⇵";
  var DownBreve = "̑";
  var downdownarrows = "⇊";
  var downharpoonleft = "⇃";
  var downharpoonright = "⇂";
  var DownLeftRightVector = "⥐";
  var DownLeftTeeVector = "⥞";
  var DownLeftVectorBar = "⥖";
  var DownLeftVector = "↽";
  var DownRightTeeVector = "⥟";
  var DownRightVectorBar = "⥗";
  var DownRightVector = "⇁";
  var DownTeeArrow = "↧";
  var DownTee = "⊤";
  var drbkarow = "⤐";
  var drcorn = "⌟";
  var drcrop = "⌌";
  var Dscr = "𝒟";
  var dscr = "𝒹";
  var DScy = "Ѕ";
  var dscy = "ѕ";
  var dsol = "⧶";
  var Dstrok = "Đ";
  var dstrok = "đ";
  var dtdot = "⋱";
  var dtri = "▿";
  var dtrif = "▾";
  var duarr = "⇵";
  var duhar = "⥯";
  var dwangle = "⦦";
  var DZcy = "Џ";
  var dzcy = "џ";
  var dzigrarr = "⟿";
  var Eacute = "É";
  var eacute = "é";
  var easter = "⩮";
  var Ecaron = "Ě";
  var ecaron = "ě";
  var Ecirc = "Ê";
  var ecirc = "ê";
  var ecir = "≖";
  var ecolon = "≕";
  var Ecy = "Э";
  var ecy = "э";
  var eDDot = "⩷";
  var Edot = "Ė";
  var edot = "ė";
  var eDot = "≑";
  var ee = "ⅇ";
  var efDot = "≒";
  var Efr = "𝔈";
  var efr = "𝔢";
  var eg = "⪚";
  var Egrave = "È";
  var egrave = "è";
  var egs = "⪖";
  var egsdot = "⪘";
  var el = "⪙";
  var Element = "∈";
  var elinters = "⏧";
  var ell = "ℓ";
  var els = "⪕";
  var elsdot = "⪗";
  var Emacr = "Ē";
  var emacr = "ē";
  var empty = "∅";
  var emptyset = "∅";
  var EmptySmallSquare = "◻";
  var emptyv = "∅";
  var EmptyVerySmallSquare = "▫";
  var emsp13 = " ";
  var emsp14 = " ";
  var emsp = " ";
  var ENG = "Ŋ";
  var eng = "ŋ";
  var ensp = " ";
  var Eogon = "Ę";
  var eogon = "ę";
  var Eopf = "𝔼";
  var eopf = "𝕖";
  var epar = "⋕";
  var eparsl = "⧣";
  var eplus = "⩱";
  var epsi = "ε";
  var Epsilon = "Ε";
  var epsilon = "ε";
  var epsiv = "ϵ";
  var eqcirc = "≖";
  var eqcolon = "≕";
  var eqsim = "≂";
  var eqslantgtr = "⪖";
  var eqslantless = "⪕";
  var Equal = "⩵";
  var equals = "=";
  var EqualTilde = "≂";
  var equest = "≟";
  var Equilibrium = "⇌";
  var equiv = "≡";
  var equivDD = "⩸";
  var eqvparsl = "⧥";
  var erarr = "⥱";
  var erDot = "≓";
  var escr = "ℯ";
  var Escr = "ℰ";
  var esdot = "≐";
  var Esim = "⩳";
  var esim = "≂";
  var Eta = "Η";
  var eta = "η";
  var ETH = "Ð";
  var eth = "ð";
  var Euml = "Ë";
  var euml = "ë";
  var euro = "€";
  var excl = "!";
  var exist = "∃";
  var Exists = "∃";
  var expectation = "ℰ";
  var exponentiale = "ⅇ";
  var ExponentialE = "ⅇ";
  var fallingdotseq = "≒";
  var Fcy = "Ф";
  var fcy = "ф";
  var female = "♀";
  var ffilig = "ﬃ";
  var fflig = "ﬀ";
  var ffllig = "ﬄ";
  var Ffr = "𝔉";
  var ffr = "𝔣";
  var filig = "ﬁ";
  var FilledSmallSquare = "◼";
  var FilledVerySmallSquare = "▪";
  var fjlig = "fj";
  var flat = "♭";
  var fllig = "ﬂ";
  var fltns = "▱";
  var fnof = "ƒ";
  var Fopf = "𝔽";
  var fopf = "𝕗";
  var forall = "∀";
  var ForAll = "∀";
  var fork = "⋔";
  var forkv = "⫙";
  var Fouriertrf = "ℱ";
  var fpartint = "⨍";
  var frac12 = "½";
  var frac13 = "⅓";
  var frac14 = "¼";
  var frac15 = "⅕";
  var frac16 = "⅙";
  var frac18 = "⅛";
  var frac23 = "⅔";
  var frac25 = "⅖";
  var frac34 = "¾";
  var frac35 = "⅗";
  var frac38 = "⅜";
  var frac45 = "⅘";
  var frac56 = "⅚";
  var frac58 = "⅝";
  var frac78 = "⅞";
  var frasl = "⁄";
  var frown = "⌢";
  var fscr = "𝒻";
  var Fscr = "ℱ";
  var gacute = "ǵ";
  var Gamma = "Γ";
  var gamma = "γ";
  var Gammad = "Ϝ";
  var gammad = "ϝ";
  var gap = "⪆";
  var Gbreve = "Ğ";
  var gbreve = "ğ";
  var Gcedil = "Ģ";
  var Gcirc = "Ĝ";
  var gcirc = "ĝ";
  var Gcy = "Г";
  var gcy = "г";
  var Gdot = "Ġ";
  var gdot = "ġ";
  var ge = "≥";
  var gE = "≧";
  var gEl = "⪌";
  var gel = "⋛";
  var geq = "≥";
  var geqq = "≧";
  var geqslant = "⩾";
  var gescc = "⪩";
  var ges = "⩾";
  var gesdot = "⪀";
  var gesdoto = "⪂";
  var gesdotol = "⪄";
  var gesl = "⋛︀";
  var gesles = "⪔";
  var Gfr = "𝔊";
  var gfr = "𝔤";
  var gg = "≫";
  var Gg = "⋙";
  var ggg = "⋙";
  var gimel = "ℷ";
  var GJcy = "Ѓ";
  var gjcy = "ѓ";
  var gla = "⪥";
  var gl = "≷";
  var glE = "⪒";
  var glj = "⪤";
  var gnap = "⪊";
  var gnapprox = "⪊";
  var gne = "⪈";
  var gnE = "≩";
  var gneq = "⪈";
  var gneqq = "≩";
  var gnsim = "⋧";
  var Gopf = "𝔾";
  var gopf = "𝕘";
  var grave = "`";
  var GreaterEqual = "≥";
  var GreaterEqualLess = "⋛";
  var GreaterFullEqual = "≧";
  var GreaterGreater = "⪢";
  var GreaterLess = "≷";
  var GreaterSlantEqual = "⩾";
  var GreaterTilde = "≳";
  var Gscr = "𝒢";
  var gscr = "ℊ";
  var gsim = "≳";
  var gsime = "⪎";
  var gsiml = "⪐";
  var gtcc = "⪧";
  var gtcir = "⩺";
  var gt = ">";
  var GT = ">";
  var Gt = "≫";
  var gtdot = "⋗";
  var gtlPar = "⦕";
  var gtquest = "⩼";
  var gtrapprox = "⪆";
  var gtrarr = "⥸";
  var gtrdot = "⋗";
  var gtreqless = "⋛";
  var gtreqqless = "⪌";
  var gtrless = "≷";
  var gtrsim = "≳";
  var gvertneqq = "≩︀";
  var gvnE = "≩︀";
  var Hacek = "ˇ";
  var hairsp = " ";
  var half = "½";
  var hamilt = "ℋ";
  var HARDcy = "Ъ";
  var hardcy = "ъ";
  var harrcir = "⥈";
  var harr = "↔";
  var hArr = "⇔";
  var harrw = "↭";
  var Hat = "^";
  var hbar = "ℏ";
  var Hcirc = "Ĥ";
  var hcirc = "ĥ";
  var hearts = "♥";
  var heartsuit = "♥";
  var hellip = "…";
  var hercon = "⊹";
  var hfr = "𝔥";
  var Hfr = "ℌ";
  var HilbertSpace = "ℋ";
  var hksearow = "⤥";
  var hkswarow = "⤦";
  var hoarr = "⇿";
  var homtht = "∻";
  var hookleftarrow = "↩";
  var hookrightarrow = "↪";
  var hopf = "𝕙";
  var Hopf = "ℍ";
  var horbar = "―";
  var HorizontalLine = "─";
  var hscr = "𝒽";
  var Hscr = "ℋ";
  var hslash = "ℏ";
  var Hstrok = "Ħ";
  var hstrok = "ħ";
  var HumpDownHump = "≎";
  var HumpEqual = "≏";
  var hybull = "⁃";
  var hyphen = "‐";
  var Iacute = "Í";
  var iacute = "í";
  var ic = "⁣";
  var Icirc = "Î";
  var icirc = "î";
  var Icy = "И";
  var icy = "и";
  var Idot = "İ";
  var IEcy = "Е";
  var iecy = "е";
  var iexcl = "¡";
  var iff = "⇔";
  var ifr = "𝔦";
  var Ifr = "ℑ";
  var Igrave = "Ì";
  var igrave = "ì";
  var ii = "ⅈ";
  var iiiint = "⨌";
  var iiint = "∭";
  var iinfin = "⧜";
  var iiota = "℩";
  var IJlig = "Ĳ";
  var ijlig = "ĳ";
  var Imacr = "Ī";
  var imacr = "ī";
  var image = "ℑ";
  var ImaginaryI = "ⅈ";
  var imagline = "ℐ";
  var imagpart = "ℑ";
  var imath = "ı";
  var Im = "ℑ";
  var imof = "⊷";
  var imped = "Ƶ";
  var Implies = "⇒";
  var incare = "℅";
  var infin = "∞";
  var infintie = "⧝";
  var inodot = "ı";
  var intcal = "⊺";
  var int = "∫";
  var Int = "∬";
  var integers = "ℤ";
  var Integral = "∫";
  var intercal = "⊺";
  var Intersection = "⋂";
  var intlarhk = "⨗";
  var intprod = "⨼";
  var InvisibleComma = "⁣";
  var InvisibleTimes = "⁢";
  var IOcy = "Ё";
  var iocy = "ё";
  var Iogon = "Į";
  var iogon = "į";
  var Iopf = "𝕀";
  var iopf = "𝕚";
  var Iota = "Ι";
  var iota = "ι";
  var iprod = "⨼";
  var iquest = "¿";
  var iscr = "𝒾";
  var Iscr = "ℐ";
  var isin = "∈";
  var isindot = "⋵";
  var isinE = "⋹";
  var isins = "⋴";
  var isinsv = "⋳";
  var isinv = "∈";
  var it = "⁢";
  var Itilde = "Ĩ";
  var itilde = "ĩ";
  var Iukcy = "І";
  var iukcy = "і";
  var Iuml = "Ï";
  var iuml = "ï";
  var Jcirc = "Ĵ";
  var jcirc = "ĵ";
  var Jcy = "Й";
  var jcy = "й";
  var Jfr = "𝔍";
  var jfr = "𝔧";
  var jmath = "ȷ";
  var Jopf = "𝕁";
  var jopf = "𝕛";
  var Jscr = "𝒥";
  var jscr = "𝒿";
  var Jsercy = "Ј";
  var jsercy = "ј";
  var Jukcy = "Є";
  var jukcy = "є";
  var Kappa = "Κ";
  var kappa = "κ";
  var kappav = "ϰ";
  var Kcedil = "Ķ";
  var kcedil = "ķ";
  var Kcy = "К";
  var kcy = "к";
  var Kfr = "𝔎";
  var kfr = "𝔨";
  var kgreen = "ĸ";
  var KHcy = "Х";
  var khcy = "х";
  var KJcy = "Ќ";
  var kjcy = "ќ";
  var Kopf = "𝕂";
  var kopf = "𝕜";
  var Kscr = "𝒦";
  var kscr = "𝓀";
  var lAarr = "⇚";
  var Lacute = "Ĺ";
  var lacute = "ĺ";
  var laemptyv = "⦴";
  var lagran = "ℒ";
  var Lambda = "Λ";
  var lambda = "λ";
  var lang = "⟨";
  var Lang = "⟪";
  var langd = "⦑";
  var langle = "⟨";
  var lap = "⪅";
  var Laplacetrf = "ℒ";
  var laquo = "«";
  var larrb = "⇤";
  var larrbfs = "⤟";
  var larr = "←";
  var Larr = "↞";
  var lArr = "⇐";
  var larrfs = "⤝";
  var larrhk = "↩";
  var larrlp = "↫";
  var larrpl = "⤹";
  var larrsim = "⥳";
  var larrtl = "↢";
  var latail = "⤙";
  var lAtail = "⤛";
  var lat = "⪫";
  var late = "⪭";
  var lates = "⪭︀";
  var lbarr = "⤌";
  var lBarr = "⤎";
  var lbbrk = "❲";
  var lbrace = "{";
  var lbrack = "[";
  var lbrke = "⦋";
  var lbrksld = "⦏";
  var lbrkslu = "⦍";
  var Lcaron = "Ľ";
  var lcaron = "ľ";
  var Lcedil = "Ļ";
  var lcedil = "ļ";
  var lceil = "⌈";
  var lcub = "{";
  var Lcy = "Л";
  var lcy = "л";
  var ldca = "⤶";
  var ldquo = "“";
  var ldquor = "„";
  var ldrdhar = "⥧";
  var ldrushar = "⥋";
  var ldsh = "↲";
  var le = "≤";
  var lE = "≦";
  var LeftAngleBracket = "⟨";
  var LeftArrowBar = "⇤";
  var leftarrow = "←";
  var LeftArrow = "←";
  var Leftarrow = "⇐";
  var LeftArrowRightArrow = "⇆";
  var leftarrowtail = "↢";
  var LeftCeiling = "⌈";
  var LeftDoubleBracket = "⟦";
  var LeftDownTeeVector = "⥡";
  var LeftDownVectorBar = "⥙";
  var LeftDownVector = "⇃";
  var LeftFloor = "⌊";
  var leftharpoondown = "↽";
  var leftharpoonup = "↼";
  var leftleftarrows = "⇇";
  var leftrightarrow = "↔";
  var LeftRightArrow = "↔";
  var Leftrightarrow = "⇔";
  var leftrightarrows = "⇆";
  var leftrightharpoons = "⇋";
  var leftrightsquigarrow = "↭";
  var LeftRightVector = "⥎";
  var LeftTeeArrow = "↤";
  var LeftTee = "⊣";
  var LeftTeeVector = "⥚";
  var leftthreetimes = "⋋";
  var LeftTriangleBar = "⧏";
  var LeftTriangle = "⊲";
  var LeftTriangleEqual = "⊴";
  var LeftUpDownVector = "⥑";
  var LeftUpTeeVector = "⥠";
  var LeftUpVectorBar = "⥘";
  var LeftUpVector = "↿";
  var LeftVectorBar = "⥒";
  var LeftVector = "↼";
  var lEg = "⪋";
  var leg = "⋚";
  var leq = "≤";
  var leqq = "≦";
  var leqslant = "⩽";
  var lescc = "⪨";
  var les = "⩽";
  var lesdot = "⩿";
  var lesdoto = "⪁";
  var lesdotor = "⪃";
  var lesg = "⋚︀";
  var lesges = "⪓";
  var lessapprox = "⪅";
  var lessdot = "⋖";
  var lesseqgtr = "⋚";
  var lesseqqgtr = "⪋";
  var LessEqualGreater = "⋚";
  var LessFullEqual = "≦";
  var LessGreater = "≶";
  var lessgtr = "≶";
  var LessLess = "⪡";
  var lesssim = "≲";
  var LessSlantEqual = "⩽";
  var LessTilde = "≲";
  var lfisht = "⥼";
  var lfloor = "⌊";
  var Lfr = "𝔏";
  var lfr = "𝔩";
  var lg = "≶";
  var lgE = "⪑";
  var lHar = "⥢";
  var lhard = "↽";
  var lharu = "↼";
  var lharul = "⥪";
  var lhblk = "▄";
  var LJcy = "Љ";
  var ljcy = "љ";
  var llarr = "⇇";
  var ll = "≪";
  var Ll = "⋘";
  var llcorner = "⌞";
  var Lleftarrow = "⇚";
  var llhard = "⥫";
  var lltri = "◺";
  var Lmidot = "Ŀ";
  var lmidot = "ŀ";
  var lmoustache = "⎰";
  var lmoust = "⎰";
  var lnap = "⪉";
  var lnapprox = "⪉";
  var lne = "⪇";
  var lnE = "≨";
  var lneq = "⪇";
  var lneqq = "≨";
  var lnsim = "⋦";
  var loang = "⟬";
  var loarr = "⇽";
  var lobrk = "⟦";
  var longleftarrow = "⟵";
  var LongLeftArrow = "⟵";
  var Longleftarrow = "⟸";
  var longleftrightarrow = "⟷";
  var LongLeftRightArrow = "⟷";
  var Longleftrightarrow = "⟺";
  var longmapsto = "⟼";
  var longrightarrow = "⟶";
  var LongRightArrow = "⟶";
  var Longrightarrow = "⟹";
  var looparrowleft = "↫";
  var looparrowright = "↬";
  var lopar = "⦅";
  var Lopf = "𝕃";
  var lopf = "𝕝";
  var loplus = "⨭";
  var lotimes = "⨴";
  var lowast = "∗";
  var lowbar = "_";
  var LowerLeftArrow = "↙";
  var LowerRightArrow = "↘";
  var loz = "◊";
  var lozenge = "◊";
  var lozf = "⧫";
  var lpar = "(";
  var lparlt = "⦓";
  var lrarr = "⇆";
  var lrcorner = "⌟";
  var lrhar = "⇋";
  var lrhard = "⥭";
  var lrm = "‎";
  var lrtri = "⊿";
  var lsaquo = "‹";
  var lscr = "𝓁";
  var Lscr = "ℒ";
  var lsh = "↰";
  var Lsh = "↰";
  var lsim = "≲";
  var lsime = "⪍";
  var lsimg = "⪏";
  var lsqb = "[";
  var lsquo = "‘";
  var lsquor = "‚";
  var Lstrok = "Ł";
  var lstrok = "ł";
  var ltcc = "⪦";
  var ltcir = "⩹";
  var lt = "<";
  var LT = "<";
  var Lt = "≪";
  var ltdot = "⋖";
  var lthree = "⋋";
  var ltimes = "⋉";
  var ltlarr = "⥶";
  var ltquest = "⩻";
  var ltri = "◃";
  var ltrie = "⊴";
  var ltrif = "◂";
  var ltrPar = "⦖";
  var lurdshar = "⥊";
  var luruhar = "⥦";
  var lvertneqq = "≨︀";
  var lvnE = "≨︀";
  var macr = "¯";
  var male = "♂";
  var malt = "✠";
  var maltese = "✠";
  var map = "↦";
  var mapsto = "↦";
  var mapstodown = "↧";
  var mapstoleft = "↤";
  var mapstoup = "↥";
  var marker = "▮";
  var mcomma = "⨩";
  var Mcy = "М";
  var mcy = "м";
  var mdash = "—";
  var mDDot = "∺";
  var measuredangle = "∡";
  var MediumSpace = " ";
  var Mellintrf = "ℳ";
  var Mfr = "𝔐";
  var mfr = "𝔪";
  var mho = "℧";
  var micro = "µ";
  var midast = "*";
  var midcir = "⫰";
  var mid = "∣";
  var middot = "·";
  var minusb = "⊟";
  var minus = "−";
  var minusd = "∸";
  var minusdu = "⨪";
  var MinusPlus = "∓";
  var mlcp = "⫛";
  var mldr = "…";
  var mnplus = "∓";
  var models = "⊧";
  var Mopf = "𝕄";
  var mopf = "𝕞";
  var mp = "∓";
  var mscr = "𝓂";
  var Mscr = "ℳ";
  var mstpos = "∾";
  var Mu = "Μ";
  var mu = "μ";
  var multimap = "⊸";
  var mumap = "⊸";
  var nabla = "∇";
  var Nacute = "Ń";
  var nacute = "ń";
  var nang = "∠⃒";
  var nap = "≉";
  var napE = "⩰̸";
  var napid = "≋̸";
  var napos = "ŉ";
  var napprox = "≉";
  var natural = "♮";
  var naturals = "ℕ";
  var natur = "♮";
  var nbsp = " ";
  var nbump = "≎̸";
  var nbumpe = "≏̸";
  var ncap = "⩃";
  var Ncaron = "Ň";
  var ncaron = "ň";
  var Ncedil = "Ņ";
  var ncedil = "ņ";
  var ncong = "≇";
  var ncongdot = "⩭̸";
  var ncup = "⩂";
  var Ncy = "Н";
  var ncy = "н";
  var ndash = "–";
  var nearhk = "⤤";
  var nearr = "↗";
  var neArr = "⇗";
  var nearrow = "↗";
  var ne = "≠";
  var nedot = "≐̸";
  var NegativeMediumSpace = "​";
  var NegativeThickSpace = "​";
  var NegativeThinSpace = "​";
  var NegativeVeryThinSpace = "​";
  var nequiv = "≢";
  var nesear = "⤨";
  var nesim = "≂̸";
  var NestedGreaterGreater = "≫";
  var NestedLessLess = "≪";
  var NewLine = "\n";
  var nexist = "∄";
  var nexists = "∄";
  var Nfr = "𝔑";
  var nfr = "𝔫";
  var ngE = "≧̸";
  var nge = "≱";
  var ngeq = "≱";
  var ngeqq = "≧̸";
  var ngeqslant = "⩾̸";
  var nges = "⩾̸";
  var nGg = "⋙̸";
  var ngsim = "≵";
  var nGt = "≫⃒";
  var ngt = "≯";
  var ngtr = "≯";
  var nGtv = "≫̸";
  var nharr = "↮";
  var nhArr = "⇎";
  var nhpar = "⫲";
  var ni = "∋";
  var nis = "⋼";
  var nisd = "⋺";
  var niv = "∋";
  var NJcy = "Њ";
  var njcy = "њ";
  var nlarr = "↚";
  var nlArr = "⇍";
  var nldr = "‥";
  var nlE = "≦̸";
  var nle = "≰";
  var nleftarrow = "↚";
  var nLeftarrow = "⇍";
  var nleftrightarrow = "↮";
  var nLeftrightarrow = "⇎";
  var nleq = "≰";
  var nleqq = "≦̸";
  var nleqslant = "⩽̸";
  var nles = "⩽̸";
  var nless = "≮";
  var nLl = "⋘̸";
  var nlsim = "≴";
  var nLt = "≪⃒";
  var nlt = "≮";
  var nltri = "⋪";
  var nltrie = "⋬";
  var nLtv = "≪̸";
  var nmid = "∤";
  var NoBreak = "⁠";
  var NonBreakingSpace = " ";
  var nopf = "𝕟";
  var Nopf = "ℕ";
  var Not = "⫬";
  var not = "¬";
  var NotCongruent = "≢";
  var NotCupCap = "≭";
  var NotDoubleVerticalBar = "∦";
  var NotElement = "∉";
  var NotEqual = "≠";
  var NotEqualTilde = "≂̸";
  var NotExists = "∄";
  var NotGreater = "≯";
  var NotGreaterEqual = "≱";
  var NotGreaterFullEqual = "≧̸";
  var NotGreaterGreater = "≫̸";
  var NotGreaterLess = "≹";
  var NotGreaterSlantEqual = "⩾̸";
  var NotGreaterTilde = "≵";
  var NotHumpDownHump = "≎̸";
  var NotHumpEqual = "≏̸";
  var notin = "∉";
  var notindot = "⋵̸";
  var notinE = "⋹̸";
  var notinva = "∉";
  var notinvb = "⋷";
  var notinvc = "⋶";
  var NotLeftTriangleBar = "⧏̸";
  var NotLeftTriangle = "⋪";
  var NotLeftTriangleEqual = "⋬";
  var NotLess = "≮";
  var NotLessEqual = "≰";
  var NotLessGreater = "≸";
  var NotLessLess = "≪̸";
  var NotLessSlantEqual = "⩽̸";
  var NotLessTilde = "≴";
  var NotNestedGreaterGreater = "⪢̸";
  var NotNestedLessLess = "⪡̸";
  var notni = "∌";
  var notniva = "∌";
  var notnivb = "⋾";
  var notnivc = "⋽";
  var NotPrecedes = "⊀";
  var NotPrecedesEqual = "⪯̸";
  var NotPrecedesSlantEqual = "⋠";
  var NotReverseElement = "∌";
  var NotRightTriangleBar = "⧐̸";
  var NotRightTriangle = "⋫";
  var NotRightTriangleEqual = "⋭";
  var NotSquareSubset = "⊏̸";
  var NotSquareSubsetEqual = "⋢";
  var NotSquareSuperset = "⊐̸";
  var NotSquareSupersetEqual = "⋣";
  var NotSubset = "⊂⃒";
  var NotSubsetEqual = "⊈";
  var NotSucceeds = "⊁";
  var NotSucceedsEqual = "⪰̸";
  var NotSucceedsSlantEqual = "⋡";
  var NotSucceedsTilde = "≿̸";
  var NotSuperset = "⊃⃒";
  var NotSupersetEqual = "⊉";
  var NotTilde = "≁";
  var NotTildeEqual = "≄";
  var NotTildeFullEqual = "≇";
  var NotTildeTilde = "≉";
  var NotVerticalBar = "∤";
  var nparallel = "∦";
  var npar = "∦";
  var nparsl = "⫽⃥";
  var npart = "∂̸";
  var npolint = "⨔";
  var npr = "⊀";
  var nprcue = "⋠";
  var nprec = "⊀";
  var npreceq = "⪯̸";
  var npre = "⪯̸";
  var nrarrc = "⤳̸";
  var nrarr = "↛";
  var nrArr = "⇏";
  var nrarrw = "↝̸";
  var nrightarrow = "↛";
  var nRightarrow = "⇏";
  var nrtri = "⋫";
  var nrtrie = "⋭";
  var nsc = "⊁";
  var nsccue = "⋡";
  var nsce = "⪰̸";
  var Nscr = "𝒩";
  var nscr = "𝓃";
  var nshortmid = "∤";
  var nshortparallel = "∦";
  var nsim = "≁";
  var nsime = "≄";
  var nsimeq = "≄";
  var nsmid = "∤";
  var nspar = "∦";
  var nsqsube = "⋢";
  var nsqsupe = "⋣";
  var nsub = "⊄";
  var nsubE = "⫅̸";
  var nsube = "⊈";
  var nsubset = "⊂⃒";
  var nsubseteq = "⊈";
  var nsubseteqq = "⫅̸";
  var nsucc = "⊁";
  var nsucceq = "⪰̸";
  var nsup = "⊅";
  var nsupE = "⫆̸";
  var nsupe = "⊉";
  var nsupset = "⊃⃒";
  var nsupseteq = "⊉";
  var nsupseteqq = "⫆̸";
  var ntgl = "≹";
  var Ntilde = "Ñ";
  var ntilde = "ñ";
  var ntlg = "≸";
  var ntriangleleft = "⋪";
  var ntrianglelefteq = "⋬";
  var ntriangleright = "⋫";
  var ntrianglerighteq = "⋭";
  var Nu = "Ν";
  var nu = "ν";
  var num = "#";
  var numero = "№";
  var numsp = " ";
  var nvap = "≍⃒";
  var nvdash = "⊬";
  var nvDash = "⊭";
  var nVdash = "⊮";
  var nVDash = "⊯";
  var nvge = "≥⃒";
  var nvgt = ">⃒";
  var nvHarr = "⤄";
  var nvinfin = "⧞";
  var nvlArr = "⤂";
  var nvle = "≤⃒";
  var nvlt = "<⃒";
  var nvltrie = "⊴⃒";
  var nvrArr = "⤃";
  var nvrtrie = "⊵⃒";
  var nvsim = "∼⃒";
  var nwarhk = "⤣";
  var nwarr = "↖";
  var nwArr = "⇖";
  var nwarrow = "↖";
  var nwnear = "⤧";
  var Oacute = "Ó";
  var oacute = "ó";
  var oast = "⊛";
  var Ocirc = "Ô";
  var ocirc = "ô";
  var ocir = "⊚";
  var Ocy = "О";
  var ocy = "о";
  var odash = "⊝";
  var Odblac = "Ő";
  var odblac = "ő";
  var odiv = "⨸";
  var odot = "⊙";
  var odsold = "⦼";
  var OElig = "Œ";
  var oelig = "œ";
  var ofcir = "⦿";
  var Ofr = "𝔒";
  var ofr = "𝔬";
  var ogon = "˛";
  var Ograve = "Ò";
  var ograve = "ò";
  var ogt = "⧁";
  var ohbar = "⦵";
  var ohm = "Ω";
  var oint = "∮";
  var olarr = "↺";
  var olcir = "⦾";
  var olcross = "⦻";
  var oline = "‾";
  var olt = "⧀";
  var Omacr = "Ō";
  var omacr = "ō";
  var Omega = "Ω";
  var omega = "ω";
  var Omicron = "Ο";
  var omicron = "ο";
  var omid = "⦶";
  var ominus = "⊖";
  var Oopf = "𝕆";
  var oopf = "𝕠";
  var opar = "⦷";
  var OpenCurlyDoubleQuote = "“";
  var OpenCurlyQuote = "‘";
  var operp = "⦹";
  var oplus = "⊕";
  var orarr = "↻";
  var Or = "⩔";
  var or = "∨";
  var ord = "⩝";
  var order = "ℴ";
  var orderof = "ℴ";
  var ordf = "ª";
  var ordm = "º";
  var origof = "⊶";
  var oror = "⩖";
  var orslope = "⩗";
  var orv = "⩛";
  var oS = "Ⓢ";
  var Oscr = "𝒪";
  var oscr = "ℴ";
  var Oslash = "Ø";
  var oslash = "ø";
  var osol = "⊘";
  var Otilde = "Õ";
  var otilde = "õ";
  var otimesas = "⨶";
  var Otimes = "⨷";
  var otimes = "⊗";
  var Ouml = "Ö";
  var ouml = "ö";
  var ovbar = "⌽";
  var OverBar = "‾";
  var OverBrace = "⏞";
  var OverBracket = "⎴";
  var OverParenthesis = "⏜";
  var para = "¶";
  var parallel = "∥";
  var par = "∥";
  var parsim = "⫳";
  var parsl = "⫽";
  var part = "∂";
  var PartialD = "∂";
  var Pcy = "П";
  var pcy = "п";
  var percnt = "%";
  var period = ".";
  var permil = "‰";
  var perp = "⊥";
  var pertenk = "‱";
  var Pfr = "𝔓";
  var pfr = "𝔭";
  var Phi = "Φ";
  var phi = "φ";
  var phiv = "ϕ";
  var phmmat = "ℳ";
  var phone = "☎";
  var Pi = "Π";
  var pi = "π";
  var pitchfork = "⋔";
  var piv = "ϖ";
  var planck = "ℏ";
  var planckh = "ℎ";
  var plankv = "ℏ";
  var plusacir = "⨣";
  var plusb = "⊞";
  var pluscir = "⨢";
  var plus = "+";
  var plusdo = "∔";
  var plusdu = "⨥";
  var pluse = "⩲";
  var PlusMinus = "±";
  var plusmn = "±";
  var plussim = "⨦";
  var plustwo = "⨧";
  var pm = "±";
  var Poincareplane = "ℌ";
  var pointint = "⨕";
  var popf = "𝕡";
  var Popf = "ℙ";
  var pound = "£";
  var prap = "⪷";
  var Pr = "⪻";
  var pr = "≺";
  var prcue = "≼";
  var precapprox = "⪷";
  var prec = "≺";
  var preccurlyeq = "≼";
  var Precedes = "≺";
  var PrecedesEqual = "⪯";
  var PrecedesSlantEqual = "≼";
  var PrecedesTilde = "≾";
  var preceq = "⪯";
  var precnapprox = "⪹";
  var precneqq = "⪵";
  var precnsim = "⋨";
  var pre = "⪯";
  var prE = "⪳";
  var precsim = "≾";
  var prime = "′";
  var Prime = "″";
  var primes = "ℙ";
  var prnap = "⪹";
  var prnE = "⪵";
  var prnsim = "⋨";
  var prod = "∏";
  var Product = "∏";
  var profalar = "⌮";
  var profline = "⌒";
  var profsurf = "⌓";
  var prop = "∝";
  var Proportional = "∝";
  var Proportion = "∷";
  var propto = "∝";
  var prsim = "≾";
  var prurel = "⊰";
  var Pscr = "𝒫";
  var pscr = "𝓅";
  var Psi = "Ψ";
  var psi = "ψ";
  var puncsp = " ";
  var Qfr = "𝔔";
  var qfr = "𝔮";
  var qint = "⨌";
  var qopf = "𝕢";
  var Qopf = "ℚ";
  var qprime = "⁗";
  var Qscr = "𝒬";
  var qscr = "𝓆";
  var quaternions = "ℍ";
  var quatint = "⨖";
  var quest = "?";
  var questeq = "≟";
  var quot = "\"";
  var QUOT = "\"";
  var rAarr = "⇛";
  var race = "∽̱";
  var Racute = "Ŕ";
  var racute = "ŕ";
  var radic = "√";
  var raemptyv = "⦳";
  var rang = "⟩";
  var Rang = "⟫";
  var rangd = "⦒";
  var range = "⦥";
  var rangle = "⟩";
  var raquo = "»";
  var rarrap = "⥵";
  var rarrb = "⇥";
  var rarrbfs = "⤠";
  var rarrc = "⤳";
  var rarr = "→";
  var Rarr = "↠";
  var rArr = "⇒";
  var rarrfs = "⤞";
  var rarrhk = "↪";
  var rarrlp = "↬";
  var rarrpl = "⥅";
  var rarrsim = "⥴";
  var Rarrtl = "⤖";
  var rarrtl = "↣";
  var rarrw = "↝";
  var ratail = "⤚";
  var rAtail = "⤜";
  var ratio = "∶";
  var rationals = "ℚ";
  var rbarr = "⤍";
  var rBarr = "⤏";
  var RBarr = "⤐";
  var rbbrk = "❳";
  var rbrace = "}";
  var rbrack = "]";
  var rbrke = "⦌";
  var rbrksld = "⦎";
  var rbrkslu = "⦐";
  var Rcaron = "Ř";
  var rcaron = "ř";
  var Rcedil = "Ŗ";
  var rcedil = "ŗ";
  var rceil = "⌉";
  var rcub = "}";
  var Rcy = "Р";
  var rcy = "р";
  var rdca = "⤷";
  var rdldhar = "⥩";
  var rdquo = "”";
  var rdquor = "”";
  var rdsh = "↳";
  var real = "ℜ";
  var realine = "ℛ";
  var realpart = "ℜ";
  var reals = "ℝ";
  var Re = "ℜ";
  var rect = "▭";
  var reg = "®";
  var REG = "®";
  var ReverseElement = "∋";
  var ReverseEquilibrium = "⇋";
  var ReverseUpEquilibrium = "⥯";
  var rfisht = "⥽";
  var rfloor = "⌋";
  var rfr = "𝔯";
  var Rfr = "ℜ";
  var rHar = "⥤";
  var rhard = "⇁";
  var rharu = "⇀";
  var rharul = "⥬";
  var Rho = "Ρ";
  var rho = "ρ";
  var rhov = "ϱ";
  var RightAngleBracket = "⟩";
  var RightArrowBar = "⇥";
  var rightarrow = "→";
  var RightArrow = "→";
  var Rightarrow = "⇒";
  var RightArrowLeftArrow = "⇄";
  var rightarrowtail = "↣";
  var RightCeiling = "⌉";
  var RightDoubleBracket = "⟧";
  var RightDownTeeVector = "⥝";
  var RightDownVectorBar = "⥕";
  var RightDownVector = "⇂";
  var RightFloor = "⌋";
  var rightharpoondown = "⇁";
  var rightharpoonup = "⇀";
  var rightleftarrows = "⇄";
  var rightleftharpoons = "⇌";
  var rightrightarrows = "⇉";
  var rightsquigarrow = "↝";
  var RightTeeArrow = "↦";
  var RightTee = "⊢";
  var RightTeeVector = "⥛";
  var rightthreetimes = "⋌";
  var RightTriangleBar = "⧐";
  var RightTriangle = "⊳";
  var RightTriangleEqual = "⊵";
  var RightUpDownVector = "⥏";
  var RightUpTeeVector = "⥜";
  var RightUpVectorBar = "⥔";
  var RightUpVector = "↾";
  var RightVectorBar = "⥓";
  var RightVector = "⇀";
  var ring = "˚";
  var risingdotseq = "≓";
  var rlarr = "⇄";
  var rlhar = "⇌";
  var rlm = "‏";
  var rmoustache = "⎱";
  var rmoust = "⎱";
  var rnmid = "⫮";
  var roang = "⟭";
  var roarr = "⇾";
  var robrk = "⟧";
  var ropar = "⦆";
  var ropf = "𝕣";
  var Ropf = "ℝ";
  var roplus = "⨮";
  var rotimes = "⨵";
  var RoundImplies = "⥰";
  var rpar = ")";
  var rpargt = "⦔";
  var rppolint = "⨒";
  var rrarr = "⇉";
  var Rrightarrow = "⇛";
  var rsaquo = "›";
  var rscr = "𝓇";
  var Rscr = "ℛ";
  var rsh = "↱";
  var Rsh = "↱";
  var rsqb = "]";
  var rsquo = "’";
  var rsquor = "’";
  var rthree = "⋌";
  var rtimes = "⋊";
  var rtri = "▹";
  var rtrie = "⊵";
  var rtrif = "▸";
  var rtriltri = "⧎";
  var RuleDelayed = "⧴";
  var ruluhar = "⥨";
  var rx = "℞";
  var Sacute = "Ś";
  var sacute = "ś";
  var sbquo = "‚";
  var scap = "⪸";
  var Scaron = "Š";
  var scaron = "š";
  var Sc = "⪼";
  var sc = "≻";
  var sccue = "≽";
  var sce = "⪰";
  var scE = "⪴";
  var Scedil = "Ş";
  var scedil = "ş";
  var Scirc = "Ŝ";
  var scirc = "ŝ";
  var scnap = "⪺";
  var scnE = "⪶";
  var scnsim = "⋩";
  var scpolint = "⨓";
  var scsim = "≿";
  var Scy = "С";
  var scy = "с";
  var sdotb = "⊡";
  var sdot = "⋅";
  var sdote = "⩦";
  var searhk = "⤥";
  var searr = "↘";
  var seArr = "⇘";
  var searrow = "↘";
  var sect = "§";
  var semi = ";";
  var seswar = "⤩";
  var setminus = "∖";
  var setmn = "∖";
  var sext = "✶";
  var Sfr = "𝔖";
  var sfr = "𝔰";
  var sfrown = "⌢";
  var sharp = "♯";
  var SHCHcy = "Щ";
  var shchcy = "щ";
  var SHcy = "Ш";
  var shcy = "ш";
  var ShortDownArrow = "↓";
  var ShortLeftArrow = "←";
  var shortmid = "∣";
  var shortparallel = "∥";
  var ShortRightArrow = "→";
  var ShortUpArrow = "↑";
  var shy = "­";
  var Sigma = "Σ";
  var sigma = "σ";
  var sigmaf = "ς";
  var sigmav = "ς";
  var sim = "∼";
  var simdot = "⩪";
  var sime = "≃";
  var simeq = "≃";
  var simg = "⪞";
  var simgE = "⪠";
  var siml = "⪝";
  var simlE = "⪟";
  var simne = "≆";
  var simplus = "⨤";
  var simrarr = "⥲";
  var slarr = "←";
  var SmallCircle = "∘";
  var smallsetminus = "∖";
  var smashp = "⨳";
  var smeparsl = "⧤";
  var smid = "∣";
  var smile = "⌣";
  var smt = "⪪";
  var smte = "⪬";
  var smtes = "⪬︀";
  var SOFTcy = "Ь";
  var softcy = "ь";
  var solbar = "⌿";
  var solb = "⧄";
  var sol = "/";
  var Sopf = "𝕊";
  var sopf = "𝕤";
  var spades = "♠";
  var spadesuit = "♠";
  var spar = "∥";
  var sqcap = "⊓";
  var sqcaps = "⊓︀";
  var sqcup = "⊔";
  var sqcups = "⊔︀";
  var Sqrt = "√";
  var sqsub = "⊏";
  var sqsube = "⊑";
  var sqsubset = "⊏";
  var sqsubseteq = "⊑";
  var sqsup = "⊐";
  var sqsupe = "⊒";
  var sqsupset = "⊐";
  var sqsupseteq = "⊒";
  var square = "□";
  var Square = "□";
  var SquareIntersection = "⊓";
  var SquareSubset = "⊏";
  var SquareSubsetEqual = "⊑";
  var SquareSuperset = "⊐";
  var SquareSupersetEqual = "⊒";
  var SquareUnion = "⊔";
  var squarf = "▪";
  var squ = "□";
  var squf = "▪";
  var srarr = "→";
  var Sscr = "𝒮";
  var sscr = "𝓈";
  var ssetmn = "∖";
  var ssmile = "⌣";
  var sstarf = "⋆";
  var Star = "⋆";
  var star = "☆";
  var starf = "★";
  var straightepsilon = "ϵ";
  var straightphi = "ϕ";
  var strns = "¯";
  var sub = "⊂";
  var Sub = "⋐";
  var subdot = "⪽";
  var subE = "⫅";
  var sube = "⊆";
  var subedot = "⫃";
  var submult = "⫁";
  var subnE = "⫋";
  var subne = "⊊";
  var subplus = "⪿";
  var subrarr = "⥹";
  var subset = "⊂";
  var Subset = "⋐";
  var subseteq = "⊆";
  var subseteqq = "⫅";
  var SubsetEqual = "⊆";
  var subsetneq = "⊊";
  var subsetneqq = "⫋";
  var subsim = "⫇";
  var subsub = "⫕";
  var subsup = "⫓";
  var succapprox = "⪸";
  var succ = "≻";
  var succcurlyeq = "≽";
  var Succeeds = "≻";
  var SucceedsEqual = "⪰";
  var SucceedsSlantEqual = "≽";
  var SucceedsTilde = "≿";
  var succeq = "⪰";
  var succnapprox = "⪺";
  var succneqq = "⪶";
  var succnsim = "⋩";
  var succsim = "≿";
  var SuchThat = "∋";
  var sum = "∑";
  var Sum = "∑";
  var sung = "♪";
  var sup1 = "¹";
  var sup2 = "²";
  var sup3 = "³";
  var sup = "⊃";
  var Sup = "⋑";
  var supdot = "⪾";
  var supdsub = "⫘";
  var supE = "⫆";
  var supe = "⊇";
  var supedot = "⫄";
  var Superset = "⊃";
  var SupersetEqual = "⊇";
  var suphsol = "⟉";
  var suphsub = "⫗";
  var suplarr = "⥻";
  var supmult = "⫂";
  var supnE = "⫌";
  var supne = "⊋";
  var supplus = "⫀";
  var supset = "⊃";
  var Supset = "⋑";
  var supseteq = "⊇";
  var supseteqq = "⫆";
  var supsetneq = "⊋";
  var supsetneqq = "⫌";
  var supsim = "⫈";
  var supsub = "⫔";
  var supsup = "⫖";
  var swarhk = "⤦";
  var swarr = "↙";
  var swArr = "⇙";
  var swarrow = "↙";
  var swnwar = "⤪";
  var szlig = "ß";
  var Tab = "\t";
  var target = "⌖";
  var Tau = "Τ";
  var tau = "τ";
  var tbrk = "⎴";
  var Tcaron = "Ť";
  var tcaron = "ť";
  var Tcedil = "Ţ";
  var tcedil = "ţ";
  var Tcy = "Т";
  var tcy = "т";
  var tdot = "⃛";
  var telrec = "⌕";
  var Tfr = "𝔗";
  var tfr = "𝔱";
  var there4 = "∴";
  var therefore = "∴";
  var Therefore = "∴";
  var Theta = "Θ";
  var theta = "θ";
  var thetasym = "ϑ";
  var thetav = "ϑ";
  var thickapprox = "≈";
  var thicksim = "∼";
  var ThickSpace = "  ";
  var ThinSpace = " ";
  var thinsp = " ";
  var thkap = "≈";
  var thksim = "∼";
  var THORN = "Þ";
  var thorn = "þ";
  var tilde = "˜";
  var Tilde = "∼";
  var TildeEqual = "≃";
  var TildeFullEqual = "≅";
  var TildeTilde = "≈";
  var timesbar = "⨱";
  var timesb = "⊠";
  var times = "×";
  var timesd = "⨰";
  var tint = "∭";
  var toea = "⤨";
  var topbot = "⌶";
  var topcir = "⫱";
  var top = "⊤";
  var Topf = "𝕋";
  var topf = "𝕥";
  var topfork = "⫚";
  var tosa = "⤩";
  var tprime = "‴";
  var trade = "™";
  var TRADE = "™";
  var triangle = "▵";
  var triangledown = "▿";
  var triangleleft = "◃";
  var trianglelefteq = "⊴";
  var triangleq = "≜";
  var triangleright = "▹";
  var trianglerighteq = "⊵";
  var tridot = "◬";
  var trie = "≜";
  var triminus = "⨺";
  var TripleDot = "⃛";
  var triplus = "⨹";
  var trisb = "⧍";
  var tritime = "⨻";
  var trpezium = "⏢";
  var Tscr = "𝒯";
  var tscr = "𝓉";
  var TScy = "Ц";
  var tscy = "ц";
  var TSHcy = "Ћ";
  var tshcy = "ћ";
  var Tstrok = "Ŧ";
  var tstrok = "ŧ";
  var twixt = "≬";
  var twoheadleftarrow = "↞";
  var twoheadrightarrow = "↠";
  var Uacute = "Ú";
  var uacute = "ú";
  var uarr = "↑";
  var Uarr = "↟";
  var uArr = "⇑";
  var Uarrocir = "⥉";
  var Ubrcy = "Ў";
  var ubrcy = "ў";
  var Ubreve = "Ŭ";
  var ubreve = "ŭ";
  var Ucirc = "Û";
  var ucirc = "û";
  var Ucy = "У";
  var ucy = "у";
  var udarr = "⇅";
  var Udblac = "Ű";
  var udblac = "ű";
  var udhar = "⥮";
  var ufisht = "⥾";
  var Ufr = "𝔘";
  var ufr = "𝔲";
  var Ugrave = "Ù";
  var ugrave = "ù";
  var uHar = "⥣";
  var uharl = "↿";
  var uharr = "↾";
  var uhblk = "▀";
  var ulcorn = "⌜";
  var ulcorner = "⌜";
  var ulcrop = "⌏";
  var ultri = "◸";
  var Umacr = "Ū";
  var umacr = "ū";
  var uml = "¨";
  var UnderBar = "_";
  var UnderBrace = "⏟";
  var UnderBracket = "⎵";
  var UnderParenthesis = "⏝";
  var Union = "⋃";
  var UnionPlus = "⊎";
  var Uogon = "Ų";
  var uogon = "ų";
  var Uopf = "𝕌";
  var uopf = "𝕦";
  var UpArrowBar = "⤒";
  var uparrow = "↑";
  var UpArrow = "↑";
  var Uparrow = "⇑";
  var UpArrowDownArrow = "⇅";
  var updownarrow = "↕";
  var UpDownArrow = "↕";
  var Updownarrow = "⇕";
  var UpEquilibrium = "⥮";
  var upharpoonleft = "↿";
  var upharpoonright = "↾";
  var uplus = "⊎";
  var UpperLeftArrow = "↖";
  var UpperRightArrow = "↗";
  var upsi = "υ";
  var Upsi = "ϒ";
  var upsih = "ϒ";
  var Upsilon = "Υ";
  var upsilon = "υ";
  var UpTeeArrow = "↥";
  var UpTee = "⊥";
  var upuparrows = "⇈";
  var urcorn = "⌝";
  var urcorner = "⌝";
  var urcrop = "⌎";
  var Uring = "Ů";
  var uring = "ů";
  var urtri = "◹";
  var Uscr = "𝒰";
  var uscr = "𝓊";
  var utdot = "⋰";
  var Utilde = "Ũ";
  var utilde = "ũ";
  var utri = "▵";
  var utrif = "▴";
  var uuarr = "⇈";
  var Uuml = "Ü";
  var uuml = "ü";
  var uwangle = "⦧";
  var vangrt = "⦜";
  var varepsilon = "ϵ";
  var varkappa = "ϰ";
  var varnothing = "∅";
  var varphi = "ϕ";
  var varpi = "ϖ";
  var varpropto = "∝";
  var varr = "↕";
  var vArr = "⇕";
  var varrho = "ϱ";
  var varsigma = "ς";
  var varsubsetneq = "⊊︀";
  var varsubsetneqq = "⫋︀";
  var varsupsetneq = "⊋︀";
  var varsupsetneqq = "⫌︀";
  var vartheta = "ϑ";
  var vartriangleleft = "⊲";
  var vartriangleright = "⊳";
  var vBar = "⫨";
  var Vbar = "⫫";
  var vBarv = "⫩";
  var Vcy = "В";
  var vcy = "в";
  var vdash = "⊢";
  var vDash = "⊨";
  var Vdash = "⊩";
  var VDash = "⊫";
  var Vdashl = "⫦";
  var veebar = "⊻";
  var vee = "∨";
  var Vee = "⋁";
  var veeeq = "≚";
  var vellip = "⋮";
  var verbar = "|";
  var Verbar = "‖";
  var vert = "|";
  var Vert = "‖";
  var VerticalBar = "∣";
  var VerticalLine = "|";
  var VerticalSeparator = "❘";
  var VerticalTilde = "≀";
  var VeryThinSpace = " ";
  var Vfr = "𝔙";
  var vfr = "𝔳";
  var vltri = "⊲";
  var vnsub = "⊂⃒";
  var vnsup = "⊃⃒";
  var Vopf = "𝕍";
  var vopf = "𝕧";
  var vprop = "∝";
  var vrtri = "⊳";
  var Vscr = "𝒱";
  var vscr = "𝓋";
  var vsubnE = "⫋︀";
  var vsubne = "⊊︀";
  var vsupnE = "⫌︀";
  var vsupne = "⊋︀";
  var Vvdash = "⊪";
  var vzigzag = "⦚";
  var Wcirc = "Ŵ";
  var wcirc = "ŵ";
  var wedbar = "⩟";
  var wedge = "∧";
  var Wedge = "⋀";
  var wedgeq = "≙";
  var weierp = "℘";
  var Wfr = "𝔚";
  var wfr = "𝔴";
  var Wopf = "𝕎";
  var wopf = "𝕨";
  var wp = "℘";
  var wr = "≀";
  var wreath = "≀";
  var Wscr = "𝒲";
  var wscr = "𝓌";
  var xcap = "⋂";
  var xcirc = "◯";
  var xcup = "⋃";
  var xdtri = "▽";
  var Xfr = "𝔛";
  var xfr = "𝔵";
  var xharr = "⟷";
  var xhArr = "⟺";
  var Xi = "Ξ";
  var xi = "ξ";
  var xlarr = "⟵";
  var xlArr = "⟸";
  var xmap = "⟼";
  var xnis = "⋻";
  var xodot = "⨀";
  var Xopf = "𝕏";
  var xopf = "𝕩";
  var xoplus = "⨁";
  var xotime = "⨂";
  var xrarr = "⟶";
  var xrArr = "⟹";
  var Xscr = "𝒳";
  var xscr = "𝓍";
  var xsqcup = "⨆";
  var xuplus = "⨄";
  var xutri = "△";
  var xvee = "⋁";
  var xwedge = "⋀";
  var Yacute = "Ý";
  var yacute = "ý";
  var YAcy = "Я";
  var yacy = "я";
  var Ycirc = "Ŷ";
  var ycirc = "ŷ";
  var Ycy = "Ы";
  var ycy = "ы";
  var yen = "¥";
  var Yfr = "𝔜";
  var yfr = "𝔶";
  var YIcy = "Ї";
  var yicy = "ї";
  var Yopf = "𝕐";
  var yopf = "𝕪";
  var Yscr = "𝒴";
  var yscr = "𝓎";
  var YUcy = "Ю";
  var yucy = "ю";
  var yuml = "ÿ";
  var Yuml = "Ÿ";
  var Zacute = "Ź";
  var zacute = "ź";
  var Zcaron = "Ž";
  var zcaron = "ž";
  var Zcy = "З";
  var zcy = "з";
  var Zdot = "Ż";
  var zdot = "ż";
  var zeetrf = "ℨ";
  var ZeroWidthSpace = "​";
  var Zeta = "Ζ";
  var zeta = "ζ";
  var zfr = "𝔷";
  var Zfr = "ℨ";
  var ZHcy = "Ж";
  var zhcy = "ж";
  var zigrarr = "⇝";
  var zopf = "𝕫";
  var Zopf = "ℤ";
  var Zscr = "𝒵";
  var zscr = "𝓏";
  var zwj = "‍";
  var zwnj = "‌";
  var entityMap = {
  	Aacute: Aacute,
  	aacute: aacute,
  	Abreve: Abreve,
  	abreve: abreve,
  	ac: ac,
  	acd: acd,
  	acE: acE,
  	Acirc: Acirc,
  	acirc: acirc,
  	acute: acute,
  	Acy: Acy,
  	acy: acy,
  	AElig: AElig,
  	aelig: aelig,
  	af: af,
  	Afr: Afr,
  	afr: afr,
  	Agrave: Agrave,
  	agrave: agrave,
  	alefsym: alefsym,
  	aleph: aleph,
  	Alpha: Alpha,
  	alpha: alpha,
  	Amacr: Amacr,
  	amacr: amacr,
  	amalg: amalg,
  	amp: amp,
  	AMP: AMP,
  	andand: andand,
  	And: And,
  	and: and,
  	andd: andd,
  	andslope: andslope,
  	andv: andv,
  	ang: ang,
  	ange: ange,
  	angle: angle,
  	angmsdaa: angmsdaa,
  	angmsdab: angmsdab,
  	angmsdac: angmsdac,
  	angmsdad: angmsdad,
  	angmsdae: angmsdae,
  	angmsdaf: angmsdaf,
  	angmsdag: angmsdag,
  	angmsdah: angmsdah,
  	angmsd: angmsd,
  	angrt: angrt,
  	angrtvb: angrtvb,
  	angrtvbd: angrtvbd,
  	angsph: angsph,
  	angst: angst,
  	angzarr: angzarr,
  	Aogon: Aogon,
  	aogon: aogon,
  	Aopf: Aopf,
  	aopf: aopf,
  	apacir: apacir,
  	ap: ap,
  	apE: apE,
  	ape: ape,
  	apid: apid,
  	apos: apos,
  	ApplyFunction: ApplyFunction,
  	approx: approx,
  	approxeq: approxeq,
  	Aring: Aring,
  	aring: aring,
  	Ascr: Ascr,
  	ascr: ascr,
  	Assign: Assign,
  	ast: ast,
  	asymp: asymp,
  	asympeq: asympeq,
  	Atilde: Atilde,
  	atilde: atilde,
  	Auml: Auml,
  	auml: auml,
  	awconint: awconint,
  	awint: awint,
  	backcong: backcong,
  	backepsilon: backepsilon,
  	backprime: backprime,
  	backsim: backsim,
  	backsimeq: backsimeq,
  	Backslash: Backslash,
  	Barv: Barv,
  	barvee: barvee,
  	barwed: barwed,
  	Barwed: Barwed,
  	barwedge: barwedge,
  	bbrk: bbrk,
  	bbrktbrk: bbrktbrk,
  	bcong: bcong,
  	Bcy: Bcy,
  	bcy: bcy,
  	bdquo: bdquo,
  	becaus: becaus,
  	because: because,
  	Because: Because,
  	bemptyv: bemptyv,
  	bepsi: bepsi,
  	bernou: bernou,
  	Bernoullis: Bernoullis,
  	Beta: Beta,
  	beta: beta,
  	beth: beth,
  	between: between,
  	Bfr: Bfr,
  	bfr: bfr,
  	bigcap: bigcap,
  	bigcirc: bigcirc,
  	bigcup: bigcup,
  	bigodot: bigodot,
  	bigoplus: bigoplus,
  	bigotimes: bigotimes,
  	bigsqcup: bigsqcup,
  	bigstar: bigstar,
  	bigtriangledown: bigtriangledown,
  	bigtriangleup: bigtriangleup,
  	biguplus: biguplus,
  	bigvee: bigvee,
  	bigwedge: bigwedge,
  	bkarow: bkarow,
  	blacklozenge: blacklozenge,
  	blacksquare: blacksquare,
  	blacktriangle: blacktriangle,
  	blacktriangledown: blacktriangledown,
  	blacktriangleleft: blacktriangleleft,
  	blacktriangleright: blacktriangleright,
  	blank: blank,
  	blk12: blk12,
  	blk14: blk14,
  	blk34: blk34,
  	block: block,
  	bne: bne,
  	bnequiv: bnequiv,
  	bNot: bNot,
  	bnot: bnot,
  	Bopf: Bopf,
  	bopf: bopf,
  	bot: bot,
  	bottom: bottom,
  	bowtie: bowtie,
  	boxbox: boxbox,
  	boxdl: boxdl,
  	boxdL: boxdL,
  	boxDl: boxDl,
  	boxDL: boxDL,
  	boxdr: boxdr,
  	boxdR: boxdR,
  	boxDr: boxDr,
  	boxDR: boxDR,
  	boxh: boxh,
  	boxH: boxH,
  	boxhd: boxhd,
  	boxHd: boxHd,
  	boxhD: boxhD,
  	boxHD: boxHD,
  	boxhu: boxhu,
  	boxHu: boxHu,
  	boxhU: boxhU,
  	boxHU: boxHU,
  	boxminus: boxminus,
  	boxplus: boxplus,
  	boxtimes: boxtimes,
  	boxul: boxul,
  	boxuL: boxuL,
  	boxUl: boxUl,
  	boxUL: boxUL,
  	boxur: boxur,
  	boxuR: boxuR,
  	boxUr: boxUr,
  	boxUR: boxUR,
  	boxv: boxv,
  	boxV: boxV,
  	boxvh: boxvh,
  	boxvH: boxvH,
  	boxVh: boxVh,
  	boxVH: boxVH,
  	boxvl: boxvl,
  	boxvL: boxvL,
  	boxVl: boxVl,
  	boxVL: boxVL,
  	boxvr: boxvr,
  	boxvR: boxvR,
  	boxVr: boxVr,
  	boxVR: boxVR,
  	bprime: bprime,
  	breve: breve,
  	Breve: Breve,
  	brvbar: brvbar,
  	bscr: bscr,
  	Bscr: Bscr,
  	bsemi: bsemi,
  	bsim: bsim,
  	bsime: bsime,
  	bsolb: bsolb,
  	bsol: bsol,
  	bsolhsub: bsolhsub,
  	bull: bull,
  	bullet: bullet,
  	bump: bump,
  	bumpE: bumpE,
  	bumpe: bumpe,
  	Bumpeq: Bumpeq,
  	bumpeq: bumpeq,
  	Cacute: Cacute,
  	cacute: cacute,
  	capand: capand,
  	capbrcup: capbrcup,
  	capcap: capcap,
  	cap: cap,
  	Cap: Cap,
  	capcup: capcup,
  	capdot: capdot,
  	CapitalDifferentialD: CapitalDifferentialD,
  	caps: caps,
  	caret: caret,
  	caron: caron,
  	Cayleys: Cayleys,
  	ccaps: ccaps,
  	Ccaron: Ccaron,
  	ccaron: ccaron,
  	Ccedil: Ccedil,
  	ccedil: ccedil,
  	Ccirc: Ccirc,
  	ccirc: ccirc,
  	Cconint: Cconint,
  	ccups: ccups,
  	ccupssm: ccupssm,
  	Cdot: Cdot,
  	cdot: cdot,
  	cedil: cedil,
  	Cedilla: Cedilla,
  	cemptyv: cemptyv,
  	cent: cent,
  	centerdot: centerdot,
  	CenterDot: CenterDot,
  	cfr: cfr,
  	Cfr: Cfr,
  	CHcy: CHcy,
  	chcy: chcy,
  	check: check,
  	checkmark: checkmark,
  	Chi: Chi,
  	chi: chi,
  	circ: circ,
  	circeq: circeq,
  	circlearrowleft: circlearrowleft,
  	circlearrowright: circlearrowright,
  	circledast: circledast,
  	circledcirc: circledcirc,
  	circleddash: circleddash,
  	CircleDot: CircleDot,
  	circledR: circledR,
  	circledS: circledS,
  	CircleMinus: CircleMinus,
  	CirclePlus: CirclePlus,
  	CircleTimes: CircleTimes,
  	cir: cir,
  	cirE: cirE,
  	cire: cire,
  	cirfnint: cirfnint,
  	cirmid: cirmid,
  	cirscir: cirscir,
  	ClockwiseContourIntegral: ClockwiseContourIntegral,
  	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote,
  	CloseCurlyQuote: CloseCurlyQuote,
  	clubs: clubs,
  	clubsuit: clubsuit,
  	colon: colon,
  	Colon: Colon,
  	Colone: Colone,
  	colone: colone,
  	coloneq: coloneq,
  	comma: comma,
  	commat: commat,
  	comp: comp,
  	compfn: compfn,
  	complement: complement,
  	complexes: complexes,
  	cong: cong,
  	congdot: congdot,
  	Congruent: Congruent,
  	conint: conint,
  	Conint: Conint,
  	ContourIntegral: ContourIntegral,
  	copf: copf,
  	Copf: Copf,
  	coprod: coprod,
  	Coproduct: Coproduct,
  	copy: copy,
  	COPY: COPY,
  	copysr: copysr,
  	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral,
  	crarr: crarr,
  	cross: cross,
  	Cross: Cross,
  	Cscr: Cscr,
  	cscr: cscr,
  	csub: csub,
  	csube: csube,
  	csup: csup,
  	csupe: csupe,
  	ctdot: ctdot,
  	cudarrl: cudarrl,
  	cudarrr: cudarrr,
  	cuepr: cuepr,
  	cuesc: cuesc,
  	cularr: cularr,
  	cularrp: cularrp,
  	cupbrcap: cupbrcap,
  	cupcap: cupcap,
  	CupCap: CupCap,
  	cup: cup,
  	Cup: Cup,
  	cupcup: cupcup,
  	cupdot: cupdot,
  	cupor: cupor,
  	cups: cups,
  	curarr: curarr,
  	curarrm: curarrm,
  	curlyeqprec: curlyeqprec,
  	curlyeqsucc: curlyeqsucc,
  	curlyvee: curlyvee,
  	curlywedge: curlywedge,
  	curren: curren,
  	curvearrowleft: curvearrowleft,
  	curvearrowright: curvearrowright,
  	cuvee: cuvee,
  	cuwed: cuwed,
  	cwconint: cwconint,
  	cwint: cwint,
  	cylcty: cylcty,
  	dagger: dagger,
  	Dagger: Dagger,
  	daleth: daleth,
  	darr: darr,
  	Darr: Darr,
  	dArr: dArr,
  	dash: dash,
  	Dashv: Dashv,
  	dashv: dashv,
  	dbkarow: dbkarow,
  	dblac: dblac,
  	Dcaron: Dcaron,
  	dcaron: dcaron,
  	Dcy: Dcy,
  	dcy: dcy,
  	ddagger: ddagger,
  	ddarr: ddarr,
  	DD: DD,
  	dd: dd,
  	DDotrahd: DDotrahd,
  	ddotseq: ddotseq,
  	deg: deg,
  	Del: Del,
  	Delta: Delta,
  	delta: delta,
  	demptyv: demptyv,
  	dfisht: dfisht,
  	Dfr: Dfr,
  	dfr: dfr,
  	dHar: dHar,
  	dharl: dharl,
  	dharr: dharr,
  	DiacriticalAcute: DiacriticalAcute,
  	DiacriticalDot: DiacriticalDot,
  	DiacriticalDoubleAcute: DiacriticalDoubleAcute,
  	DiacriticalGrave: DiacriticalGrave,
  	DiacriticalTilde: DiacriticalTilde,
  	diam: diam,
  	diamond: diamond,
  	Diamond: Diamond,
  	diamondsuit: diamondsuit,
  	diams: diams,
  	die: die,
  	DifferentialD: DifferentialD,
  	digamma: digamma,
  	disin: disin,
  	div: div,
  	divide: divide,
  	divideontimes: divideontimes,
  	divonx: divonx,
  	DJcy: DJcy,
  	djcy: djcy,
  	dlcorn: dlcorn,
  	dlcrop: dlcrop,
  	dollar: dollar,
  	Dopf: Dopf,
  	dopf: dopf,
  	Dot: Dot,
  	dot: dot,
  	DotDot: DotDot,
  	doteq: doteq,
  	doteqdot: doteqdot,
  	DotEqual: DotEqual,
  	dotminus: dotminus,
  	dotplus: dotplus,
  	dotsquare: dotsquare,
  	doublebarwedge: doublebarwedge,
  	DoubleContourIntegral: DoubleContourIntegral,
  	DoubleDot: DoubleDot,
  	DoubleDownArrow: DoubleDownArrow,
  	DoubleLeftArrow: DoubleLeftArrow,
  	DoubleLeftRightArrow: DoubleLeftRightArrow,
  	DoubleLeftTee: DoubleLeftTee,
  	DoubleLongLeftArrow: DoubleLongLeftArrow,
  	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow,
  	DoubleLongRightArrow: DoubleLongRightArrow,
  	DoubleRightArrow: DoubleRightArrow,
  	DoubleRightTee: DoubleRightTee,
  	DoubleUpArrow: DoubleUpArrow,
  	DoubleUpDownArrow: DoubleUpDownArrow,
  	DoubleVerticalBar: DoubleVerticalBar,
  	DownArrowBar: DownArrowBar,
  	downarrow: downarrow,
  	DownArrow: DownArrow,
  	Downarrow: Downarrow,
  	DownArrowUpArrow: DownArrowUpArrow,
  	DownBreve: DownBreve,
  	downdownarrows: downdownarrows,
  	downharpoonleft: downharpoonleft,
  	downharpoonright: downharpoonright,
  	DownLeftRightVector: DownLeftRightVector,
  	DownLeftTeeVector: DownLeftTeeVector,
  	DownLeftVectorBar: DownLeftVectorBar,
  	DownLeftVector: DownLeftVector,
  	DownRightTeeVector: DownRightTeeVector,
  	DownRightVectorBar: DownRightVectorBar,
  	DownRightVector: DownRightVector,
  	DownTeeArrow: DownTeeArrow,
  	DownTee: DownTee,
  	drbkarow: drbkarow,
  	drcorn: drcorn,
  	drcrop: drcrop,
  	Dscr: Dscr,
  	dscr: dscr,
  	DScy: DScy,
  	dscy: dscy,
  	dsol: dsol,
  	Dstrok: Dstrok,
  	dstrok: dstrok,
  	dtdot: dtdot,
  	dtri: dtri,
  	dtrif: dtrif,
  	duarr: duarr,
  	duhar: duhar,
  	dwangle: dwangle,
  	DZcy: DZcy,
  	dzcy: dzcy,
  	dzigrarr: dzigrarr,
  	Eacute: Eacute,
  	eacute: eacute,
  	easter: easter,
  	Ecaron: Ecaron,
  	ecaron: ecaron,
  	Ecirc: Ecirc,
  	ecirc: ecirc,
  	ecir: ecir,
  	ecolon: ecolon,
  	Ecy: Ecy,
  	ecy: ecy,
  	eDDot: eDDot,
  	Edot: Edot,
  	edot: edot,
  	eDot: eDot,
  	ee: ee,
  	efDot: efDot,
  	Efr: Efr,
  	efr: efr,
  	eg: eg,
  	Egrave: Egrave,
  	egrave: egrave,
  	egs: egs,
  	egsdot: egsdot,
  	el: el,
  	Element: Element,
  	elinters: elinters,
  	ell: ell,
  	els: els,
  	elsdot: elsdot,
  	Emacr: Emacr,
  	emacr: emacr,
  	empty: empty,
  	emptyset: emptyset,
  	EmptySmallSquare: EmptySmallSquare,
  	emptyv: emptyv,
  	EmptyVerySmallSquare: EmptyVerySmallSquare,
  	emsp13: emsp13,
  	emsp14: emsp14,
  	emsp: emsp,
  	ENG: ENG,
  	eng: eng,
  	ensp: ensp,
  	Eogon: Eogon,
  	eogon: eogon,
  	Eopf: Eopf,
  	eopf: eopf,
  	epar: epar,
  	eparsl: eparsl,
  	eplus: eplus,
  	epsi: epsi,
  	Epsilon: Epsilon,
  	epsilon: epsilon,
  	epsiv: epsiv,
  	eqcirc: eqcirc,
  	eqcolon: eqcolon,
  	eqsim: eqsim,
  	eqslantgtr: eqslantgtr,
  	eqslantless: eqslantless,
  	Equal: Equal,
  	equals: equals,
  	EqualTilde: EqualTilde,
  	equest: equest,
  	Equilibrium: Equilibrium,
  	equiv: equiv,
  	equivDD: equivDD,
  	eqvparsl: eqvparsl,
  	erarr: erarr,
  	erDot: erDot,
  	escr: escr,
  	Escr: Escr,
  	esdot: esdot,
  	Esim: Esim,
  	esim: esim,
  	Eta: Eta,
  	eta: eta,
  	ETH: ETH,
  	eth: eth,
  	Euml: Euml,
  	euml: euml,
  	euro: euro,
  	excl: excl,
  	exist: exist,
  	Exists: Exists,
  	expectation: expectation,
  	exponentiale: exponentiale,
  	ExponentialE: ExponentialE,
  	fallingdotseq: fallingdotseq,
  	Fcy: Fcy,
  	fcy: fcy,
  	female: female,
  	ffilig: ffilig,
  	fflig: fflig,
  	ffllig: ffllig,
  	Ffr: Ffr,
  	ffr: ffr,
  	filig: filig,
  	FilledSmallSquare: FilledSmallSquare,
  	FilledVerySmallSquare: FilledVerySmallSquare,
  	fjlig: fjlig,
  	flat: flat,
  	fllig: fllig,
  	fltns: fltns,
  	fnof: fnof,
  	Fopf: Fopf,
  	fopf: fopf,
  	forall: forall,
  	ForAll: ForAll,
  	fork: fork,
  	forkv: forkv,
  	Fouriertrf: Fouriertrf,
  	fpartint: fpartint,
  	frac12: frac12,
  	frac13: frac13,
  	frac14: frac14,
  	frac15: frac15,
  	frac16: frac16,
  	frac18: frac18,
  	frac23: frac23,
  	frac25: frac25,
  	frac34: frac34,
  	frac35: frac35,
  	frac38: frac38,
  	frac45: frac45,
  	frac56: frac56,
  	frac58: frac58,
  	frac78: frac78,
  	frasl: frasl,
  	frown: frown,
  	fscr: fscr,
  	Fscr: Fscr,
  	gacute: gacute,
  	Gamma: Gamma,
  	gamma: gamma,
  	Gammad: Gammad,
  	gammad: gammad,
  	gap: gap,
  	Gbreve: Gbreve,
  	gbreve: gbreve,
  	Gcedil: Gcedil,
  	Gcirc: Gcirc,
  	gcirc: gcirc,
  	Gcy: Gcy,
  	gcy: gcy,
  	Gdot: Gdot,
  	gdot: gdot,
  	ge: ge,
  	gE: gE,
  	gEl: gEl,
  	gel: gel,
  	geq: geq,
  	geqq: geqq,
  	geqslant: geqslant,
  	gescc: gescc,
  	ges: ges,
  	gesdot: gesdot,
  	gesdoto: gesdoto,
  	gesdotol: gesdotol,
  	gesl: gesl,
  	gesles: gesles,
  	Gfr: Gfr,
  	gfr: gfr,
  	gg: gg,
  	Gg: Gg,
  	ggg: ggg,
  	gimel: gimel,
  	GJcy: GJcy,
  	gjcy: gjcy,
  	gla: gla,
  	gl: gl,
  	glE: glE,
  	glj: glj,
  	gnap: gnap,
  	gnapprox: gnapprox,
  	gne: gne,
  	gnE: gnE,
  	gneq: gneq,
  	gneqq: gneqq,
  	gnsim: gnsim,
  	Gopf: Gopf,
  	gopf: gopf,
  	grave: grave,
  	GreaterEqual: GreaterEqual,
  	GreaterEqualLess: GreaterEqualLess,
  	GreaterFullEqual: GreaterFullEqual,
  	GreaterGreater: GreaterGreater,
  	GreaterLess: GreaterLess,
  	GreaterSlantEqual: GreaterSlantEqual,
  	GreaterTilde: GreaterTilde,
  	Gscr: Gscr,
  	gscr: gscr,
  	gsim: gsim,
  	gsime: gsime,
  	gsiml: gsiml,
  	gtcc: gtcc,
  	gtcir: gtcir,
  	gt: gt,
  	GT: GT,
  	Gt: Gt,
  	gtdot: gtdot,
  	gtlPar: gtlPar,
  	gtquest: gtquest,
  	gtrapprox: gtrapprox,
  	gtrarr: gtrarr,
  	gtrdot: gtrdot,
  	gtreqless: gtreqless,
  	gtreqqless: gtreqqless,
  	gtrless: gtrless,
  	gtrsim: gtrsim,
  	gvertneqq: gvertneqq,
  	gvnE: gvnE,
  	Hacek: Hacek,
  	hairsp: hairsp,
  	half: half,
  	hamilt: hamilt,
  	HARDcy: HARDcy,
  	hardcy: hardcy,
  	harrcir: harrcir,
  	harr: harr,
  	hArr: hArr,
  	harrw: harrw,
  	Hat: Hat,
  	hbar: hbar,
  	Hcirc: Hcirc,
  	hcirc: hcirc,
  	hearts: hearts,
  	heartsuit: heartsuit,
  	hellip: hellip,
  	hercon: hercon,
  	hfr: hfr,
  	Hfr: Hfr,
  	HilbertSpace: HilbertSpace,
  	hksearow: hksearow,
  	hkswarow: hkswarow,
  	hoarr: hoarr,
  	homtht: homtht,
  	hookleftarrow: hookleftarrow,
  	hookrightarrow: hookrightarrow,
  	hopf: hopf,
  	Hopf: Hopf,
  	horbar: horbar,
  	HorizontalLine: HorizontalLine,
  	hscr: hscr,
  	Hscr: Hscr,
  	hslash: hslash,
  	Hstrok: Hstrok,
  	hstrok: hstrok,
  	HumpDownHump: HumpDownHump,
  	HumpEqual: HumpEqual,
  	hybull: hybull,
  	hyphen: hyphen,
  	Iacute: Iacute,
  	iacute: iacute,
  	ic: ic,
  	Icirc: Icirc,
  	icirc: icirc,
  	Icy: Icy,
  	icy: icy,
  	Idot: Idot,
  	IEcy: IEcy,
  	iecy: iecy,
  	iexcl: iexcl,
  	iff: iff,
  	ifr: ifr,
  	Ifr: Ifr,
  	Igrave: Igrave,
  	igrave: igrave,
  	ii: ii,
  	iiiint: iiiint,
  	iiint: iiint,
  	iinfin: iinfin,
  	iiota: iiota,
  	IJlig: IJlig,
  	ijlig: ijlig,
  	Imacr: Imacr,
  	imacr: imacr,
  	image: image,
  	ImaginaryI: ImaginaryI,
  	imagline: imagline,
  	imagpart: imagpart,
  	imath: imath,
  	Im: Im,
  	imof: imof,
  	imped: imped,
  	Implies: Implies,
  	incare: incare,
  	"in": "∈",
  	infin: infin,
  	infintie: infintie,
  	inodot: inodot,
  	intcal: intcal,
  	int: int,
  	Int: Int,
  	integers: integers,
  	Integral: Integral,
  	intercal: intercal,
  	Intersection: Intersection,
  	intlarhk: intlarhk,
  	intprod: intprod,
  	InvisibleComma: InvisibleComma,
  	InvisibleTimes: InvisibleTimes,
  	IOcy: IOcy,
  	iocy: iocy,
  	Iogon: Iogon,
  	iogon: iogon,
  	Iopf: Iopf,
  	iopf: iopf,
  	Iota: Iota,
  	iota: iota,
  	iprod: iprod,
  	iquest: iquest,
  	iscr: iscr,
  	Iscr: Iscr,
  	isin: isin,
  	isindot: isindot,
  	isinE: isinE,
  	isins: isins,
  	isinsv: isinsv,
  	isinv: isinv,
  	it: it,
  	Itilde: Itilde,
  	itilde: itilde,
  	Iukcy: Iukcy,
  	iukcy: iukcy,
  	Iuml: Iuml,
  	iuml: iuml,
  	Jcirc: Jcirc,
  	jcirc: jcirc,
  	Jcy: Jcy,
  	jcy: jcy,
  	Jfr: Jfr,
  	jfr: jfr,
  	jmath: jmath,
  	Jopf: Jopf,
  	jopf: jopf,
  	Jscr: Jscr,
  	jscr: jscr,
  	Jsercy: Jsercy,
  	jsercy: jsercy,
  	Jukcy: Jukcy,
  	jukcy: jukcy,
  	Kappa: Kappa,
  	kappa: kappa,
  	kappav: kappav,
  	Kcedil: Kcedil,
  	kcedil: kcedil,
  	Kcy: Kcy,
  	kcy: kcy,
  	Kfr: Kfr,
  	kfr: kfr,
  	kgreen: kgreen,
  	KHcy: KHcy,
  	khcy: khcy,
  	KJcy: KJcy,
  	kjcy: kjcy,
  	Kopf: Kopf,
  	kopf: kopf,
  	Kscr: Kscr,
  	kscr: kscr,
  	lAarr: lAarr,
  	Lacute: Lacute,
  	lacute: lacute,
  	laemptyv: laemptyv,
  	lagran: lagran,
  	Lambda: Lambda,
  	lambda: lambda,
  	lang: lang,
  	Lang: Lang,
  	langd: langd,
  	langle: langle,
  	lap: lap,
  	Laplacetrf: Laplacetrf,
  	laquo: laquo,
  	larrb: larrb,
  	larrbfs: larrbfs,
  	larr: larr,
  	Larr: Larr,
  	lArr: lArr,
  	larrfs: larrfs,
  	larrhk: larrhk,
  	larrlp: larrlp,
  	larrpl: larrpl,
  	larrsim: larrsim,
  	larrtl: larrtl,
  	latail: latail,
  	lAtail: lAtail,
  	lat: lat,
  	late: late,
  	lates: lates,
  	lbarr: lbarr,
  	lBarr: lBarr,
  	lbbrk: lbbrk,
  	lbrace: lbrace,
  	lbrack: lbrack,
  	lbrke: lbrke,
  	lbrksld: lbrksld,
  	lbrkslu: lbrkslu,
  	Lcaron: Lcaron,
  	lcaron: lcaron,
  	Lcedil: Lcedil,
  	lcedil: lcedil,
  	lceil: lceil,
  	lcub: lcub,
  	Lcy: Lcy,
  	lcy: lcy,
  	ldca: ldca,
  	ldquo: ldquo,
  	ldquor: ldquor,
  	ldrdhar: ldrdhar,
  	ldrushar: ldrushar,
  	ldsh: ldsh,
  	le: le,
  	lE: lE,
  	LeftAngleBracket: LeftAngleBracket,
  	LeftArrowBar: LeftArrowBar,
  	leftarrow: leftarrow,
  	LeftArrow: LeftArrow,
  	Leftarrow: Leftarrow,
  	LeftArrowRightArrow: LeftArrowRightArrow,
  	leftarrowtail: leftarrowtail,
  	LeftCeiling: LeftCeiling,
  	LeftDoubleBracket: LeftDoubleBracket,
  	LeftDownTeeVector: LeftDownTeeVector,
  	LeftDownVectorBar: LeftDownVectorBar,
  	LeftDownVector: LeftDownVector,
  	LeftFloor: LeftFloor,
  	leftharpoondown: leftharpoondown,
  	leftharpoonup: leftharpoonup,
  	leftleftarrows: leftleftarrows,
  	leftrightarrow: leftrightarrow,
  	LeftRightArrow: LeftRightArrow,
  	Leftrightarrow: Leftrightarrow,
  	leftrightarrows: leftrightarrows,
  	leftrightharpoons: leftrightharpoons,
  	leftrightsquigarrow: leftrightsquigarrow,
  	LeftRightVector: LeftRightVector,
  	LeftTeeArrow: LeftTeeArrow,
  	LeftTee: LeftTee,
  	LeftTeeVector: LeftTeeVector,
  	leftthreetimes: leftthreetimes,
  	LeftTriangleBar: LeftTriangleBar,
  	LeftTriangle: LeftTriangle,
  	LeftTriangleEqual: LeftTriangleEqual,
  	LeftUpDownVector: LeftUpDownVector,
  	LeftUpTeeVector: LeftUpTeeVector,
  	LeftUpVectorBar: LeftUpVectorBar,
  	LeftUpVector: LeftUpVector,
  	LeftVectorBar: LeftVectorBar,
  	LeftVector: LeftVector,
  	lEg: lEg,
  	leg: leg,
  	leq: leq,
  	leqq: leqq,
  	leqslant: leqslant,
  	lescc: lescc,
  	les: les,
  	lesdot: lesdot,
  	lesdoto: lesdoto,
  	lesdotor: lesdotor,
  	lesg: lesg,
  	lesges: lesges,
  	lessapprox: lessapprox,
  	lessdot: lessdot,
  	lesseqgtr: lesseqgtr,
  	lesseqqgtr: lesseqqgtr,
  	LessEqualGreater: LessEqualGreater,
  	LessFullEqual: LessFullEqual,
  	LessGreater: LessGreater,
  	lessgtr: lessgtr,
  	LessLess: LessLess,
  	lesssim: lesssim,
  	LessSlantEqual: LessSlantEqual,
  	LessTilde: LessTilde,
  	lfisht: lfisht,
  	lfloor: lfloor,
  	Lfr: Lfr,
  	lfr: lfr,
  	lg: lg,
  	lgE: lgE,
  	lHar: lHar,
  	lhard: lhard,
  	lharu: lharu,
  	lharul: lharul,
  	lhblk: lhblk,
  	LJcy: LJcy,
  	ljcy: ljcy,
  	llarr: llarr,
  	ll: ll,
  	Ll: Ll,
  	llcorner: llcorner,
  	Lleftarrow: Lleftarrow,
  	llhard: llhard,
  	lltri: lltri,
  	Lmidot: Lmidot,
  	lmidot: lmidot,
  	lmoustache: lmoustache,
  	lmoust: lmoust,
  	lnap: lnap,
  	lnapprox: lnapprox,
  	lne: lne,
  	lnE: lnE,
  	lneq: lneq,
  	lneqq: lneqq,
  	lnsim: lnsim,
  	loang: loang,
  	loarr: loarr,
  	lobrk: lobrk,
  	longleftarrow: longleftarrow,
  	LongLeftArrow: LongLeftArrow,
  	Longleftarrow: Longleftarrow,
  	longleftrightarrow: longleftrightarrow,
  	LongLeftRightArrow: LongLeftRightArrow,
  	Longleftrightarrow: Longleftrightarrow,
  	longmapsto: longmapsto,
  	longrightarrow: longrightarrow,
  	LongRightArrow: LongRightArrow,
  	Longrightarrow: Longrightarrow,
  	looparrowleft: looparrowleft,
  	looparrowright: looparrowright,
  	lopar: lopar,
  	Lopf: Lopf,
  	lopf: lopf,
  	loplus: loplus,
  	lotimes: lotimes,
  	lowast: lowast,
  	lowbar: lowbar,
  	LowerLeftArrow: LowerLeftArrow,
  	LowerRightArrow: LowerRightArrow,
  	loz: loz,
  	lozenge: lozenge,
  	lozf: lozf,
  	lpar: lpar,
  	lparlt: lparlt,
  	lrarr: lrarr,
  	lrcorner: lrcorner,
  	lrhar: lrhar,
  	lrhard: lrhard,
  	lrm: lrm,
  	lrtri: lrtri,
  	lsaquo: lsaquo,
  	lscr: lscr,
  	Lscr: Lscr,
  	lsh: lsh,
  	Lsh: Lsh,
  	lsim: lsim,
  	lsime: lsime,
  	lsimg: lsimg,
  	lsqb: lsqb,
  	lsquo: lsquo,
  	lsquor: lsquor,
  	Lstrok: Lstrok,
  	lstrok: lstrok,
  	ltcc: ltcc,
  	ltcir: ltcir,
  	lt: lt,
  	LT: LT,
  	Lt: Lt,
  	ltdot: ltdot,
  	lthree: lthree,
  	ltimes: ltimes,
  	ltlarr: ltlarr,
  	ltquest: ltquest,
  	ltri: ltri,
  	ltrie: ltrie,
  	ltrif: ltrif,
  	ltrPar: ltrPar,
  	lurdshar: lurdshar,
  	luruhar: luruhar,
  	lvertneqq: lvertneqq,
  	lvnE: lvnE,
  	macr: macr,
  	male: male,
  	malt: malt,
  	maltese: maltese,
  	"Map": "⤅",
  	map: map,
  	mapsto: mapsto,
  	mapstodown: mapstodown,
  	mapstoleft: mapstoleft,
  	mapstoup: mapstoup,
  	marker: marker,
  	mcomma: mcomma,
  	Mcy: Mcy,
  	mcy: mcy,
  	mdash: mdash,
  	mDDot: mDDot,
  	measuredangle: measuredangle,
  	MediumSpace: MediumSpace,
  	Mellintrf: Mellintrf,
  	Mfr: Mfr,
  	mfr: mfr,
  	mho: mho,
  	micro: micro,
  	midast: midast,
  	midcir: midcir,
  	mid: mid,
  	middot: middot,
  	minusb: minusb,
  	minus: minus,
  	minusd: minusd,
  	minusdu: minusdu,
  	MinusPlus: MinusPlus,
  	mlcp: mlcp,
  	mldr: mldr,
  	mnplus: mnplus,
  	models: models,
  	Mopf: Mopf,
  	mopf: mopf,
  	mp: mp,
  	mscr: mscr,
  	Mscr: Mscr,
  	mstpos: mstpos,
  	Mu: Mu,
  	mu: mu,
  	multimap: multimap,
  	mumap: mumap,
  	nabla: nabla,
  	Nacute: Nacute,
  	nacute: nacute,
  	nang: nang,
  	nap: nap,
  	napE: napE,
  	napid: napid,
  	napos: napos,
  	napprox: napprox,
  	natural: natural,
  	naturals: naturals,
  	natur: natur,
  	nbsp: nbsp,
  	nbump: nbump,
  	nbumpe: nbumpe,
  	ncap: ncap,
  	Ncaron: Ncaron,
  	ncaron: ncaron,
  	Ncedil: Ncedil,
  	ncedil: ncedil,
  	ncong: ncong,
  	ncongdot: ncongdot,
  	ncup: ncup,
  	Ncy: Ncy,
  	ncy: ncy,
  	ndash: ndash,
  	nearhk: nearhk,
  	nearr: nearr,
  	neArr: neArr,
  	nearrow: nearrow,
  	ne: ne,
  	nedot: nedot,
  	NegativeMediumSpace: NegativeMediumSpace,
  	NegativeThickSpace: NegativeThickSpace,
  	NegativeThinSpace: NegativeThinSpace,
  	NegativeVeryThinSpace: NegativeVeryThinSpace,
  	nequiv: nequiv,
  	nesear: nesear,
  	nesim: nesim,
  	NestedGreaterGreater: NestedGreaterGreater,
  	NestedLessLess: NestedLessLess,
  	NewLine: NewLine,
  	nexist: nexist,
  	nexists: nexists,
  	Nfr: Nfr,
  	nfr: nfr,
  	ngE: ngE,
  	nge: nge,
  	ngeq: ngeq,
  	ngeqq: ngeqq,
  	ngeqslant: ngeqslant,
  	nges: nges,
  	nGg: nGg,
  	ngsim: ngsim,
  	nGt: nGt,
  	ngt: ngt,
  	ngtr: ngtr,
  	nGtv: nGtv,
  	nharr: nharr,
  	nhArr: nhArr,
  	nhpar: nhpar,
  	ni: ni,
  	nis: nis,
  	nisd: nisd,
  	niv: niv,
  	NJcy: NJcy,
  	njcy: njcy,
  	nlarr: nlarr,
  	nlArr: nlArr,
  	nldr: nldr,
  	nlE: nlE,
  	nle: nle,
  	nleftarrow: nleftarrow,
  	nLeftarrow: nLeftarrow,
  	nleftrightarrow: nleftrightarrow,
  	nLeftrightarrow: nLeftrightarrow,
  	nleq: nleq,
  	nleqq: nleqq,
  	nleqslant: nleqslant,
  	nles: nles,
  	nless: nless,
  	nLl: nLl,
  	nlsim: nlsim,
  	nLt: nLt,
  	nlt: nlt,
  	nltri: nltri,
  	nltrie: nltrie,
  	nLtv: nLtv,
  	nmid: nmid,
  	NoBreak: NoBreak,
  	NonBreakingSpace: NonBreakingSpace,
  	nopf: nopf,
  	Nopf: Nopf,
  	Not: Not,
  	not: not,
  	NotCongruent: NotCongruent,
  	NotCupCap: NotCupCap,
  	NotDoubleVerticalBar: NotDoubleVerticalBar,
  	NotElement: NotElement,
  	NotEqual: NotEqual,
  	NotEqualTilde: NotEqualTilde,
  	NotExists: NotExists,
  	NotGreater: NotGreater,
  	NotGreaterEqual: NotGreaterEqual,
  	NotGreaterFullEqual: NotGreaterFullEqual,
  	NotGreaterGreater: NotGreaterGreater,
  	NotGreaterLess: NotGreaterLess,
  	NotGreaterSlantEqual: NotGreaterSlantEqual,
  	NotGreaterTilde: NotGreaterTilde,
  	NotHumpDownHump: NotHumpDownHump,
  	NotHumpEqual: NotHumpEqual,
  	notin: notin,
  	notindot: notindot,
  	notinE: notinE,
  	notinva: notinva,
  	notinvb: notinvb,
  	notinvc: notinvc,
  	NotLeftTriangleBar: NotLeftTriangleBar,
  	NotLeftTriangle: NotLeftTriangle,
  	NotLeftTriangleEqual: NotLeftTriangleEqual,
  	NotLess: NotLess,
  	NotLessEqual: NotLessEqual,
  	NotLessGreater: NotLessGreater,
  	NotLessLess: NotLessLess,
  	NotLessSlantEqual: NotLessSlantEqual,
  	NotLessTilde: NotLessTilde,
  	NotNestedGreaterGreater: NotNestedGreaterGreater,
  	NotNestedLessLess: NotNestedLessLess,
  	notni: notni,
  	notniva: notniva,
  	notnivb: notnivb,
  	notnivc: notnivc,
  	NotPrecedes: NotPrecedes,
  	NotPrecedesEqual: NotPrecedesEqual,
  	NotPrecedesSlantEqual: NotPrecedesSlantEqual,
  	NotReverseElement: NotReverseElement,
  	NotRightTriangleBar: NotRightTriangleBar,
  	NotRightTriangle: NotRightTriangle,
  	NotRightTriangleEqual: NotRightTriangleEqual,
  	NotSquareSubset: NotSquareSubset,
  	NotSquareSubsetEqual: NotSquareSubsetEqual,
  	NotSquareSuperset: NotSquareSuperset,
  	NotSquareSupersetEqual: NotSquareSupersetEqual,
  	NotSubset: NotSubset,
  	NotSubsetEqual: NotSubsetEqual,
  	NotSucceeds: NotSucceeds,
  	NotSucceedsEqual: NotSucceedsEqual,
  	NotSucceedsSlantEqual: NotSucceedsSlantEqual,
  	NotSucceedsTilde: NotSucceedsTilde,
  	NotSuperset: NotSuperset,
  	NotSupersetEqual: NotSupersetEqual,
  	NotTilde: NotTilde,
  	NotTildeEqual: NotTildeEqual,
  	NotTildeFullEqual: NotTildeFullEqual,
  	NotTildeTilde: NotTildeTilde,
  	NotVerticalBar: NotVerticalBar,
  	nparallel: nparallel,
  	npar: npar,
  	nparsl: nparsl,
  	npart: npart,
  	npolint: npolint,
  	npr: npr,
  	nprcue: nprcue,
  	nprec: nprec,
  	npreceq: npreceq,
  	npre: npre,
  	nrarrc: nrarrc,
  	nrarr: nrarr,
  	nrArr: nrArr,
  	nrarrw: nrarrw,
  	nrightarrow: nrightarrow,
  	nRightarrow: nRightarrow,
  	nrtri: nrtri,
  	nrtrie: nrtrie,
  	nsc: nsc,
  	nsccue: nsccue,
  	nsce: nsce,
  	Nscr: Nscr,
  	nscr: nscr,
  	nshortmid: nshortmid,
  	nshortparallel: nshortparallel,
  	nsim: nsim,
  	nsime: nsime,
  	nsimeq: nsimeq,
  	nsmid: nsmid,
  	nspar: nspar,
  	nsqsube: nsqsube,
  	nsqsupe: nsqsupe,
  	nsub: nsub,
  	nsubE: nsubE,
  	nsube: nsube,
  	nsubset: nsubset,
  	nsubseteq: nsubseteq,
  	nsubseteqq: nsubseteqq,
  	nsucc: nsucc,
  	nsucceq: nsucceq,
  	nsup: nsup,
  	nsupE: nsupE,
  	nsupe: nsupe,
  	nsupset: nsupset,
  	nsupseteq: nsupseteq,
  	nsupseteqq: nsupseteqq,
  	ntgl: ntgl,
  	Ntilde: Ntilde,
  	ntilde: ntilde,
  	ntlg: ntlg,
  	ntriangleleft: ntriangleleft,
  	ntrianglelefteq: ntrianglelefteq,
  	ntriangleright: ntriangleright,
  	ntrianglerighteq: ntrianglerighteq,
  	Nu: Nu,
  	nu: nu,
  	num: num,
  	numero: numero,
  	numsp: numsp,
  	nvap: nvap,
  	nvdash: nvdash,
  	nvDash: nvDash,
  	nVdash: nVdash,
  	nVDash: nVDash,
  	nvge: nvge,
  	nvgt: nvgt,
  	nvHarr: nvHarr,
  	nvinfin: nvinfin,
  	nvlArr: nvlArr,
  	nvle: nvle,
  	nvlt: nvlt,
  	nvltrie: nvltrie,
  	nvrArr: nvrArr,
  	nvrtrie: nvrtrie,
  	nvsim: nvsim,
  	nwarhk: nwarhk,
  	nwarr: nwarr,
  	nwArr: nwArr,
  	nwarrow: nwarrow,
  	nwnear: nwnear,
  	Oacute: Oacute,
  	oacute: oacute,
  	oast: oast,
  	Ocirc: Ocirc,
  	ocirc: ocirc,
  	ocir: ocir,
  	Ocy: Ocy,
  	ocy: ocy,
  	odash: odash,
  	Odblac: Odblac,
  	odblac: odblac,
  	odiv: odiv,
  	odot: odot,
  	odsold: odsold,
  	OElig: OElig,
  	oelig: oelig,
  	ofcir: ofcir,
  	Ofr: Ofr,
  	ofr: ofr,
  	ogon: ogon,
  	Ograve: Ograve,
  	ograve: ograve,
  	ogt: ogt,
  	ohbar: ohbar,
  	ohm: ohm,
  	oint: oint,
  	olarr: olarr,
  	olcir: olcir,
  	olcross: olcross,
  	oline: oline,
  	olt: olt,
  	Omacr: Omacr,
  	omacr: omacr,
  	Omega: Omega,
  	omega: omega,
  	Omicron: Omicron,
  	omicron: omicron,
  	omid: omid,
  	ominus: ominus,
  	Oopf: Oopf,
  	oopf: oopf,
  	opar: opar,
  	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote,
  	OpenCurlyQuote: OpenCurlyQuote,
  	operp: operp,
  	oplus: oplus,
  	orarr: orarr,
  	Or: Or,
  	or: or,
  	ord: ord,
  	order: order,
  	orderof: orderof,
  	ordf: ordf,
  	ordm: ordm,
  	origof: origof,
  	oror: oror,
  	orslope: orslope,
  	orv: orv,
  	oS: oS,
  	Oscr: Oscr,
  	oscr: oscr,
  	Oslash: Oslash,
  	oslash: oslash,
  	osol: osol,
  	Otilde: Otilde,
  	otilde: otilde,
  	otimesas: otimesas,
  	Otimes: Otimes,
  	otimes: otimes,
  	Ouml: Ouml,
  	ouml: ouml,
  	ovbar: ovbar,
  	OverBar: OverBar,
  	OverBrace: OverBrace,
  	OverBracket: OverBracket,
  	OverParenthesis: OverParenthesis,
  	para: para,
  	parallel: parallel,
  	par: par,
  	parsim: parsim,
  	parsl: parsl,
  	part: part,
  	PartialD: PartialD,
  	Pcy: Pcy,
  	pcy: pcy,
  	percnt: percnt,
  	period: period,
  	permil: permil,
  	perp: perp,
  	pertenk: pertenk,
  	Pfr: Pfr,
  	pfr: pfr,
  	Phi: Phi,
  	phi: phi,
  	phiv: phiv,
  	phmmat: phmmat,
  	phone: phone,
  	Pi: Pi,
  	pi: pi,
  	pitchfork: pitchfork,
  	piv: piv,
  	planck: planck,
  	planckh: planckh,
  	plankv: plankv,
  	plusacir: plusacir,
  	plusb: plusb,
  	pluscir: pluscir,
  	plus: plus,
  	plusdo: plusdo,
  	plusdu: plusdu,
  	pluse: pluse,
  	PlusMinus: PlusMinus,
  	plusmn: plusmn,
  	plussim: plussim,
  	plustwo: plustwo,
  	pm: pm,
  	Poincareplane: Poincareplane,
  	pointint: pointint,
  	popf: popf,
  	Popf: Popf,
  	pound: pound,
  	prap: prap,
  	Pr: Pr,
  	pr: pr,
  	prcue: prcue,
  	precapprox: precapprox,
  	prec: prec,
  	preccurlyeq: preccurlyeq,
  	Precedes: Precedes,
  	PrecedesEqual: PrecedesEqual,
  	PrecedesSlantEqual: PrecedesSlantEqual,
  	PrecedesTilde: PrecedesTilde,
  	preceq: preceq,
  	precnapprox: precnapprox,
  	precneqq: precneqq,
  	precnsim: precnsim,
  	pre: pre,
  	prE: prE,
  	precsim: precsim,
  	prime: prime,
  	Prime: Prime,
  	primes: primes,
  	prnap: prnap,
  	prnE: prnE,
  	prnsim: prnsim,
  	prod: prod,
  	Product: Product,
  	profalar: profalar,
  	profline: profline,
  	profsurf: profsurf,
  	prop: prop,
  	Proportional: Proportional,
  	Proportion: Proportion,
  	propto: propto,
  	prsim: prsim,
  	prurel: prurel,
  	Pscr: Pscr,
  	pscr: pscr,
  	Psi: Psi,
  	psi: psi,
  	puncsp: puncsp,
  	Qfr: Qfr,
  	qfr: qfr,
  	qint: qint,
  	qopf: qopf,
  	Qopf: Qopf,
  	qprime: qprime,
  	Qscr: Qscr,
  	qscr: qscr,
  	quaternions: quaternions,
  	quatint: quatint,
  	quest: quest,
  	questeq: questeq,
  	quot: quot,
  	QUOT: QUOT,
  	rAarr: rAarr,
  	race: race,
  	Racute: Racute,
  	racute: racute,
  	radic: radic,
  	raemptyv: raemptyv,
  	rang: rang,
  	Rang: Rang,
  	rangd: rangd,
  	range: range,
  	rangle: rangle,
  	raquo: raquo,
  	rarrap: rarrap,
  	rarrb: rarrb,
  	rarrbfs: rarrbfs,
  	rarrc: rarrc,
  	rarr: rarr,
  	Rarr: Rarr,
  	rArr: rArr,
  	rarrfs: rarrfs,
  	rarrhk: rarrhk,
  	rarrlp: rarrlp,
  	rarrpl: rarrpl,
  	rarrsim: rarrsim,
  	Rarrtl: Rarrtl,
  	rarrtl: rarrtl,
  	rarrw: rarrw,
  	ratail: ratail,
  	rAtail: rAtail,
  	ratio: ratio,
  	rationals: rationals,
  	rbarr: rbarr,
  	rBarr: rBarr,
  	RBarr: RBarr,
  	rbbrk: rbbrk,
  	rbrace: rbrace,
  	rbrack: rbrack,
  	rbrke: rbrke,
  	rbrksld: rbrksld,
  	rbrkslu: rbrkslu,
  	Rcaron: Rcaron,
  	rcaron: rcaron,
  	Rcedil: Rcedil,
  	rcedil: rcedil,
  	rceil: rceil,
  	rcub: rcub,
  	Rcy: Rcy,
  	rcy: rcy,
  	rdca: rdca,
  	rdldhar: rdldhar,
  	rdquo: rdquo,
  	rdquor: rdquor,
  	rdsh: rdsh,
  	real: real,
  	realine: realine,
  	realpart: realpart,
  	reals: reals,
  	Re: Re,
  	rect: rect,
  	reg: reg,
  	REG: REG,
  	ReverseElement: ReverseElement,
  	ReverseEquilibrium: ReverseEquilibrium,
  	ReverseUpEquilibrium: ReverseUpEquilibrium,
  	rfisht: rfisht,
  	rfloor: rfloor,
  	rfr: rfr,
  	Rfr: Rfr,
  	rHar: rHar,
  	rhard: rhard,
  	rharu: rharu,
  	rharul: rharul,
  	Rho: Rho,
  	rho: rho,
  	rhov: rhov,
  	RightAngleBracket: RightAngleBracket,
  	RightArrowBar: RightArrowBar,
  	rightarrow: rightarrow,
  	RightArrow: RightArrow,
  	Rightarrow: Rightarrow,
  	RightArrowLeftArrow: RightArrowLeftArrow,
  	rightarrowtail: rightarrowtail,
  	RightCeiling: RightCeiling,
  	RightDoubleBracket: RightDoubleBracket,
  	RightDownTeeVector: RightDownTeeVector,
  	RightDownVectorBar: RightDownVectorBar,
  	RightDownVector: RightDownVector,
  	RightFloor: RightFloor,
  	rightharpoondown: rightharpoondown,
  	rightharpoonup: rightharpoonup,
  	rightleftarrows: rightleftarrows,
  	rightleftharpoons: rightleftharpoons,
  	rightrightarrows: rightrightarrows,
  	rightsquigarrow: rightsquigarrow,
  	RightTeeArrow: RightTeeArrow,
  	RightTee: RightTee,
  	RightTeeVector: RightTeeVector,
  	rightthreetimes: rightthreetimes,
  	RightTriangleBar: RightTriangleBar,
  	RightTriangle: RightTriangle,
  	RightTriangleEqual: RightTriangleEqual,
  	RightUpDownVector: RightUpDownVector,
  	RightUpTeeVector: RightUpTeeVector,
  	RightUpVectorBar: RightUpVectorBar,
  	RightUpVector: RightUpVector,
  	RightVectorBar: RightVectorBar,
  	RightVector: RightVector,
  	ring: ring,
  	risingdotseq: risingdotseq,
  	rlarr: rlarr,
  	rlhar: rlhar,
  	rlm: rlm,
  	rmoustache: rmoustache,
  	rmoust: rmoust,
  	rnmid: rnmid,
  	roang: roang,
  	roarr: roarr,
  	robrk: robrk,
  	ropar: ropar,
  	ropf: ropf,
  	Ropf: Ropf,
  	roplus: roplus,
  	rotimes: rotimes,
  	RoundImplies: RoundImplies,
  	rpar: rpar,
  	rpargt: rpargt,
  	rppolint: rppolint,
  	rrarr: rrarr,
  	Rrightarrow: Rrightarrow,
  	rsaquo: rsaquo,
  	rscr: rscr,
  	Rscr: Rscr,
  	rsh: rsh,
  	Rsh: Rsh,
  	rsqb: rsqb,
  	rsquo: rsquo,
  	rsquor: rsquor,
  	rthree: rthree,
  	rtimes: rtimes,
  	rtri: rtri,
  	rtrie: rtrie,
  	rtrif: rtrif,
  	rtriltri: rtriltri,
  	RuleDelayed: RuleDelayed,
  	ruluhar: ruluhar,
  	rx: rx,
  	Sacute: Sacute,
  	sacute: sacute,
  	sbquo: sbquo,
  	scap: scap,
  	Scaron: Scaron,
  	scaron: scaron,
  	Sc: Sc,
  	sc: sc,
  	sccue: sccue,
  	sce: sce,
  	scE: scE,
  	Scedil: Scedil,
  	scedil: scedil,
  	Scirc: Scirc,
  	scirc: scirc,
  	scnap: scnap,
  	scnE: scnE,
  	scnsim: scnsim,
  	scpolint: scpolint,
  	scsim: scsim,
  	Scy: Scy,
  	scy: scy,
  	sdotb: sdotb,
  	sdot: sdot,
  	sdote: sdote,
  	searhk: searhk,
  	searr: searr,
  	seArr: seArr,
  	searrow: searrow,
  	sect: sect,
  	semi: semi,
  	seswar: seswar,
  	setminus: setminus,
  	setmn: setmn,
  	sext: sext,
  	Sfr: Sfr,
  	sfr: sfr,
  	sfrown: sfrown,
  	sharp: sharp,
  	SHCHcy: SHCHcy,
  	shchcy: shchcy,
  	SHcy: SHcy,
  	shcy: shcy,
  	ShortDownArrow: ShortDownArrow,
  	ShortLeftArrow: ShortLeftArrow,
  	shortmid: shortmid,
  	shortparallel: shortparallel,
  	ShortRightArrow: ShortRightArrow,
  	ShortUpArrow: ShortUpArrow,
  	shy: shy,
  	Sigma: Sigma,
  	sigma: sigma,
  	sigmaf: sigmaf,
  	sigmav: sigmav,
  	sim: sim,
  	simdot: simdot,
  	sime: sime,
  	simeq: simeq,
  	simg: simg,
  	simgE: simgE,
  	siml: siml,
  	simlE: simlE,
  	simne: simne,
  	simplus: simplus,
  	simrarr: simrarr,
  	slarr: slarr,
  	SmallCircle: SmallCircle,
  	smallsetminus: smallsetminus,
  	smashp: smashp,
  	smeparsl: smeparsl,
  	smid: smid,
  	smile: smile,
  	smt: smt,
  	smte: smte,
  	smtes: smtes,
  	SOFTcy: SOFTcy,
  	softcy: softcy,
  	solbar: solbar,
  	solb: solb,
  	sol: sol,
  	Sopf: Sopf,
  	sopf: sopf,
  	spades: spades,
  	spadesuit: spadesuit,
  	spar: spar,
  	sqcap: sqcap,
  	sqcaps: sqcaps,
  	sqcup: sqcup,
  	sqcups: sqcups,
  	Sqrt: Sqrt,
  	sqsub: sqsub,
  	sqsube: sqsube,
  	sqsubset: sqsubset,
  	sqsubseteq: sqsubseteq,
  	sqsup: sqsup,
  	sqsupe: sqsupe,
  	sqsupset: sqsupset,
  	sqsupseteq: sqsupseteq,
  	square: square,
  	Square: Square,
  	SquareIntersection: SquareIntersection,
  	SquareSubset: SquareSubset,
  	SquareSubsetEqual: SquareSubsetEqual,
  	SquareSuperset: SquareSuperset,
  	SquareSupersetEqual: SquareSupersetEqual,
  	SquareUnion: SquareUnion,
  	squarf: squarf,
  	squ: squ,
  	squf: squf,
  	srarr: srarr,
  	Sscr: Sscr,
  	sscr: sscr,
  	ssetmn: ssetmn,
  	ssmile: ssmile,
  	sstarf: sstarf,
  	Star: Star,
  	star: star,
  	starf: starf,
  	straightepsilon: straightepsilon,
  	straightphi: straightphi,
  	strns: strns,
  	sub: sub,
  	Sub: Sub,
  	subdot: subdot,
  	subE: subE,
  	sube: sube,
  	subedot: subedot,
  	submult: submult,
  	subnE: subnE,
  	subne: subne,
  	subplus: subplus,
  	subrarr: subrarr,
  	subset: subset,
  	Subset: Subset,
  	subseteq: subseteq,
  	subseteqq: subseteqq,
  	SubsetEqual: SubsetEqual,
  	subsetneq: subsetneq,
  	subsetneqq: subsetneqq,
  	subsim: subsim,
  	subsub: subsub,
  	subsup: subsup,
  	succapprox: succapprox,
  	succ: succ,
  	succcurlyeq: succcurlyeq,
  	Succeeds: Succeeds,
  	SucceedsEqual: SucceedsEqual,
  	SucceedsSlantEqual: SucceedsSlantEqual,
  	SucceedsTilde: SucceedsTilde,
  	succeq: succeq,
  	succnapprox: succnapprox,
  	succneqq: succneqq,
  	succnsim: succnsim,
  	succsim: succsim,
  	SuchThat: SuchThat,
  	sum: sum,
  	Sum: Sum,
  	sung: sung,
  	sup1: sup1,
  	sup2: sup2,
  	sup3: sup3,
  	sup: sup,
  	Sup: Sup,
  	supdot: supdot,
  	supdsub: supdsub,
  	supE: supE,
  	supe: supe,
  	supedot: supedot,
  	Superset: Superset,
  	SupersetEqual: SupersetEqual,
  	suphsol: suphsol,
  	suphsub: suphsub,
  	suplarr: suplarr,
  	supmult: supmult,
  	supnE: supnE,
  	supne: supne,
  	supplus: supplus,
  	supset: supset,
  	Supset: Supset,
  	supseteq: supseteq,
  	supseteqq: supseteqq,
  	supsetneq: supsetneq,
  	supsetneqq: supsetneqq,
  	supsim: supsim,
  	supsub: supsub,
  	supsup: supsup,
  	swarhk: swarhk,
  	swarr: swarr,
  	swArr: swArr,
  	swarrow: swarrow,
  	swnwar: swnwar,
  	szlig: szlig,
  	Tab: Tab,
  	target: target,
  	Tau: Tau,
  	tau: tau,
  	tbrk: tbrk,
  	Tcaron: Tcaron,
  	tcaron: tcaron,
  	Tcedil: Tcedil,
  	tcedil: tcedil,
  	Tcy: Tcy,
  	tcy: tcy,
  	tdot: tdot,
  	telrec: telrec,
  	Tfr: Tfr,
  	tfr: tfr,
  	there4: there4,
  	therefore: therefore,
  	Therefore: Therefore,
  	Theta: Theta,
  	theta: theta,
  	thetasym: thetasym,
  	thetav: thetav,
  	thickapprox: thickapprox,
  	thicksim: thicksim,
  	ThickSpace: ThickSpace,
  	ThinSpace: ThinSpace,
  	thinsp: thinsp,
  	thkap: thkap,
  	thksim: thksim,
  	THORN: THORN,
  	thorn: thorn,
  	tilde: tilde,
  	Tilde: Tilde,
  	TildeEqual: TildeEqual,
  	TildeFullEqual: TildeFullEqual,
  	TildeTilde: TildeTilde,
  	timesbar: timesbar,
  	timesb: timesb,
  	times: times,
  	timesd: timesd,
  	tint: tint,
  	toea: toea,
  	topbot: topbot,
  	topcir: topcir,
  	top: top,
  	Topf: Topf,
  	topf: topf,
  	topfork: topfork,
  	tosa: tosa,
  	tprime: tprime,
  	trade: trade,
  	TRADE: TRADE,
  	triangle: triangle,
  	triangledown: triangledown,
  	triangleleft: triangleleft,
  	trianglelefteq: trianglelefteq,
  	triangleq: triangleq,
  	triangleright: triangleright,
  	trianglerighteq: trianglerighteq,
  	tridot: tridot,
  	trie: trie,
  	triminus: triminus,
  	TripleDot: TripleDot,
  	triplus: triplus,
  	trisb: trisb,
  	tritime: tritime,
  	trpezium: trpezium,
  	Tscr: Tscr,
  	tscr: tscr,
  	TScy: TScy,
  	tscy: tscy,
  	TSHcy: TSHcy,
  	tshcy: tshcy,
  	Tstrok: Tstrok,
  	tstrok: tstrok,
  	twixt: twixt,
  	twoheadleftarrow: twoheadleftarrow,
  	twoheadrightarrow: twoheadrightarrow,
  	Uacute: Uacute,
  	uacute: uacute,
  	uarr: uarr,
  	Uarr: Uarr,
  	uArr: uArr,
  	Uarrocir: Uarrocir,
  	Ubrcy: Ubrcy,
  	ubrcy: ubrcy,
  	Ubreve: Ubreve,
  	ubreve: ubreve,
  	Ucirc: Ucirc,
  	ucirc: ucirc,
  	Ucy: Ucy,
  	ucy: ucy,
  	udarr: udarr,
  	Udblac: Udblac,
  	udblac: udblac,
  	udhar: udhar,
  	ufisht: ufisht,
  	Ufr: Ufr,
  	ufr: ufr,
  	Ugrave: Ugrave,
  	ugrave: ugrave,
  	uHar: uHar,
  	uharl: uharl,
  	uharr: uharr,
  	uhblk: uhblk,
  	ulcorn: ulcorn,
  	ulcorner: ulcorner,
  	ulcrop: ulcrop,
  	ultri: ultri,
  	Umacr: Umacr,
  	umacr: umacr,
  	uml: uml,
  	UnderBar: UnderBar,
  	UnderBrace: UnderBrace,
  	UnderBracket: UnderBracket,
  	UnderParenthesis: UnderParenthesis,
  	Union: Union,
  	UnionPlus: UnionPlus,
  	Uogon: Uogon,
  	uogon: uogon,
  	Uopf: Uopf,
  	uopf: uopf,
  	UpArrowBar: UpArrowBar,
  	uparrow: uparrow,
  	UpArrow: UpArrow,
  	Uparrow: Uparrow,
  	UpArrowDownArrow: UpArrowDownArrow,
  	updownarrow: updownarrow,
  	UpDownArrow: UpDownArrow,
  	Updownarrow: Updownarrow,
  	UpEquilibrium: UpEquilibrium,
  	upharpoonleft: upharpoonleft,
  	upharpoonright: upharpoonright,
  	uplus: uplus,
  	UpperLeftArrow: UpperLeftArrow,
  	UpperRightArrow: UpperRightArrow,
  	upsi: upsi,
  	Upsi: Upsi,
  	upsih: upsih,
  	Upsilon: Upsilon,
  	upsilon: upsilon,
  	UpTeeArrow: UpTeeArrow,
  	UpTee: UpTee,
  	upuparrows: upuparrows,
  	urcorn: urcorn,
  	urcorner: urcorner,
  	urcrop: urcrop,
  	Uring: Uring,
  	uring: uring,
  	urtri: urtri,
  	Uscr: Uscr,
  	uscr: uscr,
  	utdot: utdot,
  	Utilde: Utilde,
  	utilde: utilde,
  	utri: utri,
  	utrif: utrif,
  	uuarr: uuarr,
  	Uuml: Uuml,
  	uuml: uuml,
  	uwangle: uwangle,
  	vangrt: vangrt,
  	varepsilon: varepsilon,
  	varkappa: varkappa,
  	varnothing: varnothing,
  	varphi: varphi,
  	varpi: varpi,
  	varpropto: varpropto,
  	varr: varr,
  	vArr: vArr,
  	varrho: varrho,
  	varsigma: varsigma,
  	varsubsetneq: varsubsetneq,
  	varsubsetneqq: varsubsetneqq,
  	varsupsetneq: varsupsetneq,
  	varsupsetneqq: varsupsetneqq,
  	vartheta: vartheta,
  	vartriangleleft: vartriangleleft,
  	vartriangleright: vartriangleright,
  	vBar: vBar,
  	Vbar: Vbar,
  	vBarv: vBarv,
  	Vcy: Vcy,
  	vcy: vcy,
  	vdash: vdash,
  	vDash: vDash,
  	Vdash: Vdash,
  	VDash: VDash,
  	Vdashl: Vdashl,
  	veebar: veebar,
  	vee: vee,
  	Vee: Vee,
  	veeeq: veeeq,
  	vellip: vellip,
  	verbar: verbar,
  	Verbar: Verbar,
  	vert: vert,
  	Vert: Vert,
  	VerticalBar: VerticalBar,
  	VerticalLine: VerticalLine,
  	VerticalSeparator: VerticalSeparator,
  	VerticalTilde: VerticalTilde,
  	VeryThinSpace: VeryThinSpace,
  	Vfr: Vfr,
  	vfr: vfr,
  	vltri: vltri,
  	vnsub: vnsub,
  	vnsup: vnsup,
  	Vopf: Vopf,
  	vopf: vopf,
  	vprop: vprop,
  	vrtri: vrtri,
  	Vscr: Vscr,
  	vscr: vscr,
  	vsubnE: vsubnE,
  	vsubne: vsubne,
  	vsupnE: vsupnE,
  	vsupne: vsupne,
  	Vvdash: Vvdash,
  	vzigzag: vzigzag,
  	Wcirc: Wcirc,
  	wcirc: wcirc,
  	wedbar: wedbar,
  	wedge: wedge,
  	Wedge: Wedge,
  	wedgeq: wedgeq,
  	weierp: weierp,
  	Wfr: Wfr,
  	wfr: wfr,
  	Wopf: Wopf,
  	wopf: wopf,
  	wp: wp,
  	wr: wr,
  	wreath: wreath,
  	Wscr: Wscr,
  	wscr: wscr,
  	xcap: xcap,
  	xcirc: xcirc,
  	xcup: xcup,
  	xdtri: xdtri,
  	Xfr: Xfr,
  	xfr: xfr,
  	xharr: xharr,
  	xhArr: xhArr,
  	Xi: Xi,
  	xi: xi,
  	xlarr: xlarr,
  	xlArr: xlArr,
  	xmap: xmap,
  	xnis: xnis,
  	xodot: xodot,
  	Xopf: Xopf,
  	xopf: xopf,
  	xoplus: xoplus,
  	xotime: xotime,
  	xrarr: xrarr,
  	xrArr: xrArr,
  	Xscr: Xscr,
  	xscr: xscr,
  	xsqcup: xsqcup,
  	xuplus: xuplus,
  	xutri: xutri,
  	xvee: xvee,
  	xwedge: xwedge,
  	Yacute: Yacute,
  	yacute: yacute,
  	YAcy: YAcy,
  	yacy: yacy,
  	Ycirc: Ycirc,
  	ycirc: ycirc,
  	Ycy: Ycy,
  	ycy: ycy,
  	yen: yen,
  	Yfr: Yfr,
  	yfr: yfr,
  	YIcy: YIcy,
  	yicy: yicy,
  	Yopf: Yopf,
  	yopf: yopf,
  	Yscr: Yscr,
  	yscr: yscr,
  	YUcy: YUcy,
  	yucy: yucy,
  	yuml: yuml,
  	Yuml: Yuml,
  	Zacute: Zacute,
  	zacute: zacute,
  	Zcaron: Zcaron,
  	zcaron: zcaron,
  	Zcy: Zcy,
  	zcy: zcy,
  	Zdot: Zdot,
  	zdot: zdot,
  	zeetrf: zeetrf,
  	ZeroWidthSpace: ZeroWidthSpace,
  	Zeta: Zeta,
  	zeta: zeta,
  	zfr: zfr,
  	Zfr: Zfr,
  	ZHcy: ZHcy,
  	zhcy: zhcy,
  	zigrarr: zigrarr,
  	zopf: zopf,
  	Zopf: Zopf,
  	Zscr: Zscr,
  	zscr: zscr,
  	zwj: zwj,
  	zwnj: zwnj
  };

  var Aacute$1 = "Á";
  var aacute$1 = "á";
  var Acirc$1 = "Â";
  var acirc$1 = "â";
  var acute$1 = "´";
  var AElig$1 = "Æ";
  var aelig$1 = "æ";
  var Agrave$1 = "À";
  var agrave$1 = "à";
  var amp$1 = "&";
  var AMP$1 = "&";
  var Aring$1 = "Å";
  var aring$1 = "å";
  var Atilde$1 = "Ã";
  var atilde$1 = "ã";
  var Auml$1 = "Ä";
  var auml$1 = "ä";
  var brvbar$1 = "¦";
  var Ccedil$1 = "Ç";
  var ccedil$1 = "ç";
  var cedil$1 = "¸";
  var cent$1 = "¢";
  var copy$1 = "©";
  var COPY$1 = "©";
  var curren$1 = "¤";
  var deg$1 = "°";
  var divide$1 = "÷";
  var Eacute$1 = "É";
  var eacute$1 = "é";
  var Ecirc$1 = "Ê";
  var ecirc$1 = "ê";
  var Egrave$1 = "È";
  var egrave$1 = "è";
  var ETH$1 = "Ð";
  var eth$1 = "ð";
  var Euml$1 = "Ë";
  var euml$1 = "ë";
  var frac12$1 = "½";
  var frac14$1 = "¼";
  var frac34$1 = "¾";
  var gt$1 = ">";
  var GT$1 = ">";
  var Iacute$1 = "Í";
  var iacute$1 = "í";
  var Icirc$1 = "Î";
  var icirc$1 = "î";
  var iexcl$1 = "¡";
  var Igrave$1 = "Ì";
  var igrave$1 = "ì";
  var iquest$1 = "¿";
  var Iuml$1 = "Ï";
  var iuml$1 = "ï";
  var laquo$1 = "«";
  var lt$1 = "<";
  var LT$1 = "<";
  var macr$1 = "¯";
  var micro$1 = "µ";
  var middot$1 = "·";
  var nbsp$1 = " ";
  var not$1 = "¬";
  var Ntilde$1 = "Ñ";
  var ntilde$1 = "ñ";
  var Oacute$1 = "Ó";
  var oacute$1 = "ó";
  var Ocirc$1 = "Ô";
  var ocirc$1 = "ô";
  var Ograve$1 = "Ò";
  var ograve$1 = "ò";
  var ordf$1 = "ª";
  var ordm$1 = "º";
  var Oslash$1 = "Ø";
  var oslash$1 = "ø";
  var Otilde$1 = "Õ";
  var otilde$1 = "õ";
  var Ouml$1 = "Ö";
  var ouml$1 = "ö";
  var para$1 = "¶";
  var plusmn$1 = "±";
  var pound$1 = "£";
  var quot$1 = "\"";
  var QUOT$1 = "\"";
  var raquo$1 = "»";
  var reg$1 = "®";
  var REG$1 = "®";
  var sect$1 = "§";
  var shy$1 = "­";
  var sup1$1 = "¹";
  var sup2$1 = "²";
  var sup3$1 = "³";
  var szlig$1 = "ß";
  var THORN$1 = "Þ";
  var thorn$1 = "þ";
  var times$1 = "×";
  var Uacute$1 = "Ú";
  var uacute$1 = "ú";
  var Ucirc$1 = "Û";
  var ucirc$1 = "û";
  var Ugrave$1 = "Ù";
  var ugrave$1 = "ù";
  var uml$1 = "¨";
  var Uuml$1 = "Ü";
  var uuml$1 = "ü";
  var Yacute$1 = "Ý";
  var yacute$1 = "ý";
  var yen$1 = "¥";
  var yuml$1 = "ÿ";
  var legacyMap = {
  	Aacute: Aacute$1,
  	aacute: aacute$1,
  	Acirc: Acirc$1,
  	acirc: acirc$1,
  	acute: acute$1,
  	AElig: AElig$1,
  	aelig: aelig$1,
  	Agrave: Agrave$1,
  	agrave: agrave$1,
  	amp: amp$1,
  	AMP: AMP$1,
  	Aring: Aring$1,
  	aring: aring$1,
  	Atilde: Atilde$1,
  	atilde: atilde$1,
  	Auml: Auml$1,
  	auml: auml$1,
  	brvbar: brvbar$1,
  	Ccedil: Ccedil$1,
  	ccedil: ccedil$1,
  	cedil: cedil$1,
  	cent: cent$1,
  	copy: copy$1,
  	COPY: COPY$1,
  	curren: curren$1,
  	deg: deg$1,
  	divide: divide$1,
  	Eacute: Eacute$1,
  	eacute: eacute$1,
  	Ecirc: Ecirc$1,
  	ecirc: ecirc$1,
  	Egrave: Egrave$1,
  	egrave: egrave$1,
  	ETH: ETH$1,
  	eth: eth$1,
  	Euml: Euml$1,
  	euml: euml$1,
  	frac12: frac12$1,
  	frac14: frac14$1,
  	frac34: frac34$1,
  	gt: gt$1,
  	GT: GT$1,
  	Iacute: Iacute$1,
  	iacute: iacute$1,
  	Icirc: Icirc$1,
  	icirc: icirc$1,
  	iexcl: iexcl$1,
  	Igrave: Igrave$1,
  	igrave: igrave$1,
  	iquest: iquest$1,
  	Iuml: Iuml$1,
  	iuml: iuml$1,
  	laquo: laquo$1,
  	lt: lt$1,
  	LT: LT$1,
  	macr: macr$1,
  	micro: micro$1,
  	middot: middot$1,
  	nbsp: nbsp$1,
  	not: not$1,
  	Ntilde: Ntilde$1,
  	ntilde: ntilde$1,
  	Oacute: Oacute$1,
  	oacute: oacute$1,
  	Ocirc: Ocirc$1,
  	ocirc: ocirc$1,
  	Ograve: Ograve$1,
  	ograve: ograve$1,
  	ordf: ordf$1,
  	ordm: ordm$1,
  	Oslash: Oslash$1,
  	oslash: oslash$1,
  	Otilde: Otilde$1,
  	otilde: otilde$1,
  	Ouml: Ouml$1,
  	ouml: ouml$1,
  	para: para$1,
  	plusmn: plusmn$1,
  	pound: pound$1,
  	quot: quot$1,
  	QUOT: QUOT$1,
  	raquo: raquo$1,
  	reg: reg$1,
  	REG: REG$1,
  	sect: sect$1,
  	shy: shy$1,
  	sup1: sup1$1,
  	sup2: sup2$1,
  	sup3: sup3$1,
  	szlig: szlig$1,
  	THORN: THORN$1,
  	thorn: thorn$1,
  	times: times$1,
  	Uacute: Uacute$1,
  	uacute: uacute$1,
  	Ucirc: Ucirc$1,
  	ucirc: ucirc$1,
  	Ugrave: Ugrave$1,
  	ugrave: ugrave$1,
  	uml: uml$1,
  	Uuml: Uuml$1,
  	uuml: uuml$1,
  	Yacute: Yacute$1,
  	yacute: yacute$1,
  	yen: yen$1,
  	yuml: yuml$1
  };

  var amp$2 = "&";
  var apos$1 = "'";
  var gt$2 = ">";
  var lt$2 = "<";
  var quot$2 = "\"";
  var xmlMap = {
  	amp: amp$2,
  	apos: apos$1,
  	gt: gt$2,
  	lt: lt$2,
  	quot: quot$2
  };

  var Tokenizer_1 = Tokenizer;









  var i = 0;
  var TEXT = i++;
  var BEFORE_TAG_NAME = i++; //after <

  var IN_TAG_NAME = i++;
  var IN_SELF_CLOSING_TAG = i++;
  var BEFORE_CLOSING_TAG_NAME = i++;
  var IN_CLOSING_TAG_NAME = i++;
  var AFTER_CLOSING_TAG_NAME = i++; //attributes

  var BEFORE_ATTRIBUTE_NAME = i++;
  var IN_ATTRIBUTE_NAME = i++;
  var AFTER_ATTRIBUTE_NAME = i++;
  var BEFORE_ATTRIBUTE_VALUE = i++;
  var IN_ATTRIBUTE_VALUE_DQ = i++; // "

  var IN_ATTRIBUTE_VALUE_SQ = i++; // '

  var IN_ATTRIBUTE_VALUE_NQ = i++; //declarations

  var BEFORE_DECLARATION = i++; // !

  var IN_DECLARATION = i++; //processing instructions

  var IN_PROCESSING_INSTRUCTION = i++; // ?
  //comments

  var BEFORE_COMMENT = i++;
  var IN_COMMENT = i++;
  var AFTER_COMMENT_1 = i++;
  var AFTER_COMMENT_2 = i++; //cdata

  var BEFORE_CDATA_1 = i++; // [

  var BEFORE_CDATA_2 = i++; // C

  var BEFORE_CDATA_3 = i++; // D

  var BEFORE_CDATA_4 = i++; // A

  var BEFORE_CDATA_5 = i++; // T

  var BEFORE_CDATA_6 = i++; // A

  var IN_CDATA = i++; // [

  var AFTER_CDATA_1 = i++; // ]

  var AFTER_CDATA_2 = i++; // ]
  //special tags

  var BEFORE_SPECIAL = i++; //S

  var BEFORE_SPECIAL_END = i++; //S

  var BEFORE_SCRIPT_1 = i++; //C

  var BEFORE_SCRIPT_2 = i++; //R

  var BEFORE_SCRIPT_3 = i++; //I

  var BEFORE_SCRIPT_4 = i++; //P

  var BEFORE_SCRIPT_5 = i++; //T

  var AFTER_SCRIPT_1 = i++; //C

  var AFTER_SCRIPT_2 = i++; //R

  var AFTER_SCRIPT_3 = i++; //I

  var AFTER_SCRIPT_4 = i++; //P

  var AFTER_SCRIPT_5 = i++; //T

  var BEFORE_STYLE_1 = i++; //T

  var BEFORE_STYLE_2 = i++; //Y

  var BEFORE_STYLE_3 = i++; //L

  var BEFORE_STYLE_4 = i++; //E

  var AFTER_STYLE_1 = i++; //T

  var AFTER_STYLE_2 = i++; //Y

  var AFTER_STYLE_3 = i++; //L

  var AFTER_STYLE_4 = i++; //E

  var BEFORE_ENTITY = i++; //&

  var BEFORE_NUMERIC_ENTITY = i++; //#

  var IN_NAMED_ENTITY = i++;
  var IN_NUMERIC_ENTITY = i++;
  var IN_HEX_ENTITY = i++; //X

  var j = 0;
  var SPECIAL_NONE = j++;
  var SPECIAL_SCRIPT = j++;
  var SPECIAL_STYLE = j++;

  function whitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
  }

  function ifElseState(upper, SUCCESS, FAILURE) {
    var lower = upper.toLowerCase();

    if (upper === lower) {
      return function (c) {
        if (c === lower) {
          this._state = SUCCESS;
        } else {
          this._state = FAILURE;
          this._index--;
        }
      };
    } else {
      return function (c) {
        if (c === lower || c === upper) {
          this._state = SUCCESS;
        } else {
          this._state = FAILURE;
          this._index--;
        }
      };
    }
  }

  function consumeSpecialNameChar(upper, NEXT_STATE) {
    var lower = upper.toLowerCase();
    return function (c) {
      if (c === lower || c === upper) {
        this._state = NEXT_STATE;
      } else {
        this._state = IN_TAG_NAME;
        this._index--; //consume the token again
      }
    };
  }

  function Tokenizer(options, cbs) {
    this._state = TEXT;
    this._buffer = "";
    this._sectionStart = 0;
    this._index = 0;
    this._bufferOffset = 0; //chars removed from _buffer

    this._baseState = TEXT;
    this._special = SPECIAL_NONE;
    this._cbs = cbs;
    this._running = true;
    this._ended = false;
    this._xmlMode = !!(options && options.xmlMode);
    this._decodeEntities = !!(options && options.decodeEntities);
  }

  Tokenizer.prototype._stateText = function (c) {
    if (c === "<") {
      if (this._index > this._sectionStart) {
        this._cbs.ontext(this._getSection());
      }

      this._state = BEFORE_TAG_NAME;
      this._sectionStart = this._index;
    } else if (this._decodeEntities && this._special === SPECIAL_NONE && c === "&") {
      if (this._index > this._sectionStart) {
        this._cbs.ontext(this._getSection());
      }

      this._baseState = TEXT;
      this._state = BEFORE_ENTITY;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateBeforeTagName = function (c) {
    if (c === "/") {
      this._state = BEFORE_CLOSING_TAG_NAME;
    } else if (c === "<") {
      this._cbs.ontext(this._getSection());

      this._sectionStart = this._index;
    } else if (c === ">" || this._special !== SPECIAL_NONE || whitespace(c)) {
      this._state = TEXT;
    } else if (c === "!") {
      this._state = BEFORE_DECLARATION;
      this._sectionStart = this._index + 1;
    } else if (c === "?") {
      this._state = IN_PROCESSING_INSTRUCTION;
      this._sectionStart = this._index + 1;
    } else {
      this._state = !this._xmlMode && (c === "s" || c === "S") ? BEFORE_SPECIAL : IN_TAG_NAME;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateInTagName = function (c) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this._emitToken("onopentagname");

      this._state = BEFORE_ATTRIBUTE_NAME;
      this._index--;
    }
  };

  Tokenizer.prototype._stateBeforeCloseingTagName = function (c) {
    if (whitespace(c)) ;else if (c === ">") {
      this._state = TEXT;
    } else if (this._special !== SPECIAL_NONE) {
      if (c === "s" || c === "S") {
        this._state = BEFORE_SPECIAL_END;
      } else {
        this._state = TEXT;
        this._index--;
      }
    } else {
      this._state = IN_CLOSING_TAG_NAME;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateInCloseingTagName = function (c) {
    if (c === ">" || whitespace(c)) {
      this._emitToken("onclosetag");

      this._state = AFTER_CLOSING_TAG_NAME;
      this._index--;
    }
  };

  Tokenizer.prototype._stateAfterCloseingTagName = function (c) {
    //skip everything until ">"
    if (c === ">") {
      this._state = TEXT;
      this._sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype._stateBeforeAttributeName = function (c) {
    if (c === ">") {
      this._cbs.onopentagend();

      this._state = TEXT;
      this._sectionStart = this._index + 1;
    } else if (c === "/") {
      this._state = IN_SELF_CLOSING_TAG;
    } else if (!whitespace(c)) {
      this._state = IN_ATTRIBUTE_NAME;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateInSelfClosingTag = function (c) {
    if (c === ">") {
      this._cbs.onselfclosingtag();

      this._state = TEXT;
      this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
      this._state = BEFORE_ATTRIBUTE_NAME;
      this._index--;
    }
  };

  Tokenizer.prototype._stateInAttributeName = function (c) {
    if (c === "=" || c === "/" || c === ">" || whitespace(c)) {
      this._cbs.onattribname(this._getSection());

      this._sectionStart = -1;
      this._state = AFTER_ATTRIBUTE_NAME;
      this._index--;
    }
  };

  Tokenizer.prototype._stateAfterAttributeName = function (c) {
    if (c === "=") {
      this._state = BEFORE_ATTRIBUTE_VALUE;
    } else if (c === "/" || c === ">") {
      this._cbs.onattribend();

      this._state = BEFORE_ATTRIBUTE_NAME;
      this._index--;
    } else if (!whitespace(c)) {
      this._cbs.onattribend();

      this._state = IN_ATTRIBUTE_NAME;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateBeforeAttributeValue = function (c) {
    if (c === '"') {
      this._state = IN_ATTRIBUTE_VALUE_DQ;
      this._sectionStart = this._index + 1;
    } else if (c === "'") {
      this._state = IN_ATTRIBUTE_VALUE_SQ;
      this._sectionStart = this._index + 1;
    } else if (!whitespace(c)) {
      this._state = IN_ATTRIBUTE_VALUE_NQ;
      this._sectionStart = this._index;
      this._index--; //reconsume token
    }
  };

  Tokenizer.prototype._stateInAttributeValueDoubleQuotes = function (c) {
    if (c === '"') {
      this._emitToken("onattribdata");

      this._cbs.onattribend();

      this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
      this._emitToken("onattribdata");

      this._baseState = this._state;
      this._state = BEFORE_ENTITY;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateInAttributeValueSingleQuotes = function (c) {
    if (c === "'") {
      this._emitToken("onattribdata");

      this._cbs.onattribend();

      this._state = BEFORE_ATTRIBUTE_NAME;
    } else if (this._decodeEntities && c === "&") {
      this._emitToken("onattribdata");

      this._baseState = this._state;
      this._state = BEFORE_ENTITY;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateInAttributeValueNoQuotes = function (c) {
    if (whitespace(c) || c === ">") {
      this._emitToken("onattribdata");

      this._cbs.onattribend();

      this._state = BEFORE_ATTRIBUTE_NAME;
      this._index--;
    } else if (this._decodeEntities && c === "&") {
      this._emitToken("onattribdata");

      this._baseState = this._state;
      this._state = BEFORE_ENTITY;
      this._sectionStart = this._index;
    }
  };

  Tokenizer.prototype._stateBeforeDeclaration = function (c) {
    this._state = c === "[" ? BEFORE_CDATA_1 : c === "-" ? BEFORE_COMMENT : IN_DECLARATION;
  };

  Tokenizer.prototype._stateInDeclaration = function (c) {
    if (c === ">") {
      this._cbs.ondeclaration(this._getSection());

      this._state = TEXT;
      this._sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype._stateInProcessingInstruction = function (c) {
    if (c === ">") {
      this._cbs.onprocessinginstruction(this._getSection());

      this._state = TEXT;
      this._sectionStart = this._index + 1;
    }
  };

  Tokenizer.prototype._stateBeforeComment = function (c) {
    if (c === "-") {
      this._state = IN_COMMENT;
      this._sectionStart = this._index + 1;
    } else {
      this._state = IN_DECLARATION;
    }
  };

  Tokenizer.prototype._stateInComment = function (c) {
    if (c === "-") this._state = AFTER_COMMENT_1;
  };

  Tokenizer.prototype._stateAfterComment1 = function (c) {
    if (c === "-") {
      this._state = AFTER_COMMENT_2;
    } else {
      this._state = IN_COMMENT;
    }
  };

  Tokenizer.prototype._stateAfterComment2 = function (c) {
    if (c === ">") {
      //remove 2 trailing chars
      this._cbs.oncomment(this._buffer.substring(this._sectionStart, this._index - 2));

      this._state = TEXT;
      this._sectionStart = this._index + 1;
    } else if (c !== "-") {
      this._state = IN_COMMENT;
    } // else: stay in AFTER_COMMENT_2 (`--->`)

  };

  Tokenizer.prototype._stateBeforeCdata1 = ifElseState("C", BEFORE_CDATA_2, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata2 = ifElseState("D", BEFORE_CDATA_3, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata3 = ifElseState("A", BEFORE_CDATA_4, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata4 = ifElseState("T", BEFORE_CDATA_5, IN_DECLARATION);
  Tokenizer.prototype._stateBeforeCdata5 = ifElseState("A", BEFORE_CDATA_6, IN_DECLARATION);

  Tokenizer.prototype._stateBeforeCdata6 = function (c) {
    if (c === "[") {
      this._state = IN_CDATA;
      this._sectionStart = this._index + 1;
    } else {
      this._state = IN_DECLARATION;
      this._index--;
    }
  };

  Tokenizer.prototype._stateInCdata = function (c) {
    if (c === "]") this._state = AFTER_CDATA_1;
  };

  Tokenizer.prototype._stateAfterCdata1 = function (c) {
    if (c === "]") this._state = AFTER_CDATA_2;else this._state = IN_CDATA;
  };

  Tokenizer.prototype._stateAfterCdata2 = function (c) {
    if (c === ">") {
      //remove 2 trailing chars
      this._cbs.oncdata(this._buffer.substring(this._sectionStart, this._index - 2));

      this._state = TEXT;
      this._sectionStart = this._index + 1;
    } else if (c !== "]") {
      this._state = IN_CDATA;
    } //else: stay in AFTER_CDATA_2 (`]]]>`)

  };

  Tokenizer.prototype._stateBeforeSpecial = function (c) {
    if (c === "c" || c === "C") {
      this._state = BEFORE_SCRIPT_1;
    } else if (c === "t" || c === "T") {
      this._state = BEFORE_STYLE_1;
    } else {
      this._state = IN_TAG_NAME;
      this._index--; //consume the token again
    }
  };

  Tokenizer.prototype._stateBeforeSpecialEnd = function (c) {
    if (this._special === SPECIAL_SCRIPT && (c === "c" || c === "C")) {
      this._state = AFTER_SCRIPT_1;
    } else if (this._special === SPECIAL_STYLE && (c === "t" || c === "T")) {
      this._state = AFTER_STYLE_1;
    } else this._state = TEXT;
  };

  Tokenizer.prototype._stateBeforeScript1 = consumeSpecialNameChar("R", BEFORE_SCRIPT_2);
  Tokenizer.prototype._stateBeforeScript2 = consumeSpecialNameChar("I", BEFORE_SCRIPT_3);
  Tokenizer.prototype._stateBeforeScript3 = consumeSpecialNameChar("P", BEFORE_SCRIPT_4);
  Tokenizer.prototype._stateBeforeScript4 = consumeSpecialNameChar("T", BEFORE_SCRIPT_5);

  Tokenizer.prototype._stateBeforeScript5 = function (c) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this._special = SPECIAL_SCRIPT;
    }

    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
  };

  Tokenizer.prototype._stateAfterScript1 = ifElseState("R", AFTER_SCRIPT_2, TEXT);
  Tokenizer.prototype._stateAfterScript2 = ifElseState("I", AFTER_SCRIPT_3, TEXT);
  Tokenizer.prototype._stateAfterScript3 = ifElseState("P", AFTER_SCRIPT_4, TEXT);
  Tokenizer.prototype._stateAfterScript4 = ifElseState("T", AFTER_SCRIPT_5, TEXT);

  Tokenizer.prototype._stateAfterScript5 = function (c) {
    if (c === ">" || whitespace(c)) {
      this._special = SPECIAL_NONE;
      this._state = IN_CLOSING_TAG_NAME;
      this._sectionStart = this._index - 6;
      this._index--; //reconsume the token
    } else this._state = TEXT;
  };

  Tokenizer.prototype._stateBeforeStyle1 = consumeSpecialNameChar("Y", BEFORE_STYLE_2);
  Tokenizer.prototype._stateBeforeStyle2 = consumeSpecialNameChar("L", BEFORE_STYLE_3);
  Tokenizer.prototype._stateBeforeStyle3 = consumeSpecialNameChar("E", BEFORE_STYLE_4);

  Tokenizer.prototype._stateBeforeStyle4 = function (c) {
    if (c === "/" || c === ">" || whitespace(c)) {
      this._special = SPECIAL_STYLE;
    }

    this._state = IN_TAG_NAME;
    this._index--; //consume the token again
  };

  Tokenizer.prototype._stateAfterStyle1 = ifElseState("Y", AFTER_STYLE_2, TEXT);
  Tokenizer.prototype._stateAfterStyle2 = ifElseState("L", AFTER_STYLE_3, TEXT);
  Tokenizer.prototype._stateAfterStyle3 = ifElseState("E", AFTER_STYLE_4, TEXT);

  Tokenizer.prototype._stateAfterStyle4 = function (c) {
    if (c === ">" || whitespace(c)) {
      this._special = SPECIAL_NONE;
      this._state = IN_CLOSING_TAG_NAME;
      this._sectionStart = this._index - 5;
      this._index--; //reconsume the token
    } else this._state = TEXT;
  };

  Tokenizer.prototype._stateBeforeEntity = ifElseState("#", BEFORE_NUMERIC_ENTITY, IN_NAMED_ENTITY);
  Tokenizer.prototype._stateBeforeNumericEntity = ifElseState("X", IN_HEX_ENTITY, IN_NUMERIC_ENTITY); //for entities terminated with a semicolon

  Tokenizer.prototype._parseNamedEntityStrict = function () {
    //offset = 1
    if (this._sectionStart + 1 < this._index) {
      var entity = this._buffer.substring(this._sectionStart + 1, this._index),
          map = this._xmlMode ? xmlMap : entityMap;

      if (map.hasOwnProperty(entity)) {
        this._emitPartial(map[entity]);

        this._sectionStart = this._index + 1;
      }
    }
  }; //parses legacy entities (without trailing semicolon)


  Tokenizer.prototype._parseLegacyEntity = function () {
    var start = this._sectionStart + 1,
        limit = this._index - start;
    if (limit > 6) limit = 6; //the max length of legacy entities is 6

    while (limit >= 2) {
      //the min length of legacy entities is 2
      var entity = this._buffer.substr(start, limit);

      if (legacyMap.hasOwnProperty(entity)) {
        this._emitPartial(legacyMap[entity]);

        this._sectionStart += limit + 1;
        return;
      } else {
        limit--;
      }
    }
  };

  Tokenizer.prototype._stateInNamedEntity = function (c) {
    if (c === ";") {
      this._parseNamedEntityStrict();

      if (this._sectionStart + 1 < this._index && !this._xmlMode) {
        this._parseLegacyEntity();
      }

      this._state = this._baseState;
    } else if ((c < "a" || c > "z") && (c < "A" || c > "Z") && (c < "0" || c > "9")) {
      if (this._xmlMode) ;else if (this._sectionStart + 1 === this._index) ;else if (this._baseState !== TEXT) {
        if (c !== "=") {
          this._parseNamedEntityStrict();
        }
      } else {
        this._parseLegacyEntity();
      }
      this._state = this._baseState;
      this._index--;
    }
  };

  Tokenizer.prototype._decodeNumericEntity = function (offset, base) {
    var sectionStart = this._sectionStart + offset;

    if (sectionStart !== this._index) {
      //parse entity
      var entity = this._buffer.substring(sectionStart, this._index);

      var parsed = parseInt(entity, base);

      this._emitPartial(decode_codepoint(parsed));

      this._sectionStart = this._index;
    } else {
      this._sectionStart--;
    }

    this._state = this._baseState;
  };

  Tokenizer.prototype._stateInNumericEntity = function (c) {
    if (c === ";") {
      this._decodeNumericEntity(2, 10);

      this._sectionStart++;
    } else if (c < "0" || c > "9") {
      if (!this._xmlMode) {
        this._decodeNumericEntity(2, 10);
      } else {
        this._state = this._baseState;
      }

      this._index--;
    }
  };

  Tokenizer.prototype._stateInHexEntity = function (c) {
    if (c === ";") {
      this._decodeNumericEntity(3, 16);

      this._sectionStart++;
    } else if ((c < "a" || c > "f") && (c < "A" || c > "F") && (c < "0" || c > "9")) {
      if (!this._xmlMode) {
        this._decodeNumericEntity(3, 16);
      } else {
        this._state = this._baseState;
      }

      this._index--;
    }
  };

  Tokenizer.prototype._cleanup = function () {
    if (this._sectionStart < 0) {
      this._buffer = "";
      this._bufferOffset += this._index;
      this._index = 0;
    } else if (this._running) {
      if (this._state === TEXT) {
        if (this._sectionStart !== this._index) {
          this._cbs.ontext(this._buffer.substr(this._sectionStart));
        }

        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
      } else if (this._sectionStart === this._index) {
        //the section just started
        this._buffer = "";
        this._bufferOffset += this._index;
        this._index = 0;
      } else {
        //remove everything unnecessary
        this._buffer = this._buffer.substr(this._sectionStart);
        this._index -= this._sectionStart;
        this._bufferOffset += this._sectionStart;
      }

      this._sectionStart = 0;
    }
  }; //TODO make events conditional


  Tokenizer.prototype.write = function (chunk) {
    if (this._ended) this._cbs.onerror(Error(".write() after done!"));
    this._buffer += chunk;

    this._parse();
  };

  Tokenizer.prototype._parse = function () {
    while (this._index < this._buffer.length && this._running) {
      var c = this._buffer.charAt(this._index);

      if (this._state === TEXT) {
        this._stateText(c);
      } else if (this._state === BEFORE_TAG_NAME) {
        this._stateBeforeTagName(c);
      } else if (this._state === IN_TAG_NAME) {
        this._stateInTagName(c);
      } else if (this._state === BEFORE_CLOSING_TAG_NAME) {
        this._stateBeforeCloseingTagName(c);
      } else if (this._state === IN_CLOSING_TAG_NAME) {
        this._stateInCloseingTagName(c);
      } else if (this._state === AFTER_CLOSING_TAG_NAME) {
        this._stateAfterCloseingTagName(c);
      } else if (this._state === IN_SELF_CLOSING_TAG) {
        this._stateInSelfClosingTag(c);
      } else if (this._state === BEFORE_ATTRIBUTE_NAME) {
        /*
        *	attributes
        */
        this._stateBeforeAttributeName(c);
      } else if (this._state === IN_ATTRIBUTE_NAME) {
        this._stateInAttributeName(c);
      } else if (this._state === AFTER_ATTRIBUTE_NAME) {
        this._stateAfterAttributeName(c);
      } else if (this._state === BEFORE_ATTRIBUTE_VALUE) {
        this._stateBeforeAttributeValue(c);
      } else if (this._state === IN_ATTRIBUTE_VALUE_DQ) {
        this._stateInAttributeValueDoubleQuotes(c);
      } else if (this._state === IN_ATTRIBUTE_VALUE_SQ) {
        this._stateInAttributeValueSingleQuotes(c);
      } else if (this._state === IN_ATTRIBUTE_VALUE_NQ) {
        this._stateInAttributeValueNoQuotes(c);
      } else if (this._state === BEFORE_DECLARATION) {
        /*
        *	declarations
        */
        this._stateBeforeDeclaration(c);
      } else if (this._state === IN_DECLARATION) {
        this._stateInDeclaration(c);
      } else if (this._state === IN_PROCESSING_INSTRUCTION) {
        /*
        *	processing instructions
        */
        this._stateInProcessingInstruction(c);
      } else if (this._state === BEFORE_COMMENT) {
        /*
        *	comments
        */
        this._stateBeforeComment(c);
      } else if (this._state === IN_COMMENT) {
        this._stateInComment(c);
      } else if (this._state === AFTER_COMMENT_1) {
        this._stateAfterComment1(c);
      } else if (this._state === AFTER_COMMENT_2) {
        this._stateAfterComment2(c);
      } else if (this._state === BEFORE_CDATA_1) {
        /*
        *	cdata
        */
        this._stateBeforeCdata1(c);
      } else if (this._state === BEFORE_CDATA_2) {
        this._stateBeforeCdata2(c);
      } else if (this._state === BEFORE_CDATA_3) {
        this._stateBeforeCdata3(c);
      } else if (this._state === BEFORE_CDATA_4) {
        this._stateBeforeCdata4(c);
      } else if (this._state === BEFORE_CDATA_5) {
        this._stateBeforeCdata5(c);
      } else if (this._state === BEFORE_CDATA_6) {
        this._stateBeforeCdata6(c);
      } else if (this._state === IN_CDATA) {
        this._stateInCdata(c);
      } else if (this._state === AFTER_CDATA_1) {
        this._stateAfterCdata1(c);
      } else if (this._state === AFTER_CDATA_2) {
        this._stateAfterCdata2(c);
      } else if (this._state === BEFORE_SPECIAL) {
        /*
        * special tags
        */
        this._stateBeforeSpecial(c);
      } else if (this._state === BEFORE_SPECIAL_END) {
        this._stateBeforeSpecialEnd(c);
      } else if (this._state === BEFORE_SCRIPT_1) {
        /*
        * script
        */
        this._stateBeforeScript1(c);
      } else if (this._state === BEFORE_SCRIPT_2) {
        this._stateBeforeScript2(c);
      } else if (this._state === BEFORE_SCRIPT_3) {
        this._stateBeforeScript3(c);
      } else if (this._state === BEFORE_SCRIPT_4) {
        this._stateBeforeScript4(c);
      } else if (this._state === BEFORE_SCRIPT_5) {
        this._stateBeforeScript5(c);
      } else if (this._state === AFTER_SCRIPT_1) {
        this._stateAfterScript1(c);
      } else if (this._state === AFTER_SCRIPT_2) {
        this._stateAfterScript2(c);
      } else if (this._state === AFTER_SCRIPT_3) {
        this._stateAfterScript3(c);
      } else if (this._state === AFTER_SCRIPT_4) {
        this._stateAfterScript4(c);
      } else if (this._state === AFTER_SCRIPT_5) {
        this._stateAfterScript5(c);
      } else if (this._state === BEFORE_STYLE_1) {
        /*
        * style
        */
        this._stateBeforeStyle1(c);
      } else if (this._state === BEFORE_STYLE_2) {
        this._stateBeforeStyle2(c);
      } else if (this._state === BEFORE_STYLE_3) {
        this._stateBeforeStyle3(c);
      } else if (this._state === BEFORE_STYLE_4) {
        this._stateBeforeStyle4(c);
      } else if (this._state === AFTER_STYLE_1) {
        this._stateAfterStyle1(c);
      } else if (this._state === AFTER_STYLE_2) {
        this._stateAfterStyle2(c);
      } else if (this._state === AFTER_STYLE_3) {
        this._stateAfterStyle3(c);
      } else if (this._state === AFTER_STYLE_4) {
        this._stateAfterStyle4(c);
      } else if (this._state === BEFORE_ENTITY) {
        /*
        * entities
        */
        this._stateBeforeEntity(c);
      } else if (this._state === BEFORE_NUMERIC_ENTITY) {
        this._stateBeforeNumericEntity(c);
      } else if (this._state === IN_NAMED_ENTITY) {
        this._stateInNamedEntity(c);
      } else if (this._state === IN_NUMERIC_ENTITY) {
        this._stateInNumericEntity(c);
      } else if (this._state === IN_HEX_ENTITY) {
        this._stateInHexEntity(c);
      } else {
        this._cbs.onerror(Error("unknown _state"), this._state);
      }

      this._index++;
    }

    this._cleanup();
  };

  Tokenizer.prototype.pause = function () {
    this._running = false;
  };

  Tokenizer.prototype.resume = function () {
    this._running = true;

    if (this._index < this._buffer.length) {
      this._parse();
    }

    if (this._ended) {
      this._finish();
    }
  };

  Tokenizer.prototype.end = function (chunk) {
    if (this._ended) this._cbs.onerror(Error(".end() after done!"));
    if (chunk) this.write(chunk);
    this._ended = true;
    if (this._running) this._finish();
  };

  Tokenizer.prototype._finish = function () {
    //if there is remaining data, emit it in a reasonable way
    if (this._sectionStart < this._index) {
      this._handleTrailingData();
    }

    this._cbs.onend();
  };

  Tokenizer.prototype._handleTrailingData = function () {
    var data = this._buffer.substr(this._sectionStart);

    if (this._state === IN_CDATA || this._state === AFTER_CDATA_1 || this._state === AFTER_CDATA_2) {
      this._cbs.oncdata(data);
    } else if (this._state === IN_COMMENT || this._state === AFTER_COMMENT_1 || this._state === AFTER_COMMENT_2) {
      this._cbs.oncomment(data);
    } else if (this._state === IN_NAMED_ENTITY && !this._xmlMode) {
      this._parseLegacyEntity();

      if (this._sectionStart < this._index) {
        this._state = this._baseState;

        this._handleTrailingData();
      }
    } else if (this._state === IN_NUMERIC_ENTITY && !this._xmlMode) {
      this._decodeNumericEntity(2, 10);

      if (this._sectionStart < this._index) {
        this._state = this._baseState;

        this._handleTrailingData();
      }
    } else if (this._state === IN_HEX_ENTITY && !this._xmlMode) {
      this._decodeNumericEntity(3, 16);

      if (this._sectionStart < this._index) {
        this._state = this._baseState;

        this._handleTrailingData();
      }
    } else if (this._state !== IN_TAG_NAME && this._state !== BEFORE_ATTRIBUTE_NAME && this._state !== BEFORE_ATTRIBUTE_VALUE && this._state !== AFTER_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_NAME && this._state !== IN_ATTRIBUTE_VALUE_SQ && this._state !== IN_ATTRIBUTE_VALUE_DQ && this._state !== IN_ATTRIBUTE_VALUE_NQ && this._state !== IN_CLOSING_TAG_NAME) {
      this._cbs.ontext(data);
    } //else, ignore remaining data
    //TODO add a way to remove current tag

  };

  Tokenizer.prototype.reset = function () {
    Tokenizer.call(this, {
      xmlMode: this._xmlMode,
      decodeEntities: this._decodeEntities
    }, this._cbs);
  };

  Tokenizer.prototype.getAbsoluteIndex = function () {
    return this._bufferOffset + this._index;
  };

  Tokenizer.prototype._getSection = function () {
    return this._buffer.substring(this._sectionStart, this._index);
  };

  Tokenizer.prototype._emitToken = function (name) {
    this._cbs[name](this._getSection());

    this._sectionStart = -1;
  };

  Tokenizer.prototype._emitPartial = function (value) {
    if (this._baseState !== TEXT) {
      this._cbs.onattribdata(value); //TODO implement the new event

    } else {
      this._cbs.ontext(value);
    }
  };

  var inherits_browser = createCommonjsModule(function (module) {
  if (typeof Object.create === 'function') {
    // implementation from standard node.js 'util' module
    module.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    // old school shim for old browsers
    module.exports = function inherits(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;

        var TempCtor = function TempCtor() {};

        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  });

  var Tokenizer$1 = Tokenizer_1;
  /*
  	Options:

  	xmlMode: Disables the special behavior for script/style tags (false by default)
  	lowerCaseAttributeNames: call .toLowerCase for each attribute name (true if xmlMode is `false`)
  	lowerCaseTags: call .toLowerCase for each tag name (true if xmlMode is `false`)
  */

  /*
  	Callbacks:

  	oncdataend,
  	oncdatastart,
  	onclosetag,
  	oncomment,
  	oncommentend,
  	onerror,
  	onopentag,
  	onprocessinginstruction,
  	onreset,
  	ontext
  */


  var formTags = {
    input: true,
    option: true,
    optgroup: true,
    select: true,
    button: true,
    datalist: true,
    textarea: true
  };
  var openImpliesClose = {
    tr: {
      tr: true,
      th: true,
      td: true
    },
    th: {
      th: true
    },
    td: {
      thead: true,
      th: true,
      td: true
    },
    body: {
      head: true,
      link: true,
      script: true
    },
    li: {
      li: true
    },
    p: {
      p: true
    },
    h1: {
      p: true
    },
    h2: {
      p: true
    },
    h3: {
      p: true
    },
    h4: {
      p: true
    },
    h5: {
      p: true
    },
    h6: {
      p: true
    },
    select: formTags,
    input: formTags,
    output: formTags,
    button: formTags,
    datalist: formTags,
    textarea: formTags,
    option: {
      option: true
    },
    optgroup: {
      optgroup: true
    }
  };
  var voidElements = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };
  var foreignContextElements = {
    __proto__: null,
    math: true,
    svg: true
  };
  var htmlIntegrationElements = {
    __proto__: null,
    mi: true,
    mo: true,
    mn: true,
    ms: true,
    mtext: true,
    "annotation-xml": true,
    foreignObject: true,
    desc: true,
    title: true
  };
  var re_nameEnd = /\s|\//;

  function Parser(cbs, options) {
    this._options = options || {};
    this._cbs = cbs || {};
    this._tagname = "";
    this._attribname = "";
    this._attribvalue = "";
    this._attribs = null;
    this._stack = [];
    this._foreignContext = [];
    this.startIndex = 0;
    this.endIndex = null;
    this._lowerCaseTagNames = "lowerCaseTags" in this._options ? !!this._options.lowerCaseTags : !this._options.xmlMode;
    this._lowerCaseAttributeNames = "lowerCaseAttributeNames" in this._options ? !!this._options.lowerCaseAttributeNames : !this._options.xmlMode;

    if (this._options.Tokenizer) {
      Tokenizer$1 = this._options.Tokenizer;
    }

    this._tokenizer = new Tokenizer$1(this._options, this);
    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
  }

  inherits_browser(Parser, require$$2__default['default'].EventEmitter);

  Parser.prototype._updatePosition = function (initialOffset) {
    if (this.endIndex === null) {
      if (this._tokenizer._sectionStart <= initialOffset) {
        this.startIndex = 0;
      } else {
        this.startIndex = this._tokenizer._sectionStart - initialOffset;
      }
    } else this.startIndex = this.endIndex + 1;

    this.endIndex = this._tokenizer.getAbsoluteIndex();
  }; //Tokenizer event handlers


  Parser.prototype.ontext = function (data) {
    this._updatePosition(1);

    this.endIndex--;
    if (this._cbs.ontext) this._cbs.ontext(data);
  };

  Parser.prototype.onopentagname = function (name) {
    if (this._lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    this._tagname = name;

    if (!this._options.xmlMode && name in openImpliesClose) {
      for (var el; ((el = this._stack[this._stack.length - 1]) in openImpliesClose[name]); this.onclosetag(el)) {
      }
    }

    if (this._options.xmlMode || !(name in voidElements)) {
      this._stack.push(name);

      if (name in foreignContextElements) this._foreignContext.push(true);else if (name in htmlIntegrationElements) this._foreignContext.push(false);
    }

    if (this._cbs.onopentagname) this._cbs.onopentagname(name);
    if (this._cbs.onopentag) this._attribs = {};
  };

  Parser.prototype.onopentagend = function () {
    this._updatePosition(1);

    if (this._attribs) {
      if (this._cbs.onopentag) this._cbs.onopentag(this._tagname, this._attribs);
      this._attribs = null;
    }

    if (!this._options.xmlMode && this._cbs.onclosetag && this._tagname in voidElements) {
      this._cbs.onclosetag(this._tagname);
    }

    this._tagname = "";
  };

  Parser.prototype.onclosetag = function (name) {
    this._updatePosition(1);

    if (this._lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    if (name in foreignContextElements || name in htmlIntegrationElements) {
      this._foreignContext.pop();
    }

    if (this._stack.length && (!(name in voidElements) || this._options.xmlMode)) {
      var pos = this._stack.lastIndexOf(name);

      if (pos !== -1) {
        if (this._cbs.onclosetag) {
          pos = this._stack.length - pos;

          while (pos--) {
            this._cbs.onclosetag(this._stack.pop());
          }
        } else this._stack.length = pos;
      } else if (name === "p" && !this._options.xmlMode) {
        this.onopentagname(name);

        this._closeCurrentTag();
      }
    } else if (!this._options.xmlMode && (name === "br" || name === "p")) {
      this.onopentagname(name);

      this._closeCurrentTag();
    }
  };

  Parser.prototype.onselfclosingtag = function () {
    if (this._options.xmlMode || this._options.recognizeSelfClosing || this._foreignContext[this._foreignContext.length - 1]) {
      this._closeCurrentTag();
    } else {
      this.onopentagend();
    }
  };

  Parser.prototype._closeCurrentTag = function () {
    var name = this._tagname;
    this.onopentagend(); //self-closing tags will be on the top of the stack
    //(cheaper check than in onclosetag)

    if (this._stack[this._stack.length - 1] === name) {
      if (this._cbs.onclosetag) {
        this._cbs.onclosetag(name);
      }

      this._stack.pop();
    }
  };

  Parser.prototype.onattribname = function (name) {
    if (this._lowerCaseAttributeNames) {
      name = name.toLowerCase();
    }

    this._attribname = name;
  };

  Parser.prototype.onattribdata = function (value) {
    this._attribvalue += value;
  };

  Parser.prototype.onattribend = function () {
    if (this._cbs.onattribute) this._cbs.onattribute(this._attribname, this._attribvalue);

    if (this._attribs && !Object.prototype.hasOwnProperty.call(this._attribs, this._attribname)) {
      this._attribs[this._attribname] = this._attribvalue;
    }

    this._attribname = "";
    this._attribvalue = "";
  };

  Parser.prototype._getInstructionName = function (value) {
    var idx = value.search(re_nameEnd),
        name = idx < 0 ? value : value.substr(0, idx);

    if (this._lowerCaseTagNames) {
      name = name.toLowerCase();
    }

    return name;
  };

  Parser.prototype.ondeclaration = function (value) {
    if (this._cbs.onprocessinginstruction) {
      var name = this._getInstructionName(value);

      this._cbs.onprocessinginstruction("!" + name, "!" + value);
    }
  };

  Parser.prototype.onprocessinginstruction = function (value) {
    if (this._cbs.onprocessinginstruction) {
      var name = this._getInstructionName(value);

      this._cbs.onprocessinginstruction("?" + name, "?" + value);
    }
  };

  Parser.prototype.oncomment = function (value) {
    this._updatePosition(4);

    if (this._cbs.oncomment) this._cbs.oncomment(value);
    if (this._cbs.oncommentend) this._cbs.oncommentend();
  };

  Parser.prototype.oncdata = function (value) {
    this._updatePosition(1);

    if (this._options.xmlMode || this._options.recognizeCDATA) {
      if (this._cbs.oncdatastart) this._cbs.oncdatastart();
      if (this._cbs.ontext) this._cbs.ontext(value);
      if (this._cbs.oncdataend) this._cbs.oncdataend();
    } else {
      this.oncomment("[CDATA[" + value + "]]");
    }
  };

  Parser.prototype.onerror = function (err) {
    if (this._cbs.onerror) this._cbs.onerror(err);
  };

  Parser.prototype.onend = function () {
    if (this._cbs.onclosetag) {
      for (var i = this._stack.length; i > 0; this._cbs.onclosetag(this._stack[--i])) {
      }
    }

    if (this._cbs.onend) this._cbs.onend();
  }; //Resets the parser to a blank state, ready to parse a new HTML document


  Parser.prototype.reset = function () {
    if (this._cbs.onreset) this._cbs.onreset();

    this._tokenizer.reset();

    this._tagname = "";
    this._attribname = "";
    this._attribs = null;
    this._stack = [];
    if (this._cbs.onparserinit) this._cbs.onparserinit(this);
  }; //Parses a complete HTML document and pushes it to the handler


  Parser.prototype.parseComplete = function (data) {
    this.reset();
    this.end(data);
  };

  Parser.prototype.write = function (chunk) {
    this._tokenizer.write(chunk);
  };

  Parser.prototype.end = function (chunk) {
    this._tokenizer.end(chunk);
  };

  Parser.prototype.pause = function () {
    this._tokenizer.pause();
  };

  Parser.prototype.resume = function () {
    this._tokenizer.resume();
  }; //alias for backwards compat


  Parser.prototype.parseChunk = Parser.prototype.write;
  Parser.prototype.done = Parser.prototype.end;
  var Parser_1 = Parser;

  var ElementType = require("domelementtype");

  var re_whitespace = /\s+/g;

  var NodePrototype = require("./lib/node");

  var ElementPrototype = require("./lib/element");

  function DomHandler(callback, options, elementCB) {
    if (_typeof(callback) === "object") {
      elementCB = options;
      options = callback;
      callback = null;
    } else if (typeof options === "function") {
      elementCB = options;
      options = defaultOpts;
    }

    this._callback = callback;
    this._options = options || defaultOpts;
    this._elementCB = elementCB;
    this.dom = [];
    this._done = false;
    this._tagStack = [];
    this._parser = this._parser || null;
  } //default options


  var defaultOpts = {
    normalizeWhitespace: false,
    //Replace all whitespace with single spaces
    withStartIndices: false,
    //Add startIndex properties to nodes
    withEndIndices: false //Add endIndex properties to nodes

  };

  DomHandler.prototype.onparserinit = function (parser) {
    this._parser = parser;
  }; //Resets the handler back to starting state


  DomHandler.prototype.onreset = function () {
    DomHandler.call(this, this._callback, this._options, this._elementCB);
  }; //Signals the handler that parsing is done


  DomHandler.prototype.onend = function () {
    if (this._done) return;
    this._done = true;
    this._parser = null;

    this._handleCallback(null);
  };

  DomHandler.prototype._handleCallback = DomHandler.prototype.onerror = function (error) {
    if (typeof this._callback === "function") {
      this._callback(error, this.dom);
    } else {
      if (error) throw error;
    }
  };

  DomHandler.prototype.onclosetag = function () {
    //if(this._tagStack.pop().name !== name) this._handleCallback(Error("Tagname didn't match!"));
    var elem = this._tagStack.pop();

    if (this._options.withEndIndices && elem) {
      elem.endIndex = this._parser.endIndex;
    }

    if (this._elementCB) this._elementCB(elem);
  };

  DomHandler.prototype._createDomElement = function (properties) {
    if (!this._options.withDomLvl1) return properties;
    var element;

    if (properties.type === "tag") {
      element = Object.create(ElementPrototype);
    } else {
      element = Object.create(NodePrototype);
    }

    for (var key in properties) {
      if (properties.hasOwnProperty(key)) {
        element[key] = properties[key];
      }
    }

    return element;
  };

  DomHandler.prototype._addDomElement = function (element) {
    var parent = this._tagStack[this._tagStack.length - 1];
    var siblings = parent ? parent.children : this.dom;
    var previousSibling = siblings[siblings.length - 1];
    element.next = null;

    if (this._options.withStartIndices) {
      element.startIndex = this._parser.startIndex;
    }

    if (this._options.withEndIndices) {
      element.endIndex = this._parser.endIndex;
    }

    if (previousSibling) {
      element.prev = previousSibling;
      previousSibling.next = element;
    } else {
      element.prev = null;
    }

    siblings.push(element);
    element.parent = parent || null;
  };

  DomHandler.prototype.onopentag = function (name, attribs) {
    var properties = {
      type: name === "script" ? ElementType.Script : name === "style" ? ElementType.Style : ElementType.Tag,
      name: name,
      attribs: attribs,
      children: []
    };

    var element = this._createDomElement(properties);

    this._addDomElement(element);

    this._tagStack.push(element);
  };

  DomHandler.prototype.ontext = function (data) {
    //the ignoreWhitespace is officially dropped, but for now,
    //it's an alias for normalizeWhitespace
    var normalize = this._options.normalizeWhitespace || this._options.ignoreWhitespace;
    var lastTag;

    if (!this._tagStack.length && this.dom.length && (lastTag = this.dom[this.dom.length - 1]).type === ElementType.Text) {
      if (normalize) {
        lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
      } else {
        lastTag.data += data;
      }
    } else {
      if (this._tagStack.length && (lastTag = this._tagStack[this._tagStack.length - 1]) && (lastTag = lastTag.children[lastTag.children.length - 1]) && lastTag.type === ElementType.Text) {
        if (normalize) {
          lastTag.data = (lastTag.data + data).replace(re_whitespace, " ");
        } else {
          lastTag.data += data;
        }
      } else {
        if (normalize) {
          data = data.replace(re_whitespace, " ");
        }

        var element = this._createDomElement({
          data: data,
          type: ElementType.Text
        });

        this._addDomElement(element);
      }
    }
  };

  DomHandler.prototype.oncomment = function (data) {
    var lastTag = this._tagStack[this._tagStack.length - 1];

    if (lastTag && lastTag.type === ElementType.Comment) {
      lastTag.data += data;
      return;
    }

    var properties = {
      data: data,
      type: ElementType.Comment
    };

    var element = this._createDomElement(properties);

    this._addDomElement(element);

    this._tagStack.push(element);
  };

  DomHandler.prototype.oncdatastart = function () {
    var properties = {
      children: [{
        data: "",
        type: ElementType.Text
      }],
      type: ElementType.CDATA
    };

    var element = this._createDomElement(properties);

    this._addDomElement(element);

    this._tagStack.push(element);
  };

  DomHandler.prototype.oncommentend = DomHandler.prototype.oncdataend = function () {
    this._tagStack.pop();
  };

  DomHandler.prototype.onprocessinginstruction = function (name, data) {
    var element = this._createDomElement({
      name: name,
      data: data,
      type: ElementType.Directive
    });

    this._addDomElement(element);
  };

  module.exports = DomHandler;

  var domhandler = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  //Types of elements found in the DOM
  var domelementtype = {
    Text: "text",
    //Text
    Directive: "directive",
    //<? ... ?>
    Comment: "comment",
    //<!-- ... -->
    Script: "script",
    //<script> tags
    Style: "style",
    //<style> tags
    Tag: "tag",
    //Any tag
    CDATA: "cdata",
    //<![CDATA[ ... ]]>
    Doctype: "doctype",
    isTag: function isTag(elem) {
      return elem.type === "tag" || elem.type === "script" || elem.type === "style";
    }
  };

  var lib = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.isTag = void 0;
  /**
   * Tests whether an element is a tag or not.
   *
   * @param elem Element to test
   */

  function isTag(elem) {
    return elem.type === "tag"
    /* Tag */
    || elem.type === "script"
    /* Script */
    || elem.type === "style"
    /* Style */
    ;
  }

  exports.isTag = isTag; // Exports for backwards compatibility

  /** Type for Text */

  exports.Text = "text"
  /* Text */
  ;
  /** Type for <? ... ?> */

  exports.Directive = "directive"
  /* Directive */
  ;
  /** Type for <!-- ... --> */

  exports.Comment = "comment"
  /* Comment */
  ;
  /** Type for <script> tags */

  exports.Script = "script"
  /* Script */
  ;
  /** Type for <style> tags */

  exports.Style = "style"
  /* Style */
  ;
  /** Type for Any tag */

  exports.Tag = "tag"
  /* Tag */
  ;
  /** Type for <![CDATA[ ... ]]> */

  exports.CDATA = "cdata"
  /* CDATA */
  ;
  /** Type for <!doctype ...> */

  exports.Doctype = "doctype"
  /* Doctype */
  ;
  });

  var Aacute$2 = "Á";
  var aacute$2 = "á";
  var Abreve$1 = "Ă";
  var abreve$1 = "ă";
  var ac$1 = "∾";
  var acd$1 = "∿";
  var acE$1 = "∾̳";
  var Acirc$2 = "Â";
  var acirc$2 = "â";
  var acute$2 = "´";
  var Acy$1 = "А";
  var acy$1 = "а";
  var AElig$2 = "Æ";
  var aelig$2 = "æ";
  var af$1 = "⁡";
  var Afr$1 = "𝔄";
  var afr$1 = "𝔞";
  var Agrave$2 = "À";
  var agrave$2 = "à";
  var alefsym$1 = "ℵ";
  var aleph$1 = "ℵ";
  var Alpha$1 = "Α";
  var alpha$1 = "α";
  var Amacr$1 = "Ā";
  var amacr$1 = "ā";
  var amalg$1 = "⨿";
  var amp$3 = "&";
  var AMP$2 = "&";
  var andand$1 = "⩕";
  var And$1 = "⩓";
  var and$1 = "∧";
  var andd$1 = "⩜";
  var andslope$1 = "⩘";
  var andv$1 = "⩚";
  var ang$1 = "∠";
  var ange$1 = "⦤";
  var angle$1 = "∠";
  var angmsdaa$1 = "⦨";
  var angmsdab$1 = "⦩";
  var angmsdac$1 = "⦪";
  var angmsdad$1 = "⦫";
  var angmsdae$1 = "⦬";
  var angmsdaf$1 = "⦭";
  var angmsdag$1 = "⦮";
  var angmsdah$1 = "⦯";
  var angmsd$1 = "∡";
  var angrt$1 = "∟";
  var angrtvb$1 = "⊾";
  var angrtvbd$1 = "⦝";
  var angsph$1 = "∢";
  var angst$1 = "Å";
  var angzarr$1 = "⍼";
  var Aogon$1 = "Ą";
  var aogon$1 = "ą";
  var Aopf$1 = "𝔸";
  var aopf$1 = "𝕒";
  var apacir$1 = "⩯";
  var ap$1 = "≈";
  var apE$1 = "⩰";
  var ape$1 = "≊";
  var apid$1 = "≋";
  var apos$2 = "'";
  var ApplyFunction$1 = "⁡";
  var approx$1 = "≈";
  var approxeq$1 = "≊";
  var Aring$2 = "Å";
  var aring$2 = "å";
  var Ascr$1 = "𝒜";
  var ascr$1 = "𝒶";
  var Assign$1 = "≔";
  var ast$1 = "*";
  var asymp$1 = "≈";
  var asympeq$1 = "≍";
  var Atilde$2 = "Ã";
  var atilde$2 = "ã";
  var Auml$2 = "Ä";
  var auml$2 = "ä";
  var awconint$1 = "∳";
  var awint$1 = "⨑";
  var backcong$1 = "≌";
  var backepsilon$1 = "϶";
  var backprime$1 = "‵";
  var backsim$1 = "∽";
  var backsimeq$1 = "⋍";
  var Backslash$1 = "∖";
  var Barv$1 = "⫧";
  var barvee$1 = "⊽";
  var barwed$1 = "⌅";
  var Barwed$1 = "⌆";
  var barwedge$1 = "⌅";
  var bbrk$1 = "⎵";
  var bbrktbrk$1 = "⎶";
  var bcong$1 = "≌";
  var Bcy$1 = "Б";
  var bcy$1 = "б";
  var bdquo$1 = "„";
  var becaus$1 = "∵";
  var because$1 = "∵";
  var Because$1 = "∵";
  var bemptyv$1 = "⦰";
  var bepsi$1 = "϶";
  var bernou$1 = "ℬ";
  var Bernoullis$1 = "ℬ";
  var Beta$1 = "Β";
  var beta$1 = "β";
  var beth$1 = "ℶ";
  var between$1 = "≬";
  var Bfr$1 = "𝔅";
  var bfr$1 = "𝔟";
  var bigcap$1 = "⋂";
  var bigcirc$1 = "◯";
  var bigcup$1 = "⋃";
  var bigodot$1 = "⨀";
  var bigoplus$1 = "⨁";
  var bigotimes$1 = "⨂";
  var bigsqcup$1 = "⨆";
  var bigstar$1 = "★";
  var bigtriangledown$1 = "▽";
  var bigtriangleup$1 = "△";
  var biguplus$1 = "⨄";
  var bigvee$1 = "⋁";
  var bigwedge$1 = "⋀";
  var bkarow$1 = "⤍";
  var blacklozenge$1 = "⧫";
  var blacksquare$1 = "▪";
  var blacktriangle$1 = "▴";
  var blacktriangledown$1 = "▾";
  var blacktriangleleft$1 = "◂";
  var blacktriangleright$1 = "▸";
  var blank$1 = "␣";
  var blk12$1 = "▒";
  var blk14$1 = "░";
  var blk34$1 = "▓";
  var block$1 = "█";
  var bne$1 = "=⃥";
  var bnequiv$1 = "≡⃥";
  var bNot$1 = "⫭";
  var bnot$1 = "⌐";
  var Bopf$1 = "𝔹";
  var bopf$1 = "𝕓";
  var bot$1 = "⊥";
  var bottom$1 = "⊥";
  var bowtie$1 = "⋈";
  var boxbox$1 = "⧉";
  var boxdl$1 = "┐";
  var boxdL$1 = "╕";
  var boxDl$1 = "╖";
  var boxDL$1 = "╗";
  var boxdr$1 = "┌";
  var boxdR$1 = "╒";
  var boxDr$1 = "╓";
  var boxDR$1 = "╔";
  var boxh$1 = "─";
  var boxH$1 = "═";
  var boxhd$1 = "┬";
  var boxHd$1 = "╤";
  var boxhD$1 = "╥";
  var boxHD$1 = "╦";
  var boxhu$1 = "┴";
  var boxHu$1 = "╧";
  var boxhU$1 = "╨";
  var boxHU$1 = "╩";
  var boxminus$1 = "⊟";
  var boxplus$1 = "⊞";
  var boxtimes$1 = "⊠";
  var boxul$1 = "┘";
  var boxuL$1 = "╛";
  var boxUl$1 = "╜";
  var boxUL$1 = "╝";
  var boxur$1 = "└";
  var boxuR$1 = "╘";
  var boxUr$1 = "╙";
  var boxUR$1 = "╚";
  var boxv$1 = "│";
  var boxV$1 = "║";
  var boxvh$1 = "┼";
  var boxvH$1 = "╪";
  var boxVh$1 = "╫";
  var boxVH$1 = "╬";
  var boxvl$1 = "┤";
  var boxvL$1 = "╡";
  var boxVl$1 = "╢";
  var boxVL$1 = "╣";
  var boxvr$1 = "├";
  var boxvR$1 = "╞";
  var boxVr$1 = "╟";
  var boxVR$1 = "╠";
  var bprime$1 = "‵";
  var breve$1 = "˘";
  var Breve$1 = "˘";
  var brvbar$2 = "¦";
  var bscr$1 = "𝒷";
  var Bscr$1 = "ℬ";
  var bsemi$1 = "⁏";
  var bsim$1 = "∽";
  var bsime$1 = "⋍";
  var bsolb$1 = "⧅";
  var bsol$1 = "\\";
  var bsolhsub$1 = "⟈";
  var bull$1 = "•";
  var bullet$1 = "•";
  var bump$1 = "≎";
  var bumpE$1 = "⪮";
  var bumpe$1 = "≏";
  var Bumpeq$1 = "≎";
  var bumpeq$1 = "≏";
  var Cacute$1 = "Ć";
  var cacute$1 = "ć";
  var capand$1 = "⩄";
  var capbrcup$1 = "⩉";
  var capcap$1 = "⩋";
  var cap$1 = "∩";
  var Cap$1 = "⋒";
  var capcup$1 = "⩇";
  var capdot$1 = "⩀";
  var CapitalDifferentialD$1 = "ⅅ";
  var caps$1 = "∩︀";
  var caret$1 = "⁁";
  var caron$1 = "ˇ";
  var Cayleys$1 = "ℭ";
  var ccaps$1 = "⩍";
  var Ccaron$1 = "Č";
  var ccaron$1 = "č";
  var Ccedil$2 = "Ç";
  var ccedil$2 = "ç";
  var Ccirc$1 = "Ĉ";
  var ccirc$1 = "ĉ";
  var Cconint$1 = "∰";
  var ccups$1 = "⩌";
  var ccupssm$1 = "⩐";
  var Cdot$1 = "Ċ";
  var cdot$1 = "ċ";
  var cedil$2 = "¸";
  var Cedilla$1 = "¸";
  var cemptyv$1 = "⦲";
  var cent$2 = "¢";
  var centerdot$1 = "·";
  var CenterDot$1 = "·";
  var cfr$1 = "𝔠";
  var Cfr$1 = "ℭ";
  var CHcy$1 = "Ч";
  var chcy$1 = "ч";
  var check$1 = "✓";
  var checkmark$1 = "✓";
  var Chi$1 = "Χ";
  var chi$1 = "χ";
  var circ$1 = "ˆ";
  var circeq$1 = "≗";
  var circlearrowleft$1 = "↺";
  var circlearrowright$1 = "↻";
  var circledast$1 = "⊛";
  var circledcirc$1 = "⊚";
  var circleddash$1 = "⊝";
  var CircleDot$1 = "⊙";
  var circledR$1 = "®";
  var circledS$1 = "Ⓢ";
  var CircleMinus$1 = "⊖";
  var CirclePlus$1 = "⊕";
  var CircleTimes$1 = "⊗";
  var cir$1 = "○";
  var cirE$1 = "⧃";
  var cire$1 = "≗";
  var cirfnint$1 = "⨐";
  var cirmid$1 = "⫯";
  var cirscir$1 = "⧂";
  var ClockwiseContourIntegral$1 = "∲";
  var CloseCurlyDoubleQuote$1 = "”";
  var CloseCurlyQuote$1 = "’";
  var clubs$1 = "♣";
  var clubsuit$1 = "♣";
  var colon$1 = ":";
  var Colon$1 = "∷";
  var Colone$1 = "⩴";
  var colone$1 = "≔";
  var coloneq$1 = "≔";
  var comma$1 = ",";
  var commat$1 = "@";
  var comp$1 = "∁";
  var compfn$1 = "∘";
  var complement$1 = "∁";
  var complexes$1 = "ℂ";
  var cong$1 = "≅";
  var congdot$1 = "⩭";
  var Congruent$1 = "≡";
  var conint$1 = "∮";
  var Conint$1 = "∯";
  var ContourIntegral$1 = "∮";
  var copf$1 = "𝕔";
  var Copf$1 = "ℂ";
  var coprod$1 = "∐";
  var Coproduct$1 = "∐";
  var copy$2 = "©";
  var COPY$2 = "©";
  var copysr$1 = "℗";
  var CounterClockwiseContourIntegral$1 = "∳";
  var crarr$1 = "↵";
  var cross$1 = "✗";
  var Cross$1 = "⨯";
  var Cscr$1 = "𝒞";
  var cscr$1 = "𝒸";
  var csub$1 = "⫏";
  var csube$1 = "⫑";
  var csup$1 = "⫐";
  var csupe$1 = "⫒";
  var ctdot$1 = "⋯";
  var cudarrl$1 = "⤸";
  var cudarrr$1 = "⤵";
  var cuepr$1 = "⋞";
  var cuesc$1 = "⋟";
  var cularr$1 = "↶";
  var cularrp$1 = "⤽";
  var cupbrcap$1 = "⩈";
  var cupcap$1 = "⩆";
  var CupCap$1 = "≍";
  var cup$1 = "∪";
  var Cup$1 = "⋓";
  var cupcup$1 = "⩊";
  var cupdot$1 = "⊍";
  var cupor$1 = "⩅";
  var cups$1 = "∪︀";
  var curarr$1 = "↷";
  var curarrm$1 = "⤼";
  var curlyeqprec$1 = "⋞";
  var curlyeqsucc$1 = "⋟";
  var curlyvee$1 = "⋎";
  var curlywedge$1 = "⋏";
  var curren$2 = "¤";
  var curvearrowleft$1 = "↶";
  var curvearrowright$1 = "↷";
  var cuvee$1 = "⋎";
  var cuwed$1 = "⋏";
  var cwconint$1 = "∲";
  var cwint$1 = "∱";
  var cylcty$1 = "⌭";
  var dagger$1 = "†";
  var Dagger$1 = "‡";
  var daleth$1 = "ℸ";
  var darr$1 = "↓";
  var Darr$1 = "↡";
  var dArr$1 = "⇓";
  var dash$1 = "‐";
  var Dashv$1 = "⫤";
  var dashv$1 = "⊣";
  var dbkarow$1 = "⤏";
  var dblac$1 = "˝";
  var Dcaron$1 = "Ď";
  var dcaron$1 = "ď";
  var Dcy$1 = "Д";
  var dcy$1 = "д";
  var ddagger$1 = "‡";
  var ddarr$1 = "⇊";
  var DD$1 = "ⅅ";
  var dd$1 = "ⅆ";
  var DDotrahd$1 = "⤑";
  var ddotseq$1 = "⩷";
  var deg$2 = "°";
  var Del$1 = "∇";
  var Delta$1 = "Δ";
  var delta$1 = "δ";
  var demptyv$1 = "⦱";
  var dfisht$1 = "⥿";
  var Dfr$1 = "𝔇";
  var dfr$1 = "𝔡";
  var dHar$1 = "⥥";
  var dharl$1 = "⇃";
  var dharr$1 = "⇂";
  var DiacriticalAcute$1 = "´";
  var DiacriticalDot$1 = "˙";
  var DiacriticalDoubleAcute$1 = "˝";
  var DiacriticalGrave$1 = "`";
  var DiacriticalTilde$1 = "˜";
  var diam$1 = "⋄";
  var diamond$1 = "⋄";
  var Diamond$1 = "⋄";
  var diamondsuit$1 = "♦";
  var diams$1 = "♦";
  var die$1 = "¨";
  var DifferentialD$1 = "ⅆ";
  var digamma$1 = "ϝ";
  var disin$1 = "⋲";
  var div$1 = "÷";
  var divide$2 = "÷";
  var divideontimes$1 = "⋇";
  var divonx$1 = "⋇";
  var DJcy$1 = "Ђ";
  var djcy$1 = "ђ";
  var dlcorn$1 = "⌞";
  var dlcrop$1 = "⌍";
  var dollar$1 = "$";
  var Dopf$1 = "𝔻";
  var dopf$1 = "𝕕";
  var Dot$1 = "¨";
  var dot$1 = "˙";
  var DotDot$1 = "⃜";
  var doteq$1 = "≐";
  var doteqdot$1 = "≑";
  var DotEqual$1 = "≐";
  var dotminus$1 = "∸";
  var dotplus$1 = "∔";
  var dotsquare$1 = "⊡";
  var doublebarwedge$1 = "⌆";
  var DoubleContourIntegral$1 = "∯";
  var DoubleDot$1 = "¨";
  var DoubleDownArrow$1 = "⇓";
  var DoubleLeftArrow$1 = "⇐";
  var DoubleLeftRightArrow$1 = "⇔";
  var DoubleLeftTee$1 = "⫤";
  var DoubleLongLeftArrow$1 = "⟸";
  var DoubleLongLeftRightArrow$1 = "⟺";
  var DoubleLongRightArrow$1 = "⟹";
  var DoubleRightArrow$1 = "⇒";
  var DoubleRightTee$1 = "⊨";
  var DoubleUpArrow$1 = "⇑";
  var DoubleUpDownArrow$1 = "⇕";
  var DoubleVerticalBar$1 = "∥";
  var DownArrowBar$1 = "⤓";
  var downarrow$1 = "↓";
  var DownArrow$1 = "↓";
  var Downarrow$1 = "⇓";
  var DownArrowUpArrow$1 = "⇵";
  var DownBreve$1 = "̑";
  var downdownarrows$1 = "⇊";
  var downharpoonleft$1 = "⇃";
  var downharpoonright$1 = "⇂";
  var DownLeftRightVector$1 = "⥐";
  var DownLeftTeeVector$1 = "⥞";
  var DownLeftVectorBar$1 = "⥖";
  var DownLeftVector$1 = "↽";
  var DownRightTeeVector$1 = "⥟";
  var DownRightVectorBar$1 = "⥗";
  var DownRightVector$1 = "⇁";
  var DownTeeArrow$1 = "↧";
  var DownTee$1 = "⊤";
  var drbkarow$1 = "⤐";
  var drcorn$1 = "⌟";
  var drcrop$1 = "⌌";
  var Dscr$1 = "𝒟";
  var dscr$1 = "𝒹";
  var DScy$1 = "Ѕ";
  var dscy$1 = "ѕ";
  var dsol$1 = "⧶";
  var Dstrok$1 = "Đ";
  var dstrok$1 = "đ";
  var dtdot$1 = "⋱";
  var dtri$1 = "▿";
  var dtrif$1 = "▾";
  var duarr$1 = "⇵";
  var duhar$1 = "⥯";
  var dwangle$1 = "⦦";
  var DZcy$1 = "Џ";
  var dzcy$1 = "џ";
  var dzigrarr$1 = "⟿";
  var Eacute$2 = "É";
  var eacute$2 = "é";
  var easter$1 = "⩮";
  var Ecaron$1 = "Ě";
  var ecaron$1 = "ě";
  var Ecirc$2 = "Ê";
  var ecirc$2 = "ê";
  var ecir$1 = "≖";
  var ecolon$1 = "≕";
  var Ecy$1 = "Э";
  var ecy$1 = "э";
  var eDDot$1 = "⩷";
  var Edot$1 = "Ė";
  var edot$1 = "ė";
  var eDot$1 = "≑";
  var ee$1 = "ⅇ";
  var efDot$1 = "≒";
  var Efr$1 = "𝔈";
  var efr$1 = "𝔢";
  var eg$1 = "⪚";
  var Egrave$2 = "È";
  var egrave$2 = "è";
  var egs$1 = "⪖";
  var egsdot$1 = "⪘";
  var el$1 = "⪙";
  var Element$1 = "∈";
  var elinters$1 = "⏧";
  var ell$1 = "ℓ";
  var els$1 = "⪕";
  var elsdot$1 = "⪗";
  var Emacr$1 = "Ē";
  var emacr$1 = "ē";
  var empty$1 = "∅";
  var emptyset$1 = "∅";
  var EmptySmallSquare$1 = "◻";
  var emptyv$1 = "∅";
  var EmptyVerySmallSquare$1 = "▫";
  var emsp13$1 = " ";
  var emsp14$1 = " ";
  var emsp$1 = " ";
  var ENG$1 = "Ŋ";
  var eng$1 = "ŋ";
  var ensp$1 = " ";
  var Eogon$1 = "Ę";
  var eogon$1 = "ę";
  var Eopf$1 = "𝔼";
  var eopf$1 = "𝕖";
  var epar$1 = "⋕";
  var eparsl$1 = "⧣";
  var eplus$1 = "⩱";
  var epsi$1 = "ε";
  var Epsilon$1 = "Ε";
  var epsilon$1 = "ε";
  var epsiv$1 = "ϵ";
  var eqcirc$1 = "≖";
  var eqcolon$1 = "≕";
  var eqsim$1 = "≂";
  var eqslantgtr$1 = "⪖";
  var eqslantless$1 = "⪕";
  var Equal$1 = "⩵";
  var equals$1 = "=";
  var EqualTilde$1 = "≂";
  var equest$1 = "≟";
  var Equilibrium$1 = "⇌";
  var equiv$1 = "≡";
  var equivDD$1 = "⩸";
  var eqvparsl$1 = "⧥";
  var erarr$1 = "⥱";
  var erDot$1 = "≓";
  var escr$1 = "ℯ";
  var Escr$1 = "ℰ";
  var esdot$1 = "≐";
  var Esim$1 = "⩳";
  var esim$1 = "≂";
  var Eta$1 = "Η";
  var eta$1 = "η";
  var ETH$2 = "Ð";
  var eth$2 = "ð";
  var Euml$2 = "Ë";
  var euml$2 = "ë";
  var euro$1 = "€";
  var excl$1 = "!";
  var exist$1 = "∃";
  var Exists$1 = "∃";
  var expectation$1 = "ℰ";
  var exponentiale$1 = "ⅇ";
  var ExponentialE$1 = "ⅇ";
  var fallingdotseq$1 = "≒";
  var Fcy$1 = "Ф";
  var fcy$1 = "ф";
  var female$1 = "♀";
  var ffilig$1 = "ﬃ";
  var fflig$1 = "ﬀ";
  var ffllig$1 = "ﬄ";
  var Ffr$1 = "𝔉";
  var ffr$1 = "𝔣";
  var filig$1 = "ﬁ";
  var FilledSmallSquare$1 = "◼";
  var FilledVerySmallSquare$1 = "▪";
  var fjlig$1 = "fj";
  var flat$1 = "♭";
  var fllig$1 = "ﬂ";
  var fltns$1 = "▱";
  var fnof$1 = "ƒ";
  var Fopf$1 = "𝔽";
  var fopf$1 = "𝕗";
  var forall$1 = "∀";
  var ForAll$1 = "∀";
  var fork$1 = "⋔";
  var forkv$1 = "⫙";
  var Fouriertrf$1 = "ℱ";
  var fpartint$1 = "⨍";
  var frac12$2 = "½";
  var frac13$1 = "⅓";
  var frac14$2 = "¼";
  var frac15$1 = "⅕";
  var frac16$1 = "⅙";
  var frac18$1 = "⅛";
  var frac23$1 = "⅔";
  var frac25$1 = "⅖";
  var frac34$2 = "¾";
  var frac35$1 = "⅗";
  var frac38$1 = "⅜";
  var frac45$1 = "⅘";
  var frac56$1 = "⅚";
  var frac58$1 = "⅝";
  var frac78$1 = "⅞";
  var frasl$1 = "⁄";
  var frown$1 = "⌢";
  var fscr$1 = "𝒻";
  var Fscr$1 = "ℱ";
  var gacute$1 = "ǵ";
  var Gamma$1 = "Γ";
  var gamma$1 = "γ";
  var Gammad$1 = "Ϝ";
  var gammad$1 = "ϝ";
  var gap$1 = "⪆";
  var Gbreve$1 = "Ğ";
  var gbreve$1 = "ğ";
  var Gcedil$1 = "Ģ";
  var Gcirc$1 = "Ĝ";
  var gcirc$1 = "ĝ";
  var Gcy$1 = "Г";
  var gcy$1 = "г";
  var Gdot$1 = "Ġ";
  var gdot$1 = "ġ";
  var ge$1 = "≥";
  var gE$1 = "≧";
  var gEl$1 = "⪌";
  var gel$1 = "⋛";
  var geq$1 = "≥";
  var geqq$1 = "≧";
  var geqslant$1 = "⩾";
  var gescc$1 = "⪩";
  var ges$1 = "⩾";
  var gesdot$1 = "⪀";
  var gesdoto$1 = "⪂";
  var gesdotol$1 = "⪄";
  var gesl$1 = "⋛︀";
  var gesles$1 = "⪔";
  var Gfr$1 = "𝔊";
  var gfr$1 = "𝔤";
  var gg$1 = "≫";
  var Gg$1 = "⋙";
  var ggg$1 = "⋙";
  var gimel$1 = "ℷ";
  var GJcy$1 = "Ѓ";
  var gjcy$1 = "ѓ";
  var gla$1 = "⪥";
  var gl$1 = "≷";
  var glE$1 = "⪒";
  var glj$1 = "⪤";
  var gnap$1 = "⪊";
  var gnapprox$1 = "⪊";
  var gne$1 = "⪈";
  var gnE$1 = "≩";
  var gneq$1 = "⪈";
  var gneqq$1 = "≩";
  var gnsim$1 = "⋧";
  var Gopf$1 = "𝔾";
  var gopf$1 = "𝕘";
  var grave$1 = "`";
  var GreaterEqual$1 = "≥";
  var GreaterEqualLess$1 = "⋛";
  var GreaterFullEqual$1 = "≧";
  var GreaterGreater$1 = "⪢";
  var GreaterLess$1 = "≷";
  var GreaterSlantEqual$1 = "⩾";
  var GreaterTilde$1 = "≳";
  var Gscr$1 = "𝒢";
  var gscr$1 = "ℊ";
  var gsim$1 = "≳";
  var gsime$1 = "⪎";
  var gsiml$1 = "⪐";
  var gtcc$1 = "⪧";
  var gtcir$1 = "⩺";
  var gt$3 = ">";
  var GT$2 = ">";
  var Gt$1 = "≫";
  var gtdot$1 = "⋗";
  var gtlPar$1 = "⦕";
  var gtquest$1 = "⩼";
  var gtrapprox$1 = "⪆";
  var gtrarr$1 = "⥸";
  var gtrdot$1 = "⋗";
  var gtreqless$1 = "⋛";
  var gtreqqless$1 = "⪌";
  var gtrless$1 = "≷";
  var gtrsim$1 = "≳";
  var gvertneqq$1 = "≩︀";
  var gvnE$1 = "≩︀";
  var Hacek$1 = "ˇ";
  var hairsp$1 = " ";
  var half$1 = "½";
  var hamilt$1 = "ℋ";
  var HARDcy$1 = "Ъ";
  var hardcy$1 = "ъ";
  var harrcir$1 = "⥈";
  var harr$1 = "↔";
  var hArr$1 = "⇔";
  var harrw$1 = "↭";
  var Hat$1 = "^";
  var hbar$1 = "ℏ";
  var Hcirc$1 = "Ĥ";
  var hcirc$1 = "ĥ";
  var hearts$1 = "♥";
  var heartsuit$1 = "♥";
  var hellip$1 = "…";
  var hercon$1 = "⊹";
  var hfr$1 = "𝔥";
  var Hfr$1 = "ℌ";
  var HilbertSpace$1 = "ℋ";
  var hksearow$1 = "⤥";
  var hkswarow$1 = "⤦";
  var hoarr$1 = "⇿";
  var homtht$1 = "∻";
  var hookleftarrow$1 = "↩";
  var hookrightarrow$1 = "↪";
  var hopf$1 = "𝕙";
  var Hopf$1 = "ℍ";
  var horbar$1 = "―";
  var HorizontalLine$1 = "─";
  var hscr$1 = "𝒽";
  var Hscr$1 = "ℋ";
  var hslash$1 = "ℏ";
  var Hstrok$1 = "Ħ";
  var hstrok$1 = "ħ";
  var HumpDownHump$1 = "≎";
  var HumpEqual$1 = "≏";
  var hybull$1 = "⁃";
  var hyphen$1 = "‐";
  var Iacute$2 = "Í";
  var iacute$2 = "í";
  var ic$1 = "⁣";
  var Icirc$2 = "Î";
  var icirc$2 = "î";
  var Icy$1 = "И";
  var icy$1 = "и";
  var Idot$1 = "İ";
  var IEcy$1 = "Е";
  var iecy$1 = "е";
  var iexcl$2 = "¡";
  var iff$1 = "⇔";
  var ifr$1 = "𝔦";
  var Ifr$1 = "ℑ";
  var Igrave$2 = "Ì";
  var igrave$2 = "ì";
  var ii$1 = "ⅈ";
  var iiiint$1 = "⨌";
  var iiint$1 = "∭";
  var iinfin$1 = "⧜";
  var iiota$1 = "℩";
  var IJlig$1 = "Ĳ";
  var ijlig$1 = "ĳ";
  var Imacr$1 = "Ī";
  var imacr$1 = "ī";
  var image$1 = "ℑ";
  var ImaginaryI$1 = "ⅈ";
  var imagline$1 = "ℐ";
  var imagpart$1 = "ℑ";
  var imath$1 = "ı";
  var Im$1 = "ℑ";
  var imof$1 = "⊷";
  var imped$1 = "Ƶ";
  var Implies$1 = "⇒";
  var incare$1 = "℅";
  var infin$1 = "∞";
  var infintie$1 = "⧝";
  var inodot$1 = "ı";
  var intcal$1 = "⊺";
  var int$1 = "∫";
  var Int$1 = "∬";
  var integers$1 = "ℤ";
  var Integral$1 = "∫";
  var intercal$1 = "⊺";
  var Intersection$1 = "⋂";
  var intlarhk$1 = "⨗";
  var intprod$1 = "⨼";
  var InvisibleComma$1 = "⁣";
  var InvisibleTimes$1 = "⁢";
  var IOcy$1 = "Ё";
  var iocy$1 = "ё";
  var Iogon$1 = "Į";
  var iogon$1 = "į";
  var Iopf$1 = "𝕀";
  var iopf$1 = "𝕚";
  var Iota$1 = "Ι";
  var iota$1 = "ι";
  var iprod$1 = "⨼";
  var iquest$2 = "¿";
  var iscr$1 = "𝒾";
  var Iscr$1 = "ℐ";
  var isin$1 = "∈";
  var isindot$1 = "⋵";
  var isinE$1 = "⋹";
  var isins$1 = "⋴";
  var isinsv$1 = "⋳";
  var isinv$1 = "∈";
  var it$1 = "⁢";
  var Itilde$1 = "Ĩ";
  var itilde$1 = "ĩ";
  var Iukcy$1 = "І";
  var iukcy$1 = "і";
  var Iuml$2 = "Ï";
  var iuml$2 = "ï";
  var Jcirc$1 = "Ĵ";
  var jcirc$1 = "ĵ";
  var Jcy$1 = "Й";
  var jcy$1 = "й";
  var Jfr$1 = "𝔍";
  var jfr$1 = "𝔧";
  var jmath$1 = "ȷ";
  var Jopf$1 = "𝕁";
  var jopf$1 = "𝕛";
  var Jscr$1 = "𝒥";
  var jscr$1 = "𝒿";
  var Jsercy$1 = "Ј";
  var jsercy$1 = "ј";
  var Jukcy$1 = "Є";
  var jukcy$1 = "є";
  var Kappa$1 = "Κ";
  var kappa$1 = "κ";
  var kappav$1 = "ϰ";
  var Kcedil$1 = "Ķ";
  var kcedil$1 = "ķ";
  var Kcy$1 = "К";
  var kcy$1 = "к";
  var Kfr$1 = "𝔎";
  var kfr$1 = "𝔨";
  var kgreen$1 = "ĸ";
  var KHcy$1 = "Х";
  var khcy$1 = "х";
  var KJcy$1 = "Ќ";
  var kjcy$1 = "ќ";
  var Kopf$1 = "𝕂";
  var kopf$1 = "𝕜";
  var Kscr$1 = "𝒦";
  var kscr$1 = "𝓀";
  var lAarr$1 = "⇚";
  var Lacute$1 = "Ĺ";
  var lacute$1 = "ĺ";
  var laemptyv$1 = "⦴";
  var lagran$1 = "ℒ";
  var Lambda$1 = "Λ";
  var lambda$1 = "λ";
  var lang$1 = "⟨";
  var Lang$1 = "⟪";
  var langd$1 = "⦑";
  var langle$1 = "⟨";
  var lap$1 = "⪅";
  var Laplacetrf$1 = "ℒ";
  var laquo$2 = "«";
  var larrb$1 = "⇤";
  var larrbfs$1 = "⤟";
  var larr$1 = "←";
  var Larr$1 = "↞";
  var lArr$1 = "⇐";
  var larrfs$1 = "⤝";
  var larrhk$1 = "↩";
  var larrlp$1 = "↫";
  var larrpl$1 = "⤹";
  var larrsim$1 = "⥳";
  var larrtl$1 = "↢";
  var latail$1 = "⤙";
  var lAtail$1 = "⤛";
  var lat$1 = "⪫";
  var late$1 = "⪭";
  var lates$1 = "⪭︀";
  var lbarr$1 = "⤌";
  var lBarr$1 = "⤎";
  var lbbrk$1 = "❲";
  var lbrace$1 = "{";
  var lbrack$1 = "[";
  var lbrke$1 = "⦋";
  var lbrksld$1 = "⦏";
  var lbrkslu$1 = "⦍";
  var Lcaron$1 = "Ľ";
  var lcaron$1 = "ľ";
  var Lcedil$1 = "Ļ";
  var lcedil$1 = "ļ";
  var lceil$1 = "⌈";
  var lcub$1 = "{";
  var Lcy$1 = "Л";
  var lcy$1 = "л";
  var ldca$1 = "⤶";
  var ldquo$1 = "“";
  var ldquor$1 = "„";
  var ldrdhar$1 = "⥧";
  var ldrushar$1 = "⥋";
  var ldsh$1 = "↲";
  var le$1 = "≤";
  var lE$1 = "≦";
  var LeftAngleBracket$1 = "⟨";
  var LeftArrowBar$1 = "⇤";
  var leftarrow$1 = "←";
  var LeftArrow$1 = "←";
  var Leftarrow$1 = "⇐";
  var LeftArrowRightArrow$1 = "⇆";
  var leftarrowtail$1 = "↢";
  var LeftCeiling$1 = "⌈";
  var LeftDoubleBracket$1 = "⟦";
  var LeftDownTeeVector$1 = "⥡";
  var LeftDownVectorBar$1 = "⥙";
  var LeftDownVector$1 = "⇃";
  var LeftFloor$1 = "⌊";
  var leftharpoondown$1 = "↽";
  var leftharpoonup$1 = "↼";
  var leftleftarrows$1 = "⇇";
  var leftrightarrow$1 = "↔";
  var LeftRightArrow$1 = "↔";
  var Leftrightarrow$1 = "⇔";
  var leftrightarrows$1 = "⇆";
  var leftrightharpoons$1 = "⇋";
  var leftrightsquigarrow$1 = "↭";
  var LeftRightVector$1 = "⥎";
  var LeftTeeArrow$1 = "↤";
  var LeftTee$1 = "⊣";
  var LeftTeeVector$1 = "⥚";
  var leftthreetimes$1 = "⋋";
  var LeftTriangleBar$1 = "⧏";
  var LeftTriangle$1 = "⊲";
  var LeftTriangleEqual$1 = "⊴";
  var LeftUpDownVector$1 = "⥑";
  var LeftUpTeeVector$1 = "⥠";
  var LeftUpVectorBar$1 = "⥘";
  var LeftUpVector$1 = "↿";
  var LeftVectorBar$1 = "⥒";
  var LeftVector$1 = "↼";
  var lEg$1 = "⪋";
  var leg$1 = "⋚";
  var leq$1 = "≤";
  var leqq$1 = "≦";
  var leqslant$1 = "⩽";
  var lescc$1 = "⪨";
  var les$1 = "⩽";
  var lesdot$1 = "⩿";
  var lesdoto$1 = "⪁";
  var lesdotor$1 = "⪃";
  var lesg$1 = "⋚︀";
  var lesges$1 = "⪓";
  var lessapprox$1 = "⪅";
  var lessdot$1 = "⋖";
  var lesseqgtr$1 = "⋚";
  var lesseqqgtr$1 = "⪋";
  var LessEqualGreater$1 = "⋚";
  var LessFullEqual$1 = "≦";
  var LessGreater$1 = "≶";
  var lessgtr$1 = "≶";
  var LessLess$1 = "⪡";
  var lesssim$1 = "≲";
  var LessSlantEqual$1 = "⩽";
  var LessTilde$1 = "≲";
  var lfisht$1 = "⥼";
  var lfloor$1 = "⌊";
  var Lfr$1 = "𝔏";
  var lfr$1 = "𝔩";
  var lg$1 = "≶";
  var lgE$1 = "⪑";
  var lHar$1 = "⥢";
  var lhard$1 = "↽";
  var lharu$1 = "↼";
  var lharul$1 = "⥪";
  var lhblk$1 = "▄";
  var LJcy$1 = "Љ";
  var ljcy$1 = "љ";
  var llarr$1 = "⇇";
  var ll$1 = "≪";
  var Ll$1 = "⋘";
  var llcorner$1 = "⌞";
  var Lleftarrow$1 = "⇚";
  var llhard$1 = "⥫";
  var lltri$1 = "◺";
  var Lmidot$1 = "Ŀ";
  var lmidot$1 = "ŀ";
  var lmoustache$1 = "⎰";
  var lmoust$1 = "⎰";
  var lnap$1 = "⪉";
  var lnapprox$1 = "⪉";
  var lne$1 = "⪇";
  var lnE$1 = "≨";
  var lneq$1 = "⪇";
  var lneqq$1 = "≨";
  var lnsim$1 = "⋦";
  var loang$1 = "⟬";
  var loarr$1 = "⇽";
  var lobrk$1 = "⟦";
  var longleftarrow$1 = "⟵";
  var LongLeftArrow$1 = "⟵";
  var Longleftarrow$1 = "⟸";
  var longleftrightarrow$1 = "⟷";
  var LongLeftRightArrow$1 = "⟷";
  var Longleftrightarrow$1 = "⟺";
  var longmapsto$1 = "⟼";
  var longrightarrow$1 = "⟶";
  var LongRightArrow$1 = "⟶";
  var Longrightarrow$1 = "⟹";
  var looparrowleft$1 = "↫";
  var looparrowright$1 = "↬";
  var lopar$1 = "⦅";
  var Lopf$1 = "𝕃";
  var lopf$1 = "𝕝";
  var loplus$1 = "⨭";
  var lotimes$1 = "⨴";
  var lowast$1 = "∗";
  var lowbar$1 = "_";
  var LowerLeftArrow$1 = "↙";
  var LowerRightArrow$1 = "↘";
  var loz$1 = "◊";
  var lozenge$1 = "◊";
  var lozf$1 = "⧫";
  var lpar$1 = "(";
  var lparlt$1 = "⦓";
  var lrarr$1 = "⇆";
  var lrcorner$1 = "⌟";
  var lrhar$1 = "⇋";
  var lrhard$1 = "⥭";
  var lrm$1 = "‎";
  var lrtri$1 = "⊿";
  var lsaquo$1 = "‹";
  var lscr$1 = "𝓁";
  var Lscr$1 = "ℒ";
  var lsh$1 = "↰";
  var Lsh$1 = "↰";
  var lsim$1 = "≲";
  var lsime$1 = "⪍";
  var lsimg$1 = "⪏";
  var lsqb$1 = "[";
  var lsquo$1 = "‘";
  var lsquor$1 = "‚";
  var Lstrok$1 = "Ł";
  var lstrok$1 = "ł";
  var ltcc$1 = "⪦";
  var ltcir$1 = "⩹";
  var lt$3 = "<";
  var LT$2 = "<";
  var Lt$1 = "≪";
  var ltdot$1 = "⋖";
  var lthree$1 = "⋋";
  var ltimes$1 = "⋉";
  var ltlarr$1 = "⥶";
  var ltquest$1 = "⩻";
  var ltri$1 = "◃";
  var ltrie$1 = "⊴";
  var ltrif$1 = "◂";
  var ltrPar$1 = "⦖";
  var lurdshar$1 = "⥊";
  var luruhar$1 = "⥦";
  var lvertneqq$1 = "≨︀";
  var lvnE$1 = "≨︀";
  var macr$2 = "¯";
  var male$1 = "♂";
  var malt$1 = "✠";
  var maltese$1 = "✠";
  var map$1 = "↦";
  var mapsto$1 = "↦";
  var mapstodown$1 = "↧";
  var mapstoleft$1 = "↤";
  var mapstoup$1 = "↥";
  var marker$1 = "▮";
  var mcomma$1 = "⨩";
  var Mcy$1 = "М";
  var mcy$1 = "м";
  var mdash$1 = "—";
  var mDDot$1 = "∺";
  var measuredangle$1 = "∡";
  var MediumSpace$1 = " ";
  var Mellintrf$1 = "ℳ";
  var Mfr$1 = "𝔐";
  var mfr$1 = "𝔪";
  var mho$1 = "℧";
  var micro$2 = "µ";
  var midast$1 = "*";
  var midcir$1 = "⫰";
  var mid$1 = "∣";
  var middot$2 = "·";
  var minusb$1 = "⊟";
  var minus$1 = "−";
  var minusd$1 = "∸";
  var minusdu$1 = "⨪";
  var MinusPlus$1 = "∓";
  var mlcp$1 = "⫛";
  var mldr$1 = "…";
  var mnplus$1 = "∓";
  var models$1 = "⊧";
  var Mopf$1 = "𝕄";
  var mopf$1 = "𝕞";
  var mp$1 = "∓";
  var mscr$1 = "𝓂";
  var Mscr$1 = "ℳ";
  var mstpos$1 = "∾";
  var Mu$1 = "Μ";
  var mu$1 = "μ";
  var multimap$1 = "⊸";
  var mumap$1 = "⊸";
  var nabla$1 = "∇";
  var Nacute$1 = "Ń";
  var nacute$1 = "ń";
  var nang$1 = "∠⃒";
  var nap$1 = "≉";
  var napE$1 = "⩰̸";
  var napid$1 = "≋̸";
  var napos$1 = "ŉ";
  var napprox$1 = "≉";
  var natural$1 = "♮";
  var naturals$1 = "ℕ";
  var natur$1 = "♮";
  var nbsp$2 = " ";
  var nbump$1 = "≎̸";
  var nbumpe$1 = "≏̸";
  var ncap$1 = "⩃";
  var Ncaron$1 = "Ň";
  var ncaron$1 = "ň";
  var Ncedil$1 = "Ņ";
  var ncedil$1 = "ņ";
  var ncong$1 = "≇";
  var ncongdot$1 = "⩭̸";
  var ncup$1 = "⩂";
  var Ncy$1 = "Н";
  var ncy$1 = "н";
  var ndash$1 = "–";
  var nearhk$1 = "⤤";
  var nearr$1 = "↗";
  var neArr$1 = "⇗";
  var nearrow$1 = "↗";
  var ne$1 = "≠";
  var nedot$1 = "≐̸";
  var NegativeMediumSpace$1 = "​";
  var NegativeThickSpace$1 = "​";
  var NegativeThinSpace$1 = "​";
  var NegativeVeryThinSpace$1 = "​";
  var nequiv$1 = "≢";
  var nesear$1 = "⤨";
  var nesim$1 = "≂̸";
  var NestedGreaterGreater$1 = "≫";
  var NestedLessLess$1 = "≪";
  var NewLine$1 = "\n";
  var nexist$1 = "∄";
  var nexists$1 = "∄";
  var Nfr$1 = "𝔑";
  var nfr$1 = "𝔫";
  var ngE$1 = "≧̸";
  var nge$1 = "≱";
  var ngeq$1 = "≱";
  var ngeqq$1 = "≧̸";
  var ngeqslant$1 = "⩾̸";
  var nges$1 = "⩾̸";
  var nGg$1 = "⋙̸";
  var ngsim$1 = "≵";
  var nGt$1 = "≫⃒";
  var ngt$1 = "≯";
  var ngtr$1 = "≯";
  var nGtv$1 = "≫̸";
  var nharr$1 = "↮";
  var nhArr$1 = "⇎";
  var nhpar$1 = "⫲";
  var ni$1 = "∋";
  var nis$1 = "⋼";
  var nisd$1 = "⋺";
  var niv$1 = "∋";
  var NJcy$1 = "Њ";
  var njcy$1 = "њ";
  var nlarr$1 = "↚";
  var nlArr$1 = "⇍";
  var nldr$1 = "‥";
  var nlE$1 = "≦̸";
  var nle$1 = "≰";
  var nleftarrow$1 = "↚";
  var nLeftarrow$1 = "⇍";
  var nleftrightarrow$1 = "↮";
  var nLeftrightarrow$1 = "⇎";
  var nleq$1 = "≰";
  var nleqq$1 = "≦̸";
  var nleqslant$1 = "⩽̸";
  var nles$1 = "⩽̸";
  var nless$1 = "≮";
  var nLl$1 = "⋘̸";
  var nlsim$1 = "≴";
  var nLt$1 = "≪⃒";
  var nlt$1 = "≮";
  var nltri$1 = "⋪";
  var nltrie$1 = "⋬";
  var nLtv$1 = "≪̸";
  var nmid$1 = "∤";
  var NoBreak$1 = "⁠";
  var NonBreakingSpace$1 = " ";
  var nopf$1 = "𝕟";
  var Nopf$1 = "ℕ";
  var Not$1 = "⫬";
  var not$2 = "¬";
  var NotCongruent$1 = "≢";
  var NotCupCap$1 = "≭";
  var NotDoubleVerticalBar$1 = "∦";
  var NotElement$1 = "∉";
  var NotEqual$1 = "≠";
  var NotEqualTilde$1 = "≂̸";
  var NotExists$1 = "∄";
  var NotGreater$1 = "≯";
  var NotGreaterEqual$1 = "≱";
  var NotGreaterFullEqual$1 = "≧̸";
  var NotGreaterGreater$1 = "≫̸";
  var NotGreaterLess$1 = "≹";
  var NotGreaterSlantEqual$1 = "⩾̸";
  var NotGreaterTilde$1 = "≵";
  var NotHumpDownHump$1 = "≎̸";
  var NotHumpEqual$1 = "≏̸";
  var notin$1 = "∉";
  var notindot$1 = "⋵̸";
  var notinE$1 = "⋹̸";
  var notinva$1 = "∉";
  var notinvb$1 = "⋷";
  var notinvc$1 = "⋶";
  var NotLeftTriangleBar$1 = "⧏̸";
  var NotLeftTriangle$1 = "⋪";
  var NotLeftTriangleEqual$1 = "⋬";
  var NotLess$1 = "≮";
  var NotLessEqual$1 = "≰";
  var NotLessGreater$1 = "≸";
  var NotLessLess$1 = "≪̸";
  var NotLessSlantEqual$1 = "⩽̸";
  var NotLessTilde$1 = "≴";
  var NotNestedGreaterGreater$1 = "⪢̸";
  var NotNestedLessLess$1 = "⪡̸";
  var notni$1 = "∌";
  var notniva$1 = "∌";
  var notnivb$1 = "⋾";
  var notnivc$1 = "⋽";
  var NotPrecedes$1 = "⊀";
  var NotPrecedesEqual$1 = "⪯̸";
  var NotPrecedesSlantEqual$1 = "⋠";
  var NotReverseElement$1 = "∌";
  var NotRightTriangleBar$1 = "⧐̸";
  var NotRightTriangle$1 = "⋫";
  var NotRightTriangleEqual$1 = "⋭";
  var NotSquareSubset$1 = "⊏̸";
  var NotSquareSubsetEqual$1 = "⋢";
  var NotSquareSuperset$1 = "⊐̸";
  var NotSquareSupersetEqual$1 = "⋣";
  var NotSubset$1 = "⊂⃒";
  var NotSubsetEqual$1 = "⊈";
  var NotSucceeds$1 = "⊁";
  var NotSucceedsEqual$1 = "⪰̸";
  var NotSucceedsSlantEqual$1 = "⋡";
  var NotSucceedsTilde$1 = "≿̸";
  var NotSuperset$1 = "⊃⃒";
  var NotSupersetEqual$1 = "⊉";
  var NotTilde$1 = "≁";
  var NotTildeEqual$1 = "≄";
  var NotTildeFullEqual$1 = "≇";
  var NotTildeTilde$1 = "≉";
  var NotVerticalBar$1 = "∤";
  var nparallel$1 = "∦";
  var npar$1 = "∦";
  var nparsl$1 = "⫽⃥";
  var npart$1 = "∂̸";
  var npolint$1 = "⨔";
  var npr$1 = "⊀";
  var nprcue$1 = "⋠";
  var nprec$1 = "⊀";
  var npreceq$1 = "⪯̸";
  var npre$1 = "⪯̸";
  var nrarrc$1 = "⤳̸";
  var nrarr$1 = "↛";
  var nrArr$1 = "⇏";
  var nrarrw$1 = "↝̸";
  var nrightarrow$1 = "↛";
  var nRightarrow$1 = "⇏";
  var nrtri$1 = "⋫";
  var nrtrie$1 = "⋭";
  var nsc$1 = "⊁";
  var nsccue$1 = "⋡";
  var nsce$1 = "⪰̸";
  var Nscr$1 = "𝒩";
  var nscr$1 = "𝓃";
  var nshortmid$1 = "∤";
  var nshortparallel$1 = "∦";
  var nsim$1 = "≁";
  var nsime$1 = "≄";
  var nsimeq$1 = "≄";
  var nsmid$1 = "∤";
  var nspar$1 = "∦";
  var nsqsube$1 = "⋢";
  var nsqsupe$1 = "⋣";
  var nsub$1 = "⊄";
  var nsubE$1 = "⫅̸";
  var nsube$1 = "⊈";
  var nsubset$1 = "⊂⃒";
  var nsubseteq$1 = "⊈";
  var nsubseteqq$1 = "⫅̸";
  var nsucc$1 = "⊁";
  var nsucceq$1 = "⪰̸";
  var nsup$1 = "⊅";
  var nsupE$1 = "⫆̸";
  var nsupe$1 = "⊉";
  var nsupset$1 = "⊃⃒";
  var nsupseteq$1 = "⊉";
  var nsupseteqq$1 = "⫆̸";
  var ntgl$1 = "≹";
  var Ntilde$2 = "Ñ";
  var ntilde$2 = "ñ";
  var ntlg$1 = "≸";
  var ntriangleleft$1 = "⋪";
  var ntrianglelefteq$1 = "⋬";
  var ntriangleright$1 = "⋫";
  var ntrianglerighteq$1 = "⋭";
  var Nu$1 = "Ν";
  var nu$1 = "ν";
  var num$1 = "#";
  var numero$1 = "№";
  var numsp$1 = " ";
  var nvap$1 = "≍⃒";
  var nvdash$1 = "⊬";
  var nvDash$1 = "⊭";
  var nVdash$1 = "⊮";
  var nVDash$1 = "⊯";
  var nvge$1 = "≥⃒";
  var nvgt$1 = ">⃒";
  var nvHarr$1 = "⤄";
  var nvinfin$1 = "⧞";
  var nvlArr$1 = "⤂";
  var nvle$1 = "≤⃒";
  var nvlt$1 = "<⃒";
  var nvltrie$1 = "⊴⃒";
  var nvrArr$1 = "⤃";
  var nvrtrie$1 = "⊵⃒";
  var nvsim$1 = "∼⃒";
  var nwarhk$1 = "⤣";
  var nwarr$1 = "↖";
  var nwArr$1 = "⇖";
  var nwarrow$1 = "↖";
  var nwnear$1 = "⤧";
  var Oacute$2 = "Ó";
  var oacute$2 = "ó";
  var oast$1 = "⊛";
  var Ocirc$2 = "Ô";
  var ocirc$2 = "ô";
  var ocir$1 = "⊚";
  var Ocy$1 = "О";
  var ocy$1 = "о";
  var odash$1 = "⊝";
  var Odblac$1 = "Ő";
  var odblac$1 = "ő";
  var odiv$1 = "⨸";
  var odot$1 = "⊙";
  var odsold$1 = "⦼";
  var OElig$1 = "Œ";
  var oelig$1 = "œ";
  var ofcir$1 = "⦿";
  var Ofr$1 = "𝔒";
  var ofr$1 = "𝔬";
  var ogon$1 = "˛";
  var Ograve$2 = "Ò";
  var ograve$2 = "ò";
  var ogt$1 = "⧁";
  var ohbar$1 = "⦵";
  var ohm$1 = "Ω";
  var oint$1 = "∮";
  var olarr$1 = "↺";
  var olcir$1 = "⦾";
  var olcross$1 = "⦻";
  var oline$1 = "‾";
  var olt$1 = "⧀";
  var Omacr$1 = "Ō";
  var omacr$1 = "ō";
  var Omega$1 = "Ω";
  var omega$1 = "ω";
  var Omicron$1 = "Ο";
  var omicron$1 = "ο";
  var omid$1 = "⦶";
  var ominus$1 = "⊖";
  var Oopf$1 = "𝕆";
  var oopf$1 = "𝕠";
  var opar$1 = "⦷";
  var OpenCurlyDoubleQuote$1 = "“";
  var OpenCurlyQuote$1 = "‘";
  var operp$1 = "⦹";
  var oplus$1 = "⊕";
  var orarr$1 = "↻";
  var Or$1 = "⩔";
  var or$1 = "∨";
  var ord$1 = "⩝";
  var order$1 = "ℴ";
  var orderof$1 = "ℴ";
  var ordf$2 = "ª";
  var ordm$2 = "º";
  var origof$1 = "⊶";
  var oror$1 = "⩖";
  var orslope$1 = "⩗";
  var orv$1 = "⩛";
  var oS$1 = "Ⓢ";
  var Oscr$1 = "𝒪";
  var oscr$1 = "ℴ";
  var Oslash$2 = "Ø";
  var oslash$2 = "ø";
  var osol$1 = "⊘";
  var Otilde$2 = "Õ";
  var otilde$2 = "õ";
  var otimesas$1 = "⨶";
  var Otimes$1 = "⨷";
  var otimes$1 = "⊗";
  var Ouml$2 = "Ö";
  var ouml$2 = "ö";
  var ovbar$1 = "⌽";
  var OverBar$1 = "‾";
  var OverBrace$1 = "⏞";
  var OverBracket$1 = "⎴";
  var OverParenthesis$1 = "⏜";
  var para$2 = "¶";
  var parallel$1 = "∥";
  var par$1 = "∥";
  var parsim$1 = "⫳";
  var parsl$1 = "⫽";
  var part$1 = "∂";
  var PartialD$1 = "∂";
  var Pcy$1 = "П";
  var pcy$1 = "п";
  var percnt$1 = "%";
  var period$1 = ".";
  var permil$1 = "‰";
  var perp$1 = "⊥";
  var pertenk$1 = "‱";
  var Pfr$1 = "𝔓";
  var pfr$1 = "𝔭";
  var Phi$1 = "Φ";
  var phi$1 = "φ";
  var phiv$1 = "ϕ";
  var phmmat$1 = "ℳ";
  var phone$1 = "☎";
  var Pi$1 = "Π";
  var pi$1 = "π";
  var pitchfork$1 = "⋔";
  var piv$1 = "ϖ";
  var planck$1 = "ℏ";
  var planckh$1 = "ℎ";
  var plankv$1 = "ℏ";
  var plusacir$1 = "⨣";
  var plusb$1 = "⊞";
  var pluscir$1 = "⨢";
  var plus$1 = "+";
  var plusdo$1 = "∔";
  var plusdu$1 = "⨥";
  var pluse$1 = "⩲";
  var PlusMinus$1 = "±";
  var plusmn$2 = "±";
  var plussim$1 = "⨦";
  var plustwo$1 = "⨧";
  var pm$1 = "±";
  var Poincareplane$1 = "ℌ";
  var pointint$1 = "⨕";
  var popf$1 = "𝕡";
  var Popf$1 = "ℙ";
  var pound$2 = "£";
  var prap$1 = "⪷";
  var Pr$1 = "⪻";
  var pr$1 = "≺";
  var prcue$1 = "≼";
  var precapprox$1 = "⪷";
  var prec$1 = "≺";
  var preccurlyeq$1 = "≼";
  var Precedes$1 = "≺";
  var PrecedesEqual$1 = "⪯";
  var PrecedesSlantEqual$1 = "≼";
  var PrecedesTilde$1 = "≾";
  var preceq$1 = "⪯";
  var precnapprox$1 = "⪹";
  var precneqq$1 = "⪵";
  var precnsim$1 = "⋨";
  var pre$1 = "⪯";
  var prE$1 = "⪳";
  var precsim$1 = "≾";
  var prime$1 = "′";
  var Prime$1 = "″";
  var primes$1 = "ℙ";
  var prnap$1 = "⪹";
  var prnE$1 = "⪵";
  var prnsim$1 = "⋨";
  var prod$1 = "∏";
  var Product$1 = "∏";
  var profalar$1 = "⌮";
  var profline$1 = "⌒";
  var profsurf$1 = "⌓";
  var prop$1 = "∝";
  var Proportional$1 = "∝";
  var Proportion$1 = "∷";
  var propto$1 = "∝";
  var prsim$1 = "≾";
  var prurel$1 = "⊰";
  var Pscr$1 = "𝒫";
  var pscr$1 = "𝓅";
  var Psi$1 = "Ψ";
  var psi$1 = "ψ";
  var puncsp$1 = " ";
  var Qfr$1 = "𝔔";
  var qfr$1 = "𝔮";
  var qint$1 = "⨌";
  var qopf$1 = "𝕢";
  var Qopf$1 = "ℚ";
  var qprime$1 = "⁗";
  var Qscr$1 = "𝒬";
  var qscr$1 = "𝓆";
  var quaternions$1 = "ℍ";
  var quatint$1 = "⨖";
  var quest$1 = "?";
  var questeq$1 = "≟";
  var quot$3 = "\"";
  var QUOT$2 = "\"";
  var rAarr$1 = "⇛";
  var race$1 = "∽̱";
  var Racute$1 = "Ŕ";
  var racute$1 = "ŕ";
  var radic$1 = "√";
  var raemptyv$1 = "⦳";
  var rang$1 = "⟩";
  var Rang$1 = "⟫";
  var rangd$1 = "⦒";
  var range$1 = "⦥";
  var rangle$1 = "⟩";
  var raquo$2 = "»";
  var rarrap$1 = "⥵";
  var rarrb$1 = "⇥";
  var rarrbfs$1 = "⤠";
  var rarrc$1 = "⤳";
  var rarr$1 = "→";
  var Rarr$1 = "↠";
  var rArr$1 = "⇒";
  var rarrfs$1 = "⤞";
  var rarrhk$1 = "↪";
  var rarrlp$1 = "↬";
  var rarrpl$1 = "⥅";
  var rarrsim$1 = "⥴";
  var Rarrtl$1 = "⤖";
  var rarrtl$1 = "↣";
  var rarrw$1 = "↝";
  var ratail$1 = "⤚";
  var rAtail$1 = "⤜";
  var ratio$1 = "∶";
  var rationals$1 = "ℚ";
  var rbarr$1 = "⤍";
  var rBarr$1 = "⤏";
  var RBarr$1 = "⤐";
  var rbbrk$1 = "❳";
  var rbrace$1 = "}";
  var rbrack$1 = "]";
  var rbrke$1 = "⦌";
  var rbrksld$1 = "⦎";
  var rbrkslu$1 = "⦐";
  var Rcaron$1 = "Ř";
  var rcaron$1 = "ř";
  var Rcedil$1 = "Ŗ";
  var rcedil$1 = "ŗ";
  var rceil$1 = "⌉";
  var rcub$1 = "}";
  var Rcy$1 = "Р";
  var rcy$1 = "р";
  var rdca$1 = "⤷";
  var rdldhar$1 = "⥩";
  var rdquo$1 = "”";
  var rdquor$1 = "”";
  var rdsh$1 = "↳";
  var real$1 = "ℜ";
  var realine$1 = "ℛ";
  var realpart$1 = "ℜ";
  var reals$1 = "ℝ";
  var Re$1 = "ℜ";
  var rect$1 = "▭";
  var reg$2 = "®";
  var REG$2 = "®";
  var ReverseElement$1 = "∋";
  var ReverseEquilibrium$1 = "⇋";
  var ReverseUpEquilibrium$1 = "⥯";
  var rfisht$1 = "⥽";
  var rfloor$1 = "⌋";
  var rfr$1 = "𝔯";
  var Rfr$1 = "ℜ";
  var rHar$1 = "⥤";
  var rhard$1 = "⇁";
  var rharu$1 = "⇀";
  var rharul$1 = "⥬";
  var Rho$1 = "Ρ";
  var rho$1 = "ρ";
  var rhov$1 = "ϱ";
  var RightAngleBracket$1 = "⟩";
  var RightArrowBar$1 = "⇥";
  var rightarrow$1 = "→";
  var RightArrow$1 = "→";
  var Rightarrow$1 = "⇒";
  var RightArrowLeftArrow$1 = "⇄";
  var rightarrowtail$1 = "↣";
  var RightCeiling$1 = "⌉";
  var RightDoubleBracket$1 = "⟧";
  var RightDownTeeVector$1 = "⥝";
  var RightDownVectorBar$1 = "⥕";
  var RightDownVector$1 = "⇂";
  var RightFloor$1 = "⌋";
  var rightharpoondown$1 = "⇁";
  var rightharpoonup$1 = "⇀";
  var rightleftarrows$1 = "⇄";
  var rightleftharpoons$1 = "⇌";
  var rightrightarrows$1 = "⇉";
  var rightsquigarrow$1 = "↝";
  var RightTeeArrow$1 = "↦";
  var RightTee$1 = "⊢";
  var RightTeeVector$1 = "⥛";
  var rightthreetimes$1 = "⋌";
  var RightTriangleBar$1 = "⧐";
  var RightTriangle$1 = "⊳";
  var RightTriangleEqual$1 = "⊵";
  var RightUpDownVector$1 = "⥏";
  var RightUpTeeVector$1 = "⥜";
  var RightUpVectorBar$1 = "⥔";
  var RightUpVector$1 = "↾";
  var RightVectorBar$1 = "⥓";
  var RightVector$1 = "⇀";
  var ring$1 = "˚";
  var risingdotseq$1 = "≓";
  var rlarr$1 = "⇄";
  var rlhar$1 = "⇌";
  var rlm$1 = "‏";
  var rmoustache$1 = "⎱";
  var rmoust$1 = "⎱";
  var rnmid$1 = "⫮";
  var roang$1 = "⟭";
  var roarr$1 = "⇾";
  var robrk$1 = "⟧";
  var ropar$1 = "⦆";
  var ropf$1 = "𝕣";
  var Ropf$1 = "ℝ";
  var roplus$1 = "⨮";
  var rotimes$1 = "⨵";
  var RoundImplies$1 = "⥰";
  var rpar$1 = ")";
  var rpargt$1 = "⦔";
  var rppolint$1 = "⨒";
  var rrarr$1 = "⇉";
  var Rrightarrow$1 = "⇛";
  var rsaquo$1 = "›";
  var rscr$1 = "𝓇";
  var Rscr$1 = "ℛ";
  var rsh$1 = "↱";
  var Rsh$1 = "↱";
  var rsqb$1 = "]";
  var rsquo$1 = "’";
  var rsquor$1 = "’";
  var rthree$1 = "⋌";
  var rtimes$1 = "⋊";
  var rtri$1 = "▹";
  var rtrie$1 = "⊵";
  var rtrif$1 = "▸";
  var rtriltri$1 = "⧎";
  var RuleDelayed$1 = "⧴";
  var ruluhar$1 = "⥨";
  var rx$1 = "℞";
  var Sacute$1 = "Ś";
  var sacute$1 = "ś";
  var sbquo$1 = "‚";
  var scap$1 = "⪸";
  var Scaron$1 = "Š";
  var scaron$1 = "š";
  var Sc$1 = "⪼";
  var sc$1 = "≻";
  var sccue$1 = "≽";
  var sce$1 = "⪰";
  var scE$1 = "⪴";
  var Scedil$1 = "Ş";
  var scedil$1 = "ş";
  var Scirc$1 = "Ŝ";
  var scirc$1 = "ŝ";
  var scnap$1 = "⪺";
  var scnE$1 = "⪶";
  var scnsim$1 = "⋩";
  var scpolint$1 = "⨓";
  var scsim$1 = "≿";
  var Scy$1 = "С";
  var scy$1 = "с";
  var sdotb$1 = "⊡";
  var sdot$1 = "⋅";
  var sdote$1 = "⩦";
  var searhk$1 = "⤥";
  var searr$1 = "↘";
  var seArr$1 = "⇘";
  var searrow$1 = "↘";
  var sect$2 = "§";
  var semi$1 = ";";
  var seswar$1 = "⤩";
  var setminus$1 = "∖";
  var setmn$1 = "∖";
  var sext$1 = "✶";
  var Sfr$1 = "𝔖";
  var sfr$1 = "𝔰";
  var sfrown$1 = "⌢";
  var sharp$1 = "♯";
  var SHCHcy$1 = "Щ";
  var shchcy$1 = "щ";
  var SHcy$1 = "Ш";
  var shcy$1 = "ш";
  var ShortDownArrow$1 = "↓";
  var ShortLeftArrow$1 = "←";
  var shortmid$1 = "∣";
  var shortparallel$1 = "∥";
  var ShortRightArrow$1 = "→";
  var ShortUpArrow$1 = "↑";
  var shy$2 = "­";
  var Sigma$1 = "Σ";
  var sigma$1 = "σ";
  var sigmaf$1 = "ς";
  var sigmav$1 = "ς";
  var sim$1 = "∼";
  var simdot$1 = "⩪";
  var sime$1 = "≃";
  var simeq$1 = "≃";
  var simg$1 = "⪞";
  var simgE$1 = "⪠";
  var siml$1 = "⪝";
  var simlE$1 = "⪟";
  var simne$1 = "≆";
  var simplus$1 = "⨤";
  var simrarr$1 = "⥲";
  var slarr$1 = "←";
  var SmallCircle$1 = "∘";
  var smallsetminus$1 = "∖";
  var smashp$1 = "⨳";
  var smeparsl$1 = "⧤";
  var smid$1 = "∣";
  var smile$1 = "⌣";
  var smt$1 = "⪪";
  var smte$1 = "⪬";
  var smtes$1 = "⪬︀";
  var SOFTcy$1 = "Ь";
  var softcy$1 = "ь";
  var solbar$1 = "⌿";
  var solb$1 = "⧄";
  var sol$1 = "/";
  var Sopf$1 = "𝕊";
  var sopf$1 = "𝕤";
  var spades$1 = "♠";
  var spadesuit$1 = "♠";
  var spar$1 = "∥";
  var sqcap$1 = "⊓";
  var sqcaps$1 = "⊓︀";
  var sqcup$1 = "⊔";
  var sqcups$1 = "⊔︀";
  var Sqrt$1 = "√";
  var sqsub$1 = "⊏";
  var sqsube$1 = "⊑";
  var sqsubset$1 = "⊏";
  var sqsubseteq$1 = "⊑";
  var sqsup$1 = "⊐";
  var sqsupe$1 = "⊒";
  var sqsupset$1 = "⊐";
  var sqsupseteq$1 = "⊒";
  var square$1 = "□";
  var Square$1 = "□";
  var SquareIntersection$1 = "⊓";
  var SquareSubset$1 = "⊏";
  var SquareSubsetEqual$1 = "⊑";
  var SquareSuperset$1 = "⊐";
  var SquareSupersetEqual$1 = "⊒";
  var SquareUnion$1 = "⊔";
  var squarf$1 = "▪";
  var squ$1 = "□";
  var squf$1 = "▪";
  var srarr$1 = "→";
  var Sscr$1 = "𝒮";
  var sscr$1 = "𝓈";
  var ssetmn$1 = "∖";
  var ssmile$1 = "⌣";
  var sstarf$1 = "⋆";
  var Star$1 = "⋆";
  var star$1 = "☆";
  var starf$1 = "★";
  var straightepsilon$1 = "ϵ";
  var straightphi$1 = "ϕ";
  var strns$1 = "¯";
  var sub$1 = "⊂";
  var Sub$1 = "⋐";
  var subdot$1 = "⪽";
  var subE$1 = "⫅";
  var sube$1 = "⊆";
  var subedot$1 = "⫃";
  var submult$1 = "⫁";
  var subnE$1 = "⫋";
  var subne$1 = "⊊";
  var subplus$1 = "⪿";
  var subrarr$1 = "⥹";
  var subset$1 = "⊂";
  var Subset$1 = "⋐";
  var subseteq$1 = "⊆";
  var subseteqq$1 = "⫅";
  var SubsetEqual$1 = "⊆";
  var subsetneq$1 = "⊊";
  var subsetneqq$1 = "⫋";
  var subsim$1 = "⫇";
  var subsub$1 = "⫕";
  var subsup$1 = "⫓";
  var succapprox$1 = "⪸";
  var succ$1 = "≻";
  var succcurlyeq$1 = "≽";
  var Succeeds$1 = "≻";
  var SucceedsEqual$1 = "⪰";
  var SucceedsSlantEqual$1 = "≽";
  var SucceedsTilde$1 = "≿";
  var succeq$1 = "⪰";
  var succnapprox$1 = "⪺";
  var succneqq$1 = "⪶";
  var succnsim$1 = "⋩";
  var succsim$1 = "≿";
  var SuchThat$1 = "∋";
  var sum$1 = "∑";
  var Sum$1 = "∑";
  var sung$1 = "♪";
  var sup1$2 = "¹";
  var sup2$2 = "²";
  var sup3$2 = "³";
  var sup$1 = "⊃";
  var Sup$1 = "⋑";
  var supdot$1 = "⪾";
  var supdsub$1 = "⫘";
  var supE$1 = "⫆";
  var supe$1 = "⊇";
  var supedot$1 = "⫄";
  var Superset$1 = "⊃";
  var SupersetEqual$1 = "⊇";
  var suphsol$1 = "⟉";
  var suphsub$1 = "⫗";
  var suplarr$1 = "⥻";
  var supmult$1 = "⫂";
  var supnE$1 = "⫌";
  var supne$1 = "⊋";
  var supplus$1 = "⫀";
  var supset$1 = "⊃";
  var Supset$1 = "⋑";
  var supseteq$1 = "⊇";
  var supseteqq$1 = "⫆";
  var supsetneq$1 = "⊋";
  var supsetneqq$1 = "⫌";
  var supsim$1 = "⫈";
  var supsub$1 = "⫔";
  var supsup$1 = "⫖";
  var swarhk$1 = "⤦";
  var swarr$1 = "↙";
  var swArr$1 = "⇙";
  var swarrow$1 = "↙";
  var swnwar$1 = "⤪";
  var szlig$2 = "ß";
  var Tab$1 = "\t";
  var target$1 = "⌖";
  var Tau$1 = "Τ";
  var tau$1 = "τ";
  var tbrk$1 = "⎴";
  var Tcaron$1 = "Ť";
  var tcaron$1 = "ť";
  var Tcedil$1 = "Ţ";
  var tcedil$1 = "ţ";
  var Tcy$1 = "Т";
  var tcy$1 = "т";
  var tdot$1 = "⃛";
  var telrec$1 = "⌕";
  var Tfr$1 = "𝔗";
  var tfr$1 = "𝔱";
  var there4$1 = "∴";
  var therefore$1 = "∴";
  var Therefore$1 = "∴";
  var Theta$1 = "Θ";
  var theta$1 = "θ";
  var thetasym$1 = "ϑ";
  var thetav$1 = "ϑ";
  var thickapprox$1 = "≈";
  var thicksim$1 = "∼";
  var ThickSpace$1 = "  ";
  var ThinSpace$1 = " ";
  var thinsp$1 = " ";
  var thkap$1 = "≈";
  var thksim$1 = "∼";
  var THORN$2 = "Þ";
  var thorn$2 = "þ";
  var tilde$1 = "˜";
  var Tilde$1 = "∼";
  var TildeEqual$1 = "≃";
  var TildeFullEqual$1 = "≅";
  var TildeTilde$1 = "≈";
  var timesbar$1 = "⨱";
  var timesb$1 = "⊠";
  var times$2 = "×";
  var timesd$1 = "⨰";
  var tint$1 = "∭";
  var toea$1 = "⤨";
  var topbot$1 = "⌶";
  var topcir$1 = "⫱";
  var top$1 = "⊤";
  var Topf$1 = "𝕋";
  var topf$1 = "𝕥";
  var topfork$1 = "⫚";
  var tosa$1 = "⤩";
  var tprime$1 = "‴";
  var trade$1 = "™";
  var TRADE$1 = "™";
  var triangle$1 = "▵";
  var triangledown$1 = "▿";
  var triangleleft$1 = "◃";
  var trianglelefteq$1 = "⊴";
  var triangleq$1 = "≜";
  var triangleright$1 = "▹";
  var trianglerighteq$1 = "⊵";
  var tridot$1 = "◬";
  var trie$1 = "≜";
  var triminus$1 = "⨺";
  var TripleDot$1 = "⃛";
  var triplus$1 = "⨹";
  var trisb$1 = "⧍";
  var tritime$1 = "⨻";
  var trpezium$1 = "⏢";
  var Tscr$1 = "𝒯";
  var tscr$1 = "𝓉";
  var TScy$1 = "Ц";
  var tscy$1 = "ц";
  var TSHcy$1 = "Ћ";
  var tshcy$1 = "ћ";
  var Tstrok$1 = "Ŧ";
  var tstrok$1 = "ŧ";
  var twixt$1 = "≬";
  var twoheadleftarrow$1 = "↞";
  var twoheadrightarrow$1 = "↠";
  var Uacute$2 = "Ú";
  var uacute$2 = "ú";
  var uarr$1 = "↑";
  var Uarr$1 = "↟";
  var uArr$1 = "⇑";
  var Uarrocir$1 = "⥉";
  var Ubrcy$1 = "Ў";
  var ubrcy$1 = "ў";
  var Ubreve$1 = "Ŭ";
  var ubreve$1 = "ŭ";
  var Ucirc$2 = "Û";
  var ucirc$2 = "û";
  var Ucy$1 = "У";
  var ucy$1 = "у";
  var udarr$1 = "⇅";
  var Udblac$1 = "Ű";
  var udblac$1 = "ű";
  var udhar$1 = "⥮";
  var ufisht$1 = "⥾";
  var Ufr$1 = "𝔘";
  var ufr$1 = "𝔲";
  var Ugrave$2 = "Ù";
  var ugrave$2 = "ù";
  var uHar$1 = "⥣";
  var uharl$1 = "↿";
  var uharr$1 = "↾";
  var uhblk$1 = "▀";
  var ulcorn$1 = "⌜";
  var ulcorner$1 = "⌜";
  var ulcrop$1 = "⌏";
  var ultri$1 = "◸";
  var Umacr$1 = "Ū";
  var umacr$1 = "ū";
  var uml$2 = "¨";
  var UnderBar$1 = "_";
  var UnderBrace$1 = "⏟";
  var UnderBracket$1 = "⎵";
  var UnderParenthesis$1 = "⏝";
  var Union$1 = "⋃";
  var UnionPlus$1 = "⊎";
  var Uogon$1 = "Ų";
  var uogon$1 = "ų";
  var Uopf$1 = "𝕌";
  var uopf$1 = "𝕦";
  var UpArrowBar$1 = "⤒";
  var uparrow$1 = "↑";
  var UpArrow$1 = "↑";
  var Uparrow$1 = "⇑";
  var UpArrowDownArrow$1 = "⇅";
  var updownarrow$1 = "↕";
  var UpDownArrow$1 = "↕";
  var Updownarrow$1 = "⇕";
  var UpEquilibrium$1 = "⥮";
  var upharpoonleft$1 = "↿";
  var upharpoonright$1 = "↾";
  var uplus$1 = "⊎";
  var UpperLeftArrow$1 = "↖";
  var UpperRightArrow$1 = "↗";
  var upsi$1 = "υ";
  var Upsi$1 = "ϒ";
  var upsih$1 = "ϒ";
  var Upsilon$1 = "Υ";
  var upsilon$1 = "υ";
  var UpTeeArrow$1 = "↥";
  var UpTee$1 = "⊥";
  var upuparrows$1 = "⇈";
  var urcorn$1 = "⌝";
  var urcorner$1 = "⌝";
  var urcrop$1 = "⌎";
  var Uring$1 = "Ů";
  var uring$1 = "ů";
  var urtri$1 = "◹";
  var Uscr$1 = "𝒰";
  var uscr$1 = "𝓊";
  var utdot$1 = "⋰";
  var Utilde$1 = "Ũ";
  var utilde$1 = "ũ";
  var utri$1 = "▵";
  var utrif$1 = "▴";
  var uuarr$1 = "⇈";
  var Uuml$2 = "Ü";
  var uuml$2 = "ü";
  var uwangle$1 = "⦧";
  var vangrt$1 = "⦜";
  var varepsilon$1 = "ϵ";
  var varkappa$1 = "ϰ";
  var varnothing$1 = "∅";
  var varphi$1 = "ϕ";
  var varpi$1 = "ϖ";
  var varpropto$1 = "∝";
  var varr$1 = "↕";
  var vArr$1 = "⇕";
  var varrho$1 = "ϱ";
  var varsigma$1 = "ς";
  var varsubsetneq$1 = "⊊︀";
  var varsubsetneqq$1 = "⫋︀";
  var varsupsetneq$1 = "⊋︀";
  var varsupsetneqq$1 = "⫌︀";
  var vartheta$1 = "ϑ";
  var vartriangleleft$1 = "⊲";
  var vartriangleright$1 = "⊳";
  var vBar$1 = "⫨";
  var Vbar$1 = "⫫";
  var vBarv$1 = "⫩";
  var Vcy$1 = "В";
  var vcy$1 = "в";
  var vdash$1 = "⊢";
  var vDash$1 = "⊨";
  var Vdash$1 = "⊩";
  var VDash$1 = "⊫";
  var Vdashl$1 = "⫦";
  var veebar$1 = "⊻";
  var vee$1 = "∨";
  var Vee$1 = "⋁";
  var veeeq$1 = "≚";
  var vellip$1 = "⋮";
  var verbar$1 = "|";
  var Verbar$1 = "‖";
  var vert$1 = "|";
  var Vert$1 = "‖";
  var VerticalBar$1 = "∣";
  var VerticalLine$1 = "|";
  var VerticalSeparator$1 = "❘";
  var VerticalTilde$1 = "≀";
  var VeryThinSpace$1 = " ";
  var Vfr$1 = "𝔙";
  var vfr$1 = "𝔳";
  var vltri$1 = "⊲";
  var vnsub$1 = "⊂⃒";
  var vnsup$1 = "⊃⃒";
  var Vopf$1 = "𝕍";
  var vopf$1 = "𝕧";
  var vprop$1 = "∝";
  var vrtri$1 = "⊳";
  var Vscr$1 = "𝒱";
  var vscr$1 = "𝓋";
  var vsubnE$1 = "⫋︀";
  var vsubne$1 = "⊊︀";
  var vsupnE$1 = "⫌︀";
  var vsupne$1 = "⊋︀";
  var Vvdash$1 = "⊪";
  var vzigzag$1 = "⦚";
  var Wcirc$1 = "Ŵ";
  var wcirc$1 = "ŵ";
  var wedbar$1 = "⩟";
  var wedge$1 = "∧";
  var Wedge$1 = "⋀";
  var wedgeq$1 = "≙";
  var weierp$1 = "℘";
  var Wfr$1 = "𝔚";
  var wfr$1 = "𝔴";
  var Wopf$1 = "𝕎";
  var wopf$1 = "𝕨";
  var wp$1 = "℘";
  var wr$1 = "≀";
  var wreath$1 = "≀";
  var Wscr$1 = "𝒲";
  var wscr$1 = "𝓌";
  var xcap$1 = "⋂";
  var xcirc$1 = "◯";
  var xcup$1 = "⋃";
  var xdtri$1 = "▽";
  var Xfr$1 = "𝔛";
  var xfr$1 = "𝔵";
  var xharr$1 = "⟷";
  var xhArr$1 = "⟺";
  var Xi$1 = "Ξ";
  var xi$1 = "ξ";
  var xlarr$1 = "⟵";
  var xlArr$1 = "⟸";
  var xmap$1 = "⟼";
  var xnis$1 = "⋻";
  var xodot$1 = "⨀";
  var Xopf$1 = "𝕏";
  var xopf$1 = "𝕩";
  var xoplus$1 = "⨁";
  var xotime$1 = "⨂";
  var xrarr$1 = "⟶";
  var xrArr$1 = "⟹";
  var Xscr$1 = "𝒳";
  var xscr$1 = "𝓍";
  var xsqcup$1 = "⨆";
  var xuplus$1 = "⨄";
  var xutri$1 = "△";
  var xvee$1 = "⋁";
  var xwedge$1 = "⋀";
  var Yacute$2 = "Ý";
  var yacute$2 = "ý";
  var YAcy$1 = "Я";
  var yacy$1 = "я";
  var Ycirc$1 = "Ŷ";
  var ycirc$1 = "ŷ";
  var Ycy$1 = "Ы";
  var ycy$1 = "ы";
  var yen$2 = "¥";
  var Yfr$1 = "𝔜";
  var yfr$1 = "𝔶";
  var YIcy$1 = "Ї";
  var yicy$1 = "ї";
  var Yopf$1 = "𝕐";
  var yopf$1 = "𝕪";
  var Yscr$1 = "𝒴";
  var yscr$1 = "𝓎";
  var YUcy$1 = "Ю";
  var yucy$1 = "ю";
  var yuml$2 = "ÿ";
  var Yuml$1 = "Ÿ";
  var Zacute$1 = "Ź";
  var zacute$1 = "ź";
  var Zcaron$1 = "Ž";
  var zcaron$1 = "ž";
  var Zcy$1 = "З";
  var zcy$1 = "з";
  var Zdot$1 = "Ż";
  var zdot$1 = "ż";
  var zeetrf$1 = "ℨ";
  var ZeroWidthSpace$1 = "​";
  var Zeta$1 = "Ζ";
  var zeta$1 = "ζ";
  var zfr$1 = "𝔷";
  var Zfr$1 = "ℨ";
  var ZHcy$1 = "Ж";
  var zhcy$1 = "ж";
  var zigrarr$1 = "⇝";
  var zopf$1 = "𝕫";
  var Zopf$1 = "ℤ";
  var Zscr$1 = "𝒵";
  var zscr$1 = "𝓏";
  var zwj$1 = "‍";
  var zwnj$1 = "‌";
  var require$$1 = {
  	Aacute: Aacute$2,
  	aacute: aacute$2,
  	Abreve: Abreve$1,
  	abreve: abreve$1,
  	ac: ac$1,
  	acd: acd$1,
  	acE: acE$1,
  	Acirc: Acirc$2,
  	acirc: acirc$2,
  	acute: acute$2,
  	Acy: Acy$1,
  	acy: acy$1,
  	AElig: AElig$2,
  	aelig: aelig$2,
  	af: af$1,
  	Afr: Afr$1,
  	afr: afr$1,
  	Agrave: Agrave$2,
  	agrave: agrave$2,
  	alefsym: alefsym$1,
  	aleph: aleph$1,
  	Alpha: Alpha$1,
  	alpha: alpha$1,
  	Amacr: Amacr$1,
  	amacr: amacr$1,
  	amalg: amalg$1,
  	amp: amp$3,
  	AMP: AMP$2,
  	andand: andand$1,
  	And: And$1,
  	and: and$1,
  	andd: andd$1,
  	andslope: andslope$1,
  	andv: andv$1,
  	ang: ang$1,
  	ange: ange$1,
  	angle: angle$1,
  	angmsdaa: angmsdaa$1,
  	angmsdab: angmsdab$1,
  	angmsdac: angmsdac$1,
  	angmsdad: angmsdad$1,
  	angmsdae: angmsdae$1,
  	angmsdaf: angmsdaf$1,
  	angmsdag: angmsdag$1,
  	angmsdah: angmsdah$1,
  	angmsd: angmsd$1,
  	angrt: angrt$1,
  	angrtvb: angrtvb$1,
  	angrtvbd: angrtvbd$1,
  	angsph: angsph$1,
  	angst: angst$1,
  	angzarr: angzarr$1,
  	Aogon: Aogon$1,
  	aogon: aogon$1,
  	Aopf: Aopf$1,
  	aopf: aopf$1,
  	apacir: apacir$1,
  	ap: ap$1,
  	apE: apE$1,
  	ape: ape$1,
  	apid: apid$1,
  	apos: apos$2,
  	ApplyFunction: ApplyFunction$1,
  	approx: approx$1,
  	approxeq: approxeq$1,
  	Aring: Aring$2,
  	aring: aring$2,
  	Ascr: Ascr$1,
  	ascr: ascr$1,
  	Assign: Assign$1,
  	ast: ast$1,
  	asymp: asymp$1,
  	asympeq: asympeq$1,
  	Atilde: Atilde$2,
  	atilde: atilde$2,
  	Auml: Auml$2,
  	auml: auml$2,
  	awconint: awconint$1,
  	awint: awint$1,
  	backcong: backcong$1,
  	backepsilon: backepsilon$1,
  	backprime: backprime$1,
  	backsim: backsim$1,
  	backsimeq: backsimeq$1,
  	Backslash: Backslash$1,
  	Barv: Barv$1,
  	barvee: barvee$1,
  	barwed: barwed$1,
  	Barwed: Barwed$1,
  	barwedge: barwedge$1,
  	bbrk: bbrk$1,
  	bbrktbrk: bbrktbrk$1,
  	bcong: bcong$1,
  	Bcy: Bcy$1,
  	bcy: bcy$1,
  	bdquo: bdquo$1,
  	becaus: becaus$1,
  	because: because$1,
  	Because: Because$1,
  	bemptyv: bemptyv$1,
  	bepsi: bepsi$1,
  	bernou: bernou$1,
  	Bernoullis: Bernoullis$1,
  	Beta: Beta$1,
  	beta: beta$1,
  	beth: beth$1,
  	between: between$1,
  	Bfr: Bfr$1,
  	bfr: bfr$1,
  	bigcap: bigcap$1,
  	bigcirc: bigcirc$1,
  	bigcup: bigcup$1,
  	bigodot: bigodot$1,
  	bigoplus: bigoplus$1,
  	bigotimes: bigotimes$1,
  	bigsqcup: bigsqcup$1,
  	bigstar: bigstar$1,
  	bigtriangledown: bigtriangledown$1,
  	bigtriangleup: bigtriangleup$1,
  	biguplus: biguplus$1,
  	bigvee: bigvee$1,
  	bigwedge: bigwedge$1,
  	bkarow: bkarow$1,
  	blacklozenge: blacklozenge$1,
  	blacksquare: blacksquare$1,
  	blacktriangle: blacktriangle$1,
  	blacktriangledown: blacktriangledown$1,
  	blacktriangleleft: blacktriangleleft$1,
  	blacktriangleright: blacktriangleright$1,
  	blank: blank$1,
  	blk12: blk12$1,
  	blk14: blk14$1,
  	blk34: blk34$1,
  	block: block$1,
  	bne: bne$1,
  	bnequiv: bnequiv$1,
  	bNot: bNot$1,
  	bnot: bnot$1,
  	Bopf: Bopf$1,
  	bopf: bopf$1,
  	bot: bot$1,
  	bottom: bottom$1,
  	bowtie: bowtie$1,
  	boxbox: boxbox$1,
  	boxdl: boxdl$1,
  	boxdL: boxdL$1,
  	boxDl: boxDl$1,
  	boxDL: boxDL$1,
  	boxdr: boxdr$1,
  	boxdR: boxdR$1,
  	boxDr: boxDr$1,
  	boxDR: boxDR$1,
  	boxh: boxh$1,
  	boxH: boxH$1,
  	boxhd: boxhd$1,
  	boxHd: boxHd$1,
  	boxhD: boxhD$1,
  	boxHD: boxHD$1,
  	boxhu: boxhu$1,
  	boxHu: boxHu$1,
  	boxhU: boxhU$1,
  	boxHU: boxHU$1,
  	boxminus: boxminus$1,
  	boxplus: boxplus$1,
  	boxtimes: boxtimes$1,
  	boxul: boxul$1,
  	boxuL: boxuL$1,
  	boxUl: boxUl$1,
  	boxUL: boxUL$1,
  	boxur: boxur$1,
  	boxuR: boxuR$1,
  	boxUr: boxUr$1,
  	boxUR: boxUR$1,
  	boxv: boxv$1,
  	boxV: boxV$1,
  	boxvh: boxvh$1,
  	boxvH: boxvH$1,
  	boxVh: boxVh$1,
  	boxVH: boxVH$1,
  	boxvl: boxvl$1,
  	boxvL: boxvL$1,
  	boxVl: boxVl$1,
  	boxVL: boxVL$1,
  	boxvr: boxvr$1,
  	boxvR: boxvR$1,
  	boxVr: boxVr$1,
  	boxVR: boxVR$1,
  	bprime: bprime$1,
  	breve: breve$1,
  	Breve: Breve$1,
  	brvbar: brvbar$2,
  	bscr: bscr$1,
  	Bscr: Bscr$1,
  	bsemi: bsemi$1,
  	bsim: bsim$1,
  	bsime: bsime$1,
  	bsolb: bsolb$1,
  	bsol: bsol$1,
  	bsolhsub: bsolhsub$1,
  	bull: bull$1,
  	bullet: bullet$1,
  	bump: bump$1,
  	bumpE: bumpE$1,
  	bumpe: bumpe$1,
  	Bumpeq: Bumpeq$1,
  	bumpeq: bumpeq$1,
  	Cacute: Cacute$1,
  	cacute: cacute$1,
  	capand: capand$1,
  	capbrcup: capbrcup$1,
  	capcap: capcap$1,
  	cap: cap$1,
  	Cap: Cap$1,
  	capcup: capcup$1,
  	capdot: capdot$1,
  	CapitalDifferentialD: CapitalDifferentialD$1,
  	caps: caps$1,
  	caret: caret$1,
  	caron: caron$1,
  	Cayleys: Cayleys$1,
  	ccaps: ccaps$1,
  	Ccaron: Ccaron$1,
  	ccaron: ccaron$1,
  	Ccedil: Ccedil$2,
  	ccedil: ccedil$2,
  	Ccirc: Ccirc$1,
  	ccirc: ccirc$1,
  	Cconint: Cconint$1,
  	ccups: ccups$1,
  	ccupssm: ccupssm$1,
  	Cdot: Cdot$1,
  	cdot: cdot$1,
  	cedil: cedil$2,
  	Cedilla: Cedilla$1,
  	cemptyv: cemptyv$1,
  	cent: cent$2,
  	centerdot: centerdot$1,
  	CenterDot: CenterDot$1,
  	cfr: cfr$1,
  	Cfr: Cfr$1,
  	CHcy: CHcy$1,
  	chcy: chcy$1,
  	check: check$1,
  	checkmark: checkmark$1,
  	Chi: Chi$1,
  	chi: chi$1,
  	circ: circ$1,
  	circeq: circeq$1,
  	circlearrowleft: circlearrowleft$1,
  	circlearrowright: circlearrowright$1,
  	circledast: circledast$1,
  	circledcirc: circledcirc$1,
  	circleddash: circleddash$1,
  	CircleDot: CircleDot$1,
  	circledR: circledR$1,
  	circledS: circledS$1,
  	CircleMinus: CircleMinus$1,
  	CirclePlus: CirclePlus$1,
  	CircleTimes: CircleTimes$1,
  	cir: cir$1,
  	cirE: cirE$1,
  	cire: cire$1,
  	cirfnint: cirfnint$1,
  	cirmid: cirmid$1,
  	cirscir: cirscir$1,
  	ClockwiseContourIntegral: ClockwiseContourIntegral$1,
  	CloseCurlyDoubleQuote: CloseCurlyDoubleQuote$1,
  	CloseCurlyQuote: CloseCurlyQuote$1,
  	clubs: clubs$1,
  	clubsuit: clubsuit$1,
  	colon: colon$1,
  	Colon: Colon$1,
  	Colone: Colone$1,
  	colone: colone$1,
  	coloneq: coloneq$1,
  	comma: comma$1,
  	commat: commat$1,
  	comp: comp$1,
  	compfn: compfn$1,
  	complement: complement$1,
  	complexes: complexes$1,
  	cong: cong$1,
  	congdot: congdot$1,
  	Congruent: Congruent$1,
  	conint: conint$1,
  	Conint: Conint$1,
  	ContourIntegral: ContourIntegral$1,
  	copf: copf$1,
  	Copf: Copf$1,
  	coprod: coprod$1,
  	Coproduct: Coproduct$1,
  	copy: copy$2,
  	COPY: COPY$2,
  	copysr: copysr$1,
  	CounterClockwiseContourIntegral: CounterClockwiseContourIntegral$1,
  	crarr: crarr$1,
  	cross: cross$1,
  	Cross: Cross$1,
  	Cscr: Cscr$1,
  	cscr: cscr$1,
  	csub: csub$1,
  	csube: csube$1,
  	csup: csup$1,
  	csupe: csupe$1,
  	ctdot: ctdot$1,
  	cudarrl: cudarrl$1,
  	cudarrr: cudarrr$1,
  	cuepr: cuepr$1,
  	cuesc: cuesc$1,
  	cularr: cularr$1,
  	cularrp: cularrp$1,
  	cupbrcap: cupbrcap$1,
  	cupcap: cupcap$1,
  	CupCap: CupCap$1,
  	cup: cup$1,
  	Cup: Cup$1,
  	cupcup: cupcup$1,
  	cupdot: cupdot$1,
  	cupor: cupor$1,
  	cups: cups$1,
  	curarr: curarr$1,
  	curarrm: curarrm$1,
  	curlyeqprec: curlyeqprec$1,
  	curlyeqsucc: curlyeqsucc$1,
  	curlyvee: curlyvee$1,
  	curlywedge: curlywedge$1,
  	curren: curren$2,
  	curvearrowleft: curvearrowleft$1,
  	curvearrowright: curvearrowright$1,
  	cuvee: cuvee$1,
  	cuwed: cuwed$1,
  	cwconint: cwconint$1,
  	cwint: cwint$1,
  	cylcty: cylcty$1,
  	dagger: dagger$1,
  	Dagger: Dagger$1,
  	daleth: daleth$1,
  	darr: darr$1,
  	Darr: Darr$1,
  	dArr: dArr$1,
  	dash: dash$1,
  	Dashv: Dashv$1,
  	dashv: dashv$1,
  	dbkarow: dbkarow$1,
  	dblac: dblac$1,
  	Dcaron: Dcaron$1,
  	dcaron: dcaron$1,
  	Dcy: Dcy$1,
  	dcy: dcy$1,
  	ddagger: ddagger$1,
  	ddarr: ddarr$1,
  	DD: DD$1,
  	dd: dd$1,
  	DDotrahd: DDotrahd$1,
  	ddotseq: ddotseq$1,
  	deg: deg$2,
  	Del: Del$1,
  	Delta: Delta$1,
  	delta: delta$1,
  	demptyv: demptyv$1,
  	dfisht: dfisht$1,
  	Dfr: Dfr$1,
  	dfr: dfr$1,
  	dHar: dHar$1,
  	dharl: dharl$1,
  	dharr: dharr$1,
  	DiacriticalAcute: DiacriticalAcute$1,
  	DiacriticalDot: DiacriticalDot$1,
  	DiacriticalDoubleAcute: DiacriticalDoubleAcute$1,
  	DiacriticalGrave: DiacriticalGrave$1,
  	DiacriticalTilde: DiacriticalTilde$1,
  	diam: diam$1,
  	diamond: diamond$1,
  	Diamond: Diamond$1,
  	diamondsuit: diamondsuit$1,
  	diams: diams$1,
  	die: die$1,
  	DifferentialD: DifferentialD$1,
  	digamma: digamma$1,
  	disin: disin$1,
  	div: div$1,
  	divide: divide$2,
  	divideontimes: divideontimes$1,
  	divonx: divonx$1,
  	DJcy: DJcy$1,
  	djcy: djcy$1,
  	dlcorn: dlcorn$1,
  	dlcrop: dlcrop$1,
  	dollar: dollar$1,
  	Dopf: Dopf$1,
  	dopf: dopf$1,
  	Dot: Dot$1,
  	dot: dot$1,
  	DotDot: DotDot$1,
  	doteq: doteq$1,
  	doteqdot: doteqdot$1,
  	DotEqual: DotEqual$1,
  	dotminus: dotminus$1,
  	dotplus: dotplus$1,
  	dotsquare: dotsquare$1,
  	doublebarwedge: doublebarwedge$1,
  	DoubleContourIntegral: DoubleContourIntegral$1,
  	DoubleDot: DoubleDot$1,
  	DoubleDownArrow: DoubleDownArrow$1,
  	DoubleLeftArrow: DoubleLeftArrow$1,
  	DoubleLeftRightArrow: DoubleLeftRightArrow$1,
  	DoubleLeftTee: DoubleLeftTee$1,
  	DoubleLongLeftArrow: DoubleLongLeftArrow$1,
  	DoubleLongLeftRightArrow: DoubleLongLeftRightArrow$1,
  	DoubleLongRightArrow: DoubleLongRightArrow$1,
  	DoubleRightArrow: DoubleRightArrow$1,
  	DoubleRightTee: DoubleRightTee$1,
  	DoubleUpArrow: DoubleUpArrow$1,
  	DoubleUpDownArrow: DoubleUpDownArrow$1,
  	DoubleVerticalBar: DoubleVerticalBar$1,
  	DownArrowBar: DownArrowBar$1,
  	downarrow: downarrow$1,
  	DownArrow: DownArrow$1,
  	Downarrow: Downarrow$1,
  	DownArrowUpArrow: DownArrowUpArrow$1,
  	DownBreve: DownBreve$1,
  	downdownarrows: downdownarrows$1,
  	downharpoonleft: downharpoonleft$1,
  	downharpoonright: downharpoonright$1,
  	DownLeftRightVector: DownLeftRightVector$1,
  	DownLeftTeeVector: DownLeftTeeVector$1,
  	DownLeftVectorBar: DownLeftVectorBar$1,
  	DownLeftVector: DownLeftVector$1,
  	DownRightTeeVector: DownRightTeeVector$1,
  	DownRightVectorBar: DownRightVectorBar$1,
  	DownRightVector: DownRightVector$1,
  	DownTeeArrow: DownTeeArrow$1,
  	DownTee: DownTee$1,
  	drbkarow: drbkarow$1,
  	drcorn: drcorn$1,
  	drcrop: drcrop$1,
  	Dscr: Dscr$1,
  	dscr: dscr$1,
  	DScy: DScy$1,
  	dscy: dscy$1,
  	dsol: dsol$1,
  	Dstrok: Dstrok$1,
  	dstrok: dstrok$1,
  	dtdot: dtdot$1,
  	dtri: dtri$1,
  	dtrif: dtrif$1,
  	duarr: duarr$1,
  	duhar: duhar$1,
  	dwangle: dwangle$1,
  	DZcy: DZcy$1,
  	dzcy: dzcy$1,
  	dzigrarr: dzigrarr$1,
  	Eacute: Eacute$2,
  	eacute: eacute$2,
  	easter: easter$1,
  	Ecaron: Ecaron$1,
  	ecaron: ecaron$1,
  	Ecirc: Ecirc$2,
  	ecirc: ecirc$2,
  	ecir: ecir$1,
  	ecolon: ecolon$1,
  	Ecy: Ecy$1,
  	ecy: ecy$1,
  	eDDot: eDDot$1,
  	Edot: Edot$1,
  	edot: edot$1,
  	eDot: eDot$1,
  	ee: ee$1,
  	efDot: efDot$1,
  	Efr: Efr$1,
  	efr: efr$1,
  	eg: eg$1,
  	Egrave: Egrave$2,
  	egrave: egrave$2,
  	egs: egs$1,
  	egsdot: egsdot$1,
  	el: el$1,
  	Element: Element$1,
  	elinters: elinters$1,
  	ell: ell$1,
  	els: els$1,
  	elsdot: elsdot$1,
  	Emacr: Emacr$1,
  	emacr: emacr$1,
  	empty: empty$1,
  	emptyset: emptyset$1,
  	EmptySmallSquare: EmptySmallSquare$1,
  	emptyv: emptyv$1,
  	EmptyVerySmallSquare: EmptyVerySmallSquare$1,
  	emsp13: emsp13$1,
  	emsp14: emsp14$1,
  	emsp: emsp$1,
  	ENG: ENG$1,
  	eng: eng$1,
  	ensp: ensp$1,
  	Eogon: Eogon$1,
  	eogon: eogon$1,
  	Eopf: Eopf$1,
  	eopf: eopf$1,
  	epar: epar$1,
  	eparsl: eparsl$1,
  	eplus: eplus$1,
  	epsi: epsi$1,
  	Epsilon: Epsilon$1,
  	epsilon: epsilon$1,
  	epsiv: epsiv$1,
  	eqcirc: eqcirc$1,
  	eqcolon: eqcolon$1,
  	eqsim: eqsim$1,
  	eqslantgtr: eqslantgtr$1,
  	eqslantless: eqslantless$1,
  	Equal: Equal$1,
  	equals: equals$1,
  	EqualTilde: EqualTilde$1,
  	equest: equest$1,
  	Equilibrium: Equilibrium$1,
  	equiv: equiv$1,
  	equivDD: equivDD$1,
  	eqvparsl: eqvparsl$1,
  	erarr: erarr$1,
  	erDot: erDot$1,
  	escr: escr$1,
  	Escr: Escr$1,
  	esdot: esdot$1,
  	Esim: Esim$1,
  	esim: esim$1,
  	Eta: Eta$1,
  	eta: eta$1,
  	ETH: ETH$2,
  	eth: eth$2,
  	Euml: Euml$2,
  	euml: euml$2,
  	euro: euro$1,
  	excl: excl$1,
  	exist: exist$1,
  	Exists: Exists$1,
  	expectation: expectation$1,
  	exponentiale: exponentiale$1,
  	ExponentialE: ExponentialE$1,
  	fallingdotseq: fallingdotseq$1,
  	Fcy: Fcy$1,
  	fcy: fcy$1,
  	female: female$1,
  	ffilig: ffilig$1,
  	fflig: fflig$1,
  	ffllig: ffllig$1,
  	Ffr: Ffr$1,
  	ffr: ffr$1,
  	filig: filig$1,
  	FilledSmallSquare: FilledSmallSquare$1,
  	FilledVerySmallSquare: FilledVerySmallSquare$1,
  	fjlig: fjlig$1,
  	flat: flat$1,
  	fllig: fllig$1,
  	fltns: fltns$1,
  	fnof: fnof$1,
  	Fopf: Fopf$1,
  	fopf: fopf$1,
  	forall: forall$1,
  	ForAll: ForAll$1,
  	fork: fork$1,
  	forkv: forkv$1,
  	Fouriertrf: Fouriertrf$1,
  	fpartint: fpartint$1,
  	frac12: frac12$2,
  	frac13: frac13$1,
  	frac14: frac14$2,
  	frac15: frac15$1,
  	frac16: frac16$1,
  	frac18: frac18$1,
  	frac23: frac23$1,
  	frac25: frac25$1,
  	frac34: frac34$2,
  	frac35: frac35$1,
  	frac38: frac38$1,
  	frac45: frac45$1,
  	frac56: frac56$1,
  	frac58: frac58$1,
  	frac78: frac78$1,
  	frasl: frasl$1,
  	frown: frown$1,
  	fscr: fscr$1,
  	Fscr: Fscr$1,
  	gacute: gacute$1,
  	Gamma: Gamma$1,
  	gamma: gamma$1,
  	Gammad: Gammad$1,
  	gammad: gammad$1,
  	gap: gap$1,
  	Gbreve: Gbreve$1,
  	gbreve: gbreve$1,
  	Gcedil: Gcedil$1,
  	Gcirc: Gcirc$1,
  	gcirc: gcirc$1,
  	Gcy: Gcy$1,
  	gcy: gcy$1,
  	Gdot: Gdot$1,
  	gdot: gdot$1,
  	ge: ge$1,
  	gE: gE$1,
  	gEl: gEl$1,
  	gel: gel$1,
  	geq: geq$1,
  	geqq: geqq$1,
  	geqslant: geqslant$1,
  	gescc: gescc$1,
  	ges: ges$1,
  	gesdot: gesdot$1,
  	gesdoto: gesdoto$1,
  	gesdotol: gesdotol$1,
  	gesl: gesl$1,
  	gesles: gesles$1,
  	Gfr: Gfr$1,
  	gfr: gfr$1,
  	gg: gg$1,
  	Gg: Gg$1,
  	ggg: ggg$1,
  	gimel: gimel$1,
  	GJcy: GJcy$1,
  	gjcy: gjcy$1,
  	gla: gla$1,
  	gl: gl$1,
  	glE: glE$1,
  	glj: glj$1,
  	gnap: gnap$1,
  	gnapprox: gnapprox$1,
  	gne: gne$1,
  	gnE: gnE$1,
  	gneq: gneq$1,
  	gneqq: gneqq$1,
  	gnsim: gnsim$1,
  	Gopf: Gopf$1,
  	gopf: gopf$1,
  	grave: grave$1,
  	GreaterEqual: GreaterEqual$1,
  	GreaterEqualLess: GreaterEqualLess$1,
  	GreaterFullEqual: GreaterFullEqual$1,
  	GreaterGreater: GreaterGreater$1,
  	GreaterLess: GreaterLess$1,
  	GreaterSlantEqual: GreaterSlantEqual$1,
  	GreaterTilde: GreaterTilde$1,
  	Gscr: Gscr$1,
  	gscr: gscr$1,
  	gsim: gsim$1,
  	gsime: gsime$1,
  	gsiml: gsiml$1,
  	gtcc: gtcc$1,
  	gtcir: gtcir$1,
  	gt: gt$3,
  	GT: GT$2,
  	Gt: Gt$1,
  	gtdot: gtdot$1,
  	gtlPar: gtlPar$1,
  	gtquest: gtquest$1,
  	gtrapprox: gtrapprox$1,
  	gtrarr: gtrarr$1,
  	gtrdot: gtrdot$1,
  	gtreqless: gtreqless$1,
  	gtreqqless: gtreqqless$1,
  	gtrless: gtrless$1,
  	gtrsim: gtrsim$1,
  	gvertneqq: gvertneqq$1,
  	gvnE: gvnE$1,
  	Hacek: Hacek$1,
  	hairsp: hairsp$1,
  	half: half$1,
  	hamilt: hamilt$1,
  	HARDcy: HARDcy$1,
  	hardcy: hardcy$1,
  	harrcir: harrcir$1,
  	harr: harr$1,
  	hArr: hArr$1,
  	harrw: harrw$1,
  	Hat: Hat$1,
  	hbar: hbar$1,
  	Hcirc: Hcirc$1,
  	hcirc: hcirc$1,
  	hearts: hearts$1,
  	heartsuit: heartsuit$1,
  	hellip: hellip$1,
  	hercon: hercon$1,
  	hfr: hfr$1,
  	Hfr: Hfr$1,
  	HilbertSpace: HilbertSpace$1,
  	hksearow: hksearow$1,
  	hkswarow: hkswarow$1,
  	hoarr: hoarr$1,
  	homtht: homtht$1,
  	hookleftarrow: hookleftarrow$1,
  	hookrightarrow: hookrightarrow$1,
  	hopf: hopf$1,
  	Hopf: Hopf$1,
  	horbar: horbar$1,
  	HorizontalLine: HorizontalLine$1,
  	hscr: hscr$1,
  	Hscr: Hscr$1,
  	hslash: hslash$1,
  	Hstrok: Hstrok$1,
  	hstrok: hstrok$1,
  	HumpDownHump: HumpDownHump$1,
  	HumpEqual: HumpEqual$1,
  	hybull: hybull$1,
  	hyphen: hyphen$1,
  	Iacute: Iacute$2,
  	iacute: iacute$2,
  	ic: ic$1,
  	Icirc: Icirc$2,
  	icirc: icirc$2,
  	Icy: Icy$1,
  	icy: icy$1,
  	Idot: Idot$1,
  	IEcy: IEcy$1,
  	iecy: iecy$1,
  	iexcl: iexcl$2,
  	iff: iff$1,
  	ifr: ifr$1,
  	Ifr: Ifr$1,
  	Igrave: Igrave$2,
  	igrave: igrave$2,
  	ii: ii$1,
  	iiiint: iiiint$1,
  	iiint: iiint$1,
  	iinfin: iinfin$1,
  	iiota: iiota$1,
  	IJlig: IJlig$1,
  	ijlig: ijlig$1,
  	Imacr: Imacr$1,
  	imacr: imacr$1,
  	image: image$1,
  	ImaginaryI: ImaginaryI$1,
  	imagline: imagline$1,
  	imagpart: imagpart$1,
  	imath: imath$1,
  	Im: Im$1,
  	imof: imof$1,
  	imped: imped$1,
  	Implies: Implies$1,
  	incare: incare$1,
  	"in": "∈",
  	infin: infin$1,
  	infintie: infintie$1,
  	inodot: inodot$1,
  	intcal: intcal$1,
  	int: int$1,
  	Int: Int$1,
  	integers: integers$1,
  	Integral: Integral$1,
  	intercal: intercal$1,
  	Intersection: Intersection$1,
  	intlarhk: intlarhk$1,
  	intprod: intprod$1,
  	InvisibleComma: InvisibleComma$1,
  	InvisibleTimes: InvisibleTimes$1,
  	IOcy: IOcy$1,
  	iocy: iocy$1,
  	Iogon: Iogon$1,
  	iogon: iogon$1,
  	Iopf: Iopf$1,
  	iopf: iopf$1,
  	Iota: Iota$1,
  	iota: iota$1,
  	iprod: iprod$1,
  	iquest: iquest$2,
  	iscr: iscr$1,
  	Iscr: Iscr$1,
  	isin: isin$1,
  	isindot: isindot$1,
  	isinE: isinE$1,
  	isins: isins$1,
  	isinsv: isinsv$1,
  	isinv: isinv$1,
  	it: it$1,
  	Itilde: Itilde$1,
  	itilde: itilde$1,
  	Iukcy: Iukcy$1,
  	iukcy: iukcy$1,
  	Iuml: Iuml$2,
  	iuml: iuml$2,
  	Jcirc: Jcirc$1,
  	jcirc: jcirc$1,
  	Jcy: Jcy$1,
  	jcy: jcy$1,
  	Jfr: Jfr$1,
  	jfr: jfr$1,
  	jmath: jmath$1,
  	Jopf: Jopf$1,
  	jopf: jopf$1,
  	Jscr: Jscr$1,
  	jscr: jscr$1,
  	Jsercy: Jsercy$1,
  	jsercy: jsercy$1,
  	Jukcy: Jukcy$1,
  	jukcy: jukcy$1,
  	Kappa: Kappa$1,
  	kappa: kappa$1,
  	kappav: kappav$1,
  	Kcedil: Kcedil$1,
  	kcedil: kcedil$1,
  	Kcy: Kcy$1,
  	kcy: kcy$1,
  	Kfr: Kfr$1,
  	kfr: kfr$1,
  	kgreen: kgreen$1,
  	KHcy: KHcy$1,
  	khcy: khcy$1,
  	KJcy: KJcy$1,
  	kjcy: kjcy$1,
  	Kopf: Kopf$1,
  	kopf: kopf$1,
  	Kscr: Kscr$1,
  	kscr: kscr$1,
  	lAarr: lAarr$1,
  	Lacute: Lacute$1,
  	lacute: lacute$1,
  	laemptyv: laemptyv$1,
  	lagran: lagran$1,
  	Lambda: Lambda$1,
  	lambda: lambda$1,
  	lang: lang$1,
  	Lang: Lang$1,
  	langd: langd$1,
  	langle: langle$1,
  	lap: lap$1,
  	Laplacetrf: Laplacetrf$1,
  	laquo: laquo$2,
  	larrb: larrb$1,
  	larrbfs: larrbfs$1,
  	larr: larr$1,
  	Larr: Larr$1,
  	lArr: lArr$1,
  	larrfs: larrfs$1,
  	larrhk: larrhk$1,
  	larrlp: larrlp$1,
  	larrpl: larrpl$1,
  	larrsim: larrsim$1,
  	larrtl: larrtl$1,
  	latail: latail$1,
  	lAtail: lAtail$1,
  	lat: lat$1,
  	late: late$1,
  	lates: lates$1,
  	lbarr: lbarr$1,
  	lBarr: lBarr$1,
  	lbbrk: lbbrk$1,
  	lbrace: lbrace$1,
  	lbrack: lbrack$1,
  	lbrke: lbrke$1,
  	lbrksld: lbrksld$1,
  	lbrkslu: lbrkslu$1,
  	Lcaron: Lcaron$1,
  	lcaron: lcaron$1,
  	Lcedil: Lcedil$1,
  	lcedil: lcedil$1,
  	lceil: lceil$1,
  	lcub: lcub$1,
  	Lcy: Lcy$1,
  	lcy: lcy$1,
  	ldca: ldca$1,
  	ldquo: ldquo$1,
  	ldquor: ldquor$1,
  	ldrdhar: ldrdhar$1,
  	ldrushar: ldrushar$1,
  	ldsh: ldsh$1,
  	le: le$1,
  	lE: lE$1,
  	LeftAngleBracket: LeftAngleBracket$1,
  	LeftArrowBar: LeftArrowBar$1,
  	leftarrow: leftarrow$1,
  	LeftArrow: LeftArrow$1,
  	Leftarrow: Leftarrow$1,
  	LeftArrowRightArrow: LeftArrowRightArrow$1,
  	leftarrowtail: leftarrowtail$1,
  	LeftCeiling: LeftCeiling$1,
  	LeftDoubleBracket: LeftDoubleBracket$1,
  	LeftDownTeeVector: LeftDownTeeVector$1,
  	LeftDownVectorBar: LeftDownVectorBar$1,
  	LeftDownVector: LeftDownVector$1,
  	LeftFloor: LeftFloor$1,
  	leftharpoondown: leftharpoondown$1,
  	leftharpoonup: leftharpoonup$1,
  	leftleftarrows: leftleftarrows$1,
  	leftrightarrow: leftrightarrow$1,
  	LeftRightArrow: LeftRightArrow$1,
  	Leftrightarrow: Leftrightarrow$1,
  	leftrightarrows: leftrightarrows$1,
  	leftrightharpoons: leftrightharpoons$1,
  	leftrightsquigarrow: leftrightsquigarrow$1,
  	LeftRightVector: LeftRightVector$1,
  	LeftTeeArrow: LeftTeeArrow$1,
  	LeftTee: LeftTee$1,
  	LeftTeeVector: LeftTeeVector$1,
  	leftthreetimes: leftthreetimes$1,
  	LeftTriangleBar: LeftTriangleBar$1,
  	LeftTriangle: LeftTriangle$1,
  	LeftTriangleEqual: LeftTriangleEqual$1,
  	LeftUpDownVector: LeftUpDownVector$1,
  	LeftUpTeeVector: LeftUpTeeVector$1,
  	LeftUpVectorBar: LeftUpVectorBar$1,
  	LeftUpVector: LeftUpVector$1,
  	LeftVectorBar: LeftVectorBar$1,
  	LeftVector: LeftVector$1,
  	lEg: lEg$1,
  	leg: leg$1,
  	leq: leq$1,
  	leqq: leqq$1,
  	leqslant: leqslant$1,
  	lescc: lescc$1,
  	les: les$1,
  	lesdot: lesdot$1,
  	lesdoto: lesdoto$1,
  	lesdotor: lesdotor$1,
  	lesg: lesg$1,
  	lesges: lesges$1,
  	lessapprox: lessapprox$1,
  	lessdot: lessdot$1,
  	lesseqgtr: lesseqgtr$1,
  	lesseqqgtr: lesseqqgtr$1,
  	LessEqualGreater: LessEqualGreater$1,
  	LessFullEqual: LessFullEqual$1,
  	LessGreater: LessGreater$1,
  	lessgtr: lessgtr$1,
  	LessLess: LessLess$1,
  	lesssim: lesssim$1,
  	LessSlantEqual: LessSlantEqual$1,
  	LessTilde: LessTilde$1,
  	lfisht: lfisht$1,
  	lfloor: lfloor$1,
  	Lfr: Lfr$1,
  	lfr: lfr$1,
  	lg: lg$1,
  	lgE: lgE$1,
  	lHar: lHar$1,
  	lhard: lhard$1,
  	lharu: lharu$1,
  	lharul: lharul$1,
  	lhblk: lhblk$1,
  	LJcy: LJcy$1,
  	ljcy: ljcy$1,
  	llarr: llarr$1,
  	ll: ll$1,
  	Ll: Ll$1,
  	llcorner: llcorner$1,
  	Lleftarrow: Lleftarrow$1,
  	llhard: llhard$1,
  	lltri: lltri$1,
  	Lmidot: Lmidot$1,
  	lmidot: lmidot$1,
  	lmoustache: lmoustache$1,
  	lmoust: lmoust$1,
  	lnap: lnap$1,
  	lnapprox: lnapprox$1,
  	lne: lne$1,
  	lnE: lnE$1,
  	lneq: lneq$1,
  	lneqq: lneqq$1,
  	lnsim: lnsim$1,
  	loang: loang$1,
  	loarr: loarr$1,
  	lobrk: lobrk$1,
  	longleftarrow: longleftarrow$1,
  	LongLeftArrow: LongLeftArrow$1,
  	Longleftarrow: Longleftarrow$1,
  	longleftrightarrow: longleftrightarrow$1,
  	LongLeftRightArrow: LongLeftRightArrow$1,
  	Longleftrightarrow: Longleftrightarrow$1,
  	longmapsto: longmapsto$1,
  	longrightarrow: longrightarrow$1,
  	LongRightArrow: LongRightArrow$1,
  	Longrightarrow: Longrightarrow$1,
  	looparrowleft: looparrowleft$1,
  	looparrowright: looparrowright$1,
  	lopar: lopar$1,
  	Lopf: Lopf$1,
  	lopf: lopf$1,
  	loplus: loplus$1,
  	lotimes: lotimes$1,
  	lowast: lowast$1,
  	lowbar: lowbar$1,
  	LowerLeftArrow: LowerLeftArrow$1,
  	LowerRightArrow: LowerRightArrow$1,
  	loz: loz$1,
  	lozenge: lozenge$1,
  	lozf: lozf$1,
  	lpar: lpar$1,
  	lparlt: lparlt$1,
  	lrarr: lrarr$1,
  	lrcorner: lrcorner$1,
  	lrhar: lrhar$1,
  	lrhard: lrhard$1,
  	lrm: lrm$1,
  	lrtri: lrtri$1,
  	lsaquo: lsaquo$1,
  	lscr: lscr$1,
  	Lscr: Lscr$1,
  	lsh: lsh$1,
  	Lsh: Lsh$1,
  	lsim: lsim$1,
  	lsime: lsime$1,
  	lsimg: lsimg$1,
  	lsqb: lsqb$1,
  	lsquo: lsquo$1,
  	lsquor: lsquor$1,
  	Lstrok: Lstrok$1,
  	lstrok: lstrok$1,
  	ltcc: ltcc$1,
  	ltcir: ltcir$1,
  	lt: lt$3,
  	LT: LT$2,
  	Lt: Lt$1,
  	ltdot: ltdot$1,
  	lthree: lthree$1,
  	ltimes: ltimes$1,
  	ltlarr: ltlarr$1,
  	ltquest: ltquest$1,
  	ltri: ltri$1,
  	ltrie: ltrie$1,
  	ltrif: ltrif$1,
  	ltrPar: ltrPar$1,
  	lurdshar: lurdshar$1,
  	luruhar: luruhar$1,
  	lvertneqq: lvertneqq$1,
  	lvnE: lvnE$1,
  	macr: macr$2,
  	male: male$1,
  	malt: malt$1,
  	maltese: maltese$1,
  	"Map": "⤅",
  	map: map$1,
  	mapsto: mapsto$1,
  	mapstodown: mapstodown$1,
  	mapstoleft: mapstoleft$1,
  	mapstoup: mapstoup$1,
  	marker: marker$1,
  	mcomma: mcomma$1,
  	Mcy: Mcy$1,
  	mcy: mcy$1,
  	mdash: mdash$1,
  	mDDot: mDDot$1,
  	measuredangle: measuredangle$1,
  	MediumSpace: MediumSpace$1,
  	Mellintrf: Mellintrf$1,
  	Mfr: Mfr$1,
  	mfr: mfr$1,
  	mho: mho$1,
  	micro: micro$2,
  	midast: midast$1,
  	midcir: midcir$1,
  	mid: mid$1,
  	middot: middot$2,
  	minusb: minusb$1,
  	minus: minus$1,
  	minusd: minusd$1,
  	minusdu: minusdu$1,
  	MinusPlus: MinusPlus$1,
  	mlcp: mlcp$1,
  	mldr: mldr$1,
  	mnplus: mnplus$1,
  	models: models$1,
  	Mopf: Mopf$1,
  	mopf: mopf$1,
  	mp: mp$1,
  	mscr: mscr$1,
  	Mscr: Mscr$1,
  	mstpos: mstpos$1,
  	Mu: Mu$1,
  	mu: mu$1,
  	multimap: multimap$1,
  	mumap: mumap$1,
  	nabla: nabla$1,
  	Nacute: Nacute$1,
  	nacute: nacute$1,
  	nang: nang$1,
  	nap: nap$1,
  	napE: napE$1,
  	napid: napid$1,
  	napos: napos$1,
  	napprox: napprox$1,
  	natural: natural$1,
  	naturals: naturals$1,
  	natur: natur$1,
  	nbsp: nbsp$2,
  	nbump: nbump$1,
  	nbumpe: nbumpe$1,
  	ncap: ncap$1,
  	Ncaron: Ncaron$1,
  	ncaron: ncaron$1,
  	Ncedil: Ncedil$1,
  	ncedil: ncedil$1,
  	ncong: ncong$1,
  	ncongdot: ncongdot$1,
  	ncup: ncup$1,
  	Ncy: Ncy$1,
  	ncy: ncy$1,
  	ndash: ndash$1,
  	nearhk: nearhk$1,
  	nearr: nearr$1,
  	neArr: neArr$1,
  	nearrow: nearrow$1,
  	ne: ne$1,
  	nedot: nedot$1,
  	NegativeMediumSpace: NegativeMediumSpace$1,
  	NegativeThickSpace: NegativeThickSpace$1,
  	NegativeThinSpace: NegativeThinSpace$1,
  	NegativeVeryThinSpace: NegativeVeryThinSpace$1,
  	nequiv: nequiv$1,
  	nesear: nesear$1,
  	nesim: nesim$1,
  	NestedGreaterGreater: NestedGreaterGreater$1,
  	NestedLessLess: NestedLessLess$1,
  	NewLine: NewLine$1,
  	nexist: nexist$1,
  	nexists: nexists$1,
  	Nfr: Nfr$1,
  	nfr: nfr$1,
  	ngE: ngE$1,
  	nge: nge$1,
  	ngeq: ngeq$1,
  	ngeqq: ngeqq$1,
  	ngeqslant: ngeqslant$1,
  	nges: nges$1,
  	nGg: nGg$1,
  	ngsim: ngsim$1,
  	nGt: nGt$1,
  	ngt: ngt$1,
  	ngtr: ngtr$1,
  	nGtv: nGtv$1,
  	nharr: nharr$1,
  	nhArr: nhArr$1,
  	nhpar: nhpar$1,
  	ni: ni$1,
  	nis: nis$1,
  	nisd: nisd$1,
  	niv: niv$1,
  	NJcy: NJcy$1,
  	njcy: njcy$1,
  	nlarr: nlarr$1,
  	nlArr: nlArr$1,
  	nldr: nldr$1,
  	nlE: nlE$1,
  	nle: nle$1,
  	nleftarrow: nleftarrow$1,
  	nLeftarrow: nLeftarrow$1,
  	nleftrightarrow: nleftrightarrow$1,
  	nLeftrightarrow: nLeftrightarrow$1,
  	nleq: nleq$1,
  	nleqq: nleqq$1,
  	nleqslant: nleqslant$1,
  	nles: nles$1,
  	nless: nless$1,
  	nLl: nLl$1,
  	nlsim: nlsim$1,
  	nLt: nLt$1,
  	nlt: nlt$1,
  	nltri: nltri$1,
  	nltrie: nltrie$1,
  	nLtv: nLtv$1,
  	nmid: nmid$1,
  	NoBreak: NoBreak$1,
  	NonBreakingSpace: NonBreakingSpace$1,
  	nopf: nopf$1,
  	Nopf: Nopf$1,
  	Not: Not$1,
  	not: not$2,
  	NotCongruent: NotCongruent$1,
  	NotCupCap: NotCupCap$1,
  	NotDoubleVerticalBar: NotDoubleVerticalBar$1,
  	NotElement: NotElement$1,
  	NotEqual: NotEqual$1,
  	NotEqualTilde: NotEqualTilde$1,
  	NotExists: NotExists$1,
  	NotGreater: NotGreater$1,
  	NotGreaterEqual: NotGreaterEqual$1,
  	NotGreaterFullEqual: NotGreaterFullEqual$1,
  	NotGreaterGreater: NotGreaterGreater$1,
  	NotGreaterLess: NotGreaterLess$1,
  	NotGreaterSlantEqual: NotGreaterSlantEqual$1,
  	NotGreaterTilde: NotGreaterTilde$1,
  	NotHumpDownHump: NotHumpDownHump$1,
  	NotHumpEqual: NotHumpEqual$1,
  	notin: notin$1,
  	notindot: notindot$1,
  	notinE: notinE$1,
  	notinva: notinva$1,
  	notinvb: notinvb$1,
  	notinvc: notinvc$1,
  	NotLeftTriangleBar: NotLeftTriangleBar$1,
  	NotLeftTriangle: NotLeftTriangle$1,
  	NotLeftTriangleEqual: NotLeftTriangleEqual$1,
  	NotLess: NotLess$1,
  	NotLessEqual: NotLessEqual$1,
  	NotLessGreater: NotLessGreater$1,
  	NotLessLess: NotLessLess$1,
  	NotLessSlantEqual: NotLessSlantEqual$1,
  	NotLessTilde: NotLessTilde$1,
  	NotNestedGreaterGreater: NotNestedGreaterGreater$1,
  	NotNestedLessLess: NotNestedLessLess$1,
  	notni: notni$1,
  	notniva: notniva$1,
  	notnivb: notnivb$1,
  	notnivc: notnivc$1,
  	NotPrecedes: NotPrecedes$1,
  	NotPrecedesEqual: NotPrecedesEqual$1,
  	NotPrecedesSlantEqual: NotPrecedesSlantEqual$1,
  	NotReverseElement: NotReverseElement$1,
  	NotRightTriangleBar: NotRightTriangleBar$1,
  	NotRightTriangle: NotRightTriangle$1,
  	NotRightTriangleEqual: NotRightTriangleEqual$1,
  	NotSquareSubset: NotSquareSubset$1,
  	NotSquareSubsetEqual: NotSquareSubsetEqual$1,
  	NotSquareSuperset: NotSquareSuperset$1,
  	NotSquareSupersetEqual: NotSquareSupersetEqual$1,
  	NotSubset: NotSubset$1,
  	NotSubsetEqual: NotSubsetEqual$1,
  	NotSucceeds: NotSucceeds$1,
  	NotSucceedsEqual: NotSucceedsEqual$1,
  	NotSucceedsSlantEqual: NotSucceedsSlantEqual$1,
  	NotSucceedsTilde: NotSucceedsTilde$1,
  	NotSuperset: NotSuperset$1,
  	NotSupersetEqual: NotSupersetEqual$1,
  	NotTilde: NotTilde$1,
  	NotTildeEqual: NotTildeEqual$1,
  	NotTildeFullEqual: NotTildeFullEqual$1,
  	NotTildeTilde: NotTildeTilde$1,
  	NotVerticalBar: NotVerticalBar$1,
  	nparallel: nparallel$1,
  	npar: npar$1,
  	nparsl: nparsl$1,
  	npart: npart$1,
  	npolint: npolint$1,
  	npr: npr$1,
  	nprcue: nprcue$1,
  	nprec: nprec$1,
  	npreceq: npreceq$1,
  	npre: npre$1,
  	nrarrc: nrarrc$1,
  	nrarr: nrarr$1,
  	nrArr: nrArr$1,
  	nrarrw: nrarrw$1,
  	nrightarrow: nrightarrow$1,
  	nRightarrow: nRightarrow$1,
  	nrtri: nrtri$1,
  	nrtrie: nrtrie$1,
  	nsc: nsc$1,
  	nsccue: nsccue$1,
  	nsce: nsce$1,
  	Nscr: Nscr$1,
  	nscr: nscr$1,
  	nshortmid: nshortmid$1,
  	nshortparallel: nshortparallel$1,
  	nsim: nsim$1,
  	nsime: nsime$1,
  	nsimeq: nsimeq$1,
  	nsmid: nsmid$1,
  	nspar: nspar$1,
  	nsqsube: nsqsube$1,
  	nsqsupe: nsqsupe$1,
  	nsub: nsub$1,
  	nsubE: nsubE$1,
  	nsube: nsube$1,
  	nsubset: nsubset$1,
  	nsubseteq: nsubseteq$1,
  	nsubseteqq: nsubseteqq$1,
  	nsucc: nsucc$1,
  	nsucceq: nsucceq$1,
  	nsup: nsup$1,
  	nsupE: nsupE$1,
  	nsupe: nsupe$1,
  	nsupset: nsupset$1,
  	nsupseteq: nsupseteq$1,
  	nsupseteqq: nsupseteqq$1,
  	ntgl: ntgl$1,
  	Ntilde: Ntilde$2,
  	ntilde: ntilde$2,
  	ntlg: ntlg$1,
  	ntriangleleft: ntriangleleft$1,
  	ntrianglelefteq: ntrianglelefteq$1,
  	ntriangleright: ntriangleright$1,
  	ntrianglerighteq: ntrianglerighteq$1,
  	Nu: Nu$1,
  	nu: nu$1,
  	num: num$1,
  	numero: numero$1,
  	numsp: numsp$1,
  	nvap: nvap$1,
  	nvdash: nvdash$1,
  	nvDash: nvDash$1,
  	nVdash: nVdash$1,
  	nVDash: nVDash$1,
  	nvge: nvge$1,
  	nvgt: nvgt$1,
  	nvHarr: nvHarr$1,
  	nvinfin: nvinfin$1,
  	nvlArr: nvlArr$1,
  	nvle: nvle$1,
  	nvlt: nvlt$1,
  	nvltrie: nvltrie$1,
  	nvrArr: nvrArr$1,
  	nvrtrie: nvrtrie$1,
  	nvsim: nvsim$1,
  	nwarhk: nwarhk$1,
  	nwarr: nwarr$1,
  	nwArr: nwArr$1,
  	nwarrow: nwarrow$1,
  	nwnear: nwnear$1,
  	Oacute: Oacute$2,
  	oacute: oacute$2,
  	oast: oast$1,
  	Ocirc: Ocirc$2,
  	ocirc: ocirc$2,
  	ocir: ocir$1,
  	Ocy: Ocy$1,
  	ocy: ocy$1,
  	odash: odash$1,
  	Odblac: Odblac$1,
  	odblac: odblac$1,
  	odiv: odiv$1,
  	odot: odot$1,
  	odsold: odsold$1,
  	OElig: OElig$1,
  	oelig: oelig$1,
  	ofcir: ofcir$1,
  	Ofr: Ofr$1,
  	ofr: ofr$1,
  	ogon: ogon$1,
  	Ograve: Ograve$2,
  	ograve: ograve$2,
  	ogt: ogt$1,
  	ohbar: ohbar$1,
  	ohm: ohm$1,
  	oint: oint$1,
  	olarr: olarr$1,
  	olcir: olcir$1,
  	olcross: olcross$1,
  	oline: oline$1,
  	olt: olt$1,
  	Omacr: Omacr$1,
  	omacr: omacr$1,
  	Omega: Omega$1,
  	omega: omega$1,
  	Omicron: Omicron$1,
  	omicron: omicron$1,
  	omid: omid$1,
  	ominus: ominus$1,
  	Oopf: Oopf$1,
  	oopf: oopf$1,
  	opar: opar$1,
  	OpenCurlyDoubleQuote: OpenCurlyDoubleQuote$1,
  	OpenCurlyQuote: OpenCurlyQuote$1,
  	operp: operp$1,
  	oplus: oplus$1,
  	orarr: orarr$1,
  	Or: Or$1,
  	or: or$1,
  	ord: ord$1,
  	order: order$1,
  	orderof: orderof$1,
  	ordf: ordf$2,
  	ordm: ordm$2,
  	origof: origof$1,
  	oror: oror$1,
  	orslope: orslope$1,
  	orv: orv$1,
  	oS: oS$1,
  	Oscr: Oscr$1,
  	oscr: oscr$1,
  	Oslash: Oslash$2,
  	oslash: oslash$2,
  	osol: osol$1,
  	Otilde: Otilde$2,
  	otilde: otilde$2,
  	otimesas: otimesas$1,
  	Otimes: Otimes$1,
  	otimes: otimes$1,
  	Ouml: Ouml$2,
  	ouml: ouml$2,
  	ovbar: ovbar$1,
  	OverBar: OverBar$1,
  	OverBrace: OverBrace$1,
  	OverBracket: OverBracket$1,
  	OverParenthesis: OverParenthesis$1,
  	para: para$2,
  	parallel: parallel$1,
  	par: par$1,
  	parsim: parsim$1,
  	parsl: parsl$1,
  	part: part$1,
  	PartialD: PartialD$1,
  	Pcy: Pcy$1,
  	pcy: pcy$1,
  	percnt: percnt$1,
  	period: period$1,
  	permil: permil$1,
  	perp: perp$1,
  	pertenk: pertenk$1,
  	Pfr: Pfr$1,
  	pfr: pfr$1,
  	Phi: Phi$1,
  	phi: phi$1,
  	phiv: phiv$1,
  	phmmat: phmmat$1,
  	phone: phone$1,
  	Pi: Pi$1,
  	pi: pi$1,
  	pitchfork: pitchfork$1,
  	piv: piv$1,
  	planck: planck$1,
  	planckh: planckh$1,
  	plankv: plankv$1,
  	plusacir: plusacir$1,
  	plusb: plusb$1,
  	pluscir: pluscir$1,
  	plus: plus$1,
  	plusdo: plusdo$1,
  	plusdu: plusdu$1,
  	pluse: pluse$1,
  	PlusMinus: PlusMinus$1,
  	plusmn: plusmn$2,
  	plussim: plussim$1,
  	plustwo: plustwo$1,
  	pm: pm$1,
  	Poincareplane: Poincareplane$1,
  	pointint: pointint$1,
  	popf: popf$1,
  	Popf: Popf$1,
  	pound: pound$2,
  	prap: prap$1,
  	Pr: Pr$1,
  	pr: pr$1,
  	prcue: prcue$1,
  	precapprox: precapprox$1,
  	prec: prec$1,
  	preccurlyeq: preccurlyeq$1,
  	Precedes: Precedes$1,
  	PrecedesEqual: PrecedesEqual$1,
  	PrecedesSlantEqual: PrecedesSlantEqual$1,
  	PrecedesTilde: PrecedesTilde$1,
  	preceq: preceq$1,
  	precnapprox: precnapprox$1,
  	precneqq: precneqq$1,
  	precnsim: precnsim$1,
  	pre: pre$1,
  	prE: prE$1,
  	precsim: precsim$1,
  	prime: prime$1,
  	Prime: Prime$1,
  	primes: primes$1,
  	prnap: prnap$1,
  	prnE: prnE$1,
  	prnsim: prnsim$1,
  	prod: prod$1,
  	Product: Product$1,
  	profalar: profalar$1,
  	profline: profline$1,
  	profsurf: profsurf$1,
  	prop: prop$1,
  	Proportional: Proportional$1,
  	Proportion: Proportion$1,
  	propto: propto$1,
  	prsim: prsim$1,
  	prurel: prurel$1,
  	Pscr: Pscr$1,
  	pscr: pscr$1,
  	Psi: Psi$1,
  	psi: psi$1,
  	puncsp: puncsp$1,
  	Qfr: Qfr$1,
  	qfr: qfr$1,
  	qint: qint$1,
  	qopf: qopf$1,
  	Qopf: Qopf$1,
  	qprime: qprime$1,
  	Qscr: Qscr$1,
  	qscr: qscr$1,
  	quaternions: quaternions$1,
  	quatint: quatint$1,
  	quest: quest$1,
  	questeq: questeq$1,
  	quot: quot$3,
  	QUOT: QUOT$2,
  	rAarr: rAarr$1,
  	race: race$1,
  	Racute: Racute$1,
  	racute: racute$1,
  	radic: radic$1,
  	raemptyv: raemptyv$1,
  	rang: rang$1,
  	Rang: Rang$1,
  	rangd: rangd$1,
  	range: range$1,
  	rangle: rangle$1,
  	raquo: raquo$2,
  	rarrap: rarrap$1,
  	rarrb: rarrb$1,
  	rarrbfs: rarrbfs$1,
  	rarrc: rarrc$1,
  	rarr: rarr$1,
  	Rarr: Rarr$1,
  	rArr: rArr$1,
  	rarrfs: rarrfs$1,
  	rarrhk: rarrhk$1,
  	rarrlp: rarrlp$1,
  	rarrpl: rarrpl$1,
  	rarrsim: rarrsim$1,
  	Rarrtl: Rarrtl$1,
  	rarrtl: rarrtl$1,
  	rarrw: rarrw$1,
  	ratail: ratail$1,
  	rAtail: rAtail$1,
  	ratio: ratio$1,
  	rationals: rationals$1,
  	rbarr: rbarr$1,
  	rBarr: rBarr$1,
  	RBarr: RBarr$1,
  	rbbrk: rbbrk$1,
  	rbrace: rbrace$1,
  	rbrack: rbrack$1,
  	rbrke: rbrke$1,
  	rbrksld: rbrksld$1,
  	rbrkslu: rbrkslu$1,
  	Rcaron: Rcaron$1,
  	rcaron: rcaron$1,
  	Rcedil: Rcedil$1,
  	rcedil: rcedil$1,
  	rceil: rceil$1,
  	rcub: rcub$1,
  	Rcy: Rcy$1,
  	rcy: rcy$1,
  	rdca: rdca$1,
  	rdldhar: rdldhar$1,
  	rdquo: rdquo$1,
  	rdquor: rdquor$1,
  	rdsh: rdsh$1,
  	real: real$1,
  	realine: realine$1,
  	realpart: realpart$1,
  	reals: reals$1,
  	Re: Re$1,
  	rect: rect$1,
  	reg: reg$2,
  	REG: REG$2,
  	ReverseElement: ReverseElement$1,
  	ReverseEquilibrium: ReverseEquilibrium$1,
  	ReverseUpEquilibrium: ReverseUpEquilibrium$1,
  	rfisht: rfisht$1,
  	rfloor: rfloor$1,
  	rfr: rfr$1,
  	Rfr: Rfr$1,
  	rHar: rHar$1,
  	rhard: rhard$1,
  	rharu: rharu$1,
  	rharul: rharul$1,
  	Rho: Rho$1,
  	rho: rho$1,
  	rhov: rhov$1,
  	RightAngleBracket: RightAngleBracket$1,
  	RightArrowBar: RightArrowBar$1,
  	rightarrow: rightarrow$1,
  	RightArrow: RightArrow$1,
  	Rightarrow: Rightarrow$1,
  	RightArrowLeftArrow: RightArrowLeftArrow$1,
  	rightarrowtail: rightarrowtail$1,
  	RightCeiling: RightCeiling$1,
  	RightDoubleBracket: RightDoubleBracket$1,
  	RightDownTeeVector: RightDownTeeVector$1,
  	RightDownVectorBar: RightDownVectorBar$1,
  	RightDownVector: RightDownVector$1,
  	RightFloor: RightFloor$1,
  	rightharpoondown: rightharpoondown$1,
  	rightharpoonup: rightharpoonup$1,
  	rightleftarrows: rightleftarrows$1,
  	rightleftharpoons: rightleftharpoons$1,
  	rightrightarrows: rightrightarrows$1,
  	rightsquigarrow: rightsquigarrow$1,
  	RightTeeArrow: RightTeeArrow$1,
  	RightTee: RightTee$1,
  	RightTeeVector: RightTeeVector$1,
  	rightthreetimes: rightthreetimes$1,
  	RightTriangleBar: RightTriangleBar$1,
  	RightTriangle: RightTriangle$1,
  	RightTriangleEqual: RightTriangleEqual$1,
  	RightUpDownVector: RightUpDownVector$1,
  	RightUpTeeVector: RightUpTeeVector$1,
  	RightUpVectorBar: RightUpVectorBar$1,
  	RightUpVector: RightUpVector$1,
  	RightVectorBar: RightVectorBar$1,
  	RightVector: RightVector$1,
  	ring: ring$1,
  	risingdotseq: risingdotseq$1,
  	rlarr: rlarr$1,
  	rlhar: rlhar$1,
  	rlm: rlm$1,
  	rmoustache: rmoustache$1,
  	rmoust: rmoust$1,
  	rnmid: rnmid$1,
  	roang: roang$1,
  	roarr: roarr$1,
  	robrk: robrk$1,
  	ropar: ropar$1,
  	ropf: ropf$1,
  	Ropf: Ropf$1,
  	roplus: roplus$1,
  	rotimes: rotimes$1,
  	RoundImplies: RoundImplies$1,
  	rpar: rpar$1,
  	rpargt: rpargt$1,
  	rppolint: rppolint$1,
  	rrarr: rrarr$1,
  	Rrightarrow: Rrightarrow$1,
  	rsaquo: rsaquo$1,
  	rscr: rscr$1,
  	Rscr: Rscr$1,
  	rsh: rsh$1,
  	Rsh: Rsh$1,
  	rsqb: rsqb$1,
  	rsquo: rsquo$1,
  	rsquor: rsquor$1,
  	rthree: rthree$1,
  	rtimes: rtimes$1,
  	rtri: rtri$1,
  	rtrie: rtrie$1,
  	rtrif: rtrif$1,
  	rtriltri: rtriltri$1,
  	RuleDelayed: RuleDelayed$1,
  	ruluhar: ruluhar$1,
  	rx: rx$1,
  	Sacute: Sacute$1,
  	sacute: sacute$1,
  	sbquo: sbquo$1,
  	scap: scap$1,
  	Scaron: Scaron$1,
  	scaron: scaron$1,
  	Sc: Sc$1,
  	sc: sc$1,
  	sccue: sccue$1,
  	sce: sce$1,
  	scE: scE$1,
  	Scedil: Scedil$1,
  	scedil: scedil$1,
  	Scirc: Scirc$1,
  	scirc: scirc$1,
  	scnap: scnap$1,
  	scnE: scnE$1,
  	scnsim: scnsim$1,
  	scpolint: scpolint$1,
  	scsim: scsim$1,
  	Scy: Scy$1,
  	scy: scy$1,
  	sdotb: sdotb$1,
  	sdot: sdot$1,
  	sdote: sdote$1,
  	searhk: searhk$1,
  	searr: searr$1,
  	seArr: seArr$1,
  	searrow: searrow$1,
  	sect: sect$2,
  	semi: semi$1,
  	seswar: seswar$1,
  	setminus: setminus$1,
  	setmn: setmn$1,
  	sext: sext$1,
  	Sfr: Sfr$1,
  	sfr: sfr$1,
  	sfrown: sfrown$1,
  	sharp: sharp$1,
  	SHCHcy: SHCHcy$1,
  	shchcy: shchcy$1,
  	SHcy: SHcy$1,
  	shcy: shcy$1,
  	ShortDownArrow: ShortDownArrow$1,
  	ShortLeftArrow: ShortLeftArrow$1,
  	shortmid: shortmid$1,
  	shortparallel: shortparallel$1,
  	ShortRightArrow: ShortRightArrow$1,
  	ShortUpArrow: ShortUpArrow$1,
  	shy: shy$2,
  	Sigma: Sigma$1,
  	sigma: sigma$1,
  	sigmaf: sigmaf$1,
  	sigmav: sigmav$1,
  	sim: sim$1,
  	simdot: simdot$1,
  	sime: sime$1,
  	simeq: simeq$1,
  	simg: simg$1,
  	simgE: simgE$1,
  	siml: siml$1,
  	simlE: simlE$1,
  	simne: simne$1,
  	simplus: simplus$1,
  	simrarr: simrarr$1,
  	slarr: slarr$1,
  	SmallCircle: SmallCircle$1,
  	smallsetminus: smallsetminus$1,
  	smashp: smashp$1,
  	smeparsl: smeparsl$1,
  	smid: smid$1,
  	smile: smile$1,
  	smt: smt$1,
  	smte: smte$1,
  	smtes: smtes$1,
  	SOFTcy: SOFTcy$1,
  	softcy: softcy$1,
  	solbar: solbar$1,
  	solb: solb$1,
  	sol: sol$1,
  	Sopf: Sopf$1,
  	sopf: sopf$1,
  	spades: spades$1,
  	spadesuit: spadesuit$1,
  	spar: spar$1,
  	sqcap: sqcap$1,
  	sqcaps: sqcaps$1,
  	sqcup: sqcup$1,
  	sqcups: sqcups$1,
  	Sqrt: Sqrt$1,
  	sqsub: sqsub$1,
  	sqsube: sqsube$1,
  	sqsubset: sqsubset$1,
  	sqsubseteq: sqsubseteq$1,
  	sqsup: sqsup$1,
  	sqsupe: sqsupe$1,
  	sqsupset: sqsupset$1,
  	sqsupseteq: sqsupseteq$1,
  	square: square$1,
  	Square: Square$1,
  	SquareIntersection: SquareIntersection$1,
  	SquareSubset: SquareSubset$1,
  	SquareSubsetEqual: SquareSubsetEqual$1,
  	SquareSuperset: SquareSuperset$1,
  	SquareSupersetEqual: SquareSupersetEqual$1,
  	SquareUnion: SquareUnion$1,
  	squarf: squarf$1,
  	squ: squ$1,
  	squf: squf$1,
  	srarr: srarr$1,
  	Sscr: Sscr$1,
  	sscr: sscr$1,
  	ssetmn: ssetmn$1,
  	ssmile: ssmile$1,
  	sstarf: sstarf$1,
  	Star: Star$1,
  	star: star$1,
  	starf: starf$1,
  	straightepsilon: straightepsilon$1,
  	straightphi: straightphi$1,
  	strns: strns$1,
  	sub: sub$1,
  	Sub: Sub$1,
  	subdot: subdot$1,
  	subE: subE$1,
  	sube: sube$1,
  	subedot: subedot$1,
  	submult: submult$1,
  	subnE: subnE$1,
  	subne: subne$1,
  	subplus: subplus$1,
  	subrarr: subrarr$1,
  	subset: subset$1,
  	Subset: Subset$1,
  	subseteq: subseteq$1,
  	subseteqq: subseteqq$1,
  	SubsetEqual: SubsetEqual$1,
  	subsetneq: subsetneq$1,
  	subsetneqq: subsetneqq$1,
  	subsim: subsim$1,
  	subsub: subsub$1,
  	subsup: subsup$1,
  	succapprox: succapprox$1,
  	succ: succ$1,
  	succcurlyeq: succcurlyeq$1,
  	Succeeds: Succeeds$1,
  	SucceedsEqual: SucceedsEqual$1,
  	SucceedsSlantEqual: SucceedsSlantEqual$1,
  	SucceedsTilde: SucceedsTilde$1,
  	succeq: succeq$1,
  	succnapprox: succnapprox$1,
  	succneqq: succneqq$1,
  	succnsim: succnsim$1,
  	succsim: succsim$1,
  	SuchThat: SuchThat$1,
  	sum: sum$1,
  	Sum: Sum$1,
  	sung: sung$1,
  	sup1: sup1$2,
  	sup2: sup2$2,
  	sup3: sup3$2,
  	sup: sup$1,
  	Sup: Sup$1,
  	supdot: supdot$1,
  	supdsub: supdsub$1,
  	supE: supE$1,
  	supe: supe$1,
  	supedot: supedot$1,
  	Superset: Superset$1,
  	SupersetEqual: SupersetEqual$1,
  	suphsol: suphsol$1,
  	suphsub: suphsub$1,
  	suplarr: suplarr$1,
  	supmult: supmult$1,
  	supnE: supnE$1,
  	supne: supne$1,
  	supplus: supplus$1,
  	supset: supset$1,
  	Supset: Supset$1,
  	supseteq: supseteq$1,
  	supseteqq: supseteqq$1,
  	supsetneq: supsetneq$1,
  	supsetneqq: supsetneqq$1,
  	supsim: supsim$1,
  	supsub: supsub$1,
  	supsup: supsup$1,
  	swarhk: swarhk$1,
  	swarr: swarr$1,
  	swArr: swArr$1,
  	swarrow: swarrow$1,
  	swnwar: swnwar$1,
  	szlig: szlig$2,
  	Tab: Tab$1,
  	target: target$1,
  	Tau: Tau$1,
  	tau: tau$1,
  	tbrk: tbrk$1,
  	Tcaron: Tcaron$1,
  	tcaron: tcaron$1,
  	Tcedil: Tcedil$1,
  	tcedil: tcedil$1,
  	Tcy: Tcy$1,
  	tcy: tcy$1,
  	tdot: tdot$1,
  	telrec: telrec$1,
  	Tfr: Tfr$1,
  	tfr: tfr$1,
  	there4: there4$1,
  	therefore: therefore$1,
  	Therefore: Therefore$1,
  	Theta: Theta$1,
  	theta: theta$1,
  	thetasym: thetasym$1,
  	thetav: thetav$1,
  	thickapprox: thickapprox$1,
  	thicksim: thicksim$1,
  	ThickSpace: ThickSpace$1,
  	ThinSpace: ThinSpace$1,
  	thinsp: thinsp$1,
  	thkap: thkap$1,
  	thksim: thksim$1,
  	THORN: THORN$2,
  	thorn: thorn$2,
  	tilde: tilde$1,
  	Tilde: Tilde$1,
  	TildeEqual: TildeEqual$1,
  	TildeFullEqual: TildeFullEqual$1,
  	TildeTilde: TildeTilde$1,
  	timesbar: timesbar$1,
  	timesb: timesb$1,
  	times: times$2,
  	timesd: timesd$1,
  	tint: tint$1,
  	toea: toea$1,
  	topbot: topbot$1,
  	topcir: topcir$1,
  	top: top$1,
  	Topf: Topf$1,
  	topf: topf$1,
  	topfork: topfork$1,
  	tosa: tosa$1,
  	tprime: tprime$1,
  	trade: trade$1,
  	TRADE: TRADE$1,
  	triangle: triangle$1,
  	triangledown: triangledown$1,
  	triangleleft: triangleleft$1,
  	trianglelefteq: trianglelefteq$1,
  	triangleq: triangleq$1,
  	triangleright: triangleright$1,
  	trianglerighteq: trianglerighteq$1,
  	tridot: tridot$1,
  	trie: trie$1,
  	triminus: triminus$1,
  	TripleDot: TripleDot$1,
  	triplus: triplus$1,
  	trisb: trisb$1,
  	tritime: tritime$1,
  	trpezium: trpezium$1,
  	Tscr: Tscr$1,
  	tscr: tscr$1,
  	TScy: TScy$1,
  	tscy: tscy$1,
  	TSHcy: TSHcy$1,
  	tshcy: tshcy$1,
  	Tstrok: Tstrok$1,
  	tstrok: tstrok$1,
  	twixt: twixt$1,
  	twoheadleftarrow: twoheadleftarrow$1,
  	twoheadrightarrow: twoheadrightarrow$1,
  	Uacute: Uacute$2,
  	uacute: uacute$2,
  	uarr: uarr$1,
  	Uarr: Uarr$1,
  	uArr: uArr$1,
  	Uarrocir: Uarrocir$1,
  	Ubrcy: Ubrcy$1,
  	ubrcy: ubrcy$1,
  	Ubreve: Ubreve$1,
  	ubreve: ubreve$1,
  	Ucirc: Ucirc$2,
  	ucirc: ucirc$2,
  	Ucy: Ucy$1,
  	ucy: ucy$1,
  	udarr: udarr$1,
  	Udblac: Udblac$1,
  	udblac: udblac$1,
  	udhar: udhar$1,
  	ufisht: ufisht$1,
  	Ufr: Ufr$1,
  	ufr: ufr$1,
  	Ugrave: Ugrave$2,
  	ugrave: ugrave$2,
  	uHar: uHar$1,
  	uharl: uharl$1,
  	uharr: uharr$1,
  	uhblk: uhblk$1,
  	ulcorn: ulcorn$1,
  	ulcorner: ulcorner$1,
  	ulcrop: ulcrop$1,
  	ultri: ultri$1,
  	Umacr: Umacr$1,
  	umacr: umacr$1,
  	uml: uml$2,
  	UnderBar: UnderBar$1,
  	UnderBrace: UnderBrace$1,
  	UnderBracket: UnderBracket$1,
  	UnderParenthesis: UnderParenthesis$1,
  	Union: Union$1,
  	UnionPlus: UnionPlus$1,
  	Uogon: Uogon$1,
  	uogon: uogon$1,
  	Uopf: Uopf$1,
  	uopf: uopf$1,
  	UpArrowBar: UpArrowBar$1,
  	uparrow: uparrow$1,
  	UpArrow: UpArrow$1,
  	Uparrow: Uparrow$1,
  	UpArrowDownArrow: UpArrowDownArrow$1,
  	updownarrow: updownarrow$1,
  	UpDownArrow: UpDownArrow$1,
  	Updownarrow: Updownarrow$1,
  	UpEquilibrium: UpEquilibrium$1,
  	upharpoonleft: upharpoonleft$1,
  	upharpoonright: upharpoonright$1,
  	uplus: uplus$1,
  	UpperLeftArrow: UpperLeftArrow$1,
  	UpperRightArrow: UpperRightArrow$1,
  	upsi: upsi$1,
  	Upsi: Upsi$1,
  	upsih: upsih$1,
  	Upsilon: Upsilon$1,
  	upsilon: upsilon$1,
  	UpTeeArrow: UpTeeArrow$1,
  	UpTee: UpTee$1,
  	upuparrows: upuparrows$1,
  	urcorn: urcorn$1,
  	urcorner: urcorner$1,
  	urcrop: urcrop$1,
  	Uring: Uring$1,
  	uring: uring$1,
  	urtri: urtri$1,
  	Uscr: Uscr$1,
  	uscr: uscr$1,
  	utdot: utdot$1,
  	Utilde: Utilde$1,
  	utilde: utilde$1,
  	utri: utri$1,
  	utrif: utrif$1,
  	uuarr: uuarr$1,
  	Uuml: Uuml$2,
  	uuml: uuml$2,
  	uwangle: uwangle$1,
  	vangrt: vangrt$1,
  	varepsilon: varepsilon$1,
  	varkappa: varkappa$1,
  	varnothing: varnothing$1,
  	varphi: varphi$1,
  	varpi: varpi$1,
  	varpropto: varpropto$1,
  	varr: varr$1,
  	vArr: vArr$1,
  	varrho: varrho$1,
  	varsigma: varsigma$1,
  	varsubsetneq: varsubsetneq$1,
  	varsubsetneqq: varsubsetneqq$1,
  	varsupsetneq: varsupsetneq$1,
  	varsupsetneqq: varsupsetneqq$1,
  	vartheta: vartheta$1,
  	vartriangleleft: vartriangleleft$1,
  	vartriangleright: vartriangleright$1,
  	vBar: vBar$1,
  	Vbar: Vbar$1,
  	vBarv: vBarv$1,
  	Vcy: Vcy$1,
  	vcy: vcy$1,
  	vdash: vdash$1,
  	vDash: vDash$1,
  	Vdash: Vdash$1,
  	VDash: VDash$1,
  	Vdashl: Vdashl$1,
  	veebar: veebar$1,
  	vee: vee$1,
  	Vee: Vee$1,
  	veeeq: veeeq$1,
  	vellip: vellip$1,
  	verbar: verbar$1,
  	Verbar: Verbar$1,
  	vert: vert$1,
  	Vert: Vert$1,
  	VerticalBar: VerticalBar$1,
  	VerticalLine: VerticalLine$1,
  	VerticalSeparator: VerticalSeparator$1,
  	VerticalTilde: VerticalTilde$1,
  	VeryThinSpace: VeryThinSpace$1,
  	Vfr: Vfr$1,
  	vfr: vfr$1,
  	vltri: vltri$1,
  	vnsub: vnsub$1,
  	vnsup: vnsup$1,
  	Vopf: Vopf$1,
  	vopf: vopf$1,
  	vprop: vprop$1,
  	vrtri: vrtri$1,
  	Vscr: Vscr$1,
  	vscr: vscr$1,
  	vsubnE: vsubnE$1,
  	vsubne: vsubne$1,
  	vsupnE: vsupnE$1,
  	vsupne: vsupne$1,
  	Vvdash: Vvdash$1,
  	vzigzag: vzigzag$1,
  	Wcirc: Wcirc$1,
  	wcirc: wcirc$1,
  	wedbar: wedbar$1,
  	wedge: wedge$1,
  	Wedge: Wedge$1,
  	wedgeq: wedgeq$1,
  	weierp: weierp$1,
  	Wfr: Wfr$1,
  	wfr: wfr$1,
  	Wopf: Wopf$1,
  	wopf: wopf$1,
  	wp: wp$1,
  	wr: wr$1,
  	wreath: wreath$1,
  	Wscr: Wscr$1,
  	wscr: wscr$1,
  	xcap: xcap$1,
  	xcirc: xcirc$1,
  	xcup: xcup$1,
  	xdtri: xdtri$1,
  	Xfr: Xfr$1,
  	xfr: xfr$1,
  	xharr: xharr$1,
  	xhArr: xhArr$1,
  	Xi: Xi$1,
  	xi: xi$1,
  	xlarr: xlarr$1,
  	xlArr: xlArr$1,
  	xmap: xmap$1,
  	xnis: xnis$1,
  	xodot: xodot$1,
  	Xopf: Xopf$1,
  	xopf: xopf$1,
  	xoplus: xoplus$1,
  	xotime: xotime$1,
  	xrarr: xrarr$1,
  	xrArr: xrArr$1,
  	Xscr: Xscr$1,
  	xscr: xscr$1,
  	xsqcup: xsqcup$1,
  	xuplus: xuplus$1,
  	xutri: xutri$1,
  	xvee: xvee$1,
  	xwedge: xwedge$1,
  	Yacute: Yacute$2,
  	yacute: yacute$2,
  	YAcy: YAcy$1,
  	yacy: yacy$1,
  	Ycirc: Ycirc$1,
  	ycirc: ycirc$1,
  	Ycy: Ycy$1,
  	ycy: ycy$1,
  	yen: yen$2,
  	Yfr: Yfr$1,
  	yfr: yfr$1,
  	YIcy: YIcy$1,
  	yicy: yicy$1,
  	Yopf: Yopf$1,
  	yopf: yopf$1,
  	Yscr: Yscr$1,
  	yscr: yscr$1,
  	YUcy: YUcy$1,
  	yucy: yucy$1,
  	yuml: yuml$2,
  	Yuml: Yuml$1,
  	Zacute: Zacute$1,
  	zacute: zacute$1,
  	Zcaron: Zcaron$1,
  	zcaron: zcaron$1,
  	Zcy: Zcy$1,
  	zcy: zcy$1,
  	Zdot: Zdot$1,
  	zdot: zdot$1,
  	zeetrf: zeetrf$1,
  	ZeroWidthSpace: ZeroWidthSpace$1,
  	Zeta: Zeta$1,
  	zeta: zeta$1,
  	zfr: zfr$1,
  	Zfr: Zfr$1,
  	ZHcy: ZHcy$1,
  	zhcy: zhcy$1,
  	zigrarr: zigrarr$1,
  	zopf: zopf$1,
  	Zopf: Zopf$1,
  	Zscr: Zscr$1,
  	zscr: zscr$1,
  	zwj: zwj$1,
  	zwnj: zwnj$1
  };

  var Aacute$3 = "Á";
  var aacute$3 = "á";
  var Acirc$3 = "Â";
  var acirc$3 = "â";
  var acute$3 = "´";
  var AElig$3 = "Æ";
  var aelig$3 = "æ";
  var Agrave$3 = "À";
  var agrave$3 = "à";
  var amp$4 = "&";
  var AMP$3 = "&";
  var Aring$3 = "Å";
  var aring$3 = "å";
  var Atilde$3 = "Ã";
  var atilde$3 = "ã";
  var Auml$3 = "Ä";
  var auml$3 = "ä";
  var brvbar$3 = "¦";
  var Ccedil$3 = "Ç";
  var ccedil$3 = "ç";
  var cedil$3 = "¸";
  var cent$3 = "¢";
  var copy$3 = "©";
  var COPY$3 = "©";
  var curren$3 = "¤";
  var deg$3 = "°";
  var divide$3 = "÷";
  var Eacute$3 = "É";
  var eacute$3 = "é";
  var Ecirc$3 = "Ê";
  var ecirc$3 = "ê";
  var Egrave$3 = "È";
  var egrave$3 = "è";
  var ETH$3 = "Ð";
  var eth$3 = "ð";
  var Euml$3 = "Ë";
  var euml$3 = "ë";
  var frac12$3 = "½";
  var frac14$3 = "¼";
  var frac34$3 = "¾";
  var gt$4 = ">";
  var GT$3 = ">";
  var Iacute$3 = "Í";
  var iacute$3 = "í";
  var Icirc$3 = "Î";
  var icirc$3 = "î";
  var iexcl$3 = "¡";
  var Igrave$3 = "Ì";
  var igrave$3 = "ì";
  var iquest$3 = "¿";
  var Iuml$3 = "Ï";
  var iuml$3 = "ï";
  var laquo$3 = "«";
  var lt$4 = "<";
  var LT$3 = "<";
  var macr$3 = "¯";
  var micro$3 = "µ";
  var middot$3 = "·";
  var nbsp$3 = " ";
  var not$3 = "¬";
  var Ntilde$3 = "Ñ";
  var ntilde$3 = "ñ";
  var Oacute$3 = "Ó";
  var oacute$3 = "ó";
  var Ocirc$3 = "Ô";
  var ocirc$3 = "ô";
  var Ograve$3 = "Ò";
  var ograve$3 = "ò";
  var ordf$3 = "ª";
  var ordm$3 = "º";
  var Oslash$3 = "Ø";
  var oslash$3 = "ø";
  var Otilde$3 = "Õ";
  var otilde$3 = "õ";
  var Ouml$3 = "Ö";
  var ouml$3 = "ö";
  var para$3 = "¶";
  var plusmn$3 = "±";
  var pound$3 = "£";
  var quot$4 = "\"";
  var QUOT$3 = "\"";
  var raquo$3 = "»";
  var reg$3 = "®";
  var REG$3 = "®";
  var sect$3 = "§";
  var shy$3 = "­";
  var sup1$3 = "¹";
  var sup2$3 = "²";
  var sup3$3 = "³";
  var szlig$3 = "ß";
  var THORN$3 = "Þ";
  var thorn$3 = "þ";
  var times$3 = "×";
  var Uacute$3 = "Ú";
  var uacute$3 = "ú";
  var Ucirc$3 = "Û";
  var ucirc$3 = "û";
  var Ugrave$3 = "Ù";
  var ugrave$3 = "ù";
  var uml$3 = "¨";
  var Uuml$3 = "Ü";
  var uuml$3 = "ü";
  var Yacute$3 = "Ý";
  var yacute$3 = "ý";
  var yen$3 = "¥";
  var yuml$3 = "ÿ";
  var require$$1$1 = {
  	Aacute: Aacute$3,
  	aacute: aacute$3,
  	Acirc: Acirc$3,
  	acirc: acirc$3,
  	acute: acute$3,
  	AElig: AElig$3,
  	aelig: aelig$3,
  	Agrave: Agrave$3,
  	agrave: agrave$3,
  	amp: amp$4,
  	AMP: AMP$3,
  	Aring: Aring$3,
  	aring: aring$3,
  	Atilde: Atilde$3,
  	atilde: atilde$3,
  	Auml: Auml$3,
  	auml: auml$3,
  	brvbar: brvbar$3,
  	Ccedil: Ccedil$3,
  	ccedil: ccedil$3,
  	cedil: cedil$3,
  	cent: cent$3,
  	copy: copy$3,
  	COPY: COPY$3,
  	curren: curren$3,
  	deg: deg$3,
  	divide: divide$3,
  	Eacute: Eacute$3,
  	eacute: eacute$3,
  	Ecirc: Ecirc$3,
  	ecirc: ecirc$3,
  	Egrave: Egrave$3,
  	egrave: egrave$3,
  	ETH: ETH$3,
  	eth: eth$3,
  	Euml: Euml$3,
  	euml: euml$3,
  	frac12: frac12$3,
  	frac14: frac14$3,
  	frac34: frac34$3,
  	gt: gt$4,
  	GT: GT$3,
  	Iacute: Iacute$3,
  	iacute: iacute$3,
  	Icirc: Icirc$3,
  	icirc: icirc$3,
  	iexcl: iexcl$3,
  	Igrave: Igrave$3,
  	igrave: igrave$3,
  	iquest: iquest$3,
  	Iuml: Iuml$3,
  	iuml: iuml$3,
  	laquo: laquo$3,
  	lt: lt$4,
  	LT: LT$3,
  	macr: macr$3,
  	micro: micro$3,
  	middot: middot$3,
  	nbsp: nbsp$3,
  	not: not$3,
  	Ntilde: Ntilde$3,
  	ntilde: ntilde$3,
  	Oacute: Oacute$3,
  	oacute: oacute$3,
  	Ocirc: Ocirc$3,
  	ocirc: ocirc$3,
  	Ograve: Ograve$3,
  	ograve: ograve$3,
  	ordf: ordf$3,
  	ordm: ordm$3,
  	Oslash: Oslash$3,
  	oslash: oslash$3,
  	Otilde: Otilde$3,
  	otilde: otilde$3,
  	Ouml: Ouml$3,
  	ouml: ouml$3,
  	para: para$3,
  	plusmn: plusmn$3,
  	pound: pound$3,
  	quot: quot$4,
  	QUOT: QUOT$3,
  	raquo: raquo$3,
  	reg: reg$3,
  	REG: REG$3,
  	sect: sect$3,
  	shy: shy$3,
  	sup1: sup1$3,
  	sup2: sup2$3,
  	sup3: sup3$3,
  	szlig: szlig$3,
  	THORN: THORN$3,
  	thorn: thorn$3,
  	times: times$3,
  	Uacute: Uacute$3,
  	uacute: uacute$3,
  	Ucirc: Ucirc$3,
  	ucirc: ucirc$3,
  	Ugrave: Ugrave$3,
  	ugrave: ugrave$3,
  	uml: uml$3,
  	Uuml: Uuml$3,
  	uuml: uuml$3,
  	Yacute: Yacute$3,
  	yacute: yacute$3,
  	yen: yen$3,
  	yuml: yuml$3
  };

  var amp$5 = "&";
  var apos$3 = "'";
  var gt$5 = ">";
  var lt$5 = "<";
  var quot$5 = "\"";
  var require$$0 = {
  	amp: amp$5,
  	apos: apos$3,
  	gt: gt$5,
  	lt: lt$5,
  	quot: quot$5
  };

  var require$$0$1 = {
  	"0": 65533,
  	"128": 8364,
  	"130": 8218,
  	"131": 402,
  	"132": 8222,
  	"133": 8230,
  	"134": 8224,
  	"135": 8225,
  	"136": 710,
  	"137": 8240,
  	"138": 352,
  	"139": 8249,
  	"140": 338,
  	"142": 381,
  	"145": 8216,
  	"146": 8217,
  	"147": 8220,
  	"148": 8221,
  	"149": 8226,
  	"150": 8211,
  	"151": 8212,
  	"152": 732,
  	"153": 8482,
  	"154": 353,
  	"155": 8250,
  	"156": 339,
  	"158": 382,
  	"159": 376
  };

  var decode_codepoint$1 = createCommonjsModule(function (module, exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var decode_json_1 = __importDefault(require$$0$1); // Modified version of https://github.com/mathiasbynens/he/blob/master/src/he.js#L94-L119


  function decodeCodePoint(codePoint) {
    if (codePoint >= 0xd800 && codePoint <= 0xdfff || codePoint > 0x10ffff) {
      return "\uFFFD";
    }

    if (codePoint in decode_json_1["default"]) {
      codePoint = decode_json_1["default"][codePoint];
    }

    var output = "";

    if (codePoint > 0xffff) {
      codePoint -= 0x10000;
      output += String.fromCharCode(codePoint >>> 10 & 0x3ff | 0xd800);
      codePoint = 0xdc00 | codePoint & 0x3ff;
    }

    output += String.fromCharCode(codePoint);
    return output;
  }

  exports["default"] = decodeCodePoint;
  });

  var decode = createCommonjsModule(function (module, exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.decodeHTML = exports.decodeHTMLStrict = exports.decodeXML = void 0;

  var entities_json_1 = __importDefault(require$$1);

  var legacy_json_1 = __importDefault(require$$1$1);

  var xml_json_1 = __importDefault(require$$0);

  var decode_codepoint_1 = __importDefault(decode_codepoint$1);

  exports.decodeXML = getStrictDecoder(xml_json_1["default"]);
  exports.decodeHTMLStrict = getStrictDecoder(entities_json_1["default"]);

  function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|");
    var replace = getReplacer(map);
    keys += "|#[xX][\\da-fA-F]+|#\\d+";
    var re = new RegExp("&(?:" + keys + ");", "g");
    return function (str) {
      return String(str).replace(re, replace);
    };
  }

  var sorter = function sorter(a, b) {
    return a < b ? 1 : -1;
  };

  exports.decodeHTML = function () {
    var legacy = Object.keys(legacy_json_1["default"]).sort(sorter);
    var keys = Object.keys(entities_json_1["default"]).sort(sorter);

    for (var i = 0, j = 0; i < keys.length; i++) {
      if (legacy[j] === keys[i]) {
        keys[i] += ";?";
        j++;
      } else {
        keys[i] += ";";
      }
    }

    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
    var replace = getReplacer(entities_json_1["default"]);

    function replacer(str) {
      if (str.substr(-1) !== ";") str += ";";
      return replace(str);
    } // TODO consider creating a merged map


    return function (str) {
      return String(str).replace(re, replacer);
    };
  }();

  function getReplacer(map) {
    return function replace(str) {
      if (str.charAt(1) === "#") {
        var secondChar = str.charAt(2);

        if (secondChar === "X" || secondChar === "x") {
          return decode_codepoint_1["default"](parseInt(str.substr(3), 16));
        }

        return decode_codepoint_1["default"](parseInt(str.substr(2), 10));
      }

      return map[str.slice(1, -1)];
    };
  }
  });

  var encode = createCommonjsModule(function (module, exports) {

  var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function (mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  };

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.escape = exports.encodeHTML = exports.encodeXML = void 0;

  var xml_json_1 = __importDefault(require$$0);

  var inverseXML = getInverseObj(xml_json_1["default"]);
  var xmlReplacer = getInverseReplacer(inverseXML);
  exports.encodeXML = getInverse(inverseXML, xmlReplacer);

  var entities_json_1 = __importDefault(require$$1);

  var inverseHTML = getInverseObj(entities_json_1["default"]);
  var htmlReplacer = getInverseReplacer(inverseHTML);
  exports.encodeHTML = getInverse(inverseHTML, htmlReplacer);

  function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function (inverse, name) {
      inverse[obj[name]] = "&" + name + ";";
      return inverse;
    }, {});
  }

  function getInverseReplacer(inverse) {
    var single = [];
    var multiple = [];

    for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
      var k = _a[_i];

      if (k.length === 1) {
        // Add value to single array
        single.push("\\" + k);
      } else {
        // Add value to multiple array
        multiple.push(k);
      }
    } // Add ranges to single characters.


    single.sort();

    for (var start = 0; start < single.length - 1; start++) {
      // Find the end of a run of characters
      var end = start;

      while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
        end += 1;
      }

      var count = 1 + end - start; // We want to replace at least three characters

      if (count < 3) continue;
      single.splice(start, count, single[start] + "-" + single[end]);
    }

    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
  }

  var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;

  function singleCharReplacer(c) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return "&#x" + c.codePointAt(0).toString(16).toUpperCase() + ";";
  }

  function getInverse(inverse, re) {
    return function (data) {
      return data.replace(re, function (name) {
        return inverse[name];
      }).replace(reNonASCII, singleCharReplacer);
    };
  }

  var reXmlChars = getInverseReplacer(inverseXML);

  function escape(data) {
    return data.replace(reXmlChars, singleCharReplacer).replace(reNonASCII, singleCharReplacer);
  }

  exports.escape = escape;
  });

  var lib$1 = createCommonjsModule(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escape = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;




  /**
   * Decodes a string with entities.
   *
   * @param data String to decode.
   * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
   */


  function decode$1(data, level) {
    return (!level || level <= 0 ? decode.decodeXML : decode.decodeHTML)(data);
  }

  exports.decode = decode$1;
  /**
   * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
   *
   * @param data String to decode.
   * @param level Optional level to decode at. 0 = XML, 1 = HTML. Default is 0.
   */

  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode.decodeXML : decode.decodeHTMLStrict)(data);
  }

  exports.decodeStrict = decodeStrict;
  /**
   * Encodes a string with entities.
   *
   * @param data String to encode.
   * @param level Optional level to encode at. 0 = XML, 1 = HTML. Default is 0.
   */

  function encode$1(data, level) {
    return (!level || level <= 0 ? encode.encodeXML : encode.encodeHTML)(data);
  }

  exports.encode = encode$1;

  var encode_2 = encode;

  Object.defineProperty(exports, "encodeXML", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeXML;
    }
  });
  Object.defineProperty(exports, "encodeHTML", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeHTML;
    }
  });
  Object.defineProperty(exports, "escape", {
    enumerable: true,
    get: function get() {
      return encode_2.escape;
    }
  }); // Legacy aliases

  Object.defineProperty(exports, "encodeHTML4", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeHTML;
    }
  });
  Object.defineProperty(exports, "encodeHTML5", {
    enumerable: true,
    get: function get() {
      return encode_2.encodeHTML;
    }
  });

  var decode_2 = decode;

  Object.defineProperty(exports, "decodeXML", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeXML;
    }
  });
  Object.defineProperty(exports, "decodeHTML", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTML;
    }
  });
  Object.defineProperty(exports, "decodeHTMLStrict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTMLStrict;
    }
  }); // Legacy aliases

  Object.defineProperty(exports, "decodeHTML4", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTML;
    }
  });
  Object.defineProperty(exports, "decodeHTML5", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTML;
    }
  });
  Object.defineProperty(exports, "decodeHTML4Strict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTMLStrict;
    }
  });
  Object.defineProperty(exports, "decodeHTML5Strict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeHTMLStrict;
    }
  });
  Object.defineProperty(exports, "decodeXMLStrict", {
    enumerable: true,
    get: function get() {
      return decode_2.decodeXML;
    }
  });
  });

  var elementNames = {
  	altglyph: "altGlyph",
  	altglyphdef: "altGlyphDef",
  	altglyphitem: "altGlyphItem",
  	animatecolor: "animateColor",
  	animatemotion: "animateMotion",
  	animatetransform: "animateTransform",
  	clippath: "clipPath",
  	feblend: "feBlend",
  	fecolormatrix: "feColorMatrix",
  	fecomponenttransfer: "feComponentTransfer",
  	fecomposite: "feComposite",
  	feconvolvematrix: "feConvolveMatrix",
  	fediffuselighting: "feDiffuseLighting",
  	fedisplacementmap: "feDisplacementMap",
  	fedistantlight: "feDistantLight",
  	fedropshadow: "feDropShadow",
  	feflood: "feFlood",
  	fefunca: "feFuncA",
  	fefuncb: "feFuncB",
  	fefuncg: "feFuncG",
  	fefuncr: "feFuncR",
  	fegaussianblur: "feGaussianBlur",
  	feimage: "feImage",
  	femerge: "feMerge",
  	femergenode: "feMergeNode",
  	femorphology: "feMorphology",
  	feoffset: "feOffset",
  	fepointlight: "fePointLight",
  	fespecularlighting: "feSpecularLighting",
  	fespotlight: "feSpotLight",
  	fetile: "feTile",
  	feturbulence: "feTurbulence",
  	foreignobject: "foreignObject",
  	glyphref: "glyphRef",
  	lineargradient: "linearGradient",
  	radialgradient: "radialGradient",
  	textpath: "textPath"
  };
  var attributeNames = {
  	definitionurl: "definitionURL",
  	attributename: "attributeName",
  	attributetype: "attributeType",
  	basefrequency: "baseFrequency",
  	baseprofile: "baseProfile",
  	calcmode: "calcMode",
  	clippathunits: "clipPathUnits",
  	diffuseconstant: "diffuseConstant",
  	edgemode: "edgeMode",
  	filterunits: "filterUnits",
  	glyphref: "glyphRef",
  	gradienttransform: "gradientTransform",
  	gradientunits: "gradientUnits",
  	kernelmatrix: "kernelMatrix",
  	kernelunitlength: "kernelUnitLength",
  	keypoints: "keyPoints",
  	keysplines: "keySplines",
  	keytimes: "keyTimes",
  	lengthadjust: "lengthAdjust",
  	limitingconeangle: "limitingConeAngle",
  	markerheight: "markerHeight",
  	markerunits: "markerUnits",
  	markerwidth: "markerWidth",
  	maskcontentunits: "maskContentUnits",
  	maskunits: "maskUnits",
  	numoctaves: "numOctaves",
  	pathlength: "pathLength",
  	patterncontentunits: "patternContentUnits",
  	patterntransform: "patternTransform",
  	patternunits: "patternUnits",
  	pointsatx: "pointsAtX",
  	pointsaty: "pointsAtY",
  	pointsatz: "pointsAtZ",
  	preservealpha: "preserveAlpha",
  	preserveaspectratio: "preserveAspectRatio",
  	primitiveunits: "primitiveUnits",
  	refx: "refX",
  	refy: "refY",
  	repeatcount: "repeatCount",
  	repeatdur: "repeatDur",
  	requiredextensions: "requiredExtensions",
  	requiredfeatures: "requiredFeatures",
  	specularconstant: "specularConstant",
  	specularexponent: "specularExponent",
  	spreadmethod: "spreadMethod",
  	startoffset: "startOffset",
  	stddeviation: "stdDeviation",
  	stitchtiles: "stitchTiles",
  	surfacescale: "surfaceScale",
  	systemlanguage: "systemLanguage",
  	tablevalues: "tableValues",
  	targetx: "targetX",
  	targety: "targetY",
  	textlength: "textLength",
  	viewbox: "viewBox",
  	viewtarget: "viewTarget",
  	xchannelselector: "xChannelSelector",
  	ychannelselector: "yChannelSelector",
  	zoomandpan: "zoomAndPan"
  };
  var foreignNames = {
  	elementNames: elementNames,
  	attributeNames: attributeNames
  };

  var domSerializer = createCommonjsModule(function (module) {
  /*
    Module dependencies
  */



  /* mixed-case SVG and MathML tags & attributes
     recognized by the HTML parser, see
     https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
  */




  foreignNames.elementNames.__proto__ = null;
  /* use as a simple dictionary */

  foreignNames.attributeNames.__proto__ = null;
  var unencodedElements = {
    __proto__: null,
    style: true,
    script: true,
    xmp: true,
    iframe: true,
    noembed: true,
    noframes: true,
    plaintext: true,
    noscript: true
  };
  /*
    Format attributes
  */

  function formatAttrs(attributes, opts) {
    if (!attributes) return;
    var output = '';
    var value; // Loop through the attributes

    for (var key in attributes) {
      value = attributes[key];

      if (output) {
        output += ' ';
      }

      if (opts.xmlMode === 'foreign') {
        /* fix up mixed-case attribute names */
        key = foreignNames.attributeNames[key] || key;
      }

      output += key;

      if (value !== null && value !== '' || opts.xmlMode) {
        output += '="' + (opts.decodeEntities ? lib$1.encodeXML(value) : value.replace(/\"/g, '&quot;')) + '"';
      }
    }

    return output;
  }
  /*
    Self-enclosing tags (stolen from node-htmlparser)
  */


  var singleTag = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };

  var render = module.exports = function (dom, opts) {
    if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
    opts = opts || {};
    var output = '';

    for (var i = 0; i < dom.length; i++) {
      var elem = dom[i];
      if (elem.type === 'root') output += render(elem.children, opts);else if (lib.isTag(elem)) output += renderTag(elem, opts);else if (elem.type === lib.Directive) output += renderDirective(elem);else if (elem.type === lib.Comment) output += renderComment(elem);else if (elem.type === lib.CDATA) output += renderCdata(elem);else output += renderText(elem, opts);
    }

    return output;
  };

  var foreignModeIntegrationPoints = ['mi', 'mo', 'mn', 'ms', 'mtext', 'annotation-xml', 'foreignObject', 'desc', 'title'];

  function renderTag(elem, opts) {
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === 'foreign') {
      /* fix up mixed-case element names */
      elem.name = foreignNames.elementNames[elem.name] || elem.name;
      /* exit foreign mode at integration points */

      if (elem.parent && foreignModeIntegrationPoints.indexOf(elem.parent.name) >= 0) opts = Object.assign({}, opts, {
        xmlMode: false
      });
    }

    if (!opts.xmlMode && ['svg', 'math'].indexOf(elem.name) >= 0) {
      opts = Object.assign({}, opts, {
        xmlMode: 'foreign'
      });
    }

    var tag = '<' + elem.name;
    var attribs = formatAttrs(elem.attribs, opts);

    if (attribs) {
      tag += ' ' + attribs;
    }

    if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
      tag += '/>';
    } else {
      tag += '>';

      if (elem.children) {
        tag += render(elem.children, opts);
      }

      if (!singleTag[elem.name] || opts.xmlMode) {
        tag += '</' + elem.name + '>';
      }
    }

    return tag;
  }

  function renderDirective(elem) {
    return '<' + elem.data + '>';
  }

  function renderText(elem, opts) {
    var data = elem.data || ''; // if entities weren't decoded, no need to encode them back

    if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
      data = lib$1.encodeXML(data);
    }

    return data;
  }

  function renderCdata(elem) {
    return '<![CDATA[' + elem.children[0].data + ']]>';
  }

  function renderComment(elem) {
    return '<!--' + elem.data + '-->';
  }
  });

  var isTag = domelementtype.isTag;

  var stringify = {
    getInnerHTML: getInnerHTML,
    getOuterHTML: domSerializer,
    getText: getText
  };

  function getInnerHTML(elem, opts) {
    return elem.children ? elem.children.map(function (elem) {
      return domSerializer(elem, opts);
    }).join("") : "";
  }

  function getText(elem) {
    if (Array.isArray(elem)) return elem.map(getText).join("");
    if (isTag(elem)) return elem.name === "br" ? "\n" : getText(elem.children);
    if (elem.type === domelementtype.CDATA) return getText(elem.children);
    if (elem.type === domelementtype.Text) return elem.data;
    return "";
  }

  var traversal = createCommonjsModule(function (module, exports) {
  var getChildren = exports.getChildren = function (elem) {
    return elem.children;
  };

  var getParent = exports.getParent = function (elem) {
    return elem.parent;
  };

  exports.getSiblings = function (elem) {
    var parent = getParent(elem);
    return parent ? getChildren(parent) : [elem];
  };

  exports.getAttributeValue = function (elem, name) {
    return elem.attribs && elem.attribs[name];
  };

  exports.hasAttrib = function (elem, name) {
    return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
  };

  exports.getName = function (elem) {
    return elem.name;
  };
  });

  var removeElement = function (elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;

    if (elem.parent) {
      var childs = elem.parent.children;
      childs.splice(childs.lastIndexOf(elem), 1);
    }
  };

  var replaceElement = function (elem, replacement) {
    var prev = replacement.prev = elem.prev;

    if (prev) {
      prev.next = replacement;
    }

    var next = replacement.next = elem.next;

    if (next) {
      next.prev = replacement;
    }

    var parent = replacement.parent = elem.parent;

    if (parent) {
      var childs = parent.children;
      childs[childs.lastIndexOf(elem)] = replacement;
    }
  };

  var appendChild = function (elem, child) {
    child.parent = elem;

    if (elem.children.push(child) !== 1) {
      var sibling = elem.children[elem.children.length - 2];
      sibling.next = child;
      child.prev = sibling;
      child.next = null;
    }
  };

  var append = function (elem, next) {
    var parent = elem.parent,
        currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;

    if (currNext) {
      currNext.prev = next;

      if (parent) {
        var childs = parent.children;
        childs.splice(childs.lastIndexOf(currNext), 0, next);
      }
    } else if (parent) {
      parent.children.push(next);
    }
  };

  var prepend = function (elem, prev) {
    var parent = elem.parent;

    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(elem), 0, prev);
    }

    if (elem.prev) {
      elem.prev.next = prev;
    }

    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
  };

  var manipulation = {
  	removeElement: removeElement,
  	replaceElement: replaceElement,
  	appendChild: appendChild,
  	append: append,
  	prepend: prepend
  };

  var isTag$1 = domelementtype.isTag;

  var querying = {
    filter: filter,
    find: find,
    findOneChild: findOneChild,
    findOne: findOne,
    existsOne: existsOne,
    findAll: findAll
  };

  function filter(test, element, recurse, limit) {
    if (!Array.isArray(element)) element = [element];

    if (typeof limit !== "number" || !isFinite(limit)) {
      limit = Infinity;
    }

    return find(test, element, recurse !== false, limit);
  }

  function find(test, elems, recurse, limit) {
    var result = [],
        childs;

    for (var i = 0, j = elems.length; i < j; i++) {
      if (test(elems[i])) {
        result.push(elems[i]);
        if (--limit <= 0) break;
      }

      childs = elems[i].children;

      if (recurse && childs && childs.length > 0) {
        childs = find(test, childs, recurse, limit);
        result = result.concat(childs);
        limit -= childs.length;
        if (limit <= 0) break;
      }
    }

    return result;
  }

  function findOneChild(test, elems) {
    for (var i = 0, l = elems.length; i < l; i++) {
      if (test(elems[i])) return elems[i];
    }

    return null;
  }

  function findOne(test, elems) {
    var elem = null;

    for (var i = 0, l = elems.length; i < l && !elem; i++) {
      if (!isTag$1(elems[i])) {
        continue;
      } else if (test(elems[i])) {
        elem = elems[i];
      } else if (elems[i].children.length > 0) {
        elem = findOne(test, elems[i].children);
      }
    }

    return elem;
  }

  function existsOne(test, elems) {
    for (var i = 0, l = elems.length; i < l; i++) {
      if (isTag$1(elems[i]) && (test(elems[i]) || elems[i].children.length > 0 && existsOne(test, elems[i].children))) {
        return true;
      }
    }

    return false;
  }

  function findAll(test, rootElems) {
    var result = [];
    var stack = rootElems.slice();

    while (stack.length) {
      var elem = stack.shift();
      if (!isTag$1(elem)) continue;

      if (elem.children && elem.children.length > 0) {
        stack.unshift.apply(stack, elem.children);
      }

      if (test(elem)) result.push(elem);
    }

    return result;
  }

  var legacy = createCommonjsModule(function (module, exports) {
  var isTag = exports.isTag = domelementtype.isTag;

  exports.testElement = function (options, element) {
    for (var key in options) {
      if (!options.hasOwnProperty(key)) ;else if (key === "tag_name") {
        if (!isTag(element) || !options.tag_name(element.name)) {
          return false;
        }
      } else if (key === "tag_type") {
        if (!options.tag_type(element.type)) return false;
      } else if (key === "tag_contains") {
        if (isTag(element) || !options.tag_contains(element.data)) {
          return false;
        }
      } else if (!element.attribs || !options[key](element.attribs[key])) {
        return false;
      }
    }

    return true;
  };

  var Checks = {
    tag_name: function tag_name(name) {
      if (typeof name === "function") {
        return function (elem) {
          return isTag(elem) && name(elem.name);
        };
      } else if (name === "*") {
        return isTag;
      } else {
        return function (elem) {
          return isTag(elem) && elem.name === name;
        };
      }
    },
    tag_type: function tag_type(type) {
      if (typeof type === "function") {
        return function (elem) {
          return type(elem.type);
        };
      } else {
        return function (elem) {
          return elem.type === type;
        };
      }
    },
    tag_contains: function tag_contains(data) {
      if (typeof data === "function") {
        return function (elem) {
          return !isTag(elem) && data(elem.data);
        };
      } else {
        return function (elem) {
          return !isTag(elem) && elem.data === data;
        };
      }
    }
  };

  function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
      return function (elem) {
        return elem.attribs && value(elem.attribs[attrib]);
      };
    } else {
      return function (elem) {
        return elem.attribs && elem.attribs[attrib] === value;
      };
    }
  }

  function combineFuncs(a, b) {
    return function (elem) {
      return a(elem) || b(elem);
    };
  }

  exports.getElements = function (options, element, recurse, limit) {
    var funcs = Object.keys(options).map(function (key) {
      var value = options[key];
      return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? [] : this.filter(funcs.reduce(combineFuncs), element, recurse, limit);
  };

  exports.getElementById = function (id, element, recurse) {
    if (!Array.isArray(element)) element = [element];
    return this.findOne(getAttribCheck("id", id), element, recurse !== false);
  };

  exports.getElementsByTagName = function (name, element, recurse, limit) {
    return this.filter(Checks.tag_name(name), element, recurse, limit);
  };

  exports.getElementsByTagType = function (type, element, recurse, limit) {
    return this.filter(Checks.tag_type(type), element, recurse, limit);
  };
  });

  var helpers = createCommonjsModule(function (module, exports) {
  // removeSubsets
  // Given an array of nodes, remove any member that is contained by another.
  exports.removeSubsets = function (nodes) {
    var idx = nodes.length,
        node,
        ancestor,
        replace; // Check if each node (or one of its ancestors) is already contained in the
    // array.

    while (--idx > -1) {
      node = ancestor = nodes[idx]; // Temporarily remove the node under consideration

      nodes[idx] = null;
      replace = true;

      while (ancestor) {
        if (nodes.indexOf(ancestor) > -1) {
          replace = false;
          nodes.splice(idx, 1);
          break;
        }

        ancestor = ancestor.parent;
      } // If the node has been found to be unique, re-insert it.


      if (replace) {
        nodes[idx] = node;
      }
    }

    return nodes;
  }; // Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition


  var POSITION = {
    DISCONNECTED: 1,
    PRECEDING: 2,
    FOLLOWING: 4,
    CONTAINS: 8,
    CONTAINED_BY: 16
  }; // Compare the position of one node against another node in any other document.
  // The return value is a bitmask with the following values:
  //
  // document order:
  // > There is an ordering, document order, defined on all the nodes in the
  // > document corresponding to the order in which the first character of the
  // > XML representation of each node occurs in the XML representation of the
  // > document after expansion of general entities. Thus, the document element
  // > node will be the first node. Element nodes occur before their children.
  // > Thus, document order orders element nodes in order of the occurrence of
  // > their start-tag in the XML (after expansion of entities). The attribute
  // > nodes of an element occur after the element and before its children. The
  // > relative order of attribute nodes is implementation-dependent./
  // Source:
  // http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
  //
  // @argument {Node} nodaA The first node to use in the comparison
  // @argument {Node} nodeB The second node to use in the comparison
  //
  // @return {Number} A bitmask describing the input nodes' relative position.
  //         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
  //         a description of these values.

  var comparePos = exports.compareDocumentPosition = function (nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    var current, sharedParent, siblings, aSibling, bSibling, idx;

    if (nodeA === nodeB) {
      return 0;
    }

    current = nodeA;

    while (current) {
      aParents.unshift(current);
      current = current.parent;
    }

    current = nodeB;

    while (current) {
      bParents.unshift(current);
      current = current.parent;
    }

    idx = 0;

    while (aParents[idx] === bParents[idx]) {
      idx++;
    }

    if (idx === 0) {
      return POSITION.DISCONNECTED;
    }

    sharedParent = aParents[idx - 1];
    siblings = sharedParent.children;
    aSibling = aParents[idx];
    bSibling = bParents[idx];

    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
      if (sharedParent === nodeB) {
        return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
      }

      return POSITION.FOLLOWING;
    } else {
      if (sharedParent === nodeA) {
        return POSITION.PRECEDING | POSITION.CONTAINS;
      }

      return POSITION.PRECEDING;
    }
  }; // Sort an array of nodes based on their relative position in the document and
  // remove any duplicate nodes. If the array contains nodes that do not belong
  // to the same document, sort order is unspecified.
  //
  // @argument {Array} nodes Array of DOM nodes
  //
  // @returns {Array} collection of unique nodes, sorted in document order


  exports.uniqueSort = function (nodes) {
    var idx = nodes.length,
        node,
        position;
    nodes = nodes.slice();

    while (--idx > -1) {
      node = nodes[idx];
      position = nodes.indexOf(node);

      if (position > -1 && position < idx) {
        nodes.splice(idx, 1);
      }
    }

    nodes.sort(function (a, b) {
      var relative = comparePos(a, b);

      if (relative & POSITION.PRECEDING) {
        return -1;
      } else if (relative & POSITION.FOLLOWING) {
        return 1;
      }

      return 0;
    });
    return nodes;
  };
  });

  var domutils = createCommonjsModule(function (module) {
  var DomUtils = module.exports;
  [stringify, traversal, manipulation, querying, legacy, helpers].forEach(function (ext) {
    Object.keys(ext).forEach(function (key) {
      DomUtils[key] = ext[key].bind(DomUtils);
    });
  });
  });

  var DomHandler$1 = /*@__PURE__*/getAugmentedNamespace(domhandler);

  //TODO: make this a streamable handler


  function FeedHandler(callback, options) {
    this.init(callback, options);
  }

  inherits_browser(FeedHandler, DomHandler$1);

  FeedHandler.prototype.init = DomHandler$1;

  function getElements(what, where) {
    return domutils.getElementsByTagName(what, where, true);
  }

  function getOneElement(what, where) {
    return domutils.getElementsByTagName(what, where, true, 1)[0];
  }

  function fetch$1(what, where, recurse) {
    return domutils.getText(domutils.getElementsByTagName(what, where, recurse, 1)).trim();
  }

  function addConditionally(obj, prop, what, where, recurse) {
    var tmp = fetch$1(what, where, recurse);
    if (tmp) obj[prop] = tmp;
  }

  var isValidFeed = function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
  };

  FeedHandler.prototype.onend = function () {
    var feed = {},
        feedRoot = getOneElement(isValidFeed, this.dom),
        tmp,
        childs;

    if (feedRoot) {
      if (feedRoot.name === "feed") {
        childs = feedRoot.children;
        feed.type = "atom";
        addConditionally(feed, "id", "id", childs);
        addConditionally(feed, "title", "title", childs);
        if ((tmp = getOneElement("link", childs)) && (tmp = tmp.attribs) && (tmp = tmp.href)) feed.link = tmp;
        addConditionally(feed, "description", "subtitle", childs);
        if (tmp = fetch$1("updated", childs)) feed.updated = new Date(tmp);
        addConditionally(feed, "author", "email", childs, true);
        feed.items = getElements("entry", childs).map(function (item) {
          var entry = {},
              tmp;
          item = item.children;
          addConditionally(entry, "id", "id", item);
          addConditionally(entry, "title", "title", item);
          if ((tmp = getOneElement("link", item)) && (tmp = tmp.attribs) && (tmp = tmp.href)) entry.link = tmp;
          if (tmp = fetch$1("summary", item) || fetch$1("content", item)) entry.description = tmp;
          if (tmp = fetch$1("updated", item)) entry.pubDate = new Date(tmp);
          return entry;
        });
      } else {
        childs = getOneElement("channel", feedRoot.children).children;
        feed.type = feedRoot.name.substr(0, 3);
        feed.id = "";
        addConditionally(feed, "title", "title", childs);
        addConditionally(feed, "link", "link", childs);
        addConditionally(feed, "description", "description", childs);
        if (tmp = fetch$1("lastBuildDate", childs)) feed.updated = new Date(tmp);
        addConditionally(feed, "author", "managingEditor", childs, true);
        feed.items = getElements("item", feedRoot.children).map(function (item) {
          var entry = {},
              tmp;
          item = item.children;
          addConditionally(entry, "id", "guid", item);
          addConditionally(entry, "title", "title", item);
          addConditionally(entry, "link", "link", item);
          addConditionally(entry, "description", "description", item);
          if (tmp = fetch$1("pubDate", item)) entry.pubDate = new Date(tmp);
          return entry;
        });
      }
    }

    this.dom = feed;

    DomHandler$1.prototype._handleCallback.call(this, feedRoot ? null : Error("couldn't find root of feed"));
  };

  var FeedHandler_1 = FeedHandler;

  var _nodeResolve_empty = {};

  var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
  });

  var require$$0$2 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

  var WritableStream_1 = Stream;



  var WritableStream = require$$0$2.Writable;

  var StringDecoder = require$$1__default['default'].StringDecoder;

  var Buffer$1 = require$$2__default$1['default'].Buffer;

  function Stream(cbs, options) {
    var parser = this._parser = new Parser_1(cbs, options);
    var decoder = this._decoder = new StringDecoder();
    WritableStream.call(this, {
      decodeStrings: false
    });
    this.once("finish", function () {
      parser.end(decoder.end());
    });
  }

  inherits_browser(Stream, WritableStream);

  Stream.prototype._write = function (chunk, encoding, cb) {
    if (chunk instanceof Buffer$1) chunk = this._decoder.write(chunk);

    this._parser.write(chunk);

    cb();
  };

  var Stream_1 = Stream$1;



  function Stream$1(options) {
    WritableStream_1.call(this, new Cbs(this), options);
  }

  inherits_browser(Stream$1, WritableStream_1);

  Stream$1.prototype.readable = true;

  function Cbs(scope) {
    this.scope = scope;
  }

  var EVENTS = lib$2.EVENTS;

  Object.keys(EVENTS).forEach(function (name) {
    if (EVENTS[name] === 0) {
      Cbs.prototype["on" + name] = function () {
        this.scope.emit(name);
      };
    } else if (EVENTS[name] === 1) {
      Cbs.prototype["on" + name] = function (a) {
        this.scope.emit(name, a);
      };
    } else if (EVENTS[name] === 2) {
      Cbs.prototype["on" + name] = function (a, b) {
        this.scope.emit(name, a, b);
      };
    } else {
      throw Error("wrong number of arguments!");
    }
  });

  var ProxyHandler_1 = ProxyHandler;

  function ProxyHandler(cbs) {
    this._cbs = cbs || {};
  }

  var EVENTS$1 = lib$2.EVENTS;

  Object.keys(EVENTS$1).forEach(function (name) {
    if (EVENTS$1[name] === 0) {
      name = "on" + name;

      ProxyHandler.prototype[name] = function () {
        if (this._cbs[name]) this._cbs[name]();
      };
    } else if (EVENTS$1[name] === 1) {
      name = "on" + name;

      ProxyHandler.prototype[name] = function (a) {
        if (this._cbs[name]) this._cbs[name](a);
      };
    } else if (EVENTS$1[name] === 2) {
      name = "on" + name;

      ProxyHandler.prototype[name] = function (a, b) {
        if (this._cbs[name]) this._cbs[name](a, b);
      };
    } else {
      throw Error("wrong number of arguments");
    }
  });

  var CollectingHandler_1 = CollectingHandler;

  function CollectingHandler(cbs) {
    this._cbs = cbs || {};
    this.events = [];
  }

  var EVENTS$2 = lib$2.EVENTS;

  Object.keys(EVENTS$2).forEach(function (name) {
    if (EVENTS$2[name] === 0) {
      name = "on" + name;

      CollectingHandler.prototype[name] = function () {
        this.events.push([name]);
        if (this._cbs[name]) this._cbs[name]();
      };
    } else if (EVENTS$2[name] === 1) {
      name = "on" + name;

      CollectingHandler.prototype[name] = function (a) {
        this.events.push([name, a]);
        if (this._cbs[name]) this._cbs[name](a);
      };
    } else if (EVENTS$2[name] === 2) {
      name = "on" + name;

      CollectingHandler.prototype[name] = function (a, b) {
        this.events.push([name, a, b]);
        if (this._cbs[name]) this._cbs[name](a, b);
      };
    } else {
      throw Error("wrong number of arguments");
    }
  });

  CollectingHandler.prototype.onreset = function () {
    this.events = [];
    if (this._cbs.onreset) this._cbs.onreset();
  };

  CollectingHandler.prototype.restart = function () {
    if (this._cbs.onreset) this._cbs.onreset();

    for (var i = 0, len = this.events.length; i < len; i++) {
      if (this._cbs[this.events[i][0]]) {
        var num = this.events[i].length;

        if (num === 1) {
          this._cbs[this.events[i][0]]();
        } else if (num === 2) {
          this._cbs[this.events[i][0]](this.events[i][1]);
        } else {
          this._cbs[this.events[i][0]](this.events[i][1], this.events[i][2]);
        }
      }
    }
  };

  var lib$2 = createCommonjsModule(function (module) {
  function defineProp(name, value) {
    delete module.exports[name];
    module.exports[name] = value;
    return value;
  }

  module.exports = {
    Parser: Parser_1,
    Tokenizer: Tokenizer_1,
    ElementType: domelementtype,
    DomHandler: DomHandler$1,

    get FeedHandler() {
      return defineProp("FeedHandler", FeedHandler_1);
    },

    get Stream() {
      return defineProp("Stream", Stream_1);
    },

    get WritableStream() {
      return defineProp("WritableStream", WritableStream_1);
    },

    get ProxyHandler() {
      return defineProp("ProxyHandler", ProxyHandler_1);
    },

    get DomUtils() {
      return defineProp("DomUtils", domutils);
    },

    get CollectingHandler() {
      return defineProp("CollectingHandler", CollectingHandler_1);
    },

    // For legacy support
    DefaultHandler: DomHandler$1,

    get RssHandler() {
      return defineProp("RssHandler", this.FeedHandler);
    },

    //helper methods
    parseDOM: function parseDOM(data, options) {
      var handler = new DomHandler$1(options);
      new Parser_1(handler, options).end(data);
      return handler.dom;
    },
    parseFeed: function parseFeed(feed, options) {
      var handler = new module.exports.FeedHandler(options);
      new Parser_1(handler, options).end(feed);
      return handler.dom;
    },
    createDomStream: function createDomStream(cb, options, elementCb) {
      var handler = new DomHandler$1(cb, options, elementCb);
      return new Parser_1(handler, options);
    },
    // List of all events that the parser emits
    EVENTS: {
      /* Format: eventname: number of arguments */
      attribute: 2,
      cdatastart: 0,
      cdataend: 0,
      text: 1,
      processinginstruction: 2,
      comment: 1,
      commentend: 0,
      closetag: 1,
      opentag: 2,
      opentagname: 1,
      error: 1,
      end: 0
    }
  };
  });

  var REPLACEMENT_CHARACTER = "\uFFFD";
  var CODE_POINTS = {
    EOF: -1,
    NULL: 0x00,
    TABULATION: 0x09,
    CARRIAGE_RETURN: 0x0D,
    LINE_FEED: 0x0A,
    FORM_FEED: 0x0C,
    SPACE: 0x20,
    EXCLAMATION_MARK: 0x21,
    QUOTATION_MARK: 0x22,
    NUMBER_SIGN: 0x23,
    AMPERSAND: 0x26,
    APOSTROPHE: 0x27,
    HYPHEN_MINUS: 0x2D,
    SOLIDUS: 0x2F,
    DIGIT_0: 0x30,
    DIGIT_9: 0x39,
    SEMICOLON: 0x3B,
    LESS_THAN_SIGN: 0x3C,
    EQUALS_SIGN: 0x3D,
    GREATER_THAN_SIGN: 0x3E,
    QUESTION_MARK: 0x3F,
    LATIN_CAPITAL_A: 0x41,
    LATIN_CAPITAL_F: 0x46,
    LATIN_CAPITAL_X: 0x58,
    LATIN_CAPITAL_Z: 0x5A,
    GRAVE_ACCENT: 0x60,
    LATIN_SMALL_A: 0x61,
    LATIN_SMALL_F: 0x66,
    LATIN_SMALL_X: 0x78,
    LATIN_SMALL_Z: 0x7A,
    REPLACEMENT_CHARACTER: 0xFFFD
  };
  var CODE_POINT_SEQUENCES = {
    DASH_DASH_STRING: [0x2D, 0x2D],
    //--
    DOCTYPE_STRING: [0x44, 0x4F, 0x43, 0x54, 0x59, 0x50, 0x45],
    //DOCTYPE
    CDATA_START_STRING: [0x5B, 0x43, 0x44, 0x41, 0x54, 0x41, 0x5B],
    //[CDATA[
    CDATA_END_STRING: [0x5D, 0x5D, 0x3E],
    //]]>
    SCRIPT_STRING: [0x73, 0x63, 0x72, 0x69, 0x70, 0x74],
    //script
    PUBLIC_STRING: [0x50, 0x55, 0x42, 0x4C, 0x49, 0x43],
    //PUBLIC
    SYSTEM_STRING: [0x53, 0x59, 0x53, 0x54, 0x45, 0x4D] //SYSTEM

  };

  var unicode = {
  	REPLACEMENT_CHARACTER: REPLACEMENT_CHARACTER,
  	CODE_POINTS: CODE_POINTS,
  	CODE_POINT_SEQUENCES: CODE_POINT_SEQUENCES
  };

  var preprocessor = createCommonjsModule(function (module) {

   //Aliases


  var $ = unicode.CODE_POINTS; //Utils
  //OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
  //this functions if they will be situated in another module due to context switch.
  //Always perform inlining check before modifying this functions ('node --trace-inlining').

  function isSurrogatePair(cp1, cp2) {
    return cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF;
  }

  function getSurrogatePairCodePoint(cp1, cp2) {
    return (cp1 - 0xD800) * 0x400 + 0x2400 + cp2;
  } //Const


  var DEFAULT_BUFFER_WATERLINE = 1 << 16; //Preprocessor
  //NOTE: HTML input preprocessing
  //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)

  var Preprocessor = module.exports = function () {
    this.html = null;
    this.pos = -1;
    this.lastGapPos = -1;
    this.lastCharPos = -1;
    this.gapStack = [];
    this.skipNextNewLine = false;
    this.lastChunkWritten = false;
    this.endOfChunkHit = false;
    this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
  };

  Preprocessor.prototype.dropParsedChunk = function () {
    if (this.pos > this.bufferWaterline) {
      this.lastCharPos -= this.pos;
      this.html = this.html.substring(this.pos);
      this.pos = 0;
      this.lastGapPos = -1;
      this.gapStack = [];
    }
  };

  Preprocessor.prototype._addGap = function () {
    this.gapStack.push(this.lastGapPos);
    this.lastGapPos = this.pos;
  };

  Preprocessor.prototype._processHighRangeCodePoint = function (cp) {
    //NOTE: try to peek a surrogate pair
    if (this.pos !== this.lastCharPos) {
      var nextCp = this.html.charCodeAt(this.pos + 1);

      if (isSurrogatePair(cp, nextCp)) {
        //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
        this.pos++;
        cp = getSurrogatePairCodePoint(cp, nextCp); //NOTE: add gap that should be avoided during retreat

        this._addGap();
      }
    } // NOTE: we've hit the end of chunk, stop processing at this point
    else if (!this.lastChunkWritten) {
        this.endOfChunkHit = true;
        return $.EOF;
      }

    return cp;
  };

  Preprocessor.prototype.write = function (chunk, isLastChunk) {
    if (this.html) this.html += chunk;else this.html = chunk;
    this.lastCharPos = this.html.length - 1;
    this.endOfChunkHit = false;
    this.lastChunkWritten = isLastChunk;
  };

  Preprocessor.prototype.insertHtmlAtCurrentPos = function (chunk) {
    this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1, this.html.length);
    this.lastCharPos = this.html.length - 1;
    this.endOfChunkHit = false;
  };

  Preprocessor.prototype.advance = function () {
    this.pos++;

    if (this.pos > this.lastCharPos) {
      if (!this.lastChunkWritten) this.endOfChunkHit = true;
      return $.EOF;
    }

    var cp = this.html.charCodeAt(this.pos); //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
    //must be ignored.

    if (this.skipNextNewLine && cp === $.LINE_FEED) {
      this.skipNextNewLine = false;

      this._addGap();

      return this.advance();
    } //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters


    if (cp === $.CARRIAGE_RETURN) {
      this.skipNextNewLine = true;
      return $.LINE_FEED;
    }

    this.skipNextNewLine = false; //OPTIMIZATION: first perform check if the code point in the allowed range that covers most common
    //HTML input (e.g. ASCII codes) to avoid performance-cost operations for high-range code points.

    return cp >= 0xD800 ? this._processHighRangeCodePoint(cp) : cp;
  };

  Preprocessor.prototype.retreat = function () {
    if (this.pos === this.lastGapPos) {
      this.lastGapPos = this.gapStack.pop();
      this.pos--;
    }

    this.pos--;
  };
  });

  //(details: https://github.com/inikulin/parse5/tree/master/scripts/generate_named_entity_data/README.md)

  var named_entity_data = new Uint16Array([4, 52, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 106, 303, 412, 810, 1432, 1701, 1796, 1987, 2114, 2360, 2420, 2484, 3170, 3251, 4140, 4393, 4575, 4610, 5106, 5512, 5728, 6117, 6274, 6315, 6345, 6427, 6516, 7002, 7910, 8733, 9323, 9870, 10170, 10631, 10893, 11318, 11386, 11467, 12773, 13092, 14474, 14922, 15448, 15542, 16419, 17666, 18166, 18611, 19004, 19095, 19298, 19397, 4, 16, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 140, 150, 158, 169, 176, 194, 199, 210, 216, 222, 226, 242, 256, 266, 283, 294, 108, 105, 103, 5, 198, 1, 59, 148, 1, 198, 80, 5, 38, 1, 59, 156, 1, 38, 99, 117, 116, 101, 5, 193, 1, 59, 167, 1, 193, 114, 101, 118, 101, 59, 1, 258, 4, 2, 105, 121, 182, 191, 114, 99, 5, 194, 1, 59, 189, 1, 194, 59, 1, 1040, 114, 59, 3, 55349, 56580, 114, 97, 118, 101, 5, 192, 1, 59, 208, 1, 192, 112, 104, 97, 59, 1, 913, 97, 99, 114, 59, 1, 256, 100, 59, 1, 10835, 4, 2, 103, 112, 232, 237, 111, 110, 59, 1, 260, 102, 59, 3, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 1, 8289, 105, 110, 103, 5, 197, 1, 59, 264, 1, 197, 4, 2, 99, 115, 272, 277, 114, 59, 3, 55349, 56476, 105, 103, 110, 59, 1, 8788, 105, 108, 100, 101, 5, 195, 1, 59, 292, 1, 195, 109, 108, 5, 196, 1, 59, 301, 1, 196, 4, 8, 97, 99, 101, 102, 111, 114, 115, 117, 321, 350, 354, 383, 388, 394, 400, 405, 4, 2, 99, 114, 327, 336, 107, 115, 108, 97, 115, 104, 59, 1, 8726, 4, 2, 118, 119, 342, 345, 59, 1, 10983, 101, 100, 59, 1, 8966, 121, 59, 1, 1041, 4, 3, 99, 114, 116, 362, 369, 379, 97, 117, 115, 101, 59, 1, 8757, 110, 111, 117, 108, 108, 105, 115, 59, 1, 8492, 97, 59, 1, 914, 114, 59, 3, 55349, 56581, 112, 102, 59, 3, 55349, 56633, 101, 118, 101, 59, 1, 728, 99, 114, 59, 1, 8492, 109, 112, 101, 113, 59, 1, 8782, 4, 14, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 442, 447, 456, 504, 542, 547, 569, 573, 577, 616, 678, 784, 790, 796, 99, 121, 59, 1, 1063, 80, 89, 5, 169, 1, 59, 454, 1, 169, 4, 3, 99, 112, 121, 464, 470, 497, 117, 116, 101, 59, 1, 262, 4, 2, 59, 105, 476, 478, 1, 8914, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8517, 108, 101, 121, 115, 59, 1, 8493, 4, 4, 97, 101, 105, 111, 514, 520, 530, 535, 114, 111, 110, 59, 1, 268, 100, 105, 108, 5, 199, 1, 59, 528, 1, 199, 114, 99, 59, 1, 264, 110, 105, 110, 116, 59, 1, 8752, 111, 116, 59, 1, 266, 4, 2, 100, 110, 553, 560, 105, 108, 108, 97, 59, 1, 184, 116, 101, 114, 68, 111, 116, 59, 1, 183, 114, 59, 1, 8493, 105, 59, 1, 935, 114, 99, 108, 101, 4, 4, 68, 77, 80, 84, 591, 596, 603, 609, 111, 116, 59, 1, 8857, 105, 110, 117, 115, 59, 1, 8854, 108, 117, 115, 59, 1, 8853, 105, 109, 101, 115, 59, 1, 8855, 111, 4, 2, 99, 115, 623, 646, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8754, 101, 67, 117, 114, 108, 121, 4, 2, 68, 81, 658, 671, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8221, 117, 111, 116, 101, 59, 1, 8217, 4, 4, 108, 110, 112, 117, 688, 701, 736, 753, 111, 110, 4, 2, 59, 101, 696, 698, 1, 8759, 59, 1, 10868, 4, 3, 103, 105, 116, 709, 717, 722, 114, 117, 101, 110, 116, 59, 1, 8801, 110, 116, 59, 1, 8751, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8750, 4, 2, 102, 114, 742, 745, 59, 1, 8450, 111, 100, 117, 99, 116, 59, 1, 8720, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8755, 111, 115, 115, 59, 1, 10799, 99, 114, 59, 3, 55349, 56478, 112, 4, 2, 59, 67, 803, 805, 1, 8915, 97, 112, 59, 1, 8781, 4, 11, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 834, 850, 855, 860, 865, 888, 903, 916, 921, 1011, 1415, 4, 2, 59, 111, 840, 842, 1, 8517, 116, 114, 97, 104, 100, 59, 1, 10513, 99, 121, 59, 1, 1026, 99, 121, 59, 1, 1029, 99, 121, 59, 1, 1039, 4, 3, 103, 114, 115, 873, 879, 883, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8609, 104, 118, 59, 1, 10980, 4, 2, 97, 121, 894, 900, 114, 111, 110, 59, 1, 270, 59, 1, 1044, 108, 4, 2, 59, 116, 910, 912, 1, 8711, 97, 59, 1, 916, 114, 59, 3, 55349, 56583, 4, 2, 97, 102, 927, 998, 4, 2, 99, 109, 933, 992, 114, 105, 116, 105, 99, 97, 108, 4, 4, 65, 68, 71, 84, 950, 957, 978, 985, 99, 117, 116, 101, 59, 1, 180, 111, 4, 2, 116, 117, 964, 967, 59, 1, 729, 98, 108, 101, 65, 99, 117, 116, 101, 59, 1, 733, 114, 97, 118, 101, 59, 1, 96, 105, 108, 100, 101, 59, 1, 732, 111, 110, 100, 59, 1, 8900, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 1, 8518, 4, 4, 112, 116, 117, 119, 1021, 1026, 1048, 1249, 102, 59, 3, 55349, 56635, 4, 3, 59, 68, 69, 1034, 1036, 1041, 1, 168, 111, 116, 59, 1, 8412, 113, 117, 97, 108, 59, 1, 8784, 98, 108, 101, 4, 6, 67, 68, 76, 82, 85, 86, 1065, 1082, 1101, 1189, 1211, 1236, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 1, 8751, 111, 4, 2, 116, 119, 1089, 1092, 59, 1, 168, 110, 65, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 101, 111, 1107, 1141, 102, 116, 4, 3, 65, 82, 84, 1117, 1124, 1136, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8660, 101, 101, 59, 1, 10980, 110, 103, 4, 2, 76, 82, 1149, 1177, 101, 102, 116, 4, 2, 65, 82, 1158, 1165, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10233, 105, 103, 104, 116, 4, 2, 65, 84, 1199, 1206, 114, 114, 111, 119, 59, 1, 8658, 101, 101, 59, 1, 8872, 112, 4, 2, 65, 68, 1218, 1225, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8741, 110, 4, 6, 65, 66, 76, 82, 84, 97, 1264, 1292, 1299, 1352, 1391, 1408, 114, 114, 111, 119, 4, 3, 59, 66, 85, 1276, 1278, 1283, 1, 8595, 97, 114, 59, 1, 10515, 112, 65, 114, 114, 111, 119, 59, 1, 8693, 114, 101, 118, 101, 59, 1, 785, 101, 102, 116, 4, 3, 82, 84, 86, 1310, 1323, 1334, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 1, 10576, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10590, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1345, 1347, 1, 8637, 97, 114, 59, 1, 10582, 105, 103, 104, 116, 4, 2, 84, 86, 1362, 1373, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10591, 101, 99, 116, 111, 114, 4, 2, 59, 66, 1384, 1386, 1, 8641, 97, 114, 59, 1, 10583, 101, 101, 4, 2, 59, 65, 1399, 1401, 1, 8868, 114, 114, 111, 119, 59, 1, 8615, 114, 114, 111, 119, 59, 1, 8659, 4, 2, 99, 116, 1421, 1426, 114, 59, 3, 55349, 56479, 114, 111, 107, 59, 1, 272, 4, 16, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1466, 1470, 1478, 1489, 1515, 1520, 1525, 1536, 1544, 1593, 1609, 1617, 1650, 1664, 1668, 1677, 71, 59, 1, 330, 72, 5, 208, 1, 59, 1476, 1, 208, 99, 117, 116, 101, 5, 201, 1, 59, 1487, 1, 201, 4, 3, 97, 105, 121, 1497, 1503, 1512, 114, 111, 110, 59, 1, 282, 114, 99, 5, 202, 1, 59, 1510, 1, 202, 59, 1, 1069, 111, 116, 59, 1, 278, 114, 59, 3, 55349, 56584, 114, 97, 118, 101, 5, 200, 1, 59, 1534, 1, 200, 101, 109, 101, 110, 116, 59, 1, 8712, 4, 2, 97, 112, 1550, 1555, 99, 114, 59, 1, 274, 116, 121, 4, 2, 83, 86, 1563, 1576, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9723, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9643, 4, 2, 103, 112, 1599, 1604, 111, 110, 59, 1, 280, 102, 59, 3, 55349, 56636, 115, 105, 108, 111, 110, 59, 1, 917, 117, 4, 2, 97, 105, 1624, 1640, 108, 4, 2, 59, 84, 1631, 1633, 1, 10869, 105, 108, 100, 101, 59, 1, 8770, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8652, 4, 2, 99, 105, 1656, 1660, 114, 59, 1, 8496, 109, 59, 1, 10867, 97, 59, 1, 919, 109, 108, 5, 203, 1, 59, 1675, 1, 203, 4, 2, 105, 112, 1683, 1689, 115, 116, 115, 59, 1, 8707, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 1, 8519, 4, 5, 99, 102, 105, 111, 115, 1713, 1717, 1722, 1762, 1791, 121, 59, 1, 1060, 114, 59, 3, 55349, 56585, 108, 108, 101, 100, 4, 2, 83, 86, 1732, 1745, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9724, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 1, 9642, 4, 3, 112, 114, 117, 1770, 1775, 1781, 102, 59, 3, 55349, 56637, 65, 108, 108, 59, 1, 8704, 114, 105, 101, 114, 116, 114, 102, 59, 1, 8497, 99, 114, 59, 1, 8497, 4, 12, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1822, 1827, 1834, 1848, 1855, 1877, 1882, 1887, 1890, 1896, 1978, 1984, 99, 121, 59, 1, 1027, 5, 62, 1, 59, 1832, 1, 62, 109, 109, 97, 4, 2, 59, 100, 1843, 1845, 1, 915, 59, 1, 988, 114, 101, 118, 101, 59, 1, 286, 4, 3, 101, 105, 121, 1863, 1869, 1874, 100, 105, 108, 59, 1, 290, 114, 99, 59, 1, 284, 59, 1, 1043, 111, 116, 59, 1, 288, 114, 59, 3, 55349, 56586, 59, 1, 8921, 112, 102, 59, 3, 55349, 56638, 101, 97, 116, 101, 114, 4, 6, 69, 70, 71, 76, 83, 84, 1915, 1933, 1944, 1953, 1959, 1971, 113, 117, 97, 108, 4, 2, 59, 76, 1925, 1927, 1, 8805, 101, 115, 115, 59, 1, 8923, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8807, 114, 101, 97, 116, 101, 114, 59, 1, 10914, 101, 115, 115, 59, 1, 8823, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10878, 105, 108, 100, 101, 59, 1, 8819, 99, 114, 59, 3, 55349, 56482, 59, 1, 8811, 4, 8, 65, 97, 99, 102, 105, 111, 115, 117, 2005, 2012, 2026, 2032, 2036, 2049, 2073, 2089, 82, 68, 99, 121, 59, 1, 1066, 4, 2, 99, 116, 2018, 2023, 101, 107, 59, 1, 711, 59, 1, 94, 105, 114, 99, 59, 1, 292, 114, 59, 1, 8460, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 1, 8459, 4, 2, 112, 114, 2055, 2059, 102, 59, 1, 8461, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 1, 9472, 4, 2, 99, 116, 2079, 2083, 114, 59, 1, 8459, 114, 111, 107, 59, 1, 294, 109, 112, 4, 2, 68, 69, 2097, 2107, 111, 119, 110, 72, 117, 109, 112, 59, 1, 8782, 113, 117, 97, 108, 59, 1, 8783, 4, 14, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 2144, 2149, 2155, 2160, 2171, 2189, 2194, 2198, 2209, 2245, 2307, 2329, 2334, 2341, 99, 121, 59, 1, 1045, 108, 105, 103, 59, 1, 306, 99, 121, 59, 1, 1025, 99, 117, 116, 101, 5, 205, 1, 59, 2169, 1, 205, 4, 2, 105, 121, 2177, 2186, 114, 99, 5, 206, 1, 59, 2184, 1, 206, 59, 1, 1048, 111, 116, 59, 1, 304, 114, 59, 1, 8465, 114, 97, 118, 101, 5, 204, 1, 59, 2207, 1, 204, 4, 3, 59, 97, 112, 2217, 2219, 2238, 1, 8465, 4, 2, 99, 103, 2225, 2229, 114, 59, 1, 298, 105, 110, 97, 114, 121, 73, 59, 1, 8520, 108, 105, 101, 115, 59, 1, 8658, 4, 2, 116, 118, 2251, 2281, 4, 2, 59, 101, 2257, 2259, 1, 8748, 4, 2, 103, 114, 2265, 2271, 114, 97, 108, 59, 1, 8747, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8898, 105, 115, 105, 98, 108, 101, 4, 2, 67, 84, 2293, 2300, 111, 109, 109, 97, 59, 1, 8291, 105, 109, 101, 115, 59, 1, 8290, 4, 3, 103, 112, 116, 2315, 2320, 2325, 111, 110, 59, 1, 302, 102, 59, 3, 55349, 56640, 97, 59, 1, 921, 99, 114, 59, 1, 8464, 105, 108, 100, 101, 59, 1, 296, 4, 2, 107, 109, 2347, 2352, 99, 121, 59, 1, 1030, 108, 5, 207, 1, 59, 2358, 1, 207, 4, 5, 99, 102, 111, 115, 117, 2372, 2386, 2391, 2397, 2414, 4, 2, 105, 121, 2378, 2383, 114, 99, 59, 1, 308, 59, 1, 1049, 114, 59, 3, 55349, 56589, 112, 102, 59, 3, 55349, 56641, 4, 2, 99, 101, 2403, 2408, 114, 59, 3, 55349, 56485, 114, 99, 121, 59, 1, 1032, 107, 99, 121, 59, 1, 1028, 4, 7, 72, 74, 97, 99, 102, 111, 115, 2436, 2441, 2446, 2452, 2467, 2472, 2478, 99, 121, 59, 1, 1061, 99, 121, 59, 1, 1036, 112, 112, 97, 59, 1, 922, 4, 2, 101, 121, 2458, 2464, 100, 105, 108, 59, 1, 310, 59, 1, 1050, 114, 59, 3, 55349, 56590, 112, 102, 59, 3, 55349, 56642, 99, 114, 59, 3, 55349, 56486, 4, 11, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2508, 2513, 2520, 2562, 2585, 2981, 2986, 3004, 3011, 3146, 3167, 99, 121, 59, 1, 1033, 5, 60, 1, 59, 2518, 1, 60, 4, 5, 99, 109, 110, 112, 114, 2532, 2538, 2544, 2548, 2558, 117, 116, 101, 59, 1, 313, 98, 100, 97, 59, 1, 923, 103, 59, 1, 10218, 108, 97, 99, 101, 116, 114, 102, 59, 1, 8466, 114, 59, 1, 8606, 4, 3, 97, 101, 121, 2570, 2576, 2582, 114, 111, 110, 59, 1, 317, 100, 105, 108, 59, 1, 315, 59, 1, 1051, 4, 2, 102, 115, 2591, 2907, 116, 4, 10, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2614, 2663, 2672, 2728, 2735, 2760, 2820, 2870, 2888, 2895, 4, 2, 110, 114, 2620, 2633, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10216, 114, 111, 119, 4, 3, 59, 66, 82, 2644, 2646, 2651, 1, 8592, 97, 114, 59, 1, 8676, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8646, 101, 105, 108, 105, 110, 103, 59, 1, 8968, 111, 4, 2, 117, 119, 2679, 2692, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10214, 110, 4, 2, 84, 86, 2699, 2710, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10593, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2721, 2723, 1, 8643, 97, 114, 59, 1, 10585, 108, 111, 111, 114, 59, 1, 8970, 105, 103, 104, 116, 4, 2, 65, 86, 2745, 2752, 114, 114, 111, 119, 59, 1, 8596, 101, 99, 116, 111, 114, 59, 1, 10574, 4, 2, 101, 114, 2766, 2792, 101, 4, 3, 59, 65, 86, 2775, 2777, 2784, 1, 8867, 114, 114, 111, 119, 59, 1, 8612, 101, 99, 116, 111, 114, 59, 1, 10586, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 2806, 2808, 2813, 1, 8882, 97, 114, 59, 1, 10703, 113, 117, 97, 108, 59, 1, 8884, 112, 4, 3, 68, 84, 86, 2829, 2841, 2852, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10577, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10592, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2863, 2865, 1, 8639, 97, 114, 59, 1, 10584, 101, 99, 116, 111, 114, 4, 2, 59, 66, 2881, 2883, 1, 8636, 97, 114, 59, 1, 10578, 114, 114, 111, 119, 59, 1, 8656, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8660, 115, 4, 6, 69, 70, 71, 76, 83, 84, 2922, 2936, 2947, 2956, 2962, 2974, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8922, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8806, 114, 101, 97, 116, 101, 114, 59, 1, 8822, 101, 115, 115, 59, 1, 10913, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 10877, 105, 108, 100, 101, 59, 1, 8818, 114, 59, 3, 55349, 56591, 4, 2, 59, 101, 2992, 2994, 1, 8920, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8666, 105, 100, 111, 116, 59, 1, 319, 4, 3, 110, 112, 119, 3019, 3110, 3115, 103, 4, 4, 76, 82, 108, 114, 3030, 3058, 3070, 3098, 101, 102, 116, 4, 2, 65, 82, 3039, 3046, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10231, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 10230, 101, 102, 116, 4, 2, 97, 114, 3079, 3086, 114, 114, 111, 119, 59, 1, 10232, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10234, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10233, 102, 59, 3, 55349, 56643, 101, 114, 4, 2, 76, 82, 3123, 3134, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8601, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8600, 4, 3, 99, 104, 116, 3154, 3158, 3161, 114, 59, 1, 8466, 59, 1, 8624, 114, 111, 107, 59, 1, 321, 59, 1, 8810, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 3188, 3192, 3196, 3222, 3227, 3237, 3243, 3248, 112, 59, 1, 10501, 121, 59, 1, 1052, 4, 2, 100, 108, 3202, 3213, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8287, 108, 105, 110, 116, 114, 102, 59, 1, 8499, 114, 59, 3, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 1, 8723, 112, 102, 59, 3, 55349, 56644, 99, 114, 59, 1, 8499, 59, 1, 924, 4, 9, 74, 97, 99, 101, 102, 111, 115, 116, 117, 3271, 3276, 3283, 3306, 3422, 3427, 4120, 4126, 4137, 99, 121, 59, 1, 1034, 99, 117, 116, 101, 59, 1, 323, 4, 3, 97, 101, 121, 3291, 3297, 3303, 114, 111, 110, 59, 1, 327, 100, 105, 108, 59, 1, 325, 59, 1, 1053, 4, 3, 103, 115, 119, 3314, 3380, 3415, 97, 116, 105, 118, 101, 4, 3, 77, 84, 86, 3327, 3340, 3365, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 1, 8203, 104, 105, 4, 2, 99, 110, 3348, 3357, 107, 83, 112, 97, 99, 101, 59, 1, 8203, 83, 112, 97, 99, 101, 59, 1, 8203, 101, 114, 121, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8203, 116, 101, 100, 4, 2, 71, 76, 3389, 3405, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 1, 8811, 101, 115, 115, 76, 101, 115, 115, 59, 1, 8810, 76, 105, 110, 101, 59, 1, 10, 114, 59, 3, 55349, 56593, 4, 4, 66, 110, 112, 116, 3437, 3444, 3460, 3464, 114, 101, 97, 107, 59, 1, 8288, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 1, 160, 102, 59, 1, 8469, 4, 13, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 3492, 3494, 3517, 3536, 3578, 3657, 3685, 3784, 3823, 3860, 3915, 4066, 4107, 1, 10988, 4, 2, 111, 117, 3500, 3510, 110, 103, 114, 117, 101, 110, 116, 59, 1, 8802, 112, 67, 97, 112, 59, 1, 8813, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8742, 4, 3, 108, 113, 120, 3544, 3552, 3571, 101, 109, 101, 110, 116, 59, 1, 8713, 117, 97, 108, 4, 2, 59, 84, 3561, 3563, 1, 8800, 105, 108, 100, 101, 59, 3, 8770, 824, 105, 115, 116, 115, 59, 1, 8708, 114, 101, 97, 116, 101, 114, 4, 7, 59, 69, 70, 71, 76, 83, 84, 3600, 3602, 3609, 3621, 3631, 3637, 3650, 1, 8815, 113, 117, 97, 108, 59, 1, 8817, 117, 108, 108, 69, 113, 117, 97, 108, 59, 3, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 3, 8811, 824, 101, 115, 115, 59, 1, 8825, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10878, 824, 105, 108, 100, 101, 59, 1, 8821, 117, 109, 112, 4, 2, 68, 69, 3666, 3677, 111, 119, 110, 72, 117, 109, 112, 59, 3, 8782, 824, 113, 117, 97, 108, 59, 3, 8783, 824, 101, 4, 2, 102, 115, 3692, 3724, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3709, 3711, 3717, 1, 8938, 97, 114, 59, 3, 10703, 824, 113, 117, 97, 108, 59, 1, 8940, 115, 4, 6, 59, 69, 71, 76, 83, 84, 3739, 3741, 3748, 3757, 3764, 3777, 1, 8814, 113, 117, 97, 108, 59, 1, 8816, 114, 101, 97, 116, 101, 114, 59, 1, 8824, 101, 115, 115, 59, 3, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 3, 10877, 824, 105, 108, 100, 101, 59, 1, 8820, 101, 115, 116, 101, 100, 4, 2, 71, 76, 3795, 3812, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 3, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 3, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 4, 3, 59, 69, 83, 3838, 3840, 3848, 1, 8832, 113, 117, 97, 108, 59, 3, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8928, 4, 2, 101, 105, 3866, 3881, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 1, 8716, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 3900, 3902, 3908, 1, 8939, 97, 114, 59, 3, 10704, 824, 113, 117, 97, 108, 59, 1, 8941, 4, 2, 113, 117, 3921, 3973, 117, 97, 114, 101, 83, 117, 4, 2, 98, 112, 3933, 3952, 115, 101, 116, 4, 2, 59, 69, 3942, 3945, 3, 8847, 824, 113, 117, 97, 108, 59, 1, 8930, 101, 114, 115, 101, 116, 4, 2, 59, 69, 3963, 3966, 3, 8848, 824, 113, 117, 97, 108, 59, 1, 8931, 4, 3, 98, 99, 112, 3981, 4000, 4045, 115, 101, 116, 4, 2, 59, 69, 3990, 3993, 3, 8834, 8402, 113, 117, 97, 108, 59, 1, 8840, 99, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 4015, 4017, 4025, 4037, 1, 8833, 113, 117, 97, 108, 59, 3, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8929, 105, 108, 100, 101, 59, 3, 8831, 824, 101, 114, 115, 101, 116, 4, 2, 59, 69, 4056, 4059, 3, 8835, 8402, 113, 117, 97, 108, 59, 1, 8841, 105, 108, 100, 101, 4, 4, 59, 69, 70, 84, 4080, 4082, 4089, 4100, 1, 8769, 113, 117, 97, 108, 59, 1, 8772, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8775, 105, 108, 100, 101, 59, 1, 8777, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 1, 8740, 99, 114, 59, 3, 55349, 56489, 105, 108, 100, 101, 5, 209, 1, 59, 4135, 1, 209, 59, 1, 925, 4, 14, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 4170, 4176, 4187, 4205, 4212, 4217, 4228, 4253, 4259, 4292, 4295, 4316, 4337, 4346, 108, 105, 103, 59, 1, 338, 99, 117, 116, 101, 5, 211, 1, 59, 4185, 1, 211, 4, 2, 105, 121, 4193, 4202, 114, 99, 5, 212, 1, 59, 4200, 1, 212, 59, 1, 1054, 98, 108, 97, 99, 59, 1, 336, 114, 59, 3, 55349, 56594, 114, 97, 118, 101, 5, 210, 1, 59, 4226, 1, 210, 4, 3, 97, 101, 105, 4236, 4241, 4246, 99, 114, 59, 1, 332, 103, 97, 59, 1, 937, 99, 114, 111, 110, 59, 1, 927, 112, 102, 59, 3, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 4, 2, 68, 81, 4272, 4285, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 1, 8220, 117, 111, 116, 101, 59, 1, 8216, 59, 1, 10836, 4, 2, 99, 108, 4301, 4306, 114, 59, 3, 55349, 56490, 97, 115, 104, 5, 216, 1, 59, 4314, 1, 216, 105, 4, 2, 108, 109, 4323, 4332, 100, 101, 5, 213, 1, 59, 4330, 1, 213, 101, 115, 59, 1, 10807, 109, 108, 5, 214, 1, 59, 4344, 1, 214, 101, 114, 4, 2, 66, 80, 4354, 4380, 4, 2, 97, 114, 4360, 4364, 114, 59, 1, 8254, 97, 99, 4, 2, 101, 107, 4372, 4375, 59, 1, 9182, 101, 116, 59, 1, 9140, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9180, 4, 9, 97, 99, 102, 104, 105, 108, 111, 114, 115, 4413, 4422, 4426, 4431, 4435, 4438, 4448, 4471, 4561, 114, 116, 105, 97, 108, 68, 59, 1, 8706, 121, 59, 1, 1055, 114, 59, 3, 55349, 56595, 105, 59, 1, 934, 59, 1, 928, 117, 115, 77, 105, 110, 117, 115, 59, 1, 177, 4, 2, 105, 112, 4454, 4467, 110, 99, 97, 114, 101, 112, 108, 97, 110, 101, 59, 1, 8460, 102, 59, 1, 8473, 4, 4, 59, 101, 105, 111, 4481, 4483, 4526, 4531, 1, 10939, 99, 101, 100, 101, 115, 4, 4, 59, 69, 83, 84, 4498, 4500, 4507, 4519, 1, 8826, 113, 117, 97, 108, 59, 1, 10927, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8828, 105, 108, 100, 101, 59, 1, 8830, 109, 101, 59, 1, 8243, 4, 2, 100, 112, 4537, 4543, 117, 99, 116, 59, 1, 8719, 111, 114, 116, 105, 111, 110, 4, 2, 59, 97, 4555, 4557, 1, 8759, 108, 59, 1, 8733, 4, 2, 99, 105, 4567, 4572, 114, 59, 3, 55349, 56491, 59, 1, 936, 4, 4, 85, 102, 111, 115, 4585, 4594, 4599, 4604, 79, 84, 5, 34, 1, 59, 4592, 1, 34, 114, 59, 3, 55349, 56596, 112, 102, 59, 1, 8474, 99, 114, 59, 3, 55349, 56492, 4, 12, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 4636, 4642, 4650, 4681, 4704, 4763, 4767, 4771, 5047, 5069, 5081, 5094, 97, 114, 114, 59, 1, 10512, 71, 5, 174, 1, 59, 4648, 1, 174, 4, 3, 99, 110, 114, 4658, 4664, 4668, 117, 116, 101, 59, 1, 340, 103, 59, 1, 10219, 114, 4, 2, 59, 116, 4675, 4677, 1, 8608, 108, 59, 1, 10518, 4, 3, 97, 101, 121, 4689, 4695, 4701, 114, 111, 110, 59, 1, 344, 100, 105, 108, 59, 1, 342, 59, 1, 1056, 4, 2, 59, 118, 4710, 4712, 1, 8476, 101, 114, 115, 101, 4, 2, 69, 85, 4722, 4748, 4, 2, 108, 113, 4728, 4736, 101, 109, 101, 110, 116, 59, 1, 8715, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 8651, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10607, 114, 59, 1, 8476, 111, 59, 1, 929, 103, 104, 116, 4, 8, 65, 67, 68, 70, 84, 85, 86, 97, 4792, 4840, 4849, 4905, 4912, 4972, 5022, 5040, 4, 2, 110, 114, 4798, 4811, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10217, 114, 111, 119, 4, 3, 59, 66, 76, 4822, 4824, 4829, 1, 8594, 97, 114, 59, 1, 8677, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8644, 101, 105, 108, 105, 110, 103, 59, 1, 8969, 111, 4, 2, 117, 119, 4856, 4869, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 1, 10215, 110, 4, 2, 84, 86, 4876, 4887, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10589, 101, 99, 116, 111, 114, 4, 2, 59, 66, 4898, 4900, 1, 8642, 97, 114, 59, 1, 10581, 108, 111, 111, 114, 59, 1, 8971, 4, 2, 101, 114, 4918, 4944, 101, 4, 3, 59, 65, 86, 4927, 4929, 4936, 1, 8866, 114, 114, 111, 119, 59, 1, 8614, 101, 99, 116, 111, 114, 59, 1, 10587, 105, 97, 110, 103, 108, 101, 4, 3, 59, 66, 69, 4958, 4960, 4965, 1, 8883, 97, 114, 59, 1, 10704, 113, 117, 97, 108, 59, 1, 8885, 112, 4, 3, 68, 84, 86, 4981, 4993, 5004, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 1, 10575, 101, 101, 86, 101, 99, 116, 111, 114, 59, 1, 10588, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5015, 5017, 1, 8638, 97, 114, 59, 1, 10580, 101, 99, 116, 111, 114, 4, 2, 59, 66, 5033, 5035, 1, 8640, 97, 114, 59, 1, 10579, 114, 114, 111, 119, 59, 1, 8658, 4, 2, 112, 117, 5053, 5057, 102, 59, 1, 8477, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 1, 10608, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8667, 4, 2, 99, 104, 5087, 5091, 114, 59, 1, 8475, 59, 1, 8625, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 1, 10740, 4, 13, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 5134, 5150, 5157, 5164, 5198, 5203, 5259, 5265, 5277, 5283, 5374, 5380, 5385, 4, 2, 67, 99, 5140, 5146, 72, 99, 121, 59, 1, 1065, 121, 59, 1, 1064, 70, 84, 99, 121, 59, 1, 1068, 99, 117, 116, 101, 59, 1, 346, 4, 5, 59, 97, 101, 105, 121, 5176, 5178, 5184, 5190, 5195, 1, 10940, 114, 111, 110, 59, 1, 352, 100, 105, 108, 59, 1, 350, 114, 99, 59, 1, 348, 59, 1, 1057, 114, 59, 3, 55349, 56598, 111, 114, 116, 4, 4, 68, 76, 82, 85, 5216, 5227, 5238, 5250, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8595, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8592, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8594, 112, 65, 114, 114, 111, 119, 59, 1, 8593, 103, 109, 97, 59, 1, 931, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 1, 8728, 112, 102, 59, 3, 55349, 56650, 4, 2, 114, 117, 5289, 5293, 116, 59, 1, 8730, 97, 114, 101, 4, 4, 59, 73, 83, 85, 5306, 5308, 5322, 5367, 1, 9633, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 1, 8851, 117, 4, 2, 98, 112, 5329, 5347, 115, 101, 116, 4, 2, 59, 69, 5338, 5340, 1, 8847, 113, 117, 97, 108, 59, 1, 8849, 101, 114, 115, 101, 116, 4, 2, 59, 69, 5358, 5360, 1, 8848, 113, 117, 97, 108, 59, 1, 8850, 110, 105, 111, 110, 59, 1, 8852, 99, 114, 59, 3, 55349, 56494, 97, 114, 59, 1, 8902, 4, 4, 98, 99, 109, 112, 5395, 5420, 5475, 5478, 4, 2, 59, 115, 5401, 5403, 1, 8912, 101, 116, 4, 2, 59, 69, 5411, 5413, 1, 8912, 113, 117, 97, 108, 59, 1, 8838, 4, 2, 99, 104, 5426, 5468, 101, 101, 100, 115, 4, 4, 59, 69, 83, 84, 5440, 5442, 5449, 5461, 1, 8827, 113, 117, 97, 108, 59, 1, 10928, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 1, 8829, 105, 108, 100, 101, 59, 1, 8831, 84, 104, 97, 116, 59, 1, 8715, 59, 1, 8721, 4, 3, 59, 101, 115, 5486, 5488, 5507, 1, 8913, 114, 115, 101, 116, 4, 2, 59, 69, 5498, 5500, 1, 8835, 113, 117, 97, 108, 59, 1, 8839, 101, 116, 59, 1, 8913, 4, 11, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 5536, 5546, 5552, 5567, 5579, 5602, 5607, 5655, 5695, 5701, 5711, 79, 82, 78, 5, 222, 1, 59, 5544, 1, 222, 65, 68, 69, 59, 1, 8482, 4, 2, 72, 99, 5558, 5563, 99, 121, 59, 1, 1035, 121, 59, 1, 1062, 4, 2, 98, 117, 5573, 5576, 59, 1, 9, 59, 1, 932, 4, 3, 97, 101, 121, 5587, 5593, 5599, 114, 111, 110, 59, 1, 356, 100, 105, 108, 59, 1, 354, 59, 1, 1058, 114, 59, 3, 55349, 56599, 4, 2, 101, 105, 5613, 5631, 4, 2, 114, 116, 5619, 5627, 101, 102, 111, 114, 101, 59, 1, 8756, 97, 59, 1, 920, 4, 2, 99, 110, 5637, 5647, 107, 83, 112, 97, 99, 101, 59, 3, 8287, 8202, 83, 112, 97, 99, 101, 59, 1, 8201, 108, 100, 101, 4, 4, 59, 69, 70, 84, 5668, 5670, 5677, 5688, 1, 8764, 113, 117, 97, 108, 59, 1, 8771, 117, 108, 108, 69, 113, 117, 97, 108, 59, 1, 8773, 105, 108, 100, 101, 59, 1, 8776, 112, 102, 59, 3, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 1, 8411, 4, 2, 99, 116, 5717, 5722, 114, 59, 3, 55349, 56495, 114, 111, 107, 59, 1, 358, 4, 14, 97, 98, 99, 100, 102, 103, 109, 110, 111, 112, 114, 115, 116, 117, 5758, 5789, 5805, 5823, 5830, 5835, 5846, 5852, 5921, 5937, 6089, 6095, 6101, 6108, 4, 2, 99, 114, 5764, 5774, 117, 116, 101, 5, 218, 1, 59, 5772, 1, 218, 114, 4, 2, 59, 111, 5781, 5783, 1, 8607, 99, 105, 114, 59, 1, 10569, 114, 4, 2, 99, 101, 5796, 5800, 121, 59, 1, 1038, 118, 101, 59, 1, 364, 4, 2, 105, 121, 5811, 5820, 114, 99, 5, 219, 1, 59, 5818, 1, 219, 59, 1, 1059, 98, 108, 97, 99, 59, 1, 368, 114, 59, 3, 55349, 56600, 114, 97, 118, 101, 5, 217, 1, 59, 5844, 1, 217, 97, 99, 114, 59, 1, 362, 4, 2, 100, 105, 5858, 5905, 101, 114, 4, 2, 66, 80, 5866, 5892, 4, 2, 97, 114, 5872, 5876, 114, 59, 1, 95, 97, 99, 4, 2, 101, 107, 5884, 5887, 59, 1, 9183, 101, 116, 59, 1, 9141, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 1, 9181, 111, 110, 4, 2, 59, 80, 5913, 5915, 1, 8899, 108, 117, 115, 59, 1, 8846, 4, 2, 103, 112, 5927, 5932, 111, 110, 59, 1, 370, 102, 59, 3, 55349, 56652, 4, 8, 65, 68, 69, 84, 97, 100, 112, 115, 5955, 5985, 5996, 6009, 6026, 6033, 6044, 6075, 114, 114, 111, 119, 4, 3, 59, 66, 68, 5967, 5969, 5974, 1, 8593, 97, 114, 59, 1, 10514, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8645, 111, 119, 110, 65, 114, 114, 111, 119, 59, 1, 8597, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 1, 10606, 101, 101, 4, 2, 59, 65, 6017, 6019, 1, 8869, 114, 114, 111, 119, 59, 1, 8613, 114, 114, 111, 119, 59, 1, 8657, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8661, 101, 114, 4, 2, 76, 82, 6052, 6063, 101, 102, 116, 65, 114, 114, 111, 119, 59, 1, 8598, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 1, 8599, 105, 4, 2, 59, 108, 6082, 6084, 1, 978, 111, 110, 59, 1, 933, 105, 110, 103, 59, 1, 366, 99, 114, 59, 3, 55349, 56496, 105, 108, 100, 101, 59, 1, 360, 109, 108, 5, 220, 1, 59, 6115, 1, 220, 4, 9, 68, 98, 99, 100, 101, 102, 111, 115, 118, 6137, 6143, 6148, 6152, 6166, 6250, 6255, 6261, 6267, 97, 115, 104, 59, 1, 8875, 97, 114, 59, 1, 10987, 121, 59, 1, 1042, 97, 115, 104, 4, 2, 59, 108, 6161, 6163, 1, 8873, 59, 1, 10982, 4, 2, 101, 114, 6172, 6175, 59, 1, 8897, 4, 3, 98, 116, 121, 6183, 6188, 6238, 97, 114, 59, 1, 8214, 4, 2, 59, 105, 6194, 6196, 1, 8214, 99, 97, 108, 4, 4, 66, 76, 83, 84, 6209, 6214, 6220, 6231, 97, 114, 59, 1, 8739, 105, 110, 101, 59, 1, 124, 101, 112, 97, 114, 97, 116, 111, 114, 59, 1, 10072, 105, 108, 100, 101, 59, 1, 8768, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 1, 8202, 114, 59, 3, 55349, 56601, 112, 102, 59, 3, 55349, 56653, 99, 114, 59, 3, 55349, 56497, 100, 97, 115, 104, 59, 1, 8874, 4, 5, 99, 101, 102, 111, 115, 6286, 6292, 6298, 6303, 6309, 105, 114, 99, 59, 1, 372, 100, 103, 101, 59, 1, 8896, 114, 59, 3, 55349, 56602, 112, 102, 59, 3, 55349, 56654, 99, 114, 59, 3, 55349, 56498, 4, 4, 102, 105, 111, 115, 6325, 6330, 6333, 6339, 114, 59, 3, 55349, 56603, 59, 1, 926, 112, 102, 59, 3, 55349, 56655, 99, 114, 59, 3, 55349, 56499, 4, 9, 65, 73, 85, 97, 99, 102, 111, 115, 117, 6365, 6370, 6375, 6380, 6391, 6405, 6410, 6416, 6422, 99, 121, 59, 1, 1071, 99, 121, 59, 1, 1031, 99, 121, 59, 1, 1070, 99, 117, 116, 101, 5, 221, 1, 59, 6389, 1, 221, 4, 2, 105, 121, 6397, 6402, 114, 99, 59, 1, 374, 59, 1, 1067, 114, 59, 3, 55349, 56604, 112, 102, 59, 3, 55349, 56656, 99, 114, 59, 3, 55349, 56500, 109, 108, 59, 1, 376, 4, 8, 72, 97, 99, 100, 101, 102, 111, 115, 6445, 6450, 6457, 6472, 6477, 6501, 6505, 6510, 99, 121, 59, 1, 1046, 99, 117, 116, 101, 59, 1, 377, 4, 2, 97, 121, 6463, 6469, 114, 111, 110, 59, 1, 381, 59, 1, 1047, 111, 116, 59, 1, 379, 4, 2, 114, 116, 6483, 6497, 111, 87, 105, 100, 116, 104, 83, 112, 97, 99, 101, 59, 1, 8203, 97, 59, 1, 918, 114, 59, 1, 8488, 112, 102, 59, 1, 8484, 99, 114, 59, 3, 55349, 56501, 4, 16, 97, 98, 99, 101, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 119, 6550, 6561, 6568, 6612, 6622, 6634, 6645, 6672, 6699, 6854, 6870, 6923, 6933, 6963, 6974, 6983, 99, 117, 116, 101, 5, 225, 1, 59, 6559, 1, 225, 114, 101, 118, 101, 59, 1, 259, 4, 6, 59, 69, 100, 105, 117, 121, 6582, 6584, 6588, 6591, 6600, 6609, 1, 8766, 59, 3, 8766, 819, 59, 1, 8767, 114, 99, 5, 226, 1, 59, 6598, 1, 226, 116, 101, 5, 180, 1, 59, 6607, 1, 180, 59, 1, 1072, 108, 105, 103, 5, 230, 1, 59, 6620, 1, 230, 4, 2, 59, 114, 6628, 6630, 1, 8289, 59, 3, 55349, 56606, 114, 97, 118, 101, 5, 224, 1, 59, 6643, 1, 224, 4, 2, 101, 112, 6651, 6667, 4, 2, 102, 112, 6657, 6663, 115, 121, 109, 59, 1, 8501, 104, 59, 1, 8501, 104, 97, 59, 1, 945, 4, 2, 97, 112, 6678, 6692, 4, 2, 99, 108, 6684, 6688, 114, 59, 1, 257, 103, 59, 1, 10815, 5, 38, 1, 59, 6697, 1, 38, 4, 2, 100, 103, 6705, 6737, 4, 5, 59, 97, 100, 115, 118, 6717, 6719, 6724, 6727, 6734, 1, 8743, 110, 100, 59, 1, 10837, 59, 1, 10844, 108, 111, 112, 101, 59, 1, 10840, 59, 1, 10842, 4, 7, 59, 101, 108, 109, 114, 115, 122, 6753, 6755, 6758, 6762, 6814, 6835, 6848, 1, 8736, 59, 1, 10660, 101, 59, 1, 8736, 115, 100, 4, 2, 59, 97, 6770, 6772, 1, 8737, 4, 8, 97, 98, 99, 100, 101, 102, 103, 104, 6790, 6793, 6796, 6799, 6802, 6805, 6808, 6811, 59, 1, 10664, 59, 1, 10665, 59, 1, 10666, 59, 1, 10667, 59, 1, 10668, 59, 1, 10669, 59, 1, 10670, 59, 1, 10671, 116, 4, 2, 59, 118, 6821, 6823, 1, 8735, 98, 4, 2, 59, 100, 6830, 6832, 1, 8894, 59, 1, 10653, 4, 2, 112, 116, 6841, 6845, 104, 59, 1, 8738, 59, 1, 197, 97, 114, 114, 59, 1, 9084, 4, 2, 103, 112, 6860, 6865, 111, 110, 59, 1, 261, 102, 59, 3, 55349, 56658, 4, 7, 59, 69, 97, 101, 105, 111, 112, 6886, 6888, 6891, 6897, 6900, 6904, 6908, 1, 8776, 59, 1, 10864, 99, 105, 114, 59, 1, 10863, 59, 1, 8778, 100, 59, 1, 8779, 115, 59, 1, 39, 114, 111, 120, 4, 2, 59, 101, 6917, 6919, 1, 8776, 113, 59, 1, 8778, 105, 110, 103, 5, 229, 1, 59, 6931, 1, 229, 4, 3, 99, 116, 121, 6941, 6946, 6949, 114, 59, 3, 55349, 56502, 59, 1, 42, 109, 112, 4, 2, 59, 101, 6957, 6959, 1, 8776, 113, 59, 1, 8781, 105, 108, 100, 101, 5, 227, 1, 59, 6972, 1, 227, 109, 108, 5, 228, 1, 59, 6981, 1, 228, 4, 2, 99, 105, 6989, 6997, 111, 110, 105, 110, 116, 59, 1, 8755, 110, 116, 59, 1, 10769, 4, 16, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 7036, 7041, 7119, 7135, 7149, 7155, 7219, 7224, 7347, 7354, 7463, 7489, 7786, 7793, 7814, 7866, 111, 116, 59, 1, 10989, 4, 2, 99, 114, 7047, 7094, 107, 4, 4, 99, 101, 112, 115, 7058, 7064, 7073, 7080, 111, 110, 103, 59, 1, 8780, 112, 115, 105, 108, 111, 110, 59, 1, 1014, 114, 105, 109, 101, 59, 1, 8245, 105, 109, 4, 2, 59, 101, 7088, 7090, 1, 8765, 113, 59, 1, 8909, 4, 2, 118, 119, 7100, 7105, 101, 101, 59, 1, 8893, 101, 100, 4, 2, 59, 103, 7113, 7115, 1, 8965, 101, 59, 1, 8965, 114, 107, 4, 2, 59, 116, 7127, 7129, 1, 9141, 98, 114, 107, 59, 1, 9142, 4, 2, 111, 121, 7141, 7146, 110, 103, 59, 1, 8780, 59, 1, 1073, 113, 117, 111, 59, 1, 8222, 4, 5, 99, 109, 112, 114, 116, 7167, 7181, 7188, 7193, 7199, 97, 117, 115, 4, 2, 59, 101, 7176, 7178, 1, 8757, 59, 1, 8757, 112, 116, 121, 118, 59, 1, 10672, 115, 105, 59, 1, 1014, 110, 111, 117, 59, 1, 8492, 4, 3, 97, 104, 119, 7207, 7210, 7213, 59, 1, 946, 59, 1, 8502, 101, 101, 110, 59, 1, 8812, 114, 59, 3, 55349, 56607, 103, 4, 7, 99, 111, 115, 116, 117, 118, 119, 7241, 7262, 7288, 7305, 7328, 7335, 7340, 4, 3, 97, 105, 117, 7249, 7253, 7258, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 4, 3, 100, 112, 116, 7270, 7275, 7281, 111, 116, 59, 1, 10752, 108, 117, 115, 59, 1, 10753, 105, 109, 101, 115, 59, 1, 10754, 4, 2, 113, 116, 7294, 7300, 99, 117, 112, 59, 1, 10758, 97, 114, 59, 1, 9733, 114, 105, 97, 110, 103, 108, 101, 4, 2, 100, 117, 7318, 7324, 111, 119, 110, 59, 1, 9661, 112, 59, 1, 9651, 112, 108, 117, 115, 59, 1, 10756, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 97, 114, 111, 119, 59, 1, 10509, 4, 3, 97, 107, 111, 7362, 7436, 7458, 4, 2, 99, 110, 7368, 7432, 107, 4, 3, 108, 115, 116, 7377, 7386, 7394, 111, 122, 101, 110, 103, 101, 59, 1, 10731, 113, 117, 97, 114, 101, 59, 1, 9642, 114, 105, 97, 110, 103, 108, 101, 4, 4, 59, 100, 108, 114, 7411, 7413, 7419, 7425, 1, 9652, 111, 119, 110, 59, 1, 9662, 101, 102, 116, 59, 1, 9666, 105, 103, 104, 116, 59, 1, 9656, 107, 59, 1, 9251, 4, 2, 49, 51, 7442, 7454, 4, 2, 50, 52, 7448, 7451, 59, 1, 9618, 59, 1, 9617, 52, 59, 1, 9619, 99, 107, 59, 1, 9608, 4, 2, 101, 111, 7469, 7485, 4, 2, 59, 113, 7475, 7478, 3, 61, 8421, 117, 105, 118, 59, 3, 8801, 8421, 116, 59, 1, 8976, 4, 4, 112, 116, 119, 120, 7499, 7504, 7517, 7523, 102, 59, 3, 55349, 56659, 4, 2, 59, 116, 7510, 7512, 1, 8869, 111, 109, 59, 1, 8869, 116, 105, 101, 59, 1, 8904, 4, 12, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 7549, 7571, 7597, 7619, 7655, 7660, 7682, 7708, 7715, 7721, 7728, 7750, 4, 4, 76, 82, 108, 114, 7559, 7562, 7565, 7568, 59, 1, 9559, 59, 1, 9556, 59, 1, 9558, 59, 1, 9555, 4, 5, 59, 68, 85, 100, 117, 7583, 7585, 7588, 7591, 7594, 1, 9552, 59, 1, 9574, 59, 1, 9577, 59, 1, 9572, 59, 1, 9575, 4, 4, 76, 82, 108, 114, 7607, 7610, 7613, 7616, 59, 1, 9565, 59, 1, 9562, 59, 1, 9564, 59, 1, 9561, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7635, 7637, 7640, 7643, 7646, 7649, 7652, 1, 9553, 59, 1, 9580, 59, 1, 9571, 59, 1, 9568, 59, 1, 9579, 59, 1, 9570, 59, 1, 9567, 111, 120, 59, 1, 10697, 4, 4, 76, 82, 108, 114, 7670, 7673, 7676, 7679, 59, 1, 9557, 59, 1, 9554, 59, 1, 9488, 59, 1, 9484, 4, 5, 59, 68, 85, 100, 117, 7694, 7696, 7699, 7702, 7705, 1, 9472, 59, 1, 9573, 59, 1, 9576, 59, 1, 9516, 59, 1, 9524, 105, 110, 117, 115, 59, 1, 8863, 108, 117, 115, 59, 1, 8862, 105, 109, 101, 115, 59, 1, 8864, 4, 4, 76, 82, 108, 114, 7738, 7741, 7744, 7747, 59, 1, 9563, 59, 1, 9560, 59, 1, 9496, 59, 1, 9492, 4, 7, 59, 72, 76, 82, 104, 108, 114, 7766, 7768, 7771, 7774, 7777, 7780, 7783, 1, 9474, 59, 1, 9578, 59, 1, 9569, 59, 1, 9566, 59, 1, 9532, 59, 1, 9508, 59, 1, 9500, 114, 105, 109, 101, 59, 1, 8245, 4, 2, 101, 118, 7799, 7804, 118, 101, 59, 1, 728, 98, 97, 114, 5, 166, 1, 59, 7812, 1, 166, 4, 4, 99, 101, 105, 111, 7824, 7829, 7834, 7846, 114, 59, 3, 55349, 56503, 109, 105, 59, 1, 8271, 109, 4, 2, 59, 101, 7841, 7843, 1, 8765, 59, 1, 8909, 108, 4, 3, 59, 98, 104, 7855, 7857, 7860, 1, 92, 59, 1, 10693, 115, 117, 98, 59, 1, 10184, 4, 2, 108, 109, 7872, 7885, 108, 4, 2, 59, 101, 7879, 7881, 1, 8226, 116, 59, 1, 8226, 112, 4, 3, 59, 69, 101, 7894, 7896, 7899, 1, 8782, 59, 1, 10926, 4, 2, 59, 113, 7905, 7907, 1, 8783, 59, 1, 8783, 4, 15, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 116, 117, 119, 121, 7942, 8021, 8075, 8080, 8121, 8126, 8157, 8279, 8295, 8430, 8446, 8485, 8491, 8707, 8726, 4, 3, 99, 112, 114, 7950, 7956, 8007, 117, 116, 101, 59, 1, 263, 4, 6, 59, 97, 98, 99, 100, 115, 7970, 7972, 7977, 7984, 7998, 8003, 1, 8745, 110, 100, 59, 1, 10820, 114, 99, 117, 112, 59, 1, 10825, 4, 2, 97, 117, 7990, 7994, 112, 59, 1, 10827, 112, 59, 1, 10823, 111, 116, 59, 1, 10816, 59, 3, 8745, 65024, 4, 2, 101, 111, 8013, 8017, 116, 59, 1, 8257, 110, 59, 1, 711, 4, 4, 97, 101, 105, 117, 8031, 8046, 8056, 8061, 4, 2, 112, 114, 8037, 8041, 115, 59, 1, 10829, 111, 110, 59, 1, 269, 100, 105, 108, 5, 231, 1, 59, 8054, 1, 231, 114, 99, 59, 1, 265, 112, 115, 4, 2, 59, 115, 8069, 8071, 1, 10828, 109, 59, 1, 10832, 111, 116, 59, 1, 267, 4, 3, 100, 109, 110, 8088, 8097, 8104, 105, 108, 5, 184, 1, 59, 8095, 1, 184, 112, 116, 121, 118, 59, 1, 10674, 116, 5, 162, 2, 59, 101, 8112, 8114, 1, 162, 114, 100, 111, 116, 59, 1, 183, 114, 59, 3, 55349, 56608, 4, 3, 99, 101, 105, 8134, 8138, 8154, 121, 59, 1, 1095, 99, 107, 4, 2, 59, 109, 8146, 8148, 1, 10003, 97, 114, 107, 59, 1, 10003, 59, 1, 967, 114, 4, 7, 59, 69, 99, 101, 102, 109, 115, 8174, 8176, 8179, 8258, 8261, 8268, 8273, 1, 9675, 59, 1, 10691, 4, 3, 59, 101, 108, 8187, 8189, 8193, 1, 710, 113, 59, 1, 8791, 101, 4, 2, 97, 100, 8200, 8223, 114, 114, 111, 119, 4, 2, 108, 114, 8210, 8216, 101, 102, 116, 59, 1, 8634, 105, 103, 104, 116, 59, 1, 8635, 4, 5, 82, 83, 97, 99, 100, 8235, 8238, 8241, 8246, 8252, 59, 1, 174, 59, 1, 9416, 115, 116, 59, 1, 8859, 105, 114, 99, 59, 1, 8858, 97, 115, 104, 59, 1, 8861, 59, 1, 8791, 110, 105, 110, 116, 59, 1, 10768, 105, 100, 59, 1, 10991, 99, 105, 114, 59, 1, 10690, 117, 98, 115, 4, 2, 59, 117, 8288, 8290, 1, 9827, 105, 116, 59, 1, 9827, 4, 4, 108, 109, 110, 112, 8305, 8326, 8376, 8400, 111, 110, 4, 2, 59, 101, 8313, 8315, 1, 58, 4, 2, 59, 113, 8321, 8323, 1, 8788, 59, 1, 8788, 4, 2, 109, 112, 8332, 8344, 97, 4, 2, 59, 116, 8339, 8341, 1, 44, 59, 1, 64, 4, 3, 59, 102, 108, 8352, 8354, 8358, 1, 8705, 110, 59, 1, 8728, 101, 4, 2, 109, 120, 8365, 8371, 101, 110, 116, 59, 1, 8705, 101, 115, 59, 1, 8450, 4, 2, 103, 105, 8382, 8395, 4, 2, 59, 100, 8388, 8390, 1, 8773, 111, 116, 59, 1, 10861, 110, 116, 59, 1, 8750, 4, 3, 102, 114, 121, 8408, 8412, 8417, 59, 3, 55349, 56660, 111, 100, 59, 1, 8720, 5, 169, 2, 59, 115, 8424, 8426, 1, 169, 114, 59, 1, 8471, 4, 2, 97, 111, 8436, 8441, 114, 114, 59, 1, 8629, 115, 115, 59, 1, 10007, 4, 2, 99, 117, 8452, 8457, 114, 59, 3, 55349, 56504, 4, 2, 98, 112, 8463, 8474, 4, 2, 59, 101, 8469, 8471, 1, 10959, 59, 1, 10961, 4, 2, 59, 101, 8480, 8482, 1, 10960, 59, 1, 10962, 100, 111, 116, 59, 1, 8943, 4, 7, 100, 101, 108, 112, 114, 118, 119, 8507, 8522, 8536, 8550, 8600, 8697, 8702, 97, 114, 114, 4, 2, 108, 114, 8516, 8519, 59, 1, 10552, 59, 1, 10549, 4, 2, 112, 115, 8528, 8532, 114, 59, 1, 8926, 99, 59, 1, 8927, 97, 114, 114, 4, 2, 59, 112, 8545, 8547, 1, 8630, 59, 1, 10557, 4, 6, 59, 98, 99, 100, 111, 115, 8564, 8566, 8573, 8587, 8592, 8596, 1, 8746, 114, 99, 97, 112, 59, 1, 10824, 4, 2, 97, 117, 8579, 8583, 112, 59, 1, 10822, 112, 59, 1, 10826, 111, 116, 59, 1, 8845, 114, 59, 1, 10821, 59, 3, 8746, 65024, 4, 4, 97, 108, 114, 118, 8610, 8623, 8663, 8672, 114, 114, 4, 2, 59, 109, 8618, 8620, 1, 8631, 59, 1, 10556, 121, 4, 3, 101, 118, 119, 8632, 8651, 8656, 113, 4, 2, 112, 115, 8639, 8645, 114, 101, 99, 59, 1, 8926, 117, 99, 99, 59, 1, 8927, 101, 101, 59, 1, 8910, 101, 100, 103, 101, 59, 1, 8911, 101, 110, 5, 164, 1, 59, 8670, 1, 164, 101, 97, 114, 114, 111, 119, 4, 2, 108, 114, 8684, 8690, 101, 102, 116, 59, 1, 8630, 105, 103, 104, 116, 59, 1, 8631, 101, 101, 59, 1, 8910, 101, 100, 59, 1, 8911, 4, 2, 99, 105, 8713, 8721, 111, 110, 105, 110, 116, 59, 1, 8754, 110, 116, 59, 1, 8753, 108, 99, 116, 121, 59, 1, 9005, 4, 19, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 8773, 8778, 8783, 8821, 8839, 8854, 8887, 8914, 8930, 8944, 9036, 9041, 9058, 9197, 9227, 9258, 9281, 9297, 9305, 114, 114, 59, 1, 8659, 97, 114, 59, 1, 10597, 4, 4, 103, 108, 114, 115, 8793, 8799, 8805, 8809, 103, 101, 114, 59, 1, 8224, 101, 116, 104, 59, 1, 8504, 114, 59, 1, 8595, 104, 4, 2, 59, 118, 8816, 8818, 1, 8208, 59, 1, 8867, 4, 2, 107, 108, 8827, 8834, 97, 114, 111, 119, 59, 1, 10511, 97, 99, 59, 1, 733, 4, 2, 97, 121, 8845, 8851, 114, 111, 110, 59, 1, 271, 59, 1, 1076, 4, 3, 59, 97, 111, 8862, 8864, 8880, 1, 8518, 4, 2, 103, 114, 8870, 8876, 103, 101, 114, 59, 1, 8225, 114, 59, 1, 8650, 116, 115, 101, 113, 59, 1, 10871, 4, 3, 103, 108, 109, 8895, 8902, 8907, 5, 176, 1, 59, 8900, 1, 176, 116, 97, 59, 1, 948, 112, 116, 121, 118, 59, 1, 10673, 4, 2, 105, 114, 8920, 8926, 115, 104, 116, 59, 1, 10623, 59, 3, 55349, 56609, 97, 114, 4, 2, 108, 114, 8938, 8941, 59, 1, 8643, 59, 1, 8642, 4, 5, 97, 101, 103, 115, 118, 8956, 8986, 8989, 8996, 9001, 109, 4, 3, 59, 111, 115, 8965, 8967, 8983, 1, 8900, 110, 100, 4, 2, 59, 115, 8975, 8977, 1, 8900, 117, 105, 116, 59, 1, 9830, 59, 1, 9830, 59, 1, 168, 97, 109, 109, 97, 59, 1, 989, 105, 110, 59, 1, 8946, 4, 3, 59, 105, 111, 9009, 9011, 9031, 1, 247, 100, 101, 5, 247, 2, 59, 111, 9020, 9022, 1, 247, 110, 116, 105, 109, 101, 115, 59, 1, 8903, 110, 120, 59, 1, 8903, 99, 121, 59, 1, 1106, 99, 4, 2, 111, 114, 9048, 9053, 114, 110, 59, 1, 8990, 111, 112, 59, 1, 8973, 4, 5, 108, 112, 116, 117, 119, 9070, 9076, 9081, 9130, 9144, 108, 97, 114, 59, 1, 36, 102, 59, 3, 55349, 56661, 4, 5, 59, 101, 109, 112, 115, 9093, 9095, 9109, 9116, 9122, 1, 729, 113, 4, 2, 59, 100, 9102, 9104, 1, 8784, 111, 116, 59, 1, 8785, 105, 110, 117, 115, 59, 1, 8760, 108, 117, 115, 59, 1, 8724, 113, 117, 97, 114, 101, 59, 1, 8865, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 101, 59, 1, 8966, 110, 4, 3, 97, 100, 104, 9153, 9160, 9172, 114, 114, 111, 119, 59, 1, 8595, 111, 119, 110, 97, 114, 114, 111, 119, 115, 59, 1, 8650, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 9184, 9190, 101, 102, 116, 59, 1, 8643, 105, 103, 104, 116, 59, 1, 8642, 4, 2, 98, 99, 9203, 9211, 107, 97, 114, 111, 119, 59, 1, 10512, 4, 2, 111, 114, 9217, 9222, 114, 110, 59, 1, 8991, 111, 112, 59, 1, 8972, 4, 3, 99, 111, 116, 9235, 9248, 9252, 4, 2, 114, 121, 9241, 9245, 59, 3, 55349, 56505, 59, 1, 1109, 108, 59, 1, 10742, 114, 111, 107, 59, 1, 273, 4, 2, 100, 114, 9264, 9269, 111, 116, 59, 1, 8945, 105, 4, 2, 59, 102, 9276, 9278, 1, 9663, 59, 1, 9662, 4, 2, 97, 104, 9287, 9292, 114, 114, 59, 1, 8693, 97, 114, 59, 1, 10607, 97, 110, 103, 108, 101, 59, 1, 10662, 4, 2, 99, 105, 9311, 9315, 121, 59, 1, 1119, 103, 114, 97, 114, 114, 59, 1, 10239, 4, 18, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 9361, 9376, 9398, 9439, 9444, 9447, 9462, 9495, 9531, 9585, 9598, 9614, 9659, 9755, 9771, 9792, 9808, 9826, 4, 2, 68, 111, 9367, 9372, 111, 116, 59, 1, 10871, 116, 59, 1, 8785, 4, 2, 99, 115, 9382, 9392, 117, 116, 101, 5, 233, 1, 59, 9390, 1, 233, 116, 101, 114, 59, 1, 10862, 4, 4, 97, 105, 111, 121, 9408, 9414, 9430, 9436, 114, 111, 110, 59, 1, 283, 114, 4, 2, 59, 99, 9421, 9423, 1, 8790, 5, 234, 1, 59, 9428, 1, 234, 108, 111, 110, 59, 1, 8789, 59, 1, 1101, 111, 116, 59, 1, 279, 59, 1, 8519, 4, 2, 68, 114, 9453, 9458, 111, 116, 59, 1, 8786, 59, 3, 55349, 56610, 4, 3, 59, 114, 115, 9470, 9472, 9482, 1, 10906, 97, 118, 101, 5, 232, 1, 59, 9480, 1, 232, 4, 2, 59, 100, 9488, 9490, 1, 10902, 111, 116, 59, 1, 10904, 4, 4, 59, 105, 108, 115, 9505, 9507, 9515, 9518, 1, 10905, 110, 116, 101, 114, 115, 59, 1, 9191, 59, 1, 8467, 4, 2, 59, 100, 9524, 9526, 1, 10901, 111, 116, 59, 1, 10903, 4, 3, 97, 112, 115, 9539, 9544, 9564, 99, 114, 59, 1, 275, 116, 121, 4, 3, 59, 115, 118, 9554, 9556, 9561, 1, 8709, 101, 116, 59, 1, 8709, 59, 1, 8709, 112, 4, 2, 49, 59, 9571, 9583, 4, 2, 51, 52, 9577, 9580, 59, 1, 8196, 59, 1, 8197, 1, 8195, 4, 2, 103, 115, 9591, 9594, 59, 1, 331, 112, 59, 1, 8194, 4, 2, 103, 112, 9604, 9609, 111, 110, 59, 1, 281, 102, 59, 3, 55349, 56662, 4, 3, 97, 108, 115, 9622, 9635, 9640, 114, 4, 2, 59, 115, 9629, 9631, 1, 8917, 108, 59, 1, 10723, 117, 115, 59, 1, 10865, 105, 4, 3, 59, 108, 118, 9649, 9651, 9656, 1, 949, 111, 110, 59, 1, 949, 59, 1, 1013, 4, 4, 99, 115, 117, 118, 9669, 9686, 9716, 9747, 4, 2, 105, 111, 9675, 9680, 114, 99, 59, 1, 8790, 108, 111, 110, 59, 1, 8789, 4, 2, 105, 108, 9692, 9696, 109, 59, 1, 8770, 97, 110, 116, 4, 2, 103, 108, 9705, 9710, 116, 114, 59, 1, 10902, 101, 115, 115, 59, 1, 10901, 4, 3, 97, 101, 105, 9724, 9729, 9734, 108, 115, 59, 1, 61, 115, 116, 59, 1, 8799, 118, 4, 2, 59, 68, 9741, 9743, 1, 8801, 68, 59, 1, 10872, 112, 97, 114, 115, 108, 59, 1, 10725, 4, 2, 68, 97, 9761, 9766, 111, 116, 59, 1, 8787, 114, 114, 59, 1, 10609, 4, 3, 99, 100, 105, 9779, 9783, 9788, 114, 59, 1, 8495, 111, 116, 59, 1, 8784, 109, 59, 1, 8770, 4, 2, 97, 104, 9798, 9801, 59, 1, 951, 5, 240, 1, 59, 9806, 1, 240, 4, 2, 109, 114, 9814, 9822, 108, 5, 235, 1, 59, 9820, 1, 235, 111, 59, 1, 8364, 4, 3, 99, 105, 112, 9834, 9838, 9843, 108, 59, 1, 33, 115, 116, 59, 1, 8707, 4, 2, 101, 111, 9849, 9859, 99, 116, 97, 116, 105, 111, 110, 59, 1, 8496, 110, 101, 110, 116, 105, 97, 108, 101, 59, 1, 8519, 4, 12, 97, 99, 101, 102, 105, 106, 108, 110, 111, 112, 114, 115, 9896, 9910, 9914, 9921, 9954, 9960, 9967, 9989, 9994, 10027, 10036, 10164, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8786, 121, 59, 1, 1092, 109, 97, 108, 101, 59, 1, 9792, 4, 3, 105, 108, 114, 9929, 9935, 9950, 108, 105, 103, 59, 1, 64259, 4, 2, 105, 108, 9941, 9945, 103, 59, 1, 64256, 105, 103, 59, 1, 64260, 59, 3, 55349, 56611, 108, 105, 103, 59, 1, 64257, 108, 105, 103, 59, 3, 102, 106, 4, 3, 97, 108, 116, 9975, 9979, 9984, 116, 59, 1, 9837, 105, 103, 59, 1, 64258, 110, 115, 59, 1, 9649, 111, 102, 59, 1, 402, 4, 2, 112, 114, 10000, 10005, 102, 59, 3, 55349, 56663, 4, 2, 97, 107, 10011, 10016, 108, 108, 59, 1, 8704, 4, 2, 59, 118, 10022, 10024, 1, 8916, 59, 1, 10969, 97, 114, 116, 105, 110, 116, 59, 1, 10765, 4, 2, 97, 111, 10042, 10159, 4, 2, 99, 115, 10048, 10155, 4, 6, 49, 50, 51, 52, 53, 55, 10062, 10102, 10114, 10135, 10139, 10151, 4, 6, 50, 51, 52, 53, 54, 56, 10076, 10083, 10086, 10093, 10096, 10099, 5, 189, 1, 59, 10081, 1, 189, 59, 1, 8531, 5, 188, 1, 59, 10091, 1, 188, 59, 1, 8533, 59, 1, 8537, 59, 1, 8539, 4, 2, 51, 53, 10108, 10111, 59, 1, 8532, 59, 1, 8534, 4, 3, 52, 53, 56, 10122, 10129, 10132, 5, 190, 1, 59, 10127, 1, 190, 59, 1, 8535, 59, 1, 8540, 53, 59, 1, 8536, 4, 2, 54, 56, 10145, 10148, 59, 1, 8538, 59, 1, 8541, 56, 59, 1, 8542, 108, 59, 1, 8260, 119, 110, 59, 1, 8994, 99, 114, 59, 3, 55349, 56507, 4, 17, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 10206, 10217, 10247, 10254, 10268, 10273, 10358, 10363, 10374, 10380, 10385, 10406, 10458, 10464, 10470, 10497, 10610, 4, 2, 59, 108, 10212, 10214, 1, 8807, 59, 1, 10892, 4, 3, 99, 109, 112, 10225, 10231, 10244, 117, 116, 101, 59, 1, 501, 109, 97, 4, 2, 59, 100, 10239, 10241, 1, 947, 59, 1, 989, 59, 1, 10886, 114, 101, 118, 101, 59, 1, 287, 4, 2, 105, 121, 10260, 10265, 114, 99, 59, 1, 285, 59, 1, 1075, 111, 116, 59, 1, 289, 4, 4, 59, 108, 113, 115, 10283, 10285, 10288, 10308, 1, 8805, 59, 1, 8923, 4, 3, 59, 113, 115, 10296, 10298, 10301, 1, 8805, 59, 1, 8807, 108, 97, 110, 116, 59, 1, 10878, 4, 4, 59, 99, 100, 108, 10318, 10320, 10324, 10345, 1, 10878, 99, 59, 1, 10921, 111, 116, 4, 2, 59, 111, 10332, 10334, 1, 10880, 4, 2, 59, 108, 10340, 10342, 1, 10882, 59, 1, 10884, 4, 2, 59, 101, 10351, 10354, 3, 8923, 65024, 115, 59, 1, 10900, 114, 59, 3, 55349, 56612, 4, 2, 59, 103, 10369, 10371, 1, 8811, 59, 1, 8921, 109, 101, 108, 59, 1, 8503, 99, 121, 59, 1, 1107, 4, 4, 59, 69, 97, 106, 10395, 10397, 10400, 10403, 1, 8823, 59, 1, 10898, 59, 1, 10917, 59, 1, 10916, 4, 4, 69, 97, 101, 115, 10416, 10419, 10434, 10453, 59, 1, 8809, 112, 4, 2, 59, 112, 10426, 10428, 1, 10890, 114, 111, 120, 59, 1, 10890, 4, 2, 59, 113, 10440, 10442, 1, 10888, 4, 2, 59, 113, 10448, 10450, 1, 10888, 59, 1, 8809, 105, 109, 59, 1, 8935, 112, 102, 59, 3, 55349, 56664, 97, 118, 101, 59, 1, 96, 4, 2, 99, 105, 10476, 10480, 114, 59, 1, 8458, 109, 4, 3, 59, 101, 108, 10489, 10491, 10494, 1, 8819, 59, 1, 10894, 59, 1, 10896, 5, 62, 6, 59, 99, 100, 108, 113, 114, 10512, 10514, 10527, 10532, 10538, 10545, 1, 62, 4, 2, 99, 105, 10520, 10523, 59, 1, 10919, 114, 59, 1, 10874, 111, 116, 59, 1, 8919, 80, 97, 114, 59, 1, 10645, 117, 101, 115, 116, 59, 1, 10876, 4, 5, 97, 100, 101, 108, 115, 10557, 10574, 10579, 10599, 10605, 4, 2, 112, 114, 10563, 10570, 112, 114, 111, 120, 59, 1, 10886, 114, 59, 1, 10616, 111, 116, 59, 1, 8919, 113, 4, 2, 108, 113, 10586, 10592, 101, 115, 115, 59, 1, 8923, 108, 101, 115, 115, 59, 1, 10892, 101, 115, 115, 59, 1, 8823, 105, 109, 59, 1, 8819, 4, 2, 101, 110, 10616, 10626, 114, 116, 110, 101, 113, 113, 59, 3, 8809, 65024, 69, 59, 3, 8809, 65024, 4, 10, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 10653, 10658, 10713, 10718, 10724, 10760, 10765, 10786, 10850, 10875, 114, 114, 59, 1, 8660, 4, 4, 105, 108, 109, 114, 10668, 10674, 10678, 10684, 114, 115, 112, 59, 1, 8202, 102, 59, 1, 189, 105, 108, 116, 59, 1, 8459, 4, 2, 100, 114, 10690, 10695, 99, 121, 59, 1, 1098, 4, 3, 59, 99, 119, 10703, 10705, 10710, 1, 8596, 105, 114, 59, 1, 10568, 59, 1, 8621, 97, 114, 59, 1, 8463, 105, 114, 99, 59, 1, 293, 4, 3, 97, 108, 114, 10732, 10748, 10754, 114, 116, 115, 4, 2, 59, 117, 10741, 10743, 1, 9829, 105, 116, 59, 1, 9829, 108, 105, 112, 59, 1, 8230, 99, 111, 110, 59, 1, 8889, 114, 59, 3, 55349, 56613, 115, 4, 2, 101, 119, 10772, 10779, 97, 114, 111, 119, 59, 1, 10533, 97, 114, 111, 119, 59, 1, 10534, 4, 5, 97, 109, 111, 112, 114, 10798, 10803, 10809, 10839, 10844, 114, 114, 59, 1, 8703, 116, 104, 116, 59, 1, 8763, 107, 4, 2, 108, 114, 10816, 10827, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8617, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8618, 102, 59, 3, 55349, 56665, 98, 97, 114, 59, 1, 8213, 4, 3, 99, 108, 116, 10858, 10863, 10869, 114, 59, 3, 55349, 56509, 97, 115, 104, 59, 1, 8463, 114, 111, 107, 59, 1, 295, 4, 2, 98, 112, 10881, 10887, 117, 108, 108, 59, 1, 8259, 104, 101, 110, 59, 1, 8208, 4, 15, 97, 99, 101, 102, 103, 105, 106, 109, 110, 111, 112, 113, 115, 116, 117, 10925, 10936, 10958, 10977, 10990, 11001, 11039, 11045, 11101, 11192, 11220, 11226, 11237, 11285, 11299, 99, 117, 116, 101, 5, 237, 1, 59, 10934, 1, 237, 4, 3, 59, 105, 121, 10944, 10946, 10955, 1, 8291, 114, 99, 5, 238, 1, 59, 10953, 1, 238, 59, 1, 1080, 4, 2, 99, 120, 10964, 10968, 121, 59, 1, 1077, 99, 108, 5, 161, 1, 59, 10975, 1, 161, 4, 2, 102, 114, 10983, 10986, 59, 1, 8660, 59, 3, 55349, 56614, 114, 97, 118, 101, 5, 236, 1, 59, 10999, 1, 236, 4, 4, 59, 105, 110, 111, 11011, 11013, 11028, 11034, 1, 8520, 4, 2, 105, 110, 11019, 11024, 110, 116, 59, 1, 10764, 116, 59, 1, 8749, 102, 105, 110, 59, 1, 10716, 116, 97, 59, 1, 8489, 108, 105, 103, 59, 1, 307, 4, 3, 97, 111, 112, 11053, 11092, 11096, 4, 3, 99, 103, 116, 11061, 11065, 11088, 114, 59, 1, 299, 4, 3, 101, 108, 112, 11073, 11076, 11082, 59, 1, 8465, 105, 110, 101, 59, 1, 8464, 97, 114, 116, 59, 1, 8465, 104, 59, 1, 305, 102, 59, 1, 8887, 101, 100, 59, 1, 437, 4, 5, 59, 99, 102, 111, 116, 11113, 11115, 11121, 11136, 11142, 1, 8712, 97, 114, 101, 59, 1, 8453, 105, 110, 4, 2, 59, 116, 11129, 11131, 1, 8734, 105, 101, 59, 1, 10717, 100, 111, 116, 59, 1, 305, 4, 5, 59, 99, 101, 108, 112, 11154, 11156, 11161, 11179, 11186, 1, 8747, 97, 108, 59, 1, 8890, 4, 2, 103, 114, 11167, 11173, 101, 114, 115, 59, 1, 8484, 99, 97, 108, 59, 1, 8890, 97, 114, 104, 107, 59, 1, 10775, 114, 111, 100, 59, 1, 10812, 4, 4, 99, 103, 112, 116, 11202, 11206, 11211, 11216, 121, 59, 1, 1105, 111, 110, 59, 1, 303, 102, 59, 3, 55349, 56666, 97, 59, 1, 953, 114, 111, 100, 59, 1, 10812, 117, 101, 115, 116, 5, 191, 1, 59, 11235, 1, 191, 4, 2, 99, 105, 11243, 11248, 114, 59, 3, 55349, 56510, 110, 4, 5, 59, 69, 100, 115, 118, 11261, 11263, 11266, 11271, 11282, 1, 8712, 59, 1, 8953, 111, 116, 59, 1, 8949, 4, 2, 59, 118, 11277, 11279, 1, 8948, 59, 1, 8947, 59, 1, 8712, 4, 2, 59, 105, 11291, 11293, 1, 8290, 108, 100, 101, 59, 1, 297, 4, 2, 107, 109, 11305, 11310, 99, 121, 59, 1, 1110, 108, 5, 239, 1, 59, 11316, 1, 239, 4, 6, 99, 102, 109, 111, 115, 117, 11332, 11346, 11351, 11357, 11363, 11380, 4, 2, 105, 121, 11338, 11343, 114, 99, 59, 1, 309, 59, 1, 1081, 114, 59, 3, 55349, 56615, 97, 116, 104, 59, 1, 567, 112, 102, 59, 3, 55349, 56667, 4, 2, 99, 101, 11369, 11374, 114, 59, 3, 55349, 56511, 114, 99, 121, 59, 1, 1112, 107, 99, 121, 59, 1, 1108, 4, 8, 97, 99, 102, 103, 104, 106, 111, 115, 11404, 11418, 11433, 11438, 11445, 11450, 11455, 11461, 112, 112, 97, 4, 2, 59, 118, 11413, 11415, 1, 954, 59, 1, 1008, 4, 2, 101, 121, 11424, 11430, 100, 105, 108, 59, 1, 311, 59, 1, 1082, 114, 59, 3, 55349, 56616, 114, 101, 101, 110, 59, 1, 312, 99, 121, 59, 1, 1093, 99, 121, 59, 1, 1116, 112, 102, 59, 3, 55349, 56668, 99, 114, 59, 3, 55349, 56512, 4, 23, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 11515, 11538, 11544, 11555, 11560, 11721, 11780, 11818, 11868, 12136, 12160, 12171, 12203, 12208, 12246, 12275, 12327, 12509, 12523, 12569, 12641, 12732, 12752, 4, 3, 97, 114, 116, 11523, 11528, 11532, 114, 114, 59, 1, 8666, 114, 59, 1, 8656, 97, 105, 108, 59, 1, 10523, 97, 114, 114, 59, 1, 10510, 4, 2, 59, 103, 11550, 11552, 1, 8806, 59, 1, 10891, 97, 114, 59, 1, 10594, 4, 9, 99, 101, 103, 109, 110, 112, 113, 114, 116, 11580, 11586, 11594, 11600, 11606, 11624, 11627, 11636, 11694, 117, 116, 101, 59, 1, 314, 109, 112, 116, 121, 118, 59, 1, 10676, 114, 97, 110, 59, 1, 8466, 98, 100, 97, 59, 1, 955, 103, 4, 3, 59, 100, 108, 11615, 11617, 11620, 1, 10216, 59, 1, 10641, 101, 59, 1, 10216, 59, 1, 10885, 117, 111, 5, 171, 1, 59, 11634, 1, 171, 114, 4, 8, 59, 98, 102, 104, 108, 112, 115, 116, 11655, 11657, 11669, 11673, 11677, 11681, 11685, 11690, 1, 8592, 4, 2, 59, 102, 11663, 11665, 1, 8676, 115, 59, 1, 10527, 115, 59, 1, 10525, 107, 59, 1, 8617, 112, 59, 1, 8619, 108, 59, 1, 10553, 105, 109, 59, 1, 10611, 108, 59, 1, 8610, 4, 3, 59, 97, 101, 11702, 11704, 11709, 1, 10923, 105, 108, 59, 1, 10521, 4, 2, 59, 115, 11715, 11717, 1, 10925, 59, 3, 10925, 65024, 4, 3, 97, 98, 114, 11729, 11734, 11739, 114, 114, 59, 1, 10508, 114, 107, 59, 1, 10098, 4, 2, 97, 107, 11745, 11758, 99, 4, 2, 101, 107, 11752, 11755, 59, 1, 123, 59, 1, 91, 4, 2, 101, 115, 11764, 11767, 59, 1, 10635, 108, 4, 2, 100, 117, 11774, 11777, 59, 1, 10639, 59, 1, 10637, 4, 4, 97, 101, 117, 121, 11790, 11796, 11811, 11815, 114, 111, 110, 59, 1, 318, 4, 2, 100, 105, 11802, 11807, 105, 108, 59, 1, 316, 108, 59, 1, 8968, 98, 59, 1, 123, 59, 1, 1083, 4, 4, 99, 113, 114, 115, 11828, 11832, 11845, 11864, 97, 59, 1, 10550, 117, 111, 4, 2, 59, 114, 11840, 11842, 1, 8220, 59, 1, 8222, 4, 2, 100, 117, 11851, 11857, 104, 97, 114, 59, 1, 10599, 115, 104, 97, 114, 59, 1, 10571, 104, 59, 1, 8626, 4, 5, 59, 102, 103, 113, 115, 11880, 11882, 12008, 12011, 12031, 1, 8804, 116, 4, 5, 97, 104, 108, 114, 116, 11895, 11913, 11935, 11947, 11996, 114, 114, 111, 119, 4, 2, 59, 116, 11905, 11907, 1, 8592, 97, 105, 108, 59, 1, 8610, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 11925, 11931, 111, 119, 110, 59, 1, 8637, 112, 59, 1, 8636, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8647, 105, 103, 104, 116, 4, 3, 97, 104, 115, 11959, 11974, 11984, 114, 114, 111, 119, 4, 2, 59, 115, 11969, 11971, 1, 8596, 59, 1, 8646, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8651, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8621, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8907, 59, 1, 8922, 4, 3, 59, 113, 115, 12019, 12021, 12024, 1, 8804, 59, 1, 8806, 108, 97, 110, 116, 59, 1, 10877, 4, 5, 59, 99, 100, 103, 115, 12043, 12045, 12049, 12070, 12083, 1, 10877, 99, 59, 1, 10920, 111, 116, 4, 2, 59, 111, 12057, 12059, 1, 10879, 4, 2, 59, 114, 12065, 12067, 1, 10881, 59, 1, 10883, 4, 2, 59, 101, 12076, 12079, 3, 8922, 65024, 115, 59, 1, 10899, 4, 5, 97, 100, 101, 103, 115, 12095, 12103, 12108, 12126, 12131, 112, 112, 114, 111, 120, 59, 1, 10885, 111, 116, 59, 1, 8918, 113, 4, 2, 103, 113, 12115, 12120, 116, 114, 59, 1, 8922, 103, 116, 114, 59, 1, 10891, 116, 114, 59, 1, 8822, 105, 109, 59, 1, 8818, 4, 3, 105, 108, 114, 12144, 12150, 12156, 115, 104, 116, 59, 1, 10620, 111, 111, 114, 59, 1, 8970, 59, 3, 55349, 56617, 4, 2, 59, 69, 12166, 12168, 1, 8822, 59, 1, 10897, 4, 2, 97, 98, 12177, 12198, 114, 4, 2, 100, 117, 12184, 12187, 59, 1, 8637, 4, 2, 59, 108, 12193, 12195, 1, 8636, 59, 1, 10602, 108, 107, 59, 1, 9604, 99, 121, 59, 1, 1113, 4, 5, 59, 97, 99, 104, 116, 12220, 12222, 12227, 12235, 12241, 1, 8810, 114, 114, 59, 1, 8647, 111, 114, 110, 101, 114, 59, 1, 8990, 97, 114, 100, 59, 1, 10603, 114, 105, 59, 1, 9722, 4, 2, 105, 111, 12252, 12258, 100, 111, 116, 59, 1, 320, 117, 115, 116, 4, 2, 59, 97, 12267, 12269, 1, 9136, 99, 104, 101, 59, 1, 9136, 4, 4, 69, 97, 101, 115, 12285, 12288, 12303, 12322, 59, 1, 8808, 112, 4, 2, 59, 112, 12295, 12297, 1, 10889, 114, 111, 120, 59, 1, 10889, 4, 2, 59, 113, 12309, 12311, 1, 10887, 4, 2, 59, 113, 12317, 12319, 1, 10887, 59, 1, 8808, 105, 109, 59, 1, 8934, 4, 8, 97, 98, 110, 111, 112, 116, 119, 122, 12345, 12359, 12364, 12421, 12446, 12467, 12474, 12490, 4, 2, 110, 114, 12351, 12355, 103, 59, 1, 10220, 114, 59, 1, 8701, 114, 107, 59, 1, 10214, 103, 4, 3, 108, 109, 114, 12373, 12401, 12409, 101, 102, 116, 4, 2, 97, 114, 12382, 12389, 114, 114, 111, 119, 59, 1, 10229, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10231, 97, 112, 115, 116, 111, 59, 1, 10236, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 10230, 112, 97, 114, 114, 111, 119, 4, 2, 108, 114, 12433, 12439, 101, 102, 116, 59, 1, 8619, 105, 103, 104, 116, 59, 1, 8620, 4, 3, 97, 102, 108, 12454, 12458, 12462, 114, 59, 1, 10629, 59, 3, 55349, 56669, 117, 115, 59, 1, 10797, 105, 109, 101, 115, 59, 1, 10804, 4, 2, 97, 98, 12480, 12485, 115, 116, 59, 1, 8727, 97, 114, 59, 1, 95, 4, 3, 59, 101, 102, 12498, 12500, 12506, 1, 9674, 110, 103, 101, 59, 1, 9674, 59, 1, 10731, 97, 114, 4, 2, 59, 108, 12517, 12519, 1, 40, 116, 59, 1, 10643, 4, 5, 97, 99, 104, 109, 116, 12535, 12540, 12548, 12561, 12564, 114, 114, 59, 1, 8646, 111, 114, 110, 101, 114, 59, 1, 8991, 97, 114, 4, 2, 59, 100, 12556, 12558, 1, 8651, 59, 1, 10605, 59, 1, 8206, 114, 105, 59, 1, 8895, 4, 6, 97, 99, 104, 105, 113, 116, 12583, 12589, 12594, 12597, 12614, 12635, 113, 117, 111, 59, 1, 8249, 114, 59, 3, 55349, 56513, 59, 1, 8624, 109, 4, 3, 59, 101, 103, 12606, 12608, 12611, 1, 8818, 59, 1, 10893, 59, 1, 10895, 4, 2, 98, 117, 12620, 12623, 59, 1, 91, 111, 4, 2, 59, 114, 12630, 12632, 1, 8216, 59, 1, 8218, 114, 111, 107, 59, 1, 322, 5, 60, 8, 59, 99, 100, 104, 105, 108, 113, 114, 12660, 12662, 12675, 12680, 12686, 12692, 12698, 12705, 1, 60, 4, 2, 99, 105, 12668, 12671, 59, 1, 10918, 114, 59, 1, 10873, 111, 116, 59, 1, 8918, 114, 101, 101, 59, 1, 8907, 109, 101, 115, 59, 1, 8905, 97, 114, 114, 59, 1, 10614, 117, 101, 115, 116, 59, 1, 10875, 4, 2, 80, 105, 12711, 12716, 97, 114, 59, 1, 10646, 4, 3, 59, 101, 102, 12724, 12726, 12729, 1, 9667, 59, 1, 8884, 59, 1, 9666, 114, 4, 2, 100, 117, 12739, 12746, 115, 104, 97, 114, 59, 1, 10570, 104, 97, 114, 59, 1, 10598, 4, 2, 101, 110, 12758, 12768, 114, 116, 110, 101, 113, 113, 59, 3, 8808, 65024, 69, 59, 3, 8808, 65024, 4, 14, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 12803, 12809, 12893, 12908, 12914, 12928, 12933, 12937, 13011, 13025, 13032, 13049, 13052, 13069, 68, 111, 116, 59, 1, 8762, 4, 4, 99, 108, 112, 114, 12819, 12827, 12849, 12887, 114, 5, 175, 1, 59, 12825, 1, 175, 4, 2, 101, 116, 12833, 12836, 59, 1, 9794, 4, 2, 59, 101, 12842, 12844, 1, 10016, 115, 101, 59, 1, 10016, 4, 2, 59, 115, 12855, 12857, 1, 8614, 116, 111, 4, 4, 59, 100, 108, 117, 12869, 12871, 12877, 12883, 1, 8614, 111, 119, 110, 59, 1, 8615, 101, 102, 116, 59, 1, 8612, 112, 59, 1, 8613, 107, 101, 114, 59, 1, 9646, 4, 2, 111, 121, 12899, 12905, 109, 109, 97, 59, 1, 10793, 59, 1, 1084, 97, 115, 104, 59, 1, 8212, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 59, 1, 8737, 114, 59, 3, 55349, 56618, 111, 59, 1, 8487, 4, 3, 99, 100, 110, 12945, 12954, 12985, 114, 111, 5, 181, 1, 59, 12952, 1, 181, 4, 4, 59, 97, 99, 100, 12964, 12966, 12971, 12976, 1, 8739, 115, 116, 59, 1, 42, 105, 114, 59, 1, 10992, 111, 116, 5, 183, 1, 59, 12983, 1, 183, 117, 115, 4, 3, 59, 98, 100, 12995, 12997, 13000, 1, 8722, 59, 1, 8863, 4, 2, 59, 117, 13006, 13008, 1, 8760, 59, 1, 10794, 4, 2, 99, 100, 13017, 13021, 112, 59, 1, 10971, 114, 59, 1, 8230, 112, 108, 117, 115, 59, 1, 8723, 4, 2, 100, 112, 13038, 13044, 101, 108, 115, 59, 1, 8871, 102, 59, 3, 55349, 56670, 59, 1, 8723, 4, 2, 99, 116, 13058, 13063, 114, 59, 3, 55349, 56514, 112, 111, 115, 59, 1, 8766, 4, 3, 59, 108, 109, 13077, 13079, 13087, 1, 956, 116, 105, 109, 97, 112, 59, 1, 8888, 97, 112, 59, 1, 8888, 4, 24, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 13142, 13165, 13217, 13229, 13247, 13330, 13359, 13414, 13420, 13508, 13513, 13579, 13602, 13626, 13631, 13762, 13767, 13855, 13936, 13995, 14214, 14285, 14312, 14432, 4, 2, 103, 116, 13148, 13152, 59, 3, 8921, 824, 4, 2, 59, 118, 13158, 13161, 3, 8811, 8402, 59, 3, 8811, 824, 4, 3, 101, 108, 116, 13173, 13200, 13204, 102, 116, 4, 2, 97, 114, 13181, 13188, 114, 114, 111, 119, 59, 1, 8653, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8654, 59, 3, 8920, 824, 4, 2, 59, 118, 13210, 13213, 3, 8810, 8402, 59, 3, 8810, 824, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8655, 4, 2, 68, 100, 13235, 13241, 97, 115, 104, 59, 1, 8879, 97, 115, 104, 59, 1, 8878, 4, 5, 98, 99, 110, 112, 116, 13259, 13264, 13270, 13275, 13308, 108, 97, 59, 1, 8711, 117, 116, 101, 59, 1, 324, 103, 59, 3, 8736, 8402, 4, 5, 59, 69, 105, 111, 112, 13287, 13289, 13293, 13298, 13302, 1, 8777, 59, 3, 10864, 824, 100, 59, 3, 8779, 824, 115, 59, 1, 329, 114, 111, 120, 59, 1, 8777, 117, 114, 4, 2, 59, 97, 13316, 13318, 1, 9838, 108, 4, 2, 59, 115, 13325, 13327, 1, 9838, 59, 1, 8469, 4, 2, 115, 117, 13336, 13344, 112, 5, 160, 1, 59, 13342, 1, 160, 109, 112, 4, 2, 59, 101, 13352, 13355, 3, 8782, 824, 59, 3, 8783, 824, 4, 5, 97, 101, 111, 117, 121, 13371, 13385, 13391, 13407, 13411, 4, 2, 112, 114, 13377, 13380, 59, 1, 10819, 111, 110, 59, 1, 328, 100, 105, 108, 59, 1, 326, 110, 103, 4, 2, 59, 100, 13399, 13401, 1, 8775, 111, 116, 59, 3, 10861, 824, 112, 59, 1, 10818, 59, 1, 1085, 97, 115, 104, 59, 1, 8211, 4, 7, 59, 65, 97, 100, 113, 115, 120, 13436, 13438, 13443, 13466, 13472, 13478, 13494, 1, 8800, 114, 114, 59, 1, 8663, 114, 4, 2, 104, 114, 13450, 13454, 107, 59, 1, 10532, 4, 2, 59, 111, 13460, 13462, 1, 8599, 119, 59, 1, 8599, 111, 116, 59, 3, 8784, 824, 117, 105, 118, 59, 1, 8802, 4, 2, 101, 105, 13484, 13489, 97, 114, 59, 1, 10536, 109, 59, 3, 8770, 824, 105, 115, 116, 4, 2, 59, 115, 13503, 13505, 1, 8708, 59, 1, 8708, 114, 59, 3, 55349, 56619, 4, 4, 69, 101, 115, 116, 13523, 13527, 13563, 13568, 59, 3, 8807, 824, 4, 3, 59, 113, 115, 13535, 13537, 13559, 1, 8817, 4, 3, 59, 113, 115, 13545, 13547, 13551, 1, 8817, 59, 3, 8807, 824, 108, 97, 110, 116, 59, 3, 10878, 824, 59, 3, 10878, 824, 105, 109, 59, 1, 8821, 4, 2, 59, 114, 13574, 13576, 1, 8815, 59, 1, 8815, 4, 3, 65, 97, 112, 13587, 13592, 13597, 114, 114, 59, 1, 8654, 114, 114, 59, 1, 8622, 97, 114, 59, 1, 10994, 4, 3, 59, 115, 118, 13610, 13612, 13623, 1, 8715, 4, 2, 59, 100, 13618, 13620, 1, 8956, 59, 1, 8954, 59, 1, 8715, 99, 121, 59, 1, 1114, 4, 7, 65, 69, 97, 100, 101, 115, 116, 13647, 13652, 13656, 13661, 13665, 13737, 13742, 114, 114, 59, 1, 8653, 59, 3, 8806, 824, 114, 114, 59, 1, 8602, 114, 59, 1, 8229, 4, 4, 59, 102, 113, 115, 13675, 13677, 13703, 13725, 1, 8816, 116, 4, 2, 97, 114, 13684, 13691, 114, 114, 111, 119, 59, 1, 8602, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8622, 4, 3, 59, 113, 115, 13711, 13713, 13717, 1, 8816, 59, 3, 8806, 824, 108, 97, 110, 116, 59, 3, 10877, 824, 4, 2, 59, 115, 13731, 13734, 3, 10877, 824, 59, 1, 8814, 105, 109, 59, 1, 8820, 4, 2, 59, 114, 13748, 13750, 1, 8814, 105, 4, 2, 59, 101, 13757, 13759, 1, 8938, 59, 1, 8940, 105, 100, 59, 1, 8740, 4, 2, 112, 116, 13773, 13778, 102, 59, 3, 55349, 56671, 5, 172, 3, 59, 105, 110, 13787, 13789, 13829, 1, 172, 110, 4, 4, 59, 69, 100, 118, 13800, 13802, 13806, 13812, 1, 8713, 59, 3, 8953, 824, 111, 116, 59, 3, 8949, 824, 4, 3, 97, 98, 99, 13820, 13823, 13826, 59, 1, 8713, 59, 1, 8951, 59, 1, 8950, 105, 4, 2, 59, 118, 13836, 13838, 1, 8716, 4, 3, 97, 98, 99, 13846, 13849, 13852, 59, 1, 8716, 59, 1, 8958, 59, 1, 8957, 4, 3, 97, 111, 114, 13863, 13892, 13899, 114, 4, 4, 59, 97, 115, 116, 13874, 13876, 13883, 13888, 1, 8742, 108, 108, 101, 108, 59, 1, 8742, 108, 59, 3, 11005, 8421, 59, 3, 8706, 824, 108, 105, 110, 116, 59, 1, 10772, 4, 3, 59, 99, 101, 13907, 13909, 13914, 1, 8832, 117, 101, 59, 1, 8928, 4, 2, 59, 99, 13920, 13923, 3, 10927, 824, 4, 2, 59, 101, 13929, 13931, 1, 8832, 113, 59, 3, 10927, 824, 4, 4, 65, 97, 105, 116, 13946, 13951, 13971, 13982, 114, 114, 59, 1, 8655, 114, 114, 4, 3, 59, 99, 119, 13961, 13963, 13967, 1, 8603, 59, 3, 10547, 824, 59, 3, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8603, 114, 105, 4, 2, 59, 101, 13990, 13992, 1, 8939, 59, 1, 8941, 4, 7, 99, 104, 105, 109, 112, 113, 117, 14011, 14036, 14060, 14080, 14085, 14090, 14106, 4, 4, 59, 99, 101, 114, 14021, 14023, 14028, 14032, 1, 8833, 117, 101, 59, 1, 8929, 59, 3, 10928, 824, 59, 3, 55349, 56515, 111, 114, 116, 4, 2, 109, 112, 14045, 14050, 105, 100, 59, 1, 8740, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8742, 109, 4, 2, 59, 101, 14067, 14069, 1, 8769, 4, 2, 59, 113, 14075, 14077, 1, 8772, 59, 1, 8772, 105, 100, 59, 1, 8740, 97, 114, 59, 1, 8742, 115, 117, 4, 2, 98, 112, 14098, 14102, 101, 59, 1, 8930, 101, 59, 1, 8931, 4, 3, 98, 99, 112, 14114, 14157, 14171, 4, 4, 59, 69, 101, 115, 14124, 14126, 14130, 14133, 1, 8836, 59, 3, 10949, 824, 59, 1, 8840, 101, 116, 4, 2, 59, 101, 14141, 14144, 3, 8834, 8402, 113, 4, 2, 59, 113, 14151, 14153, 1, 8840, 59, 3, 10949, 824, 99, 4, 2, 59, 101, 14164, 14166, 1, 8833, 113, 59, 3, 10928, 824, 4, 4, 59, 69, 101, 115, 14181, 14183, 14187, 14190, 1, 8837, 59, 3, 10950, 824, 59, 1, 8841, 101, 116, 4, 2, 59, 101, 14198, 14201, 3, 8835, 8402, 113, 4, 2, 59, 113, 14208, 14210, 1, 8841, 59, 3, 10950, 824, 4, 4, 103, 105, 108, 114, 14224, 14228, 14238, 14242, 108, 59, 1, 8825, 108, 100, 101, 5, 241, 1, 59, 14236, 1, 241, 103, 59, 1, 8824, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 14254, 14269, 101, 102, 116, 4, 2, 59, 101, 14263, 14265, 1, 8938, 113, 59, 1, 8940, 105, 103, 104, 116, 4, 2, 59, 101, 14279, 14281, 1, 8939, 113, 59, 1, 8941, 4, 2, 59, 109, 14291, 14293, 1, 957, 4, 3, 59, 101, 115, 14301, 14303, 14308, 1, 35, 114, 111, 59, 1, 8470, 112, 59, 1, 8199, 4, 9, 68, 72, 97, 100, 103, 105, 108, 114, 115, 14332, 14338, 14344, 14349, 14355, 14369, 14376, 14408, 14426, 97, 115, 104, 59, 1, 8877, 97, 114, 114, 59, 1, 10500, 112, 59, 3, 8781, 8402, 97, 115, 104, 59, 1, 8876, 4, 2, 101, 116, 14361, 14365, 59, 3, 8805, 8402, 59, 3, 62, 8402, 110, 102, 105, 110, 59, 1, 10718, 4, 3, 65, 101, 116, 14384, 14389, 14393, 114, 114, 59, 1, 10498, 59, 3, 8804, 8402, 4, 2, 59, 114, 14399, 14402, 3, 60, 8402, 105, 101, 59, 3, 8884, 8402, 4, 2, 65, 116, 14414, 14419, 114, 114, 59, 1, 10499, 114, 105, 101, 59, 3, 8885, 8402, 105, 109, 59, 3, 8764, 8402, 4, 3, 65, 97, 110, 14440, 14445, 14468, 114, 114, 59, 1, 8662, 114, 4, 2, 104, 114, 14452, 14456, 107, 59, 1, 10531, 4, 2, 59, 111, 14462, 14464, 1, 8598, 119, 59, 1, 8598, 101, 97, 114, 59, 1, 10535, 4, 18, 83, 97, 99, 100, 101, 102, 103, 104, 105, 108, 109, 111, 112, 114, 115, 116, 117, 118, 14512, 14515, 14535, 14560, 14597, 14603, 14618, 14643, 14657, 14662, 14701, 14741, 14747, 14769, 14851, 14877, 14907, 14916, 59, 1, 9416, 4, 2, 99, 115, 14521, 14531, 117, 116, 101, 5, 243, 1, 59, 14529, 1, 243, 116, 59, 1, 8859, 4, 2, 105, 121, 14541, 14557, 114, 4, 2, 59, 99, 14548, 14550, 1, 8858, 5, 244, 1, 59, 14555, 1, 244, 59, 1, 1086, 4, 5, 97, 98, 105, 111, 115, 14572, 14577, 14583, 14587, 14591, 115, 104, 59, 1, 8861, 108, 97, 99, 59, 1, 337, 118, 59, 1, 10808, 116, 59, 1, 8857, 111, 108, 100, 59, 1, 10684, 108, 105, 103, 59, 1, 339, 4, 2, 99, 114, 14609, 14614, 105, 114, 59, 1, 10687, 59, 3, 55349, 56620, 4, 3, 111, 114, 116, 14626, 14630, 14640, 110, 59, 1, 731, 97, 118, 101, 5, 242, 1, 59, 14638, 1, 242, 59, 1, 10689, 4, 2, 98, 109, 14649, 14654, 97, 114, 59, 1, 10677, 59, 1, 937, 110, 116, 59, 1, 8750, 4, 4, 97, 99, 105, 116, 14672, 14677, 14693, 14698, 114, 114, 59, 1, 8634, 4, 2, 105, 114, 14683, 14687, 114, 59, 1, 10686, 111, 115, 115, 59, 1, 10683, 110, 101, 59, 1, 8254, 59, 1, 10688, 4, 3, 97, 101, 105, 14709, 14714, 14719, 99, 114, 59, 1, 333, 103, 97, 59, 1, 969, 4, 3, 99, 100, 110, 14727, 14733, 14736, 114, 111, 110, 59, 1, 959, 59, 1, 10678, 117, 115, 59, 1, 8854, 112, 102, 59, 3, 55349, 56672, 4, 3, 97, 101, 108, 14755, 14759, 14764, 114, 59, 1, 10679, 114, 112, 59, 1, 10681, 117, 115, 59, 1, 8853, 4, 7, 59, 97, 100, 105, 111, 115, 118, 14785, 14787, 14792, 14831, 14837, 14841, 14848, 1, 8744, 114, 114, 59, 1, 8635, 4, 4, 59, 101, 102, 109, 14802, 14804, 14817, 14824, 1, 10845, 114, 4, 2, 59, 111, 14811, 14813, 1, 8500, 102, 59, 1, 8500, 5, 170, 1, 59, 14822, 1, 170, 5, 186, 1, 59, 14829, 1, 186, 103, 111, 102, 59, 1, 8886, 114, 59, 1, 10838, 108, 111, 112, 101, 59, 1, 10839, 59, 1, 10843, 4, 3, 99, 108, 111, 14859, 14863, 14873, 114, 59, 1, 8500, 97, 115, 104, 5, 248, 1, 59, 14871, 1, 248, 108, 59, 1, 8856, 105, 4, 2, 108, 109, 14884, 14893, 100, 101, 5, 245, 1, 59, 14891, 1, 245, 101, 115, 4, 2, 59, 97, 14901, 14903, 1, 8855, 115, 59, 1, 10806, 109, 108, 5, 246, 1, 59, 14914, 1, 246, 98, 97, 114, 59, 1, 9021, 4, 12, 97, 99, 101, 102, 104, 105, 108, 109, 111, 114, 115, 117, 14948, 14992, 14996, 15033, 15038, 15068, 15090, 15189, 15192, 15222, 15427, 15441, 114, 4, 4, 59, 97, 115, 116, 14959, 14961, 14976, 14989, 1, 8741, 5, 182, 2, 59, 108, 14968, 14970, 1, 182, 108, 101, 108, 59, 1, 8741, 4, 2, 105, 108, 14982, 14986, 109, 59, 1, 10995, 59, 1, 11005, 59, 1, 8706, 121, 59, 1, 1087, 114, 4, 5, 99, 105, 109, 112, 116, 15009, 15014, 15019, 15024, 15027, 110, 116, 59, 1, 37, 111, 100, 59, 1, 46, 105, 108, 59, 1, 8240, 59, 1, 8869, 101, 110, 107, 59, 1, 8241, 114, 59, 3, 55349, 56621, 4, 3, 105, 109, 111, 15046, 15057, 15063, 4, 2, 59, 118, 15052, 15054, 1, 966, 59, 1, 981, 109, 97, 116, 59, 1, 8499, 110, 101, 59, 1, 9742, 4, 3, 59, 116, 118, 15076, 15078, 15087, 1, 960, 99, 104, 102, 111, 114, 107, 59, 1, 8916, 59, 1, 982, 4, 2, 97, 117, 15096, 15119, 110, 4, 2, 99, 107, 15103, 15115, 107, 4, 2, 59, 104, 15110, 15112, 1, 8463, 59, 1, 8462, 118, 59, 1, 8463, 115, 4, 9, 59, 97, 98, 99, 100, 101, 109, 115, 116, 15140, 15142, 15148, 15151, 15156, 15168, 15171, 15179, 15184, 1, 43, 99, 105, 114, 59, 1, 10787, 59, 1, 8862, 105, 114, 59, 1, 10786, 4, 2, 111, 117, 15162, 15165, 59, 1, 8724, 59, 1, 10789, 59, 1, 10866, 110, 5, 177, 1, 59, 15177, 1, 177, 105, 109, 59, 1, 10790, 119, 111, 59, 1, 10791, 59, 1, 177, 4, 3, 105, 112, 117, 15200, 15208, 15213, 110, 116, 105, 110, 116, 59, 1, 10773, 102, 59, 3, 55349, 56673, 110, 100, 5, 163, 1, 59, 15220, 1, 163, 4, 10, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 15244, 15246, 15249, 15253, 15258, 15334, 15347, 15367, 15416, 15421, 1, 8826, 59, 1, 10931, 112, 59, 1, 10935, 117, 101, 59, 1, 8828, 4, 2, 59, 99, 15264, 15266, 1, 10927, 4, 6, 59, 97, 99, 101, 110, 115, 15280, 15282, 15290, 15299, 15303, 15329, 1, 8826, 112, 112, 114, 111, 120, 59, 1, 10935, 117, 114, 108, 121, 101, 113, 59, 1, 8828, 113, 59, 1, 10927, 4, 3, 97, 101, 115, 15311, 15319, 15324, 112, 112, 114, 111, 120, 59, 1, 10937, 113, 113, 59, 1, 10933, 105, 109, 59, 1, 8936, 105, 109, 59, 1, 8830, 109, 101, 4, 2, 59, 115, 15342, 15344, 1, 8242, 59, 1, 8473, 4, 3, 69, 97, 115, 15355, 15358, 15362, 59, 1, 10933, 112, 59, 1, 10937, 105, 109, 59, 1, 8936, 4, 3, 100, 102, 112, 15375, 15378, 15404, 59, 1, 8719, 4, 3, 97, 108, 115, 15386, 15392, 15398, 108, 97, 114, 59, 1, 9006, 105, 110, 101, 59, 1, 8978, 117, 114, 102, 59, 1, 8979, 4, 2, 59, 116, 15410, 15412, 1, 8733, 111, 59, 1, 8733, 105, 109, 59, 1, 8830, 114, 101, 108, 59, 1, 8880, 4, 2, 99, 105, 15433, 15438, 114, 59, 3, 55349, 56517, 59, 1, 968, 110, 99, 115, 112, 59, 1, 8200, 4, 6, 102, 105, 111, 112, 115, 117, 15462, 15467, 15472, 15478, 15485, 15491, 114, 59, 3, 55349, 56622, 110, 116, 59, 1, 10764, 112, 102, 59, 3, 55349, 56674, 114, 105, 109, 101, 59, 1, 8279, 99, 114, 59, 3, 55349, 56518, 4, 3, 97, 101, 111, 15499, 15520, 15534, 116, 4, 2, 101, 105, 15506, 15515, 114, 110, 105, 111, 110, 115, 59, 1, 8461, 110, 116, 59, 1, 10774, 115, 116, 4, 2, 59, 101, 15528, 15530, 1, 63, 113, 59, 1, 8799, 116, 5, 34, 1, 59, 15540, 1, 34, 4, 21, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 15586, 15609, 15615, 15620, 15796, 15855, 15893, 15931, 15977, 16001, 16039, 16183, 16204, 16222, 16228, 16285, 16312, 16318, 16363, 16408, 16416, 4, 3, 97, 114, 116, 15594, 15599, 15603, 114, 114, 59, 1, 8667, 114, 59, 1, 8658, 97, 105, 108, 59, 1, 10524, 97, 114, 114, 59, 1, 10511, 97, 114, 59, 1, 10596, 4, 7, 99, 100, 101, 110, 113, 114, 116, 15636, 15651, 15656, 15664, 15687, 15696, 15770, 4, 2, 101, 117, 15642, 15646, 59, 3, 8765, 817, 116, 101, 59, 1, 341, 105, 99, 59, 1, 8730, 109, 112, 116, 121, 118, 59, 1, 10675, 103, 4, 4, 59, 100, 101, 108, 15675, 15677, 15680, 15683, 1, 10217, 59, 1, 10642, 59, 1, 10661, 101, 59, 1, 10217, 117, 111, 5, 187, 1, 59, 15694, 1, 187, 114, 4, 11, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 15721, 15723, 15727, 15739, 15742, 15746, 15750, 15754, 15758, 15763, 15767, 1, 8594, 112, 59, 1, 10613, 4, 2, 59, 102, 15733, 15735, 1, 8677, 115, 59, 1, 10528, 59, 1, 10547, 115, 59, 1, 10526, 107, 59, 1, 8618, 112, 59, 1, 8620, 108, 59, 1, 10565, 105, 109, 59, 1, 10612, 108, 59, 1, 8611, 59, 1, 8605, 4, 2, 97, 105, 15776, 15781, 105, 108, 59, 1, 10522, 111, 4, 2, 59, 110, 15788, 15790, 1, 8758, 97, 108, 115, 59, 1, 8474, 4, 3, 97, 98, 114, 15804, 15809, 15814, 114, 114, 59, 1, 10509, 114, 107, 59, 1, 10099, 4, 2, 97, 107, 15820, 15833, 99, 4, 2, 101, 107, 15827, 15830, 59, 1, 125, 59, 1, 93, 4, 2, 101, 115, 15839, 15842, 59, 1, 10636, 108, 4, 2, 100, 117, 15849, 15852, 59, 1, 10638, 59, 1, 10640, 4, 4, 97, 101, 117, 121, 15865, 15871, 15886, 15890, 114, 111, 110, 59, 1, 345, 4, 2, 100, 105, 15877, 15882, 105, 108, 59, 1, 343, 108, 59, 1, 8969, 98, 59, 1, 125, 59, 1, 1088, 4, 4, 99, 108, 113, 115, 15903, 15907, 15914, 15927, 97, 59, 1, 10551, 100, 104, 97, 114, 59, 1, 10601, 117, 111, 4, 2, 59, 114, 15922, 15924, 1, 8221, 59, 1, 8221, 104, 59, 1, 8627, 4, 3, 97, 99, 103, 15939, 15966, 15970, 108, 4, 4, 59, 105, 112, 115, 15950, 15952, 15957, 15963, 1, 8476, 110, 101, 59, 1, 8475, 97, 114, 116, 59, 1, 8476, 59, 1, 8477, 116, 59, 1, 9645, 5, 174, 1, 59, 15975, 1, 174, 4, 3, 105, 108, 114, 15985, 15991, 15997, 115, 104, 116, 59, 1, 10621, 111, 111, 114, 59, 1, 8971, 59, 3, 55349, 56623, 4, 2, 97, 111, 16007, 16028, 114, 4, 2, 100, 117, 16014, 16017, 59, 1, 8641, 4, 2, 59, 108, 16023, 16025, 1, 8640, 59, 1, 10604, 4, 2, 59, 118, 16034, 16036, 1, 961, 59, 1, 1009, 4, 3, 103, 110, 115, 16047, 16167, 16171, 104, 116, 4, 6, 97, 104, 108, 114, 115, 116, 16063, 16081, 16103, 16130, 16143, 16155, 114, 114, 111, 119, 4, 2, 59, 116, 16073, 16075, 1, 8594, 97, 105, 108, 59, 1, 8611, 97, 114, 112, 111, 111, 110, 4, 2, 100, 117, 16093, 16099, 111, 119, 110, 59, 1, 8641, 112, 59, 1, 8640, 101, 102, 116, 4, 2, 97, 104, 16112, 16120, 114, 114, 111, 119, 115, 59, 1, 8644, 97, 114, 112, 111, 111, 110, 115, 59, 1, 8652, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 1, 8649, 113, 117, 105, 103, 97, 114, 114, 111, 119, 59, 1, 8605, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 1, 8908, 103, 59, 1, 730, 105, 110, 103, 100, 111, 116, 115, 101, 113, 59, 1, 8787, 4, 3, 97, 104, 109, 16191, 16196, 16201, 114, 114, 59, 1, 8644, 97, 114, 59, 1, 8652, 59, 1, 8207, 111, 117, 115, 116, 4, 2, 59, 97, 16214, 16216, 1, 9137, 99, 104, 101, 59, 1, 9137, 109, 105, 100, 59, 1, 10990, 4, 4, 97, 98, 112, 116, 16238, 16252, 16257, 16278, 4, 2, 110, 114, 16244, 16248, 103, 59, 1, 10221, 114, 59, 1, 8702, 114, 107, 59, 1, 10215, 4, 3, 97, 102, 108, 16265, 16269, 16273, 114, 59, 1, 10630, 59, 3, 55349, 56675, 117, 115, 59, 1, 10798, 105, 109, 101, 115, 59, 1, 10805, 4, 2, 97, 112, 16291, 16304, 114, 4, 2, 59, 103, 16298, 16300, 1, 41, 116, 59, 1, 10644, 111, 108, 105, 110, 116, 59, 1, 10770, 97, 114, 114, 59, 1, 8649, 4, 4, 97, 99, 104, 113, 16328, 16334, 16339, 16342, 113, 117, 111, 59, 1, 8250, 114, 59, 3, 55349, 56519, 59, 1, 8625, 4, 2, 98, 117, 16348, 16351, 59, 1, 93, 111, 4, 2, 59, 114, 16358, 16360, 1, 8217, 59, 1, 8217, 4, 3, 104, 105, 114, 16371, 16377, 16383, 114, 101, 101, 59, 1, 8908, 109, 101, 115, 59, 1, 8906, 105, 4, 4, 59, 101, 102, 108, 16394, 16396, 16399, 16402, 1, 9657, 59, 1, 8885, 59, 1, 9656, 116, 114, 105, 59, 1, 10702, 108, 117, 104, 97, 114, 59, 1, 10600, 59, 1, 8478, 4, 19, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 111, 112, 113, 114, 115, 116, 117, 119, 122, 16459, 16466, 16472, 16572, 16590, 16672, 16687, 16746, 16844, 16850, 16924, 16963, 16988, 17115, 17121, 17154, 17206, 17614, 17656, 99, 117, 116, 101, 59, 1, 347, 113, 117, 111, 59, 1, 8218, 4, 10, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 16494, 16496, 16499, 16513, 16518, 16531, 16536, 16556, 16564, 16569, 1, 8827, 59, 1, 10932, 4, 2, 112, 114, 16505, 16508, 59, 1, 10936, 111, 110, 59, 1, 353, 117, 101, 59, 1, 8829, 4, 2, 59, 100, 16524, 16526, 1, 10928, 105, 108, 59, 1, 351, 114, 99, 59, 1, 349, 4, 3, 69, 97, 115, 16544, 16547, 16551, 59, 1, 10934, 112, 59, 1, 10938, 105, 109, 59, 1, 8937, 111, 108, 105, 110, 116, 59, 1, 10771, 105, 109, 59, 1, 8831, 59, 1, 1089, 111, 116, 4, 3, 59, 98, 101, 16582, 16584, 16587, 1, 8901, 59, 1, 8865, 59, 1, 10854, 4, 7, 65, 97, 99, 109, 115, 116, 120, 16606, 16611, 16634, 16642, 16646, 16652, 16668, 114, 114, 59, 1, 8664, 114, 4, 2, 104, 114, 16618, 16622, 107, 59, 1, 10533, 4, 2, 59, 111, 16628, 16630, 1, 8600, 119, 59, 1, 8600, 116, 5, 167, 1, 59, 16640, 1, 167, 105, 59, 1, 59, 119, 97, 114, 59, 1, 10537, 109, 4, 2, 105, 110, 16659, 16665, 110, 117, 115, 59, 1, 8726, 59, 1, 8726, 116, 59, 1, 10038, 114, 4, 2, 59, 111, 16679, 16682, 3, 55349, 56624, 119, 110, 59, 1, 8994, 4, 4, 97, 99, 111, 121, 16697, 16702, 16716, 16739, 114, 112, 59, 1, 9839, 4, 2, 104, 121, 16708, 16713, 99, 121, 59, 1, 1097, 59, 1, 1096, 114, 116, 4, 2, 109, 112, 16724, 16729, 105, 100, 59, 1, 8739, 97, 114, 97, 108, 108, 101, 108, 59, 1, 8741, 5, 173, 1, 59, 16744, 1, 173, 4, 2, 103, 109, 16752, 16770, 109, 97, 4, 3, 59, 102, 118, 16762, 16764, 16767, 1, 963, 59, 1, 962, 59, 1, 962, 4, 8, 59, 100, 101, 103, 108, 110, 112, 114, 16788, 16790, 16795, 16806, 16817, 16828, 16832, 16838, 1, 8764, 111, 116, 59, 1, 10858, 4, 2, 59, 113, 16801, 16803, 1, 8771, 59, 1, 8771, 4, 2, 59, 69, 16812, 16814, 1, 10910, 59, 1, 10912, 4, 2, 59, 69, 16823, 16825, 1, 10909, 59, 1, 10911, 101, 59, 1, 8774, 108, 117, 115, 59, 1, 10788, 97, 114, 114, 59, 1, 10610, 97, 114, 114, 59, 1, 8592, 4, 4, 97, 101, 105, 116, 16860, 16883, 16891, 16904, 4, 2, 108, 115, 16866, 16878, 108, 115, 101, 116, 109, 105, 110, 117, 115, 59, 1, 8726, 104, 112, 59, 1, 10803, 112, 97, 114, 115, 108, 59, 1, 10724, 4, 2, 100, 108, 16897, 16900, 59, 1, 8739, 101, 59, 1, 8995, 4, 2, 59, 101, 16910, 16912, 1, 10922, 4, 2, 59, 115, 16918, 16920, 1, 10924, 59, 3, 10924, 65024, 4, 3, 102, 108, 112, 16932, 16938, 16958, 116, 99, 121, 59, 1, 1100, 4, 2, 59, 98, 16944, 16946, 1, 47, 4, 2, 59, 97, 16952, 16954, 1, 10692, 114, 59, 1, 9023, 102, 59, 3, 55349, 56676, 97, 4, 2, 100, 114, 16970, 16985, 101, 115, 4, 2, 59, 117, 16978, 16980, 1, 9824, 105, 116, 59, 1, 9824, 59, 1, 8741, 4, 3, 99, 115, 117, 16996, 17028, 17089, 4, 2, 97, 117, 17002, 17015, 112, 4, 2, 59, 115, 17009, 17011, 1, 8851, 59, 3, 8851, 65024, 112, 4, 2, 59, 115, 17022, 17024, 1, 8852, 59, 3, 8852, 65024, 117, 4, 2, 98, 112, 17035, 17062, 4, 3, 59, 101, 115, 17043, 17045, 17048, 1, 8847, 59, 1, 8849, 101, 116, 4, 2, 59, 101, 17056, 17058, 1, 8847, 113, 59, 1, 8849, 4, 3, 59, 101, 115, 17070, 17072, 17075, 1, 8848, 59, 1, 8850, 101, 116, 4, 2, 59, 101, 17083, 17085, 1, 8848, 113, 59, 1, 8850, 4, 3, 59, 97, 102, 17097, 17099, 17112, 1, 9633, 114, 4, 2, 101, 102, 17106, 17109, 59, 1, 9633, 59, 1, 9642, 59, 1, 9642, 97, 114, 114, 59, 1, 8594, 4, 4, 99, 101, 109, 116, 17131, 17136, 17142, 17148, 114, 59, 3, 55349, 56520, 116, 109, 110, 59, 1, 8726, 105, 108, 101, 59, 1, 8995, 97, 114, 102, 59, 1, 8902, 4, 2, 97, 114, 17160, 17172, 114, 4, 2, 59, 102, 17167, 17169, 1, 9734, 59, 1, 9733, 4, 2, 97, 110, 17178, 17202, 105, 103, 104, 116, 4, 2, 101, 112, 17188, 17197, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 104, 105, 59, 1, 981, 115, 59, 1, 175, 4, 5, 98, 99, 109, 110, 112, 17218, 17351, 17420, 17423, 17427, 4, 9, 59, 69, 100, 101, 109, 110, 112, 114, 115, 17238, 17240, 17243, 17248, 17261, 17267, 17279, 17285, 17291, 1, 8834, 59, 1, 10949, 111, 116, 59, 1, 10941, 4, 2, 59, 100, 17254, 17256, 1, 8838, 111, 116, 59, 1, 10947, 117, 108, 116, 59, 1, 10945, 4, 2, 69, 101, 17273, 17276, 59, 1, 10955, 59, 1, 8842, 108, 117, 115, 59, 1, 10943, 97, 114, 114, 59, 1, 10617, 4, 3, 101, 105, 117, 17299, 17335, 17339, 116, 4, 3, 59, 101, 110, 17308, 17310, 17322, 1, 8834, 113, 4, 2, 59, 113, 17317, 17319, 1, 8838, 59, 1, 10949, 101, 113, 4, 2, 59, 113, 17330, 17332, 1, 8842, 59, 1, 10955, 109, 59, 1, 10951, 4, 2, 98, 112, 17345, 17348, 59, 1, 10965, 59, 1, 10963, 99, 4, 6, 59, 97, 99, 101, 110, 115, 17366, 17368, 17376, 17385, 17389, 17415, 1, 8827, 112, 112, 114, 111, 120, 59, 1, 10936, 117, 114, 108, 121, 101, 113, 59, 1, 8829, 113, 59, 1, 10928, 4, 3, 97, 101, 115, 17397, 17405, 17410, 112, 112, 114, 111, 120, 59, 1, 10938, 113, 113, 59, 1, 10934, 105, 109, 59, 1, 8937, 105, 109, 59, 1, 8831, 59, 1, 8721, 103, 59, 1, 9834, 4, 13, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 17455, 17462, 17469, 17476, 17478, 17481, 17496, 17509, 17524, 17530, 17536, 17548, 17554, 5, 185, 1, 59, 17460, 1, 185, 5, 178, 1, 59, 17467, 1, 178, 5, 179, 1, 59, 17474, 1, 179, 1, 8835, 59, 1, 10950, 4, 2, 111, 115, 17487, 17491, 116, 59, 1, 10942, 117, 98, 59, 1, 10968, 4, 2, 59, 100, 17502, 17504, 1, 8839, 111, 116, 59, 1, 10948, 115, 4, 2, 111, 117, 17516, 17520, 108, 59, 1, 10185, 98, 59, 1, 10967, 97, 114, 114, 59, 1, 10619, 117, 108, 116, 59, 1, 10946, 4, 2, 69, 101, 17542, 17545, 59, 1, 10956, 59, 1, 8843, 108, 117, 115, 59, 1, 10944, 4, 3, 101, 105, 117, 17562, 17598, 17602, 116, 4, 3, 59, 101, 110, 17571, 17573, 17585, 1, 8835, 113, 4, 2, 59, 113, 17580, 17582, 1, 8839, 59, 1, 10950, 101, 113, 4, 2, 59, 113, 17593, 17595, 1, 8843, 59, 1, 10956, 109, 59, 1, 10952, 4, 2, 98, 112, 17608, 17611, 59, 1, 10964, 59, 1, 10966, 4, 3, 65, 97, 110, 17622, 17627, 17650, 114, 114, 59, 1, 8665, 114, 4, 2, 104, 114, 17634, 17638, 107, 59, 1, 10534, 4, 2, 59, 111, 17644, 17646, 1, 8601, 119, 59, 1, 8601, 119, 97, 114, 59, 1, 10538, 108, 105, 103, 5, 223, 1, 59, 17664, 1, 223, 4, 13, 97, 98, 99, 100, 101, 102, 104, 105, 111, 112, 114, 115, 119, 17694, 17709, 17714, 17737, 17742, 17749, 17754, 17860, 17905, 17957, 17964, 18090, 18122, 4, 2, 114, 117, 17700, 17706, 103, 101, 116, 59, 1, 8982, 59, 1, 964, 114, 107, 59, 1, 9140, 4, 3, 97, 101, 121, 17722, 17728, 17734, 114, 111, 110, 59, 1, 357, 100, 105, 108, 59, 1, 355, 59, 1, 1090, 111, 116, 59, 1, 8411, 108, 114, 101, 99, 59, 1, 8981, 114, 59, 3, 55349, 56625, 4, 4, 101, 105, 107, 111, 17764, 17805, 17836, 17851, 4, 2, 114, 116, 17770, 17786, 101, 4, 2, 52, 102, 17777, 17780, 59, 1, 8756, 111, 114, 101, 59, 1, 8756, 97, 4, 3, 59, 115, 118, 17795, 17797, 17802, 1, 952, 121, 109, 59, 1, 977, 59, 1, 977, 4, 2, 99, 110, 17811, 17831, 107, 4, 2, 97, 115, 17818, 17826, 112, 112, 114, 111, 120, 59, 1, 8776, 105, 109, 59, 1, 8764, 115, 112, 59, 1, 8201, 4, 2, 97, 115, 17842, 17846, 112, 59, 1, 8776, 105, 109, 59, 1, 8764, 114, 110, 5, 254, 1, 59, 17858, 1, 254, 4, 3, 108, 109, 110, 17868, 17873, 17901, 100, 101, 59, 1, 732, 101, 115, 5, 215, 3, 59, 98, 100, 17884, 17886, 17898, 1, 215, 4, 2, 59, 97, 17892, 17894, 1, 8864, 114, 59, 1, 10801, 59, 1, 10800, 116, 59, 1, 8749, 4, 3, 101, 112, 115, 17913, 17917, 17953, 97, 59, 1, 10536, 4, 4, 59, 98, 99, 102, 17927, 17929, 17934, 17939, 1, 8868, 111, 116, 59, 1, 9014, 105, 114, 59, 1, 10993, 4, 2, 59, 111, 17945, 17948, 3, 55349, 56677, 114, 107, 59, 1, 10970, 97, 59, 1, 10537, 114, 105, 109, 101, 59, 1, 8244, 4, 3, 97, 105, 112, 17972, 17977, 18082, 100, 101, 59, 1, 8482, 4, 7, 97, 100, 101, 109, 112, 115, 116, 17993, 18051, 18056, 18059, 18066, 18072, 18076, 110, 103, 108, 101, 4, 5, 59, 100, 108, 113, 114, 18009, 18011, 18017, 18032, 18035, 1, 9653, 111, 119, 110, 59, 1, 9663, 101, 102, 116, 4, 2, 59, 101, 18026, 18028, 1, 9667, 113, 59, 1, 8884, 59, 1, 8796, 105, 103, 104, 116, 4, 2, 59, 101, 18045, 18047, 1, 9657, 113, 59, 1, 8885, 111, 116, 59, 1, 9708, 59, 1, 8796, 105, 110, 117, 115, 59, 1, 10810, 108, 117, 115, 59, 1, 10809, 98, 59, 1, 10701, 105, 109, 101, 59, 1, 10811, 101, 122, 105, 117, 109, 59, 1, 9186, 4, 3, 99, 104, 116, 18098, 18111, 18116, 4, 2, 114, 121, 18104, 18108, 59, 3, 55349, 56521, 59, 1, 1094, 99, 121, 59, 1, 1115, 114, 111, 107, 59, 1, 359, 4, 2, 105, 111, 18128, 18133, 120, 116, 59, 1, 8812, 104, 101, 97, 100, 4, 2, 108, 114, 18143, 18154, 101, 102, 116, 97, 114, 114, 111, 119, 59, 1, 8606, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 1, 8608, 4, 18, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 18204, 18209, 18214, 18234, 18250, 18268, 18292, 18308, 18319, 18343, 18379, 18397, 18413, 18504, 18547, 18553, 18584, 18603, 114, 114, 59, 1, 8657, 97, 114, 59, 1, 10595, 4, 2, 99, 114, 18220, 18230, 117, 116, 101, 5, 250, 1, 59, 18228, 1, 250, 114, 59, 1, 8593, 114, 4, 2, 99, 101, 18241, 18245, 121, 59, 1, 1118, 118, 101, 59, 1, 365, 4, 2, 105, 121, 18256, 18265, 114, 99, 5, 251, 1, 59, 18263, 1, 251, 59, 1, 1091, 4, 3, 97, 98, 104, 18276, 18281, 18287, 114, 114, 59, 1, 8645, 108, 97, 99, 59, 1, 369, 97, 114, 59, 1, 10606, 4, 2, 105, 114, 18298, 18304, 115, 104, 116, 59, 1, 10622, 59, 3, 55349, 56626, 114, 97, 118, 101, 5, 249, 1, 59, 18317, 1, 249, 4, 2, 97, 98, 18325, 18338, 114, 4, 2, 108, 114, 18332, 18335, 59, 1, 8639, 59, 1, 8638, 108, 107, 59, 1, 9600, 4, 2, 99, 116, 18349, 18374, 4, 2, 111, 114, 18355, 18369, 114, 110, 4, 2, 59, 101, 18363, 18365, 1, 8988, 114, 59, 1, 8988, 111, 112, 59, 1, 8975, 114, 105, 59, 1, 9720, 4, 2, 97, 108, 18385, 18390, 99, 114, 59, 1, 363, 5, 168, 1, 59, 18395, 1, 168, 4, 2, 103, 112, 18403, 18408, 111, 110, 59, 1, 371, 102, 59, 3, 55349, 56678, 4, 6, 97, 100, 104, 108, 115, 117, 18427, 18434, 18445, 18470, 18475, 18494, 114, 114, 111, 119, 59, 1, 8593, 111, 119, 110, 97, 114, 114, 111, 119, 59, 1, 8597, 97, 114, 112, 111, 111, 110, 4, 2, 108, 114, 18457, 18463, 101, 102, 116, 59, 1, 8639, 105, 103, 104, 116, 59, 1, 8638, 117, 115, 59, 1, 8846, 105, 4, 3, 59, 104, 108, 18484, 18486, 18489, 1, 965, 59, 1, 978, 111, 110, 59, 1, 965, 112, 97, 114, 114, 111, 119, 115, 59, 1, 8648, 4, 3, 99, 105, 116, 18512, 18537, 18542, 4, 2, 111, 114, 18518, 18532, 114, 110, 4, 2, 59, 101, 18526, 18528, 1, 8989, 114, 59, 1, 8989, 111, 112, 59, 1, 8974, 110, 103, 59, 1, 367, 114, 105, 59, 1, 9721, 99, 114, 59, 3, 55349, 56522, 4, 3, 100, 105, 114, 18561, 18566, 18572, 111, 116, 59, 1, 8944, 108, 100, 101, 59, 1, 361, 105, 4, 2, 59, 102, 18579, 18581, 1, 9653, 59, 1, 9652, 4, 2, 97, 109, 18590, 18595, 114, 114, 59, 1, 8648, 108, 5, 252, 1, 59, 18601, 1, 252, 97, 110, 103, 108, 101, 59, 1, 10663, 4, 15, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 18643, 18648, 18661, 18667, 18847, 18851, 18857, 18904, 18909, 18915, 18931, 18937, 18943, 18949, 18996, 114, 114, 59, 1, 8661, 97, 114, 4, 2, 59, 118, 18656, 18658, 1, 10984, 59, 1, 10985, 97, 115, 104, 59, 1, 8872, 4, 2, 110, 114, 18673, 18679, 103, 114, 116, 59, 1, 10652, 4, 7, 101, 107, 110, 112, 114, 115, 116, 18695, 18704, 18711, 18720, 18742, 18754, 18810, 112, 115, 105, 108, 111, 110, 59, 1, 1013, 97, 112, 112, 97, 59, 1, 1008, 111, 116, 104, 105, 110, 103, 59, 1, 8709, 4, 3, 104, 105, 114, 18728, 18732, 18735, 105, 59, 1, 981, 59, 1, 982, 111, 112, 116, 111, 59, 1, 8733, 4, 2, 59, 104, 18748, 18750, 1, 8597, 111, 59, 1, 1009, 4, 2, 105, 117, 18760, 18766, 103, 109, 97, 59, 1, 962, 4, 2, 98, 112, 18772, 18791, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18784, 18787, 3, 8842, 65024, 59, 3, 10955, 65024, 115, 101, 116, 110, 101, 113, 4, 2, 59, 113, 18803, 18806, 3, 8843, 65024, 59, 3, 10956, 65024, 4, 2, 104, 114, 18816, 18822, 101, 116, 97, 59, 1, 977, 105, 97, 110, 103, 108, 101, 4, 2, 108, 114, 18834, 18840, 101, 102, 116, 59, 1, 8882, 105, 103, 104, 116, 59, 1, 8883, 121, 59, 1, 1074, 97, 115, 104, 59, 1, 8866, 4, 3, 101, 108, 114, 18865, 18884, 18890, 4, 3, 59, 98, 101, 18873, 18875, 18880, 1, 8744, 97, 114, 59, 1, 8891, 113, 59, 1, 8794, 108, 105, 112, 59, 1, 8942, 4, 2, 98, 116, 18896, 18901, 97, 114, 59, 1, 124, 59, 1, 124, 114, 59, 3, 55349, 56627, 116, 114, 105, 59, 1, 8882, 115, 117, 4, 2, 98, 112, 18923, 18927, 59, 3, 8834, 8402, 59, 3, 8835, 8402, 112, 102, 59, 3, 55349, 56679, 114, 111, 112, 59, 1, 8733, 116, 114, 105, 59, 1, 8883, 4, 2, 99, 117, 18955, 18960, 114, 59, 3, 55349, 56523, 4, 2, 98, 112, 18966, 18981, 110, 4, 2, 69, 101, 18973, 18977, 59, 3, 10955, 65024, 59, 3, 8842, 65024, 110, 4, 2, 69, 101, 18988, 18992, 59, 3, 10956, 65024, 59, 3, 8843, 65024, 105, 103, 122, 97, 103, 59, 1, 10650, 4, 7, 99, 101, 102, 111, 112, 114, 115, 19020, 19026, 19061, 19066, 19072, 19075, 19089, 105, 114, 99, 59, 1, 373, 4, 2, 100, 105, 19032, 19055, 4, 2, 98, 103, 19038, 19043, 97, 114, 59, 1, 10847, 101, 4, 2, 59, 113, 19050, 19052, 1, 8743, 59, 1, 8793, 101, 114, 112, 59, 1, 8472, 114, 59, 3, 55349, 56628, 112, 102, 59, 3, 55349, 56680, 59, 1, 8472, 4, 2, 59, 101, 19081, 19083, 1, 8768, 97, 116, 104, 59, 1, 8768, 99, 114, 59, 3, 55349, 56524, 4, 14, 99, 100, 102, 104, 105, 108, 109, 110, 111, 114, 115, 117, 118, 119, 19125, 19146, 19152, 19157, 19173, 19176, 19192, 19197, 19202, 19236, 19252, 19269, 19286, 19291, 4, 3, 97, 105, 117, 19133, 19137, 19142, 112, 59, 1, 8898, 114, 99, 59, 1, 9711, 112, 59, 1, 8899, 116, 114, 105, 59, 1, 9661, 114, 59, 3, 55349, 56629, 4, 2, 65, 97, 19163, 19168, 114, 114, 59, 1, 10234, 114, 114, 59, 1, 10231, 59, 1, 958, 4, 2, 65, 97, 19182, 19187, 114, 114, 59, 1, 10232, 114, 114, 59, 1, 10229, 97, 112, 59, 1, 10236, 105, 115, 59, 1, 8955, 4, 3, 100, 112, 116, 19210, 19215, 19230, 111, 116, 59, 1, 10752, 4, 2, 102, 108, 19221, 19225, 59, 3, 55349, 56681, 117, 115, 59, 1, 10753, 105, 109, 101, 59, 1, 10754, 4, 2, 65, 97, 19242, 19247, 114, 114, 59, 1, 10233, 114, 114, 59, 1, 10230, 4, 2, 99, 113, 19258, 19263, 114, 59, 3, 55349, 56525, 99, 117, 112, 59, 1, 10758, 4, 2, 112, 116, 19275, 19281, 108, 117, 115, 59, 1, 10756, 114, 105, 59, 1, 9651, 101, 101, 59, 1, 8897, 101, 100, 103, 101, 59, 1, 8896, 4, 8, 97, 99, 101, 102, 105, 111, 115, 117, 19316, 19335, 19349, 19357, 19362, 19367, 19373, 19379, 99, 4, 2, 117, 121, 19323, 19332, 116, 101, 5, 253, 1, 59, 19330, 1, 253, 59, 1, 1103, 4, 2, 105, 121, 19341, 19346, 114, 99, 59, 1, 375, 59, 1, 1099, 110, 5, 165, 1, 59, 19355, 1, 165, 114, 59, 3, 55349, 56630, 99, 121, 59, 1, 1111, 112, 102, 59, 3, 55349, 56682, 99, 114, 59, 3, 55349, 56526, 4, 2, 99, 109, 19385, 19389, 121, 59, 1, 1102, 108, 5, 255, 1, 59, 19395, 1, 255, 4, 10, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 19419, 19426, 19441, 19446, 19462, 19467, 19472, 19480, 19486, 19492, 99, 117, 116, 101, 59, 1, 378, 4, 2, 97, 121, 19432, 19438, 114, 111, 110, 59, 1, 382, 59, 1, 1079, 111, 116, 59, 1, 380, 4, 2, 101, 116, 19452, 19458, 116, 114, 102, 59, 1, 8488, 97, 59, 1, 950, 114, 59, 3, 55349, 56631, 99, 121, 59, 1, 1078, 103, 114, 97, 114, 114, 59, 1, 8669, 112, 102, 59, 3, 55349, 56683, 99, 114, 59, 3, 55349, 56527, 4, 2, 106, 110, 19498, 19501, 59, 1, 8205, 106, 59, 1, 8204]);

  var tokenizer = createCommonjsModule(function (module) {

   //Aliases


  var $ = unicode.CODE_POINTS,
      $$ = unicode.CODE_POINT_SEQUENCES; //Replacement code points for numeric entities

  var NUMERIC_ENTITY_REPLACEMENTS = {
    0x00: 0xFFFD,
    0x0D: 0x000D,
    0x80: 0x20AC,
    0x81: 0x0081,
    0x82: 0x201A,
    0x83: 0x0192,
    0x84: 0x201E,
    0x85: 0x2026,
    0x86: 0x2020,
    0x87: 0x2021,
    0x88: 0x02C6,
    0x89: 0x2030,
    0x8A: 0x0160,
    0x8B: 0x2039,
    0x8C: 0x0152,
    0x8D: 0x008D,
    0x8E: 0x017D,
    0x8F: 0x008F,
    0x90: 0x0090,
    0x91: 0x2018,
    0x92: 0x2019,
    0x93: 0x201C,
    0x94: 0x201D,
    0x95: 0x2022,
    0x96: 0x2013,
    0x97: 0x2014,
    0x98: 0x02DC,
    0x99: 0x2122,
    0x9A: 0x0161,
    0x9B: 0x203A,
    0x9C: 0x0153,
    0x9D: 0x009D,
    0x9E: 0x017E,
    0x9F: 0x0178
  }; // Named entity tree flags

  var HAS_DATA_FLAG = 1 << 0;
  var DATA_DUPLET_FLAG = 1 << 1;
  var HAS_BRANCHES_FLAG = 1 << 2;
  var MAX_BRANCH_MARKER_VALUE = HAS_DATA_FLAG | DATA_DUPLET_FLAG | HAS_BRANCHES_FLAG; //States

  var DATA_STATE = 'DATA_STATE',
      CHARACTER_REFERENCE_IN_DATA_STATE = 'CHARACTER_REFERENCE_IN_DATA_STATE',
      RCDATA_STATE = 'RCDATA_STATE',
      CHARACTER_REFERENCE_IN_RCDATA_STATE = 'CHARACTER_REFERENCE_IN_RCDATA_STATE',
      RAWTEXT_STATE = 'RAWTEXT_STATE',
      SCRIPT_DATA_STATE = 'SCRIPT_DATA_STATE',
      PLAINTEXT_STATE = 'PLAINTEXT_STATE',
      TAG_OPEN_STATE = 'TAG_OPEN_STATE',
      END_TAG_OPEN_STATE = 'END_TAG_OPEN_STATE',
      TAG_NAME_STATE = 'TAG_NAME_STATE',
      RCDATA_LESS_THAN_SIGN_STATE = 'RCDATA_LESS_THAN_SIGN_STATE',
      RCDATA_END_TAG_OPEN_STATE = 'RCDATA_END_TAG_OPEN_STATE',
      RCDATA_END_TAG_NAME_STATE = 'RCDATA_END_TAG_NAME_STATE',
      RAWTEXT_LESS_THAN_SIGN_STATE = 'RAWTEXT_LESS_THAN_SIGN_STATE',
      RAWTEXT_END_TAG_OPEN_STATE = 'RAWTEXT_END_TAG_OPEN_STATE',
      RAWTEXT_END_TAG_NAME_STATE = 'RAWTEXT_END_TAG_NAME_STATE',
      SCRIPT_DATA_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_LESS_THAN_SIGN_STATE',
      SCRIPT_DATA_END_TAG_OPEN_STATE = 'SCRIPT_DATA_END_TAG_OPEN_STATE',
      SCRIPT_DATA_END_TAG_NAME_STATE = 'SCRIPT_DATA_END_TAG_NAME_STATE',
      SCRIPT_DATA_ESCAPE_START_STATE = 'SCRIPT_DATA_ESCAPE_START_STATE',
      SCRIPT_DATA_ESCAPE_START_DASH_STATE = 'SCRIPT_DATA_ESCAPE_START_DASH_STATE',
      SCRIPT_DATA_ESCAPED_STATE = 'SCRIPT_DATA_ESCAPED_STATE',
      SCRIPT_DATA_ESCAPED_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_STATE',
      SCRIPT_DATA_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_ESCAPED_DASH_DASH_STATE',
      SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE',
      SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE',
      SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE = 'SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE',
      SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE',
      SCRIPT_DATA_DOUBLE_ESCAPED_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_STATE',
      SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE',
      SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE',
      SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE',
      SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE = 'SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE',
      BEFORE_ATTRIBUTE_NAME_STATE = 'BEFORE_ATTRIBUTE_NAME_STATE',
      ATTRIBUTE_NAME_STATE = 'ATTRIBUTE_NAME_STATE',
      AFTER_ATTRIBUTE_NAME_STATE = 'AFTER_ATTRIBUTE_NAME_STATE',
      BEFORE_ATTRIBUTE_VALUE_STATE = 'BEFORE_ATTRIBUTE_VALUE_STATE',
      ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE',
      ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE = 'ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE',
      ATTRIBUTE_VALUE_UNQUOTED_STATE = 'ATTRIBUTE_VALUE_UNQUOTED_STATE',
      CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE = 'CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE',
      AFTER_ATTRIBUTE_VALUE_QUOTED_STATE = 'AFTER_ATTRIBUTE_VALUE_QUOTED_STATE',
      SELF_CLOSING_START_TAG_STATE = 'SELF_CLOSING_START_TAG_STATE',
      BOGUS_COMMENT_STATE = 'BOGUS_COMMENT_STATE',
      BOGUS_COMMENT_STATE_CONTINUATION = 'BOGUS_COMMENT_STATE_CONTINUATION',
      MARKUP_DECLARATION_OPEN_STATE = 'MARKUP_DECLARATION_OPEN_STATE',
      COMMENT_START_STATE = 'COMMENT_START_STATE',
      COMMENT_START_DASH_STATE = 'COMMENT_START_DASH_STATE',
      COMMENT_STATE = 'COMMENT_STATE',
      COMMENT_END_DASH_STATE = 'COMMENT_END_DASH_STATE',
      COMMENT_END_STATE = 'COMMENT_END_STATE',
      COMMENT_END_BANG_STATE = 'COMMENT_END_BANG_STATE',
      DOCTYPE_STATE = 'DOCTYPE_STATE',
      DOCTYPE_NAME_STATE = 'DOCTYPE_NAME_STATE',
      AFTER_DOCTYPE_NAME_STATE = 'AFTER_DOCTYPE_NAME_STATE',
      BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE',
      DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE',
      DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE',
      BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE = 'BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE',
      BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
      DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE',
      DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE = 'DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE',
      AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE = 'AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE',
      BOGUS_DOCTYPE_STATE = 'BOGUS_DOCTYPE_STATE',
      CDATA_SECTION_STATE = 'CDATA_SECTION_STATE'; //Utils
  //OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
  //this functions if they will be situated in another module due to context switch.
  //Always perform inlining check before modifying this functions ('node --trace-inlining').

  function isWhitespace(cp) {
    return cp === $.SPACE || cp === $.LINE_FEED || cp === $.TABULATION || cp === $.FORM_FEED;
  }

  function isAsciiDigit(cp) {
    return cp >= $.DIGIT_0 && cp <= $.DIGIT_9;
  }

  function isAsciiUpper(cp) {
    return cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_Z;
  }

  function isAsciiLower(cp) {
    return cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_Z;
  }

  function isAsciiLetter(cp) {
    return isAsciiLower(cp) || isAsciiUpper(cp);
  }

  function isAsciiAlphaNumeric(cp) {
    return isAsciiLetter(cp) || isAsciiDigit(cp);
  }

  function isDigit(cp, isHex) {
    return isAsciiDigit(cp) || isHex && (cp >= $.LATIN_CAPITAL_A && cp <= $.LATIN_CAPITAL_F || cp >= $.LATIN_SMALL_A && cp <= $.LATIN_SMALL_F);
  }

  function isReservedCodePoint(cp) {
    return cp >= 0xD800 && cp <= 0xDFFF || cp > 0x10FFFF;
  }

  function toAsciiLowerCodePoint(cp) {
    return cp + 0x0020;
  } //NOTE: String.fromCharCode() function can handle only characters from BMP subset.
  //So, we need to workaround this manually.
  //(see: https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String/fromCharCode#Getting_it_to_work_with_higher_values)


  function toChar(cp) {
    if (cp <= 0xFFFF) return String.fromCharCode(cp);
    cp -= 0x10000;
    return String.fromCharCode(cp >>> 10 & 0x3FF | 0xD800) + String.fromCharCode(0xDC00 | cp & 0x3FF);
  }

  function toAsciiLowerChar(cp) {
    return String.fromCharCode(toAsciiLowerCodePoint(cp));
  }

  function findNamedEntityTreeBranch(nodeIx, cp) {
    var branchCount = named_entity_data[++nodeIx],
        lo = ++nodeIx,
        hi = lo + branchCount - 1;

    while (lo <= hi) {
      var mid = lo + hi >>> 1,
          midCp = named_entity_data[mid];
      if (midCp < cp) lo = mid + 1;else if (midCp > cp) hi = mid - 1;else return named_entity_data[mid + branchCount];
    }

    return -1;
  } //Tokenizer


  var Tokenizer = module.exports = function () {
    this.preprocessor = new preprocessor();
    this.tokenQueue = [];
    this.allowCDATA = false;
    this.state = DATA_STATE;
    this.returnState = '';
    this.tempBuff = [];
    this.additionalAllowedCp = void 0;
    this.lastStartTagName = '';
    this.consumedAfterSnapshot = -1;
    this.active = false;
    this.currentCharacterToken = null;
    this.currentToken = null;
    this.currentAttr = null;
  }; //Token types


  Tokenizer.CHARACTER_TOKEN = 'CHARACTER_TOKEN';
  Tokenizer.NULL_CHARACTER_TOKEN = 'NULL_CHARACTER_TOKEN';
  Tokenizer.WHITESPACE_CHARACTER_TOKEN = 'WHITESPACE_CHARACTER_TOKEN';
  Tokenizer.START_TAG_TOKEN = 'START_TAG_TOKEN';
  Tokenizer.END_TAG_TOKEN = 'END_TAG_TOKEN';
  Tokenizer.COMMENT_TOKEN = 'COMMENT_TOKEN';
  Tokenizer.DOCTYPE_TOKEN = 'DOCTYPE_TOKEN';
  Tokenizer.EOF_TOKEN = 'EOF_TOKEN';
  Tokenizer.HIBERNATION_TOKEN = 'HIBERNATION_TOKEN'; //Tokenizer initial states for different modes

  Tokenizer.MODE = {
    DATA: DATA_STATE,
    RCDATA: RCDATA_STATE,
    RAWTEXT: RAWTEXT_STATE,
    SCRIPT_DATA: SCRIPT_DATA_STATE,
    PLAINTEXT: PLAINTEXT_STATE
  }; //Static

  Tokenizer.getTokenAttr = function (token, attrName) {
    for (var i = token.attrs.length - 1; i >= 0; i--) {
      if (token.attrs[i].name === attrName) return token.attrs[i].value;
    }

    return null;
  }; //API


  Tokenizer.prototype.getNextToken = function () {
    while (!this.tokenQueue.length && this.active) {
      this._hibernationSnapshot();

      var cp = this._consume();

      if (!this._ensureHibernation()) this[this.state](cp);
    }

    return this.tokenQueue.shift();
  };

  Tokenizer.prototype.write = function (chunk, isLastChunk) {
    this.active = true;
    this.preprocessor.write(chunk, isLastChunk);
  };

  Tokenizer.prototype.insertHtmlAtCurrentPos = function (chunk) {
    this.active = true;
    this.preprocessor.insertHtmlAtCurrentPos(chunk);
  }; //Hibernation


  Tokenizer.prototype._hibernationSnapshot = function () {
    this.consumedAfterSnapshot = 0;
  };

  Tokenizer.prototype._ensureHibernation = function () {
    if (this.preprocessor.endOfChunkHit) {
      for (; this.consumedAfterSnapshot > 0; this.consumedAfterSnapshot--) {
        this.preprocessor.retreat();
      }

      this.active = false;
      this.tokenQueue.push({
        type: Tokenizer.HIBERNATION_TOKEN
      });
      return true;
    }

    return false;
  }; //Consumption


  Tokenizer.prototype._consume = function () {
    this.consumedAfterSnapshot++;
    return this.preprocessor.advance();
  };

  Tokenizer.prototype._unconsume = function () {
    this.consumedAfterSnapshot--;
    this.preprocessor.retreat();
  };

  Tokenizer.prototype._unconsumeSeveral = function (count) {
    while (count--) {
      this._unconsume();
    }
  };

  Tokenizer.prototype._reconsumeInState = function (state) {
    this.state = state;

    this._unconsume();
  };

  Tokenizer.prototype._consumeSubsequentIfMatch = function (pattern, startCp, caseSensitive) {
    var consumedCount = 0,
        isMatch = true,
        patternLength = pattern.length,
        patternPos = 0,
        cp = startCp,
        patternCp = void 0;

    for (; patternPos < patternLength; patternPos++) {
      if (patternPos > 0) {
        cp = this._consume();
        consumedCount++;
      }

      if (cp === $.EOF) {
        isMatch = false;
        break;
      }

      patternCp = pattern[patternPos];

      if (cp !== patternCp && (caseSensitive || cp !== toAsciiLowerCodePoint(patternCp))) {
        isMatch = false;
        break;
      }
    }

    if (!isMatch) this._unconsumeSeveral(consumedCount);
    return isMatch;
  }; //Lookahead


  Tokenizer.prototype._lookahead = function () {
    var cp = this._consume();

    this._unconsume();

    return cp;
  }; //Temp buffer


  Tokenizer.prototype.isTempBufferEqualToScriptString = function () {
    if (this.tempBuff.length !== $$.SCRIPT_STRING.length) return false;

    for (var i = 0; i < this.tempBuff.length; i++) {
      if (this.tempBuff[i] !== $$.SCRIPT_STRING[i]) return false;
    }

    return true;
  }; //Token creation


  Tokenizer.prototype._createStartTagToken = function () {
    this.currentToken = {
      type: Tokenizer.START_TAG_TOKEN,
      tagName: '',
      selfClosing: false,
      attrs: []
    };
  };

  Tokenizer.prototype._createEndTagToken = function () {
    this.currentToken = {
      type: Tokenizer.END_TAG_TOKEN,
      tagName: '',
      attrs: []
    };
  };

  Tokenizer.prototype._createCommentToken = function () {
    this.currentToken = {
      type: Tokenizer.COMMENT_TOKEN,
      data: ''
    };
  };

  Tokenizer.prototype._createDoctypeToken = function (initialName) {
    this.currentToken = {
      type: Tokenizer.DOCTYPE_TOKEN,
      name: initialName,
      forceQuirks: false,
      publicId: null,
      systemId: null
    };
  };

  Tokenizer.prototype._createCharacterToken = function (type, ch) {
    this.currentCharacterToken = {
      type: type,
      chars: ch
    };
  }; //Tag attributes


  Tokenizer.prototype._createAttr = function (attrNameFirstCh) {
    this.currentAttr = {
      name: attrNameFirstCh,
      value: ''
    };
  };

  Tokenizer.prototype._isDuplicateAttr = function () {
    return Tokenizer.getTokenAttr(this.currentToken, this.currentAttr.name) !== null;
  };

  Tokenizer.prototype._leaveAttrName = function (toState) {
    this.state = toState;
    if (!this._isDuplicateAttr()) this.currentToken.attrs.push(this.currentAttr);
  };

  Tokenizer.prototype._leaveAttrValue = function (toState) {
    this.state = toState;
  }; //Appropriate end tag token
  //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#appropriate-end-tag-token)


  Tokenizer.prototype._isAppropriateEndTagToken = function () {
    return this.lastStartTagName === this.currentToken.tagName;
  }; //Token emission


  Tokenizer.prototype._emitCurrentToken = function () {
    this._emitCurrentCharacterToken(); //NOTE: store emited start tag's tagName to determine is the following end tag token is appropriate.


    if (this.currentToken.type === Tokenizer.START_TAG_TOKEN) this.lastStartTagName = this.currentToken.tagName;
    this.tokenQueue.push(this.currentToken);
    this.currentToken = null;
  };

  Tokenizer.prototype._emitCurrentCharacterToken = function () {
    if (this.currentCharacterToken) {
      this.tokenQueue.push(this.currentCharacterToken);
      this.currentCharacterToken = null;
    }
  };

  Tokenizer.prototype._emitEOFToken = function () {
    this._emitCurrentCharacterToken();

    this.tokenQueue.push({
      type: Tokenizer.EOF_TOKEN
    });
  }; //Characters emission
  //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
  //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
  //If we have a sequence of characters that belong to the same group, parser can process it
  //as a single solid character token.
  //So, there are 3 types of character tokens in parse5:
  //1)NULL_CHARACTER_TOKEN - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
  //2)WHITESPACE_CHARACTER_TOKEN - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
  //3)CHARACTER_TOKEN - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')


  Tokenizer.prototype._appendCharToCurrentCharacterToken = function (type, ch) {
    if (this.currentCharacterToken && this.currentCharacterToken.type !== type) this._emitCurrentCharacterToken();
    if (this.currentCharacterToken) this.currentCharacterToken.chars += ch;else this._createCharacterToken(type, ch);
  };

  Tokenizer.prototype._emitCodePoint = function (cp) {
    var type = Tokenizer.CHARACTER_TOKEN;
    if (isWhitespace(cp)) type = Tokenizer.WHITESPACE_CHARACTER_TOKEN;else if (cp === $.NULL) type = Tokenizer.NULL_CHARACTER_TOKEN;

    this._appendCharToCurrentCharacterToken(type, toChar(cp));
  };

  Tokenizer.prototype._emitSeveralCodePoints = function (codePoints) {
    for (var i = 0; i < codePoints.length; i++) {
      this._emitCodePoint(codePoints[i]);
    }
  }; //NOTE: used then we emit character explicitly. This is always a non-whitespace and a non-null character.
  //So we can avoid additional checks here.


  Tokenizer.prototype._emitChar = function (ch) {
    this._appendCharToCurrentCharacterToken(Tokenizer.CHARACTER_TOKEN, ch);
  }; //Character reference tokenization


  Tokenizer.prototype._consumeNumericEntity = function (isHex) {
    var digits = '',
        nextCp = void 0;

    do {
      digits += toChar(this._consume());
      nextCp = this._lookahead();
    } while (nextCp !== $.EOF && isDigit(nextCp, isHex));

    if (this._lookahead() === $.SEMICOLON) this._consume();
    var referencedCp = parseInt(digits, isHex ? 16 : 10),
        replacement = NUMERIC_ENTITY_REPLACEMENTS[referencedCp];
    if (replacement) return replacement;
    if (isReservedCodePoint(referencedCp)) return $.REPLACEMENT_CHARACTER;
    return referencedCp;
  }; // NOTE: for the details on this algorithm see
  // https://github.com/inikulin/parse5/tree/master/scripts/generate_named_entity_data/README.md


  Tokenizer.prototype._consumeNamedEntity = function (inAttr) {
    var referencedCodePoints = null,
        referenceSize = 0,
        cp = null,
        consumedCount = 0,
        semicolonTerminated = false;

    for (var i = 0; i > -1;) {
      var current = named_entity_data[i],
          inNode = current < MAX_BRANCH_MARKER_VALUE,
          nodeWithData = inNode && current & HAS_DATA_FLAG;

      if (nodeWithData) {
        referencedCodePoints = current & DATA_DUPLET_FLAG ? [named_entity_data[++i], named_entity_data[++i]] : [named_entity_data[++i]];
        referenceSize = consumedCount;

        if (cp === $.SEMICOLON) {
          semicolonTerminated = true;
          break;
        }
      }

      cp = this._consume();
      consumedCount++;
      if (cp === $.EOF) break;
      if (inNode) i = current & HAS_BRANCHES_FLAG ? findNamedEntityTreeBranch(i, cp) : -1;else i = cp === current ? ++i : -1;
    }

    if (referencedCodePoints) {
      if (!semicolonTerminated) {
        //NOTE: unconsume excess (e.g. 'it' in '&notit')
        this._unconsumeSeveral(consumedCount - referenceSize); //NOTE: If the character reference is being consumed as part of an attribute and the next character
        //is either a U+003D EQUALS SIGN character (=) or an alphanumeric ASCII character, then, for historical
        //reasons, all the characters that were matched after the U+0026 AMPERSAND character (&) must be
        //unconsumed, and nothing is returned.
        //However, if this next character is in fact a U+003D EQUALS SIGN character (=), then this is a
        //parse error, because some legacy user agents will misinterpret the markup in those cases.
        //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tokenization.html#tokenizing-character-references)


        if (inAttr) {
          var nextCp = this._lookahead();

          if (nextCp === $.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp)) {
            this._unconsumeSeveral(referenceSize);

            return null;
          }
        }
      }

      return referencedCodePoints;
    }

    this._unconsumeSeveral(consumedCount);

    return null;
  };

  Tokenizer.prototype._consumeCharacterReference = function (startCp, inAttr) {
    if (isWhitespace(startCp) || startCp === $.GREATER_THAN_SIGN || startCp === $.AMPERSAND || startCp === this.additionalAllowedCp || startCp === $.EOF) {
      //NOTE: not a character reference. No characters are consumed, and nothing is returned.
      this._unconsume();

      return null;
    }

    if (startCp === $.NUMBER_SIGN) {
      //NOTE: we have a numeric entity candidate, now we should determine if it's hex or decimal
      var isHex = false,
          nextCp = this._lookahead();

      if (nextCp === $.LATIN_SMALL_X || nextCp === $.LATIN_CAPITAL_X) {
        this._consume();

        isHex = true;
      }

      nextCp = this._lookahead(); //NOTE: if we have at least one digit this is a numeric entity for sure, so we consume it

      if (nextCp !== $.EOF && isDigit(nextCp, isHex)) return [this._consumeNumericEntity(isHex)]; //NOTE: otherwise this is a bogus number entity and a parse error. Unconsume the number sign
      //and the 'x'-character if appropriate.

      this._unconsumeSeveral(isHex ? 2 : 1);

      return null;
    }

    this._unconsume();

    return this._consumeNamedEntity(inAttr);
  }; //State machine


  var _ = Tokenizer.prototype; //12.2.4.1 Data state
  //------------------------------------------------------------------

  _[DATA_STATE] = function dataState(cp) {
    this.preprocessor.dropParsedChunk();
    if (cp === $.AMPERSAND) this.state = CHARACTER_REFERENCE_IN_DATA_STATE;else if (cp === $.LESS_THAN_SIGN) this.state = TAG_OPEN_STATE;else if (cp === $.NULL) this._emitCodePoint(cp);else if (cp === $.EOF) this._emitEOFToken();else this._emitCodePoint(cp);
  }; //12.2.4.2 Character reference in data state
  //------------------------------------------------------------------


  _[CHARACTER_REFERENCE_IN_DATA_STATE] = function characterReferenceInDataState(cp) {
    this.additionalAllowedCp = void 0;

    var referencedCodePoints = this._consumeCharacterReference(cp, false);

    if (!this._ensureHibernation()) {
      if (referencedCodePoints) this._emitSeveralCodePoints(referencedCodePoints);else this._emitChar('&');
      this.state = DATA_STATE;
    }
  }; //12.2.4.3 RCDATA state
  //------------------------------------------------------------------


  _[RCDATA_STATE] = function rcdataState(cp) {
    this.preprocessor.dropParsedChunk();
    if (cp === $.AMPERSAND) this.state = CHARACTER_REFERENCE_IN_RCDATA_STATE;else if (cp === $.LESS_THAN_SIGN) this.state = RCDATA_LESS_THAN_SIGN_STATE;else if (cp === $.NULL) this._emitChar(unicode.REPLACEMENT_CHARACTER);else if (cp === $.EOF) this._emitEOFToken();else this._emitCodePoint(cp);
  }; //12.2.4.4 Character reference in RCDATA state
  //------------------------------------------------------------------


  _[CHARACTER_REFERENCE_IN_RCDATA_STATE] = function characterReferenceInRcdataState(cp) {
    this.additionalAllowedCp = void 0;

    var referencedCodePoints = this._consumeCharacterReference(cp, false);

    if (!this._ensureHibernation()) {
      if (referencedCodePoints) this._emitSeveralCodePoints(referencedCodePoints);else this._emitChar('&');
      this.state = RCDATA_STATE;
    }
  }; //12.2.4.5 RAWTEXT state
  //------------------------------------------------------------------


  _[RAWTEXT_STATE] = function rawtextState(cp) {
    this.preprocessor.dropParsedChunk();
    if (cp === $.LESS_THAN_SIGN) this.state = RAWTEXT_LESS_THAN_SIGN_STATE;else if (cp === $.NULL) this._emitChar(unicode.REPLACEMENT_CHARACTER);else if (cp === $.EOF) this._emitEOFToken();else this._emitCodePoint(cp);
  }; //12.2.4.6 Script data state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_STATE] = function scriptDataState(cp) {
    this.preprocessor.dropParsedChunk();
    if (cp === $.LESS_THAN_SIGN) this.state = SCRIPT_DATA_LESS_THAN_SIGN_STATE;else if (cp === $.NULL) this._emitChar(unicode.REPLACEMENT_CHARACTER);else if (cp === $.EOF) this._emitEOFToken();else this._emitCodePoint(cp);
  }; //12.2.4.7 PLAINTEXT state
  //------------------------------------------------------------------


  _[PLAINTEXT_STATE] = function plaintextState(cp) {
    this.preprocessor.dropParsedChunk();
    if (cp === $.NULL) this._emitChar(unicode.REPLACEMENT_CHARACTER);else if (cp === $.EOF) this._emitEOFToken();else this._emitCodePoint(cp);
  }; //12.2.4.8 Tag open state
  //------------------------------------------------------------------


  _[TAG_OPEN_STATE] = function tagOpenState(cp) {
    if (cp === $.EXCLAMATION_MARK) this.state = MARKUP_DECLARATION_OPEN_STATE;else if (cp === $.SOLIDUS) this.state = END_TAG_OPEN_STATE;else if (isAsciiLetter(cp)) {
      this._createStartTagToken();

      this._reconsumeInState(TAG_NAME_STATE);
    } else if (cp === $.QUESTION_MARK) this._reconsumeInState(BOGUS_COMMENT_STATE);else {
      this._emitChar('<');

      this._reconsumeInState(DATA_STATE);
    }
  }; //12.2.4.9 End tag open state
  //------------------------------------------------------------------


  _[END_TAG_OPEN_STATE] = function endTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();

      this._reconsumeInState(TAG_NAME_STATE);
    } else if (cp === $.GREATER_THAN_SIGN) this.state = DATA_STATE;else if (cp === $.EOF) {
      this._reconsumeInState(DATA_STATE);

      this._emitChar('<');

      this._emitChar('/');
    } else this._reconsumeInState(BOGUS_COMMENT_STATE);
  }; //12.2.4.10 Tag name state
  //------------------------------------------------------------------


  _[TAG_NAME_STATE] = function tagNameState(cp) {
    if (isWhitespace(cp)) this.state = BEFORE_ATTRIBUTE_NAME_STATE;else if (cp === $.SOLIDUS) this.state = SELF_CLOSING_START_TAG_STATE;else if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (isAsciiUpper(cp)) this.currentToken.tagName += toAsciiLowerChar(cp);else if (cp === $.NULL) this.currentToken.tagName += unicode.REPLACEMENT_CHARACTER;else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this.currentToken.tagName += toChar(cp);
  }; //12.2.4.11 RCDATA less-than sign state
  //------------------------------------------------------------------


  _[RCDATA_LESS_THAN_SIGN_STATE] = function rcdataLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
      this.tempBuff = [];
      this.state = RCDATA_END_TAG_OPEN_STATE;
    } else {
      this._emitChar('<');

      this._reconsumeInState(RCDATA_STATE);
    }
  }; //12.2.4.12 RCDATA end tag open state
  //------------------------------------------------------------------


  _[RCDATA_END_TAG_OPEN_STATE] = function rcdataEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();

      this._reconsumeInState(RCDATA_END_TAG_NAME_STATE);
    } else {
      this._emitChar('<');

      this._emitChar('/');

      this._reconsumeInState(RCDATA_STATE);
    }
  }; //12.2.4.13 RCDATA end tag name state
  //------------------------------------------------------------------


  _[RCDATA_END_TAG_NAME_STATE] = function rcdataEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
      this.currentToken.tagName += toAsciiLowerChar(cp);
      this.tempBuff.push(cp);
    } else if (isAsciiLower(cp)) {
      this.currentToken.tagName += toChar(cp);
      this.tempBuff.push(cp);
    } else {
      if (this._isAppropriateEndTagToken()) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
          return;
        }

        if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
          return;
        }

        if (cp === $.GREATER_THAN_SIGN) {
          this.state = DATA_STATE;

          this._emitCurrentToken();

          return;
        }
      }

      this._emitChar('<');

      this._emitChar('/');

      this._emitSeveralCodePoints(this.tempBuff);

      this._reconsumeInState(RCDATA_STATE);
    }
  }; //12.2.4.14 RAWTEXT less-than sign state
  //------------------------------------------------------------------


  _[RAWTEXT_LESS_THAN_SIGN_STATE] = function rawtextLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
      this.tempBuff = [];
      this.state = RAWTEXT_END_TAG_OPEN_STATE;
    } else {
      this._emitChar('<');

      this._reconsumeInState(RAWTEXT_STATE);
    }
  }; //12.2.4.15 RAWTEXT end tag open state
  //------------------------------------------------------------------


  _[RAWTEXT_END_TAG_OPEN_STATE] = function rawtextEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();

      this._reconsumeInState(RAWTEXT_END_TAG_NAME_STATE);
    } else {
      this._emitChar('<');

      this._emitChar('/');

      this._reconsumeInState(RAWTEXT_STATE);
    }
  }; //12.2.4.16 RAWTEXT end tag name state
  //------------------------------------------------------------------


  _[RAWTEXT_END_TAG_NAME_STATE] = function rawtextEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
      this.currentToken.tagName += toAsciiLowerChar(cp);
      this.tempBuff.push(cp);
    } else if (isAsciiLower(cp)) {
      this.currentToken.tagName += toChar(cp);
      this.tempBuff.push(cp);
    } else {
      if (this._isAppropriateEndTagToken()) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
          return;
        }

        if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
          return;
        }

        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();

          this.state = DATA_STATE;
          return;
        }
      }

      this._emitChar('<');

      this._emitChar('/');

      this._emitSeveralCodePoints(this.tempBuff);

      this._reconsumeInState(RAWTEXT_STATE);
    }
  }; //12.2.4.17 Script data less-than sign state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_LESS_THAN_SIGN_STATE] = function scriptDataLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
      this.tempBuff = [];
      this.state = SCRIPT_DATA_END_TAG_OPEN_STATE;
    } else if (cp === $.EXCLAMATION_MARK) {
      this.state = SCRIPT_DATA_ESCAPE_START_STATE;

      this._emitChar('<');

      this._emitChar('!');
    } else {
      this._emitChar('<');

      this._reconsumeInState(SCRIPT_DATA_STATE);
    }
  }; //12.2.4.18 Script data end tag open state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_END_TAG_OPEN_STATE] = function scriptDataEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();

      this._reconsumeInState(SCRIPT_DATA_END_TAG_NAME_STATE);
    } else {
      this._emitChar('<');

      this._emitChar('/');

      this._reconsumeInState(SCRIPT_DATA_STATE);
    }
  }; //12.2.4.19 Script data end tag name state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_END_TAG_NAME_STATE] = function scriptDataEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
      this.currentToken.tagName += toAsciiLowerChar(cp);
      this.tempBuff.push(cp);
    } else if (isAsciiLower(cp)) {
      this.currentToken.tagName += toChar(cp);
      this.tempBuff.push(cp);
    } else {
      if (this._isAppropriateEndTagToken()) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
          return;
        } else if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
          return;
        } else if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();

          this.state = DATA_STATE;
          return;
        }
      }

      this._emitChar('<');

      this._emitChar('/');

      this._emitSeveralCodePoints(this.tempBuff);

      this._reconsumeInState(SCRIPT_DATA_STATE);
    }
  }; //12.2.4.20 Script data escape start state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPE_START_STATE] = function scriptDataEscapeStartState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.state = SCRIPT_DATA_ESCAPE_START_DASH_STATE;

      this._emitChar('-');
    } else this._reconsumeInState(SCRIPT_DATA_STATE);
  }; //12.2.4.21 Script data escape start dash state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPE_START_DASH_STATE] = function scriptDataEscapeStartDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;

      this._emitChar('-');
    } else this._reconsumeInState(SCRIPT_DATA_STATE);
  }; //12.2.4.22 Script data escaped state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPED_STATE] = function scriptDataEscapedState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.state = SCRIPT_DATA_ESCAPED_DASH_STATE;

      this._emitChar('-');
    } else if (cp === $.LESS_THAN_SIGN) this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;else if (cp === $.NULL) this._emitChar(unicode.REPLACEMENT_CHARACTER);else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this._emitCodePoint(cp);
  }; //12.2.4.23 Script data escaped dash state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPED_DASH_STATE] = function scriptDataEscapedDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.state = SCRIPT_DATA_ESCAPED_DASH_DASH_STATE;

      this._emitChar('-');
    } else if (cp === $.LESS_THAN_SIGN) this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;else if (cp === $.NULL) {
      this.state = SCRIPT_DATA_ESCAPED_STATE;

      this._emitChar(unicode.REPLACEMENT_CHARACTER);
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else {
      this.state = SCRIPT_DATA_ESCAPED_STATE;

      this._emitCodePoint(cp);
    }
  }; //12.2.4.24 Script data escaped dash dash state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPED_DASH_DASH_STATE] = function scriptDataEscapedDashDashState(cp) {
    if (cp === $.HYPHEN_MINUS) this._emitChar('-');else if (cp === $.LESS_THAN_SIGN) this.state = SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE;else if (cp === $.GREATER_THAN_SIGN) {
      this.state = SCRIPT_DATA_STATE;

      this._emitChar('>');
    } else if (cp === $.NULL) {
      this.state = SCRIPT_DATA_ESCAPED_STATE;

      this._emitChar(unicode.REPLACEMENT_CHARACTER);
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else {
      this.state = SCRIPT_DATA_ESCAPED_STATE;

      this._emitCodePoint(cp);
    }
  }; //12.2.4.25 Script data escaped less-than sign state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataEscapedLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
      this.tempBuff = [];
      this.state = SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE;
    } else if (isAsciiLetter(cp)) {
      this.tempBuff = [];

      this._emitChar('<');

      this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE);
    } else {
      this._emitChar('<');

      this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
  }; //12.2.4.26 Script data escaped end tag open state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPED_END_TAG_OPEN_STATE] = function scriptDataEscapedEndTagOpenState(cp) {
    if (isAsciiLetter(cp)) {
      this._createEndTagToken();

      this._reconsumeInState(SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE);
    } else {
      this._emitChar('<');

      this._emitChar('/');

      this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
  }; //12.2.4.27 Script data escaped end tag name state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_ESCAPED_END_TAG_NAME_STATE] = function scriptDataEscapedEndTagNameState(cp) {
    if (isAsciiUpper(cp)) {
      this.currentToken.tagName += toAsciiLowerChar(cp);
      this.tempBuff.push(cp);
    } else if (isAsciiLower(cp)) {
      this.currentToken.tagName += toChar(cp);
      this.tempBuff.push(cp);
    } else {
      if (this._isAppropriateEndTagToken()) {
        if (isWhitespace(cp)) {
          this.state = BEFORE_ATTRIBUTE_NAME_STATE;
          return;
        }

        if (cp === $.SOLIDUS) {
          this.state = SELF_CLOSING_START_TAG_STATE;
          return;
        }

        if (cp === $.GREATER_THAN_SIGN) {
          this._emitCurrentToken();

          this.state = DATA_STATE;
          return;
        }
      }

      this._emitChar('<');

      this._emitChar('/');

      this._emitSeveralCodePoints(this.tempBuff);

      this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
    }
  }; //12.2.4.28 Script data double escape start state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_DOUBLE_ESCAPE_START_STATE] = function scriptDataDoubleEscapeStartState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
      this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_DOUBLE_ESCAPED_STATE : SCRIPT_DATA_ESCAPED_STATE;

      this._emitCodePoint(cp);
    } else if (isAsciiUpper(cp)) {
      this.tempBuff.push(toAsciiLowerCodePoint(cp));

      this._emitCodePoint(cp);
    } else if (isAsciiLower(cp)) {
      this.tempBuff.push(cp);

      this._emitCodePoint(cp);
    } else this._reconsumeInState(SCRIPT_DATA_ESCAPED_STATE);
  }; //12.2.4.29 Script data double escaped state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_DOUBLE_ESCAPED_STATE] = function scriptDataDoubleEscapedState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE;

      this._emitChar('-');
    } else if (cp === $.LESS_THAN_SIGN) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;

      this._emitChar('<');
    } else if (cp === $.NULL) this._emitChar(unicode.REPLACEMENT_CHARACTER);else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this._emitCodePoint(cp);
  }; //12.2.4.30 Script data double escaped dash state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_STATE] = function scriptDataDoubleEscapedDashState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE;

      this._emitChar('-');
    } else if (cp === $.LESS_THAN_SIGN) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;

      this._emitChar('<');
    } else if (cp === $.NULL) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

      this._emitChar(unicode.REPLACEMENT_CHARACTER);
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

      this._emitCodePoint(cp);
    }
  }; //12.2.4.31 Script data double escaped dash dash state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH_STATE] = function scriptDataDoubleEscapedDashDashState(cp) {
    if (cp === $.HYPHEN_MINUS) this._emitChar('-');else if (cp === $.LESS_THAN_SIGN) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE;

      this._emitChar('<');
    } else if (cp === $.GREATER_THAN_SIGN) {
      this.state = SCRIPT_DATA_STATE;

      this._emitChar('>');
    } else if (cp === $.NULL) {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

      this._emitChar(unicode.REPLACEMENT_CHARACTER);
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else {
      this.state = SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

      this._emitCodePoint(cp);
    }
  }; //12.2.4.32 Script data double escaped less-than sign state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN_STATE] = function scriptDataDoubleEscapedLessThanSignState(cp) {
    if (cp === $.SOLIDUS) {
      this.tempBuff = [];
      this.state = SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE;

      this._emitChar('/');
    } else this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
  }; //12.2.4.33 Script data double escape end state
  //------------------------------------------------------------------


  _[SCRIPT_DATA_DOUBLE_ESCAPE_END_STATE] = function scriptDataDoubleEscapeEndState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN) {
      this.state = this.isTempBufferEqualToScriptString() ? SCRIPT_DATA_ESCAPED_STATE : SCRIPT_DATA_DOUBLE_ESCAPED_STATE;

      this._emitCodePoint(cp);
    } else if (isAsciiUpper(cp)) {
      this.tempBuff.push(toAsciiLowerCodePoint(cp));

      this._emitCodePoint(cp);
    } else if (isAsciiLower(cp)) {
      this.tempBuff.push(cp);

      this._emitCodePoint(cp);
    } else this._reconsumeInState(SCRIPT_DATA_DOUBLE_ESCAPED_STATE);
  }; //12.2.4.34 Before attribute name state
  //------------------------------------------------------------------


  _[BEFORE_ATTRIBUTE_NAME_STATE] = function beforeAttributeNameState(cp) {
    if (isWhitespace(cp)) return;
    if (cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) this._reconsumeInState(AFTER_ATTRIBUTE_NAME_STATE);else if (cp === $.EQUALS_SIGN) {
      this._createAttr('=');

      this.state = ATTRIBUTE_NAME_STATE;
    } else {
      this._createAttr('');

      this._reconsumeInState(ATTRIBUTE_NAME_STATE);
    }
  }; //12.2.4.35 Attribute name state
  //------------------------------------------------------------------


  _[ATTRIBUTE_NAME_STATE] = function attributeNameState(cp) {
    if (isWhitespace(cp) || cp === $.SOLIDUS || cp === $.GREATER_THAN_SIGN || cp === $.EOF) {
      this._leaveAttrName(AFTER_ATTRIBUTE_NAME_STATE);

      this._unconsume();
    } else if (cp === $.EQUALS_SIGN) this._leaveAttrName(BEFORE_ATTRIBUTE_VALUE_STATE);else if (isAsciiUpper(cp)) this.currentAttr.name += toAsciiLowerChar(cp);else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN) this.currentAttr.name += toChar(cp);else if (cp === $.NULL) this.currentAttr.name += unicode.REPLACEMENT_CHARACTER;else this.currentAttr.name += toChar(cp);
  }; //12.2.4.36 After attribute name state
  //------------------------------------------------------------------


  _[AFTER_ATTRIBUTE_NAME_STATE] = function afterAttributeNameState(cp) {
    if (isWhitespace(cp)) return;
    if (cp === $.SOLIDUS) this.state = SELF_CLOSING_START_TAG_STATE;else if (cp === $.EQUALS_SIGN) this.state = BEFORE_ATTRIBUTE_VALUE_STATE;else if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else {
      this._createAttr('');

      this._reconsumeInState(ATTRIBUTE_NAME_STATE);
    }
  }; //12.2.4.37 Before attribute value state
  //------------------------------------------------------------------


  _[BEFORE_ATTRIBUTE_VALUE_STATE] = function beforeAttributeValueState(cp) {
    if (isWhitespace(cp)) return;
    if (cp === $.QUOTATION_MARK) this.state = ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE;else if (cp === $.APOSTROPHE) this.state = ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE;else this._reconsumeInState(ATTRIBUTE_VALUE_UNQUOTED_STATE);
  }; //12.2.4.38 Attribute value (double-quoted) state
  //------------------------------------------------------------------


  _[ATTRIBUTE_VALUE_DOUBLE_QUOTED_STATE] = function attributeValueDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK) this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;else if (cp === $.AMPERSAND) {
      this.additionalAllowedCp = $.QUOTATION_MARK;
      this.returnState = this.state;
      this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    } else if (cp === $.NULL) this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this.currentAttr.value += toChar(cp);
  }; //12.2.4.39 Attribute value (single-quoted) state
  //------------------------------------------------------------------


  _[ATTRIBUTE_VALUE_SINGLE_QUOTED_STATE] = function attributeValueSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE) this.state = AFTER_ATTRIBUTE_VALUE_QUOTED_STATE;else if (cp === $.AMPERSAND) {
      this.additionalAllowedCp = $.APOSTROPHE;
      this.returnState = this.state;
      this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    } else if (cp === $.NULL) this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this.currentAttr.value += toChar(cp);
  }; //12.2.4.40 Attribute value (unquoted) state
  //------------------------------------------------------------------


  _[ATTRIBUTE_VALUE_UNQUOTED_STATE] = function attributeValueUnquotedState(cp) {
    if (isWhitespace(cp)) this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);else if (cp === $.AMPERSAND) {
      this.additionalAllowedCp = $.GREATER_THAN_SIGN;
      this.returnState = this.state;
      this.state = CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE;
    } else if (cp === $.GREATER_THAN_SIGN) {
      this._leaveAttrValue(DATA_STATE);

      this._emitCurrentToken();
    } else if (cp === $.NULL) this.currentAttr.value += unicode.REPLACEMENT_CHARACTER;else if (cp === $.QUOTATION_MARK || cp === $.APOSTROPHE || cp === $.LESS_THAN_SIGN || cp === $.EQUALS_SIGN || cp === $.GRAVE_ACCENT) this.currentAttr.value += toChar(cp);else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this.currentAttr.value += toChar(cp);
  }; //12.2.4.41 Character reference in attribute value state
  //------------------------------------------------------------------


  _[CHARACTER_REFERENCE_IN_ATTRIBUTE_VALUE_STATE] = function characterReferenceInAttributeValueState(cp) {
    var referencedCodePoints = this._consumeCharacterReference(cp, true);

    if (!this._ensureHibernation()) {
      if (referencedCodePoints) {
        for (var i = 0; i < referencedCodePoints.length; i++) {
          this.currentAttr.value += toChar(referencedCodePoints[i]);
        }
      } else this.currentAttr.value += '&';

      this.state = this.returnState;
    }
  }; //12.2.4.42 After attribute value (quoted) state
  //------------------------------------------------------------------


  _[AFTER_ATTRIBUTE_VALUE_QUOTED_STATE] = function afterAttributeValueQuotedState(cp) {
    if (isWhitespace(cp)) this._leaveAttrValue(BEFORE_ATTRIBUTE_NAME_STATE);else if (cp === $.SOLIDUS) this._leaveAttrValue(SELF_CLOSING_START_TAG_STATE);else if (cp === $.GREATER_THAN_SIGN) {
      this._leaveAttrValue(DATA_STATE);

      this._emitCurrentToken();
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
  }; //12.2.4.43 Self-closing start tag state
  //------------------------------------------------------------------


  _[SELF_CLOSING_START_TAG_STATE] = function selfClosingStartTagState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
      this.currentToken.selfClosing = true;
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (cp === $.EOF) this._reconsumeInState(DATA_STATE);else this._reconsumeInState(BEFORE_ATTRIBUTE_NAME_STATE);
  }; //12.2.4.44 Bogus comment state
  //------------------------------------------------------------------


  _[BOGUS_COMMENT_STATE] = function bogusCommentState() {
    this._createCommentToken();

    this._reconsumeInState(BOGUS_COMMENT_STATE_CONTINUATION);
  }; //HACK: to support streaming and make BOGUS_COMMENT_STATE reentrant we've
  //introduced BOGUS_COMMENT_STATE_CONTINUATION state which will not produce
  //comment token on each call.


  _[BOGUS_COMMENT_STATE_CONTINUATION] = function bogusCommentStateContinuation(cp) {
    while (true) {
      if (cp === $.GREATER_THAN_SIGN) {
        this.state = DATA_STATE;
        break;
      } else if (cp === $.EOF) {
        this._reconsumeInState(DATA_STATE);

        break;
      } else {
        this.currentToken.data += cp === $.NULL ? unicode.REPLACEMENT_CHARACTER : toChar(cp);

        this._hibernationSnapshot();

        cp = this._consume();
        if (this._ensureHibernation()) return;
      }
    }

    this._emitCurrentToken();
  }; //12.2.4.45 Markup declaration open state
  //------------------------------------------------------------------


  _[MARKUP_DECLARATION_OPEN_STATE] = function markupDeclarationOpenState(cp) {
    var dashDashMatch = this._consumeSubsequentIfMatch($$.DASH_DASH_STRING, cp, true),
        doctypeMatch = !dashDashMatch && this._consumeSubsequentIfMatch($$.DOCTYPE_STRING, cp, false),
        cdataMatch = !dashDashMatch && !doctypeMatch && this.allowCDATA && this._consumeSubsequentIfMatch($$.CDATA_START_STRING, cp, true);

    if (!this._ensureHibernation()) {
      if (dashDashMatch) {
        this._createCommentToken();

        this.state = COMMENT_START_STATE;
      } else if (doctypeMatch) this.state = DOCTYPE_STATE;else if (cdataMatch) this.state = CDATA_SECTION_STATE;else this._reconsumeInState(BOGUS_COMMENT_STATE);
    }
  }; //12.2.4.46 Comment start state
  //------------------------------------------------------------------


  _[COMMENT_START_STATE] = function commentStartState(cp) {
    if (cp === $.HYPHEN_MINUS) this.state = COMMENT_START_DASH_STATE;else if (cp === $.NULL) {
      this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
      this.state = COMMENT_STATE;
    } else if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (cp === $.EOF) {
      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else {
      this.currentToken.data += toChar(cp);
      this.state = COMMENT_STATE;
    }
  }; //12.2.4.47 Comment start dash state
  //------------------------------------------------------------------


  _[COMMENT_START_DASH_STATE] = function commentStartDashState(cp) {
    if (cp === $.HYPHEN_MINUS) this.state = COMMENT_END_STATE;else if (cp === $.NULL) {
      this.currentToken.data += '-';
      this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
      this.state = COMMENT_STATE;
    } else if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (cp === $.EOF) {
      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else {
      this.currentToken.data += '-';
      this.currentToken.data += toChar(cp);
      this.state = COMMENT_STATE;
    }
  }; //12.2.4.48 Comment state
  //------------------------------------------------------------------


  _[COMMENT_STATE] = function commentState(cp) {
    if (cp === $.HYPHEN_MINUS) this.state = COMMENT_END_DASH_STATE;else if (cp === $.NULL) this.currentToken.data += unicode.REPLACEMENT_CHARACTER;else if (cp === $.EOF) {
      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else this.currentToken.data += toChar(cp);
  }; //12.2.4.49 Comment end dash state
  //------------------------------------------------------------------


  _[COMMENT_END_DASH_STATE] = function commentEndDashState(cp) {
    if (cp === $.HYPHEN_MINUS) this.state = COMMENT_END_STATE;else if (cp === $.NULL) {
      this.currentToken.data += '-';
      this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
      this.state = COMMENT_STATE;
    } else if (cp === $.EOF) {
      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else {
      this.currentToken.data += '-';
      this.currentToken.data += toChar(cp);
      this.state = COMMENT_STATE;
    }
  }; //12.2.4.50 Comment end state
  //------------------------------------------------------------------


  _[COMMENT_END_STATE] = function commentEndState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (cp === $.EXCLAMATION_MARK) this.state = COMMENT_END_BANG_STATE;else if (cp === $.HYPHEN_MINUS) this.currentToken.data += '-';else if (cp === $.NULL) {
      this.currentToken.data += '--';
      this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
      this.state = COMMENT_STATE;
    } else if (cp === $.EOF) {
      this._reconsumeInState(DATA_STATE);

      this._emitCurrentToken();
    } else {
      this.currentToken.data += '--';
      this.currentToken.data += toChar(cp);
      this.state = COMMENT_STATE;
    }
  }; //12.2.4.51 Comment end bang state
  //------------------------------------------------------------------


  _[COMMENT_END_BANG_STATE] = function commentEndBangState(cp) {
    if (cp === $.HYPHEN_MINUS) {
      this.currentToken.data += '--!';
      this.state = COMMENT_END_DASH_STATE;
    } else if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else if (cp === $.NULL) {
      this.currentToken.data += '--!';
      this.currentToken.data += unicode.REPLACEMENT_CHARACTER;
      this.state = COMMENT_STATE;
    } else if (cp === $.EOF) {
      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else {
      this.currentToken.data += '--!';
      this.currentToken.data += toChar(cp);
      this.state = COMMENT_STATE;
    }
  }; //12.2.4.52 DOCTYPE state
  //------------------------------------------------------------------


  _[DOCTYPE_STATE] = function doctypeState(cp) {
    if (isWhitespace(cp)) return;else if (cp === $.GREATER_THAN_SIGN) {
      this._createDoctypeToken(null);

      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.EOF) {
      this._createDoctypeToken(null);

      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else {
      this._createDoctypeToken('');

      this._reconsumeInState(DOCTYPE_NAME_STATE);
    }
  }; //12.2.4.54 DOCTYPE name state
  //------------------------------------------------------------------


  _[DOCTYPE_NAME_STATE] = function doctypeNameState(cp) {
    if (isWhitespace(cp) || cp === $.GREATER_THAN_SIGN || cp === $.EOF) this._reconsumeInState(AFTER_DOCTYPE_NAME_STATE);else if (isAsciiUpper(cp)) this.currentToken.name += toAsciiLowerChar(cp);else if (cp === $.NULL) this.currentToken.name += unicode.REPLACEMENT_CHARACTER;else this.currentToken.name += toChar(cp);
  }; //12.2.4.55 After DOCTYPE name state
  //------------------------------------------------------------------


  _[AFTER_DOCTYPE_NAME_STATE] = function afterDoctypeNameState(cp) {
    if (isWhitespace(cp)) return;

    if (cp === $.GREATER_THAN_SIGN) {
      this.state = DATA_STATE;

      this._emitCurrentToken();
    } else {
      var publicMatch = this._consumeSubsequentIfMatch($$.PUBLIC_STRING, cp, false),
          systemMatch = !publicMatch && this._consumeSubsequentIfMatch($$.SYSTEM_STRING, cp, false);

      if (!this._ensureHibernation()) {
        if (publicMatch) this.state = BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE;else if (systemMatch) this.state = BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE;else {
          this.currentToken.forceQuirks = true;
          this.state = BOGUS_DOCTYPE_STATE;
        }
      }
    }
  }; //12.2.4.57 Before DOCTYPE public identifier state
  //------------------------------------------------------------------


  _[BEFORE_DOCTYPE_PUBLIC_IDENTIFIER_STATE] = function beforeDoctypePublicIdentifierState(cp) {
    if (isWhitespace(cp)) return;

    if (cp === $.QUOTATION_MARK) {
      this.currentToken.publicId = '';
      this.state = DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE;
    } else if (cp === $.APOSTROPHE) {
      this.currentToken.publicId = '';
      this.state = DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE;
    } else {
      this.currentToken.forceQuirks = true;

      this._reconsumeInState(BOGUS_DOCTYPE_STATE);
    }
  }; //12.2.4.58 DOCTYPE public identifier (double-quoted) state
  //------------------------------------------------------------------


  _[DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypePublicIdentifierDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK) this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;else if (cp === $.NULL) this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;else if (cp === $.GREATER_THAN_SIGN) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.EOF) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else this.currentToken.publicId += toChar(cp);
  }; //12.2.4.59 DOCTYPE public identifier (single-quoted) state
  //------------------------------------------------------------------


  _[DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypePublicIdentifierSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE) this.state = BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE;else if (cp === $.NULL) this.currentToken.publicId += unicode.REPLACEMENT_CHARACTER;else if (cp === $.GREATER_THAN_SIGN) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.EOF) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else this.currentToken.publicId += toChar(cp);
  }; //12.2.4.61 Between DOCTYPE public and system identifiers state
  //------------------------------------------------------------------


  _[BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS_STATE] = function betweenDoctypePublicAndSystemIdentifiersState(cp) {
    if (isWhitespace(cp)) return;

    if (cp === $.GREATER_THAN_SIGN) {
      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.QUOTATION_MARK) {
      this.currentToken.systemId = '';
      this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    } else if (cp === $.APOSTROPHE) {
      this.currentToken.systemId = '';
      this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    } else {
      this.currentToken.forceQuirks = true;

      this._reconsumeInState(BOGUS_DOCTYPE_STATE);
    }
  }; //12.2.4.63 Before DOCTYPE system identifier state
  //------------------------------------------------------------------


  _[BEFORE_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function beforeDoctypeSystemIdentifierState(cp) {
    if (isWhitespace(cp)) return;

    if (cp === $.QUOTATION_MARK) {
      this.currentToken.systemId = '';
      this.state = DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE;
    } else if (cp === $.APOSTROPHE) {
      this.currentToken.systemId = '';
      this.state = DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE;
    } else {
      this.currentToken.forceQuirks = true;

      this._reconsumeInState(BOGUS_DOCTYPE_STATE);
    }
  }; //12.2.4.64 DOCTYPE system identifier (double-quoted) state
  //------------------------------------------------------------------


  _[DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED_STATE] = function doctypeSystemIdentifierDoubleQuotedState(cp) {
    if (cp === $.QUOTATION_MARK) this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;else if (cp === $.GREATER_THAN_SIGN) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.NULL) this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;else if (cp === $.EOF) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else this.currentToken.systemId += toChar(cp);
  }; //12.2.4.65 DOCTYPE system identifier (single-quoted) state
  //------------------------------------------------------------------


  _[DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED_STATE] = function doctypeSystemIdentifierSingleQuotedState(cp) {
    if (cp === $.APOSTROPHE) this.state = AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE;else if (cp === $.GREATER_THAN_SIGN) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.NULL) this.currentToken.systemId += unicode.REPLACEMENT_CHARACTER;else if (cp === $.EOF) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else this.currentToken.systemId += toChar(cp);
  }; //12.2.4.66 After DOCTYPE system identifier state
  //------------------------------------------------------------------


  _[AFTER_DOCTYPE_SYSTEM_IDENTIFIER_STATE] = function afterDoctypeSystemIdentifierState(cp) {
    if (isWhitespace(cp)) return;

    if (cp === $.GREATER_THAN_SIGN) {
      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.EOF) {
      this.currentToken.forceQuirks = true;

      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    } else this.state = BOGUS_DOCTYPE_STATE;
  }; //12.2.4.67 Bogus DOCTYPE state
  //------------------------------------------------------------------


  _[BOGUS_DOCTYPE_STATE] = function bogusDoctypeState(cp) {
    if (cp === $.GREATER_THAN_SIGN) {
      this._emitCurrentToken();

      this.state = DATA_STATE;
    } else if (cp === $.EOF) {
      this._emitCurrentToken();

      this._reconsumeInState(DATA_STATE);
    }
  }; //12.2.4.68 CDATA section state
  //------------------------------------------------------------------


  _[CDATA_SECTION_STATE] = function cdataSectionState(cp) {
    while (true) {
      if (cp === $.EOF) {
        this._reconsumeInState(DATA_STATE);

        break;
      } else {
        var cdataEndMatch = this._consumeSubsequentIfMatch($$.CDATA_END_STRING, cp, true);

        if (this._ensureHibernation()) break;

        if (cdataEndMatch) {
          this.state = DATA_STATE;
          break;
        }

        this._emitCodePoint(cp);

        this._hibernationSnapshot();

        cp = this._consume();
        if (this._ensureHibernation()) break;
      }
    }
  };
  });

  var html = createCommonjsModule(function (module, exports) {

  var NS = exports.NAMESPACES = {
    HTML: 'http://www.w3.org/1999/xhtml',
    MATHML: 'http://www.w3.org/1998/Math/MathML',
    SVG: 'http://www.w3.org/2000/svg',
    XLINK: 'http://www.w3.org/1999/xlink',
    XML: 'http://www.w3.org/XML/1998/namespace',
    XMLNS: 'http://www.w3.org/2000/xmlns/'
  };
  exports.ATTRS = {
    TYPE: 'type',
    ACTION: 'action',
    ENCODING: 'encoding',
    PROMPT: 'prompt',
    NAME: 'name',
    COLOR: 'color',
    FACE: 'face',
    SIZE: 'size'
  };
  exports.DOCUMENT_MODE = {
    NO_QUIRKS: 'no-quirks',
    QUIRKS: 'quirks',
    LIMITED_QUIRKS: 'limited-quirks'
  };
  var $ = exports.TAG_NAMES = {
    A: 'a',
    ADDRESS: 'address',
    ANNOTATION_XML: 'annotation-xml',
    APPLET: 'applet',
    AREA: 'area',
    ARTICLE: 'article',
    ASIDE: 'aside',
    B: 'b',
    BASE: 'base',
    BASEFONT: 'basefont',
    BGSOUND: 'bgsound',
    BIG: 'big',
    BLOCKQUOTE: 'blockquote',
    BODY: 'body',
    BR: 'br',
    BUTTON: 'button',
    CAPTION: 'caption',
    CENTER: 'center',
    CODE: 'code',
    COL: 'col',
    COLGROUP: 'colgroup',
    DD: 'dd',
    DESC: 'desc',
    DETAILS: 'details',
    DIALOG: 'dialog',
    DIR: 'dir',
    DIV: 'div',
    DL: 'dl',
    DT: 'dt',
    EM: 'em',
    EMBED: 'embed',
    FIELDSET: 'fieldset',
    FIGCAPTION: 'figcaption',
    FIGURE: 'figure',
    FONT: 'font',
    FOOTER: 'footer',
    FOREIGN_OBJECT: 'foreignObject',
    FORM: 'form',
    FRAME: 'frame',
    FRAMESET: 'frameset',
    H1: 'h1',
    H2: 'h2',
    H3: 'h3',
    H4: 'h4',
    H5: 'h5',
    H6: 'h6',
    HEAD: 'head',
    HEADER: 'header',
    HGROUP: 'hgroup',
    HR: 'hr',
    HTML: 'html',
    I: 'i',
    IMG: 'img',
    IMAGE: 'image',
    INPUT: 'input',
    IFRAME: 'iframe',
    KEYGEN: 'keygen',
    LABEL: 'label',
    LI: 'li',
    LINK: 'link',
    LISTING: 'listing',
    MAIN: 'main',
    MALIGNMARK: 'malignmark',
    MARQUEE: 'marquee',
    MATH: 'math',
    MENU: 'menu',
    MENUITEM: 'menuitem',
    META: 'meta',
    MGLYPH: 'mglyph',
    MI: 'mi',
    MO: 'mo',
    MN: 'mn',
    MS: 'ms',
    MTEXT: 'mtext',
    NAV: 'nav',
    NOBR: 'nobr',
    NOFRAMES: 'noframes',
    NOEMBED: 'noembed',
    NOSCRIPT: 'noscript',
    OBJECT: 'object',
    OL: 'ol',
    OPTGROUP: 'optgroup',
    OPTION: 'option',
    P: 'p',
    PARAM: 'param',
    PLAINTEXT: 'plaintext',
    PRE: 'pre',
    RB: 'rb',
    RP: 'rp',
    RT: 'rt',
    RTC: 'rtc',
    RUBY: 'ruby',
    S: 's',
    SCRIPT: 'script',
    SECTION: 'section',
    SELECT: 'select',
    SOURCE: 'source',
    SMALL: 'small',
    SPAN: 'span',
    STRIKE: 'strike',
    STRONG: 'strong',
    STYLE: 'style',
    SUB: 'sub',
    SUMMARY: 'summary',
    SUP: 'sup',
    TABLE: 'table',
    TBODY: 'tbody',
    TEMPLATE: 'template',
    TEXTAREA: 'textarea',
    TFOOT: 'tfoot',
    TD: 'td',
    TH: 'th',
    THEAD: 'thead',
    TITLE: 'title',
    TR: 'tr',
    TRACK: 'track',
    TT: 'tt',
    U: 'u',
    UL: 'ul',
    SVG: 'svg',
    VAR: 'var',
    WBR: 'wbr',
    XMP: 'xmp'
  };
  var SPECIAL_ELEMENTS = exports.SPECIAL_ELEMENTS = Object.create(null);
  SPECIAL_ELEMENTS[NS.HTML] = Object.create(null);
  SPECIAL_ELEMENTS[NS.HTML][$.ADDRESS] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.APPLET] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.AREA] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.ARTICLE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.ASIDE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BASE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BASEFONT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BGSOUND] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BLOCKQUOTE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BODY] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BR] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.BUTTON] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.CAPTION] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.CENTER] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.COL] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.COLGROUP] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.DD] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.DETAILS] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.DIR] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.DIV] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.DL] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.DT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.EMBED] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FIELDSET] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FIGCAPTION] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FIGURE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FOOTER] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FORM] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FRAME] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.FRAMESET] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.H1] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.H2] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.H3] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.H4] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.H5] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.H6] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.HEAD] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.HEADER] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.HGROUP] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.HR] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.HTML] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.IFRAME] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.IMG] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.INPUT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.LI] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.LINK] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.LISTING] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.MAIN] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.MARQUEE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.MENU] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.META] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.NAV] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.NOEMBED] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.NOFRAMES] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.NOSCRIPT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.OBJECT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.OL] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.P] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.PARAM] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.PLAINTEXT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.PRE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.SCRIPT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.SECTION] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.SELECT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.SOURCE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.STYLE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.SUMMARY] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TABLE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TBODY] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TD] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TEMPLATE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TEXTAREA] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TFOOT] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TH] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.THEAD] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TITLE] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TR] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.TRACK] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.UL] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.WBR] = true;
  SPECIAL_ELEMENTS[NS.HTML][$.XMP] = true;
  SPECIAL_ELEMENTS[NS.MATHML] = Object.create(null);
  SPECIAL_ELEMENTS[NS.MATHML][$.MI] = true;
  SPECIAL_ELEMENTS[NS.MATHML][$.MO] = true;
  SPECIAL_ELEMENTS[NS.MATHML][$.MN] = true;
  SPECIAL_ELEMENTS[NS.MATHML][$.MS] = true;
  SPECIAL_ELEMENTS[NS.MATHML][$.MTEXT] = true;
  SPECIAL_ELEMENTS[NS.MATHML][$.ANNOTATION_XML] = true;
  SPECIAL_ELEMENTS[NS.SVG] = Object.create(null);
  SPECIAL_ELEMENTS[NS.SVG][$.TITLE] = true;
  SPECIAL_ELEMENTS[NS.SVG][$.FOREIGN_OBJECT] = true;
  SPECIAL_ELEMENTS[NS.SVG][$.DESC] = true;
  });

  var open_element_stack = createCommonjsModule(function (module) {

   //Aliases


  var $ = html.TAG_NAMES,
      NS = html.NAMESPACES; //Element utils
  //OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
  //It's faster than using dictionary.

  function isImpliedEndTagRequired(tn) {
    switch (tn.length) {
      case 1:
        return tn === $.P;

      case 2:
        return tn === $.RB || tn === $.RP || tn === $.RT || tn === $.DD || tn === $.DT || tn === $.LI;

      case 3:
        return tn === $.RTC;

      case 6:
        return tn === $.OPTION;

      case 8:
        return tn === $.OPTGROUP || tn === $.MENUITEM;
    }

    return false;
  }

  function isScopingElement(tn, ns) {
    switch (tn.length) {
      case 2:
        if (tn === $.TD || tn === $.TH) return ns === NS.HTML;else if (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS) return ns === NS.MATHML;
        break;

      case 4:
        if (tn === $.HTML) return ns === NS.HTML;else if (tn === $.DESC) return ns === NS.SVG;
        break;

      case 5:
        if (tn === $.TABLE) return ns === NS.HTML;else if (tn === $.MTEXT) return ns === NS.MATHML;else if (tn === $.TITLE) return ns === NS.SVG;
        break;

      case 6:
        return (tn === $.APPLET || tn === $.OBJECT) && ns === NS.HTML;

      case 7:
        return (tn === $.CAPTION || tn === $.MARQUEE) && ns === NS.HTML;

      case 8:
        return tn === $.TEMPLATE && ns === NS.HTML;

      case 13:
        return tn === $.FOREIGN_OBJECT && ns === NS.SVG;

      case 14:
        return tn === $.ANNOTATION_XML && ns === NS.MATHML;
    }

    return false;
  } //Stack of open elements


  var OpenElementStack = module.exports = function (document, treeAdapter) {
    this.stackTop = -1;
    this.items = [];
    this.current = document;
    this.currentTagName = null;
    this.currentTmplContent = null;
    this.tmplCount = 0;
    this.treeAdapter = treeAdapter;
  }; //Index of element


  OpenElementStack.prototype._indexOf = function (element) {
    var idx = -1;

    for (var i = this.stackTop; i >= 0; i--) {
      if (this.items[i] === element) {
        idx = i;
        break;
      }
    }

    return idx;
  }; //Update current element


  OpenElementStack.prototype._isInTemplate = function () {
    return this.currentTagName === $.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === NS.HTML;
  };

  OpenElementStack.prototype._updateCurrentElement = function () {
    this.current = this.items[this.stackTop];
    this.currentTagName = this.current && this.treeAdapter.getTagName(this.current);
    this.currentTmplContent = this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : null;
  }; //Mutations


  OpenElementStack.prototype.push = function (element) {
    this.items[++this.stackTop] = element;

    this._updateCurrentElement();

    if (this._isInTemplate()) this.tmplCount++;
  };

  OpenElementStack.prototype.pop = function () {
    this.stackTop--;
    if (this.tmplCount > 0 && this._isInTemplate()) this.tmplCount--;

    this._updateCurrentElement();
  };

  OpenElementStack.prototype.replace = function (oldElement, newElement) {
    var idx = this._indexOf(oldElement);

    this.items[idx] = newElement;
    if (idx === this.stackTop) this._updateCurrentElement();
  };

  OpenElementStack.prototype.insertAfter = function (referenceElement, newElement) {
    var insertionIdx = this._indexOf(referenceElement) + 1;
    this.items.splice(insertionIdx, 0, newElement);
    if (insertionIdx === ++this.stackTop) this._updateCurrentElement();
  };

  OpenElementStack.prototype.popUntilTagNamePopped = function (tagName) {
    while (this.stackTop > -1) {
      var tn = this.currentTagName,
          ns = this.treeAdapter.getNamespaceURI(this.current);
      this.pop();
      if (tn === tagName && ns === NS.HTML) break;
    }
  };

  OpenElementStack.prototype.popUntilElementPopped = function (element) {
    while (this.stackTop > -1) {
      var poppedElement = this.current;
      this.pop();
      if (poppedElement === element) break;
    }
  };

  OpenElementStack.prototype.popUntilNumberedHeaderPopped = function () {
    while (this.stackTop > -1) {
      var tn = this.currentTagName,
          ns = this.treeAdapter.getNamespaceURI(this.current);
      this.pop();
      if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6 && ns === NS.HTML) break;
    }
  };

  OpenElementStack.prototype.popUntilTableCellPopped = function () {
    while (this.stackTop > -1) {
      var tn = this.currentTagName,
          ns = this.treeAdapter.getNamespaceURI(this.current);
      this.pop();
      if (tn === $.TD || tn === $.TH && ns === NS.HTML) break;
    }
  };

  OpenElementStack.prototype.popAllUpToHtmlElement = function () {
    //NOTE: here we assume that root <html> element is always first in the open element stack, so
    //we perform this fast stack clean up.
    this.stackTop = 0;

    this._updateCurrentElement();
  };

  OpenElementStack.prototype.clearBackToTableContext = function () {
    while (this.currentTagName !== $.TABLE && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
      this.pop();
    }
  };

  OpenElementStack.prototype.clearBackToTableBodyContext = function () {
    while (this.currentTagName !== $.TBODY && this.currentTagName !== $.TFOOT && this.currentTagName !== $.THEAD && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
      this.pop();
    }
  };

  OpenElementStack.prototype.clearBackToTableRowContext = function () {
    while (this.currentTagName !== $.TR && this.currentTagName !== $.TEMPLATE && this.currentTagName !== $.HTML || this.treeAdapter.getNamespaceURI(this.current) !== NS.HTML) {
      this.pop();
    }
  };

  OpenElementStack.prototype.remove = function (element) {
    for (var i = this.stackTop; i >= 0; i--) {
      if (this.items[i] === element) {
        this.items.splice(i, 1);
        this.stackTop--;

        this._updateCurrentElement();

        break;
      }
    }
  }; //Search


  OpenElementStack.prototype.tryPeekProperlyNestedBodyElement = function () {
    //Properly nested <body> element (should be second element in stack).
    var element = this.items[1];
    return element && this.treeAdapter.getTagName(element) === $.BODY ? element : null;
  };

  OpenElementStack.prototype.contains = function (element) {
    return this._indexOf(element) > -1;
  };

  OpenElementStack.prototype.getCommonAncestor = function (element) {
    var elementIdx = this._indexOf(element);

    return --elementIdx >= 0 ? this.items[elementIdx] : null;
  };

  OpenElementStack.prototype.isRootHtmlElementCurrent = function () {
    return this.stackTop === 0 && this.currentTagName === $.HTML;
  }; //Element in scope


  OpenElementStack.prototype.hasInScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (tn === tagName && ns === NS.HTML) return true;
      if (isScopingElement(tn, ns)) return false;
    }

    return true;
  };

  OpenElementStack.prototype.hasNumberedHeaderInScope = function () {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if ((tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) && ns === NS.HTML) return true;
      if (isScopingElement(tn, ns)) return false;
    }

    return true;
  };

  OpenElementStack.prototype.hasInListItemScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (tn === tagName && ns === NS.HTML) return true;
      if ((tn === $.UL || tn === $.OL) && ns === NS.HTML || isScopingElement(tn, ns)) return false;
    }

    return true;
  };

  OpenElementStack.prototype.hasInButtonScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (tn === tagName && ns === NS.HTML) return true;
      if (tn === $.BUTTON && ns === NS.HTML || isScopingElement(tn, ns)) return false;
    }

    return true;
  };

  OpenElementStack.prototype.hasInTableScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (ns !== NS.HTML) continue;
      if (tn === tagName) return true;
      if (tn === $.TABLE || tn === $.TEMPLATE || tn === $.HTML) return false;
    }

    return true;
  };

  OpenElementStack.prototype.hasTableBodyContextInTableScope = function () {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (ns !== NS.HTML) continue;
      if (tn === $.TBODY || tn === $.THEAD || tn === $.TFOOT) return true;
      if (tn === $.TABLE || tn === $.HTML) return false;
    }

    return true;
  };

  OpenElementStack.prototype.hasInSelectScope = function (tagName) {
    for (var i = this.stackTop; i >= 0; i--) {
      var tn = this.treeAdapter.getTagName(this.items[i]),
          ns = this.treeAdapter.getNamespaceURI(this.items[i]);
      if (ns !== NS.HTML) continue;
      if (tn === tagName) return true;
      if (tn !== $.OPTION && tn !== $.OPTGROUP) return false;
    }

    return true;
  }; //Implied end tags


  OpenElementStack.prototype.generateImpliedEndTags = function () {
    while (isImpliedEndTagRequired(this.currentTagName)) {
      this.pop();
    }
  };

  OpenElementStack.prototype.generateImpliedEndTagsWithExclusion = function (exclusionTagName) {
    while (isImpliedEndTagRequired(this.currentTagName) && this.currentTagName !== exclusionTagName) {
      this.pop();
    }
  };
  });

  var formatting_element_list = createCommonjsModule(function (module) {

  var NOAH_ARK_CAPACITY = 3; //List of formatting elements

  var FormattingElementList = module.exports = function (treeAdapter) {
    this.length = 0;
    this.entries = [];
    this.treeAdapter = treeAdapter;
    this.bookmark = null;
  }; //Entry types


  FormattingElementList.MARKER_ENTRY = 'MARKER_ENTRY';
  FormattingElementList.ELEMENT_ENTRY = 'ELEMENT_ENTRY'; //Noah Ark's condition
  //OPTIMIZATION: at first we try to find possible candidates for exclusion using
  //lightweight heuristics without thorough attributes check.

  FormattingElementList.prototype._getNoahArkConditionCandidates = function (newElement) {
    var candidates = [];

    if (this.length >= NOAH_ARK_CAPACITY) {
      var neAttrsLength = this.treeAdapter.getAttrList(newElement).length,
          neTagName = this.treeAdapter.getTagName(newElement),
          neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);

      for (var i = this.length - 1; i >= 0; i--) {
        var entry = this.entries[i];
        if (entry.type === FormattingElementList.MARKER_ENTRY) break;
        var element = entry.element,
            elementAttrs = this.treeAdapter.getAttrList(element),
            isCandidate = this.treeAdapter.getTagName(element) === neTagName && this.treeAdapter.getNamespaceURI(element) === neNamespaceURI && elementAttrs.length === neAttrsLength;
        if (isCandidate) candidates.push({
          idx: i,
          attrs: elementAttrs
        });
      }
    }

    return candidates.length < NOAH_ARK_CAPACITY ? [] : candidates;
  };

  FormattingElementList.prototype._ensureNoahArkCondition = function (newElement) {
    var candidates = this._getNoahArkConditionCandidates(newElement),
        cLength = candidates.length;

    if (cLength) {
      var neAttrs = this.treeAdapter.getAttrList(newElement),
          neAttrsLength = neAttrs.length,
          neAttrsMap = Object.create(null); //NOTE: build attrs map for the new element so we can perform fast lookups

      for (var i = 0; i < neAttrsLength; i++) {
        var neAttr = neAttrs[i];
        neAttrsMap[neAttr.name] = neAttr.value;
      }

      for (i = 0; i < neAttrsLength; i++) {
        for (var j = 0; j < cLength; j++) {
          var cAttr = candidates[j].attrs[i];

          if (neAttrsMap[cAttr.name] !== cAttr.value) {
            candidates.splice(j, 1);
            cLength--;
          }

          if (candidates.length < NOAH_ARK_CAPACITY) return;
        }
      } //NOTE: remove bottommost candidates until Noah's Ark condition will not be met


      for (i = cLength - 1; i >= NOAH_ARK_CAPACITY - 1; i--) {
        this.entries.splice(candidates[i].idx, 1);
        this.length--;
      }
    }
  }; //Mutations


  FormattingElementList.prototype.insertMarker = function () {
    this.entries.push({
      type: FormattingElementList.MARKER_ENTRY
    });
    this.length++;
  };

  FormattingElementList.prototype.pushElement = function (element, token) {
    this._ensureNoahArkCondition(element);

    this.entries.push({
      type: FormattingElementList.ELEMENT_ENTRY,
      element: element,
      token: token
    });
    this.length++;
  };

  FormattingElementList.prototype.insertElementAfterBookmark = function (element, token) {
    var bookmarkIdx = this.length - 1;

    for (; bookmarkIdx >= 0; bookmarkIdx--) {
      if (this.entries[bookmarkIdx] === this.bookmark) break;
    }

    this.entries.splice(bookmarkIdx + 1, 0, {
      type: FormattingElementList.ELEMENT_ENTRY,
      element: element,
      token: token
    });
    this.length++;
  };

  FormattingElementList.prototype.removeEntry = function (entry) {
    for (var i = this.length - 1; i >= 0; i--) {
      if (this.entries[i] === entry) {
        this.entries.splice(i, 1);
        this.length--;
        break;
      }
    }
  };

  FormattingElementList.prototype.clearToLastMarker = function () {
    while (this.length) {
      var entry = this.entries.pop();
      this.length--;
      if (entry.type === FormattingElementList.MARKER_ENTRY) break;
    }
  }; //Search


  FormattingElementList.prototype.getElementEntryInScopeWithTagName = function (tagName) {
    for (var i = this.length - 1; i >= 0; i--) {
      var entry = this.entries[i];
      if (entry.type === FormattingElementList.MARKER_ENTRY) return null;
      if (this.treeAdapter.getTagName(entry.element) === tagName) return entry;
    }

    return null;
  };

  FormattingElementList.prototype.getElementEntry = function (element) {
    for (var i = this.length - 1; i >= 0; i--) {
      var entry = this.entries[i];
      if (entry.type === FormattingElementList.ELEMENT_ENTRY && entry.element === element) return entry;
    }

    return null;
  };
  });

  var mixin = createCommonjsModule(function (module) {

  var Mixin = module.exports = function (host) {
    var originalMethods = {},
        overriddenMethods = this._getOverriddenMethods(this, originalMethods);

    Object.keys(overriddenMethods).forEach(function (key) {
      if (typeof overriddenMethods[key] === 'function') {
        originalMethods[key] = host[key];
        host[key] = overriddenMethods[key];
      }
    });
  };

  Mixin.prototype._getOverriddenMethods = function () {
    throw new Error('Not implemented');
  };
  });

  var preprocessor_mixin = createCommonjsModule(function (module) {

  var inherits = require$$0__default['default'].inherits; //Aliases


  var $ = unicode.CODE_POINTS;

  var PositionTrackingPreprocessorMixin = module.exports = function (preprocessor) {
    // NOTE: avoid installing tracker twice
    if (!preprocessor.__locTracker) {
      preprocessor.__locTracker = this;
      mixin.call(this, preprocessor);
      this.preprocessor = preprocessor;
      this.isEol = false;
      this.lineStartPos = 0;
      this.droppedBufferSize = 0;
      this.col = -1;
      this.line = 1;
    }

    return preprocessor.__locTracker;
  };

  inherits(PositionTrackingPreprocessorMixin, mixin);
  Object.defineProperty(PositionTrackingPreprocessorMixin.prototype, 'offset', {
    get: function get() {
      return this.droppedBufferSize + this.preprocessor.pos;
    }
  });

  PositionTrackingPreprocessorMixin.prototype._getOverriddenMethods = function (mxn, orig) {
    return {
      advance: function advance() {
        var cp = orig.advance.call(this); //NOTE: LF should be in the last column of the line

        if (mxn.isEol) {
          mxn.isEol = false;
          mxn.line++;
          mxn.lineStartPos = mxn.offset;
        }

        if (cp === $.LINE_FEED) mxn.isEol = true;
        mxn.col = mxn.offset - mxn.lineStartPos + 1;
        return cp;
      },
      retreat: function retreat() {
        orig.retreat.call(this);
        mxn.isEol = false;
        mxn.col = mxn.offset - mxn.lineStartPos + 1;
      },
      dropParsedChunk: function dropParsedChunk() {
        var prevPos = this.pos;
        orig.dropParsedChunk.call(this);
        mxn.droppedBufferSize += prevPos - this.pos;
      }
    };
  };
  });

  var tokenizer_mixin = createCommonjsModule(function (module) {

  var inherits = require$$0__default['default'].inherits;

  var LocationInfoTokenizerMixin = module.exports = function (tokenizer) {
    mixin.call(this, tokenizer);
    this.tokenizer = tokenizer;
    this.posTracker = new preprocessor_mixin(tokenizer.preprocessor);
    this.currentAttrLocation = null;
    this.currentTokenLocation = null;
  };

  inherits(LocationInfoTokenizerMixin, mixin);

  LocationInfoTokenizerMixin.prototype._getCurrentLocation = function () {
    return {
      line: this.posTracker.line,
      col: this.posTracker.col,
      startOffset: this.posTracker.offset,
      endOffset: -1
    };
  };

  LocationInfoTokenizerMixin.prototype._attachCurrentAttrLocationInfo = function () {
    this.currentAttrLocation.endOffset = this.posTracker.offset;
    var currentToken = this.tokenizer.currentToken,
        currentAttr = this.tokenizer.currentAttr;
    if (!currentToken.location.attrs) currentToken.location.attrs = Object.create(null);
    currentToken.location.attrs[currentAttr.name] = this.currentAttrLocation;
  };

  LocationInfoTokenizerMixin.prototype._getOverriddenMethods = function (mxn, orig) {
    var methods = {
      _createStartTagToken: function _createStartTagToken() {
        orig._createStartTagToken.call(this);

        this.currentToken.location = mxn.currentTokenLocation;
      },
      _createEndTagToken: function _createEndTagToken() {
        orig._createEndTagToken.call(this);

        this.currentToken.location = mxn.currentTokenLocation;
      },
      _createCommentToken: function _createCommentToken() {
        orig._createCommentToken.call(this);

        this.currentToken.location = mxn.currentTokenLocation;
      },
      _createDoctypeToken: function _createDoctypeToken(initialName) {
        orig._createDoctypeToken.call(this, initialName);

        this.currentToken.location = mxn.currentTokenLocation;
      },
      _createCharacterToken: function _createCharacterToken(type, ch) {
        orig._createCharacterToken.call(this, type, ch);

        this.currentCharacterToken.location = mxn.currentTokenLocation;
      },
      _createAttr: function _createAttr(attrNameFirstCh) {
        orig._createAttr.call(this, attrNameFirstCh);

        mxn.currentAttrLocation = mxn._getCurrentLocation();
      },
      _leaveAttrName: function _leaveAttrName(toState) {
        orig._leaveAttrName.call(this, toState);

        mxn._attachCurrentAttrLocationInfo();
      },
      _leaveAttrValue: function _leaveAttrValue(toState) {
        orig._leaveAttrValue.call(this, toState);

        mxn._attachCurrentAttrLocationInfo();
      },
      _emitCurrentToken: function _emitCurrentToken() {
        //NOTE: if we have pending character token make it's end location equal to the
        //current token's start location.
        if (this.currentCharacterToken) this.currentCharacterToken.location.endOffset = this.currentToken.location.startOffset;
        this.currentToken.location.endOffset = mxn.posTracker.offset + 1;

        orig._emitCurrentToken.call(this);
      },
      _emitCurrentCharacterToken: function _emitCurrentCharacterToken() {
        //NOTE: if we have character token and it's location wasn't set in the _emitCurrentToken(),
        //then set it's location at the current preprocessor position.
        //We don't need to increment preprocessor position, since character token
        //emission is always forced by the start of the next character token here.
        //So, we already have advanced position.
        if (this.currentCharacterToken && this.currentCharacterToken.location.endOffset === -1) this.currentCharacterToken.location.endOffset = mxn.posTracker.offset;

        orig._emitCurrentCharacterToken.call(this);
      }
    }; //NOTE: patch initial states for each mode to obtain token start position

    Object.keys(tokenizer.MODE).forEach(function (modeName) {
      var state = tokenizer.MODE[modeName];

      methods[state] = function (cp) {
        mxn.currentTokenLocation = mxn._getCurrentLocation();
        orig[state].call(this, cp);
      };
    });
    return methods;
  };
  });

  var open_element_stack_mixin = createCommonjsModule(function (module) {

  var inherits = require$$0__default['default'].inherits;

  var LocationInfoOpenElementStackMixin = module.exports = function (stack, options) {
    mixin.call(this, stack);
    this.onItemPop = options.onItemPop;
  };

  inherits(LocationInfoOpenElementStackMixin, mixin);

  LocationInfoOpenElementStackMixin.prototype._getOverriddenMethods = function (mxn, orig) {
    return {
      pop: function pop() {
        mxn.onItemPop(this.current);
        orig.pop.call(this);
      },
      popAllUpToHtmlElement: function popAllUpToHtmlElement() {
        for (var i = this.stackTop; i > 0; i--) {
          mxn.onItemPop(this.items[i]);
        }

        orig.popAllUpToHtmlElement.call(this);
      },
      remove: function remove(element) {
        mxn.onItemPop(this.current);
        orig.remove.call(this, element);
      }
    };
  };
  });

  var parser_mixin = createCommonjsModule(function (module) {

  var inherits = require$$0__default['default'].inherits; //Aliases


  var $ = html.TAG_NAMES;

  var LocationInfoParserMixin = module.exports = function (parser) {
    mixin.call(this, parser);
    this.parser = parser;
    this.posTracker = null;
    this.lastStartTagToken = null;
    this.lastFosterParentingLocation = null;
    this.currentToken = null;
  };

  inherits(LocationInfoParserMixin, mixin);

  LocationInfoParserMixin.prototype._setStartLocation = function (element) {
    if (this.lastStartTagToken) {
      element.__location = Object.create(this.lastStartTagToken.location);
      element.__location.startTag = this.lastStartTagToken.location;
    } else element.__location = null;
  };

  LocationInfoParserMixin.prototype._setEndLocation = function (element, closingToken) {
    var loc = element.__location;

    if (loc) {
      if (closingToken.location) {
        var ctLoc = closingToken.location,
            tn = this.parser.treeAdapter.getTagName(element); // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
        // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.

        var isClosingEndTag = closingToken.type === tokenizer.END_TAG_TOKEN && tn === closingToken.tagName;

        if (isClosingEndTag) {
          loc.endTag = Object.create(ctLoc);
          loc.endOffset = ctLoc.endOffset;
        } else loc.endOffset = ctLoc.startOffset;
      } else if (closingToken.type === tokenizer.EOF_TOKEN) loc.endOffset = this.posTracker.offset;
    }
  };

  LocationInfoParserMixin.prototype._getOverriddenMethods = function (mxn, orig) {
    return {
      _bootstrap: function _bootstrap(document, fragmentContext) {
        orig._bootstrap.call(this, document, fragmentContext);

        mxn.lastStartTagToken = null;
        mxn.lastFosterParentingLocation = null;
        mxn.currentToken = null;
        mxn.posTracker = new preprocessor_mixin(this.tokenizer.preprocessor);
        new tokenizer_mixin(this.tokenizer);
        new open_element_stack_mixin(this.openElements, {
          onItemPop: function onItemPop(element) {
            mxn._setEndLocation(element, mxn.currentToken);
          }
        });
      },
      _runParsingLoop: function _runParsingLoop(scriptHandler) {
        orig._runParsingLoop.call(this, scriptHandler); // NOTE: generate location info for elements
        // that remains on open element stack


        for (var i = this.openElements.stackTop; i >= 0; i--) {
          mxn._setEndLocation(this.openElements.items[i], mxn.currentToken);
        }
      },
      //Token processing
      _processTokenInForeignContent: function _processTokenInForeignContent(token) {
        mxn.currentToken = token;

        orig._processTokenInForeignContent.call(this, token);
      },
      _processToken: function _processToken(token) {
        mxn.currentToken = token;

        orig._processToken.call(this, token); //NOTE: <body> and <html> are never popped from the stack, so we need to updated
        //their end location explicitly.


        var requireExplicitUpdate = token.type === tokenizer.END_TAG_TOKEN && (token.tagName === $.HTML || token.tagName === $.BODY && this.openElements.hasInScope($.BODY));

        if (requireExplicitUpdate) {
          for (var i = this.openElements.stackTop; i >= 0; i--) {
            var element = this.openElements.items[i];

            if (this.treeAdapter.getTagName(element) === token.tagName) {
              mxn._setEndLocation(element, token);

              break;
            }
          }
        }
      },
      //Doctype
      _setDocumentType: function _setDocumentType(token) {
        orig._setDocumentType.call(this, token);

        var documentChildren = this.treeAdapter.getChildNodes(this.document),
            cnLength = documentChildren.length;

        for (var i = 0; i < cnLength; i++) {
          var node = documentChildren[i];

          if (this.treeAdapter.isDocumentTypeNode(node)) {
            node.__location = token.location;
            break;
          }
        }
      },
      //Elements
      _attachElementToTree: function _attachElementToTree(element) {
        //NOTE: _attachElementToTree is called from _appendElement, _insertElement and _insertTemplate methods.
        //So we will use token location stored in this methods for the element.
        mxn._setStartLocation(element);

        mxn.lastStartTagToken = null;

        orig._attachElementToTree.call(this, element);
      },
      _appendElement: function _appendElement(token, namespaceURI) {
        mxn.lastStartTagToken = token;

        orig._appendElement.call(this, token, namespaceURI);
      },
      _insertElement: function _insertElement(token, namespaceURI) {
        mxn.lastStartTagToken = token;

        orig._insertElement.call(this, token, namespaceURI);
      },
      _insertTemplate: function _insertTemplate(token) {
        mxn.lastStartTagToken = token;

        orig._insertTemplate.call(this, token);

        var tmplContent = this.treeAdapter.getTemplateContent(this.openElements.current);
        tmplContent.__location = null;
      },
      _insertFakeRootElement: function _insertFakeRootElement() {
        orig._insertFakeRootElement.call(this);

        this.openElements.current.__location = null;
      },
      //Comments
      _appendCommentNode: function _appendCommentNode(token, parent) {
        orig._appendCommentNode.call(this, token, parent);

        var children = this.treeAdapter.getChildNodes(parent),
            commentNode = children[children.length - 1];
        commentNode.__location = token.location;
      },
      //Text
      _findFosterParentingLocation: function _findFosterParentingLocation() {
        //NOTE: store last foster parenting location, so we will be able to find inserted text
        //in case of foster parenting
        mxn.lastFosterParentingLocation = orig._findFosterParentingLocation.call(this);
        return mxn.lastFosterParentingLocation;
      },
      _insertCharacters: function _insertCharacters(token) {
        orig._insertCharacters.call(this, token);

        var hasFosterParent = this._shouldFosterParentOnInsertion(),
            parent = hasFosterParent && mxn.lastFosterParentingLocation.parent || this.openElements.currentTmplContent || this.openElements.current,
            siblings = this.treeAdapter.getChildNodes(parent),
            textNodeIdx = hasFosterParent && mxn.lastFosterParentingLocation.beforeElement ? siblings.indexOf(mxn.lastFosterParentingLocation.beforeElement) - 1 : siblings.length - 1,
            textNode = siblings[textNodeIdx]; //NOTE: if we have location assigned by another token, then just update end position


        if (textNode.__location) textNode.__location.endOffset = token.location.endOffset;else textNode.__location = token.location;
      }
    };
  };
  });

  var _default = createCommonjsModule(function (module, exports) {

  var DOCUMENT_MODE = html.DOCUMENT_MODE; //Node construction


  exports.createDocument = function () {
    return {
      nodeName: '#document',
      mode: DOCUMENT_MODE.NO_QUIRKS,
      childNodes: []
    };
  };

  exports.createDocumentFragment = function () {
    return {
      nodeName: '#document-fragment',
      childNodes: []
    };
  };

  exports.createElement = function (tagName, namespaceURI, attrs) {
    return {
      nodeName: tagName,
      tagName: tagName,
      attrs: attrs,
      namespaceURI: namespaceURI,
      childNodes: [],
      parentNode: null
    };
  };

  exports.createCommentNode = function (data) {
    return {
      nodeName: '#comment',
      data: data,
      parentNode: null
    };
  };

  var createTextNode = function createTextNode(value) {
    return {
      nodeName: '#text',
      value: value,
      parentNode: null
    };
  }; //Tree mutation


  var appendChild = exports.appendChild = function (parentNode, newNode) {
    parentNode.childNodes.push(newNode);
    newNode.parentNode = parentNode;
  };

  var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
    var insertionIdx = parentNode.childNodes.indexOf(referenceNode);
    parentNode.childNodes.splice(insertionIdx, 0, newNode);
    newNode.parentNode = parentNode;
  };

  exports.setTemplateContent = function (templateElement, contentElement) {
    templateElement.content = contentElement;
  };

  exports.getTemplateContent = function (templateElement) {
    return templateElement.content;
  };

  exports.setDocumentType = function (document, name, publicId, systemId) {
    var doctypeNode = null;

    for (var i = 0; i < document.childNodes.length; i++) {
      if (document.childNodes[i].nodeName === '#documentType') {
        doctypeNode = document.childNodes[i];
        break;
      }
    }

    if (doctypeNode) {
      doctypeNode.name = name;
      doctypeNode.publicId = publicId;
      doctypeNode.systemId = systemId;
    } else {
      appendChild(document, {
        nodeName: '#documentType',
        name: name,
        publicId: publicId,
        systemId: systemId
      });
    }
  };

  exports.setDocumentMode = function (document, mode) {
    document.mode = mode;
  };

  exports.getDocumentMode = function (document) {
    return document.mode;
  };

  exports.detachNode = function (node) {
    if (node.parentNode) {
      var idx = node.parentNode.childNodes.indexOf(node);
      node.parentNode.childNodes.splice(idx, 1);
      node.parentNode = null;
    }
  };

  exports.insertText = function (parentNode, text) {
    if (parentNode.childNodes.length) {
      var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];

      if (prevNode.nodeName === '#text') {
        prevNode.value += text;
        return;
      }
    }

    appendChild(parentNode, createTextNode(text));
  };

  exports.insertTextBefore = function (parentNode, text, referenceNode) {
    var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
    if (prevNode && prevNode.nodeName === '#text') prevNode.value += text;else insertBefore(parentNode, createTextNode(text), referenceNode);
  };

  exports.adoptAttributes = function (recipient, attrs) {
    var recipientAttrsMap = [];

    for (var i = 0; i < recipient.attrs.length; i++) {
      recipientAttrsMap.push(recipient.attrs[i].name);
    }

    for (var j = 0; j < attrs.length; j++) {
      if (recipientAttrsMap.indexOf(attrs[j].name) === -1) recipient.attrs.push(attrs[j]);
    }
  }; //Tree traversing


  exports.getFirstChild = function (node) {
    return node.childNodes[0];
  };

  exports.getChildNodes = function (node) {
    return node.childNodes;
  };

  exports.getParentNode = function (node) {
    return node.parentNode;
  };

  exports.getAttrList = function (element) {
    return element.attrs;
  }; //Node data


  exports.getTagName = function (element) {
    return element.tagName;
  };

  exports.getNamespaceURI = function (element) {
    return element.namespaceURI;
  };

  exports.getTextNodeContent = function (textNode) {
    return textNode.value;
  };

  exports.getCommentNodeContent = function (commentNode) {
    return commentNode.data;
  };

  exports.getDocumentTypeNodeName = function (doctypeNode) {
    return doctypeNode.name;
  };

  exports.getDocumentTypeNodePublicId = function (doctypeNode) {
    return doctypeNode.publicId;
  };

  exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
    return doctypeNode.systemId;
  }; //Node types


  exports.isTextNode = function (node) {
    return node.nodeName === '#text';
  };

  exports.isCommentNode = function (node) {
    return node.nodeName === '#comment';
  };

  exports.isDocumentTypeNode = function (node) {
    return node.nodeName === '#documentType';
  };

  exports.isElementNode = function (node) {
    return !!node.tagName;
  };
  });

  var merge_options = function mergeOptions(defaults, options) {
    options = options || Object.create(null);
    return [defaults, options].reduce(function (merged, optObj) {
      Object.keys(optObj).forEach(function (key) {
        merged[key] = optObj[key];
      });
      return merged;
    }, Object.create(null));
  };

  var DOCUMENT_MODE = html.DOCUMENT_MODE; //Const


  var VALID_DOCTYPE_NAME = 'html',
      QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd',
      QUIRKS_MODE_PUBLIC_ID_PREFIXES = ['+//silmaril//dtd html pro v0r11 19970101//en', '-//advasoft ltd//dtd html 3.0 aswedit + extensions//en', '-//as//dtd html 3.0 aswedit + extensions//en', '-//ietf//dtd html 2.0 level 1//en', '-//ietf//dtd html 2.0 level 2//en', '-//ietf//dtd html 2.0 strict level 1//en', '-//ietf//dtd html 2.0 strict level 2//en', '-//ietf//dtd html 2.0 strict//en', '-//ietf//dtd html 2.0//en', '-//ietf//dtd html 2.1e//en', '-//ietf//dtd html 3.0//en', '-//ietf//dtd html 3.0//en//', '-//ietf//dtd html 3.2 final//en', '-//ietf//dtd html 3.2//en', '-//ietf//dtd html 3//en', '-//ietf//dtd html level 0//en', '-//ietf//dtd html level 0//en//2.0', '-//ietf//dtd html level 1//en', '-//ietf//dtd html level 1//en//2.0', '-//ietf//dtd html level 2//en', '-//ietf//dtd html level 2//en//2.0', '-//ietf//dtd html level 3//en', '-//ietf//dtd html level 3//en//3.0', '-//ietf//dtd html strict level 0//en', '-//ietf//dtd html strict level 0//en//2.0', '-//ietf//dtd html strict level 1//en', '-//ietf//dtd html strict level 1//en//2.0', '-//ietf//dtd html strict level 2//en', '-//ietf//dtd html strict level 2//en//2.0', '-//ietf//dtd html strict level 3//en', '-//ietf//dtd html strict level 3//en//3.0', '-//ietf//dtd html strict//en', '-//ietf//dtd html strict//en//2.0', '-//ietf//dtd html strict//en//3.0', '-//ietf//dtd html//en', '-//ietf//dtd html//en//2.0', '-//ietf//dtd html//en//3.0', '-//metrius//dtd metrius presentational//en', '-//microsoft//dtd internet explorer 2.0 html strict//en', '-//microsoft//dtd internet explorer 2.0 html//en', '-//microsoft//dtd internet explorer 2.0 tables//en', '-//microsoft//dtd internet explorer 3.0 html strict//en', '-//microsoft//dtd internet explorer 3.0 html//en', '-//microsoft//dtd internet explorer 3.0 tables//en', '-//netscape comm. corp.//dtd html//en', '-//netscape comm. corp.//dtd strict html//en', '-//o\'reilly and associates//dtd html 2.0//en', '-//o\'reilly and associates//dtd html extended 1.0//en', '-//spyglass//dtd html 2.0 extended//en', '-//sq//dtd html 2.0 hotmetal + extensions//en', '-//sun microsystems corp.//dtd hotjava html//en', '-//sun microsystems corp.//dtd hotjava strict html//en', '-//w3c//dtd html 3 1995-03-24//en', '-//w3c//dtd html 3.2 draft//en', '-//w3c//dtd html 3.2 final//en', '-//w3c//dtd html 3.2//en', '-//w3c//dtd html 3.2s draft//en', '-//w3c//dtd html 4.0 frameset//en', '-//w3c//dtd html 4.0 transitional//en', '-//w3c//dtd html experimental 19960712//en', '-//w3c//dtd html experimental 970421//en', '-//w3c//dtd w3 html//en', '-//w3o//dtd w3 html 3.0//en', '-//w3o//dtd w3 html 3.0//en//', '-//webtechs//dtd mozilla html 2.0//en', '-//webtechs//dtd mozilla html//en'],
      QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat(['-//w3c//dtd html 4.01 frameset//', '-//w3c//dtd html 4.01 transitional//']),
      QUIRKS_MODE_PUBLIC_IDS = ['-//w3o//dtd w3 html strict 3.0//en//', '-/w3c/dtd html 4.0 transitional/en', 'html'],
      LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ['-//W3C//DTD XHTML 1.0 Frameset//', '-//W3C//DTD XHTML 1.0 Transitional//'],
      LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat(['-//W3C//DTD HTML 4.01 Frameset//', '-//W3C//DTD HTML 4.01 Transitional//']); //Utils

  function enquoteDoctypeId(id) {
    var quote = id.indexOf('"') !== -1 ? '\'' : '"';
    return quote + id + quote;
  }

  function hasPrefix(publicId, prefixes) {
    for (var i = 0; i < prefixes.length; i++) {
      if (publicId.indexOf(prefixes[i]) === 0) return true;
    }

    return false;
  } //API


  var getDocumentMode = function (name, publicId, systemId) {
    if (name !== VALID_DOCTYPE_NAME) return DOCUMENT_MODE.QUIRKS;
    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) return DOCUMENT_MODE.QUIRKS;

    if (publicId !== null) {
      publicId = publicId.toLowerCase();
      if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) return DOCUMENT_MODE.QUIRKS;
      var prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
      if (hasPrefix(publicId, prefixes)) return DOCUMENT_MODE.QUIRKS;
      prefixes = systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
      if (hasPrefix(publicId, prefixes)) return DOCUMENT_MODE.LIMITED_QUIRKS;
    }

    return DOCUMENT_MODE.NO_QUIRKS;
  };

  var serializeContent = function (name, publicId, systemId) {
    var str = '!DOCTYPE ';
    if (name) str += name;
    if (publicId !== null) str += ' PUBLIC ' + enquoteDoctypeId(publicId);else if (systemId !== null) str += ' SYSTEM';
    if (systemId !== null) str += ' ' + enquoteDoctypeId(systemId);
    return str;
  };

  var doctype = {
  	getDocumentMode: getDocumentMode,
  	serializeContent: serializeContent
  };

  var foreign_content = createCommonjsModule(function (module, exports) {

   //Aliases


  var $ = html.TAG_NAMES,
      NS = html.NAMESPACES,
      ATTRS = html.ATTRS; //MIME types

  var MIME_TYPES = {
    TEXT_HTML: 'text/html',
    APPLICATION_XML: 'application/xhtml+xml'
  }; //Attributes

  var DEFINITION_URL_ATTR = 'definitionurl',
      ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL',
      SVG_ATTRS_ADJUSTMENT_MAP = {
    'attributename': 'attributeName',
    'attributetype': 'attributeType',
    'basefrequency': 'baseFrequency',
    'baseprofile': 'baseProfile',
    'calcmode': 'calcMode',
    'clippathunits': 'clipPathUnits',
    'diffuseconstant': 'diffuseConstant',
    'edgemode': 'edgeMode',
    'filterunits': 'filterUnits',
    'glyphref': 'glyphRef',
    'gradienttransform': 'gradientTransform',
    'gradientunits': 'gradientUnits',
    'kernelmatrix': 'kernelMatrix',
    'kernelunitlength': 'kernelUnitLength',
    'keypoints': 'keyPoints',
    'keysplines': 'keySplines',
    'keytimes': 'keyTimes',
    'lengthadjust': 'lengthAdjust',
    'limitingconeangle': 'limitingConeAngle',
    'markerheight': 'markerHeight',
    'markerunits': 'markerUnits',
    'markerwidth': 'markerWidth',
    'maskcontentunits': 'maskContentUnits',
    'maskunits': 'maskUnits',
    'numoctaves': 'numOctaves',
    'pathlength': 'pathLength',
    'patterncontentunits': 'patternContentUnits',
    'patterntransform': 'patternTransform',
    'patternunits': 'patternUnits',
    'pointsatx': 'pointsAtX',
    'pointsaty': 'pointsAtY',
    'pointsatz': 'pointsAtZ',
    'preservealpha': 'preserveAlpha',
    'preserveaspectratio': 'preserveAspectRatio',
    'primitiveunits': 'primitiveUnits',
    'refx': 'refX',
    'refy': 'refY',
    'repeatcount': 'repeatCount',
    'repeatdur': 'repeatDur',
    'requiredextensions': 'requiredExtensions',
    'requiredfeatures': 'requiredFeatures',
    'specularconstant': 'specularConstant',
    'specularexponent': 'specularExponent',
    'spreadmethod': 'spreadMethod',
    'startoffset': 'startOffset',
    'stddeviation': 'stdDeviation',
    'stitchtiles': 'stitchTiles',
    'surfacescale': 'surfaceScale',
    'systemlanguage': 'systemLanguage',
    'tablevalues': 'tableValues',
    'targetx': 'targetX',
    'targety': 'targetY',
    'textlength': 'textLength',
    'viewbox': 'viewBox',
    'viewtarget': 'viewTarget',
    'xchannelselector': 'xChannelSelector',
    'ychannelselector': 'yChannelSelector',
    'zoomandpan': 'zoomAndPan'
  },
      XML_ATTRS_ADJUSTMENT_MAP = {
    'xlink:actuate': {
      prefix: 'xlink',
      name: 'actuate',
      namespace: NS.XLINK
    },
    'xlink:arcrole': {
      prefix: 'xlink',
      name: 'arcrole',
      namespace: NS.XLINK
    },
    'xlink:href': {
      prefix: 'xlink',
      name: 'href',
      namespace: NS.XLINK
    },
    'xlink:role': {
      prefix: 'xlink',
      name: 'role',
      namespace: NS.XLINK
    },
    'xlink:show': {
      prefix: 'xlink',
      name: 'show',
      namespace: NS.XLINK
    },
    'xlink:title': {
      prefix: 'xlink',
      name: 'title',
      namespace: NS.XLINK
    },
    'xlink:type': {
      prefix: 'xlink',
      name: 'type',
      namespace: NS.XLINK
    },
    'xml:base': {
      prefix: 'xml',
      name: 'base',
      namespace: NS.XML
    },
    'xml:lang': {
      prefix: 'xml',
      name: 'lang',
      namespace: NS.XML
    },
    'xml:space': {
      prefix: 'xml',
      name: 'space',
      namespace: NS.XML
    },
    'xmlns': {
      prefix: '',
      name: 'xmlns',
      namespace: NS.XMLNS
    },
    'xmlns:xlink': {
      prefix: 'xmlns',
      name: 'xlink',
      namespace: NS.XMLNS
    }
  }; //SVG tag names adjustment map

  var SVG_TAG_NAMES_ADJUSTMENT_MAP = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = {
    'altglyph': 'altGlyph',
    'altglyphdef': 'altGlyphDef',
    'altglyphitem': 'altGlyphItem',
    'animatecolor': 'animateColor',
    'animatemotion': 'animateMotion',
    'animatetransform': 'animateTransform',
    'clippath': 'clipPath',
    'feblend': 'feBlend',
    'fecolormatrix': 'feColorMatrix',
    'fecomponenttransfer': 'feComponentTransfer',
    'fecomposite': 'feComposite',
    'feconvolvematrix': 'feConvolveMatrix',
    'fediffuselighting': 'feDiffuseLighting',
    'fedisplacementmap': 'feDisplacementMap',
    'fedistantlight': 'feDistantLight',
    'feflood': 'feFlood',
    'fefunca': 'feFuncA',
    'fefuncb': 'feFuncB',
    'fefuncg': 'feFuncG',
    'fefuncr': 'feFuncR',
    'fegaussianblur': 'feGaussianBlur',
    'feimage': 'feImage',
    'femerge': 'feMerge',
    'femergenode': 'feMergeNode',
    'femorphology': 'feMorphology',
    'feoffset': 'feOffset',
    'fepointlight': 'fePointLight',
    'fespecularlighting': 'feSpecularLighting',
    'fespotlight': 'feSpotLight',
    'fetile': 'feTile',
    'feturbulence': 'feTurbulence',
    'foreignobject': 'foreignObject',
    'glyphref': 'glyphRef',
    'lineargradient': 'linearGradient',
    'radialgradient': 'radialGradient',
    'textpath': 'textPath'
  }; //Tags that causes exit from foreign content

  var EXITS_FOREIGN_CONTENT = Object.create(null);
  EXITS_FOREIGN_CONTENT[$.B] = true;
  EXITS_FOREIGN_CONTENT[$.BIG] = true;
  EXITS_FOREIGN_CONTENT[$.BLOCKQUOTE] = true;
  EXITS_FOREIGN_CONTENT[$.BODY] = true;
  EXITS_FOREIGN_CONTENT[$.BR] = true;
  EXITS_FOREIGN_CONTENT[$.CENTER] = true;
  EXITS_FOREIGN_CONTENT[$.CODE] = true;
  EXITS_FOREIGN_CONTENT[$.DD] = true;
  EXITS_FOREIGN_CONTENT[$.DIV] = true;
  EXITS_FOREIGN_CONTENT[$.DL] = true;
  EXITS_FOREIGN_CONTENT[$.DT] = true;
  EXITS_FOREIGN_CONTENT[$.EM] = true;
  EXITS_FOREIGN_CONTENT[$.EMBED] = true;
  EXITS_FOREIGN_CONTENT[$.H1] = true;
  EXITS_FOREIGN_CONTENT[$.H2] = true;
  EXITS_FOREIGN_CONTENT[$.H3] = true;
  EXITS_FOREIGN_CONTENT[$.H4] = true;
  EXITS_FOREIGN_CONTENT[$.H5] = true;
  EXITS_FOREIGN_CONTENT[$.H6] = true;
  EXITS_FOREIGN_CONTENT[$.HEAD] = true;
  EXITS_FOREIGN_CONTENT[$.HR] = true;
  EXITS_FOREIGN_CONTENT[$.I] = true;
  EXITS_FOREIGN_CONTENT[$.IMG] = true;
  EXITS_FOREIGN_CONTENT[$.LI] = true;
  EXITS_FOREIGN_CONTENT[$.LISTING] = true;
  EXITS_FOREIGN_CONTENT[$.MENU] = true;
  EXITS_FOREIGN_CONTENT[$.META] = true;
  EXITS_FOREIGN_CONTENT[$.NOBR] = true;
  EXITS_FOREIGN_CONTENT[$.OL] = true;
  EXITS_FOREIGN_CONTENT[$.P] = true;
  EXITS_FOREIGN_CONTENT[$.PRE] = true;
  EXITS_FOREIGN_CONTENT[$.RUBY] = true;
  EXITS_FOREIGN_CONTENT[$.S] = true;
  EXITS_FOREIGN_CONTENT[$.SMALL] = true;
  EXITS_FOREIGN_CONTENT[$.SPAN] = true;
  EXITS_FOREIGN_CONTENT[$.STRONG] = true;
  EXITS_FOREIGN_CONTENT[$.STRIKE] = true;
  EXITS_FOREIGN_CONTENT[$.SUB] = true;
  EXITS_FOREIGN_CONTENT[$.SUP] = true;
  EXITS_FOREIGN_CONTENT[$.TABLE] = true;
  EXITS_FOREIGN_CONTENT[$.TT] = true;
  EXITS_FOREIGN_CONTENT[$.U] = true;
  EXITS_FOREIGN_CONTENT[$.UL] = true;
  EXITS_FOREIGN_CONTENT[$.VAR] = true; //Check exit from foreign content

  exports.causesExit = function (startTagToken) {
    var tn = startTagToken.tagName;
    var isFontWithAttrs = tn === $.FONT && (tokenizer.getTokenAttr(startTagToken, ATTRS.COLOR) !== null || tokenizer.getTokenAttr(startTagToken, ATTRS.SIZE) !== null || tokenizer.getTokenAttr(startTagToken, ATTRS.FACE) !== null);
    return isFontWithAttrs ? true : EXITS_FOREIGN_CONTENT[tn];
  }; //Token adjustments


  exports.adjustTokenMathMLAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
      if (token.attrs[i].name === DEFINITION_URL_ATTR) {
        token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
        break;
      }
    }
  };

  exports.adjustTokenSVGAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
      var adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];
      if (adjustedAttrName) token.attrs[i].name = adjustedAttrName;
    }
  };

  exports.adjustTokenXMLAttrs = function (token) {
    for (var i = 0; i < token.attrs.length; i++) {
      var adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP[token.attrs[i].name];

      if (adjustedAttrEntry) {
        token.attrs[i].prefix = adjustedAttrEntry.prefix;
        token.attrs[i].name = adjustedAttrEntry.name;
        token.attrs[i].namespace = adjustedAttrEntry.namespace;
      }
    }
  };

  exports.adjustTokenSVGTagName = function (token) {
    var adjustedTagName = SVG_TAG_NAMES_ADJUSTMENT_MAP[token.tagName];
    if (adjustedTagName) token.tagName = adjustedTagName;
  }; //Integration points


  function isMathMLTextIntegrationPoint(tn, ns) {
    return ns === NS.MATHML && (tn === $.MI || tn === $.MO || tn === $.MN || tn === $.MS || tn === $.MTEXT);
  }

  function isHtmlIntegrationPoint(tn, ns, attrs) {
    if (ns === NS.MATHML && tn === $.ANNOTATION_XML) {
      for (var i = 0; i < attrs.length; i++) {
        if (attrs[i].name === ATTRS.ENCODING) {
          var value = attrs[i].value.toLowerCase();
          return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
        }
      }
    }

    return ns === NS.SVG && (tn === $.FOREIGN_OBJECT || tn === $.DESC || tn === $.TITLE);
  }

  exports.isIntegrationPoint = function (tn, ns, attrs, foreignNS) {
    if ((!foreignNS || foreignNS === NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) return true;
    if ((!foreignNS || foreignNS === NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)) return true;
    return false;
  };
  });

  var parser = createCommonjsModule(function (module) {

   //Aliases


  var $ = html.TAG_NAMES,
      NS = html.NAMESPACES,
      ATTRS = html.ATTRS;
  var DEFAULT_OPTIONS = {
    locationInfo: false,
    treeAdapter: _default
  }; //Misc constants

  var HIDDEN_INPUT_TYPE = 'hidden'; //Adoption agency loops iteration count

  var AA_OUTER_LOOP_ITER = 8,
      AA_INNER_LOOP_ITER = 3; //Insertion modes

  var INITIAL_MODE = 'INITIAL_MODE',
      BEFORE_HTML_MODE = 'BEFORE_HTML_MODE',
      BEFORE_HEAD_MODE = 'BEFORE_HEAD_MODE',
      IN_HEAD_MODE = 'IN_HEAD_MODE',
      AFTER_HEAD_MODE = 'AFTER_HEAD_MODE',
      IN_BODY_MODE = 'IN_BODY_MODE',
      TEXT_MODE = 'TEXT_MODE',
      IN_TABLE_MODE = 'IN_TABLE_MODE',
      IN_TABLE_TEXT_MODE = 'IN_TABLE_TEXT_MODE',
      IN_CAPTION_MODE = 'IN_CAPTION_MODE',
      IN_COLUMN_GROUP_MODE = 'IN_COLUMN_GROUP_MODE',
      IN_TABLE_BODY_MODE = 'IN_TABLE_BODY_MODE',
      IN_ROW_MODE = 'IN_ROW_MODE',
      IN_CELL_MODE = 'IN_CELL_MODE',
      IN_SELECT_MODE = 'IN_SELECT_MODE',
      IN_SELECT_IN_TABLE_MODE = 'IN_SELECT_IN_TABLE_MODE',
      IN_TEMPLATE_MODE = 'IN_TEMPLATE_MODE',
      AFTER_BODY_MODE = 'AFTER_BODY_MODE',
      IN_FRAMESET_MODE = 'IN_FRAMESET_MODE',
      AFTER_FRAMESET_MODE = 'AFTER_FRAMESET_MODE',
      AFTER_AFTER_BODY_MODE = 'AFTER_AFTER_BODY_MODE',
      AFTER_AFTER_FRAMESET_MODE = 'AFTER_AFTER_FRAMESET_MODE'; //Insertion mode reset map

  var INSERTION_MODE_RESET_MAP = Object.create(null);
  INSERTION_MODE_RESET_MAP[$.TR] = IN_ROW_MODE;
  INSERTION_MODE_RESET_MAP[$.TBODY] = INSERTION_MODE_RESET_MAP[$.THEAD] = INSERTION_MODE_RESET_MAP[$.TFOOT] = IN_TABLE_BODY_MODE;
  INSERTION_MODE_RESET_MAP[$.CAPTION] = IN_CAPTION_MODE;
  INSERTION_MODE_RESET_MAP[$.COLGROUP] = IN_COLUMN_GROUP_MODE;
  INSERTION_MODE_RESET_MAP[$.TABLE] = IN_TABLE_MODE;
  INSERTION_MODE_RESET_MAP[$.BODY] = IN_BODY_MODE;
  INSERTION_MODE_RESET_MAP[$.FRAMESET] = IN_FRAMESET_MODE; //Template insertion mode switch map

  var TEMPLATE_INSERTION_MODE_SWITCH_MAP = Object.create(null);
  TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.CAPTION] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COLGROUP] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TBODY] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TFOOT] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.THEAD] = IN_TABLE_MODE;
  TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.COL] = IN_COLUMN_GROUP_MODE;
  TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TR] = IN_TABLE_BODY_MODE;
  TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TD] = TEMPLATE_INSERTION_MODE_SWITCH_MAP[$.TH] = IN_ROW_MODE; //Token handlers map for insertion modes

  var _ = Object.create(null);

  _[INITIAL_MODE] = Object.create(null);
  _[INITIAL_MODE][tokenizer.CHARACTER_TOKEN] = _[INITIAL_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenInInitialMode;
  _[INITIAL_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
  _[INITIAL_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[INITIAL_MODE][tokenizer.DOCTYPE_TOKEN] = doctypeInInitialMode;
  _[INITIAL_MODE][tokenizer.START_TAG_TOKEN] = _[INITIAL_MODE][tokenizer.END_TAG_TOKEN] = _[INITIAL_MODE][tokenizer.EOF_TOKEN] = tokenInInitialMode;
  _[BEFORE_HTML_MODE] = Object.create(null);
  _[BEFORE_HTML_MODE][tokenizer.CHARACTER_TOKEN] = _[BEFORE_HTML_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHtml;
  _[BEFORE_HTML_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
  _[BEFORE_HTML_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[BEFORE_HTML_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[BEFORE_HTML_MODE][tokenizer.START_TAG_TOKEN] = startTagBeforeHtml;
  _[BEFORE_HTML_MODE][tokenizer.END_TAG_TOKEN] = endTagBeforeHtml;
  _[BEFORE_HTML_MODE][tokenizer.EOF_TOKEN] = tokenBeforeHtml;
  _[BEFORE_HEAD_MODE] = Object.create(null);
  _[BEFORE_HEAD_MODE][tokenizer.CHARACTER_TOKEN] = _[BEFORE_HEAD_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenBeforeHead;
  _[BEFORE_HEAD_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = ignoreToken;
  _[BEFORE_HEAD_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[BEFORE_HEAD_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[BEFORE_HEAD_MODE][tokenizer.START_TAG_TOKEN] = startTagBeforeHead;
  _[BEFORE_HEAD_MODE][tokenizer.END_TAG_TOKEN] = endTagBeforeHead;
  _[BEFORE_HEAD_MODE][tokenizer.EOF_TOKEN] = tokenBeforeHead;
  _[IN_HEAD_MODE] = Object.create(null);
  _[IN_HEAD_MODE][tokenizer.CHARACTER_TOKEN] = _[IN_HEAD_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenInHead;
  _[IN_HEAD_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[IN_HEAD_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_HEAD_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_HEAD_MODE][tokenizer.START_TAG_TOKEN] = startTagInHead;
  _[IN_HEAD_MODE][tokenizer.END_TAG_TOKEN] = endTagInHead;
  _[IN_HEAD_MODE][tokenizer.EOF_TOKEN] = tokenInHead;
  _[AFTER_HEAD_MODE] = Object.create(null);
  _[AFTER_HEAD_MODE][tokenizer.CHARACTER_TOKEN] = _[AFTER_HEAD_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterHead;
  _[AFTER_HEAD_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[AFTER_HEAD_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[AFTER_HEAD_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[AFTER_HEAD_MODE][tokenizer.START_TAG_TOKEN] = startTagAfterHead;
  _[AFTER_HEAD_MODE][tokenizer.END_TAG_TOKEN] = endTagAfterHead;
  _[AFTER_HEAD_MODE][tokenizer.EOF_TOKEN] = tokenAfterHead;
  _[IN_BODY_MODE] = Object.create(null);
  _[IN_BODY_MODE][tokenizer.CHARACTER_TOKEN] = characterInBody;
  _[IN_BODY_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_BODY_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[IN_BODY_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_BODY_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_BODY_MODE][tokenizer.START_TAG_TOKEN] = startTagInBody;
  _[IN_BODY_MODE][tokenizer.END_TAG_TOKEN] = endTagInBody;
  _[IN_BODY_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[TEXT_MODE] = Object.create(null);
  _[TEXT_MODE][tokenizer.CHARACTER_TOKEN] = _[TEXT_MODE][tokenizer.NULL_CHARACTER_TOKEN] = _[TEXT_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[TEXT_MODE][tokenizer.COMMENT_TOKEN] = _[TEXT_MODE][tokenizer.DOCTYPE_TOKEN] = _[TEXT_MODE][tokenizer.START_TAG_TOKEN] = ignoreToken;
  _[TEXT_MODE][tokenizer.END_TAG_TOKEN] = endTagInText;
  _[TEXT_MODE][tokenizer.EOF_TOKEN] = eofInText;
  _[IN_TABLE_MODE] = Object.create(null);
  _[IN_TABLE_MODE][tokenizer.CHARACTER_TOKEN] = _[IN_TABLE_MODE][tokenizer.NULL_CHARACTER_TOKEN] = _[IN_TABLE_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
  _[IN_TABLE_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_TABLE_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_TABLE_MODE][tokenizer.START_TAG_TOKEN] = startTagInTable;
  _[IN_TABLE_MODE][tokenizer.END_TAG_TOKEN] = endTagInTable;
  _[IN_TABLE_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_TABLE_TEXT_MODE] = Object.create(null);
  _[IN_TABLE_TEXT_MODE][tokenizer.CHARACTER_TOKEN] = characterInTableText;
  _[IN_TABLE_TEXT_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_TABLE_TEXT_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInTableText;
  _[IN_TABLE_TEXT_MODE][tokenizer.COMMENT_TOKEN] = _[IN_TABLE_TEXT_MODE][tokenizer.DOCTYPE_TOKEN] = _[IN_TABLE_TEXT_MODE][tokenizer.START_TAG_TOKEN] = _[IN_TABLE_TEXT_MODE][tokenizer.END_TAG_TOKEN] = _[IN_TABLE_TEXT_MODE][tokenizer.EOF_TOKEN] = tokenInTableText;
  _[IN_CAPTION_MODE] = Object.create(null);
  _[IN_CAPTION_MODE][tokenizer.CHARACTER_TOKEN] = characterInBody;
  _[IN_CAPTION_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_CAPTION_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[IN_CAPTION_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_CAPTION_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_CAPTION_MODE][tokenizer.START_TAG_TOKEN] = startTagInCaption;
  _[IN_CAPTION_MODE][tokenizer.END_TAG_TOKEN] = endTagInCaption;
  _[IN_CAPTION_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_COLUMN_GROUP_MODE] = Object.create(null);
  _[IN_COLUMN_GROUP_MODE][tokenizer.CHARACTER_TOKEN] = _[IN_COLUMN_GROUP_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenInColumnGroup;
  _[IN_COLUMN_GROUP_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[IN_COLUMN_GROUP_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_COLUMN_GROUP_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_COLUMN_GROUP_MODE][tokenizer.START_TAG_TOKEN] = startTagInColumnGroup;
  _[IN_COLUMN_GROUP_MODE][tokenizer.END_TAG_TOKEN] = endTagInColumnGroup;
  _[IN_COLUMN_GROUP_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_TABLE_BODY_MODE] = Object.create(null);
  _[IN_TABLE_BODY_MODE][tokenizer.CHARACTER_TOKEN] = _[IN_TABLE_BODY_MODE][tokenizer.NULL_CHARACTER_TOKEN] = _[IN_TABLE_BODY_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
  _[IN_TABLE_BODY_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_TABLE_BODY_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_TABLE_BODY_MODE][tokenizer.START_TAG_TOKEN] = startTagInTableBody;
  _[IN_TABLE_BODY_MODE][tokenizer.END_TAG_TOKEN] = endTagInTableBody;
  _[IN_TABLE_BODY_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_ROW_MODE] = Object.create(null);
  _[IN_ROW_MODE][tokenizer.CHARACTER_TOKEN] = _[IN_ROW_MODE][tokenizer.NULL_CHARACTER_TOKEN] = _[IN_ROW_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = characterInTable;
  _[IN_ROW_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_ROW_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_ROW_MODE][tokenizer.START_TAG_TOKEN] = startTagInRow;
  _[IN_ROW_MODE][tokenizer.END_TAG_TOKEN] = endTagInRow;
  _[IN_ROW_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_CELL_MODE] = Object.create(null);
  _[IN_CELL_MODE][tokenizer.CHARACTER_TOKEN] = characterInBody;
  _[IN_CELL_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_CELL_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[IN_CELL_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_CELL_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_CELL_MODE][tokenizer.START_TAG_TOKEN] = startTagInCell;
  _[IN_CELL_MODE][tokenizer.END_TAG_TOKEN] = endTagInCell;
  _[IN_CELL_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_SELECT_MODE] = Object.create(null);
  _[IN_SELECT_MODE][tokenizer.CHARACTER_TOKEN] = insertCharacters;
  _[IN_SELECT_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_SELECT_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[IN_SELECT_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_SELECT_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_SELECT_MODE][tokenizer.START_TAG_TOKEN] = startTagInSelect;
  _[IN_SELECT_MODE][tokenizer.END_TAG_TOKEN] = endTagInSelect;
  _[IN_SELECT_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_SELECT_IN_TABLE_MODE] = Object.create(null);
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.CHARACTER_TOKEN] = insertCharacters;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.START_TAG_TOKEN] = startTagInSelectInTable;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.END_TAG_TOKEN] = endTagInSelectInTable;
  _[IN_SELECT_IN_TABLE_MODE][tokenizer.EOF_TOKEN] = eofInBody;
  _[IN_TEMPLATE_MODE] = Object.create(null);
  _[IN_TEMPLATE_MODE][tokenizer.CHARACTER_TOKEN] = characterInBody;
  _[IN_TEMPLATE_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_TEMPLATE_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[IN_TEMPLATE_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_TEMPLATE_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_TEMPLATE_MODE][tokenizer.START_TAG_TOKEN] = startTagInTemplate;
  _[IN_TEMPLATE_MODE][tokenizer.END_TAG_TOKEN] = endTagInTemplate;
  _[IN_TEMPLATE_MODE][tokenizer.EOF_TOKEN] = eofInTemplate;
  _[AFTER_BODY_MODE] = Object.create(null);
  _[AFTER_BODY_MODE][tokenizer.CHARACTER_TOKEN] = _[AFTER_BODY_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterBody;
  _[AFTER_BODY_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[AFTER_BODY_MODE][tokenizer.COMMENT_TOKEN] = appendCommentToRootHtmlElement;
  _[AFTER_BODY_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[AFTER_BODY_MODE][tokenizer.START_TAG_TOKEN] = startTagAfterBody;
  _[AFTER_BODY_MODE][tokenizer.END_TAG_TOKEN] = endTagAfterBody;
  _[AFTER_BODY_MODE][tokenizer.EOF_TOKEN] = stopParsing;
  _[IN_FRAMESET_MODE] = Object.create(null);
  _[IN_FRAMESET_MODE][tokenizer.CHARACTER_TOKEN] = _[IN_FRAMESET_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[IN_FRAMESET_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[IN_FRAMESET_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[IN_FRAMESET_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[IN_FRAMESET_MODE][tokenizer.START_TAG_TOKEN] = startTagInFrameset;
  _[IN_FRAMESET_MODE][tokenizer.END_TAG_TOKEN] = endTagInFrameset;
  _[IN_FRAMESET_MODE][tokenizer.EOF_TOKEN] = stopParsing;
  _[AFTER_FRAMESET_MODE] = Object.create(null);
  _[AFTER_FRAMESET_MODE][tokenizer.CHARACTER_TOKEN] = _[AFTER_FRAMESET_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[AFTER_FRAMESET_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = insertCharacters;
  _[AFTER_FRAMESET_MODE][tokenizer.COMMENT_TOKEN] = appendComment;
  _[AFTER_FRAMESET_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[AFTER_FRAMESET_MODE][tokenizer.START_TAG_TOKEN] = startTagAfterFrameset;
  _[AFTER_FRAMESET_MODE][tokenizer.END_TAG_TOKEN] = endTagAfterFrameset;
  _[AFTER_FRAMESET_MODE][tokenizer.EOF_TOKEN] = stopParsing;
  _[AFTER_AFTER_BODY_MODE] = Object.create(null);
  _[AFTER_AFTER_BODY_MODE][tokenizer.CHARACTER_TOKEN] = tokenAfterAfterBody;
  _[AFTER_AFTER_BODY_MODE][tokenizer.NULL_CHARACTER_TOKEN] = tokenAfterAfterBody;
  _[AFTER_AFTER_BODY_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[AFTER_AFTER_BODY_MODE][tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
  _[AFTER_AFTER_BODY_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[AFTER_AFTER_BODY_MODE][tokenizer.START_TAG_TOKEN] = startTagAfterAfterBody;
  _[AFTER_AFTER_BODY_MODE][tokenizer.END_TAG_TOKEN] = tokenAfterAfterBody;
  _[AFTER_AFTER_BODY_MODE][tokenizer.EOF_TOKEN] = stopParsing;
  _[AFTER_AFTER_FRAMESET_MODE] = Object.create(null);
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.CHARACTER_TOKEN] = _[AFTER_AFTER_FRAMESET_MODE][tokenizer.NULL_CHARACTER_TOKEN] = ignoreToken;
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.WHITESPACE_CHARACTER_TOKEN] = whitespaceCharacterInBody;
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.COMMENT_TOKEN] = appendCommentToDocument;
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.DOCTYPE_TOKEN] = ignoreToken;
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.START_TAG_TOKEN] = startTagAfterAfterFrameset;
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.END_TAG_TOKEN] = ignoreToken;
  _[AFTER_AFTER_FRAMESET_MODE][tokenizer.EOF_TOKEN] = stopParsing; //Parser

  var Parser = module.exports = function (options) {
    this.options = merge_options(DEFAULT_OPTIONS, options);
    this.treeAdapter = this.options.treeAdapter;
    this.pendingScript = null;
    if (this.options.locationInfo) new parser_mixin(this);
  }; // API


  Parser.prototype.parse = function (html) {
    var document = this.treeAdapter.createDocument();

    this._bootstrap(document, null);

    this.tokenizer.write(html, true);

    this._runParsingLoop(null);

    return document;
  };

  Parser.prototype.parseFragment = function (html, fragmentContext) {
    //NOTE: use <template> element as a fragment context if context element was not provided,
    //so we will parse in "forgiving" manner
    if (!fragmentContext) fragmentContext = this.treeAdapter.createElement($.TEMPLATE, NS.HTML, []); //NOTE: create fake element which will be used as 'document' for fragment parsing.
    //This is important for jsdom there 'document' can't be recreated, therefore
    //fragment parsing causes messing of the main `document`.

    var documentMock = this.treeAdapter.createElement('documentmock', NS.HTML, []);

    this._bootstrap(documentMock, fragmentContext);

    if (this.treeAdapter.getTagName(fragmentContext) === $.TEMPLATE) this._pushTmplInsertionMode(IN_TEMPLATE_MODE);

    this._initTokenizerForFragmentParsing();

    this._insertFakeRootElement();

    this._resetInsertionMode();

    this._findFormInFragmentContext();

    this.tokenizer.write(html, true);

    this._runParsingLoop(null);

    var rootElement = this.treeAdapter.getFirstChild(documentMock),
        fragment = this.treeAdapter.createDocumentFragment();

    this._adoptNodes(rootElement, fragment);

    return fragment;
  }; //Bootstrap parser


  Parser.prototype._bootstrap = function (document, fragmentContext) {
    this.tokenizer = new tokenizer(this.options);
    this.stopped = false;
    this.insertionMode = INITIAL_MODE;
    this.originalInsertionMode = '';
    this.document = document;
    this.fragmentContext = fragmentContext;
    this.headElement = null;
    this.formElement = null;
    this.openElements = new open_element_stack(this.document, this.treeAdapter);
    this.activeFormattingElements = new formatting_element_list(this.treeAdapter);
    this.tmplInsertionModeStack = [];
    this.tmplInsertionModeStackTop = -1;
    this.currentTmplInsertionMode = null;
    this.pendingCharacterTokens = [];
    this.hasNonWhitespacePendingCharacterToken = false;
    this.framesetOk = true;
    this.skipNextNewLine = false;
    this.fosterParentingEnabled = false;
  }; //Parsing loop


  Parser.prototype._runParsingLoop = function (scriptHandler) {
    while (!this.stopped) {
      this._setupTokenizerCDATAMode();

      var token = this.tokenizer.getNextToken();
      if (token.type === tokenizer.HIBERNATION_TOKEN) break;

      if (this.skipNextNewLine) {
        this.skipNextNewLine = false;

        if (token.type === tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
          if (token.chars.length === 1) continue;
          token.chars = token.chars.substr(1);
        }
      }

      this._processInputToken(token);

      if (scriptHandler && this.pendingScript) break;
    }
  };

  Parser.prototype.runParsingLoopForCurrentChunk = function (writeCallback, scriptHandler) {
    this._runParsingLoop(scriptHandler);

    if (scriptHandler && this.pendingScript) {
      var script = this.pendingScript;
      this.pendingScript = null;
      scriptHandler(script);
      return;
    }

    if (writeCallback) writeCallback();
  }; //Text parsing


  Parser.prototype._setupTokenizerCDATAMode = function () {
    var current = this._getAdjustedCurrentElement();

    this.tokenizer.allowCDATA = current && current !== this.document && this.treeAdapter.getNamespaceURI(current) !== NS.HTML && !this._isIntegrationPoint(current);
  };

  Parser.prototype._switchToTextParsing = function (currentToken, nextTokenizerState) {
    this._insertElement(currentToken, NS.HTML);

    this.tokenizer.state = nextTokenizerState;
    this.originalInsertionMode = this.insertionMode;
    this.insertionMode = TEXT_MODE;
  };

  Parser.prototype.switchToPlaintextParsing = function () {
    this.insertionMode = TEXT_MODE;
    this.originalInsertionMode = IN_BODY_MODE;
    this.tokenizer.state = tokenizer.MODE.PLAINTEXT;
  }; //Fragment parsing


  Parser.prototype._getAdjustedCurrentElement = function () {
    return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
  };

  Parser.prototype._findFormInFragmentContext = function () {
    var node = this.fragmentContext;

    do {
      if (this.treeAdapter.getTagName(node) === $.FORM) {
        this.formElement = node;
        break;
      }

      node = this.treeAdapter.getParentNode(node);
    } while (node);
  };

  Parser.prototype._initTokenizerForFragmentParsing = function () {
    if (this.treeAdapter.getNamespaceURI(this.fragmentContext) === NS.HTML) {
      var tn = this.treeAdapter.getTagName(this.fragmentContext);
      if (tn === $.TITLE || tn === $.TEXTAREA) this.tokenizer.state = tokenizer.MODE.RCDATA;else if (tn === $.STYLE || tn === $.XMP || tn === $.IFRAME || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) this.tokenizer.state = tokenizer.MODE.RAWTEXT;else if (tn === $.SCRIPT) this.tokenizer.state = tokenizer.MODE.SCRIPT_DATA;else if (tn === $.PLAINTEXT) this.tokenizer.state = tokenizer.MODE.PLAINTEXT;
    }
  }; //Tree mutation


  Parser.prototype._setDocumentType = function (token) {
    this.treeAdapter.setDocumentType(this.document, token.name, token.publicId, token.systemId);
  };

  Parser.prototype._attachElementToTree = function (element) {
    if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(element);else {
      var parent = this.openElements.currentTmplContent || this.openElements.current;
      this.treeAdapter.appendChild(parent, element);
    }
  };

  Parser.prototype._appendElement = function (token, namespaceURI) {
    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

    this._attachElementToTree(element);
  };

  Parser.prototype._insertElement = function (token, namespaceURI) {
    var element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);

    this._attachElementToTree(element);

    this.openElements.push(element);
  };

  Parser.prototype._insertFakeElement = function (tagName) {
    var element = this.treeAdapter.createElement(tagName, NS.HTML, []);

    this._attachElementToTree(element);

    this.openElements.push(element);
  };

  Parser.prototype._insertTemplate = function (token) {
    var tmpl = this.treeAdapter.createElement(token.tagName, NS.HTML, token.attrs),
        content = this.treeAdapter.createDocumentFragment();
    this.treeAdapter.setTemplateContent(tmpl, content);

    this._attachElementToTree(tmpl);

    this.openElements.push(tmpl);
  };

  Parser.prototype._insertFakeRootElement = function () {
    var element = this.treeAdapter.createElement($.HTML, NS.HTML, []);
    this.treeAdapter.appendChild(this.openElements.current, element);
    this.openElements.push(element);
  };

  Parser.prototype._appendCommentNode = function (token, parent) {
    var commentNode = this.treeAdapter.createCommentNode(token.data);
    this.treeAdapter.appendChild(parent, commentNode);
  };

  Parser.prototype._insertCharacters = function (token) {
    if (this._shouldFosterParentOnInsertion()) this._fosterParentText(token.chars);else {
      var parent = this.openElements.currentTmplContent || this.openElements.current;
      this.treeAdapter.insertText(parent, token.chars);
    }
  };

  Parser.prototype._adoptNodes = function (donor, recipient) {
    while (true) {
      var child = this.treeAdapter.getFirstChild(donor);
      if (!child) break;
      this.treeAdapter.detachNode(child);
      this.treeAdapter.appendChild(recipient, child);
    }
  }; //Token processing


  Parser.prototype._shouldProcessTokenInForeignContent = function (token) {
    var current = this._getAdjustedCurrentElement();

    if (!current || current === this.document) return false;
    var ns = this.treeAdapter.getNamespaceURI(current);
    if (ns === NS.HTML) return false;
    if (this.treeAdapter.getTagName(current) === $.ANNOTATION_XML && ns === NS.MATHML && token.type === tokenizer.START_TAG_TOKEN && token.tagName === $.SVG) return false;
    var isCharacterToken = token.type === tokenizer.CHARACTER_TOKEN || token.type === tokenizer.NULL_CHARACTER_TOKEN || token.type === tokenizer.WHITESPACE_CHARACTER_TOKEN,
        isMathMLTextStartTag = token.type === tokenizer.START_TAG_TOKEN && token.tagName !== $.MGLYPH && token.tagName !== $.MALIGNMARK;
    if ((isMathMLTextStartTag || isCharacterToken) && this._isIntegrationPoint(current, NS.MATHML)) return false;
    if ((token.type === tokenizer.START_TAG_TOKEN || isCharacterToken) && this._isIntegrationPoint(current, NS.HTML)) return false;
    return token.type !== tokenizer.EOF_TOKEN;
  };

  Parser.prototype._processToken = function (token) {
    _[this.insertionMode][token.type](this, token);
  };

  Parser.prototype._processTokenInBodyMode = function (token) {
    _[IN_BODY_MODE][token.type](this, token);
  };

  Parser.prototype._processTokenInForeignContent = function (token) {
    if (token.type === tokenizer.CHARACTER_TOKEN) characterInForeignContent(this, token);else if (token.type === tokenizer.NULL_CHARACTER_TOKEN) nullCharacterInForeignContent(this, token);else if (token.type === tokenizer.WHITESPACE_CHARACTER_TOKEN) insertCharacters(this, token);else if (token.type === tokenizer.COMMENT_TOKEN) appendComment(this, token);else if (token.type === tokenizer.START_TAG_TOKEN) startTagInForeignContent(this, token);else if (token.type === tokenizer.END_TAG_TOKEN) endTagInForeignContent(this, token);
  };

  Parser.prototype._processInputToken = function (token) {
    if (this._shouldProcessTokenInForeignContent(token)) this._processTokenInForeignContent(token);else this._processToken(token);
  }; //Integration points


  Parser.prototype._isIntegrationPoint = function (element, foreignNS) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element),
        attrs = this.treeAdapter.getAttrList(element);
    return foreign_content.isIntegrationPoint(tn, ns, attrs, foreignNS);
  }; //Active formatting elements reconstruction


  Parser.prototype._reconstructActiveFormattingElements = function () {
    var listLength = this.activeFormattingElements.length;

    if (listLength) {
      var unopenIdx = listLength,
          entry = null;

      do {
        unopenIdx--;
        entry = this.activeFormattingElements.entries[unopenIdx];

        if (entry.type === formatting_element_list.MARKER_ENTRY || this.openElements.contains(entry.element)) {
          unopenIdx++;
          break;
        }
      } while (unopenIdx > 0);

      for (var i = unopenIdx; i < listLength; i++) {
        entry = this.activeFormattingElements.entries[i];

        this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));

        entry.element = this.openElements.current;
      }
    }
  }; //Close elements


  Parser.prototype._closeTableCell = function () {
    this.openElements.generateImpliedEndTags();
    this.openElements.popUntilTableCellPopped();
    this.activeFormattingElements.clearToLastMarker();
    this.insertionMode = IN_ROW_MODE;
  };

  Parser.prototype._closePElement = function () {
    this.openElements.generateImpliedEndTagsWithExclusion($.P);
    this.openElements.popUntilTagNamePopped($.P);
  }; //Insertion modes


  Parser.prototype._resetInsertionMode = function () {
    for (var i = this.openElements.stackTop, last = false; i >= 0; i--) {
      var element = this.openElements.items[i];

      if (i === 0) {
        last = true;
        if (this.fragmentContext) element = this.fragmentContext;
      }

      var tn = this.treeAdapter.getTagName(element),
          newInsertionMode = INSERTION_MODE_RESET_MAP[tn];

      if (newInsertionMode) {
        this.insertionMode = newInsertionMode;
        break;
      } else if (!last && (tn === $.TD || tn === $.TH)) {
        this.insertionMode = IN_CELL_MODE;
        break;
      } else if (!last && tn === $.HEAD) {
        this.insertionMode = IN_HEAD_MODE;
        break;
      } else if (tn === $.SELECT) {
        this._resetInsertionModeForSelect(i);

        break;
      } else if (tn === $.TEMPLATE) {
        this.insertionMode = this.currentTmplInsertionMode;
        break;
      } else if (tn === $.HTML) {
        this.insertionMode = this.headElement ? AFTER_HEAD_MODE : BEFORE_HEAD_MODE;
        break;
      } else if (last) {
        this.insertionMode = IN_BODY_MODE;
        break;
      }
    }
  };

  Parser.prototype._resetInsertionModeForSelect = function (selectIdx) {
    if (selectIdx > 0) {
      for (var i = selectIdx - 1; i > 0; i--) {
        var ancestor = this.openElements.items[i],
            tn = this.treeAdapter.getTagName(ancestor);
        if (tn === $.TEMPLATE) break;else if (tn === $.TABLE) {
          this.insertionMode = IN_SELECT_IN_TABLE_MODE;
          return;
        }
      }
    }

    this.insertionMode = IN_SELECT_MODE;
  };

  Parser.prototype._pushTmplInsertionMode = function (mode) {
    this.tmplInsertionModeStack.push(mode);
    this.tmplInsertionModeStackTop++;
    this.currentTmplInsertionMode = mode;
  };

  Parser.prototype._popTmplInsertionMode = function () {
    this.tmplInsertionModeStack.pop();
    this.tmplInsertionModeStackTop--;
    this.currentTmplInsertionMode = this.tmplInsertionModeStack[this.tmplInsertionModeStackTop];
  }; //Foster parenting


  Parser.prototype._isElementCausesFosterParenting = function (element) {
    var tn = this.treeAdapter.getTagName(element);
    return tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR;
  };

  Parser.prototype._shouldFosterParentOnInsertion = function () {
    return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.current);
  };

  Parser.prototype._findFosterParentingLocation = function () {
    var location = {
      parent: null,
      beforeElement: null
    };

    for (var i = this.openElements.stackTop; i >= 0; i--) {
      var openElement = this.openElements.items[i],
          tn = this.treeAdapter.getTagName(openElement),
          ns = this.treeAdapter.getNamespaceURI(openElement);

      if (tn === $.TEMPLATE && ns === NS.HTML) {
        location.parent = this.treeAdapter.getTemplateContent(openElement);
        break;
      } else if (tn === $.TABLE) {
        location.parent = this.treeAdapter.getParentNode(openElement);
        if (location.parent) location.beforeElement = openElement;else location.parent = this.openElements.items[i - 1];
        break;
      }
    }

    if (!location.parent) location.parent = this.openElements.items[0];
    return location;
  };

  Parser.prototype._fosterParentElement = function (element) {
    var location = this._findFosterParentingLocation();

    if (location.beforeElement) this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);else this.treeAdapter.appendChild(location.parent, element);
  };

  Parser.prototype._fosterParentText = function (chars) {
    var location = this._findFosterParentingLocation();

    if (location.beforeElement) this.treeAdapter.insertTextBefore(location.parent, chars, location.beforeElement);else this.treeAdapter.insertText(location.parent, chars);
  }; //Special elements


  Parser.prototype._isSpecialElement = function (element) {
    var tn = this.treeAdapter.getTagName(element),
        ns = this.treeAdapter.getNamespaceURI(element);
    return html.SPECIAL_ELEMENTS[ns][tn];
  }; //Adoption agency algorithm
  //(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
  //------------------------------------------------------------------
  //Steps 5-8 of the algorithm


  function aaObtainFormattingElementEntry(p, token) {
    var formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);

    if (formattingElementEntry) {
      if (!p.openElements.contains(formattingElementEntry.element)) {
        p.activeFormattingElements.removeEntry(formattingElementEntry);
        formattingElementEntry = null;
      } else if (!p.openElements.hasInScope(token.tagName)) formattingElementEntry = null;
    } else genericEndTagInBody(p, token);

    return formattingElementEntry;
  } //Steps 9 and 10 of the algorithm


  function aaObtainFurthestBlock(p, formattingElementEntry) {
    var furthestBlock = null;

    for (var i = p.openElements.stackTop; i >= 0; i--) {
      var element = p.openElements.items[i];
      if (element === formattingElementEntry.element) break;
      if (p._isSpecialElement(element)) furthestBlock = element;
    }

    if (!furthestBlock) {
      p.openElements.popUntilElementPopped(formattingElementEntry.element);
      p.activeFormattingElements.removeEntry(formattingElementEntry);
    }

    return furthestBlock;
  } //Step 13 of the algorithm


  function aaInnerLoop(p, furthestBlock, formattingElement) {
    var lastElement = furthestBlock,
        nextElement = p.openElements.getCommonAncestor(furthestBlock);

    for (var i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
      //NOTE: store next element for the next loop iteration (it may be deleted from the stack by step 9.5)
      nextElement = p.openElements.getCommonAncestor(element);
      var elementEntry = p.activeFormattingElements.getElementEntry(element),
          counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER,
          shouldRemoveFromOpenElements = !elementEntry || counterOverflow;

      if (shouldRemoveFromOpenElements) {
        if (counterOverflow) p.activeFormattingElements.removeEntry(elementEntry);
        p.openElements.remove(element);
      } else {
        element = aaRecreateElementFromEntry(p, elementEntry);
        if (lastElement === furthestBlock) p.activeFormattingElements.bookmark = elementEntry;
        p.treeAdapter.detachNode(lastElement);
        p.treeAdapter.appendChild(element, lastElement);
        lastElement = element;
      }
    }

    return lastElement;
  } //Step 13.7 of the algorithm


  function aaRecreateElementFromEntry(p, elementEntry) {
    var ns = p.treeAdapter.getNamespaceURI(elementEntry.element),
        newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
    p.openElements.replace(elementEntry.element, newElement);
    elementEntry.element = newElement;
    return newElement;
  } //Step 14 of the algorithm


  function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
    if (p._isElementCausesFosterParenting(commonAncestor)) p._fosterParentElement(lastElement);else {
      var tn = p.treeAdapter.getTagName(commonAncestor),
          ns = p.treeAdapter.getNamespaceURI(commonAncestor);
      if (tn === $.TEMPLATE && ns === NS.HTML) commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
      p.treeAdapter.appendChild(commonAncestor, lastElement);
    }
  } //Steps 15-19 of the algorithm


  function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
    var ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element),
        token = formattingElementEntry.token,
        newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);

    p._adoptNodes(furthestBlock, newElement);

    p.treeAdapter.appendChild(furthestBlock, newElement);
    p.activeFormattingElements.insertElementAfterBookmark(newElement, formattingElementEntry.token);
    p.activeFormattingElements.removeEntry(formattingElementEntry);
    p.openElements.remove(formattingElementEntry.element);
    p.openElements.insertAfter(furthestBlock, newElement);
  } //Algorithm entry point


  function callAdoptionAgency(p, token) {
    var formattingElementEntry;

    for (var i = 0; i < AA_OUTER_LOOP_ITER; i++) {
      formattingElementEntry = aaObtainFormattingElementEntry(p, token);
      if (!formattingElementEntry) break;
      var furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
      if (!furthestBlock) break;
      p.activeFormattingElements.bookmark = formattingElementEntry;
      var lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element),
          commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
      p.treeAdapter.detachNode(lastElement);
      aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
      aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
    }
  } //Generic token handlers
  //------------------------------------------------------------------


  function ignoreToken() {//NOTE: do nothing =)
  }

  function appendComment(p, token) {
    p._appendCommentNode(token, p.openElements.currentTmplContent || p.openElements.current);
  }

  function appendCommentToRootHtmlElement(p, token) {
    p._appendCommentNode(token, p.openElements.items[0]);
  }

  function appendCommentToDocument(p, token) {
    p._appendCommentNode(token, p.document);
  }

  function insertCharacters(p, token) {
    p._insertCharacters(token);
  }

  function stopParsing(p) {
    p.stopped = true;
  } //12.2.5.4.1 The "initial" insertion mode
  //------------------------------------------------------------------


  function doctypeInInitialMode(p, token) {
    p._setDocumentType(token);

    var mode = token.forceQuirks ? html.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token.name, token.publicId, token.systemId);
    p.treeAdapter.setDocumentMode(p.document, mode);
    p.insertionMode = BEFORE_HTML_MODE;
  }

  function tokenInInitialMode(p, token) {
    p.treeAdapter.setDocumentMode(p.document, html.DOCUMENT_MODE.QUIRKS);
    p.insertionMode = BEFORE_HTML_MODE;

    p._processToken(token);
  } //12.2.5.4.2 The "before html" insertion mode
  //------------------------------------------------------------------


  function startTagBeforeHtml(p, token) {
    if (token.tagName === $.HTML) {
      p._insertElement(token, NS.HTML);

      p.insertionMode = BEFORE_HEAD_MODE;
    } else tokenBeforeHtml(p, token);
  }

  function endTagBeforeHtml(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML || tn === $.HEAD || tn === $.BODY || tn === $.BR) tokenBeforeHtml(p, token);
  }

  function tokenBeforeHtml(p, token) {
    p._insertFakeRootElement();

    p.insertionMode = BEFORE_HEAD_MODE;

    p._processToken(token);
  } //12.2.5.4.3 The "before head" insertion mode
  //------------------------------------------------------------------


  function startTagBeforeHead(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.HEAD) {
      p._insertElement(token, NS.HTML);

      p.headElement = p.openElements.current;
      p.insertionMode = IN_HEAD_MODE;
    } else tokenBeforeHead(p, token);
  }

  function endTagBeforeHead(p, token) {
    var tn = token.tagName;
    if (tn === $.HEAD || tn === $.BODY || tn === $.HTML || tn === $.BR) tokenBeforeHead(p, token);
  }

  function tokenBeforeHead(p, token) {
    p._insertFakeElement($.HEAD);

    p.headElement = p.openElements.current;
    p.insertionMode = IN_HEAD_MODE;

    p._processToken(token);
  } //12.2.5.4.4 The "in head" insertion mode
  //------------------------------------------------------------------


  function startTagInHead(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META) p._appendElement(token, NS.HTML);else if (tn === $.TITLE) p._switchToTextParsing(token, tokenizer.MODE.RCDATA); //NOTE: here we assume that we always act as an interactive user agent with enabled scripting, so we parse
    //<noscript> as a rawtext.
    else if (tn === $.NOSCRIPT || tn === $.NOFRAMES || tn === $.STYLE) p._switchToTextParsing(token, tokenizer.MODE.RAWTEXT);else if (tn === $.SCRIPT) p._switchToTextParsing(token, tokenizer.MODE.SCRIPT_DATA);else if (tn === $.TEMPLATE) {
        p._insertTemplate(token, NS.HTML);

        p.activeFormattingElements.insertMarker();
        p.framesetOk = false;
        p.insertionMode = IN_TEMPLATE_MODE;

        p._pushTmplInsertionMode(IN_TEMPLATE_MODE);
      } else if (tn !== $.HEAD) tokenInHead(p, token);
  }

  function endTagInHead(p, token) {
    var tn = token.tagName;

    if (tn === $.HEAD) {
      p.openElements.pop();
      p.insertionMode = AFTER_HEAD_MODE;
    } else if (tn === $.BODY || tn === $.BR || tn === $.HTML) tokenInHead(p, token);else if (tn === $.TEMPLATE && p.openElements.tmplCount > 0) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped($.TEMPLATE);
      p.activeFormattingElements.clearToLastMarker();

      p._popTmplInsertionMode();

      p._resetInsertionMode();
    }
  }

  function tokenInHead(p, token) {
    p.openElements.pop();
    p.insertionMode = AFTER_HEAD_MODE;

    p._processToken(token);
  } //12.2.5.4.6 The "after head" insertion mode
  //------------------------------------------------------------------


  function startTagAfterHead(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.BODY) {
      p._insertElement(token, NS.HTML);

      p.framesetOk = false;
      p.insertionMode = IN_BODY_MODE;
    } else if (tn === $.FRAMESET) {
      p._insertElement(token, NS.HTML);

      p.insertionMode = IN_FRAMESET_MODE;
    } else if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) {
      p.openElements.push(p.headElement);
      startTagInHead(p, token);
      p.openElements.remove(p.headElement);
    } else if (tn !== $.HEAD) tokenAfterHead(p, token);
  }

  function endTagAfterHead(p, token) {
    var tn = token.tagName;
    if (tn === $.BODY || tn === $.HTML || tn === $.BR) tokenAfterHead(p, token);else if (tn === $.TEMPLATE) endTagInHead(p, token);
  }

  function tokenAfterHead(p, token) {
    p._insertFakeElement($.BODY);

    p.insertionMode = IN_BODY_MODE;

    p._processToken(token);
  } //12.2.5.4.7 The "in body" insertion mode
  //------------------------------------------------------------------


  function whitespaceCharacterInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._insertCharacters(token);
  }

  function characterInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._insertCharacters(token);

    p.framesetOk = false;
  }

  function htmlStartTagInBody(p, token) {
    if (p.openElements.tmplCount === 0) p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
  }

  function bodyStartTagInBody(p, token) {
    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

    if (bodyElement && p.openElements.tmplCount === 0) {
      p.framesetOk = false;
      p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
    }
  }

  function framesetStartTagInBody(p, token) {
    var bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();

    if (p.framesetOk && bodyElement) {
      p.treeAdapter.detachNode(bodyElement);
      p.openElements.popAllUpToHtmlElement();

      p._insertElement(token, NS.HTML);

      p.insertionMode = IN_FRAMESET_MODE;
    }
  }

  function addressStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();

    p._insertElement(token, NS.HTML);
  }

  function numberedHeaderStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();
    var tn = p.openElements.currentTagName;
    if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) p.openElements.pop();

    p._insertElement(token, NS.HTML);
  }

  function preStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();

    p._insertElement(token, NS.HTML); //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)


    p.skipNextNewLine = true;
    p.framesetOk = false;
  }

  function formStartTagInBody(p, token) {
    var inTemplate = p.openElements.tmplCount > 0;

    if (!p.formElement || inTemplate) {
      if (p.openElements.hasInButtonScope($.P)) p._closePElement();

      p._insertElement(token, NS.HTML);

      if (!inTemplate) p.formElement = p.openElements.current;
    }
  }

  function listItemStartTagInBody(p, token) {
    p.framesetOk = false;
    var tn = token.tagName;

    for (var i = p.openElements.stackTop; i >= 0; i--) {
      var element = p.openElements.items[i],
          elementTn = p.treeAdapter.getTagName(element),
          closeTn = null;
      if (tn === $.LI && elementTn === $.LI) closeTn = $.LI;else if ((tn === $.DD || tn === $.DT) && (elementTn === $.DD || elementTn === $.DT)) closeTn = elementTn;

      if (closeTn) {
        p.openElements.generateImpliedEndTagsWithExclusion(closeTn);
        p.openElements.popUntilTagNamePopped(closeTn);
        break;
      }

      if (elementTn !== $.ADDRESS && elementTn !== $.DIV && elementTn !== $.P && p._isSpecialElement(element)) break;
    }

    if (p.openElements.hasInButtonScope($.P)) p._closePElement();

    p._insertElement(token, NS.HTML);
  }

  function plaintextStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();

    p._insertElement(token, NS.HTML);

    p.tokenizer.state = tokenizer.MODE.PLAINTEXT;
  }

  function buttonStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.BUTTON)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped($.BUTTON);
    }

    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);

    p.framesetOk = false;
  }

  function aStartTagInBody(p, token) {
    var activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName($.A);

    if (activeElementEntry) {
      callAdoptionAgency(p, token);
      p.openElements.remove(activeElementEntry.element);
      p.activeFormattingElements.removeEntry(activeElementEntry);
    }

    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);

    p.activeFormattingElements.pushElement(p.openElements.current, token);
  }

  function bStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);

    p.activeFormattingElements.pushElement(p.openElements.current, token);
  }

  function nobrStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    if (p.openElements.hasInScope($.NOBR)) {
      callAdoptionAgency(p, token);

      p._reconstructActiveFormattingElements();
    }

    p._insertElement(token, NS.HTML);

    p.activeFormattingElements.pushElement(p.openElements.current, token);
  }

  function appletStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);

    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
  }

  function tableStartTagInBody(p, token) {
    if (p.treeAdapter.getDocumentMode(p.document) !== html.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope($.P)) p._closePElement();

    p._insertElement(token, NS.HTML);

    p.framesetOk = false;
    p.insertionMode = IN_TABLE_MODE;
  }

  function areaStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._appendElement(token, NS.HTML);

    p.framesetOk = false;
  }

  function inputStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._appendElement(token, NS.HTML);

    var inputType = tokenizer.getTokenAttr(token, ATTRS.TYPE);
    if (!inputType || inputType.toLowerCase() !== HIDDEN_INPUT_TYPE) p.framesetOk = false;
  }

  function paramStartTagInBody(p, token) {
    p._appendElement(token, NS.HTML);
  }

  function hrStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();
    if (p.openElements.currentTagName === $.MENUITEM) p.openElements.pop();

    p._appendElement(token, NS.HTML);

    p.framesetOk = false;
  }

  function imageStartTagInBody(p, token) {
    token.tagName = $.IMG;
    areaStartTagInBody(p, token);
  }

  function textareaStartTagInBody(p, token) {
    p._insertElement(token, NS.HTML); //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)


    p.skipNextNewLine = true;
    p.tokenizer.state = tokenizer.MODE.RCDATA;
    p.originalInsertionMode = p.insertionMode;
    p.framesetOk = false;
    p.insertionMode = TEXT_MODE;
  }

  function xmpStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();

    p._reconstructActiveFormattingElements();

    p.framesetOk = false;

    p._switchToTextParsing(token, tokenizer.MODE.RAWTEXT);
  }

  function iframeStartTagInBody(p, token) {
    p.framesetOk = false;

    p._switchToTextParsing(token, tokenizer.MODE.RAWTEXT);
  } //NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
  //<noembed> as a rawtext.


  function noembedStartTagInBody(p, token) {
    p._switchToTextParsing(token, tokenizer.MODE.RAWTEXT);
  }

  function selectStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);

    p.framesetOk = false;
    if (p.insertionMode === IN_TABLE_MODE || p.insertionMode === IN_CAPTION_MODE || p.insertionMode === IN_TABLE_BODY_MODE || p.insertionMode === IN_ROW_MODE || p.insertionMode === IN_CELL_MODE) p.insertionMode = IN_SELECT_IN_TABLE_MODE;else p.insertionMode = IN_SELECT_MODE;
  }

  function optgroupStartTagInBody(p, token) {
    if (p.openElements.currentTagName === $.OPTION) p.openElements.pop();

    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);
  }

  function rbStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.RUBY)) p.openElements.generateImpliedEndTags();

    p._insertElement(token, NS.HTML);
  }

  function rtStartTagInBody(p, token) {
    if (p.openElements.hasInScope($.RUBY)) p.openElements.generateImpliedEndTagsWithExclusion($.RTC);

    p._insertElement(token, NS.HTML);
  }

  function menuitemStartTagInBody(p, token) {
    if (p.openElements.currentTagName === $.MENUITEM) p.openElements.pop(); // TODO needs clarification, see https://github.com/whatwg/html/pull/907/files#r73505877

    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);
  }

  function menuStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope($.P)) p._closePElement();
    if (p.openElements.currentTagName === $.MENUITEM) p.openElements.pop();

    p._insertElement(token, NS.HTML);
  }

  function mathStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    foreign_content.adjustTokenMathMLAttrs(token);
    foreign_content.adjustTokenXMLAttrs(token);
    if (token.selfClosing) p._appendElement(token, NS.MATHML);else p._insertElement(token, NS.MATHML);
  }

  function svgStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    foreign_content.adjustTokenSVGAttrs(token);
    foreign_content.adjustTokenXMLAttrs(token);
    if (token.selfClosing) p._appendElement(token, NS.SVG);else p._insertElement(token, NS.SVG);
  }

  function genericStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();

    p._insertElement(token, NS.HTML);
  } //OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
  //It's faster than using dictionary.


  function startTagInBody(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
      case 1:
        if (tn === $.I || tn === $.S || tn === $.B || tn === $.U) bStartTagInBody(p, token);else if (tn === $.P) addressStartTagInBody(p, token);else if (tn === $.A) aStartTagInBody(p, token);else genericStartTagInBody(p, token);
        break;

      case 2:
        if (tn === $.DL || tn === $.OL || tn === $.UL) addressStartTagInBody(p, token);else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) numberedHeaderStartTagInBody(p, token);else if (tn === $.LI || tn === $.DD || tn === $.DT) listItemStartTagInBody(p, token);else if (tn === $.EM || tn === $.TT) bStartTagInBody(p, token);else if (tn === $.BR) areaStartTagInBody(p, token);else if (tn === $.HR) hrStartTagInBody(p, token);else if (tn === $.RB) rbStartTagInBody(p, token);else if (tn === $.RT || tn === $.RP) rtStartTagInBody(p, token);else if (tn !== $.TH && tn !== $.TD && tn !== $.TR) genericStartTagInBody(p, token);
        break;

      case 3:
        if (tn === $.DIV || tn === $.DIR || tn === $.NAV) addressStartTagInBody(p, token);else if (tn === $.PRE) preStartTagInBody(p, token);else if (tn === $.BIG) bStartTagInBody(p, token);else if (tn === $.IMG || tn === $.WBR) areaStartTagInBody(p, token);else if (tn === $.XMP) xmpStartTagInBody(p, token);else if (tn === $.SVG) svgStartTagInBody(p, token);else if (tn === $.RTC) rbStartTagInBody(p, token);else if (tn !== $.COL) genericStartTagInBody(p, token);
        break;

      case 4:
        if (tn === $.HTML) htmlStartTagInBody(p, token);else if (tn === $.BASE || tn === $.LINK || tn === $.META) startTagInHead(p, token);else if (tn === $.BODY) bodyStartTagInBody(p, token);else if (tn === $.MAIN) addressStartTagInBody(p, token);else if (tn === $.FORM) formStartTagInBody(p, token);else if (tn === $.CODE || tn === $.FONT) bStartTagInBody(p, token);else if (tn === $.NOBR) nobrStartTagInBody(p, token);else if (tn === $.AREA) areaStartTagInBody(p, token);else if (tn === $.MATH) mathStartTagInBody(p, token);else if (tn === $.MENU) menuStartTagInBody(p, token);else if (tn !== $.HEAD) genericStartTagInBody(p, token);
        break;

      case 5:
        if (tn === $.STYLE || tn === $.TITLE) startTagInHead(p, token);else if (tn === $.ASIDE) addressStartTagInBody(p, token);else if (tn === $.SMALL) bStartTagInBody(p, token);else if (tn === $.TABLE) tableStartTagInBody(p, token);else if (tn === $.EMBED) areaStartTagInBody(p, token);else if (tn === $.INPUT) inputStartTagInBody(p, token);else if (tn === $.PARAM || tn === $.TRACK) paramStartTagInBody(p, token);else if (tn === $.IMAGE) imageStartTagInBody(p, token);else if (tn !== $.FRAME && tn !== $.TBODY && tn !== $.TFOOT && tn !== $.THEAD) genericStartTagInBody(p, token);
        break;

      case 6:
        if (tn === $.SCRIPT) startTagInHead(p, token);else if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP) addressStartTagInBody(p, token);else if (tn === $.BUTTON) buttonStartTagInBody(p, token);else if (tn === $.STRIKE || tn === $.STRONG) bStartTagInBody(p, token);else if (tn === $.APPLET || tn === $.OBJECT) appletStartTagInBody(p, token);else if (tn === $.KEYGEN) areaStartTagInBody(p, token);else if (tn === $.SOURCE) paramStartTagInBody(p, token);else if (tn === $.IFRAME) iframeStartTagInBody(p, token);else if (tn === $.SELECT) selectStartTagInBody(p, token);else if (tn === $.OPTION) optgroupStartTagInBody(p, token);else genericStartTagInBody(p, token);
        break;

      case 7:
        if (tn === $.BGSOUND) startTagInHead(p, token);else if (tn === $.DETAILS || tn === $.ADDRESS || tn === $.ARTICLE || tn === $.SECTION || tn === $.SUMMARY) addressStartTagInBody(p, token);else if (tn === $.LISTING) preStartTagInBody(p, token);else if (tn === $.MARQUEE) appletStartTagInBody(p, token);else if (tn === $.NOEMBED) noembedStartTagInBody(p, token);else if (tn !== $.CAPTION) genericStartTagInBody(p, token);
        break;

      case 8:
        if (tn === $.BASEFONT) startTagInHead(p, token);else if (tn === $.MENUITEM) menuitemStartTagInBody(p, token);else if (tn === $.FRAMESET) framesetStartTagInBody(p, token);else if (tn === $.FIELDSET) addressStartTagInBody(p, token);else if (tn === $.TEXTAREA) textareaStartTagInBody(p, token);else if (tn === $.TEMPLATE) startTagInHead(p, token);else if (tn === $.NOSCRIPT) noembedStartTagInBody(p, token);else if (tn === $.OPTGROUP) optgroupStartTagInBody(p, token);else if (tn !== $.COLGROUP) genericStartTagInBody(p, token);
        break;

      case 9:
        if (tn === $.PLAINTEXT) plaintextStartTagInBody(p, token);else genericStartTagInBody(p, token);
        break;

      case 10:
        if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) addressStartTagInBody(p, token);else genericStartTagInBody(p, token);
        break;

      default:
        genericStartTagInBody(p, token);
    }
  }

  function bodyEndTagInBody(p) {
    if (p.openElements.hasInScope($.BODY)) p.insertionMode = AFTER_BODY_MODE;
  }

  function htmlEndTagInBody(p, token) {
    if (p.openElements.hasInScope($.BODY)) {
      p.insertionMode = AFTER_BODY_MODE;

      p._processToken(token);
    }
  }

  function addressEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(tn);
    }
  }

  function formEndTagInBody(p) {
    var inTemplate = p.openElements.tmplCount > 0,
        formElement = p.formElement;
    if (!inTemplate) p.formElement = null;

    if ((formElement || inTemplate) && p.openElements.hasInScope($.FORM)) {
      p.openElements.generateImpliedEndTags();
      if (inTemplate) p.openElements.popUntilTagNamePopped($.FORM);else p.openElements.remove(formElement);
    }
  }

  function pEndTagInBody(p) {
    if (!p.openElements.hasInButtonScope($.P)) p._insertFakeElement($.P);

    p._closePElement();
  }

  function liEndTagInBody(p) {
    if (p.openElements.hasInListItemScope($.LI)) {
      p.openElements.generateImpliedEndTagsWithExclusion($.LI);
      p.openElements.popUntilTagNamePopped($.LI);
    }
  }

  function ddEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
      p.openElements.generateImpliedEndTagsWithExclusion(tn);
      p.openElements.popUntilTagNamePopped(tn);
    }
  }

  function numberedHeaderEndTagInBody(p) {
    if (p.openElements.hasNumberedHeaderInScope()) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilNumberedHeaderPopped();
    }
  }

  function appletEndTagInBody(p, token) {
    var tn = token.tagName;

    if (p.openElements.hasInScope(tn)) {
      p.openElements.generateImpliedEndTags();
      p.openElements.popUntilTagNamePopped(tn);
      p.activeFormattingElements.clearToLastMarker();
    }
  }

  function brEndTagInBody(p) {
    p._reconstructActiveFormattingElements();

    p._insertFakeElement($.BR);

    p.openElements.pop();
    p.framesetOk = false;
  }

  function genericEndTagInBody(p, token) {
    var tn = token.tagName;

    for (var i = p.openElements.stackTop; i > 0; i--) {
      var element = p.openElements.items[i];

      if (p.treeAdapter.getTagName(element) === tn) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilElementPopped(element);
        break;
      }

      if (p._isSpecialElement(element)) break;
    }
  } //OPTIMIZATION: Integer comparisons are low-cost, so we can use very fast tag name length filters here.
  //It's faster than using dictionary.


  function endTagInBody(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
      case 1:
        if (tn === $.A || tn === $.B || tn === $.I || tn === $.S || tn === $.U) callAdoptionAgency(p, token);else if (tn === $.P) pEndTagInBody(p);else genericEndTagInBody(p, token);
        break;

      case 2:
        if (tn === $.DL || tn === $.UL || tn === $.OL) addressEndTagInBody(p, token);else if (tn === $.LI) liEndTagInBody(p);else if (tn === $.DD || tn === $.DT) ddEndTagInBody(p, token);else if (tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6) numberedHeaderEndTagInBody(p);else if (tn === $.BR) brEndTagInBody(p);else if (tn === $.EM || tn === $.TT) callAdoptionAgency(p, token);else genericEndTagInBody(p, token);
        break;

      case 3:
        if (tn === $.BIG) callAdoptionAgency(p, token);else if (tn === $.DIR || tn === $.DIV || tn === $.NAV) addressEndTagInBody(p, token);else genericEndTagInBody(p, token);
        break;

      case 4:
        if (tn === $.BODY) bodyEndTagInBody(p);else if (tn === $.HTML) htmlEndTagInBody(p, token);else if (tn === $.FORM) formEndTagInBody(p);else if (tn === $.CODE || tn === $.FONT || tn === $.NOBR) callAdoptionAgency(p, token);else if (tn === $.MAIN || tn === $.MENU) addressEndTagInBody(p, token);else genericEndTagInBody(p, token);
        break;

      case 5:
        if (tn === $.ASIDE) addressEndTagInBody(p, token);else if (tn === $.SMALL) callAdoptionAgency(p, token);else genericEndTagInBody(p, token);
        break;

      case 6:
        if (tn === $.CENTER || tn === $.FIGURE || tn === $.FOOTER || tn === $.HEADER || tn === $.HGROUP) addressEndTagInBody(p, token);else if (tn === $.APPLET || tn === $.OBJECT) appletEndTagInBody(p, token);else if (tn === $.STRIKE || tn === $.STRONG) callAdoptionAgency(p, token);else genericEndTagInBody(p, token);
        break;

      case 7:
        if (tn === $.ADDRESS || tn === $.ARTICLE || tn === $.DETAILS || tn === $.SECTION || tn === $.SUMMARY) addressEndTagInBody(p, token);else if (tn === $.MARQUEE) appletEndTagInBody(p, token);else genericEndTagInBody(p, token);
        break;

      case 8:
        if (tn === $.FIELDSET) addressEndTagInBody(p, token);else if (tn === $.TEMPLATE) endTagInHead(p, token);else genericEndTagInBody(p, token);
        break;

      case 10:
        if (tn === $.BLOCKQUOTE || tn === $.FIGCAPTION) addressEndTagInBody(p, token);else genericEndTagInBody(p, token);
        break;

      default:
        genericEndTagInBody(p, token);
    }
  }

  function eofInBody(p, token) {
    if (p.tmplInsertionModeStackTop > -1) eofInTemplate(p, token);else p.stopped = true;
  } //12.2.5.4.8 The "text" insertion mode
  //------------------------------------------------------------------


  function endTagInText(p, token) {
    if (token.tagName === $.SCRIPT) p.pendingScript = p.openElements.current;
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
  }

  function eofInText(p, token) {
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;

    p._processToken(token);
  } //12.2.5.4.9 The "in table" insertion mode
  //------------------------------------------------------------------


  function characterInTable(p, token) {
    var curTn = p.openElements.currentTagName;

    if (curTn === $.TABLE || curTn === $.TBODY || curTn === $.TFOOT || curTn === $.THEAD || curTn === $.TR) {
      p.pendingCharacterTokens = [];
      p.hasNonWhitespacePendingCharacterToken = false;
      p.originalInsertionMode = p.insertionMode;
      p.insertionMode = IN_TABLE_TEXT_MODE;

      p._processToken(token);
    } else tokenInTable(p, token);
  }

  function captionStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p.activeFormattingElements.insertMarker();

    p._insertElement(token, NS.HTML);

    p.insertionMode = IN_CAPTION_MODE;
  }

  function colgroupStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();

    p._insertElement(token, NS.HTML);

    p.insertionMode = IN_COLUMN_GROUP_MODE;
  }

  function colStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();

    p._insertFakeElement($.COLGROUP);

    p.insertionMode = IN_COLUMN_GROUP_MODE;

    p._processToken(token);
  }

  function tbodyStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();

    p._insertElement(token, NS.HTML);

    p.insertionMode = IN_TABLE_BODY_MODE;
  }

  function tdStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();

    p._insertFakeElement($.TBODY);

    p.insertionMode = IN_TABLE_BODY_MODE;

    p._processToken(token);
  }

  function tableStartTagInTable(p, token) {
    if (p.openElements.hasInTableScope($.TABLE)) {
      p.openElements.popUntilTagNamePopped($.TABLE);

      p._resetInsertionMode();

      p._processToken(token);
    }
  }

  function inputStartTagInTable(p, token) {
    var inputType = tokenizer.getTokenAttr(token, ATTRS.TYPE);
    if (inputType && inputType.toLowerCase() === HIDDEN_INPUT_TYPE) p._appendElement(token, NS.HTML);else tokenInTable(p, token);
  }

  function formStartTagInTable(p, token) {
    if (!p.formElement && p.openElements.tmplCount === 0) {
      p._insertElement(token, NS.HTML);

      p.formElement = p.openElements.current;
      p.openElements.pop();
    }
  }

  function startTagInTable(p, token) {
    var tn = token.tagName;

    switch (tn.length) {
      case 2:
        if (tn === $.TD || tn === $.TH || tn === $.TR) tdStartTagInTable(p, token);else tokenInTable(p, token);
        break;

      case 3:
        if (tn === $.COL) colStartTagInTable(p, token);else tokenInTable(p, token);
        break;

      case 4:
        if (tn === $.FORM) formStartTagInTable(p, token);else tokenInTable(p, token);
        break;

      case 5:
        if (tn === $.TABLE) tableStartTagInTable(p, token);else if (tn === $.STYLE) startTagInHead(p, token);else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) tbodyStartTagInTable(p, token);else if (tn === $.INPUT) inputStartTagInTable(p, token);else tokenInTable(p, token);
        break;

      case 6:
        if (tn === $.SCRIPT) startTagInHead(p, token);else tokenInTable(p, token);
        break;

      case 7:
        if (tn === $.CAPTION) captionStartTagInTable(p, token);else tokenInTable(p, token);
        break;

      case 8:
        if (tn === $.COLGROUP) colgroupStartTagInTable(p, token);else if (tn === $.TEMPLATE) startTagInHead(p, token);else tokenInTable(p, token);
        break;

      default:
        tokenInTable(p, token);
    }
  }

  function endTagInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.TABLE) {
      if (p.openElements.hasInTableScope($.TABLE)) {
        p.openElements.popUntilTagNamePopped($.TABLE);

        p._resetInsertionMode();
      }
    } else if (tn === $.TEMPLATE) endTagInHead(p, token);else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) tokenInTable(p, token);
  }

  function tokenInTable(p, token) {
    var savedFosterParentingState = p.fosterParentingEnabled;
    p.fosterParentingEnabled = true;

    p._processTokenInBodyMode(token);

    p.fosterParentingEnabled = savedFosterParentingState;
  } //12.2.5.4.10 The "in table text" insertion mode
  //------------------------------------------------------------------


  function whitespaceCharacterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
  }

  function characterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
    p.hasNonWhitespacePendingCharacterToken = true;
  }

  function tokenInTableText(p, token) {
    var i = 0;

    if (p.hasNonWhitespacePendingCharacterToken) {
      for (; i < p.pendingCharacterTokens.length; i++) {
        tokenInTable(p, p.pendingCharacterTokens[i]);
      }
    } else {
      for (; i < p.pendingCharacterTokens.length; i++) {
        p._insertCharacters(p.pendingCharacterTokens[i]);
      }
    }

    p.insertionMode = p.originalInsertionMode;

    p._processToken(token);
  } //12.2.5.4.11 The "in caption" insertion mode
  //------------------------------------------------------------------


  function startTagInCaption(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
      if (p.openElements.hasInTableScope($.CAPTION)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.CAPTION);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = IN_TABLE_MODE;

        p._processToken(token);
      }
    } else startTagInBody(p, token);
  }

  function endTagInCaption(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE) {
      if (p.openElements.hasInTableScope($.CAPTION)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped($.CAPTION);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = IN_TABLE_MODE;
        if (tn === $.TABLE) p._processToken(token);
      }
    } else if (tn !== $.BODY && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML && tn !== $.TBODY && tn !== $.TD && tn !== $.TFOOT && tn !== $.TH && tn !== $.THEAD && tn !== $.TR) endTagInBody(p, token);
  } //12.2.5.4.12 The "in column group" insertion mode
  //------------------------------------------------------------------


  function startTagInColumnGroup(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.COL) p._appendElement(token, NS.HTML);else if (tn === $.TEMPLATE) startTagInHead(p, token);else tokenInColumnGroup(p, token);
  }

  function endTagInColumnGroup(p, token) {
    var tn = token.tagName;

    if (tn === $.COLGROUP) {
      if (p.openElements.currentTagName === $.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;
      }
    } else if (tn === $.TEMPLATE) endTagInHead(p, token);else if (tn !== $.COL) tokenInColumnGroup(p, token);
  }

  function tokenInColumnGroup(p, token) {
    if (p.openElements.currentTagName === $.COLGROUP) {
      p.openElements.pop();
      p.insertionMode = IN_TABLE_MODE;

      p._processToken(token);
    }
  } //12.2.5.4.13 The "in table body" insertion mode
  //------------------------------------------------------------------


  function startTagInTableBody(p, token) {
    var tn = token.tagName;

    if (tn === $.TR) {
      p.openElements.clearBackToTableBodyContext();

      p._insertElement(token, NS.HTML);

      p.insertionMode = IN_ROW_MODE;
    } else if (tn === $.TH || tn === $.TD) {
      p.openElements.clearBackToTableBodyContext();

      p._insertFakeElement($.TR);

      p.insertionMode = IN_ROW_MODE;

      p._processToken(token);
    } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;

        p._processToken(token);
      }
    } else startTagInTable(p, token);
  }

  function endTagInTableBody(p, token) {
    var tn = token.tagName;

    if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;
      }
    } else if (tn === $.TABLE) {
      if (p.openElements.hasTableBodyContextInTableScope()) {
        p.openElements.clearBackToTableBodyContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_MODE;

        p._processToken(token);
      }
    } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH && tn !== $.TR) endTagInTable(p, token);
  } //12.2.5.4.14 The "in row" insertion mode
  //------------------------------------------------------------------


  function startTagInRow(p, token) {
    var tn = token.tagName;

    if (tn === $.TH || tn === $.TD) {
      p.openElements.clearBackToTableRowContext();

      p._insertElement(token, NS.HTML);

      p.insertionMode = IN_CELL_MODE;
      p.activeFormattingElements.insertMarker();
    } else if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
      if (p.openElements.hasInTableScope($.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_BODY_MODE;

        p._processToken(token);
      }
    } else startTagInTable(p, token);
  }

  function endTagInRow(p, token) {
    var tn = token.tagName;

    if (tn === $.TR) {
      if (p.openElements.hasInTableScope($.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_BODY_MODE;
      }
    } else if (tn === $.TABLE) {
      if (p.openElements.hasInTableScope($.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_BODY_MODE;

        p._processToken(token);
      }
    } else if (tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD) {
      if (p.openElements.hasInTableScope(tn) || p.openElements.hasInTableScope($.TR)) {
        p.openElements.clearBackToTableRowContext();
        p.openElements.pop();
        p.insertionMode = IN_TABLE_BODY_MODE;

        p._processToken(token);
      }
    } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP || tn !== $.HTML && tn !== $.TD && tn !== $.TH) endTagInTable(p, token);
  } //12.2.5.4.15 The "in cell" insertion mode
  //------------------------------------------------------------------


  function startTagInCell(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.COL || tn === $.COLGROUP || tn === $.TBODY || tn === $.TD || tn === $.TFOOT || tn === $.TH || tn === $.THEAD || tn === $.TR) {
      if (p.openElements.hasInTableScope($.TD) || p.openElements.hasInTableScope($.TH)) {
        p._closeTableCell();

        p._processToken(token);
      }
    } else startTagInBody(p, token);
  }

  function endTagInCell(p, token) {
    var tn = token.tagName;

    if (tn === $.TD || tn === $.TH) {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
        p.insertionMode = IN_ROW_MODE;
      }
    } else if (tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR) {
      if (p.openElements.hasInTableScope(tn)) {
        p._closeTableCell();

        p._processToken(token);
      }
    } else if (tn !== $.BODY && tn !== $.CAPTION && tn !== $.COL && tn !== $.COLGROUP && tn !== $.HTML) endTagInBody(p, token);
  } //12.2.5.4.16 The "in select" insertion mode
  //------------------------------------------------------------------


  function startTagInSelect(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.OPTION) {
      if (p.openElements.currentTagName === $.OPTION) p.openElements.pop();

      p._insertElement(token, NS.HTML);
    } else if (tn === $.OPTGROUP) {
      if (p.openElements.currentTagName === $.OPTION) p.openElements.pop();
      if (p.openElements.currentTagName === $.OPTGROUP) p.openElements.pop();

      p._insertElement(token, NS.HTML);
    } else if (tn === $.INPUT || tn === $.KEYGEN || tn === $.TEXTAREA || tn === $.SELECT) {
      if (p.openElements.hasInSelectScope($.SELECT)) {
        p.openElements.popUntilTagNamePopped($.SELECT);

        p._resetInsertionMode();

        if (tn !== $.SELECT) p._processToken(token);
      }
    } else if (tn === $.SCRIPT || tn === $.TEMPLATE) startTagInHead(p, token);
  }

  function endTagInSelect(p, token) {
    var tn = token.tagName;

    if (tn === $.OPTGROUP) {
      var prevOpenElement = p.openElements.items[p.openElements.stackTop - 1],
          prevOpenElementTn = prevOpenElement && p.treeAdapter.getTagName(prevOpenElement);
      if (p.openElements.currentTagName === $.OPTION && prevOpenElementTn === $.OPTGROUP) p.openElements.pop();
      if (p.openElements.currentTagName === $.OPTGROUP) p.openElements.pop();
    } else if (tn === $.OPTION) {
      if (p.openElements.currentTagName === $.OPTION) p.openElements.pop();
    } else if (tn === $.SELECT && p.openElements.hasInSelectScope($.SELECT)) {
      p.openElements.popUntilTagNamePopped($.SELECT);

      p._resetInsertionMode();
    } else if (tn === $.TEMPLATE) endTagInHead(p, token);
  } //12.2.5.4.17 The "in select in table" insertion mode
  //------------------------------------------------------------------


  function startTagInSelectInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
      p.openElements.popUntilTagNamePopped($.SELECT);

      p._resetInsertionMode();

      p._processToken(token);
    } else startTagInSelect(p, token);
  }

  function endTagInSelectInTable(p, token) {
    var tn = token.tagName;

    if (tn === $.CAPTION || tn === $.TABLE || tn === $.TBODY || tn === $.TFOOT || tn === $.THEAD || tn === $.TR || tn === $.TD || tn === $.TH) {
      if (p.openElements.hasInTableScope(tn)) {
        p.openElements.popUntilTagNamePopped($.SELECT);

        p._resetInsertionMode();

        p._processToken(token);
      }
    } else endTagInSelect(p, token);
  } //12.2.5.4.18 The "in template" insertion mode
  //------------------------------------------------------------------


  function startTagInTemplate(p, token) {
    var tn = token.tagName;
    if (tn === $.BASE || tn === $.BASEFONT || tn === $.BGSOUND || tn === $.LINK || tn === $.META || tn === $.NOFRAMES || tn === $.SCRIPT || tn === $.STYLE || tn === $.TEMPLATE || tn === $.TITLE) startTagInHead(p, token);else {
      var newInsertionMode = TEMPLATE_INSERTION_MODE_SWITCH_MAP[tn] || IN_BODY_MODE;

      p._popTmplInsertionMode();

      p._pushTmplInsertionMode(newInsertionMode);

      p.insertionMode = newInsertionMode;

      p._processToken(token);
    }
  }

  function endTagInTemplate(p, token) {
    if (token.tagName === $.TEMPLATE) endTagInHead(p, token);
  }

  function eofInTemplate(p, token) {
    if (p.openElements.tmplCount > 0) {
      p.openElements.popUntilTagNamePopped($.TEMPLATE);
      p.activeFormattingElements.clearToLastMarker();

      p._popTmplInsertionMode();

      p._resetInsertionMode();

      p._processToken(token);
    } else p.stopped = true;
  } //12.2.5.4.19 The "after body" insertion mode
  //------------------------------------------------------------------


  function startTagAfterBody(p, token) {
    if (token.tagName === $.HTML) startTagInBody(p, token);else tokenAfterBody(p, token);
  }

  function endTagAfterBody(p, token) {
    if (token.tagName === $.HTML) {
      if (!p.fragmentContext) p.insertionMode = AFTER_AFTER_BODY_MODE;
    } else tokenAfterBody(p, token);
  }

  function tokenAfterBody(p, token) {
    p.insertionMode = IN_BODY_MODE;

    p._processToken(token);
  } //12.2.5.4.20 The "in frameset" insertion mode
  //------------------------------------------------------------------


  function startTagInFrameset(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.FRAMESET) p._insertElement(token, NS.HTML);else if (tn === $.FRAME) p._appendElement(token, NS.HTML);else if (tn === $.NOFRAMES) startTagInHead(p, token);
  }

  function endTagInFrameset(p, token) {
    if (token.tagName === $.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
      p.openElements.pop();
      if (!p.fragmentContext && p.openElements.currentTagName !== $.FRAMESET) p.insertionMode = AFTER_FRAMESET_MODE;
    }
  } //12.2.5.4.21 The "after frameset" insertion mode
  //------------------------------------------------------------------


  function startTagAfterFrameset(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.NOFRAMES) startTagInHead(p, token);
  }

  function endTagAfterFrameset(p, token) {
    if (token.tagName === $.HTML) p.insertionMode = AFTER_AFTER_FRAMESET_MODE;
  } //12.2.5.4.22 The "after after body" insertion mode
  //------------------------------------------------------------------


  function startTagAfterAfterBody(p, token) {
    if (token.tagName === $.HTML) startTagInBody(p, token);else tokenAfterAfterBody(p, token);
  }

  function tokenAfterAfterBody(p, token) {
    p.insertionMode = IN_BODY_MODE;

    p._processToken(token);
  } //12.2.5.4.23 The "after after frameset" insertion mode
  //------------------------------------------------------------------


  function startTagAfterAfterFrameset(p, token) {
    var tn = token.tagName;
    if (tn === $.HTML) startTagInBody(p, token);else if (tn === $.NOFRAMES) startTagInHead(p, token);
  } //12.2.5.5 The rules for parsing tokens in foreign content
  //------------------------------------------------------------------


  function nullCharacterInForeignContent(p, token) {
    token.chars = unicode.REPLACEMENT_CHARACTER;

    p._insertCharacters(token);
  }

  function characterInForeignContent(p, token) {
    p._insertCharacters(token);

    p.framesetOk = false;
  }

  function startTagInForeignContent(p, token) {
    if (foreign_content.causesExit(token) && !p.fragmentContext) {
      while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== NS.HTML && !p._isIntegrationPoint(p.openElements.current)) {
        p.openElements.pop();
      }

      p._processToken(token);
    } else {
      var current = p._getAdjustedCurrentElement(),
          currentNs = p.treeAdapter.getNamespaceURI(current);

      if (currentNs === NS.MATHML) foreign_content.adjustTokenMathMLAttrs(token);else if (currentNs === NS.SVG) {
        foreign_content.adjustTokenSVGTagName(token);
        foreign_content.adjustTokenSVGAttrs(token);
      }
      foreign_content.adjustTokenXMLAttrs(token);
      if (token.selfClosing) p._appendElement(token, currentNs);else p._insertElement(token, currentNs);
    }
  }

  function endTagInForeignContent(p, token) {
    for (var i = p.openElements.stackTop; i > 0; i--) {
      var element = p.openElements.items[i];

      if (p.treeAdapter.getNamespaceURI(element) === NS.HTML) {
        p._processToken(token);

        break;
      }

      if (p.treeAdapter.getTagName(element).toLowerCase() === token.tagName) {
        p.openElements.popUntilElementPopped(element);
        break;
      }
    }
  }
  });

  var serializer = createCommonjsModule(function (module) {

   //Aliases


  var $ = html.TAG_NAMES,
      NS = html.NAMESPACES; //Default serializer options

  var DEFAULT_OPTIONS = {
    treeAdapter: _default
  }; //Escaping regexes

  var AMP_REGEX = /&/g,
      NBSP_REGEX = /\u00a0/g,
      DOUBLE_QUOTE_REGEX = /"/g,
      LT_REGEX = /</g,
      GT_REGEX = />/g; //Serializer

  var Serializer = module.exports = function (node, options) {
    this.options = merge_options(DEFAULT_OPTIONS, options);
    this.treeAdapter = this.options.treeAdapter;
    this.html = '';
    this.startNode = node;
  }; // NOTE: exported as static method for the testing purposes


  Serializer.escapeString = function (str, attrMode) {
    str = str.replace(AMP_REGEX, '&amp;').replace(NBSP_REGEX, '&nbsp;');
    if (attrMode) str = str.replace(DOUBLE_QUOTE_REGEX, '&quot;');else {
      str = str.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
    }
    return str;
  }; //API


  Serializer.prototype.serialize = function () {
    this._serializeChildNodes(this.startNode);

    return this.html;
  }; //Internals


  Serializer.prototype._serializeChildNodes = function (parentNode) {
    var childNodes = this.treeAdapter.getChildNodes(parentNode);

    if (childNodes) {
      for (var i = 0, cnLength = childNodes.length; i < cnLength; i++) {
        var currentNode = childNodes[i];
        if (this.treeAdapter.isElementNode(currentNode)) this._serializeElement(currentNode);else if (this.treeAdapter.isTextNode(currentNode)) this._serializeTextNode(currentNode);else if (this.treeAdapter.isCommentNode(currentNode)) this._serializeCommentNode(currentNode);else if (this.treeAdapter.isDocumentTypeNode(currentNode)) this._serializeDocumentTypeNode(currentNode);
      }
    }
  };

  Serializer.prototype._serializeElement = function (node) {
    var tn = this.treeAdapter.getTagName(node),
        ns = this.treeAdapter.getNamespaceURI(node);
    this.html += '<' + tn;

    this._serializeAttributes(node);

    this.html += '>';

    if (tn !== $.AREA && tn !== $.BASE && tn !== $.BASEFONT && tn !== $.BGSOUND && tn !== $.BR && tn !== $.BR && tn !== $.COL && tn !== $.EMBED && tn !== $.FRAME && tn !== $.HR && tn !== $.IMG && tn !== $.INPUT && tn !== $.KEYGEN && tn !== $.LINK && tn !== $.MENUITEM && tn !== $.META && tn !== $.PARAM && tn !== $.SOURCE && tn !== $.TRACK && tn !== $.WBR) {
      var childNodesHolder = tn === $.TEMPLATE && ns === NS.HTML ? this.treeAdapter.getTemplateContent(node) : node;

      this._serializeChildNodes(childNodesHolder);

      this.html += '</' + tn + '>';
    }
  };

  Serializer.prototype._serializeAttributes = function (node) {
    var attrs = this.treeAdapter.getAttrList(node);

    for (var i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
      var attr = attrs[i],
          value = Serializer.escapeString(attr.value, true);
      this.html += ' ';
      if (!attr.namespace) this.html += attr.name;else if (attr.namespace === NS.XML) this.html += 'xml:' + attr.name;else if (attr.namespace === NS.XMLNS) {
        if (attr.name !== 'xmlns') this.html += 'xmlns:';
        this.html += attr.name;
      } else if (attr.namespace === NS.XLINK) this.html += 'xlink:' + attr.name;else this.html += attr.namespace + ':' + attr.name;
      this.html += '="' + value + '"';
    }
  };

  Serializer.prototype._serializeTextNode = function (node) {
    var content = this.treeAdapter.getTextNodeContent(node),
        parent = this.treeAdapter.getParentNode(node),
        parentTn = void 0;
    if (parent && this.treeAdapter.isElementNode(parent)) parentTn = this.treeAdapter.getTagName(parent);
    if (parentTn === $.STYLE || parentTn === $.SCRIPT || parentTn === $.XMP || parentTn === $.IFRAME || parentTn === $.NOEMBED || parentTn === $.NOFRAMES || parentTn === $.PLAINTEXT || parentTn === $.NOSCRIPT) this.html += content;else this.html += Serializer.escapeString(content, false);
  };

  Serializer.prototype._serializeCommentNode = function (node) {
    this.html += '<!--' + this.treeAdapter.getCommentNodeContent(node) + '-->';
  };

  Serializer.prototype._serializeDocumentTypeNode = function (node) {
    var name = this.treeAdapter.getDocumentTypeNodeName(node);
    this.html += '<' + doctype.serializeContent(name, null, null) + '>';
  };
  });

  var htmlparser2 = createCommonjsModule(function (module, exports) {

  var DOCUMENT_MODE = html.DOCUMENT_MODE; //Conversion tables for DOM Level1 structure emulation


  var nodeTypes = {
    element: 1,
    text: 3,
    cdata: 4,
    comment: 8
  };
  var nodePropertyShorthands = {
    tagName: 'name',
    childNodes: 'children',
    parentNode: 'parent',
    previousSibling: 'prev',
    nextSibling: 'next',
    nodeValue: 'data'
  }; //Node

  var Node = function Node(props) {
    for (var key in props) {
      if (props.hasOwnProperty(key)) this[key] = props[key];
    }
  };

  Node.prototype = {
    get firstChild() {
      var children = this.children;
      return children && children[0] || null;
    },

    get lastChild() {
      var children = this.children;
      return children && children[children.length - 1] || null;
    },

    get nodeType() {
      return nodeTypes[this.type] || nodeTypes.element;
    }

  };
  Object.keys(nodePropertyShorthands).forEach(function (key) {
    var shorthand = nodePropertyShorthands[key];
    Object.defineProperty(Node.prototype, key, {
      get: function get() {
        return this[shorthand] || null;
      },
      set: function set(val) {
        this[shorthand] = val;
        return val;
      }
    });
  }); //Node construction

  exports.createDocument = function () {
    return new Node({
      type: 'root',
      name: 'root',
      parent: null,
      prev: null,
      next: null,
      children: [],
      'x-mode': DOCUMENT_MODE.NO_QUIRKS
    });
  };

  exports.createDocumentFragment = function () {
    return new Node({
      type: 'root',
      name: 'root',
      parent: null,
      prev: null,
      next: null,
      children: []
    });
  };

  exports.createElement = function (tagName, namespaceURI, attrs) {
    var attribs = Object.create(null),
        attribsNamespace = Object.create(null),
        attribsPrefix = Object.create(null);

    for (var i = 0; i < attrs.length; i++) {
      var attrName = attrs[i].name;
      attribs[attrName] = attrs[i].value;
      attribsNamespace[attrName] = attrs[i].namespace;
      attribsPrefix[attrName] = attrs[i].prefix;
    }

    return new Node({
      type: tagName === 'script' || tagName === 'style' ? tagName : 'tag',
      name: tagName,
      namespace: namespaceURI,
      attribs: attribs,
      'x-attribsNamespace': attribsNamespace,
      'x-attribsPrefix': attribsPrefix,
      children: [],
      parent: null,
      prev: null,
      next: null
    });
  };

  exports.createCommentNode = function (data) {
    return new Node({
      type: 'comment',
      data: data,
      parent: null,
      prev: null,
      next: null
    });
  };

  var createTextNode = function createTextNode(value) {
    return new Node({
      type: 'text',
      data: value,
      parent: null,
      prev: null,
      next: null
    });
  }; //Tree mutation


  var appendChild = exports.appendChild = function (parentNode, newNode) {
    var prev = parentNode.children[parentNode.children.length - 1];

    if (prev) {
      prev.next = newNode;
      newNode.prev = prev;
    }

    parentNode.children.push(newNode);
    newNode.parent = parentNode;
  };

  var insertBefore = exports.insertBefore = function (parentNode, newNode, referenceNode) {
    var insertionIdx = parentNode.children.indexOf(referenceNode),
        prev = referenceNode.prev;

    if (prev) {
      prev.next = newNode;
      newNode.prev = prev;
    }

    referenceNode.prev = newNode;
    newNode.next = referenceNode;
    parentNode.children.splice(insertionIdx, 0, newNode);
    newNode.parent = parentNode;
  };

  exports.setTemplateContent = function (templateElement, contentElement) {
    appendChild(templateElement, contentElement);
  };

  exports.getTemplateContent = function (templateElement) {
    return templateElement.children[0];
  };

  exports.setDocumentType = function (document, name, publicId, systemId) {
    var data = doctype.serializeContent(name, publicId, systemId),
        doctypeNode = null;

    for (var i = 0; i < document.children.length; i++) {
      if (document.children[i].type === 'directive' && document.children[i].name === '!doctype') {
        doctypeNode = document.children[i];
        break;
      }
    }

    if (doctypeNode) {
      doctypeNode.data = data;
      doctypeNode['x-name'] = name;
      doctypeNode['x-publicId'] = publicId;
      doctypeNode['x-systemId'] = systemId;
    } else {
      appendChild(document, new Node({
        type: 'directive',
        name: '!doctype',
        data: data,
        'x-name': name,
        'x-publicId': publicId,
        'x-systemId': systemId
      }));
    }
  };

  exports.setDocumentMode = function (document, mode) {
    document['x-mode'] = mode;
  };

  exports.getDocumentMode = function (document) {
    return document['x-mode'];
  };

  exports.detachNode = function (node) {
    if (node.parent) {
      var idx = node.parent.children.indexOf(node),
          prev = node.prev,
          next = node.next;
      node.prev = null;
      node.next = null;
      if (prev) prev.next = next;
      if (next) next.prev = prev;
      node.parent.children.splice(idx, 1);
      node.parent = null;
    }
  };

  exports.insertText = function (parentNode, text) {
    var lastChild = parentNode.children[parentNode.children.length - 1];
    if (lastChild && lastChild.type === 'text') lastChild.data += text;else appendChild(parentNode, createTextNode(text));
  };

  exports.insertTextBefore = function (parentNode, text, referenceNode) {
    var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
    if (prevNode && prevNode.type === 'text') prevNode.data += text;else insertBefore(parentNode, createTextNode(text), referenceNode);
  };

  exports.adoptAttributes = function (recipient, attrs) {
    for (var i = 0; i < attrs.length; i++) {
      var attrName = attrs[i].name;

      if (typeof recipient.attribs[attrName] === 'undefined') {
        recipient.attribs[attrName] = attrs[i].value;
        recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
        recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
      }
    }
  }; //Tree traversing


  exports.getFirstChild = function (node) {
    return node.children[0];
  };

  exports.getChildNodes = function (node) {
    return node.children;
  };

  exports.getParentNode = function (node) {
    return node.parent;
  };

  exports.getAttrList = function (element) {
    var attrList = [];

    for (var name in element.attribs) {
      attrList.push({
        name: name,
        value: element.attribs[name],
        namespace: element['x-attribsNamespace'][name],
        prefix: element['x-attribsPrefix'][name]
      });
    }

    return attrList;
  }; //Node data


  exports.getTagName = function (element) {
    return element.name;
  };

  exports.getNamespaceURI = function (element) {
    return element.namespace;
  };

  exports.getTextNodeContent = function (textNode) {
    return textNode.data;
  };

  exports.getCommentNodeContent = function (commentNode) {
    return commentNode.data;
  };

  exports.getDocumentTypeNodeName = function (doctypeNode) {
    return doctypeNode['x-name'];
  };

  exports.getDocumentTypeNodePublicId = function (doctypeNode) {
    return doctypeNode['x-publicId'];
  };

  exports.getDocumentTypeNodeSystemId = function (doctypeNode) {
    return doctypeNode['x-systemId'];
  }; //Node types


  exports.isTextNode = function (node) {
    return node.type === 'text';
  };

  exports.isCommentNode = function (node) {
    return node.type === 'comment';
  };

  exports.isDocumentTypeNode = function (node) {
    return node.type === 'directive' && node.name === '!doctype';
  };

  exports.isElementNode = function (node) {
    return !!node.attribs;
  };
  });

  var parser_stream = createCommonjsModule(function (module) {

  var WritableStream = require$$0__default$1['default'].Writable,
      inherits = require$$0__default['default'].inherits;

  var ParserStream = module.exports = function (options) {
    WritableStream.call(this);
    this.parser = new parser(options);
    this.lastChunkWritten = false;
    this.writeCallback = null;
    this.pausedByScript = false;
    this.document = this.parser.treeAdapter.createDocument();
    this.pendingHtmlInsertions = [];
    this._resume = this._resume.bind(this);
    this._documentWrite = this._documentWrite.bind(this);
    this._scriptHandler = this._scriptHandler.bind(this);

    this.parser._bootstrap(this.document, null);
  };

  inherits(ParserStream, WritableStream); //WritableStream implementation

  ParserStream.prototype._write = function (chunk, encoding, callback) {
    this.writeCallback = callback;
    this.parser.tokenizer.write(chunk.toString('utf8'), this.lastChunkWritten);

    this._runParsingLoop();
  };

  ParserStream.prototype.end = function (chunk, encoding, callback) {
    this.lastChunkWritten = true;
    WritableStream.prototype.end.call(this, chunk || '', encoding, callback);
  }; //Scriptable parser implementation


  ParserStream.prototype._runParsingLoop = function () {
    this.parser.runParsingLoopForCurrentChunk(this.writeCallback, this._scriptHandler);
  };

  ParserStream.prototype._resume = function () {
    if (!this.pausedByScript) throw new Error('Parser was already resumed');

    while (this.pendingHtmlInsertions.length) {
      var html = this.pendingHtmlInsertions.pop();
      this.parser.tokenizer.insertHtmlAtCurrentPos(html);
    }

    this.pausedByScript = false; //NOTE: keep parsing if we don't wait for the next input chunk

    if (this.parser.tokenizer.active) this._runParsingLoop();
  };

  ParserStream.prototype._documentWrite = function (html) {
    if (!this.parser.stopped) this.pendingHtmlInsertions.push(html);
  };

  ParserStream.prototype._scriptHandler = function (scriptElement) {
    if (this.listeners('script').length) {
      this.pausedByScript = true;
      this.emit('script', scriptElement, this._documentWrite, this._resume);
    } else this._runParsingLoop();
  };
  });

  var plain_text_conversion_stream = createCommonjsModule(function (module) {

  var inherits = require$$0__default['default'].inherits,
      $ = html.TAG_NAMES;

  var PlainTextConversionStream = module.exports = function (options) {
    parser_stream.call(this, options); // NOTE: see https://html.spec.whatwg.org/#read-text

    this.parser._insertFakeElement($.HTML);

    this.parser._insertFakeElement($.HEAD);

    this.parser.openElements.pop();

    this.parser._insertFakeElement($.BODY);

    this.parser._insertFakeElement($.PRE);

    this.parser.treeAdapter.insertText(this.parser.openElements.current, '\n');
    this.parser.switchToPlaintextParsing();
  };

  inherits(PlainTextConversionStream, parser_stream);
  });

  var serializer_stream = createCommonjsModule(function (module) {

  var ReadableStream = require$$0__default$1['default'].Readable,
      inherits = require$$0__default['default'].inherits;

  var SerializerStream = module.exports = function (node, options) {
    ReadableStream.call(this);
    this.serializer = new serializer(node, options);
    Object.defineProperty(this.serializer, 'html', {
      //NOTE: To make `+=` concat operator work properly we define
      //getter which always returns empty string
      get: function get() {
        return '';
      },
      set: this.push.bind(this)
    });
  };

  inherits(SerializerStream, ReadableStream); //Readable stream implementation

  SerializerStream.prototype._read = function () {
    this.serializer.serialize();
    this.push(null);
  };
  });

  var dev_null_stream = createCommonjsModule(function (module) {

  var WritableStream = require$$0__default$1['default'].Writable;

  var DevNullStream = module.exports = function () {
    WritableStream.call(this);
  };

  require$$0__default['default'].inherits(DevNullStream, WritableStream);

  DevNullStream.prototype._write = function (chunk, encoding, cb) {
    cb();
  };
  });

  var parser_feedback_simulator = createCommonjsModule(function (module) {

   //Aliases


  var $ = html.TAG_NAMES,
      NS = html.NAMESPACES; //ParserFeedbackSimulator
  //Simulates adjustment of the Tokenizer which performed by standard parser during tree construction.

  var ParserFeedbackSimulator = module.exports = function (tokenizer) {
    this.tokenizer = tokenizer;
    this.namespaceStack = [];
    this.namespaceStackTop = -1;

    this._enterNamespace(NS.HTML);
  };

  ParserFeedbackSimulator.prototype.getNextToken = function () {
    var token = this.tokenizer.getNextToken();
    if (token.type === tokenizer.START_TAG_TOKEN) this._handleStartTagToken(token);else if (token.type === tokenizer.END_TAG_TOKEN) this._handleEndTagToken(token);else if (token.type === tokenizer.NULL_CHARACTER_TOKEN && this.inForeignContent) {
      token.type = tokenizer.CHARACTER_TOKEN;
      token.chars = unicode.REPLACEMENT_CHARACTER;
    } else if (this.skipNextNewLine) {
      if (token.type !== tokenizer.HIBERNATION_TOKEN) this.skipNextNewLine = false;

      if (token.type === tokenizer.WHITESPACE_CHARACTER_TOKEN && token.chars[0] === '\n') {
        if (token.chars.length === 1) return this.getNextToken();
        token.chars = token.chars.substr(1);
      }
    }
    return token;
  }; //Namespace stack mutations


  ParserFeedbackSimulator.prototype._enterNamespace = function (namespace) {
    this.namespaceStackTop++;
    this.namespaceStack.push(namespace);
    this.inForeignContent = namespace !== NS.HTML;
    this.currentNamespace = namespace;
    this.tokenizer.allowCDATA = this.inForeignContent;
  };

  ParserFeedbackSimulator.prototype._leaveCurrentNamespace = function () {
    this.namespaceStackTop--;
    this.namespaceStack.pop();
    this.currentNamespace = this.namespaceStack[this.namespaceStackTop];
    this.inForeignContent = this.currentNamespace !== NS.HTML;
    this.tokenizer.allowCDATA = this.inForeignContent;
  }; //Token handlers


  ParserFeedbackSimulator.prototype._ensureTokenizerMode = function (tn) {
    if (tn === $.TEXTAREA || tn === $.TITLE) this.tokenizer.state = tokenizer.MODE.RCDATA;else if (tn === $.PLAINTEXT) this.tokenizer.state = tokenizer.MODE.PLAINTEXT;else if (tn === $.SCRIPT) this.tokenizer.state = tokenizer.MODE.SCRIPT_DATA;else if (tn === $.STYLE || tn === $.IFRAME || tn === $.XMP || tn === $.NOEMBED || tn === $.NOFRAMES || tn === $.NOSCRIPT) this.tokenizer.state = tokenizer.MODE.RAWTEXT;
  };

  ParserFeedbackSimulator.prototype._handleStartTagToken = function (token) {
    var tn = token.tagName;
    if (tn === $.SVG) this._enterNamespace(NS.SVG);else if (tn === $.MATH) this._enterNamespace(NS.MATHML);

    if (this.inForeignContent) {
      if (foreign_content.causesExit(token)) {
        this._leaveCurrentNamespace();

        return;
      }

      var currentNs = this.currentNamespace;
      if (currentNs === NS.MATHML) foreign_content.adjustTokenMathMLAttrs(token);else if (currentNs === NS.SVG) {
        foreign_content.adjustTokenSVGTagName(token);
        foreign_content.adjustTokenSVGAttrs(token);
      }
      foreign_content.adjustTokenXMLAttrs(token);
      tn = token.tagName;
      if (!token.selfClosing && foreign_content.isIntegrationPoint(tn, currentNs, token.attrs)) this._enterNamespace(NS.HTML);
    } else {
      if (tn === $.PRE || tn === $.TEXTAREA || tn === $.LISTING) this.skipNextNewLine = true;else if (tn === $.IMAGE) token.tagName = $.IMG;

      this._ensureTokenizerMode(tn);
    }
  };

  ParserFeedbackSimulator.prototype._handleEndTagToken = function (token) {
    var tn = token.tagName;

    if (!this.inForeignContent) {
      var previousNs = this.namespaceStack[this.namespaceStackTop - 1];
      if (previousNs === NS.SVG && foreign_content.SVG_TAG_NAMES_ADJUSTMENT_MAP[tn]) tn = foreign_content.SVG_TAG_NAMES_ADJUSTMENT_MAP[tn]; //NOTE: check for exit from integration point

      if (foreign_content.isIntegrationPoint(tn, previousNs, token.attrs)) this._leaveCurrentNamespace();
    } else if (tn === $.SVG && this.currentNamespace === NS.SVG || tn === $.MATH && this.currentNamespace === NS.MATHML) this._leaveCurrentNamespace(); // NOTE: adjust end tag name as well for consistency


    if (this.currentNamespace === NS.SVG) foreign_content.adjustTokenSVGTagName(token);
  };
  });

  var sax = createCommonjsModule(function (module) {

  var TransformStream = require$$0__default$1['default'].Transform,
      inherits = require$$0__default['default'].inherits;

  var DEFAULT_OPTIONS = {
    locationInfo: false
  };

  var SAXParser = module.exports = function (options) {
    TransformStream.call(this);
    this.options = merge_options(DEFAULT_OPTIONS, options);
    this.tokenizer = new tokenizer(options);
    if (this.options.locationInfo) new tokenizer_mixin(this.tokenizer);
    this.parserFeedbackSimulator = new parser_feedback_simulator(this.tokenizer);
    this.pendingText = null;
    this.currentTokenLocation = void 0;
    this.lastChunkWritten = false;
    this.stopped = false; // NOTE: always pipe stream to the /dev/null stream to avoid
    // `highWaterMark` hit even if we don't have consumers.
    // (see: https://github.com/inikulin/parse5/issues/97#issuecomment-171940774)

    this.pipe(new dev_null_stream());
  };

  inherits(SAXParser, TransformStream); //TransformStream implementation

  SAXParser.prototype._transform = function (chunk, encoding, callback) {
    if (!this.stopped) {
      this.tokenizer.write(chunk.toString('utf8'), this.lastChunkWritten);

      this._runParsingLoop();
    }

    this.push(chunk);
    callback();
  };

  SAXParser.prototype._flush = function (callback) {
    callback();
  };

  SAXParser.prototype.end = function (chunk, encoding, callback) {
    this.lastChunkWritten = true;
    TransformStream.prototype.end.call(this, chunk, encoding, callback);
  };

  SAXParser.prototype.stop = function () {
    this.stopped = true;
  }; //Internals


  SAXParser.prototype._runParsingLoop = function () {
    do {
      var token = this.parserFeedbackSimulator.getNextToken();
      if (token.type === tokenizer.HIBERNATION_TOKEN) break;

      if (token.type === tokenizer.CHARACTER_TOKEN || token.type === tokenizer.WHITESPACE_CHARACTER_TOKEN || token.type === tokenizer.NULL_CHARACTER_TOKEN) {
        if (this.options.locationInfo) {
          if (this.pendingText === null) this.currentTokenLocation = token.location;else this.currentTokenLocation.endOffset = token.location.endOffset;
        }

        this.pendingText = (this.pendingText || '') + token.chars;
      } else {
        this._emitPendingText();

        this._handleToken(token);
      }
    } while (!this.stopped && token.type !== tokenizer.EOF_TOKEN);
  };

  SAXParser.prototype._handleToken = function (token) {
    if (this.options.locationInfo) this.currentTokenLocation = token.location;
    if (token.type === tokenizer.START_TAG_TOKEN) this.emit('startTag', token.tagName, token.attrs, token.selfClosing, this.currentTokenLocation);else if (token.type === tokenizer.END_TAG_TOKEN) this.emit('endTag', token.tagName, this.currentTokenLocation);else if (token.type === tokenizer.COMMENT_TOKEN) this.emit('comment', token.data, this.currentTokenLocation);else if (token.type === tokenizer.DOCTYPE_TOKEN) this.emit('doctype', token.name, token.publicId, token.systemId, this.currentTokenLocation);
  };

  SAXParser.prototype._emitPendingText = function () {
    if (this.pendingText !== null) {
      this.emit('text', this.pendingText, this.currentTokenLocation);
      this.pendingText = null;
    }
  };
  });

  // Shorthands


  var parse = function parse(html, options) {
    var parser$1 = new parser(options);
    return parser$1.parse(html);
  };

  var parseFragment = function parseFragment(fragmentContext, html, options) {
    if (typeof fragmentContext === 'string') {
      options = html;
      html = fragmentContext;
      fragmentContext = null;
    }

    var parser$1 = new parser(options);
    return parser$1.parseFragment(html, fragmentContext);
  };

  var serialize = function (node, options) {
    var serializer$1 = new serializer(node, options);
    return serializer$1.serialize();
  }; // Tree adapters


  var treeAdapters = {
    "default": _default,
    htmlparser2: htmlparser2
  }; // Streaming

  var ParserStream = parser_stream;
  var PlainTextConversionStream = plain_text_conversion_stream;
  var SerializerStream = serializer_stream;
  var SAXParser = sax;

  var lib$3 = {
  	parse: parse,
  	parseFragment: parseFragment,
  	serialize: serialize,
  	treeAdapters: treeAdapters,
  	ParserStream: ParserStream,
  	PlainTextConversionStream: PlainTextConversionStream,
  	SerializerStream: SerializerStream,
  	SAXParser: SAXParser
  };

  var parse$1 = createCommonjsModule(function (module, exports) {
  /*
    Module Dependencies
  */

  /*
    Parser
  */


  exports = module.exports = function (content, options, isDocument) {
    var dom = exports.evaluate(content, options, isDocument),
        // Generic root element
    root = exports.evaluate('<root></root>', options, false)[0];
    root.type = 'root';
    root.parent = null; // Update the dom using the root

    exports.update(dom, root);
    return root;
  };

  function parseWithParse5(content, isDocument) {
    var parse = isDocument ? lib$3.parse : lib$3.parseFragment,
        root = parse(content, {
      treeAdapter: lib$3.treeAdapters.htmlparser2
    });
    return root.children;
  }

  exports.evaluate = function (content, options, isDocument) {
    // options = options || $.fn.options;
    var dom;
    if (Buffer.isBuffer(content)) content = content.toString();

    if (typeof content === 'string') {
      var useHtmlParser2 = options.xmlMode || options._useHtmlParser2;
      dom = useHtmlParser2 ? lib$2.parseDOM(content, options) : parseWithParse5(content, isDocument);
    } else {
      dom = content;
    }

    return dom;
  };
  /*
    Update the dom structure, for one changed layer
  */


  exports.update = function (arr, parent) {
    // normalize
    if (!Array.isArray(arr)) arr = [arr]; // Update parent

    if (parent) {
      parent.children = arr;
    } else {
      parent = null;
    } // Update neighbors


    for (var i = 0; i < arr.length; i++) {
      var node = arr[i]; // Cleanly remove existing nodes from their previous structures.

      var oldParent = node.parent || node.root,
          oldSiblings = oldParent && oldParent.children;

      if (oldSiblings && oldSiblings !== arr) {
        oldSiblings.splice(oldSiblings.indexOf(node), 1);

        if (node.prev) {
          node.prev.next = node.next;
        }

        if (node.next) {
          node.next.prev = node.prev;
        }
      }

      if (parent) {
        node.prev = arr[i - 1] || null;
        node.next = arr[i + 1] || null;
      } else {
        node.prev = node.next = null;
      }

      if (parent && parent.type === 'root') {
        node.root = parent;
        node.parent = null;
      } else {
        node.root = null;
        node.parent = parent;
      }
    }

    return parent;
  }; // module.exports = $.extend(exports);
  });

  var freeGlobal = require('./_freeGlobal');
  /** Detect free variable `self`. */


  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  module.exports = root;

  var _root = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var root$1 = /*@__PURE__*/getAugmentedNamespace(_root);

  /** Built-in value references. */


  var _Symbol = root$1.Symbol;
  var _Symbol_1 = _Symbol;

  /** Used for built-in method references. */


  var objectProto = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$1 = objectProto.hasOwnProperty;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString = objectProto.toString;
  /** Built-in value references. */

  var symToStringTag = _Symbol_1 ? _Symbol_1.toStringTag : undefined;
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */

  function getRawTag(value) {
    var isOwn = hasOwnProperty$1.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }

    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var nativeObjectToString$1 = objectProto$1.toString;
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */

  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */


  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  /** Built-in value references. */

  var symToStringTag$1 = _Symbol_1 ? _Symbol_1.toStringTag : undefined;
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag$1 && symToStringTag$1 in Object(value) ? _getRawTag(value) : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = _typeof(value);

    return value != null && (type == 'object' || type == 'function');
  }

  module.exports = isObject;

  var isObject$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var isObject$2 = /*@__PURE__*/getAugmentedNamespace(isObject$1);

  /** `Object#toString` result references. */


  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';
  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */

  function isFunction(value) {
    if (!isObject$2(value)) {
      return false;
    } // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.


    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used to detect overreaching core-js shims. */


  var coreJsData = root$1['__core-js_shared__'];
  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */


  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();
  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */


  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString = funcProto.toString;
  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */


  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  /** Used to detect host constructors (Safari). */

  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  /** Used for built-in method references. */

  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;
  /** Used to resolve the decompiled source of functions. */

  var funcToString$1 = funcProto$1.toString;
  /** Used to check objects for own properties. */

  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;
  /** Used to detect if a method is native. */

  var reIsNative = RegExp('^' + funcToString$1.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */

  function baseIsNative(value) {
    if (!isObject$2(value) || _isMasked(value)) {
      return false;
    }

    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */


  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  var defineProperty = function () {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }();

  var _defineProperty = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */


  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty) {
      _defineProperty(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  var eq_1 = eq;

  /** Used for built-in method references. */


  var objectProto$3 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$3 = objectProto$3.hasOwnProperty;
  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */

  function assignValue(object, key, value) {
    var objValue = object[key];

    if (!(hasOwnProperty$3.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */


  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];
      var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }

      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }

    return object;
  }

  var _copyObject = copyObject;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0:
        return func.call(thisArg);

      case 1:
        return func.call(thisArg, args[0]);

      case 2:
        return func.call(thisArg, args[0], args[1]);

      case 3:
        return func.call(thisArg, args[0], args[1], args[2]);
    }

    return func.apply(thisArg, args);
  }

  var _apply = apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMax = Math.max;
  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */

  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function () {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }

      index = -1;
      var otherArgs = Array(start + 1);

      while (++index < start) {
        otherArgs[index] = args[index];
      }

      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function () {
      return value;
    };
  }

  var constant_1 = constant;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */


  var baseSetToString = !_defineProperty ? identity_1 : function (func, string) {
    return _defineProperty(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };
  var _baseSetToString = baseSetToString;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeNow = Date.now;
  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */

  function shortOut(func) {
    var count = 0,
        lastCalled = 0;
    return function () {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);
      lastCalled = stamp;

      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }

      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */


  var setToString = _shortOut(_baseSetToString);
  var _setToString = setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */


  function baseRest(func, start) {
    return _setToString(_overRest(func, start, identity_1), func + '');
  }

  var _baseRest = baseRest;

  var eq$1 = require('./eq'),
      isArrayLike = require('./isArrayLike'),
      isIndex = require('./_isIndex'),
      isObject$3 = require('./isObject');
  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */


  function isIterateeCall(value, index, object) {
    if (!isObject$3(object)) {
      return false;
    }

    var type = _typeof(index);

    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
      return eq$1(object[index], value);
    }

    return false;
  }

  module.exports = isIterateeCall;

  var _isIterateeCall = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var isIterateeCall$1 = /*@__PURE__*/getAugmentedNamespace(_isIterateeCall);

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */


  function createAssigner(assigner) {
    return _baseRest(function (object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;
      customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;

      if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }

      object = Object(object);

      while (++index < length) {
        var source = sources[index];

        if (source) {
          assigner(object, source, index, customizer);
        }
      }

      return object;
    });
  }

  var _createAssigner = createAssigner;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;
  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */


  function isArrayLike$1(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike$1;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;
  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$4;
    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  var _baseTimes = baseTimes;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && _typeof(value) == 'object';
  }

  module.exports = isObjectLike;

  var isObjectLike$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var isObjectLike$2 = /*@__PURE__*/getAugmentedNamespace(isObjectLike$1);

  /** `Object#toString` result references. */


  var argsTag = '[object Arguments]';
  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */

  function baseIsArguments(value) {
    return isObjectLike$2(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */


  var objectProto$5 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  /** Built-in value references. */

  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */

  var isArguments = _baseIsArguments(function () {
    return arguments;
  }()) ? _baseIsArguments : function (value) {
    return isObjectLike$2(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  var isArguments_1 = isArguments;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;
  var isArray_1 = isArray;

  var root$2 = require('./_root'),
      stubFalse = require('./stubFalse');
  /** Detect free variable `exports`. */


  var freeExports = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule = freeExports && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports = freeModule && freeModule.exports === freeExports;
  /** Built-in value references. */

  var Buffer$2 = moduleExports ? root$2.Buffer : undefined;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeIsBuffer = Buffer$2 ? Buffer$2.isBuffer : undefined;
  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */

  var isBuffer = nativeIsBuffer || stubFalse;
  module.exports = isBuffer;

  var isBuffer$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  /** Used to detect unsigned integer values. */

  var reIsUint = /^(?:0|[1-9]\d*)$/;
  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */

  function isIndex$1(value, length) {
    var type = _typeof(value);

    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  module.exports = isIndex$1;

  var _isIndex = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  /** `Object#toString` result references. */


  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  /** Used to identify `toStringTag` values of typed arrays. */

  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */

  function baseIsTypedArray(value) {
    return isObjectLike$2(value) && isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var freeGlobal$1 = require('./_freeGlobal');
  /** Detect free variable `exports`. */


  var freeExports$1 = (typeof exports === "undefined" ? "undefined" : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;
  /** Detect free variable `module`. */

  var freeModule$1 = freeExports$1 && (typeof module === "undefined" ? "undefined" : _typeof(module)) == 'object' && module && !module.nodeType && module;
  /** Detect the popular CommonJS extension `module.exports`. */

  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  /** Detect free variable `process` from Node.js. */

  var freeProcess = moduleExports$1 && freeGlobal$1.process;
  /** Used to access faster Node.js helpers. */

  var nodeUtil = function () {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule$1 && freeModule$1.require && freeModule$1.require('util').types;

      if (types) {
        return types;
      } // Legacy `process.binding('util')` for Node.js < 10.


      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;

  var _nodeUtil = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var nodeUtil$1 = /*@__PURE__*/getAugmentedNamespace(_nodeUtil);

  /* Node.js helper references. */


  var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */

  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;
  var isTypedArray_1 = isTypedArray;

  var isBuffer$2 = /*@__PURE__*/getAugmentedNamespace(isBuffer$1);

  var isIndex$2 = /*@__PURE__*/getAugmentedNamespace(_isIndex);

  /** Used for built-in method references. */


  var objectProto$6 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$5 = objectProto$6.hasOwnProperty;
  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer$2(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && ( // Safari 9 has enumerable `arguments.length` in strict mode.
      key == 'length' || // Node.js 0.10 has enumerable non-index properties on buffers.
      isBuff && (key == 'offset' || key == 'parent') || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
      isIndex$2(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeKeys = _overArg(Object.keys, Object);
  var _nativeKeys = nativeKeys;

  /** Used for built-in method references. */


  var objectProto$7 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$6 = objectProto$7.hasOwnProperty;
  /**
   * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeys(object) {
    if (!_isPrototype(object)) {
      return _nativeKeys(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$6.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeys = baseKeys;

  /**
   * Creates an array of the own enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects. See the
   * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * for more details.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keys(new Foo);
   * // => ['a', 'b'] (iteration order is not guaranteed)
   *
   * _.keys('hi');
   * // => ['0', '1']
   */


  function keys(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
  }

  var keys_1 = keys;

  /** Used for built-in method references. */


  var objectProto$8 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$7 = objectProto$8.hasOwnProperty;
  /**
   * Assigns own enumerable string keyed properties of source objects to the
   * destination object. Source objects are applied from left to right.
   * Subsequent sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object` and is loosely based on
   * [`Object.assign`](https://mdn.io/Object/assign).
   *
   * @static
   * @memberOf _
   * @since 0.10.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assignIn
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assign({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'c': 3 }
   */

  var assign = _createAssigner(function (object, source) {
    if (_isPrototype(source) || isArrayLike_1(source)) {
      _copyObject(source, keys_1(source), object);
      return;
    }

    for (var key in source) {
      if (hasOwnProperty$7.call(source, key)) {
        _assignValue(object, key, source[key]);
      }
    }
  });
  var assign_1 = assign;

  var options = createCommonjsModule(function (module, exports) {
  /*
   * Cheerio default options
   */


  exports["default"] = {
    withDomLvl1: true,
    normalizeWhitespace: false,
    xml: false,
    decodeEntities: true
  };

  exports.flatten = function (options) {
    return options && options.xml ? assign_1({
      xmlMode: true
    }, options.xml) : options;
  };
  });

  var inverseXML = getInverseObj(xmlMap),
      xmlReplacer = getInverseReplacer(inverseXML);
  var XML = getInverse(inverseXML, xmlReplacer);
  var inverseHTML = getInverseObj(entityMap),
      htmlReplacer = getInverseReplacer(inverseHTML);
  var HTML = getInverse(inverseHTML, htmlReplacer);

  function getInverseObj(obj) {
    return Object.keys(obj).sort().reduce(function (inverse, name) {
      inverse[obj[name]] = "&" + name + ";";
      return inverse;
    }, {});
  }

  function getInverseReplacer(inverse) {
    var single = [],
        multiple = [];
    Object.keys(inverse).forEach(function (k) {
      if (k.length === 1) {
        single.push("\\" + k);
      } else {
        multiple.push(k);
      }
    }); //TODO add ranges

    multiple.unshift("[" + single.join("") + "]");
    return new RegExp(multiple.join("|"), "g");
  }

  var re_nonASCII = /[^\0-\x7F]/g,
      re_astralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;

  function singleCharReplacer(c) {
    return "&#x" + c.charCodeAt(0).toString(16).toUpperCase() + ";";
  }

  function astralReplacer(c) {
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    var high = c.charCodeAt(0);
    var low = c.charCodeAt(1);
    var codePoint = (high - 0xd800) * 0x400 + low - 0xdc00 + 0x10000;
    return "&#x" + codePoint.toString(16).toUpperCase() + ";";
  }

  function getInverse(inverse, re) {
    function func(name) {
      return inverse[name];
    }

    return function (data) {
      return data.replace(re, func).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
    };
  }

  var re_xmlChars = getInverseReplacer(inverseXML);

  function escapeXML(data) {
    return data.replace(re_xmlChars, singleCharReplacer).replace(re_astralSymbols, astralReplacer).replace(re_nonASCII, singleCharReplacer);
  }

  var _escape = escapeXML;

  var encode$1 = {
  	XML: XML,
  	HTML: HTML,
  	escape: _escape
  };

  var decodeXMLStrict = getStrictDecoder(xmlMap),
      decodeHTMLStrict = getStrictDecoder(entityMap);

  function getStrictDecoder(map) {
    var keys = Object.keys(map).join("|"),
        replace = getReplacer(map);
    keys += "|#[xX][\\da-fA-F]+|#\\d+";
    var re = new RegExp("&(?:" + keys + ");", "g");
    return function (str) {
      return String(str).replace(re, replace);
    };
  }

  var decodeHTML = function () {
    var legacy = Object.keys(legacyMap).sort(sorter);
    var keys = Object.keys(entityMap).sort(sorter);

    for (var i = 0, j = 0; i < keys.length; i++) {
      if (legacy[j] === keys[i]) {
        keys[i] += ";?";
        j++;
      } else {
        keys[i] += ";";
      }
    }

    var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g"),
        replace = getReplacer(entityMap);

    function replacer(str) {
      if (str.substr(-1) !== ";") str += ";";
      return replace(str);
    } //TODO consider creating a merged map


    return function (str) {
      return String(str).replace(re, replacer);
    };
  }();

  function sorter(a, b) {
    return a < b ? 1 : -1;
  }

  function getReplacer(map) {
    return function replace(str) {
      if (str.charAt(1) === "#") {
        if (str.charAt(2) === "X" || str.charAt(2) === "x") {
          return decode_codepoint(parseInt(str.substr(3), 16));
        }

        return decode_codepoint(parseInt(str.substr(2), 10));
      }

      return map[str.slice(1, -1)];
    };
  }

  var decode$1 = {
    XML: decodeXMLStrict,
    HTML: decodeHTML,
    HTMLStrict: decodeHTMLStrict
  };

  var entities = createCommonjsModule(function (module, exports) {
  exports.decode = function (data, level) {
    return (!level || level <= 0 ? decode$1.XML : decode$1.HTML)(data);
  };

  exports.decodeStrict = function (data, level) {
    return (!level || level <= 0 ? decode$1.XML : decode$1.HTMLStrict)(data);
  };

  exports.encode = function (data, level) {
    return (!level || level <= 0 ? encode$1.XML : encode$1.HTML)(data);
  };

  exports.encodeXML = encode$1.XML;
  exports.encodeHTML4 = exports.encodeHTML5 = exports.encodeHTML = encode$1.HTML;
  exports.decodeXML = exports.decodeXMLStrict = decode$1.XML;
  exports.decodeHTML4 = exports.decodeHTML5 = exports.decodeHTML = decode$1.HTML;
  exports.decodeHTML4Strict = exports.decodeHTML5Strict = exports.decodeHTMLStrict = decode$1.HTMLStrict;
  exports.escape = encode$1.escape;
  });

  var domSerializer$1 = createCommonjsModule(function (module) {
  /*
    Module dependencies
  */




  var unencodedElements = {
    __proto__: null,
    style: true,
    script: true,
    xmp: true,
    iframe: true,
    noembed: true,
    noframes: true,
    plaintext: true,
    noscript: true
  };
  /*
    Format attributes
  */

  function formatAttrs(attributes, opts) {
    if (!attributes) return;
    var output = '',
        value; // Loop through the attributes

    for (var key in attributes) {
      value = attributes[key];

      if (output) {
        output += ' ';
      }

      output += key;

      if (value !== null && value !== '' || opts.xmlMode) {
        output += '="' + (opts.decodeEntities ? entities.encodeXML(value) : value) + '"';
      }
    }

    return output;
  }
  /*
    Self-enclosing tags (stolen from node-htmlparser)
  */


  var singleTag = {
    __proto__: null,
    area: true,
    base: true,
    basefont: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    frame: true,
    hr: true,
    img: true,
    input: true,
    isindex: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
  };

  var render = module.exports = function (dom, opts) {
    if (!Array.isArray(dom) && !dom.cheerio) dom = [dom];
    opts = opts || {};
    var output = '';

    for (var i = 0; i < dom.length; i++) {
      var elem = dom[i];
      if (elem.type === 'root') output += render(elem.children, opts);else if (domelementtype.isTag(elem)) output += renderTag(elem, opts);else if (elem.type === domelementtype.Directive) output += renderDirective(elem);else if (elem.type === domelementtype.Comment) output += renderComment(elem);else if (elem.type === domelementtype.CDATA) output += renderCdata(elem);else output += renderText(elem, opts);
    }

    return output;
  };

  function renderTag(elem, opts) {
    // Handle SVG
    if (elem.name === "svg") opts = {
      decodeEntities: opts.decodeEntities,
      xmlMode: true
    };
    var tag = '<' + elem.name,
        attribs = formatAttrs(elem.attribs, opts);

    if (attribs) {
      tag += ' ' + attribs;
    }

    if (opts.xmlMode && (!elem.children || elem.children.length === 0)) {
      tag += '/>';
    } else {
      tag += '>';

      if (elem.children) {
        tag += render(elem.children, opts);
      }

      if (!singleTag[elem.name] || opts.xmlMode) {
        tag += '</' + elem.name + '>';
      }
    }

    return tag;
  }

  function renderDirective(elem) {
    return '<' + elem.data + '>';
  }

  function renderText(elem, opts) {
    var data = elem.data || ''; // if entities weren't decoded, no need to encode them back

    if (opts.decodeEntities && !(elem.parent && elem.parent.name in unencodedElements)) {
      data = entities.encodeXML(data);
    }

    return data;
  }

  function renderCdata(elem) {
    return '<![CDATA[' + elem.children[0].data + ']]>';
  }

  function renderComment(elem) {
    return '<!--' + elem.data + '-->';
  }
  });

  /**
   * HTML Tags
   */


  var tags = {
    tag: true,
    script: true,
    style: true
  };
  /**
   * Check if the DOM element is a tag
   *
   * isTag(type) includes <script> and <style> tags
   */

  var isTag$2 = function (type) {
    if (type.type) type = type.type;
    return tags[type] || false;
  };
  /**
   * Convert a string to camel case notation.
   * @param  {String} str String to be converted.
   * @return {String}     String in camel case notation.
   */


  var camelCase = function (str) {
    return str.replace(/[_.-](\w|$)/g, function (_, x) {
      return x.toUpperCase();
    });
  };
  /**
   * Convert a string from camel case to "CSS case", where word boundaries are
   * described by hyphens ("-") and all characters are lower-case.
   * @param  {String} str String to be converted.
   * @return {string}     String in "CSS case".
   */


  var cssCase = function (str) {
    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
  };
  /**
   * Iterate over each DOM element without creating intermediary Cheerio instances.
   *
   * This is indented for use internally to avoid otherwise unnecessary memory pressure introduced
   * by _make.
   */


  var domEach = function (cheerio, fn) {
    var i = 0,
        len = cheerio.length;

    while (i < len && fn.call(cheerio, i, cheerio[i]) !== false) {
      ++i;
    }

    return cheerio;
  };
  /**
   * Create a deep copy of the given DOM structure by first rendering it to a
   * string and then parsing the resultant markup.
   *
   * @argument {Object} dom - The htmlparser2-compliant DOM structure
   * @argument {Object} options - The parsing/rendering options
   */


  var cloneDom = function (dom, options) {
    options = assign_1({}, options, {
      _useHtmlParser2: true
    });
    return parse$1(domSerializer$1(dom, options), options, false).children;
  };
  /*
   * A simple way to check for HTML strings or ID strings
   */


  var quickExpr = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
  /*
   * Check if string is HTML
   */

  var isHtml = function (str) {
    // Faster than running regex, if str starts with `<` and ends with `>`, assume it's HTML
    if (str.charAt(0) === '<' && str.charAt(str.length - 1) === '>' && str.length >= 3) return true; // Run the regex

    var match = quickExpr.exec(str);
    return !!(match && match[1]);
  };

  var utils = {
  	isTag: isTag$2,
  	camelCase: camelCase,
  	cssCase: cssCase,
  	domEach: domEach,
  	cloneDom: cloneDom,
  	isHtml: isHtml
  };

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];

    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }

    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */


  var objectProto$9 = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$8 = objectProto$9.hasOwnProperty;
  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */

  function baseKeysIn(object) {
    if (!isObject$2(object)) {
      return _nativeKeysIn(object);
    }

    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
        result.push(key);
      }
    }

    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */


  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /**
   * This method is like `_.assign` except that it iterates over own and
   * inherited source properties.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @alias extend
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.assign
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * function Bar() {
   *   this.c = 3;
   * }
   *
   * Foo.prototype.b = 2;
   * Bar.prototype.d = 4;
   *
   * _.assignIn({ 'a': 0 }, new Foo, new Bar);
   * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
   */


  var assignIn = _createAssigner(function (object, source) {
    _copyObject(source, keysIn_1(source), object);
  });
  var assignIn_1 = assignIn;

  /* Built-in method references that are verified to be native. */


  var WeakMap = _getNative(root$1, 'WeakMap');
  var _WeakMap = WeakMap;

  /** Used to store function metadata. */


  var metaMap = _WeakMap && new _WeakMap();
  var _metaMap = metaMap;

  /**
   * The base implementation of `setData` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */


  var baseSetData = !_metaMap ? identity_1 : function (func, data) {
    _metaMap.set(func, data);
    return func;
  };
  var _baseSetData = baseSetData;

  /** Built-in value references. */


  var objectCreate = Object.create;
  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */

  var baseCreate = function () {
    function object() {}

    return function (proto) {
      if (!isObject$2(proto)) {
        return {};
      }

      if (objectCreate) {
        return objectCreate(proto);
      }

      object.prototype = proto;
      var result = new object();
      object.prototype = undefined;
      return result;
    };
  }();

  var _baseCreate = baseCreate;

  /**
   * Creates a function that produces an instance of `Ctor` regardless of
   * whether it was invoked as part of a `new` expression or by `call` or `apply`.
   *
   * @private
   * @param {Function} Ctor The constructor to wrap.
   * @returns {Function} Returns the new wrapped function.
   */


  function createCtor(Ctor) {
    return function () {
      // Use a `switch` statement to work with class constructors. See
      // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
      // for more details.
      var args = arguments;

      switch (args.length) {
        case 0:
          return new Ctor();

        case 1:
          return new Ctor(args[0]);

        case 2:
          return new Ctor(args[0], args[1]);

        case 3:
          return new Ctor(args[0], args[1], args[2]);

        case 4:
          return new Ctor(args[0], args[1], args[2], args[3]);

        case 5:
          return new Ctor(args[0], args[1], args[2], args[3], args[4]);

        case 6:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);

        case 7:
          return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
      }

      var thisBinding = _baseCreate(Ctor.prototype),
          result = Ctor.apply(thisBinding, args); // Mimic the constructor's `return` behavior.
      // See https://es5.github.io/#x13.2.2 for more details.

      return isObject$2(result) ? result : thisBinding;
    };
  }

  var _createCtor = createCtor;

  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG = 1;
  /**
   * Creates a function that wraps `func` to invoke it with the optional `this`
   * binding of `thisArg`.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG,
        Ctor = _createCtor(func);

    function wrapper() {
      var fn = this && this !== root$1 && this instanceof wrapper ? Ctor : func;
      return fn.apply(isBind ? thisArg : this, arguments);
    }

    return wrapper;
  }

  var _createBind = createBind;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$1 = Math.max;
  /**
   * Creates an array that is the composition of partially applied arguments,
   * placeholders, and provided arguments into a single array of arguments.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to prepend to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */

  function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersLength = holders.length,
        leftIndex = -1,
        leftLength = partials.length,
        rangeLength = nativeMax$1(argsLength - holdersLength, 0),
        result = Array(leftLength + rangeLength),
        isUncurried = !isCurried;

    while (++leftIndex < leftLength) {
      result[leftIndex] = partials[leftIndex];
    }

    while (++argsIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[holders[argsIndex]] = args[argsIndex];
      }
    }

    while (rangeLength--) {
      result[leftIndex++] = args[argsIndex++];
    }

    return result;
  }

  var _composeArgs = composeArgs;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax$2 = Math.max;
  /**
   * This function is like `composeArgs` except that the arguments composition
   * is tailored for `_.partialRight`.
   *
   * @private
   * @param {Array} args The provided arguments.
   * @param {Array} partials The arguments to append to those provided.
   * @param {Array} holders The `partials` placeholder indexes.
   * @params {boolean} [isCurried] Specify composing for a curried function.
   * @returns {Array} Returns the new array of composed arguments.
   */

  function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1,
        argsLength = args.length,
        holdersIndex = -1,
        holdersLength = holders.length,
        rightIndex = -1,
        rightLength = partials.length,
        rangeLength = nativeMax$2(argsLength - holdersLength, 0),
        result = Array(rangeLength + rightLength),
        isUncurried = !isCurried;

    while (++argsIndex < rangeLength) {
      result[argsIndex] = args[argsIndex];
    }

    var offset = argsIndex;

    while (++rightIndex < rightLength) {
      result[offset + rightIndex] = partials[rightIndex];
    }

    while (++holdersIndex < holdersLength) {
      if (isUncurried || argsIndex < argsLength) {
        result[offset + holders[holdersIndex]] = args[argsIndex++];
      }
    }

    return result;
  }

  var _composeArgsRight = composeArgsRight;

  /**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
  function countHolders(array, placeholder) {
    var length = array.length,
        result = 0;

    while (length--) {
      if (array[length] === placeholder) {
        ++result;
      }
    }

    return result;
  }

  var _countHolders = countHolders;

  /**
   * The function whose prototype chain sequence wrappers inherit from.
   *
   * @private
   */
  function baseLodash() {// No operation performed.
  }

  var _baseLodash = baseLodash;

  /** Used as references for the maximum length and index of an array. */


  var MAX_ARRAY_LENGTH = 4294967295;
  /**
   * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
   *
   * @private
   * @constructor
   * @param {*} value The value to wrap.
   */

  function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
  } // Ensure `LazyWrapper` is an instance of `baseLodash`.


  LazyWrapper.prototype = _baseCreate(_baseLodash.prototype);
  LazyWrapper.prototype.constructor = LazyWrapper;
  var _LazyWrapper = LazyWrapper;

  /**
   * This method returns `undefined`.
   *
   * @static
   * @memberOf _
   * @since 2.3.0
   * @category Util
   * @example
   *
   * _.times(2, _.noop);
   * // => [undefined, undefined]
   */
  function noop() {// No operation performed.
  }

  var noop_1 = noop;

  /**
   * Gets metadata for `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {*} Returns the metadata for `func`.
   */


  var getData = !_metaMap ? noop_1 : function (func) {
    return _metaMap.get(func);
  };
  var _getData = getData;

  /** Used to lookup unminified function names. */
  var realNames = {};
  var _realNames = realNames;

  /** Used for built-in method references. */


  var objectProto$a = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$9 = objectProto$a.hasOwnProperty;
  /**
   * Gets the name of `func`.
   *
   * @private
   * @param {Function} func The function to query.
   * @returns {string} Returns the function name.
   */

  function getFuncName(func) {
    var result = func.name + '',
        array = _realNames[result],
        length = hasOwnProperty$9.call(_realNames, result) ? array.length : 0;

    while (length--) {
      var data = array[length],
          otherFunc = data.func;

      if (otherFunc == null || otherFunc == func) {
        return data.name;
      }
    }

    return result;
  }

  var _getFuncName = getFuncName;

  /**
   * The base constructor for creating `lodash` wrapper objects.
   *
   * @private
   * @param {*} value The value to wrap.
   * @param {boolean} [chainAll] Enable explicit method chain sequences.
   */


  function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
  }

  LodashWrapper.prototype = _baseCreate(_baseLodash.prototype);
  LodashWrapper.prototype.constructor = LodashWrapper;
  var _LodashWrapper = LodashWrapper;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));

    while (++index < length) {
      array[index] = source[index];
    }

    return array;
  }

  var _copyArray = copyArray;

  /**
   * Creates a clone of `wrapper`.
   *
   * @private
   * @param {Object} wrapper The wrapper to clone.
   * @returns {Object} Returns the cloned wrapper.
   */


  function wrapperClone(wrapper) {
    if (wrapper instanceof _LazyWrapper) {
      return wrapper.clone();
    }

    var result = new _LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = _copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
  }

  var _wrapperClone = wrapperClone;

  /** Used for built-in method references. */


  var objectProto$b = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$a = objectProto$b.hasOwnProperty;
  /**
   * Creates a `lodash` object which wraps `value` to enable implicit method
   * chain sequences. Methods that operate on and return arrays, collections,
   * and functions can be chained together. Methods that retrieve a single value
   * or may return a primitive value will automatically end the chain sequence
   * and return the unwrapped value. Otherwise, the value must be unwrapped
   * with `_#value`.
   *
   * Explicit chain sequences, which must be unwrapped with `_#value`, may be
   * enabled using `_.chain`.
   *
   * The execution of chained methods is lazy, that is, it's deferred until
   * `_#value` is implicitly or explicitly called.
   *
   * Lazy evaluation allows several methods to support shortcut fusion.
   * Shortcut fusion is an optimization to merge iteratee calls; this avoids
   * the creation of intermediate arrays and can greatly reduce the number of
   * iteratee executions. Sections of a chain sequence qualify for shortcut
   * fusion if the section is applied to an array and iteratees accept only
   * one argument. The heuristic for whether a section qualifies for shortcut
   * fusion is subject to change.
   *
   * Chaining is supported in custom builds as long as the `_#value` method is
   * directly or indirectly included in the build.
   *
   * In addition to lodash methods, wrappers have `Array` and `String` methods.
   *
   * The wrapper `Array` methods are:
   * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
   *
   * The wrapper `String` methods are:
   * `replace` and `split`
   *
   * The wrapper methods that support shortcut fusion are:
   * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
   * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
   * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
   *
   * The chainable wrapper methods are:
   * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
   * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
   * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
   * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
   * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
   * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
   * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
   * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
   * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
   * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
   * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
   * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
   * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
   * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
   * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
   * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
   * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
   * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
   * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
   * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
   * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
   * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
   * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
   * `zipObject`, `zipObjectDeep`, and `zipWith`
   *
   * The wrapper methods that are **not** chainable by default are:
   * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
   * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
   * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
   * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
   * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
   * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
   * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
   * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
   * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
   * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
   * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
   * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
   * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
   * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
   * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
   * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
   * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
   * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
   * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
   * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
   * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
   * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
   * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
   * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
   * `upperFirst`, `value`, and `words`
   *
   * @name _
   * @constructor
   * @category Seq
   * @param {*} value The value to wrap in a `lodash` instance.
   * @returns {Object} Returns the new `lodash` wrapper instance.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * var wrapped = _([1, 2, 3]);
   *
   * // Returns an unwrapped value.
   * wrapped.reduce(_.add);
   * // => 6
   *
   * // Returns a wrapped value.
   * var squares = wrapped.map(square);
   *
   * _.isArray(squares);
   * // => false
   *
   * _.isArray(squares.value());
   * // => true
   */

  function lodash(value) {
    if (isObjectLike$2(value) && !isArray_1(value) && !(value instanceof _LazyWrapper)) {
      if (value instanceof _LodashWrapper) {
        return value;
      }

      if (hasOwnProperty$a.call(value, '__wrapped__')) {
        return _wrapperClone(value);
      }
    }

    return new _LodashWrapper(value);
  } // Ensure wrappers are instances of `baseLodash`.


  lodash.prototype = _baseLodash.prototype;
  lodash.prototype.constructor = lodash;
  var wrapperLodash = lodash;

  /**
   * Checks if `func` has a lazy counterpart.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
   *  else `false`.
   */


  function isLaziable(func) {
    var funcName = _getFuncName(func),
        other = wrapperLodash[funcName];

    if (typeof other != 'function' || !(funcName in _LazyWrapper.prototype)) {
      return false;
    }

    if (func === other) {
      return true;
    }

    var data = _getData(other);
    return !!data && func === data[0];
  }

  var _isLaziable = isLaziable;

  /**
   * Sets metadata for `func`.
   *
   * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
   * period of time, it will trip its breaker and transition to an identity
   * function to avoid garbage collection pauses in V8. See
   * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
   * for more details.
   *
   * @private
   * @param {Function} func The function to associate metadata with.
   * @param {*} data The metadata.
   * @returns {Function} Returns `func`.
   */


  var setData = _shortOut(_baseSetData);
  var _setData = setData;

  /** Used to match wrap detail comments. */
  var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
      reSplitDetails = /,? & /;
  /**
   * Extracts wrapper details from the `source` body comment.
   *
   * @private
   * @param {string} source The source to inspect.
   * @returns {Array} Returns the wrapper details.
   */

  function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
  }

  var _getWrapDetails = getWrapDetails;

  /** Used to match wrap detail comments. */
  var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
  /**
   * Inserts wrapper `details` in a comment at the top of the `source` body.
   *
   * @private
   * @param {string} source The source to modify.
   * @returns {Array} details The details to insert.
   * @returns {string} Returns the modified source.
   */

  function insertWrapDetails(source, details) {
    var length = details.length;

    if (!length) {
      return source;
    }

    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
    details = details.join(length > 2 ? ', ' : ' ');
    return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
  }

  var _insertWrapDetails = insertWrapDetails;

  /**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
  function arrayEach(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (iteratee(array[index], index, array) === false) {
        break;
      }
    }

    return array;
  }

  var _arrayEach = arrayEach;

  /**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length,
        index = fromIndex + (fromRight ? 1 : -1);

    while (fromRight ? index-- : ++index < length) {
      if (predicate(array[index], index, array)) {
        return index;
      }
    }

    return -1;
  }

  var _baseFindIndex = baseFindIndex;

  /**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
  function baseIsNaN(value) {
    return value !== value;
  }

  var _baseIsNaN = baseIsNaN;

  /**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1,
        length = array.length;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }

    return -1;
  }

  var _strictIndexOf = strictIndexOf;

  /**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */


  function baseIndexOf(array, value, fromIndex) {
    return value === value ? _strictIndexOf(array, value, fromIndex) : _baseFindIndex(array, _baseIsNaN, fromIndex);
  }

  var _baseIndexOf = baseIndexOf;

  /**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */


  function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && _baseIndexOf(array, value, 0) > -1;
  }

  var _arrayIncludes = arrayIncludes;

  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG$1 = 1,
      WRAP_BIND_KEY_FLAG = 2,
      WRAP_CURRY_FLAG = 8,
      WRAP_CURRY_RIGHT_FLAG = 16,
      WRAP_PARTIAL_FLAG = 32,
      WRAP_PARTIAL_RIGHT_FLAG = 64,
      WRAP_ARY_FLAG = 128,
      WRAP_REARG_FLAG = 256,
      WRAP_FLIP_FLAG = 512;
  /** Used to associate wrap methods with their bit flags. */

  var wrapFlags = [['ary', WRAP_ARY_FLAG], ['bind', WRAP_BIND_FLAG$1], ['bindKey', WRAP_BIND_KEY_FLAG], ['curry', WRAP_CURRY_FLAG], ['curryRight', WRAP_CURRY_RIGHT_FLAG], ['flip', WRAP_FLIP_FLAG], ['partial', WRAP_PARTIAL_FLAG], ['partialRight', WRAP_PARTIAL_RIGHT_FLAG], ['rearg', WRAP_REARG_FLAG]];
  /**
   * Updates wrapper `details` based on `bitmask` flags.
   *
   * @private
   * @returns {Array} details The details to modify.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Array} Returns `details`.
   */

  function updateWrapDetails(details, bitmask) {
    _arrayEach(wrapFlags, function (pair) {
      var value = '_.' + pair[0];

      if (bitmask & pair[1] && !_arrayIncludes(details, value)) {
        details.push(value);
      }
    });
    return details.sort();
  }

  var _updateWrapDetails = updateWrapDetails;

  /**
   * Sets the `toString` method of `wrapper` to mimic the source of `reference`
   * with wrapper details in a comment at the top of the source body.
   *
   * @private
   * @param {Function} wrapper The function to modify.
   * @param {Function} reference The reference function.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @returns {Function} Returns `wrapper`.
   */


  function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + '';
    return _setToString(wrapper, _insertWrapDetails(source, _updateWrapDetails(_getWrapDetails(source), bitmask)));
  }

  var _setWrapToString = setWrapToString;

  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG$2 = 1,
      WRAP_BIND_KEY_FLAG$1 = 2,
      WRAP_CURRY_BOUND_FLAG = 4,
      WRAP_CURRY_FLAG$1 = 8,
      WRAP_PARTIAL_FLAG$1 = 32,
      WRAP_PARTIAL_RIGHT_FLAG$1 = 64;
  /**
   * Creates a function that wraps `func` to continue currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {Function} wrapFunc The function to create the `func` wrapper.
   * @param {*} placeholder The placeholder value.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
    var isCurry = bitmask & WRAP_CURRY_FLAG$1,
        newHolders = isCurry ? holders : undefined,
        newHoldersRight = isCurry ? undefined : holders,
        newPartials = isCurry ? partials : undefined,
        newPartialsRight = isCurry ? undefined : partials;
    bitmask |= isCurry ? WRAP_PARTIAL_FLAG$1 : WRAP_PARTIAL_RIGHT_FLAG$1;
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG$1 : WRAP_PARTIAL_FLAG$1);

    if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
      bitmask &= ~(WRAP_BIND_FLAG$2 | WRAP_BIND_KEY_FLAG$1);
    }

    var newData = [func, bitmask, thisArg, newPartials, newHolders, newPartialsRight, newHoldersRight, argPos, ary, arity];
    var result = wrapFunc.apply(undefined, newData);

    if (_isLaziable(func)) {
      _setData(result, newData);
    }

    result.placeholder = placeholder;
    return _setWrapToString(result, func, bitmask);
  }

  var _createRecurry = createRecurry;

  /**
   * Gets the argument placeholder value for `func`.
   *
   * @private
   * @param {Function} func The function to inspect.
   * @returns {*} Returns the placeholder value.
   */
  function getHolder(func) {
    var object = func;
    return object.placeholder;
  }

  var _getHolder = getHolder;

  /* Built-in method references for those with the same name as other `lodash` methods. */


  var nativeMin = Math.min;
  /**
   * Reorder `array` according to the specified indexes where the element at
   * the first index is assigned as the first element, the element at
   * the second index is assigned as the second element, and so on.
   *
   * @private
   * @param {Array} array The array to reorder.
   * @param {Array} indexes The arranged array indexes.
   * @returns {Array} Returns `array`.
   */

  function reorder(array, indexes) {
    var arrLength = array.length,
        length = nativeMin(indexes.length, arrLength),
        oldArray = _copyArray(array);

    while (length--) {
      var index = indexes[length];
      array[length] = isIndex$2(index, arrLength) ? oldArray[index] : undefined;
    }

    return array;
  }

  var _reorder = reorder;

  /** Used as the internal argument placeholder. */
  var PLACEHOLDER = '__lodash_placeholder__';
  /**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */

  function replaceHolders(array, placeholder) {
    var index = -1,
        length = array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (value === placeholder || value === PLACEHOLDER) {
        array[index] = PLACEHOLDER;
        result[resIndex++] = index;
      }
    }

    return result;
  }

  var _replaceHolders = replaceHolders;

  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG$3 = 1,
      WRAP_BIND_KEY_FLAG$2 = 2,
      WRAP_CURRY_FLAG$2 = 8,
      WRAP_CURRY_RIGHT_FLAG$1 = 16,
      WRAP_ARY_FLAG$1 = 128,
      WRAP_FLIP_FLAG$1 = 512;
  /**
   * Creates a function that wraps `func` to invoke it with optional `this`
   * binding of `thisArg`, partial application, and currying.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to prepend to those provided to
   *  the new function.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [partialsRight] The arguments to append to those provided
   *  to the new function.
   * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG$1,
        isBind = bitmask & WRAP_BIND_FLAG$3,
        isBindKey = bitmask & WRAP_BIND_KEY_FLAG$2,
        isCurried = bitmask & (WRAP_CURRY_FLAG$2 | WRAP_CURRY_RIGHT_FLAG$1),
        isFlip = bitmask & WRAP_FLIP_FLAG$1,
        Ctor = isBindKey ? undefined : _createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length;

      while (index--) {
        args[index] = arguments[index];
      }

      if (isCurried) {
        var placeholder = _getHolder(wrapper),
            holdersCount = _countHolders(args, placeholder);
      }

      if (partials) {
        args = _composeArgs(args, partials, holders, isCurried);
      }

      if (partialsRight) {
        args = _composeArgsRight(args, partialsRight, holdersRight, isCurried);
      }

      length -= holdersCount;

      if (isCurried && length < arity) {
        var newHolders = _replaceHolders(args, placeholder);
        return _createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
      }

      var thisBinding = isBind ? thisArg : this,
          fn = isBindKey ? thisBinding[func] : func;
      length = args.length;

      if (argPos) {
        args = _reorder(args, argPos);
      } else if (isFlip && length > 1) {
        args.reverse();
      }

      if (isAry && ary < length) {
        args.length = ary;
      }

      if (this && this !== root$1 && this instanceof wrapper) {
        fn = Ctor || _createCtor(fn);
      }

      return fn.apply(thisBinding, args);
    }

    return wrapper;
  }

  var _createHybrid = createHybrid;

  /**
   * Creates a function that wraps `func` to enable currying.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {number} arity The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */


  function createCurry(func, bitmask, arity) {
    var Ctor = _createCtor(func);

    function wrapper() {
      var length = arguments.length,
          args = Array(length),
          index = length,
          placeholder = _getHolder(wrapper);

      while (index--) {
        args[index] = arguments[index];
      }

      var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : _replaceHolders(args, placeholder);
      length -= holders.length;

      if (length < arity) {
        return _createRecurry(func, bitmask, _createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
      }

      var fn = this && this !== root$1 && this instanceof wrapper ? Ctor : func;
      return _apply(fn, this, args);
    }

    return wrapper;
  }

  var _createCurry = createCurry;

  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG$4 = 1;
  /**
   * Creates a function that wraps `func` to invoke it with the `this` binding
   * of `thisArg` and `partials` prepended to the arguments it receives.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} partials The arguments to prepend to those provided to
   *  the new function.
   * @returns {Function} Returns the new wrapped function.
   */

  function createPartial(func, bitmask, thisArg, partials) {
    var isBind = bitmask & WRAP_BIND_FLAG$4,
        Ctor = _createCtor(func);

    function wrapper() {
      var argsIndex = -1,
          argsLength = arguments.length,
          leftIndex = -1,
          leftLength = partials.length,
          args = Array(leftLength + argsLength),
          fn = this && this !== root$1 && this instanceof wrapper ? Ctor : func;

      while (++leftIndex < leftLength) {
        args[leftIndex] = partials[leftIndex];
      }

      while (argsLength--) {
        args[leftIndex++] = arguments[++argsIndex];
      }

      return _apply(fn, isBind ? thisArg : this, args);
    }

    return wrapper;
  }

  var _createPartial = createPartial;

  /** Used as the internal argument placeholder. */


  var PLACEHOLDER$1 = '__lodash_placeholder__';
  /** Used to compose bitmasks for function metadata. */

  var WRAP_BIND_FLAG$5 = 1,
      WRAP_BIND_KEY_FLAG$3 = 2,
      WRAP_CURRY_BOUND_FLAG$1 = 4,
      WRAP_CURRY_FLAG$3 = 8,
      WRAP_ARY_FLAG$2 = 128,
      WRAP_REARG_FLAG$1 = 256;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMin$1 = Math.min;
  /**
   * Merges the function metadata of `source` into `data`.
   *
   * Merging metadata reduces the number of wrappers used to invoke a function.
   * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
   * may be applied regardless of execution order. Methods like `_.ary` and
   * `_.rearg` modify function arguments, making the order in which they are
   * executed important, preventing the merging of metadata. However, we make
   * an exception for a safe combined case where curried functions have `_.ary`
   * and or `_.rearg` applied.
   *
   * @private
   * @param {Array} data The destination metadata.
   * @param {Array} source The source metadata.
   * @returns {Array} Returns `data`.
   */

  function mergeData(data, source) {
    var bitmask = data[1],
        srcBitmask = source[1],
        newBitmask = bitmask | srcBitmask,
        isCommon = newBitmask < (WRAP_BIND_FLAG$5 | WRAP_BIND_KEY_FLAG$3 | WRAP_ARY_FLAG$2);
    var isCombo = srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_CURRY_FLAG$3 || srcBitmask == WRAP_ARY_FLAG$2 && bitmask == WRAP_REARG_FLAG$1 && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG$2 | WRAP_REARG_FLAG$1) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG$3; // Exit early if metadata can't be merged.

    if (!(isCommon || isCombo)) {
      return data;
    } // Use source `thisArg` if available.


    if (srcBitmask & WRAP_BIND_FLAG$5) {
      data[2] = source[2]; // Set when currying a bound function.

      newBitmask |= bitmask & WRAP_BIND_FLAG$5 ? 0 : WRAP_CURRY_BOUND_FLAG$1;
    } // Compose partial arguments.


    var value = source[3];

    if (value) {
      var partials = data[3];
      data[3] = partials ? _composeArgs(partials, value, source[4]) : value;
      data[4] = partials ? _replaceHolders(data[3], PLACEHOLDER$1) : source[4];
    } // Compose partial right arguments.


    value = source[5];

    if (value) {
      partials = data[5];
      data[5] = partials ? _composeArgsRight(partials, value, source[6]) : value;
      data[6] = partials ? _replaceHolders(data[5], PLACEHOLDER$1) : source[6];
    } // Use source `argPos` if available.


    value = source[7];

    if (value) {
      data[7] = value;
    } // Use source `ary` if it's smaller.


    if (srcBitmask & WRAP_ARY_FLAG$2) {
      data[8] = data[8] == null ? source[8] : nativeMin$1(data[8], source[8]);
    } // Use source `arity` if one is not provided.


    if (data[9] == null) {
      data[9] = source[9];
    } // Use source `func` and merge bitmasks.


    data[0] = source[0];
    data[1] = newBitmask;
    return data;
  }

  var _mergeData = mergeData;

  var baseGetTag$1 = require('./_baseGetTag'),
      isObjectLike$3 = require('./isObjectLike');
  /** `Object#toString` result references. */


  var symbolTag = '[object Symbol]';
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */

  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike$3(value) && baseGetTag$1(value) == symbolTag;
  }

  module.exports = isSymbol;

  var isSymbol$1 = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var isSymbol$2 = /*@__PURE__*/getAugmentedNamespace(isSymbol$1);

  /** Used as references for various `Number` constants. */


  var NAN = 0 / 0;
  /** Used to match leading and trailing whitespace. */

  var reTrim = /^\s+|\s+$/g;
  /** Used to detect bad signed hexadecimal string values. */

  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  /** Used to detect binary string values. */

  var reIsBinary = /^0b[01]+$/i;
  /** Used to detect octal string values. */

  var reIsOctal = /^0o[0-7]+$/i;
  /** Built-in method references without a dependency on `root`. */

  var freeParseInt = parseInt;
  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */

  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol$2(value)) {
      return NAN;
    }

    if (isObject$2(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject$2(other) ? other + '' : other;
    }

    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }

    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  var toNumber_1 = toNumber;

  /** Used as references for various `Number` constants. */


  var INFINITY = 1 / 0,
      MAX_INTEGER = 1.7976931348623157e+308;
  /**
   * Converts `value` to a finite number.
   *
   * @static
   * @memberOf _
   * @since 4.12.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted number.
   * @example
   *
   * _.toFinite(3.2);
   * // => 3.2
   *
   * _.toFinite(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toFinite(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toFinite('3.2');
   * // => 3.2
   */

  function toFinite(value) {
    if (!value) {
      return value === 0 ? value : 0;
    }

    value = toNumber_1(value);

    if (value === INFINITY || value === -INFINITY) {
      var sign = value < 0 ? -1 : 1;
      return sign * MAX_INTEGER;
    }

    return value === value ? value : 0;
  }

  var toFinite_1 = toFinite;

  /**
   * Converts `value` to an integer.
   *
   * **Note:** This method is loosely based on
   * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {number} Returns the converted integer.
   * @example
   *
   * _.toInteger(3.2);
   * // => 3
   *
   * _.toInteger(Number.MIN_VALUE);
   * // => 0
   *
   * _.toInteger(Infinity);
   * // => 1.7976931348623157e+308
   *
   * _.toInteger('3.2');
   * // => 3
   */


  function toInteger(value) {
    var result = toFinite_1(value),
        remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
  }

  var toInteger_1 = toInteger;

  /** Error message constants. */


  var FUNC_ERROR_TEXT = 'Expected a function';
  /** Used to compose bitmasks for function metadata. */

  var WRAP_BIND_FLAG$6 = 1,
      WRAP_BIND_KEY_FLAG$4 = 2,
      WRAP_CURRY_FLAG$4 = 8,
      WRAP_CURRY_RIGHT_FLAG$2 = 16,
      WRAP_PARTIAL_FLAG$2 = 32,
      WRAP_PARTIAL_RIGHT_FLAG$2 = 64;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax$3 = Math.max;
  /**
   * Creates a function that either curries or invokes `func` with optional
   * `this` binding and partially applied arguments.
   *
   * @private
   * @param {Function|string} func The function or method name to wrap.
   * @param {number} bitmask The bitmask flags.
   *    1 - `_.bind`
   *    2 - `_.bindKey`
   *    4 - `_.curry` or `_.curryRight` of a bound function
   *    8 - `_.curry`
   *   16 - `_.curryRight`
   *   32 - `_.partial`
   *   64 - `_.partialRight`
   *  128 - `_.rearg`
   *  256 - `_.ary`
   *  512 - `_.flip`
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {Array} [partials] The arguments to be partially applied.
   * @param {Array} [holders] The `partials` placeholder indexes.
   * @param {Array} [argPos] The argument positions of the new function.
   * @param {number} [ary] The arity cap of `func`.
   * @param {number} [arity] The arity of `func`.
   * @returns {Function} Returns the new wrapped function.
   */

  function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG$4;

    if (!isBindKey && typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    var length = partials ? partials.length : 0;

    if (!length) {
      bitmask &= ~(WRAP_PARTIAL_FLAG$2 | WRAP_PARTIAL_RIGHT_FLAG$2);
      partials = holders = undefined;
    }

    ary = ary === undefined ? ary : nativeMax$3(toInteger_1(ary), 0);
    arity = arity === undefined ? arity : toInteger_1(arity);
    length -= holders ? holders.length : 0;

    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG$2) {
      var partialsRight = partials,
          holdersRight = holders;
      partials = holders = undefined;
    }

    var data = isBindKey ? undefined : _getData(func);
    var newData = [func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity];

    if (data) {
      _mergeData(newData, data);
    }

    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax$3(newData[9] - length, 0);

    if (!arity && bitmask & (WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2)) {
      bitmask &= ~(WRAP_CURRY_FLAG$4 | WRAP_CURRY_RIGHT_FLAG$2);
    }

    if (!bitmask || bitmask == WRAP_BIND_FLAG$6) {
      var result = _createBind(func, bitmask, thisArg);
    } else if (bitmask == WRAP_CURRY_FLAG$4 || bitmask == WRAP_CURRY_RIGHT_FLAG$2) {
      result = _createCurry(func, bitmask, arity);
    } else if ((bitmask == WRAP_PARTIAL_FLAG$2 || bitmask == (WRAP_BIND_FLAG$6 | WRAP_PARTIAL_FLAG$2)) && !holders.length) {
      result = _createPartial(func, bitmask, thisArg, partials);
    } else {
      result = _createHybrid.apply(undefined, newData);
    }

    var setter = data ? _baseSetData : _setData;
    return _setWrapToString(setter(result, newData), func, bitmask);
  }

  var _createWrap = createWrap;

  /** Used to compose bitmasks for function metadata. */


  var WRAP_BIND_FLAG$7 = 1,
      WRAP_PARTIAL_FLAG$3 = 32;
  /**
   * Creates a function that invokes `func` with the `this` binding of `thisArg`
   * and `partials` prepended to the arguments it receives.
   *
   * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
   * may be used as a placeholder for partially applied arguments.
   *
   * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
   * property of bound functions.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to bind.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {...*} [partials] The arguments to be partially applied.
   * @returns {Function} Returns the new bound function.
   * @example
   *
   * function greet(greeting, punctuation) {
   *   return greeting + ' ' + this.user + punctuation;
   * }
   *
   * var object = { 'user': 'fred' };
   *
   * var bound = _.bind(greet, object, 'hi');
   * bound('!');
   * // => 'hi fred!'
   *
   * // Bound with placeholders.
   * var bound = _.bind(greet, object, _, '!');
   * bound('hi');
   * // => 'hi fred!'
   */

  var bind = _baseRest(function (func, thisArg, partials) {
    var bitmask = WRAP_BIND_FLAG$7;

    if (partials.length) {
      var holders = _replaceHolders(partials, _getHolder(bind));
      bitmask |= WRAP_PARTIAL_FLAG$3;
    }

    return _createWrap(func, bitmask, thisArg, partials, holders);
  }); // Assign default placeholders.

  bind.placeholder = {};
  var bind_1 = bind;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function (object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];

        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }

      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */


  var baseFor = _createBaseFor();
  var _baseFor = baseFor;

  /**
   * The base implementation of `_.forOwn` without support for iteratee shorthands.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Object} Returns `object`.
   */


  function baseForOwn(object, iteratee) {
    return object && _baseFor(object, iteratee, keys_1);
  }

  var _baseForOwn = baseForOwn;

  /**
   * Creates a `baseEach` or `baseEachRight` function.
   *
   * @private
   * @param {Function} eachFunc The function to iterate over a collection.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */


  function createBaseEach(eachFunc, fromRight) {
    return function (collection, iteratee) {
      if (collection == null) {
        return collection;
      }

      if (!isArrayLike_1(collection)) {
        return eachFunc(collection, iteratee);
      }

      var length = collection.length,
          index = fromRight ? length : -1,
          iterable = Object(collection);

      while (fromRight ? index-- : ++index < length) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }

      return collection;
    };
  }

  var _createBaseEach = createBaseEach;

  /**
   * The base implementation of `_.forEach` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   */


  var baseEach = _createBaseEach(_baseForOwn);
  var _baseEach = baseEach;

  /**
   * Casts `value` to `identity` if it's not a function.
   *
   * @private
   * @param {*} value The value to inspect.
   * @returns {Function} Returns cast function.
   */


  function castFunction(value) {
    return typeof value == 'function' ? value : identity_1;
  }

  var _castFunction = castFunction;

  /**
   * Iterates over elements of `collection` and invokes `iteratee` for each element.
   * The iteratee is invoked with three arguments: (value, index|key, collection).
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * **Note:** As with other "Collections" methods, objects with a "length"
   * property are iterated like arrays. To avoid this behavior use `_.forIn`
   * or `_.forOwn` for object iteration.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @alias each
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array|Object} Returns `collection`.
   * @see _.forEachRight
   * @example
   *
   * _.forEach([1, 2], function(value) {
   *   console.log(value);
   * });
   * // => Logs `1` then `2`.
   *
   * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
   *   console.log(key);
   * });
   * // => Logs 'a' then 'b' (iteration order is not guaranteed).
   */


  function forEach(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayEach : _baseEach;
    return func(collection, _castFunction(iteratee));
  }

  var forEach_1 = forEach;

  /** Used for built-in method references. */


  var objectProto$c = Object.prototype;
  /** Used to check objects for own properties. */

  var hasOwnProperty$b = objectProto$c.hasOwnProperty;
  /**
   * Assigns own and inherited enumerable string keyed properties of source
   * objects to the destination object for all destination properties that
   * resolve to `undefined`. Source objects are applied from left to right.
   * Once a property is set, additional values of the same property are ignored.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @see _.defaultsDeep
   * @example
   *
   * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
   * // => { 'a': 1, 'b': 2 }
   */

  var defaults = _baseRest(function (object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;

    if (guard && isIterateeCall$1(sources[0], sources[1], guard)) {
      length = 1;
    }

    while (++index < length) {
      var source = sources[index];
      var props = keysIn_1(source);
      var propsIndex = -1;
      var propsLength = props.length;

      while (++propsIndex < propsLength) {
        var key = props[propsIndex];
        var value = object[key];

        if (value === undefined || eq_1(value, objectProto$c[key]) && !hasOwnProperty$b.call(object, key)) {
          object[key] = source[key];
        }
      }
    }

    return object;
  });
  var defaults_1 = defaults;

  var $ = require('../static'),
      utils$1 = require('../utils'),
      isTag$3 = utils$1.isTag,
      domEach$1 = utils$1.domEach,
      hasOwn = Object.prototype.hasOwnProperty,
      camelCase$1 = utils$1.camelCase,
      cssCase$1 = utils$1.cssCase,
      rspace = /\s+/,
      dataAttrPrefix = 'data-',
      _ = {
    forEach: require('lodash/forEach'),
    extend: require('lodash/assignIn'),
    some: require('lodash/some')
  },
      // Lookup table for coercing string data-* attributes to their corresponding
  // JavaScript primitives
  primitives = {
    "null": null,
    "true": true,
    "false": false
  },
      // Attributes that are booleans
  rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
      // Matches strings that look like JSON objects or arrays
  rbrace$2 = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

  var getAttr = function getAttr(elem, name) {
    if (!elem || !isTag$3(elem)) return;

    if (!elem.attribs) {
      elem.attribs = {};
    } // Return the entire attribs object if no attribute specified


    if (!name) {
      return elem.attribs;
    }

    if (hasOwn.call(elem.attribs, name)) {
      // Get the (decoded) attribute
      return rboolean.test(name) ? name : elem.attribs[name];
    } // Mimic the DOM and return text content as value for `option's`


    if (elem.name === 'option' && name === 'value') {
      return $.text(elem.children);
    } // Mimic DOM with default value for radios/checkboxes


    if (elem.name === 'input' && (elem.attribs.type === 'radio' || elem.attribs.type === 'checkbox') && name === 'value') {
      return 'on';
    }
  };

  var setAttr = function setAttr(el, name, value) {
    if (value === null) {
      removeAttribute(el, name);
    } else {
      el.attribs[name] = value + '';
    }
  };

  exports.attr = function (name, value) {
    // Set the value (with attr map support)
    if (_typeof(name) === 'object' || value !== undefined) {
      if (typeof value === 'function') {
        return domEach$1(this, function (i, el) {
          setAttr(el, name, value.call(el, i, el.attribs[name]));
        });
      }

      return domEach$1(this, function (i, el) {
        if (!isTag$3(el)) return;

        if (_typeof(name) === 'object') {
          _.forEach(name, function (objValue, objName) {
            setAttr(el, objName, objValue);
          });
        } else {
          setAttr(el, name, value);
        }
      });
    }

    return getAttr(this[0], name);
  };

  var getProp = function getProp(el, name) {
    if (!el || !isTag$3(el)) return;
    return hasOwn.call(el, name) ? el[name] : rboolean.test(name) ? getAttr(el, name) !== undefined : getAttr(el, name);
  };

  var setProp = function setProp(el, name, value) {
    el[name] = rboolean.test(name) ? !!value : value;
  };

  exports.prop = function (name, value) {
    var i = 0,
        property;

    if (typeof name === 'string' && value === undefined) {
      switch (name) {
        case 'style':
          property = this.css();

          _.forEach(property, function (v, p) {
            property[i++] = p;
          });

          property.length = i;
          break;

        case 'tagName':
        case 'nodeName':
          property = this[0].name.toUpperCase();
          break;

        default:
          property = getProp(this[0], name);
      }

      return property;
    }

    if (_typeof(name) === 'object' || value !== undefined) {
      if (typeof value === 'function') {
        return domEach$1(this, function (j, el) {
          setProp(el, name, value.call(el, j, getProp(el, name)));
        });
      }

      return domEach$1(this, function (__, el) {
        if (!isTag$3(el)) return;

        if (_typeof(name) === 'object') {
          _.forEach(name, function (val, key) {
            setProp(el, key, val);
          });
        } else {
          setProp(el, name, value);
        }
      });
    }
  };

  var setData$1 = function setData(el, name, value) {
    if (!el.data) {
      el.data = {};
    }

    if (_typeof(name) === 'object') return _.extend(el.data, name);

    if (typeof name === 'string' && value !== undefined) {
      el.data[name] = value;
    }
  }; // Read the specified attribute from the equivalent HTML5 `data-*` attribute,
  // and (if present) cache the value in the node's internal data store. If no
  // attribute name is specified, read *all* HTML5 `data-*` attributes in this
  // manner.


  var readData = function readData(el, name) {
    var readAll = arguments.length === 1;
    var domNames, domName, jsNames, jsName, value, idx, length;

    if (readAll) {
      domNames = Object.keys(el.attribs).filter(function (attrName) {
        return attrName.slice(0, dataAttrPrefix.length) === dataAttrPrefix;
      });
      jsNames = domNames.map(function (_domName) {
        return camelCase$1(_domName.slice(dataAttrPrefix.length));
      });
    } else {
      domNames = [dataAttrPrefix + cssCase$1(name)];
      jsNames = [name];
    }

    for (idx = 0, length = domNames.length; idx < length; ++idx) {
      domName = domNames[idx];
      jsName = jsNames[idx];

      if (hasOwn.call(el.attribs, domName)) {
        value = el.attribs[domName];

        if (hasOwn.call(primitives, value)) {
          value = primitives[value];
        } else if (value === String(Number(value))) {
          value = Number(value);
        } else if (rbrace$2.test(value)) {
          try {
            value = JSON.parse(value);
          } catch (e) {}
        }

        el.data[jsName] = value;
      }
    }

    return readAll ? el.data : value;
  };

  exports.data = function (name, value) {
    var elem = this[0];
    if (!elem || !isTag$3(elem)) return;

    if (!elem.data) {
      elem.data = {};
    } // Return the entire data object if no data specified


    if (!name) {
      return readData(elem);
    } // Set the value (with attr map support)


    if (_typeof(name) === 'object' || value !== undefined) {
      domEach$1(this, function (i, el) {
        setData$1(el, name, value);
      });
      return this;
    } else if (hasOwn.call(elem.data, name)) {
      return elem.data[name];
    }

    return readData(elem, name);
  };
  /**
   * Get the value of an element
   */


  exports.val = function (value) {
    var querying = arguments.length === 0,
        element = this[0];
    if (!element) return;

    switch (element.name) {
      case 'textarea':
        return this.text(value);

      case 'input':
        switch (this.attr('type')) {
          case 'radio':
            if (querying) {
              return this.attr('value');
            } else {
              this.attr('value', value);
              return this;
            }

          default:
            return this.attr('value', value);
        }

      case 'select':
        var option = this.find('option:selected'),
            returnValue;
        if (option === undefined) return undefined;

        if (!querying) {
          if (!hasOwn.call(this.attr(), 'multiple') && _typeof(value) == 'object') {
            return this;
          }

          if (_typeof(value) != 'object') {
            value = [value];
          }

          this.find('option').removeAttr('selected');

          for (var i = 0; i < value.length; i++) {
            this.find('option[value="' + value[i] + '"]').attr('selected', '');
          }

          return this;
        }

        returnValue = option.attr('value');

        if (hasOwn.call(this.attr(), 'multiple')) {
          returnValue = [];
          domEach$1(option, function (__, el) {
            returnValue.push(getAttr(el, 'value'));
          });
        }

        return returnValue;

      case 'option':
        if (!querying) {
          this.attr('value', value);
          return this;
        }

        return this.attr('value');
    }
  };
  /**
   * Remove an attribute
   */


  var removeAttribute = function removeAttribute(elem, name) {
    if (!elem.attribs || !hasOwn.call(elem.attribs, name)) return;
    delete elem.attribs[name];
  };

  exports.removeAttr = function (name) {
    domEach$1(this, function (i, elem) {
      removeAttribute(elem, name);
    });
    return this;
  };

  exports.hasClass = function (className) {
    return _.some(this, function (elem) {
      var attrs = elem.attribs,
          clazz = attrs && attrs['class'],
          idx = -1,
          end;

      if (clazz && className.length) {
        while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
          end = idx + className.length;

          if ((idx === 0 || rspace.test(clazz[idx - 1])) && (end === clazz.length || rspace.test(clazz[end]))) {
            return true;
          }
        }
      }
    });
  };

  exports.addClass = function (value) {
    // Support functions
    if (typeof value === 'function') {
      return domEach$1(this, function (i, el) {
        var className = el.attribs['class'] || '';
        exports.addClass.call([el], value.call(el, i, className));
      });
    } // Return if no value or not a string or function


    if (!value || typeof value !== 'string') return this;
    var classNames = value.split(rspace),
        numElements = this.length;

    for (var i = 0; i < numElements; i++) {
      // If selected element isn't a tag, move on
      if (!isTag$3(this[i])) continue; // If we don't already have classes

      var className = getAttr(this[i], 'class'),
          numClasses,
          setClass;

      if (!className) {
        setAttr(this[i], 'class', classNames.join(' ').trim());
      } else {
        setClass = ' ' + className + ' ';
        numClasses = classNames.length; // Check if class already exists

        for (var j = 0; j < numClasses; j++) {
          var appendClass = classNames[j] + ' ';
          if (setClass.indexOf(' ' + appendClass) < 0) setClass += appendClass;
        }

        setAttr(this[i], 'class', setClass.trim());
      }
    }

    return this;
  };

  var splitClass = function splitClass(className) {
    return className ? className.trim().split(rspace) : [];
  };

  exports.removeClass = function (value) {
    var classes, numClasses, removeAll; // Handle if value is a function

    if (typeof value === 'function') {
      return domEach$1(this, function (i, el) {
        exports.removeClass.call([el], value.call(el, i, el.attribs['class'] || ''));
      });
    }

    classes = splitClass(value);
    numClasses = classes.length;
    removeAll = arguments.length === 0;
    return domEach$1(this, function (i, el) {
      if (!isTag$3(el)) return;

      if (removeAll) {
        // Short circuit the remove all case as this is the nice one
        el.attribs["class"] = '';
      } else {
        var elClasses = splitClass(el.attribs["class"]),
            index,
            changed;

        for (var j = 0; j < numClasses; j++) {
          index = elClasses.indexOf(classes[j]);

          if (index >= 0) {
            elClasses.splice(index, 1);
            changed = true; // We have to do another pass to ensure that there are not duplicate
            // classes listed

            j--;
          }
        }

        if (changed) {
          el.attribs["class"] = elClasses.join(' ');
        }
      }
    });
  };

  exports.toggleClass = function (value, stateVal) {
    // Support functions
    if (typeof value === 'function') {
      return domEach$1(this, function (i, el) {
        exports.toggleClass.call([el], value.call(el, i, el.attribs['class'] || '', stateVal), stateVal);
      });
    } // Return if no value or not a string or function


    if (!value || typeof value !== 'string') return this;
    var classNames = value.split(rspace),
        numClasses = classNames.length,
        state = typeof stateVal === 'boolean' ? stateVal ? 1 : -1 : 0,
        numElements = this.length,
        elementClasses,
        index;

    for (var i = 0; i < numElements; i++) {
      // If selected element isn't a tag, move on
      if (!isTag$3(this[i])) continue;
      elementClasses = splitClass(this[i].attribs["class"]); // Check if class already exists

      for (var j = 0; j < numClasses; j++) {
        // Check if the class name is currently defined
        index = elementClasses.indexOf(classNames[j]); // Add if stateValue === true or we are toggling and there is no value

        if (state >= 0 && index < 0) {
          elementClasses.push(classNames[j]);
        } else if (state <= 0 && index >= 0) {
          // Otherwise remove but only if the item exists
          elementClasses.splice(index, 1);
        }
      }

      this[i].attribs["class"] = elementClasses.join(' ');
    }

    return this;
  };

  exports.is = function (selector) {
    if (selector) {
      return this.filter(selector).length > 0;
    }

    return false;
  };

  var attributes = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  var isTag$4 = domelementtype.isTag;

  var stringify$1 = {
    getInnerHTML: getInnerHTML$1,
    getOuterHTML: domSerializer,
    getText: getText$1
  };

  function getInnerHTML$1(elem, opts) {
    return elem.children ? elem.children.map(function (elem) {
      return domSerializer(elem, opts);
    }).join("") : "";
  }

  function getText$1(elem) {
    if (Array.isArray(elem)) return elem.map(getText$1).join("");
    if (isTag$4(elem) || elem.type === domelementtype.CDATA) return getText$1(elem.children);
    if (elem.type === domelementtype.Text) return elem.data;
    return "";
  }

  var traversal$1 = createCommonjsModule(function (module, exports) {
  var getChildren = exports.getChildren = function (elem) {
    return elem.children;
  };

  var getParent = exports.getParent = function (elem) {
    return elem.parent;
  };

  exports.getSiblings = function (elem) {
    var parent = getParent(elem);
    return parent ? getChildren(parent) : [elem];
  };

  exports.getAttributeValue = function (elem, name) {
    return elem.attribs && elem.attribs[name];
  };

  exports.hasAttrib = function (elem, name) {
    return !!elem.attribs && hasOwnProperty.call(elem.attribs, name);
  };

  exports.getName = function (elem) {
    return elem.name;
  };
  });

  var removeElement$1 = function (elem) {
    if (elem.prev) elem.prev.next = elem.next;
    if (elem.next) elem.next.prev = elem.prev;

    if (elem.parent) {
      var childs = elem.parent.children;
      childs.splice(childs.lastIndexOf(elem), 1);
    }
  };

  var replaceElement$1 = function (elem, replacement) {
    var prev = replacement.prev = elem.prev;

    if (prev) {
      prev.next = replacement;
    }

    var next = replacement.next = elem.next;

    if (next) {
      next.prev = replacement;
    }

    var parent = replacement.parent = elem.parent;

    if (parent) {
      var childs = parent.children;
      childs[childs.lastIndexOf(elem)] = replacement;
    }
  };

  var appendChild$1 = function (elem, child) {
    child.parent = elem;

    if (elem.children.push(child) !== 1) {
      var sibling = elem.children[elem.children.length - 2];
      sibling.next = child;
      child.prev = sibling;
      child.next = null;
    }
  };

  var append$1 = function (elem, next) {
    var parent = elem.parent,
        currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;

    if (currNext) {
      currNext.prev = next;

      if (parent) {
        var childs = parent.children;
        childs.splice(childs.lastIndexOf(currNext), 0, next);
      }
    } else if (parent) {
      parent.children.push(next);
    }
  };

  var prepend$1 = function (elem, prev) {
    var parent = elem.parent;

    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(elem), 0, prev);
    }

    if (elem.prev) {
      elem.prev.next = prev;
    }

    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
  };

  var manipulation$1 = {
  	removeElement: removeElement$1,
  	replaceElement: replaceElement$1,
  	appendChild: appendChild$1,
  	append: append$1,
  	prepend: prepend$1
  };

  var isTag$5 = domelementtype.isTag;

  var querying$1 = {
    filter: filter$1,
    find: find$1,
    findOneChild: findOneChild$1,
    findOne: findOne$1,
    existsOne: existsOne$1,
    findAll: findAll$1
  };

  function filter$1(test, element, recurse, limit) {
    if (!Array.isArray(element)) element = [element];

    if (typeof limit !== "number" || !isFinite(limit)) {
      limit = Infinity;
    }

    return find$1(test, element, recurse !== false, limit);
  }

  function find$1(test, elems, recurse, limit) {
    var result = [],
        childs;

    for (var i = 0, j = elems.length; i < j; i++) {
      if (test(elems[i])) {
        result.push(elems[i]);
        if (--limit <= 0) break;
      }

      childs = elems[i].children;

      if (recurse && childs && childs.length > 0) {
        childs = find$1(test, childs, recurse, limit);
        result = result.concat(childs);
        limit -= childs.length;
        if (limit <= 0) break;
      }
    }

    return result;
  }

  function findOneChild$1(test, elems) {
    for (var i = 0, l = elems.length; i < l; i++) {
      if (test(elems[i])) return elems[i];
    }

    return null;
  }

  function findOne$1(test, elems) {
    var elem = null;

    for (var i = 0, l = elems.length; i < l && !elem; i++) {
      if (!isTag$5(elems[i])) {
        continue;
      } else if (test(elems[i])) {
        elem = elems[i];
      } else if (elems[i].children.length > 0) {
        elem = findOne$1(test, elems[i].children);
      }
    }

    return elem;
  }

  function existsOne$1(test, elems) {
    for (var i = 0, l = elems.length; i < l; i++) {
      if (isTag$5(elems[i]) && (test(elems[i]) || elems[i].children.length > 0 && existsOne$1(test, elems[i].children))) {
        return true;
      }
    }

    return false;
  }

  function findAll$1(test, elems) {
    var result = [];

    for (var i = 0, j = elems.length; i < j; i++) {
      if (!isTag$5(elems[i])) continue;
      if (test(elems[i])) result.push(elems[i]);

      if (elems[i].children.length > 0) {
        result = result.concat(findAll$1(test, elems[i].children));
      }
    }

    return result;
  }

  var legacy$1 = createCommonjsModule(function (module, exports) {
  var isTag = exports.isTag = domelementtype.isTag;

  exports.testElement = function (options, element) {
    for (var key in options) {
      if (!options.hasOwnProperty(key)) ;else if (key === "tag_name") {
        if (!isTag(element) || !options.tag_name(element.name)) {
          return false;
        }
      } else if (key === "tag_type") {
        if (!options.tag_type(element.type)) return false;
      } else if (key === "tag_contains") {
        if (isTag(element) || !options.tag_contains(element.data)) {
          return false;
        }
      } else if (!element.attribs || !options[key](element.attribs[key])) {
        return false;
      }
    }

    return true;
  };

  var Checks = {
    tag_name: function tag_name(name) {
      if (typeof name === "function") {
        return function (elem) {
          return isTag(elem) && name(elem.name);
        };
      } else if (name === "*") {
        return isTag;
      } else {
        return function (elem) {
          return isTag(elem) && elem.name === name;
        };
      }
    },
    tag_type: function tag_type(type) {
      if (typeof type === "function") {
        return function (elem) {
          return type(elem.type);
        };
      } else {
        return function (elem) {
          return elem.type === type;
        };
      }
    },
    tag_contains: function tag_contains(data) {
      if (typeof data === "function") {
        return function (elem) {
          return !isTag(elem) && data(elem.data);
        };
      } else {
        return function (elem) {
          return !isTag(elem) && elem.data === data;
        };
      }
    }
  };

  function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
      return function (elem) {
        return elem.attribs && value(elem.attribs[attrib]);
      };
    } else {
      return function (elem) {
        return elem.attribs && elem.attribs[attrib] === value;
      };
    }
  }

  function combineFuncs(a, b) {
    return function (elem) {
      return a(elem) || b(elem);
    };
  }

  exports.getElements = function (options, element, recurse, limit) {
    var funcs = Object.keys(options).map(function (key) {
      var value = options[key];
      return key in Checks ? Checks[key](value) : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? [] : this.filter(funcs.reduce(combineFuncs), element, recurse, limit);
  };

  exports.getElementById = function (id, element, recurse) {
    if (!Array.isArray(element)) element = [element];
    return this.findOne(getAttribCheck("id", id), element, recurse !== false);
  };

  exports.getElementsByTagName = function (name, element, recurse, limit) {
    return this.filter(Checks.tag_name(name), element, recurse, limit);
  };

  exports.getElementsByTagType = function (type, element, recurse, limit) {
    return this.filter(Checks.tag_type(type), element, recurse, limit);
  };
  });

  var helpers$1 = createCommonjsModule(function (module, exports) {
  // removeSubsets
  // Given an array of nodes, remove any member that is contained by another.
  exports.removeSubsets = function (nodes) {
    var idx = nodes.length,
        node,
        ancestor,
        replace; // Check if each node (or one of its ancestors) is already contained in the
    // array.

    while (--idx > -1) {
      node = ancestor = nodes[idx]; // Temporarily remove the node under consideration

      nodes[idx] = null;
      replace = true;

      while (ancestor) {
        if (nodes.indexOf(ancestor) > -1) {
          replace = false;
          nodes.splice(idx, 1);
          break;
        }

        ancestor = ancestor.parent;
      } // If the node has been found to be unique, re-insert it.


      if (replace) {
        nodes[idx] = node;
      }
    }

    return nodes;
  }; // Source: http://dom.spec.whatwg.org/#dom-node-comparedocumentposition


  var POSITION = {
    DISCONNECTED: 1,
    PRECEDING: 2,
    FOLLOWING: 4,
    CONTAINS: 8,
    CONTAINED_BY: 16
  }; // Compare the position of one node against another node in any other document.
  // The return value is a bitmask with the following values:
  //
  // document order:
  // > There is an ordering, document order, defined on all the nodes in the
  // > document corresponding to the order in which the first character of the
  // > XML representation of each node occurs in the XML representation of the
  // > document after expansion of general entities. Thus, the document element
  // > node will be the first node. Element nodes occur before their children.
  // > Thus, document order orders element nodes in order of the occurrence of
  // > their start-tag in the XML (after expansion of entities). The attribute
  // > nodes of an element occur after the element and before its children. The
  // > relative order of attribute nodes is implementation-dependent./
  // Source:
  // http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
  //
  // @argument {Node} nodaA The first node to use in the comparison
  // @argument {Node} nodeB The second node to use in the comparison
  //
  // @return {Number} A bitmask describing the input nodes' relative position.
  //         See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
  //         a description of these values.

  var comparePos = exports.compareDocumentPosition = function (nodeA, nodeB) {
    var aParents = [];
    var bParents = [];
    var current, sharedParent, siblings, aSibling, bSibling, idx;

    if (nodeA === nodeB) {
      return 0;
    }

    current = nodeA;

    while (current) {
      aParents.unshift(current);
      current = current.parent;
    }

    current = nodeB;

    while (current) {
      bParents.unshift(current);
      current = current.parent;
    }

    idx = 0;

    while (aParents[idx] === bParents[idx]) {
      idx++;
    }

    if (idx === 0) {
      return POSITION.DISCONNECTED;
    }

    sharedParent = aParents[idx - 1];
    siblings = sharedParent.children;
    aSibling = aParents[idx];
    bSibling = bParents[idx];

    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
      if (sharedParent === nodeB) {
        return POSITION.FOLLOWING | POSITION.CONTAINED_BY;
      }

      return POSITION.FOLLOWING;
    } else {
      if (sharedParent === nodeA) {
        return POSITION.PRECEDING | POSITION.CONTAINS;
      }

      return POSITION.PRECEDING;
    }
  }; // Sort an array of nodes based on their relative position in the document and
  // remove any duplicate nodes. If the array contains nodes that do not belong
  // to the same document, sort order is unspecified.
  //
  // @argument {Array} nodes Array of DOM nodes
  //
  // @returns {Array} collection of unique nodes, sorted in document order


  exports.uniqueSort = function (nodes) {
    var idx = nodes.length,
        node,
        position;
    nodes = nodes.slice();

    while (--idx > -1) {
      node = nodes[idx];
      position = nodes.indexOf(node);

      if (position > -1 && position < idx) {
        nodes.splice(idx, 1);
      }
    }

    nodes.sort(function (a, b) {
      var relative = comparePos(a, b);

      if (relative & POSITION.PRECEDING) {
        return -1;
      } else if (relative & POSITION.FOLLOWING) {
        return 1;
      }

      return 0;
    });
    return nodes;
  };
  });

  var domutils$1 = createCommonjsModule(function (module) {
  var DomUtils = module.exports;
  [stringify$1, traversal$1, manipulation$1, querying$1, legacy$1, helpers$1].forEach(function (ext) {
    Object.keys(ext).forEach(function (key) {
      DomUtils[key] = ext[key].bind(DomUtils);
    });
  });
  });

  var parse_1 = parse$2; //following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
  //[ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?

  var re_nthElement = /^([+\-]?\d*n)?\s*(?:([+\-]?)\s*(\d+))?$/;
  /*
  	parses a nth-check formula, returns an array of two numbers
  */

  function parse$2(formula) {
    formula = formula.trim().toLowerCase();

    if (formula === "even") {
      return [2, 0];
    } else if (formula === "odd") {
      return [2, 1];
    } else {
      var parsed = formula.match(re_nthElement);

      if (!parsed) {
        throw new SyntaxError("n-th rule couldn't be parsed ('" + formula + "')");
      }

      var a;

      if (parsed[1]) {
        a = parseInt(parsed[1], 10);

        if (isNaN(a)) {
          if (parsed[1].charAt(0) === "-") a = -1;else a = 1;
        }
      } else a = 0;

      return [a, parsed[3] ? parseInt((parsed[2] || "") + parsed[3], 10) : 0];
    }
  }

  var boolbase = {
    trueFunc: function trueFunc() {
      return true;
    },
    falseFunc: function falseFunc() {
      return false;
    }
  };

  var compile_1 = compile;

  var trueFunc = boolbase.trueFunc,
      falseFunc = boolbase.falseFunc;
  /*
  	returns a function that checks if an elements index matches the given rule
  	highly optimized to return the fastest solution
  */


  function compile(parsed) {
    var a = parsed[0],
        b = parsed[1] - 1; //when b <= 0, a*n won't be possible for any matches when a < 0
    //besides, the specification says that no element is matched when a and b are 0

    if (b < 0 && a <= 0) return falseFunc; //when a is in the range -1..1, it matches any element (so only b is checked)

    if (a === -1) return function (pos) {
      return pos <= b;
    };
    if (a === 0) return function (pos) {
      return pos === b;
    }; //when b <= 0 and a === 1, they match any element

    if (a === 1) return b < 0 ? trueFunc : function (pos) {
      return pos >= b;
    }; //when a > 0, modulo can be used to check if there is a match

    var bMod = b % a;
    if (bMod < 0) bMod += a;

    if (a > 1) {
      return function (pos) {
        return pos >= b && pos % a === bMod;
      };
    }

    a *= -1; //make `a` positive

    return function (pos) {
      return pos <= b && pos % a === bMod;
    };
  }

  var nthCheck = function nthCheck(formula) {
    return compile_1(parse_1(formula));
  };

  var parse_1$1 = parse_1;
  var compile_1$1 = compile_1;
  nthCheck.parse = parse_1$1;
  nthCheck.compile = compile_1$1;

  var hasAttrib = domutils$1.hasAttrib,
      getAttributeValue = domutils$1.getAttributeValue,
      falseFunc$1 = boolbase.falseFunc; //https://github.com/slevithan/XRegExp/blob/master/src/xregexp.js#L469


  var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
  /*
  	attribute selectors
  */

  var attributeRules = {
    __proto__: null,
    equals: function equals(next, data) {
      var name = data.name,
          value = data.value;

      if (data.ignoreCase) {
        value = value.toLowerCase();
        return function equalsIC(elem) {
          var attr = getAttributeValue(elem, name);
          return attr != null && attr.toLowerCase() === value && next(elem);
        };
      }

      return function equals(elem) {
        return getAttributeValue(elem, name) === value && next(elem);
      };
    },
    hyphen: function hyphen(next, data) {
      var name = data.name,
          value = data.value,
          len = value.length;

      if (data.ignoreCase) {
        value = value.toLowerCase();
        return function hyphenIC(elem) {
          var attr = getAttributeValue(elem, name);
          return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
        };
      }

      return function hyphen(elem) {
        var attr = getAttributeValue(elem, name);
        return attr != null && attr.substr(0, len) === value && (attr.length === len || attr.charAt(len) === "-") && next(elem);
      };
    },
    element: function element(next, data) {
      var name = data.name,
          value = data.value;

      if (/\s/.test(value)) {
        return falseFunc$1;
      }

      value = value.replace(reChars, "\\$&");
      var pattern = "(?:^|\\s)" + value + "(?:$|\\s)",
          flags = data.ignoreCase ? "i" : "",
          regex = new RegExp(pattern, flags);
      return function element(elem) {
        var attr = getAttributeValue(elem, name);
        return attr != null && regex.test(attr) && next(elem);
      };
    },
    exists: function exists(next, data) {
      var name = data.name;
      return function exists(elem) {
        return hasAttrib(elem, name) && next(elem);
      };
    },
    start: function start(next, data) {
      var name = data.name,
          value = data.value,
          len = value.length;

      if (len === 0) {
        return falseFunc$1;
      }

      if (data.ignoreCase) {
        value = value.toLowerCase();
        return function startIC(elem) {
          var attr = getAttributeValue(elem, name);
          return attr != null && attr.substr(0, len).toLowerCase() === value && next(elem);
        };
      }

      return function start(elem) {
        var attr = getAttributeValue(elem, name);
        return attr != null && attr.substr(0, len) === value && next(elem);
      };
    },
    end: function end(next, data) {
      var name = data.name,
          value = data.value,
          len = -value.length;

      if (len === 0) {
        return falseFunc$1;
      }

      if (data.ignoreCase) {
        value = value.toLowerCase();
        return function endIC(elem) {
          var attr = getAttributeValue(elem, name);
          return attr != null && attr.substr(len).toLowerCase() === value && next(elem);
        };
      }

      return function end(elem) {
        var attr = getAttributeValue(elem, name);
        return attr != null && attr.substr(len) === value && next(elem);
      };
    },
    any: function any(next, data) {
      var name = data.name,
          value = data.value;

      if (value === "") {
        return falseFunc$1;
      }

      if (data.ignoreCase) {
        var regex = new RegExp(value.replace(reChars, "\\$&"), "i");
        return function anyIC(elem) {
          var attr = getAttributeValue(elem, name);
          return attr != null && regex.test(attr) && next(elem);
        };
      }

      return function any(elem) {
        var attr = getAttributeValue(elem, name);
        return attr != null && attr.indexOf(value) >= 0 && next(elem);
      };
    },
    not: function not(next, data) {
      var name = data.name,
          value = data.value;

      if (value === "") {
        return function notEmpty(elem) {
          return !!getAttributeValue(elem, name) && next(elem);
        };
      } else if (data.ignoreCase) {
        value = value.toLowerCase();
        return function notIC(elem) {
          var attr = getAttributeValue(elem, name);
          return attr != null && attr.toLowerCase() !== value && next(elem);
        };
      }

      return function not(elem) {
        return getAttributeValue(elem, name) !== value && next(elem);
      };
    }
  };
  var attributes$1 = {
    compile: function compile(next, data, options) {
      if (options && options.strict && (data.ignoreCase || data.action === "not")) throw SyntaxError("Unsupported attribute selector");
      return attributeRules[data.action](next, data);
    },
    rules: attributeRules
  };

  /*
  	pseudo selectors

  	---

  	they are available in two forms:
  	* filters called when the selector
  	  is compiled and return a function
  	  that needs to return next()
  	* pseudos get called on execution
  	  they need to return a boolean
  */
  var isTag$6 = domutils$1.isTag,
      getText$2 = domutils$1.getText,
      getParent = domutils$1.getParent,
      getChildren = domutils$1.getChildren,
      getSiblings = domutils$1.getSiblings,
      hasAttrib$1 = domutils$1.hasAttrib,
      getName = domutils$1.getName,
      getAttribute = domutils$1.getAttributeValue,
      checkAttrib = attributes$1.rules.equals,
      trueFunc$1 = boolbase.trueFunc,
      falseFunc$2 = boolbase.falseFunc; //helper methods


  function getFirstElement(elems) {
    for (var i = 0; elems && i < elems.length; i++) {
      if (isTag$6(elems[i])) return elems[i];
    }
  }

  function getAttribFunc(name, value) {
    var data = {
      name: name,
      value: value
    };
    return function attribFunc(next) {
      return checkAttrib(next, data);
    };
  }

  function getChildFunc(next) {
    return function (elem) {
      return !!getParent(elem) && next(elem);
    };
  }

  var filters = {
    contains: function contains(next, text) {
      return function contains(elem) {
        return next(elem) && getText$2(elem).indexOf(text) >= 0;
      };
    },
    icontains: function icontains(next, text) {
      var itext = text.toLowerCase();
      return function icontains(elem) {
        return next(elem) && getText$2(elem).toLowerCase().indexOf(itext) >= 0;
      };
    },
    //location specific methods
    "nth-child": function nthChild(next, rule) {
      var func = nthCheck(rule);
      if (func === falseFunc$2) return func;
      if (func === trueFunc$1) return getChildFunc(next);
      return function nthChild(elem) {
        var siblings = getSiblings(elem);

        for (var i = 0, pos = 0; i < siblings.length; i++) {
          if (isTag$6(siblings[i])) {
            if (siblings[i] === elem) break;else pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    "nth-last-child": function nthLastChild(next, rule) {
      var func = nthCheck(rule);
      if (func === falseFunc$2) return func;
      if (func === trueFunc$1) return getChildFunc(next);
      return function nthLastChild(elem) {
        var siblings = getSiblings(elem);

        for (var pos = 0, i = siblings.length - 1; i >= 0; i--) {
          if (isTag$6(siblings[i])) {
            if (siblings[i] === elem) break;else pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    "nth-of-type": function nthOfType(next, rule) {
      var func = nthCheck(rule);
      if (func === falseFunc$2) return func;
      if (func === trueFunc$1) return getChildFunc(next);
      return function nthOfType(elem) {
        var siblings = getSiblings(elem);

        for (var pos = 0, i = 0; i < siblings.length; i++) {
          if (isTag$6(siblings[i])) {
            if (siblings[i] === elem) break;
            if (getName(siblings[i]) === getName(elem)) pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    "nth-last-of-type": function nthLastOfType(next, rule) {
      var func = nthCheck(rule);
      if (func === falseFunc$2) return func;
      if (func === trueFunc$1) return getChildFunc(next);
      return function nthLastOfType(elem) {
        var siblings = getSiblings(elem);

        for (var pos = 0, i = siblings.length - 1; i >= 0; i--) {
          if (isTag$6(siblings[i])) {
            if (siblings[i] === elem) break;
            if (getName(siblings[i]) === getName(elem)) pos++;
          }
        }

        return func(pos) && next(elem);
      };
    },
    //TODO determine the actual root element
    root: function root(next) {
      return function (elem) {
        return !getParent(elem) && next(elem);
      };
    },
    scope: function scope(next, rule, options, context) {
      if (!context || context.length === 0) {
        //equivalent to :root
        return filters.root(next);
      }

      if (context.length === 1) {
        //NOTE: can't be unpacked, as :has uses this for side-effects
        return function (elem) {
          return context[0] === elem && next(elem);
        };
      }

      return function (elem) {
        return context.indexOf(elem) >= 0 && next(elem);
      };
    },
    //jQuery extensions (others follow as pseudos)
    checkbox: getAttribFunc("type", "checkbox"),
    file: getAttribFunc("type", "file"),
    password: getAttribFunc("type", "password"),
    radio: getAttribFunc("type", "radio"),
    reset: getAttribFunc("type", "reset"),
    image: getAttribFunc("type", "image"),
    submit: getAttribFunc("type", "submit")
  }; //while filters are precompiled, pseudos get called when they are needed

  var pseudos = {
    empty: function empty(elem) {
      return !getChildren(elem).some(function (elem) {
        return isTag$6(elem) || elem.type === "text";
      });
    },
    "first-child": function firstChild(elem) {
      return getFirstElement(getSiblings(elem)) === elem;
    },
    "last-child": function lastChild(elem) {
      var siblings = getSiblings(elem);

      for (var i = siblings.length - 1; i >= 0; i--) {
        if (siblings[i] === elem) return true;
        if (isTag$6(siblings[i])) break;
      }

      return false;
    },
    "first-of-type": function firstOfType(elem) {
      var siblings = getSiblings(elem);

      for (var i = 0; i < siblings.length; i++) {
        if (isTag$6(siblings[i])) {
          if (siblings[i] === elem) return true;
          if (getName(siblings[i]) === getName(elem)) break;
        }
      }

      return false;
    },
    "last-of-type": function lastOfType(elem) {
      var siblings = getSiblings(elem);

      for (var i = siblings.length - 1; i >= 0; i--) {
        if (isTag$6(siblings[i])) {
          if (siblings[i] === elem) return true;
          if (getName(siblings[i]) === getName(elem)) break;
        }
      }

      return false;
    },
    "only-of-type": function onlyOfType(elem) {
      var siblings = getSiblings(elem);

      for (var i = 0, j = siblings.length; i < j; i++) {
        if (isTag$6(siblings[i])) {
          if (siblings[i] === elem) continue;
          if (getName(siblings[i]) === getName(elem)) return false;
        }
      }

      return true;
    },
    "only-child": function onlyChild(elem) {
      var siblings = getSiblings(elem);

      for (var i = 0; i < siblings.length; i++) {
        if (isTag$6(siblings[i]) && siblings[i] !== elem) return false;
      }

      return true;
    },
    //:matches(a, area, link)[href]
    link: function link(elem) {
      return hasAttrib$1(elem, "href");
    },
    visited: falseFunc$2,
    //seems to be a valid implementation
    //TODO: :any-link once the name is finalized (as an alias of :link)
    //forms
    //to consider: :target
    //:matches([selected], select:not([multiple]):not(> option[selected]) > option:first-of-type)
    selected: function selected(elem) {
      if (hasAttrib$1(elem, "selected")) return true;else if (getName(elem) !== "option") return false; //the first <option> in a <select> is also selected

      var parent = getParent(elem);
      if (!parent || getName(parent) !== "select" || hasAttrib$1(parent, "multiple")) return false;
      var siblings = getChildren(parent),
          sawElem = false;

      for (var i = 0; i < siblings.length; i++) {
        if (isTag$6(siblings[i])) {
          if (siblings[i] === elem) {
            sawElem = true;
          } else if (!sawElem) {
            return false;
          } else if (hasAttrib$1(siblings[i], "selected")) {
            return false;
          }
        }
      }

      return sawElem;
    },
    //https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    //:matches(
    //  :matches(button, input, select, textarea, menuitem, optgroup, option)[disabled],
    //  optgroup[disabled] > option),
    // fieldset[disabled] * //TODO not child of first <legend>
    //)
    disabled: function disabled(elem) {
      return hasAttrib$1(elem, "disabled");
    },
    enabled: function enabled(elem) {
      return !hasAttrib$1(elem, "disabled");
    },
    //:matches(:matches(:radio, :checkbox)[checked], :selected) (TODO menuitem)
    checked: function checked(elem) {
      return hasAttrib$1(elem, "checked") || pseudos.selected(elem);
    },
    //:matches(input, select, textarea)[required]
    required: function required(elem) {
      return hasAttrib$1(elem, "required");
    },
    //:matches(input, select, textarea):not([required])
    optional: function optional(elem) {
      return !hasAttrib$1(elem, "required");
    },
    //jQuery extensions
    //:not(:empty)
    parent: function parent(elem) {
      return !pseudos.empty(elem);
    },
    //:matches(h1, h2, h3, h4, h5, h6)
    header: function header(elem) {
      var name = getName(elem);
      return name === "h1" || name === "h2" || name === "h3" || name === "h4" || name === "h5" || name === "h6";
    },
    //:matches(button, input[type=button])
    button: function button(elem) {
      var name = getName(elem);
      return name === "button" || name === "input" && getAttribute(elem, "type") === "button";
    },
    //:matches(input, textarea, select, button)
    input: function input(elem) {
      var name = getName(elem);
      return name === "input" || name === "textarea" || name === "select" || name === "button";
    },
    //input:matches(:not([type!='']), [type='text' i])
    text: function text(elem) {
      var attr;
      return getName(elem) === "input" && (!(attr = getAttribute(elem, "type")) || attr.toLowerCase() === "text");
    }
  };

  function verifyArgs(func, name, subselect) {
    if (subselect === null) {
      if (func.length > 1 && name !== "scope") {
        throw new SyntaxError("pseudo-selector :" + name + " requires an argument");
      }
    } else {
      if (func.length === 1) {
        throw new SyntaxError("pseudo-selector :" + name + " doesn't have any arguments");
      }
    }
  } //FIXME this feels hacky


  var re_CSS3 = /^(?:(?:nth|last|first|only)-(?:child|of-type)|root|empty|(?:en|dis)abled|checked|not)$/;
  var pseudos_1 = {
    compile: function compile(next, data, options, context) {
      var name = data.name,
          subselect = data.data;

      if (options && options.strict && !re_CSS3.test(name)) {
        throw SyntaxError(":" + name + " isn't part of CSS3");
      }

      if (typeof filters[name] === "function") {
        verifyArgs(filters[name], name, subselect);
        return filters[name](next, subselect, options, context);
      } else if (typeof pseudos[name] === "function") {
        var func = pseudos[name];
        verifyArgs(func, name, subselect);
        if (next === trueFunc$1) return func;
        return function pseudoArgs(elem) {
          return func(elem, subselect) && next(elem);
        };
      } else {
        throw new SyntaxError("unmatched pseudo-class :" + name);
      }
    },
    filters: filters,
    pseudos: pseudos
  };

  var cssWhat = parse$3;
  var re_name = /^(?:\\.|[\w\-\u00b0-\uFFFF])+/,
      re_escape = /\\([\da-f]{1,6}\s?|(\s)|.)/ig,
      //modified version of https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L87
  re_attr = /^\s*((?:\\.|[\w\u00b0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00b0-\uFFFF\-])*)|)|)\s*(i)?\]/;
  var actionTypes = {
    __proto__: null,
    "undefined": "exists",
    "": "equals",
    "~": "element",
    "^": "start",
    "$": "end",
    "*": "any",
    "!": "not",
    "|": "hyphen"
  };
  var simpleSelectors = {
    __proto__: null,
    ">": "child",
    "<": "parent",
    "~": "sibling",
    "+": "adjacent"
  };
  var attribSelectors = {
    __proto__: null,
    "#": ["id", "equals"],
    ".": ["class", "element"]
  }; //pseudos, whose data-property is parsed as well

  var unpackPseudos = {
    __proto__: null,
    "has": true,
    "not": true,
    "matches": true
  };
  var stripQuotesFromPseudos = {
    __proto__: null,
    "contains": true,
    "icontains": true
  };
  var quotes = {
    __proto__: null,
    "\"": true,
    "'": true
  }; //unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L139

  function funescape(_, escaped, escapedWhitespace) {
    var high = "0x" + escaped - 0x10000; // NaN means non-codepoint
    // Support: Firefox
    // Workaround erroneous numeric interpretation of +"0x"

    return high !== high || escapedWhitespace ? escaped : // BMP codepoint
    high < 0 ? String.fromCharCode(high + 0x10000) : // Supplemental Plane codepoint (surrogate pair)
    String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
  }

  function unescapeCSS(str) {
    return str.replace(re_escape, funescape);
  }

  function isWhitespace(c) {
    return c === " " || c === "\n" || c === "\t" || c === "\f" || c === "\r";
  }

  function parse$3(selector, options) {
    var subselects = [];
    selector = parseSelector(subselects, selector + "", options);

    if (selector !== "") {
      throw new SyntaxError("Unmatched selector: " + selector);
    }

    return subselects;
  }

  function parseSelector(subselects, selector, options) {
    var tokens = [],
        sawWS = false,
        data,
        firstChar,
        name,
        quot;

    function getName() {
      var sub = selector.match(re_name)[0];
      selector = selector.substr(sub.length);
      return unescapeCSS(sub);
    }

    function stripWhitespace(start) {
      while (isWhitespace(selector.charAt(start))) {
        start++;
      }

      selector = selector.substr(start);
    }

    function isEscaped(pos) {
      var slashCount = 0;

      while (selector.charAt(--pos) === "\\") {
        slashCount++;
      }

      return (slashCount & 1) === 1;
    }

    stripWhitespace(0);

    while (selector !== "") {
      firstChar = selector.charAt(0);

      if (isWhitespace(firstChar)) {
        sawWS = true;
        stripWhitespace(1);
      } else if (firstChar in simpleSelectors) {
        tokens.push({
          type: simpleSelectors[firstChar]
        });
        sawWS = false;
        stripWhitespace(1);
      } else if (firstChar === ",") {
        if (tokens.length === 0) {
          throw new SyntaxError("empty sub-selector");
        }

        subselects.push(tokens);
        tokens = [];
        sawWS = false;
        stripWhitespace(1);
      } else {
        if (sawWS) {
          if (tokens.length > 0) {
            tokens.push({
              type: "descendant"
            });
          }

          sawWS = false;
        }

        if (firstChar === "*") {
          selector = selector.substr(1);
          tokens.push({
            type: "universal"
          });
        } else if (firstChar in attribSelectors) {
          selector = selector.substr(1);
          tokens.push({
            type: "attribute",
            name: attribSelectors[firstChar][0],
            action: attribSelectors[firstChar][1],
            value: getName(),
            ignoreCase: false
          });
        } else if (firstChar === "[") {
          selector = selector.substr(1);
          data = selector.match(re_attr);

          if (!data) {
            throw new SyntaxError("Malformed attribute selector: " + selector);
          }

          selector = selector.substr(data[0].length);
          name = unescapeCSS(data[1]);

          if (!options || ("lowerCaseAttributeNames" in options ? options.lowerCaseAttributeNames : !options.xmlMode)) {
            name = name.toLowerCase();
          }

          tokens.push({
            type: "attribute",
            name: name,
            action: actionTypes[data[2]],
            value: unescapeCSS(data[4] || data[5] || ""),
            ignoreCase: !!data[6]
          });
        } else if (firstChar === ":") {
          if (selector.charAt(1) === ":") {
            selector = selector.substr(2);
            tokens.push({
              type: "pseudo-element",
              name: getName().toLowerCase()
            });
            continue;
          }

          selector = selector.substr(1);
          name = getName().toLowerCase();
          data = null;

          if (selector.charAt(0) === "(") {
            if (name in unpackPseudos) {
              quot = selector.charAt(1);
              var quoted = (quot in quotes);
              selector = selector.substr(quoted + 1);
              data = [];
              selector = parseSelector(data, selector, options);

              if (quoted) {
                if (selector.charAt(0) !== quot) {
                  throw new SyntaxError("unmatched quotes in :" + name);
                } else {
                  selector = selector.substr(1);
                }
              }

              if (selector.charAt(0) !== ")") {
                throw new SyntaxError("missing closing parenthesis in :" + name + " " + selector);
              }

              selector = selector.substr(1);
            } else {
              var pos = 1,
                  counter = 1;

              for (; counter > 0 && pos < selector.length; pos++) {
                if (selector.charAt(pos) === "(" && !isEscaped(pos)) counter++;else if (selector.charAt(pos) === ")" && !isEscaped(pos)) counter--;
              }

              if (counter) {
                throw new SyntaxError("parenthesis not matched");
              }

              data = selector.substr(1, pos - 2);
              selector = selector.substr(pos);

              if (name in stripQuotesFromPseudos) {
                quot = data.charAt(0);

                if (quot === data.slice(-1) && quot in quotes) {
                  data = data.slice(1, -1);
                }

                data = unescapeCSS(data);
              }
            }
          }

          tokens.push({
            type: "pseudo",
            name: name,
            data: data
          });
        } else if (re_name.test(selector)) {
          name = getName();

          if (!options || ("lowerCaseTags" in options ? options.lowerCaseTags : !options.xmlMode)) {
            name = name.toLowerCase();
          }

          tokens.push({
            type: "tag",
            name: name
          });
        } else {
          if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
            tokens.pop();
          }

          addToken(subselects, tokens);
          return selector;
        }
      }
    }

    addToken(subselects, tokens);
    return selector;
  }

  function addToken(subselects, tokens) {
    if (subselects.length > 0 && tokens.length === 0) {
      throw new SyntaxError("empty sub-selector");
    }

    subselects.push(tokens);
  }

  var isTag$7 = domutils$1.isTag,
      getParent$1 = domutils$1.getParent,
      getChildren$1 = domutils$1.getChildren,
      getSiblings$1 = domutils$1.getSiblings,
      getName$1 = domutils$1.getName;
  /*
  	all available rules
  */


  var general = {
    __proto__: null,
    attribute: attributes$1.compile,
    pseudo: pseudos_1.compile,
    //tags
    tag: function tag(next, data) {
      var name = data.name;
      return function tag(elem) {
        return getName$1(elem) === name && next(elem);
      };
    },
    //traversal
    descendant: function descendant(next, rule, options, context, acceptSelf) {
      return function descendant(elem) {
        if (acceptSelf && next(elem)) return true;
        var found = false;

        while (!found && (elem = getParent$1(elem))) {
          found = next(elem);
        }

        return found;
      };
    },
    parent: function parent(next, data, options) {
      if (options && options.strict) throw SyntaxError("Parent selector isn't part of CSS3");
      return function parent(elem) {
        return getChildren$1(elem).some(test);
      };

      function test(elem) {
        return isTag$7(elem) && next(elem);
      }
    },
    child: function child(next) {
      return function child(elem) {
        var parent = getParent$1(elem);
        return !!parent && next(parent);
      };
    },
    sibling: function sibling(next) {
      return function sibling(elem) {
        var siblings = getSiblings$1(elem);

        for (var i = 0; i < siblings.length; i++) {
          if (isTag$7(siblings[i])) {
            if (siblings[i] === elem) break;
            if (next(siblings[i])) return true;
          }
        }

        return false;
      };
    },
    adjacent: function adjacent(next) {
      return function adjacent(elem) {
        var siblings = getSiblings$1(elem),
            lastElement;

        for (var i = 0; i < siblings.length; i++) {
          if (isTag$7(siblings[i])) {
            if (siblings[i] === elem) break;
            lastElement = siblings[i];
          }
        }

        return !!lastElement && next(lastElement);
      };
    },
    universal: function universal(next) {
      return next;
    }
  };

  var universal = 50;
  var tag = 30;
  var attribute = 1;
  var pseudo = 0;
  var descendant = -1;
  var child = -1;
  var parent = -1;
  var sibling = -1;
  var adjacent = -1;
  var procedure = {
  	universal: universal,
  	tag: tag,
  	attribute: attribute,
  	pseudo: pseudo,
  	descendant: descendant,
  	child: child,
  	parent: parent,
  	sibling: sibling,
  	adjacent: adjacent
  };

  var sort = sortByProcedure;
  /*
  	sort the parts of the passed selector,
  	as there is potential for optimization
  	(some types of selectors are faster than others)
  */



  var attributes$2 = {
    __proto__: null,
    exists: 10,
    equals: 8,
    not: 7,
    start: 6,
    end: 6,
    any: 5,
    hyphen: 4,
    element: 4
  };

  function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);

    for (var i = 1; i < arr.length; i++) {
      var procNew = procs[i];
      if (procNew < 0) continue;

      for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
        var token = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = token;
        procs[j + 1] = procs[j];
        procs[j] = procNew;
      }
    }
  }

  function getProcedure(token) {
    var proc = procedure[token.type];

    if (proc === procedure.attribute) {
      proc = attributes$2[token.action];

      if (proc === attributes$2.equals && token.name === "id") {
        //prefer ID selectors (eg. #ID)
        proc = 9;
      }

      if (token.ignoreCase) {
        //ignoreCase adds some overhead, prefer "normal" token
        //this is a binary operation, to ensure it's still an int
        proc >>= 1;
      }
    } else if (proc === procedure.pseudo) {
      if (!token.data) {
        proc = 3;
      } else if (token.name === "has" || token.name === "contains") {
        proc = 0; //expensive in any case
      } else if (token.name === "matches" || token.name === "not") {
        proc = 0;

        for (var i = 0; i < token.data.length; i++) {
          //TODO better handling of complex selectors
          if (token.data[i].length !== 1) continue;
          var cur = getProcedure(token.data[i][0]); //avoid executing :has or :contains

          if (cur === 0) {
            proc = 0;
            break;
          }

          if (cur > proc) proc = cur;
        }

        if (token.data.length > 1 && proc > 0) proc -= 1;
      } else {
        proc = 1;
      }
    }

    return proc;
  }

  /*
  	compiles a selector to an executable function
  */
  var compile_1$2 = compile$1;
  var compileUnsafe_1 = compileUnsafe;
  var compileToken_1 = compileToken;

  var isTag$8 = domutils$1.isTag,
      trueFunc$2 = boolbase.trueFunc,
      falseFunc$3 = boolbase.falseFunc;

  function compile$1(selector, options, context) {
    var next = compileUnsafe(selector, options, context);
    return wrap(next);
  }

  function wrap(next) {
    return function base(elem) {
      return isTag$8(elem) && next(elem);
    };
  }

  function compileUnsafe(selector, options, context) {
    var token = cssWhat(selector, options);
    return compileToken(token, options, context);
  }

  function includesScopePseudo(t) {
    return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function (data) {
      return data.some(includesScopePseudo);
    }));
  }

  var DESCENDANT_TOKEN = {
    type: "descendant"
  },
      SCOPE_TOKEN = {
    type: "pseudo",
    name: "scope"
  },
      PLACEHOLDER_ELEMENT = {},
      getParent$2 = domutils$1.getParent; //CSS 4 Spec (Draft): 3.3.1. Absolutizing a Scope-relative Selector
  //http://www.w3.org/TR/selectors4/#absolutizing

  function absolutize(token, context) {
    //TODO better check if context is document
    var hasContext = !!context && !!context.length && context.every(function (e) {
      return e === PLACEHOLDER_ELEMENT || !!getParent$2(e);
    });
    token.forEach(function (t) {
      if (t.length > 0 && isTraversal(t[0]) && t[0].type !== "descendant") ; else if (hasContext && !includesScopePseudo(t)) {
        t.unshift(DESCENDANT_TOKEN);
      } else {
        return;
      }

      t.unshift(SCOPE_TOKEN);
    });
  }

  function compileToken(token, options, context) {
    token = token.filter(function (t) {
      return t.length > 0;
    });
    token.forEach(sort);
    var isArrayContext = Array.isArray(context);
    context = options && options.context || context;
    if (context && !isArrayContext) context = [context];
    absolutize(token, context);
    return token.map(function (rules) {
      return compileRules(rules, options, context, isArrayContext);
    }).reduce(reduceRules, falseFunc$3);
  }

  function isTraversal(t) {
    return procedure[t.type] < 0;
  }

  function compileRules(rules, options, context, isArrayContext) {
    var acceptSelf = isArrayContext && rules[0].name === "scope" && rules[1].type === "descendant";
    return rules.reduce(function (func, rule, index) {
      if (func === falseFunc$3) return func;
      return general[rule.type](func, rule, options, context, acceptSelf && index === 1);
    }, options && options.rootFunc || trueFunc$2);
  }

  function reduceRules(a, b) {
    if (b === falseFunc$3 || a === trueFunc$2) {
      return a;
    }

    if (a === falseFunc$3 || b === trueFunc$2) {
      return b;
    }

    return function combine(elem) {
      return a(elem) || b(elem);
    };
  } //:not, :has and :matches have to compile selectors
  //doing this in lib/pseudos.js would lead to circular dependencies,
  //so we add them here


  var filters$1 = pseudos_1.filters,
      existsOne$2 = domutils$1.existsOne,
      isTag$8 = domutils$1.isTag,
      getChildren$2 = domutils$1.getChildren;

  function containsTraversal(t) {
    return t.some(isTraversal);
  }

  filters$1.not = function (next, token, options, context) {
    var opts = {
      xmlMode: !!(options && options.xmlMode),
      strict: !!(options && options.strict)
    };

    if (opts.strict) {
      if (token.length > 1 || token.some(containsTraversal)) {
        throw new SyntaxError("complex selectors in :not aren't allowed in strict mode");
      }
    }

    var func = compileToken(token, opts, context);
    if (func === falseFunc$3) return next;
    if (func === trueFunc$2) return falseFunc$3;
    return function (elem) {
      return !func(elem) && next(elem);
    };
  };

  filters$1.has = function (next, token, options) {
    var opts = {
      xmlMode: !!(options && options.xmlMode),
      strict: !!(options && options.strict)
    }; //FIXME: Uses an array as a pointer to the current element (side effects)

    var context = token.some(containsTraversal) ? [PLACEHOLDER_ELEMENT] : null;
    var func = compileToken(token, opts, context);
    if (func === falseFunc$3) return falseFunc$3;
    if (func === trueFunc$2) return function (elem) {
      return getChildren$2(elem).some(isTag$8) && next(elem);
    };
    func = wrap(func);

    if (context) {
      return function has(elem) {
        return next(elem) && (context[0] = elem, existsOne$2(func, getChildren$2(elem)));
      };
    }

    return function has(elem) {
      return next(elem) && existsOne$2(func, getChildren$2(elem));
    };
  };

  filters$1.matches = function (next, token, options, context) {
    var opts = {
      xmlMode: !!(options && options.xmlMode),
      strict: !!(options && options.strict),
      rootFunc: next
    };
    return compileToken(token, opts, context);
  };
  compile_1$2.compileUnsafe = compileUnsafe_1;
  compile_1$2.compileToken = compileToken_1;

  var cssSelect = CSSselect;

  var findOne$2 = domutils$1.findOne,
      findAll$2 = domutils$1.findAll,
      getChildren$3 = domutils$1.getChildren,
      removeSubsets = domutils$1.removeSubsets,
      falseFunc$4 = boolbase.falseFunc,
      compileUnsafe$1 = compile_1$2.compileUnsafe,
      compileToken$1 = compile_1$2.compileToken;

  function getSelectorFunc(searchFunc) {
    return function select(query, elems, options) {
      if (typeof query !== "function") query = compileUnsafe$1(query, options, elems);
      if (!Array.isArray(elems)) elems = getChildren$3(elems);else elems = removeSubsets(elems);
      return searchFunc(query, elems);
    };
  }

  var selectAll = getSelectorFunc(function selectAll(query, elems) {
    return query === falseFunc$4 || !elems || elems.length === 0 ? [] : findAll$2(query, elems);
  });
  var selectOne = getSelectorFunc(function selectOne(query, elems) {
    return query === falseFunc$4 || !elems || elems.length === 0 ? null : findOne$2(query, elems);
  });

  function is(elem, query, options) {
    return (typeof query === "function" ? query : compile_1$2(query, options))(elem);
  }
  /*
  	the exported interface
  */


  function CSSselect(query, elems, options) {
    return selectAll(query, elems, options);
  }

  CSSselect.compile = compile_1$2;
  CSSselect.filters = pseudos_1.filters;
  CSSselect.pseudos = pseudos_1.pseudos;
  CSSselect.selectAll = selectAll;
  CSSselect.selectOne = selectOne;
  CSSselect.is = is; //legacy methods (might be removed)

  CSSselect.parse = compile_1$2;
  CSSselect.iterate = selectAll; //hooks

  CSSselect._compileUnsafe = compileUnsafe$1;
  CSSselect._compileToken = compileToken$1;

  /**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  var _arrayFilter = arrayFilter;

  /**
   * The base implementation of `_.filter` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */


  function baseFilter(collection, predicate) {
    var result = [];
    _baseEach(collection, function (value, index, collection) {
      if (predicate(value, index, collection)) {
        result.push(value);
      }
    });
    return result;
  }

  var _baseFilter = baseFilter;

  var baseMatches = require('./_baseMatches'),
      baseMatchesProperty = require('./_baseMatchesProperty'),
      identity$1 = require('./identity'),
      isArray$1 = require('./isArray'),
      property = require('./property');
  /**
   * The base implementation of `_.iteratee`.
   *
   * @private
   * @param {*} [value=_.identity] The value to convert to an iteratee.
   * @returns {Function} Returns the iteratee.
   */


  function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
      return value;
    }

    if (value == null) {
      return identity$1;
    }

    if (_typeof(value) == 'object') {
      return isArray$1(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }

    return property(value);
  }

  module.exports = baseIteratee;

  var _baseIteratee = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  /** Error message constants. */
  var FUNC_ERROR_TEXT$1 = 'Expected a function';
  /**
   * Creates a function that negates the result of the predicate `func`. The
   * `func` predicate is invoked with the `this` binding and arguments of the
   * created function.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Function
   * @param {Function} predicate The predicate to negate.
   * @returns {Function} Returns the new negated function.
   * @example
   *
   * function isEven(n) {
   *   return n % 2 == 0;
   * }
   *
   * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
   * // => [1, 3, 5]
   */

  function negate(predicate) {
    if (typeof predicate != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT$1);
    }

    return function () {
      var args = arguments;

      switch (args.length) {
        case 0:
          return !predicate.call(this);

        case 1:
          return !predicate.call(this, args[0]);

        case 2:
          return !predicate.call(this, args[0], args[1]);

        case 3:
          return !predicate.call(this, args[0], args[1], args[2]);
      }

      return !predicate.apply(this, args);
    };
  }

  var negate_1 = negate;

  var baseIteratee$1 = /*@__PURE__*/getAugmentedNamespace(_baseIteratee);

  /**
   * The opposite of `_.filter`; this method returns the elements of `collection`
   * that `predicate` does **not** return truthy for.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.filter
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': false },
   *   { 'user': 'fred',   'age': 40, 'active': true }
   * ];
   *
   * _.reject(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.reject(users, { 'age': 40, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.reject(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.reject(users, 'active');
   * // => objects for ['barney']
   */


  function reject(collection, predicate) {
    var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
    return func(collection, negate_1(baseIteratee$1(predicate, 3)));
  }

  var reject_1 = reject;

  /**
   * Iterates over elements of `collection`, returning an array of all elements
   * `predicate` returns truthy for. The predicate is invoked with three
   * arguments: (value, index|key, collection).
   *
   * **Note:** Unlike `_.remove`, this method returns a new array.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [predicate=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   * @see _.reject
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36, 'active': true },
   *   { 'user': 'fred',   'age': 40, 'active': false }
   * ];
   *
   * _.filter(users, function(o) { return !o.active; });
   * // => objects for ['fred']
   *
   * // The `_.matches` iteratee shorthand.
   * _.filter(users, { 'age': 36, 'active': true });
   * // => objects for ['barney']
   *
   * // The `_.matchesProperty` iteratee shorthand.
   * _.filter(users, ['active', false]);
   * // => objects for ['fred']
   *
   * // The `_.property` iteratee shorthand.
   * _.filter(users, 'active');
   * // => objects for ['barney']
   *
   * // Combining several predicates using `_.overEvery` or `_.overSome`.
   * _.filter(users, _.overSome([{ 'age': 36 }, ['age', 40]]));
   * // => objects for ['fred', 'barney']
   */


  function filter$2(collection, predicate) {
    var func = isArray_1(collection) ? _arrayFilter : _baseFilter;
    return func(collection, baseIteratee$1(predicate, 3));
  }

  var filter_1 = filter$2;

  /**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
  function arrayReduce(array, iteratee, accumulator, initAccum) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
      accumulator = array[++index];
    }

    while (++index < length) {
      accumulator = iteratee(accumulator, array[index], index, array);
    }

    return accumulator;
  }

  var _arrayReduce = arrayReduce;

  /**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
  function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
    eachFunc(collection, function (value, index, collection) {
      accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection);
    });
    return accumulator;
  }

  var _baseReduce = baseReduce;

  /**
   * Reduces `collection` to a value which is the accumulated result of running
   * each element in `collection` thru `iteratee`, where each successive
   * invocation is supplied the return value of the previous. If `accumulator`
   * is not given, the first element of `collection` is used as the initial
   * value. The iteratee is invoked with four arguments:
   * (accumulator, value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.reduce`, `_.reduceRight`, and `_.transform`.
   *
   * The guarded methods are:
   * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
   * and `sortBy`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @returns {*} Returns the accumulated value.
   * @see _.reduceRight
   * @example
   *
   * _.reduce([1, 2], function(sum, n) {
   *   return sum + n;
   * }, 0);
   * // => 3
   *
   * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
   *   (result[value] || (result[value] = [])).push(key);
   *   return result;
   * }, {});
   * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
   */


  function reduce(collection, iteratee, accumulator) {
    var func = isArray_1(collection) ? _arrayReduce : _baseReduce,
        initAccum = arguments.length < 3;
    return func(collection, baseIteratee$1(iteratee, 4), accumulator, initAccum, _baseEach);
  }

  var reduce_1 = reduce;

  var traversing = createCommonjsModule(function (module, exports) {
  var domEach = utils.domEach,
      uniqueSort = lib$2.DomUtils.uniqueSort,
      isTag = utils.isTag,
      _ = {
    bind: bind_1,
    forEach: forEach_1,
    reject: reject_1,
    filter: filter_1,
    reduce: reduce_1
  };

  exports.find = function (selectorOrHaystack) {
    var elems = _.reduce(this, function (memo, elem) {
      return memo.concat(_.filter(elem.children, isTag));
    }, []);

    var contains = this.constructor.contains;
    var haystack;

    if (selectorOrHaystack && typeof selectorOrHaystack !== 'string') {
      if (selectorOrHaystack.cheerio) {
        haystack = selectorOrHaystack.get();
      } else {
        haystack = [selectorOrHaystack];
      }

      return this._make(haystack.filter(function (elem) {
        var idx, len;

        for (idx = 0, len = this.length; idx < len; ++idx) {
          if (contains(this[idx], elem)) {
            return true;
          }
        }
      }, this));
    }

    var options = {
      __proto__: this.options,
      context: this.toArray()
    };
    return this._make(cssSelect(selectorOrHaystack, elems, options));
  }; // Get the parent of each element in the current set of matched elements,
  // optionally filtered by a selector.


  exports.parent = function (selector) {
    var set = [];
    domEach(this, function (idx, elem) {
      var parentElem = elem.parent;

      if (parentElem && set.indexOf(parentElem) < 0) {
        set.push(parentElem);
      }
    });

    if (arguments.length) {
      set = exports.filter.call(set, selector, this);
    }

    return this._make(set);
  };

  exports.parents = function (selector) {
    var parentNodes = []; // When multiple DOM elements are in the original set, the resulting set will
    // be in *reverse* order of the original elements as well, with duplicates
    // removed.

    this.get().reverse().forEach(function (elem) {
      traverseParents(this, elem.parent, selector, Infinity).forEach(function (node) {
        if (parentNodes.indexOf(node) === -1) {
          parentNodes.push(node);
        }
      });
    }, this);
    return this._make(parentNodes);
  };

  exports.parentsUntil = function (selector, filter) {
    var parentNodes = [],
        untilNode,
        untilNodes;

    if (typeof selector === 'string') {
      untilNode = cssSelect(selector, this.parents().toArray(), this.options)[0];
    } else if (selector && selector.cheerio) {
      untilNodes = selector.toArray();
    } else if (selector) {
      untilNode = selector;
    } // When multiple DOM elements are in the original set, the resulting set will
    // be in *reverse* order of the original elements as well, with duplicates
    // removed.


    this.toArray().reverse().forEach(function (elem) {
      while (elem = elem.parent) {
        if (untilNode && elem !== untilNode || untilNodes && untilNodes.indexOf(elem) === -1 || !untilNode && !untilNodes) {
          if (isTag(elem) && parentNodes.indexOf(elem) === -1) {
            parentNodes.push(elem);
          }
        } else {
          break;
        }
      }
    }, this);
    return this._make(filter ? cssSelect(filter, parentNodes, this.options) : parentNodes);
  }; // For each element in the set, get the first element that matches the selector
  // by testing the element itself and traversing up through its ancestors in the
  // DOM tree.


  exports.closest = function (selector) {
    var set = [];

    if (!selector) {
      return this._make(set);
    }

    domEach(this, function (idx, elem) {
      var closestElem = traverseParents(this, elem, selector, 1)[0]; // Do not add duplicate elements to the set

      if (closestElem && set.indexOf(closestElem) < 0) {
        set.push(closestElem);
      }
    }.bind(this));
    return this._make(set);
  };

  exports.next = function (selector) {
    if (!this[0]) {
      return this;
    }

    var elems = [];

    _.forEach(this, function (elem) {
      while (elem = elem.next) {
        if (isTag(elem)) {
          elems.push(elem);
          return;
        }
      }
    });

    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };

  exports.nextAll = function (selector) {
    if (!this[0]) {
      return this;
    }

    var elems = [];

    _.forEach(this, function (elem) {
      while (elem = elem.next) {
        if (isTag(elem) && elems.indexOf(elem) === -1) {
          elems.push(elem);
        }
      }
    });

    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };

  exports.nextUntil = function (selector, filterSelector) {
    if (!this[0]) {
      return this;
    }

    var elems = [],
        untilNode,
        untilNodes;

    if (typeof selector === 'string') {
      untilNode = cssSelect(selector, this.nextAll().get(), this.options)[0];
    } else if (selector && selector.cheerio) {
      untilNodes = selector.get();
    } else if (selector) {
      untilNode = selector;
    }

    _.forEach(this, function (elem) {
      while (elem = elem.next) {
        if (untilNode && elem !== untilNode || untilNodes && untilNodes.indexOf(elem) === -1 || !untilNode && !untilNodes) {
          if (isTag(elem) && elems.indexOf(elem) === -1) {
            elems.push(elem);
          }
        } else {
          break;
        }
      }
    });

    return filterSelector ? exports.filter.call(elems, filterSelector, this) : this._make(elems);
  };

  exports.prev = function (selector) {
    if (!this[0]) {
      return this;
    }

    var elems = [];

    _.forEach(this, function (elem) {
      while (elem = elem.prev) {
        if (isTag(elem)) {
          elems.push(elem);
          return;
        }
      }
    });

    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };

  exports.prevAll = function (selector) {
    if (!this[0]) {
      return this;
    }

    var elems = [];

    _.forEach(this, function (elem) {
      while (elem = elem.prev) {
        if (isTag(elem) && elems.indexOf(elem) === -1) {
          elems.push(elem);
        }
      }
    });

    return selector ? exports.filter.call(elems, selector, this) : this._make(elems);
  };

  exports.prevUntil = function (selector, filterSelector) {
    if (!this[0]) {
      return this;
    }

    var elems = [],
        untilNode,
        untilNodes;

    if (typeof selector === 'string') {
      untilNode = cssSelect(selector, this.prevAll().get(), this.options)[0];
    } else if (selector && selector.cheerio) {
      untilNodes = selector.get();
    } else if (selector) {
      untilNode = selector;
    }

    _.forEach(this, function (elem) {
      while (elem = elem.prev) {
        if (untilNode && elem !== untilNode || untilNodes && untilNodes.indexOf(elem) === -1 || !untilNode && !untilNodes) {
          if (isTag(elem) && elems.indexOf(elem) === -1) {
            elems.push(elem);
          }
        } else {
          break;
        }
      }
    });

    return filterSelector ? exports.filter.call(elems, filterSelector, this) : this._make(elems);
  };

  exports.siblings = function (selector) {
    var parent = this.parent();

    var elems = _.filter(parent ? parent.children() : this.siblingsAndMe(), _.bind(function (elem) {
      return isTag(elem) && !this.is(elem);
    }, this));

    if (selector !== undefined) {
      return exports.filter.call(elems, selector, this);
    } else {
      return this._make(elems);
    }
  };

  exports.children = function (selector) {
    var elems = _.reduce(this, function (memo, elem) {
      return memo.concat(_.filter(elem.children, isTag));
    }, []);

    if (selector === undefined) return this._make(elems);
    return exports.filter.call(elems, selector, this);
  };

  exports.contents = function () {
    return this._make(_.reduce(this, function (all, elem) {
      all.push.apply(all, elem.children);
      return all;
    }, []));
  };

  exports.each = function (fn) {
    var i = 0,
        len = this.length;

    while (i < len && fn.call(this[i], i, this[i]) !== false) {
      ++i;
    }

    return this;
  };

  exports.map = function (fn) {
    return this._make(_.reduce(this, function (memo, el, i) {
      var val = fn.call(el, i, el);
      return val == null ? memo : memo.concat(val);
    }, []));
  };

  var makeFilterMethod = function makeFilterMethod(filterFn) {
    return function (match, container) {
      var testFn;
      container = container || this;

      if (typeof match === 'string') {
        testFn = cssSelect.compile(match, container.options);
      } else if (typeof match === 'function') {
        testFn = function testFn(el, i) {
          return match.call(el, i, el);
        };
      } else if (match.cheerio) {
        testFn = match.is.bind(match);
      } else {
        testFn = function testFn(el) {
          return match === el;
        };
      }

      return container._make(filterFn(this, testFn));
    };
  };

  exports.filter = makeFilterMethod(_.filter);
  exports.not = makeFilterMethod(_.reject);

  exports.has = function (selectorOrHaystack) {
    var that = this;
    return exports.filter.call(this, function () {
      return that._make(this).find(selectorOrHaystack).length > 0;
    });
  };

  exports.first = function () {
    return this.length > 1 ? this._make(this[0]) : this;
  };

  exports.last = function () {
    return this.length > 1 ? this._make(this[this.length - 1]) : this;
  }; // Reduce the set of matched elements to the one at the specified index.


  exports.eq = function (i) {
    i = +i; // Use the first identity optimization if possible

    if (i === 0 && this.length <= 1) return this;
    if (i < 0) i = this.length + i;
    return this[i] ? this._make(this[i]) : this._make([]);
  }; // Retrieve the DOM elements matched by the jQuery object.


  exports.get = function (i) {
    if (i == null) {
      return Array.prototype.slice.call(this);
    } else {
      return this[i < 0 ? this.length + i : i];
    }
  }; // Search for a given element from among the matched elements.


  exports.index = function (selectorOrNeedle) {
    var $haystack, needle;

    if (arguments.length === 0) {
      $haystack = this.parent().children();
      needle = this[0];
    } else if (typeof selectorOrNeedle === 'string') {
      $haystack = this._make(selectorOrNeedle);
      needle = this[0];
    } else {
      $haystack = this;
      needle = selectorOrNeedle.cheerio ? selectorOrNeedle[0] : selectorOrNeedle;
    }

    return $haystack.get().indexOf(needle);
  };

  exports.slice = function () {
    return this._make([].slice.apply(this, arguments));
  };

  function traverseParents(self, elem, selector, limit) {
    var elems = [];

    while (elem && elems.length < limit) {
      if (!selector || exports.filter.call([elem], selector, self).length) {
        elems.push(elem);
      }

      elem = elem.parent;
    }

    return elems;
  } // End the most recent filtering operation in the current chain and return the
  // set of matched elements to its previous state.


  exports.end = function () {
    return this.prevObject || this._make([]);
  };

  exports.add = function (other, context) {
    var selection = this._make(other, context);

    var contents = uniqueSort(selection.get().concat(this.get()));

    for (var i = 0; i < contents.length; ++i) {
      selection[i] = contents[i];
    }

    selection.length = contents.length;
    return selection;
  }; // Add the previous set of elements on the stack to the current set, optionally
  // filtered by a selector.


  exports.addBack = function (selector) {
    return this.add(arguments.length ? this.prevObject.filter(selector) : this.prevObject);
  };
  });

  /**
   * Module dependencies
   */
  var serialize$1 = require('dom-serializer'),
      defaultOptions = require('./options')["default"],
      flattenOptions = require('./options').flatten,
      select = require('css-select'),
      parse$4 = require('./parse'),
      _$1 = {
    merge: require('lodash/merge'),
    defaults: require('lodash/defaults')
  };
  /**
   * $.load(str)
   */


  exports.load = function (content, options, isDocument) {
    var Cheerio = require('./cheerio');

    options = _$1.defaults(flattenOptions(options || {}), defaultOptions);
    if (isDocument === void 0) isDocument = true;
    var root = parse$4(content, options, isDocument);

    var initialize = function initialize(selector, context, r, opts) {
      if (!(this instanceof initialize)) {
        return new initialize(selector, context, r, opts);
      }

      opts = _$1.defaults(opts || {}, options);
      return Cheerio.call(this, selector, context, r || root, opts);
    }; // Ensure that selections created by the "loaded" `initialize` function are
    // true Cheerio instances.


    initialize.prototype = Object.create(Cheerio.prototype);
    initialize.prototype.constructor = initialize; // Mimic jQuery's prototype alias for plugin authors.

    initialize.fn = initialize.prototype; // Keep a reference to the top-level scope so we can chain methods that implicitly
    // resolve selectors; e.g. $("<span>").(".bar"), which otherwise loses ._root

    initialize.prototype._originalRoot = root; // Add in the static methods

    _$1.merge(initialize, exports); // Add in the root


    initialize._root = root; // store options

    initialize._options = options;
    return initialize;
  };
  /*
  * Helper function
  */


  function render(that, dom, options) {
    if (!dom) {
      if (that._root && that._root.children) {
        dom = that._root.children;
      } else {
        return '';
      }
    } else if (typeof dom === 'string') {
      dom = select(dom, that._root, options);
    }

    return serialize$1(dom, options);
  }
  /**
   * $.html([selector | dom], [options])
   */


  exports.html = function (dom, options) {
    // be flexible about parameters, sometimes we call html(),
    // with options as only parameter
    // check dom argument for dom element specific properties
    // assume there is no 'length' or 'type' properties in the options object
    if (Object.prototype.toString.call(dom) === '[object Object]' && !options && !('length' in dom) && !('type' in dom)) {
      options = dom;
      dom = undefined;
    } // sometimes $.html() used without preloading html
    // so fallback non existing options to the default ones


    options = _$1.defaults(flattenOptions(options || {}), this._options, defaultOptions);
    return render(this, dom, options);
  };
  /**
   * $.xml([selector | dom])
   */


  exports.xml = function (dom) {
    var options = _$1.defaults({
      xml: true
    }, this._options);

    return render(this, dom, options);
  };
  /**
   * $.text(dom)
   */


  exports.text = function (elems) {
    if (!elems) {
      elems = this.root();
    }

    var ret = '',
        len = elems.length,
        elem;

    for (var i = 0; i < len; i++) {
      elem = elems[i];
      if (elem.type === 'text') ret += elem.data;else if (elem.children && elem.type !== 'comment' && elem.tagName !== 'script' && elem.tagName !== 'style') {
        ret += exports.text(elem.children);
      }
    }

    return ret;
  };
  /**
   * $.parseHTML(data [, context ] [, keepScripts ])
   * Parses a string into an array of DOM nodes. The `context` argument has no
   * meaning for Cheerio, but it is maintained for API compatibility with jQuery.
   */


  exports.parseHTML = function (data, context, keepScripts) {
    var parsed;

    if (!data || typeof data !== 'string') {
      return null;
    }

    if (typeof context === 'boolean') {
      keepScripts = context;
    }

    parsed = this.load(data, defaultOptions, false);

    if (!keepScripts) {
      parsed('script').remove();
    } // The `children` array is used by Cheerio internally to group elements that
    // share the same parents. When nodes created through `parseHTML` are
    // inserted into previously-existing DOM structures, they will be removed
    // from the `children` array. The results of `parseHTML` should remain
    // constant across these operations, so a shallow copy should be returned.


    return parsed.root()[0].children.slice();
  };
  /**
   * $.root()
   */


  exports.root = function () {
    return this(this._root);
  };
  /**
   * $.contains()
   */


  exports.contains = function (container, contained) {
    // According to the jQuery API, an element does not "contain" itself
    if (contained === container) {
      return false;
    } // Step up the descendants, stopping when the root element is reached
    // (signaled by `.parent` returning a reference to the same object)


    while (contained && contained !== contained.parent) {
      contained = contained.parent;

      if (contained === container) {
        return true;
      }
    }

    return false;
  };
  /**
   * $.merge()
   */


  exports.merge = function (arr1, arr2) {
    if (!(isArrayLike$2(arr1) && isArrayLike$2(arr2))) {
      return;
    }

    var newLength = arr1.length + arr2.length;
    var i = 0;

    while (i < arr2.length) {
      arr1[i + arr1.length] = arr2[i];
      i++;
    }

    arr1.length = newLength;
    return arr1;
  };

  function isArrayLike$2(item) {
    if (Array.isArray(item)) {
      return true;
    }

    if (_typeof(item) !== 'object') {
      return false;
    }

    if (!item.hasOwnProperty('length')) {
      return false;
    }

    if (typeof item.length !== 'number') {
      return false;
    }

    if (item.length < 0) {
      return false;
    }

    var i = 0;

    while (i < item.length) {
      if (!(i in item)) {
        return false;
      }

      i++;
    }

    return true;
  }

  var _static = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  /**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var _arrayPush = arrayPush;

  /** Built-in value references. */


  var spreadableSymbol = _Symbol_1 ? _Symbol_1.isConcatSpreadable : undefined;
  /**
   * Checks if `value` is a flattenable `arguments` object or array.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
   */

  function isFlattenable(value) {
    return isArray_1(value) || isArguments_1(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
  }

  var _isFlattenable = isFlattenable;

  /**
   * The base implementation of `_.flatten` with support for restricting flattening.
   *
   * @private
   * @param {Array} array The array to flatten.
   * @param {number} depth The maximum recursion depth.
   * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
   * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
   * @param {Array} [result=[]] The initial result value.
   * @returns {Array} Returns the new flattened array.
   */


  function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1,
        length = array.length;
    predicate || (predicate = _isFlattenable);
    result || (result = []);

    while (++index < length) {
      var value = array[index];

      if (depth > 0 && predicate(value)) {
        if (depth > 1) {
          // Recursively flatten arrays (susceptible to call stack limits).
          baseFlatten(value, depth - 1, predicate, isStrict, result);
        } else {
          _arrayPush(result, value);
        }
      } else if (!isStrict) {
        result[result.length] = value;
      }
    }

    return result;
  }

  var _baseFlatten = baseFlatten;

  /**
   * Flattens `array` a single level deep.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Array
   * @param {Array} array The array to flatten.
   * @returns {Array} Returns the new flattened array.
   * @example
   *
   * _.flatten([1, [2, [3, [4]], 5]]);
   * // => [1, 2, [3, [4]], 5]
   */


  function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? _baseFlatten(array, 1) : [];
  }

  var flatten_1 = flatten;

  var require$$11 = /*@__PURE__*/getAugmentedNamespace(_static);

  var manipulation$2 = createCommonjsModule(function (module, exports) {
  var updateDOM = parse$1.update,
      evaluate = parse$1.evaluate,
      domEach = utils.domEach,
      cloneDom = utils.cloneDom,
      isHtml = utils.isHtml,
      slice = Array.prototype.slice,
      _ = {
    flatten: flatten_1,
    bind: bind_1,
    forEach: forEach_1
  }; // Create an array of nodes, recursing into arrays and parsing strings if
  // necessary


  exports._makeDomArray = function makeDomArray(elem, clone) {
    if (elem == null) {
      return [];
    } else if (elem.cheerio) {
      return clone ? cloneDom(elem.get(), elem.options) : elem.get();
    } else if (Array.isArray(elem)) {
      return _.flatten(elem.map(function (el) {
        return this._makeDomArray(el, clone);
      }, this));
    } else if (typeof elem === 'string') {
      return evaluate(elem, this.options, false);
    } else {
      return clone ? cloneDom([elem]) : [elem];
    }
  };

  var _insert = function _insert(concatenator) {
    return function () {
      var elems = slice.call(arguments),
          lastIdx = this.length - 1;
      return domEach(this, function (i, el) {
        var dom, domSrc;

        if (typeof elems[0] === 'function') {
          domSrc = elems[0].call(el, i, require$$11.html(el.children));
        } else {
          domSrc = elems;
        }

        dom = this._makeDomArray(domSrc, i < lastIdx);
        concatenator(dom, el.children, el);
      });
    };
  };
  /*
   * Modify an array in-place, removing some number of elements and adding new
   * elements directly following them.
   *
   * @param {Array} array Target array to splice.
   * @param {Number} spliceIdx Index at which to begin changing the array.
   * @param {Number} spliceCount Number of elements to remove from the array.
   * @param {Array} newElems Elements to insert into the array.
   *
   * @api private
   */


  var uniqueSplice = function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
    var spliceArgs = [spliceIdx, spliceCount].concat(newElems),
        prev = array[spliceIdx - 1] || null,
        next = array[spliceIdx] || null;
    var idx, len, prevIdx, node, oldParent; // Before splicing in new elements, ensure they do not already appear in the
    // current array.

    for (idx = 0, len = newElems.length; idx < len; ++idx) {
      node = newElems[idx];
      oldParent = node.parent || node.root;
      prevIdx = oldParent && oldParent.children.indexOf(newElems[idx]);

      if (oldParent && prevIdx > -1) {
        oldParent.children.splice(prevIdx, 1);

        if (parent === oldParent && spliceIdx > prevIdx) {
          spliceArgs[0]--;
        }
      }

      node.root = null;
      node.parent = parent;

      if (node.prev) {
        node.prev.next = node.next || null;
      }

      if (node.next) {
        node.next.prev = node.prev || null;
      }

      node.prev = newElems[idx - 1] || prev;
      node.next = newElems[idx + 1] || next;
    }

    if (prev) {
      prev.next = newElems[0];
    }

    if (next) {
      next.prev = newElems[newElems.length - 1];
    }

    return array.splice.apply(array, spliceArgs);
  };

  exports.appendTo = function (target) {
    if (!target.cheerio) {
      target = this.constructor.call(this.constructor, target, null, this._originalRoot);
    }

    target.append(this);
    return this;
  };

  exports.prependTo = function (target) {
    if (!target.cheerio) {
      target = this.constructor.call(this.constructor, target, null, this._originalRoot);
    }

    target.prepend(this);
    return this;
  };

  exports.append = _insert(function (dom, children, parent) {
    uniqueSplice(children, children.length, 0, dom, parent);
  });
  exports.prepend = _insert(function (dom, children, parent) {
    uniqueSplice(children, 0, 0, dom, parent);
  });

  exports.wrap = function (wrapper) {
    var wrapperFn = typeof wrapper === 'function' && wrapper,
        lastIdx = this.length - 1;

    _.forEach(this, _.bind(function (el, i) {
      var parent = el.parent || el.root,
          siblings = parent.children,
          wrapperDom,
          elInsertLocation,
          j,
          index;

      if (!parent) {
        return;
      }

      if (wrapperFn) {
        wrapper = wrapperFn.call(el, i);
      }

      if (typeof wrapper === 'string' && !isHtml(wrapper)) {
        wrapper = this.parents().last().find(wrapper).clone();
      }

      wrapperDom = this._makeDomArray(wrapper, i < lastIdx).slice(0, 1);
      elInsertLocation = wrapperDom[0]; // Find the deepest child. Only consider the first tag child of each node
      // (ignore text); stop if no children are found.

      j = 0;

      while (elInsertLocation && elInsertLocation.children) {
        if (j >= elInsertLocation.children.length) {
          break;
        }

        if (elInsertLocation.children[j].type === 'tag') {
          elInsertLocation = elInsertLocation.children[j];
          j = 0;
        } else {
          j++;
        }
      }

      index = siblings.indexOf(el);
      updateDOM([el], elInsertLocation); // The previous operation removed the current element from the `siblings`
      // array, so the `dom` array can be inserted without removing any
      // additional elements.

      uniqueSplice(siblings, index, 0, wrapperDom, parent);
    }, this));

    return this;
  };

  exports.after = function () {
    var elems = slice.call(arguments),
        lastIdx = this.length - 1;
    domEach(this, function (i, el) {
      var parent = el.parent || el.root;

      if (!parent) {
        return;
      }

      var siblings = parent.children,
          index = siblings.indexOf(el),
          domSrc,
          dom; // If not found, move on

      if (index < 0) return;

      if (typeof elems[0] === 'function') {
        domSrc = elems[0].call(el, i, require$$11.html(el.children));
      } else {
        domSrc = elems;
      }

      dom = this._makeDomArray(domSrc, i < lastIdx); // Add element after `this` element

      uniqueSplice(siblings, index + 1, 0, dom, parent);
    });
    return this;
  };

  exports.insertAfter = function (target) {
    var clones = [],
        self = this;

    if (typeof target === 'string') {
      target = this.constructor.call(this.constructor, target, null, this._originalRoot);
    }

    target = this._makeDomArray(target);
    self.remove();
    domEach(target, function (i, el) {
      var clonedSelf = self._makeDomArray(self.clone());

      var parent = el.parent || el.root;

      if (!parent) {
        return;
      }

      var siblings = parent.children,
          index = siblings.indexOf(el); // If not found, move on

      if (index < 0) return; // Add cloned `this` element(s) after target element

      uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
      clones.push(clonedSelf);
    });
    return this.constructor.call(this.constructor, this._makeDomArray(clones));
  };

  exports.before = function () {
    var elems = slice.call(arguments),
        lastIdx = this.length - 1;
    domEach(this, function (i, el) {
      var parent = el.parent || el.root;

      if (!parent) {
        return;
      }

      var siblings = parent.children,
          index = siblings.indexOf(el),
          domSrc,
          dom; // If not found, move on

      if (index < 0) return;

      if (typeof elems[0] === 'function') {
        domSrc = elems[0].call(el, i, require$$11.html(el.children));
      } else {
        domSrc = elems;
      }

      dom = this._makeDomArray(domSrc, i < lastIdx); // Add element before `el` element

      uniqueSplice(siblings, index, 0, dom, parent);
    });
    return this;
  };

  exports.insertBefore = function (target) {
    var clones = [],
        self = this;

    if (typeof target === 'string') {
      target = this.constructor.call(this.constructor, target, null, this._originalRoot);
    }

    target = this._makeDomArray(target);
    self.remove();
    domEach(target, function (i, el) {
      var clonedSelf = self._makeDomArray(self.clone());

      var parent = el.parent || el.root;

      if (!parent) {
        return;
      }

      var siblings = parent.children,
          index = siblings.indexOf(el); // If not found, move on

      if (index < 0) return; // Add cloned `this` element(s) after target element

      uniqueSplice(siblings, index, 0, clonedSelf, parent);
      clones.push(clonedSelf);
    });
    return this.constructor.call(this.constructor, this._makeDomArray(clones));
  };
  /*
    remove([selector])
  */


  exports.remove = function (selector) {
    var elems = this; // Filter if we have selector

    if (selector) elems = elems.filter(selector);
    domEach(elems, function (i, el) {
      var parent = el.parent || el.root;

      if (!parent) {
        return;
      }

      var siblings = parent.children,
          index = siblings.indexOf(el);
      if (index < 0) return;
      siblings.splice(index, 1);

      if (el.prev) {
        el.prev.next = el.next;
      }

      if (el.next) {
        el.next.prev = el.prev;
      }

      el.prev = el.next = el.parent = el.root = null;
    });
    return this;
  };

  exports.replaceWith = function (content) {
    var self = this;
    domEach(this, function (i, el) {
      var parent = el.parent || el.root;

      if (!parent) {
        return;
      }

      var siblings = parent.children,
          dom = self._makeDomArray(typeof content === 'function' ? content.call(el, i, el) : content),
          index; // In the case that `dom` contains nodes that already exist in other
      // structures, ensure those nodes are properly removed.


      updateDOM(dom, null);
      index = siblings.indexOf(el); // Completely remove old element

      uniqueSplice(siblings, index, 1, dom, parent);
      el.parent = el.prev = el.next = el.root = null;
    });
    return this;
  };

  exports.empty = function () {
    domEach(this, function (i, el) {
      _.forEach(el.children, function (child) {
        child.next = child.prev = child.parent = null;
      });

      el.children.length = 0;
    });
    return this;
  };
  /**
   * Set/Get the HTML
   */


  exports.html = function (str) {
    if (str === undefined) {
      if (!this[0] || !this[0].children) return null;
      return require$$11.html(this[0].children, this.options);
    }

    var opts = this.options;
    domEach(this, function (i, el) {
      _.forEach(el.children, function (child) {
        child.next = child.prev = child.parent = null;
      });

      var content = str.cheerio ? str.clone().get() : evaluate('' + str, opts, false);
      updateDOM(content, el);
    });
    return this;
  };

  exports.toString = function () {
    return require$$11.html(this, this.options);
  };

  exports.text = function (str) {
    // If `str` is undefined, act as a "getter"
    if (str === undefined) {
      return require$$11.text(this);
    } else if (typeof str === 'function') {
      // Function support
      return domEach(this, function (i, el) {
        var $el = [el];
        return exports.text.call($el, str.call(el, i, require$$11.text($el)));
      });
    } // Append text node to each selected elements


    domEach(this, function (i, el) {
      _.forEach(el.children, function (child) {
        child.next = child.prev = child.parent = null;
      });

      var elem = {
        data: '' + str,
        type: 'text',
        parent: el,
        prev: null,
        next: null,
        children: []
      };
      updateDOM(elem, el);
    });
    return this;
  };

  exports.clone = function () {
    return this._make(cloneDom(this.get(), this.options));
  };
  });

  var domEach$2 = require('../utils').domEach,
      _$2 = {
    pick: require('lodash/pick')
  };

  var toString = Object.prototype.toString;
  /**
   * Set / Get css.
   *
   * @param {String|Object} prop
   * @param {String} val
   * @return {self}
   * @api public
   */

  exports.css = function (prop, val) {
    if (arguments.length === 2 || // When `prop` is a "plain" object
    toString.call(prop) === '[object Object]') {
      return domEach$2(this, function (idx, el) {
        setCss(el, prop, val, idx);
      });
    } else {
      return getCss(this[0], prop);
    }
  };
  /**
   * Set styles of all elements.
   *
   * @param {String|Object} prop
   * @param {String} val
   * @param {Number} idx - optional index within the selection
   * @return {self}
   * @api private
   */


  function setCss(el, prop, val, idx) {
    if ('string' == typeof prop) {
      var styles = getCss(el);

      if (typeof val === 'function') {
        val = val.call(el, idx, styles[prop]);
      }

      if (val === '') {
        delete styles[prop];
      } else if (val != null) {
        styles[prop] = val;
      }

      el.attribs.style = stringify$2(styles);
    } else if ('object' == _typeof(prop)) {
      Object.keys(prop).forEach(function (k) {
        setCss(el, k, prop[k]);
      });
    }
  }
  /**
   * Get parsed styles of the first element.
   *
   * @param {String} prop
   * @return {Object}
   * @api private
   */


  function getCss(el, prop) {
    var styles = parse$5(el.attribs.style);

    if (typeof prop === 'string') {
      return styles[prop];
    } else if (Array.isArray(prop)) {
      return _$2.pick(styles, prop);
    } else {
      return styles;
    }
  }
  /**
   * Stringify `obj` to styles.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */


  function stringify$2(obj) {
    return Object.keys(obj || {}).reduce(function (str, prop) {
      return str += '' + (str ? ' ' : '') + prop + ': ' + obj[prop] + ';';
    }, '');
  }
  /**
   * Parse `styles`.
   *
   * @param {String} styles
   * @return {Object}
   * @api private
   */


  function parse$5(styles) {
    styles = (styles || '').trim();
    if (!styles) return {};
    return styles.split(';').reduce(function (obj, str) {
      var n = str.indexOf(':'); // skip if there is no :, or if it is the first/last character

      if (n < 1 || n === str.length - 1) return obj;
      obj[str.slice(0, n).trim()] = str.slice(n + 1).trim();
      return obj;
    }, {});
  }

  var css = /*#__PURE__*/Object.freeze({
    __proto__: null
  });

  /**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
  function arrayMap(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length,
        result = Array(length);

    while (++index < length) {
      result[index] = iteratee(array[index], index, array);
    }

    return result;
  }

  var _arrayMap = arrayMap;

  /**
   * The base implementation of `_.map` without support for iteratee shorthands.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */


  function baseMap(collection, iteratee) {
    var index = -1,
        result = isArrayLike_1(collection) ? Array(collection.length) : [];
    _baseEach(collection, function (value, key, collection) {
      result[++index] = iteratee(value, key, collection);
    });
    return result;
  }

  var _baseMap = baseMap;

  /**
   * Creates an array of values by running each element in `collection` thru
   * `iteratee`. The iteratee is invoked with three arguments:
   * (value, index|key, collection).
   *
   * Many lodash methods are guarded to work as iteratees for methods like
   * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
   *
   * The guarded methods are:
   * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
   * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
   * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
   * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Collection
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} [iteratee=_.identity] The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   * @example
   *
   * function square(n) {
   *   return n * n;
   * }
   *
   * _.map([4, 8], square);
   * // => [16, 64]
   *
   * _.map({ 'a': 4, 'b': 8 }, square);
   * // => [16, 64] (iteration order is not guaranteed)
   *
   * var users = [
   *   { 'user': 'barney' },
   *   { 'user': 'fred' }
   * ];
   *
   * // The `_.property` iteratee shorthand.
   * _.map(users, 'user');
   * // => ['barney', 'fred']
   */


  function map$2(collection, iteratee) {
    var func = isArray_1(collection) ? _arrayMap : _baseMap;
    return func(collection, baseIteratee$1(iteratee, 3));
  }

  var map_1 = map$2;

  // https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
  // https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
  var submittableSelector = 'input,select,textarea,keygen',
      r20 = /%20/g,
      rCRLF = /\r?\n/g,
      _$3 = {
    map: map_1
  };

  var serialize$2 = function () {
    // Convert form elements into name/value objects
    var arr = this.serializeArray(); // Serialize each element into a key/value string

    var retArr = _$3.map(arr, function (data) {
      return encodeURIComponent(data.name) + '=' + encodeURIComponent(data.value);
    }); // Return the resulting serialization


    return retArr.join('&').replace(r20, '+');
  };

  var serializeArray = function () {
    // Resolve all form elements from either forms or collections of form elements
    var Cheerio = this.constructor;
    return this.map(function () {
      var elem = this;
      var $elem = Cheerio(elem);

      if (elem.name === 'form') {
        return $elem.find(submittableSelector).toArray();
      } else {
        return $elem.filter(submittableSelector).toArray();
      }
    }).filter( // Verify elements have a name (`attr.name`) and are not disabled (`:disabled`)
    '[name!=""]:not(:disabled)' // and cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
    + ':not(:submit, :button, :image, :reset, :file)' // and are either checked/don't have a checkable state
    + ':matches([checked], :not(:checkbox, :radio))' // Convert each of the elements to its value(s)
    ).map(function (i, elem) {
      var $elem = Cheerio(elem);
      var name = $elem.attr('name');
      var value = $elem.val(); // If there is no value set (e.g. `undefined`, `null`), then default value to empty

      if (value == null) {
        value = '';
      } // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs


      if (Array.isArray(value)) {
        return _$3.map(value, function (val) {
          // We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
          //   These can occur inside of `<textarea>'s`
          return {
            name: name,
            value: val.replace(rCRLF, '\r\n')
          };
        }); // Otherwise (e.g. `<input type="text">`, return only one key/value pair
      } else {
        return {
          name: name,
          value: value.replace(rCRLF, '\r\n')
        };
      } // Convert our result to an array

    }).get();
  };

  var forms = {
  	serialize: serialize$2,
  	serializeArray: serializeArray
  };

  var require$$6 = /*@__PURE__*/getAugmentedNamespace(attributes);

  var require$$9 = /*@__PURE__*/getAugmentedNamespace(css);

  var cheerio = createCommonjsModule(function (module) {
  /*
    Module dependencies
  */
  var defaultOptions = options["default"],
      flattenOptions = options.flatten,
      isHtml = utils.isHtml,
      _ = {
    extend: assignIn_1,
    bind: bind_1,
    forEach: forEach_1,
    defaults: defaults_1
  };
  /*
   * The API
   */


  var api = [require$$6, traversing, manipulation$2, require$$9, forms];
  /*
   * Instance of cheerio
   */

  var Cheerio = module.exports = function (selector, context, root, options) {
    if (!(this instanceof Cheerio)) return new Cheerio(selector, context, root, options);
    this.options = _.defaults(flattenOptions(options), this.options, defaultOptions); // $(), $(null), $(undefined), $(false)

    if (!selector) return this;

    if (root) {
      if (typeof root === 'string') root = parse$1(root, this.options, false);
      this._root = Cheerio.call(this, root);
    } // $($)


    if (selector.cheerio) return selector; // $(dom)

    if (isNode(selector)) selector = [selector]; // $([dom])

    if (Array.isArray(selector)) {
      _.forEach(selector, _.bind(function (elem, idx) {
        this[idx] = elem;
      }, this));

      this.length = selector.length;
      return this;
    } // $(<html>)


    if (typeof selector === 'string' && isHtml(selector)) {
      return Cheerio.call(this, parse$1(selector, this.options, false).children);
    } // If we don't have a context, maybe we have a root, from loading


    if (!context) {
      context = this._root;
    } else if (typeof context === 'string') {
      if (isHtml(context)) {
        // $('li', '<ul>...</ul>')
        context = parse$1(context, this.options, false);
        context = Cheerio.call(this, context);
      } else {
        // $('li', 'ul')
        selector = [context, selector].join(' ');
        context = this._root;
      } // $('li', node), $('li', [nodes])

    } else if (!context.cheerio) {
      context = Cheerio.call(this, context);
    } // If we still don't have a context, return


    if (!context) return this; // #id, .class, tag

    return context.find(selector);
  };
  /**
   * Mix in `static`
   */


  _.extend(Cheerio, require$$11);
  /*
   * Set a signature of the object
   */


  Cheerio.prototype.cheerio = '[cheerio object]';
  /*
   * Make cheerio an array-like object
   */

  Cheerio.prototype.length = 0;
  Cheerio.prototype.splice = Array.prototype.splice;
  /*
   * Make a cheerio object
   *
   * @api private
   */

  Cheerio.prototype._make = function (dom, context) {
    var cheerio = new this.constructor(dom, context, this._root, this.options);
    cheerio.prevObject = this;
    return cheerio;
  };
  /**
   * Turn a cheerio object into an array
   */


  Cheerio.prototype.toArray = function () {
    return this.get();
  };
  /**
   * Plug in the API
   */


  api.forEach(function (mod) {
    _.extend(Cheerio.prototype, mod);
  });

  var isNode = function isNode(obj) {
    return obj.name || obj.type === 'text' || obj.type === 'comment';
  };
  });

  var name = "cheerio";
  var version = "1.0.0-rc.3";
  var description = "Tiny, fast, and elegant implementation of core jQuery designed specifically for the server";
  var author = "Matt Mueller <mattmuelle@gmail.com> (mat.io)";
  var license = "MIT";
  var keywords = [
  	"htmlparser",
  	"jquery",
  	"selector",
  	"scraper",
  	"parser",
  	"html"
  ];
  var repository = {
  	type: "git",
  	url: "git://github.com/cheeriojs/cheerio.git"
  };
  var main = "./index.js";
  var files = [
  	"index.js",
  	"lib"
  ];
  var engines = {
  	node: ">= 0.6"
  };
  var dependencies = {
  	"css-select": "~1.2.0",
  	"dom-serializer": "~0.1.1",
  	entities: "~1.1.1",
  	htmlparser2: "^3.9.1",
  	lodash: "^4.15.0",
  	parse5: "^3.0.1"
  };
  var devDependencies = {
  	benchmark: "^2.1.0",
  	coveralls: "^2.11.9",
  	"expect.js": "~0.3.1",
  	istanbul: "^0.4.3",
  	jquery: "^3.0.0",
  	jsdom: "^9.2.1",
  	jshint: "^2.9.2",
  	mocha: "^3.1.2",
  	xyz: "~1.1.0"
  };
  var scripts = {
  	test: "make test"
  };
  var require$$1$2 = {
  	name: name,
  	version: version,
  	description: description,
  	author: author,
  	license: license,
  	keywords: keywords,
  	repository: repository,
  	main: main,
  	files: files,
  	engines: engines,
  	dependencies: dependencies,
  	devDependencies: devDependencies,
  	scripts: scripts
  };

  var cheerio$1 = createCommonjsModule(function (module, exports) {
  /**
   * Export cheerio (with )
   */
  exports = module.exports = cheerio;
  /*
    Export the version
  */

  exports.version = require$$1$2.version;
  });

  var siareCpfCnpjProvider = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cpfCnpj) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/NFAE/SERVICO_027", {
                "headers": {
                  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,es;q=0.6",
                  "cache-control": "max-age=0",
                  "content-type": "application/x-www-form-urlencoded",
                  "sec-fetch-dest": "document",
                  "sec-fetch-mode": "navigate",
                  "sec-fetch-site": "same-origin",
                  "sec-fetch-user": "?1",
                  "upgrade-insecure-requests": "1"
                },
                "referrer": "https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/NFAE/SERVICO_027",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": "ACAO=PROCURAR&unifwScrollTop=0&unifwScrollLeft=448&txtIndicadorUC=Requerer+NFA&numeroAbaAnterior=2&tipoDestinatario.identificador=4&produtorRuralLogado=false&tipoRequerente.desRequerente=Pessoa+Jur%EDdica+N%E3o+Inscrita&tipo.descricao=Sa%EDda&circulacao.desCirculacao=Interna&operacaoRequerimentoNFASimplificado=false&remetente.cpfCnpj=".concat(cpfCnpj, "&remetente.ie=&remetente.nome=&remetente.cpfResponsavel=&remetente.foneFax=&remetente.email=&enderecoRemetente.cep=&enderecoRemetente.pais=&enderecoRemetente.uf=&enderecoRemetente.idMunicipio=&enderecoRemetente.municipio=&enderecoRemetente.distrito=&enderecoRemetente.bairro=&enderecoRemetente.tipoLogradouro=&enderecoRemetente.logradouro=&enderecoRemetente.numero=&enderecoRemetente.complemento1=&destinatario.cpfCnpj=&destinatario.ie=&destinatario.nome=&destinatario.foneFax=&enderecoDestinatario.cep=&enderecoDestinatario.pais=&enderecoDestinatario.uf=&enderecoDestinatario.idMunicipio=&enderecoDestinatario.municipio=&enderecoDestinatario.distrito=&enderecoDestinatario.bairro=&enderecoDestinatario.tipoLogradouro=&enderecoDestinatario.logradouro=&enderecoDestinatario.numero=&enderecoDestinatario.complemento1=&destinatario.tipoIdentificadorIeDestinatario.id=1&idMunicipioInicioTransp=&dsMunicipioInicioTransp="),
                "method": "POST",
                "mode": "cors"
              }).then(parseResponse$1).then(extractValuesData$1)["catch"](throwApplicationError$1);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function siareCpfCnpjProvider(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var parseResponse$1 = function parseResponse(res) {
    if (res.ok === false || res.status !== 200) {
      throw new Error("CPF/CNPJ n\xE3o encontrado na base do Siare.");
    }

    return res.text();
  };

  var extractValuesData$1 = function extractValuesData(res) {
    var $ = cheerio$1.load(res);
    var tr1 = $('div.boxConteudo table').eq(2);
    var dataCheerio = $(tr1).find('tr:nth-child(3)  td:nth-child(2) span span').html();

    if (dataCheerio) {
      var tr2 = $('div.boxConteudo table').eq(3);
      var data = {
        name: dataCheerio.trim(),
        fantasy: dataCheerio.trim(),
        cep: $(tr2).find('tr:nth-child(2) td:nth-child(2) span span').html(),
        state: $(tr2).find('tr:nth-child(3) td:nth-child(2) span span').html(),
        city: $(tr2).find('tr:nth-child(3) td:nth-child(4) span span').html(),
        neighborhood: $(tr2).find('tr:nth-child(5) td:nth-child(2) span span').html().trim(),
        street: ($(tr2).find('tr:nth-child(6) td:nth-child(2) span span').html() + ' ' + $(tr2).find('tr:nth-child(6) td:nth-child(4) span span').html()).trim(),
        streetnumber: $(tr2).find('tr:nth-child(6) td:nth-child(5) span:nth-child(2) span').html().trim(),
        complement: $(tr2).find('tr:nth-child(7) td:nth-child(2) span span').html().trim(),
        phone: '',
        mail: '',
        service: 'siare'
      };
      return data;
    } else {
      throw new Error("CPF/CNPJ n\xE3o encontrado na base de dados do Siare.");
    }
  };

  var throwApplicationError$1 = function throwApplicationError(error) {
    var serviceError = new ServiceError({
      message: error.message,
      service: 'siare'
    });

    if (error.name === 'FetchError') {
      serviceError.message = 'Erro ao se conectar com o site Siare.';
    }

    throw serviceError;
  };

  var getAvailableServices = function getAvailableServices(cpfCnpj) {
    if (cpfCnpj.length === 11) {
      return {
        siare: siareCpfCnpjProvider
      };
    }

    return {
      receitaws: receitaWsProvider,
      siare: siareCpfCnpjProvider
    };
  };

  var validatorCpfCnpj = function validatorCpfCnpj(val) {
    // Clean CPF/CNPJ
    var claenCpfCnpj = function claenCpfCnpj(cpfCnpj) {
      var characters = cpfCnpj.trim();
      characters = characters.replace(/\D/g, '');
      return characters;
    }; // Check if is CPF or CNPJ
    // CPF has 11 characters, CNPJ has 14


    var checkCpfCnpj = function checkCpfCnpj(cpfCnpj) {
      if (cpfCnpj.length === 11) {
        return 'CPF';
      }

      if (cpfCnpj.length === 14) {
        return 'CNPJ';
      }

      return false;
    };

    var checkEquality = function checkEquality(cpfCnpj) {
      var characters = cpfCnpj.split(''); // Considers that all numbers are equal

      var allEquals = true; // get First characters in variable

      var lastVal = characters[0]; // Check the difference of all characters, if the last number is different we have a different number

      characters.forEach(function (e) {
        if (lastVal !== e) {
          allEquals = false;
        } // Records the last checked number


        lastVal = e;
      }); // Return true for all numbers equals or false for differents

      return allEquals;
    };

    var calcDigitsPositions = function calcDigitsPositions(digits) {
      var positions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
      var sumDigits = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      // Sum the digits with the position
      // Ex. For 10 positions:
      //   0    2    5    4    6    2    8    8   4
      // x10   x9   x8   x7   x6   x5   x4   x3  x2
      //   0 + 18 + 40 + 28 + 36 + 10 + 32 + 24 + 8 = 196
      for (var i = 0; i < digits.length; i += 1) {
        // Fill in the sum with the digit times the position
        sumDigits += digits[i] * positions; // Subtract 1 from the position

        positions -= 1; // Specific part for CNPJ
        // Ex .: 5-4-3-2-9-8-7-6-5-4-3-2

        if (positions < 2) positions = 9;
      } // Capture the rest of the division between sumDigits divided by 11
      // Ex .: 196% 11 = 9


      sumDigits %= 11; // Checks if sumDigits is less than 2

      if (sumDigits < 2) {
        // sumDigits will now be zero
        sumDigits = 0;
      } else {
        // If greater than 2, the result is 11 minus sumDigits
        // Ex .: 11 - 9 = 2
        // Our searched digit is 2
        sumDigits = 11 - sumDigits;
      } // Concatenates one more digit to the first nine digits
      // Ex .: 025462884 + 2 = 0254628842


      var cpfCnpj = "".concat(digits).concat(sumDigits);
      return cpfCnpj;
    };

    var validatesCpf = function validatesCpf(cpf) {
      // Capture the first 9 digits of the CPF
      // Ex .: 02546288423 = 025462884
      var digits = cpf.substring(0, 9); // Calculates the first 9 digits of the CPF to obtain the first digit

      var newCpf = calcDigitsPositions(digits); // Calculates the 10 digits of the CPF to obtain the last digit

      newCpf = calcDigitsPositions(newCpf, 11); // Checks if all numbers are the same

      if (checkEquality(cpf)) return false; // Checks whether the new CPF generated is identical to the submitted CPF

      if (newCpf === cpf) {
        // valid CPF
        return true;
      } // Invalid CPF


      return false;
    };

    var validatesCnpj = function validatesCnpj(cnpj) {
      // Captures the first 12 CNPJ numbers
      var firstNumberCnpj = cnpj.substring(0, 12); // Do the first calculation

      var firstCalculation = calcDigitsPositions(firstNumberCnpj, 5); // The second calculation is the same as the first, however, it starts at position 6

      var secondCalculation = calcDigitsPositions(firstCalculation, 6); // Concatenates the second digit with the CNPJ

      var newCnpj = secondCalculation; // Checks if all numbers are the same

      if (checkEquality(cnpj)) return false; // Checks whether the generated CNPJ is identical to the one sent

      if (newCnpj === cnpj) {
        // valid CNPJ
        return true;
      } // Invalid CNPJ


      return false;
    };

    var checkValidates = checkCpfCnpj(claenCpfCnpj(val)); // Validates CPF

    if (checkValidates === 'CPF') {
      // Returns true for valid cpf
      return validatesCpf(val);
    }

    if (checkValidates === 'CNPJ') {
      // Returns true for valid cpf
      return validatesCnpj(val);
    }

    return false;
  };

  var reverse = function reverse(promise) {
    return new Promise(function (resolve, reject) {
      return Promise.resolve(promise).then(reject, resolve);
    });
  };

  Promise.any = function (iterable) {
    return reverse(Promise.all(_toConsumableArray(iterable).map(reverse)));
  };

  var Promise$1 = Promise;

  var CPF_SIZE = 11;
  var CNPJ_SIZE = 14;
  function cpfCnpjPromise (_x) {
    return _ref.apply(this, arguments);
  }

  function _ref() {
    _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cpfCnpjValue) {
      var configurations,
          _args = arguments;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              configurations = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
              _context.next = 3;
              return Promise$1.resolve(cpfCnpjValue).then(validateInputType).then(function (cpfCnpjValue) {
                configurations.providers = configurations.providers ? configurations.providers : [];
                validateProviders(configurations.providers);
                return cpfCnpjValue;
              }).then(removeSpecialCharacters).then(validateInputLength).then(function (cpfCnpjValue) {
                return fetchCpfCnpjFromServices(cpfCnpjValue, configurations);
              })["catch"](handleServicesError)["catch"](throwApplicationError$2);

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _ref.apply(this, arguments);
  }

  var validateProviders = function validateProviders(providers) {
    var availableProviders = ['receitaws', 'siare'];

    if (!Array.isArray(providers)) {
      throw new CpfCnpjPromiseError({
        message: 'Erro ao inicializar a instância do CPFCNPJPromise.',
        type: 'validation_error',
        errors: [{
          message: "O par\xE2metro providers deve ser uma lista.",
          service: 'providers_validation'
        }]
      });
    }

    var _iterator = _createForOfIteratorHelper(providers),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var provider = _step.value;

        if (!availableProviders.includes(provider)) {
          throw new CpfCnpjPromiseError({
            message: 'Erro ao inicializar a instância do CPFCNPJPromise.',
            type: 'validation_error',
            errors: [{
              message: "O provider \"".concat(provider, "\" \xE9 inv\xE1lido. Os providers dispon\xEDveis s\xE3o: [\"").concat(availableProviders.join('", "'), "\"]."),
              service: 'providers_validation'
            }]
          });
        }

        return provider;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var validateInputType = function validateInputType(cpfCnpjValue) {
    var cpfCnpjTypeOf = _typeof(cpfCnpjValue);

    if (cpfCnpjTypeOf === 'number' || cpfCnpjTypeOf === 'string') {
      return cpfCnpjValue;
    }

    throw new CpfCnpjPromiseError({
      message: 'Erro ao inicializar a instância do CPFCNPJPromise.',
      type: 'validation_error',
      errors: [{
        message: 'Você deve chamar o construtor utilizando uma String ou um Number.',
        service: 'cpf_cnpj_validation'
      }]
    });
  };

  var removeSpecialCharacters = function removeSpecialCharacters(cpfCnpjValue) {
    // Clear the CPF/CNPJ to contain only numbers, removing dashes and periods
    return cpfCnpjValue.toString().replace(/\D/g, '');
  };

  function validateInputLength(cpfCnpjValue) {
    var tp = null;
    var tpSize = null;

    if (cpfCnpjValue.length === CPF_SIZE) {
      tp = 'CPF';
      tpSize = CPF_SIZE;
    } else if (cpfCnpjValue.length === CNPJ_SIZE) {
      tp = 'CNPJ';
      tpSize = CNPJ_SIZE;
    } else {
      tp = 'CPF/CNPJ';
      tpSize = "".concat(CPF_SIZE, " caracteres para CPF e ").concat(CNPJ_SIZE, " para CNPJ");
    }

    if (cpfCnpjValue.length === CPF_SIZE || cpfCnpjValue.length === CNPJ_SIZE) {
      if (!validatorCpfCnpj(cpfCnpjValue)) {
        throw new CpfCnpjPromiseError({
          message: "".concat(tp, " Inv\xE1lido!"),
          type: 'validation_error',
          errors: [{
            message: "".concat(tp, " Inv\xE1lido!"),
            service: 'cpf_cnpj_validation'
          }]
        });
      }

      return cpfCnpjValue;
    }

    throw new CpfCnpjPromiseError({
      message: "".concat(tp, " deve conter ").concat(tpSize, "!"),
      type: 'validation_error',
      errors: [{
        message: "".concat(tp, " informado possui quantidade de caracteres inv\xE1lido!"),
        service: 'cpf_cnpj_validation'
      }]
    });
  }

  var fetchCpfCnpjFromServices = function fetchCpfCnpjFromServices(cpfCnpjValue, configurations) {
    var providersServices = getAvailableServices(cpfCnpjValue);

    if (configurations.providers.length === 0) {
      return Promise$1.any(Object.values(providersServices).map(function (provider) {
        return provider(cpfCnpjValue);
      }));
    }

    return Promise$1.any(configurations.providers.map(function (provider) {
      return providersServices[provider](cpfCnpjValue);
    }));
  };

  var handleServicesError = function handleServicesError(aggregatedErrors) {
    if (aggregatedErrors.length !== undefined) {
      throw new CpfCnpjPromiseError({
        message: 'Todos os serviços de consulta retornaram erro.',
        type: 'service_error',
        errors: aggregatedErrors
      });
    }

    throw aggregatedErrors;
  };

  var throwApplicationError$2 = function throwApplicationError(_ref2) {
    var message = _ref2.message,
        type = _ref2.type,
        errors = _ref2.errors;
    throw new CpfCnpjPromiseError({
      message: message,
      type: type,
      errors: errors
    });
  };

  return cpfCnpjPromise;

})));
