import {Html, useProgress} from '@react-three/drei'


const Loader = () => {

  const {progress} = useProgress();
  
  return (
    <Html>
      <span className="canvas-load"></span>
      <p style={{
        fontSize: 16,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40
      }}>{progress.toFixed(2)}%</p>
    </Html>
  )
}

//basically this loader makes a percentage in the middle of the screen while the modal is loading
//and once it's ready, the numbers will desappear and the modal will show up.

export default Loader