import React from "react";
import { Card, List, Row, Col } from "antd";
import CountdownClock from "./CountDownClock";

const DiscussionCard = ({ discussion, onButtonClick, buttonText }) => {
  return (
    <Card title={`Discussion: ${discussion.title}`} bordered>
      <p>
        <strong>Description:</strong> {discussion.description}
      </p>
      <p>
        <strong>Start Date:</strong>{" "}
        {new Date(discussion.startDate).toLocaleString()}
      </p>
      <p>
        <strong>End Date:</strong> {new Date(discussion.endDate).toLocaleString()}
      </p>
      <p>Has Voting Started?</p> {discussion.hasVotingStarted ? "Yes" : "No"}
      <p>Has Voting Ended?</p> {discussion.hasVotingEnded ? "Yes" : "No"}
      <p>Has Emails Been Sent?</p> {discussion.hasEmailsSent ? "Yes" : "No"}

      <CountdownClock endDate={discussion.endDate} />

      {/* Pros and Cons Side by Side */}
      <Row gutter={[16, 16]} style={{ marginTop: 20 }}>
        <Col span={12}>
          <Card title="Pros" bordered>
            {discussion.prosComments.length > 0 ? (
              <List
                dataSource={discussion.prosComments}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            ) : (
              <p>No comments yet.</p>
            )}
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Cons" bordered>
            {discussion.consComments.length > 0 ? (
              <List
                dataSource={discussion.consComments}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            ) : (
              <p>No comments yet.</p>
            )}
          </Card>
        </Col>
      </Row>

      {onButtonClick && buttonText && (
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <button className="ant-btn ant-btn-primary" onClick={onButtonClick}>
            {buttonText}
          </button>
        </div>
      )}
    </Card>
  );
};

export default DiscussionCard;
