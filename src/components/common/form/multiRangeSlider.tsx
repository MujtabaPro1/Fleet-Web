import {
  ChangeEvent,
  FC,
  useCallback,
  useEffect,
  useState,
  useRef
} from "react";
import classnames from "classnames";
import styles from '../../../styles/components/MultiRangeSlider.module.scss';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (values: { min: number; max: number }) => void;
}

const MultiRangeSlider: FC<MultiRangeSliderProps> = ({ min, max, onChange }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement>(null);
  const maxValRef = useRef<HTMLInputElement>(null);
  const range = useRef<HTMLDivElement>(null);

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Update range bar
  useEffect(() => {
    if (range.current && minValRef.current && maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(maxVal);
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, maxVal, getPercent]);

  // Trigger onChange only when drag ends
  const handleDragEnd = () => {
    onChange({ min: minVal, max: maxVal });
  };

  return (
    <div className={styles.MultiRangeSlider}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = Math.min(+e.target.value, maxVal - 1);
          setMinVal(value);
        }}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        className={classnames(styles.thumb, styles.thumb__zindex_3)}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const value = Math.max(+e.target.value, minVal + 1);
          setMaxVal(value);
        }}
        onMouseUp={handleDragEnd}
        onTouchEnd={handleDragEnd}
        className={classnames(styles.thumb, styles.thumb__zindex_4)}
      />

      <div className={styles.slider}>
        <div className={styles.slider__track}></div>
        <div ref={range} className={styles.slider__range}></div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
