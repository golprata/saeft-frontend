import { Component, OnInit } from '@angular/core';
// import { } from 'jquery';

import * as Chart from 'chart.js';

@Component({
  selector: 'app-admin-tela-carteiro',
  templateUrl: './admin-tela-carteiro.component.html',
  styles: []
})
export class AdminTelaCarteiroComponent implements OnInit {

  areaChart:any;
  barChart:any;


  salesChartCanvas:any;
  salesChartOptions: any;
  salesChart:any;
  salesChartData:any;
  myLineChart:any;


  LineChartFunction(){
    this.salesChartData = {
      labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : 'rgb(210, 214, 222)',
          strokeColor         : 'rgb(210, 214, 222)',
          backgroundColor: 'rgba(0,0,0,.05)',
          pointColor          : 'rgb(210, 214, 222)',
          pointStrokeColor    : '#c1c7d1',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgb(220,220,220)',
          data                : [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgb(16, 228, 228)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          backgroundColor: 'rgba(0,0,0,.05)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 88]
        }
      ]
    };
    this.salesChartOptions = {
      // Boolean - If we should show the scale at all
      showScale               : true,
      // Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : false,
      // String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      // Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      // Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      // Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      // Boolean - Whether the line is curved between points
      bezierCurve             : true,
      // Number - Tension of the bezier curve between points
      bezierCurveTension      : 0.3,
      // Boolean - Whether to show a dot for each point
      pointDot                : false,
      // Number - Radius of each point dot in pixels
      pointDotRadius          : 4,
      // Number - Pixel width of point dot stroke
      pointDotStrokeWidth     : 1,
      // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,
      // Boolean - Whether to show a stroke for datasets
      datasetStroke           : true,
      // Number - Pixel width of dataset stroke
      datasetStrokeWidth      : 2,
      // Boolean - Whether to fill the dataset with a color
      datasetFill             : true,

      // String - A legend template
      legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio     : true,
      // Boolean - whether to make the chart responsive to window resizing
      responsive              : true
    };
    this.myLineChart = new Chart('salesChart', {
      type: 'line',
      data: this.salesChartData,
      options: this.salesChartOptions
    });
  }

  outroLinechart(){
    // Get context with jQuery - using jQuery's .get() method.
    // this.salesChartCanvas = $('#salesChart').get(0).getContext('2d');
    // this.salesChartCanvas = ('salesChart');
    // This will get the first returned node in the jQuery collection.
    // this.salesChart       = new Chart(this.salesChartCanvas);

    this.salesChartData = {
      labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agosto', 'Setembro', 'Outubbro', 'Novembro', 'Dezembro'],
      datasets: [
        {
          label               : 'Electronics',
          fillColor           : 'rgb(210, 214, 222)',
          strokeColor         : 'rgb(210, 214, 222)',
          pointColor          : 'rgb(210, 214, 222)',
          pointStrokeColor    : '#c1c7d1',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgb(220,220,220)',
          data                : [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55]
        },
        {
          label               : 'Digital Goods',
          fillColor           : 'rgba(60,141,188,0.9)',
          strokeColor         : 'rgba(60,141,188,0.8)',
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [28, 48, 40, 19, 86, 27, 90, 48, 40, 19, 86, 88]
        }
      ]
    };

    this.salesChartOptions = {
      // Boolean - If we should show the scale at all
      showScale               : true,
      // Boolean - Whether grid lines are shown across the chart
      scaleShowGridLines      : false,
      // String - Colour of the grid lines
      scaleGridLineColor      : 'rgba(0,0,0,.05)',
      // Number - Width of the grid lines
      scaleGridLineWidth      : 1,
      // Boolean - Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLines: true,
      // Boolean - Whether to show vertical lines (except Y axis)
      scaleShowVerticalLines  : true,
      // Boolean - Whether the line is curved between points
      bezierCurve             : true,
      // Number - Tension of the bezier curve between points
      bezierCurveTension      : 0.3,
      // Boolean - Whether to show a dot for each point
      pointDot                : false,
      // Number - Radius of each point dot in pixels
      pointDotRadius          : 4,
      // Number - Pixel width of point dot stroke
      pointDotStrokeWidth     : 1,
      // Number - amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius : 20,
      // Boolean - Whether to show a stroke for datasets
      datasetStroke           : true,
      // Number - Pixel width of dataset stroke
      datasetStrokeWidth      : 2,
      // Boolean - Whether to fill the dataset with a color
      datasetFill             : true,
      // String - A legend template
      legendTemplate          : '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<datasets.length; i++){%><li><span style=\'background-color:<%=datasets[i].lineColor%>\'></span><%=datasets[i].label%></li><%}%></ul>',
      // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
      maintainAspectRatio     : true,
      // Boolean - whether to make the chart responsive to window resizing
      responsive              : true
    };

    this.salesChart       = new Chart('salesChart', this.salesChartOptions);
    // Create the line chart
    this.salesChart.Line(this.salesChartData, this.salesChartOptions);

    // ---------------------------
    // - END MONTHLY SALES CHART -
    // ---------------------------
  }

  constructor() { }

  ngOnInit() {

    this.areaChart = Morris.Area({
      element: 'revenue-chart',
      resize: false,
      data: [
        { dias: '1', value: 80, value2: 95 },
        { dias: '2', value: 55, value2: 95  },
        { dias: '3', value: 97, value2: 95  },
        { dias: '4', value: 87, value2: 95  },
        { dias: '5', value: 99, value2: 95  },
        { dias: '6', value: 80, value2: 95  },
        { dias: '7', value: 55, value2: 95  },
        { dias: '8', value: 97, value2: 95  },
        { dias: '9', value: 87, value2: 95  },
        { dias: '10', value: 99, value2: 95  }
      ],
      xkey: 'dias',
      // A list of names of data record attributes that contain y-values.
      ykeys: ['value', 'value2'],
      labels: ['Item 1', 'Item 2'],
      lineColors: ['#a0d0e0', '#3c8dbc'],
      hideHover: 'auto'
    });

    this.barChart = Morris.Bar({
      element: 'bar-example',
      resize: true,
      data: [
        {y: '1', a: 100, b: 90},
        {y: '2', a: 75, b: 65},
        {y: '3', a: 50, b: 40},
        {y: '4', a: 75, b: 65},
        {y: '5', a: 50, b: 40},
        {y: '6', a: 75, b: 65},
        {y: '7', a: 100, b: 90},
        {y: '8', a: 100, b: 90},
        {y: '9', a: 75, b: 65},
        {y: '10', a: 50, b: 40},
        {y: '11', a: 75, b: 65},
        {y: '12', a: 50, b: 40},
        {y: '13', a: 75, b: 65},
        {y: '14', a: 100, b: 90},
        {y: '15', a: 100, b: 90},
        {y: '16', a: 75, b: 65},
        {y: '17', a: 50, b: 40},
        {y: '18', a: 75, b: 65},
        {y: '19', a: 50, b: 40},
        {y: '20', a: 75, b: 65},
        {y: '21', a: 100, b: 90},
        {y: '22', a: 100, b: 90},
        {y: '23', a: 75, b: 65},
        {y: '24', a: 50, b: 40},
        {y: '25', a: 75, b: 65},
        {y: '26', a: 50, b: 40},
        {y: '27', a: 75, b: 65},
        {y: '28', a: 100, b: 90},
        {y: '29', a: 75, b: 65},
        {y: '30', a: 100, b: 90},
        {y: '31', a: 100, b: 90}
      ],
      barColors: ['#00a65a', '#f56954'],
      xkey: 'y',
      ykeys: ['a', 'b'],
      labels: ['Carteiro', 'Unidade'],
      hideHover: 'auto',
    });

    this.LineChartFunction();

  }

}
