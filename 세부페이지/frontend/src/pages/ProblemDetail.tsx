import { useParams } from 'react-router-dom';

function ProblemDetail() {
  const { id } = useParams();

  return (
    <div className="flex flex-col items-center justify-center pt-28">
      <h1>문제 세부 정보 페이지</h1>
      <p>문제 ID: {id}</p>
    </div>
  );
}

export default ProblemDetail;
