import React, { useLayoutEffect, useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navigation/navigation";
import Story from "./components/story/story";
import {
  Card,
  Layout,
  Skeleton,
  Row,
  Col,
  Pagination,
  Select,
  Divider,
  Tag,
  Progress,
} from "antd";
import Form from "./components/form/form";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Sentiment from "./components/sideBar/sentiment";

const FormComponent = () => (
  <Card>
    <Form />
  </Card>
);

function App() {
  const [storyData, setStory] = useState([]);
  const [dateFilter, setDateFilter] = useState("newest");
  const { Option } = Select;

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    // to get size of browser windows
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const fetch = async () => {
      const data = await axios.post("https://newsscrapperr.herokuapp.com", {
        sortByDate: "newest",
      });
      setStory(data.data);
    };
    fetch();
  }, []);

  const Stories = () => (
    <>
      {storyData.length > 0 ? (
        storyData.map((item) => <Story data={item} key={item.dateTime} />)
      ) : (
        <div>
          {[1, 2, 3, 4].map((item) => (
            <div key={item}>
              {" "}
              <Card>
                <Skeleton active />
              </Card>
            </div>
          ))}
        </div>
      )}
    </>
  );
  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleDateFilter = async (value) => {
    setStory([]);
    setDateFilter(value);
    const data = await axios.post("https://newsscrapperr.herokuapp.com", {
      sortByDate: value,
    });
    setStory(data.data);
  };

  const HomePage = () => (
    <Layout>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={size[0] > 1400 ? 4 : 6}
          offset={size[0] > 1400 ? 3 : 1}
        >
          <Card className="stickySidebar">
            <Divider orientation="center">Filter</Divider>
            <Select
              placeholder="Date"
              style={{ width: "100%" }}
              onChange={handleDateFilter}
              value={dateFilter && dateFilter}
            >
              <Option value="newest">Newest</Option>
              <Option value="oldest">Oldest</Option>
            </Select>
            <br />
            <Select
              placeholder="Sentiment"
              style={{ width: "100%", marginTop: "10px" }}
              onChange={handleChange}
            >
              <Option value="lucy">Happy</Option>
              <Option value="disabled" disabled>
                Sad
              </Option>
              <Option value="Yiminghe">Panicked</Option>
            </Select>
          </Card>
        </Col>
        <Col className="gutter-row" span={size[0] > 1400 ? 10 : 10}>
          <Stories />
        </Col>

        <Col className="gutter-row" span={size[0] > 1400 ? 4 : 6}>
          <Sentiment />
        </Col>
      </Row>
    </Layout>
  );
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/addStory" component={FormComponent} />
    </Router>
  );
}

export default App;
