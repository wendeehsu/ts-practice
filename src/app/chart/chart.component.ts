import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  radius_data: { [weight: string]: number[] } =  {'-0': [0, 0, -1100, -1350, -950, -950, -850, -800, -800, -1200, -1000, -900, 0], '-0.1': [0, 0, -550, -850, -650, -600, -500, -400, -450, -980, -650, -350, 0], '-0.5': [0, 0, -450, -680, -500, -500, -400, -200, -300, -600, -550, -250, 0], '-1': [0, 0, -380, -520, -400, -400, -300, -100, -200, -500, -450, -150, 0], '+1': [0, 0, 700, 700, 550, 400, 400, 350, 500, 500, 750, 300, 0], '+0.5': [0, 0, 800, 800, 700, 650, 650, 700, 650, 650, 800, 400, 0], '+0.1': [0, 0, 1000, 1000, 1100, 1100, 1100, 1100, 1100, 1000, 900, 500, 0], '+0': [0, 0, 1300, 1300, 1300, 1400, 1400, 1400, 1400, 1400, 1300, 900, 0]}; 
  cct_label: number[] = [15000, 8600, 8500, 8000, 7900, 7700, 7600, 7100, 7000, 5900, 5700, 4500, 4300, 4200, 4100, 3900, 3800, 3300, 3000, 2600, 2500, 2350, 2250, 2000, 1800, 1500];

  constructor() {
    Chart.register(Annotation);
  }
  
  public lineChartData: ChartConfiguration['data'] = {
    datasets: this.getLineData(),
  };

  public lineChartOptions: ChartConfiguration['options'] = {    
    elements: {
      line: {
        // tension: 0.1
      }
    },
    scales: {
      y:
        {
          position: 'left',
        },
      x: {
          type: 'linear',
          reverse: true,
          min: this.cct_label.slice(-1)[0],
          max: this.cct_label[0],
      }
    },
    hover: {
      mode: 'dataset',
      // intersect: true
    },
    plugins: {
      legend: { display: false },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'y',
            value: 0,
            borderColor: 'orange',
            borderWidth: 1,
          },
        ],
      },
    }
  };

  // public lineChartType: ChartType = 'line';

  getLineData() {
    let dataset: ChartDataset[] = [];
    let weight_list: string[] = ["-0","-0.1","-0.5","-1","+1","+0.5","+0.1","+0"];
    for(let i = 0; i < weight_list.length; i++) {
      let sign = weight_list[i][0];
      let weight = weight_list[i][1];
      dataset = dataset.concat({
        type: 'line',
        data: this.format_radius(this.radius_data[weight_list[i]]),
        label: 'Radius (' + sign + ') weight: ' + weight,
        borderColor: 'rgba(148,159,177,1)',
        hoverBorderColor: 'rgba(255,0,0,1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        // borderDash: [5,2],
      })
    }

    return dataset;
  }

  getStatsData() {
    let dataset: ChartDataset[] = [];

  }

  format_radius(radius: number[]) {
    radius = radius.map(i => [i,i]).flat();
    return radius.map((r, i) => ({x: this.cct_label[i], y:r}));
  }
}
