export const getColSpan = (width, maxWidth = 12) => {
  //TODO: In certain cases, the sum of the widths defined can give back a
  // number > 12. Ex, 20%, 30%, and 50% will span 3, 4, and 6 columns respectively.
  // This can happen only with user-defined column sizes - figure out what to do
  // in such a scenario.
  if (!width) {
    return `col-span-12 md:col-span-6`
  } else {
    const span = Math.ceil((parseFloat(width) * maxWidth) / 100)
    return  `col-span-12 md:col-span-${span}`
  }
}
