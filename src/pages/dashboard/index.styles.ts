import { css } from '@emotion/react';
import { themes } from '@styles/themes';

const wrapperStyle = () => css`
  .tooltip-box {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 0 10px;
    padding: 6px 10px 8px;
    border-radius: 5px;
    background-color: ${themes.colors.White};
    color: ${themes.colors.Black};
  }

  .tooltip-circle-0,
  .tooltip-circle-1,
  .tooltip-circle-2,
  .tooltip-circle-3,
  .tooltip-circle-4 {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }

  .tooltip-circle-0 {
    background-color: ${themes.colors.Next};
  }
  .tooltip-circle-1 {
    background-color: ${themes.colors.React};
  }
  .tooltip-circle-2 {
    background-color: ${themes.colors.ReactNative};
  }
  .tooltip-circle-3 {
    background-color: ${themes.colors.Vue};
  }
  .tooltip-circle-4 {
    background-color: ${themes.colors.Typescript};
  }

  .tooltip-history-circle-0,
  .tooltip-history-circle-1,
  .tooltip-history-circle-2,
  .tooltip-history-circle-3 {
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 6px;
  }

  .tooltip-history-circle-0 {
    background-color: ${themes.colors.ChartBlue};
  }
  .tooltip-history-circle-1 {
    background-color: ${themes.colors.ChartGreen};
  }
  .tooltip-history-circle-2 {
    background-color: ${themes.colors.ChartYellow};
  }
  .tooltip-history-circle-3 {
    background-color: ${themes.colors.ChartRed};
  }

  .tooptip-title {
    ${themes.fontSize.Body2};
    ${themes.fontWeight.Normal};
    color: ${themes.colors.Black};
  }
  .tooltip-value {
    ${themes.fontSize.Body2};
    ${themes.fontWeight.Bold};
    color: ${themes.colors.Black};
  }
`;

const linkStyle = () => css`
  color: ${themes.colors.White};
  cursor: pointer;
`;

const treemapChartBoxStyle = () => css`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  gap: 14px 0;

  .apexcharts-datalabel {
    writing-mode: horizontal-tb !important;
  }
`;

const treemapLegendBoxStyle = () => css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px 10px;

  > div {
    display: flex;
    width: fit-content;
    gap: 0 4px;
    cursor: pointer;
  }
`;

const treemapLegendTextStyle = () => css`
  display: block;
  color: ${themes.colors.White};
  ${themes.fontSize.Body2};
  ${themes.fontWeight.Normal};
`;

const legendCircleStyle = (color: string) => css`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 12px;
  border: 1px solid ${themes.colors.White};
  background-color: ${color};
`;

const customTooltipBoxStyle = () => css`
  width: 100%;
  height: 100%;
`;

export {
  wrapperStyle,
  linkStyle,
  treemapChartBoxStyle,
  treemapLegendBoxStyle,
  treemapLegendTextStyle,
  legendCircleStyle,
  customTooltipBoxStyle,
};
