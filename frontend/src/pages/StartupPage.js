import { useNavigate } from 'react-router-dom';


const StartupPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>welcome first edu lanka </h1>
            <button onClick={() => navigate('/ExamTablePage')}>VIEW Exam</button>

        </div>
    )
}
export default StartupPage;