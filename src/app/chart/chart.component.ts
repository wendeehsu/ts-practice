import { Component } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, ChartDataset } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { default as Annotation } from 'chartjs-plugin-annotation';

interface ColorPatch {
  color: string,
  ref: { cct: number, radius: number },
  new: { cct: number, radius: number },
}

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
      legend: { display: true },
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

    return dataset.concat(this.getStatsData());
  }

  // skipped = (ctx, value) => ctx.p0.skip || ctx.p1.skip ? value : undefined;
  // down = (ctx, value) => ctx.p0.parsed.y > ctx.p1.parsed.y ? value : undefined;

  getStatsData() {
    let raw_data: ColorPatch[]  = [{'color': 'A1', 'ref': {'cct': 4168, 'radius': 568}, 'new': {'cct': 4301, 'radius': 571}}, {'color': 'A2', 'ref': {'cct': 2410, 'radius': 41}, 'new': {'cct': 2283, 'radius': 147}}, {'color': 'A3', 'ref': {'cct': 9410, 'radius': -1026}, 'new': {'cct': 9693, 'radius': -894}}, {'color': 'A4', 'ref': {'cct': 5967, 'radius': -328}, 'new': {'cct': 6067, 'radius': -328}}, {'color': 'B1', 'ref': {'cct': 4324, 'radius': 528}, 'new': {'cct': 4446, 'radius': 569}}, {'color': 'B2', 'ref': {'cct': 8798, 'radius': -839}, 'new': {'cct': 8925, 'radius': -659}}, {'color': 'B3', 'ref': {'cct': 4080, 'radius': -1933}, 'new': {'cct': 4081, 'radius': -2081}}, {'color': 'B4', 'ref': {'cct': 6038, 'radius': -342}, 'new': {'cct': 6121, 'radius': -266}}, {'color': 'C1', 'ref': {'cct': 7835, 'radius': -685}, 'new': {'cct': 7867, 'radius': -596}}, {'color': 'C2', 'ref': {'cct': 2299, 'radius': 2576}, 'new': {'cct': 2181, 'radius': 2576}}, {'color': 'C3', 'ref': {'cct': 1934, 'radius': 2971}, 'new': {'cct': 1844, 'radius': 3005}}, {'color': 'C4', 'ref': {'cct': 6087, 'radius': -344}, 'new': {'cct': 6215, 'radius': -245}}, {'color': 'D1', 'ref': {'cct': 4081, 'radius': -985}, 'new': {'cct': 4082, 'radius': -1085}}, {'color': 'D2', 'ref': {'cct': 8042, 'radius': 1411}, 'new': {'cct': 8072, 'radius': 1726}}, {'color': 'D3', 'ref': {'cct': 4049, 'radius': -1400}, 'new': {'cct': 4030, 'radius': -1154}}, {'color': 'D4', 'ref': {'cct': 6016, 'radius': -290}, 'new': {'cct': 6154, 'radius': -228}}, {'color': 'E1', 'ref': {'cct': 7851, 'radius': -39}, 'new': {'cct': 7891, 'radius': 165}}, {'color': 'E2', 'ref': {'cct': 4089, 'radius': -1171}, 'new': {'cct': 4092, 'radius': -1112}}, {'color': 'E3', 'ref': {'cct': 5523, 'radius': 4077}, 'new': {'cct': 5171, 'radius': 4339}}, {'color': 'E4', 'ref': {'cct': 6089, 'radius': -267}, 'new': {'cct': 6277, 'radius': -246}}, {'color': 'F1', 'ref': {'cct': 6857, 'radius': -1379}, 'new': {'cct': 7183, 'radius': -1361}}, {'color': 'F2', 'ref': {'cct': 2918, 'radius': -955}, 'new': {'cct': 2842, 'radius': -749}}, {'color': 'F3', 'ref': {'cct': 7930, 'radius': -1714}, 'new': {'cct': 8077, 'radius': -1838}}, {'color': 'F4', 'ref': {'cct': 6179, 'radius': -170}, 'new': {'cct': 6308, 'radius': -214}}];
    let points = raw_data.map(color => [{x: color['ref']['cct'], y: color['ref']['radius'], device: 'ref'}, {x: color['new']['cct'], y: color['new']['radius'], device: 'new'}]).flat();

    let dataset: ChartDataset[] = [{
      type: 'line',
      label: 'stats',
      data: points,
      segment: {
        borderColor: (ctx) => (points[ctx.p0DataIndex].device == 'ref' ?  'rgb(0,0,0,0.2)' : 'transparent'),
        // borderDash: ctx => skipped(ctx, [6, 6]),
      }
      // colors: [''].concat(raw_data.map(i => ['black', 'transparant']).flat())
    }];

    return dataset;
  }

  format_radius(radius: number[]) {
    radius = radius.map(i => [i,i]).flat();
    return radius.map((r, i) => ({x: this.cct_label[i], y:r}));
  }
}
