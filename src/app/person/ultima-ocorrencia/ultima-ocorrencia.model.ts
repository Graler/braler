import { Cartaz } from "./cartaz.model";
import { OcorrenciaEntrevDesapDTO } from "./ocorrencia-entrev-desap-DTO.model";

export class UltimaOcorrencia {
  dtDesaparecimento!: Date;
  dataLocalizacao!: Date;
  encontradoVivo!: boolean;
  localDesaparecimentoConcat!: string;
  ocorrenciaEntrevDesapDTO: OcorrenciaEntrevDesapDTO = new OcorrenciaEntrevDesapDTO();
  listaCartaz: Cartaz[] = new Array();
  ocoId!: number;
}
