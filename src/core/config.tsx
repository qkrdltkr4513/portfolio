import Link from 'next/link';
import { Tag } from 'antd';
import { themes } from '@styles/themes';
import { css } from '@emotion/react';

const linkStyle = () => css`
  color: ${themes.colors.White};
  cursor: pointer;
`;

// 총 경력
export const DONUT_CHART_CONFIG = {
  width: '100%',
  height: '100%',
  series: [24, 21, 18, 32],
  options: {
    title: {
      text: '총 경력',
      align: 'left',
      style: {
        color: 'white',
        fontWeight: 500,
      },
    },
    labels: ['atos', 'Build it', 'StageFive', 'NC ITS'],
    legend: {
      position: 'bottom',
      labels: {
        colors: ['white', 'white', 'white', 'white'],
      },
      onItemClick: {
        toggleDataSeries: false,
      },
    },
    tooltip: {
      custom: (opt: any) => {
        if (opt) {
          const { seriesIndex, w } = opt;
          const series = w.config.series;
          const labels = w.config.labels;

          const value = series[seriesIndex];

          const displayValue = {
            year: '',
            month: '',
          };

          if (value / 12)
            displayValue.year = `${
              Math.floor(value / 12) > 0 ? `${Math.floor(value / 12)}년` : ''
            }`;
          if (value % 12) displayValue.month = `${value % 12 > 0 ? `${value % 12}개월` : ''}`;

          const result = `<div class="tooltip-box">
            <span class="tooltip-history-circle-${opt.seriesIndex}"></span>
            <span class="tooptip-title">${labels[seriesIndex]}: </span>
            <span class="tooltip-value">${displayValue.year} ${displayValue.month}</span>
          </div>`;
          return result;
        }
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              show: false,
            },
            name: {
              offsetY: 5,
            },
            total: {
              show: true,
              showAlways: true,
              label: '7년 11개월',
              color: 'white',
            },
          },
        },
      },
    },
  },
};

// 프로젝트 주 사용 기술
export const PIE_CHART_CONFIG = {
  width: '100%',
  height: '100%',
  series: [3, 8, 1, 11, 6],
  options: {
    title: {
      text: '프로젝트 주 사용 기술',
      align: 'left',
      style: {
        color: 'white',
        fontWeight: 500,
      },
    },
    colors: [
      themes.colors.Next,
      themes.colors.React,
      themes.colors.ReactNative,
      themes.colors.Vue,
      themes.colors.Typescript,
    ],
    labels: ['Next', 'React.js', 'React-Native', 'Vue.js (앱 포함)', 'Typescript'],
    legend: {
      position: 'bottom',
      labels: {
        colors: ['white', 'white', 'white', 'white', 'white'],
      },
      onItemClick: {
        toggleDataSeries: false,
      },
    },
    tooltip: {
      custom: (opt: any) => {
        if (opt) {
          const { seriesIndex, w } = opt;
          const series = w.config.series;
          const labels = w.config.labels;

          const result = `<div class="tooltip-box">
            <span class="tooltip-circle-${opt.seriesIndex}"></span>
            <span class="tooptip-title">${labels[seriesIndex]}: </span>
            <span class="tooltip-value">${series[seriesIndex]}번</span>
          </div>`;
          return result;
        }
      },
    },
  },
};

// 연도별 수행한 프로젝트
export const LINE_CHART_CONFIG = {
  width: '100%',
  height: '100%',
  series: [
    {
      name: '연도별 프로젝트',
      type: 'column',
      data: [3, 2, 3, 10, 4, 2, 2, 2, 0],
    },
    {
      name: '누적 프로젝트',
      type: 'line',
      data: [3, 5, 8, 18, 22, 24, 26, 28, 28],
    },
  ],
  options: {
    title: {
      text: '연도별 수행 프로젝트',
      align: 'left',
      style: {
        color: 'white',
        fontWeight: 500,
      },
    },
    chart: {
      type: 'line',
      // stacked: true,
      // stackType: '100%',
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      // height: 50,
    },
    xaxis: {
      // type: 'datetime',
      // categories: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
      labels: {
        style: {
          colors: 'white',
        },
      },
    },
    yaxis: [
      {
        max: 12,
        title: {
          text: '진행 횟수',
          style: {
            color: 'white',
            fontWeight: 500,
          },
        },
        labels: {
          style: {
            colors: ['white'],
          },
        },
      },
      {
        max: 30,
        opposite: true,
        title: {
          offsetX: 5,
          text: '누적 횟수',
          style: {
            color: 'white',
            fontWeight: 500,
          },
        },
        labels: {
          style: {
            colors: ['white'],
          },
        },
      },
    ],
    legend: {
      position: 'bottom',
      labels: {
        colors: 'white',
      },
    },
    stroke: {
      width: [0, 4],
    },
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
  },
};

