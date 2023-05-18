export enum DaysOfTheWeek {
  Mon = 'Monday',
  Tue = 'Tuesday',
  Wed = 'Wednesday',
  Thu = 'Thursday',
  Fri = 'Friday',
  Sat = 'Saturday',
  Sun = 'Sunday'
}

export const CELL_HEIGHT = 60

export const EVENT_GAP = 2

export const OVERLAP_STEP = 8

export const dateFormat = {
  MONTH_LONG: 'LLLL',
  MONTH_SHORT: 'LLL',
  DAY_LONG: 'EEEE',
  DAY_NUMBER: 'dd',
  HOUR: 'HH',
  HOUR_AND_MINUTE: 'HH:mm',
  MERIDIEM_TIME: 'hh:mm a',
  MINUTE: 'mm',
  YEAR_MONTH_DAY: 'yyyy-LLLL-dd',
  DATE: 'yyyy-MM-dd'
}

export const DAYS_IN_YEAR = 365

export const WEEK_DAYS = 7

export const START_DAY = 7

export const END_DAY = 22

export const DAY_IN_HOURS = 24

export const daysOfWeek = Object.values(DaysOfTheWeek)

export enum CalendarSlotType {
  MEMBER_AVAILABILITY = 'member_availability',
  CLIENT_AVAILABILITY = 'client_availability',
  MEMBER_APPOINTMENT = 'member_appointment',
  CLIENT_APPOINTMENT = 'client_appointment'
}

export enum MERIDIEM {
  BEFORE_MIDDAY = 'AM',
  AFTER_MIDDAY = 'PM'
}

export const HOUR_IN_MINUTES = 60

export const colors = {
  white: '#FFFFFF',
  // PINK
  crimson: '#CC0056',
  pitchPuff: '#FFD4C6',
  mistyRose: '#FFE9E2',
  seaShel: '#FFF4F0',
  // GREEN
  darkGreen: '#002729',
  teal: '#006C73',
  powderBlue: '#B9E9E0',
  aliseBlue: '#F1FAF9',
  lightTeal: '#5FEDD3',
  // GREY
  eerieBlack: '#1F1F1F',
  dimGrey: '#585858',
  grey: '#BCBCBC',
  whiteSmoke: '#F4F4F4',

  outrageousOrange: '#F4511E',
  fuego: '#C0CA33'
}
