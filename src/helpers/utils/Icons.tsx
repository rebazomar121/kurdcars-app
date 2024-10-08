import * as React from "react";
import Svg, {
  G,
  Path,
  Defs,
  ClipPath,
  Rect,
  Pattern,
  Use,
  Image,
} from "react-native-svg";

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
  );
};

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
  );
};

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
        stroke="#573CDA"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </Svg>
  );
};

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
  );
};

export const SellIcon = ({ color = "#B9B9B9", size = 25 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Path
        d="M6.863 4.992a1.872 1.872 0 100 3.743 1.872 1.872 0 000-3.743zm16.997 5.877L13.365.362A1.248 1.248 0 0012.479 0H1.248A1.248 1.248 0 000 1.248v11.23a1.247 1.247 0 00.362.887L10.869 23.86a3.744 3.744 0 005.291 0l7.7-7.637a3.744 3.744 0 000-5.291v-.063zm-1.76 3.52l-7.712 7.699a1.248 1.248 0 01-1.76 0L2.497 11.968V2.495h9.471L22.1 12.629a1.249 1.249 0 010 1.76z"
        fill={color}
      />
    </Svg>
  );
};

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
  );
};

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
  );
};

export const EnginePiston = (props: any) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      textRendering="geometricPrecision"
      imageRendering="optimizeQuality"
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 512 509.77"
      {...props}
    >
      <Path d="M244.48 209.89c1.8 18.05-22.84 51.63-33.52 62.51-21.3 21.66-40.94 45.37-73.68 69.79-23.43 17.47-29.49 19.61-57.67 19.22l-1.02-.05c-10.72 0-21.43 2.45-31.23 7.36l-14.85-14.85c-1.98-1.98-5.21-1.98-7.18 0L1.48 377.7c-1.97 1.99-1.97 5.22 0 7.2l14.79 14.78a69.844 69.844 0 00-7.46 30.47l-.04 1.04c0 17.86 6.81 35.74 20.44 49.36 13.58 13.58 31.43 20.39 49.35 20.42h.06c10.81 0 21.61-2.5 31.47-7.47l14.78 14.79c1.98 1.97 5.21 1.97 7.19 0l23.84-23.85c1.98-1.97 1.98-5.19 0-7.18l-14.85-14.85c4.91-9.8 7.36-20.51 7.36-31.23 0-29.62 1.48-35.84 20.2-60.62 24.44-32.39 47.49-50.85 68.75-71.76 10.86-10.68 44.46-33.54 62.5-33.53l-55.38-55.38zM355.29.95c70.35 38.85 119.62 87.62 155.76 155.77 1.01 1.87 1.5 3.96 0 5.46l-17.61 17.61L332.22 18.56 349.83.95c1.5-1.5 3.61-1.01 5.46 0zm11.67 144.1c12.77 12.78 12.77 33.49-.01 46.27-12.77 12.77-33.48 12.78-46.26 0-12.78-12.78-12.78-33.5 0-46.27 12.78-12.78 33.49-12.78 46.27 0zm114.96 46.27l-10.68 10.67L310.01 40.77l10.68-10.68 161.23 161.23zm-22.21 22.2L357.59 315.65c-1.47 1.46-3.98 1.46-5.46-.01l-24.44-24.45 5.73-5.74c13.43-13.43.19-17.84-13.19-31.23l-62.43-62.43c-13.39-13.38-17.86-26.58-31.24-13.2l-5.74 5.74-24.46-24.45c-1.47-1.48-1.5-3.96 0-5.46L298.48 52.29l161.23 161.23zm-354.15 217.6c0 14.68-11.9 26.59-26.59 26.59-14.68 0-26.58-11.91-26.58-26.59 0-14.69 11.9-26.59 26.58-26.59 14.69 0 26.59 11.9 26.59 26.59z" />
    </Svg>
  );
};
