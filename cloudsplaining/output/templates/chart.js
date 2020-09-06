/**
 * Renders a barchart containing information about the policy risks bucketed into the 4 main categories.
 */
var SummaryBarChart = {
  extends: VueChartJs.Bar,
  props: ["inlinePolicyRisks", "managedPolicyRisks"],
  computed: {
    myStyles() {
      return {
        height: "100%"
      }
    }
  },
  data: function () {
    return {
      chartData: {
        labels: [
          "Privilege Escalation",
          "Data Exfiltration",
          "Resource Exposure",
          "Infrastructure Modification"
        ],
        datasets: [{
          label: "Inline Policies",
          data: [6, 3, 10, 9],// TODO: Fix Scaling Object.values(this.inlinePolicyRisks),
          backgroundColor: [
            "#f87979",
            "#f87979",
            "#f87979",
            "#f87979",
          ]
        },
          {
            label: "Managed Policies",
            data: [9, 10, 15, 20], // TODO: Fix scaling for dynamic values Object.values(this.managedPolicyRisks)
            backgroundColor: [
              "#2247c6",
              "#2247c6",
              "#2247c6",
              "#2247c6",
              "#2247c6",
            ]
          }]
      },
      options: {
        responsive: true,
        legend: {display: true, position: "bottom"},
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            stacked: true
          }]
        },

      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
};
