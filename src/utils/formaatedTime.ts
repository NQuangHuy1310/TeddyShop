export const convertToVietnameseDay = (day: string): string => {
  const englishDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const vietnameseDays: string[] = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy']

  const englishDayIndex = englishDays.findIndex((d) => d.toLowerCase() === day.toLowerCase())
  const vietnameseDay = vietnameseDays[englishDayIndex]

  return vietnameseDay
}

export const convertToVietnameseMonth = (month: string): string => {
  const englishMonths: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const vietnameseMonths: string[] = [
    'tháng 1',
    'tháng 2',
    'tháng 3',
    'tháng 4',
    'tháng 5',
    'tháng 6',
    'tháng 7',
    'tháng 8',
    'tháng 9',
    'tháng 10',
    'tháng 11',
    'tháng 12'
  ]

  const englishMonthIndex = englishMonths.findIndex((m) => m.toLowerCase() === month.toLowerCase())
  const vietnameseMonth = vietnameseMonths[englishMonthIndex]

  return vietnameseMonth
}
