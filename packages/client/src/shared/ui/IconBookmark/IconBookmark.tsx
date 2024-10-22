export function Bookmark({
   title = 'Bookmark',
   titleId = 'Bookmark',
   size = 20,
   color = '#2A2A2A',
   ...props
}: {
   title?: string
   titleId?: string
   size?: number
   color?: string
}) {
   return (
      <svg
         width={size}
         height={size}
         fill="none"
         viewBox="0 0 30 30"
         color={color}
         //  aria-labelledby={titleId}
         //  {...props}
      >
         {/* {title ? <title id={titleId}>{title}</title> : null} */}
         <g clipPath="url(#a)">
            <path
               fill={color}
               d="M21.25 3.75H8.75a2.507 2.507 0 0 0-2.5 2.5v18.484a1 1 0 0 0 1.394.919l6.962-2.984a1 1 0 0 1 .788 0l6.962 2.984a1 1 0 0 0 1.394-.92V6.25c0-1.375-1.125-2.5-2.5-2.5m0 17.223a1 1 0 0 1-1.4.917l-4.45-1.94a1 1 0 0 0-.8 0l-4.45 1.94a1 1 0 0 1-1.4-.917V7.25a1 1 0 0 1 1-1h10.5a1 1 0 0 1 1 1z"
            />
         </g>
         {/* <defs>
            <clipPath id="a">
               <path fill="#fff" d="M0 0h30v30H0z" />
            </clipPath>
         </defs> */}
      </svg>
   )
}
