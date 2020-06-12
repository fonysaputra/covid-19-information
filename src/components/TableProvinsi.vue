<template>
  <div
    style="max-height: 500px; overflow: auto;"
    class="mb-5"
  >
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h4>Data kasus berdasarkan provinsi</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered table-md text-left">
                <thead>
                  <tr>
                    <th>PROVINSI</th>
                    <th>POSITIF</th>
                    <th>SEMBUH</th>
                    <th>MENINGGAL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(result,index) in data"
                    :key="index"
                  >
                    <td>{{result.provinsi}}</td>
                    <td>{{result.kasusPosi}}</td>
                    <td>{{result.kasusSemb}}</td>
                    <td>{{result.kasusMeni}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { IndonesiaService } from "../../services/IndonesiaService";
const apiService = new IndonesiaService();
export default {
  name: "TableProvinsi",
  data () {
    return {
      data: []
    };
  },
  methods: {
    getData () {
      apiService.getProvinsi().then(response => {
        this.data = response.data;
      });
    }
  },
  mounted () {
    this.getData();
  }
};
</script>