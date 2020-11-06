(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('node-fetch'), require('cheerio')) :
  typeof define === 'function' && define.amd ? define(['node-fetch', 'cheerio'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.cpfCnpj = factory(global.fetch, global.cheerio));
}(this, (function (fetch, cheerio) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);
  var cheerio__default = /*#__PURE__*/_interopDefaultLegacy(cheerio);

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
              return fetch__default['default'](url, options).then(parseResponse).then(extractValuesData)["catch"](throwApplicationError);

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

  var siareCpfCnpjProvider = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cpfCnpj) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch__default['default']("https://www2.fazenda.mg.gov.br/sol/ctrl/SOL/NFAE/SERVICO_027", {
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
    var $ = cheerio__default['default'].load(res);
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
