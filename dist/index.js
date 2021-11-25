"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Andreani = void 0;
var axios_1 = __importDefault(require("axios"));
var querystring_1 = require("querystring");
var Andreani = (function () {
    function Andreani(credentials) {
        var _this = this;
        this.BASE_URL = process.env.NODE_ENV === "production" ? "https://apis.andreani.com" : "https://apisqa.andreani.com";
        this.LOGIN_URL = function () { return _this.BASE_URL + "/login"; };
        this.COT_ENV_URL = function (params) { return _this.BASE_URL + "/v1/tarifas?" + params; };
        this.OBT_ENV_URL = function (number) { return _this.BASE_URL + "/v1/envios/" + number; };
        this.BUS_ENV_URL = function (params) { return _this.BASE_URL + "/v1/envios?" + params; };
        this.OBT_TRS_URL = function (params) { return _this.BASE_URL + "/v1/envios/" + params + "/trazas"; };
        this.OBT_REG_URL = function () { return _this.BASE_URL + "/v1/regiones"; };
        this.OBT_SUC_URL = function () { return _this.BASE_URL + "/v2/sucursales"; };
        this.CRE_ORD_URL = function () { return _this.BASE_URL + "/v2/ordenes-de-envio"; };
        this.OBT_ORD_URL = function (number) { return _this.BASE_URL + "/v2/ordenes-de-envio/" + number; };
        this.OBT_ETQ_URL = function (remito) { return _this.BASE_URL + "/v2/ordenes-de-envio/" + remito + "/etiquetas"; };
        this.xAuthorizationToken = "";
        this.CONTRATO_DOMICILIO = credentials.CONTRATO_DOMICILIO;
        this.CONTRATO_SUCURSAL = credentials.CONTRATO_SUCURSAL;
        this.CODIGO_CLIENTE = credentials.CODIGO_CLIENTE;
        this.USER = credentials.USER;
        this.PASS = credentials.PASS;
    }
    Object.defineProperty(Andreani.prototype, "configAuth", {
        get: function () {
            return {
                headers: {
                    "x-authorization-token": this.xAuthorizationToken
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Andreani.prototype, "isLogged", {
        get: function () {
            return Boolean(this.xAuthorizationToken);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Andreani.prototype, "encryptedCredentials", {
        get: function () {
            return Buffer.from(this.USER + ":" + this.PASS).toString('base64');
        },
        enumerable: false,
        configurable: true
    });
    Andreani.prototype.getReq = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default.get(url, this.configAuth).then(function (x) { return x.data; })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Andreani.prototype.getReqRaw = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default.get(url, __assign(__assign({}, this.configAuth), { responseType: "arraybuffer" })).then(function (x) { return x.data; })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Andreani.prototype.postReq = function (url, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, axios_1.default.post(url, body, this.configAuth).then(function (x) { return x.data; })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Andreani.prototype.$login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var config, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = {
                            headers: {
                                'Authorization': "Basic " + this.encryptedCredentials
                            }
                        };
                        return [4, axios_1.default.get(this.LOGIN_URL(), config).then(function (x) { return x.headers; })];
                    case 1:
                        headers = _a.sent();
                        this.xAuthorizationToken = headers['x-authorization-token'];
                        return [2, true];
                }
            });
        });
    };
    Andreani.prototype.$cotizarEnvio = function (pedido, destination) {
        if (destination === void 0) { destination = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var params, flatBultos, _loop_1, i, queryParams, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pedido.cliente = this.CODIGO_CLIENTE;
                        if (destination == "SUCURSAL")
                            pedido.contrato = this.CONTRATO_SUCURSAL;
                        else
                            pedido.contrato = this.CONTRATO_DOMICILIO;
                        params = __assign({}, pedido);
                        delete params.bultos;
                        flatBultos = {};
                        _loop_1 = function (i) {
                            var bulto = pedido.bultos[i];
                            Object.keys(bulto).forEach(function (key) {
                                flatBultos["bultos[" + i + "][" + key + "]"] = bulto[key];
                            });
                        };
                        for (i in pedido.bultos) {
                            _loop_1(i);
                        }
                        Object.assign(params, flatBultos);
                        queryParams = (0, querystring_1.encode)(params);
                        return [4, this.getReq(this.COT_ENV_URL(queryParams))];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$obtenerEnvio = function (numEnvio) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getReq(this.OBT_ENV_URL(numEnvio))];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$buscarEnvio = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var buscaParams, queryParams, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        buscaParams = params;
                        queryParams = (0, querystring_1.encode)(buscaParams);
                        return [4, this.getReq(this.BUS_ENV_URL(queryParams))];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$obtenerTrazas = function (numEnvio) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getReq(this.OBT_TRS_URL(numEnvio))];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$listarProvincias = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getReq(this.OBT_REG_URL())];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$listarSucursales = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getReq(this.OBT_SUC_URL())];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$crearOrden = function (orden, sucursal) {
        if (sucursal === void 0) { sucursal = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (sucursal == "SUCURSAL")
                            orden.contrato = this.CONTRATO_SUCURSAL;
                        else
                            orden.contrato = this.CONTRATO_DOMICILIO;
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.postReq(this.CRE_ORD_URL(), orden)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$obtenerOrden = function (numOrden) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getReq(this.OBT_ORD_URL(numOrden))];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.$obtenerEtiqueta = function (remito) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.getReqRaw(this.OBT_ETQ_URL(remito))];
                    case 1:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.cotizarEnvioSucursal = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$cotizarEnvio(params, "SUCURSAL")];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.cotizarEnvioDomicilio = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$cotizarEnvio(params)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.obtenerEnvio = function (numEnvio) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$obtenerEnvio(numEnvio)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.buscarEnvio = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$buscarEnvio(params)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.obtenerTrazas = function (numEnvio) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$obtenerTrazas(numEnvio)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.listarProvincias = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$listarProvincias()];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.listarSucursales = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$listarSucursales()];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.crearOrdenSucursal = function (orden) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$crearOrden(orden, "SUCURSAL")];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.crearOrdenDomicilio = function (orden) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$crearOrden(orden)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.obtenerOrden = function (numOrden) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$obtenerOrden(numOrden)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    Andreani.prototype.obtenerEtiqueta = function (remito) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isLogged) return [3, 2];
                        return [4, this.$login()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [4, this.$obtenerEtiqueta(remito)];
                    case 3:
                        data = _a.sent();
                        return [2, data];
                }
            });
        });
    };
    return Andreani;
}());
exports.Andreani = Andreani;
