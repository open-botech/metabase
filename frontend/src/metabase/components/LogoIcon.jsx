import React, { Component } from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import { PLUGIN_LOGO_ICON_COMPONENTS } from "metabase/plugins";

class DefaultLogoIcon extends Component {
  static defaultProps = {
    height: 32,
  };
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    dark: PropTypes.bool,
  };

  render() {
    const { dark, height, width } = this.props;
    return (
      <svg width="148" height="40" viewBox="0 0 148 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60.87 21.168C60.87 18.462 60.892 16.504 59.308 14.92C58.208 13.82 56.866 13.204 55.084 13.204C53.302 13.204 51.938 13.82 50.838 14.92C49.254 16.504 49.298 18.462 49.298 21.168C49.298 23.874 49.254 25.832 50.838 27.416C51.938 28.516 53.302 29.132 55.084 29.132C56.866 29.132 58.208 28.516 59.308 27.416C60.892 25.832 60.87 23.874 60.87 21.168ZM57.812 21.168C57.812 24.182 57.636 24.908 57.042 25.568C56.602 26.074 55.92 26.404 55.084 26.404C54.248 26.404 53.544 26.074 53.104 25.568C52.51 24.908 52.356 24.182 52.356 21.168C52.356 18.154 52.51 17.428 53.104 16.768C53.544 16.262 54.248 15.932 55.084 15.932C55.92 15.932 56.602 16.262 57.042 16.768C57.636 17.428 57.812 18.154 57.812 21.168ZM73.2902 29V21.674C73.2902 20.42 73.0482 19.342 72.1242 18.418C71.4862 17.78 70.5622 17.406 69.4182 17.406C68.3622 17.406 67.3062 17.802 66.5582 18.594V17.538H63.7642V29H66.6242V22.07C66.6242 20.508 67.6362 19.98 68.5382 19.98C69.4402 19.98 70.4302 20.508 70.4302 22.07V29H73.2902ZM85.7915 24.16V22.884C85.7915 19.738 83.9875 17.406 80.7975 17.406C77.8275 17.406 75.8035 19.518 75.8035 23.258C75.8035 27.9 78.3995 29.132 81.1055 29.132C83.1735 29.132 84.2955 28.494 85.4615 27.328L83.7235 25.634C82.9975 26.36 82.3815 26.712 81.1275 26.712C79.5215 26.712 78.6195 25.634 78.6195 24.16H85.7915ZM82.9755 22.202H78.6195C78.6415 21.696 78.7075 21.388 78.8835 20.97C79.1915 20.288 79.8295 19.782 80.7975 19.782C81.7655 19.782 82.4035 20.288 82.7115 20.97C82.8875 21.388 82.9535 21.696 82.9755 22.202ZM99.5383 13.336H96.3483L93.2023 23.544L90.0563 13.336H86.8883L92.0583 29H94.3463L99.5383 13.336ZM104.093 15.58V13.248H101.167V15.58H104.093ZM104.071 29V17.538H101.211V29H104.071ZM115.894 25.392C115.894 23.456 114.75 22.246 112.484 22.026L110.68 21.85C109.668 21.762 109.492 21.278 109.492 20.86C109.492 20.288 109.976 19.76 111.12 19.76C112.11 19.76 113.122 19.936 113.782 20.53L115.542 18.748C114.442 17.714 112.946 17.406 111.164 17.406C108.832 17.406 106.742 18.682 106.742 21.058C106.742 23.17 108.018 24.072 110.086 24.27L111.89 24.446C112.792 24.534 113.1 24.93 113.1 25.502C113.1 26.36 112.066 26.69 111.076 26.69C110.196 26.69 108.964 26.558 108.018 25.612L106.148 27.482C107.6 28.934 109.228 29.132 111.032 29.132C113.738 29.132 115.894 27.922 115.894 25.392ZM121.174 15.58V13.248H118.248V15.58H121.174ZM121.152 29V17.538H118.292V29H121.152ZM133.568 23.258C133.568 21.19 133.304 19.892 132.27 18.814C131.566 18.066 130.4 17.406 128.706 17.406C127.012 17.406 125.868 18.066 125.164 18.814C124.13 19.892 123.866 21.19 123.866 23.258C123.866 25.348 124.13 26.646 125.164 27.724C125.868 28.472 127.012 29.132 128.706 29.132C130.4 29.132 131.566 28.472 132.27 27.724C133.304 26.646 133.568 25.348 133.568 23.258ZM130.708 23.258C130.708 24.446 130.642 25.458 130.048 26.052C129.718 26.382 129.278 26.558 128.706 26.558C128.134 26.558 127.716 26.382 127.386 26.052C126.792 25.458 126.726 24.446 126.726 23.258C126.726 22.07 126.792 21.08 127.386 20.486C127.716 20.156 128.134 19.98 128.706 19.98C129.278 19.98 129.718 20.156 130.048 20.486C130.642 21.08 130.708 22.07 130.708 23.258ZM145.821 29V21.674C145.821 20.42 145.579 19.342 144.655 18.418C144.017 17.78 143.093 17.406 141.949 17.406C140.893 17.406 139.837 17.802 139.089 18.594V17.538H136.295V29H139.155V22.07C139.155 20.508 140.167 19.98 141.069 19.98C141.971 19.98 142.961 20.508 142.961 22.07V29H145.821Z" fill="url(#paint0_linear_88_13035)"/>
        <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M19 17L28.5 22.7L38 28.4L19 40L0 28.8L9.5 23.1L19 17.4V17Z" fill="url(#paint1_linear_88_13035)"/>
        <path opacity="0.5" d="M19 0L0 11.1429V29L19 17V0Z" fill="url(#paint2_linear_88_13035)"/>
        <g opacity="0.92">
          <path d="M3 17L8 20V24L3 21V17Z" fill="#1648D5"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M8 14L5.5 15.5L3 17L8 20L13 17L10.5 15.5L8 14Z" fill="url(#paint3_linear_88_13035)"/>
          <path d="M13 17L8 20V24L13 21V17Z" fill="#6CB2F7"/>
        </g>
        <g opacity="0.92">
          <path d="M12 12L17 15V29L12 26V12Z" fill="#1648D5"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17 9L14.5 10.5L12 12L17 15L22 12L19.5 10.5L17 9Z" fill="url(#paint4_linear_88_13035)"/>
          <path d="M22 12L17 15V29L22 26V12Z" fill="#6CB2F7"/>
        </g>
        <g opacity="0.92">
          <path d="M22 8L27 11V35L22 32V8Z" fill="#1648D5"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M27 5L24.5 6.5L22 8L27 11L32 8L29.5 6.5L27 5Z" fill="url(#paint5_linear_88_13035)"/>
          <path d="M32 8L27 11V35L32 32V8Z" fill="#6CB2F7"/>
        </g>
        <defs>
          <linearGradient id="paint0_linear_88_13035" x1="163.418" y1="37.7838" x2="163.418" y2="9" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6991C7"/>
            <stop offset="1" stopColor="white"/>
          </linearGradient>
          <linearGradient id="paint1_linear_88_13035" x1="34" y1="25.9224" x2="-0.495479" y2="28.9481" gradientUnits="userSpaceOnUse">
            <stop stopColor="#62A9EE"/>
            <stop offset="1" stopColor="#2873EE" stopOpacity="0.19"/>
          </linearGradient>
          <linearGradient id="paint2_linear_88_13035" x1="9.5" y1="3" x2="9.5" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6CB2F7"/>
            <stop offset="1" stopColor="#6CB2F7" stopOpacity="0.21"/>
          </linearGradient>
          <linearGradient id="paint3_linear_88_13035" x1="8" y1="14" x2="8" y2="20" gradientUnits="userSpaceOnUse">
            <stop stopColor="#62A9EE"/>
            <stop offset="1" stopColor="#2873EE"/>
          </linearGradient>
          <linearGradient id="paint4_linear_88_13035" x1="17" y1="9" x2="17" y2="15" gradientUnits="userSpaceOnUse">
            <stop stopColor="#62A9EE"/>
            <stop offset="1" stopColor="#2873EE"/>
          </linearGradient>
          <linearGradient id="paint5_linear_88_13035" x1="27" y1="5" x2="27" y2="11" gradientUnits="userSpaceOnUse">
            <stop stopColor="#62A9EE"/>
            <stop offset="1" stopColor="#2873EE"/>
          </linearGradient>
        </defs>
      </svg>

    );
  }
}

export default function LogoIcon(props) {
  const [Component = DefaultLogoIcon] = PLUGIN_LOGO_ICON_COMPONENTS;
  return <Component {...props} />;
}
