import { useNavigate } from 'react-router-dom';
import Navbar from '../layouts/Navbar';



const HomePage = () => {
    const navigate = useNavigate();

    return (
        
        <div>
              <Navbar /> 
            <h1>welcome first edu lanka </h1>
            <button onClick={() => navigate('/ExamTablePage')}>VIEW Exam</button>
            <button onClick={() => navigate('/ExamFormPage')}>ADD Exam</button>
          
        </div>
    )
}
export default HomePage;