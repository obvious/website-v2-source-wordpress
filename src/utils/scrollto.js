const scrollToRef = (ref) => window.scrollTo({
  left: 0,
  top: ref.current.offsetTop - 70, // TODO - avoid doing this. Is happening because of fixed header
  behavior: "smooth"
})

export default scrollToRef