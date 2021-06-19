import React, { useState } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export const FilterByPrice = () => {
  return (
    <div>
      <h4>Filter By Price</h4>
    </div>
  );
};
