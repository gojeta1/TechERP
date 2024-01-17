import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import  Chart  from 'chart.js/auto'
declare var M: any;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent  implements OnInit {

  name_user = 'Guilherme'

  constructor(){}


 ngOnInit(): void {
  if(typeof document !== 'undefined'){
        // Chart 1
        const canvas1 = document.getElementById('myChart') as HTMLCanvasElement;
        const ctx1 = canvas1.getContext('2d');
        if (ctx1) {
          const myChart1 = new Chart(ctx1, {
            type: 'bar',
            data: {
              labels: ["Janeiro", "Fevereiro", "Março", "Abril", 'Maio', 'Junho', 'Agosto', 'Setembro'],
              datasets: [{
                label: "Ruim",
                data: [45, 25, 40, 20, 60, 20, 35, 25],
                backgroundColor: "#80cbc4",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.9,
              },
              {
                label: "Bom",
                data: [40, 22, 33, 10, 56, 5, 22, 80],
                backgroundColor: "#26a69a",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.9,
              },
              {
                label: "Regular",
                data: [14, 2, 90, 9, 75, 99, 55, 75],
                backgroundColor: "#a7ffeb",
                borderColor: 'transparent',
                borderWidth: 2.5,
                barPercentage: 0.9,
              }
            ]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  max: 100,  // Defina o valor máximo desejado
                },
                x: {
                  grid: {
                    display: false,
                  },
                }
              }
            }
          });
        }
      
        // Chart 2
        const canvas2 = document.getElementById('myChart2') as HTMLCanvasElement;
        const data = [{x: 'Janeiro', net: 100, cogs: 50, gm: 50}, {x: 'Fevereiro', net: 120, cogs: 55, gm: 75}, {x: 'Março', net: 150, cogs: 42, gm: 66}, {x: 'Abril', net: 90, cogs: 22, gm: 14}];
    
        const ctx2 = canvas2.getContext('2d');
        if (ctx2) {
          const myChart2 = new Chart(ctx2, {
            // type: 'line',
            // data: {
            //   labels: ["Janeiro", "Fevereiro", "Março", "Abril", 'Maio', 'Junho', 'Agosto', 'Setembro'],
            //   datasets: [{
            //     label: "Meus Dados de compras",
            //     data: [4, 20, 5, 20, 5, 25, 9, 18],
            //     backgroundColor: 'transparent',
            //     borderColor: '#0d6efd',
            //     tension: 0.3,
            //     borderWidth: 1.5,
            //   }]
            // },
            // options: {
            //   scales: {
            //     y: {
            //       beginAtZero: true,
            //       ticks: {
            //         stepSize: 16,
            //       }
            //     },
            //     x: {
            //       grid: {
            //         display: false,
            //       },
            //     }
            //   }
            // }
            type: 'bar',
            data: {
              labels: ['Janeiro', 'Fevereiro'],
              datasets: [{
                label: 'Vendas pela Internet',
                data: data,
                backgroundColor: '#00897b',
                parsing: {
                  yAxisKey: 'net'
                }
              }, {
                label: 'Bens Vencidos',
                data: data,
                backgroundColor: '#1de9b6',
                parsing: {
                  yAxisKey: 'cogs'
                }
              }, {
                label: 'Margem Bruta',
                data: data,
                backgroundColor: '#0097a7',
                parsing: {
                  yAxisKey: 'gm'
                }
              }]
            },
          });
        }
     
      // Chart 3
      const canvas3 = document.getElementById('myChart3') as HTMLCanvasElement;
      const ctx3 = canvas3.getContext('2d');
      if (ctx3) {
        const myChart2 = new Chart(ctx3, {
          type: 'line',
          data: {
            labels: ["Janeiro", "Fevereiro", "Março", "Abril", 'Maio', 'Junho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            datasets: [{
              label: "Dados Rentaveis",
              data: [4, 20, 5, 20, 5, 25, 9, 18, 44, 56, 100],
              backgroundColor: 'transparent',
              borderColor: '#64ffda',
              tension: 0.4,
              borderWidth: 1.5,
            },{
            label: "Dados Perdidos",
            data: [0,2,4,9, 18, 44, 56, 100, 100, 100, 100],
            backgroundColor: 'transparent',
            borderColor: '#00bfa5',
            tension: 0.4,
            borderWidth: 1.5,
          },
          {
            label: "Dados Recuperados",
            data: [5,7,7,10, 18, 40, 45, 89, 91, 95, 99],
            backgroundColor: 'transparent',
            borderColor: '#004d40',
            tension: 0.4,
            borderWidth: 1.5,
          }
          ],
            
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 16,
                }
              },
              x: {
                grid: {
                  display: false,
                },
              }
            }
          }
        });
      }
    
  }
 }

 

}
