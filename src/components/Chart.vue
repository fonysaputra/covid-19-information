<template>
  <div>
    <GChart
      type="ColumnChart"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>
<script>
import { GChart } from "vue-google-charts";
import { GlobalApi } from "../../services/GlobalApi.js";
import TableGlobal from "./TableGlobal";
import moment from "moment";
const apiService = new GlobalApi();
export default {
  name: "Chart",
  components: {
    GChart
  },
  data () {
    return {
      chartData: [],
      chartOptions: {
        chart: {
          title: "Total di Indonesia"
        },
        legend: { position: "none" }
        // is3D: true,
      },
      chartEvents: {
        select: () => { }
      }
    };
  },
  methods: {
    renderChartData () {
      apiService.getWorldData().then(data => {
        this.chartData.push([
          "Element",
          "Jumlah Pasien",
          { role: "style" },
          { role: "annotation" }
        ]);
        this.chartData.push([
          "Pulih",
          data.recovered.value,
          "#15f600",
          data.recovered.value
        ]);
        this.chartData.push([
          "Meninggal",
          data.deaths.value,
          "#f00",
          data.deaths.value
        ]);
        this.chartData.push([
          "Terinfeksi",
          data.confirmed.value,
          "#f29f00",
          data.confirmed.value
        ]);
        this.lastUpdate = moment(data.lastUpdate).format(
          "DD/MM/YYYY HH:mm:ss ZZ"
        );
      });
    }
  },

  mounted () {
    this.renderChartData();
  }
};
</script>
