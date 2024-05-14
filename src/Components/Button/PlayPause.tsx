import "../Button/PlayPause.css";
import { usePauseStore } from "../../store/menuStore";
import { swapPause } from "../../engine/events/pauseEvent";
import { stopTimer } from "../../engine/time/isTimer";

function PlayPause() {
  const{isPause,togglePause}=usePauseStore()

  const togglePlayPause = () => {
   togglePause()
   swapPause();
   stopTimer();
  };

  // const handleKeyPress = (event: { key: unknown }) => {
  //   if (event.key === " ") {
  //     togglePlayPause(); // Вызываем функцию переключения play/pause
  //   }
  // };

  return (
    <button className="play-button" onClick={togglePlayPause}>
      <i
        className={`fas fa-duotone  ${isPause ? "fa-play" : "fa-pause"}`}
      ></i>
    </button>
    // <div
    //   className={`playpause ${isPlaying ? "playing" : ""}`}
    //   onClick={togglePlayPause}
    //   onKeyDown={handleKeyPress} // Добавляем обработчик события нажатия клавиши
    //   tabIndex={0} // Делаем элемент фокусируемым для обработки клавиш
    // >
    //   <div className="button"></div>
    // </div>
  );
}

export default PlayPause;
