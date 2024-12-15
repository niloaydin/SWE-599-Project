import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Spin, notification, Modal } from "antd";
import axios from "axios";
import BASE_URL from "../config/baseUrl";
import DiscussionCard from "../components/DiscussionCard";
import CreateCollectorGroup from "../components/CreateCollectorGroup";

const AdminDiscussionPage = () => {
    const { discussionLink, adminLink } = useParams();
    const [discussion, setDiscussion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const navigate = useNavigate();

    const fetchDiscussion = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${BASE_URL}/discussion/${discussionLink}/${adminLink}`
            );
            setDiscussion(response.data.message);
        } catch (error) {
            notification.error({
                message: "Error",
                description: error.response?.data?.error || "Something went wrong.",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDiscussion();
    }, [discussionLink, adminLink]);

    const handleCreateCollector = () => {
        setIsModalVisible(true);
    };

    const handleModalClose = () => {
        setIsModalVisible(false);
    };



    if (loading) {
        return (
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <Spin size="large" />
            </div>
        );
    }

    if (!discussion) {
        return <p>No discussion found!</p>;
    }

    return (
        <div style={{ maxWidth: 1000, margin: "auto", marginTop: 50 }}>
            <button onClick={() => navigate(`/`)}>Create Discussion</button>

            <DiscussionCard
                discussion={discussion}
                buttonText="Create Collector Group"

            />
            {!discussion.isVotingStarted && (
                <button
                    className="ant-btn ant-btn-primary"
                    style={{ marginTop: 20, display: "block", margin: "0 auto" }}
                    onClick={handleCreateCollector}
                >
                    Create Collector Group
                </button>
            )}

            <Modal
                title="Create Collector Group"
                visible={isModalVisible}
                onCancel={handleModalClose}
                footer={null} // Remove default footer
            >
                <CreateCollectorGroup
                    discussionLink={discussionLink}
                    adminLink={adminLink}
                    onCollectorCreated={fetchDiscussion} 
                    onClose={handleModalClose} 
                />
            </Modal>
        </div>
    );
};

export default AdminDiscussionPage;
