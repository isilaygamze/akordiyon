import './veri.js'
import Card from './Card.jsx'
import questions from './veri.js'
import "./app.css"

function App() {
    return (
        <>
        <div className='cerceve'>
        <h1>Questions And Answers About Login</h1>
        {questions.map((question)=>{return <Card title={question.title} info = {question.info}/> })}
        </div>
        
        </>
    )
}
export default App