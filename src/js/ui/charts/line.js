/**
 * Plot chart 
 * @param {Object} chart - data 
 */

const plotChart = (chart)=>{
    Highcharts.chart(chart.element, {
        chart: {
            type: 'spline'
        },
        title: {
            text: chart.title
        },
        subtitle: {
            text: chart.source
        },
        xAxis: {
            categories: chart.xAxis.categories
        },
        yAxis: {
            title: {
                text: chart.yAxis.title.text
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true
        },
        plotOptions: {
            spline: {
                marker: {
                    radius: chart.plotOptions.radius,
                    lineColor: chart.plotOptions.lineColor,
                    lineWidth: chart.plotOptions.lineWidth
                }
            }
        },
        series: chart.series
    });
}

export default {plotChart}