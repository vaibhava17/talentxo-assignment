import Button from './components/Button';
import Dropdown from './components/Dropdown';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import List from './components/List';

let listData = Array.from({ length: 23 }).map((_, i) => ({
  label: `Item ${i}`, onClick: (e) => console.log(`Item ${i} clicked!`, e.target.id), id: `item${i}`
}));

function App() {
  return (
    <div className="app">
      <Row>
        <Col>
          <Button
            label="Add New Item to List"
            className="mx-2 mt-2"
            onClick={() => console.log('Clicked!')}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Dropdown
            label="Jump to Item"
            menu={listData}
            className="mx-2 mt-2"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='mx-2 mt-5 line' />
        </Col>
      </Row>
      <Row>
        <Col sm={4}>
          <List
            data={listData}
            className="m-2 border-top border-bottom rounded-3"
          />
        </Col>
        <Col sm={8}>
          <div className='me-2 my-2' >
            Display Item Details
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
