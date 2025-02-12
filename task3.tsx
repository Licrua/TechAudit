import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./types";

type SliceInfoProps = {
  sliceId: number;
};

const SliceInfo = ({ sliceId }: SliceInfoProps) => {
  const customChartName = useSelector((state: RootState) => {
    const layoutItems = state.dashboardLayout.present;

    const matchingItem = Object.values(layoutItems).find(
      (item) => item.meta.chartId === sliceId
    );

    return matchingItem?.meta.sliceNameOverride || matchingItem?.meta.sliceName || "Chart name not found";
  });

  return (
    <div>
      <h1>{customChartName}</h1>
    </div>
  );
};

export default SliceInfo;
