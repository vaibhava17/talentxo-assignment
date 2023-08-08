import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './components/Button';
import Dropdown from './components/Dropdown';
import List from './components/List';
import DisplayNav from './components/DisplayNav';

function App() {
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [listData, setListData] = React.useState([]);
  const [count, setCount] = React.useState(0);

  const listScrollRef = React.useRef(null);

  const handleItemSelect = (e) => {
    setSelectedItem(e.target.id);
  };

  // scroll to selected item in to view when it changes or list data changes
  React.useEffect(() => {
    if (selectedItem && listScrollRef.current) {
      const index = listData.findIndex((item) => item.id === selectedItem);
      if (index > -1) {
        const item = listScrollRef.current.children[index];
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }

    if(listData.length > 0 && !selectedItem && listScrollRef.current) {
      const index = listData.length - 1;
      const item = listScrollRef.current.children[index];
      item.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    console.log(listScrollRef)
  }, [selectedItem, listData]);

  const handleAddItem = () => {
    const newItem = {
      label: `Item ${count + 1}`,
      onClick: handleItemSelect,
      id: `item${count + 1}`,
    };
    setCount(count + 1);
    setSelectedItem(null);
    setListData([...listData, newItem]);
  };

  const handlePrevious = () => {
    const index = listData.findIndex((item) => item.id === selectedItem);
    if (index > 0) {
      setSelectedItem(listData[index - 1].id);
    }
  };

  const handleNext = () => {
    const index = listData.findIndex((item) => item.id === selectedItem);
    if (index < listData.length - 1) {
      setSelectedItem(listData[index + 1].id);
    }
  };

  const handleDelete = () => {
    const index = listData.findIndex((item) => item.id === selectedItem);
    if (index > -1) {
      const newList = [...listData];
      newList.splice(index, 1);
      setListData(newList);
      if (index < newList.length) {
        setSelectedItem(newList[index].id);
      } else if (index > 0) {
        setSelectedItem(newList[index - 1].id);
      } else {
        setSelectedItem(null);
      }
    }
  };
  return (
    <div className="app">
      <Row>
        <Col>
          <Button
            label="Add New Item to List"
            className="mx-2 mt-2"
            onClick={() => handleAddItem()}
          />
        </Col>
      </Row>
      <Row>
        <Col span={12} className='col-auto'>
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
            listRef={listScrollRef}
            data={listData}
            activeItem={selectedItem}
            className="ms-sm-2 mx-2 mx-sm-0 my-2 border-top border-bottom rounded-3"
          />
        </Col>
        <Col sm={8}>
          <DisplayNav
            prevBtnProps={{
              label: "Previous Item",
              onClick: handlePrevious,
            }}
            nextBtnProps={{
              label: "Next Item",
              onClick: handleNext,
            }}
            className="my-2 me-sm-2 mx-2 mx-sm-0" />
          <Row className="my-2 me-sm-2 mx-2 mx-sm-0 box">
            <Col sm={12} className='p-0'>
              <div className='card h-100'>
                <div className='card-body justify-content-center align-items-center d-flex'>
                  {selectedItem ? (
                    `Selected Item: ${selectedItem}`
                  ) : (
                    "No Item Selected"
                  )}
                </div>
              </div>
            </Col>
          </Row>
          <Row className='mb-2 me-sm-2 mx-2 mx-sm-0'>
            <Col sm={12} className='text-end p-0'>
              <Button
                label="Delete Item"
                className="btn-danger"
                onClick={handleDelete}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
