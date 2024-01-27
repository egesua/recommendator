import { Icon } from "Icons"
import { useAudio } from "react-use";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useMemo } from "react";



function Player() {

  const [audio, state, controls, ref] = useAudio({
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    autoPlay: true,
  });

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted)
      return 'mute'

    if (state.volume > 0)
      return 'normalVol'
  }, [state.volume, state.muted])

    return (
      <div className=" flex px-4 justify-between items-center h-full">
        <div className="min-w-[11.25rem] w-[30%]">
          sol
        </div>
        <div className="max-w-[45.125] w-[40%] flex flex-col items-center">
          <div className="flex items-center gap-x-2">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="shuffle" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="playerPrev" />
            </button>
            <button onClick={state?.playing ? controls.pause : controls.play} className="w-8 h-8 bg-white flex items-center justify-center text-black rounded-full hover:scale-[1.06]">
              <Icon size={16} name={state?.playing ? 'pause' : 'play'} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="playerNext" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name="repeat" />
            </button>
          </div>
          <div className="w-full flex items-center gap-x-2">
            {audio}
            <div>
              {secondsToTime(state?.time)}
            </div>
            <CustomRange
              step={0.1}
              min={0}
              max={state?.duration || 1}
              value={state?.time}
              onChange={value => controls.seek(value)}
             />
            <div>
              {secondsToTime(state?.duration)}
            </div>
          </div>
        </div>
        <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button onClick={controls[state.muted ? 'normalVol' : 'mute']} className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <Icon size={16} name={volumeIcon} />
            </button>
        <div className="w-[5.813rem] max-w-full ">
        <CustomRange 
          step={0.01}
          min={0}
          max={1}
          value={state.muted ? '0' : state?.volume}
          onChange={value => {
            controls.unmute()
            controls.volume(value)}}
        />
        </div>
        </div>
      </div>
    );
}

export default Player