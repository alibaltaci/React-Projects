import { useGlobalContext } from "../../contexts/GlobalContext"
import { FlexContainer } from "../FlexContainer/FlexContainer"
import Typography from "../Typography/Typography"
import ReactApexCharts from 'react-apexcharts'

export default function AreaCharts() {

  const { selectedCountry } = useGlobalContext()

  return (
    <FlexContainer type="column" align="center" >
      <Typography text={selectedCountry.toUpperCase()} elementType="h2" color="pastel_green" />
      <ReactApexCharts
        series={ [
          {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, 
          {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          }
        ]}
        options={{
          chart: {
            height: 350,
            type: 'line',

            toolbar: {
              show: true,
              offsetX: 0,
              offsetY: 0,
              tools: {
                download: true,
                selection: true,
                zoom: true,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: true | '<img src="/static/icons/reset.png" width="20">',
                customIcons: []
              },
              export: {
                csv: {
                  filename: "covid-19 stats",
                  columnDelimiter: ',',
                  headerCategory: 'category',
                  headerValue: 'value',
                  dateFormatter(timestamp) {
                    return new Date(timestamp).toDateString()
                  }
                },
                svg: {
                  filename: "covid-19 stats",
                },
                png: {
                  filename: "covid-19 stats",
                }
              },
              autoSelected: 'zoom' 
            },

            zoom: {
              enabled: true,
              type: 'x',  
              autoScaleYaxis: false,  
              zoomedArea: {
                fill: {
                  color: "yellow",
                  opacity: 0.2
                },
                stroke: {
                  color: "purple",
                  opacity: 0.4,
                  width: 3
                }
              }
          },
          
        },

        grid: {
          show: true,
          borderColor: '#ffffff',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: false
              }
          },   
          yaxis: {
              lines: {
                  show: true
              }
          },  
          row: {
              colors: undefined,
              opacity: 0.5
          },  
          column: {
              colors: undefined,
              opacity: 0.5
          },  
          padding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
          },  
      },


          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"],
            labels: {
              style: {
                fontWeight:"600",
                fontSize: '14px', // Yazı tipi boyutu
                color: 'red'    // Yazı rengi
              },
            }
          },

          yaxis: {
            labels: {
              style: {
                fontSize: '14px', // Yazı tipi boyutu
                fontWeight:"600",
                color: '#fa0404', // Yazı rengi
              },
              offsetX: "-5"
            }
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },

          legend: {
            show: true, // data isimlerini göster
            position: 'top', // data isimlerini üst tarafta göster
            horizontalAlign: 'left', // data isimlerini yatayda solda
          }

          // colors: ['blue', 'green']
        }}

        type="line" height={350} width={800}
      />
    </FlexContainer>
  )
}


          // locales: [
          //   {
          //     name: "tr",
          //     options: {
          //       months: [
          //         "Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz",
          //         "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
          //       ],
          //       shortMonths: [
          //         "Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem",
          //         "Ağu", "Eyl", "Eki", "Kas", "Ara"
          //       ],
          //       days: [
          //         "Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"
          //       ],
          //       shortDays: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"],
          //       toolbar: {
          //         exportToSVG: "SVG İndir",
          //         exportToPNG: "PNG İndir",
          //         menu: "Menü",
          //         selection: "Seçim",
          //         selectionZoom: "Seçim Yakınlaştırma",
          //         zoomIn: "Yakınlaştır",
          //         zoomOut: "Uzaklaştır",
          //         pan: "Taşıma",
          //         reset: "Yakınlaştırmayı Sıfırla"
          //       }
          //     }
          //   }
          // ],
          // defaultLocale: "tr"