export const applyOpacity = (hexColor: string, opacity: number): string => {
  hexColor = hexColor.replace('#', '')

  const r: number = parseInt(hexColor.substring(0, 2), 16)
  const g: number = parseInt(hexColor.substring(2, 4), 16)
  const b: number = parseInt(hexColor.substring(4, 6), 16)

  const newR: number = Math.round((1 - opacity) * 255 + r * opacity)
  const newG: number = Math.round((1 - opacity) * 255 + g * opacity)
  const newB: number = Math.round((1 - opacity) * 255 + b * opacity)

  const modifiedHexColor = `#${newR.toString(16).padStart(2, '0')}${newG
    .toString(16)
    .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`

  return modifiedHexColor
}
