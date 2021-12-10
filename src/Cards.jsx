import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from "./Data";
const Cards = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Carousel responsive={responsive}>
                            {Data.map((e,index) => {
                                return (
                                    <Card style={{ width: "18rem" }} key={index} className="shadow-lg">
                                        <Card.Img variant="top" className="card-img" src={e.source} />
                                        <Card.Body>
                                            <Card.Text>{e.desc}</Card.Text>
                                            <Button variant="primary">{e.link}</Button>
                                        </Card.Body>
                                    </Card>
                                );
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cards;
