import { UltimaOcorrencia } from "./ultima-ocorrencia/ultima-ocorrencia.model";

export class Person {
  id!: number;
  nome!: string;
  idade!: number;
  sexo!: string;
  vivo!: boolean;
  urlFoto!: string;
  ultimaOcorrencia: UltimaOcorrencia = new UltimaOcorrencia();
}
