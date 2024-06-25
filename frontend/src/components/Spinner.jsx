// Spinner.js
import { ClipLoader } from 'react-spinners';

const Spinner = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <ClipLoader color={'teal'} loading={true} size={150} />
  </div>
);

export default Spinner;
