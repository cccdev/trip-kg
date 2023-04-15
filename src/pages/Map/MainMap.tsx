/**
 * @author 舟烬
 * @description
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';
import geoJson from '@/assets/json/shGeo.json';
import scenicAreasData from '@/assets/json/pudongScenic.json';

echarts.registerMap('上海', geoJson as any);

interface ScenicAreas {
  [proppName: string]: number[];
}

const scenicAreas: ScenicAreas = scenicAreasData;
const scenicAreasValue = [
  [
    {
      name: '上海迪士尼公园',
      value: 300,
    },
  ],
  [
    {
      name: '上海天文博物馆',
      value: 200,
    },
  ],
  [
    {
      name: '东方明珠',
      value: 200,
    },
  ],
];
const series: any[] = [
  {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    geoIndex: 0,
    symbolSize: (params: any) => (params[2] / 100) * 5 + 5,
    itemStyle: {
      color: '#b02a02',
    },
    encode: {
      tooltip: 2,
    },
    // formatter: (params: any) => params.data.name,
    data: scenicAreasValue.map((scenicArea: any) => {
      return {
        name: scenicArea[0].name,
        value: scenicAreas[scenicArea[0].name].concat(scenicArea[0].value),
      };
    }),
  },
];
const option = {
  // title: {
  //   text: '上海旅游-大数据平台',
  //   textStyle: {
  //     fontSize: 24,
  //     color: '#fff',
  //   },
  //   left: '4%',
  //   top: '3%',
  // },
  tooltip: {},
  color: ['#34c6bb'],
  geo: {
    silent: true,
    map: '上海',
    zoom: 1.1,
    tooltip: {
      show: true,
    },
    label: {
      show: false,
      color: '#fff',
    },
    top: '16%',
    roam: true,
    itemStyle: {
      areaColor: 'rgba(0,255,255,.02)',
      borderColor: '#00ffff',
      borderWidth: 1.5,
      shadowColor: '#00ffff',
      shadowOffsetX: 0,
      shadowOffsetY: 4,
      shadowBlur: 10,
    },
  },
  series: series,
};

const MainMap: React.FC = () => {
  return (
    <div className="w-full h-full">
      <ReactEcharts option={option} />
    </div>
  );
};

export default MainMap;
