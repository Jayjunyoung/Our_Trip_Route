import React, { ChangeEvent, useState, useEffect } from 'react';
import { Button, Input } from '@mui/material';
import useTourismDataStore, {
  TourismItem,
} from '../../stores/useTourismDataStore';

interface DayRouteProps {
  day: string;
  selectedTourismItem: TourismItem | null;
}

const TripRouteCard: React.FC<DayRouteProps> = ({
  day,
  selectedTourismItem,
}) => {
  const [keywords, setKeywords] = useState<string[]>(['']);
  const [selectedData, setSelectedData] = useState<(TourismItem | null)[]>([]);
  const [confirmedData, setConfirmedData] = useState<TourismItem[]>([]);
  const [disabledInputs, setDisabledInputs] = useState<boolean[]>([]);
  const [showConfirmIndex, setShowConfirmIndex] = useState<number | null>(null);
  const { fetchTourismDataByKeyword, clearTourismData } = useTourismDataStore();
  const ariaLabel = { 'aria-label': 'description' };

  const handleInputChange = (
    index: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const newKeywords = [...keywords];
    newKeywords[index] = e.target.value;
    setKeywords(newKeywords);
    fetchTourismDataByKeyword(e.target.value);
    setShowConfirmIndex(index);
  };

  const handleAddInput = () => {
    setKeywords([...keywords, '']);
    setSelectedData([...selectedData, null]);
    setDisabledInputs([...disabledInputs, false]);
    setShowConfirmIndex(null);
  };

  const handleRemoveInput = (index: number) => {
    const newKeywords = [...keywords];
    const newSelectedData = [...selectedData];
    const newDisabledInputs = [...disabledInputs];
    newKeywords.splice(index, 1);
    newSelectedData.splice(index, 1);
    newDisabledInputs.splice(index, 1);
    setKeywords(newKeywords);
    setSelectedData(newSelectedData);
    setDisabledInputs(newDisabledInputs);
    confirmedData.splice(index, 1);
    if (showConfirmIndex === index) {
      setShowConfirmIndex(null);
    }
  };

  const handleConfirm = () => {
    const newConfirmedData = selectedData.filter(
      (data) => data !== null,
    ) as TourismItem[];
    setConfirmedData((prevConfirmedData) => [
      ...prevConfirmedData,
      ...newConfirmedData,
    ]);
    const newDisabledInputs = [...disabledInputs];
    if (showConfirmIndex !== null) {
      newDisabledInputs[showConfirmIndex] = true;
    }
    setDisabledInputs(newDisabledInputs);
    setSelectedData([]);
    setShowConfirmIndex(null);
    clearTourismData();
  };

  useEffect(() => {
    if (selectedTourismItem && showConfirmIndex !== null) {
      const newSelectedData = [...selectedData];
      newSelectedData[showConfirmIndex] = selectedTourismItem;
      setSelectedData(newSelectedData);
    }
  }, [selectedTourismItem, showConfirmIndex]);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white shadow-lg border-2 border-gray-400 p-6 w-[850px] min-w-[850px]">
        <div className="text-xl font-bold mb-4">{day}</div>
        {keywords.map((keyword, index) => (
          <div key={index} className="flex flex-col mb-4">
            <div className="flex justify-between items-center space-x-4 mb-2">
              <Input
                placeholder="Placeholder"
                inputProps={ariaLabel}
                value={keyword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleInputChange(index, e)
                }
                disabled={disabledInputs[index]}
              />
              <Button variant="outlined" onClick={handleAddInput}>
                장소추가
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={() => handleRemoveInput(index)}
                disabled={keywords.length === 1} // 입력 필드가 1개일 때 삭제 버튼 비활성화
              >
                장소삭제
              </Button>
            </div>
          </div>
        ))}
        {confirmedData.map((data, index) => (
          <div key={data.contentid} className="mt-2">
            <strong>선택된 장소:</strong> {data.title}
          </div>
        ))}
        {selectedTourismItem && showConfirmIndex !== null && (
          <div className="w-full flex justify-end">
            <Button variant="contained" color="primary" onClick={handleConfirm}>
              확인
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TripRouteCard;
