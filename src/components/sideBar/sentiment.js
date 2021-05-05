import React from "react";
import { Card, Divider, Tag, Progress } from "antd";

const sentiment = () => {
  return (
    <Card className="stickySidebar">
      {" "}
      <Divider orientation="center">Sentiment</Divider>
      Over 10,000 tweets collected today and the sentiment analysis of those are
      below
      <div className="sentimentTag">
        <div className="tagClass">
          <Tag color="red-inverse">Angry</Tag>
          <Progress percent={30} />
        </div>
        <div className="tagClass">
          <Tag color="magenta-inverse">Frustrated</Tag>
          <Progress percent={30} />
        </div>

        <div className="tagClass">
          <Tag color="green-inverse">Happy</Tag>
          <Progress percent={30} />
        </div>
        <div className="tagClass">
          <Tag color="cyan-inverse">Neutral</Tag>
          <Progress percent={30} />
        </div>
      </div>
    </Card>
  );
};

export default sentiment;