// 연도별 프로젝트 사용기술
export const RANGE_BAR_CHART_CONFIG = {
  width: '100%',
  height: '100%',
  series: [
    {
      name: 'Javscript',
      data: [
        {
          x: 'ATOS',
          y: [new Date('2017-04-01').getTime(), new Date('2017-05-30').getTime()],
        },
        {
          x: 'ATOS',
          y: [new Date('2017-11-01').getTime(), new Date('2018-12-20').getTime()],
        },
        {
          x: 'BuildIt',
          y: [new Date('2019-05-01').getTime(), new Date('2020-02-28').getTime()],
        },
        {
          x: 'BuildIt',
          y: [new Date('2020-03-01').getTime(), new Date('2020-10-31').getTime()],
        },
      ],
    },
    {
      name: 'jQuery',
      data: [
        {
          x: 'ATOS',
          y: [new Date('2017-04-01').getTime(), new Date('2017-05-30').getTime()],
        },
        {
          x: 'ATOS',
          y: [new Date('2017-11-01').getTime(), new Date('2018-03-30').getTime()],
        },
        {
          x: 'BuildIt',
          y: [new Date('2019-05-01').getTime(), new Date('2020-02-28').getTime()],
        },
        {
          x: 'BuildIt',
          y: [new Date('2020-03-01').getTime(), new Date('2020-10-31').getTime()],
        },
      ],
    },
    {
      name: 'Vue.js',
      data: [
        {
          x: 'BuildIt',
          y: [new Date('2019-05-01').getTime(), new Date('2020-12-23').getTime()],
        },
        {
          x: 'StageFive',
          y: [new Date('2021-01-02').getTime(), new Date('2021-02-28').getTime()],
        },
      ],
    },
    {
      name: 'Typescript',
      data: [
        {
          x: 'BuildIt',
          y: [new Date('2020-02-01').getTime(), new Date('2020-03-01').getTime()],
        },
        {
          x: 'StageFive',
          y: [new Date('2022-01-02').getTime(), new Date('2022-07-01').getTime()],
        },
        {
          x: 'NC ITS',
          y: [new Date('2022-07-10').getTime(), new Date('2025-03-03').getTime()],
        },
      ],
    },
    {
      name: 'React.js',
      data: [
        {
          x: 'StageFive',
          y: [new Date('2021-01-02').getTime(), new Date('2022-07-01').getTime()],
        },
        {
          x: 'NC ITS',
          y: [new Date('2022-07-10').getTime(), new Date('2025-03-03').getTime()],
        },
      ],
    },
    {
      name: 'Next.js',
      data: [
        {
          x: 'StageFive',
          y: [new Date('2022-01-02').getTime(), new Date('2022-07-01').getTime()],
        },
        {
          x: 'NC ITS',
          y: [new Date('2024-02-01').getTime(), new Date('2025-03-03').getTime()],
        },
      ],
    },
  ],
  options: {
    title: {
      text: '연도별 프로젝트 사용 기술',
      align: 'left',
      style: {
        color: 'white',
        fontWeight: 500,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
      },
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: 'white',
        },
      },
    },
    yaxis: {
      labels: {
        // rotate: -20,
        style: {
          colors: 'white',
          fontSize: 10,
        },
      },
    },
    tooltip: {
      x: {
        format: 'yyyy.MM',
      },
      y: {
        formatter: (value: string | number) => {
          console.log(123);
          if (typeof value === 'string') return value;
        },
        title: {
          formatter: (name: string) => {
            console.log(345);
            if (typeof name === 'string') return name;
          },
        },
      },
    },
    legend: {
      show: true,
      position: 'top',
      labels: {
        colors: 'white',
      },
    },
    colors: [
      themes.colors.ChartYellow,
      themes.colors.ChartRed,
      themes.colors.ChartGreen,
      themes.colors.ChartBlue,
      themes.colors.React,
      themes.colors.ChartPupple,
      // themes.colors.ReactNative,
    ],
  },
};

