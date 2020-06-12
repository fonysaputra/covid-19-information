<template>
    <div style="max-height: 500px; overflow: auto;">
        <div class="table-responsive">
            <table
                class="table table-hover table-bordered table-md text-nowrap"
            >
                <thead>
                    <tr class="bg-default">
                        <th class="text-left">NEGARA</th>
                        <th>TERINFEKSI</th>
                        <th>DIRAWAT</th>
                        <th>SEMBUH</th>
                        <th>MENINGGAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td class="text-left">{{ item.countryRegion }}</td>
                        <td>{{ item.confirmed }}</td>
                        <td>{{ item.active }}</td>
                        <td>{{ item.recovered }}</td>
                        <td>{{ item.deaths }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import { GlobalApi } from "../../services/GlobalApi.js";
const apiService = new GlobalApi();
export default {
    name: "TableGlobal",
    data() {
        return {
            data: []
        };
    },
    methods: {
        getData() {
            apiService.getGlobalData().then(response => {
                this.data = response;
            });
        }
    },
    mounted() {
        this.getData();
    }
};
</script>
<style></style>
