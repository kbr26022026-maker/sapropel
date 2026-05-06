import { onMounted, onUnmounted } from 'vue'

export function useReveal() {
  let observer = null

  onMounted(() => {
    const elements = document.querySelectorAll('.eo-reveal:not(.eo-in)')

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('eo-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  function refresh() {
    if (!observer) return
    const elements = document.querySelectorAll('.eo-reveal:not(.eo-in)')
    elements.forEach((el) => observer.observe(el))
  }

  return { refresh }
}
