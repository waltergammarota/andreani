import { Cotizacion, PedidoCotizacion } from './models/cotizaciones.model';
import { BuscaEnvio, Envio, Envios, TrazaEnvio } from './models/envios.model';
import { NuevaOrden, Orden } from './models/ordenes.model';
import { Provincia } from './models/provincias.model';
import { SucursalCompletoV2 } from './models/sucursales.model';
import { Credentials } from './models/credentials.model';
export declare class Andreani {
    private CONTRATO_DOMICILIO;
    private CONTRATO_SUCURSAL;
    private CODIGO_CLIENTE;
    private USER;
    private PASS;
    private BASE_URL;
    private LOGIN_URL;
    private COT_ENV_URL;
    private OBT_ENV_URL;
    private BUS_ENV_URL;
    private OBT_TRS_URL;
    private OBT_REG_URL;
    private OBT_SUC_URL;
    private CRE_ORD_URL;
    private OBT_ORD_URL;
    private OBT_ETQ_URL;
    private xAuthorizationToken;
    private get configAuth();
    constructor(credentials: Credentials);
    get isLogged(): boolean;
    private get encryptedCredentials();
    private getReq;
    private getReqRaw;
    private postReq;
    private $login;
    private $cotizarEnvio;
    private $obtenerEnvio;
    private $buscarEnvio;
    private $obtenerTrazas;
    private $listarProvincias;
    private $listarSucursales;
    private $crearOrden;
    private $obtenerOrden;
    private $obtenerEtiqueta;
    cotizarEnvioSucursal(params: PedidoCotizacion): Promise<Cotizacion>;
    cotizarEnvioDomicilio(params: PedidoCotizacion): Promise<Cotizacion>;
    obtenerEnvio(numEnvio: string): Promise<Envio>;
    buscarEnvio(params: BuscaEnvio): Promise<Envios>;
    obtenerTrazas(numEnvio: string): Promise<TrazaEnvio[]>;
    listarProvincias(): Promise<Provincia[]>;
    listarSucursales(): Promise<SucursalCompletoV2[]>;
    crearOrdenSucursal(orden: NuevaOrden): Promise<Orden>;
    crearOrdenDomicilio(orden: NuevaOrden): Promise<Orden>;
    obtenerOrden(numOrden: string): Promise<Orden>;
    obtenerEtiqueta(remito: string): Promise<any>;
}
