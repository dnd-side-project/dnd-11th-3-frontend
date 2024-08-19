export function foramtNumberWithCommas(num: string): string {
   const formatter = new Intl.NumberFormat('en-US')
   return formatter.format(parseFloat(num))
}
