// export const generateSlotsForDaysOfMonth = (
//   currentYear: any,
//   daysInMonth: any,
//   currentMonth: any,
//   slotsData: any,
// ): {
//   slots: any
//   date: Date
// }[] => {
//   const cells = Array.from({ length: daysInMonth }, (_, day) => ({
//     date: new Date(currentYear, currentMonth, day + 1),
//     slots: [],
//   }))

//   const newCells = cells.map(cell => {
//     const matchingSlotData = slotsData.find(({ date }: any) => {
//       const slotDate = new Date(date)

//       return (
//         slotDate.getMonth() === currentMonth &&
//         slotDate.getFullYear() === currentYear &&
//         slotDate.getDate() === cell.date.getDate()
//       )
//     })

//     if (matchingSlotData) {
//       return {
//         ...cell,
//         slots: matchingSlotData.slots,
//       }
//     }

//     return cell
//   })

//   return newCells
// }
