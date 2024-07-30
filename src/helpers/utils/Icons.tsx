import * as React from "react"
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg"

export const FilterIcon = (props: any) => {
  return (
    <Svg viewBox="0 0 16 16" width={16} height={16} fill="none" {...props}>
      <G clipPath="url(#clip0_5_313)">
        <Path
          d="M9 4a3 3 0 116 0 3 3 0 01-6 0zm0 0H1m6 8a3 3 0 11-6 0 3 3 0 016 0zm0 0h8"
          stroke="#fff"
          strokeWidth={2}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_5_313">
          <Path fill="#fff" d="M0 0H16V16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export const SearchIcon = (props: any) => {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <Path
        d="M14.75 14.75l-3.86-3.904M6.875 12.5c-2.25 0-5.625-1.688-5.625-5.625 0-3.938 3.375-5.625 5.625-5.625S12.5 2.938 12.5 6.875c0 3.938-3.375 5.625-5.625 5.625z"
        stroke="#9CA3AF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export const LocationIcon = (props: any) => {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
      <Path
        d="M10.125 6.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
        stroke="#8B73FF"
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M3.375 7.222c0-3.557 2.344-6.097 5.625-6.097s5.625 2.54 5.625 6.097c0 3.667-2.876 7.005-5.625 9.09-2.75-2.085-5.625-5.423-5.625-9.09z"
        stroke="#736fae"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  )
}
