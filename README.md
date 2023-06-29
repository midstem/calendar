# Chronous

The project is still in the development

## 💅 **Styling**

```css
.today-button - styles the today button that gets a user to the current date

.selected-day-button - styles the selected day button

.dropdown-wrapper - styles the container that wraps dropdown

.dropdown-button - styles the dropdown button that toggles the display of the dropdown list

.dropdown - styles the container that wraps dropdown items

.dropdown-item - styles the dropdown items

.chevron-down - styles the dropdown arrow

.row - styles the container that wraps cells

.cell - styles the container that wraps events

.time - styles the cell that contains time

.event - styles the container that wraps event

.header-grid - styles the grid container that wraps header items

.modal-cross - styles the cross button in the modal with other events
```
## **Props**

| Props | Description | Default | Type |
| ------ | ----------- | ------- | ---- |
| events | List of events to be displayed on the calendar | `[]` | {id: string; title: string; date: string; start: string; end: string; overlapping?: number; type?: string; position?: string; number; width?: string; color?: string; textColor?: string; opacity?: number}[] |
| currentDay | Currently selected date | `new Date()` (Today's date) | string \| Date |
| selectedEvent | Selected event | `undefined` | string \| undefined |
| renderEventComponent | FunctionComponent to render as custom event component | `undefined` | FunctionComponent<EventComponentProps> \| undefined |
| onClickEvent | Function to handle click event on an event | `() => {}` | (event: CellT) => void |
| onClickCell | Function to handle click event on a cell | `() => {}` | (time: string, day: Date) => void |
| onChangeDate | Function to handle date change | `() => {}` | (start: Date, end: Date) => void |
| config | Configuration array for the calendar view containers | `[]` | {maxWidth: number, mode: "Day" \| "Week" \| "Month"}[] |
| mode | Mode of the calendar view | `'Week'` | "Day" \| "Week" \| "Month" |
| startHour | Set from what hour show events | `1` | number |
| endHour | Set to what hour show events | `24` | number |
| nextButton | Prop for custom header next arrow | `<RightArrow color={colors.teal} />` | ReactNode |
| prevButton | Prop for custom header previous arrow | `<LeftArrow color={colors.teal} />` | ReactNode |
| customDropdownArrow | Prop for custom dropdown arrow | `<ChevronDown />` | ReactNode |
| className | Prop for class that styles calendar container | `undefined` | string \| undefined |

