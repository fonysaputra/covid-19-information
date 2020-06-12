<template>
	<div style="max-height: 500px; overflow: auto;">
		<div class="table-responsive">
			<table class="table table-hover table-bordered table-md text-nowrap mb-0">
				<thead>
					<tr class="bg-default">
						<th class="text-left">No</th>
						<th>USIA</th>
						<th>GENDER</th>
						<th>WN</th>
						<th>STATUS</th>
						<th>KLUSTER</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item, index) in data" :key="index">
						<td class="text-left">{{ item.id }}</td>
						<td>{{ item.umur }}</td>
						<td>{{ item.jenis_kelamin }}</td>
						<td>{{ item.wn }}</td>
						<td>{{ item.status }}</td>
						<td>{{ item.klaster }}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>
<script>
	import { IndonesiaService } from "../../services/IndonesiaService";
	const apiService = new IndonesiaService();
	export default {
		name: "TableKasus",
		data() {
			return {
				data: []
			};
		},
		methods: {
			getData() {
				apiService.getKasusIndonesia().then(response => {
					this.data = response.data;
				});
			}
		},
		mounted() {
			this.getData();
		}
	};
</script>
<style>
.table-responsive {
	display: block;
	width: 100%;
	height: 360px;
	/* overflow-x: auto; */
	/* overflow-y: auto; */
	-webkit-overflow-scrolling: touch;
	-ms-overflow-style: -ms-autohiding-scrollbar;
}
thead tr:nth-child(1) th {
	background: #f1f1f9 !important;
	position: sticky;
	border: 2 solid black;
	top: 0;
	z-index: 10;
}
</style>
