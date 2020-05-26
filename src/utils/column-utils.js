export const getColSpan = (width, maxWidth = 12) => {
  if (!width) {
    return `col-span-12 md:col-span-6`
  } else {
    const span = Math.ceil((parseFloat(width) * maxWidth) / 100)
    return  `col-span-12 md:col-span-${span}`
  }
}
