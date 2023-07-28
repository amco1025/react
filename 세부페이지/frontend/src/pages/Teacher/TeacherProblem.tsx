import axios from 'axios';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const subjects = [
  {
    label: '수학',
    value: 100,
    subSubjects: [
      { label: '수1', value: 10 },
      { label: '수2', value: 20 },
      { label: '확률과 통계', value: 30 },
      { label: '기하', value: 40 },
    ],
  },
  {
    label: '과학',
    value: 200,
    subSubjects: [
      { label: '물리', value: 10 },
      { label: '화학', value: 20 },
      { label: '생명', value: 30 },
      { label: '지구', value: 40 },
    ],
  },
];

function TeacherProblem(): JSX.Element {
  const [subjectNum, setSubjectNum] = useState(0);
  const [subSubjectNum, setSubSubjectNum] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubjectChange = (selectedSubject) => {
    setSubjectNum(selectedSubject.value);
  };

  const handleSubSubjectChange = (selectedSubSubject) => {
    setSubSubjectNum(selectedSubSubject.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    console.log(subjectNum);
    console.log(subSubjectNum);
    console.log(searchTerm);
    const response = await axios.get(
      `YOUR_API_URL/filter?masterCode=${subjectNum}&subCode=${subSubjectNum}&term=${searchTerm}`,
    );
    console.log(response.data);
    setSubjectNum(0);
    setSubSubjectNum(0);
    setSearchTerm('');
  };

  return (
    <div className="flex flex-col items-center justify-center pt-28">
      <div className="w-full mb-4 text-center">
        <h1 className="text-black text-3xl">전체 문제 목록 보기</h1>
      </div>
      <div className="w-full flex space-x-4 mt-4 justify-center">
        <div className="flex-grow flex items-center space-x-2 w-full flex-wrap-nowrap justify-center">
          <span>과목 선택: </span>
          <Dropdown
            className="text-black"
            options={subjects}
            onChange={handleSubjectChange}
            placeholder="과목 선택"
          />
        </div>
        <div className="flex-grow flex items-center space-x-2 w-full flex-wrap-nowrap justify-center">
          <span>세부 과목 선택: </span>
          <Dropdown
            className="text-black"
            options={
              subjects.find((subject) => subject.value === subjectNum)
                ?.subSubjects || []
            }
            onChange={handleSubSubjectChange}
            placeholder="세부 과목 선택"
          />
        </div>
        <div className="flex-grow flex items-center space-x-2 w-full flex-wrap-nowrap justify-center">
          <span>검색어: </span>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchTermChange}
            placeholder="검색어 입력"
          />
        </div>
        <div className="flex-grow w-full text-center">
          <button
            className="px-3 py-2 border rounded text-black border-black"
            onClick={handleSearch}
          >
            검색
          </button>
        </div>
      </div>
    </div>
  );
}

export default TeacherProblem;
