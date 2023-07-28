import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {
  latestProblemsSelector,
  relatedProblemsSelector,
} from '../../recoil/problem/Problem';
import { useNavigate } from 'react-router-dom';

function Teacher() {
  const navigate = useNavigate();
  const latestProblems = useRecoilValue(latestProblemsSelector);
  const relatedProblems = useRecoilValue(relatedProblemsSelector);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [latestProblemsPage, setLatestProblemsPage] = useState(0);
  const [relatedProblemsPage, setRelatedProblemsPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const banners = [1, 2, 3, 4, 5];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % banners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [banners.length]);

  useEffect(() => {
    if (latestProblems && relatedProblems) {
      setIsLoading(false);
    }
  }, [latestProblems, relatedProblems]);

  const renderProblem = (problem) => (
    <div>
      <img
        src={problem.imageUrl}
        alt={problem.title}
        style={{ width: '100%', aspectRatio: '1/1' }}
      />
      <div>{problem.title}</div>
      <div>{new Date(problem.time).toLocaleString()}</div>
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {isLoading && <div>Loading...</div>}
      <div className="w-full overflow-hidden h-48 flex items-center justify-center bg-gray-200 text-2xl font-bold mb-8 relative">
        {banners.map((banner, idx) => (
          <div
            key={idx}
            className={`absolute w-full h-full flex items-center justify-center ${
              idx === currentSlide
                ? 'opacity-100 transition-opacity duration-1000'
                : 'opacity-0'
            }`}
          >
            {banner}
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full">
        <div
          className="w-1/2 p-4 text-center border-r-2 border-gray-200 flex flex-col justify-between"
          style={{ minHeight: '550px' }}
        >
          <div>
            <h2 className="text-xl font-bold mb-4">최신 문제</h2>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              {latestProblems
                ?.slice(latestProblemsPage * 3, (latestProblemsPage + 1) * 3)
                .map(renderProblem)}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              style={{ marginTop: '10px', padding: '4px 8px', width: '70px' }}
              onClick={() => setLatestProblemsPage((prev) => prev + 1)}
            >
              다음
            </button>
          </div>
        </div>
        <div
          className="w-1/2 p-4 text-center flex flex-col justify-between"
          style={{ minHeight: '550px' }}
        >
          <div>
            <h2 className="text-xl font-bold mb-4">관련 문제</h2>
            <div
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}
            >
              {relatedProblems
                ?.slice(relatedProblemsPage * 3, (relatedProblemsPage + 1) * 3)
                .map(renderProblem)}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              style={{ marginTop: '10px', padding: '4px 8px', width: '70px' }}
              onClick={() => setRelatedProblemsPage((prev) => prev + 1)}
            >
              다음
            </button>
          </div>
        </div>
      </div>
      <button
        className="mb-100 py-2 px-4 mt-20 bg-blue-500 text-white text-lg font-bold rounded"
        onClick={() => navigate('/teacher/problem')}
      >
        모든문제 보러가기
      </button>
    </div>
  );
}

export default Teacher;
