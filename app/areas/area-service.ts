import {api} from '../api-config';
import {IAreaModel} from './area-model';

export async function getAreas() {
  return await api.get<IAreaModel[]>(
    'https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/timeseries',
  );
}