// Tree map을 통한 경험했던 기술에 대해 표시
export const TREEMAP_CHART_CONFIG = {
  width: '100%',
  height: '90%',

  series: [
    {
      color: themes.colors.ChartBlue,
      data: [
        {
          x: 'Javascript',
          y: 15,
        },
        {
          x: 'Typecript',
          y: 32,
        },
        {
          x: 'jQuery',
          y: 22,
        },
        {
          x: 'Vue.js',
          y: 21,
        },
        {
          x: 'React.js',
          y: 38,
        },
        {
          x: 'GatsBy',
          y: 2,
        },
        {
          x: 'Next.js',
          y: 19,
        },
        {
          x: 'Vuex',
          y: 21,
        },
        {
          x: 'Redux',
          y: 10,
        },
        {
          x: 'Recoil',
          y: 36,
        },
        {
          x: 'React-Query',
          y: 36,
        },
        {
          x: 'MFA',
          y: 6,
        },

        {
          x: 'Kendo UI',
          y: 18,
        },
        {
          x: 'Storybook',
          y: 5,
        },
        {
          x: 'X-Platform',
          y: 4,
        },
        {
          x: 'Stylus',
          y: 21,
        },
        {
          x: 'Styled-Component',
          y: 11,
        },
        {
          x: 'Emotion',
          y: 26,
        },
        {
          x: 'CSS3',
          y: 22,
        },
        {
          x: 'HTML5',
          y: 22,
        },
        {
          x: 'Java',
          y: 6,
        },
        {
          x: 'Oracle',
          y: 10,
        },
        {
          x: 'AWS S3',
          y: 18,
        },
      ],
    },
    {
      color: themes.colors.ChartGreen,
      data: [
        {
          x: 'Quasar Framework',
          y: 12,
        },
        {
          x: 'Electron',
          y: 3,
        },
        {
          x: 'Cordova',
          y: 6,
        },
        {
          x: 'React Native(WebView 포함)',
          y: 6,
        },
        {
          x: 'Vue.js(WebView)',
          y: 9,
        },
        {
          x: 'recoil',
          y: 6,
        },
        {
          x: 'vuex',
          y: 12,
        },
        {
          x: 'react-query',
          y: 6,
        },
        {
          x: 'DeepLink',
          y: '6',
        },
        {
          x: 'FCM',
          y: 12,
        },
        {
          x: 'BLE SDK',
          y: 8,
        },
        {
          x: 'MS Intune',
          y: '2',
        },
      ],
    },
    {
      color: themes.colors.ChartYellow,
      data: [
        {
          x: 'Git',
          y: 71,
        },
        {
          x: 'SVN',
          y: 24,
        },
        {
          x: 'Jira',
          y: 71,
        },
        {
          x: 'BitBucket',
          y: 39,
        },
        {
          x: 'Zeplin',
          y: 49,
        },
        {
          x: 'Figma',
          y: 22,
        },
        {
          x: 'Storybook',
          y: 10,
        },
      ],
    },
    {
      color: themes.colors.ChartRed,
      data: [
        {
          x: 'ERP',
          y: 5,
        },
        {
          x: 'MES',
          y: 9,
        },
        {
          x: 'IOT (Web)',
          y: 31,
        },
        {
          x: 'IOT (App)',
          y: 10,
        },
        {
          x: '이커머스',
          y: 18,
        },
        {
          x: 'ITSM (Web)',
          y: 32,
        },
        {
          x: 'ITSM (App)',
          y: 7,
        },
        {
          x: 'ITSM 백오피스',
          y: 32,
        },
      ],
    },
  ],
  options: {
    title: {
      text: '사용 및 경험',
      align: 'left',
      style: {
        color: 'white',
        fontWeight: 500,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      y: {
        formatter: (value: number) => {
          const displayValue = {
            year: '',
            month: '',
          };

          if (value / 12)
            displayValue.year = `${
              Math.floor(value / 12) > 0 ? `${Math.floor(value / 12)}년` : ''
            }`;
          if (value % 12) displayValue.month = `${value % 12 > 0 ? `${value % 12}개월` : ''}`;

          return `${displayValue.year} ${displayValue.month}`;
        },
        title: {
          formatter: (name: string) => `${name}: `,
        },
      },
    },
    dataLabels: {
      offsetY: -2,
    },
  },
  customLegends: [
    { color: themes.colors.ChartBlue, name: '사용 기술(Web)' },
    { color: themes.colors.ChartGreen, name: '사용 기술(App)' },
    { color: themes.colors.ChartYellow, name: '협업 툴' },
    { color: themes.colors.ChartRed, name: '서비스 도메인' },
  ],
};

// 본인의 성향
// 대표적인 기술 스택 사용 기간 및 해당 기술로 수행한 프로젝트 갯수 ?
// export  const RADAR_CHART_CONFIG = {
//   width: '100%',
//   height: '100%',
//   series: [
//     {
//       name: '',
//       data: [36, 24, 30, 24, 10],
//     },
//   ],
//   options: {
//     labels: ['React.js', 'Vue.js', 'Typescript', 'Next.js', 'App'],
//     fill: {
//       // opacity: 0.2,
//       colors: [themes.colors.Vue],
//     },
//     chart: {
//       offsetY: -30,
//       // offsetX: 5,
//       toolbar: {
//         show: false,
//       },
//     },
//     tooltip: {
//       custom: (opt: any) => {
//         const { seriesIndex, w } = opt;
//         const series = w.config.series;
//         const labels = w.config.labels;

//         // TODO: 아래 툴팁 스타일 커스텀 필요
//         const result = `<div class='custom-tooltip'> ${labels[seriesIndex]}: ${series[seriesIndex]}</div>`;
//         return result;
//       },
//     },
//   },
// };

// 프로젝트 요약
export const TABLE_CONFIG = {
  title: () => <span style={{ position: 'absolute', top: 10, left: 0 }}>프로젝트 요약</span>,
  pagination: false,
  scroll: { y: 250 },
  columns: [
    {
      title: '프로젝트명',
      dataIndex: 'name',
      key: 'name',
      width: 80,
    },
    {
      title: '프로젝트 기간',
      dataIndex: 'period',
      key: 'period',
      width: 80,
    },
    {
      title: '담당 업무',
      dataIndex: 'myTask',
      key: 'myTask',
      width: 90,
      className: 'my-work',
    },
    {
      title: '사용기술',
      key: 'tags',
      dataIndex: 'tags',
      width: 200,
      render: (tags: string[]) => {
        return (
          <span>
            {tags.map((tag) => {
              let color = 'lime';
              if (tag.includes('React-Query')) color = 'lime';
              else if (tag.includes('Vuex') || tag.includes('Recoil') || tag.includes('Redux'))
                color = 'gold';
              else if (
                tag.includes('React') ||
                tag.includes('GatsBy') ||
                tag.includes('React Native') ||
                tag.includes('Vue') ||
                tag.includes('HTML') ||
                tag.includes('Javascript') ||
                tag.includes('Typescript')
              )
                color = 'blue';
              else if (
                tag.includes('AWS') ||
                tag.includes('Nexus') ||
                tag.includes('Turbo') ||
                tag.includes('Module') ||
                tag.includes('Intune') ||
                tag.includes('FCM')
              )
                color = 'cyan';
              else if (
                tag.includes('Next') ||
                tag.includes('Framework') ||
                tag.includes('X-PLATFORM') ||
                tag.includes('Expo') ||
                tag.includes('Cordova') ||
                tag.includes('Electron')
              )
                color = 'purple';
              else if (
                tag.includes('Stylus') ||
                tag.includes('Emotion') ||
                tag.includes('CSS') ||
                tag.includes('Styled')
              )
                color = 'red';
              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        );
      },
    },
    {
      title: '상세보기',
      key: 'action',
      width: 60,
      render: (_: any, item: any) => {
        const workId = item.projectId;
        const pathName = `/works/detail/`;
        console.log(pathName);
        return (
          <Link href={{ pathname: pathName, query: { workId } }}>
            <span css={linkStyle()}>상세보기</span>
          </Link>
        );
      },
    },
  ],
  dataSource: [
    {
      key: '28',
      name: 'ITSM 통합관리자',
      period: '2024.07 - 진행중',
      myTask: '프론트엔드 개발',
      tags: [
        'Next.js',
        'Typescript',
        'Recoil',
        'Emotion',
        'React-Query',
        'Turbo Repo',
        'Module Federation',
      ],
      projectId: '28',
    },
    {
      key: '27',
      name: 'NCI 관리자',
      period: '2024.03 - 2025.03',
      myTask: '프론트엔드 개발 및 고도화',
      tags: [
        'Next.js',
        'Typescript',
        'Recoil',
        'Emotion',
        'React-Query',
        'ITSM 디자인시스템',
        'Turbo Repo',
      ],
      projectId: '27',
    },
    {
      key: '26',
      name: 'NSD 앱',
      period: '2023.04 - 2023.11',
      myTask: '프론트엔드 개발 및 유지보수',
      tags: [
        'React Native',
        'Expo',
        'Typescript',
        'Recoil',
        'Emotion',
        'React-Query',
        'FCM',
        'MS Intune',
      ],
      projectId: '26',
    },
    {
      key: '25',
      name: 'NSD',
      period: '2023.01 - 2025.03',
      myTask: '프론트엔드 개발 및 고도화',
      tags: [
        'React.js',
        'Typescript',
        'Recoil',
        'Emotion',
        'React-Query',
        'i18n',
        'ITSM 디자인시스템',
      ],
      projectId: '25',
    },

    {
      key: '24',
      name: 'ITSM 디자인 시스템',
      period: '2022.07 - 2022.12',
      myTask: '프론트엔드 개발',
      tags: ['React.js', 'Typescript', 'Emotion', 'Storybook', 'Nexus'],
      projectId: '24',
    },
    {
      key: '23',
      name: '핀다이렉트 Z',
      period: '2022.01 - 2022.06',
      myTask: '프론트엔드 개발',
      tags: ['Next.js', 'Typescript', 'Recoil', 'Emotion', 'React-Query', 'AWS S3'],
      projectId: '23',
    },
    {
      key: '22',
      name: '핀다이렉트샵 1.0',
      period: '2021.03 - 2022.02',
      myTask: '프론트엔드 개발 및 유지보수',
      tags: ['React.js', 'Redux', 'Styled-component', 'React-apexchart', 'AWS S3'],
      projectId: '22',
    },

    {
      key: '21',
      name: 'One Click',
      period: '2021.02 - 2021.02',
      myTask: '프론트엔드 개발',
      tags: ['Vue.js', 'Vuex', 'Stylus', 'AWS S3'],
      projectId: '21',
    },

    {
      key: '20',
      name: '스마트폰샵',
      period: '2021.01 - 2022.02',
      myTask: '프론트엔드 개발 및 유지보수',
      tags: ['React.js', 'Redux', 'Styled-component', 'AWS S3'],
      projectId: '20',
    },

    {
      key: '19',
      name: '프로모션 페이지',
      period: '2021.01 - 2021.01',
      myTask: '프론트엔드 개발',
      tags: ['GatsBy', 'Styled-component', 'AWS S3'],
      projectId: '19',
    },

    {
      key: '18',
      name: 'BuildThing LoadCell Server',
      period: '2020.11 - 2020.11',
      myTask: '프론트엔드 개발',
      tags: ['Vue.js', 'Vuex', 'Stylus', 'GridStack.js', 'Kendo UI', 'FCM'],
      projectId: '18',
    },

    {
      key: '17',
      name: 'BuildThing LoadCell Admin 앱',
      period: '2020.11 - 2020.11',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Cordova', 'Vue.js', 'Vuex', 'Stylus', 'Kendo UI', 'FCM'],
      projectId: '17',
    },
    {
      key: '16',
      name: 'BuildThing LoadCell 앱',
      period: '2020.10 - 2020.11',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Cordova', 'Vue.js', 'Vuex', 'Stylus', 'Kendo UI', 'FCM'],
      projectId: '16',
    },
    {
      key: '15',
      name: 'BuildThing IAQ Cloud',
      period: '2020.08 - 2020.09',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Vue.js', 'Vuex', 'Stylus', 'GridStack.js', 'Kendo UI', 'FCM'],
      projectId: '15',
    },

    {
      key: '14',
      name: 'BuildThing Cloud v1.1',
      period: '2020.08 - 2020.09',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Vue.js', 'Vuex', 'Stylus', 'Kendo UI', 'FCM'],
      projectId: '14',
    },

    {
      key: '13',
      name: 'BuildThing IAQ Admin 앱',
      period: '2020.08 - 2020.08',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Cordova', 'Vue.js', 'Vuex', 'Stylus', 'Kendo UI', 'FCM'],
      projectId: '13',
    },

    {
      key: '12',
      name: 'BuildThing Admin 앱 v1.1',
      period: '2020.08 - 2020.08',
      myTask: '프론트엔드 개발',
      tags: [
        'Quasar Framework',
        'Cordova',
        'Electron',
        'Vue.js',
        'Vuex',
        'Stylus',
        'Kendo UI',
        'FCM',
      ],
      projectId: '12',
    },

    {
      key: '11',
      name: 'BuildThing IAQ 앱',
      period: '2020.07 - 2020.08',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Cordova', 'Vue.js', 'Vuex', 'Stylus', 'Kendo UI', 'FCM'],
      projectId: '11',
    },
    {
      key: '10',
      name: 'B.IOT v1.3',
      period: '2020.03 - 2020.10',
      myTask: '프론트엔드 개발 및 유지보수',
      tags: ['Javascript', 'HTML5', 'CSS3', 'jQuery', 'GridStack.js', 'Kendo UI', 'i18n'],
      projectId: '10',
    },

    {
      key: '9',
      name: '자사 홈페이지',
      period: '2020.02 - 2020.03',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Vue.js', 'Vuex', 'Typescript', 'Stylus', 'i18n'],
      projectId: '9',
    },

    {
      key: '8',
      name: 'B.IOT v1.2',
      period: '2019.05 - 2020.02',
      myTask: '프론트엔드 개발 및 유지보수',
      tags: ['Javascript', 'HTML5', 'CSS3', 'jQuery', 'GridStack.js', 'Kendo UI', 'i18n'],
      projectId: '8',
    },

    {
      key: '7',
      name: 'A4S',
      period: '2019.05 - 2019.10',
      myTask: '프론트엔드 개발',
      tags: ['Vue.js', 'Vuex', 'Stylus', 'GridStack.js', 'Kendo UI'],
      projectId: '7',
    },

    {
      key: '6',
      name: 'BuildThing Cloud',
      period: '2019.05 - 2019.05',
      myTask: '프론트엔드 개발',
      tags: ['Quasar Framework', 'Vue.js', 'Vuex', 'Stylus', 'Kendo UI'],
      projectId: '6',
    },

    {
      key: '5',
      name: 'MES 시스템 2.0',
      period: '2018.04 - 2018.12',
      myTask: '시스템 운영 및 유지보수',
      tags: ['Spring Framework', 'Javascript', 'Oracle'],
      projectId: '5',
    },

    {
      key: '4',
      name: 'SWC 키오스크',
      period: '2018.02 - 2018.03',
      myTask: '프론트엔드 개발',
      tags: ['Spring Framework', 'Javascript', 'jQuery', 'Oracle'],
      projectId: '4',
    },

    {
      key: '3',
      name: 'SWC 웹',
      period: '2017.11 - 2018.03',
      myTask: '프론트엔드 개발',
      tags: ['Spring Framework', 'Javascript', 'CSS3', 'jQuery', 'Oracle'],
      projectId: '3',
    },

    {
      key: '2',
      name: '통합 IT 시스템 구축',
      period: '2017.06 - 2017.10',
      myTask: '시스템 개발',
      tags: ['X-PLATFORM', 'Oracle'],
      projectId: '2',
    },

    {
      key: '1',
      name: 'SWC Wall-Pad',
      period: '2017.04 - 2017.05',
      myTask: '프론트엔드 개발',
      tags: ['Spring Framework', 'Javascript', 'CSS3', 'jQuery', 'Oracle'],
      projectId: '1',
    },
  ],
};
