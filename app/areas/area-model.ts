export type ApiResponse = Record<string, any>;

export interface IAreaModel extends ApiResponse{
    countrycode: IISOModel,
    countryregion: string,
    lastupdate: string,
    location: ILocationModel,
    provincestate: string,
    timeseries: ITimeSeriesModel[]
}

interface IISOModel {
    iso2: string,
    iso3: string
}

interface ILocationModel {
    lat: number,
    lng: number
}

interface ITimeSeriesModel {
    date: string,
    confirmed: number,
    deaths: number,
    recovered: number
}
