<template>
  <div class="container">
    <!-- <div class="card"> -->
    <!-- <div class="card-body"> -->
    <div class="header mb-5">
      <h1>COVID-19 INFORMATION</h1>
      <p class="text">Update data terakhir {{ lastUpdate }}</p>
    </div>
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card bg-danger img-card box-primary-shadow">
          <div class="card-body">
            <div class="d-flex">
              <div class="text-white">
                <p class="text-white mb-0">TOTAL POSITIF</p>
                <h2 class="mb-0 number-font">
                  {{ data.confirmed.value }}
                </h2>
                <p class="text-white mb-0">ORANG</p>
              </div>
              <div class="ml-auto">
                <img
                  src="/img/sad.png"
                  width="50"
                  height="50"
                  alt="Positif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card bg-orange img-card box-primary-shadow">
          <div class="card-body">
            <div class="d-flex">
              <div class="text-white">
                <p class="text-white mb-0">TOTAL PERAWATAN</p>
                <h2 class="mb-0 number-font">
                  {{ data.activeCare.value }}
                </h2>
                <p class="text-white mb-0">ORANG</p>
              </div>
              <div class="ml-auto">
                <img
                  src="/img/sad.png"
                  width="50"
                  height="50"
                  alt="Positif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card bg-success img-card box-primary-shadow">
          <div class="card-body">
            <div class="d-flex">
              <div class="text-white">
                <p class="text-white mb-0">TOTAL SEMBUH</p>
                <h2 class="mb-0 number-font">
                  {{ data.recovered.value }}
                </h2>
                <p class="text-white mb-0">ORANG</p>
              </div>
              <div class="ml-auto">
                <img
                  src="/img/happy.png"
                  width="50"
                  height="50"
                  alt="Positif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <div class="card bg-danger img-card box-primary-shadow">
          <div class="card-body">
            <div class="d-flex">
              <div class="text-white">
                <p class="text-white mb-0">TOTAL MENINGGAL</p>
                <h2 class="mb-0 number-font">
                  {{ data.deaths.value }}
                </h2>
                <p class="text-white mb-0">ORANG</p>
              </div>
              <div class="ml-auto">
                <img
                  src="/img/cry.png"
                  width="50"
                  height="50"
                  alt="Positif"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TableProvinsi />
    <div class="card">
      <div class="card-header">
        <h4>Kasus COVID19 </h4>
        <div class="card-header-action">
          <p>
            Terinfeksi:
            <strong class="text-warning">{{
                            worldData.confirmed.value
                        }}</strong>&nbsp; Sembuh:
            <strong class="text-success">{{
                            worldData.recovered.value
                        }}</strong>
            &nbsp; Meninggal:
            <strong class="text-danger">{{
                            worldData.deaths.value
                        }}</strong>
            &nbsp;

          </p>
        </div>
      </div>
      <div class="card-body">
        <Chart />
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h4>Data kasus Global</h4>
      </div>
      <div class="card-body">
        <TableGlobal />
      </div>
    </div>
  </div>
</template>
<script>
import { GlobalApi } from "../../services/GlobalApi.js";
import { IndonesiaService } from "../../services/IndonesiaService.js";
import Chart from "./Chart";
import TableGlobal from "./TableGlobal";
import TableProvinsi from "./TableProvinsi";
import moment from "moment";
const apiService = new GlobalApi();
const apiIndonesia = new IndonesiaService();
const SPREADSHEET_URL =
  "https://docs.google.com/spreadsheets/d/1ma1T9hWbec1pXlwZ89WakRk-OfVUQZsOCFl4FwZxzVw/export?format=xlxs&gid=0";
export default {
  components: {
    TableGlobal,
    TableProvinsi,
    Chart
  },
  data () {
    return {
      countryCode: "ID",
      data: [],
      dataSet: [],
      worldData: [],
      lastUpdate: "",
      excel: SPREADSHEET_URL
    };
  },
  methods: {
    getData () {
      apiService.getDataApiIndonesia().then(response => {
        this.data = response;
        this.lastUpdate = moment(response.metadata.lastUpdatedAt)
          .locale("ID")
          .format("D MMMM Y HH:mm:ss");
      });

      apiService.getWorldData().then(response => {
        this.worldData = response;
      });
    }
  },
  mounted () {
    this.getData();
  }
};
</script>
<style>
.card {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1) !important;
  border-radius: 6px !important;
}
</style>
