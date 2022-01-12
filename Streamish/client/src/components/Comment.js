import React from "react";
import { Card, CardBody } from "reactstrap";

const Comment = ({ comment }) => {
    return (
        <Card >

            <CardBody>
                <p>{comment.message}</p>
            </CardBody>
        </Card>
    );
};

export default Comment;