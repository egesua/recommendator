const PrevIcon = ({ size }) => {
  return (
    <svg 
      fill="currentColor" 
      height={size} 
      width={size} 
      version="1.1" 
      id="Capa_1" 
      xmlns="http://www.w3.org/2000/svg" 
	    viewBox="0 0 219.151 219.151" 
      xmlSpace="preserve">
<g>
	<path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575
		C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575
		c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"/>
	<path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008
		c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825
		c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628
		c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"/>
</g>
</svg>
  );
};

const NextIcon = ({ size }) => {
  return (
    <svg
      fill="currentColor"
      height={size}
      width={size}
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 219.15 219.15"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M109.575,0C49.156,0,0.002,49.155,0.002,109.576c0,60.419,49.154,109.574,109.573,109.574s109.573-49.155,109.573-109.574
		C219.148,49.155,169.994,0,109.575,0z M109.575,204.15c-52.148,0-94.573-42.426-94.573-94.574C15.002,57.427,57.427,15,109.575,15
		s94.573,42.427,94.573,94.576C204.148,161.725,161.723,204.15,109.575,204.15z"
        />
        <path
          d="M124.29,62.645c-2.929-2.928-7.678-2.928-10.606,0c-2.929,2.93-2.929,7.678,0,10.607l28.821,28.82l-83.457,0.008
		c-4.143,0-7.5,3.358-7.5,7.501c0,4.142,3.358,7.499,7.5,7.499l83.46-0.008l-28.827,28.825c-2.929,2.929-2.929,7.678,0,10.606
		c1.464,1.465,3.384,2.197,5.303,2.197c1.919,0,3.839-0.732,5.303-2.196l41.629-41.627c1.407-1.407,2.197-3.314,2.197-5.304
		c0-1.989-0.79-3.897-2.197-5.304L124.29,62.645z"
        />
      </g>
    </svg>
  );
};

const DownDirIcon = ({ size }) => {
  return(
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M3 6l5 5.794L13 6z" />
    </svg>
  )
}

const PlayIcon = ({ size }) => {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
        <polygon points="21.57 12 5.98 3 5.98 21 21.57 12" fill="currentColor" />
    </svg>
  )
}

const PauseIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path fill="none" d="M0 0h16v16H0z" />
      <path d="M3 2h3v12H3zm7 0h3v12h-3z" fill="currentColor"/>
    </svg>
  )
}

const PlayerPrevIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z" fill="currentColor"/>
    </svg>
  ) 
}

const PlayerNextIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z" fill="currentColor"/>
    </svg>
  ) 
}

const ShuffleIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z" fill="currentColor"/>
    </svg>
  ) 
}

const RepeatIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4
      1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.
      8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11
      15 8.5c0-.6-.1-1.2-.4-1.8z" fill="currentColor"/>
    </svg>
  ) 
}

const HeartIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.885l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z" fill="currentColor" />
    </svg>
  ) 
}

const VolumeMuteIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.0
      72L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L1
      2.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8
      l2.146-2.147z" fill="currentColor" />
    </svg>
  ) 
}

const VolumeNormalIcon = ({size}) => {
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929
      2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.
      957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496
      2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z" fill="currentColor" />
    </svg>
  ) 
}

const Icon = ({ name, size }) => {
  const icons = {
    prev: PrevIcon,
    next: NextIcon,
    downDir: DownDirIcon,
    play: PlayIcon,
    pause: PauseIcon,
    playerPrev: PlayerPrevIcon,
    playerNext: PlayerNextIcon,
    shuffle: ShuffleIcon,
    repeat: RepeatIcon,
    heart: HeartIcon,
    mute: VolumeMuteIcon,
    normalVol: VolumeNormalIcon
  };

  const Component = icons[name];
  return <Component size={size} />;
};

export { Icon };
