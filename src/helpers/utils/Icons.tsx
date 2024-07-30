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
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
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

export const HomeIcon = (color?: any) => {
  return (
    <Svg width={26} height={29} viewBox="0 0 26 29" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.29 3.805a.464.464 0 00-.58 0l-9.75 7.8a.464.464 0 00-.174.364v13.036c0 .256.208.464.464.464h5.107v-9.75a1.393 1.393 0 011.393-1.393h6.5a1.392 1.392 0 011.393 1.393v9.75h5.107a.464.464 0 00.464-.464V11.968a.464.464 0 00-.174-.363l-9.75-7.8zm-2.322-2.174a3.25 3.25 0 014.062 0l9.75 7.8c.77.616 1.22 1.55 1.22 2.539v13.035a3.25 3.25 0 01-3.25 3.25h-6.5a1.393 1.393 0 01-1.393-1.393v-9.75h-3.714v9.75a1.393 1.393 0 01-1.393 1.393h-6.5A3.25 3.25 0 010 25.005V11.968c0-.986.45-1.92 1.22-2.537l9.75-7.8h-.002z"
        fill={color}
      />
    </Svg>
  )
}

export const SellIcon = ({ color = "#B9B9B9" }) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
      <Path
        d="M6.863 4.992a1.872 1.872 0 100 3.743 1.872 1.872 0 000-3.743zm16.997 5.877L13.365.362A1.248 1.248 0 0012.479 0H1.248A1.248 1.248 0 000 1.248v11.23a1.247 1.247 0 00.362.887L10.869 23.86a3.744 3.744 0 005.291 0l7.7-7.637a3.744 3.744 0 000-5.291v-.063zm-1.76 3.52l-7.712 7.699a1.248 1.248 0 01-1.76 0L2.497 11.968V2.495h9.471L22.1 12.629a1.249 1.249 0 010 1.76z"
        fill={color}
      />
    </Svg>
  )
}

export const BookmarkIcon = ({ color = "#B9B9B9" }) => {
  return (
    <Svg width={18} height={26} viewBox="0 0 18 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.14 2.691c-.248 0-.449.201-.449.449v17.783l5.425-4.467a1.346 1.346 0 011.71 0l5.425 4.467V3.14c0-.248-.2-.449-.448-.449H3.14zM0 3.14A3.14 3.14 0 013.14 0h11.663a3.14 3.14 0 013.14 3.14v20.634a1.346 1.346 0 01-2.201 1.039l-6.77-5.575-6.77 5.575A1.346 1.346 0 010 23.774V3.14z"
        fill={color}
      />
    </Svg>
  )
}

export const PersonIcon = ({ color = "#B9B9B9" }) => {
  return (
    <Svg width={22} height={24} viewBox="0 0 22 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.24 7.176a4.486 4.486 0 11-8.972 0 4.486 4.486 0 018.971 0zm.109 5.514A7.18 7.18 0 0014.874 1.3 7.177 7.177 0 006.157 12.69 10.772 10.772 0 000 21.916a1.345 1.345 0 002.688.125 8.074 8.074 0 0116.13 0 1.346 1.346 0 102.689-.125 10.775 10.775 0 00-6.158-9.226z"
        fill={color}
      />
    </Svg>
  )
}
