import React, { useRef, createRef, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Box.css";
import Draggable from "react-draggable";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";

const MoreDetails = (props) => {
  const componentRef = useRef();
  const [elRefs, setElRefs] = useState([]);
  
  console.log(elRefs);

  const cardInfo = [
    {
      image:
        "https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png",
      title: "AB",
      text: "What is AB",
    },
    {
      image:
        "https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png",
      title: "AB",
      text: "What is AB",
    },
    {
      image:
        "https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png",
      title: "AB",
      text: "What is AB",
    },
    {
      image:
        "https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png",
      title: "AB",
      text: "What is AB",
    },
    {
      image:
        "https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png",
      title: "AB",
      text: "What is AB",
    },
    {
      image:
        "https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png",
      title: "AB",
      text: "What is AB",
    },
  ];
  useEffect(() => {
    setElRefs((elRefs) => props.data.map((_, i) => elRefs[i] || createRef()));
    console.log(elRefs);
  }, [props.data]);
  const rendercard = (card, index) => {
    return (
      <div>
        <Card
          ref={elRefs[index]}
          style={{
            width: "18rem",
            backgroundImage:'url('+props.img+')',
              // 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegKNCfRuMD_aPEPIHHUtwCvfnFyAzjpyaOQ&usqp=CAU")',
            backgroundRepeat: "no-repeat",
            backgroundSize:"cover",
            height:400
          }}
          key={index}
          className="box"
        >
          <Draggable>
            <Card.Img
              style={{
                width: 100,
                height: 100,
                alignItems: "center",
                marginTop: 50,
              }}
              variant="top"
              src="https://raw.githubusercontent.com/google/mediapipe/a908d668c730da128dfa8d9f6bd25d519d006692/mediapipe/modules/face_geometry/data/canonical_face_model_uv_visualization.png"
            />
          </Draggable>
          <Card.Body>
            <Draggable>
              <Card.Title style={{ color: "black",fontSize:16 }}>{card[0]}</Card.Title>
            </Draggable>
            <Draggable>
            <Card.Text style={{ color: "black",fontSize:13 }}>{card[1]}</Card.Text>
            </Draggable>
            <Draggable>
            <Card.Text style={{ color: "black" ,fontSize:13}}>{card[2]}</Card.Text>
            </Draggable>
            <Draggable>
            <Card.Text style={{ color: "black",fontSize:13 }}>{card[3]}</Card.Text>
            </Draggable>
          </Card.Body>
        </Card>
        <button onClick={() => exportComponentAsJPEG(elRefs[index])}>
          Download
        </button>
      </div>
    );
  };

  return <div className="grid">{props.data.map(rendercard)}</div>;
};
export default MoreDetails;
