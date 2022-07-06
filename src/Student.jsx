import Score from "./Score"

const Student = ({student}) => {
  return (
    <>
    <h1>{student.name}</h1>
    <p>{student.bio}</p>
    {student.scores.map(score =>
      <Score score={score}/>
    )}
    </>
   )
}
 
export default Student