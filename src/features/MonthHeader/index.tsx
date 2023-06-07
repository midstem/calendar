const MonthHeader = ({ slotsFirstDateInList }: any) => {
  const startDate = new Date(slotsFirstDateInList)
  const startMonth = startDate.toLocaleString('default', { month: 'long' })
  const endMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    0
  ).toLocaleString('default', { month: 'long' })

  return (
    <div className="monthHeader">
      <div>{startMonth}</div>
      {startMonth !== endMonth && <div>- {endMonth}</div>}
    </div>
  )
}

export default MonthHeader
