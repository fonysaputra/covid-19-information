import axios from "axios";
const API_URL = "https://covid19.mathdro.id/api";
const API_INDO = "https://kawalcovid19.harippe.id/api/summary";
const SPREADSHEET_URL =
    "https://docs.google.com/spreadsheets/d/1ma1T9hWbec1pXlwZ89WakRk-OfVUQZsOCFl4FwZxzVw/export?format=csv&gid=0";

export class GlobalApi {
    getDataApiIndonesia() {
        const url = `${API_INDO}`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getGlobalData() {
        const url = `${API_URL}/confirmed`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }

    getWorldData() {
        const url = `${API_URL}`;
        let data = axios.get(url).then(response => response.data);
        return data;
    }
}
