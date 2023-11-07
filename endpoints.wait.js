import Api from './cypress/fixtures/apis.json';

const urlBase = Api.UrlBase
const baseDados = Api.BaseDados 
const caminho = Api.Caminho

class EndpointsWait {

    origemDadosDB(){
        return Api.OrigemDados
    }

    apiOrigemDados(){
         return urlBase + 
                baseDados + 
                caminho + 
                Api.Endpoints.OrigemDados.Controller
     }

    apiEventosNaoPeriodicosPesquisar(){
        return  urlBase + 
                baseDados + 
                caminho + 
                Api.Endpoints.EventosNaoPeriodico.Controller + 
                Api.Endpoints.EventosNaoPeriodico.Metodos.Pesquisar
    }

    apiEventosPeriodicosPesquisar(){
        return  urlBase + 
                baseDados +
                caminho +
                Api.Endpoints.EventosPeriodicos.Controller +
                Api.Endpoints.EventosPeriodicos.Metodos.Pesquisar
    }
    
    apiTabelaRubricaPesquisarS1010(){
        return  urlBase + 
                baseDados + 
                caminho + 
                Api.Endpoints.TabelaRubrica.Controller + 
                Api.Endpoints.TabelaRubrica.Metodos.PesquisarS1010
    }

    apiTabelaRubricaPesquisarEnviadosS1010(){
        return  urlBase + 
                baseDados + 
                caminho + 
                Api.Endpoints.TabelaRubrica.Controller + 
                Api.Endpoints.TabelaRubrica.Metodos.PesquisarEnviadosS1010
    }

    apiEventosNaoPeriodicosPesquisarS2200(){
        return  urlBase + 
                baseDados + 
                caminho + 
                Api.Endpoints.EventosNaoPeriodico.Controller + 
                Api.Endpoints.EventosNaoPeriodico.Metodos.PesquisarS2200
    }

    apiEventosNaoPeriodicosPesquisarS2300(){
        return  urlBase +
                baseDados +
                caminho +
                Api.Endpoints.EventosNaoPeriodico.Controller +
                Api.Endpoints.EventosNaoPeriodico.Metodos.PesquisarS2300
    }

    apiEventosNaoPeriodicosPesquisarS2230(){
        return  urlBase +
                baseDados +
                caminho +
                Api.Endpoints.EventosNaoPeriodico.Controller +
                Api.Endpoints.EventosNaoPeriodico.Metodos.PesquisarS2230
    }

    apiEventosNaoPeriodicosPesquisarEnviadosS2300(){
        return  urlBase +
                baseDados + 
                caminho +
                Api.Endpoints.EventosNaoPeriodico.Controller +
                Api.Endpoints.EventosNaoPeriodico.Metodos.PesquisarS2300Envio
    }

    apiEventosPeriodicosPesquisarS1200(){
        return  urlBase +
                baseDados +
                caminho +
                Api.Endpoints.EventosPeriodicos.Controller +
                Api.Endpoints.EventosPeriodicos.Metodos.PesquisarS1200
    }

    apiEventosPeriodicosPesquisarEnviadosS1200(){
        return  urlBase + 
                baseDados +
                caminho +
                Api.Endpoints.EventosPeriodicos.Controller + 
                Api.Endpoints.EventosPeriodicos.Metodos.PesquisarEnviadosS1200
    }

    apiEventosPeriodicosPesquisarS1202(){
        return  urlBase +
                baseDados +
                caminho +
                Api.Endpoints.EventosPeriodicos.Controller +
                Api.Endpoints.EventosPeriodicos.Metodos.PesquisarEnviadosS1202
    }

    apiEventosPeriodicosPesquisarEnviadosS1210(){
        return  urlBase + 
                baseDados +
                caminho + 
                Api.Endpoints.EventosPeriodicos.Controller +
                Api.Endpoints.EventosPeriodicos.Metodos.PesquisarEnviadosS1210
    }
}
export default new EndpointsWait()