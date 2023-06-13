export type WeekHeaderProps = {
  weekDays: Date[]
  selectedDay: Date
  formatOfDay?: string
  onSelectDate: (data: Date) => void
}
