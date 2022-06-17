export const rangeControl = ({ min = 12, step = 1, max = 100 } = {}) => ({
  control: {
    type: 'range',
    min,
    step,
    max,
  },
});

export const selectControl = (options) => ({
  control: {
    type: 'select',
    options,
  },
});

export const hideNoControlWarning = (added = {}) => ({
  parameters: {
    controls: {
      hideNoControlsWarning: true,
    },
    ...added,
  },
});

export const designFigma = (url) => {
  return {
    design: {
      type: 'figma',
      url,
    },
  };
};
