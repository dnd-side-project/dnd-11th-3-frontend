export function formatNumberWithCommas(num: number): string {
   const formatter = new Intl.NumberFormat('en-US')
   return formatter.format(num)
}
