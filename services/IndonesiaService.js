import axios from "axios";

const SPREADSHEET_URL =
    "https://docs.google.com/spreadsheets/d/1ma1T9hWbec1pXlwZ89WakRk-OfVUQZsOCFl4FwZxzVw/export?format=csv&gid=0";
const INDO_URL = "https://indonesia-covid-19.mathdro.id/api/kasus";
const INDO_PROVINSI = "https://indonesia-covid-19.mathdro.id/api/provinsi";

export class IndonesiaService {
    constructor() {}

    fetchDataSpreadSheet() {
        let data = axios.get(SPREADSHEET_URL).then(response => response.data);
        console.log(data);
        return data;
    }

    getAllData() {
        return this.fetchDataSpreadSheet();
    }

    getKasusIndonesia() {
        const url = `${INDO_URL}`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getProvinsi() {
        const url = `${INDO_PROVINSI}`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

}
