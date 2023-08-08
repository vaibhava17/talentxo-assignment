import Button from './components/Button';
import Dropdown from './components/Dropdown';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

let listData = [
  { label: 'Item 1', onClick: (e) => console.log('Item 1 clicked!', e.target.id), id: "item1" },
  { label: 'Item 2', onClick: (e) => console.log('Item 2 clicked!', e.target.id), id: "item2" },
]

function App() {
  return (
    <div className="app">
      <Row>
        <Col span={12}>
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
            menu={listData}
            className="mx-2 mt-2"
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
