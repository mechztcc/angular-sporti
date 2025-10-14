import { ISupervision } from './supervision.interface';

export interface IListSupervisionsResponse {
  lastSupervisions: ISupervision[];
  nextSupervisions: ISupervision[];
}
