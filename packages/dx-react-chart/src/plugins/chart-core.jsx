import * as React from 'react';
import { Plugin, Getter } from '@devexpress/dx-react-core';
import { prepareData } from '@devexpress/dx-chart-core';

const getData = ({ data, series, processingData }) => prepareData(data, series, processingData);

const getDomains = ({
  axes, series, data, argumentAxisName, startFromZero, computedDomain,
}) => computedDomain(axes, series, data, argumentAxisName, startFromZero);

export const ChartCore = () => (
  <Plugin>
    <Getter name="data" computed={getData} />
    <Getter name="domains" computed={getDomains} />
  </Plugin>
);
